      import { GoogleGenerativeAI } from "@google/generative-ai";

      const genAI = new GoogleGenerativeAI("AIzaSyBQhAxUH--A93Lf7psNvWq0DEa6kDzYNs4");


      async function run() {
		  // For text-only input, use the gemini-pro model
		  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

		  const prompt = document.getElementById('inputData').value+"という名前の人が、２０２４年に何をするかの年表を、面白おかしく書いてください。";

		  const result = await model.generateContent(prompt);
		  const response = await result.response;
		  const text = response.text();
		  console.log(text);
		  document.getElementById('response').innerText = text;
		  document.getElementById('sendButton').disabled = false;
	}
	window.postData = function(){
	document.getElementById('sendButton').disabled = true;
	run();
	}