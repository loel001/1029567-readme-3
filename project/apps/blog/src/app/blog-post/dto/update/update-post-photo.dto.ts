import { ApiProperty } from '@nestjs/swagger';
import { UpdatePostDto } from './update-post.dto';
import {Expose} from "class-transformer";

export class UpdatePostPhotoDto extends UpdatePostDto {
  @ApiProperty({
    description: 'Post photo',
    example: 'example.jpg'
  })
  @Expose()
  public photo?: string;
}
