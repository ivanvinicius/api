import { Entity, PrimaryColumn, Column } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('cultures')
export default class Culture {
  constructor(props: Omit<Culture, 'id'>, id?: string) {
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
