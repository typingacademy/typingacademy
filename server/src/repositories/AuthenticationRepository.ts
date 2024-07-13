import { injectable } from "inversify";
import { IAuthenticationRepository } from "../interfaces/IAuthenticationRepository";

@injectable()
export class AuthenticationRepository implements IAuthenticationRepository {
  login(userId: string, password: string): Promise<string> {
    throw new Error("Method not implemented.");
  }
  logout(accessToken: string, shouldRemoveAllDevices: boolean): Promise<null> {
    throw new Error("Method not implemented.");
  }
}
