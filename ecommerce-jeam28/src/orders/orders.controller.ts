import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrderService } from './orders.service';
import { CreateOrderDto } from './dtos/orders.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('ORDERS')
@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  aggOrder(@Body() order: CreateOrderDto) {
    const { userId, products } = order;
    return this.orderService.aggOrder(userId, products);
  }

  @Get(':id')
  getOrder(@Param('id') id: string) {
    return this.orderService.getOrder(id);
  }
}
