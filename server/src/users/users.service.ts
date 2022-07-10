import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UserDto } from './dto/user.dto';
import { UserEntity } from './user.entity';
// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  async findOne(email: string): Promise<UserDto | undefined> {
    return await this.userRepo.findOne({ where: { email } });
    // const { id, email } = user;
    // return { id, email };
  }

  async create(createdUserDto: CreateUserDto): Promise<UserDto> {
    const { email, password } = createdUserDto;
    const userInDb = await this.userRepo.findOne({
      where: { email },
    });
    if (userInDb) {
      throw new HttpException('Email already in use', HttpStatus.BAD_REQUEST);
    }
    const user = this.userRepo.create({ email, password });
    await this.userRepo.save(user);
    return user;
  }

  async findByEmail({ email, password }: LoginUserDto): Promise<UserDto> {
    const user = await this.userRepo.findOne({ where: { email } });
    if (!user) {
      throw new HttpException('Account not found', HttpStatus.UNAUTHORIZED);
    }
    if (user.password !== password) {
      throw new HttpException('Invalid  password', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }
}
