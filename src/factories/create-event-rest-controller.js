import { CreateEventRestController } from "../controllers/index.js";
import { CreateEventService } from "../services/index.js";

export function createEventRestControllerFactory() {
  const service = new CreateEventService();
  const controller = new CreateEventRestController({
    service,
  });

  return controller;
}
