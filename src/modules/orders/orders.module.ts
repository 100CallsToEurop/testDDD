import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import { Order } from './domain/order.entity';
import { OrdersRepository } from './infrastructure/orders.repository';

const adapters = [OrdersRepository];

@Module({
  imports: [TypeOrmModule.forFeature([Order]), UsersModule],
  providers: [...adapters],
})
export class OrdersModule {}
