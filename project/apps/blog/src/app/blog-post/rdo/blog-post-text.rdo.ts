import { ApiProperty } from '@nestjs/swagger';
import { BlogPostRdo } from './blog-post.rdo';
import { Expose } from 'class-transformer';

export class BlogPostTextRdo extends BlogPostRdo {
  @ApiProperty({
    description: 'Post title',
    example: 'text'
  })
  @Expose()
  public title: string;

  @ApiProperty({
    description: 'Post announcement',
    example: 'text'
  })
  @Expose()
  public announcement: string;

  @ApiProperty({
    description: 'Post text',
    example: 'post text'
  })
  @Expose()
  public text: string;
}
