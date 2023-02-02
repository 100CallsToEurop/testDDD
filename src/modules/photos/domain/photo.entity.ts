import { ABaseEntity } from '../../../modules/base/base.entity.abstract.class';
import { Column, Entity, ManyToOne } from 'typeorm';
import { User } from '../../../modules/users/domain/user.entity';
import { IPhoto } from './interfaces/photo.interface';

@Entity()
export class Photo extends ABaseEntity implements IPhoto {
  @Column()
  url: string;

  @Column()
  userId: string;

  @ManyToOne(() => User, (user) => user.photos, {
    onDelete: 'CASCADE',
  })
  user: User;

  constructor(userId?: string, url?: string) {
    super();
    if (userId) {
      this.userId = userId;
    }
    if (url) {
      this.url = url;
    }
  }
  update(url: string): void {
    this.url = url ?? this.url;
  }
}
