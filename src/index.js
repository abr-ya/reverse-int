module.exports = function reverse (n) {
  return Number(String(n).replace('-','').split('').reverse().join(''));
}

const test = (n) => Number(String(n).split('').reverse().join(''));

console.log(test(123));
