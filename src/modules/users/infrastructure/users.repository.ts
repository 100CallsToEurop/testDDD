import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from '../../../modules/base/base.repository.abstract.class';
import { Repository } from 'typeorm';
import { User } from '../domain/user.entity';
import { IUserRepository } from './user.repository.interface';

@Injectable()
export class UsersRepository
  extends BaseRepository<User>
  implements IUserRepository
{
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {
    super(usersRepository);
  }
}
