import { CreateEventService } from "../services/index.js";

/**
 * @typedef {Object} Ports
 * @property {CreateEventService} service
 */

export class CreateEventController {
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
    const { name, date } = request.body;

    try {
      const data = await this.service.execute({
        name,
        date,
      });

      return {
        type: "data",
        data,
      };
    } catch (error) {
      if (error instanceof Error) {
        return {
          type: "error",
          error: error.message,
        };
      }

      return {
        type: "error",
        error: "Internal server error",
      };
    }
  }
}
