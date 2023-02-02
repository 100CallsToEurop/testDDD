import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProfilesModule } from './profiles/profiles.module';
import { OrdersModule } from './orders/orders.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from '..//configs/typeorm.config';
import { PhotosModule } from './photos/photos.module';
import { RequisitesModule } from './requisites/requisites.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env`,
    }),
    TypeOrmModule.forRootAsync(TypeOrmConfigService()),
    UsersModule,
    ProfilesModule,
    OrdersModule,
    PhotosModule,
    RequisitesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
