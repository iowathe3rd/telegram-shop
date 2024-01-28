import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TelegramModule } from '../telegram/telegram.module';
import { ProductsModule } from '../products/products.module';

@Module({
	imports: [TelegramModule, ProductsModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
