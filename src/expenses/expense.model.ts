import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { User } from '../users/user.model';
import { Base } from '../Base.model';
import { codes } from 'currency-codes';
import { Group } from '../groups/group.model';
import { Repayment } from '../repayments/repayment.model';

@Table
export class Expense extends Base {
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
  expenseName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.DOUBLE,
    allowNull: false,
  })
  amount: number;

  @Column({
    type: DataType.ENUM({
      values: codes(),
    }),
    allowNull: false,
  })
  currency: string;

  @Column({
    type: DataType.ENUM({
      values: ['Split Equally', 'Split By Amount', 'Split By %'],
    }),
  })
  splitAs: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  isExpenseSettled: boolean;

  @BelongsTo(() => User, { foreignKey: 'userId', onDelete: 'CASCADE' })
  user: User;

  @BelongsTo(() => Group, { foreignKey: 'groupId', onDelete: 'CASCADE' })
  group: Group;

  @HasMany(() => Repayment, { foreignKey: 'expenseId', onDelete: 'CASCADE' })
  repayments: Repayment[];
}
