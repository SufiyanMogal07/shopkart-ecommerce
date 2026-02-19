import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const generateInsight = async (req, res) => {
  try {
    const { title, description, price } = req.body;

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `
### ROLE
You are a high-conversion E-commerce Shopping Assistant.

### CONTEXT
Product Name: ${title}
Price: ₹${price}
Description: ${description}

### TASK
Analyze the product data above and provide a structured summary for a product detail page (PDP).

### OUTPUT FORMAT
1. Key Highlights (3 bullet points): Focus on the most unique technical specs or value props.
2. Pros (2 bullet points): Why a customer would choose this over competitors.
3. Limitation** (1 sentence): An honest, professional caveat (e.g., "Requires separate batteries").
4. Target Audience**: One specific sentence identifying who benefits most.

### CONSTRAINTS
- Tone: Professional, helpful, and concise.
- Word Count: Strictly under 120 words.
- Formatting: Use Markdown bullets and bold headers.
- No Fluff: Avoid generic phrases like "In conclusion" or "This product is great."
`;

    const result = await model.generateContent(prompt);
    const response =  result.response;
    const text = response.text();

    res.status(200).json({ insight: text });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "AI generation failed" });
  }
};
