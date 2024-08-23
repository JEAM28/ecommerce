import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({
  name: 'products',
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
}
