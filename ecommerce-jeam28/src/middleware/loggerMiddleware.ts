import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const now = new Date();
    const localDateTime = now.toLocaleString();
    console.log(
      `paso por el metodo ${req.method} el dia ${localDateTime} desde la ruta ${req.url}`,
    );
    next();
  }
}
