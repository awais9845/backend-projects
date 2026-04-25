const users = [];

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const auth = (req, res) => {
  res.status(200).json({
    message: "working correctly",
  });
};

export const signUp = async (req, res, next) => {
  const { name, email, password } = req.body;

  const userEmail = users.find((user) => user.email === email);
  if (userEmail) {
    return res.status(200).json({
      message: "User already exist:",
      success: true,
    });
  }
  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: new Date().toString(),
    name,
    email,
    password: hashPassword,
  };
  users.push(newUser);
  res.status(200).json({
    message: "successfully signedUp",
  });
};

export const logIn = async (req, res) => {
  const { email, password } = req.body;

  const findUser = users.find((user) => user.email === email);

  if (!findUser) {
    return res.status(400).json({
      message: "User not found",
      success: false,
    });
  }

  const comparePassword = await bcrypt.compare(password, findUser.password);

  if (!comparePassword) {
    return res.status(400).json({
      message: "Invalid Credential",
      success: false,
    });
  }

  const token = jwt.sign({ id: findUser.id }, "asdf", {
    expiresIn: "30m",
  });
  // console.log(token);

  res.status(200).json({
    message: "logedIn successfully:",
    data: { ...findUser, token },
  });
  console.log(findUser);
};

export const authdelete = (req, res, next) => {
  const authHeaders = req.headers.authorization;
  // console.log("USERS ARRAY:", users);
  if (!authHeaders) {
    return res.status(401).json({
      message: "No token provided",
    });
  }

  const token = authHeaders.split(" ")[1];

  const decoded = jwt.verify(token, "asdf");
  console.log(decoded);
  const userIndex = users.findIndex((user) => user.id === decoded.id);

  if (userIndex === -1) {
    return res.json({
      message: "user not found",
      success: false,
    });
  }

  users.splice(userIndex, 1);

  res.status(200).json({
    message: "user successfully deleted",
    success: true,
  });
};
