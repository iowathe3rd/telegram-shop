import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TelegramModule } from '../telegram/telegram.module';
import { ProductsModule } from '../products/products.module';
import { ConfigModule } from '@nestjs/config';

@Module({
	imports: [ConfigModule.forRoot({ isGlobal: true }), TelegramModule, ProductsModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
