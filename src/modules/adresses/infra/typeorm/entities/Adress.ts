import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import State from '@modules/states/infra/typeorm/entities/State';
import User from '@modules/users/infra/typeorm/entities/User';

@Entity('adresses')
export default class Adresses {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  state_id: string;

  @OneToMany(() => User, user => user.adress)
  user: User[];

  @Column()
  city: string;

  @ManyToOne(() => State, state => state.adress)
  @JoinColumn({ name: 'state_id', referencedColumnName: 'id' })
  state: State;
}
