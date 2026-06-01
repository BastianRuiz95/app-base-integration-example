import { Injectable } from '@nestjs/common';

@Injectable()
export class GreetService {
  getDefaultGreet(): string {
    return 'Hello World!';
  }
  //comment
  getVariantGreet(): string {
    return 'Hello Everyone!';
  }

  getSpanishGreet(): string {
    return 'Hola mundo!';
  }

  getSpanishVariantGreet(): string {
    return 'Hola a todos!';
  }

  getGoodbye(): string {
    return 'Bye bye!';
  }
}
