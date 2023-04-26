import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { CreatePostDto } from './create-post.dto';

export class CreatePhotoDto extends CreatePostDto {

  @ApiProperty({
    description: 'Post photo',
    example: 'example.jpg'
  })
  @Expose()
  public photo: string;
}
