import express from "express";
import routerFirebase from "./routes/routerFirebase.js";

const app = express();

// Middleware
app.use(express.json()); 

// Mount your routes at /api/service
app.use("/api/service", routerFirebase);

// Root test
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
