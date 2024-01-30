import React, { useEffect, useState } from 'react';
import { useBasketStore } from '../store';
import ProductGrid from '../components/ProductGrid';
import { Product, ProductResponse } from '../../types/api/productResponse';

const Home: React.FC = () => {
	const { products } = useBasketStore();

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
	useEffect(() => {
		if (products.length > 0) {
			window.Telegram.WebApp.MainButton.show();
		}
	}, [products]);
	return <ProductGrid products={data} />;
};

export default Home;
