
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health check: test whether the backend is running
app.get("/", (req, res) => {
  res.send("Prophet API is running successfully!");
});

// Hadith API endpoint
app.get("/api/hadith", async (req, res) => {
  try {
    const apiKey = process.env.HADITH_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        error: "Hadith API key is not configured"
      });
    }

    const response = await fetch(
      `https://hadithapi.com/api/hadiths?apiKey=${encodeURIComponent(apiKey)}`
    );

    if (!response.ok) {
      throw new Error(`Hadith API returned ${response.status}`);
    }

    const data = await response.json();
    const list = data?.hadiths?.data;

    if (!Array.isArray(list) || list.length === 0) {
      throw new Error("No Hadiths were returned by the API");
    }

    const randomHadith =
      list[Math.floor(Math.random() * list.length)];

    res.json(randomHadith);
  } catch (error) {
    console.error("Hadith API error:", error.message);

    res.status(500).json({
      error: "Failed to fetch Hadith"
    });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on port ${PORT}`);
});
