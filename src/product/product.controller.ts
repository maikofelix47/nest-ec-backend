import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Request,
  UseGuards,
} from '@nestjs/common';

import { ProductService } from './product.service';

// DTOS
import { CreateProductDto } from './dto/create-product.dto';

import { Product } from './product.entity';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('product')
@UseGuards(JwtAuthGuard)
export class ProductController {
  constructor(private prodService: ProductService) {}

  @Get()
  getAllProducts(): Promise<Product[]> {
    return this.prodService.findAll();
  }

  @Get('/:id')
  getProductById(@Param('id') id: string): Promise<Product[]> {
    return this.prodService.findById(parseInt(id));
  }

  @Post()
  createProduct(
    @Body() body: CreateProductDto,
    @Request() req: any,
  ): Promise<Product> {
    const { userId } = req.user;
    const payload = body as unknown as Product;
    payload.createdBy = userId;
    return this.prodService.createProduct(payload);
  }

  @Get('/sub-category/:subCategoryId')
  getProductsBySubCategory(@Param('subCategoryId') subCategoryId: string) {
    return this.prodService.findBySubCategoryId(parseInt(subCategoryId));
  }
}
