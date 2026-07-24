export const maxDuration = 60; // Max allowed duration on Vercel Hobby tier
const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';

const SCHEMA_PART_1 = {
  "type": "object",
  "properties": {
    "case_id": { "type": "string" },
    "title": { "type": "string" },
    "case_type": { "type": "string" },
    "difficulty": { "type": "string" },
    "setting": {
      "type": "object",
      "properties": {
        "city": { "type": "string" },
        "date": { "type": "string" },
        "real_world_anchor": { "type": "string" }
      },
      "required": ["city", "date", "real_world_anchor"]
    },
    "police_briefing": {
      "type": "object",
      "properties": {
        "summary": { "type": "string" },
        "victim_or_target": {
          "type": "object",
          "properties": {
            "name": { "type": "string" },
            "age": { "type": "number" },
            "occupation": { "type": "string" },
            "background": { "type": "string" },
            "last_known_movements": { "type": "string" }
          },
          "required": ["name", "age", "occupation", "background", "last_known_movements"]
        },
        "incident_details": {
          "type": "object",
          "properties": {
            "location": { "type": "string" },
            "time_estimate": { "type": "string" },
            "cause_of_death_or_method": { "type": "string" },
            "initial_state_of_scene": { "type": "string" }
          },
          "required": ["location", "time_estimate", "cause_of_death_or_method", "initial_state_of_scene"]
        }
      },
      "required": ["summary", "victim_or_target", "incident_details"]
    },
    "timeline": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "time": { "type": "string" },
          "event": { "type": "string" },
          "public_knowledge": { "type": "boolean" }
        },
        "required": ["time", "event", "public_knowledge"]
      }
    },
    "solution": {
      "type": "object",
      "properties": {
        "culprit_id": { "type": "string" },
        "method": { "type": "string" },
        "motive": { "type": "string" },
        "key_evidence_chain": { "type": "array", "items": { "type": "string" } },
        "full_explanation": { "type": "string" }
      },
      "required": ["culprit_id", "method", "motive", "key_evidence_chain", "full_explanation"]
    }
  },
  "required": ["case_id", "title", "case_type", "difficulty", "setting", "police_briefing", "timeline", "solution"]
};

const SCHEMA_PART_2 = {
  "type": "object",
  "properties": {
    "suspects": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": { "type": "string" },
          "name": { "type": "string" },
          "role_in_victims_life": { "type": "string" },
          "alibi": { "type": "string" },
          "true_whereabouts": { "type": "string" },
          "motive": { "type": "string" },
          "motive_strength": { "type": "string" },
          "personality": { "type": "string" },
          "secrets": { "type": "array", "items": { "type": "string" } },
          "guilty": { "type": "boolean" },
          "relationship_to_other_suspects": { "type": "string" },
          "portrait_prompt": { "type": "string" }
        },
        "required": ["id", "name", "role_in_victims_life", "alibi", "true_whereabouts", "motive", "motive_strength", "personality", "secrets", "guilty", "relationship_to_other_suspects", "portrait_prompt"]
      }
    },
    "witnesses": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": { "type": "string" },
          "name": { "type": "string" },
          "connection_to_case": { "type": "string" },
          "reliability": { "type": "string" },
          "what_they_actually_saw": { "type": "string" },
          "what_they_will_initially_claim": { "type": "string" },
          "personality": { "type": "string" },
          "portrait_prompt": { "type": "string" }
        },
        "required": ["id", "name", "connection_to_case", "reliability", "what_they_actually_saw", "what_they_will_initially_claim", "personality", "portrait_prompt"]
      }
    }
  },
  "required": ["suspects", "witnesses"]
};

const SCHEMA_PART_3 = {
  "type": "object",
  "properties": {
    "evidence": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": { "type": "string" },
          "type": { "type": "string" },
          "name": { "type": "string" },
          "description": { "type": "string" },
          "location_found": { "type": "string" },
          "relevance": { "type": "string" },
          "unlocks": { "type": "array", "items": { "type": "string" } },
          "image_prompt": { "type": "string" }
        },
        "required": ["id", "type", "name", "description", "location_found", "relevance", "unlocks", "image_prompt"]
      }
    },
    "locations": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": { "type": "string" },
          "name": { "type": "string" },
          "real_world_reference": { "type": "string" },
          "description": { "type": "string" },
          "examinable_details": { "type": "array", "items": { "type": "string" } }
        },
        "required": ["id", "name", "real_world_reference", "description", "examinable_details"]
      }
    },
    "red_herrings": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "description": { "type": "string" },
          "why_it_misleads": { "type": "string" },
          "how_its_debunked": { "type": "string" }
        },
        "required": ["description", "why_it_misleads", "how_its_debunked"]
      }
    },
    "gamification": {
      "type": "object",
      "properties": {
        "difficulty_modifiers": { "type": "string" },
        "achievements": { "type": "array", "items": { "type": "string" } },
        "hint_system": { "type": "string" }
      },
      "required": ["difficulty_modifiers", "achievements", "hint_system"]
    }
  },
  "required": ["evidence", "locations", "red_herrings", "gamification"]
};

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

const COMMON_RULES = `
RULES:
- The case must be SOLVABLE: every element of the solution reachable through some combination of evidence + interrogation, no unearned leaps.
- Use real, verifiable place names for real_world_reference so players can genuinely cross-reference Google Maps/Wikipedia/Street View — but never use real living people or real unsolved crimes.
- portrait_prompt/image_prompt fields must be standalone, non-spoiling prompts suitable for direct submission to an image model. For evidence image_prompt, use empty string if null.
- Output only valid JSON matching the schema — no prose, no markdown fences.
`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { type, difficulty, setting } = req.body;
  const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

  if (!OPENROUTER_API_KEY) {
    return res.status(500).json({ error: "OpenRouter API Key not configured." });
  }

  const callOpenRouter = async (systemPrompt, userPrompt, maxTokens, retryCount = 1) => {
    try {
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
          max_tokens: maxTokens,
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userPrompt }
          ],
          response_format: { type: "json_object" }
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`OpenRouter API Error: ${errorText}`);
      }

      const data = await response.json();
      let content = data.choices[0].message.content;
      content = extractJSON(content);
      return JSON.parse(content);
    } catch (error) {
      if (retryCount > 0) {
        console.warn("JSON parse failed or API error, retrying...", error.message);
        return await callOpenRouter(systemPrompt, userPrompt + "\n\nEnsure you return ONLY valid JSON.", maxTokens, retryCount - 1);
      }
      throw error;
    }
  };

  try {
    // -------------------------------------------------------------
    // STEP 1: Master Plan
    // -------------------------------------------------------------
    const prompt1 = `You are a master mystery author. Step 1: Design the CORE SPINE of a detective game case.
Output ONLY a JSON object matching the provided schema exactly.
${COMMON_RULES}
REQUIRED JSON SCHEMA:
${JSON.stringify(SCHEMA_PART_1, null, 2)}`;

    const part1 = await callOpenRouter(
      prompt1,
      `Generate the master plan for a ${difficulty} ${type} case set in ${setting}.`,
      1200 // Max tokens for Part 1
    );

    // -------------------------------------------------------------
    // STEP 2: Cast & Characters
    // -------------------------------------------------------------
    const prompt2 = `You are a master mystery author. Step 2: Flesh out the CAST & CHARACTERS for the case.
You must design the suspects and witnesses based on the Master Plan provided by the user.
Include at least 1 suspect with a strong motive who is NOT guilty.
Vary witness reliability — at least one witness should be innocently wrong about something.
Ground truth fields (true_whereabouts, what_they_actually_saw) must never leak into player-visible fields.
Output ONLY a JSON object matching the provided schema exactly.
${COMMON_RULES}
REQUIRED JSON SCHEMA:
${JSON.stringify(SCHEMA_PART_2, null, 2)}`;

    const part2 = await callOpenRouter(
      prompt2,
      `Master Plan:\n${JSON.stringify(part1, null, 2)}\n\nNow generate the suspects and witnesses for this case.`,
      1400 // Max tokens for Part 2
    );

    // -------------------------------------------------------------
    // STEP 3: Investigation Elements
    // -------------------------------------------------------------
    const prompt3 = `You are a master mystery author. Step 3: Design the EVIDENCE, LOCATIONS, and GAME MECHANICS.
You must design these elements to seamlessly support the Master Plan and the Cast provided by the user.
Include at least 2 red herrings.
Ensure every element of the solution is reachable through some combination of this evidence + interrogation.
Output ONLY a JSON object matching the provided schema exactly.
${COMMON_RULES}
REQUIRED JSON SCHEMA:
${JSON.stringify(SCHEMA_PART_3, null, 2)}`;

    const part3 = await callOpenRouter(
      prompt3,
      `Master Plan:\n${JSON.stringify(part1, null, 2)}\n\nCast:\n${JSON.stringify(part2, null, 2)}\n\nNow generate the evidence, locations, red_herrings, and gamification.`,
      1400 // Max tokens for Part 3
    );

    // -------------------------------------------------------------
    // STITCHING
    // -------------------------------------------------------------
    const fullCase = {
      ...part1,
      ...part2,
      ...part3
    };

    res.status(200).json(fullCase);
  } catch (error) {
    console.error("Case Generation Error:", error);
    res.status(500).json({ error: "An unexpected error occurred during case generation.", details: error.message });
  }
}
