import express from "express";
const post = express();

post.use(express.json());

post.post('/', (req, res, next) => {
  console.log(req.body);
})

post.listen(8080);