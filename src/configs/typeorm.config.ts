import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { Photo } from 'src/modules/photos/domain/photo.entity';
import { Profile } from 'src/modules/profiles/domain/profile.entity';
import { Requisite } from 'src/modules/requisites/domain/requisite.entity';
import { User } from 'src/modules/users/domain/user.entity';

export const TypeOrmConfigService = (): TypeOrmModuleAsyncOptions => ({
  useFactory: (configService: ConfigService) => ({
    type: 'postgres',
    host: configService.get('PG_HOST'),
    port: +configService.get('PG_PORT'),
    username: configService.get('PG_USERNAME'),
    password: configService.get('PG_PASSWORD'),
    database: configService.get('PG_DATABASE'),
    //entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    entities: [User, Profile, Requisite, Photo],
    synchronize: true,
  }),
  inject: [ConfigService],
  imports: [ConfigModule],
});
