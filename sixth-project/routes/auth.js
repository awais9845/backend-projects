import { Router } from "express";
import { auth, logIn, signUp } from "../controller/auth.js";
import { profile } from "../controller/user.js";
import { authmiddlware } from "../middleware/authMiddleware.js";

const router = Router();

router.get("/auth", auth);

router.post("/signUp", signUp);
router.post("/logedIn", logIn);
router.post("/profile/:id", authmiddlware, profile);

export default router;
