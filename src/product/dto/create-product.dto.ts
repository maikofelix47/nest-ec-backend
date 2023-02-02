import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;
  
  @IsNumber()
  categoryId: number;

  @IsNumber()
  price: number;

  @IsNumber()
  inStock: number;

  @IsString()
  productImg: string;

  @IsNumber()
  rating: number;
}
