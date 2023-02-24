import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  subCategoryId: number;

  @IsNumber()
  price: number;

  @IsNumber()
  inStock: number;
}
