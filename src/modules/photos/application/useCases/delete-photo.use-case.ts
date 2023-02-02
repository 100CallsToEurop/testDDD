import { Injectable } from '@nestjs/common/decorators';
import { UsersRepository } from '../../../../modules/users/infrastructure/users.repository';
import { PhotosRepository } from '../../infrastructure/photos.repository';

@Injectable()
export class DeletePhotoUseCases {
  constructor(
    private readonly photosRepository: PhotosRepository,
    private readonly usersRepository: UsersRepository,
  ) {}

  async execute(userId: string, id: string) {
    const user = await this.usersRepository.findOne({
      where: { id: userId },
      relations: ['photos'],
    });
    const photo = user.getPhoto(id);
    await this.photosRepository.softRemove(photo);
  }
}
