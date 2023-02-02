import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { User } from '../../../modules/users/domain/user.entity';
import { ABaseEntity } from '../../../modules/base/base.entity.abstract.class';
import { IProfile } from './interfaces/profile.interface';
import { UpdateProfileInputModel } from '../api/models/update-input.model';

@Entity()
export class Profile extends ABaseEntity implements IProfile {
  @Column()
  name: string;
  @Column()
  lastName: string;

  @Column()
  userId: string;

  @OneToOne(() => User, (user) => user.profile, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  user: User;

  constructor(userId?: string, createParams?: UpdateProfileInputModel) {
    super();

    if (userId) {
      this.userId = userId;
    }

    if (createParams) {
      this.name = createParams.name;
      this.lastName = createParams.lastName;
    }
  }

  getName(): string {
    return this.name
  }
  setName(name: string): void {
    this.name = name
  }

  getFullName(): string{
    return `${this.name} ${this.lastName}`;
  }

  update(updateParams: UpdateProfileInputModel): void {
    this.name = updateParams.name ?? this.name;
    this.lastName = updateParams.lastName ?? this.lastName;
  }
}
