import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserRolePermission{
    @PrimaryGeneratedColumn()
    id: number;


}