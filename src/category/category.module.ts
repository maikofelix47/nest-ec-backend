import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryRespository } from './category.repository';
import { CategoryService } from './category.service';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService, CategoryRespository]
})
export class CategoryModule {}
