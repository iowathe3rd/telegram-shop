import { Factory } from 'miragejs';
import { faker } from '@faker-js/faker';
import { Product } from '../../types/api/productResponse';

export const productFactory = Factory.extend<Product>({
	id: () => faker.string.uuid(),
	count: () => faker.number.int({ min: 1, max: 10 }), // Генерация случайного числа от 1 до 10
	images: () => [faker.image.url()],
	price: () => Number(faker.commerce.price({ min: 2000, max: 40000 })),
	title: () => faker.commerce.productName(),
	description: () => faker.commerce.productDescription(),
});
