// @ts-check
// const arr = [1, 2, 3, 4, 5, 6];
// console.log(arr);
// console.log(...arr);

// const maruData = {
//   name: '이마루',
//   gender: 'F',
// };

// const maruInfo = {
//   nickName: 'maru',
//   email: 'maru@maru.com',
// };

// const maru = {
//   name: maruData.name,
//   gender: maruData.gender,
//   nickName: maruInfo.nickName,
//   email: maruInfo.email,
// };

// const maru = {
//   ...maruData,
//   ...maruInfo,
// };

// console.log(maru);

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = ['6', '7', '8'];
// const merge = [...arr1, ...arr2];

// console.log(merge);

// const tetzData = {
//   name: '이효석',
//   gender: 'M',
//   nickName: 'gotetz',
//   email: 'xenosign@gmail.com',
// };
// const { name, ...tetzInfo } = tetzData;

// console.log(name, tetzInfo);

// const [first, ...rest] = [1, 2, 3, 4, 5];
// console.log(first);
// console.log(rest);

function spread(fisrt, ...rest) {
  console.log(fisrt);
  console.log(rest);
}
spread(1, 2, 3, 4, 5, 6);
