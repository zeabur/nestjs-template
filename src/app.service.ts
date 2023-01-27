import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome, this is a basic NestJS (https://docs.nestjs.com/) server deployed on Zeabur (https://zeabur.com)';
  }
}
