import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Exclude } from 'class-transformer';

import Adress from '@modules/adresses/infra/typeorm/entities/Adress';
import ProductMeasure from '@modules/productsMeasures/infra/typeorm/entities/ProductMeasure';
import Area from '@modules/areas/infra/typeorm/entities/Area';
import Season from '@modules/seasons/infra/typeorm/entities/Season';

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

  @ManyToOne(() => Adress, adress => adress.user, { eager: true })
  @JoinColumn({ name: 'adress_id', referencedColumnName: 'id' })
  adress: Adress;

  @OneToMany(() => ProductMeasure, productMeasure => productMeasure.provider)
  productMeasure: ProductMeasure[];

  @OneToMany(() => Area, area => area.user)
  area: Area[];

  @OneToMany(() => Season, season => season.user)
  season: Season[];
}
