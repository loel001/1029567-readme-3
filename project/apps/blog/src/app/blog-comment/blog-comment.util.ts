import { Comment } from '@prisma/client';
import { Comment as CommentInterface} from '@project/shared/app-types';

export function adapterToComment(prismaComment: Comment | null): CommentInterface {
  if (prismaComment) {
    const comment = {
      ...prismaComment,
      createdAt: prismaComment.createdAt.toISOString(),
      _id: prismaComment.commentId,
      _userId: prismaComment.userId,
    };
    delete comment.commentId;
    delete comment.userId;
    return comment;
  }
  return null;
}
