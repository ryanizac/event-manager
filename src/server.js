import "dotenv/config";
import { ExpressApp } from "./adapters";

(async function () {
  const PORT = process.env.PORT || 3000;
  const server = new ExpressApp(PORT);

  await server.start();
})();
