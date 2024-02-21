import { Country } from "./country";
import { ResponseModel } from "../responseModel";
export interface CountryResponseModel extends ResponseModel{
    result: Country[]
}