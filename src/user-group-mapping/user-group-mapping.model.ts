import {
  Column,
  DataType,
  ForeignKey,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Group } from '../groups/group.model';
import { Base } from '../Base.model';
import { User } from '../users/user.model';

@Table
export class UserGroupMapping extends Base {
  freezeTableName: true;

  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: number;
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  isRemoved: Boolean;

  @ForeignKey(() => User)
  @Column
  userId: String;

  @ForeignKey(() => Group)
  @Column
  groupId: String;
}
