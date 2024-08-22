import { Injectable } from '@nestjs/common';
import { User, UsersRepository } from './user.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}

  getUsers(page: number, limit: number) {
    return this.userRepository.getUsers(page, limit);
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
