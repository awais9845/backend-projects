import express from "express";
import router from "./routes/auth.js";
import { profile } from "./controller/user.js";
import rateLimit from "express-rate-limit";

const app = express();
app.use(express.json());

const limit = rateLimit({
  max: 5,
  windowMs: 0.3 * 60 * 1000,
  message: "Too many attempts",
});

app.use("/test", limit);

app.get("/test", (req, res) => {
  res.json({
    message: "wellcome",
  });
});

app.use("/products", router);
app.use("/auth", router);
app.use("/auth", router);
app.use("/user", router);

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
