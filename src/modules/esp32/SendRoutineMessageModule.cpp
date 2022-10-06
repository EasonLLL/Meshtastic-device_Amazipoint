#include "SendRoutineMessageModule.h"
#include "MeshService.h"
#include "NodeDB.h"
#include "PowerFSM.h"
#include "RTC.h"
#include "Router.h"
#include "airtime.h"
#include "configuration.h"
#include "gps/GeoCoord.h"
#include <Arduino.h>
#include <FSCommon.h>
//#include <assert.h>

/*
    As a sender, I can send packets every n-seonds. These packets include an incramented PacketID.
    As a receiver, I can receive packets from multiple senders. These packets can be saved to the Filesystem.
*/

SendRoutineMessageModule *sendRoutineMessageModule;
SendRoutineMessageModuleRadio *sendRoutineMessageModuleRadio;

SendRoutineMessageModule::SendRoutineMessageModule() : concurrency::OSThread("SendRoutineMessageModule") {}

uint32_t debugpacketSequence = 0;

#define SEC_PER_DAY 86400
#define SEC_PER_HOUR 3600
#define SEC_PER_MIN 60

bool routine_message_enabled; //Eason add
uint32_t routine_message_sender; //Eason add    //sender message per time 
int32_t SendRoutineMessageModule::runOnce()
{
#ifdef ARCH_ESP32

    /*
        Uncomment the preferences below if you want to use the module
        without having to configure it from the PythonAPI or WebUI.
    */

    routine_message_enabled = 1;
    routine_message_sender  = 60; //sent message every 60s 
    uint32_t senderHeartbeat = routine_message_sender * 1000;

    config.position.position_broadcast_secs = 60;
    config.position.position_broadcast_smart_disabled = 0;
    //GPS喚醒時間, 也就是搜尋GPS衛星 最多花費多少時間
    config.position.gps_attempt_time = 60;          //Get how long we should stay looking for each aquisition in secs
    //GPS休眠時間
    config.position.gps_update_interval  = 120;     //Get how long we should sleep between aqusition attempts in secs

    if (routine_message_enabled) {

        if (firstTime) {
            sendRoutineMessageModuleRadio = new SendRoutineMessageModuleRadio();

            firstTime = 0;

            if (routine_message_sender) {
                DEBUG_MSG("Initializing Routine Message Module -- Sender\n");
                return (5000); // Sending first message 5 seconds after initilization.
            } else {
                DEBUG_MSG("Initializing Routine Message Module -- Receiver\n");
                return (500);
            }

        } else {

            if (routine_message_sender && Device_debug_mode_enable_f) {
                // If sender
                DEBUG_MSG("Routine Message Module - Sending heartbeat every %d ms\n", (senderHeartbeat));

                DEBUG_MSG("gpsStatus->getLatitude()     %d\n", gpsStatus->getLatitude());
                DEBUG_MSG("gpsStatus->getLongitude()    %d\n", gpsStatus->getLongitude());
                DEBUG_MSG("gpsStatus->getHasLock()      %d\n", gpsStatus->getHasLock());
                DEBUG_MSG("gpsStatus->getDOP()          %d\n", gpsStatus->getDOP());
                DEBUG_MSG("gpsStatus->getHasLock()      %d\n", gpsStatus->getHasLock());
                DEBUG_MSG("pref.fixed_position()        %d\n", config.position.fixed_position);

                /*
                // Only send packets if the channel is less than 25% utilized.
                if (airTime->channelUtilizationPercent() < 25) {
                    sendRoutineMessageModuleRadio->sendPayload();
                } else {
                    DEBUG_MSG("rangeTest - Channel utilization is >25 percent. Skipping this opportunity to send.\n");
                }
                */
                sendRoutineMessageModuleRadio->sendPayload();   //eason modify
                return (senderHeartbeat);
            } else {
                // Otherwise, we're a receiver.

                return (500);
            }
            // TBD
        }

    } else {
        DEBUG_MSG("Routine Message Module - Disabled\n");
    }

#endif
    return (INT32_MAX);
}

MeshPacket *SendRoutineMessageModuleRadio::allocReply()
{

    auto reply = allocDataPacket(); // Allocate a packet for sending

    return reply;
}

void SendRoutineMessageModuleRadio::sendPayload(NodeNum dest, bool wantReplies)
{

    // cancel any not yet sent (now stale) position packets
    if (prevPacketId) // if we wrap around to zero, we'll simply fail to cancel in that rare case (no big deal)
        service.cancelSending(prevPacketId);

    MeshPacket *p = allocReply();
    p->to = NODENUM_BROADCAST;
    p->decoded.want_response = wantReplies;
    p->priority = MeshPacket_Priority_BACKGROUND;
    prevPacketId = p->id;

    User &u = owner;
    DEBUG_MSG("sending owner %s/%s/%s\n", u.id, u.long_name, u.short_name);

    static char heartbeatString[30];
    // if latitude longitude =0 0, GPS can not get position
    //if(gpsStatus->getLatitude() == 0 && gpsStatus->getLongitude() == 0)
    if(!gpsStatus->getHasLock())
    {
        snprintf(heartbeatString, sizeof(heartbeatString), "%s/CAN'T GET GPS", u.long_name);
    }
    else
    {
        snprintf(heartbeatString, sizeof(heartbeatString), "%s/TEST %u", u.long_name, debugpacketSequence++);
    }

    p->decoded.payload.size = strlen(heartbeatString); // You must specify how many bytes are in the reply
    memcpy(p->decoded.payload.bytes, heartbeatString, p->decoded.payload.size);


    //service.refreshMyNodeInfo();    //eason add..
    //service.sendToMesh(p);
    service.sendToMesh(p, RX_SRC_LOCAL, true);  //Eason add , sendToMesh Test OK
    // TODO: Handle this better. We want to keep the phone awake otherwise it stops sending.
    powerFSM.trigger(EVENT_CONTACT_FROM_PHONE);
}

ProcessMessage SendRoutineMessageModuleRadio::handleReceived(const MeshPacket &mp)
{
#ifdef ARCH_ESP32

    if (moduleConfig.range_test.enabled) {

        
        auto &p = mp.decoded;
        DEBUG_MSG("Received text msg self=0x%0x, from=0x%0x, to=0x%0x, id=%d, msg=%.*s\n",
                  nodeDB.getNodeNum(), mp.from, mp.to, mp.id, p.payload.size, p.payload.bytes);
        

        if (getFrom(&mp) != nodeDB.getNodeNum()) {
            NodeInfo *n = nodeDB.getNode(getFrom(&mp));
            DEBUG_MSG("-----------------------------------------\n");
            DEBUG_MSG("p.payload.bytes  \"%s\"\n", p.payload.bytes);
            DEBUG_MSG("p.payload.size   %d\n", p.payload.size);
            DEBUG_MSG("---- Received Packet:\n");
            DEBUG_MSG("mp.from          %d\n", mp.from);
            DEBUG_MSG("mp.rx_snr        %f\n", mp.rx_snr);
            DEBUG_MSG("mp.hop_limit     %d\n", mp.hop_limit);
            // DEBUG_MSG("mp.decoded.position.latitude_i     %d\n", mp.decoded.position.latitude_i); // Depricated
            // DEBUG_MSG("mp.decoded.position.longitude_i    %d\n", mp.decoded.position.longitude_i); // Depricated
            DEBUG_MSG("---- Node Information of Received Packet (mp.from):\n");
            DEBUG_MSG("n->user.long_name         %s\n", n->user.long_name);
            DEBUG_MSG("n->user.short_name        %s\n", n->user.short_name);
            DEBUG_MSG("n->user.macaddr           %X\n", n->user.macaddr);
            DEBUG_MSG("n->has_position           %d\n", n->has_position);
            DEBUG_MSG("n->position.latitude_i    %d\n", n->position.latitude_i);
            DEBUG_MSG("n->position.longitude_i   %d\n", n->position.longitude_i);
            DEBUG_MSG("---- Current device location information:\n");
            DEBUG_MSG("gpsStatus->getLatitude()     %d\n", gpsStatus->getLatitude());
            DEBUG_MSG("gpsStatus->getLongitude()    %d\n", gpsStatus->getLongitude());
            DEBUG_MSG("gpsStatus->getHasLock()      %d\n", gpsStatus->getHasLock());
            DEBUG_MSG("gpsStatus->getDOP()          %d\n", gpsStatus->getDOP());
            DEBUG_MSG("-----------------------------------------\n"); 
        }

    } else {
        DEBUG_MSG("Routine Message Module Disabled\n");
    }

#endif

    return ProcessMessage::CONTINUE; // Let others look at this message also if they want
}
