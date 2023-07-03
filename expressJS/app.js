import express from "express";
const app = express();


// IP
// Port

app.get('/', (req, res, next) => {
  console.log('get');
  res.send('안녕 express!')
});

app.listen(8080);