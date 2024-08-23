import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { UserModule } from './user/user.module';
import { DbConfigModule } from './db-config/db-config.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    AuthModule,
    BookmarkModule,
    UserModule,
    DbConfigModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
})
export class AppModule {}
