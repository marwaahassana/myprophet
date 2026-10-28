import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());

// Hadith API endpoint
app.get("/api/hadith", async (req, res) => {
  try {
    console.log("API key exists:", !!process.env.HADITH_API_KEY);

    const response = await fetch(
      `https://hadithapi.com/api/hadiths?apiKey=${process.env.HADITH_API_KEY}`
    );

    console.log("API status:", response.status);
/*app.get("/api/hadith", async (req, res) => {
  try {
    const response = await fetch(
      `https://hadithapi.com/api/hadiths?apiKey=${process.env.HADITH_API_KEY}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch hadiths");
    }*/

    const data = await response.json();


    console.log("API response:", data);

    if (!response.ok) {
      throw new Error(`Hadith API returned ${response.status}`);
    }

    const list = data.hadiths.data;

    const randomHadith =
      list[Math.floor(Math.random() * list.length)];

    res.json(randomHadith);
  } catch (error) {
    console.error("Hadith API error:", error);

      res.status(500).json({
      error: "Failed to fetch hadith",
      message: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});