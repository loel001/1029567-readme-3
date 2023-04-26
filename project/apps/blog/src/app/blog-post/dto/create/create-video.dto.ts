import { ApiProperty } from '@nestjs/swagger';
import { CreatePostDto } from './create-post.dto';

export class CreateVideoDto extends CreatePostDto {

  @ApiProperty({
    description: 'Video title',
    example: 'video'
  })
  public title: string;

  @ApiProperty({
    description: 'Post title',
    example: 'text'
  })
  public videoLink: string;
}
