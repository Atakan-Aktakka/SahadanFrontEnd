import { Player } from "./player";
import { ResponseModel } from "../responseModel";
export interface PlayerResponseModel extends ResponseModel{
    result: Player[]
}