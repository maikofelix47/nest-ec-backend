import { Injectable } from '@nestjs/common';

import { CategoryRespository } from './category.repository';

import { Category } from '../models/category';

@Injectable()
export class CategoryService {
    constructor(private categoryRepo: CategoryRespository){

    }

    findAll(){
        return this.categoryRepo.findAll();
    }

    findById(id: number){
       return this.categoryRepo.findById(id);
    }

    createCategory(category: Category){
        return this.categoryRepo.createCategory(category);
    }
}
