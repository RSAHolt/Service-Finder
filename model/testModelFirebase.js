import { db } from "../config/testFirebase.js"
import { 
  collection, 
  getDocs, 
  getDoc, 
  doc, 
  addDoc, 
  updateDoc, 
  deleteDoc 
} from "firebase/firestore";

// get all docs
const getInfo = async () => {
  const snapshot = await getDocs(collection(db, "table"));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// get doc by id
const getInfoById = async (id) => {
  const ref = doc(db, "table", id);
  const snapshot = await getDoc(ref);
  return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
};

// insert doc
const insertInfo = async (field1, field2) => {
  await addDoc(collection(db, "table"), {
    field1,
    field2,
    createdAt: new Date()
  });
};

// delete doc
const deleteInfo = async (id) => {
  const ref = doc(db, "table", id);
  await deleteDoc(ref);
};

// update doc
const updateInfo = async (id, field1, field2) => {
  const ref = doc(db, "table", id);
  await updateDoc(ref, {
    field1,
    field2,
    updatedAt: new Date()
  });
};

export { getInfo, getInfoById, insertInfo, deleteInfo, updateInfo };
