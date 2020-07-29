import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import Subcategory from '@modules/subcategories/infra/typeorm/entities/Subcategory';
import Brand from '@modules/brands/infra/typeorm/entities/Brand';
import ProductMeasure from '@modules/productsMeasures/infra/typeorm/entities/ProductMeasure';

@Entity('products')
export default class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  subcategory_id: string;

  @Column('uuid')
  brand_id: string;

  @Column()
  name: string;

  @Column()
  composition?: string;

  @ManyToOne(() => Subcategory, subcategory => subcategory.product, {
    eager: true,
  })
  @JoinColumn({ name: 'subcategory_id', referencedColumnName: 'id' })
  subcategory: Subcategory;

  @ManyToOne(() => Brand, brand => brand.product, { eager: true })
  @JoinColumn({ name: 'brand_id', referencedColumnName: 'id' })
  brand: Brand;

  @OneToMany(() => ProductMeasure, productMeasure => productMeasure.product)
  productMeasure: ProductMeasure[];
}
