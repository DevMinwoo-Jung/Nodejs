const fs = require('fs');
const zlib = require('zlib');
const readstream = fs.createReadStream('./file.txt');
const writeStream = fs.createWriteStream('./file3.txt');
const zlibStream = zlib.createGzip();
const piping  = readstream.pipe(zlibStream).pipe(writeStream);


piping.on('finish', () => {
  console.log('끝!');
})

const http = require('http');
// const server = http.createServer((req, res) => {
//   fs.readFile('file.txt', (err, data) => {
//     res.end(data);
//   })
// }); 이거 보다는

const server = http.createServer((req, res) => {
  const stream = fs.createReadStream('file.txt');
  stream.pipe(res);
});
server.listen(3000);