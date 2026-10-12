const express = require("express");
const connectDB = require("./config/database");
const UserModal = require("./models/user");
const app = express();
const PORT = Number(process.env.PORT) || 3000;

const startServer = (port) => {
  const server = app.listen(port, () => {
    console.log(`server listening on port ${port}......`);
  });

  server.on("error", (error) => {
    if (error.code === "EADDRINUSE") {
      console.log(`Port ${port} is busy. Trying ${port + 1}...`);
      startServer(port + 1);
      return;
    }

    console.error("Server error:", error.message);
    process.exit(1);
  });
};
app.post("/signup", async (req, res) => {
  const user = new UserModal({
    firstName: "test",
    lastName: "test",
    email: "test@gmail.com",
    password: "test123",
  });
  try {
  await user.save();
  res.send("User created successfully!");
  } catch (error) {
    console.error("Error creating user:", error.message);
    res.status(400).send("Error creating user");
  }
});

connectDB();

app.get("/", (req, res) => {
  res.send("Hello from the server!!");
});

startServer(PORT);
