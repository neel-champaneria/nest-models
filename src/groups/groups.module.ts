import { Module } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { GroupsController } from './groups.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Group } from './group.model';
import { User } from './../users/user.model';

@Module({
  imports: [SequelizeModule.forFeature([Group, User])],
  providers: [GroupsService],
  controllers: [GroupsController],
})
export class GroupsModule {}
