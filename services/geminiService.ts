
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { GEMINI_API_KEY } from '../constants';

// FIX: Removed global 'ai' instance. It will be created inside the function after key check.
// This prevents potential errors during module load if API_KEY is not set.

/**
 * Generates content using the Gemini API.
 * @param prompt The prompt to send to the model.
 * @returns The generated text content.
 * @throws Error if API key is not configured or if API call fails.
 */
export const generateContentWithGemini = async (prompt: string): Promise<string> => {
  // FIX: Updated API key check to ensure GEMINI_API_KEY is set.
  if (!GEMINI_API_KEY) {
    throw new Error("Gemini API Key not configured. Please set the API_KEY environment variable.");
  }

  try {
    // FIX: Initialize GoogleGenAI here, ensuring GEMINI_API_KEY is a string.
    const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash-preview-04-17',
      contents: prompt,
    });
    
    const text = response.text;
    if (text) {
      return text;
    } else {
      throw new Error("Received an empty response from Gemini.");
    }
  } catch (error: any) {
    console.error("Error calling Gemini API:", error);
    throw new Error(`Gemini API request failed: ${error.message}`);
  }
};