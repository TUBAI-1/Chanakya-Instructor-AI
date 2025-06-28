import { GoogleGenAI } from "@google/genai";

const apiKey = "AIzaSyCgnmDve7BFx_JEZTdki_cg7_0T6W4D_cg";
const ai = new GoogleGenAI({ apiKey });

async function testAPI() {
  try {
    console.log("Testing Gemini API...");
    console.log("API Key:", apiKey.substring(0, 10) + "...");
    
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: "Hello, can you respond with just 'API working' if you can see this message?",
    });
    
    console.log("✅ API Response:", response.text);
    console.log("✅ API Key is working!");
    
  } catch (error) {
    console.log("❌ API Error Details:");
    console.log("Error Code:", error.code);
    console.log("Error Message:", error.message);
    console.log("Status:", error.status);
    
    if (error.message.includes("expired") || error.message.includes("INVALID_ARGUMENT")) {
      console.log("\n🔑 SOLUTION: Your API key has expired or is invalid.");
      console.log("Please get a new API key from: https://aistudio.google.com/app/apikey");
      console.log("1. Go to the link above");
      console.log("2. Sign in with your Google account");
      console.log("3. Click 'Create API key'");
      console.log("4. Copy the new key and share it here");
    }
  }
}

testAPI(); 