import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Exclude } from 'class-transformer';

import Adress from '@modules/adresses/infra/typeorm/entities/Adress';

@Entity('states')
export default class State {
  @PrimaryGeneratedColumn('uuid')
  @Exclude()
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Adress, adress => adress.state)
  adress: Adress[];
}
