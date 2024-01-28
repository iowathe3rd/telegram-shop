import ProductGrid from './components/ProductGrid';
import Layout from './components/Layout';
import { startMirage } from '../mirage/config';

startMirage();

export function App() {
	return (
		<Layout>
			<ProductGrid />
		</Layout>
	);
}

export default App;
