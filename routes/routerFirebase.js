import express from "express";
import {
  getInfoCon,
  getInfoByIdCon,
  insertInfoCon,
  deleteInfoCon,
  updateInfoCon,
} from "../controller/controllerFirebase.js";

const router = express.Router();

// GET all
router.get("/", getInfoCon);

// GET by id
router.get("/:id", getInfoByIdCon);

// POST new doc
router.post("/", insertInfoCon);

// PUT update by id
router.put("/:id", updateInfoCon);

// DELETE by id
router.delete("/:id", deleteInfoCon);

export default router;
