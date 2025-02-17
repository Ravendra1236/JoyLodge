import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Rooms Route here");
});


export default router;
