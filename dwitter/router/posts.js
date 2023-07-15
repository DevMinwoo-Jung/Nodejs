import express from "express";

const router = express.Router();

router.get('/', (req, res, next)=> {
  const result = req;
  console.log('성공!');
})

export default router;