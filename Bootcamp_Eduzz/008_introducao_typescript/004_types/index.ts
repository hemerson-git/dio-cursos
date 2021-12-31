interface IAnimal {
  name: string;
  type: "terrestre" | "aquatico";
  isDomestic: boolean;
}

interface IFeline extends IAnimal {
  nightVision: boolean;
}

interface ICanine extends IAnimal {
  size: "small" | "medium" | "large";
}

type IDomestic = ICanine | IFeline;

const animal: IDomestic = {
  isDomestic: true,
  name: "Elephant",
  type: "terrestre",
  size: "large",
};
