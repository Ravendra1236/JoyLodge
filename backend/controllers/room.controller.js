import Room from "../models/room.model.js";
import Hotel from "../models/hotel.model.js";
import { createError } from "../utils/error.js";
export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  const newRoom = new Room(req.body);

  try {
    // First check if hotel exists
    const hotel = await Hotel.findById(hotelId);
    if (!hotel) return next(createError(404, "Hotel not found"));

    const savedRoom = await newRoom.save();

   
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });

      res.status(201).json({
        success: true,
        savedRoom,
        message: "Room created successfully",
      });
    } catch (err) {
      await Room.findByIdAndDelete(savedRoom._id);
      return next(createError(500, "Could not add room to hotel"));
    }
  } catch (err) {
    return next(createError(500, "Could not create room"));
  }
};


export const updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedRoom);
  } catch (err) {
    next(err);
  }
};

export const deleteRoom = async (req, res, next) => {
  try {
    const deleteRoom = await Room.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mssg: "Successfully Deleted",
    });
  } catch (error) {
    next(createError(501, "Unable to Delete"));
  }
};

export const getRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.status(200).json({
      rooms,
      mssg: "Successfull",
    });
  } catch (error) {
    next(createError(500, "Unable to fetch data!"));
  }
};

export const getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) return next(createError(404, "Room not found"));
    res.status(200).json({
      room,
      mssg: "Successful",
    });
  } catch (error) {
    next(createError(500, "Error fetching room"));
  }
};
