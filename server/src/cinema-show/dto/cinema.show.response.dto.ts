import { plainToClass } from 'class-transformer';
import { CinemaShow } from '../cinema.show.entity';

const test = class CinameShowResponse {};

const CinameShowResponseDto = plainToClass(test, CinemaShow);

export { CinameShowResponseDto };
