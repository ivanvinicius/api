import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { v4 as uuid } from 'uuid';

import Address from '@modules/addresses/infra/typeorm/entities/Address';

@Entity('users')
export default class User {
  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }

  @PrimaryColumn('uuid')
  id: string;

  @Column('uuid')
  address_id?: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Exclude()
  @Column()
  password: string;

  @Column()
  provider: boolean;

  @ManyToOne(() => Address, address => address.user)
  @JoinColumn({ name: 'address_id', referencedColumnName: 'id' })
  address: Address;
}
