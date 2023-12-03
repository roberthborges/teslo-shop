import { ApiProperty } from '@nestjs/swagger';

export class ForbiddenErrorDto {
  @ApiProperty({
    type: 'number',
    example: 403,
    description: 'Status code error',
  })
  statusCode: number;

  @ApiProperty({
    type: 'string',
    example: 'Forbidden Error',
    description: 'Message error description',
  })
  message: string;
}
