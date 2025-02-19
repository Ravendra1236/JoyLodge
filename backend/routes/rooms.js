import express from "express";

import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
} from "../controllers/room.controller.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

// Create :
router.post("/:hotelid", verifyAdmin, createRoom);

// Update :
router.patch("/:id", verifyAdmin, updateRoom);

// Delete :
router.delete("/:id", verifyAdmin, deleteRoom);

//  Get All Hotels:
router.get("/", getRooms);

//  Get A single Hotel :
router.get("/:id", getRoom);

export default router;
