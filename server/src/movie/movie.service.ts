import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CinemaShow } from 'src/cinema-show/cinema.show.entity';
import { Repository } from 'typeorm';
import { Movie } from './movie.entity';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepo: Repository<Movie>,
    @InjectRepository(CinemaShow)
    private readonly movieShowRepo: Repository<CinemaShow>,
  ) {}

  async findOne(id: string): Promise<any> {
    const movie = await this.movieRepo.findOne({
      where: { cinemaId: Number(id) },
      relations: {
        cinemaShows: true,
      },
    });
    if (!movie) {
      throw new HttpException('Movie not found', HttpStatus.NOT_FOUND);
    }
    return movie;
  }
}
