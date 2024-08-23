import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({
  name: 'orderDetails',
})
export class OrderDetail {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;
}
