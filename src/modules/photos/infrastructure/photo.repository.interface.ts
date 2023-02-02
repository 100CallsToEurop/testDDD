import { IBaseRepository } from '../../base/interfaces/base.repository.interface';
import { Photo } from '../domain/photo.entity';

export interface IPhotoRepository extends IBaseRepository<Photo> {}
