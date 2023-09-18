/**
 * @typedef {Object} Args
 * @property {string} name
 * @property {Date} date
 */

/**
 * @typedef {Object} Result
 * @property {string} id
 * @property {string} createdAt
 * @property {string} updatedAt
 * @property {string} name
 * @property {Date} date
 */

export class CreateEventService {
  /**
   *
   * @param {Args} args
   * @returns {Promise<Result>}
   */
  async execute({ name, date }) {
    if (typeof name !== "string") {
      throw new Error("The name must be a string");
    }

    if (!(date instanceof Date)) {
      throw new Error("The date must be date instance");
    }

    const createdAt = new Date(),
      updatedAt = createdAt,
      id = Math.random().toString().replace("0.", "");

    return {
      id,
      name,
      createdAt,
      updatedAt,
      date,
    };
  }
}
