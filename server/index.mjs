// Proxy server to hide public API keys

// core modules
import { fileURLToPath } from "url";
import path, { dirname } from "path";

// 3rd party
import "dotenv/config";
import express from "express";
import cors from "cors";

// local
import { router } from "./routes.mjs";
import { env } from "process";

// current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// cors
app.use(cors());

//static folder
app.use(express.static(path.join(__dirname, "..", "build")));

// routes
app.use("/api", router);

// React Router
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});


const PORT = env.SERVER_PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
