const process = require('process');

console.log(process);
console.log(process.version);

setTimeout(() => {
  console.log('setTimeout');
}, 0);

process.nextTick(() => {
  console.log('nextTick');
});
// nextTick이 setTimeout보다 먼저 시작된다.

for(let i=0; i<10000; i++){
  console.log('forloop');
}