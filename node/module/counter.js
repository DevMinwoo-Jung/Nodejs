let count = 0;

function add() {
  count++;
}

function getCount() {
  return count;
}

module.exports.getCount = getCount;
// exports.add = add <- 가능
// exports만 쓰면 exports에 {}을 할당해 버리면 add를 더 이상 쓸 수 없게 된다
console.log(module.exports === exports);
exports = {};
console.log(module.exports === exports);
module.exports.add = add;