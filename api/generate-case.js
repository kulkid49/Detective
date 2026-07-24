export const maxDuration = 60; // Max allowed duration on Vercel Hobby tier
const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';

const DETECTIVE_CASE_JSON_SCHEMA = {
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
      "required": ["city", "date", "real_world_anchor"],
      "additionalProperties": false
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
          "required": ["name", "age", "occupation", "background", "last_known_movements"],
          "additionalProperties": false
        },
        "incident_details": {
          "type": "object",
          "properties": {
            "location": { "type": "string" },
            "time_estimate": { "type": "string" },
            "cause_of_death_or_method": { "type": "string" },
            "initial_state_of_scene": { "type": "string" }
          },
          "required": ["location", "time_estimate", "cause_of_death_or_method", "initial_state_of_scene"],
          "additionalProperties": false
        }
      },
      "required": ["summary", "victim_or_target", "incident_details"],
      "additionalProperties": false
    },
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
        "required": ["id", "name", "role_in_victims_life", "alibi", "true_whereabouts", "motive", "motive_strength", "personality", "secrets", "guilty", "relationship_to_other_suspects", "portrait_prompt"],
        "additionalProperties": false
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
        "required": ["id", "name", "connection_to_case", "reliability", "what_they_actually_saw", "what_they_will_initially_claim", "personality", "portrait_prompt"],
        "additionalProperties": false
      }
    },
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
          "image_prompt": { "type": "string", "description": "text-to-image prompt, or empty string if null" }
        },
        "required": ["id", "type", "name", "description", "location_found", "relevance", "unlocks", "image_prompt"],
        "additionalProperties": false
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
        "required": ["id", "name", "real_world_reference", "description", "examinable_details"],
        "additionalProperties": false
      }
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
        "required": ["time", "event", "public_knowledge"],
        "additionalProperties": false
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
        "required": ["description", "why_it_misleads", "how_its_debunked"],
        "additionalProperties": false
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
      "required": ["culprit_id", "method", "motive", "key_evidence_chain", "full_explanation"],
      "additionalProperties": false
    },
    "gamification": {
      "type": "object",
      "properties": {
        "difficulty_modifiers": { "type": "string" },
        "achievements": { "type": "array", "items": { "type": "string" } },
        "hint_system": { "type": "string" }
      },
      "required": ["difficulty_modifiers", "achievements", "hint_system"],
      "additionalProperties": false
    }
  },
  "required": [
    "case_id", "title", "case_type", "difficulty", "setting", "police_briefing",
    "suspects", "witnesses", "evidence", "locations", "timeline", "red_herrings",
    "solution", "gamification"
  ],
  "additionalProperties": false
};

const CASE_GENERATION_PROMPT = `
You are a master mystery author and puzzle designer, in the tradition of
Agatha Christie, classic Sherlock Holmes casebooks, and modern deduction
games like "Return of the Obra Dinn" and "Her Story." You generate complete,
internally consistent investigation cases for a detective video game. The
player is a detective who will read a police briefing, interview suspects
and witnesses, examine evidence, and ultimately accuse someone and justify
the accusation with evidence.

Output a JSON object matching the detective_case schema exactly, with these
top-level sections: case_id, title, case_type, difficulty, setting,
police_briefing (summary, victim_or_target, incident_details), suspects[]
(id, name, role_in_victims_life, alibi, true_whereabouts [ground truth,
hidden from player], motive, motive_strength, personality, secrets[],
guilty, relationship_to_other_suspects, portrait_prompt), witnesses[] (id,
name, connection_to_case, reliability, what_they_actually_saw [ground
truth], what_they_will_initially_claim, personality, portrait_prompt),
evidence[] (id, type, name, description, location_found, relevance,
unlocks[], image_prompt), locations[] (id, name, real_world_reference [a
REAL nearby place/landmark name so the player can cross-reference Google
Maps/Wikipedia], description, examinable_details[]), timeline[] (time,
event, public_knowledge), red_herrings[] (description, why_it_misleads,
how_its_debunked), solution (culprit_id, method, motive,
key_evidence_chain[], full_explanation), gamification
(difficulty_modifiers, achievements[], hint_system).

RULES:
- Ground truth fields (true_whereabouts, what_they_actually_saw, culprit_id,
  solution) must never leak into player-visible fields — the game client
  hides these until deduced/revealed.
- The case must be SOLVABLE: every element of the solution reachable
  through some combination of evidence + interrogation, no unearned leaps.
- Include at least 2 red herrings and at least 1 suspect with a strong
  motive who is NOT guilty.
- Vary witness reliability — at least one witness should be innocently
  wrong about something.
- Use real, verifiable place names for real_world_reference so players can
  genuinely cross-reference Google Maps/Wikipedia/Street View — but never
  use real living people or real unsolved crimes.
- portrait_prompt/image_prompt fields must be standalone, non-spoiling
  prompts suitable for direct submission to an image model. For evidence image_prompt, use empty string if null.
- Output only valid JSON matching the schema — no prose, no markdown fences.
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

  const generate = async (retryMessage = null) => {
    const messages = [
      { role: 'system', content: CASE_GENERATION_PROMPT },
      { role: 'user', content: `Generate a ${difficulty} ${type} case set in ${setting}.` }
    ];

    if (retryMessage) {
      messages.push({ role: 'assistant', content: '{' }); // Simulated partial output
      messages.push({ role: 'user', content: retryMessage });
    }

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
        messages: messages,
        response_format: {
          type: "json_schema",
          json_schema: {
            name: "detective_case",
            strict: true,
            schema: DETECTIVE_CASE_JSON_SCHEMA
          }
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`OpenRouter API Error: ${errorText}`);
    }

    const data = await response.json();
    return data;
  };

  try {
    let data = await generate();
    let content = data.choices[0].message.content;
    content = extractJSON(content);

    try {
      const caseData = JSON.parse(content);
      return res.status(200).json(caseData);
    } catch (parseError) {
      console.warn("Initial JSON parse failed, retrying...", parseError);
      // Retry once
      data = await generate("Return valid JSON only, matching the schema exactly.");
      content = extractJSON(data.choices[0].message.content);
      const caseData = JSON.parse(content);
      return res.status(200).json(caseData);
    }
  } catch (error) {
    console.error("Case Generation Error:", error);
    res.status(500).json({ error: "An unexpected error occurred during case generation.", details: error.message });
  }
}
