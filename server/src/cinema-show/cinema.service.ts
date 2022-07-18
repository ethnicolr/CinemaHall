import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Raw, Between } from 'typeorm';

import { CinemaShow } from './cinema.show.entity';
import { CinemaQueryParamDto } from './dto/cinema.query.params.dto';
import { CinameShowResponseDto } from './dto/cinema.show.response.dto';

@Injectable()
export class CinemaService {
  constructor(
    @InjectRepository(CinemaShow)
    private readonly cinemaShowRepo: Repository<CinemaShow>,
  ) {}

  async filterCinema(
    filter: CinemaQueryParamDto,
  ): Promise<typeof CinameShowResponseDto> {
    const filterCheck = {};
    (Object.keys(filter) as (keyof CinemaQueryParamDto)[]).forEach((key) => {
      const value = filter[key];
      if (Array.isArray(value)) {
        filterCheck[key] = Raw((alias) => `${alias} IN (:...${key})`, {
          [key]: value.map((v) => v.toUpperCase()),
        });
      } else {
        if (key === 'date') {
          const from = new Date();
          const to = new Date();
          const timeZoneOffse = new Date().getTimezoneOffset() / 60;
          from.setHours(0 - timeZoneOffse, 0, 0, 0);
          to.setHours(0 - timeZoneOffse, 0, 0, 0);

          switch (value.toUpperCase()) {
            case 'TODAY':
              to.setHours(24 - timeZoneOffse, 0, 0, 0);
              break;
            case 'TOMORROW':
              from.setDate(to.getDate() + 1);
              to.setDate(to.getDate() + 2);
              break;
            case 'WEEK':
              to.setDate(to.getDate() + 7);
              break;
            case 'MONTH':
              to.setMonth(to.getMonth() + 1);
              break;
            default:
              break;
          }
          filterCheck['startTime'] = Between(
            from.toISOString(),
            to.toISOString(),
          );
        } else {
          filterCheck[key] = value.toUpperCase();
        }
      }
    });
    const records = await this.cinemaShowRepo.find({
      where: filterCheck,
      relations: { cinema: true },
    });
    return records;
  }
}
