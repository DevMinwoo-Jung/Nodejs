const fs = require('fs');


const beforeMem = process.memoryUsage().rss;
fs.readFile('./file.txt', (_, data) => {
  fs.writeFile('./file2.txt', data, () => {});
  // calculate
  const afterMemory = process.memoryUsage().rss;
  const diff = afterMemory - beforeMem;
  const consumed = diff / 1024 / 1024;
  console.log(diff);
  console.log(`Counsumed Memory is: ${consumed}MB`);
})