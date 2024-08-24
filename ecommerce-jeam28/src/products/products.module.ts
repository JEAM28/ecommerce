import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductsRepository } from './products.repository';
import { Products } from './products.entity';
import { Categories } from 'src/categories/categories.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderDetails } from 'src/orders/ordersDetails.entity';
import { Orders } from 'src/orders/orders.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Products, Categories, OrderDetails, Orders]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService, ProductsRepository],
})
export class ProductsModule {}
