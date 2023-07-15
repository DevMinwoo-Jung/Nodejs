import express from "express";
import cors from 'cors'
import cookieParser from "cookie-parser"; // 쿠키 접근 가능
import morgan from "morgan"; // 요청에 대한 log
import helmet from "helmet";
import postRouter from "./router/posts.js";
import userRouter from "./router/user.js";
const app = express();

app.use(cors({
  origin: ['*'],
  optionsSuccessStatus: 200,
  credentials: true, // Access-Content
}));

app.use(cookieParser());
app.use(morgan('combined'));
app.use(helmet())


app.use(express.json()); // REST API -> Body

app.use(express.urlencoded({extended: false})); // HTML Form -> Body
// app.use(express.static('public'))

app.use('/tweets', postRouter)
app.use('/users', userRouter)

app.get('/', (req, res, next)=> {
  console.log(req.cookies);
  res.send('Welcome!!')
})

app.listen(8080);