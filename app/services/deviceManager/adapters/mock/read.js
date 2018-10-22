module.exports = function (name, pin) {

    let value = null
    let lastUpdate = new Date();

    const get = () => {
        return value
    }

    const update = () => {
        //get value
        //update lastUpdate
        //timer for this in scheduler
        lastUpdate = new Date();
    }

    return { name, pin, lastUpdate, update, get }
}

