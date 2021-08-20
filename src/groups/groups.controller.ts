import { Controller, Get } from '@nestjs/common';
import { GroupsService } from './groups.service';

@Controller('groups')
export class GroupsController {
  constructor(private groupservices: GroupsService) {}

  @Get('/create')
  addGroup() {
    return this.groupservices.createGroup();
  }

  @Get()
  viewGroups() {
    return this.groupservices.viewGroups();
  }
}
