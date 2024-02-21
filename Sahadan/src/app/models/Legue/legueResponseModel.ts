import { Legue } from "./legue";
import { ResponseModel } from "../responseModel";
export interface LegueResponseModel extends ResponseModel{
    result: Legue[]
}