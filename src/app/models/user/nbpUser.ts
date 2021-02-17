export class NbpUser {
  public userName: string;
  public password: string;
  public email: string;
  public isActive: boolean;
  public roles: number;

  constructor(
    userName: string,
    password: string,
    email: string,
    isActive: boolean,
    roles: string
  ) {}
}
