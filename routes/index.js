// @ts-check

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  // res.cookie('name', '아름', {
  //   expires: new Date(Date.now() + 1000 * 60),
  //   // 1000 * 60 * 60 * 24 = 하루
  //   httpOnly: true,
  // });

  // // console.log(req.cookies.alert);

  // const key = Object.keys(req.cookies)[0];

  // res.render('index', { key: key, value: req.cookies[key] });
  res.render('index', { popup: req.cookies.popup });
});

router.get('/cookie', (req, res) => {
  res.cookie('cookie', true, {
    maxAge: 1000 * 60,
    httpOnly: false,
  });
  // res.clearCookie('cookie');
  res.send('쿠키 굽기 성공');
});

router.post('/cookie', (req, res) => {
  res.cookie('popup', 'hide', {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true,
  });
  res.send('쿠키');
});
module.exports = router;
