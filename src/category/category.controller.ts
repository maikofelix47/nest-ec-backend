import { Controller, Get, Post, Param, Body, NotFoundException } from '@nestjs/common';

import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './category.entity';

@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService){

    }
    @Get()
    async findAll(){
       const categories = await this.categoryService.findAll();
       if(!categories){
        return new NotFoundException('Categories not found');
       }else{
        return categories;
       }
    }
    
    @Get('/:id')
    async findById(@Param('id') id: number){
       const category = await this.categoryService.findById(id);
       if(!category){
           return new NotFoundException('Category not found');
       }else{
        return category;
       }
    }
    
    @Post()
    createCategory(@Body() body: CreateCategoryDto){
        const payload = (body as unknown) as Category;
        payload.createdBy = 1;
        return this.categoryService.createCategory(payload);
    }
}
