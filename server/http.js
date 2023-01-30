const http = require('http');
// const http2 = require('http2');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  if(url === '/') {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    fs.createReadStream('index.html').pipe(res);
  } else if(url === '/course') {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.write('Course 입니다롱')
  } else {
    res.write('Not Found 404');
  }
  res.end();
});

server.listen(3002);