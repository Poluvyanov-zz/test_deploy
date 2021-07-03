import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World 2!';
  }

  getTest(): string {
    return 'get test!';
  }
}
