import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  cinemaId: number;

  @Column()
  name: string;

  @Column()
  poster: string;

  @Column()
  preview: string;

  @Column()
  description: string;

  @Column()
  imdbRating: string;

  @Column()
  yearOfCreation: string;

  @Column()
  country: string;

  @Column()
  language: string;

  @Column()
  genre: string;

  @Column()
  mainCrew: string;

  @Column()
  director: string;

  @Column()
  screenwriter: string;

  @Column()
  duration: string;

  @Column()
  ageRestriction: string;

  @Column()
  rentalStart: string;
}
