import { Injectable } from '@nestjs/common';
import { User } from '../../domain/user.entity';
import { UsersRepository } from '../../infrastructure/users.repository';

@Injectable()
export class UsersQueryRepository {
  constructor(private readonly usersRepository: UsersRepository) {}

  async getUserById(userId: string): Promise<User> {
    const user = await this.usersRepository.findOne({
      where: { id: userId },
      relations: ['profile', 'requisite'],
    });
    return user;
  }
}
