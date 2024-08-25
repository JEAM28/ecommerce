import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Orders } from './orders.entity';
import { Repository } from 'typeorm';
import { OrderDetails } from './ordersDetails.entity';
import { Users } from 'src/users/user.entity';
import { Products } from 'src/products/products.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Orders)
    private ordersRepository: Repository<Orders>,
    @InjectRepository(Orders)
    private orderDetailsRepository: Repository<OrderDetails>,
    @InjectRepository(Orders)
    private usersRepository: Repository<Users>,
    @InjectRepository(Orders)
    private ProductsRepository: Repository<Products>,
  ) {}

  async aggOrder(userId: string, products: any) {
    let total = 0;
    const user = await this.usersRepository.findOneBy({ id: userId });
    if (!user) {
      throw new NotFoundException('usuario no existe');
    }
    const order = new Orders();
    order.date = new Date();
    order.user = user;

    const newOrder = await this.ordersRepository.save(order);

    const productsArray = await Promise.all(
      products.map(async (element) => {
        const product = await this.ProductsRepository.findOneBy({
          id: element.id,
        });
        if (!product) {
          throw new NotFoundException('producto no encontrado');
        }
        total += Number(product.price);

        await this.ProductsRepository.update(
          { id: element.id },
          { stock: product.stock - 1 },
        );
        return product;
      }),
    );
  }
}
