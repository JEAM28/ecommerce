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
import { CreateUserDto } from './dtos/user.dto';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/roles.enum';
import { RolesGuard } from 'src/guard/roles.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  @UseInterceptors(ExcludeUserCredentials)
  getUsers(@Query('page') page: number, @Query('limit') limit: number) {
    if (page && limit) {
      return this.usersService.getUsers(page, limit);
    }
    return this.usersService.getUsers(1, 5);
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  @UseInterceptors(ExcludeUserCredentials)
  updateUser(@Param('id') id: string, @Body() user: CreateUserDto) {
    return this.usersService.updateUser(id, user);
  }

  @Delete(':id')
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
