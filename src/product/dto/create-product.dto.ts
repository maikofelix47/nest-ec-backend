import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsNumber()
  categgoryId: number;

  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsNumber()
  inStock: number;

  @IsString()
  productImg: string;

  @IsNumber()
  rating: number;
}
