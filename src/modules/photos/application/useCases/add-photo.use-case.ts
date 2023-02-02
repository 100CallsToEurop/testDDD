import { Injectable } from '@nestjs/common/decorators';
import { UsersRepository } from '../../../../modules/users/infrastructure/users.repository';

@Injectable()
export class AddPhotoUseCases {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute(userId: string, url: string) {
    const user = await this.usersRepository.findOne({
      where: { id: userId },
      relations: ['photos'],
    });
    user.addPhoto(url);
    await this.usersRepository.save(user);
  }
}
