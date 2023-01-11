// const apple: number = 5;

// let a: boolean = true;
// let b: undefined = undefined;
// let nil: null = null;

// let now: Date = new Date();

// let colors: string[] = ['a', 'b'];
// let numbers: number[] = [1, 2, 3];
// let bls: boolean[] = [true, false];

// class Car {}
// let car: Car = new Car();

// let point: { x: number; y: number } = {
//   x: 10,
//   y: 15,
// };

// const logNumber: (i: number) => void = (i: number) => {
//   console.log(i);
// };

let numbers = [-10, 0, 1];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
