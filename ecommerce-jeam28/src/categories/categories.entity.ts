import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({
  name: 'categorys',
})
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 50, nullable: false, unique: true })
  name: string;
}
