import express from "express";

import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.controller.js";

import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", (req, res, next) => {
//   res.send("Hello user , you are authenticated!");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("Hello user , ypu are logged in and you can delete your account.");
// });

// router.get("/checkAdmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("Hello user , ypu are logged in and you can delete all accounts.");
// });

// Update :
router.patch("/:id", verifyUser, updateUser);

// Delete :
router.delete("/:id", verifyUser, deleteUser);

//  Get All users:
router.get("/", verifyAdmin, getUsers);

//  Get A single user :
router.get("/:id", verifyUser, getUser);

export default router;
