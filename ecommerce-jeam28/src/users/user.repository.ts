import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  email: string;
  name: string;
  password: string;
  address: string;
  phone: string;
  country?: string | undefined;
  city?: string | undefined;
};

@Injectable()
export class UsersRepository {
  private users: User[] = [
    {
      id: 1,
      email: 'jesus@gmail.com',
      name: 'Jesus',
      password: '12345',
      address: 'calle 1 carrera 17 casa 11',
      phone: '3001234567',
      country: 'colombia',
      city: 'bogota',
    },
    {
      id: 2,
      email: 'fitz@gmail.com',
      name: 'Carlos',
      password: '12345',
      address: 'calle 1 carrera 17 casa 11',
      phone: '3001234567',
      country: 'colombia',
      city: 'bogota',
    },
    {
      id: 3,
      email: 'belu@gmail.com',
      name: 'Belen',
      password: '12345',
      address: 'calle 1 carrera 17 casa 11',
      phone: '3001234567',
      country: 'colombia',
      city: 'bogota',
    },
    {
      id: 4,
      email: 'necho@gmail.com',
      name: 'Nelson',
      password: '12345',
      address: 'calle 1 carrera 17 casa 11',
      phone: '3001234567',
      country: 'colombia',
      city: 'bogota',
    },
    {
      id: 5,
      email: 'tito@gmail.com',
      name: 'Arian',
      password: '12345',
      address: 'calle 1 carrera 17 casa 11',
      phone: '3001234567',
      country: 'colombia',
      city: 'bogota',
    },
    {
      id: 6,
      email: 'sebass@gmail.com',
      name: 'sebastian',
      password: '12345',
      address: 'calle 1 carrera 17 casa 11',
      phone: '3001234567',
      country: 'colombia',
      city: 'bogota',
    },
    {
      id: 7,
      email: 'mirian@gmail.com',
      name: 'Mrian',
      password: '12345',
      address: 'calle 1 carrera 17 casa 11',
      phone: '3001234567',
      country: 'colombia',
      city: 'bogota',
    },
    {
      id: 8,
      email: 'jesus@gmail.com',
      name: 'Jesus',
      password: '12345',
      address: 'calle 1 carrera 17 casa 11',
      phone: '3001234567',
      country: 'colombia',
      city: 'bogota',
    },
    {
      id: 9,
      email: 'fitz@gmail.com',
      name: 'Carlos',
      password: '12345',
      address: 'calle 1 carrera 17 casa 11',
      phone: '3001234567',
      country: 'colombia',
      city: 'bogota',
    },
    {
      id: 10,
      email: 'belu@gmail.com',
      name: 'Belen',
      password: '12345',
      address: 'calle 1 carrera 17 casa 11',
      phone: '3001234567',
      country: 'colombia',
      city: 'bogota',
    },
    {
      id: 11,
      email: 'necho@gmail.com',
      name: 'Nelson',
      password: '12345',
      address: 'calle 1 carrera 17 casa 11',
      phone: '3001234567',
      country: 'colombia',
      city: 'bogota',
    },
    {
      id: 12,
      email: 'tito@gmail.com',
      name: 'Arian',
      password: '12345',
      address: 'calle 1 carrera 17 casa 11',
      phone: '3001234567',
      country: 'colombia',
      city: 'bogota',
    },
    {
      id: 13,
      email: 'sebass@gmail.com',
      name: 'sebastian',
      password: '12345',
      address: 'calle 1 carrera 17 casa 11',
      phone: '3001234567',
      country: 'colombia',
      city: 'bogota',
    },
    {
      id: 14,
      email: 'mirian@gmail.com',
      name: 'Mrian',
      password: '12345',
      address: 'calle 1 carrera 17 casa 11',
      phone: '3001234567',
      country: 'colombia',
      city: 'bogota',
    },
  ];

  getUsers(page: number, limit: number) {
    const start = (page - 1) * limit;
    const end = start + +limit;
    const users = this.users.slice(start, end);
    return users.map(({ password, ...users }) => users);
  }

  getUserById(id: string) {
    const user = this.users.find((user) => user.id === +id);
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  createUser(user: User) {
    const id = this.users.length + 1;
    user.id = id;
    this.users.push(user);
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  updateUser(id: number, user: User) {
    const oldUser = this.users.find((user) => user.id === +id);
    if (!oldUser) {
      return 'usuario no existe';
    }
    const updateUser = { ...oldUser, ...user };

    const index = this.users.findIndex((user) => user.id === +id);
    this.users[index] = updateUser;
    const { password, ...userWithoutPassword } = updateUser;
    return userWithoutPassword;
  }

  deleteUser(id: number) {
    const index = this.users.findIndex((user) => user.id === +id);
    const user = this.users[index];
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  getUserByEmail(email: string) {
    return this.users.find((user) => user.email === email);
  }
}
