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

// app.get('/', (req, res, next) => {
//   console.log('first')
// });

// app.get('/', (req, res, next) => {
//   console.log('second')
// });

// // 위처럼 함녀 first만 나온다

// app.get('/', 
//   (req, res, next) => {
//     console.log('first');
//     next();
//     // 이걸 하면 밑에를 갔다가
//   },
//   (req, res, next) => {
//     console.log('second');
//     next();
//     // 여기서도 이걸 써줘야 끝남
//   }
// );

app.get('/', 
  (req, res, next) => {
    console.log('first');
    next('route');
    // 이걸 하면 밑에를 갔다가
  },
  (req, res, next) => {
    console.log('second');
    next();
    // 위에서 route해서 다음꺼 탐
  }
);

app.use((req, res, next) => {
  res.status(400).send('Not available!')
})

app.get('/', (req, res, next) => {
  console.log('thrid')
})

app.use((error, req, res, next)=> {
  console.error(error);
  res.status(500).send('관리자에게 문의하십시오');
})

app.listen(8080);