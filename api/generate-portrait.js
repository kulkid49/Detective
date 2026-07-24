export const maxDuration = 60; // Max allowed duration on Vercel Hobby tier
const OPENROUTER_IMAGES_URL = 'https://openrouter.ai/api/v1/images';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt } = req.body;
  const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

  if (!OPENROUTER_API_KEY) {
    return res.status(500).json({ error: "OpenRouter API Key not configured." });
  }

  if (!prompt) {
    return res.status(400).json({ error: "Image prompt is required." });
  }

  try {
    const response = await fetch(OPENROUTER_IMAGES_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'HTTP-Referer': 'https://detective-game.vercel.app', 
        'X-Title': 'Case Files Game', 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'google/gemini-3.1-flash-image-preview',
        prompt: prompt,
        resolution: "2K",
        aspect_ratio: "3:4"
      })
    });

    if (!response.ok) {
        const errorText = await response.text();
        console.error("OpenRouter API Image Error:", errorText);
        return res.status(response.status).json({ error: "Failed to generate image from OpenRouter." });
    }

    const data = await response.json();
    // OpenRouter /images endpoint usually returns data array with url or b64_json
    const imageUrl = data.data?.[0]?.url || data.data?.[0]?.b64_json || null;
    
    if (!imageUrl) {
        throw new Error("Invalid response format from OpenRouter images endpoint");
    }

    res.status(200).json({ url: imageUrl });
  } catch (error) {
    console.error("Image Generation Error:", error);
    res.status(500).json({ error: "An unexpected error occurred during image generation." });
  }
}
