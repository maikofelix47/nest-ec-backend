import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { ProductService } from './product.service';

// DTOS
import { CreateProductDto } from './dto/create-product.dto';


import { Product } from './product.entity';

@Controller('product')
export class ProductController {
    constructor(private prodService: ProductService){

    }

    @Get()
    getAllProducts(): Promise<Product[]>{
        return this.prodService.findAll();
    }

    @Get('/:id')
    getProductById(@Param('id') id: string): Promise<Product[]>{
      return this.prodService.findById(parseInt(id));
    }

    @Post()
    createProduct(@Body() body: CreateProductDto): Promise<Product>{
         const payload = (body as unknown) as Product;
         payload.createdBy = 1;
         return this.prodService.createProduct(payload);
    }

    @Get('/category/:categoryId')
    getProductsByCategoryId(@Param('categoryId') categoryId: string){
        return this.prodService.findByCategoryId(parseInt(categoryId));
    }





}
