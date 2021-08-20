import { Module } from '@nestjs/common';
import { FriendsService } from './friends.service';
import { FriendsController } from './friends.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Friend } from './friend.model';

@Module({
  imports: [SequelizeModule.forFeature([Friend])],
  providers: [FriendsService],
  controllers: [FriendsController],
})
export class FriendsModule {}
