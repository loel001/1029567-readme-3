import { ApiProperty } from '@nestjs/swagger';
import { BlogPostRdo } from './blog-post.rdo';
import { Expose } from 'class-transformer';

export class BlogPostLinkRdo extends BlogPostRdo {
  @ApiProperty({
    description: 'Service link',
    example: 'http://example.com'
  })
  @Expose()
  public link: string;

  @ApiProperty({
    description: 'Description post link',
    example: 'text'
  })
  @Expose()
  public description: string;
}
