import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Product from '@modules/products/infra/typeorm/entities/Product';
import Category from '@modules/categories/infra/typeorm/entities/Category';

@Entity('subcategories')
export default class Subcategory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  category_id?: string;

  @Column()
  name: string;

  @ManyToOne(() => Category, category => category.subcategory, { eager: true })
  @JoinColumn({ name: 'category_id', referencedColumnName: 'id' })
  category: Category;

  @OneToMany(() => Product, product => product.subcategory)
  product: Product[];
}
