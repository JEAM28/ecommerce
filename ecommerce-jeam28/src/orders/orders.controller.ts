import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { OrderService } from './orders.service';
import { CreateOrderDto } from './dtos/orders.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guard/auth.guard';

@ApiTags('ORDERS')
@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @ApiBearerAuth()
  @Post()
  @UseGuards(AuthGuard)
  aggOrder(@Body() order: CreateOrderDto) {
    const { userId, products } = order;
    return this.orderService.aggOrder(userId, products);
  }

  @ApiBearerAuth()
  @Get(':id')
  @UseGuards(AuthGuard)
  getOrder(@Param('id') id: string) {
    return this.orderService.getOrder(id);
  }
}
