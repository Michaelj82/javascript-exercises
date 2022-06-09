const ftoc = function(degree) {
  let celsius = (degree-32) * (5/9)
  celsius = celsius.toFixed(1);
  celsius = Number(celsius)
  return celsius
};

const ctof = function(degree) {
  let farenheit = (degree * (9/5)) + 32
  farenheit = farenheit.toFixed(1);
  farenheit = Number(farenheit)
  return farenheit
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
