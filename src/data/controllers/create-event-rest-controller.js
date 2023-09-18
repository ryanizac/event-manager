import { CreateEventService } from "../services/index.js";
import { DateUtil } from "../../shared/index.js";

/**
 * @typedef {Object} Ports
 * @property {CreateEventService} service
 */

export class CreateEventRestController {
  /**
   * @type {import("./common/controller.js").RequestMethod}
   * @readonly
   * @public
   */
  method = "post";

  /**
   * @type {import("./common/controller.js").RequestPath}
   * @readonly
   * @public
   */
  path = "/event";

  /**
   * @type {CreateEventService}
   * @readonly
   * @private
   */
  service;

  /**
   * Ports to create controller
   * @param {Ports} ports
   */
  constructor(ports) {
    this.service = ports.service;
  }

  /**
   * @param {import("./common/controller.js").RequestOptions} request
   * @returns {import("./common/controller.js").RequestResult}
   */
  async execute(request) {
    const { name, date: initialDate } = request.body,
      /** @type {string[]} */
      errors = [];

    if (name === undefined) {
      errors.push("The name must be provided");
    } else if (name === null) {
      errors.push("The name cannot be empty");
    } else if (typeof name !== "string") {
      errors.push("The name must be a string");
    }

    if (initialDate === undefined) {
      errors.push("The date must be provided");
    } else if (initialDate === null) {
      errors.push("The date cannot be empty");
    } else if (typeof initialDate !== "string") {
      errors.push("The date must be a string");
    }

    const date = DateUtil.parseDate(initialDate);

    if (date === undefined) {
      errors.push("The date is invalid");
    }

    if (errors.length > 0) {
      const message = errors.join(", ");

      return {
        type: "error",
        code: 400,
        error: message,
      };
    }

    try {
      const data = await this.service.execute({
        name,
        date,
      });

      return {
        code: 200,
        type: "data",
        data,
      };
    } catch (error) {
      if (error instanceof Error) {
        return {
          code: 400,
          type: "error",
          error: error.message,
        };
      }

      return {
        code: 500,
        type: "error",
        error: "Internal server error",
      };
    }
  }
}
