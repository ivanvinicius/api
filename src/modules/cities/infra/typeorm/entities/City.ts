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

@Entity('cities')
export default class City {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  state_id: string;

  @OneToMany(() => User, user => user.city)
  user: User[];

  @Column()
  name: string;

  @ManyToOne(() => State, state => state.city, { eager: true })
  @JoinColumn({ name: 'state_id', referencedColumnName: 'id' })
  state: State;
}
