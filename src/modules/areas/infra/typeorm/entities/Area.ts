import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';
import Measure from '@modules/measures/infra/typeorm/entities/Measure';

@Entity('areas')
export default class Area {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  user_id: string;

  @Column('uuid')
  measure_id: string;

  @Column()
  name: string;

  @Column('numeric')
  size: number;

  @ManyToOne(() => User, user => user.area, { eager: true })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;

  @ManyToOne(() => Measure, measure => measure.area, { eager: true })
  @JoinColumn({ name: 'measure_id', referencedColumnName: 'id' })
  measure: Measure;
}
