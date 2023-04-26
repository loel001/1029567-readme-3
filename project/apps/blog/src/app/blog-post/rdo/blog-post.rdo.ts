import { Tag } from '@project/shared/app-types';
import { PostType, PostStatus } from '@prisma/client';
import { Expose, Transform, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { UserRdo } from './user.rdo';

export class BlogPostRdo {
  @ApiProperty({
    description: 'Unique post ID',
    example: '13'
  })
  @Expose({ name: '_id' })
  @Transform(({obj}) => obj._id.toString())
  public id: string;

  @ApiProperty({
    description: 'Post type',
    example: 'text'
  })
  @Expose()
  public type: string;

  @ApiProperty({
    description: 'Post author ID',
    example: '15'
  })
  @Expose({ name: '_userId' })
  @Type(() => UserRdo)
  public userId: UserRdo;

  @ApiProperty({
    description: 'Date post created',
    example: '2023-04-20T11:00:00.03Z'
  })
  @Expose()
  public createdAt: string;

  @ApiProperty({
    description: 'Date post published',
    example: '2023-04-20T11:00:00.03Z'
  })
  @Expose()
  public publishedAt: string;

  @ApiProperty({
    description: 'Post status',
    example: 'publish'
  })
  @Expose()
  public status: string;

  @ApiProperty({
    description: 'Is reposted',
    example: false
  })
  @Expose()
  public isReposted: boolean;

  @ApiProperty({
    description: 'Count likes',
    example: '1'
  })
  @Expose()
  public likesCount: number;

  @ApiProperty({
    description: 'Count comments',
    example: '1'
  })
  @Expose()
  public commentsCount: number;

  @ApiProperty({
    description: 'Tag list',
    example: ['test']
  })
  @Expose()
  public tags: string[];
}
