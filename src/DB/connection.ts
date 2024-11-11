import { connect } from "mongoose"
import { Candidate } from "../types/schemas/candSchema";
import { seedCandidates } from "./seed";

export const dbConnection = async () => {
    try {
        await connect(process.env.CONNECTION_STRING!)
        console.log("Successfully connected to mongoDB");

        if (!(await Candidate.countDocuments())) {
            await seedCandidates()
            console.log("3 candidates added");
        }

    } catch(err) {
        console.error((err as Error).message)
    }
}