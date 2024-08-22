import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.repository';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(@Query('page') page: number, @Query('limit') limit: number) {
    if (page && limit) {
      return this.usersService.getUsers(page, limit);
    }
    return this.usersService.getUsers(1, 5);
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(id);
  }

  @Post()
  createUser(@Body() user: any) {
    return this.usersService.createUser(user);
  }

  @Put('id')
  updateUser(@Param('id') id: number, @Body() user: User) {
    return this.usersService.updateUser(id, user);
  }

  @Delete('id')
  deleteUser(@Param('id') id: number) {
    return this.usersService.deleteUser(id);
  }
}
