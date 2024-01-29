import React, { useEffect } from 'react';
import { useBasketStore } from '../../store';
import BasketDropdown from '../BasketDropdown';

const NavBar: React.FC = () => {
	const { products, totalPrice } = useBasketStore();
	useEffect(() => {
		console.log(window.Telegram.WebApp.HapticFeedback.impactOccurred('rigid'));
	}, []);
	return (
		<div className='navbar tg-header-bg-colors'>
			<div className='flex-1'></div>
			<div className='flex-none'>
				<BasketDropdown
					basketProducts={products}
					totalPrice={totalPrice}
				/>
			</div>
		</div>
	);
};

export default NavBar;
