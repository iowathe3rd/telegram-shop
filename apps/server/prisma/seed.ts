import { PrismaClient } from '@prisma/client';
import { CreateProductDto } from '../src/products/dto/create-product.dto';

const prisma = new PrismaClient();

const mockdata: CreateProductDto[] = [
	{
		title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
		price: 109.95,
		description:
			'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
		images: ['https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'],
		count: 4,
	},
	{
		title: 'Mens Casual Premium Slim Fit T-Shirts ',
		price: 22.3,
		description:
			'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
		images: ['https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'],
		count: 4,
	},
	{
		title: 'Mens Cotton Jacket',
		price: 55.99,
		description:
			'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
		images: ['https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg'],
		count: 4,
	},
	{
		title: 'Mens Casual Slim Fit',
		price: 15.99,
		description:
			'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
		images: ['https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg'],
		count: 4,
	},
	{
		title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
		price: 695,
		description:
			"From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
		images: ['https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg'],
		count: 4,
	},
];
async function main() {
	try {
		await Promise.all(
			mockdata.map((value) => {
				return prisma.product.create({
					data: value,
				});
			})
		);
		console.log('Seeding completed successfully.');
	} catch (error) {
		console.error('Error seeding data:', error);
	} finally {
		await prisma.$disconnect();
	}
}

main()
	.catch((error) => {
		console.error('Error seeding data:', error);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
