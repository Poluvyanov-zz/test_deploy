import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '-----!';
  }

  getTest(): string {
    return 'get test ---!';
  }
}
