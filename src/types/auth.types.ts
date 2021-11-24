export interface IUser {
  id: string;
}

export interface ICookieData extends IUser {
  exp: number;
}