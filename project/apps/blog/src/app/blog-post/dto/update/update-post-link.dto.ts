import { ApiProperty } from '@nestjs/swagger';
import { UpdatePostDto } from './update-post.dto';

export class UpdatePostLinkDto extends UpdatePostDto {
  @ApiProperty({
    description: 'Service link',
    example: 'http://example.com'
  })
  public link?: string;

  @ApiProperty({
    description: 'Description post link',
    example: 'text',
    required: false,
  })
  public description?: string;
}
