import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'QWEWQEQWEWQEQWEQE!';
  }

  getTest(): string {
    return 'get test dDWQEWQEQW!';
  }
}
