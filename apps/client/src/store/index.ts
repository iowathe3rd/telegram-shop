import { Product } from '../../types/api/productResponse';
import { create } from 'zustand';

interface BasketState {
	products: Product[];
	push: (product: Product) => void;
	delete: (productId: string) => void;
	totalPrice: () => number;
}

export const useBasketStore = create<BasketState>((set) => {
	const products = JSON.parse(localStorage.getItem('basketProducts') || '[]');

	const push = (product: Product) => {
		set((state) => {
			const updatedProducts = [...state.products, product];
			localStorage.setItem('basketProducts', JSON.stringify(updatedProducts));
			return { products: updatedProducts };
		});
	};

	const deleteProduct = (productId: string) => {
		set((state) => {
			const updatedProducts = state.products.filter((p) => p.id !== productId);
			localStorage.setItem('basketProducts', JSON.stringify(updatedProducts));
			return { products: updatedProducts };
		});
	};

	const totalPrice = () => {
		return products.reduce((total: number, product: Product) => total + product.price, 0);
	};

	return {
		products,
		push,
		delete: deleteProduct,
		totalPrice,
	};
});
