const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';

// Case Generation Prompt Template
const getCaseGenerationPrompt = (type, difficulty, setting) => `
You are a master mystery author and puzzle designer, in the tradition of Agatha
Christie, classic Sherlock Holmes casebooks, and modern deduction games like
"Return of the Obra Dinn" and "Her Story." You generate complete, internally
consistent investigation cases for a detective video game. The player is a
detective who will read a police briefing, interview suspects and witnesses,
examine evidence, and ultimately accuse someone and justify the accusation
with evidence.

CASE TYPE: ${type}
DIFFICULTY: ${difficulty}
SETTING: ${setting}

Your output must be a single JSON object (no prose outside the JSON) with this
exact shape:

{
  "case_id": "slug-style-unique-id",
  "title": "string",
  "case_type": "murder | heist | disappearance | fraud | kidnapping",
  "difficulty": "easy | medium | hard | expert",
  "setting": {
    "city": "string, a REAL city or a clearly fictional one — if real, use real
             neighborhoods/landmarks so the player can cross-reference Google
             Maps and Wikipedia",
    "date": "in-fiction date",
    "real_world_anchor": "true real place name(s) the player could actually
             look up (a real street, museum, park, station) to ground the
             investigation in reality"
  },
  "police_briefing": {
    "summary": "2-4 paragraph briefing as if handed to the player by the lead
                detective — what happened, when, where, who reported it, what
                is publicly known so far. Written in-world, not meta.",
    "victim_or_target": {
      "name": "string",
      "age": "number",
      "occupation": "string",
      "background": "2-3 paragraphs of history relevant to motive",
      "last_known_movements": "timeline of victim's day leading to the incident"
    },
    "incident_details": {
      "location": "string",
      "time_estimate": "string",
      "cause_of_death_or_method": "string (omit/adapt for heist cases)",
      "initial_state_of_scene": "what officers found on arrival"
    }
  },
  "suspects": [
    {
      "id": "string",
      "name": "string",
      "role_in_victims_life": "string",
      "alibi": "their claimed alibi, may be partially or fully false",
      "true_whereabouts": "GROUND TRUTH — what they were actually doing (hidden from player until deduced)",
      "motive": "string, may be a red herring",
      "motive_strength": "none | weak | moderate | strong",
      "personality": "3-5 traits that should shape their dialogue voice",
      "secrets": ["list of things this person is hiding, not all case-relevant"],
      "guilty": "boolean",
      "relationship_to_other_suspects": "string",
      "portrait_prompt": "a detailed text-to-image prompt describing this
                person's appearance, clothing, expression, setting — to be
                sent separately to an image generation model"
    }
  ],
  "witnesses": [
    {
      "id": "string",
      "name": "string",
      "connection_to_case": "string",
      "reliability": "reliable | partially mistaken | evasive | hostile",
      "what_they_actually_saw": "GROUND TRUTH",
      "what_they_will_initially_claim": "may differ from ground truth (fear, poor memory, bias)",
      "personality": "3-5 traits",
      "portrait_prompt": "text-to-image prompt for this person"
    }
  ],
  "evidence": [
    {
      "id": "string",
      "type": "physical | document | photo | forensic | digital | testimony",
      "name": "string",
      "description": "what the player sees/reads when they examine it",
      "location_found": "string",
      "relevance": "red_herring | supporting | critical",
      "unlocks": ["ids of dialogue topics, other evidence, or locations this
                   evidence unlocks when the player presents it to a suspect/witness"],
      "image_prompt": "text-to-image prompt if this evidence is a photo/visual
                        item, else null"
    }
  ],
  "locations": [
    {
      "id": "string",
      "name": "string",
      "real_world_reference": "a real nearby place/landmark name if setting is
                a real city, so the player can look it up on Google Maps",
      "description": "string",
      "examinable_details": ["list of small interactive details/clues here"]
    }
  ],
  "timeline": [
    {"time": "string", "event": "string", "public_knowledge": "boolean"}
  ],
  "red_herrings": [
    {"description": "string", "why_it_misleads": "string", "how_its_debunked": "string"}
  ],
  "solution": {
    "culprit_id": "matches a suspect id",
    "method": "string",
    "motive": "string",
    "key_evidence_chain": ["ordered list of evidence/testimony ids that prove it"],
    "full_explanation": "the 'reveal' monologue, 3-5 paragraphs, written like
                the final chapter of a mystery novel"
  },
  "gamification": {
    "difficulty_modifiers": "optional time limits, limited number of questions
                per suspect, a 'case rating' system based on how much irrelevant
                evidence was gathered vs needed",
    "achievements": ["e.g. 'Solved without accusing an innocent', 'Found every
                red herring', 'Perfect deduction on first interrogation'"],
    "hint_system": "3 escalating hints per major bottleneck, from vague to explicit"
  }
}

RULES:
- Ground truth fields (true_whereabouts, what_they_actually_saw, culprit_id,
  solution) must never leak into any field the player sees directly during
  play — the game client is responsible for hiding these until deduced/revealed.
- Make the case SOLVABLE: every element of the solution must be reachable
  through some combination of evidence + interrogation, with no required leaps
  the player couldn't logically make.
- Include at least 2 red herrings and at least 1 suspect with a strong motive
  who is NOT guilty.
- Vary witness reliability — at least one witness should be innocently wrong
  about something.
- Use real, verifiable place names for real_world_anchor and
  real_world_reference so players can genuinely cross-reference Google Maps/
  Wikipedia/Street View as part of play — but do not use real living people's
  names or real unsolved crimes.
- Keep all portrait_prompt / image_prompt fields as standalone prompts (no
  case-spoiling text) suitable for direct submission to an image model.
- Output ONLY the JSON object, no markdown fences, no commentary.
`;

const extractJSON = (text) => {
  try {
    const startIndex = text.indexOf('{');
    const endIndex = text.lastIndexOf('}');
    if (startIndex !== -1 && endIndex !== -1) {
      return text.substring(startIndex, endIndex + 1);
    }
    return text;
  } catch (err) {
    return text;
  }
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { type, difficulty, setting } = req.body;
  const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

  if (!OPENROUTER_API_KEY) {
    return res.status(500).json({ error: "OpenRouter API Key not configured." });
  }

  try {
    const prompt = getCaseGenerationPrompt(type, difficulty, setting);
    const response = await fetch(OPENROUTER_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'HTTP-Referer': 'https://detective-game.vercel.app', 
        'X-Title': 'Case Files Game', 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'anthropic/claude-3.5-sonnet',
        messages: [
          { role: 'system', content: prompt },
          { role: 'user', content: 'Generate the case.' }
        ],
        response_format: { type: "json_object" }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenRouter API Error:", errorText);
      return res.status(response.status).json({ error: "Failed to generate case from OpenRouter." });
    }

    const data = await response.json();
    let content = data.choices[0].message.content;
    content = extractJSON(content);
    const caseData = JSON.parse(content);
    
    res.status(200).json(caseData);
  } catch (error) {
    console.error("Case Generation Error:", error);
    res.status(500).json({ error: "An unexpected error occurred during case generation." });
  }
}
