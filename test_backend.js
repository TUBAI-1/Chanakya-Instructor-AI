import fetch from 'node-fetch';

async function testBackend() {
  try {
    console.log("Testing backend endpoint...");
    
    const response = await fetch('http://localhost:3001/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question: "What is a binary search?" })
    });
    
    const data = await response.json();
    
    if (data.answer) {
      console.log("✅ Backend is working!");
      console.log("Answer:", data.answer);
    } else if (data.error) {
      console.log("❌ Backend error:", data.error);
    }
    
  } catch (error) {
    console.log("❌ Backend test failed:", error.message);
  }
}

testBackend(); 