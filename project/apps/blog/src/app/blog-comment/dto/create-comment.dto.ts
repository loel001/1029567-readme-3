import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {
  @ApiProperty({
    description: 'Commented post ID',
    example: '13'
  })
  public postId: number;

  @ApiProperty({
    description: 'Comment message',
    example: 'Commenting text'
  })
  public message: string;
}
