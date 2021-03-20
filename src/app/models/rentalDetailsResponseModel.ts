import { RentalDetail } from './rentaldetail';
import { ResponseModel } from './responseModel';

export interface RentalDetailResponseModel extends ResponseModel {
  data: RentalDetail[];
}
