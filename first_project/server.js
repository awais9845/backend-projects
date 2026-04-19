const http = require("http");

const users = [
  {
    id: 1,
    name: "Awais",
    email: "awais@gmail.com",
    role: "student",
  },
  {
    id: 2,
    name: "Ali",
    email: "ali@gmail.com",
    role: "admin",
  },
  {
    id: 3,
    name: "Sara",
    email: "sara@gmail.com",
    role: "user",
  },
];

const app = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET" && req.url === "/users") {
    res.end(JSON.stringify(users));
  } else {
    res.end("not found");
  }
});

app.listen(5000, () => {
  console.log("http://localhost:5000");
});
