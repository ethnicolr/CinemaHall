import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class CinemaShow {
  @PrimaryGeneratedColumn()
  cinemaShowId: number;
}
