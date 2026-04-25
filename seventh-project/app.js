import express, { text } from "express";
import routes from "./routes/auth.js";
import { config } from "dotenv";
import nodemailer from "nodemailer";
config();
// import { logIn, signUp } from "./controller/auth.js";
const app = express();

app.use(express.json());

app.use("/test", routes);
app.use("/user", routes);
app.use("/log", routes);

app.use("/deleteuser", routes);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "waqarkhattak844@gmail.com",
    pass: "ktwa vutb sfye pogd",
  },
});

const emailoptions = {
  from: "waqarkhattak844@gmail.com",
  to: "irshadkh23r@gmail.com",
  subject: "Exam is continued",
  text: "email sent successfully",
};

// app.get("/tran", (req, res) => {
//   transporter.sendMail(emailoptions, (err, info) => {
//     if (err) {
//       console.log(err.message);
//       res.send("working correctly");
//     } else {
//       console.log("email sent: " + info.response);
//       res.send("Hello world");
//     }
//   });
// });

app.listen(2000, () => {
  console.log("http://localhost:2000");
});
