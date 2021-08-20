import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/users/user.model';
import { Group } from './group.model';

@Injectable()
export class GroupsService {
  constructor(
    @InjectModel(User) private userModel: typeof User,
    @InjectModel(Group) private groupModel: typeof Group,
  ) {}

  async createGroup() {
    const user1 = await this.userModel.findOne({ where: { email: '1' } });
    const user2 = await this.userModel.findOne({ where: { email: '2' } });
    const user3 = await this.userModel.findOne({ where: { email: '3' } });

    console.log('user1 friend', await user1.$has('friend', user2));

    const users = [user1, user2, user3];
    let group1 = {
      groupName: '1s',
      category: 'Home',
    };

    const group = await this.groupModel.create(group1);
    const g = (await group).save();

    //  return await user1.$add('groups', await g);
    return await (await g).$add('users', users);
  }

  async viewGroups() {
    return await this.groupModel.findAll({ include: ['users', 'expenses'] });
  }
}
