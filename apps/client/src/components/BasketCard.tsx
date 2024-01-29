import React from 'react';
import { Product } from '../../types/api/productResponse';

interface BasketCard {
	product: Product;
}
const BasketCard: React.FC<BasketCard> = ({ product }) => {
	return (
		<div className='card card-side w-1/2 bg-base-100 shadow-xl'>
			<figure>
				<img
					src='https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg'
					alt='Movie'
				/>
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>New movie is released!</h2>
				<p>Click the button to watch on Jetflix app.</p>
				<div className='card-actions justify-end'>
					<button className='btn btn-primary'>Watch</button>
				</div>
			</div>
		</div>
	);
};

export default BasketCard;
