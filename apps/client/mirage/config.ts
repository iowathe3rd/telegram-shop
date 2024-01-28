import { createServer } from 'miragejs';
import { endpoints } from './endpoints';
import { models } from './models';
import { factories } from './factories';
import { faker } from '@faker-js/faker';

export function startMirage() {
	const server = createServer({
		models,
		factories,
		seeds(server) {
			server.createList('product', faker.number.int({ min: 2, max: 25 }));
		},
	});

	// Включаем логирование
	server.logging = true;

	// Устанавливаем префикс для URL
	console.log(import.meta);
	server.urlPrefix = import.meta.env.API_URL ?? 'http://localhost:3000';

	// Регистрируем эндпоинты
	for (const namespace of Object.keys(endpoints) as (keyof typeof endpoints)[]) {
		endpoints[namespace](server);
	}

	// Сброс настроек для всего остального
	server.namespace = '';
	server.passthrough();

	// Выводим содержимое базы данных в консоль (для отладки)
	console.log({ dump: server.db.dump() });
}
