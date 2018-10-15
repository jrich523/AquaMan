# AquaMan

Aqua/Hydro-ponics system automation built on a BeagleBone Black. Essentially a rule processing system for hardware.


## Configurations

The configuration of devices is located in `/app/config/deviceconfig.json` and just requires 3 peices of information.

1. Name - name to reference device
1. Pin - What pin its connected to
1. Type - The type of device it is (see Device Library below)

```json
{
	"devices": [
		{"name": "btn1","type": "button", "pin": "P8_9"  },
		{"name": "usr0", "type": "LED",    "pin": "USR0"  },
		{"name": "usr1", "type": "LED",    "pin": "USR1"  },
		{"name": "usr0", "type": "LED",    "pin": "USR0"  }
	]
}
```


## Device Library

The simplicity of device configuration is relient upon a "driver" so to speak, which all live in `/app/services/deviceManager/devices` each folder is a device type. Currently each device type inherits from the Input/Output classes so it should be very easy to create new devices.

FIGURE OUT HOW TO MOCK CORRECTLY

## Scheduler

Its not there yet, but i'll get there!
https://github.com/wahengchang/nodejs-cron-job-must-know