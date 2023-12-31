import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyBQhAxUH--A93Lf7psNvWq0DEa6kDzYNs4";
const genAI = new GoogleGenerativeAI(API_KEY);

async function generateContent() {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = "Write a story about a magic backpack."

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

// ボタンクリックイベントを設定
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#generateButton').addEventListener('click', generateContent);
});
