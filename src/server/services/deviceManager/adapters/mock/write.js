module.exports = function (name, cfg, defaultState) {

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
    
    //Constructor actions
    if (defaultState) {
        on();
    }
    else {
        off()
    }

    return { name, cfg, lastUpdate, get, on, off, toggle }
}

