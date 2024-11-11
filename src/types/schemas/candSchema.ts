import { model, Schema } from "mongoose";
import { ICandidate } from "../models/ICand";

interface candDocument extends ICandidate, Document {}

const candSchema = new Schema<candDocument>(
  {
    name: {
        type: String,
        required: true
    },
    image: String,
    votes: {
        type: Number,
        default: 0
    },
    color: {
        type: String,
        enum: ['red', 'blue', 'yellow']
    },
  }
);

export const Candidate = model("Candidate", candSchema);
