import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { IBaseEntity } from './interfaces/base.entity.interface';

@Entity()
export abstract class ABaseEntity extends BaseEntity implements IBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @CreateDateColumn({ nullable: true })
  created_At: Date;
  @UpdateDateColumn({ nullable: true })
  updated_At: Date;
  @DeleteDateColumn({ nullable: true })
  deleted_At: Date;
}
