import { Test, TestingModule } from '@nestjs/testing';
import { GreetService } from '../greet.service';

describe('AppController', () => {
  let service: GreetService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [GreetService],
    }).compile();

    service = app.get<GreetService>(GreetService);
  });

  describe('#getDefaultGreet', () => {
    it('should return a default message', () => {
      expect(service.getDefaultGreet()).toBe('Hello World!');
    });
  });

  describe('#getVariantGreet', () => {
    it('should return a variant message', () => {
      expect(service.getVariantGreet()).toBe('Hello Everyone!');
    });
  });
});
