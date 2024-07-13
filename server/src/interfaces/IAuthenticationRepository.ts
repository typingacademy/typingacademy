export interface IAuthenticationRepository {
  login(userId: string, password: string): Promise<string>;
  logout(accessToken: string, shouldRemoveAllDevices: boolean): Promise<void>;
}
