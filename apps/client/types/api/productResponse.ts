export interface ProductResponse {
	products: Product[];
}

export interface Product {
	id: string;
	title: string;
	description: string;
	price: number;
	count: number;
	images: string[];
}
