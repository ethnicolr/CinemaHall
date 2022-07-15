import { Controller, Get, Param, Query } from '@nestjs/common';
import { CinemaQueryParamDto } from './dto/cinema.query.params.dto';
import { CinameShowResponseDto } from './dto/cinema.show.response.dto';
import { CinemaService } from './cinema.service';

@Controller()
export class CinemaShowController {
  constructor(private readonly CinemaService: CinemaService) {}

  @Get('cinemaShows')
  async getCinemaShows(
    @Query() params: CinemaQueryParamDto,
  ): Promise<typeof CinameShowResponseDto> {
    return await this.CinemaService.filterCinema(params);
  }
}
