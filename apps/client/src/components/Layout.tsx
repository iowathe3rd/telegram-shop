import React, { PropsWithChildren } from 'react';
import NavBar from './common/NavBar';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<NavBar />
			<div className='container mx-auto'>{children}</div>
		</>
	);
};

export default Layout;
