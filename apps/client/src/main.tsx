import React, { StrictMode, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';

import Layout from './components/Layout';
import { startMirage } from '../mirage/config';
import * as ReactDOM from 'react-dom/client';
import BasketModal from './components/BasketModal';

const Home = React.lazy(() => import('./pages/Home'));
const Basket = React.lazy(() => import('./pages/Basket'));

startMirage();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<StrictMode>
		<Router>
			<Layout>
				<Suspense fallback={<div>Loading...</div>}>
					<Routes>
						{/* Обернутые в React.lazy компоненты */}
						<Route
							path='/'
							element={<Home />}
						/>
						<Route
							path='/basket'
							element={<Basket />}
						/>
					</Routes>
				</Suspense>
			</Layout>
		</Router>
		{/*modals */}
		<BasketModal />
	</StrictMode>
);
