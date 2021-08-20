import {
  Column,
  DataType,
  PrimaryKey,
  Table,
  Model,
  DeletedAt,
  BelongsToMany,
  HasMany,
} from 'sequelize-typescript';
import { Group } from '../groups/group.model';
import { Base } from './../Base.model';
import { Friend } from './../friends/friend.model';
import { UserGroupMapping } from './../user-group-mapping/user-group-mapping.model';
import { Expense } from '../expenses/expense.model';
import { Repayment } from './../repayments/repayment.model';
import { Activity } from './../activities/activity.model';

@Table
export class User extends Base {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  username: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  password: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  })
  isRegistered: boolean;

  @BelongsToMany(() => User, () => Friend, 'user', 'friend')
  friend: User[];

  // @BelongsToMany(() => User, () => Friend, 'user', )
  // user: User[];

  @BelongsToMany(() => Group, () => UserGroupMapping, 'userId')
  groups: Group[];

  @HasMany(() => Expense, { foreignKey: 'userId', onDelete: 'CASCADE' })
  expenses: Expense[];

  @HasMany(() => Repayment, { foreignKey: 'userId', onDelete: 'CASCADE' })
  repayments: Repayment[];

  @HasMany(() => Activity, { foreignKey: 'userId', onDelete: 'CASCADE' })
  activities: Activity[];
}
