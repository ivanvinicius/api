import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'express';


@Entity('states')
class State {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  name: string;
}

export default State;
