import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('cultures')
export default class Culture {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}
