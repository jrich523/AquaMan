module.exports = function(devices){
    console.log(devices['usr3'].state)
    devices['usr3'].toggle()
}