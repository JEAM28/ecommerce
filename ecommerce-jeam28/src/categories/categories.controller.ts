import { Controller, Get } from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get('seeder')
  aggCategories() {
    return this.categoriesService.aggCategories();
  }

  @Get()
  getCategories() {
    return this.categoriesService.getCategories();
  }
}
