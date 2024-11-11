import { Types } from "mongoose";

export interface IUser {
    username: string;
    password: string;
    age: number;
    hasVoted?: boolean;
    isAdmin?: boolean;
    votedFor?: Types.ObjectId | null;
}