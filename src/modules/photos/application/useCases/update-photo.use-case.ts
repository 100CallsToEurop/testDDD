import { Injectable } from '@nestjs/common/decorators';
import { UsersRepository } from '../../../../modules/users/infrastructure/users.repository';

@Injectable()
export class UpdatePhotoUseCases {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute(userId: string, id: string, url: string) {
    const user = await this.usersRepository.findOne({
      where: { id: userId },
      relations: ['photos'],
    });
    user.updatePhoto(id, url);
    await this.usersRepository.save(user);
  }
}
