import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { EnsureAdmin } from "./middleware/EnsureAdmin";
import { EnsureAuthenticated } from "./middleware/EnsureAuthenticated";
const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

router.post("/users", EnsureAuthenticated, createUserController.handle);
router.post(
  "/tags",
  EnsureAuthenticated,
  EnsureAdmin,
  createTagController.handle
);
router.post(
  "/compliments",
  EnsureAuthenticated,
  createComplimentController.handle
);
router.post("/login", authenticateUserController.handle);

export { router };
