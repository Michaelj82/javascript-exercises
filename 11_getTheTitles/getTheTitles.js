const getTheTitles = function() {
    let titles = [];
    for (let i = 0; i < arguments[0].length; i++){
        titles.push(arguments[0][i]['title'])


    }


    return titles

};

// Do not edit below this line
module.exports = getTheTitles;
