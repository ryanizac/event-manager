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
   * Create a ExpressApp
   * @param {number | string} port port to serve the express app
   */
  constructor(port) {
    this.port = port;
    this.app = express();
  }

  /**
   * Start express app
   */
  async start() {
    const port = this.port;
    const app = this.app;

    app.use(cors());
    app.use(express.json());

    app.listen(port, () => {
      console.log(`App started on http://localhost:${port}`);
    });
  }
}
