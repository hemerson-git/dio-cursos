interface IAnimal {
  name: string;
  type: "terrestre" | "aquatico";
  makeSound: (sound: string) => void;
}

interface IFelino extends IAnimal {
  nightVision: boolean;
}

const animal: IAnimal = {
  name: "Elephant",
  type: "terrestre",
  makeSound: (sound) => `${sound}dB`,
};

animal.makeSound("groar");
