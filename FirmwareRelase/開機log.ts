
//\ E S H T /\ S T / C

??:??:?? 0 booted, wake cause 0 (boot count 1), reset_reason=reset
??:??:?? 0 Filesystem files:
??:??:?? 0   /prefs/channels.proto (53 Bytes)
??:??:?? 0   /prefs/config.proto (49 Bytes)
??:??:?? 0   /prefs/db.proto (184 Bytes)
??:??:?? 0   /prefs/module.proto (16 Bytes)
??:??:?? 0   /static/Logo_Black.svg.gz (592 Bytes)
??:??:?? 0   /static/icon.svg.gz (842 Bytes)
??:??:?? 0   /static/index.2759ba5d.js.gz (347 Bytes)
??:??:?? 0   /static/index.91d8d154.css.gz (9919 Bytes)
??:??:?? 0   /static/index.f7b57aee.js.gz (444182 Bytes)
??:??:?? 0   /static/index.html.gz (538 Bytes)
??:??:?? 0   /static/robots.txt.gz (42 Bytes)
??:??:?? 0   /static/site.webmanifest.gz (196 Bytes)
??:??:?? 0 I2C device found at address 0x34
??:??:?? 0 axp192 PMU found
??:??:?? 0 I2C device found at address 0x3c
??:??:?? 0 0x3 subtype probed in 2 tries
??:??:?? 0 ssd1306 display found
??:??:?? 0 2 I2C devices found
??:??:?? 0 Meshtastic hwvendor=4, swver=1.3.40.b96b817e-d
??:??:?? 0 Setting random seed 1038912939
??:??:?? 0 Total heap: 239444
??:??:?? 0 Free heap: 208028
??:??:?? 0 Total PSRAM: 0
??:??:?? 0 Free PSRAM: 0
??:??:?? 0 NVS: UsedEntries 90, FreeEntries 540, AllEntries 630, NameSpaces 3
??:??:?? 0 Setup Preferences in Flash Storage
??:??:?? 0 Number of Device Reboots: 15
??:??:?? 0 Initializing NodeDB
??:??:?? 0 Loading /prefs/db.proto
??:??:?? 0 Loaded saved devicestate version 16
??:??:?? 0 [Eason] Loaded From Disk
??:??:?? 0 Loading /prefs/config.proto
??:??:?? 0 Loaded saved config version 16
??:??:?? 0 Loading /prefs/module.proto
??:??:?? 0 Loaded saved moduleConfig version 16
??:??:?? 0 Loading /prefs/channels.proto
??:??:?? 0 Loaded saved channelFile version 16
??:??:?? 0 Number of Device Reboots: 15
??:??:?? 0 [Eason] resetRadioConfig
??:??:?? 0 Expanding short PSK #1
??:??:?? 0 Wanted region 520, using TW_D, r=520
??:??:?? 0 initRegionDEBUG ENTRY
??:??:?? 0 region=520, NODENUM=0xd16c28bc, dbsize=1
??:??:?? 0 [Eason] saveToDisk
??:??:?? 0 Saving /prefs/db.proto
??:??:?? 0 Saving /prefs/config.proto
??:??:?? 0 Saving /prefs/module.proto
??:??:?? 0 Saving /prefs/channels.proto
chip id detect 0x3
                  Detect CHIP :AXP192
                                     OUTPUT Register 0x5f
                                                         ??:??:?? 1 AXP192 Begin PASS
??:??:?? 1 DCDC1: ENABLE
??:??:?? 1 DCDC2: ENABLE
??:??:?? 1 LDO2: ENABLE
??:??:?? 1 LDO3: ENABLE
??:??:?? 1 DCDC3: ENABLE
??:??:?? 1 Exten: ENABLE
??:??:?? 1 ----------------------------------------
??:??:?? 1 DCDC1: ENABLE
??:??:?? 1 DCDC2: ENABLE
??:??:?? 1 LDO2: ENABLE
??:??:?? 1 LDO3: ENABLE
??:??:?? 1 DCDC3: ENABLE
??:??:?? 1 Exten: ENABLE
SRC REG:0xc4
            Charging enable is enable
                                     Charging target-voltage : 0x2
                                                                   end when the charge current is lower than 10% of the set value
                                                                                                                                 Charge current : 700.00 mA
                                                                                                                                                           ??:??:?? 1 Battery: usbPower=1, isCharging=0, batMv=4173, batPct=100
??:??:?? 1 Read RTC time as 1
??:??:?? 1 Using MSL altitude model
??:??:?? 1 GxGSA NOT available
??:??:?? 1 WANT GPS=1
[E][vfs_api.cpp:64] open(): /littlefs/prefs/oem.proto does not exist
??:??:?? 1 No /prefs/oem.proto preferences found
??:??:?? 1 Turning on screen
??:??:?? 1 Module wants a UI Frame
??:??:?? 1 Starting meshradio init...
??:??:?? 1 Set radio: region=TW_D, name=LongF, config=0, ch=11, power=17
??:??:?? 1 Radio myRegion->freqStart / myRegion->freqEnd: 920.000000 -> 925.000000 (5.000000 mhz)
??:??:?? 1 Radio myRegion->numChannels: 20
??:??:?? 1 Radio channel_num: 11
??:??:?? 1 Radio frequency: 922.875000
??:??:?? 1 Slot time: 42 msec
??:??:?? 1 Set radio: final power level=17
??:??:?? 1 RF95 init result -2
??:??:?? 1 Frequency set to 922.875000
??:??:?? 1 Bandwidth set to 250.000000
??:??:?? 1 Power output set to 17
??:??:?? 1 Current limit set to 140.000000
??:??:?? 1 Current limit set result -16
??:??:?? 1 Warning: Failed to find RF95 radio
??:??:?? 1 Starting meshradio init...
??:??:?? 1 Set radio: region=TW_D, name=LongF, config=0, ch=11, power=17
??:??:?? 1 Radio myRegion->freqStart / myRegion->freqEnd: 920.000000 -> 925.000000 (5.000000 mhz)
??:??:?? 1 Radio myRegion->numChannels: 20
??:??:?? 1 Radio channel_num: 11
??:??:?? 1 Radio frequency: 922.875000
??:??:?? 1 Slot time: 42 msec
??:??:?? 1 Set radio: final power level=17
??:??:?? 1 SX126x init result 0
??:??:?? 1 Frequency set to 922.875000
??:??:?? 1 Bandwidth set to 250.000000
??:??:?? 1 Power output set to 17
??:??:?? 1 Current limit set to 140.000000
??:??:?? 1 Current limit set result 0
??:??:?? 1 SX1262 Radio init succeeded, using SX1262 radio
??:??:?? 1 Not using WIFI
??:??:?? 1 (bw=250, sf=11, cr=4/8) packet symLen=8 ms, payloadSize=237, time 3188 ms
??:??:?? 1 myNodeInfo.bitrate = 74.341286 bytes / sec
??:??:?? 1 PowerFSM init, USB power=1
??:??:?? 1 Enter state: BOOT
[D][esp32-hal-cpu.c:189] setCpuFrequencyMhz(): PLL: 320 / 4 = 80 Mhz, APB: 80000000 Hz
??:??:?? 1 [Power] Battery: usbPower=1, isCharging=0, batMv=4173, batPct=100
??:??:?? 1 [Screen] Screen: Started...
??:??:?? 1 [DeviceTelemetryModule] Device Telemetry: Initializing
??:??:?? 1 [DeviceTelemetryModule] -----------------------------------------
??:??:?? 1 [DeviceTelemetryModule] Device Telemetry: Read data
??:??:?? 1 [DeviceTelemetryModule] Telemetry->time: 1
??:??:?? 1 [DeviceTelemetryModule] Telemetry->air_util_tx: 0.081111
??:??:?? 1 [DeviceTelemetryModule] Telemetry->battery_level: 100
??:??:?? 1 [DeviceTelemetryModule] Telemetry->channel_utilization: 4.866667
??:??:?? 1 [DeviceTelemetryModule] Telemetry->voltage: 4.173000
??:??:?? 1 [DeviceTelemetryModule] Initial packet id 1633485489, numPacketId 4294967295
??:??:?? 1 [DeviceTelemetryModule] Device Telemetry: Sending packet to mesh
??:??:?? 1 [DeviceTelemetryModule] Update DB node 0xd16c28bc, rx_time=0
??:??:?? 1 [DeviceTelemetryModule] handleReceived(LOCAL) (id=0x615d02b3 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=67)
??:??:?? 1 [DeviceTelemetryModule] No modules interested in portnum=67, src=LOCAL
??:??:?? 1 [DeviceTelemetryModule] Add packet record (id=0x615d02b3 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=67)
??:??:?? 1 [DeviceTelemetryModule] Should encrypt MQTT?: 1
??:??:?? 1 [DeviceTelemetryModule] Expanding short PSK #1
??:??:?? 1 [DeviceTelemetryModule] Using AES128 key!
??:??:?? 1 [DeviceTelemetryModule] ESP32 crypt fr=d16c28bc, num=615d02b3, numBytes=28!
??:??:?? 1 [DeviceTelemetryModule] enqueuing for send (id=0x615d02b3 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted)
??:??:?? 1 [DeviceTelemetryModule] txGood=0,rxGood=0,rxBad=0
??:??:?? 1 [DeviceTelemetryModule] Using channel 0 (hash 0x6e)
??:??:?? 1 [DeviceTelemetryModule] Expanding short PSK #1
??:??:?? 1 [DeviceTelemetryModule] Using AES128 key!
??:??:?? 1 [DeviceTelemetryModule] ESP32 crypt fr=d16c28bc, num=615d02b3, numBytes=28!
??:??:?? 1 [DeviceTelemetryModule] decoded message (id=0x615d02b3 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=67 priority=64)
??:??:?? 1 [DeviceTelemetryModule] updateTelemetry LOCAL
??:??:?? 1 [DeviceTelemetryModule] Node status update: 1 online, 1 total
??:??:?? 1 [SerialModule] Serial Module Disabled
??:??:?? 1 [StoreForwardModule] Store & Forward Module - Disabled
??:??:?? 1 [RangeTestModule] Range Test Module - Disabled
??:??:?? 1 [SendRoutineMessageModule] Initializing Routine Message Module -- Sender
??:??:?? 1 [PowerFSM] DEBUG plugged ENTRY
??:??:?? 1 [RadioIf] Starting low level send (id=0x615d02b3 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=64)
??:??:?? 1 [RadioIf] (bw=250, sf=11, cr=4/8) packet symLen=8 ms, payloadSize=44, time 886 ms
??:??:?? 1 [RadioIf] AirTime - Packet transmitted : 886ms
??:??:?? 2 [RadioIf] Completed sending (id=0x615d02b3 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=64)
??:??:?? 4 [PowerFSM] Enter state: POWER
??:??:?? 4 [PowerFSM] Initialise the NimBLE bluetooth module
??:??:?? 5 [Screen] Screen: Powered...
??:??:?? 6 [Screen] Done with boot screen...
??:??:?? 6 [Screen] showing standard frames
??:??:?? 6 [Screen] Showing 0 module frames
??:??:?? 6 [Screen] Total frame count: 83
??:??:?? 6 [Screen] Added modules.  numframes: 0
??:??:?? 6 [Screen] Finished building frames. numframes: 2
??:??:?? 6 [Screen] Setting fast framerate
??:??:?? 6 [Screen] Setting idle framerate
??:??:?? 6 [SendRoutineMessageModule] Routine Message Module - Sending heartbeat every 60000 ms
??:??:?? 6 [SendRoutineMessageModule] gpsStatus->getLatitude()     0
??:??:?? 6 [SendRoutineMessageModule] gpsStatus->getLongitude()    0
??:??:?? 6 [SendRoutineMessageModule] gpsStatus->getHasLock()      0
??:??:?? 6 [SendRoutineMessageModule] gpsStatus->getDOP()          0
??:??:?? 6 [SendRoutineMessageModule] gpsStatus->getHasLock()      0
??:??:?? 6 [SendRoutineMessageModule] pref.fixed_position()        0
??:??:?? 6 [SendRoutineMessageModule] sending owner !d16c28bc/Meshtastic 28bc/28bc
??:??:?? 6 [SendRoutineMessageModule] Update DB node 0xd16c28bc, rx_time=0
??:??:?? 6 [SendRoutineMessageModule] handleReceived(LOCAL) (id=0x615d02b4 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=1 priority=10)
??:??:?? 6 [SendRoutineMessageModule] Module 'SendRoutineMessageModuleRadio' wantsPacket=1
??:??:?? 6 [SendRoutineMessageModule] Routine Message Module Disabled
??:??:?? 6 [SendRoutineMessageModule] Module 'SendRoutineMessageModuleRadio' considered
??:??:?? 6 [SendRoutineMessageModule] Add packet record (id=0x615d02b4 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=1 priority=10)
??:??:?? 6 [SendRoutineMessageModule] Should encrypt MQTT?: 1
??:??:?? 6 [SendRoutineMessageModule] Original length - 29
??:??:?? 6 [SendRoutineMessageModule] Compressed length - 26
??:??:?? 6 [SendRoutineMessageModule] Original message - Meshtastic 28bc/CAN'T GET GPS
??:??:?? 6 [SendRoutineMessageModule] Using compressed message.
??:??:?? 6 [SendRoutineMessageModule] Expanding short PSK #1
??:??:?? 6 [SendRoutineMessageModule] Using AES128 key!
??:??:?? 6 [SendRoutineMessageModule] ESP32 crypt fr=d16c28bc, num=615d02b4, numBytes=33!
??:??:?? 6 [SendRoutineMessageModule] enqueuing for send (id=0x615d02b4 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=10)
??:??:?? 6 [SendRoutineMessageModule] txGood=1,rxGood=0,rxBad=0
??:??:?? 6 [SendRoutineMessageModule] Using channel 0 (hash 0x6e)
??:??:?? 6 [SendRoutineMessageModule] Expanding short PSK #1
??:??:?? 6 [SendRoutineMessageModule] Using AES128 key!
??:??:?? 6 [SendRoutineMessageModule] ESP32 crypt fr=d16c28bc, num=615d02b4, numBytes=33!
??:??:?? 6 [SendRoutineMessageModule] decoded message (id=0x615d02b4 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=1 priority=10)
??:??:?? 6 [RadioIf] Starting low level send (id=0x615d02b4 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=10)
??:??:?? 6 [RadioIf] (bw=250, sf=11, cr=4/8) packet symLen=8 ms, payloadSize=49, time 952 ms
??:??:?? 6 [RadioIf] AirTime - Packet transmitted : 952ms
??:??:?? 7 [Blink] BLE authentication complete
??:??:?? 7 [RadioIf] Completed sending (id=0x615d02b4 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=10)
??:??:?? 9 From Radio onread
??:??:?? 9 getFromRadio=not available
??:??:?? 9 To Radio onwrite
??:??:?? 9 Client wants config, nonce=10
??:??:?? 9 Starting API client config
??:??:?? 9 From Radio onread
??:??:?? 9 getFromRadio=STATE_SEND_MY_INFO
??:??:?? 9 From Radio onread
??:??:?? 9 getFromRadio=STATE_SEND_NODEINFO
??:??:?? 9 Sending nodeinfo: num=0xd16c28bc, lastseen=0, id=!d16c28bc, name=Meshtastic 28bc
??:??:?? 9 From Radio onread
??:??:?? 9 getFromRadio=STATE_SEND_NODEINFO
??:??:?? 9 Done sending nodeinfos
??:??:?? 9 getFromRadio=STATE_SEND_CONFIG
??:??:?? 9 From Radio onread
??:??:?? 9 getFromRadio=STATE_SEND_CONFIG
??:??:?? 9 From Radio onread
??:??:?? 9 getFromRadio=STATE_SEND_CONFIG
??:??:?? 9 From Radio onread
??:??:?? 9 getFromRadio=STATE_SEND_CONFIG
??:??:?? 10 From Radio onread
??:??:?? 10 getFromRadio=STATE_SEND_CONFIG
??:??:?? 10 From Radio onread
??:??:?? 10 getFromRadio=STATE_SEND_CONFIG
??:??:?? 10 From Radio onread
??:??:?? 10 getFromRadio=STATE_SEND_CONFIG
??:??:?? 10 From Radio onread
??:??:?? 10 getFromRadio=STATE_SEND_MODULECONFIG
??:??:?? 10 From Radio onread
??:??:?? 10 getFromRadio=STATE_SEND_MODULECONFIG
??:??:?? 10 From Radio onread
??:??:?? 10 getFromRadio=STATE_SEND_MODULECONFIG
??:??:?? 10 From Radio onread
??:??:?? 10 getFromRadio=STATE_SEND_MODULECONFIG
??:??:?? 10 From Radio onread
??:??:?? 10 getFromRadio=STATE_SEND_MODULECONFIG
??:??:?? 10 From Radio onread
??:??:?? 10 getFromRadio=STATE_SEND_MODULECONFIG
??:??:?? 10 From Radio onread
??:??:?? 10 getFromRadio=STATE_SEND_MODULECONFIG
??:??:?? 11 From Radio onread
??:??:?? 11 getFromRadio=STATE_SEND_COMPLETE_ID
??:??:?? 11 From Radio onread
??:??:?? 11 available hasPacket=1
??:??:?? 11 getFromRadio=STATE_SEND_PACKETS
??:??:?? 11 phone downloaded packet (id=0x615d02b3 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=67 priority=64)
??:??:?? 11 To Radio onwrite
??:??:?? 11 PACKET FROM PHONE (id=0xfc8fec9d Fr0x00 To0xbc, WantAck1, HopLim0 Ch0x0 Portnum=6 WANTRESP priority=70)
??:??:?? 11 Enqueued local (id=0xfc8fec9d Fr0x00 To0xbc, WantAck1, HopLim0 Ch0x0 Portnum=6 WANTRESP priority=70)
??:??:?? 11 [Router] Add packet record (id=0xfc8fec9d Fr0x00 To0xbc, WantAck1, HopLim0 Ch0x0 Portnum=6 WANTRESP priority=70)
??:??:?? 11 [Router] handleReceived(REMOTE) (id=0xfc8fec9d Fr0x00 To0xbc, WantAck1, HopLim0 Ch0x0 Portnum=6 WANTRESP priority=70)
??:??:?? 11 [Router] Module 'Admin' wantsPacket=1
??:??:?? 11 [Router] Received Admin from=0x0, id=0xfc8fec9d, portnum=6, payloadlen=2
??:??:?? 11 [Router] Client is getting channel 0
??:??:?? 11 [Router] Module 'Admin' sent a response
??:??:?? 11 [Router] Module 'routing' wantsPacket=1
??:??:?? 11 [Router] Received routing from=0x0, id=0xfc8fec9d, portnum=6, payloadlen=2
??:??:?? 11 [Router] Routing sniffing (id=0xfc8fec9d Fr0x00 To0xbc, WantAck1, HopLim0 Ch0x0 Portnum=6 WANTRESP priority=70)
??:??:?? 11 [Router] Someone else has replied to this message, no need for a 2nd ack
??:??:?? 11 [Router] FIXME-update-db Sniffing packet
??:??:?? 11 [Router] Module 'routing' considered
??:??:?? 11 [Router] Sending response (id=0x615d02b5 Fr0xbc To0xbc, WantAck0, HopLim3 Ch0x0 Portnum=6 requestId=fc8fec9d priority=70)
??:??:?? 11 [Router] Update DB node 0xd16c28bc, rx_time=0
??:??:?? 11 [Router] Enqueued local (id=0x615d02b5 Fr0xbc To0xbc, WantAck0, HopLim3 Ch0x0 Portnum=6 requestId=fc8fec9d priority=70)
??:??:?? 11 [Router] Rx someone rebroadcasting for us (id=0x615d02b5 Fr0xbc To0xbc, WantAck0, HopLim3 Ch0x0 Portnum=6 requestId=fc8fec9d priority=70)
??:??:?? 11 [Router] didn't find pending packet
??:??:?? 11 [Router] Add packet record (id=0x615d02b5 Fr0xbc To0xbc, WantAck0, HopLim3 Ch0x0 Portnum=6 requestId=fc8fec9d priority=70)
??:??:?? 11 [Router] handleReceived(REMOTE) (id=0x615d02b5 Fr0xbc To0xbc, WantAck0, HopLim3 Ch0x0 Portnum=6 requestId=fc8fec9d priority=70)
??:??:?? 11 [Router] Module 'Admin' wantsPacket=1
??:??:?? 11 [Router] Received Admin from=0xd16c28bc, id=0x615d02b5, portnum=6, payloadlen=9
??:??:?? 11 [Router] Ignoring nonrelevant admin 7
??:??:?? 11 [Router] Module 'Admin' considered
??:??:?? 11 [Router] Module 'routing' wantsPacket=1
??:??:?? 11 [Router] Received routing from=0xd16c28bc, id=0x615d02b5, portnum=6, payloadlen=9
??:??:?? 11 [Router] Routing sniffing (id=0x615d02b5 Fr0xbc To0xbc, WantAck0, HopLim3 Ch0x0 Portnum=6 requestId=fc8fec9d priority=70)
??:??:?? 11 [Router] Received an ack for 0xfc8fec9d, stopping retransmissions
??:??:?? 11 [Router] FIXME-update-db Sniffing packet
??:??:?? 11 [Router] Delivering rx packet (id=0x615d02b5 Fr0xbc To0xbc, WantAck0, HopLim3 Ch0x0 Portnum=6 requestId=fc8fec9d priority=70)
??:??:?? 11 [Router] Forwarding to phone (id=0x615d02b5 Fr0xbc To0xbc, WantAck0, HopLim3 Ch0x0 Portnum=6 requestId=fc8fec9d priority=70)
??:??:?? 11 [Router] Update DB node 0xd16c28bc, rx_time=0
??:??:?? 11 [Router] Module 'routing' considered
??:??:?? 11 Telling client we have new packets 3
??:??:?? 11 BLE notify fromNum
??:??:?? 11 From Radio onread
??:??:?? 11 available hasPacket=1
??:??:?? 11 getFromRadio=STATE_SEND_PACKETS
??:??:?? 11 phone downloaded packet (id=0x615d02b4 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=1 priority=10)
??:??:?? 11 From Radio onread
??:??:?? 11 available hasPacket=1
??:??:?? 11 getFromRadio=STATE_SEND_PACKETS
??:??:?? 11 phone downloaded packet (id=0x615d02b5 Fr0xbc To0xbc, WantAck0, HopLim3 Ch0x0 Portnum=6 requestId=fc8fec9d priority=70)
??:??:?? 11 From Radio onread
??:??:?? 11 available hasPacket=0
??:??:?? 11 getFromRadio=not available
??:??:?? 11 From Radio onread
??:??:?? 11 available hasPacket=0
??:??:?? 11 getFromRadio=not available
??:??:?? 11 To Radio onwrite
??:??:?? 11 PACKET FROM PHONE (id=0xfc8fec9e Fr0x00 To0xbc, WantAck1, HopLim0 Ch0x0 Portnum=6 WANTRESP priority=70)
??:??:?? 11 Enqueued local (id=0xfc8fec9e Fr0x00 To0xbc, WantAck1, HopLim0 Ch0x0 Portnum=6 WANTRESP priority=70)
??:??:?? 11 [Router] Add packet record (id=0xfc8fec9e Fr0x00 To0xbc, WantAck1, HopLim0 Ch0x0 Portnum=6 WANTRESP priority=70)
??:??:?? 11 [Router] handleReceived(REMOTE) (id=0xfc8fec9e Fr0x00 To0xbc, WantAck1, HopLim0 Ch0x0 Portnum=6 WANTRESP priority=70)
??:??:?? 11 [Router] Module 'Admin' wantsPacket=1
??:??:?? 11 [Router] Received Admin from=0x0, id=0xfc8fec9e, portnum=6, payloadlen=2
??:??:?? 11 [Router] Client is getting channel 1
??:??:?? 11 [Router] Module 'Admin' sent a response
??:??:?? 11 [Router] Module 'routing' wantsPacket=1
??:??:?? 11 [Router] Received routing from=0x0, id=0xfc8fec9e, portnum=6, payloadlen=2
??:??:?? 11 [Router] Routing sniffing (id=0xfc8fec9e Fr0x00 To0xbc, WantAck1, HopLim0 Ch0x0 Portnum=6 WANTRESP priority=70)
??:??:?? 11 [Router] Someone else has replied to this message, no need for a 2nd ack
??:??:?? 11 [Router] FIXME-update-db Sniffing packet
??:??:?? 11 [Router] Module 'routing' considered
??:??:?? 11 [Router] Sending response (id=0x615d02b6 Fr0xbc To0xbc, WantAck0, HopLim3 Ch0x0 Portnum=6 requestId=fc8fec9e priority=70)
??:??:?? 11 [Router] Update DB node 0xd16c28bc, rx_time=0
??:??:?? 11 [Router] Enqueued local (id=0x615d02b6 Fr0xbc To0xbc, WantAck0, HopLim3 Ch0x0 Portnum=6 requestId=fc8fec9e priority=70)
??:??:?? 11 [Router] Rx someone rebroadcasting for us (id=0x615d02b6 Fr0xbc To0xbc, WantAck0, HopLim3 Ch0x0 Portnum=6 requestId=fc8fec9e priority=70)
??:??:?? 11 [Router] didn't find pending packet
??:??:?? 11 [Router] Add packet record (id=0x615d02b6 Fr0xbc To0xbc, WantAck0, HopLim3 Ch0x0 Portnum=6 requestId=fc8fec9e priority=70)
??:??:?? 11 [Router] handleReceived(REMOTE) (id=0x615d02b6 Fr0xbc To0xbc, WantAck0, HopLim3 Ch0x0 Portnum=6 requestId=fc8fec9e priority=70)
??:??:?? 11 [Router] Module 'Admin' wantsPacket=1
??:??:?? 11 [Router] Received Admin from=0xd16c28bc, id=0x615d02b6, portnum=6, payloadlen=6
??:??:?? 11 [Router] Ignoring nonrelevant admin 7
??:??:?? 11 [Router] Module 'Admin' considered
??:??:?? 11 [Router] Module 'routing' wantsPacket=1
??:??:?? 11 [Router] Received routing from=0xd16c28bc, id=0x615d02b6, portnum=6, payloadlen=6
??:??:?? 11 [Router] Routing sniffing (id=0x615d02b6 Fr0xbc To0xbc, WantAck0, HopLim3 Ch0x0 Portnum=6 requestId=fc8fec9e priority=70)
??:??:?? 11 [Router] Received an ack for 0xfc8fec9e, stopping retransmissions
??:??:?? 11 [Router] FIXME-update-db Sniffing packet
??:??:?? 11 [Router] Delivering rx packet (id=0x615d02b6 Fr0xbc To0xbc, WantAck0, HopLim3 Ch0x0 Portnum=6 requestId=fc8fec9e priority=70)
??:??:?? 11 [Router] Forwarding to phone (id=0x615d02b6 Fr0xbc To0xbc, WantAck0, HopLim3 Ch0x0 Portnum=6 requestId=fc8fec9e priority=70)
??:??:?? 11 [Router] Update DB node 0xd16c28bc, rx_time=0
??:??:?? 11 [Router] Module 'routing' considered
??:??:?? 11 Telling client we have new packets 4
??:??:?? 11 BLE notify fromNum
??:??:?? 11 From Radio onread
??:??:?? 11 available hasPacket=1
??:??:?? 11 getFromRadio=STATE_SEND_PACKETS
??:??:?? 11 phone downloaded packet (id=0x615d02b6 Fr0xbc To0xbc, WantAck0, HopLim3 Ch0x0 Portnum=6 requestId=fc8fec9e priority=70)
??:??:?? 11 From Radio onread
??:??:?? 11 available hasPacket=0
??:??:?? 11 getFromRadio=not available
??:??:?? 21 [Power] Battery: usbPower=1, isCharging=0, batMv=4170, batPct=100
??:??:?? 31 [NodeInfoModule] Sending our nodeinfo to mesh (wantReplies=1)
??:??:?? 31 [NodeInfoModule] sending owner !d16c28bc/Meshtastic 28bc/28bc
??:??:?? 31 [NodeInfoModule] Update DB node 0xd16c28bc, rx_time=0
??:??:?? 31 [NodeInfoModule] handleReceived(LOCAL) (id=0x615d02b7 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=4 WANTRESP priority=10)
??:??:?? 31 [NodeInfoModule] No modules interested in portnum=4, src=LOCAL
??:??:?? 31 [NodeInfoModule] Add packet record (id=0x615d02b7 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=4 WANTRESP priority=10)
??:??:?? 31 [NodeInfoModule] Should encrypt MQTT?: 1
??:??:?? 31 [NodeInfoModule] Expanding short PSK #1
??:??:?? 31 [NodeInfoModule] Using AES128 key!
??:??:?? 31 [NodeInfoModule] ESP32 crypt fr=d16c28bc, num=615d02b7, numBytes=50!
??:??:?? 31 [NodeInfoModule] enqueuing for send (id=0x615d02b7 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=10)
??:??:?? 31 [NodeInfoModule] txGood=2,rxGood=0,rxBad=0
??:??:?? 31 [RadioIf] Starting low level send (id=0x615d02b7 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=10)
??:??:?? 31 [RadioIf] (bw=250, sf=11, cr=4/8) packet symLen=8 ms, payloadSize=66, time 1148 ms
??:??:?? 31 [RadioIf] AirTime - Packet transmitted : 1148ms
??:??:?? 31 [DeviceTelemetryModule] -----------------------------------------
??:??:?? 31 [DeviceTelemetryModule] Device Telemetry: Read data
??:??:?? 31 [DeviceTelemetryModule] Telemetry->time: 31
??:??:?? 31 [DeviceTelemetryModule] Telemetry->air_util_tx: 0.082944
??:??:?? 31 [DeviceTelemetryModule] Telemetry->battery_level: 100
??:??:?? 31 [DeviceTelemetryModule] Telemetry->channel_utilization: 4.976667
??:??:?? 31 [DeviceTelemetryModule] Telemetry->voltage: 4.170000
??:??:?? 31 [DeviceTelemetryModule] Device Telemetry: Sending packet to mesh
??:??:?? 31 [DeviceTelemetryModule] Update DB node 0xd16c28bc, rx_time=0
??:??:?? 31 [DeviceTelemetryModule] handleReceived(LOCAL) (id=0x615d02b8 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=67)
??:??:?? 31 [DeviceTelemetryModule] No modules interested in portnum=67, src=LOCAL
??:??:?? 31 [DeviceTelemetryModule] Add packet record (id=0x615d02b8 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=67)
??:??:?? 31 [DeviceTelemetryModule] Should encrypt MQTT?: 1
??:??:?? 31 [DeviceTelemetryModule] Expanding short PSK #1
??:??:?? 31 [DeviceTelemetryModule] Using AES128 key!
??:??:?? 31 [DeviceTelemetryModule] ESP32 crypt fr=d16c28bc, num=615d02b8, numBytes=28!
??:??:?? 31 [DeviceTelemetryModule] enqueuing for send (id=0x615d02b8 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted)
??:??:?? 31 [DeviceTelemetryModule] txGood=2,rxGood=0,rxBad=0
??:??:?? 31 [DeviceTelemetryModule] Using channel 0 (hash 0x6e)
??:??:?? 31 [DeviceTelemetryModule] Expanding short PSK #1
??:??:?? 31 [DeviceTelemetryModule] Using AES128 key!
??:??:?? 31 [DeviceTelemetryModule] ESP32 crypt fr=d16c28bc, num=615d02b8, numBytes=28!
??:??:?? 31 [DeviceTelemetryModule] decoded message (id=0x615d02b8 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=67 priority=64)
??:??:?? 31 [DeviceTelemetryModule] updateTelemetry LOCAL
??:??:?? 31 [DeviceTelemetryModule] Node status update: 1 online, 1 total
??:??:?? 31 Telling client we have new packets 5
??:??:?? 31 BLE notify fromNum
??:??:?? 31 From Radio onread
??:??:?? 31 available hasPacket=1
??:??:?? 31 getFromRadio=STATE_SEND_PACKETS
??:??:?? 31 phone downloaded packet (id=0x615d02b8 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=67 priority=64)
??:??:?? 31 [RadioIf] Can not send yet, busyTx
??:??:?? 31 From Radio onread
??:??:?? 31 available hasPacket=0
??:??:?? 31 getFromRadio=not available
??:??:?? 31 [RadioIf] Can not send yet, busyTx
??:??:?? 32 [RadioIf] Can not send yet, busyTx
??:??:?? 32 [RadioIf] Can not send yet, busyTx
??:??:?? 32 [RadioIf] Can not send yet, busyTx
??:??:?? 32 [RadioIf] Can not send yet, busyTx
??:??:?? 32 [RadioIf] Can not send yet, busyTx
??:??:?? 32 [RadioIf] Can not send yet, busyTx
??:??:?? 32 [RadioIf] Can not send yet, busyTx
??:??:?? 32 [RadioIf] Completed sending (id=0x615d02b7 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=10)
??:??:?? 32 [RadioIf] Starting low level send (id=0x615d02b8 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=64)
??:??:?? 32 [RadioIf] (bw=250, sf=11, cr=4/8) packet symLen=8 ms, payloadSize=44, time 886 ms
??:??:?? 32 [RadioIf] AirTime - Packet transmitted : 886ms
??:??:?? 33 [RadioIf] Completed sending (id=0x615d02b8 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=64)
??:??:?? 41 [Power] Battery: usbPower=1, isCharging=0, batMv=4170, batPct=100
??:??:?? 61 [NodeInfoModule] Sending our nodeinfo to mesh (wantReplies=0)
??:??:?? 61 [NodeInfoModule] cancelSending id=0x615d02b7, removed=0
??:??:?? 61 [NodeInfoModule] sending owner !d16c28bc/Meshtastic 28bc/28bc
??:??:?? 61 [NodeInfoModule] Update DB node 0xd16c28bc, rx_time=0
??:??:?? 61 [NodeInfoModule] handleReceived(LOCAL) (id=0x615d02b9 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=4 priority=10)
??:??:?? 61 [NodeInfoModule] No modules interested in portnum=4, src=LOCAL
??:??:?? 61 [NodeInfoModule] Add packet record (id=0x615d02b9 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=4 priority=10)
??:??:?? 61 [NodeInfoModule] Should encrypt MQTT?: 1
??:??:?? 61 [NodeInfoModule] Expanding short PSK #1
??:??:?? 61 [NodeInfoModule] Using AES128 key!
??:??:?? 61 [NodeInfoModule] ESP32 crypt fr=d16c28bc, num=615d02b9, numBytes=48!
??:??:?? 61 [NodeInfoModule] enqueuing for send (id=0x615d02b9 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=10)
??:??:?? 61 [NodeInfoModule] txGood=4,rxGood=0,rxBad=0
??:??:?? 61 [GPS] WANT GPS=0
??:??:?? 61 [GPS] publishing pos@0:2, hasVal=0, GPSlock=0
??:??:?? 61 [GPS] onGPSChanged() pos@0, time=0, lat=0, lon=0, alt=0
??:??:?? 61 [GPS] updatePosition LOCAL pos@0, time=0, latI=0, lonI=0, alt=0
??:??:?? 61 [GPS] Node status update: 1 online, 1 total
??:??:?? 61 [RadioIf] Starting low level send (id=0x615d02b9 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=10)
??:??:?? 61 [RadioIf] (bw=250, sf=11, cr=4/8) packet symLen=8 ms, payloadSize=64, time 1132 ms
??:??:?? 61 [RadioIf] AirTime - Packet transmitted : 1132ms
??:??:?? 61 [Power] Battery: usbPower=1, isCharging=0, batMv=4170, batPct=100
??:??:?? 61 [DeviceTelemetryModule] -----------------------------------------
??:??:?? 61 [DeviceTelemetryModule] Device Telemetry: Read data
??:??:?? 61 [DeviceTelemetryModule] Telemetry->time: 61
??:??:?? 61 [DeviceTelemetryModule] Telemetry->air_util_tx: 0.107556
??:??:?? 61 [DeviceTelemetryModule] Telemetry->battery_level: 100
??:??:?? 61 [DeviceTelemetryModule] Telemetry->channel_utilization: 6.453333
??:??:?? 61 [DeviceTelemetryModule] Telemetry->voltage: 4.170000
??:??:?? 61 [DeviceTelemetryModule] Device Telemetry: Sending packet to mesh
??:??:?? 61 [DeviceTelemetryModule] Update DB node 0xd16c28bc, rx_time=0
??:??:?? 61 [DeviceTelemetryModule] handleReceived(LOCAL) (id=0x615d02ba Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=67)
??:??:?? 61 [DeviceTelemetryModule] No modules interested in portnum=67, src=LOCAL
??:??:?? 61 [DeviceTelemetryModule] Add packet record (id=0x615d02ba Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=67)
??:??:?? 61 [DeviceTelemetryModule] Should encrypt MQTT?: 1
??:??:?? 61 [DeviceTelemetryModule] Expanding short PSK #1
??:??:?? 61 [DeviceTelemetryModule] Using AES128 key!
??:??:?? 61 [DeviceTelemetryModule] ESP32 crypt fr=d16c28bc, num=615d02ba, numBytes=28!
??:??:?? 61 [DeviceTelemetryModule] enqueuing for send (id=0x615d02ba Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted)
??:??:?? 61 [DeviceTelemetryModule] txGood=4,rxGood=0,rxBad=0
??:??:?? 61 [DeviceTelemetryModule] Using channel 0 (hash 0x6e)
??:??:?? 61 [DeviceTelemetryModule] Expanding short PSK #1
??:??:?? 61 [DeviceTelemetryModule] Using AES128 key!
??:??:?? 61 [DeviceTelemetryModule] ESP32 crypt fr=d16c28bc, num=615d02ba, numBytes=28!
??:??:?? 61 [DeviceTelemetryModule] decoded message (id=0x615d02ba Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=67 priority=64)
??:??:?? 61 [DeviceTelemetryModule] updateTelemetry LOCAL
??:??:?? 61 [DeviceTelemetryModule] Node status update: 1 online, 1 total
??:??:?? 61 Telling client we have new packets 6
??:??:?? 61 BLE notify fromNum
??:??:?? 61 From Radio onread
??:??:?? 61 available hasPacket=1
??:??:?? 61 getFromRadio=STATE_SEND_PACKETS
??:??:?? 61 phone downloaded packet (id=0x615d02ba Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=67 priority=64)
??:??:?? 61 [RadioIf] Can not send yet, busyTx
??:??:?? 61 From Radio onread
??:??:?? 61 available hasPacket=0
??:??:?? 61 getFromRadio=not available
??:??:?? 62 [RadioIf] Can not send yet, busyTx
??:??:?? 62 [RadioIf] Can not send yet, busyTx
??:??:?? 62 [RadioIf] Can not send yet, busyTx
??:??:?? 62 [RadioIf] Can not send yet, busyTx
??:??:?? 62 [RadioIf] Can not send yet, busyTx
??:??:?? 62 [RadioIf] Can not send yet, busyTx
??:??:?? 62 [RadioIf] Can not send yet, busyTx
??:??:?? 62 [RadioIf] Can not send yet, busyTx
??:??:?? 62 [RadioIf] Can not send yet, busyTx
??:??:?? 62 [RadioIf] Can not send yet, busyTx
??:??:?? 62 [RadioIf] Can not send yet, busyTx
??:??:?? 62 [RadioIf] Can not send yet, busyTx
??:??:?? 62 [RadioIf] Completed sending (id=0x615d02b9 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=10)
??:??:?? 62 [RadioIf] Starting low level send (id=0x615d02ba Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=64)
??:??:?? 62 [RadioIf] (bw=250, sf=11, cr=4/8) packet symLen=8 ms, payloadSize=44, time 886 ms
??:??:?? 62 [RadioIf] AirTime - Packet transmitted : 886ms
??:??:?? 63 [RadioIf] Completed sending (id=0x615d02ba Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=64)
??:??:?? 66 [SendRoutineMessageModule] Routine Message Module - Sending heartbeat every 60000 ms
??:??:?? 66 [SendRoutineMessageModule] gpsStatus->getLatitude()     0
??:??:?? 66 [SendRoutineMessageModule] gpsStatus->getLongitude()    0
??:??:?? 66 [SendRoutineMessageModule] gpsStatus->getHasLock()      0
??:??:?? 66 [SendRoutineMessageModule] gpsStatus->getDOP()          0
??:??:?? 66 [SendRoutineMessageModule] gpsStatus->getHasLock()      0
??:??:?? 66 [SendRoutineMessageModule] pref.fixed_position()        0
??:??:?? 66 [SendRoutineMessageModule] cancelSending id=0x615d02b4, removed=0
??:??:?? 66 [SendRoutineMessageModule] sending owner !d16c28bc/Meshtastic 28bc/28bc
??:??:?? 66 [SendRoutineMessageModule] Update DB node 0xd16c28bc, rx_time=0
??:??:?? 66 [SendRoutineMessageModule] handleReceived(LOCAL) (id=0x615d02bb Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=1 priority=10)
??:??:?? 66 [SendRoutineMessageModule] Module 'SendRoutineMessageModuleRadio' wantsPacket=1
??:??:?? 66 [SendRoutineMessageModule] Routine Message Module Disabled
??:??:?? 66 [SendRoutineMessageModule] Module 'SendRoutineMessageModuleRadio' considered
??:??:?? 66 [SendRoutineMessageModule] Add packet record (id=0x615d02bb Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=1 priority=10)
??:??:?? 66 [SendRoutineMessageModule] Should encrypt MQTT?: 1
??:??:?? 66 [SendRoutineMessageModule] Original length - 29
??:??:?? 66 [SendRoutineMessageModule] Compressed length - 26
??:??:?? 66 [SendRoutineMessageModule] Original message - Meshtastic 28bc/CAN'T GET GPS
??:??:?? 66 [SendRoutineMessageModule] Using compressed message.
??:??:?? 66 [SendRoutineMessageModule] Expanding short PSK #1
??:??:?? 66 [SendRoutineMessageModule] Using AES128 key!
??:??:?? 66 [SendRoutineMessageModule] ESP32 crypt fr=d16c28bc, num=615d02bb, numBytes=33!
??:??:?? 66 [SendRoutineMessageModule] enqueuing for send (id=0x615d02bb Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=10)
??:??:?? 66 [SendRoutineMessageModule] txGood=6,rxGood=0,rxBad=0
??:??:?? 66 [SendRoutineMessageModule] Using channel 0 (hash 0x6e)
??:??:?? 66 [SendRoutineMessageModule] Expanding short PSK #1
??:??:?? 66 [SendRoutineMessageModule] Using AES128 key!
??:??:?? 66 [SendRoutineMessageModule] ESP32 crypt fr=d16c28bc, num=615d02bb, numBytes=33!
??:??:?? 66 [SendRoutineMessageModule] decoded message (id=0x615d02bb Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=1 priority=10)
??:??:?? 66 Telling client we have new packets 7
??:??:?? 66 BLE notify fromNum
??:??:?? 66 From Radio onread
??:??:?? 66 available hasPacket=1
??:??:?? 66 getFromRadio=STATE_SEND_PACKETS
??:??:?? 66 phone downloaded packet (id=0x615d02bb Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=1 priority=10)
??:??:?? 67 [RadioIf] From Radio onread
??:??:?? 67 [RadioIf] available hasPacket=0
??:??:?? 67 [RadioIf] getFromRadio=not available
??:??:?? 67 [RadioIf] Starting low level send (id=0x615d02bb Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=10)
??:??:?? 67 [RadioIf] (bw=250, sf=11, cr=4/8) packet symLen=8 ms, payloadSize=49, time 952 ms
??:??:?? 67 [RadioIf] AirTime - Packet transmitted : 952ms
??:??:?? 68 [RadioIf] Completed sending (id=0x615d02bb Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=10)
??:??:?? 81 [Power] Battery: usbPower=1, isCharging=0, batMv=4170, batPct=100
??:??:?? 91 [NodeInfoModule] Sending our nodeinfo to mesh (wantReplies=0)
??:??:?? 91 [NodeInfoModule] cancelSending id=0x615d02b9, removed=0
??:??:?? 91 [NodeInfoModule] sending owner !d16c28bc/Meshtastic 28bc/28bc
??:??:?? 91 [NodeInfoModule] Update DB node 0xd16c28bc, rx_time=0
??:??:?? 91 [NodeInfoModule] handleReceived(LOCAL) (id=0x615d02bc Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=4 priority=10)
??:??:?? 91 [NodeInfoModule] No modules interested in portnum=4, src=LOCAL
??:??:?? 91 [NodeInfoModule] Add packet record (id=0x615d02bc Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=4 priority=10)
??:??:?? 91 [NodeInfoModule] Should encrypt MQTT?: 1
??:??:?? 91 [NodeInfoModule] Expanding short PSK #1
??:??:?? 91 [NodeInfoModule] Using AES128 key!
??:??:?? 91 [NodeInfoModule] ESP32 crypt fr=d16c28bc, num=615d02bc, numBytes=48!
??:??:?? 91 [NodeInfoModule] enqueuing for send (id=0x615d02bc Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=10)
??:??:?? 91 [NodeInfoModule] txGood=7,rxGood=0,rxBad=0
??:??:?? 91 [RadioIf] Starting low level send (id=0x615d02bc Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=10)
??:??:?? 91 [RadioIf] (bw=250, sf=11, cr=4/8) packet symLen=8 ms, payloadSize=64, time 1132 ms
??:??:?? 91 [RadioIf] AirTime - Packet transmitted : 1132ms
??:??:?? 91 [DeviceTelemetryModule] -----------------------------------------
??:??:?? 91 [DeviceTelemetryModule] Device Telemetry: Read data
??:??:?? 91 [DeviceTelemetryModule] Telemetry->time: 91
??:??:?? 91 [DeviceTelemetryModule] Telemetry->air_util_tx: 0.190056
??:??:?? 91 [DeviceTelemetryModule] Telemetry->battery_level: 100
??:??:?? 91 [DeviceTelemetryModule] Telemetry->channel_utilization: 6.426667
??:??:?? 91 [DeviceTelemetryModule] Telemetry->voltage: 4.170000
??:??:?? 91 [DeviceTelemetryModule] Device Telemetry: Sending packet to mesh
??:??:?? 91 [DeviceTelemetryModule] Update DB node 0xd16c28bc, rx_time=0
??:??:?? 91 [DeviceTelemetryModule] handleReceived(LOCAL) (id=0x615d02bd Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=67)
??:??:?? 91 [DeviceTelemetryModule] No modules interested in portnum=67, src=LOCAL
??:??:?? 91 [DeviceTelemetryModule] Add packet record (id=0x615d02bd Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=67)
??:??:?? 91 [DeviceTelemetryModule] Should encrypt MQTT?: 1
??:??:?? 91 [DeviceTelemetryModule] Expanding short PSK #1
??:??:?? 91 [DeviceTelemetryModule] Using AES128 key!
??:??:?? 91 [DeviceTelemetryModule] ESP32 crypt fr=d16c28bc, num=615d02bd, numBytes=28!
??:??:?? 91 [DeviceTelemetryModule] enqueuing for send (id=0x615d02bd Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted)
??:??:?? 91 [DeviceTelemetryModule] txGood=7,rxGood=0,rxBad=0
??:??:?? 91 [DeviceTelemetryModule] Using channel 0 (hash 0x6e)
??:??:?? 91 [DeviceTelemetryModule] Expanding short PSK #1
??:??:?? 91 [DeviceTelemetryModule] Using AES128 key!
??:??:?? 91 [DeviceTelemetryModule] ESP32 crypt fr=d16c28bc, num=615d02bd, numBytes=28!
??:??:?? 91 [DeviceTelemetryModule] decoded message (id=0x615d02bd Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=67 priority=64)
??:??:?? 91 [DeviceTelemetryModule] updateTelemetry LOCAL
??:??:?? 91 [DeviceTelemetryModule] Node status update: 1 online, 1 total
??:??:?? 91 Telling client we have new packets 8
??:??:?? 91 BLE notify fromNum
??:??:?? 91 [RadioIf] Can not send yet, busyTx
??:??:?? 91 From Radio onread
??:??:?? 91 available hasPacket=1
??:??:?? 91 getFromRadio=STATE_SEND_PACKETS
??:??:?? 91 phone downloaded packet (id=0x615d02bd Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=67 priority=64)
??:??:?? 91 [RadioIf] Can not send yet, busyTx
??:??:?? 92 [RadioIf] Can not send yet, busyTx
??:??:?? 92 [RadioIf] Can not send yet, busyTx
??:??:?? 92 From Radio onread
??:??:?? 92 available hasPacket=0
??:??:?? 92 getFromRadio=not available
??:??:?? 92 [RadioIf] Can not send yet, busyTx
??:??:?? 92 [RadioIf] Can not send yet, busyTx
??:??:?? 92 [RadioIf] Can not send yet, busyTx
??:??:?? 92 [RadioIf] Can not send yet, busyTx
??:??:?? 92 [RadioIf] Can not send yet, busyTx
??:??:?? 92 [RadioIf] Can not send yet, busyTx
??:??:?? 92 [RadioIf] Completed sending (id=0x615d02bc Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=10)
??:??:?? 92 [RadioIf] Starting low level send (id=0x615d02bd Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=64)
??:??:?? 92 [RadioIf] (bw=250, sf=11, cr=4/8) packet symLen=8 ms, payloadSize=44, time 886 ms
??:??:?? 92 [RadioIf] AirTime - Packet transmitted : 886ms
??:??:?? 93 [RadioIf] Completed sending (id=0x615d02bd Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=64)
??:??:?? 101 [Power] Battery: usbPower=1, isCharging=0, batMv=4170, batPct=100
??:??:?? 121 [NodeInfoModule] Sending our nodeinfo to mesh (wantReplies=0)
??:??:?? 121 [NodeInfoModule] cancelSending id=0x615d02bc, removed=0
??:??:?? 121 [NodeInfoModule] sending owner !d16c28bc/Meshtastic 28bc/28bc
??:??:?? 121 [NodeInfoModule] Update DB node 0xd16c28bc, rx_time=0
??:??:?? 121 [NodeInfoModule] handleReceived(LOCAL) (id=0x615d02be Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=4 priority=10)
??:??:?? 121 [NodeInfoModule] No modules interested in portnum=4, src=LOCAL
??:??:?? 121 [NodeInfoModule] Add packet record (id=0x615d02be Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=4 priority=10)
??:??:?? 121 [NodeInfoModule] Should encrypt MQTT?: 1
??:??:?? 121 [NodeInfoModule] Expanding short PSK #1
??:??:?? 121 [NodeInfoModule] Using AES128 key!
??:??:?? 121 [NodeInfoModule] ESP32 crypt fr=d16c28bc, num=615d02be, numBytes=48!
??:??:?? 121 [NodeInfoModule] enqueuing for send (id=0x615d02be Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=10)
??:??:?? 121 [NodeInfoModule] txGood=9,rxGood=0,rxBad=0
??:??:?? 121 [RadioIf] Starting low level send (id=0x615d02be Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=10)
??:??:?? 121 [RadioIf] (bw=250, sf=11, cr=4/8) packet symLen=8 ms, payloadSize=64, time 1132 ms
??:??:?? 121 [RadioIf] AirTime - Packet transmitted : 1132ms
??:??:?? 121 [Power] Battery: usbPower=1, isCharging=0, batMv=4161, batPct=100
??:??:?? 121 [DeviceTelemetryModule] -----------------------------------------
??:??:?? 121 [DeviceTelemetryModule] Device Telemetry: Read data
??:??:?? 121 [DeviceTelemetryModule] Telemetry->time: 121
??:??:?? 121 [DeviceTelemetryModule] Telemetry->air_util_tx: 0.277556
??:??:?? 121 [DeviceTelemetryModule] Telemetry->battery_level: 100
??:??:?? 121 [DeviceTelemetryModule] Telemetry->channel_utilization: 8.313334
??:??:?? 121 [DeviceTelemetryModule] Telemetry->voltage: 4.161000
??:??:?? 121 [DeviceTelemetryModule] Device Telemetry: Sending packet to mesh
??:??:?? 121 [DeviceTelemetryModule] Update DB node 0xd16c28bc, rx_time=0
??:??:?? 121 [DeviceTelemetryModule] handleReceived(LOCAL) (id=0x615d02bf Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=67)
??:??:?? 121 [DeviceTelemetryModule] No modules interested in portnum=67, src=LOCAL
??:??:?? 121 [DeviceTelemetryModule] Add packet record (id=0x615d02bf Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=67)
??:??:?? 121 [DeviceTelemetryModule] Should encrypt MQTT?: 1
??:??:?? 121 [DeviceTelemetryModule] Expanding short PSK #1
??:??:?? 121 [DeviceTelemetryModule] Using AES128 key!
??:??:?? 121 [DeviceTelemetryModule] ESP32 crypt fr=d16c28bc, num=615d02bf, numBytes=28!
??:??:?? 121 [DeviceTelemetryModule] enqueuing for send (id=0x615d02bf Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted)
??:??:?? 121 [DeviceTelemetryModule] txGood=9,rxGood=0,rxBad=0
??:??:?? 121 [DeviceTelemetryModule] Using channel 0 (hash 0x6e)
??:??:?? 121 [DeviceTelemetryModule] Expanding short PSK #1
??:??:?? 121 [DeviceTelemetryModule] Using AES128 key!
??:??:?? 121 [DeviceTelemetryModule] ESP32 crypt fr=d16c28bc, num=615d02bf, numBytes=28!
??:??:?? 121 [DeviceTelemetryModule] decoded message (id=0x615d02bf Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=67 priority=64)
??:??:?? 121 [DeviceTelemetryModule] updateTelemetry LOCAL
??:??:?? 121 [DeviceTelemetryModule] Node status update: 1 online, 1 total
??:??:?? 121 Telling client we have new packets 9
??:??:?? 121 BLE notify fromNum
??:??:?? 121 [RadioIf] Can not send yet, busyTx
??:??:?? 122 From Radio onread
??:??:?? 122 available hasPacket=1
??:??:?? 122 getFromRadio=STATE_SEND_PACKETS
??:??:?? 122 phone downloaded packet (id=0x615d02bf Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=67 priority=64)
??:??:?? 122 From Radio onread
??:??:?? 122 available hasPacket=0
??:??:?? 122 getFromRadio=not available
??:??:?? 122 [RadioIf] Can not send yet, busyTx
??:??:?? 122 [RadioIf] Can not send yet, busyTx
??:??:?? 122 [RadioIf] Can not send yet, busyTx
??:??:?? 122 [RadioIf] Can not send yet, busyTx
??:??:?? 122 [RadioIf] Can not send yet, busyTx
??:??:?? 122 [RadioIf] Can not send yet, busyTx
??:??:?? 122 [RadioIf] Can not send yet, busyTx
??:??:?? 122 [RadioIf] Can not send yet, busyTx
??:??:?? 122 [RadioIf] Completed sending (id=0x615d02be Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=10)
??:??:?? 122 [RadioIf] Starting low level send (id=0x615d02bf Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=64)
??:??:?? 122 [RadioIf] (bw=250, sf=11, cr=4/8) packet symLen=8 ms, payloadSize=44, time 886 ms
??:??:?? 122 [RadioIf] AirTime - Packet transmitted : 886ms
??:??:?? 123 [RadioIf] Completed sending (id=0x615d02bf Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=64)
??:??:?? 126 [SendRoutineMessageModule] Routine Message Module - Sending heartbeat every 60000 ms
??:??:?? 126 [SendRoutineMessageModule] gpsStatus->getLatitude()     0
??:??:?? 126 [SendRoutineMessageModule] gpsStatus->getLongitude()    0
??:??:?? 126 [SendRoutineMessageModule] gpsStatus->getHasLock()      0
??:??:?? 126 [SendRoutineMessageModule] gpsStatus->getDOP()          0
??:??:?? 126 [SendRoutineMessageModule] gpsStatus->getHasLock()      0
??:??:?? 126 [SendRoutineMessageModule] pref.fixed_position()        0
??:??:?? 126 [SendRoutineMessageModule] cancelSending id=0x615d02bb, removed=0
??:??:?? 126 [SendRoutineMessageModule] sending owner !d16c28bc/Meshtastic 28bc/28bc
??:??:?? 126 [SendRoutineMessageModule] Update DB node 0xd16c28bc, rx_time=0
??:??:?? 126 [SendRoutineMessageModule] handleReceived(LOCAL) (id=0x615d02c0 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=1 priority=10)
??:??:?? 126 [SendRoutineMessageModule] Module 'SendRoutineMessageModuleRadio' wantsPacket=1
??:??:?? 126 [SendRoutineMessageModule] Routine Message Module Disabled
??:??:?? 126 [SendRoutineMessageModule] Module 'SendRoutineMessageModuleRadio' considered
??:??:?? 126 [SendRoutineMessageModule] Add packet record (id=0x615d02c0 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=1 priority=10)
??:??:?? 126 [SendRoutineMessageModule] Should encrypt MQTT?: 1
??:??:?? 126 [SendRoutineMessageModule] Original length - 29
??:??:?? 126 [SendRoutineMessageModule] Compressed length - 26
??:??:?? 126 [SendRoutineMessageModule] Original message - Meshtastic 28bc/CAN'T GET GPS
??:??:?? 126 [SendRoutineMessageModule] Using compressed message.
??:??:?? 126 [SendRoutineMessageModule] Expanding short PSK #1
??:??:?? 126 [SendRoutineMessageModule] Using AES128 key!
??:??:?? 126 [SendRoutineMessageModule] ESP32 crypt fr=d16c28bc, num=615d02c0, numBytes=33!
??:??:?? 126 [SendRoutineMessageModule] enqueuing for send (id=0x615d02c0 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=10)
??:??:?? 126 [SendRoutineMessageModule] txGood=11,rxGood=0,rxBad=0
??:??:?? 126 [SendRoutineMessageModule] Using channel 0 (hash 0x6e)
??:??:?? 126 [SendRoutineMessageModule] Expanding short PSK #1
??:??:?? 126 [SendRoutineMessageModule] Using AES128 key!
??:??:?? 126 [SendRoutineMessageModule] ESP32 crypt fr=d16c28bc, num=615d02c0, numBytes=33!
??:??:?? 126 [SendRoutineMessageModule] decoded message (id=0x615d02c0 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=1 priority=10)
??:??:?? 126 Telling client we have new packets 10
??:??:?? 126 BLE notify fromNum
??:??:?? 126 [RadioIf] From Radio onread
??:??:?? 126 [RadioIf] available hasPacket=1
??:??:?? 126 [RadioIf] getFromRadio=STATE_SEND_PACKETS
??:??:?? 126 [RadioIf] phone downloaded packet (id=0x615d02c0 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=1 priority=10)
??:??:?? 126 [RadioIf] Starting low level send (id=0x615d02c0 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=10)
??:??:?? 127 [RadioIf] (bw=250, sf=11, cr=4/8) packet symLen=8 ms, payloadSize=49, time 952 ms
??:??:?? 127 [RadioIf] AirTime - Packet transmitted : 952ms
??:??:?? 127 From Radio onread
??:??:?? 127 available hasPacket=0
??:??:?? 127 getFromRadio=not available
??:??:?? 127 [RadioIf] Completed sending (id=0x615d02c0 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=10)
??:??:?? 141 [Power] Battery: usbPower=1, isCharging=0, batMv=4170, batPct=100
??:??:?? 151 [NodeInfoModule] Sending our nodeinfo to mesh (wantReplies=0)
??:??:?? 151 [NodeInfoModule] cancelSending id=0x615d02be, removed=0
??:??:?? 151 [NodeInfoModule] sending owner !d16c28bc/Meshtastic 28bc/28bc
??:??:?? 151 [NodeInfoModule] Update DB node 0xd16c28bc, rx_time=0
??:??:?? 151 [NodeInfoModule] handleReceived(LOCAL) (id=0x615d02c1 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=4 priority=10)
??:??:?? 151 [NodeInfoModule] No modules interested in portnum=4, src=LOCAL
??:??:?? 151 [NodeInfoModule] Add packet record (id=0x615d02c1 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=4 priority=10)
??:??:?? 151 [NodeInfoModule] Should encrypt MQTT?: 1
??:??:?? 151 [NodeInfoModule] Expanding short PSK #1
??:??:?? 151 [NodeInfoModule] Using AES128 key!
??:??:?? 151 [NodeInfoModule] ESP32 crypt fr=d16c28bc, num=615d02c1, numBytes=48!
??:??:?? 151 [NodeInfoModule] enqueuing for send (id=0x615d02c1 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=10)
??:??:?? 151 [NodeInfoModule] txGood=12,rxGood=0,rxBad=0
??:??:?? 151 [RadioIf] Starting low level send (id=0x615d02c1 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=10)
??:??:?? 151 [RadioIf] (bw=250, sf=11, cr=4/8) packet symLen=8 ms, payloadSize=64, time 1132 ms
??:??:?? 151 [RadioIf] AirTime - Packet transmitted : 1132ms
??:??:?? 151 [DeviceTelemetryModule] -----------------------------------------
??:??:?? 151 [DeviceTelemetryModule] Device Telemetry: Read data
??:??:?? 151 [DeviceTelemetryModule] Telemetry->time: 151
??:??:?? 151 [DeviceTelemetryModule] Telemetry->air_util_tx: 0.360056
??:??:?? 151 [DeviceTelemetryModule] Telemetry->battery_level: 100
??:??:?? 151 [DeviceTelemetryModule] Telemetry->channel_utilization: 8.313334
??:??:?? 151 [DeviceTelemetryModule] Telemetry->voltage: 4.170000
??:??:?? 151 [DeviceTelemetryModule] Device Telemetry: Sending packet to mesh
??:??:?? 151 [DeviceTelemetryModule] Update DB node 0xd16c28bc, rx_time=0
??:??:?? 151 [DeviceTelemetryModule] handleReceived(LOCAL) (id=0x615d02c2 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=67)
??:??:?? 151 [DeviceTelemetryModule] No modules interested in portnum=67, src=LOCAL
??:??:?? 151 [DeviceTelemetryModule] Add packet record (id=0x615d02c2 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=67)
??:??:?? 151 [DeviceTelemetryModule] Should encrypt MQTT?: 1
??:??:?? 151 [DeviceTelemetryModule] Expanding short PSK #1
??:??:?? 151 [DeviceTelemetryModule] Using AES128 key!
??:??:?? 151 [DeviceTelemetryModule] ESP32 crypt fr=d16c28bc, num=615d02c2, numBytes=28!
??:??:?? 151 [DeviceTelemetryModule] enqueuing for send (id=0x615d02c2 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted)
??:??:?? 151 [DeviceTelemetryModule] txGood=12,rxGood=0,rxBad=0
??:??:?? 151 [DeviceTelemetryModule] Using channel 0 (hash 0x6e)
??:??:?? 151 [DeviceTelemetryModule] Expanding short PSK #1
??:??:?? 151 [DeviceTelemetryModule] Using AES128 key!
??:??:?? 151 [DeviceTelemetryModule] ESP32 crypt fr=d16c28bc, num=615d02c2, numBytes=28!
??:??:?? 151 [DeviceTelemetryModule] decoded message (id=0x615d02c2 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=67 priority=64)
??:??:?? 151 [DeviceTelemetryModule] updateTelemetry LOCAL
??:??:?? 151 [DeviceTelemetryModule] Node status update: 1 online, 1 total
??:??:?? 151 Telling client we have new packets 11
??:??:?? 151 BLE notify fromNum
??:??:?? 151 [RadioIf] Can not send yet, busyTx
??:??:?? 152 [WebServerThread] From Radio onread
??:??:?? 152 available hasPacket=1
??:??:?? 152 getFromRadio=STATE_SEND_PACKETS
??:??:?? 152 phone downloaded packet (id=0x615d02c2 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=67 priority=64)
??:??:?? 152 [RadioIf] Can not send yet, busyTx
??:??:?? 152 From Radio onread
??:??:?? 152 available hasPacket=0
??:??:?? 152 getFromRadio=not available
??:??:?? 152 [RadioIf] Can not send yet, busyTx
??:??:?? 152 [RadioIf] Can not send yet, busyTx
??:??:?? 152 [RadioIf] Can not send yet, busyTx
??:??:?? 152 [RadioIf] Can not send yet, busyTx
??:??:?? 152 [RadioIf] Can not send yet, busyTx
??:??:?? 152 [RadioIf] Can not send yet, busyTx
??:??:?? 152 [RadioIf] Can not send yet, busyTx
??:??:?? 152 [RadioIf] Completed sending (id=0x615d02c1 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=10)
??:??:?? 152 [RadioIf] Starting low level send (id=0x615d02c2 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=64)
??:??:?? 152 [RadioIf] (bw=250, sf=11, cr=4/8) packet symLen=8 ms, payloadSize=44, time 886 ms
??:??:?? 152 [RadioIf] AirTime - Packet transmitted : 886ms
??:??:?? 153 [RadioIf] Completed sending (id=0x615d02c2 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=64)
??:??:?? 161 [Power] Battery: usbPower=1, isCharging=0, batMv=4170, batPct=100
??:??:?? 181 [GPS] WANT GPS=1
??:??:?? 181 [NodeInfoModule] Sending our nodeinfo to mesh (wantReplies=0)
??:??:?? 181 [NodeInfoModule] cancelSending id=0x615d02c1, removed=0
??:??:?? 181 [NodeInfoModule] sending owner !d16c28bc/Meshtastic 28bc/28bc
??:??:?? 181 [NodeInfoModule] Update DB node 0xd16c28bc, rx_time=0
??:??:?? 181 [NodeInfoModule] handleReceived(LOCAL) (id=0x615d02c3 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=4 priority=10)
??:??:?? 181 [NodeInfoModule] No modules interested in portnum=4, src=LOCAL
??:??:?? 181 [NodeInfoModule] Add packet record (id=0x615d02c3 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=4 priority=10)
??:??:?? 181 [NodeInfoModule] Should encrypt MQTT?: 1
??:??:?? 181 [NodeInfoModule] Expanding short PSK #1
??:??:?? 181 [NodeInfoModule] Using AES128 key!
??:??:?? 181 [NodeInfoModule] ESP32 crypt fr=d16c28bc, num=615d02c3, numBytes=48!
??:??:?? 181 [NodeInfoModule] enqueuing for send (id=0x615d02c3 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=10)
??:??:?? 181 [NodeInfoModule] txGood=14,rxGood=0,rxBad=0
??:??:?? 181 [RadioIf] Starting low level send (id=0x615d02c3 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=10)
??:??:?? 181 [RadioIf] (bw=250, sf=11, cr=4/8) packet symLen=8 ms, payloadSize=64, time 1132 ms
??:??:?? 181 [RadioIf] AirTime - Packet transmitted : 1132ms
??:??:?? 181 [Power] Battery: usbPower=1, isCharging=0, batMv=4170, batPct=100
??:??:?? 181 [DeviceTelemetryModule] -----------------------------------------
??:??:?? 181 [DeviceTelemetryModule] Device Telemetry: Read data
??:??:?? 181 [DeviceTelemetryModule] Telemetry->time: 181
??:??:?? 181 [DeviceTelemetryModule] Telemetry->air_util_tx: 0.384667
??:??:?? 181 [DeviceTelemetryModule] Telemetry->battery_level: 100
??:??:?? 181 [DeviceTelemetryModule] Telemetry->channel_utilization: 6.426667
??:??:?? 181 [DeviceTelemetryModule] Telemetry->voltage: 4.170000
??:??:?? 181 [DeviceTelemetryModule] Device Telemetry: Sending packet to mesh
??:??:?? 181 [DeviceTelemetryModule] Update DB node 0xd16c28bc, rx_time=0
??:??:?? 181 [DeviceTelemetryModule] handleReceived(LOCAL) (id=0x615d02c4 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=67)
??:??:?? 181 [DeviceTelemetryModule] No modules interested in portnum=67, src=LOCAL
??:??:?? 181 [DeviceTelemetryModule] Add packet record (id=0x615d02c4 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=67)
??:??:?? 182 [DeviceTelemetryModule] Should encrypt MQTT?: 1
??:??:?? 182 [DeviceTelemetryModule] Expanding short PSK #1
??:??:?? 182 [DeviceTelemetryModule] Using AES128 key!
??:??:?? 182 [DeviceTelemetryModule] ESP32 crypt fr=d16c28bc, num=615d02c4, numBytes=28!
??:??:?? 182 [DeviceTelemetryModule] enqueuing for send (id=0x615d02c4 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted)
??:??:?? 182 [DeviceTelemetryModule] txGood=14,rxGood=0,rxBad=0
??:??:?? 182 [DeviceTelemetryModule] Using channel 0 (hash 0x6e)
??:??:?? 182 [DeviceTelemetryModule] Expanding short PSK #1
??:??:?? 182 [DeviceTelemetryModule] Using AES128 key!
??:??:?? 182 [DeviceTelemetryModule] ESP32 crypt fr=d16c28bc, num=615d02c4, numBytes=28!
??:??:?? 182 [DeviceTelemetryModule] decoded message (id=0x615d02c4 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=67 priority=64)
??:??:?? 182 [DeviceTelemetryModule] updateTelemetry LOCAL
??:??:?? 182 [DeviceTelemetryModule] Node status update: 1 online, 1 total
??:??:?? 182 Telling client we have new packets 12
??:??:?? 182 BLE notify fromNum
??:??:?? 182 [RadioIf] Can not send yet, busyTx
??:??:?? 182 [RadioIf] Can not send yet, busyTx
??:??:?? 182 From Radio onread
??:??:?? 182 available hasPacket=1
??:??:?? 182 getFromRadio=STATE_SEND_PACKETS
??:??:?? 182 phone downloaded packet (id=0x615d02c4 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=67 priority=64)
??:??:?? 182 [RadioIf] Can not send yet, busyTx
??:??:?? 182 From Radio onread
??:??:?? 182 available hasPacket=0
??:??:?? 182 getFromRadio=not available
??:??:?? 182 [RadioIf] Can not send yet, busyTx
??:??:?? 182 [RadioIf] Can not send yet, busyTx
??:??:?? 182 [RadioIf] Can not send yet, busyTx
??:??:?? 182 [RadioIf] Can not send yet, busyTx
??:??:?? 182 [RadioIf] Can not send yet, busyTx
??:??:?? 182 [RadioIf] Can not send yet, busyTx
??:??:?? 182 [RadioIf] Can not send yet, busyTx
??:??:?? 182 [RadioIf] Can not send yet, busyTx
??:??:?? 182 [RadioIf] Can not send yet, busyTx
??:??:?? 182 [RadioIf] Can not send yet, busyTx
??:??:?? 182 [RadioIf] Can not send yet, busyTx
??:??:?? 182 [RadioIf] Can not send yet, busyTx
??:??:?? 182 [RadioIf] Completed sending (id=0x615d02c3 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=10)
??:??:?? 182 [RadioIf] Starting low level send (id=0x615d02c4 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=64)
??:??:?? 182 [RadioIf] (bw=250, sf=11, cr=4/8) packet symLen=8 ms, payloadSize=44, time 886 ms
??:??:?? 182 [RadioIf] AirTime - Packet transmitted : 886ms
??:??:?? 183 [RadioIf] Completed sending (id=0x615d02c4 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=64)
??:??:?? 186 [SendRoutineMessageModule] Routine Message Module - Sending heartbeat every 60000 ms
??:??:?? 186 [SendRoutineMessageModule] gpsStatus->getLatitude()     0
??:??:?? 186 [SendRoutineMessageModule] gpsStatus->getLongitude()    0
??:??:?? 186 [SendRoutineMessageModule] gpsStatus->getHasLock()      0
??:??:?? 186 [SendRoutineMessageModule] gpsStatus->getDOP()          0
??:??:?? 186 [SendRoutineMessageModule] gpsStatus->getHasLock()      0
??:??:?? 186 [SendRoutineMessageModule] pref.fixed_position()        0
??:??:?? 186 [SendRoutineMessageModule] cancelSending id=0x615d02c0, removed=0
??:??:?? 186 [SendRoutineMessageModule] sending owner !d16c28bc/Meshtastic 28bc/28bc
??:??:?? 186 [SendRoutineMessageModule] Update DB node 0xd16c28bc, rx_time=0
??:??:?? 186 [SendRoutineMessageModule] handleReceived(LOCAL) (id=0x615d02c5 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=1 priority=10)
??:??:?? 186 [SendRoutineMessageModule] Module 'SendRoutineMessageModuleRadio' wantsPacket=1
??:??:?? 186 [SendRoutineMessageModule] Routine Message Module Disabled
??:??:?? 186 [SendRoutineMessageModule] Module 'SendRoutineMessageModuleRadio' considered
??:??:?? 186 [SendRoutineMessageModule] Add packet record (id=0x615d02c5 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=1 priority=10)
??:??:?? 186 [SendRoutineMessageModule] Should encrypt MQTT?: 1
??:??:?? 186 [SendRoutineMessageModule] Original length - 29
??:??:?? 186 [SendRoutineMessageModule] Compressed length - 26
??:??:?? 186 [SendRoutineMessageModule] Original message - Meshtastic 28bc/CAN'T GET GPS
??:??:?? 186 [SendRoutineMessageModule] Using compressed message.
??:??:?? 186 [SendRoutineMessageModule] Expanding short PSK #1
??:??:?? 186 [SendRoutineMessageModule] Using AES128 key!
??:??:?? 186 [SendRoutineMessageModule] ESP32 crypt fr=d16c28bc, num=615d02c5, numBytes=33!
??:??:?? 186 [SendRoutineMessageModule] enqueuing for send (id=0x615d02c5 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=10)
??:??:?? 186 [SendRoutineMessageModule] txGood=16,rxGood=0,rxBad=0
??:??:?? 186 [SendRoutineMessageModule] Using channel 0 (hash 0x6e)
??:??:?? 186 [SendRoutineMessageModule] Expanding short PSK #1
??:??:?? 186 [SendRoutineMessageModule] Using AES128 key!
??:??:?? 186 [SendRoutineMessageModule] ESP32 crypt fr=d16c28bc, num=615d02c5, numBytes=33!
??:??:?? 186 [SendRoutineMessageModule] decoded message (id=0x615d02c5 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=1 priority=10)
??:??:?? 186 Telling client we have new packets 13
??:??:?? 186 BLE notify fromNum
??:??:?? 187 [RadioIf] From Radio onread
??:??:?? 187 [RadioIf] available hasPacket=1
??:??:?? 187 [RadioIf] getFromRadio=STATE_SEND_PACKETS
??:??:?? 187 [RadioIf] phone downloaded packet (id=0x615d02c5 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=1 priority=10)
??:??:?? 187 [RadioIf] Starting low level send (id=0x615d02c5 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=10)
??:??:?? 187 [RadioIf] (bw=250, sf=11, cr=4/8) packet symLen=8 ms, payloadSize=49, time 952 ms
??:??:?? 187 [RadioIf] AirTime - Packet transmitted : 952ms
??:??:?? 187 [Blink] From Radio onread
??:??:?? 187 [Blink] available hasPacket=0
??:??:?? 187 [Blink] getFromRadio=not available
??:??:?? 188 [RadioIf] Completed sending (id=0x615d02c5 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=10)
??:??:?? 201 [Power] Battery: usbPower=1, isCharging=0, batMv=4170, batPct=100
??:??:?? 211 [NodeInfoModule] Sending our nodeinfo to mesh (wantReplies=0)
??:??:?? 211 [NodeInfoModule] cancelSending id=0x615d02c3, removed=0
??:??:?? 211 [NodeInfoModule] sending owner !d16c28bc/Meshtastic 28bc/28bc
??:??:?? 211 [NodeInfoModule] Update DB node 0xd16c28bc, rx_time=0
??:??:?? 211 [NodeInfoModule] handleReceived(LOCAL) (id=0x615d02c6 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=4 priority=10)
??:??:?? 211 [NodeInfoModule] No modules interested in portnum=4, src=LOCAL
??:??:?? 211 [NodeInfoModule] Add packet record (id=0x615d02c6 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=4 priority=10)
??:??:?? 211 [NodeInfoModule] Should encrypt MQTT?: 1
??:??:?? 211 [NodeInfoModule] Expanding short PSK #1
??:??:?? 211 [NodeInfoModule] Using AES128 key!
??:??:?? 211 [NodeInfoModule] ESP32 crypt fr=d16c28bc, num=615d02c6, numBytes=48!
??:??:?? 211 [NodeInfoModule] enqueuing for send (id=0x615d02c6 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=10)
??:??:?? 211 [NodeInfoModule] txGood=17,rxGood=0,rxBad=0
??:??:?? 211 [RadioIf] Starting low level send (id=0x615d02c6 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=10)
??:??:?? 211 [RadioIf] (bw=250, sf=11, cr=4/8) packet symLen=8 ms, payloadSize=64, time 1132 ms
??:??:?? 211 [RadioIf] AirTime - Packet transmitted : 1132ms
??:??:?? 212 [DeviceTelemetryModule] -----------------------------------------
??:??:?? 212 [DeviceTelemetryModule] Device Telemetry: Read data
??:??:?? 212 [DeviceTelemetryModule] Telemetry->time: 211
??:??:?? 212 [DeviceTelemetryModule] Telemetry->air_util_tx: 0.467167
??:??:?? 212 [DeviceTelemetryModule] Telemetry->battery_level: 100
??:??:?? 212 [DeviceTelemetryModule] Telemetry->channel_utilization: 4.950000
??:??:?? 212 [DeviceTelemetryModule] Telemetry->voltage: 4.170000
??:??:?? 212 [DeviceTelemetryModule] Device Telemetry: Sending packet to mesh
??:??:?? 212 [DeviceTelemetryModule] Update DB node 0xd16c28bc, rx_time=0
??:??:?? 212 [DeviceTelemetryModule] handleReceived(LOCAL) (id=0x615d02c7 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=67)
??:??:?? 212 [DeviceTelemetryModule] No modules interested in portnum=67, src=LOCAL
??:??:?? 212 [DeviceTelemetryModule] Add packet record (id=0x615d02c7 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=67)
??:??:?? 212 [DeviceTelemetryModule] Should encrypt MQTT?: 1
??:??:?? 212 [DeviceTelemetryModule] Expanding short PSK #1
??:??:?? 212 [DeviceTelemetryModule] Using AES128 key!
??:??:?? 212 [DeviceTelemetryModule] ESP32 crypt fr=d16c28bc, num=615d02c7, numBytes=28!
??:??:?? 212 [DeviceTelemetryModule] enqueuing for send (id=0x615d02c7 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted)
??:??:?? 212 [DeviceTelemetryModule] txGood=17,rxGood=0,rxBad=0
??:??:?? 212 [DeviceTelemetryModule] Using channel 0 (hash 0x6e)
??:??:?? 212 [DeviceTelemetryModule] Expanding short PSK #1
??:??:?? 212 [DeviceTelemetryModule] Using AES128 key!
??:??:?? 212 [DeviceTelemetryModule] ESP32 crypt fr=d16c28bc, num=615d02c7, numBytes=28!
??:??:?? 212 [DeviceTelemetryModule] decoded message (id=0x615d02c7 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=67 priority=64)
??:??:?? 212 [DeviceTelemetryModule] updateTelemetry LOCAL
??:??:?? 212 [DeviceTelemetryModule] Node status update: 1 online, 1 total
??:??:?? 212 Telling client we have new packets 14
??:??:?? 212 BLE notify fromNum
??:??:?? 212 From Radio onread
??:??:?? 212 available hasPacket=1
??:??:?? 212 getFromRadio=STATE_SEND_PACKETS
??:??:?? 212 phone downloaded packet (id=0x615d02c7 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=67 priority=64)
??:??:?? 212 From Radio onread
??:??:?? 212 available hasPacket=0
??:??:?? 212 getFromRadio=not available
??:??:?? 212 [RadioIf] Can not send yet, busyTx
??:??:?? 212 [RadioIf] Can not send yet, busyTx
??:??:?? 212 [RadioIf] Can not send yet, busyTx
??:??:?? 212 [RadioIf] Can not send yet, busyTx
??:??:?? 212 [RadioIf] Can not send yet, busyTx
??:??:?? 212 [RadioIf] Completed sending (id=0x615d02c6 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=10)
??:??:?? 212 [RadioIf] Starting low level send (id=0x615d02c7 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=64)
??:??:?? 212 [RadioIf] (bw=250, sf=11, cr=4/8) packet symLen=8 ms, payloadSize=44, time 886 ms
??:??:?? 212 [RadioIf] AirTime - Packet transmitted : 886ms
??:??:?? 213 [RadioIf] Completed sending (id=0x615d02c7 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=64)
??:??:?? 221 [Power] Battery: usbPower=1, isCharging=0, batMv=4169, batPct=100
??:??:?? 241 [GPS] WANT GPS=0
??:??:?? 241 [GPS] publishing pos@0:2, hasVal=0, GPSlock=0
??:??:?? 241 [GPS] onGPSChanged() pos@0, time=0, lat=0, lon=0, alt=0
??:??:?? 241 [GPS] updatePosition LOCAL pos@0, time=0, latI=0, lonI=0, alt=0
??:??:?? 241 [GPS] Node status update: 1 online, 1 total
??:??:?? 241 [NodeInfoModule] Sending our nodeinfo to mesh (wantReplies=0)
??:??:?? 241 [NodeInfoModule] cancelSending id=0x615d02c6, removed=0
??:??:?? 241 [NodeInfoModule] sending owner !d16c28bc/Meshtastic 28bc/28bc
??:??:?? 241 [NodeInfoModule] Update DB node 0xd16c28bc, rx_time=0
??:??:?? 241 [NodeInfoModule] handleReceived(LOCAL) (id=0x615d02c8 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=4 priority=10)
??:??:?? 241 [NodeInfoModule] No modules interested in portnum=4, src=LOCAL
??:??:?? 241 [NodeInfoModule] Add packet record (id=0x615d02c8 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=4 priority=10)
??:??:?? 241 [NodeInfoModule] Should encrypt MQTT?: 1
??:??:?? 241 [NodeInfoModule] Expanding short PSK #1
??:??:?? 241 [NodeInfoModule] Using AES128 key!
??:??:?? 241 [NodeInfoModule] ESP32 crypt fr=d16c28bc, num=615d02c8, numBytes=48!
??:??:?? 241 [NodeInfoModule] enqueuing for send (id=0x615d02c8 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=10)
??:??:?? 241 [NodeInfoModule] txGood=19,rxGood=0,rxBad=0
??:??:?? 241 [RadioIf] Starting low level send (id=0x615d02c8 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=10)
??:??:?? 241 [RadioIf] (bw=250, sf=11, cr=4/8) packet symLen=8 ms, payloadSize=64, time 1132 ms
??:??:?? 241 [RadioIf] AirTime - Packet transmitted : 1132ms
??:??:?? 241 [Power] Battery: usbPower=1, isCharging=0, batMv=4169, batPct=100
??:??:?? 242 [DeviceTelemetryModule] -----------------------------------------
??:??:?? 242 [DeviceTelemetryModule] Device Telemetry: Read data
??:??:?? 242 [DeviceTelemetryModule] Telemetry->time: 241
??:??:?? 242 [DeviceTelemetryModule] Telemetry->air_util_tx: 0.554667
??:??:?? 242 [DeviceTelemetryModule] Telemetry->battery_level: 100
??:??:?? 242 [DeviceTelemetryModule] Telemetry->channel_utilization: 6.836667
??:??:?? 242 [DeviceTelemetryModule] Telemetry->voltage: 4.169000
??:??:?? 242 [DeviceTelemetryModule] Device Telemetry: Sending packet to mesh
??:??:?? 242 [DeviceTelemetryModule] Update DB node 0xd16c28bc, rx_time=0
??:??:?? 242 [DeviceTelemetryModule] handleReceived(LOCAL) (id=0x615d02c9 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=67)
??:??:?? 242 [DeviceTelemetryModule] No modules interested in portnum=67, src=LOCAL
??:??:?? 242 [DeviceTelemetryModule] Add packet record (id=0x615d02c9 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=67)
??:??:?? 242 [DeviceTelemetryModule] Should encrypt MQTT?: 1
??:??:?? 242 [DeviceTelemetryModule] Expanding short PSK #1
??:??:?? 242 [DeviceTelemetryModule] Using AES128 key!
??:??:?? 242 [DeviceTelemetryModule] ESP32 crypt fr=d16c28bc, num=615d02c9, numBytes=28!
??:??:?? 242 [DeviceTelemetryModule] enqueuing for send (id=0x615d02c9 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted)
??:??:?? 242 [DeviceTelemetryModule] txGood=19,rxGood=0,rxBad=0
??:??:?? 242 [DeviceTelemetryModule] Using channel 0 (hash 0x6e)
??:??:?? 242 [DeviceTelemetryModule] Expanding short PSK #1
??:??:?? 242 [DeviceTelemetryModule] Using AES128 key!
??:??:?? 242 [DeviceTelemetryModule] ESP32 crypt fr=d16c28bc, num=615d02c9, numBytes=28!
??:??:?? 242 [DeviceTelemetryModule] decoded message (id=0x615d02c9 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=67 priority=64)
??:??:?? 242 [DeviceTelemetryModule] updateTelemetry LOCAL
??:??:?? 242 [DeviceTelemetryModule] Node status update: 1 online, 1 total
??:??:?? 242 Telling client we have new packets 15
??:??:?? 242 BLE notify fromNum
??:??:?? 242 [RadioIf] Can not send yet, busyTx
??:??:?? 242 [RadioIf] Can not send yet, busyTx
??:??:?? 242 [RadioIf] Can not send yet, busyTx
??:??:?? 242 [RadioIf] Can not send yet, busyTx
??:??:?? 242 [RadioIf] Can not send yet, busyTx
??:??:?? 242 [RadioIf] Can not send yet, busyTx
??:??:?? 242 From Radio onread
??:??:?? 242 available hasPacket=0
??:??:?? 242 getFromRadio=not available
??:??:?? 242 [RadioIf] Can not send yet, busyTx
??:??:?? 242 [RadioIf] Can not send yet, busyTx
??:??:?? 242 [RadioIf] Can not send yet, busyTx
??:??:?? 242 [RadioIf] Can not send yet, busyTx
??:??:?? 242 [RadioIf] Can not send yet, busyTx
??:??:?? 242 [RadioIf] Can not send yet, busyTx
??:??:?? 242 [RadioIf] Can not send yet, busyTx
??:??:?? 242 [RadioIf] Completed sending (id=0x615d02c8 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=10)
??:??:?? 242 [RadioIf] Starting low level send (id=0x615d02c9 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=64)
??:??:?? 242 [RadioIf] (bw=250, sf=11, cr=4/8) packet symLen=8 ms, payloadSize=44, time 886 ms
??:??:?? 242 [RadioIf] AirTime - Packet transmitted : 886ms
??:??:?? 243 [RadioIf] Completed sending (id=0x615d02c9 Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=64)
??:??:?? 246 [SendRoutineMessageModule] Routine Message Module - Sending heartbeat every 60000 ms
??:??:?? 246 [SendRoutineMessageModule] gpsStatus->getLatitude()     0
??:??:?? 246 [SendRoutineMessageModule] gpsStatus->getLongitude()    0
??:??:?? 246 [SendRoutineMessageModule] gpsStatus->getHasLock()      0
??:??:?? 246 [SendRoutineMessageModule] gpsStatus->getDOP()          0
??:??:?? 246 [SendRoutineMessageModule] gpsStatus->getHasLock()      0
??:??:?? 246 [SendRoutineMessageModule] pref.fixed_position()        0
??:??:?? 246 [SendRoutineMessageModule] cancelSending id=0x615d02c5, removed=0
??:??:?? 246 [SendRoutineMessageModule] sending owner !d16c28bc/Meshtastic 28bc/28bc
??:??:?? 246 [SendRoutineMessageModule] Update DB node 0xd16c28bc, rx_time=0
??:??:?? 246 [SendRoutineMessageModule] handleReceived(LOCAL) (id=0x615d02ca Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=1 priority=10)
??:??:?? 247 [SendRoutineMessageModule] Module 'SendRoutineMessageModuleRadio' wantsPacket=1
??:??:?? 247 [SendRoutineMessageModule] Routine Message Module Disabled
??:??:?? 247 [SendRoutineMessageModule] Module 'SendRoutineMessageModuleRadio' considered
??:??:?? 247 [SendRoutineMessageModule] Add packet record (id=0x615d02ca Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=1 priority=10)
??:??:?? 247 [SendRoutineMessageModule] Should encrypt MQTT?: 1
??:??:?? 247 [SendRoutineMessageModule] Original length - 29
??:??:?? 247 [SendRoutineMessageModule] Compressed length - 26
??:??:?? 247 [SendRoutineMessageModule] Original message - Meshtastic 28bc/CAN'T GET GPS
??:??:?? 247 [SendRoutineMessageModule] Using compressed message.
??:??:?? 247 [SendRoutineMessageModule] Expanding short PSK #1
??:??:?? 247 [SendRoutineMessageModule] Using AES128 key!
??:??:?? 247 [SendRoutineMessageModule] ESP32 crypt fr=d16c28bc, num=615d02ca, numBytes=33!
??:??:?? 247 [SendRoutineMessageModule] enqueuing for send (id=0x615d02ca Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=10)
??:??:?? 247 [SendRoutineMessageModule] txGood=21,rxGood=0,rxBad=0
??:??:?? 247 [SendRoutineMessageModule] Using channel 0 (hash 0x6e)
??:??:?? 247 [SendRoutineMessageModule] Expanding short PSK #1
??:??:?? 247 [SendRoutineMessageModule] Using AES128 key!
??:??:?? 247 [SendRoutineMessageModule] ESP32 crypt fr=d16c28bc, num=615d02ca, numBytes=33!
??:??:?? 247 [SendRoutineMessageModule] decoded message (id=0x615d02ca Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=1 priority=10)
??:??:?? 247 Telling client we have new packets 16
??:??:?? 247 BLE notify fromNum
??:??:?? 247 [RadioIf] From Radio onread
??:??:?? 247 [RadioIf] available hasPacket=1
??:??:?? 247 [RadioIf] getFromRadio=STATE_SEND_PACKETS
??:??:?? 247 [RadioIf] phone downloaded packet (id=0x615d02ca Fr0xbc To0xff, WantAck0, HopLim3 Ch0x0 Portnum=1 priority=10)
??:??:?? 247 [RadioIf] (bw=250, sf=11, cr=4/8) packet symLen=8 ms, payloadSize=49, time 952 ms
??:??:?? 247 [RadioIf] AirTime - Packet transmitted : 952ms
??:??:?? 247 From Radio onread
??:??:?? 247 available hasPacket=0
??:??:?? 247 getFromRadio=not available
??:??:?? 248 [RadioIf] Completed sending (id=0x615d02ca Fr0xbc To0xff, WantAck0, HopLim3 Ch0x6e encrypted priority=10)
??:??:?? 261 [Power] Battery: usbPower=1, isCharging=0, batMv=4169, batPct=100
