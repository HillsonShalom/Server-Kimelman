import { Types } from "mongoose";

export interface IToken {
    id: Types.ObjectId;
    isAdmin: boolean
}