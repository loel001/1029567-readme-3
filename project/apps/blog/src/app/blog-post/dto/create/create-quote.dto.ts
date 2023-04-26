import { ApiProperty } from '@nestjs/swagger';
import { CreatePostDto } from './create-post.dto';

export class CreateQuoteDto extends CreatePostDto {
  @ApiProperty({
    description: 'quote post',
    example: 'text'
  })
  public quote: string;

  @ApiProperty({
    description: 'Author ID quote post',
    example: '3'
  })
  public quoteAuthor: string;
}
