import { IBaseRepository } from "../../../modules/base/interfaces/base.repository.interface";
import { User } from "../domain/user.entity";

export interface IUserRepository extends IBaseRepository<User>{
    
}