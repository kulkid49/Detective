// src/data/cases/case-05.js
// Level 5 — "The Maidan Ransom" — an expert-difficulty staged kidnapping.
// Drop this file in as-is; it matches the schema from the restructuring prompt.

export default {
  case_id: "case-05",
  level_number: 5,
  title: "The Maidan Ransom",
  case_type: "kidnapping",
  difficulty: "expert",

  setting: {
    city: "Kolkata, India",
    date: "a Friday night in January",
    real_world_anchor: "Maidan, Kolkata"
  },

  police_briefing: {
    summary:
      "Ishaan Bose, 26, grandson of shipping magnate Birendra Bose, hasn't " +
      "been seen since he left a Park Street nightclub around midnight. His " +
      "car was found abandoned near the Maidan the next morning — doors " +
      "unlocked, no sign of a struggle. By mid-morning, a typed ransom note " +
      "arrived at the Bose family home demanding an untraceable " +
      "cryptocurrency payment within 48 hours.\n\n" +
      "On the surface, this looks like a straightforward, high-stakes " +
      "kidnapping. But nothing about the scene supports force — no struggle, " +
      "no witnesses describing anything but a young man calmly leaving with " +
      "someone he knew. A photo sent as proof of life shows Ishaan " +
      "unharmed and, if anything, oddly composed for someone supposedly " +
      "being held against his will.\n\n" +
      "Ishaan's allowance was frozen months ago after a public scandal " +
      "embarrassed the family, and he's known to be deep in gambling debt. " +
      "Work out whether this is really a kidnapping at all — and if it isn't, " +
      "who helped arrange it, and why.",
    victim_or_target: {
      name: "Ishaan Bose",
      age: 26,
      occupation: "Grandson and presumed heir of shipping magnate Birendra Bose",
      background:
        "Ishaan has no formal career, living instead off a generous family " +
        "allowance until it was frozen several months ago following a public " +
        "drunk-driving scandal that embarrassed the Bose family name. Since " +
        "then he's grown increasingly resentful of his grandfather's control " +
        "over the family fortune, and has run up significant gambling debts. " +
        "He's been secretly dating Neha Kapoor, a relationship the family " +
        "disapproves of.",
      last_known_movements:
        "Left a Park Street nightclub around midnight, seen by staff getting " +
        "into a car with a woman he was clearly comfortable with, showing no " +
        "sign of distress. His own car was found abandoned near the Maidan " +
        "the next morning."
    },
    incident_details: {
      location: "Initially the Maidan, where his car was found; likely a family-owned countryside property since",
      time_estimate: "Disappearance around midnight; ransom note delivered around 10 AM the next day",
      cause_of_death_or_method:
        "Initially treated as a kidnapping for ransom, but the complete " +
        "absence of any struggle, combined with witness accounts of a calm, " +
        "voluntary departure, increasingly suggests a staged disappearance.",
      initial_state_of_scene:
        "Ishaan's car was found neatly abandoned near the Maidan, doors " +
        "unlocked, nothing disturbed. A typed ransom note was delivered to " +
        "the family home the following morning demanding a large " +
        "cryptocurrency payment within 48 hours."
    }
  },

  suspects: [
    {
      id: "neha",
      name: "Neha Kapoor",
      role_in_victims_life: "Ishaan's girlfriend, kept secret from his family",
      alibi:
        "Says she was home alone all night and only learned what happened " +
        "the next day, like everyone else.",
      true_whereabouts:
        "Picked Ishaan up herself outside the nightclub, drove him to the " +
        "family's own countryside cottage near Diamond Harbour, and has been " +
        "managing the ransom demand ever since.",
      motive:
        "Deep in personal debt, and aware Ishaan's allowance had been frozen; " +
        "believed Birendra would quietly pay a ransom rather than risk his " +
        "grandson's safety or the family's reputation.",
      motive_strength: "strong",
      personality: [
        "composed and quick-thinking under normal circumstances",
        "becomes flustered rather than hostile when confronted with specifics",
        "genuinely cares for Ishaan, which shapes how she breaks under pressure"
      ],
      secrets: [
        "Helped Ishaan stage his own disappearance and is holding him at a " +
        "family property he doesn't know she has access to",
        "Wrote and is managing the ransom note and payment demand herself"
      ],
      guilty: true,
      relationship_to_other_suspects:
        "Met Rohan a few times; has never met Kabir or Anand.",
      portrait_image: "/images/suspects/c05_neha.jpg"
    },
    {
      id: "rohan",
      name: "Rohan Dey",
      role_in_victims_life: "Ishaan's college friend",
      alibi:
        "Says he was at his cousin's engagement function all night, with " +
        "dozens of family members present, and last saw Ishaan briefly at the " +
        "club earlier that evening before leaving separately.",
      true_whereabouts:
        "At the engagement function exactly as claimed.",
      motive:
        "Ishaan owes him a substantial gambling debt that's strained their " +
        "friendship in recent months.",
      motive_strength: "moderate",
      personality: [
        "frustrated but not vindictive",
        "wants his money back through ordinary means, not crime",
        "a little embarrassed to be considered a suspect over a card debt"
      ],
      secrets: [],
      guilty: false,
      relationship_to_other_suspects:
        "Knows Neha; no relationship with Kabir or Anand.",
      portrait_image: "/images/suspects/c05_rohan.jpg"
    },
    {
      id: "kabir",
      name: "Kabir Oberoi",
      role_in_victims_life: "Rival shipping magnate; recent business competitor of Birendra Bose",
      alibi:
        "Says he was overseas at an international shipping conference during " +
        "the entire window, with colleagues and hotel records to confirm it.",
      true_whereabouts:
        "At the conference overseas, exactly as claimed.",
      motive:
        "Recently lost a major shipping contract to Birendra Bose's company " +
        "and has made no secret of his bitterness about it.",
      motive_strength: "moderate",
      personality: [
        "proud and openly combative about business rivalries",
        "surprisingly cooperative once he understands the seriousness of the situation",
        "dismissive of the idea he'd resort to anything criminal over a contract"
      ],
      secrets: [],
      guilty: false,
      relationship_to_other_suspects:
        "No relationship with Neha, Rohan, or Anand beyond professional " +
        "dealings with the Bose family business.",
      portrait_image: null
    },
    {
      id: "anand",
      name: "Anand Verma",
      role_in_victims_life: "Private secretary and estate manager for the Bose family",
      alibi:
        "Says he was coordinating with police on the family's behalf from " +
        "the moment the ransom note arrived, following Birendra's " +
        "instructions throughout.",
      true_whereabouts:
        "Exactly as claimed, though under significant personal financial " +
        "stress unrelated to the case.",
      motive:
        "Has been quietly skimming small amounts from the estate accounts to " +
        "cover a personal debt, entirely unrelated to Ishaan's disappearance.",
      motive_strength: "weak",
      personality: [
        "loyal to the family after more than a decade of service",
        "meticulous and calm under normal pressure",
        "visibly ashamed when his own secret comes up"
      ],
      secrets: [
        "Has been skimming small amounts from the estate accounts for " +
        "several months"
      ],
      guilty: false,
      relationship_to_other_suspects:
        "No relationship with Neha, Rohan, or Kabir beyond his role managing " +
        "the Bose estate.",
      portrait_image: null
    }
  ],

  witnesses: [
    {
      id: "sameer",
      name: "Sameer",
      connection_to_case: "Valet at the Park Street nightclub Ishaan left that night",
      reliability: "reliable",
      what_they_actually_saw:
        "Saw Ishaan leave around midnight and get into a car with a woman he " +
        "recognized as Ishaan's usual companion, both of them relaxed, no " +
        "sign of distress or coercion.",
      what_they_will_initially_claim:
        "The same — he only mentions it once asked directly, having no " +
        "reason to think it was significant at the time.",
      personality: [
        "attentive to regulars, remembers faces and habits well",
        "easygoing, happy to help once he understands why it matters",
        "straightforward, doesn't embellish"
      ],
      portrait_image: null
    },
    {
      id: "golapi",
      name: "Golapi",
      connection_to_case: "Caretaker of the Bose family's countryside properties",
      reliability: "reliable",
      what_they_actually_saw:
        "Noticed lights on and a car parked at the family's cottage near " +
        "Diamond Harbour on a couple of evenings in the week before Ishaan " +
        "vanished, despite the property being closed for the season.",
      what_they_will_initially_claim:
        "The same, assuming at the time that a family member was simply " +
        "using the cottage without informing her.",
      personality: [
        "conscientious about the properties she looks after",
        "not naturally suspicious, assumes the best of the family",
        "willing to help once she realizes it might matter"
      ],
      portrait_image: null
    }
  ],

  dialogue: {
    neha: [
      {
        topic_id: "ask_relationship_neha",
        topic_label: "Ask about her relationship with Ishaan",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "We've been together over a year, quietly. His family wouldn't " +
          "approve, given my background, so we kept it private. He'd been " +
          "so stressed lately, about money mostly.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_that_night_neha",
        topic_label: "Ask where she was that night",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "Home, alone. I heard what happened the next day, same as " +
          "everyone else. I've been sick with worry.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "confront_financial_records",
        topic_label: "Confront her with her financial records",
        requires_evidence_id: "neha_financial_records",
        requires_topic_ids: [],
        response:
          "Yes, I'm in debt. Most people I know are. I don't see what that " +
          "has to do with Ishaan being taken.",
        reaction: "evasive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: ["confront_crypto_trace"]
      },
      {
        topic_id: "confront_crypto_trace",
        topic_label: "Confront her with the crypto wallet trace",
        requires_evidence_id: "crypto_wallet_trace",
        requires_topic_ids: ["confront_financial_records"],
        response:
          "That must be some kind of coincidence, or an old account we once " +
          "shared. I don't manage that wallet.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: ["confront_caretaker"]
      },
      {
        topic_id: "confront_caretaker",
        topic_label: "Confront her with the caretaker's account",
        requires_evidence_id: "caretaker_statement",
        requires_topic_ids: ["confront_crypto_trace"],
        response:
          "I haven't been anywhere near that cottage. She must be mistaken " +
          "about the car, or the timing.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: ["confront_photo"]
      },
      {
        topic_id: "confront_photo",
        topic_label: "Show her the proof-of-life photo",
        requires_evidence_id: "proof_of_life_photo",
        requires_topic_ids: ["confront_caretaker"],
        response:
          "...That's the cottage. Alright — Ishaan is safe, he's been there " +
          "the whole time, and he agreed to all of it. His allowance was " +
          "frozen, I was drowning in debt, and we both thought his " +
          "grandfather would quietly pay to make it go away and no one would " +
          "ever know it wasn't real. I wrote the note. I've been managing " +
          "everything. Please, just don't hurt him, none of this was ever " +
          "meant to actually harm anyone.",
        reaction: "breaks_down",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    rohan: [
      {
        topic_id: "ask_friendship",
        topic_label: "Ask about his friendship with Ishaan",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "We've known each other since college. Things have been tense " +
          "lately, honestly, over money he owes me. But we're still friends " +
          "underneath all that.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_that_night_rohan",
        topic_label: "Ask where he was that night",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "At my cousin's engagement function, all night, surrounded by " +
          "family. I saw Ishaan briefly at the club earlier, but I left " +
          "separately, well before midnight.",
        reaction: "calm",
        unlocks_evidence_ids: ["rohan_alibi_confirmation"],
        unlocks_topic_ids: []
      },
      {
        topic_id: "confront_gambling_debt",
        topic_label: "Confront him about the gambling debt",
        requires_evidence_id: "gambling_debt_note",
        requires_topic_ids: [],
        response:
          "Yes, he owes me a fair amount from cards. I want it back, properly, " +
          "not through anything like this. I'd never do something so " +
          "extreme over money — that's not who I am.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    kabir: [
      {
        topic_id: "ask_rivalry",
        topic_label: "Ask about his rivalry with the Bose family",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "We lost a major contract to Birendra's company recently. I'm not " +
          "going to pretend that didn't sting. But losing a bid isn't a " +
          "reason to kidnap someone's grandson.",
        reaction: "hostile",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_alibi_kabir",
        topic_label: "Ask where he was that night",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "At an international shipping conference overseas, the entire " +
          "window you're asking about. My colleagues and the hotel can " +
          "confirm every hour of it.",
        reaction: "calm",
        unlocks_evidence_ids: ["rival_alibi"],
        unlocks_topic_ids: []
      },
      {
        topic_id: "confront_threats",
        topic_label: "Ask about comments he's made about the Bose family",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "I've said harsh things about them publicly, out of frustration, " +
          "sure. Words aren't crimes, Inspector, and I was thousands of " +
          "miles away when whatever this is happened.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    anand: [
      {
        topic_id: "ask_role_anand",
        topic_label: "Ask about his role managing the estate",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "I've managed the family's finances and logistics for over a " +
          "decade. They trust me with a great deal, and I've always tried to " +
          "honor that.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_ransom_logistics",
        topic_label: "Ask about his involvement in the ransom logistics",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "I've been coordinating with your officers on Birendra's behalf " +
          "since the note arrived — arranging the payment method, keeping " +
          "the family calm. It's been an exhausting few days.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "confront_embezzlement",
        topic_label: "Confront him about the estate account discrepancies",
        requires_evidence_id: "estate_embezzlement_note",
        requires_topic_ids: [],
        response:
          "...That's unrelated to any of this, but yes — I've been taking " +
          "small amounts to cover a personal debt for a few months now. I'm " +
          "deeply ashamed of it. But I would never, ever do anything to harm " +
          "this family, especially not Ishaan.",
        reaction: "breaks_down",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    sameer: [
      {
        topic_id: "ask_what_saw_sameer",
        topic_label: "Ask what he saw that night",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "He left around midnight, got into a car with a woman I've seen " +
          "him with plenty of times before. Nothing looked wrong — they were " +
          "both relaxed, no argument, no one forcing anything.",
        reaction: "calm",
        unlocks_evidence_ids: ["nightclub_witness_statement"],
        unlocks_topic_ids: []
      }
    ],
    golapi: [
      {
        topic_id: "ask_what_saw_golapi",
        topic_label: "Ask about the family's countryside cottage",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "A couple of evenings the week before he went missing, I noticed " +
          "lights on and a car parked there, even though it's meant to be " +
          "closed up for the season. I assumed a family member was using it " +
          "and just hadn't told me.",
        reaction: "calm",
        unlocks_evidence_ids: ["caretaker_statement"],
        unlocks_topic_ids: []
      }
    ]
  },

  evidence: [
    {
      id: "abandoned_car",
      type: "physical",
      name: "Ishaan's abandoned car",
      description:
        "Found neatly parked near the Maidan, doors unlocked, nothing " +
        "disturbed — no sign of a struggle.",
      location_found: "Maidan, Kolkata",
      relevance: "supporting",
      unlocks: [],
      image: null,
      unlocked_by_default: true
    },
    {
      id: "ransom_note",
      type: "document",
      name: "The ransom note",
      description:
        "A typed note delivered to the Bose family home demanding a large " +
        "cryptocurrency payment within 48 hours.",
      location_found: "Delivered to the Bose family home",
      relevance: "supporting",
      unlocks: [],
      image: null,
      unlocked_by_default: true
    },
    {
      id: "second_vehicle_tracks",
      type: "physical",
      name: "Second vehicle's tire tracks",
      description:
        "Tire tracks alongside where Ishaan's car was left, suggesting " +
        "another vehicle pulled up close by — consistent with a planned " +
        "meeting rather than an abduction.",
      location_found: "Maidan, Kolkata",
      relevance: "supporting",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "nightclub_witness_statement",
      type: "testimony",
      name: "Sameer's account of Ishaan leaving",
      description:
        "The valet's statement that Ishaan left willingly with a woman he " +
        "recognized, showing no distress or sign of coercion.",
      location_found: "Interview with Sameer",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "neha_financial_records",
      type: "document",
      name: "Neha's financial records",
      description:
        "Records showing Neha carrying substantial personal debt in the " +
        "months before the disappearance.",
      location_found: "Neha Kapoor's apartment, Golpark, Kolkata",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "crypto_wallet_trace",
      type: "digital",
      name: "Cryptocurrency wallet trace",
      description:
        "An analysis linking the wallet named in the ransom note to prior " +
        "transactions tied to Neha's known accounts.",
      location_found: "Neha Kapoor's apartment, Golpark, Kolkata",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "cottage_utility_records",
      type: "document",
      name: "Cottage utility records",
      description:
        "Billing records showing unusual electricity and water usage at the " +
        "family's countryside cottage in the days around the disappearance, " +
        "despite it being listed as closed for the season.",
      location_found: "Bose family estate, Elgin Road, Kolkata",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "caretaker_statement",
      type: "testimony",
      name: "Golapi's account of the cottage",
      description:
        "The caretaker's statement noticing lights and a car at the " +
        "supposedly vacant cottage in the days before Ishaan vanished.",
      location_found: "Interview with Golapi",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "proof_of_life_photo",
      type: "photo",
      name: "Proof-of-life photograph",
      description:
        "A photo sent to the family showing Ishaan unharmed, holding a " +
        "dated newspaper — the background matches the family's own " +
        "countryside cottage.",
      location_found: "Bose family estate, Elgin Road, Kolkata",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "gambling_debt_note",
      type: "document",
      name: "Record of Ishaan's gambling debt",
      description:
        "Personal notes among Ishaan's effects confirming a substantial " +
        "debt owed to Rohan Dey.",
      location_found: "Ishaan's personal effects, Bose family estate",
      relevance: "red_herring",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "rohan_alibi_confirmation",
      type: "testimony",
      name: "Rohan's alibi confirmation",
      description:
        "Confirmation that Rohan was at his cousin's engagement function, " +
        "surrounded by family, during the entire disappearance window.",
      location_found: "Interview with Rohan Dey",
      relevance: "supporting",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "estate_embezzlement_note",
      type: "document",
      name: "Estate account discrepancies",
      description:
        "Records showing small, recurring, unexplained shortfalls in the " +
        "Bose estate accounts over several months.",
      location_found: "Bose family estate, Elgin Road, Kolkata",
      relevance: "red_herring",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "rival_alibi",
      type: "testimony",
      name: "Kabir's alibi confirmation",
      description:
        "Confirmation that Kabir Oberoi was overseas at a shipping " +
        "conference during the entire disappearance window.",
      location_found: "Interview with Kabir Oberoi",
      relevance: "supporting",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    }
  ],

  locations: [
    {
      id: "maidan",
      name: "The Maidan",
      real_world_reference: "Maidan, Kolkata",
      description:
        "The large open urban park where Ishaan's car was found the morning " +
        "after he vanished.",
      examinable_details: [
        {
          id: "tire_tracks",
          text:
            "A closer look at the ground near where the car was found " +
            "reveals tire tracks from a second vehicle.",
          unlocks_evidence_ids: ["second_vehicle_tracks"]
        }
      ]
    },
    {
      id: "bose_estate",
      name: "Bose Family Estate",
      real_world_reference: "Elgin Road, Kolkata",
      description:
        "The Bose family home, where the ransom note and photo were " +
        "delivered, and where the family's financial and property records " +
        "are kept.",
      examinable_details: [
        {
          id: "ransom_photo_analysis",
          text:
            "The proof-of-life photo can be examined closely for background " +
            "details.",
          unlocks_evidence_ids: ["proof_of_life_photo"]
        },
        {
          id: "utility_billing_records",
          text: "Billing records for all the family's properties, including the countryside cottage.",
          unlocks_evidence_ids: ["cottage_utility_records"]
        },
        {
          id: "estate_accounts",
          text: "The estate's financial accounts, managed by Anand Verma.",
          unlocks_evidence_ids: ["estate_embezzlement_note"]
        },
        {
          id: "ishaan_personal_effects",
          text: "A box of Ishaan's personal papers and notes kept at the family home.",
          unlocks_evidence_ids: ["gambling_debt_note"]
        }
      ]
    },
    {
      id: "neha_apartment",
      name: "Neha Kapoor's Apartment",
      real_world_reference: "Golpark, Kolkata",
      description:
        "Neha's apartment, where her personal financial records are kept.",
      examinable_details: [
        {
          id: "bank_statements",
          text: "A stack of recent bank statements and overdue notices.",
          unlocks_evidence_ids: ["neha_financial_records"]
        },
        {
          id: "crypto_records",
          text: "Records of cryptocurrency wallet activity on her personal laptop.",
          unlocks_evidence_ids: ["crypto_wallet_trace"]
        }
      ]
    },
    {
      id: "remote_cottage",
      name: "The Diamond Harbour Cottage",
      real_world_reference: "Diamond Harbour, West Bengal",
      description:
        "The Bose family's countryside cottage, supposedly closed for the " +
        "season — and the place Ishaan has actually been hiding all along.",
      examinable_details: [
        {
          id: "recent_footprints",
          text:
            "Fresh footprints and tire marks around a property that's " +
            "supposed to have been empty for weeks.",
          unlocks_evidence_ids: []
        }
      ]
    }
  ],

  timeline: [
    { time: "Months earlier", event: "Ishaan's allowance is frozen following a public scandal.", public_knowledge: true },
    { time: "Recent weeks", event: "Both Ishaan's gambling debts and Neha's personal debts mount.", public_knowledge: false },
    { time: "The week before", event: "Neha begins quietly preparing the family's countryside cottage, seen by the caretaker.", public_knowledge: false },
    { time: "Midnight", event: "Ishaan leaves the nightclub and gets into Neha's car willingly.", public_knowledge: true },
    { time: "Later that night", event: "Ishaan's own car is left near the Maidan to stage the disappearance.", public_knowledge: true },
    { time: "10:00 AM (next day)", event: "The ransom note is delivered to the Bose family home.", public_knowledge: true },
    { time: "Following days", event: "The family scrambles to arrange the cryptocurrency payment while police investigate.", public_knowledge: true },
    { time: "During the investigation", event: "Financial and utility records begin pointing toward the countryside cottage.", public_knowledge: false }
  ],

  red_herrings: [
    {
      description:
        "Rohan Dey was owed a substantial gambling debt by Ishaan and had " +
        "seen him at the club earlier that same night.",
      why_it_misleads:
        "A financial motive plus recent proximity to the victim makes him an " +
        "easy first suspect.",
      how_its_debunked:
        "He was at his cousin's engagement function all night, confirmed by " +
        "dozens of family members, and left the club well before Ishaan did."
    },
    {
      description:
        "Kabir Oberoi recently lost a major contract to the Bose family's " +
        "company and has been openly bitter about it.",
      why_it_misleads:
        "A public business rivalry with real financial stakes makes him look " +
        "like someone with reason to target the family.",
      how_its_debunked:
        "He was overseas at an international conference for the entire " +
        "disappearance window, confirmed by colleagues and hotel records."
    },
    {
      description:
        "Anand Verma had direct access to the family's finances and was " +
        "closely involved in handling the ransom logistics.",
      why_it_misleads:
        "Access to money and a role at the center of the response make him " +
        "an easy person to suspect of orchestrating things from the inside.",
      how_its_debunked:
        "His financial secret — skimming small amounts from the estate " +
        "accounts — is real but entirely unrelated to Ishaan's disappearance, " +
        "and he was simply following the family's instructions throughout."
    }
  ],

  solution: {
    culprit_id: "neha",
    method:
      "Orchestrated a staged kidnapping with Ishaan's willing participation " +
      "— picking him up herself, hiding him at the family's own countryside " +
      "cottage, and writing and managing the ransom demand.",
    motive:
      "To relieve both her own mounting debts and Ishaan's, after his " +
      "allowance was frozen, believing his grandfather would quietly pay " +
      "rather than risk his grandson's safety or the family's reputation.",
    key_evidence_chain: [
      "nightclub_witness_statement",
      "neha_financial_records",
      "crypto_wallet_trace",
      "cottage_utility_records",
      "caretaker_statement",
      "proof_of_life_photo"
    ],
    full_explanation:
      "Ishaan Bose was never taken by anyone. Months of being cut off from " +
      "his family's money, on top of mounting gambling debts, left him " +
      "desperate — and his girlfriend Neha Kapoor, drowning in debts of her " +
      "own, saw a way to solve both problems at once.\n\n" +
      "In the week before the 'kidnapping,' Neha quietly prepared the Bose " +
      "family's own countryside cottage near Diamond Harbour, a property " +
      "closed for the season and unlikely to be checked. On the night in " +
      "question, Ishaan left the nightclub and got straight into her car, " +
      "calm and willing, exactly as the valet described. His own car was " +
      "left near the Maidan to manufacture the appearance of an abduction.\n\n" +
      "From there, Neha wrote and managed the ransom note herself, demanding " +
      "an untraceable cryptocurrency payment, gambling that Birendra Bose " +
      "would rather pay quietly than risk his grandson's life or the " +
      "family's reputation. A proof-of-life photo, meant to reassure the " +
      "family, ended up giving away the cottage's location to anyone who " +
      "looked closely at its background.\n\n" +
      "Rohan's debt, Kabir's rivalry, and Anand's access to the family's " +
      "finances all looked like plausible angles for a real kidnapping. But " +
      "none of them had any actual involvement — it was a caretaker's memory " +
      "of unexpected lights at a supposedly empty cottage, a financial trace " +
      "on a cryptocurrency wallet, and a witness who saw exactly how calmly " +
      "Ishaan left that night, that finally exposed the truth."
  },

  gamification: {
    hint_system: [
      "No one actually saw Ishaan taken by force. Consider whether he might " +
      "have left willingly.",
      "Follow the ransom payment method back to whoever set it up — and ask " +
      "who else had reason to want out of their own debts.",
      "Match the proof-of-life photo's background to one of the family's own " +
      "properties, and find out who's been visiting a cottage that's " +
      "supposed to be closed for the season."
    ],
    achievements: [
      "Realized this was a staged kidnapping without using a hint",
      "Cleared all three innocent suspects before making an accusation"
    ]
  }
};
