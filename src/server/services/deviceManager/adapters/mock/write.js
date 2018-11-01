module.exports = function (name, pin, defaultState) {

    let value;
    let updateStamp = new Date();

    let on = function () {
        console.log('writer - on')
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

    return { name, pin, lastUpdate, get, on, off, toggle }
}

