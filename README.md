# Chanakya Instructor AI

A modern, dark-mode AI-powered coding instructor that helps developers learn programming concepts, algorithms, and data structures using Google's Gemini AI.

## 🚀 Features

- **AI-Powered Learning**: Get instant answers to coding questions using Google Gemini AI
- **Modern Dark UI**: Beautiful, responsive dark mode interface
- **Secure Backend**: API keys are kept secure on the backend server
- **Code Highlighting**: Syntax highlighting for code examples
- **Quick Actions**: Pre-built questions for common programming topics
- **Real-time Responses**: Fast, accurate answers to your coding questions

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Node.js, Express.js
- **AI**: Google Gemini AI API
- **Styling**: Custom CSS with dark theme
- **Code Highlighting**: Prism.js

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Google Gemini API key

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/TUBAI-1/Chanakya-Instructor-AI.git
   cd Chanakya-Instructor-AI
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up your Gemini API key**
   - Get your API key from [Google AI Studio](https://aistudio.google.com/app/apikey)
   - Update the API key in `server.js`:
   ```javascript
   const ai = new GoogleGenAI({ apiKey: "YOUR_API_KEY_HERE" });
   ```

4. **Start the backend server**
   ```bash
   node server.js
   ```
   The backend will run on `http://localhost:3001`

5. **Start the frontend server**
   ```bash
   python -m http.server 8000
   ```
   Or use any other static file server. The frontend will be available at `http://localhost:8000`

## 🎯 Usage

1. Open your browser and navigate to `http://localhost:8000`
2. Type your coding question in the text area
3. Click "Ask Chanakya AI" or press Enter
4. Get instant, detailed answers with code examples

## 📁 Project Structure

```
Chanakya-Instructor-AI/
├── index.html          # Main frontend interface
├── server.js           # Backend Express server
├── package.json        # Node.js dependencies
├── .gitignore          # Git ignore rules
├── README.md           # Project documentation
├── DSA.js              # Example Gemini API usage
├── test_api.js         # API testing script
└── test_backend.js     # Backend testing script
```

## 🔧 Configuration

### Backend Configuration
- **Port**: Default is 3001 (configurable in `server.js`)
- **CORS**: Enabled for local development
- **API Endpoint**: `/ask` for question processing

### Frontend Configuration
- **Backend URL**: Configured to `http://localhost:3001/ask`
- **Theme**: Dark mode with purple/blue accent colors
- **Responsive**: Works on desktop and mobile devices

## 🎨 Features

### AI Instructor
- Specialized in Data Structures and Algorithms
- Provides clear, educational explanations
- Includes practical code examples
- Offers best practices and tips

### User Interface
- Modern dark theme design
- Responsive layout
- Code syntax highlighting
- Copy-to-clipboard functionality
- Loading indicators
- Error handling

### Quick Actions
- Pre-built questions for common topics:
  - JavaScript Closures
  - Binary Search (Python)
  - Recursion
  - React Hooks

## 🔒 Security

- API keys are stored securely on the backend
- No sensitive information exposed to the frontend
- CORS configured for secure cross-origin requests

## 🐛 Troubleshooting

### Common Issues

1. **API Key Errors**
   - Ensure your Gemini API key is valid and active
   - Check that the key is correctly set in `server.js`

2. **Backend Connection Issues**
   - Verify the backend server is running on port 3001
   - Check for any firewall or network restrictions

3. **Frontend Not Loading**
   - Ensure the static file server is running
   - Check browser console for JavaScript errors

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- Google Gemini AI for providing the AI capabilities
- Prism.js for code syntax highlighting
- Font Awesome for icons
- The open-source community for inspiration

## 📞 Support

If you encounter any issues or have questions, please open an issue on GitHub.

---

**Built with ❤️ for the developer community** 