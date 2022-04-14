export abstract class Base {
  /**
   * The name of the object
   */
  public abstract readonly name: string;
}

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

/**
 * Represents Class2
 * 
 * ```asn
 * CertificateTemplateOID ::= SEQUENCE {
 *    templateID              OBJECT IDENTIFIER,
 *    templateMajorVersion    INTEGER (0..4294967295) OPTIONAL,
 *    templateMinorVersion    INTEGER (0..4294967295) OPTIONAL
 * }
 * ```
 */
export class Class2 extends Class1 {
  public override name = "Class2";

  /**
   * Compares the current object with the other object
   * @param other Other object
   * @returns Returns `true` if objects are equal
   * @example
   * Some text for the example
   * ```ts
   * const class2 = new Class2();
   * 
   * if (class2.isEqual(otherClass)) {
   *   // do something
   * }
   * ```
   */
  public isEqual(other: unknown): other is this {
    return other instanceof Class2 && other.name === this.name;
  }
}

export class Class3 extends Base {
  public name = "Class3";
}
