#include "NodeDB.h"
#include "PowerFSM.h"
#include "concurrency/OSThread.h"
#include "configuration.h"
#include "main.h"
#include "power.h"

namespace concurrency
{
int Debug_count_d = 0;
/// Wrapper to convert our powerFSM stuff into a 'thread'
class PowerFSMThread : public OSThread
{
  public:
    // callback returns the period for the next callback invocation (or 0 if we should no longer be called)
    PowerFSMThread() : OSThread("PowerFSM") {}

  protected:
    int32_t runOnce() override
    {
        powerFSM.run_machine();

        /// If we are in power state we force the CPU to wake every 10ms to check for serial characters (we don't yet wake
        /// cpu for serial rx - FIXME)
        auto state = powerFSM.getState();
        canSleep = ((state != &statePOWER) && (state != &stateSERIAL) && (state != &stateDEBUG)); //Eason mod

        if (Device_debug_mode_enable_f) 
        {
            // DEBUG_MSG("[eason]state = %s\n", state->name);
            if (Debug_count_d == 0) 
            {
                DEBUG_MSG("DEBUG plugged ENTRY\n");
                powerFSM.trigger(EVENT_DEBUG_ENTRY);      
            }
            else if (state != &stateDEBUG && state != &stateBOOT && state != &statePOWER && state != &stateSERIAL)
            {
                DEBUG_MSG("DEBUG plugged ENTRY\n");
                powerFSM.trigger(EVENT_DEBUG_ENTRY); 
            }
            Debug_count_d = 1;
            // screen->setOn(true);
            // setBluetoothEnable(true);
            
        }
        else 
        {
            if(Debug_count_d > 0)
            {
                Debug_count_d = 0;
                DEBUG_MSG("DEBUG unplugged\n");
                powerFSM.trigger(EVENT_DEBUG_LEAVE);
            }
            if (powerStatus->getHasUSB()) {
                timeLastPowered = millis();
            } else if (config.power.on_battery_shutdown_after_secs > 0 &&
                      millis() >
                          timeLastPowered +
                              (1000 *
                                config.power.on_battery_shutdown_after_secs)) { // shutdown after 30 minutes unpowered
                powerFSM.trigger(EVENT_SHUTDOWN);
            }
        }
        

        return 10;
    }
};

} // namespace concurrency