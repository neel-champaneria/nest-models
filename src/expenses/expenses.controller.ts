import { Controller, Get } from '@nestjs/common';
import { ExpensesService } from './expenses.service';

@Controller('expenses')
export class ExpensesController {
  constructor(private expenseServices: ExpensesService) {}

  @Get('/create')
  makeexpense() {
    return this.expenseServices.make_payment();
  }

  @Get()
  listexpense() {
    return this.expenseServices.viewexpense();
  }
}
