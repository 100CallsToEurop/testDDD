import { ABaseEntity } from '../../../modules/base/base.entity.abstract.class';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { User } from '../../../modules/users/domain/user.entity';
import { RequisiteUpdateParams } from '../api/models/update-input.models';
import { IRequisite } from './interfaces/requisite.interface';

@Entity()
export class Requisite extends ABaseEntity implements IRequisite {
  @Column({ nullable: true })
  inn: string;

  @Column()
  userId: string;

  @OneToOne(() => User, (user) => user.requisite, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  user: User;

  constructor(userId?: string, createParams?: RequisiteUpdateParams) {
    super();

    if (userId) {
      this.userId = userId;
    }

    if (createParams) {
      this.inn = createParams.inn;
    }
  }

  getInn(): string {
    return this.inn;
  }

  update(updateParams: RequisiteUpdateParams): void {
    this.inn = updateParams.inn ?? this.inn;
  }
}
