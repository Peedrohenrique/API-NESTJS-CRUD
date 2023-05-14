import { IsEmail, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @MinLength(6, { message: 'O campo nome deve conter no mínimo 6 caracteres.' })
  name: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  @MinLength(4, { message: 'O campo senha deve conter no mínimo 4 caracteres.' })
  password: string;
}
