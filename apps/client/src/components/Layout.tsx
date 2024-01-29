import React, { PropsWithChildren, useEffect } from 'react';
import NavBar from './common/NavBar';
import { useNavigate } from 'react-router-dom';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
	const navigate = useNavigate();
	const location = window.location;

	useEffect(() => {
		const handleBackButtonClick = () => {
			if (location.pathname !== '/') {
				navigate(-1);
			}
		};

		if (
			window.Telegram &&
			window.Telegram.WebApp &&
			window.Telegram.WebApp.BackButton &&
			location.pathname !== '/'
		) {
			window.Telegram.WebApp.BackButton.onClick(handleBackButtonClick);
			window.Telegram.WebApp.BackButton.show();
		}

		return () => {
			if (
				window.Telegram &&
				window.Telegram.WebApp &&
				window.Telegram.WebApp.BackButton &&
				location.pathname === '/'
			) {
				window.Telegram.WebApp.BackButton.offClick(handleBackButtonClick);
				window.Telegram.WebApp.BackButton.hide();
			}
		};
	}, [location.pathname, navigate]);

	return (
		<>
			<NavBar />
			<div className='container mx-auto'>{children}</div>
		</>
	);
};

export default Layout;
