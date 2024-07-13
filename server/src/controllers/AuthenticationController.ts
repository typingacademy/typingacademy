import { NextFunction, Request, Response } from "express";
import { IAuthenticationService } from "../interfaces/IAuthenticationService";
import { inject, injectable } from "inversify";
import { INTERFACE_TYPE } from "../utils";

@injectable()
export class AuthenticationController {
  private service: IAuthenticationService;

  constructor(
    @inject(INTERFACE_TYPE.AuthenticationService)
    service: IAuthenticationService
  ) {
    this.service = service;
  }

  async onLoginUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { userName, password, role } = req?.body || {};
      const accessToken = await this.service.loginUser(
        userName,
        password,
        role
      );
      return res.status(200).json({ accessToken });
    } catch (error) {
      next(error);
    }
  }

  async onLogoutUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { accessToken, role } = req?.body || {};

      const data = await this.service.logoutUser(accessToken, role);
      return res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
}
