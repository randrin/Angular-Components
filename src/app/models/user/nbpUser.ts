export interface NbpUser {
  id: number;
  userName: string;
  password: string;
  email: string;
  active: boolean;
  roles: string;
  temporaryPassword: boolean;
  imageUrl: string;
  userId: string;
  lastConnexion: Date;
  lastUpdated: Date;
  fullName: string;
}
