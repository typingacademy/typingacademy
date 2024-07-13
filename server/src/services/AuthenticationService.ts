import { inject, injectable } from "inversify";
import { IAuthenticationService } from "../interfaces/IAuthenticationService";
import { IAuthenticationRepository } from "../interfaces/IAuthenticationRepository";
import { INTERFACE_TYPE } from "../utils";

@injectable()
export class AuthenticationService implements IAuthenticationService {
  private repository: IAuthenticationRepository;

  constructor(
    @inject(INTERFACE_TYPE.AuthenticationRepository)
    repository: IAuthenticationRepository
  ) {
    this.repository = repository;
  }

  loginUser(
    userName: string,
    password: string,
    role: "institute" | "student" | "admin"
  ): Promise<string> {
    console.log("login", { userName, password, role });
    return Promise.resolve("Success");
  }

  logoutUser(
    accessToken: string,
    role: "institute" | "student" | "admin"
  ): Promise<void> {
    console.log("login", { accessToken, role });
    return Promise.resolve();
  }
}
