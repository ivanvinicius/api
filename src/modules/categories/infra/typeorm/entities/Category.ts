import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import Product from '@modules/products/infra/typeorm/entities/Product';

@Entity('categories')
export default class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  category_id?: string;

  @Column()
  name: string;

  @OneToMany(() => Product, product => product.category)
  product: Product;
}
