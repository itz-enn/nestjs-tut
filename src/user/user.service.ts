import { Injectable } from '@nestjs/common';
import { DbConfigService } from 'src/db-config/db-config.service';
import { EditUserDto } from './dto';

@Injectable()
export class UserService {
  constructor(private model: DbConfigService) {}

  async editUser(userId: number, dto: EditUserDto) {
    const user = await this.model.user.update({
      where: {
        id: userId,
      },
      data: {
        ...dto,
      },
    });

    const {password, ...userWithoutPassword} = user;

    return userWithoutPassword
  }
}
