import { Injectable } from '@nestjs/common';
import { UserI } from './users.interface';

@Injectable()
export class UsersRepository {
  private users: UserI[] = [
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
    return users.map(
      ({ password, ...userWithoutPassword }) => userWithoutPassword,
    );
  }

  getUserById(id: string) {
    const user = this.users.find((user) => user.id === +id);
    if (!user) {
      return { message: 'id de usuario no existe' };
    }
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  createUser(user: UserI) {
    const id = this.users.length + 1;
    this.users.push({ id, ...user });
    return id;
  }

  updateUser(id: string, user: UserI) {
    this.users = this.users.map((person) => {
      if (person.id === +id) {
        return {
          ...person,
          email: user.email,
          name: user.name,
          password: user.password,
          address: user.address,
          phone: user.phone,
          country: user.country,
          city: user.city,
        };
      }
      return person;
    });
    return this.users.find((user) => user.id === +id).id;
  }

  deleteUserById(id: string) {
    this.users = this.users.filter((user) => user.id !== +id);
    return `se elimino el usuario con id: ${id}`;
  }

  getUserByEmail(email: string) {
    return this.users.find((user) => user.email === email);
  }
}
