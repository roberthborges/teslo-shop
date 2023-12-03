import { ApiProperty } from '@nestjs/swagger';

export class InternalErrorDto {
  @ApiProperty({
    type: 'number',
    example: 500,
    description: 'Status code error',
  })
  statusCode: number;

  @ApiProperty({
    type: 'string',
    example: 'Internal Server Error',
    description: 'Message error description',
  })
  message: string;
}
