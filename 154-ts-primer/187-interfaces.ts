interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `name ${this.name}, year ${this.year}, broken? ${this.broken}`;
  },
};
console.log(oldCivic.summary());

const printVehicle = (vehicle: Vehicle): void => {
  const { name, year, broken } = vehicle;
  console.log("Name", name);
  console.log("Year", year);
  console.log("Broken?", broken);
};

printVehicle(oldCivic);
