import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { SubCategoryService } from './sub-category.service';
import { SubCategory } from './sub-category.entity';
import { CreateSubCategoryDto } from './dtos/create-sub-category.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
@Controller('sub-category')
@UseGuards(JwtAuthGuard)
export class SubCategoryController {
  constructor(private subCategoryService: SubCategoryService) {}

  @Get()
  findAll(): Promise<SubCategory[]> {
    return this.subCategoryService.findAll();
  }

  @Get('/:id')
  findById(@Param('id') id: string): Promise<SubCategory[]> {
    return this.subCategoryService.findById(parseInt(id));
  }

  @Post()
  create(@Body() body: CreateSubCategoryDto, @Request() req: any) {
    const { userId } = req.user;
    const payLoad = {
      ...body,
      createdBy: userId,
    } as unknown as SubCategory;

    return this.subCategoryService.create(payLoad);
  }
}
