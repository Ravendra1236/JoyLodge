import express from "express";
import Hotel from "../models/hotel.model.js";
import { createError } from "../utils/error.js";
const router = express.Router();

// Create :
router.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json({
      savedHotel,
      mssg: "Successfully saved",
    });
  } catch (error) {
    res.status(500).json({
      mssg: error,
    });
  }
});

// Update :
router.patch("/:id", async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      updatedHotel,
      mssg: "Successfully Updated",
    });
  } catch (error) {
    res.status(500).json({
      mssg: error,
    });
  }
});

// Delete :
router.delete("/:id", async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mssg: "Successfully Deleted",
    });
  } catch (error) {
    res.status(500).json({
      mssg: error,
    });
  }
});

//  Get All Hotels:
router.get("/", async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json({
      hotels,
      mssg: "Successfull",
    });
  } catch (error) {
    next(error);
  }
});

//  Get A single Hotel :
router.get("/:id", async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json({
      hotel,
      mssg: "Successfull",
    });
  } catch (error) {
    res.status(500).json({
      mssg: error,
    });
  }
});

export default router;
