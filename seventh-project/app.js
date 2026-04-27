import express, { text } from "express";
import routes from "./routes/auth.js";
import { config } from "dotenv";
import nodemailer from "nodemailer";
import limiter from "express-rate-limit";
import cookieParser from "cookie-parser";
config();
// import { logIn, signUp } from "./controller/auth.js";
const app = express();
app.use(express.json());
// cookieParser();

// limiter
const limiterMiddleware = limiter({
  max: 5,
  windowMs: 0.1 * 60 * 1000,
  message: "Too many attempts",
});

app.get("/test1", limiterMiddleware, (req, res) => {
  res.json({
    message: "Request successful",
  });
});

app.use("/test", routes);
app.use("/user", routes);
app.use("/log", routes);

app.use("/deleteuser", routes);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "waqarkhattak844@gmail.com",
    pass: "zvma nwco elgy umis",
  },
});

const emailoptions = {
  from: "waqarkhattak844@gmail.com",
  to: "shakirkhangadooni",
  subject: "Exam is continued",
  html: `
  <div style="font-family: Arial, sans-serif; background-color: #f4f6f8; padding: 20px;">
    
    <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
      
      <!-- Header -->
      <div style="background: #4CAF50; color: white; padding: 20px; text-align: center;">
        <h2 style="margin: 0;">Your Company Name</h2>
      </div>

      <!-- Body -->
      <div style="padding: 20px; color: #333;">
        <h3>Hello 👋</h3>
        <p style="font-size: 16px; line-height: 1.6;">
          We’re happy to inform you that your request has been processed successfully.
        </p>

        <p style="font-size: 16px; line-height: 1.6;">
          If you have any questions or need further assistance, feel free to contact our support team anytime.
        </p>

        <!-- Button -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="#" style="background: #4CAF50; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-size: 16px;">
            Visit Dashboard
          </a>
        </div>

        <p style="font-size: 14px; color: #777;">
          Thank you for choosing us ❤️
        </p>
      </div>

      <!-- Footer -->
      <div style="background: #f1f1f1; text-align: center; padding: 15px; font-size: 12px; color: #888;">
        © 2026 Your Company. All rights reserved.
      </div>

    </div>

  </div>
  `,
};
app.get("/tran", (req, res) => {
  transporter.sendMail(emailoptions, (err, info) => {
    if (err) {
      console.log(err.message);
      res.send("not working correctly");
    } else {
      console.log("email sent: " + info.response);
      res.send("Hello world");
    }
  });
});

app.listen(2000, () => {
  console.log("http://localhost:2000");
});
