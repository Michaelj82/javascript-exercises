const add = function() {
  let initialSum = 0;
  for (let i=0; i < arguments.length; i++){
    initialSum += arguments[i]
  }
  return initialSum
};

const subtract = function() {
  return (arguments[0] - arguments[1])
};

const sum = function() {
  let initialSum = 0;
  for (let i = 0; i < arguments[0].length; i++){
    initialSum += arguments[0][i]
  }
  return initialSum
};	

const multiply = function() {
  let sum = arguments[0][0]
  for (let i = 1; i < arguments[0].length; i++){
    sum = sum * arguments[0][i]


  }
  return sum
};

const power = function() {
	return (arguments[0] ** arguments[1])
};

const factorial = function(){
  let number = arguments[0]
  let sum = 1
  if (number == 0){
    return 1
  }else{
    for (number = number; number > 0; number --){
      sum = sum * number
    }
    return sum
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
