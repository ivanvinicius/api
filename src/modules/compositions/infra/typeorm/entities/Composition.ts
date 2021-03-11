import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import ProductMeasure from '@modules/productsMeasures/infra/typeorm/entities/ProductMeasure';

@Entity('compositions')
export default class Composition {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  provider_id: string;

  @Column()
  culture_id: string;

  @Column('numeric')
  productivity: number;

  @Column()
  volume: string;

  @ManyToOne(
    () => ProductMeasure,
    productMeasure => productMeasure.composition,
    { eager: true },
  )
  @JoinColumn({ name: 'product_measure_id', referencedColumnName: 'id' })
  productMeasure: ProductMeasure[];
}
