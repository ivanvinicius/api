import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('states')
class State {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  name: string;
}

export default State;
