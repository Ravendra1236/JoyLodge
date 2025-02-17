import express from "express";
import { connect } from "./db.js";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";

const app = express();
const PORT = 8080;

app.use(express.json());

// Middlewares :
app.use("/api/auth", authRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/users", usersRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(PORT, () => {
  connect();
  console.log(`Server started at PORT ${PORT}`);
});
