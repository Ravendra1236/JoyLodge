import express from "express";

import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../controllers/hotel.controller.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

// Create :
router.post("/", verifyAdmin, createHotel);

// Update :
router.patch("/:id", verifyAdmin, updateHotel);

// Delete :
router.delete("/:id", verifyAdmin, deleteHotel);

//  Get All Hotels:
router.get("/", getHotels);

//  Get A single Hotel :
router.get("/:id", getHotel);

export default router;
