import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	btnColor?: 'info' | 'success' | 'warning' | 'error' | 'tg'; // Определяем допустимые цвета
	size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = (props = { size: 'md', btnColor: 'tg' }) => {
	const tg = useTelegram();

	const onClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
		if (props.onClick) {
			props.onClick(event);
		}
		tg?.HapticFeedback.impactOccurred('medium');
	};

	return (
		<button
			className={`btn btn-${props.btnColor} btn-${props.size} rounded-full`}
			onClick={onClick}
		>
			{props.children}
		</button>
	);
};

export default Button;
