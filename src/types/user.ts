export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  isVarified: boolean;
  picture: string;
  progress: { [key: string]: boolean };
}
