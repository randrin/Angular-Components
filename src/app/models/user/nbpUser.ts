export class NbpUser {
  public id: number;
  public userName: string;
  public password: string;
  public email: string;
  public isActive: boolean;
  public roles: number;

  constructor(
    id: number,
    userName: string,
    password: string,
    email: string,
    isActive: boolean,
    roles: string
  ) {}
}
