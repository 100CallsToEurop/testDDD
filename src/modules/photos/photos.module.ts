import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import { AddPhotoUseCases } from './application/useCases/add-photo.use-case';
import { DeletePhotoUseCases } from './application/useCases/delete-photo.use-case';
import { UpdatePhotoUseCases } from './application/useCases/update-photo.use-case';
import { Photo } from './domain/photo.entity';
import { PhotosRepository } from './infrastructure/photos.repository';
import { PhotosController } from './api/photos.controller';

const useCases = [AddPhotoUseCases, DeletePhotoUseCases, UpdatePhotoUseCases];
const adapters = [PhotosRepository];

@Module({
  imports: [TypeOrmModule.forFeature([Photo]), UsersModule],
  providers: [...adapters, ...useCases],
  controllers: [PhotosController],
})
export class PhotosModule {}
