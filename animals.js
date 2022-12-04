// @ts-check
// export const animals = {
//   animals: ['dog', 'cat', 'chicken'],
// showAnimals: function () {
//   console.log(this.animals);
//   },
//   showAnimalsByMap: function () {
//     this.animals.map((value)=> console.log(value));
// },
// };

// export const animals = ['dog', 'cat'];
// export function showAnimals() {
// animals.map((el) => console.log(el));
// }

export default class Animal {
    constructor() {
        this.animals = ['dog', 'cat', 'chicken'];
    }
    showAnimals() {
        this.animals.map((value) => console.log(value));
    }
}

export const animals = {
    animals: ['dog','cat'],
    showAnimals: function () {
        this.animals.map((el) => console.log(el));
    },
};
// 화살표함수는 this 객체를 지원하지 않는다. 그래서 화살표함수 못썽
