import { injectable } from "inversify";
import { IAuthenticationRepository } from "../interfaces/IAuthenticationRepository";
import { dbClient } from "../dbConnection";
import type { Client } from "../types";

@injectable()
export class AuthenticationRepository implements IAuthenticationRepository {
  private client: Client;

  constructor() {
    this.client = dbClient();
  }

  async login(userId: string, password: string): Promise<string> {
    const { data, error } = await this.client.auth.signInWithPassword({
      email: userId,
      password: password,
    });
    if (error) {
      throw new Error(error?.message);
    }
    return data?.session?.access_token || "";
  }

  async logout(
    accessToken: string,
    shouldRemoveAllDevices: boolean
  ): Promise<void> {
    const { error } = await this.client.auth.admin.signOut(
      accessToken,
      shouldRemoveAllDevices ? "global" : "local"
    );
    if (error) {
      throw new Error(error?.message);
    }
    return;
  }
}
