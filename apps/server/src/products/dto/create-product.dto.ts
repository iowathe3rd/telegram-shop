import { ApiProperty } from '@nestjs/swagger';

export class BaseProductDto {
	@ApiProperty({ example: 'Product title' })
	title: string;

	@ApiProperty({ example: 'Product description' })
	description: string;

	@ApiProperty({ example: 10.99 })
	price: number;

	@ApiProperty({ example: 100 })
	count: number;

	@ApiProperty({ example: ['image1.jpg', 'image2.jpg'] })
	images: string[];
}

export class CreateProductDto extends BaseProductDto {}
