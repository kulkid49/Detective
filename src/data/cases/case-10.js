// src/data/cases/case-10.js
// Level 10 — "The Alipore Sonata" — an expert-difficulty murder with 9 suspects.
// Drop this file in as-is; it matches the schema from the restructuring prompt.

export default {
  case_id: "case-10",
  level_number: 10,
  title: "The Alipore Sonata",
  case_type: "murder",
  difficulty: "expert",

  setting: {
    city: "Kolkata, India",
    date: "a Saturday evening in July",
    real_world_anchor: "Alipore, Kolkata"
  },

  police_briefing: {
    summary:
      "Arunava Sen, 68, industrialist, philanthropist and accomplished " +
      "amateur cellist, was found dead in the music room of his Alipore " +
      "mansion during a private evening of chamber music. He had stepped " +
      "away after the first piece to rest and take his medication; when the " +
      "others came to call him for the second half he was slumped in his " +
      "armchair, a glass of diluted wine at his side.\n\n" +
      "Given his age, known cardiac history and the absence of any obvious " +
      "trauma, the death was first recorded as natural. Toxicology changed " +
      "that: a fatal dose of a short-acting muscle relaxant — not part of " +
      "his prescribed regimen — had been introduced into the wine. The " +
      "relaxant is available only through hospital and specialist channels " +
      "and leaves almost no taste in diluted form.\n\n" +
      "Nine people were inside the house that evening: his wife, his son, " +
      "his daughter, his son-in-law, his long-time business partner, his " +
      "personal physician, a young cello protégé, a rival industrialist " +
      "invited as a gesture of reconciliation, and the household's " +
      "long-serving secretary-manager. Almost every one of them had a reason " +
      "to fear what Arunava still intended to do — or to reveal — in the " +
      "coming days. Work out who had both the motive and the private " +
      "opportunity to add the dose.",
    victim_or_target: {
      name: "Arunava Sen",
      age: 68,
      occupation: "Industrialist, philanthropist, amateur cellist",
      background:
        "Built a mid-sized engineering and logistics group over four " +
        "decades. In recent months he had discovered significant " +
        "procurement irregularities inside the company and had begun " +
        "quietly assembling evidence with the intention of presenting it " +
        "to the board the following Monday. He had also been revising his " +
        "will and a set of charitable bequests that would alter several " +
        "expected inheritances. A private chamber evening had been arranged " +
        "as a rare social gesture; the guest list was small and deliberate.",
      last_known_movements:
        "Hosted the first piece of the programme in the music room. " +
        "Excused himself around 9:10 PM saying he needed to rest and take " +
        "his evening medication. Found unresponsive in the same armchair " +
        "at approximately 9:45 PM when the others came to resume."
    },
    incident_details: {
      location: "Music room, Sen mansion, Alipore",
      time_estimate: "Between 9:15 and 9:40 PM",
      cause_of_death_or_method:
        "Initially assumed a natural cardiac event. Toxicology established " +
        "a fatal dose of a short-acting muscle relaxant introduced into his " +
        "diluted evening wine.",
      initial_state_of_scene:
        "Body seated in the music-room armchair, glass of diluted wine on " +
        "the side table, medication case open on the nearby cabinet. No " +
        "signs of struggle. The room otherwise undisturbed."
    }
  },

  suspects: [
    {
      id: "malini",
      name: "Malini Sen",
      role_in_victims_life: "Wife of thirty-eight years",
      alibi:
        "Says she remained in the drawing room with the other guests after " +
        "the first piece, waiting for Arunava to return.",
      true_whereabouts:
        "In the drawing room exactly as claimed; multiple people confirm " +
        "continuous presence.",
      motive:
        "Had learned that the revised will would move a substantial portion " +
        "of the estate into a new educational trust, reducing her lifetime " +
        "security.",
      motive_strength: "moderate",
      personality: [
        "composed, protective of the family's public face",
        "quietly resentful of being informed of major decisions after the " +
        "fact",
        "precise rather than emotional under pressure"
      ],
      secrets: [
        "Found and read an early draft of the revised will two weeks earlier"
      ],
      guilty: false,
      relationship_to_other_suspects:
        "Mother of Kabir and Ananya; mother-in-law of Vikram; hostess to " +
        "the remaining guests.",
      portrait_image: null
    },
    {
      id: "kabir",
      name: "Kabir Sen",
      role_in_victims_life: "Only son; works in the family company",
      alibi:
        "Says he stepped onto the east terrace for a cigarette and a phone " +
        "call lasting the entire critical window.",
      true_whereabouts:
        "On the east terrace as claimed; call metadata and a garden " +
        "camera fragment corroborate the timing.",
      motive:
        "His father had discovered he had been taking informal 'facilitation' " +
        "payments from two vendors and had given him until Monday to make " +
        "full restitution and resign from operational roles, or face board " +
        "exposure.",
      motive_strength: "strong",
      personality: [
        "charming in public, brittle when cornered",
        "quick to frame his actions as normal industry practice",
        "genuinely frightened of losing both position and inheritance"
      ],
      secrets: [
        "Accepted repeated informal payments from vendors",
        "Had been given a hard Monday deadline by his father"
      ],
      guilty: false,
      relationship_to_other_suspects:
        "Son of Malini; brother of Ananya; professional contact with the " +
        "business partner.",
      portrait_image: null
    },
    {
      id: "ananya",
      name: "Ananya Sen Roy",
      role_in_victims_life: "Daughter; runs the family's foundation work",
      alibi:
        "Says she was in the pantry helping the cook prepare the interval " +
        "refreshments throughout the window.",
      true_whereabouts:
        "In the pantry as claimed, confirmed by the cook and by service " +
        "timestamps.",
      motive:
        "Feared the new educational trust would absorb the foundation " +
        "budget she controlled and effectively end her independent role.",
      motive_strength: "moderate",
      personality: [
        "direct, protective of the foundation's autonomy",
        "resentful of decisions made without her input",
        "honest once the emotional temperature drops"
      ],
      secrets: [
        "Had already approached an outside donor about spinning the " +
        "foundation into a freestanding entity"
      ],
      guilty: false,
      relationship_to_other_suspects:
        "Daughter of Malini; sister of Kabir; married to Vikram.",
      portrait_image: null
    },
    {
      id: "vikram",
      name: "Vikram Roy",
      role_in_victims_life: "Son-in-law; married to Ananya",
      alibi:
        "Says he remained in the drawing room discussing logistics routes " +
        "with the rival industrialist and the physician.",
      true_whereabouts:
        "In the drawing room as claimed, confirmed by both men.",
      motive:
        "Anxious that any public scandal around the company or the family " +
        "would damage his own emerging political contacts.",
      motive_strength: "weak",
      personality: [
        "affable, slightly calculating",
        "quick to assess reputational risk",
        "avoids direct confrontation"
      ],
      secrets: [
        "Has been cultivating party contacts for a possible future ticket"
      ],
      guilty: false,
      relationship_to_other_suspects:
        "Married to Ananya; polite with the rest of the family.",
      portrait_image: null
    },
    {
      id: "debasish",
      name: "Debasish Roy",
      role_in_victims_life: "Long-time business partner and co-director",
      alibi:
        "Says he remained in the drawing room after the first piece, " +
        "speaking with Vikram and the physician.",
      true_whereabouts:
        "In the drawing room for most of the window, but stepped away for " +
        "approximately eight minutes to the ground-floor cloakroom — a " +
        "movement no one else particularly noted at the time.",
      motive:
        "Arunava had reconstructed a three-year pattern of inflated " +
        "procurement invoices that led directly to Debasish; a Monday board " +
        "presentation would have ended Debasish's career and likely " +
        "triggered criminal referral.",
      motive_strength: "strong",
      personality: [
        "polished, numbers-focused",
        "becomes clipped and procedural under pressure",
        "deeply invested in the professional reputation he has built"
      ],
      secrets: [
        "Orchestrated the inflated procurement invoices for three years",
        "Knew the Monday board meeting would expose him"
      ],
      guilty: true,
      relationship_to_other_suspects:
        "Professional partner of Arunava; cordial with the family; no " +
        "personal ties to the remaining guests beyond the evening.",
      portrait_image: null
    },
    {
      id: "ashok",
      name: "Dr. Ashok Patel",
      role_in_victims_life: "Personal physician for twelve years",
      alibi:
        "Says he remained in the drawing room after checking that Arunava " +
        "had taken his usual medication before the first piece.",
      true_whereabouts:
        "In the drawing room as claimed for the critical window; he had " +
        "no opportunity to approach the music-room wine glass after Arunava " +
        "excused himself.",
      motive:
        "None material to the murder; he had no financial or professional " +
        "stake in the company irregularities or the will.",
      motive_strength: "none",
      personality: [
        "calm, clinically precise",
        "slightly offended at being treated as a suspect",
        "helpful once the pharmacological questions become specific"
      ],
      secrets: [],
      guilty: false,
      relationship_to_other_suspects:
        "Professional only; respected by the family.",
      portrait_image: null
    },
    {
      id: "isha",
      name: "Isha Banerjee",
      role_in_victims_life: "Young cello protégé and occasional duet partner",
      alibi:
        "Says she remained in the music room packing her instrument after " +
        "the first piece and then joined the others in the drawing room.",
      true_whereabouts:
        "In the music room for a few minutes after Arunava left, then in " +
        "the drawing room; she never approached the side table with the " +
        "wine glass.",
      motive:
        "Had been told that funding for her advanced study abroad — which " +
        "Arunava had privately promised — would be delayed or withdrawn " +
        "because of the new educational trust's priorities.",
      motive_strength: "weak",
      personality: [
        "earnest, slightly overwhelmed by the household",
        "quick to defer to older authority figures",
        "genuinely distressed by the death"
      ],
      secrets: [
        "Had received an informal offer from a rival conservatory that she " +
        "had not yet disclosed to Arunava"
      ],
      guilty: false,
      relationship_to_other_suspects:
        "Professional and affectionate relationship with Arunava; polite " +
        "with the family.",
      portrait_image: null
    },
    {
      id: "ravi",
      name: "Ravi Mukherjee",
      role_in_victims_life: "Rival industrialist, invited as a gesture of reconciliation",
      alibi:
        "Says he remained in the drawing room speaking with Vikram and " +
        "Dr. Patel for the entire window.",
      true_whereabouts:
        "In the drawing room as claimed; confirmed by both men.",
      motive:
        "A long-running commercial dispute with Arunava's company had " +
        "recently turned personal; Arunava had blocked a key logistics " +
        "permit Ravi needed.",
      motive_strength: "moderate",
      personality: [
        "blunt, commercially aggressive",
        "dismissive of any suggestion he would resort to violence",
        "cooperative once the seriousness of the inquiry is clear"
      ],
      secrets: [
        "Had been exploring legal options to challenge the permit decision"
      ],
      guilty: false,
      relationship_to_other_suspects:
        "Commercial rival of Arunava; no personal ties to the household.",
      portrait_image: null
    },
    {
      id: "sunita",
      name: "Sunita Das",
      role_in_victims_life: "Long-serving household secretary and manager",
      alibi:
        "Says she remained in the small office off the hallway organising " +
        "the next day's correspondence and never entered the music room " +
        "after the first piece.",
      true_whereabouts:
        "She entered the music room briefly after Arunava had settled, " +
        "under the pretext of checking that the interval tray had been " +
        "correctly placed, added the muscle relaxant to the wine, and " +
        "returned to the office before anyone noticed.",
      motive:
        "Debasish Roy had discovered that Sunita had been skimming small " +
        "but regular amounts from the household and foundation accounts for " +
        "years; he used the knowledge to compel her cooperation in the " +
        "murder, promising both silence and a share of the proceeds once " +
        "the company irregularities were buried with Arunava.",
      motive_strength: "moderate",
      personality: [
        "quietly efficient, almost invisible in a room full of guests",
        "anxious when the household's internal order is threatened",
        "ultimately more frightened than greedy"
      ],
      secrets: [
        "Has been taking small amounts from household and foundation " +
        "accounts for several years",
        "Added the muscle relaxant to the wine under pressure from Debasish"
      ],
      guilty: true,
      relationship_to_other_suspects:
        "Employed by the family for eighteen years; reports in practice to " +
        "both Malini and, on financial matters, to Debasish.",
      portrait_image: null
    }
  ],

  witnesses: [
    {
      id: "kamala",
      name: "Kamala",
      connection_to_case: "Long-serving cook",
      reliability: "reliable",
      what_they_actually_saw:
        "Confirms Ananya was in the pantry throughout the critical window. " +
        "Also recalls seeing Sunita leave the small office around 9:18 PM " +
        "carrying a small folded napkin and head toward the music-room " +
        "corridor, returning empty-handed roughly six minutes later.",
      what_they_will_initially_claim:
        "The same — she mentions Sunita's movement only when asked about " +
        "anyone leaving the service areas after the first piece.",
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
      connection_to_case: "Night gatekeeper for the mansion grounds",
      reliability: "reliable",
      what_they_actually_saw:
        "Logged no unusual arrivals or departures through the main gate " +
        "during the evening after the guests had assembled.",
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
    malini: [
      {
        topic_id: "ask_relationship_malini",
        topic_label: "Ask about her marriage and the evening",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "We had been married thirty-eight years. The music evenings were " +
          "among the few things he still truly enjoyed. I cannot believe he " +
          "is gone.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_that_night_malini",
        topic_label: "Ask where she was during the critical window",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "In the drawing room with the others, waiting for him to return. " +
          "I never left that room until we went to find him.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_will_concerns",
        topic_label: "Ask about the revised will",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "I found a draft. He intended to move a large portion into a new " +
          "trust. It frightened me after a lifetime. But I never wished him " +
          "harm.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    kabir: [
      {
        topic_id: "ask_relationship_kabir",
        topic_label: "Ask about his relationship with his father",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "He was exacting about the business. I respected him. I also " +
          "feared him when he decided something was wrong.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_that_night_kabir",
        topic_label: "Ask where he was that night",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "On the east terrace, smoking and on a call. The records will " +
          "show the timing. A garden camera caught me there as well.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "confront_payments",
        topic_label: "Confront him with the vendor payment evidence",
        requires_evidence_id: "kabir_payment_records",
        requires_topic_ids: [],
        response:
          "He found out. He gave me until Monday to repay everything and " +
          "step back from operations. I was terrified. But I was on that " +
          "terrace the whole time.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: ["confront_deadline_kabir"]
      },
      {
        topic_id: "confront_deadline_kabir",
        topic_label: "Press him on the Monday deadline",
        requires_evidence_id: "monday_board_note",
        requires_topic_ids: ["confront_payments"],
        response:
          "Yes, the note is real. He meant it. Being desperate is not the " +
          "same as killing him. My alibi holds.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    ananya: [
      {
        topic_id: "ask_relationship_ananya",
        topic_label: "Ask about her relationship with her father",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "I loved him. I also felt the foundation was treated as secondary " +
          "whenever the company's needs intervened. I wanted more autonomy.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_that_night_ananya",
        topic_label: "Ask where she was that night",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "In the pantry with Kamala the entire time, preparing the interval " +
          "trays. She will confirm it.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_foundation_fears",
        topic_label: "Ask about the foundation and the new trust",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "The new trust would have absorbed our budget. I had even spoken " +
          "to an outside donor about independence. That is not the same as " +
          "wanting my father dead.",
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
          "Arunava was always correct with me. I knew any public trouble " +
          "around the company would complicate my own plans, but I would " +
          "never have acted against him.",
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
          "In the drawing room talking with Ravi Mukherjee and Dr. Patel. I " +
          "never left that room until we went to the music room.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    debasish: [
      {
        topic_id: "ask_partnership",
        topic_label: "Ask about the business partnership",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "We built the group together. Recently Arunava had begun asking " +
          "very sharp questions about certain procurement figures. I found " +
          "it uncomfortable, but partners argue.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_that_night_debasish",
        topic_label: "Ask where he was during the critical window",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "In the drawing room with Vikram and Dr. Patel. I may have stepped " +
          "to the cloakroom once, but I was never near the music room.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "confront_procurement",
        topic_label: "Confront him with the inflated procurement evidence",
        requires_evidence_id: "procurement_audit_notes",
        requires_topic_ids: [],
        response:
          "The figures were aggressive. An independent review would have " +
          "been painful. That does not mean I arranged a murder.",
        reaction: "evasive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: ["confront_monday_board"]
      },
      {
        topic_id: "confront_monday_board",
        topic_label: "Confront him with the Monday board presentation plan",
        requires_evidence_id: "monday_board_note",
        requires_topic_ids: ["confront_procurement"],
        response:
          "He intended to present the material. I knew what that would mean " +
          "for me. I still did not kill him.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: ["confront_sunita_link"]
      },
      {
        topic_id: "confront_sunita_link",
        topic_label: "Confront him with evidence linking him to Sunita's movements",
        requires_evidence_id: "kamala_witness_statement",
        requires_topic_ids: ["confront_monday_board"],
        response:
          "Sunita has her own keys and her own routines. Whatever she did " +
          "is her responsibility.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: ["confront_full_chain"]
      },
      {
        topic_id: "confront_full_chain",
        topic_label: "Present the full chain: procurement, Monday deadline, Sunita, relaxant source",
        requires_evidence_id: "relaxant_source_trace",
        requires_topic_ids: ["confront_sunita_link"],
        response:
          "...The Monday presentation would have ended me. I had been " +
          "inflating procurement costs for three years. When Arunava " +
          "reconstructed the pattern I knew the window was closing. I had " +
          "discovered Sunita's own skimming years earlier and kept the " +
          "knowledge. That night I told her exactly when to enter the music " +
          "room and what to add to the wine. The relaxant came through a " +
          "hospital contact I had used before for other purposes. She was " +
          "frightened enough of exposure to do it. I stayed in the drawing " +
          "room so that my own absence would be minimal. I never expected " +
          "the cook to notice Sunita leave the office.",
        reaction: "breaks_down",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    ashok: [
      {
        topic_id: "ask_role_ashok",
        topic_label: "Ask about his role as personal physician",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "I have looked after Arunava for twelve years. I checked that he " +
          "had taken his usual medication before the first piece and then " +
          "remained in the drawing room.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_that_night_ashok",
        topic_label: "Ask about the timing of his movements",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "I was in the drawing room for the critical window. I had no " +
          "reason and no opportunity to approach the wine glass after he " +
          "excused himself.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    isha: [
      {
        topic_id: "ask_relationship_isha",
        topic_label: "Ask about her relationship with Arunava",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "He was the most important teacher I have ever had. He had " +
          "promised help with study abroad. I would never have harmed him.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_that_night_isha",
        topic_label: "Ask where she was that night",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "I packed my cello in the music room for a few minutes after he " +
          "left, then joined the others in the drawing room. I never went " +
          "near his glass.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    ravi: [
      {
        topic_id: "ask_rivalry",
        topic_label: "Ask about the commercial dispute",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "We have been on opposite sides of a logistics permit for months. " +
          "It has been bitter. That does not make me a murderer. I was in " +
          "the drawing room the entire time.",
        reaction: "hostile",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_that_night_ravi",
        topic_label: "Ask where he was that night",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "Speaking with Vikram Roy and Dr. Patel in the drawing room. They " +
          "will confirm it.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    sunita: [
      {
        topic_id: "ask_role_sunita",
        topic_label: "Ask about her duties that evening",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "I have managed this household for eighteen years. That night I " +
          "was in the small office organising the next day's papers.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_that_night_sunita",
        topic_label: "Ask where she was during the critical window",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "In the office off the hallway. I did not enter the music room " +
          "after the first piece.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "confront_office_absence",
        topic_label: "Confront her with Kamala's account of her absence",
        requires_evidence_id: "kamala_witness_statement",
        requires_topic_ids: [],
        response:
          "I stepped out for a moment to check the interval tray. That is " +
          "all.",
        reaction: "evasive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: ["confront_account_skimming"]
      },
      {
        topic_id: "confront_account_skimming",
        topic_label: "Confront her with the household account discrepancies",
        requires_evidence_id: "sunita_account_discrepancies",
        requires_topic_ids: ["confront_office_absence"],
        response:
          "There have been... small irregularities. I can explain them.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: ["confront_pressure"]
      },
      {
        topic_id: "confront_pressure",
        topic_label: "Confront her with Debasish's leverage and the relaxant",
        requires_evidence_id: "relaxant_source_trace",
        requires_topic_ids: ["confront_account_skimming"],
        response:
          "...Debasish knew about the accounts for years. He told me if I " +
          "did not add the drops to the wine at the exact moment, he would " +
          "destroy me. Eighteen years in this house. I have nowhere else. I " +
          "went in with a napkin, added what he gave me, and came back. I " +
          "am sorry. I never wanted anyone to die. I only wanted not to " +
          "lose everything.",
        reaction: "breaks_down",
        unlocks_evidence_ids: [],
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
          "Ananya was with me in the pantry the whole time. I also saw " +
          "Sunita leave the small office around eighteen minutes past nine " +
          "with a folded napkin, walking toward the music-room corridor. " +
          "She came back empty-handed about six minutes later. I thought " +
          "she was just checking the interval tray.",
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
          "No unusual movements through the main gate after the guests had " +
          "arrived. Everyone who was here for the music was already inside.",
        reaction: "calm",
        unlocks_evidence_ids: ["gate_log_full"],
        unlocks_topic_ids: []
      }
    ]
  },

  evidence: [
    {
      id: "wine_glass",
      type: "physical",
      name: "Glass of diluted wine",
      description:
        "Found on the side table beside the armchair; later shown to contain " +
        "a fatal concentration of a short-acting muscle relaxant.",
      location_found: "Music room, Sen mansion",
      relevance: "supporting",
      unlocks: [],
      image: null,
      unlocked_by_default: true
    },
    {
      id: "medication_case",
      type: "physical",
      name: "Arunava's medication case",
      description:
        "Open on the cabinet near the armchair; contains only his usual " +
        "prescribed cardiac medication — no muscle relaxant.",
      location_found: "Music room",
      relevance: "supporting",
      unlocks: [],
      image: null,
      unlocked_by_default: true
    },
    {
      id: "toxicology_report",
      type: "forensic",
      name: "Toxicology report",
      description:
        "Confirms a fatal dose of a short-acting muscle relaxant " +
        "inconsistent with any prescribed medication and inconsistent with " +
        "accidental ingestion.",
      location_found: "Forensic laboratory",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "relaxant_source_trace",
      type: "forensic",
      name: "Traceability of the muscle relaxant",
      description:
        "Hospital and specialist-channel records linking a small quantity " +
        "of the same relaxant to a contact previously used by Debasish Roy " +
        "for non-medical purposes.",
      location_found: "Specialist pharmacy / hospital supply records",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "procurement_audit_notes",
      type: "document",
      name: "Arunava's procurement reconstruction notes",
      description:
        "Detailed working notes reconstructing three years of inflated " +
        "procurement invoices that lead directly to Debasish Roy.",
      location_found: "Arunava's private study",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "monday_board_note",
      type: "document",
      name: "Note regarding the Monday board presentation",
      description:
        "A handwritten note in Arunava's hand confirming a Monday board " +
        "slot and referencing 'the procurement file' and 'Kabir's position'.",
      location_found: "Music-room side table papers / study",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "kabir_payment_records",
      type: "document",
      name: "Records of Kabir's vendor payments",
      description:
        "Bank and messaging traces showing repeated informal payments from " +
        "two vendors to Kabir Sen.",
      location_found: "Company accounts / Kabir's personal records",
      relevance: "red_herring",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "sunita_account_discrepancies",
      type: "document",
      name: "Household and foundation account discrepancies",
      description:
        "Small, recurring shortfalls in household petty cash and foundation " +
        "disbursements consistent with long-term low-level diversion by " +
        "someone with daily access.",
      location_found: "Household office / foundation files",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "kamala_witness_statement",
      type: "testimony",
      name: "Kamala's account of the evening",
      description:
        "Confirms Ananya's continuous presence in the pantry and describes " +
        "Sunita leaving the small office around 9:18 PM with a folded " +
        "napkin toward the music-room corridor, returning empty-handed " +
        "about six minutes later.",
      location_found: "Interview with Kamala",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "gate_log_full",
      type: "document",
      name: "Complete evening gate log",
      description:
        "Full extract of the gate log showing no unusual arrivals or " +
        "departures after the guests had assembled.",
      location_found: "Mansion gate log book",
      relevance: "supporting",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "east_terrace_camera",
      type: "digital",
      name: "East-terrace camera fragment",
      description:
        "Partial recovery confirming Kabir Sen remained on the east terrace " +
        "during the critical window.",
      location_found: "Garden camera system",
      relevance: "supporting",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    }
  ],

  locations: [
    {
      id: "music_room",
      name: "Music Room",
      real_world_reference: "Alipore, Kolkata",
      description:
        "The formal music room where the chamber evening was held and where " +
        "Arunava was found.",
      examinable_details: [
        {
          id: "glass_and_case",
          text: "The wine glass and medication case can be sent for detailed analysis.",
          unlocks_evidence_ids: ["toxicology_report"]
        },
        {
          id: "side_table_papers",
          text: "Papers left on the side table near the armchair.",
          unlocks_evidence_ids: ["monday_board_note"]
        }
      ]
    },
    {
      id: "private_study",
      name: "Arunava's Private Study",
      real_world_reference: "Alipore, Kolkata",
      description:
        "The host's private study, where company and personal papers are kept.",
      examinable_details: [
        {
          id: "procurement_file",
          text: "Working files on company procurement and the planned board presentation.",
          unlocks_evidence_ids: ["procurement_audit_notes"]
        }
      ]
    },
    {
      id: "household_office",
      name: "Household Office",
      real_world_reference: "Alipore, Kolkata",
      description:
        "The small office off the hallway where Sunita managed correspondence " +
        "and household accounts.",
      examinable_details: [
        {
          id: "account_books",
          text: "Household and foundation account books and petty-cash records.",
          unlocks_evidence_ids: ["sunita_account_discrepancies"]
        }
      ]
    },
    {
      id: "company_accounts",
      name: "Sen Group Accounts Office",
      real_world_reference: "Near Dalhousie, Kolkata",
      description:
        "The company's accounts section, where vendor and internal payment " +
        "records are held.",
      examinable_details: [
        {
          id: "vendor_ledgers",
          text: "Vendor payment ledgers and informal correspondence.",
          unlocks_evidence_ids: ["kabir_payment_records"]
        }
      ]
    },
    {
      id: "east_terrace",
      name: "East Terrace",
      real_world_reference: "Alipore, Kolkata",
      description:
        "The terrace running along the east side of the mansion, with " +
        "partial camera coverage.",
      examinable_details: [
        {
          id: "camera_fragment",
          text: "A secondary camera angle can be recovered for the critical window.",
          unlocks_evidence_ids: ["east_terrace_camera"]
        }
      ]
    },
    {
      id: "gatehouse",
      name: "Mansion Gate",
      real_world_reference: "Alipore, Kolkata",
      description:
        "The staffed gate controlling access to the grounds.",
      examinable_details: [
        {
          id: "log_book",
          text: "The gate log for the evening can be examined.",
          unlocks_evidence_ids: ["gate_log_full"]
        }
      ]
    }
  ],

  timeline: [
    { time: "Weeks before", event: "Arunava reconstructs the procurement irregularities and begins preparing a Monday board presentation.", public_knowledge: false },
    { time: "Days before", event: "Arunava confronts Kabir over vendor payments and sets a Monday deadline; Debasish realises the same presentation will expose him.", public_knowledge: false },
    { time: "8:30 PM", event: "Guests assemble; first piece of the chamber programme begins.", public_knowledge: true },
    { time: "9:10 PM", event: "Arunava excuses himself to the music-room armchair to rest and take medication.", public_knowledge: true },
    { time: "9:15–9:18 PM", event: "Debasish briefly leaves the drawing room (cloakroom) and confirms timing with Sunita.", public_knowledge: false },
    { time: "9:18 PM", event: "Sunita leaves the household office with a folded napkin and enters the music room.", public_knowledge: false },
    { time: "9:18–9:24 PM", event: "Sunita adds the muscle relaxant to the wine and returns to the office.", public_knowledge: false },
    { time: "9:25–9:45 PM", event: "Household continues as normal; Kabir on terrace, Ananya in pantry, others in drawing room.", public_knowledge: true },
    { time: "~9:45 PM", event: "Guests come to resume the programme and find Arunava unresponsive.", public_knowledge: true },
    { time: "Following days", event: "Toxicology forces a full investigation; procurement notes and account discrepancies become central.", public_knowledge: true }
  ],

  red_herrings: [
    {
      description:
        "Kabir had been taking informal vendor payments and faced a Monday " +
        "deadline to repay and resign or be exposed to the board.",
      why_it_misleads:
        "A strong, immediate professional and familial motive with a hard " +
        "deadline makes him the most obvious suspect.",
      how_its_debunked:
        "Call records and a garden camera fragment place him on the east " +
        "terrace for the entire critical window."
    },
    {
      description:
        "Malini had read a draft will that would reduce her lifetime security " +
        "in favour of a new educational trust.",
      why_it_misleads:
        "Fear of financial insecurity after a long marriage looks like a " +
        "classic domestic motive.",
      how_its_debunked:
        "Multiple guests place her in the drawing room continuously."
    },
    {
      description:
        "Ananya feared the new trust would absorb the foundation budget she " +
        "controlled and had already spoken to an outside donor.",
      why_it_misleads:
        "Professional survival plus secret external talks suggest " +
        "premeditation.",
      how_its_debunked:
        "Kamala and service timestamps keep her in the pantry throughout."
    },
    {
      description:
        "Ravi Mukherjee had a bitter commercial dispute with Arunava and had " +
        "been blocked on a key logistics permit.",
      why_it_misleads:
        "A determined rival with real financial stakes is an easy external " +
        "suspect.",
      how_its_debunked:
        "Continuous presence in the drawing room is confirmed by two " +
        "independent people."
    },
    {
      description:
        "Isha had been told that promised funding for study abroad might be " +
        "delayed or withdrawn because of the new trust.",
      why_it_misleads:
        "Personal disappointment plus presence in the music room after " +
        "Arunava left can look suspicious.",
      how_its_debunked:
        "She never approached the side table; her movements are accounted " +
        "for by the instrument packing and subsequent presence in the " +
        "drawing room."
    },
    {
      description:
        "Dr. Patel had medical knowledge and had checked the medication " +
        "before the first piece.",
      why_it_misleads:
        "A physician is an easy person to imagine administering a precise " +
        "dose.",
      how_its_debunked:
        "He remained in the drawing room for the critical window and had " +
        "no opportunity to approach the wine glass after Arunava excused " +
        "himself."
    },
    {
      description:
        "Vikram was anxious that any public scandal would damage his " +
        "political contacts.",
      why_it_misleads:
        "Ambition plus family connection supplies a secondary motive.",
      how_its_debunked:
        "He remained in the drawing room with Ravi and Dr. Patel."
    }
  ],

  solution: {
    culprit_id: "debasish",
    method:
      "Debasish Roy compelled the household secretary Sunita Das — whose " +
      "own long-term skimming he had discovered and held over her — to " +
      "enter the music room after Arunava had settled and add a fatal dose " +
      "of a short-acting muscle relaxant to the diluted wine. Debasish " +
      "himself remained largely in the drawing room to minimise his own " +
      "absence.",
    motive:
      "To prevent a Monday board presentation at which Arunava intended to " +
      "expose three years of inflated procurement invoices that led " +
      "directly to Debasish, an exposure that would have ended his career " +
      "and likely triggered criminal referral.",
    key_evidence_chain: [
      "toxicology_report",
      "relaxant_source_trace",
      "procurement_audit_notes",
      "monday_board_note",
      "kamala_witness_statement",
      "sunita_account_discrepancies"
    ],
    full_explanation:
      "Every person in the mansion that night had a reason to wish Arunava " +
      "Sen's plans softer or slower — a will about to change, a deadline " +
      "about to fall, a foundation about to shrink, a commercial grudge, a " +
      "promised scholarship about to vanish. And every one of them except " +
      "two has an alibi that survives the timeline.\n\n" +
      "The organiser was the business partner who had the most to lose from " +
      "the Monday board meeting. Debasish Roy had spent three years " +
      "inflating procurement invoices. Arunava had reconstructed the pattern " +
      "and intended to present it. Debasish already held knowledge of the " +
      "household secretary Sunita Das's long-running skimming from the " +
      "accounts; he used that knowledge to compel her cooperation.\n\n" +
      "After the first piece, while Arunava rested in the music-room " +
      "armchair, Sunita entered under the pretext of checking an interval " +
      "tray, added the muscle relaxant Debasish had obtained through a " +
      "hospital contact, and returned to her office. Kamala saw her leave " +
      "and return; she assumed a routine check.\n\n" +
      "The death was meant to look like the natural end of an elderly man " +
      "with a known heart condition. What it could not disguise was the " +
      "precise toxicology, the specialist-channel origin of the relaxant, " +
      "the procurement notes that supplied the motive, the Monday board " +
      "note that supplied the deadline, and the cook who happened to notice " +
      "the secretary's brief absence from the office."
  },

  gamification: {
    hint_system: [
      "The wine was poisoned with a hospital-only muscle relaxant. Focus on " +
      "who had both a reason to fear a Monday board meeting and the means " +
      "to compel someone else to deliver the dose.",
      "Everyone else in the house has a motive and an alibi that holds. The " +
      "person who moved during the critical window is the one who managed " +
      "the household accounts — and who answered to the business partner.",
      "Match the toxicology and the relaxant source to the procurement " +
      "reconstruction notes, then find who was seen leaving the household " +
      "office toward the music room just after Arunava went to rest."
    ],
    achievements: [
      "Identified both the organiser and the coerced accomplice before " +
      "making an accusation",
      "Cleared all seven remaining suspects without using a hint"
    ]
  }
};
