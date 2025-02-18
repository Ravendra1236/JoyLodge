import express from "express";

import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../controllers/hotel.controller.js";
const router = express.Router();

// Create :
router.post("/", createHotel);

// Update :
router.patch("/:id", updateHotel);

// Delete :
router.delete("/:id", deleteHotel);

//  Get All Hotels:
router.get("/", getHotels);

//  Get A single Hotel :
router.get("/:id", getHotel);

export default router;
