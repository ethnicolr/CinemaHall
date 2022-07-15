import { CinemaShow } from 'src/cinema-show/cinema.show.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  ticketId: number;

  @Column()
  row: number;

  @Column()
  chair: number;

  @ManyToOne(() => CinemaShow, (cinemaShows) => cinemaShows.tickets)
  cinemaShow: CinemaShow;
}
