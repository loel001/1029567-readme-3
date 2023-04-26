import { ApiProperty } from '@nestjs/swagger';

export class UpdateTagDto {
  @ApiProperty({
    description: 'Tag name',
    example: 'name'
  })
  public title: string;
}
