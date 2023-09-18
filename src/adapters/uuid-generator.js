import { v4 as uuid } from "uuid";

/**
 * @typedef {import("../data/services/ports").IdGenerator} IdGenerator
 */

/**
 * @class
 * @constructor
 * @implements {IdGenerator}
 *
 */
export class UUIDGenerator {
  /**
   * @type {IdGenerator["generate"]}
   */
  generate() {
    return uuid();
  }
}
