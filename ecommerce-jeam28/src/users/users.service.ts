import { Injectable, NotFoundException } from '@nestjs/common';
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
    // return users.map(({ password, ...user }) => user);
    return users;
  }

  async getUserById(id: string) {
    const user = await this.userRepository.findOne({
      where: { id },
      relations: {
        orders: true,
      },
    });
    if (!user) {
      throw new NotFoundException('usuario no existe');
    }
    // const { password, ...userWithoutPassword} = user
    // return userWithoutPassword
    return user;
  }

  async createUser(user: Users) {
    const newUser = await this.userRepository.save(user);
    return newUser;
  }

  async updateUser(id: string, user: Users) {
    await this.userRepository.update(id, user);
    const updateUser = await this.userRepository.findOneBy({ id });
    return user;
  }

  async deleteUser(id: string) {
    const user = await this.userRepository.findOneBy({ id });
    this.userRepository.remove(user);
    return user;
  }

  async getUserByEmail(email: string) {
    return await this.userRepository.findOneBy({ email });
  }
}
