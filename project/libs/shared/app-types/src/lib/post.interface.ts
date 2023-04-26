import { Tag } from './tag.interface';
import { PostStatus, PostType } from '@prisma/client';

export interface Post {
  _id?: number;
  _userId?: string;
  _createUserId?: string;
  type: PostType;
  createdAt: string;
  publishAt: string;
  status: PostStatus;
  isReposted: boolean;
  tags?: string[];
  likesCount: number;
  commentsCount: number;
}
