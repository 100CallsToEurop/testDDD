import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersRepository } from 'src/modules/users/infrastructure/users.repository';
import { AddPhotoUseCases } from '../application/useCases/add-photo.use-case';
import { DeletePhotoUseCases } from '../application/useCases/delete-photo.use-case';
import { UpdatePhotoUseCases } from '../application/useCases/update-photo.use-case';

@Controller('users/:userId/photos')
export class PhotosController {
  constructor(
    private readonly addPhotoUseCases: AddPhotoUseCases,
    private readonly deletePhotoUseCases: DeletePhotoUseCases,
    private readonly updatePhotoUseCases: UpdatePhotoUseCases,
    private readonly usersRepository: UsersRepository,
  ) {}

  @Post()
  async addPhoto(@Param('userId') userId: string, @Body() url: string) {
    await this.addPhotoUseCases.execute(userId, url);
  }

  @Put(':photoId')
  async updatePhoto(
    @Param('userId') userId: string,
    @Param('photoId') photoId: string,
    @Body() url: string,
  ) {
    await this.updatePhotoUseCases.execute(userId, photoId, url);
  }

  @Delete(':photoId')
  async deletePhoto(
    @Param('userId') userId: string,
    @Param('photoId') photoId: string,
  ) {
    await this.deletePhotoUseCases.execute(userId, photoId);
  }

  @Get()
  async getPhotos(@Param('userId') userId: string) {
    const user = await this.usersRepository.findOne({
      where: { id: userId },
      withDeleted: true,
      relations: ['photos'],
    });
    return user.photos;
  }
}
