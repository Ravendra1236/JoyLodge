import User from "../models/user.model.js";

export const register = async (req, res, next) => {
  try {
    const newUser = new User({
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
    });

    await newUser.save();
    res.status(201).json({
      mssg: "Successfully registered new User",
    });
  } catch (err) {
    next(err);
  }
};
