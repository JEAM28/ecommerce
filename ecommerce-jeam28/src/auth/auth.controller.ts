import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto } from 'src/users/dtos/user.dto';
import { ExcludeUserCredentials } from 'src/helper/interceptor';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  @UseInterceptors(ExcludeUserCredentials)
  signup(@Body() user: CreateUserDto) {
    const { passwordConfirmation, ...cleanUser } = user;
    return this.authService.signUp(cleanUser);
  }

  @Post('/signin')
  signIn(@Body() credentials: LoginUserDto) {
    const { email, password } = credentials;
    return this.authService.signIn(email, password);
  }
}
