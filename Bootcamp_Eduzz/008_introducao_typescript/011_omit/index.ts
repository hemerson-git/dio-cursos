interface Person {
  name: string;
  age: number;
  nacionality: string;
}

interface Brazilian extends Omit<Person, "nacionality"> {}

const brasilian: Brazilian = {
  name: "Hemerson",
  age: 25,
};
