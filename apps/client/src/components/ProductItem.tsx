import React from 'react';
import { useBasketStore } from '../store';
import { Product } from '../../types/api/productResponse';
import Button from './common/Button';

export interface ProductItemsProps {
	product: Product;
}

const ProductItem: React.FC<ProductItemsProps> = (props) => {
	const { push } = useBasketStore();
	return (
		<div className='card max-w-96 bg-base-200 shadow-xl'>
			<figure className='px-10 pt-10'>
				<img
					src={props.product.images[0]}
					alt={props.product.title}
					className='rounded-xl'
				/>
			</figure>
			<div className='card-body items-center text-center'>
				<h2 className='card-title'>{props.product.title}</h2>
				<h2 className='card-title text-md'>{props.product.price} ₸</h2>
				<p className={'text-sm font-light text-hint'}>{props.product.description}</p>
				<div className='card-actions'>
					<Button onClick={() => push(props.product)}>To the basket</Button>
				</div>
			</div>
		</div>
	);
};

export default ProductItem;
