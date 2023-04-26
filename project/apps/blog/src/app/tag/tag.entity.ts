import { Entity } from '@project/util/util-types';
import { Tag } from '@project/shared/app-types';

export class TagEntity implements Entity<TagEntity>, Tag {
  public id: number;
  public title: string;

  constructor(tag: Tag) {
    this.fillEntity(tag);
  }

  public fillEntity(entity: Tag) {
    this.id = entity.id;
    this.title = entity.title;
  }

  toObject(): TagEntity {
    return {...this}
  }
}
