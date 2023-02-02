import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepository } from '../../../modules/base/base.repository.abstract.class';
import { Photo } from '../domain/photo.entity';
import { IPhotoRepository } from './photo.repository.interface';

@Injectable()
export class PhotosRepository
  extends BaseRepository<Photo>
  implements IPhotoRepository
{
  constructor(
    @InjectRepository(Photo)
    private readonly usersRepository: Repository<Photo>,
  ) {
    super(usersRepository);
  }
}
