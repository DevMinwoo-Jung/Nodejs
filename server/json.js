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
  const method = req.method; 
  if(url === '/course') {
    if(method === 'GET') {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(course));
    } else if (method === 'POST') {
      const body = [];
      req.on('data', chunk => {
        console.log(chunk);
        body.push(chunk);
      })

      req.on('end', () => {
        const newCourse = JSON.parse(Buffer.concat(body).toString());
        course.push(newCourse);
        console.log(course);
        res.writeHead(201);
        res.end();
      })
    }
  }
});

server.listen(3002);