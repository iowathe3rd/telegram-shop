import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
import { prisma } from '../db';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
	async create(createProductDto: CreateProductDto): Promise<Product> {
		return prisma.product.create({
			data: createProductDto,
		});
	}

	async findAll(): Promise<Product[]> {
		return prisma.product.findMany();
	}

	async findOne(id: string): Promise<Product | null> {
		// Изменяем тип возвращаемого значения на Promise<Product | null>
		return prisma.product.findUnique({
			where: { id: id }, // Преобразуем id в число
		});
	}

	async remove(id: string) {
		return prisma.product.delete({
			where: {
				id: id,
			},
		});
	}

	async update(id: string, updateProductDto: UpdateProductDto): Promise<Product> {
		return prisma.product.update({
			where: {
				id: id,
			},
			data: updateProductDto,
		});
	}
}
