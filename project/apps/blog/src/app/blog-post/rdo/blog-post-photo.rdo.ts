import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { BlogPostRdo } from './blog-post.rdo';

export class BlogPostPhotoRdo extends BlogPostRdo {
  @ApiProperty({
    description: 'Post photo',
    example: 'example.jpg'
  })
  @Expose()
  public photo: string;
}
