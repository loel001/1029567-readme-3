import crypto from 'crypto';
import { CRUDRepository } from '@project/util/util-types';
import { BlogUserEntity } from './blog-user.entity';
import { User } from '@project/shared/app-types';
import { Injectable } from '@nestjs/common';
import {PostStatus, PostType} from "@prisma/client";

@Injectable()
export class BlogUserMemoryRepository implements CRUDRepository<BlogUserEntity, string, User> {
  private repository: {[key: string]: User} = {};

  public async create(item: BlogUserEntity): Promise<User> {
    const entry = { ...item.toObject(), _id: crypto.randomUUID()};
    this.repository[entry._id] = entry;

    return {...entry};
  }

  public async findById(id: string): Promise<User> {
    if (this.repository[id]) {
      return {...this.repository[id]};
    }

    return null;
  }

  public async findByEmail(email: string): Promise<User | null> {
    const existUser = Object.values(this.repository)
      .find((userItem) => userItem.email === email);

    if (! existUser) {
      return null;
    }

    return { ...existUser};
  }

  public async destroy(id: string): Promise<void> {
    delete this.repository[id];
  }

  public async update(id: number, item: { createUserId?: string; comments?: Comment[]; publishAt?: number; link?: string; photo?: string; description?: string; postId?: number; type?: PostType; title?: string; userId?: string; tags: string[]; createdAt?: number; likesCount?: number; quote?: string; commentsCount?: number; isReposted?: boolean; quoteAuthor?: string; videoLink?: string; text?: string; status?: PostStatus; announcement?: string }): Promise<R> {
    this.repository[id] = {...item.toObject(), _id: id};
    return this.findById(id);
  }
}
