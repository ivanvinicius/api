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

import User from '@modules/users/infra/typeorm/entities/User';

@Entity('addresses')
@Tree('materialized-path')
export default class Address {
  constructor(props: Omit<Address, 'id'>, id?: string) {
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
  children: Address[];

  @TreeParent()
  parent: Address;

  mpath: string;

  @OneToMany(() => User, user => user.address)
  user: User[];
}
