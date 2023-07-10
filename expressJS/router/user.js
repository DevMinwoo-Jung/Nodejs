import express from "express";

const router = express.Router();

router.get('/', (req, res, next)=> {
  console.log('users')
})

app.use(express.json());


export default router;