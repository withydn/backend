// @ts-check

// var x = 'sssss';  eslint 확인 var x = 1;
// console.log('11'); 쌍따옴표 확인 prettier
// Math.log(x); str 확인

const express = require('express');

const cookieParser = require('cookie-parser');
const session = require('express-session');

require('dotenv').config();

// const connect = require('./controllers/mongooseConnect');

// connect();

const app = express();
const { PORT } = process.env;

const bodyParser = require('body-parser');

const IndexRouter = require('./routes/index');
const postRouter = require('./routes/posts');
const userRouter = require('./routes/users');
const boardRouter = require('./routes/board');
const dataRouter = require('./routes/data');
const dbBoardRouter = require('./routes/dbBoard');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');

// 여기까지 서버구동

app.set('view engine', 'ejs');
// 서버 세팅값 시작

app.use(express.static('views'));
// localhost:4000/css -> views/css
app.use('/css', express.static('views/css'));

app.use(cookieParser('maru'));
app.use(
  session({
    secret: 'maru',
    resave: false,
    saveUninitialized: true,
  }),
);

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// 위에는 필수코드 외우세영

app.use('/', IndexRouter);
app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use('/board', boardRouter);
app.use('/data', dataRouter);
app.use('/dbBoard', dbBoardRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);

// 서버 세팅값 끝

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.statusCode || 500);
  res.send(err.message);
});

// localhost:4000
// app.get('/', (req, res) => {
//   res.render('index');
// });

app.listen(PORT, () => {
  console.log(`서버는 ${PORT}번에서 실행 중입니다!`);
});

// static 은 프론트나 사용자들이 접근해도 되는 것

// const arr = [1, 2, 3, 4, 5, 6, 7];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// userRouter, 전체 회원 목록 조회

