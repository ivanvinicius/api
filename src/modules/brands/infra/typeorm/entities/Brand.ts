import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import Product from '@modules/products/infra/typeorm/entities/Product';

@Entity('brands')
export default class Brand {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Product, product => product.brand)
  product: Product[];
}
