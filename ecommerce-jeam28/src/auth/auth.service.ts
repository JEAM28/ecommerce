import { BadRequestException, Injectable } from '@nestjs/common';
import { Users } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';
import * as brypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Admin } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signUp(user: Partial<Users>) {
    const { email, password } = user;

    const foundUser = await this.userService.getUserByEmail(email);

    if (foundUser) {
      throw new BadRequestException('usuario ya esta registrado');
    }

    const hashedPassword = await brypt.hash(password, 10);
    return await this.userService.createUser({
      ...user,
      password: hashedPassword,
    });
  }

  async signIn(email: string, password: string) {
    const foundUser = await this.userService.getUserByEmail(email);
    if (!foundUser) {
      throw new BadRequestException('credenciales incorrectas');
    }
    const isPasswordValid = await brypt.compare(password, foundUser.password);

    if (!isPasswordValid) {
      throw new BadRequestException('credenciales incorrectas');
    }
    const userPayload = {
      id: foundUser.id,
      email: foundUser.email,
      Admin: foundUser.Admin,
    };

    const token = this.jwtService.sign(userPayload);

    return {
      message: 'usuario ingreso exitosamente',
      token,
    };
  }
}
