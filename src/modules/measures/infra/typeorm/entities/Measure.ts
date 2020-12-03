import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import ProductMeasure from '@modules/productsMeasures/infra/typeorm/entities/ProductMeasure';
import Area from '@modules/areas/infra/typeorm/entities/Area';

@Entity('measures')
export default class Measure {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  type: number;

  @OneToMany(() => ProductMeasure, productMeasure => productMeasure.measure)
  productMeasure: ProductMeasure[];

  @OneToMany(() => Area, area => area.measure)
  area: Area[];
}
