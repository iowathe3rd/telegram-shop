import React from 'react';
import { useBasketStore } from '../store';
import ProductItem from './ProductItem';

const BasketModal: React.FC = () => {
	const { products } = useBasketStore();
	return (
		<dialog
			id='basket_modal'
			className='modal modal-bottom'
		>
			<div className='modal-box tg-section-bg-color shadox-2xl'>
				<div className={'flex justify-between'}>
					<span className={'text-lg font-bold'}>Ваша корзина</span>
					<button
						className={'btn btn-ghost btn-circle'}
						onClick={() => window.basket_modal.close()}
					></button>
				</div>
				<div className='divider'></div>
				<div
					className={
						'w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center'
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
			</div>
		</dialog>
	);
};

export default BasketModal;
