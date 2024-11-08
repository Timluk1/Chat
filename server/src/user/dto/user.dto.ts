import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  imgkey: string;

  @IsString()
  password: string;
}

export class VerifyUserData {
  email: string;
  password: string;
}