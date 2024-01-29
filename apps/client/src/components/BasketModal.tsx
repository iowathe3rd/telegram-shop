import React from 'react';
import { useBasketStore } from '../store';
import ProductItem from './ProductItem';
import Button from './common/Button';

const BasketModal: React.FC = () => {
	// Получение данных о продуктах из хранилища
	const { products } = useBasketStore();

	// Функция для рендеринга списка продуктов
	const renderProductItems = () => {
		return products.map((product, index) => (
			<ProductItem
				key={index}
				product={product}
			/>
		));
	};

	return (
		<dialog
			id='basket_modal'
			className='modal modal-bottom'
		>
			<div className='modal-box bg-section-bg-color shadow-2xl p-4 relative'>
				{/* Список продуктов */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
					{renderProductItems()}
				</div>
				{/* Разделитель */}
				<div className='divider'></div>
				{/* Заголовок и кнопка закрытия */}
				<div className='flex-col justify-center mb-4'>
					<span className='text-lg font-bold'>Ваша корзина</span>

					<div className='modal-action sticky w-full tg-bg-color bottom-0'>
						<form method='dialog'>
							{/* if there is a button in form, it will close the modal */}
							<Button>Очистить корзину</Button>
							<Button className={'btn-error'}>Закрыть</Button>
						</form>
					</div>
				</div>
			</div>
		</dialog>
	);
};

export default BasketModal;
