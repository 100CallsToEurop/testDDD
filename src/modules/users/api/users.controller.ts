import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserUseCase } from '../application/useCases/create-user.use-case';
import { User } from '../domain/user.entity';
import { UserInputModel } from './models/user-input.mode';
import { UsersQueryRepository } from './queryRepository/user.query.repository';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersQueryRepository: UsersQueryRepository,
    private readonly createUserUseCase: CreateUserUseCase,
  ) {}

  @Post()
  async createUser(@Body() createParams: UserInputModel): Promise<User> {
    const userId = await this.createUserUseCase.execute(createParams);
    return this.usersQueryRepository.getUserById(userId);
  }
}
