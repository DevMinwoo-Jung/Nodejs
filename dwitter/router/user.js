import express from "express";

const router = express.Router();

router.get('/', (req, res, next)=> {
  try {
    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(404);
  }
})

export default router;