// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function sumAll() {
// for
// let sum = 0;
// for(let i=0; i< arr.length; i++) {
// sum = sum + arr[i];
// 메소드
  // arr.reduce((total, number) => total + number);
// const sum = arr.reduce((acc, num) => acc + num, 0)
// return sum;
// }
export const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function sumAll() {
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum;
}
