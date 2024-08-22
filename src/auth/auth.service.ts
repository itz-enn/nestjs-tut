import { Injectable } from '@nestjs/common';
import { DbConfigService } from 'src/db-config/db-config.service';

@Injectable()
export class AuthService {
  constructor(private dbConfigService: DbConfigService) {}

  signup() {
    return { msg: 'I am a sign-up function' };
  }

  signin() {
    return { msg: 'I am a sign-in function' };
  }
}
