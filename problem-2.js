function add(param1, param2) {
  return param1 + param2;
}
console.log(add(2, 3));

function totalSum(...param1) {
  let total = 0;
  param1.forEach((num) => (total += num));
  return total;
}
console.log(totalSum(1, 3, 2, 3));
