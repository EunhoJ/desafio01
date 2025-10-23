import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePostDto {
  @IsNumber()
  userId: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  body: string;
}
