#pragma once

#include "SinglePortModule.h"
#include "concurrency/OSThread.h"
#include "configuration.h"
#include <Arduino.h>
#include <functional>

class SendRoutineMessageModule : private concurrency::OSThread
{
    bool firstTime = 1;

  public:
    SendRoutineMessageModule();

  protected:
    virtual int32_t runOnce() override;
};

extern SendRoutineMessageModule *sendRoutineMessageModule;

/*
 * Radio interface for SendRoutineMessageModule
 *
 */
class SendRoutineMessageModuleRadio : public SinglePortModule
{
    uint32_t lastRxID = 0;
    // The id of the last packet we sent, to allow us to cancel it if we make something fresher
    PacketId prevPacketId = 0;
  public:
    SendRoutineMessageModuleRadio() : SinglePortModule("SendRoutineMessageModuleRadio", PortNum_TEXT_MESSAGE_APP)
    {
        loopbackOk = true; // Allow locally generated messages to loop back to the client
    }

    /**
     * Send our payload into the mesh
     */
    void sendPayload(NodeNum dest = NODENUM_BROADCAST, bool wantReplies = false);

  protected:
    virtual MeshPacket *allocReply() override;

    /** Called to handle a particular incoming message

    @return ProcessMessage::STOP if you've guaranteed you've handled this message and no other handlers should be considered for
    it
    */
    virtual ProcessMessage handleReceived(const MeshPacket &mp) override;
};

extern SendRoutineMessageModuleRadio *sendRoutineMessageModuleRadio;
