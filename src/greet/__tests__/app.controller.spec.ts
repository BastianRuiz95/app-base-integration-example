import { Test, TestingModule } from '@nestjs/testing';
import { GreetController } from '../greet.controller';
import { GreetService } from '../greet.service';

describe('AppController', () => {
  let controller: GreetController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GreetController],
      providers: [GreetService],
    }).compile();

    controller = app.get<GreetController>(GreetController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(controller.getDefaultGreet()).toBe('Hello World!');
    });

    it('shoud return an spanish greeting', () => {
      expect(controller.getSpanishGreet()).toBe('Hola mundo!');
    });
  });
});
