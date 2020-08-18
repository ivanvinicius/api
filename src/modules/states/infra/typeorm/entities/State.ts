import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Exclude } from 'class-transformer';

import City from '@modules/cities/infra/typeorm/entities/City';

@Entity('states')
export default class State {
  @PrimaryGeneratedColumn('uuid')
  @Exclude()
  id: string;

  @Column()
  name: string;

  @OneToMany(() => City, city => city.state)
  city: City[];
}
