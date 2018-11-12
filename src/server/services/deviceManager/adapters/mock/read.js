module.exports = function (name, cfg) {

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

    return { name, cfg, lastUpdate, get }
}

