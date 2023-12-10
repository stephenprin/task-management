import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(30)
  username: string;
  @IsString()
  @MinLength(6)
  @MaxLength(32)
  @Matches(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/, {
    message: 'Password too weak',
  })
  password: string;
}
