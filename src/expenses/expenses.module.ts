import { Module } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { ExpensesController } from './expenses.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Expense } from './expense.model';
import { User } from './../users/user.model';
import { Group } from './../groups/group.model';
import { Repayment } from './../repayments/repayment.model';

@Module({
  imports: [SequelizeModule.forFeature([Expense, User, Group, Repayment])],
  providers: [ExpensesService],
  controllers: [ExpensesController],
})
export class ExpensesModule {}
