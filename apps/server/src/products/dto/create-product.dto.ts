export class BaseProductDto {
	title: string;
	description: string;
	price: number;
	count: number;
	images: string[];
	categoryId: string;
}

export class CreateProductDto extends BaseProductDto {}
