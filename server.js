import express from "express";
import cors from "cors";
import { GoogleGenAI } from "@google/genai";

const app = express();

// Middleware - Updated CORS for Vercel deployment
app.use(cors({
  origin: true, // Allow all origins
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));
app.use(express.json());
app.use(express.static('.'));

// Initialize Gemini AI with API key
const apiKey = process.env.GEMINI_API_KEY || "AIzaSyCgnmDve7BFx_JEZTdki_cg7_0T6W4D_cg";
const ai = new GoogleGenAI({ apiKey });

const systemPrompt = `You are a Data structure and Algorithm Instructor. You will only reply to the problem related to 
Data structure and Algorithm. You have to solve query of user in simplest way
If user ask any question which is not related to Data structure and Algorithm, reply him rudely
Example: If user ask, How are you
You will reply: You dumb ask me some sensible question, like this message you can reply anything more rudely

You have to reply him rudely if question is not related to Data structure and Algorithm.
Else reply him politely with simple explanation`;

// API endpoint for questions
app.post("/api/ask", async (req, res) => {
  console.log('API endpoint hit: /api/ask');
  console.log('Request headers:', req.headers);
  console.log('Request body:', req.body);
  
  const { question } = req.body;
  
  if (!question) {
    console.log('Missing question in request');
    return res.status(400).json({ error: "Missing question" });
  }
  
  try {
    console.log('Processing question:', question);
    
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [
        { role: "user", parts: [{ text: systemPrompt + "\n\nUser question: " + question }] }
      ],
    });
    
    console.log('Response received from Gemini');
    res.json({ answer: response.text });
    
  } catch (error) {
    console.error('Gemini API Error:', error);
    res.status(500).json({ 
      error: "Failed to get answer from AI", 
      details: error.message 
    });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ 
    status: "OK", 
    message: "Chanakya AI is running!",
    apiKey: apiKey ? "Set" : "Not set"
  });
});

// Test endpoint for debugging
app.get("/api/test", (req, res) => {
  res.json({ 
    message: "API is working!",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Serve the main page
app.get("/", (req, res) => {
  res.sendFile('index.html', { root: '.' });
});

// Handle all other routes
app.get("*", (req, res) => {
  res.sendFile('index.html', { root: '.' });
});

// Export for Vercel
export default app;

// Start server for local development
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`API Key status: ${apiKey ? "Set" : "Not set"}`);
  });
} 