import template from "./bplan-template.json"
import { promptTask } from "./prompt";
const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const genAI = new GoogleGenerativeAI(process.env.API_KEY)
  const MODEL_NAME = "gemini-1.5-pro-latest";  
  const generationConfig = {
    temperature: 1,
    topK: 0,
    topP: 0.95,
    maxOutputTokens: 8192,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];


export async function POST(req,res) {
    const reqdata = await req.json()
    const { overview, marketing, competition, finance } = reqdata;

    const model = genAI.getGenerativeModel({ model: MODEL_NAME, generationConfig, safetySettings });
    const prompt = `${promptTask} Here is the provided client data: 
    1. Company Overview: ${overview}. 
    2. Marketing Details: ${marketing}.
    3. Competitor Information: ${competition}.
    4. Financial Overview: ${overview}.`

    try {
      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = response.text();
      // const clean = text.replace(/^```json\s+([\s\S]+?)\s*```$/g, '$1')
      return Response.json({data: text}) 
    } catch (error) {
      console.log("An Error Occured: ", error)
      return Response.json({error: 'an error occured: '}, {status: 500})
    }
}
