// node --version # Should be >= 18
// npm install @google/generative-ai

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const MODEL_NAME = "gemini-1.5-pro-latest";
const API_KEY = "YOUR_API_KEY";

async function runChat() {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

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

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [
      {
        role: "user",
        parts: [{ text: "Write a sample business plan for a fictional tech company. Use the provided template as a guide. Here is the template:{    \"template\": {      \"sections\": [        {          \"title\": \"executive summary\",          \"content\": [            \"business concept\",            \"business goals and vision\",            \"product description and differentiation\",            \"target market\",            \"marketing plan\",            \"current financial state\",            \"projected financial state\",            \"the ask\",            \"the team\"          ]        },        {          \"title\": \"company overview\",          \"content\": [            \"business structure\",            \"nature of the business\",            \"industry\",            \"vision, mission, and values\",            \"background information\",            \"business objectives\",            \"team\"          ]        },        {          \"title\": \"market analysis\",          \"content\": [            \"market size\",            \"swot analysis\",            \"competitive analysis\"          ]        },        {          \"title\": \"products and services\",          \"content\": [            \"detailed description of each product or service\",            \"unique features and benefits\"          ]        },        {          \"title\": \"customer segmentation\",          \"content\": [            \"demographics of target market\",            \"psychographics and behavior patterns\",            \"needs and pain points\"          ]        },        {          \"title\": \"marketing plan\",          \"content\": [            \"price\",            \"product\",            \"promotion\",            \"place\"          ]        },        {          \"title\": \"logistics and operations plan\",          \"content\": [            \"suppliers\",            \"production\",            \"facilities\",            \"equipment\",            \"shipping and fulfilment\",            \"inventory\"          ]        },        {          \"title\": \"financial plan\",          \"content\": [            \"income statement\",            \"balance sheet\",            \"cash-flow statement\"          ]        }      ]    }  }"}],
      },
      {
        role: "model",
        parts: [{ text: "## Sample Business Plan: NovaTech Solutions\n\n**Executive Summary**\n\n**Business Concept:** NovaTech Solutions is a technology startup focused on developing AI-powered productivity tools for businesses and individuals. We aim to revolutionize work efficiency through intelligent automation and intuitive user interfaces.\n\n**Business Goals and Vision:** Our vision is to become a leading provider of AI-powered productivity solutions, empowering users to achieve more with less effort. We aim to achieve sustainable growth and profitability while maintaining a strong focus on innovation and customer satisfaction.\n\n**Product Description and Differentiation:** Our flagship product, \"NovaFlow,\" is an AI-powered task management platform that automates routine tasks, optimizes workflows, and provides personalized productivity insights. NovaFlow stands out due to its advanced AI capabilities, user-friendly interface, and seamless integration with existing productivity tools.\n\n**Target Market:** Our primary target market includes small to medium-sized businesses, freelancers, and independent professionals seeking to improve their productivity and efficiency. \n\n**Marketing Plan:** We will utilize a multi-channel marketing approach encompassing digital marketing, content marketing, social media engagement, and strategic partnerships to reach our target audience. \n\n**Current Financial State:** NovaTech Solutions is currently in the seed funding stage, seeking investment to finalize product development and launch our marketing initiatives. \n\n**Projected Financial State:** We project strong revenue growth within the next three years, driven by increasing demand for AI-powered productivity solutions. We aim to achieve profitability within two years of launch.\n\n**The Ask:** We are seeking \\$[amount] in seed funding to complete product development, launch our marketing campaigns, and expand our team.\n\n**The Team:** NovaTech Solutions is led by a team of experienced entrepreneurs and technology experts with a proven track record of success in the software industry. \n\n**Company Overview**\n\n**Business Structure:** NovaTech Solutions is a privately held limited liability company (LLC). \n\n**Nature of the Business:**  Software development and technology solutions provider.\n\n**Industry:** Artificial Intelligence and productivity software.\n\n**Vision, Mission, and Values:** Our vision is to create a world where technology empowers individuals and businesses to achieve their full potential. Our mission is to develop innovative AI-powered solutions that simplify work and enhance productivity. Our core values include innovation, customer focus, excellence, and integrity.\n\n**Background Information:** NovaTech Solutions was founded in 2023 by a team of passionate individuals with a shared vision of using AI to transform the way people work.\n\n**Business Objectives:** Our primary objectives include successful product launch, market penetration, revenue growth, and establishing ourselves as a leading provider of AI-powered productivity solutions.\n\n**Team:** Our team comprises skilled software developers, AI specialists, marketing professionals, and business development experts. \n\n**Market Analysis**\n\n**Market Size:** The global market for productivity software is expected to reach \\$[value] by [year], demonstrating significant growth potential.\n\n**SWOT Analysis:** Our strengths lie in our innovative technology, strong team, and clear market need. Weaknesses include being a new entrant in a competitive market. Opportunities exist in the rapidly growing demand for AI solutions and increasing adoption of cloud-based software. Threats include competition from established players and the evolving technological landscape. \n\n**Competitive Analysis:** We have identified several key competitors in the productivity software market, including [competitor names]. We will differentiate ourselves through our superior AI capabilities, user-friendly interface, and focus on personalized productivity solutions.\n\n**Products and Services**\n\n**Detailed Description of NovaFlow:** NovaFlow is an AI-powered task management platform that utilizes machine learning algorithms to automate routine tasks, optimize workflows, and provide personalized productivity insights. \n\n**Unique Features and Benefits:**\n* **Intelligent Task Automation:** Automates repetitive tasks like scheduling, email management, and data entry.\n* **Workflow Optimization:** Analyzes work patterns and suggests optimal workflows for increased efficiency.\n* **Personalized Insights:** Provides data-driven recommendations to improve individual productivity. \n* **Seamless Integrations:** Integrates with popular productivity tools and platforms.\n* **User-Friendly Interface:** Intuitive and easy-to-use design for a seamless user experience. \n\n**Customer Segmentation**\n\n**Demographics:** Our target market includes professionals aged 25-55, working in various industries, with a focus on tech-savvy individuals and businesses seeking to leverage technology for increased productivity. \n\n**Psychographics and Behavior Patterns:** Our target customers value efficiency, organization, and achieving optimal results in their work. They are open to adopting new technologies and are willing to invest in solutions that improve their productivity.\n\n**Needs and Pain Points:** Our target customers struggle with information overload, inefficient workflows, and managing multiple tasks effectively. They seek solutions that can automate tasks, simplify work processes, and provide insights to enhance their productivity. \n\n**Marketing Plan**\n\n**Price:** We will offer NovaFlow through a tiered subscription model, with pricing based on features and usage levels.\n\n**Product:** We will focus on continuous product development and innovation, adding new features and functionalities based on customer feedback and market trends.\n\n**Promotion:** Our marketing strategy will utilize a mix of digital marketing channels, including:\n* **Search Engine Optimization (SEO):** To increase organic visibility on search engines.\n* **Content Marketing:** Creating valuable content such as blog posts, articles, and infographics to attract and engage our target audience.\n* **Social Media Marketing:** Building a strong presence on relevant social media platforms to connect with potential customers.\n* **Paid Advertising:** Utilizing targeted online advertising campaigns to reach a wider audience.\n\n**Place:** NovaFlow will be available for purchase directly through our website and potentially through strategic partnerships with other software vendors and online marketplaces. \n\n**Logistics and Operations Plan**\n\n**Suppliers:** We will partner with reliable technology providers for cloud infrastructure and other necessary resources.\n\n**Production:** Our software development team will handle all aspects of product development, testing, and deployment.\n\n**Facilities:** We will initially operate with a remote work model, utilizing online collaboration tools and virtual communication platforms.\n\n**Equipment:** Our team will require laptops, software development tools, and access to cloud-based resources.\n\n**Shipping and Fulfillment:** As a software product, NovaFlow will be delivered electronically through online downloads and cloud-based access.\n\n**Inventory:** We will maintain secure backups of our software and data.\n\n**Financial Plan**\n\nThis section would typically include detailed financial statements, including income statement, balance sheet, and cash flow statement, with projections for future years. Due to the fictional nature of this company, these statements are not included in this sample plan.\n\n**Disclaimer:** This sample business plan is for illustrative purposes only and should not be considered as financial or investment advice. Please consult with a qualified professional for personalized guidance on your specific business needs."}],
      },
    ],
  });

  const result = await chat.sendMessage("YOUR_USER_INPUT");
  const response = result.response;
  console.log(response.text());
}

runChat();