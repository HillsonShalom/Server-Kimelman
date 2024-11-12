import { Router } from "express";
import { register } from "../controllers/auth/register";
import { login } from "../controllers/auth/login";
import { getAccount } from "../controllers/auth/getAccount";
import { verifyToken } from "../middleware/verifyToken";

const router = Router();

router.get("/", verifyToken, getAccount);
router.post("/register", register);
router.post("/login", login);

export default router;
