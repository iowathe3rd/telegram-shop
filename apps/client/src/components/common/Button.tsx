import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = (props) => {
	const tg = useTelegram();
	const onClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
		if (props.onClick) {
			props.onClick(event);
		}
		tg?.HapticFeedback.impactOccurred('medium');
	};
	return (
		<button
			className={'btn-tg rounded-full'}
			onClick={onClick}
		>
			{props.children}
		</button>
	);
};

export default Button;
