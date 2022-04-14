export abstract class Base {
  /**
   * 
   */
  public abstract readonly name: string;
}

export class Class1 extends Base {
  public name = "Class1";

  public publicMethod(param: string): string {
    return `Param: ${param}`;
  }

  public protectedMethod(param?: number): string {
    return `Param: ${param}`;
  }

  public privateMethod(param = false): string {
    return `Param: ${param}`;
  }
}

export class Class2 extends Class1 {
  public override name = "Class2";

  public isEqual(data: unknown): data is this {
    return data instanceof Class2 && data.name === this.name;
  }
}

export class Class3 extends Base {
  public name = "Class3";
}
