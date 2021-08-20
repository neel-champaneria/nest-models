import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Model } from 'sequelize-typescript';
import { User } from 'src/users/user.model';
import { Base } from './../Base.model';

@Table
export class Friend extends Base {
  freezeTableName: true;

  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: number;

  @ForeignKey(() => User)
  @Column
  friend: String;

  @ForeignKey(() => User)
  @Column
  user: String;
}
