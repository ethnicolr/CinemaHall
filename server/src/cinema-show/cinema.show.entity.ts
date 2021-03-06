import { Movie } from 'src/movie/movie.entity';
import { Ticket } from 'src/ticket/ticket.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity()
export class CinemaShow {
  @PrimaryGeneratedColumn()
  cinemaShowId: number;

  @Column()
  technology: string;

  @Column()
  format: string;

  @Column()
  price: number;

  @Column({ type: 'timestamp' })
  startTime: string;

  @ManyToOne(() => Movie, (movie) => movie.cinemaShows)
  cinema: Movie;

  @OneToMany(() => Ticket, (ticket) => ticket.cinemaShow)
  tickets: Ticket[];
}
