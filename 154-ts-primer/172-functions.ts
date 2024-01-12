const add = (a: number, b: number): number => a + b;

/* Always add annotations to the type of RETURN value */
const subtract = (a: number, b: number): number => {
  // a - b;
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiple = function (a: number, b: number): number {
  return a * b;
};
