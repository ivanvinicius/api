import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import ProductMeasure from '@modules/productsMeasures/infra/typeorm/entities/ProductMeasure';

@Entity('measures')
export default class Measure {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  name: string;

  @OneToMany(() => ProductMeasure, productMeasure => productMeasure.measure)
  productMeasure: ProductMeasure[];
}
