import Hotel from "../models/hotel.model.js";
import { createError } from "../utils/error.js";

export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(201).json({
      savedHotel,
      mssg: "Successfully saved",
    });
  } catch (error) {
    next(createError(500, "Error creating hotel"));
  }
};

export const updateHotel = async (req, res, next) => {
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
    next(createError(500, "Error updating hotel"));
  }
};

export const deleteHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mssg: "Successfully Deleted",
    });
  } catch (error) {
    next(createError(501, "Unable to Delete"));
  }
};

export const getHotels = async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json({
      hotels,
      mssg: "Successfull",
    });
  } catch (error) {
    next(createError(500, "Unable to fetch data!"));
  }
};

export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) return next(createError(404, "Hotel not found"));
    res.status(200).json({
      hotel,
      mssg: "Successful",
    });
  } catch (error) {
    next(createError(500, "Error fetching hotel"));
  }
};
