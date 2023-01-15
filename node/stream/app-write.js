const fs = require('fs');
const readstream = fs.createReadStream('./file.txt');

const writeStream = fs.createReadStream('./file3.txt');
writeStream.on('finish', () => {
  console.log('finished!');
});

writeStream.write('hello!');
writeStream.write('hello!~~');

writeStream.on('end', () => {
  console.log('끝!')
})