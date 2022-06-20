const findTheOldest = function() {
    let people = arguments[0];
    const peopleAges = people.reduce(function(obj, person){
        if ('yearOfDeath' in person){
            obj[person.name] = (Number(person['yearOfDeath']) - Number(person['yearOfBirth']))

            return obj
        }else{
            obj[person.name]= 2022 - Number(person['yearOfBirth'])
            return obj
        }
    }, {})

    
    console.log(peopleAges)
    let oldest = Object.keys(peopleAges).reduce(function(a, b){ return peopleAges[a] > peopleAges[b] ? a : b});
    for (let i = 0; i < people.length; i ++){
        if (people[i].name == String(oldest)){
            return people[i]

        }

    }
};

// Do not edit below this line
module.exports = findTheOldest;
