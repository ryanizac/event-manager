import "dotenv/config";
import { ExpressApp } from "./adapters";
import { createEventRestControllerFactory } from "./factories/index.js";

(async function () {
  const PORT = process.env.PORT || 3000;
  const server = new ExpressApp(PORT);

  server.injectRestControllers(createEventRestControllerFactory());

  await server.start();
})();
