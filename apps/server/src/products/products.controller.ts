import {
	Controller,
	Get,
	Post,
	Body,
	Param,
	Delete,
	HttpStatus,
	HttpException,
	Res,
	Patch,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
import { Response } from 'express';
import {
	ApiTags,
	ApiResponse,
	ApiBadRequestResponse,
	ApiInternalServerErrorResponse,
	ApiNotFoundResponse,
} from '@nestjs/swagger';
import { UpdateProductDto } from './dto/update-product.dto';

@ApiTags('products')
@Controller('products')
export class ProductsController {
	constructor(private readonly productsService: ProductsService) {}

	@Post()
	@ApiResponse({
		status: HttpStatus.CREATED,
		description: 'The product has been successfully created.',
		type: Product,
	})
	@ApiBadRequestResponse({ description: 'Bad request: invalid data provided.' })
	@ApiInternalServerErrorResponse({ description: 'Internal server error.' })
	async create(@Body() createProductDto: CreateProductDto, @Res() res: Response) {
		try {
			const createdProduct = await this.productsService.create(createProductDto);
			return res.status(HttpStatus.CREATED).json(createdProduct);
		} catch (error) {
			throw new HttpException('Failed to create product', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@Patch(':id')
	@ApiResponse({
		status: HttpStatus.OK,
		description: 'The product has been successfully updated.',
		type: Product,
	})
	@ApiNotFoundResponse({ description: 'Product not found.' })
	@ApiBadRequestResponse({ description: 'Bad request: invalid data provided.' })
	@ApiInternalServerErrorResponse({ description: 'Internal server error.' })
	async update(
		@Param('id') id: string,
		@Body() updateProductDto: UpdateProductDto,
		@Res() res: Response
	): Promise<Product> {
		try {
			const updatedProduct = await this.productsService.update(id, updateProductDto);
			if (!updatedProduct) {
				return new HttpException('Product not found', HttpStatus.NOT_FOUND);
			}
			return res.json(updatedProduct).status(HttpStatus.OK);
		} catch (error) {
			throw new HttpException('Failed to update product', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@Get()
	@ApiResponse({ status: HttpStatus.OK, description: 'List of products.', type: [Product] })
	@ApiInternalServerErrorResponse({ description: 'Internal server error.' })
	async findAll(@Res() res: Response) {
		try {
			const products = await this.productsService.findAll();
			return res.status(HttpStatus.OK).json(products);
		} catch (error) {
			throw new HttpException(
				'Failed to retrieve products',
				HttpStatus.INTERNAL_SERVER_ERROR
			);
		}
	}

	@Get(':id')
	@ApiResponse({ status: HttpStatus.OK, description: 'The product.', type: Product })
	@ApiInternalServerErrorResponse({ description: 'Internal server error.' })
	async findOne(@Param('id') id: string, @Res() res: Response) {
		try {
			const product = await this.productsService.findOne(id);
			if (!product) {
				return new HttpException('Product not found', HttpStatus.NOT_FOUND);
			}
			return res.status(HttpStatus.OK).json(product);
		} catch (error) {
			throw new HttpException('Failed to retrieve product', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@Delete(':id')
	@ApiResponse({
		status: HttpStatus.OK,
		description: 'The product has been successfully deleted.',
	})
	@ApiInternalServerErrorResponse({ description: 'Internal server error.' })
	async remove(@Param('id') id: string, @Res() res: Response) {
		try {
			await this.productsService.remove(id);
			return res.status(HttpStatus.OK).send();
		} catch (error) {
			throw new HttpException('Failed to delete product', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
