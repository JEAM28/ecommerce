import { Injectable } from '@nestjs/common';
import { UsersRepository } from './user.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}

  getUsers() {
    return this.userRepository.getUsers(1, 5);
  }
}
