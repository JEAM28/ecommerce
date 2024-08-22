import { Injectable } from '@nestjs/common';
import { UsersRepository } from './user.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}

  getUsers(page: number, limit: number) {
    return this.userRepository.getUsers(page, limit);
  }

  getUserById(id: string) {
    return this.userRepository.getUserById(id);
  }
}
