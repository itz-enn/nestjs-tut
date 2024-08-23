import { Controller, Get, UseGuards, Patch} from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  @Get('me')
  getMe(@GetUser('id') user: User) {

    return user;
  }

  @Patch()
  editUser() {}
}
