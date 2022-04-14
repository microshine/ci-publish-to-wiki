import { Named } from "./Named";


export abstract class Base implements Named {
  public abstract readonly name: string;
}
