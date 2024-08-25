import { BadRequestException, Injectable } from '@nestjs/common';
import { Product, ProductsRepository } from './products.repository';
import { Products } from './products.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categories } from 'src/categories/categories.entity';
import * as data from '../data.json';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private productsRepository: Repository<Products>,
    @InjectRepository(Categories)
    private categoriesRepository: Repository<Categories>,
  ) {}

  async getProducts(page: number, limit: number): Promise<Products[]> {
    let products = await this.productsRepository.find({
      relations: {
        category: true,
      },
    });
    const start = (page - 1) * limit;
    const end = start + +limit;
    products = products.slice(start, end);
    return products;
  }

  getProductById(id: string) {
    const product = this.productsRepository.findOneBy({ id });
    if (!product) {
      throw new BadRequestException('producto no encontrado');
    }
  }

  async aggProducts(product: Product) {
    const categories = await this.categoriesRepository.find();
    data?.map(async (element) => {
      const category = categories.find(
        (category) => category.name === element.category,
      );
      const product = new Products();
      product.name = element.name;
      product.description = element.description;
      product.price = element.price;
      product.imgUrl = element.imgUrl;
      product.stock = element.stock;
      product.category = category;
    });
    return 'productos agregados con exito';
  }

  async updateProducts(id: string, product: Products) {
    await this.productsRepository.update(id, product);

    const updateProducts = await this.productsRepository.findOneBy({ id });
    return updateProducts;
  }
}
