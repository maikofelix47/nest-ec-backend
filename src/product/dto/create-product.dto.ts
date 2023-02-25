import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  subCategoryId: number;

  @IsNumber()
  price: number;

  @IsNumber()
  inStock: number;
}
