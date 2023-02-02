import { Injectable } from "@nestjs/common/decorators";
import { UserInputModel } from "../../api/models/user-input.mode";
import { User } from "../../domain/user.entity";
import { UsersRepository } from "../../infrastructure/users.repository";

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute(createParams: UserInputModel): Promise<string>{
      const newUser = new User(createParams);
      await this.usersRepository.save(newUser);
      return newUser.id
  }
}