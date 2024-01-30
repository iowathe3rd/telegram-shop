import React from 'react';
import ProductItem from './ProductItem';
import { Product } from '../../types/api/productResponse';

interface ProductGridProps {
	products: Product[];
}
const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
	return (
		<div
			className={
				'w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center p-4'
			}
		>
			{products.map((value, index) => {
				return (
					<ProductItem
						key={value.id}
						product={value}
					/>
				);
			})}
		</div>
	);
};

export default ProductGrid;
