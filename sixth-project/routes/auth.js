import { Router } from "express";
import { auth, logIn, signUp } from "../controller/auth.js";

const router = Router();

router.get("/auth", auth);

router.post("/signUp", signUp);
router.post("/logedIn", logIn);

export default router;
