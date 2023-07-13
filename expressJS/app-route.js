import express from "express";
import cors from 'cors'
const app = express();
import cookieParser from "cookie-parser"; // 쿠키 접근 가능
import morgan from "morgan"; // 요청에 대한 log
import helmet from "helmet";

app.use(cors({
  origin: ['http://127.0.0.1:5000'],
  optionsSuccessStatus: 200,
  credentials: true, // Access-Content
}));

app.use(cookieParser());
app.use(morgan('combined'));
app.use(helmet())


app.use(express.json()); // REST API -> Body

app.use(express.urlencoded({extended: false})); // HTML Form -> Body
// app.use(express.static('public'))

// app.use('/posts', postRouter)
// app.use('/users', userRouter)

app.get('/', (req, res, next)=> {
  console.log(req.cookies);
  res.send('Welcome!!')
})

app.listen(8080);