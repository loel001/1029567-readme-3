import { ApiProperty } from '@nestjs/swagger';
import { BlogPostRdo } from './blog-post.rdo';
import { Expose } from 'class-transformer';

export class BlogPostQuoteRdo extends BlogPostRdo {
  @ApiProperty({
    description: 'quote post',
    example: 'text'
  })
  @Expose()
  public quote: string;

  @ApiProperty({
    description: 'Author quote post',
    example: 'keks'
  })
  @Expose()
  public quoteAuthor: string;
}
