import { Controller, Get, Post, Param, Body, NotFoundException, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './category.entity';
import { MediaService } from 'src/media/media.service';
import { AWSFileUploadResponse } from '../models/aws-file-upload-response';
@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService, 
        private mediaService: MediaService){

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
    @UseInterceptors(FileInterceptor('file'))
    async createMedia(@Body() body: CreateCategoryDto, @UploadedFile() file: Express.Multer.File){
        
        const categorPayload = (body as unknown) as Category;
        return this.categoryService.createCategory(categorPayload,file);
       
    }
}
