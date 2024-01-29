import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import { Product, ProductResponse } from '../../types/api/productResponse';

const ProductGrid: React.FC = () => {
	const [data, setData] = useState<Product[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('https://localhost:3000/products');
				if (!response.ok) {
					return new Error('Failed to fetch products');
				}
				const json = (await response.json()) as ProductResponse;
				setData(json.products);
			} catch (error) {
				console.error('Error fetching products:', error);
			}
		};

		fetchData();
	}, []);
	return (
		<div
			className={
				'w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center'
			}
		>
			{data.map((value, index) => {
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
