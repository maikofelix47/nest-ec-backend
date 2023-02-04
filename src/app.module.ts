import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { UsersModule } from './users/users.module';

import { TypeOrmModule } from '@nestjs/typeorm';

//entities
import { User } from './users/user.entity';

@Module({
  imports: [ProductModule, CategoryModule, UsersModule,
   TypeOrmModule.forRoot({
    type: '',
    host: '',
    port: 0,
    username: '',
    password: '',
    database: '',
    logging: true,
    retryAttempts: 2,
    autoLoadEntities: true,
    synchronize: true,
   })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
