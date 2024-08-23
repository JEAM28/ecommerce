import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'orders',
})
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'timestamp' })
  date: Date;
}
