import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'MatchPassword', async: false })
export class MatchPassword implements ValidatorConstraintInterface {
  validate(
    password: string,
    valArguments?: ValidationArguments,
  ): Promise<boolean> | boolean {
    if (password !== valArguments.object[valArguments.constraints[0]])
      return false;
    return true;
  }
  defaultMessage(validationArguments?: ValidationArguments): string {
    return 'las contraseñas no coinciden';
  }
}
