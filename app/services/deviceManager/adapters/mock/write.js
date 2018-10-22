module.exports = function (name, pin) {

    let value;
    let updateStamp = new Date();

    let on = function () {
        value = true;
    }

    let off = function () {
        value = false;
    }

    let toggle = function () {
        value = !value
    }

    let get = () => {
        return value;
    }

    let lastUpdate = () => {
        return updateStamp
    }

    off(); //default to off

    return { name, pin, lastUpdate, get, on, off, toggle }
}

