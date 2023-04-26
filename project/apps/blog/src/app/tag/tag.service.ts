import { Injectable } from '@nestjs/common';
import { Tag } from '@project/shared/app-types';
import { TagRepository } from './tag.repository';
import { CreateTagDto } from './dto/create-tag.dto';
import { TagEntity } from './tag.entity';

@Injectable()
export class TagService {
  constructor(
    private readonly tagRepository: TagRepository,
  ) {}

  public async createTag(dto: CreateTagDto): Promise<Tag> {
    const tagEntity = new TagEntity(dto);
    return this.tagRepository.create(tagEntity);
  }

  public async deleteTag(id: number): Promise<void> {
    await this.tagRepository.destroy(id);
  }

  public async getTag(id: number): Promise<Tag> {
    return this.tagRepository.findById(id);
  }

  public async getTags(): Promise<Tag[]> {
    return this.tagRepository.find();
  }
}
