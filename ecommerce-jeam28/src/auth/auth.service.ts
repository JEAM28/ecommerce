import { BadRequestException, Injectable } from '@nestjs/common';
import { Users } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async signUp(user: Partial<Users>) {
    const { email, password } = user;

    const foundUser = this.userService.getUserByEmail(email);

    if (foundUser) {
      throw new BadRequestException('usuario ya esta registrado');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    return await this.userService.createUser({
      ...user,
      password: hashedPassword,
    });
  }

  signIn(email: string, password: string) {}
}
