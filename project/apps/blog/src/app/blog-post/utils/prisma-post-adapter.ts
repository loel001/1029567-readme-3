import { BlogPost } from '@project/shared/app-types';
import { Post } from '@prisma/client';

export function prismaPostAdapter(prismaPost: Post | null): BlogPost {
  if (prismaPost) {
    const post = {
      ...prismaPost,
      publishAt: prismaPost.publishAt.toISOString(),
      createdAt: prismaPost.createdAt.toISOString(),
      type: prismaPost.type,
      status: prismaPost.status,
      _id: prismaPost.postId,
      _createUserId: prismaPost.createUserId,
      _userId: prismaPost.userId
    };
    delete post.postId;
    delete post.userId;
    delete post.createUserId;
    return post;
  }
  return null;
}
