import { Injectable } from '@nestjs/common';

import { ProductRepository } from './product.repository';

import { Product } from '../models/product';


@Injectable()
export class ProductService {
    constructor(private productRepo: ProductRepository){

    }

    findOne(id: string){
        return this.productRepo.findOne(id);
    }

    findAll(){
        return this.productRepo.findAll();
    }

    createProduct(product: Product){
      return this.productRepo.createProduct(product);
    }
}
