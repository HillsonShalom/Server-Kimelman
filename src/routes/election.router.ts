import { Router } from "express";
import { candidates } from "../controllers/election/candidates";
import { vote } from "../controllers/election/vote";

const router = Router();

router.get("/", candidates);
router.post("/vote", vote);

export default router;
