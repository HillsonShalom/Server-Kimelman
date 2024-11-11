import { Request } from "express";
import { IToken } from "../DTOs/token";

declare module 'express' {
    interface Request {
        token?: IToken;
    }
}

export {}