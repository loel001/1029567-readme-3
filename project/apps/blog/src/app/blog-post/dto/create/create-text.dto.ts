import { ApiProperty } from '@nestjs/swagger';
import { CreatePostDto } from './create-post.dto';

export class CreateTextDto extends CreatePostDto {
  @ApiProperty({
    description: 'Post title',
    example: 'title'
  })
  public title: string;

  @ApiProperty({
    description: 'Post text',
    example: 'post text'
  })
  public text: string;

  @ApiProperty({
    description: 'Post announcement',
    example: 'text'
  })
  public announcement: string;
}
