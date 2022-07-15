import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CinemaService } from './cinema.service';
import { CinemaShow } from './cinema.show.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CinemaShow])],
  providers: [CinemaService],
  exports: [CinemaService],
})
export class CinemaShowModule {}
