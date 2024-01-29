import React, { useEffect } from 'react';
import { useBasketStore } from '../store';
import ProductGrid from '../components/ProductGrid';

const Home: React.FC = () => {
	const { products } = useBasketStore();
	useEffect(() => {
		if (products.length > 0) {
			window.Telegram.WebApp.MainButton.show();
		}
	}, [products]);
	return <ProductGrid />;
};

export default Home;
