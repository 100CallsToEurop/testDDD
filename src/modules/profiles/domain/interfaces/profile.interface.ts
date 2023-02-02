import { UpdateProfileInputModel } from '../../api/models/update-input.model';

export interface IProfile {
  name: string;
  lastName: string;

  getName(): string;
  setName(name: string): void;
  getFullName(): string
  update(updateParams: UpdateProfileInputModel): void;
}
