import { Router } from "express";
import { auth, authdelete, logIn, signUp } from "../controller/auth.js";

const routes = Router();

routes.get("/auth", auth);

routes.post("/signUp", signUp);
routes.post("/logedIn", logIn);

routes.delete("/authdelete", authdelete);
export default routes;
