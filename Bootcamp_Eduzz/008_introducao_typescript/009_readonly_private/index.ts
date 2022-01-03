interface Dog {
  name: string;
  age: number;
  favoritePark?: string;
}

type ReadonlyDog = {
  +readonly [K in keyof Dog]-?: Dog[K];
};

class MyDog implements ReadonlyDog {
  name;
  age;
  favoritePark;

  constructor(name, age) {
    this.age = age;
    this.name = name;
  }
}

const dog = new MyDog("Apolo", 14);
