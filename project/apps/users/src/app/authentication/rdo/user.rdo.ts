import { Expose } from 'class-transformer';
import {ApiProperty} from "@nestjs/swagger";

export class UserRdo {
  @ApiProperty({
    description: 'The uniq user ID',
    example: '13'
  })
  @Expose({ name: '_id'})
  public id: string;

  @ApiProperty({
    description: 'User uniq email',
    example: 'user@user.ru',
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'User name',
    example: 'Keks'
  })
  @Expose()
  public name: string;

  @ApiProperty({
    description: 'User create date',
    example: '1981-03-12'
  })
  @Expose()
  public avatar: string;

  @ApiProperty({
    description: 'User create date',
    example: '1981-03-12'
  })
  @Expose()
  public createDate: string;

  @ApiProperty({
    description: 'posts Count',
    example: '1'
  })
  @Expose()
  public postsCount: number;

  @ApiProperty({
    description: 'subscribers Count',
    example: '1'
  })
  @Expose()
  public subscribersCount: number;
}
