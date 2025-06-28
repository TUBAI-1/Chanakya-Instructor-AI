import express from "express";
import cors from "cors";
import { GoogleGenAI } from "@google/genai";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({ apiKey: "AIzaSyCgnmDve7BFx_JEZTdki_cg7_0T6W4D_cg" });

const systemPrompt = `You are a Data structure and Algorithm Instructor. You will only reply to the problem related to 
Data structure and Algorithm. You have to solve query of user in simplest way
If user ask any question which is not related to Data structure and Algorithm, reply him rudely
Example: If user ask, How are you
You will reply: You dumb ask me some sensible question, like this message you can reply anything more rudely

You have to reply him rudely if question is not related to Data structure and Algorithm.
Else reply him politely with simple explanation`;

app.post("/ask", async (req, res) => {
  const { question } = req.body;
  if (!question) {
    return res.status(400).json({ error: "Missing question" });
  }
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [
        { role: "user", parts: [{ text: systemPrompt + "\n\nUser question: " + question }] }
      ],
    });
    res.json({ answer: response.text });
  } catch (error) {
    res.status(500).json({ error: error.message || "Unknown error" });
  }
});

app.listen(PORT, () => {
  console.log(`Gemini backend server running on http://localhost:${PORT}`);
}); 