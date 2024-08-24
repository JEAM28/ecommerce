import { Categories } from 'src/categories/categories.entity';
import { OrderDetails } from 'src/orders/ordersDetails.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity({
  name: 'PRODUCTS',
})
export class Products {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 50, nullable: false, type: 'varchar', unique: true })
  name: string;

  @Column({ type: 'text', nullable: false })
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  price: number;

  @Column({ type: 'int', nullable: false })
  stock: number;

  @Column({ nullable: true, default: 'default-image-url.jpg' })
  imgUrl: string;

  @ManyToMany(() => OrderDetails, (orderDetails) => orderDetails.products)
  orderDetail: OrderDetails[];

  @ManyToOne(() => Categories, (category) => category.products)
  @JoinColumn({
    name: 'category_id',
  })
  category: Categories;
}
