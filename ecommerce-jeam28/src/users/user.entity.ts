import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({
  name: 'USERS',
})
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 50, nullable: false })
  name: string;

  @Column({ length: 50, unique: true, nullable: false })
  email: string;

  @Column({ type: 'text', nullable: false })
  password: string;

  @Column({ type: 'bigint', nullable: false })
  phone: number;

  @Column({ type: 'text', nullable: false })
  address: string;

  @Column({ length: 50 })
  country: string;

  @Column({ length: 50 })
  city: string;

  @Column({ type: 'boolean', default: false })
  isAdmin: boolean;
}
