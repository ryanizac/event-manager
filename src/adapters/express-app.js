import express from "express";
import cors from "cors";

/**
 * Adapter to express app
 */
export class ExpressApp {
  /**
   * @type {number | string}
   * @readonly
   * @private
   */
  port;
  /**
   * @type {express.Express}
   * @readonly
   * @private
   */
  app;

  /**
   * @type {import("./common/index.js").GenericController[]}
   * @readonly
   * @private
   */
  controllers = [];

  /**
   * Create a ExpressApp
   * @param {number | string} port port to serve the express app
   */
  constructor(port) {
    this.port = port;
    this.app = express();
  }

  /**
   * @param {...import("./common/index.js").GenericRestController[]} controllers
   */
  injectRestControllers(...controllers) {
    this.controllers.push(...controllers);
  }

  /**
   * @private
   * @param {express.Express} app
   * @param {import("./common/index.js").GenericRestController} controller
   */
  adaptController(app, controller) {
    app[controller.method](controller.path, async (req, res) => {
      const { code, ...result } = await controller.execute({
        body: req.body,
        headers: req.headers,
        params: req.params,
        query: req.query,
      });

      res.status(code).json(result);
    });
  }

  /**
   * Start express app
   */
  async start() {
    const port = this.port;
    const app = this.app;
    const controllers = this.controllers;

    app.use(cors());
    app.use(express.json());

    controllers.forEach((controller) => {
      this.adaptController(app, controller);
    });

    app.listen(port, () => {
      console.log(`App started on http://localhost:${port}`);
    });
  }
}
