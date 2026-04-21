const userID = 23;
const middleware = (req, res, next) => {
  // const id = Number(req.params.id);
  // if (userID == id) {
  //   req.user = userID;
  //   next();
  // } else {
  //   res.send("anAuthorized user!");
  // }

  const id = Number(req.params.id);
  if (userID == id) {
    req.user = userID;
    next();
  } else {
    res.json({ message: "UnAuthorized User" });
  }
};

export default middleware;
