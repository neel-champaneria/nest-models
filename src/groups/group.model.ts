import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  HasOne,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { User } from '../users/user.model';
import { Base } from '../Base.model';
import { UserGroupMapping } from './../user-group-mapping/user-group-mapping.model';
import { Category } from './category.enum';
import { Expense } from '../expenses/expense.model';

@Table
export class Group extends Base {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  groupName: string;

  @Column({
    type: DataType.ENUM({
      values: ['Home', 'Trip', 'Friends', 'Others'],
    }),
  })
  category: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  simplifyDebt: boolean;

  @BelongsToMany(() => User, () => UserGroupMapping, 'groupId')
  users: User[];

  @HasMany(() => Expense, { foreignKey: 'groupId', onDelete: 'CASCADE' })
  expenses: Expense[];
}
