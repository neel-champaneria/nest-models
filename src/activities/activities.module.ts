import { Module } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { ActivitiesController } from './activities.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Activity } from './activity.model';

@Module({
  imports: [SequelizeModule.forFeature([Activity])],
  providers: [ActivitiesService],
  controllers: [ActivitiesController],
})
export class ActivitiesModule {}
