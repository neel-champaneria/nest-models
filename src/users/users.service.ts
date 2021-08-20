import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { InjectModel } from '@nestjs/sequelize';
import { Friend } from './../friends/friend.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async seed_user() {
    const user1 = this.userModel.create({
      username: '1',
      email: '1',
      password: '1',
    });
    const user2 = this.userModel.create({
      username: '2',
      email: '2',
      password: '2',
    });
    const user3 = this.userModel.create({
      username: '3',
      email: '3',
      password: '3',
    });
    const user4 = this.userModel.create({
      username: '4',
      email: '4',
      password: '4',
    });
    const user5 = this.userModel.create({
      username: '5',
      email: '5',
      password: '5',
    });
    const user6 = this.userModel.create({
      username: '6',
      email: '6',
      password: '6',
    });

    (await user1).save();
    (await user2).save();
    (await user3).save();
    (await user4).save();
    (await user5).save();
    (await user6).save();
  }

  async view_user() {
    // return await this.userModel.findAll({
    //   include: [{ model: Friend, attributes: { exclude: ['password'] } }],
    //   attributes: { exclude: ['password'] },
    // });

    return await this.userModel.findAll({
      include: ['friend', 'groups'],
    });
  }

  async make_friend() {
    const u1 = await User.findOne({ where: { email: '1' } });
    const u2 = await User.findOne({ where: { email: '2' } });

    await u1.$add('friend', u2);
    await u2.$add('friend', u1);
    // return await u1.destroy();
  }

  async restore_user() {
    // const u1 = await User.findOne({ where: { email: 'user1@email.com' } });

    return await User.restore({ where: { email: '1' } });
  }

  async destroy_user() {
    const u1 = await User.findOne({ where: { email: '1' } });

    return await u1.destroy();
  }
}
