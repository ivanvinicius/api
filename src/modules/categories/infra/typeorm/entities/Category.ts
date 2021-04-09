import {
  Entity,
  Tree,
  Column,
  PrimaryColumn,
  TreeChildren,
  TreeParent,
  TreeLevelColumn,
  OneToMany,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import Product from '@modules/products/infra/typeorm/entities/Product';

@Entity('categories')
@Tree('materialized-path')
export default class Category {
  constructor(props: Omit<Category, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }

  @PrimaryColumn('uuid')
  readonly id: string;

  @Column('varchar')
  name: string;

  @TreeLevelColumn()
  parent_id: string;

  @TreeChildren({ cascade: true })
  children: Category[];

  @TreeParent()
  parent: Category;

  mpath: string;

  @OneToMany(() => Product, product => product.category)
  product: Product[];
}
