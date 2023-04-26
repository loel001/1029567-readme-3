import { PostEntity } from './entity/post.entity';
import { BlogPost } from '@project/shared/app-types';
import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@project/util/util-types';
import { PrismaService } from '../prisma/prisma.service';
import { prismaPostAdapter } from './utils/prisma-post-adapter';

@Injectable()
export class BlogPostRepository implements CRUDRepository<PostEntity, number, BlogPost> {
  constructor(private readonly prisma: PrismaService) {}

  public async create(item: PostEntity): Promise<BlogPost > {
    const newData = {
      ...item.toObject(),
      userId: item._userId,
      createUserId: item._createUserId,
    }
    delete newData._userId;
    delete newData._createUserId;

    const post = await this.prisma.post.create({
      data: {
        ...newData,
        tags: {
          connect: []
        },
      }
    });
    return prismaPostAdapter(post);
  }

  public async destroy(postId: number): Promise<void> {
    await this.prisma.post.delete({
      where: {
        postId,
      }
    });
  }

  public async findById(postId: number): Promise<BlogPost | null> {
    const post = await this.prisma.post.findFirst({
      where: {
        postId
      }
    });
    return prismaPostAdapter(post);
  }

  public async find(ids: number[] = []): Promise<BlogPost[]> {
    const posts = await this.prisma.post.findMany({
      where: {
        postId: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
    return posts.map((item) => {
      return prismaPostAdapter(item);
    })
  }

  public async update(postId: number, item: PostEntity): Promise<BlogPost> {
    const newData = {
      ...item.toObject(),
      userId: item._userId,
      createUserId: item._createUserId
    }
    delete newData._id;
    delete newData._userId;
    delete newData._createUserId;

    const post = await this.prisma.post.update({
      where: {
        postId
      },
      data: {
        ...newData,
        tags: {
          connect: []
        },
      }
    });
    return prismaPostAdapter(post);
  }
}
