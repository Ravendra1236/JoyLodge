import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Auth Route here");
});
router.get("/register", (req, res) => {
  res.send("Register Auth Route here");
});

export default router;
