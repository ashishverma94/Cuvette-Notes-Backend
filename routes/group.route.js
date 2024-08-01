import express from "express";
import {
  getGroup,
  createGroup,
  getAllGroups,
} from "../controllers/group.controller.js";

const groupRouter = express.Router();

groupRouter.post("/create-group", createGroup);
groupRouter.get("/get-all-groups", getAllGroups);
groupRouter.get("/get-group/:id", getGroup);

export default groupRouter;
