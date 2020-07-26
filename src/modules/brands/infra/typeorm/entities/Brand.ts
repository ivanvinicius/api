import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('brands')
export default class Brand {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}
