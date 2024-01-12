let apples = 5; /* Type inference */
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

let colors: string[] = ["red", "green", "blue"];
let numArr: number[] = [1, 2, 3];
let boolArr: boolean[] = [true, true, false];

class Car {
  static Country = null;

  publicField = 0;
  height = 0;
  width = 0;

  #privateField = 0;

  constructor(height: number = 0, width: number = 0) {
    this.height = height;
    this.width = width;
    console.log("private", this.#privateField);
  }
}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 10,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations?
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
// const coordinates = JSON.parse(json); // return 'any' type
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line, and initialize it later
let words: string[] = ["red", "green", "blue"];
// let foundWord; // 'any' type
let foundWord: boolean = false;
for (let [idx, word] of Object.entries(words)) {
  console.log(idx, word);
  if (word === "green") foundWord = true;
}

// 3) Variable whose type cannot be inferred correctly
let numArr2 = [-10, -1, 12];
// let numberaAboveZero = false;
let numberaAboveZero: boolean | number = false;
for (let num of numArr2) {
  // console.log(num);
  if (num > 0) numberaAboveZero = num;
}
console.log(numberaAboveZero, "is above 0");