import { IsNotEmpty } from 'class-validator';

export class ProfileUserDto {
  @IsNotEmpty() email: string;
  @IsNotEmpty() id: number;
}
