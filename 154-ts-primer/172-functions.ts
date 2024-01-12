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

const logger = (message: string): void => {
  console.log(message);
};

const throwErrorA = (message: string): never => {
  throw new Error(message);
};

const throwErrorB = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message;
};
const throwErrorC = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
  console.log(message);
};
