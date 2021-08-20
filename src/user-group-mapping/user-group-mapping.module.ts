import { Module } from '@nestjs/common';
import { UserGroupMappingService } from './user-group-mapping.service';
import { UserGroupMappingController } from './user-group-mapping.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserGroupMapping } from './user-group-mapping.model';

@Module({
  imports: [SequelizeModule.forFeature([UserGroupMapping])],
  providers: [UserGroupMappingService],
  controllers: [UserGroupMappingController],
})
export class UserGroupMappingModule {}
