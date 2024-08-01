import dotenv from "dotenv";
import mongoose from "mongoose";
import noteModel from "../models/note.model.js";

dotenv.config();

// CREATE NOTE
export const createNote = async (req, res) => {
  const { content, id } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid group ID" });
  }

  if (!content) {
    return res.status(400).json({ message: "Please write your note." });
  }

  try {
    const newContent = { content, id };
    const note = await noteModel.create(newContent);

    res.status(201).json({
      success: true,
      note,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET ALL NOTES OF A GROUP
export const getAllNotes = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid group ID" });
  }

  try {
    const allNotes = await noteModel.find({ id: id });
    res.status(200).json({
      success: true,
      allNotes,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
