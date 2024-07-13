export interface IAuthenticationService {
  loginUser(
    userName: string,
    password: string,
    role: "institute" | "student" | "admin"
  ): Promise<string>;

  logoutUser(
    accessToken: string,
    role: "institute" | "student" | "admin"
  ): Promise<void>;
}
