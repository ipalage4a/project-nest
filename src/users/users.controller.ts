import { Controller, Get } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('create')
  create(): Promise<User> {
    return this.usersService.create();
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
