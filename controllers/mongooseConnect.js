// @ts-check
const mongoose = require('mongoose');

const { MDB_URI } = process.env;

const connect = () => {
  mongoose.connect(
    MDB_URI,
    {
      dbName: 'kdt4',
      useNewUrlParser: true,
    },
    (err) => {
      if (err) {
        console.log('몽고디비 연결 문제 발생', err);
      } else {
        console.log('몽고디비 연결 성공');
      }
    },
  );
  mongoose.connection.on('error', (err) => {
    console.error('몽고디비 문제 발생', err);
  });
  mongoose.connection.on('disconnected', () => {
    console.error('몽고디비 연결이 끊어졌습니다. 연결을 재시도 합니다!');
    connect();
  });
};

module.exports = connect;
