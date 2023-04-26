import { Post, Tag } from '@project/shared/app-types';
import { PostStatus, PostType } from '@prisma/client';

export abstract class BlogPostEntity implements Post {
  public _id?: number;
  public _userId?: string;
  public _createUserId?: string;
  public createdAt: string;
  public publishAt: string;
  public likesCount: number;
  public commentsCount: number;
  public type: PostType;
  public status: PostStatus;
  public isReposted: boolean;
  public tags: string[];

  constructor(blogPost: Post) {
    this._id = blogPost._id;
    this._userId = blogPost._userId;
    this._createUserId = blogPost._createUserId
    this.createdAt = blogPost.createdAt;
    this.publishAt = blogPost.publishAt;
    this.likesCount = blogPost.likesCount;
    this.commentsCount = blogPost.commentsCount;
    this.type = blogPost.type;
    this.status = blogPost.status;
    this.isReposted = blogPost.isReposted;
    this.tags = blogPost.tags;
  }

  public toObject() {
    return {...this};
  }
}
