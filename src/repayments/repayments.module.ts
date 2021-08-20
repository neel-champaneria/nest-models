import { Module } from '@nestjs/common';
import { RepaymentsService } from './repayments.service';
import { RepaymentsController } from './repayments.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Repayment } from './repayment.model';

@Module({
  imports: [SequelizeModule.forFeature([Repayment])],
  providers: [RepaymentsService],
  controllers: [RepaymentsController],
})
export class RepaymentsModule {}
