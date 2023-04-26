import { ApiProperty } from '@nestjs/swagger';
import { UpdatePostDto } from './update-post.dto';

export class UpdatePostVideoDto extends UpdatePostDto {

  @ApiProperty({
    description: 'Video title',
    example: 'video'
  })
  public title?: string;

  @ApiProperty({
    description: 'Post title',
    example: 'text'
  })
  public videoLink?: string;
}
