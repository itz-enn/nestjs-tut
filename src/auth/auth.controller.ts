import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
 
  @Post('sign-up')
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  @Post('sign-in')
  signin(@Body() dto: AuthDto) {
    return this.authService.signin(dto);
  }
}
