import express from "express";
import { createNote, getAllNotes } from "../controllers/note.controller.js";

const noteRouter = express.Router();

noteRouter.post("/create-note", createNote);
noteRouter.get("/get-all-notes/:id", getAllNotes);

export default noteRouter;
