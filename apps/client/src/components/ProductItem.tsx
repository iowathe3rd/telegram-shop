import React from 'react';

export interface ProductItemsProps {
	title: string;
	price: number;
	description: string;
	id: string;
	imgLink: string;
}

const ProductItem: React.FC<ProductItemsProps> = (props) => {
	return (
		<div className='card max-w-96 bg-base-100 shadow-xl'>
			<figure className='px-10 pt-10'>
				<img
					src={props.imgLink}
					alt={props.title}
					className='rounded-xl'
				/>
			</figure>
			<div className='card-body items-center text-center'>
				<h2 className='card-title'>{props.title}</h2>
				<p>{props.description}</p>
				<div className='card-actions'>
					<button className='btn btn-primary'>Buy Now</button>
				</div>
			</div>
		</div>
	);
};

export default ProductItem;
