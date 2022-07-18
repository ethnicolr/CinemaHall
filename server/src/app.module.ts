import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { AuthController } from './auth/auth.controller';
import { CinemaShowController } from './cinema-show/cinema.show.controller';
import { CinemaShowModule } from './cinema-show/cinema.show.module';
import { MovieController } from './movie/movie.controller';
import { MovieModule } from './movie/movie.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    DatabaseModule,
    CinemaShowModule,
    MovieModule,
  ],
  controllers: [
    AppController,
    AuthController,
    CinemaShowController,
    MovieController,
  ],
  providers: [AppService],
})
export class AppModule {}
