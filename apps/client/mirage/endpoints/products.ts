import { Response, Server } from 'miragejs';
import { AppSchema } from '../types';

export function routesForProducts(server: Server) {
	server.get(`/products`, (schema: AppSchema, request) => {
		const products = schema.all('product');
		const seconds = new Date().getSeconds();
		return seconds % 17 === 0
			? new Response(401, {}, { error: true })
			: new Response(200, {}, products);
	});
}
