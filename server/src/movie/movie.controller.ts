import { Controller, Get, Param } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller()
export class MovieController {
  constructor(private readonly MovieService: MovieService) {}

  @Get('cinema/:id')
  async findOne(@Param() param): Promise<any> {
    return await this.MovieService.findOne(param.id);
  }
}
