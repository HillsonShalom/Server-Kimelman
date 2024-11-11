import { Router } from "express";
import { register } from "../controllers/auth/register";
import { login } from "../controllers/auth/login";
import { account } from "../controllers/auth/account";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/", account);

export default router;
