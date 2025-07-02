import express from "express";
import cors from "cors";
import axios from "axios";  // <-- importer axios pour faire la requête HTTP
import { handleDemo } from "./routes/demo";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    res.json({ message: "Hello from Express server v2!" });
  });

  app.get("/api/demo", handleDemo);

  // Nouvelle route webhook Builder.io
  app.post("/api/builderio-webhook", async (req, res) => {
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    const OWNER = "Roxas17300";
    const REPO = "Builder-vibe-works";

    if (!GITHUB_TOKEN) {
      return res.status(500).json({ error: "GITHUB_TOKEN is not set" });
    }

    try {
      await axios.post(
        `https://api.github.com/repos/${OWNER}/${REPO}/dispatches`,
        { event_type: "builderio_content_updated" },
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
            Authorization: `token ${GITHUB_TOKEN}`,
          },
        }
      );

      return res.status(200).json({ message: "Workflow triggered" });
    } catch (error: any) {
      console.error(error.response?.data || error.message);
      return res.status(500).json({ error: "Error triggering workflow" });
    }
  });

  return app;
}
