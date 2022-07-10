import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserDto {
  @IsNotEmpty() id: number;
  @IsNotEmpty() @IsEmail() email: string;
  @IsNotEmpty() @IsEmail() password: string;
}
