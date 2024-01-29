import React from 'react';
import { useBasketStore } from '../store';
import BasketCard from '../components/BasketCard';

const Basket: React.FC = () => {
	const { products } = useBasketStore();
	return (
		<div>
			{products.map((value, index) => {
				return (
					<BasketCard
						product={value}
						key={index}
					/>
				);
			})}
		</div>
	);
};

export default Basket;
