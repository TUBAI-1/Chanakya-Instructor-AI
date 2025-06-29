import { GoogleGenAI } from "@google/genai";

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

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  console.log('API endpoint hit: /api/ask');
  console.log('Request headers:', req.headers);
  console.log('Request body:', req.body);
  console.log('Environment:', process.env.NODE_ENV);
  console.log('API Key status:', apiKey ? 'Set' : 'Not set');
  
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
    console.error('Error details:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    res.status(500).json({ 
      error: "Failed to get answer from AI", 
      details: error.message 
    });
  }
} 