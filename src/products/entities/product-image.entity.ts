import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity({ name: 'product_images' })
export class ProductImage {
  @ApiProperty({
    uniqueItems: true,
    example: '1145',
    description: 'Image ID',
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 'http://images.example.com/products/image1.jpg',
    description: 'Image URL',
    default: null,
  })
  @Column('text')
  url: string;

  @ApiProperty({ type: () => Product })
  @ManyToOne(() => Product, (product) => product.images, {
    onDelete: 'CASCADE',
  })
  product: Product;
}
