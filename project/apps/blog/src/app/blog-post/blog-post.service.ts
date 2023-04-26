import { Injectable, NotFoundException } from '@nestjs/common';
import { BlogPost } from '@project/shared/app-types';
import { PostDto } from './dto/create/post.dto';
import { PostDto as UpdatePostDto } from "./dto/update/post.dto";
import { TypeEntityAdapter } from './utils/type-entity-adapter';
import dayjs from 'dayjs';
import { BlogPostResponses } from './blog-post.constant';
import { BlogPostRepository } from './blog-post.repository';
import { PostStatus } from '@prisma/client';


@Injectable()
export class BlogPostService {
  constructor(
    private readonly blogPostRepository: BlogPostRepository
  ) {}

  public async create(
    dto: PostDto
  ) {
    const blogPost = {
      ...dto,
      status: PostStatus.posted,
      _userId: '',
      _createUserId: '',
      createdAt: dayjs().toISOString(),
      publishAt: dayjs().toISOString(),
      likesCount: 0,
      commentsCount: 0,
      isReposted: false,
    };

    const postEntity = await new TypeEntityAdapter[blogPost.type](blogPost);

    return this.blogPostRepository
      .create(postEntity);
  }

  public async update(
    postId: number,
    dto: UpdatePostDto,
  ) {

    const blogPost = await this.getById(postId);
    const updatedPost = {...blogPost, ...dto}

    const postEntity = await new TypeEntityAdapter[updatedPost.type](updatedPost);

    return this.blogPostRepository
      .update(postId, postEntity);
  }

  public async getById(id: number) {
    const post = await this.blogPostRepository.findById(id);
    if (!post) {
      throw new NotFoundException(BlogPostResponses.ERROR_POST);
    }
    return post;
  }

  async get(): Promise<BlogPost[]> {
    return this.blogPostRepository.find();
  }

  public async remove(
    postId: number,
  ) {
    return this.blogPostRepository
      .destroy(postId);
  }

}

