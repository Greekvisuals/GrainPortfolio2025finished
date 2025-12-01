import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateProjectDescription = async (title: string, category: string): Promise<string> => {
  if (!apiKey) {
    console.warn("API Key not found in environment variables");
    return "A cinematic masterpiece capturing raw emotion and visual storytelling. (AI Key missing)";
  }

  try {
    const model = 'gemini-2.5-flash';
    
    const prompt = `
      Act as a Lead Creative Director for a high-end avant-garde production studio. 
      Write a sophisticated, evocative, and texturally rich description (2-3 sentences) for a film project.

      Project Details:
      - Title: "${title}"
      - Category: "${category}"

      Directives:
      1. Analyze the keywords in the Title to derive specific visual imagery (e.g., if "Rain", mention water/reflection; if "Neon", mention light/contrast).
      2. Focus strictly on cinematic atmosphere, lighting, texture, and emotional resonance.
      3. Avoid generic openers like "This project showcases..." or "A video about...". Dive directly into the imagery.
      4. The tone must be artistic, mysterious, and expensive.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text.trim();
  } catch (error) {
    console.error("Error generating description:", error);
    return "A visual exploration of narrative depth, weaving together light and texture to create an immersive cinematic experience.";
  }
};