import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class MasterAuthTokenGuard implements CanActivate {
	masterAuthToken: string = process.env.MASTER_AUTH_TOKEN;

	canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
		const request = context.switchToHttp().getRequest();
		const masterAuthTokenHeader = request.headers['MASTER_AUTH_TOKEN'];

		// Проверяем наличие и соответствие токена
		return masterAuthTokenHeader === this.masterAuthToken;
	}
}
