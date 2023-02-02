import { DeepPartial, FindManyOptions, FindOneOptions } from "typeorm";

export interface IBaseRepository<T> {
  save(model: DeepPartial<T>): Promise<T>;
  remove(model: DeepPartial<T>): Promise<boolean>;
  softRemove(model: DeepPartial<T>): Promise<boolean>;
  findOne(options: FindOneOptions<T>): Promise<T>;
  findMany(options: FindManyOptions<T>): Promise<T[]>;
}