import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

import Adress from '@modules/adresses/infra/typeorm/entities/Adress';

@Entity('users')
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  adress_id?: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Exclude()
  @Column()
  password: string;

  @Column()
  provider: boolean;

  @ManyToOne(() => Adress, adress => adress.user)
  @JoinColumn({ name: 'adress_id', referencedColumnName: 'id' })
  adress: Adress;
}
