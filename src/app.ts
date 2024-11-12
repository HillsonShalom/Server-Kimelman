import exp from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import accountRouter from "./routes/auth.router";
import electionRouter from "./routes/election.router";
import { dbConnection } from "./DB/connection";
const port = process.env.PORT;

dbConnection();

const app = exp();
// app.use(cors())
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(exp.json());
app.use(cookieParser());

app.use("/account", accountRouter);
app.use("/election", electionRouter);

app.listen(port || 5000, () => {
  console.log(`Listening on port ${port}...`);
});
