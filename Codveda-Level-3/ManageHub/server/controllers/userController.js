
import mongoose from "mongoose";
import User from "../models/User.js";

function getAllowedUserFields(body) {
  const { name, email, role, status } = body;
  return { name, email, role, status };
}

export async function getUsers(_req, res, next) {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      count: users.length,
      data: users
    });
  } catch (error) {
    return next(error);
  }
}

export async function getUserById(req, res, next) {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid user ID."
      });
    }

    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found."
      });
    }

    return res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    return next(error);
  }
}

export async function createUser(req, res, next) {
  try {
    const user = await User.create(getAllowedUserFields(req.body));

    return res.status(201).json({
      success: true,
      message: "User created successfully.",
      data: user
    });
  } catch (error) {
    return next(error);
  }
}

export async function updateUser(req, res, next) {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid user ID."
      });
    }

    const user = await User.findByIdAndUpdate(
      req.params.id,
      getAllowedUserFields(req.body),
      {
        new: true,
        runValidators: true
      }
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found."
      });
    }

    return res.status(200).json({
      success: true,
      message: "User updated successfully.",
      data: user
    });
  } catch (error) {
    return next(error);
  }
}

export async function deleteUser(req, res, next) {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid user ID."
      });
    }

    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found."
      });
    }

    return res.status(200).json({
      success: true,
      message: "User deleted successfully.",
      data: user
    });
  } catch (error) {
    return next(error);
  }
}
