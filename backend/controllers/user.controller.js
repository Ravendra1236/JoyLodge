import User from "../models/user.model.js";
import { createError } from "../utils/error.js";

export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      updatedUser,
      mssg: "Successfully Updated",
    });
  } catch (error) {
    next(createError(500, "Error updating user"));
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mssg: "Successfully Deleted",
    });
  } catch (error) {
    next(createError(501, "Unable to Delete"));
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({
      users,
      mssg: "Successfull",
    });
  } catch (error) {
    next(createError(500, "Unable to fetch data!"));
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return next(createError(404, "User not found"));
    res.status(200).json({
      user,
      mssg: "Successful",
    });
  } catch (error) {
    next(createError(500, "Error fetching user"));
  }
};
