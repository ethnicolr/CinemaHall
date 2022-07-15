import { Hall } from 'src/hall/hall.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class CinemaSession {
  @PrimaryGeneratedColumn()
  cinemaShowId: number;

  @Column()
  format: string;

  @Column()
  price: number;

  @Column()
  startTime: string;

  @Column()
  technology: string;

  @OneToOne(() => Hall)
  @JoinColumn()
  hall: Hall;
}
