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
    let user = await this.userRepository.find();
    const start = (page - 1) * limit;
    const end = start + +limit;
    user = user.slice(start, end);
    return user;
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
    return user;
  }

  async createUser(user: Partial<Users>) {
    const newUser = await this.userRepository.save(user);
    return newUser;
  }

  async updateUser(id: string, user: Partial<Users>) {
    await this.userRepository.update(id, user);
    const updateUser = await this.userRepository.findOneBy({ id });
    return user;
  }

  async deleteUser(id: string) {
    const user = await this.userRepository.findOneBy({ id });
    this.userRepository.remove(user);
    return `usuario con id: ${id} se elimino correctamente`;
  }

  async getUserByEmail(email: string) {
    return await this.userRepository.findOneBy({ email });
  }
}
