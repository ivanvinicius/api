import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('states')
export default class State {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}
