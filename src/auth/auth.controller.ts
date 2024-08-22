import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('sign-up')
  signup() {
    return this.authService.signup;
  }

  @Post('sign-in')
  signin() {
    return this.authService.signin;
  }
}
