import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';
import Product from '@modules/products/infra/typeorm/entities/Product';
import Measure from '@modules/measures/infra/typeorm/entities/Measure';

@Entity('products_measures')
export default class ProductMeasure {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  provider_id: string;

  @Column('uuid')
  product_id: string;

  @Column('uuid')
  measure_id: string;

  @Column('numeric')
  volume: number;

  @Column('numeric')
  price: number;

  @ManyToOne(() => User, provider => provider.productMeasure)
  @JoinColumn({ name: 'provider_id', referencedColumnName: 'id' })
  provider: User;

  @ManyToOne(() => Product, product => product.productMeasure, { eager: true })
  @JoinColumn({ name: 'product_id', referencedColumnName: 'id' })
  product: Product;

  @ManyToOne(() => Measure, measure => measure.productMeasure)
  @JoinColumn({ name: 'measure_id', referencedColumnName: 'id' })
  measure: Measure;
}
