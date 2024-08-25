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
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/guard/auth.guard';
import { ExcludeUserCredentials } from 'src/helper/interceptor';
import { Users } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @UseGuards(AuthGuard)
  @UseInterceptors(ExcludeUserCredentials)
  getUsers(@Query('page') page: number, @Query('limit') limit: number) {
    if (page && limit) {
      return this.usersService.getUsers(page, limit);
    }
    return this.usersService.getUsers(1, 5);
  }

  @Post()
  @UseInterceptors(ExcludeUserCredentials)
  createUser(@Body() user: any) {
    return this.usersService.createUser(user);
  }

  @Put('id')
  @UseGuards(AuthGuard)
  updateUser(@Param('id') id: string, @Body() user: Users) {
    return this.usersService.updateUser(id, user);
  }

  @Delete('id')
  @UseGuards(AuthGuard)
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(id);
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  @UseInterceptors(ExcludeUserCredentials)
  getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(id);
  }
}
