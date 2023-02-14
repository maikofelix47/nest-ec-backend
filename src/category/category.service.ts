import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Category } from './category.entity';

import { MediaService } from 'src/media/media.service';

import { AWSFileUploadResponse } from '../models/aws-file-upload-response';
import { Media } from '../media/media.entity';


@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category) private categoryRepo: Repository<Category>,
    private mediaService: MediaService,
  ) {}

  findAll(): Promise<Category[]> {
    return this.categoryRepo.find({
      relations: {
        media: true
      }
    });
  }

  findById(id: number): Promise<Category> {
    return this.categoryRepo.findOne({ 
      where: {
        id: id,
      },
      relations: {
        media: true
      }
      
    });
  }

  async createCategory(category: Category, file: Express.Multer.File) {
    //upload image to aws
    const uploadedImage: Partial<AWSFileUploadResponse> =
      await this.mediaService.uploadFile(file.buffer, file.originalname);

    // save media in db and get its id

    const mediaPayload: Partial<Media> = {
      name: category.name,
      description: category.description,
      type: '',
      url: uploadedImage.Location,
      createdBy: 1,
    };

    const media = await this.mediaService.create(mediaPayload);

    const gategoryPayload: Partial<Category> = {
      name: category.name,
      description: category.description,
      media: media,
      createdBy: 1,
    };

    // create category with media id
    const categoryEntity = await this.categoryRepo.create(gategoryPayload);

    return this.categoryRepo.save(categoryEntity);
  }
}
