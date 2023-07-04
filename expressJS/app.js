import express from "express";
const app = express();


// IP
// Port

// app.get('/sky/:id', (req, res, next) => {
//   // console.log(req);
//   // console.log(req.header);
//   console.log(req.params);
//   // { id: 'minwoo' }
//   // 이렇게 접근 가능
//   console.log(req.params.id);
//   console.log(req.query);
//   //{ keyword: 'roWjsek' }
//   console.log(req.query.keyword);
//   res.send('안녕 express!')
// });

app.get('/', (req, res, next) => {

  res.setHeader('key', 'value')
  res.status(201).send('created')
  res.json({name: 'minwoo'})
});

app.listen(8080);