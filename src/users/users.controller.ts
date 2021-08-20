import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  view_data() {
    return this.usersService.view_user();
  }

  @Get('/create')
  seed_data() {
    return this.usersService.seed_user();
  }

  @Get('/friend')
  make_friend() {
    return this.usersService.make_friend();
  }

  @Get('/restore')
  restore_user() {
    return this.usersService.restore_user();
  }

  @Get('/destroy')
  destroy() {
    return this.usersService.destroy_user();
  }
}
