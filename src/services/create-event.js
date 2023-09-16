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
