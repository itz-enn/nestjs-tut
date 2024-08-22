import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { DbConfigModule } from '../db-config/db-config.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
