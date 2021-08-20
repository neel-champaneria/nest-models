import {
  BelongsTo,
  Column,
  DataType,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Expense } from '../expenses/expense.model';
import { Base } from '../Base.model';
import { User } from '../users/user.model';

@Table
export class Repayment extends Base {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: number;

  @Column({
    type: DataType.DOUBLE,
    allowNull: false,
  })
  amount: number;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  })
  isSettled: Boolean;

  @BelongsTo(() => Expense, { foreignKey: 'expenseId', onDelete: 'CASCADE' })
  expense: Expense;

  @BelongsTo(() => User, { foreignKey: 'userId', onDelete: 'CASCADE' })
  user: User;
}
