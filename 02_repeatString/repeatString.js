const repeatString = function(string, num) {
    if (num < 0) return 'ERROR'


    let final_string = ''
    for (let i = 0;i < num; i++){
        final_string = final_string.concat(string)
    }
    return final_string

};

// Do not edit below this line
module.exports = repeatString;
