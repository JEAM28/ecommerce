import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ExcludeUserCredentials implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((user) => {
        if (Array.isArray(user)) {
          return user.map((user) => {
            if (user.password) delete user.password;
            if (user.isAdmin) delete user.isAdmin;
            return user;
          });
        } else {
          if (user.password) delete user.password;
          if (user.isAdmin) delete user.isAdmin;
          return user;
        }
      }),
    );
  }
}
