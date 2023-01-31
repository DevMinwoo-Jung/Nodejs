const http = require('http');
// const http2 = require('http2');
const fs = require('fs');
const ejs = require('ejs');
const name = 'Minwoo';
const course = [
  {name: 'javascript'},
  {name: 'typescript'},
  {name: 'React'},
  {name: 'Nodejs'},
]
const server = http.createServer((req, res) => {
  const url = req.url;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  if(url === '/') {
    ejs.renderFile(`${__dirname}/template/index.ejs`, {name})
    .then((data) => res.end(data));
  } else if(url === '/course') {
    ejs.renderFile(`${__dirname}/template/course.ejs`, {course})
    .then((data) => res.end(data));
  } else {
    ejs.renderFile(`${__dirname}/template/notFound.ejs`, {url})
    .then((data) => res.end(data));
  }
});

server.listen(3002);