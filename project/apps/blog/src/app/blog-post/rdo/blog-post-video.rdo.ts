import { ApiProperty } from '@nestjs/swagger';
import { BlogPostRdo } from './blog-post.rdo';
import { Expose } from 'class-transformer';

export class BlogPostVideoRdo extends BlogPostRdo {
  @ApiProperty({
    description: 'Post title',
    example: 'text'
  })
  @Expose()
  public title: string;

  @ApiProperty({
    description: 'URL video',
    example: 'https://example/video'
  })
  @Expose()
  public videoLink: string;
}
