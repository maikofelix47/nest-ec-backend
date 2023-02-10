import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

import { TypeOrmModule } from '@nestjs/typeorm';


import { DBConfig } from 'db-config';
import { PermissionModule } from './permission/permission.module';
import { RoleModule } from './role/role.module';
import { RolePermissionModule } from './role-permission/role-permission.module';
import { UserRolePermissionModule } from './user-role-permission/user-role-permission.module';

@Module({
  imports: [ProductModule, CategoryModule, UsersModule,
   TypeOrmModule.forRoot(
   DBConfig
   ),
   AuthModule,
   PermissionModule,
   RoleModule,
   RolePermissionModule,
   UserRolePermissionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
