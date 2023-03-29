import { User } from '@project/shared/app-types';
import { genSalt, hash } from 'bcrypt';
import { SALT_ROUNDS } from './blog-user.constant';

export class BlogUserEntity implements User {
  public _id: string;
  public email: string;
  public firstname: string;
  public lastname: string;
  public avatar: string;
  public passwordHash: string;
  public postsCount: number;
  public subscribersCount: number;
  public createDate: Date;

  constructor(blogUser: User) {
    this.fillEntity(blogUser);
  }

  public toObject() {
    return {...this};
  }

  public fillEntity(blogUser: User) {
    this._id = blogUser._id;
    this.email = blogUser.email;
    this.firstname = blogUser.firstname;
    this.lastname = blogUser.lastname;
    this.avatar = blogUser.avatar;
    this.passwordHash = blogUser.passwordHash;
    this.postsCount = blogUser.postsCount;
    this.subscribersCount = blogUser.subscribersCount;
    this.createDate = blogUser.createDate;
  }

  public async setPassword(password: string): Promise<BlogUserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }
}
