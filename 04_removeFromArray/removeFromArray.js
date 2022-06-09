const removeFromArray = function() {
    const args = Array.from(arguments)

    let list = args[0]

    const list_len = list.length

    let to_remove = args.slice(1)

    for (let i = 0; i < list_len; i++){
        if (to_remove.includes(list[i])){
            list.splice(i, 1)
            i--
        }

    }
    return list

};

// Do not edit below this line
module.exports = removeFromArray;
