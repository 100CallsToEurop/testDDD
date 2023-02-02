import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { Requisite } from '../../../modules/requisites/domain/requisite.entity';
import { Photo } from '../../../modules/photos/domain/photo.entity';
import { Profile } from '../../../modules/profiles/domain/profile.entity';
import { Order } from '../../../modules/orders/domain/order.entity';
import { ABaseEntity } from '../../../modules/base/base.entity.abstract.class';
import { IUser } from './interfaces/user.interface';
import { UserInputModel } from '../api/models/user-input.mode';

@Entity()
export class User extends ABaseEntity implements IUser {
  @OneToOne(() => Requisite, (requisite) => requisite.user, {
    cascade: true,
  })
  requisite: Requisite;

  @OneToOne(() => Profile, (profile) => profile.user, {
    cascade: true,
  })
  profile: Profile;

  @OneToMany(() => Photo, (photos) => photos.user, {
    cascade: true,
  })
  photos: Photo[];
  /*
  @ManyToMany(() => Order, (orders) => orders.users)
  @JoinTable()
  orders: Order[] = [];*/

  constructor(userParams?: UserInputModel) {
    super();

    if (userParams) {
      this.profile = new Profile(this.id, userParams);
      this.requisite = new Requisite(this.id, userParams);
      this.photos = [];
    }
  }
  getName(): string {
    return this.profile.getName();
  }
  setName(name: string): void {
    this.profile.setName(name);
  }
  getFullName(): string {
    return this.profile.getFullName();
  }
  getInn(): string {
    return this.requisite.getInn();
  }

  addPhoto(url: string): void {
    const newPhoto = new Photo(this.id, url);
    this.photos.push(newPhoto);
  }

  updatePhoto(id: string, url: string): void {
    this.photos.map((photo) => {
      if (photo.id === id) {
        photo.update(url);
      }
      return photo;
    });
  }

  getPhoto(id: string): Photo {
    return this.photos.find((photo) => photo.id === id);
  }
  getPhotos(): Photo[] {
    return this.photos;
  }
}
