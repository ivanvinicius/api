import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import Adress from '@modules/adresses/infra/typeorm/entities/Adress';

@Entity('states')
export default class State {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Adress, adress => adress.state)
  adress: Adress;
}
