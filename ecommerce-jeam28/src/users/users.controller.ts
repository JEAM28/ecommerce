import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.repository';
import { AuthGuard } from 'src/guard/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @UseGuards(AuthGuard)
  getUsers(@Query('page') page: number, @Query('limit') limit: number) {
    if (page && limit) {
      return this.usersService.getUsers(page, limit);
    }
    return this.usersService.getUsers(1, 5);
  }

  @Post()
  createUser(@Body() user: any) {
    return this.usersService.createUser(user);
  }

  @Put('id')
  @UseGuards(AuthGuard)
  updateUser(@Param('id') id: number, @Body() user: User) {
    return this.usersService.updateUser(id, user);
  }

  @Delete('id')
  @UseGuards(AuthGuard)
  deleteUser(@Param('id') id: number) {
    return this.usersService.deleteUser(id);
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(id);
  }
}
