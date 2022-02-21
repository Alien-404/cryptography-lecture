// req library and json data config
const fs = require('fs');
const rawdata = fs.readFileSync('./config.json');
const {value} = JSON.parse(rawdata);

// init var
const keys = Object.keys(value);
const values = Object.values(value);

module.exports.overacting = (plain) => {
    let overactingText = '';

    for (let i = 0; i < plain.length; i++) {
        let index = keys.indexOf(plain[i]);
        if(index >= 0) {
            const key = keys[index];
            overactingText += value[key];
        } else {
            overactingText += plain[i];
        }
    }

    return overactingText;
}


module.exports.normal = (overactingText) => {
    let normalText = '';
    for (let i = 0; i < overactingText.length; i++) {
        let index = values.indexOf(overactingText[i]);
        if(index >= 0) {
            const val = keys[index];
            normalText += val;
        } else {
            normalText += overactingText[i];
        }
    }

    return normalText;
}








