function isFive(number) {
  if (number === 5) return true;

  return false;
}

function isOdd(number) {
  if (number % 2 === 0) return true;

  return false;
}

function myRange(min, max, step = 1) {
  let array = [];

  for (let i = min; i <= max; i += step) {
    array.push(i);
  }

  return array;
}

module.exports = {
  isFive,
  isOdd,
  myRange,
};
