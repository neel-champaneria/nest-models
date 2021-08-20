import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './../users/user.model';
import { Group } from './../groups/group.model';
import { Repayment } from './../repayments/repayment.model';
import { Expense } from './expense.model';

@Injectable()
export class ExpensesService {
  constructor(
    @InjectModel(User) private userModel: typeof User,
    @InjectModel(Group) private groupModel: typeof Group,
    @InjectModel(Expense) private expenseModel: typeof Expense,
    @InjectModel(Repayment) private repaymentModel: typeof Repayment,
  ) {}

  async make_payment() {
    // Get group name, expense name, description, paid by, splitAs, Currency, list of friend split betweens
    // [{user, amount}, {user, amount}, {user, amount}]

    /*
      expenseName: 'first',
      description: 'first desc',
      amount: 1500,
      currency: 'INR',
      splitAs: 'Split Equally',
      userobj: [{
         user: PK,
         amount: calAmount
      },
      {
         user: PK,
         amount: calAmount
      }],
      

      userobj.foreach((user) => {
         c
         save repreate repayment ayment
         repayarr = [...repaymentobj]
      })
    */

    const user1 = await this.userModel.findOne({ where: { email: '1' } });
    const user2 = await this.userModel.findOne({ where: { email: '2' } });
    const user3 = await this.userModel.findOne({ where: { email: '3' } });

    const group = await this.groupModel.findOne({ where: { groupName: '1s' } });

    // conste usrs = [user2, user3];

    const expObj = {
      // userId: '313af3d7-70d0-4443-a30b-aeb185f405a1',
      // groupId: '0d6039f9-d57d-4bf2-8882-bcacccd20c44',
      expenseName: 'first',
      description: 'first desc',
      amount: 1500,
      currency: 'INR',
      splitAs: 'Split Equally',
    };

    const expense = await user1.$create('expenses', expObj);

    return await expense.save();
    // const e1 = await this.expenseModel.create(expObj);

    // const expense = (await e1).save();

    // await user1.$add('expense', await expense);
    // await group.$add('expense', await expense);

    //   const users = [
    //     { expenseId: (await expense).id, userId: user2.id, amount: 500 },
    //     { expenseId: (await expense).id, userId: user3.id, amount: 500 },
    //   ];

    //   let repay;
    //   let temp;
    //   users.forEach(async (curuser) => {
    //     repay = await this.repaymentModel.create(curuser);
    //     await repay.save();
    //   });
  }
  async viewexpense() {
    return await this.expenseModel.findAll();
  }
}
