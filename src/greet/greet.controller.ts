import { Controller, Get } from '@nestjs/common';
import { GreetService } from './greet.service';

@Controller('greet')
export class GreetController {
  constructor(private readonly greetService: GreetService) {}

  @Get()
  getDefaultGreet() {
    return this.greetService.getDefaultGreet();
  }

  @Get('variant')
  getVariantGreet(): string {
    return this.greetService.getVariantGreet();
  }

  @Get('es')
  getSpanishGreet(): string {
    return this.greetService.getSpanishGreet();
  }

  @Get('es/variant')
  getVariantSpanishGreet(): string {
    return this.greetService.getSpanishVariantGreet();
  }

  @Get('goodbye')
  getGoodbye(): string {
    return this.greetService.getGoodbye();
  }
}
