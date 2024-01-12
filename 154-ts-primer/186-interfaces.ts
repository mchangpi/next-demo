const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
};

const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  const { name, year, broken } = vehicle;
  console.log("Name", name);
  console.log("Year", year);
  console.log("Broken?", broken);
};

console.log(printVehicle);
