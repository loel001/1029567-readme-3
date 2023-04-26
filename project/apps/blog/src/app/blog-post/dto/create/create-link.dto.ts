import { ApiProperty } from '@nestjs/swagger';
import { CreatePostDto } from './create-post.dto';

export class CreateLinkDto extends CreatePostDto {

  @ApiProperty({
    description: 'Service link',
    example: 'http://example.com'
  })
  public link: string;

  @ApiProperty({
    description: 'Description post link',
    example: 'text',
    required: false,
  })
  public description: string;
}
