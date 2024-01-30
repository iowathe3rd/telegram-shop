import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	btnColor?: 'info' | 'success' | 'warning' | 'error' | 'tg'; // Определяем допустимые цвета
	size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ size = 'md', btnColor = 'tg', children, onClick }) => {
	const tg = useTelegram();

	const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
		onClick && onClick(event);
		tg?.HapticFeedback.impactOccurred('medium');
	};

	return (
		<button
			className={`btn btn-${btnColor} btn-${size} rounded-full`}
			onClick={handleClick}
		>
			{children}
		</button>
	);
};

export default Button;
