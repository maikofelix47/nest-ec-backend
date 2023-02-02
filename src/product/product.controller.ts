import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { ProductService } from './product.service';

// DTOS

import { CreateCategoryDto } from 'src/category/dto/create-category.dto';

import { Product } from '../models/product';

@Controller('product')
export class ProductController {
    constructor(private prodService: ProductService){

    }

    @Get()
    getAllProducts(){
        return this.prodService.findAll();
    }

    @Get('/:id')
    getProductById(@Param('id') id: string){
      return this.prodService.findOne(id);
    }

    @Post()
    createProduct(@Body() body: CreateCategoryDto){
         const payload = (body as unknown) as Product;
         return this.prodService.createProduct(payload);
    }




}
