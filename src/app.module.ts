import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ProductModule, CategoryModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
