import { IsString, IsNumber } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  name: string;
  @IsString()
  featureImg: string;
  @IsString()
  description: string;
}
