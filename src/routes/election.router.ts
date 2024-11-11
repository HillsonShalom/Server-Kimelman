import { Router } from "express";
import { candidates } from "../controllers/election/candidates";
import { vote } from "../controllers/election/vote";
import { verifyToken } from "../middleware/verifyToken";

const router = Router();

router.get("/", candidates);
router.post("/vote", verifyToken, vote);

export default router;
