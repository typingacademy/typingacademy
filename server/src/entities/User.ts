type Role = "institute" | "admin" | "student";

export class User {
  constructor(
    public readonly userId: string,
    public readonly password: string,
    public readonly accessToken: string,
    public readonly role: Role
  ) {
    this.userId = userId;
    this.password = password;
    this.accessToken = accessToken;
    this.role = role;
  }

  validate() {
    if (this.userId && this.password?.length >= 6) {
      return true;
    }
    return !!this.accessToken;
  }
}
