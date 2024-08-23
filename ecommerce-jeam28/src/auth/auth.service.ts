import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/users/user.repository';

@Injectable()
export class AuthService {
  constructor(private readonly userRepository: UsersRepository) {}
  getAuth() {
    return 'Autenticacion';
  }

  signIn(email: string, password: string) {
    if (!email || !password) {
      return 'credenciales invalidas';
    }
    const user = this.userRepository.getUserByEmail(email);
    if (!user) {
      return 'credenciales incorrectas';
    }
    if (user.password === password) {
      return 'usuario ingreso con exito';
    }
    return 'credenciales incorrectas';
  }
}
