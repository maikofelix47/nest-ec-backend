import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateMediaDto } from './dtos/create-media.dto';
import { MediaService } from './media.service';

@Controller('media')
export class MediaController {
  constructor(private mediaService: MediaService) {}

  @Get()
  findAll() {
    return this.mediaService.findAll();
  }

  @Get('/:id')
  findById(@Param('id') id: string) {
    return this.mediaService.findById(parseInt(id));
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  createMedia(@UploadedFile() file: Express.Multer.File) {
    return this.mediaService.uploadFile(file.buffer, file.originalname);
  }
}
