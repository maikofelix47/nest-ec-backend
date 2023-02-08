import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    categoryId: number;

    @Column()
    inStock: number;

    @Column()
    productImg: string;

    @Column()
    rating: number;

}