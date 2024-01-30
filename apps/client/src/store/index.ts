import { Product } from '../../types/api/productResponse';
import { create } from 'zustand';

interface BasketState {
	products: Product[];
	push: (product: Product) => void;
	delete: (productId: string) => void;
	totalPrice: () => number;
	deleteAll: () => void;
}

export const useBasketStore = create<BasketState>((setState, getState) => {
	const products = JSON.parse(localStorage.getItem('basketProducts') || '[]');

	const push = (product: Product) => {
		setState((state) => {
			const updatedProducts = [...state.products, product];
			localStorage.setItem('basketProducts', JSON.stringify(updatedProducts));
			return { products: updatedProducts };
		});
	};

	const deleteProduct = (productId: string) => {
		setState((state) => {
			const updatedProducts = state.products.filter((p) => p.id !== productId);
			localStorage.setItem('basketProducts', JSON.stringify(updatedProducts));
			return { products: updatedProducts };
		});
	};

	const deleteAll = () => {
		setState((state) => {
			return { products: [] };
		});
	};

	const totalPrice = () => {
		const { products } = getState();
		return products.reduce((total: number, product: Product) => total + product.price, 0);
	};

	return {
		products,
		push,
		delete: deleteProduct,
		totalPrice,
		deleteAll,
	};
});
