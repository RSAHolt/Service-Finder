// modelFirebase.js
import { db } from "../config/firebase.js";
import { FieldValue } from "firebase-admin/firestore";

// Get all documents
const getInfo = async () => {
  const snapshot = await db.collection("service").get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Get document by ID
const getInfoById = async (id) => {
  const docRef = db.collection("service").doc(id);
  const snapshot = await docRef.get();
  return snapshot.exists ? { id: snapshot.id, ...snapshot.data() } : null;
};

// Insert document
const insertInfo = async (field1, field2) => {
  await db.collection("service").add({
    field1,
    field2,
    createdAt: FieldValue.serverTimestamp()
  });
};

// Delete document
const deleteInfo = async (id) => {
  await db.collection("service").doc(id).delete();
};

// Update document
const updateInfo = async (id, field1, field2) => {
  await db.collection("service").doc(id).update({
    field1,
    field2,
    updatedAt: FieldValue.serverTimestamp()
  });
};

export { getInfo, getInfoById, insertInfo, deleteInfo, updateInfo };

