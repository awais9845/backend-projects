import express from "express";
import middleware from "./middlewares/auth.js";

const app = express();

app.use(express.json());

// app.get("/products", (req, res) => {
//   res.send("hello world");
// });
// app.delete("/products/:id", middleware, (req, res) => {
//   res.send("product is deleted successfully");
// });

let info = {
  name: "awais khan",
  email: "waqarkhattak884@gmail.com",
};
app.get("/orders/:id", middleware, (req, res) => {
  res.json({
    message: info,
  });
});

app.delete("/products/:id", middleware, (req, res) => {
  res.send("successfully deleted ");
});

app.listen(4000, () => {
  console.log("http://localhost:4000");
});
