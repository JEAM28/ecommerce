import { Module } from '@nestjs/common';
import { OrderService } from './orders.service';
import { OrderController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/users/user.entity';
import { Products } from 'src/products/products.entity';
import { Orders } from './orders.entity';
import { OrderDetails } from './ordersDetails.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users, Products, Orders, OrderDetails])],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
