import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import { Requisite } from './domain/requisite.entity';
import { RequisitesRepository } from './infrastructure/requisite.repository';

const adapters = [RequisitesRepository];

@Module({
  imports: [TypeOrmModule.forFeature([Requisite]), UsersModule],
  providers: [...adapters],
})
export class RequisitesModule {}
