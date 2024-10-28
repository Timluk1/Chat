import { IsEmail, MinLength, Matches } from 'class-validator';

export class AuthDto {
  @IsEmail()
  email: string;

  @MinLength(9, { message: 'Длинна пароля должна быть минимум 9 символов' })
  @Matches(/[%$#&@]/, { message: 'Пароль должен содержать хотя бы один из символов %$#&@ и цифру' })
  password: string;
}

export class RegistrationDto {
  accessToken: string
}