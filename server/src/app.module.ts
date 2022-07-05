import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [AuthModule, UsersModule, DatabaseModule],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}