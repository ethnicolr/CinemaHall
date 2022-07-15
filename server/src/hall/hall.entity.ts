import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Hall {
  @PrimaryGeneratedColumn()
  hallId: number;
}
