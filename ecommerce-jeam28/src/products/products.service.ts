import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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

  async aggProducts() {
    const categories = await this.categoriesRepository.find();

    if (!categories) {
      throw new NotFoundException(
        'primero debes ejecutar el seeder de categorias',
      );
    }
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

      await this.productsRepository
        .createQueryBuilder()
        .insert()
        .into(Products)
        .values(product)
        .orUpdate(['description', 'price', 'imgUrl', 'stock'], ['name'])
        .execute();
    });
    return 'productos agregados con exito';
  }

  async updateProducts(id: string, product: Products) {
    await this.productsRepository.update(id, product);

    const updateProducts = await this.productsRepository.findOneBy({ id });
    return updateProducts;
  }
}
