import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    description: 'Product Title',
    example: 'Shirt Tommy Hilfiger',
    nullable: false,
    minLength: 1,
  })
  @IsString()
  @MinLength(1)
  title: string;

  @ApiProperty({
    example: 100,
    description: 'Product Price',
    default: 0,
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  price?: number;

  @ApiProperty({
    example: 'Shirt for men',
    description: 'Product Description',
    default: null,
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    example: 'tshirt_tommy_hilfiger',
    description: 'Slug for product',
    default: null,
  })
  @IsString()
  @IsOptional()
  slug?: string;

  @ApiProperty({
    example: 10,
    description: 'Stock Product',
    default: 0,
  })
  @IsInt()
  @IsPositive()
  @IsOptional()
  stock: number;

  @ApiProperty({
    enum: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Product Size',
    default: [],
  })
  @IsString({ each: true })
  @IsArray()
  sizes: string[];

  @ApiProperty({
    enum: ['men', 'women', 'kid', 'unisex'],
    description: 'Product Gender',
    default: null,
  })
  @IsIn(['men', 'women', 'kid', 'unisex'])
  gender: string;

  @ApiProperty({
    description: 'Product Tags',
    default: [],
  })
  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  tags: string[] = [];

  @ApiProperty({
    description: 'Product Images',
    example: [
      'http://images.example.com/products/image1.jpg',
      'http://images.example.com/products/image2.jpg',
    ],
    default: [],
  })
  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  images?: string[];
}
