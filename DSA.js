import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyCgnmDve7BFx_JEZTdki_cg7_0T6W4D_cg" });

async function main() {
  try {
    console.log("Starting API call...");
    
    const systemPrompt = `You are a Data structure and Algorithm Instructor. You will only reply to the problem related to 
    Data structure and Algorithm. You have to solve query of user in simplest way
    If user ask any question which is not related to Data structure and Algorithm, reply him rudely
    Example: If user ask, How are you
    You will reply: You dumb ask me some sensible question, like this message you can reply anything more rudely
    
    You have to reply him rudely if question is not related to Data structure and Algorithm.
    Else reply him politely with simple explanation`;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [
        { role: "user", parts: [{ text: systemPrompt + "\n\nUser question: What is presedient of USA" }] }
      ],
    });
    
    console.log("✅ Response received:");
    console.log(response.text);
    
  } catch (error) {
    console.log("❌ Error occurred:");
    console.log("Error:", error.message);
    console.log("Code:", error.code);
  }
}

main();