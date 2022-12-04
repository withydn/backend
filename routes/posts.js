// @ts-check
const express = require('express');

const router = express.Router();

const POST = [
  {
    title: 'post만들기',
    content: 'users처럼 만들어보자.',
  },
];

// 현재 localhost:4000/posts
router.get('/', (req, res) => {
  res.render('posts', { POST, postCounts: POST.length });
});

// localhost:4000/posts/list
// 목록 보여주기
router.get('/list', (req, res) => {
  res.send(POST);
});

// 정보 조회
// router.get('/title/:title', (req, res) => {
//   const findpost = POST.find((post) => {
//     console.log(post);
//     return post.title === req.params.title;
//   });
//   if (findpost) {
//     res.send(findpost);
//   } else {
//     const err = new Error('TITLE을 찾을수 없습니다!');
//     err.statusCode = 404;
//     throw err;
//   }
// });

// 새로운 POST 등록 @@
router.post('/', (req, res) => {
  if (req.body) {
    if (req.body.title && req.body.content) {
      const newPost = {
        title: req.body.title,
        content: req.body.content,
      };
      POST.push(newPost);
      res.redirect('/posts');
    } else {
      console.log(2);
      const err = new Error('Unexpected query');
      err.statusCode = 404;
      throw err;
    }
  } else {
    console.log(2);
    const err = new Error('no data');
    err.statusCode = 404;
    throw err;
  }
});

// post 삭제하기
router.delete('/:title', (req, res) => {
  const arrIndex = POST.findIndex((post) => post.title === req.body.title);
  if (arrIndex !== -1) {
    POST.splice(arrIndex, 1);
    res.send('POST 삭제 완료');
  } else {
    const err = new Error('POST를 찾을수 없습니다!');
    err.statusCode = 404;
    throw err;
  }
});

module.exports = router;
