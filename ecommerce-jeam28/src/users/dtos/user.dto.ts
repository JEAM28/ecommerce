// import { ApiHideProperty } from '@nestjs/swagger';
import { PickType } from '@nestjs/mapped-types';
import {
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsString,
  Matches,
  MaxLength,
  MinLength,
  Validate,
} from 'class-validator';
// import { MatchPassword } from 'src/decorators/matchPassword.decorator';

export class CreateUserDto {
  /**
   * @description este parametro recibe el nombre como un string de minimo 3 caracteres
   * @example "Example"
   */
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  name: string;

  /**
   * @description este parametro recibe el email como un string
   * @example "example@gmail.com"
   */
  @IsNotEmpty()
  @IsEmail()
  email: string;

  /**
   * @description este parametro recibe la password como un string de 8 a 15 caracteres que debe contener letras entre mayuscula y minuscula, numeros y simbolos
   * @example "Example123#"
   */
  @IsNotEmpty()
  @IsString()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, {
    message:
      'La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.',
  })
  @MinLength(8)
  @MaxLength(15)
  password: string;

  //   /**
  //    * @description este parametro recibe la password como un string de 8 a 15 caracteres que debe contener letras entre mayuscula y minuscula, numeros y simbolos
  //    * @example "Example123#"
  //    */
  //   @IsNotEmpty()
  //   @Validate(MatchPassword, ['password'])
  //   passwordConfirmation: string;

  /**
   * @description este parametro recibe la direccion como un string de maximo 80 caracteres
   * @example "calle 1 carrera 1"
   */
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(80)
  address: string;

  /**
   * @description este parametro recibe el celular como un number de 10 numeros
   * @example "3001112233"
   */
  @IsNotEmpty()
  @IsNumber()
  phone: number;

  /**
   * @description este parametro recibe el pais como un string de minimo 5 y maximo 20 caracteres
   * @example "Pais"
   */
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(20)
  country: string;

  /**
   * @description este parametro recibe la ciudad como un string de minimo 5 y maximo 20 caracteres
   * @example "Ciudad"
   */

  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(20)
  city: string;

  //   @ApiHideProperty()
  //   @IsEmpty()
  //   isAdmin?: boolean;
}

export class LoginUserDto extends PickType(CreateUserDto, [
  'email',
  'password',
]) {}
