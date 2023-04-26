import { ApiProperty } from "@nestjs/swagger";
import { Expose } from 'class-transformer';

export class CommentRdo {
  @ApiProperty({
    description: 'Comment ID',
    example: '13'
  })
  @Expose({ name: '_id' })
  public id: string;

  @ApiProperty({
    description: 'Commented post ID',
    example: '13'
  })
  @Expose()
  public postId: string;

  @ApiProperty({
    description: 'Author ID comment',
    example: '13'
  })
  @Expose({ name: '_userId' })
  public userId: string;

  @ApiProperty({
    description: 'Comment post date',
    example: '2000-10-31T01:30:00.000-05:00'
  })
  @Expose()
  public createdAt: string;

  @ApiProperty({
    description: 'Comment message',
    example: 'Commenting example'
  })
  @Expose()
  public message: string;
}
