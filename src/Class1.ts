import { Base } from "./Base";


export class Class1 extends Base {
  public name = "Class1";

  public publicMethod(param: string): string {
    return `Param: ${param}`;
  }

  protected protectedMethod(param?: number): string {
    this.privateMethod();

    return `Param: ${param}`;
  }

  private privateMethod(param = false): string {
    return `Param: ${param}`;
  }


  /**
   * Usage of default parameters
   * @param name Some name
   * @param value Some value
   * @param required Determine if `value` is required
   */
  public default(name: string | symbol, value = 0, required?: boolean) {
    console.log(name, value, required);
  }
}
