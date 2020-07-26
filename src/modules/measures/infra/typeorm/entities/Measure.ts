import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('measures')
export default class Measure {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  name: string;
}
