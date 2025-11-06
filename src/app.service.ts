import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  setHello(x: string): string {
    if (typeof x === 'string') {
      return 'OK';
    } else {
      return 'Error';
    }
  }
}
