import { ApiProperty } from '@nestjs/swagger';

export class CreateTagDto {
  @ApiProperty({
    description: 'Tag name',
    example: 'name'
  })
  public title: string;
}
