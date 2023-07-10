import express from "express";
import postRouter from './router/posts'
import userRouter from './router/user'
const app = express();

app.use(express.json());

app.use('/posts', postRouter)
app.use('/users', userRouter)

app.listen(8080);