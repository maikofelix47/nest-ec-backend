import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
    constructor(@InjectRepository(Product) private productRepo: Repository<Product>){

    }

    findById(id: number){
        return this.productRepo.findBy({id});
    }

    findAll(){
        return this.productRepo.find();
    }

    async createProduct(product: Product){
      const productEntity = await this.productRepo.create(product);
      return this.productRepo.save(productEntity);
    }
}
