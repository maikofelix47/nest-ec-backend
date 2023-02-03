import { Injectable } from "@nestjs/common";

import { writeFile, readFile } from "fs/promises";

@Injectable()
export class CategoryRespository{
    constructor(){}

    async findById(id: number){
        const categoriesString = await readFile('categories.json', 'utf-8');
        const categories = JSON.parse(categoriesString);
        return categories[id];

    }

    async findAll(){
        const categoriesString = await readFile('categories.json', 'utf-8');
        const categories = JSON.parse(categoriesString);
        return categories;

    }

    async createCategory(category: any){
        const categoriesString = await readFile('categories.json', 'utf-8');
        const categories = JSON.parse(categoriesString);
        const id = Math.floor(Math.random() * 99);
        categories[id] = {
            id,
            ...category
        }
        writeFile('categories.json', JSON.stringify(categories));
        return categories[id];

    }
}