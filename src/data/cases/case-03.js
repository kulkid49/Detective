export default {
  case_id: "case-03",
  level_number: 3,
  title: "The Stubbed Case 3",
  case_type: "murder",
  difficulty: "easy",
  setting: { city: "Stub City", date: "Jan 1, 2026", real_world_anchor: "Stub location" },
  police_briefing: {
    summary: "A placeholder case waiting for content.",
    victim_or_target: { name: "John Doe", age: 30, occupation: "None", background: "None", last_known_movements: "None" },
    incident_details: { location: "None", time_estimate: "None", cause_of_death_or_method: "None", initial_state_of_scene: "None" }
  },
  suspects: [
    {
      id: "s1", name: "Jane Doe", role_in_victims_life: "Spouse", alibi: "At home.", true_whereabouts: "At home.",
      motive: "Money", motive_strength: "Strong", personality: "Calm", secrets: ["Secret"], guilty: true,
      relationship_to_other_suspects: "None", portrait_image: null
    }
  ],
  witnesses: [
    {
      id: "w1", name: "Bob Smith", connection_to_case: "Neighbor", reliability: "High",
      what_they_actually_saw: "Nothing.", what_they_will_initially_claim: "Nothing.",
      personality: "Nervous", portrait_image: null
    }
  ],
  dialogue: {
    "s1": [
      {
        topic_id: "intro", topic_label: "Ask about the victim", requires_evidence_id: null, requires_topic_ids: [],
        response: "I didn't do it.", reaction: "defensive", unlocks_evidence_ids: [], unlocks_topic_ids: ["alibi"]
      },
      {
        topic_id: "alibi", topic_label: "Where were you?", requires_evidence_id: null, requires_topic_ids: ["intro"],
        response: "I was at home all night.", reaction: "calm", unlocks_evidence_ids: [], unlocks_topic_ids: []
      }
    ],
    "w1": [
      {
        topic_id: "intro", topic_label: "Did you see anything?", requires_evidence_id: null, requires_topic_ids: [],
        response: "I was looking out the window but saw nothing.", reaction: "nervous", unlocks_evidence_ids: [], unlocks_topic_ids: []
      }
    ]
  },
  evidence: [
    { id: "e1", type: "physical", name: "The Weapon", description: "A bloody knife.", location_found: "Kitchen", relevance: "Murder weapon.", image: null, unlocked_by_default: false }
  ],
  locations: [
    { id: "l1", name: "Kitchen", real_world_reference: "Kitchen", description: "The scene.", examinable_details: [{ id: "d1", text: "Look at the floor.", unlocks_evidence_ids: ["e1"] }] }
  ],
  timeline: [
    { time: "8:00 PM", event: "Murder", public_knowledge: false }
  ],
  red_herrings: [
    { description: "A stray cat.", why_it_misleads: "Looks suspicious.", how_its_debunked: "It's just a cat." }
  ],
  solution: { culprit_id: "s1", method: "Stabbed.", motive: "Money.", key_evidence_chain: ["e1"], full_explanation: "She did it for the money." },
  gamification: {
    hint_system: ["Hint 1", "Hint 2", "Hint 3"],
    achievements: []
  }
};