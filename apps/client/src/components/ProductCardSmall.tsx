import React from 'react';
import { Product } from '../../types/api/productResponse';
import Button from './common/Button';

interface ProductCardSmallProps {
	product: Product;
}
const ProductCardSmall: React.FC<ProductCardSmallProps> = ({ product }) => {
	return (
		<div className='card card-side bg-base-100 shadow-xl p-2 justify-start'>
			<div
				className={'w-1/3 rounded-lg'}
				style={{
					backgroundImage: `url(${product.images[0]})`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
				}}
			/>
			<div className='card-body w-2/3'>
				<h2 className={'text-sm font-bold'}>{product.title}</h2>
				<p className={'tg-hint-color text-xs'}>
					If a dog chews shoes whose shoes does he choose?
				</p>
				<div className='card-actions justify-end'>
					<Button size={'sm'}>Add</Button>
					<Button size={'sm'}>Remove</Button>
				</div>
			</div>
		</div>
	);
};

export default ProductCardSmall;
