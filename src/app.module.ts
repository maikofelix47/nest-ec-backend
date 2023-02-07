import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

import { TypeOrmModule } from '@nestjs/typeorm';


import { DBConfig } from 'db-config';

@Module({
  imports: [ProductModule, CategoryModule, UsersModule,
   TypeOrmModule.forRoot(
   DBConfig
   ),
   AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
