import { prop, getModelForClass } from "@typegoose/typegoose";

class URL {
  @prop({ required: true })
  public hash?: string;

  @prop({ required: true })
  public original_url?: string;

  @prop({ required: true })
  public shortURL?: string;
}

const URLModel = getModelForClass(URL);

export { URL, URLModel };
