import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';

interface apiresponse {
	title: string;
	price: number;
	description: string;
	id: string;
	image: string;
}

const ProductGrid: React.FC = () => {
	const [data, setData] = useState<apiresponse[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('https://localhost:3000/products');
				if (!response.ok) {
					return new Error('Failed to fetch products');
				}
				const products: apiresponse[] = await response.json();
				setData(products);
			} catch (error) {
				console.error('Error fetching products:', error);
			}
		};

		fetchData();
	}, []);
	return (
		<>
			{data.map((value, index) => {
				return (
					<ProductItem
						title={value.title}
						description={value.description}
						id={value.id}
						price={value.price}
						imgLink={value.image}
					/>
				);
			})}
		</>
	);
};

export default ProductGrid;
