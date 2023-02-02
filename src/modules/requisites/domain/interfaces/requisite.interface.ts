import { RequisiteUpdateParams } from '../../api/models/update-input.models';

export interface IRequisite {
  inn: string;
  userId: string;
  getInn(): string;
  update(updateParams: RequisiteUpdateParams): void;
}
