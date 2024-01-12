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
