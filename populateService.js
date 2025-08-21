// populateService.js
import { db } from "./config/firebase.js";

const populateService = async () => {
  try {
    const testDocs = [
      { name: "Service A", description: "Test service A", active: true },
      { name: "Service B", description: "Test service B", active: false },
      { name: "Service C", description: "Test service C", active: true },
    ];

    for (const docData of testDocs) {
      const docRef = await db.collection("service").add(docData);
      console.log(`Added document with ID: ${docRef.id}`);
    }

    console.log("All test documents added successfully!");
  } catch (err) {
    console.error("Error populating service collection:", err);
  }
};

populateService();
