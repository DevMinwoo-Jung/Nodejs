const fs = require('fs');

// stream은 
const readSream = fs.createReadStream('./file.txt', {
  highWaterMark: 800,// 64kb
  encoding: 'utf-8',
});

const data = [];

readSream.on('data', (chunk) => {
  // console.log(chunk);
  data.push(chunk);
}).on('end', () => {
  console.log(data)
});


readSream.on('error', (error) => {
  console.log(error);
});