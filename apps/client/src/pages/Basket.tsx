import React from 'react';
import { useBasketStore } from '../store';
import ProductCardSmall from '../components/ProductCardSmall';

const Basket: React.FC = () => {
	const { products, deleteAll } = useBasketStore();
	return (
		<div>
			<div className={'flex justify-between items-center'}>
				<span className={'font-bold'}>Shopping cart</span>
				<button
					className={'btn btn-link tg-link-color'}
					onClick={() => deleteAll()}
				>
					Remove all
				</button>
			</div>
			{products.map((value, index) => {
				return (
					<ProductCardSmall
						product={value}
						key={index}
					/>
				);
			})}
		</div>
	);
};

export default Basket;
