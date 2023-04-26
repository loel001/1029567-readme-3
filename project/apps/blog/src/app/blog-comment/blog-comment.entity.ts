import { Comment } from '@project/shared/app-types';

export class BlogCommentEntity implements Comment {
  public _id?: number;
  public _userId?: string;
  public postId: number;
  public createdAt: string;
  public message: string;

  constructor(blogComment: Comment) {
    this._id = blogComment._id;
    this._userId = blogComment._userId;
    this.postId = blogComment.postId;
    this.createdAt = blogComment.createdAt;
    this.message = blogComment.message;
  }

  public toObject() {
    return {...this};
  }
}
