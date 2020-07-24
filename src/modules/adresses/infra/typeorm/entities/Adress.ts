/* eslint-disable lines-between-class-members */

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
  ManyToOne,
} from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';
import State from '@modules/states/infra/typeorm/entities/State';

@Entity('adresses')
export default class Adresses {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  provider_id: string;
  @OneToOne(() => User)
  @JoinColumn({ name: 'provider_id' })
  provider: User;

  @Column('uuid')
  state_id: string;
  @ManyToOne(() => State)
  @JoinColumn({ name: 'state_id' })
  state: State;

  @Column()
  city: string;
}
