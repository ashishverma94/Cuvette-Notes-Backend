import mongoose from "mongoose";
import groupModel from "../models/group.model.js";

// CREATE GROUP
export const createGroup = async (req, res) => {
  const { group_name, group_color } = req.body;

  if (!group_name) {
    return res.status(400).json({ message: "Please enter Group Name" });
  }

  if (!group_color) {
    return res
      .status(400)
      .json({ message: "Please select color for your group" });
  }

  const isGroupExist = await groupModel.findOne({ group_name });
  if (isGroupExist) {
    return res
      .status(400)
      .json({ message: "Group already exist. Please enter another name." });
  }

  try {
    const newGroup = {
      group_color,
      group_name,
    };

    const groups = await groupModel.create(newGroup);

    res.status(201).json({
      success: true,
      groups,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// CREATE GROUP
export const getGroup = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid group ID" });
  }

  try {
    const group = await groupModel.findById(id);

    res.status(201).json({
      success: true,
      group,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET ALL GROUPS
export const getAllGroups = async (req, res) => {
  try {
    const groups = await groupModel.find();

    res.status(200).json({
      success: true,
      groups,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
