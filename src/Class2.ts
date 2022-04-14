import { Base } from "./Base";
import { Class1 } from "./Class1";
import { GenericType } from "./GenericType";

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

  /**
   * Generic function declaration
   * @param defaultValue Default value
   * @returns Map with preset default value
   */
  public genericFunction<T extends Base>(defaultValue: T): GenericType<T> {
    return {
      default: defaultValue,
    };
  }

  /**
   * Validates that incoming parameter is type of {@link Class2}
   * @param data Any data
   * @throws Throws TypeError if `data` is not {@link Class2}
   */
  public assert(data: unknown) : asserts data is Class2 {
    if (typeof data !== "string") {
      throw new TypeError("Incorrect type of 'data' parameter");
    }
  }

}
