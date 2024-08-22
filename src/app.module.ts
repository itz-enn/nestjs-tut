import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { UserModule } from './user/user.module';
import { DbConfigModule } from './db-config/db-config.module';

@Module({
  imports: [AuthModule, BookmarkModule, UserModule, DbConfigModule], 
})
export class AppModule {}
