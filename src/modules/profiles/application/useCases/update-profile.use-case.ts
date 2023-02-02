import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/modules/users/infrastructure/users.repository';
import { UpdateProfileInputModel } from '../../api/models/update-input.model';

@Injectable()
export class UpdateProfileUseCase {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute(userId: string, updateParams: UpdateProfileInputModel) {
    const user = await this.usersRepository.findOne({
      where: { id: userId },
      relations: ['profile'],
    });
    user.profile.update(updateParams);
    await this.usersRepository.save(user);
  }
}
