// @ts-check
const { query } = require('express');
const express = require('express');

const router = express.Router();

const USER = [
  {
    id: 'areum',
    name: '하아름',
    email: 'adaeng@naver.com',
  },

  {
    id: 'tetz',
    name: '이효석',
    email: 'abcd@efg.com',
  },
];

// localhost:4000/users/ejs
// EJS 사용 파트
router.get('/', (req, res) => {
  res.render('users', { USER, userCounts: USER.length });
});

router.get('/list', (req, res) => {
  res.send(USER);
});

// 특정 ID를 가진 회원 정보 조회
router.get('/id/:id', (req, res) => {
  //   const findArr = arr.find((el) => {
  //     console.log('element', el);
  //     return el === 5;
  //   });
  //   console.log('result', findArr);
  const findUser = USER.find((user) => {
    console.log(user);
    return user.id === req.params.id;
  });

  if (findUser) {
    res.send(findUser);
  } else {
    const err = new Error('ID를 찾을수 없습니다!');
    err.statusCode = 404;
    throw err;
  }
});

// 새로운 회원 등록 @@
router.post('/', (req, res) => {
  if (Object.keys(req.query).length >= 1) {
    if (req.query.id && req.query.name && req.query.email) {
      const newUser = {
        id: req.query.id,
        name: req.query.name,
        email: req.query.email,
      };
      USER.push(newUser);
      res.send('회원 등록 완료');
    } else {
      const err = new Error('Unexpected query');
      err.statusCode = 404;
      throw err;
    }
  } else if (req.body) {
    if (req.body.id && req.body.name && req.body.email) {
      const newUser = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
      };
      USER.push(newUser);
      res.redirect('/users');
    } else {
      const err = new Error('Unexpected query');
      err.statusCode = 404;
      throw err;
    }
  } else {
    const err = new Error('No data');
    err.statusCode = 404;
    throw err;
  }
});

// 선생님 버전 @@
router.put('/:id', (req, res) => {
  if (req.query.id && req.query.name && req.query.email) {
    const findUserIndex = USER.findIndex((user) => user.id === req.params.id);
    if (findUserIndex !== -1) {
      const modifyUser = {
        id: req.query.id,
        name: req.query.name,
        email: req.query.email,
      };
      USER[findUserIndex] = modifyUser;
      res.send('회원 정보 수정 완료!');
    } else {
      const err = new Error('ID를 찾을수 없습니다!');
      err.statusCode = 404;
      throw err;
    }
  } else {
    const err = new Error('unexpected query!');
    err.statusCode = 404;
    throw err;
  }
});

// 회원삭제
// userRouter.delete('/:id', (req, res) => {
//   const arrIndex = USER.findIndex((user) => user.id === req.params.id);
//   if (arrIndex) {
//     res.send('삭제');
//   } else {
//     res.send('not found');
//   }
// });

// 선생님 버전
router.delete('/:id', (req, res) => {
  const arrIndex = USER.findIndex((user) => user.id === req.params.id);
  if (arrIndex !== -1) {
    USER.splice(arrIndex, 1);
    res.send('회원 삭제 완료');
  } else {
    const err = new Error('ID를 찾을수 없습니다!');
    err.statusCode = 404;
    throw err;
  }
});

// 동적 웹 그리기

router.get('/show', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
  res.write('<h1>Hello,Dynamic Web page!</h1>');
  for (let i = 0; i < USER.length; i += 1) {
    res.write(`<h2>USER id is ${USER[i].id}`);
    res.write(`<h2>USER name is ${USER[i].name}`);
  }
  res.end('');
});

module.exports = router;
