import { Column, Entity, ManyToMany } from 'typeorm';
import { User } from '../../../modules/users/domain/user.entity';

@Entity()
export class Order {
/*  @ManyToMany(() => User, (users) => users.orders)
  users: User[];*/
}
