import express from "express";
import { Container } from "inversify";
import { INTERFACE_TYPE } from "../utils";
import { IAuthenticationRepository } from "../interfaces/IAuthenticationRepository";
import { AuthenticationRepository } from "../repositories/AuthenticationRepository";
import { IAuthenticationService } from "../interfaces/IAuthenticationService";
import { AuthenticationService } from "../services/AuthenticationService";
import { AuthenticationController } from "../controllers/AuthenticationController";

const router = express.Router();

const container = new Container();

container
  .bind<IAuthenticationRepository>(INTERFACE_TYPE.AuthenticationRepository)
  .to(AuthenticationRepository);

container
  .bind<IAuthenticationService>(INTERFACE_TYPE.AuthenticationService)
  .to(AuthenticationService);

container
  .bind(INTERFACE_TYPE.AuthenticationController)
  .to(AuthenticationController);

const controller = container.get<AuthenticationController>(
  INTERFACE_TYPE.AuthenticationController
);

router.get("/login", controller.onLoginUser.bind(controller));
router.get("/logout", controller.onLogoutUser.bind(controller));

export default router;
