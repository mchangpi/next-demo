const profile = {
  username: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  /*
  // Error: Property 'age' does not exist on type 'typeof globalThis'.ts(2339)
  setAgeA: (age: number): void => {
    this.age = age;
  },
  */
  setAgeB(age: number): void {
    this.age = age;
  },
};

const { username, age }: { username: string; age: number } = profile;

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
