import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

import Adress from '@modules/adresses/infra/typeorm/entities/Adress';

@Entity('users')
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  adress_id: string;

  @OneToOne(() => Adress, adress => adress.user)
  @JoinColumn({ name: 'adress_id', referencedColumnName: 'id' })
  adress: Adress;

  @Column()
  name: string;

  @Column()
  email: string;

  @Exclude()
  @Column()
  password: string;

  @Column()
  provider: boolean;
}
