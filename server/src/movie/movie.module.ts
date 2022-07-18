import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieService } from './movie.service';
import { Movie } from './movie.entity';
import { CinemaShow } from 'src/cinema-show/cinema.show.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Movie, CinemaShow])],
  providers: [MovieService],
  exports: [MovieService],
})
export class MovieModule {}
