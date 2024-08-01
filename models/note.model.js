import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  content: { type: String, required: true },
  id: { type: mongoose.Schema.Types.ObjectId, ref: "Group" },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const noteModel = mongoose.model("Note", noteSchema);
export default noteModel;
