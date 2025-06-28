export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  res.status(200).json({ 
    status: "OK", 
    message: "Chanakya AI is running!",
    apiKey: process.env.GEMINI_API_KEY ? "Set" : "Not set",
    timestamp: new Date().toISOString()
  });
} 