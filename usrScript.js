module.exports = function(devices){
    console.log(devices['usr3'].state)
    devices['usr3'].toggle()
    if(devices['white'].state)
    {
        console.log('switch active, light on')
        devices['usr1'].on()
    }
    else
    {
        console.log('switch inactive, light off')
        devices['usr1'].off()
    }
    
}