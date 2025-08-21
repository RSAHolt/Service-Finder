import { getInfo, getInfoById, insertInfo, deleteInfo, updateInfo } from "../model/modelFirebase.js";

// get all docs
const getInfoCon = async (req, res) => {
  try {
    const info = await getInfo();
    res.json({ info });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// get by id
const getInfoByIdCon = async (req, res) => {
  try {
    const info = await getInfoById(req.params.id);
    if (!info) return res.status(404).json({ error: "Not found" });
    res.json({ info });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// insert new doc
const insertInfoCon = async (req, res) => {
  try {
    const { field1, field2 } = req.body;
    await insertInfo(field1, field2);
    res.status(201).json({ message: "Document added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// delete doc
const deleteInfoCon = async (req, res) => {
  try {
    await deleteInfo(req.params.id);
    res.json({ message: "Document deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// update doc
const updateInfoCon = async (req, res) => {
  try {
    const { field1, field2 } = req.body;
    await updateInfo(req.params.id, field1, field2);
    res.json({ message: "Document updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export {
  getInfoCon,
  getInfoByIdCon,
  insertInfoCon,
  deleteInfoCon,
  updateInfoCon,
};
