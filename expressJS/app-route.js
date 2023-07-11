import express from "express";
import cors from 'cors'
const app = express();

app.use(cors({
  origin: ['http://127.0.0.1:5000'],
  optionsSuccessStatus: 200,
  credentials: true, // Access-Content
}));

app.use(express.json()); // REST API -> Body

app.use(express.urlencoded({extended: false})); // HTML Form -> Body
// app.use(express.static('public'))

// app.use('/posts', postRouter)
// app.use('/users', userRouter)

app.get('/', (req, res, next)=> {
  console.log('GET!')
})

app.listen(8080);