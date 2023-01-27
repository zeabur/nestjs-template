import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Welcome, this is a basic NestJS (https://docs.nestjs.com/) server deployed on Zeabur (https://zeabur.com)"', () => {
      expect(appController.getHello()).toBe(
        'Welcome, this is a basic NestJS (https://docs.nestjs.com/) server deployed on Zeabur (https://zeabur.com)',
      );
    });
  });
});
