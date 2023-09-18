export class DateUtil {
  /**
   * Checks if value is a valid iso string
   * @param {any} value - The value to check if it is a valid iso string
   * @returns {value is string} Returns true if it is valid and false if not
   */
  static isISOString(value) {
    const d = new Date(value);
    return (
      typeof value === "string" &&
      !Number.isNaN(d.valueOf()) &&
      d.toISOString() === value
    );
  }

  /**
   * Try parse a value to date
   * @param {any} value - The value to convert to a date
   * @returns {Date | undefined} Returns a Date if is a valid iso string
   */
  static parseDate(value) {
    if (this.isISOString(value) || typeof value === "number") {
      const date = new Date(value);

      if (!Number.isNaN(date.valueOf())) {
        return date;
      }
    }

    return undefined;
  }
}
