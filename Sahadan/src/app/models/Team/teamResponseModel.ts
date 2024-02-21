import { Team } from "./team";
import { ResponseModel } from "../responseModel";
export interface TeamResponseModel extends ResponseModel{
    result: Team[]
}