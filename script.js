import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "...";  // あなたのAPIキーをここに入力
const genAI = new GoogleGenerativeAI(API_KEY);

async function generateContent() {
    const model = genAI.getGenerativeModel({ model: "MODEL_NAME" });
    // ここにモデルを使用したコードを追加
    // 例えば、model.generateContent(...) を使用するなど

    // レスポンスの処理
    // 例: console.log(response);
}

// ボタンクリックイベントを設定
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#generateButton').addEventListener('click', generateContent);
});
