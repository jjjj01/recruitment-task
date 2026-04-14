import express from "express";
import cors from "cors";
import { Config, ConfigSchema, SearchObject } from "@shared";
import { configToSearchObjects } from "./utils";

const app = express();
const PORT = process.env.PORT || 3001;

let importedJson: Config | null = null;

let searchableList: Array<SearchObject> | null = null;

app.use(cors());
app.use(express.json());

app.post("/api/import", (req, res) => {
  const result = ConfigSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      success: false,
      error: "Invalid JSON structure",
      issues: result.error.issues,
    });
  }

  importedJson = result.data;
  searchableList = configToSearchObjects(result.data);

  res.json({
    success: true,
    message: "JSON imported successfully",
  });
});

app.get("/api/current", (_req, res) => {
  if (importedJson === null) {
    res.json();
  } else {
    res.json(importedJson);
  }
});

app.get("/api/search", (_req, res) => {
  if (searchableList === null) {
    res.json();
  } else {
    res.json(searchableList);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
