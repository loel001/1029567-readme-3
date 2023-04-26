import { ApiProperty } from '@nestjs/swagger';
import { UpdatePostDto } from './update-post.dto';

export class UpdatePostTextDto extends UpdatePostDto {
  @ApiProperty({
    description: 'Post title',
    example: 'title'
  })
  public title?: string;

  @ApiProperty({
    description: 'Post text',
    example: 'post text'
  })
  public text?: string;

  @ApiProperty({
    description: 'Post announcement',
    example: 'text'
  })
  public announcement?: string;
}
