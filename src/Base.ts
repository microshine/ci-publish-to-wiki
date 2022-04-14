import { InternalClass } from "./internal";
import { Named } from "./Named";
import { Printer } from "./Printer";


export abstract class Base implements Named {
  public abstract readonly name: string;

  getPinter(): Printer {
    return new InternalClass(this);
  }
}
