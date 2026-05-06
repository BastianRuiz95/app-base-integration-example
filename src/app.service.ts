import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHello2(): string {
    return 'Hello World2!';
  }

  getSaludo(): string {
    return 'Hola a todos!';
  }
}
