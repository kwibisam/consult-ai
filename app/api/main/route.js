const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.API_KEY)

export async function GET(request) {
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    const prompt = "generate a simple business plan for a fictional company of your choice. the business plan should however include key sections of any business plan."
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return Response.json({story: text})
}

