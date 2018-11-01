module.exports = function (name, pin) {

    //probably want to default this to null on real hardware
    let value = true
    let lastUpdate = new Date();

    const get = () => {
        return value
    }

    const update = () => {
        //get value
        //update lastUpdate
        //timer for this in scheduler
        
        toggle();
        lastUpdate = new Date();
    }

    const toggle = () => {
        value = !value;
    }


    update()
    setInterval(update,5000)

    return { name, pin, lastUpdate, update, get }
}

