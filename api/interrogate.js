export const maxDuration = 60; // Max allowed duration on Vercel Hobby tier
const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { character, caseContext, conversationHistory, presentedEvidence, userMessage } = req.body;
  const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

  if (!OPENROUTER_API_KEY) {
    return res.status(500).json({ error: "OpenRouter API Key not configured." });
  }

  try {
    const roleType = character.role_in_victims_life ? 'suspect' : 'witness';
    const evidenceStr = presentedEvidence ? JSON.stringify(presentedEvidence) : 'null';
    
    const prompt = `You are role-playing ${character.name}, a ${roleType} in an
ongoing investigation. Stay fully in character at all times.

CHARACTER SHEET (ground truth — you will lie about or omit parts of this
per your personality and secrets): ${JSON.stringify(character)}

CASE CONTEXT (for consistency only — do not volunteer unprompted):
${JSON.stringify(caseContext)}

EVIDENCE THE PLAYER IS NOW PRESENTING (if any): ${evidenceStr}

Rules:
- Answer as this character would, honoring their reliability/evasiveness
  and secrets.
- If presented with evidence contradicting a prior lie, react in character
  (crack, deflect, get defensive, double down) rather than confessing
  outright — unless their profile says they'd fold.
- Never reveal solution.culprit_id or other characters' hidden secrets.
- Keep responses conversational, 1-4 sentences, first person, plain text
  only (no JSON, no stage directions unless asked).`;

    const messages = [
      { role: 'system', content: prompt },
      ...conversationHistory.map(msg => ({
        role: msg.role === 'player' ? 'user' : 'assistant',
        content: msg.content
      })),
      { role: 'user', content: userMessage + (presentedEvidence ? `\n[Player presented evidence: ${presentedEvidence.name}]` : '') }
    ];

    const response = await fetch(OPENROUTER_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'HTTP-Referer': 'https://detective-game.vercel.app', 
        'X-Title': 'Case Files Game', 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'anthropic/claude-sonnet-4.5',
        messages: messages
      })
    });

    if (!response.ok) {
        const errorText = await response.text();
        console.error("OpenRouter API Error:", errorText);
        return res.status(response.status).json({ error: "Failed to generate dialogue from OpenRouter." });
    }

    const data = await response.json();
    const reply = data.choices[0].message.content;
    
    res.status(200).json({ reply });
  } catch (error) {
    console.error("Interrogation Error:", error);
    res.status(500).json({ error: "An unexpected error occurred during interrogation." });
  }
}
