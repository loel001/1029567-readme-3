export interface User {
  _id?: string;
  email: string;
  firstname: string;
  lastname: string;
  avatar?: string;
  passwordHash?: string;
  postsCount?: number;
  subscribersCount?: number;
  createDate?: Date;
}
