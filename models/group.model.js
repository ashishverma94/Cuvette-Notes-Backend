import mongoose from "mongoose";

const groupSchema = new mongoose.Schema({
  group_name: { type: String, required: true },
  group_color: { type: String, required: true },
});

const groupModel = mongoose.model("Group", groupSchema);
export default groupModel;
