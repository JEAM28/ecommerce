import { Injectable } from '@nestjs/common';
import { User, UsersRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private userRepository: Repository<Users>,
  ) {}

  async getUsers(page: number, limit: number) {
    let users = await this.userRepository.find();
    const start = (page - 1) * limit;
    const end = start + +limit;
    users = users.slice(start, end);
    return users.map(({ password, ...user }) => user);
  }

  getUserById(id: string) {
    return this.userRepository.getUserById(id);
  }

  createUser(user: User) {
    return this.userRepository.createUser(user);
  }

  updateUser(id: number, user: User) {
    return this.userRepository.updateUser(id, user);
  }

  deleteUser(id: number) {
    return this.userRepository.deleteUser(id);
  }
}
