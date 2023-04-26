import { ApiProperty } from '@nestjs/swagger';
import { UpdatePostDto } from './update-post.dto';

export class UpdatePostQuoteDto extends UpdatePostDto {
  @ApiProperty({
    description: 'quote post',
    example: 'text'
  })
  public quote?: string;

  @ApiProperty({
    description: 'Author ID quote post',
    example: '3'
  })
  public quoteAuthor?: string;
}
