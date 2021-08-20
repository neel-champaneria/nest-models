import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users/user.model';
import { FriendsModule } from './friends/friends.module';
import { Friend } from './friends/friend.model';
import { GroupsModule } from './groups/groups.module';
import { UserGroupMappingModule } from './user-group-mapping/user-group-mapping.module';
import { Group } from './groups/group.model';
import { UserGroupMapping } from './user-group-mapping/user-group-mapping.model';
import { ExpensesModule } from './expenses/expenses.module';
import { Expense } from './expenses/expense.model';
import { RepaymentsModule } from './repayments/repayments.module';
import { Repayment } from './repayments/repayment.model';
import { ActivitiesModule } from './activities/activities.module';
import { Activity } from './activities/activity.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'superpassword',
      database: 'demo-seq-models',
      models: [
        User,
        Friend,
        Group,
        UserGroupMapping,
        Expense,
        Repayment,
        Activity,
      ],
      autoLoadModels: true,
      synchronize: true,
      // sync: { force: true },
      retryAttempts: 2,
    }),
    UsersModule,
    FriendsModule,
    GroupsModule,
    UserGroupMappingModule,
    ExpensesModule,
    RepaymentsModule,
    ActivitiesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
