import ProductGrid from './components/ProductGrid';
import Layout from './components/Layout';
import { startMirage } from '../mirage/config';
import { useEffect } from 'react';
import { useBasketStore } from './store';

startMirage();

export function App() {
	const { products } = useBasketStore();
	useEffect(() => {
		if (products.length > 0) {
			window.Telegram.WebApp.MainButton.show();
		}
	}, [products]);
	return (
		<Layout>
			<ProductGrid />
		</Layout>
	);
}

export default App;
