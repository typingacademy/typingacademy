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

  async loginUser(userName: string, password: string): Promise<string> {
    const token = await this.repository.login(userName, password);
    return token;
  }

  async logoutUser(
    accessToken: string,
    role: "institute" | "student" | "admin"
  ): Promise<void> {
    const shouldGlobalReset = role === "institute";
    await this.repository.logout(accessToken, shouldGlobalReset);
    return;
  }
}
