import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import { UpdateProfileUseCase } from './application/useCases/update-profile.use-case';
import { Profile } from './domain/profile.entity';
import { ProfilesController } from './profiles.controller';

const useCases = [UpdateProfileUseCase];
const adapters = [];

@Module({
  imports: [TypeOrmModule.forFeature([Profile]), UsersModule],
  providers: [...adapters, ...useCases],
  controllers: [ProfilesController],
})
export class ProfilesModule {}
