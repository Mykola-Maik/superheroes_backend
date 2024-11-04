import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateSuperheroDto {
  @IsNotEmpty()
  @IsString()
  nickname: string;

  @IsNotEmpty()
  @IsString()
  real_name: string;

  @IsNotEmpty()
  @IsString()
  origin_description: string;

  @IsNotEmpty()
  @IsString()
  superpowers: string;

  @IsNotEmpty()
  @IsString()
  catch_phrase: string;

  @IsArray()
  @IsString({ each: true })
  images: string[];
}
