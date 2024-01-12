const carMakers: string[] = ["ford", "toyota", "chevy"];
const dates: Date[] = [new Date(), new Date()];

const carsByMake: string[][] = [["f150"], ["corolla"], ["camero"]];

// Help with inferemce when extracting values
const myCar = carMakers.pop();
console.log("my car", myCar);

// Prevent incompatible values
// carMakers.push(100);

// Help with 'map'
carMakers.map((maker: string): string => {
  return maker.toLocaleUpperCase() + "make car";
});

// Flexible types
const importantDates: (Date | string)[] = [new Date(), "2030-10-10"];
importantDates.push("2040-10-10");
// importantDates.push(100);
console.log(importantDates);
