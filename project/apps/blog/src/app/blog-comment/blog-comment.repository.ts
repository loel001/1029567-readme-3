import { BlogCommentEntity } from './blog-comment.entity';
import { Comment } from '@project/shared/app-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@project/util/util-types';
import { PrismaService } from '../prisma/prisma.service';
import { adapterToComment } from './blog-comment.util';

@Injectable()
export class BlogCommentRepository implements CRUDRepository<BlogCommentEntity, number, Comment> {
  constructor(private readonly prisma: PrismaService) {}

  public async create(item: BlogCommentEntity): Promise<Comment> {
    const data = {
      ...item.toObject(),
      userId: item._userId,
    }
    delete data._userId;
    delete data._id;

    const comment = await this.prisma.comment.create({data});
    const createdAt = comment.createdAt.toISOString();
    return {...comment, createdAt}
  }

  public async destroy(commentId: number): Promise<void> {
    await this.prisma.comment.delete({
      where: {
        commentId,
      }
    });
  }

  public async findById(commentId: number): Promise<Comment | null> {
    const comment = await this.prisma.comment.findFirst({
      where: {
        commentId
      }
    });
    return adapterToComment(comment);
  }

  public async findByPostId(postId: number): Promise<Comment[]> {
    const comments = await this.prisma.comment.findMany({
      where: {
        postId
      }
    });
    return comments.map((item) => {
      return adapterToComment(item);
    })
  }

  public async update(commentId: number, item: BlogCommentEntity): Promise<Comment> {
    const comment = await this.prisma.comment.update({
      where: {
        commentId
      },
      data: {...item.toObject(), commentId}
    });
    return adapterToComment(comment);

  }
}
