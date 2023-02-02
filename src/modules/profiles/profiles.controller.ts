import { Body, Controller, Param, Put } from '@nestjs/common';
import { UsersQueryRepository } from '../users/api/queryRepository/user.query.repository';
import { User } from '../users/domain/user.entity';
import { UpdateProfileInputModel } from './api/models/update-input.model';
import { UpdateProfileUseCase } from './application/useCases/update-profile.use-case';

@Controller('users/:userId/profile')
export class ProfilesController {
  constructor(
    private readonly usersQueryRepository: UsersQueryRepository,
    private readonly profilesUpdateUseCases: UpdateProfileUseCase,
  ) {}

  @Put()
  async updateProfile(
    @Param('userId') userId: string,
    @Body() updateParams: UpdateProfileInputModel,
  ): Promise<User> {
    await this.profilesUpdateUseCases.execute(userId, updateParams);
    return await this.usersQueryRepository.getUserById(userId);
  }
}
