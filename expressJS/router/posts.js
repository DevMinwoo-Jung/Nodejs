import express from "express";

const router = express.Router();

router.get('/', (req, res, next)=> {
  console.log('posts')
})

app.use(express.json());


export default router;