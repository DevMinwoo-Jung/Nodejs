import express from "express";
const app = express();

app.use(express.json());

app.post('/', (req, res, next) => {
  console.log(req.body);
})

app.get('/file', (req, res) => {
  fs.readFile('/file1.tx', (err, data) => {
    if(err) {
      res.sendStatus(404);
    }
  })
})

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({message: '무언가가 잘못됐슈'})
})

post.listen(8080);