import { Named } from "../Named";
import { Printer } from "../Printer";

export class  InternalClass implements Named, Printer{
  
  public name = "InternalClass";

  constructor(protected value: unknown) {
  }
  public print() {
    console.log(this.value)
  }
}