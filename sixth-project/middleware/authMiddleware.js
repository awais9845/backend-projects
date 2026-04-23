import jwt from "jsonwebtoken";

export const authmiddlware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(403).json({
      message: "Forbidden",
      success: false,
    });
  }

  const authtoken = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(authtoken, "asdf");
  req.user = decoded;
  console.log(decoded.id);
  next();
};

// .split(" ")[1];
