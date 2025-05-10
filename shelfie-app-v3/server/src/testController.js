import { Router } from "express";
import path from "path";
import { fileURLToPath } from "url";

// Needed when using ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const testController = Router();

testController.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'db.json');
  res.sendFile(filePath);
});

export default testController;
