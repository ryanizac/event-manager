import { CreateEventService } from "../services/index.js";

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
    const { name, date } = request.body;

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
