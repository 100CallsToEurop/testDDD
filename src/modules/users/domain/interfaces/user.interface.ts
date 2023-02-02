import { Photo } from '../../../../modules/photos/domain/photo.entity';

export interface IUser {
  getName(): string;
  setName(name: string): void;
  getFullName(): string;
  getInn(): string;

  addPhoto(url: string): void;
  getPhoto(id: string): Photo;
  getPhotos(): Photo[];
  updatePhoto(id: string, url: string): void;
}
