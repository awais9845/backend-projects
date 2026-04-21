import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const users = [
  {
    name: "awais khan",
    email: "waqarkhattak844@gmail.com",
    password: await bcrypt.hash("test12", 10),
  },
];

export const auth = (req, res) => {
  res.status(400).json({
    message: "what is your name",
  });
};

export const signUp = async (req, res) => {
  const { name, email, password } = req.body;
  const userEmail = users.find((user) => user.email === email);
  if (userEmail) {
    return res.status(400).json({
      message: "user is already exist.",
      success: false,
    });
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = {
    id: new Date(),
    name,
    email,
    password: hashPassword,
  };
  console.log(newUser);

  users.push(newUser);

  res.status(201).json({
    message: "singUp successfully",
    id: new Date(),
    name,
    email,
  });
};

export const logIn = async (req, res) => {
  const { email, password } = req.body;
  const findUser = users.find((user) => user.email === email);

  if (!findUser) {
    return res.status(400).json({
      message: "Invalid Cradential",
      success: false,
    });
  }

  const comparePassword = await bcrypt.compare(password, findUser.password);
  if (!comparePassword) {
    return res.status(401).json({
      message: "invalid cradential",
      success: false,
    });
  }

  const token = jwt.sign(findUser, "sldjf", {
    expiresIn: "1s",
  });
  // console.log(token);

  // for the success
  res.status(200).json({
    message: "loged in succesfully",
    success: true,
    data: { ...findUser, token },
  });
};
