import { Model } from 'miragejs';
import { ModelDefinition } from 'miragejs/-types';
import { ProductResponse } from '../../types/api/productResponse';

const ProductModel: ModelDefinition<ProductResponse> = Model.extend({});

export const models = {
	product: ProductModel,
};
