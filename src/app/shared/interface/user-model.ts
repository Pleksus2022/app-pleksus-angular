export class DataUser {
  access_token: string;
  user: User;
}

export class User {
  _id: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  admin: boolean;
  isEmailConfirmed: boolean;
  phone: string;
  type?: any;
  interest?: any;
  createdAt: string;
  updatedAt: string;
  __v: number;
  photo: string;
  verificationCode: string;
}