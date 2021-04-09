import {
  Entity,
  Tree,
  Column,
  PrimaryColumn,
  TreeChildren,
  TreeParent,
  TreeLevelColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import User from '@modules/users/infra/typeorm/entities/User';
import Product from '@modules/products/infra/typeorm/entities/Product';
import Culture from '@modules/cultures/infra/typeorm/entities/Culture';
import Measure from '@modules/measures/infra/typeorm/entities/Measure';

@Entity('portfolios')
@Tree('materialized-path')
export default class Portfolio {
  constructor(props: Omit<Portfolio, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }

  @PrimaryColumn('uuid')
  readonly id: string;

  @TreeLevelColumn()
  parent_id: string;

  @Column('uuid')
  provider_id: string;

  @Column('uuid')
  product_id: string;

  @Column('uuid')
  culture_id: string;

  @Column('uuid')
  measure_id: string;

  @Column('decimal')
  size: number;

  @Column('decimal')
  price: number;

  @Column('decimal')
  recommendation: number;

  @Column('numeric')
  productivity: number;

  mpath: string;

  @TreeChildren({ cascade: true })
  children: Portfolio[];

  @TreeParent()
  parent: Portfolio;

  @ManyToOne(() => User, user => user.portfolio)
  @JoinColumn({ name: 'provider_id', referencedColumnName: 'id' })
  user: User;

  @ManyToOne(() => Product, product => product.portfolio)
  @JoinColumn({ name: 'product_id', referencedColumnName: 'id' })
  product: Product;

  @ManyToOne(() => Culture, culture => culture.portfolio)
  @JoinColumn({ name: 'culture_id', referencedColumnName: 'id' })
  culture: Culture;

  @ManyToOne(() => Measure, measure => measure.portfolio)
  @JoinColumn({ name: 'measure_id', referencedColumnName: 'id' })
  measure: Measure;
}
