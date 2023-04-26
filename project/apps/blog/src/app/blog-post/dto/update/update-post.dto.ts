import { ApiProperty } from '@nestjs/swagger';
import { Tag } from '@project/shared/app-types';

export class UpdatePostDto {
  @ApiProperty({
    description: 'Status (draft/posted)',
    example: 'draft'
  })
  public status?: string;

  @ApiProperty({
    description: 'post type',
    example: 'text'
  })
  public type?: string;

  @ApiProperty({
    description: 'Optional post tags',
    example: [{title: 'tag1'}]
  })
  public tags?: string[];
}
