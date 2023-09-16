/**
 * @typedef {Object} Args
 * @property {string} name
 * @property {string} date
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
  async execute({ name, date: entryDate }) {
    const date = new Date(entryDate),
      createdAt = new Date(),
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
