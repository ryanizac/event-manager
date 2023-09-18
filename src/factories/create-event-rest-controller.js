import { CreateEventRestController } from "../controllers/index.js";
import { CreateEventService } from "../services/index.js";
import { UUIDGenerator } from "../adapters/index.js";

export function createEventRestControllerFactory() {
  const idGenerator = new UUIDGenerator();
  const service = new CreateEventService({
    idGenerator,
  });
  const controller = new CreateEventRestController({
    service,
  });

  return controller;
}
