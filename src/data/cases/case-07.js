// src/data/cases/case-07.js
// Level 7 — "The Ballygunge Study" — an expert-difficulty murder staged as suicide.
// Drop this file in as-is; it matches the schema from the restructuring prompt.

export default {
  case_id: "case-07",
  level_number: 7,
  title: "The Ballygunge Study",
  case_type: "murder",
  difficulty: "expert",

  setting: {
    city: "Kolkata, India",
    date: "a Sunday evening in April",
    real_world_anchor: "Ballygunge, Kolkata"
  },

  police_briefing: {
    summary:
      "Arindam Sengupta, 61, founder of the respected Sengupta Publishing " +
      "House, was found hanging from a ceiling beam in the study of his " +
      "Ballygunge residence during a small family dinner. A typed suicide " +
      "note citing 'unbearable professional failure' lay on the desk. The " +
      "door was locked from the inside; a spare key under the mat explained " +
      "how the household eventually entered.\n\n" +
      "Given the note, the locked door, and his known recent stress over a " +
      "cancelled international rights deal, the death was first recorded as " +
      "suicide. The post-mortem changed everything: Arindam was already " +
      "dead from asphyxiation by plastic bag before the hanging was staged. " +
      "Ligature marks on the neck do not match the rope that held him, and " +
      "fine plastic residue was recovered from his mouth and nostrils.\n\n" +
      "Eight people had access to the house that evening — his wife, two " +
      "children, a son-in-law, a long-time business partner, his private " +
      "secretary, an old friend, and the family physician. Nearly all of " +
      "them had a reason to want him gone or to fear what he might reveal. " +
      "Work out who turned a locked study into a stage set, and why.",
    victim_or_target: {
      name: "Arindam Sengupta",
      age: 61,
      occupation: "Founder and chairman, Sengupta Publishing House",
      background:
        "Arindam built a mid-sized literary publishing house over three " +
        "decades, known for serious fiction and translation. In the months " +
        "before his death he had been negotiating a major international " +
        "rights package that suddenly collapsed. Privately he had also " +
        "discovered that someone inside the firm had been leaking " +
        "confidential manuscript details to a rival house, and he had begun " +
        "quietly gathering evidence. A new draft will, altering several " +
        "bequests, had been prepared but not yet signed.",
      last_known_movements:
        "Hosted a quiet family dinner. Excused himself to the study around " +
        "9:10 PM saying he needed to finish a letter. Found hanging roughly " +
        "fifty minutes later when his wife, concerned by the silence, used " +
        "the spare key."
    },
    incident_details: {
      location: "Study, Sengupta residence, Ballygunge Circular Road",
      time_estimate: "Between approximately 9:15 and 10:00 PM",
      cause_of_death_or_method:
        "Initially recorded as suicide by hanging. Post-mortem established " +
        "death by asphyxiation with a plastic bag; the hanging was staged " +
        "after death. Ligature marks and plastic residue confirm the true " +
        "sequence.",
      initial_state_of_scene:
        "Body suspended from a ceiling beam by a length of nylon rope. " +
        "Typed suicide note on the desk. Door locked from inside. No " +
        "obvious signs of struggle. The scene looked textbook until the " +
        "forensic pathologist examined the neck and the residual film in " +
        "the airways."
    }
  },

  suspects: [
    {
      id: "anjali",
      name: "Anjali Sengupta",
      role_in_victims_life: "Wife of thirty-four years",
      alibi:
        "Says she remained in the dining room and drawing room with the " +
        "other guests until she grew worried and went to check on him.",
      true_whereabouts:
        "Exactly as claimed — she never left the common rooms during the " +
        "critical window.",
      motive:
        "Had recently learned Arindam intended to reduce her share of the " +
        "estate in favour of a new literary trust; she feared financial " +
        "insecurity after decades of marriage.",
      motive_strength: "moderate",
      personality: [
        "composed, protective of the family's public dignity",
        "quietly resentful of being sidelined in financial decisions",
        "becomes precise rather than emotional under pressure"
      ],
      secrets: [
        "Found and read an early draft of the new will two weeks earlier"
      ],
      guilty: false,
      relationship_to_other_suspects:
        "Mother of Tarun and Rhea; mother-in-law of Vikram; cordial with " +
        "the rest of the household.",
      portrait_image: null
    },
    {
      id: "tarun",
      name: "Tarun Sengupta",
      role_in_victims_life: "Only son; works in the family publishing house",
      alibi:
        "Says he stepped onto the rear terrace for a cigarette and a phone " +
        "call lasting the entire window, confirmed by call records.",
      true_whereabouts:
        "On the terrace exactly as claimed; call metadata and a neighbour's " +
        "glimpse of him on the phone corroborate it.",
      motive:
        "Arindam had discovered Tarun had been skimming advances meant for " +
        "authors and had threatened to remove him from the company and the " +
        "will.",
      motive_strength: "strong",
      personality: [
        "charming in public, brittle when cornered",
        "quick to justify himself with technical explanations",
        "genuinely ambitious about the publishing house despite his theft"
      ],
      secrets: [
        "Has been diverting author-advance funds into a personal account for " +
        "eighteen months"
      ],
      guilty: false,
      relationship_to_other_suspects:
        "Son of Anjali; brother of Rhea; tense with Vikram over business " +
        "influence.",
      portrait_image: null
    },
    {
      id: "rhea",
      name: "Rhea Sengupta Das",
      role_in_victims_life: "Daughter; runs the house's digital imprint",
      alibi:
        "Says she was in the kitchen helping the cook clear plates and " +
        "prepare dessert the entire time.",
      true_whereabouts:
        "In the kitchen exactly as claimed, confirmed by the cook and by " +
        "timestamps on the household intercom.",
      motive:
        "Feared the new literary trust would starve the digital imprint she " +
        "had built of capital and effectively end her role in the firm.",
      motive_strength: "moderate",
      personality: [
        "direct, protective of her professional identity",
        "resentful of being treated as the 'junior' child",
        "honest once the emotional temperature drops"
      ],
      secrets: [
        "Had already approached an outside investor about spinning the " +
        "digital imprint into an independent company"
      ],
      guilty: false,
      relationship_to_other_suspects:
        "Daughter of Anjali; sister of Tarun; married to Vikram.",
      portrait_image: null
    },
    {
      id: "vikram",
      name: "Vikram Das",
      role_in_victims_life: "Son-in-law; married to Rhea",
      alibi:
        "Says he was in the drawing room discussing cricket with the family " +
        "friend for the whole window.",
      true_whereabouts:
        "In the drawing room exactly as claimed, witnessed by Ravi " +
        "Mukherjee and by Anjali.",
      motive:
        "Recently learned that Arindam intended to exclude him from any " +
        "future board role; also anxious about his own mounting personal " +
        "debts.",
      motive_strength: "weak",
      personality: [
        "affable, slightly over-eager to please",
        "privately anxious about money and status",
        "avoids direct confrontation"
      ],
      secrets: [
        "Carries substantial credit-card and informal-lender debt he has " +
        "hidden from Rhea"
      ],
      guilty: false,
      relationship_to_other_suspects:
        "Married to Rhea; polite but distant with Tarun.",
      portrait_image: null
    },
    {
      id: "sameer",
      name: "Sameer Ghosh",
      role_in_victims_life: "Long-time business partner and co-director",
      alibi:
        "Says he arrived late, stayed only briefly in the dining room, then " +
        "left the house to take an urgent call from Singapore, returning " +
        "after the body was found.",
      true_whereabouts:
        "Left the house as claimed; phone records and the building's gate " +
        "log confirm he was outside during the critical window.",
      motive:
        "Arindam had begun questioning certain royalty statements Sameer " +
        "had prepared and was preparing to commission an independent audit.",
      motive_strength: "moderate",
      personality: [
        "polished, slightly defensive about numbers",
        "values reputation above almost everything",
        "cooperative once he realises the stakes are higher than money"
      ],
      secrets: [
        "Has been inflating certain overseas royalty figures for three years"
      ],
      guilty: false,
      relationship_to_other_suspects:
        "Professional only; cordial with the family, no personal ties to " +
        "the others beyond business.",
      portrait_image: null
    },
    {
      id: "meera",
      name: "Meera Sen",
      role_in_victims_life: "Private secretary and gatekeeper for twelve years",
      alibi:
        "Says she remained in the small office off the hallway organising " +
        "the next week's correspondence and never entered the study.",
      true_whereabouts:
        "She entered the study shortly after Arindam, killed him with a " +
        "plastic bag, staged the hanging, typed the note on his own " +
        "machine, locked the door from inside, and left by the side " +
        "veranda window she had unlocked earlier.",
      motive:
        "Arindam had discovered she was the source of the manuscript leaks " +
        "to a rival house and had confronted her privately that afternoon, " +
        "giving her forty-eight hours to resign and make a full written " +
        "confession or face criminal charges and public exposure.",
      motive_strength: "strong",
      personality: [
        "quietly efficient, almost invisible in a room",
        "becomes tightly controlled rather than emotional under pressure",
        "deeply invested in the professional identity she has built"
      ],
      secrets: [
        "Has been selling advance manuscript details and author contact " +
        "lists to a rival publisher for nearly two years",
        "Was given an ultimatum by Arindam the afternoon of the murder"
      ],
      guilty: true,
      relationship_to_other_suspects:
        "Professional only; trusted by the entire family, no personal " +
        "entanglements with any of them.",
      portrait_image: null
    },
    {
      id: "ravi",
      name: "Ravi Mukherjee",
      role_in_victims_life: "Old school friend and occasional advisor",
      alibi:
        "Says he spent the evening in the drawing room talking cricket and " +
        "old times with Vikram and later with Anjali.",
      true_whereabouts:
        "In the drawing room exactly as claimed, confirmed by both Vikram " +
        "and Anjali.",
      motive:
        "Years earlier Arindam had blocked Ravi from a board seat at another " +
        "firm; residual bitterness remains, though muted.",
      motive_strength: "weak",
      personality: [
        "warm, nostalgic, slightly garrulous",
        "quick to reminisce about old grievances",
        "fundamentally loyal once trust is established"
      ],
      secrets: [
        "Still carries quiet resentment over the blocked board seat"
      ],
      guilty: false,
      relationship_to_other_suspects:
        "Long-time family friend; easy with everyone present.",
      portrait_image: null
    },
    {
      id: "ashok",
      name: "Dr. Ashok Patel",
      role_in_victims_life: "Family physician for fifteen years",
      alibi:
        "Says he arrived after dinner solely to drop off a renewed " +
        "prescription, stayed ten minutes in the dining room, and left " +
        "before Arindam went to the study.",
      true_whereabouts:
        "Left the house as claimed; gate log and his own clinic's evening " +
        "roster confirm the timing.",
      motive:
        "None material; he had no financial or professional stake in " +
        "Arindam's death.",
      motive_strength: "none",
      personality: [
        "calm, clinically precise",
        "slightly offended at being treated as a suspect",
        "helpful once the medical questions turn serious"
      ],
      secrets: [],
      guilty: false,
      relationship_to_other_suspects:
        "Professional only; respected by the family, no deeper ties.",
      portrait_image: null
    }
  ],

  witnesses: [
    {
      id: "kamala",
      name: "Kamala",
      connection_to_case: "Long-serving cook and housekeeper",
      reliability: "reliable",
      what_they_actually_saw:
        "Confirms Rhea was in the kitchen the entire critical window. Also " +
        "recalls seeing Meera slip out toward the side veranda around 9:20 " +
        "PM carrying a thin folder, something she thought nothing of at the " +
        "time because Meera often worked late.",
      what_they_will_initially_claim:
        "The same — she mentions Meera's movement only when asked about " +
        "anyone leaving the main rooms.",
      personality: [
        "observant about household routines",
        "loyal to the family, slightly nervous with police",
        "precise once she understands the importance of timing"
      ],
      portrait_image: null
    },
    {
      id: "gatekeeper",
      name: "Haripada",
      connection_to_case: "Night gatekeeper for the residential complex",
      reliability: "reliable",
      what_they_actually_saw:
        "Logged Sameer Ghosh leaving at 9:18 PM and returning at 10:25 PM, " +
        "and Dr. Patel leaving at 9:05 PM. Noticed nothing unusual about " +
        "the side veranda from the street.",
      what_they_will_initially_claim:
        "The same — the gate log is routine and he has no reason to alter " +
        "it.",
      personality: [
        "methodical about the log book",
        "not naturally curious about residents' private affairs",
        "cooperative and literal"
      ],
      portrait_image: null
    }
  ],

  dialogue: {
    anjali: [
      {
        topic_id: "ask_relationship_anjali",
        topic_label: "Ask about her marriage and the evening",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "We had been married thirty-four years. He was under strain over " +
          "the rights deal, but he was not a man who would take his own life. " +
          "I still cannot believe it.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_that_night_anjali",
        topic_label: "Ask where she was during the critical window",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "In the dining room and then the drawing room with the others. I " +
          "never left those rooms until I went to check on him with the " +
          "spare key.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_will_concerns_anjali",
        topic_label: "Ask about the draft will",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "I found an early draft. He intended to move a substantial portion " +
          "into a literary trust. It frightened me — after a lifetime, to be " +
          "left less secure. But I never wished him harm.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    tarun: [
      {
        topic_id: "ask_relationship_tarun",
        topic_label: "Ask about his relationship with his father",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "He was hard on me, but I respected him. The publishing house was " +
          "his life. I wanted to prove I could carry it forward.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_that_night_tarun",
        topic_label: "Ask where he was that night",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "On the rear terrace, smoking and on a long call. The phone " +
          "records will show the exact minutes. A neighbour even saw me.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "confront_skimming",
        topic_label: "Confront him with the diverted advance funds",
        requires_evidence_id: "tarun_skimming_records",
        requires_topic_ids: [],
        response:
          "He found out. We argued two days before. He threatened to cut me " +
          "out of the company and the will. I was terrified, but I was on " +
          "that terrace the whole time. I never went near the study.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: ["confront_disinheritance_tarun"]
      },
      {
        topic_id: "confront_disinheritance_tarun",
        topic_label: "Press him on the disinheritance threat",
        requires_evidence_id: "father_note_tarun",
        requires_topic_ids: ["confront_skimming"],
        response:
          "Yes, the note is real. He meant it. Being angry and ashamed is " +
          "not the same as killing him. My alibi is solid.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    rhea: [
      {
        topic_id: "ask_relationship_rhea",
        topic_label: "Ask about her relationship with her father",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "I loved him, but I often felt the digital imprint was treated as " +
          "a side project. I wanted him to take it seriously.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_that_night_rhea",
        topic_label: "Ask where she was that night",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "In the kitchen with Kamala the entire time, clearing and " +
          "preparing dessert. She will tell you the same.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_imprint_fears",
        topic_label: "Ask about the future of the digital imprint",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "The new trust would have starved it of capital. I had even spoken " +
          "to an outside investor about spinning it out. That is not the " +
          "same as wanting my father dead.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    vikram: [
      {
        topic_id: "ask_relationship_vikram",
        topic_label: "Ask about his place in the family",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "Arindam was always polite to me, but I knew he never fully " +
          "accepted me as part of the business. It stung.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_that_night_vikram",
        topic_label: "Ask where he was that night",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "In the drawing room talking cricket with Ravi Mukherjee. Anjali " +
          "was there for part of it as well. I never left that room.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_debts_vikram",
        topic_label: "Ask about his personal finances",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "I have some debts, yes. I have kept them from Rhea. They have " +
          "nothing to do with what happened to Arindam.",
        reaction: "evasive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    sameer: [
      {
        topic_id: "ask_partnership",
        topic_label: "Ask about the business partnership",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "We built the firm together. Recently he had begun asking sharp " +
          "questions about certain royalty statements. I found it " +
          "uncomfortable, but partners argue.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_that_night_sameer",
        topic_label: "Ask where he was that night",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "I arrived late, stayed only a short while, then had to step out " +
          "for an urgent Singapore call. The gate log will show I left at " +
          "9:18 and returned after everything was already over.",
        reaction: "calm",
        unlocks_evidence_ids: ["gate_log_sameer"],
        unlocks_topic_ids: []
      },
      {
        topic_id: "confront_royalties",
        topic_label: "Confront him about the inflated royalty figures",
        requires_evidence_id: "royalty_audit_notes",
        requires_topic_ids: [],
        response:
          "The figures were... optimistic. He had noticed. An independent " +
          "audit would have been painful, but I would never have harmed " +
          "him over it. I was outside the house.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    meera: [
      {
        topic_id: "ask_role_meera",
        topic_label: "Ask about her work as private secretary",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "I have managed Arindam's correspondence, travel and confidential " +
          "files for twelve years. He trusted me with a great deal.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_that_night_meera",
        topic_label: "Ask where she was that night",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "In the small office off the hallway, organising the coming week's " +
          "letters. I never entered the study after he went in.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "confront_leaks",
        topic_label: "Confront her with the manuscript-leak evidence",
        requires_evidence_id: "leak_payment_records",
        requires_topic_ids: [],
        response:
          "Those payments are from a freelance indexing job I did years ago. " +
          "They have nothing to do with any rival house.",
        reaction: "evasive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: ["confront_ultimatum"]
      },
      {
        topic_id: "confront_ultimatum",
        topic_label: "Confront her with Arindam's private ultimatum",
        requires_evidence_id: "ultimatum_letter",
        requires_topic_ids: ["confront_leaks"],
        response:
          "He spoke to me that afternoon, yes. He was angry. I needed time " +
          "to think. That is all.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: ["confront_plastic_residue"]
      },
      {
        topic_id: "confront_plastic_residue",
        topic_label: "Confront her with the plastic residue and staging evidence",
        requires_evidence_id: "plastic_bag_residue",
        requires_topic_ids: ["confront_ultimatum"],
        response:
          "I don't know anything about plastic bags. The study was locked. " +
          "How could I have been inside?",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: ["confront_veranda"]
      },
      {
        topic_id: "confront_veranda",
        topic_label: "Confront her with the side-veranda window and Kamala's sighting",
        requires_evidence_id: "veranda_window_forensics",
        requires_topic_ids: ["confront_plastic_residue"],
        response:
          "...He gave me forty-eight hours to resign and confess in writing " +
          "or he would go to the police and the press. Everything I had " +
          "built would have been destroyed. I went in after him. I used a " +
          "bag from the stationery cupboard. When it was over I hung him " +
          "with the rope he kept for the old ceiling fan, typed the note on " +
          "his machine, locked the door, and left by the veranda window I " +
          "had opened earlier. I never meant for anyone else to be hurt. I " +
          "only wanted the threat to end.",
        reaction: "breaks_down",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    ravi: [
      {
        topic_id: "ask_friendship_ravi",
        topic_label: "Ask about his long friendship with Arindam",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "We were school friends. He blocked me from a board seat years " +
          "ago and I carried that for a long time, but we had made our " +
          "peace. I was glad to be invited that evening.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_that_night_ravi",
        topic_label: "Ask where he was that night",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "In the drawing room the whole time, talking cricket with Vikram " +
          "and later with Anjali. I never went near the study wing.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    ashok: [
      {
        topic_id: "ask_role_ashok",
        topic_label: "Ask about his role as family physician",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "I have looked after Arindam and the family for fifteen years. I " +
          "came only to drop a renewed prescription and left before he went " +
          "to the study.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_that_night_ashok",
        topic_label: "Ask about the timing of his visit",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "Gate log and my clinic roster both show I left by 9:05. I was " +
          "not in the house when whatever happened, happened.",
        reaction: "calm",
        unlocks_evidence_ids: ["gate_log_ashok"],
        unlocks_topic_ids: []
      }
    ],
    kamala: [
      {
        topic_id: "ask_what_saw_kamala",
        topic_label: "Ask what she noticed that evening",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "Rhea was with me in the kitchen the whole time, I can swear to " +
          "that. I also saw Meera go toward the side veranda around twenty " +
          "past nine, carrying a thin folder. I thought she was just working " +
          "late, the way she often did.",
        reaction: "calm",
        unlocks_evidence_ids: ["kamala_witness_statement"],
        unlocks_topic_ids: []
      }
    ],
    gatekeeper: [
      {
        topic_id: "ask_what_saw_gatekeeper",
        topic_label: "Ask about the gate log that evening",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "Mr. Ghosh left at 9:18 and came back at 10:25. Dr. Patel left at " +
          "9:05. No other unusual movements through the main gate.",
        reaction: "calm",
        unlocks_evidence_ids: ["gate_log_full"],
        unlocks_topic_ids: []
      }
    ]
  },

  evidence: [
    {
      id: "suicide_note",
      type: "document",
      name: "Typed suicide note",
      description:
        "A short typed note found on the study desk citing 'unbearable " +
        "professional failure' and asking the family to forgive him.",
      location_found: "Study desk, Sengupta residence",
      relevance: "supporting",
      unlocks: [],
      image: null,
      unlocked_by_default: true
    },
    {
      id: "hanging_rope",
      type: "physical",
      name: "Nylon rope used in the hanging",
      description:
        "Length of nylon rope found around the neck and secured to the " +
        "ceiling beam; later shown not to match the primary ligature marks.",
      location_found: "Study, Sengupta residence",
      relevance: "supporting",
      unlocks: [],
      image: null,
      unlocked_by_default: true
    },
    {
      id: "postmortem_report",
      type: "forensic",
      name: "Post-mortem and toxicology report",
      description:
        "Establishes death by asphyxiation with a plastic bag prior to " +
        "hanging; ligature marks inconsistent with the rope; plastic " +
        "residue in airways.",
      location_found: "Forensic pathology laboratory",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "plastic_bag_residue",
      type: "forensic",
      name: "Plastic residue analysis",
      description:
        "Laboratory match between residue recovered from the victim's " +
        "airways and a type of clear stationery bag kept in the household " +
        "office cupboard.",
      location_found: "Study and household office, Sengupta residence",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "ultimatum_letter",
      type: "document",
      name: "Arindam's private ultimatum to Meera",
      description:
        "A handwritten draft letter found among Arindam's papers giving " +
        "Meera Sen forty-eight hours to resign and confess the leaks or " +
        "face police and public exposure.",
      location_found: "Locked drawer, study desk",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "leak_payment_records",
      type: "digital",
      name: "Payments linked to manuscript leaks",
      description:
        "Bank and messaging records tying Meera Sen to repeated payments " +
        "from a rival publishing house timed to manuscript submissions.",
      location_found: "Meera Sen's laptop and personal accounts",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "veranda_window_forensics",
      type: "forensic",
      name: "Side-veranda window examination",
      description:
        "Scuff marks, disturbed dust, and a partial print consistent with " +
        "someone exiting via the side veranda window after the study door " +
        "was locked from inside.",
      location_found: "Side veranda, Sengupta residence",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "tarun_skimming_records",
      type: "document",
      name: "Records of diverted author advances",
      description:
        "Internal ledgers and bank traces showing Tarun Sengupta moving " +
        "author-advance funds into a personal account over eighteen months.",
      location_found: "Sengupta Publishing House accounts office",
      relevance: "red_herring",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "father_note_tarun",
      type: "document",
      name: "Arindam's note on Tarun",
      description:
        "A private note in Arindam's hand stating his intention to remove " +
        "Tarun from the company and alter the will if the skimming was not " +
        "repaid.",
      location_found: "Study desk papers",
      relevance: "red_herring",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "royalty_audit_notes",
      type: "document",
      name: "Notes preparing an independent royalty audit",
      description:
        "Arindam's handwritten notes outlining discrepancies in overseas " +
        "royalty statements prepared by Sameer Ghosh and his plan to " +
        "commission an outside auditor.",
      location_found: "Study desk papers",
      relevance: "red_herring",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "kamala_witness_statement",
      type: "testimony",
      name: "Kamala's account of the evening",
      description:
        "Confirms Rhea's continuous presence in the kitchen and notes Meera " +
        "moving toward the side veranda around 9:20 PM with a folder.",
      location_found: "Interview with Kamala",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "gate_log_sameer",
      type: "document",
      name: "Gate log entry for Sameer Ghosh",
      description:
        "Confirms Sameer left at 9:18 PM and returned at 10:25 PM.",
      location_found: "Complex gate log book",
      relevance: "supporting",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "gate_log_ashok",
      type: "document",
      name: "Gate log entry for Dr. Patel",
      description:
        "Confirms Dr. Ashok Patel left the complex at 9:05 PM.",
      location_found: "Complex gate log book",
      relevance: "supporting",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "gate_log_full",
      type: "document",
      name: "Complete evening gate log",
      description:
        "Full extract of the gate log covering all arrivals and departures " +
        "between 8:00 PM and 11:00 PM.",
      location_found: "Complex gate log book",
      relevance: "supporting",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "stationery_cupboard",
      type: "physical",
      name: "Household stationery cupboard inventory",
      description:
        "Shows a box of clear plastic bags of the exact type matching the " +
        "airway residue; one bag missing from the count.",
      location_found: "Small office off the hallway",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    }
  ],

  locations: [
    {
      id: "study",
      name: "Arindam's Study",
      real_world_reference: "Ballygunge Circular Road, Kolkata",
      description:
        "The locked study where the body was found, still under forensic " +
        "processing.",
      examinable_details: [
        {
          id: "neck_and_airway",
          text:
            "Detailed examination of ligature marks and residual material in " +
            "the airways can be requested from the pathologist.",
          unlocks_evidence_ids: ["postmortem_report", "plastic_bag_residue"]
        },
        {
          id: "desk_drawer",
          text: "A locked drawer in the study desk holds recent personal papers.",
          unlocks_evidence_ids: ["ultimatum_letter", "father_note_tarun", "royalty_audit_notes"]
        },
        {
          id: "rope_and_beam",
          text: "The rope and the beam attachment can be compared against the neck injuries.",
          unlocks_evidence_ids: []
        }
      ]
    },
    {
      id: "side_veranda",
      name: "Side Veranda",
      real_world_reference: "Ballygunge Circular Road, Kolkata",
      description:
        "A narrow side veranda running along the study wing, with a window " +
        "that can be opened from inside.",
      examinable_details: [
        {
          id: "window_sill",
          text:
            "Dust, scuff marks and a partial print on the sill indicate " +
            "recent exit through the window.",
          unlocks_evidence_ids: ["veranda_window_forensics"]
        }
      ]
    },
    {
      id: "small_office",
      name: "Household Office / Stationery Room",
      real_world_reference: "Ballygunge Circular Road, Kolkata",
      description:
        "The small office off the hallway where Meera normally worked and " +
        "where household stationery is stored.",
      examinable_details: [
        {
          id: "cupboard_inventory",
          text: "The stationery cupboard can be inventoried against purchase records.",
          unlocks_evidence_ids: ["stationery_cupboard"]
        }
      ]
    },
    {
      id: "publishing_house",
      name: "Sengupta Publishing House Offices",
      real_world_reference: "Park Street area, Kolkata",
      description:
        "The firm's offices, where financial and editorial records are kept.",
      examinable_details: [
        {
          id: "accounts_ledgers",
          text: "Internal ledgers and author-advance payment records.",
          unlocks_evidence_ids: ["tarun_skimming_records"]
        },
        {
          id: "meera_workstation",
          text: "Meera's workstation and the laptop she used for correspondence.",
          unlocks_evidence_ids: ["leak_payment_records"]
        }
      ]
    },
    {
      id: "complex_gate",
      name: "Residential Complex Gate",
      real_world_reference: "Ballygunge, Kolkata",
      description:
        "The staffed gate controlling vehicle and foot access to the " +
        "residential complex.",
      examinable_details: [
        {
          id: "log_book",
          text: "The handwritten gate log for the evening can be examined.",
          unlocks_evidence_ids: ["gate_log_full"]
        }
      ]
    }
  ],

  timeline: [
    { time: "Afternoon of the same day", event: "Arindam confronts Meera privately and delivers a forty-eight-hour ultimatum.", public_knowledge: false },
    { time: "8:00 PM", event: "Family dinner begins; guests include Anjali, Tarun, Rhea, Vikram, Sameer, Ravi and Dr. Patel.", public_knowledge: true },
    { time: "9:05 PM", event: "Dr. Patel leaves after dropping the prescription.", public_knowledge: true },
    { time: "9:10 PM", event: "Arindam excuses himself to the study to 'finish a letter'.", public_knowledge: true },
    { time: "9:15–9:25 PM", event: "Meera enters the study, kills Arindam with a plastic bag, stages the hanging and types the note.", public_knowledge: false },
    { time: "9:18 PM", event: "Sameer Ghosh leaves the house for an external call.", public_knowledge: true },
    { time: "~9:20 PM", event: "Kamala sees Meera moving toward the side veranda with a folder.", public_knowledge: false },
    { time: "9:25–9:30 PM", event: "Meera exits via the side-veranda window and returns to the small office.", public_knowledge: false },
    { time: "9:30–10:00 PM", event: "Household continues as normal; Tarun on terrace, Rhea in kitchen, others in drawing room.", public_knowledge: true },
    { time: "~10:00 PM", event: "Anjali grows concerned, uses the spare key, discovers the body.", public_knowledge: true },
    { time: "Following days", event: "Post-mortem overturns the suicide ruling and a full investigation begins.", public_knowledge: true }
  ],

  red_herrings: [
    {
      description:
        "Tarun had been caught skimming author advances and had been " +
        "threatened with removal from the company and the will.",
      why_it_misleads:
        "A strong, immediate financial and familial motive makes him the " +
        "most obvious suspect.",
      how_its_debunked:
        "Call records and a neighbour's sighting place him on the rear " +
        "terrace for the entire critical window."
    },
    {
      description:
        "Anjali had read a draft will that would have reduced her share in " +
        "favour of a literary trust.",
      why_it_misleads:
        "Fear of financial insecurity after a long marriage looks like a " +
        "classic domestic motive.",
      how_its_debunked:
        "She remained in the common rooms the entire time, confirmed by " +
        "multiple people."
    },
    {
      description:
        "Rhea feared the new trust would destroy the digital imprint she " +
        "had built and had already spoken to an outside investor.",
      why_it_misleads:
        "Professional survival plus secret external talks suggest " +
        "premeditation.",
      how_its_debunked:
        "Kamala and intercom timestamps keep her in the kitchen throughout."
    },
    {
      description:
        "Sameer faced an imminent independent audit of royalty statements " +
        "he had inflated.",
      why_it_misleads:
        "Exposure of long-running financial misstatement is a powerful " +
        "motive.",
      how_its_debunked:
        "Gate log proves he left the house at 9:18 PM and did not return " +
        "until after the body was found."
    },
    {
      description:
        "Vikram carried hidden personal debts and knew he was to be excluded " +
        "from any future board role.",
      why_it_misleads:
        "Money trouble plus status anxiety can look like motive.",
      how_its_debunked:
        "He remained in the drawing room with Ravi and later Anjali."
    },
    {
      description:
        "Ravi still nursed resentment over a board seat Arindam had blocked " +
        "years earlier.",
      why_it_misleads:
        "An old grudge resurfacing at a private dinner can appear " +
        "suspicious.",
      how_its_debunked:
        "Continuous presence in the drawing room is confirmed by two other " +
        "people."
    },
    {
      description:
        "Dr. Patel had medical knowledge and easy access to the household.",
      why_it_misleads:
        "A doctor is an easy person to imagine staging a medical-looking " +
        "death.",
      how_its_debunked:
        "Gate log and clinic roster show he left at 9:05 PM, before " +
        "Arindam even entered the study."
    }
  ],

  solution: {
    culprit_id: "meera",
    method:
      "Entered the study after Arindam, asphyxiated him with a clear " +
      "plastic stationery bag, staged the hanging with rope already present " +
      "in the room, typed a short suicide note on his machine, locked the " +
      "door from inside, and left through a side-veranda window she had " +
      "prepared earlier.",
    motive:
      "To silence the only person who knew she had been selling confidential " +
      "manuscript details and author lists to a rival publisher, after he " +
      "confronted her that afternoon and gave her forty-eight hours to " +
      "resign and confess or face criminal charges and public ruin.",
    key_evidence_chain: [
      "postmortem_report",
      "plastic_bag_residue",
      "ultimatum_letter",
      "leak_payment_records",
      "veranda_window_forensics",
      "kamala_witness_statement",
      "stationery_cupboard"
    ],
    full_explanation:
      "Every member of the immediate circle had a reason to fear or resent " +
      "Arindam Sengupta that night — a will about to change, theft about to " +
      "be exposed, an imprint about to be starved, royalty figures about to " +
      "be audited, debts and old grudges. And every one of them has an alibi " +
      "that survives scrutiny.\n\n" +
      "The person who actually killed him was the one who had spent twelve " +
      "years being trusted without question. Meera Sen had been selling " +
      "advance manuscript details and contact lists to a rival house for " +
      "nearly two years. On the afternoon of the murder Arindam confronted " +
      "her with the evidence and gave her forty-eight hours to resign and " +
      "produce a written confession, or he would go to the police and the " +
      "press.\n\n" +
      "That evening, after he excused himself to the study, she followed. " +
      "She used a clear plastic bag from the stationery cupboard she " +
      "herself managed, held it until he was dead, then hung the body with " +
      "rope kept for the old ceiling fan, typed a brief suicide note, locked " +
      "the door from the inside, and left by the side-veranda window she " +
      "had unlocked earlier. Kamala saw her moving toward that veranda with " +
      "a folder and thought nothing of it.\n\n" +
      "The locked door, the note, and the apparent hanging almost worked. " +
      "What they could not hide was the sequence revealed by the " +
      "post-mortem: death by plastic-bag asphyxiation first, hanging only " +
      "afterward. Once the residue was matched to the household stationery, " +
      "the ultimatum letter was found, the leak payments were traced, and " +
      "the veranda window was examined, the stage-set collapsed."
  },

  gamification: {
    hint_system: [
      "The door was locked from the inside and a suicide note was waiting " +
      "— yet the body was already dead before the rope went around the " +
      "neck. Start with what the post-mortem actually shows.",
      "Everyone in the family and the inner circle has a motive and an " +
      "alibi. The person who had the most to lose if Arindam spoke was the " +
      "one he trusted to handle his most confidential papers.",
      "Match the plastic residue to the household stationery, then find " +
      "who was given a forty-eight-hour ultimatum the same afternoon and " +
      "who was seen moving toward the side veranda just after he entered " +
      "the study."
    ],
    achievements: [
      "Cleared all seven innocent suspects before making an accusation",
      "Solved the staged-suicide case without using a single hint"
    ]
  }
};
