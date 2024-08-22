import { Injectable } from '@nestjs/common';
import { Product, ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}

  getProducts(page: number, limit: number) {
    return this.productsRepository.getProducts(page, limit);
  }

  getProductById(id: string) {
    return this.productsRepository.getProductById(id);
  }

  createProducts(product: Product) {
    return this.productsRepository.createProducts(product);
  }

  updateProducts(id: string, product: Product) {
    return this.productsRepository.updateProducts(id, product);
  }
}
