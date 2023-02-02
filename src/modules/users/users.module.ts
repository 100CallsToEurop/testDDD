import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersQueryRepository } from './api/queryRepository/user.query.repository';
import { UsersController } from './api/users.controller';
import { CreateUserUseCase } from './application/useCases/create-user.use-case';
import { User } from './domain/user.entity';
import { UsersRepository } from './infrastructure/users.repository';

const useCases = [CreateUserUseCase];
const adapters = [UsersRepository, UsersQueryRepository]
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [...adapters, ...useCases],
  exports: [...adapters],
})
export class UsersModule {}
