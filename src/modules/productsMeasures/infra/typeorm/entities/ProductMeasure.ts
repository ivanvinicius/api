import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}
