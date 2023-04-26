import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@project/util/util-types';
import { Tag } from '@project/shared/app-types';
import { TagEntity } from './tag.entity';
import { PrismaService } from '../prisma/prisma.service';
import {PostStatus, PostType} from "@prisma/client";

@Injectable()
export class TagRepository implements CRUDRepository<TagEntity, number, Tag> {
  constructor(private readonly prisma: PrismaService) {}

  public async create(item: TagEntity): Promise<Tag> {
    return this.prisma.tag.create({
      data: {...item.toObject()},
    });
  }

  public async destroy(id: number): Promise<void> {
    await this.prisma.tag.delete({
      where: {id}
    });
  }

  public async findById(id: number): Promise<Tag | null> {
    return this.prisma.tag.findFirst({
      where: {id}
    });
  }

  public async findByIds(ids: number[]): Promise<Tag[]> {
    return this.prisma.tag.findMany({
      where: {
        id: {
          in: ids?.length > 0 ? ids : [],
        }
      }
    })
  }

  public async findByTitle(title: string): Promise<Tag> {
    return this.prisma.tag.findFirst({
      where: {
        title
      }
    })
  }

  public async find(): Promise<Tag[]> {
    return this.prisma.tag.findMany();
  }

  public update(_id: number, _item: TagEntity): Promise<Tag> {
    return Promise.resolve(undefined);
  }
}
