import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
	return (
		<div className='navbar tg-header-bg-colors'>
			<div className='flex-1'></div>
			<div className='flex-none'>
				<Link
					to={'/basket'}
					className={'btn btn-circle btn-ghost flex justify-center items-center p-2'}
				>
					<ShoppingCartIcon className={'w-full'} />
				</Link>
			</div>
		</div>
	);
};

export default NavBar;
