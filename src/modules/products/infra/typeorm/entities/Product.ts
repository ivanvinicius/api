import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Category from '@modules/categories/infra/typeorm/entities/Category';

@Entity('products')
export default class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  category_id: string;

  @Column()
  name: string;

  @Column()
  composition?: string;

  @ManyToOne(() => Category, category => category.product)
  @JoinColumn({ name: 'category_id', referencedColumnName: 'id' })
  category: Category;
}
