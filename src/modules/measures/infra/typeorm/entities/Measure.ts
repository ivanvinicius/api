import { Entity, PrimaryColumn, Column } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('measures')
export default class Measure {
  constructor(props: Omit<Measure, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }

  @PrimaryColumn('uuid')
  id: string;

  @Column()
  name: string;
}
