const reverseString = function(string) {
    let new_string = ''
    let len = string.length
    for (let i = 0; i < len; i++){
        let last_letter = string.slice(-1)
        string = string.slice(0, -1)
        new_string = new_string.concat(last_letter)


    }
    return new_string

};

// Do not edit below this line
module.exports = reverseString;
