import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import Subcategory from '@modules/subcategories/infra/typeorm/entities/Subcategory';

@Entity('categories')
export default class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Subcategory, subcategory => subcategory.category)
  subcategory: Subcategory[];
}
