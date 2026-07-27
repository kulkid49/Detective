// src/data/cases/case-09.js
// Level 9 — "The Tollygunge Gavel" — an expert-difficulty murder with 8 suspects.
// Drop this file in as-is; it matches the schema from the restructuring prompt.

export default {
  case_id: "case-09",
  level_number: 9,
  title: "The Tollygunge Gavel",
  case_type: "murder",
  difficulty: "expert",

  setting: {
    city: "Kolkata, India",
    date: "a Friday evening in June",
    real_world_anchor: "Tollygunge, Kolkata"
  },

  police_briefing: {
    summary:
      "Retired High Court Justice S.K. Banerjee, 72, was found dead in the " +
      "library of his Tollygunge bungalow during a small private gathering " +
      "held to mark the completion of his memoirs. He had excused himself " +
      "after dinner to 'review one last chapter,' and was discovered roughly " +
      "forty minutes later slumped in his armchair, a half-finished glass of " +
      "brandy at his elbow.\n\n" +
      "Given his age and known heart condition, the death was first treated " +
      "as natural. Toxicology overturned that: a fatal dose of his own " +
      "digitalis-based heart medication had been introduced into the brandy. " +
      "The bottle and glass showed no forced handling; whoever added the " +
      "dose had both access to the medication and uninterrupted time alone " +
      "with the drink.\n\n" +
      "Eight people were present in the house that evening — his wife, his " +
      "son, his daughter, his son-in-law, his long-time personal clerk, the " +
      "ghostwriter who had helped shape the memoirs, a journalist who had " +
      "been pressing for an interview, and the family physician who had " +
      "stopped by to check on him. Nearly all of them had a reason to fear " +
      "what the finished memoirs might contain, or what the judge still " +
      "intended to do. Work out who had both the motive and the private " +
      "opportunity.",
    victim_or_target: {
      name: "Justice (Retd.) S.K. Banerjee",
      age: 72,
      occupation: "Retired High Court judge; memoirist",
      background:
        "A respected, exacting jurist who spent three decades on the bench. " +
        "In retirement he had devoted himself to a detailed memoir that " +
        "promised to revisit several controversial cases and, more " +
        "dangerously, certain irregularities he had discovered in the final " +
        "years of his career. He kept a strict evening routine that included " +
        "a single glass of brandy and his prescribed heart medication. In " +
        "the weeks before his death he had begun sharing selected chapters " +
        "with a small circle and had scheduled a meeting with the Bar " +
        "Council for the following Monday.",
      last_known_movements:
        "Hosted a quiet dinner for family and a few professional contacts. " +
        "Excused himself to the library around 9:20 PM saying he wanted to " +
        "review one final chapter. Found unresponsive in his armchair at " +
        "approximately 10:00 PM by his wife."
    },
    incident_details: {
      location: "Library, Banerjee bungalow, Tollygunge",
      time_estimate: "Between 9:25 and 9:55 PM",
      cause_of_death_or_method:
        "Initially assumed a natural cardiac event. Toxicology established " +
        "a fatal dose of the victim's own digitalis medication introduced " +
        "into his evening brandy.",
      initial_state_of_scene:
        "Body seated in the library armchair, brandy glass half-finished on " +
        "the side table, medication bottle in its usual place on the desk. " +
        "No signs of struggle. The room was otherwise undisturbed."
    }
  },

  suspects: [
    {
      id: "indira",
      name: "Indira Banerjee",
      role_in_victims_life: "Wife of forty-one years",
      alibi:
        "Says she remained in the drawing room with the other guests until " +
        "she went to check on her husband around 10:00 PM.",
      true_whereabouts:
        "In the drawing room exactly as claimed; multiple people confirm " +
        "her continuous presence.",
      motive:
        "Had learned that the memoirs would publicly revisit a painful " +
        "family episode involving her late brother, and feared the damage " +
        "to the family's remaining privacy.",
      motive_strength: "weak",
      personality: [
        "dignified, protective of the household's reputation",
        "quietly resentful of the memoir's more personal passages",
        "composed under questioning"
      ],
      secrets: [
        "Had asked the ghostwriter to soften or remove the chapter about " +
        "her brother"
      ],
      guilty: false,
      relationship_to_other_suspects:
        "Mother of Rohan and Meera; mother-in-law of Vikram; hostess to the " +
        "remaining guests.",
      portrait_image: null
    },
    {
      id: "rohan",
      name: "Rohan Banerjee",
      role_in_victims_life: "Only son; practising advocate",
      alibi:
        "Says he stepped onto the rear verandah for a long phone call with " +
        "a junior counsel and remained there for the entire critical window.",
      true_whereabouts:
        "On the rear verandah as claimed; call metadata and a neighbour's " +
        "sighting corroborate the timing.",
      motive:
        "His father had discovered that Rohan had accepted an improper " +
        "payment from a client in a pending matter and had given him until " +
        "the following Monday to report himself to the Bar Council or face " +
        "exposure through the memoirs and a formal complaint.",
      motive_strength: "strong",
      personality: [
        "articulate, slightly arrogant in professional settings",
        "becomes tightly controlled when his ethics are questioned",
        "genuinely fearful of disbarment"
      ],
      secrets: [
        "Accepted a substantial improper payment from a corporate client",
        "Had been given a Monday deadline by his father to self-report"
      ],
      guilty: false,
      relationship_to_other_suspects:
        "Son of Indira; brother of Meera; professional acquaintance of the " +
        "clerk and the journalist.",
      portrait_image: null
    },
    {
      id: "meera",
      name: "Meera Banerjee Sen",
      role_in_victims_life: "Daughter; works in arts administration",
      alibi:
        "Says she was in the kitchen helping the cook with dessert service " +
        "throughout the window.",
      true_whereabouts:
        "In the kitchen as claimed, confirmed by the cook and by intercom " +
        "timestamps.",
      motive:
        "Feared the memoirs would revive old press interest in a youthful " +
        "scandal that had nearly derailed her career, and had begged her " +
        "father to omit it.",
      motive_strength: "moderate",
      personality: [
        "warm in private, guarded in public",
        "protective of the carefully rebuilt version of her past",
        "honest once the personal stakes are acknowledged"
      ],
      secrets: [
        "Had a brief, highly publicised relationship in her twenties that " +
        "still surfaces in gossip columns when her name appears"
      ],
      guilty: false,
      relationship_to_other_suspects:
        "Daughter of Indira; sister of Rohan; married to Vikram.",
      portrait_image: null
    },
    {
      id: "vikram",
      name: "Vikram Sen",
      role_in_victims_life: "Son-in-law; married to Meera",
      alibi:
        "Says he remained in the drawing room discussing local politics " +
        "with the journalist and the physician.",
      true_whereabouts:
        "In the drawing room as claimed, confirmed by both the journalist " +
        "and the physician.",
      motive:
        "Anxious that any renewed scandal around Meera would damage his own " +
        "nascent political ambitions.",
      motive_strength: "weak",
      personality: [
        "affable, slightly calculating",
        "quick to frame events in terms of public perception",
        "avoids personal confrontation"
      ],
      secrets: [
        "Has been quietly exploring a party ticket for the next municipal " +
        "elections"
      ],
      guilty: false,
      relationship_to_other_suspects:
        "Married to Meera; polite with the rest of the family.",
      portrait_image: null
    },
    {
      id: "anirban",
      name: "Anirban Ghosh",
      role_in_victims_life: "Long-time personal clerk and research assistant",
      alibi:
        "Says he was in the small annex office collating the final memoir " +
        "footnotes and never entered the library after dinner.",
      true_whereabouts:
        "He entered the library shortly after the judge, added the digitalis " +
        "to the brandy under the guise of setting out the evening papers, " +
        "and returned to the annex before anyone noticed his absence.",
      motive:
        "The finished memoirs contained a detailed account of document " +
        "irregularities Anirban had committed over a decade earlier while " +
        "handling sensitive case files; the judge had only recently " +
        "reconstructed the evidence and intended to include it, naming " +
        "Anirban, as a cautionary chapter. A Monday meeting with the Bar " +
        "Council would have made the exposure formal and public.",
      motive_strength: "strong",
      personality: [
        "quietly meticulous, almost invisible in a room",
        "deeply invested in the professional identity built over twenty " +
        "years of service",
        "becomes precise and detached rather than emotional under pressure"
      ],
      secrets: [
        "Altered and in one instance fabricated supporting documents in " +
        "three cases between 2009 and 2012",
        "Had been told the relevant memoir chapter would remain in the " +
        "final manuscript"
      ],
      guilty: true,
      relationship_to_other_suspects:
        "Professional only; trusted by the entire family for two decades, " +
        "no personal entanglements with the other suspects.",
      portrait_image: null
    },
    {
      id: "priyanka",
      name: "Priyanka Das",
      role_in_victims_life: "Ghostwriter and structural editor of the memoirs",
      alibi:
        "Says she was on the front terrace speaking with the journalist " +
        "about possible serialisation rights for most of the window.",
      true_whereabouts:
        "On the front terrace as claimed; the journalist confirms the " +
        "conversation lasted until roughly 9:50 PM.",
      motive:
        "Had discovered, while editing, that one chapter would expose a " +
        "plagiarism episode from her own early career; she had asked the " +
        "judge to remove it and been refused.",
      motive_strength: "moderate",
      personality: [
        "professionally confident, slightly brittle about her own past",
        "cooperative once she realises the investigation is not about her " +
        "literary reputation alone",
        "precise about timelines"
      ],
      secrets: [
        "A journalistic piece published under her name in the late 1990s " +
        "had lifted substantial passages from an uncredited source"
      ],
      guilty: false,
      relationship_to_other_suspects:
        "Professional relationship with the judge and the clerk; brief " +
        "social contact with the family that evening.",
      portrait_image: null
    },
    {
      id: "saurav",
      name: "Saurav Mitra",
      role_in_victims_life: "Investigative journalist seeking an interview",
      alibi:
        "Says he spent the critical window on the front terrace with the " +
        "ghostwriter, then returned to the drawing room.",
      true_whereabouts:
        "On the front terrace with Priyanka Das as claimed, then in the " +
        "drawing room; confirmed by both Priyanka and Vikram.",
      motive:
        "Had been pursuing a story about alleged irregularities in the " +
        "judge's final years on the bench and saw the memoirs as either a " +
        "source or an obstacle.",
      motive_strength: "weak",
      personality: [
        "persistent, professionally sceptical",
        "quick to note inconsistencies in other people's accounts",
        "ultimately more interested in the story than in personal harm"
      ],
      secrets: [
        "Had already drafted a speculative piece linking the judge to the " +
        "same document irregularities the memoirs were about to confirm"
      ],
      guilty: false,
      relationship_to_other_suspects:
        "Professional antagonist to the judge; no personal ties to the " +
        "family beyond the evening's invitation.",
      portrait_image: null
    },
    {
      id: "ashwin",
      name: "Dr. Ashwin Mehra",
      role_in_victims_life: "Family physician for over fifteen years",
      alibi:
        "Says he arrived after dinner only to drop a renewed prescription, " +
        "spoke briefly in the drawing room, and left before the judge went " +
        "to the library.",
      true_whereabouts:
        "Left the house as claimed; gate log and his clinic roster confirm " +
        "the departure time.",
      motive:
        "None material; he had no financial or professional stake in the " +
        "memoirs or the judge's intended Bar Council meeting.",
      motive_strength: "none",
      personality: [
        "calm, clinically precise",
        "slightly offended at being treated as a suspect",
        "helpful once the medical questions become specific"
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
      connection_to_case: "Long-serving cook",
      reliability: "reliable",
      what_they_actually_saw:
        "Confirms Meera was in the kitchen throughout the critical window. " +
        "Also recalls seeing Anirban leave the annex office around 9:25 PM " +
        "carrying a thin folder and head toward the library wing, returning " +
        "empty-handed roughly fifteen minutes later.",
      what_they_will_initially_claim:
        "The same — she mentions Anirban's movement only when asked about " +
        "anyone leaving the service or annex areas after dinner.",
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
      connection_to_case: "Night gatekeeper for the bungalow grounds",
      reliability: "reliable",
      what_they_actually_saw:
        "Logged Dr. Mehra leaving at 9:15 PM. No other unusual arrivals or " +
        "departures through the main gate during the evening.",
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
    indira: [
      {
        topic_id: "ask_relationship_indira",
        topic_label: "Ask about her marriage and the memoirs",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "We had been married forty-one years. The memoirs were his final " +
          "project. I supported them, even when they touched on things I " +
          "would have preferred left private.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_that_night_indira",
        topic_label: "Ask where she was during the critical window",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "In the drawing room with the others until I went to check on him. " +
          "I never left that room before ten.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_brother_chapter",
        topic_label: "Ask about the chapter concerning her brother",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "I asked the ghostwriter whether that passage could be softened. " +
          "It was painful, not criminal. I would never have harmed my " +
          "husband over it.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    rohan: [
      {
        topic_id: "ask_relationship_rohan",
        topic_label: "Ask about his relationship with his father",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "He was exacting. I respected him more than I liked him at times. " +
          "The law was his life; he expected the same standard from me.",
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
          "On the rear verandah, on a long call with a junior. The phone " +
          "records will show the exact minutes. A neighbour saw me there.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "confront_payment",
        topic_label: "Confront him with the improper payment evidence",
        requires_evidence_id: "rohan_payment_records",
        requires_topic_ids: [],
        response:
          "He found out. He gave me until Monday to report myself to the " +
          "Bar Council. I was terrified of losing my practice. But I was on " +
          "that verandah the whole time. I never went near the library.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: ["confront_deadline"]
      },
      {
        topic_id: "confront_deadline",
        topic_label: "Press him on the Monday deadline",
        requires_evidence_id: "bar_council_note",
        requires_topic_ids: ["confront_payment"],
        response:
          "Yes, the note is real. He meant every word. Being desperate is " +
          "not the same as killing him. My alibi holds.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    meera: [
      {
        topic_id: "ask_relationship_meera",
        topic_label: "Ask about her relationship with her father",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "I loved him. I also asked him more than once to leave certain " +
          "parts of my past out of the book. He believed the truth was more " +
          "important than comfort.",
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
          "In the kitchen with Kamala the entire time, helping with dessert. " +
          "She will tell you the same.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_scandal",
        topic_label: "Ask about the old scandal",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "It was a long time ago. It still surfaces when my name appears in " +
          "the papers. I did not want it in the memoirs. That is not the " +
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
          "The judge was always correct with me. I knew any renewed " +
          "attention on Meera's past would complicate my own plans, but I " +
          "would never have acted against him.",
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
          "In the drawing room talking with Saurav Mitra and Dr. Mehra. I " +
          "never left that room until the body was found.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    anirban: [
      {
        topic_id: "ask_role_anirban",
        topic_label: "Ask about his work with the judge",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "I served as his personal clerk and research assistant for over " +
          "twenty years, including the memoir years. He trusted me with the " +
          "files and the drafts.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_that_night_anirban",
        topic_label: "Ask where he was that night",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "In the annex office, collating the final footnotes. I did not " +
          "enter the library after he went in.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "confront_documents",
        topic_label: "Confront him with the altered-document evidence",
        requires_evidence_id: "altered_case_files",
        requires_topic_ids: [],
        response:
          "Those files are old. Any irregularities were clerical errors from " +
          "a heavy caseload, nothing more.",
        reaction: "evasive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: ["confront_memoir_chapter"]
      },
      {
        topic_id: "confront_memoir_chapter",
        topic_label: "Confront him with the memoir chapter that names him",
        requires_evidence_id: "memoir_draft_chapter",
        requires_topic_ids: ["confront_documents"],
        response:
          "He intended to include it. He believed the record should be " +
          "complete. I asked him to reconsider. He refused.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: ["confront_medication"]
      },
      {
        topic_id: "confront_medication",
        topic_label: "Confront him with the digitalis residue and access evidence",
        requires_evidence_id: "digitalis_residue",
        requires_topic_ids: ["confront_memoir_chapter"],
        response:
          "I handle many of his papers. That does not mean I touched his " +
          "medication or his drink.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: ["confront_kamala"]
      },
      {
        topic_id: "confront_kamala",
        topic_label: "Confront him with Kamala's sighting of his movements",
        requires_evidence_id: "kamala_witness_statement",
        requires_topic_ids: ["confront_medication"],
        response:
          "...He was going to name me in the book and take the file to the " +
          "Bar Council on Monday. Twenty years of service would have ended " +
          "in disgrace. I went in after him with the evening papers. I added " +
          "the digitalis to the brandy while he was reading. I set the glass " +
          "back and left. I told myself it would look like his heart had " +
          "simply given out. I never expected the toxicology to be so " +
          "precise, or Kamala to notice I had left the annex.",
        reaction: "breaks_down",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    priyanka: [
      {
        topic_id: "ask_role_priyanka",
        topic_label: "Ask about her work on the memoirs",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "I was brought in to give the manuscript structure and pace. The " +
          "judge retained final control over every factual claim.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_that_night_priyanka",
        topic_label: "Ask where she was that night",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "On the front terrace with Saurav Mitra, discussing possible " +
          "serialisation. We were there until nearly ten.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_plagiarism",
        topic_label: "Ask about the old plagiarism episode",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "There was a piece early in my career that was... insufficiently " +
          "attributed. The judge discovered the parallel while we were " +
          "editing and refused to remove the reference. I was angry. I was " +
          "not a murderer.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    saurav: [
      {
        topic_id: "ask_interest",
        topic_label: "Ask about his interest in the judge",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "I had been looking into certain case irregularities from the " +
          "judge's final years on the bench. The memoirs were either going " +
          "to confirm the story or close it. I wanted the interview.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_that_night_saurav",
        topic_label: "Ask where he was that night",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "On the front terrace with Priyanka Das, then back in the drawing " +
          "room. I never went near the library.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    ashwin: [
      {
        topic_id: "ask_role_ashwin",
        topic_label: "Ask about his role as family physician",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "I have looked after the judge and the household for fifteen " +
          "years. I came only to drop a renewed prescription and left before " +
          "he went to the library.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_that_night_ashwin",
        topic_label: "Ask about the timing of his visit",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "Gate log and my clinic roster both show I left by 9:15. I was " +
          "not in the house when whatever happened, happened.",
        reaction: "calm",
        unlocks_evidence_ids: ["gate_log_ashwin"],
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
          "Meera was with me in the kitchen the whole time. I also saw " +
          "Anirban leave the annex around twenty-five past nine with a thin " +
          "folder, walking toward the library wing. He came back empty-handed " +
          "about fifteen minutes later. I thought he was just delivering " +
          "papers, the way he often did.",
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
          "Dr. Mehra left at 9:15. No other unusual movements through the " +
          "main gate.",
        reaction: "calm",
        unlocks_evidence_ids: ["gate_log_full"],
        unlocks_topic_ids: []
      }
    ]
  },

  evidence: [
    {
      id: "brandy_glass",
      type: "physical",
      name: "Half-finished brandy glass",
      description:
        "Found on the side table beside the armchair; later shown to contain " +
        "a fatal concentration of digitalis.",
      location_found: "Library, Banerjee bungalow",
      relevance: "supporting",
      unlocks: [],
      image: null,
      unlocked_by_default: true
    },
    {
      id: "medication_bottle",
      type: "physical",
      name: "Digitalis medication bottle",
      description:
        "The judge's prescribed heart medication, kept on the library desk " +
        "in its usual place.",
      location_found: "Library desk",
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
        "Confirms a fatal dose of digitalis introduced into the brandy; " +
        "inconsistent with normal therapeutic levels or accidental double " +
        "dosing.",
      location_found: "Forensic laboratory",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "digitalis_residue",
      type: "forensic",
      name: "Residue analysis on glass and bottle",
      description:
        "Trace digitalis residue on the exterior of the brandy glass rim " +
        "and a transfer pattern consistent with someone handling the " +
        "medication bottle and then the glass in sequence.",
      location_found: "Library",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "memoir_draft_chapter",
      type: "document",
      name: "Draft memoir chapter on document irregularities",
      description:
        "A late-stage draft chapter that reconstructs the alteration of " +
        "case documents and names Anirban Ghosh as the clerk responsible.",
      location_found: "Library desk / memoir files",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "altered_case_files",
      type: "document",
      name: "Copies of the altered case files",
      description:
        "Working copies retained by the judge showing the original and " +
        "altered versions of three sets of supporting documents from " +
        "2009–2012.",
      location_found: "Locked cabinet, library",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "bar_council_note",
      type: "document",
      name: "Note regarding the Monday Bar Council meeting",
      description:
        "A handwritten note in the judge's hand confirming a Monday " +
        "appointment with the Bar Council and referencing 'the clerk matter' " +
        "and 'Rohan's position'.",
      location_found: "Library desk papers",
      relevance: "supporting",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "rohan_payment_records",
      type: "document",
      name: "Records of the improper client payment",
      description:
        "Bank and messaging traces showing a substantial payment from a " +
        "corporate client to Rohan Banerjee outside normal fee channels.",
      location_found: "Rohan Banerjee's professional records",
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
        "Confirms Meera's continuous presence in the kitchen and describes " +
        "Anirban leaving the annex toward the library around 9:25 PM and " +
        "returning empty-handed about fifteen minutes later.",
      location_found: "Interview with Kamala",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "gate_log_ashwin",
      type: "document",
      name: "Gate log entry for Dr. Mehra",
      description:
        "Confirms Dr. Ashwin Mehra left the grounds at 9:15 PM.",
      location_found: "Bungalow gate log book",
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
        "Full extract of the gate log covering arrivals and departures " +
        "between 8:00 PM and 11:00 PM.",
      location_found: "Bungalow gate log book",
      relevance: "supporting",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "annex_access_log",
      type: "document",
      name: "Annex office movement notes",
      description:
        "Informal notes and a partial intercom timestamp consistent with " +
        "Anirban leaving the annex during the critical window.",
      location_found: "Annex office",
      relevance: "supporting",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    }
  ],

  locations: [
    {
      id: "library",
      name: "Library",
      real_world_reference: "Tollygunge, Kolkata",
      description:
        "The private library where the judge was found, adjoining the main " +
        "drawing room.",
      examinable_details: [
        {
          id: "glass_and_bottle",
          text: "The brandy glass and medication bottle can be sent for detailed residue analysis.",
          unlocks_evidence_ids: ["toxicology_report", "digitalis_residue"]
        },
        {
          id: "desk_papers",
          text: "Recent papers and the working memoir draft on the desk.",
          unlocks_evidence_ids: ["memoir_draft_chapter", "bar_council_note"]
        },
        {
          id: "locked_cabinet",
          text: "A locked cabinet containing older case files the judge had been reviewing.",
          unlocks_evidence_ids: ["altered_case_files"]
        }
      ]
    },
    {
      id: "annex",
      name: "Annex Office",
      real_world_reference: "Tollygunge, Kolkata",
      description:
        "The small office where Anirban Ghosh worked on the memoir footnotes " +
        "and supporting research.",
      examinable_details: [
        {
          id: "movement_notes",
          text: "Informal notes and intercom records of movement in and out of the annex.",
          unlocks_evidence_ids: ["annex_access_log"]
        }
      ]
    },
    {
      id: "rohan_chambers",
      name: "Rohan Banerjee's Chambers",
      real_world_reference: "Near High Court, Kolkata",
      description:
        "Rohan's professional chambers, where client and fee records are kept.",
      examinable_details: [
        {
          id: "fee_records",
          text: "Recent client payment records and correspondence.",
          unlocks_evidence_ids: ["rohan_payment_records"]
        }
      ]
    },
    {
      id: "gatehouse",
      name: "Bungalow Gate",
      real_world_reference: "Tollygunge, Kolkata",
      description:
        "The staffed gate controlling access to the bungalow grounds.",
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
    { time: "Weeks before", event: "Judge reconstructs the document irregularities and drafts the relevant memoir chapter naming Anirban.", public_knowledge: false },
    { time: "Days before", event: "Judge informs Rohan of the improper payment and sets a Monday self-reporting deadline; schedules Bar Council meeting.", public_knowledge: false },
    { time: "8:00 PM", event: "Dinner concludes; guests move to the drawing room and adjoining spaces.", public_knowledge: true },
    { time: "9:15 PM", event: "Dr. Mehra leaves after dropping the prescription.", public_knowledge: true },
    { time: "9:20 PM", event: "Judge excuses himself to the library to review one final chapter.", public_knowledge: true },
    { time: "9:25 PM", event: "Anirban leaves the annex with a folder and enters the library.", public_knowledge: false },
    { time: "9:25–9:40 PM", event: "Anirban adds digitalis to the brandy under the guise of setting out papers, then returns to the annex.", public_knowledge: false },
    { time: "9:40–10:00 PM", event: "Household continues as normal; Rohan on verandah, Meera in kitchen, others in drawing room or on terrace.", public_knowledge: true },
    { time: "~10:00 PM", event: "Indira finds the judge unresponsive in the library armchair.", public_knowledge: true },
    { time: "Following days", event: "Toxicology results force a full investigation; memoir drafts and case files become central.", public_knowledge: true }
  ],

  red_herrings: [
    {
      description:
        "Rohan had accepted an improper client payment and faced a Monday " +
        "deadline to self-report or be exposed by his father.",
      why_it_misleads:
        "A strong, immediate professional motive with a hard deadline makes " +
        "him the most obvious suspect.",
      how_its_debunked:
        "Call records and a neighbour's sighting place him on the rear " +
        "verandah for the entire critical window."
    },
    {
      description:
        "Meera feared the memoirs would revive an old public scandal and had " +
        "repeatedly asked for the relevant passages to be removed.",
      why_it_misleads:
        "Personal reputation at stake plus prior confrontation looks like " +
        "motive.",
      how_its_debunked:
        "Kamala and intercom timestamps keep her in the kitchen throughout."
    },
    {
      description:
        "Priyanka Das had a plagiarism episode from her early career that " +
        "the judge refused to omit from the memoirs.",
      why_it_misleads:
        "Professional ruin plus a recent refusal creates a clear personal " +
        "stake.",
      how_its_debunked:
        "She was on the front terrace with the journalist until nearly 10 PM."
    },
    {
      description:
        "Saurav Mitra had been investigating the same document irregularities " +
        "and saw the memoirs as either confirmation or obstruction of his " +
        "story.",
      why_it_misleads:
        "A journalist with a prepared narrative can look capable of " +
        "extreme measures to control the story.",
      how_its_debunked:
        "Continuous presence on the terrace and then in the drawing room is " +
        "confirmed by two independent people."
    },
    {
      description:
        "Indira had asked for a painful family chapter to be softened and " +
        "was protective of the household's remaining privacy.",
      why_it_misleads:
        "Emotional motive plus intimate knowledge of the house can appear " +
        "suspicious.",
      how_its_debunked:
        "Multiple guests place her in the drawing room until she discovered " +
        "the body."
    },
    {
      description:
        "Vikram was anxious that any renewed scandal around Meera would " +
        "damage his political plans.",
      why_it_misleads:
        "Ambition plus family connection supplies a secondary motive.",
      how_its_debunked:
        "He remained in the drawing room with the journalist and the " +
        "physician."
    },
    {
      description:
        "Dr. Mehra had medical knowledge and easy access to the household " +
        "and the medication.",
      why_it_misleads:
        "A physician is an easy person to imagine administering a precise " +
        "overdose.",
      how_its_debunked:
        "Gate log and clinic roster show he left at 9:15 PM, before the " +
        "judge even entered the library."
    }
  ],

  solution: {
    culprit_id: "anirban",
    method:
      "Entered the library shortly after the judge under the pretext of " +
      "delivering evening papers, added a fatal dose of the judge's own " +
      "digitalis medication to the waiting glass of brandy, and returned to " +
      "the annex office before his absence was noticed.",
    motive:
      "To prevent the publication of a memoir chapter that would have named " +
      "him as the clerk responsible for altering case documents a decade " +
      "earlier, and to stop the formal exposure that would have followed " +
      "the judge's scheduled Monday meeting with the Bar Council.",
    key_evidence_chain: [
      "toxicology_report",
      "digitalis_residue",
      "memoir_draft_chapter",
      "altered_case_files",
      "kamala_witness_statement",
      "bar_council_note"
    ],
    full_explanation:
      "Every person in the bungalow that night had a reason to wish the " +
      "memoirs softer, shorter, or never finished — a family wound, a " +
      "professional deadline, an old scandal, a plagiarism scare, a " +
      "political calculation, a journalist's story. And every one of them " +
      "except one has an alibi that survives the timeline.\n\n" +
      "The exception is the man who had spent twenty years being trusted " +
      "with the judge's most sensitive papers. Anirban Ghosh had altered " +
      "supporting documents in three cases between 2009 and 2012. The judge, " +
      "while preparing the memoirs, had finally reconstructed the evidence " +
      "and written a chapter that named him. A Monday meeting with the Bar " +
      "Council would have turned that private reconstruction into a formal " +
      "complaint.\n\n" +
      "After the judge went to the library, Anirban followed with a folder " +
      "of papers — a routine he had performed hundreds of times. He added " +
      "the digitalis to the brandy, set the glass back in place, and " +
      "returned to the annex. Kamala saw him leave and return; she assumed " +
      "he was simply delivering work.\n\n" +
      "The death was meant to look like the natural end of an elderly man " +
      "with a known heart condition. What it could not disguise was the " +
      "precise toxicology, the residue pattern linking the medication bottle " +
      "to the glass, the draft chapter that supplied the motive, and the " +
      "cook who happened to notice the clerk's brief absence from the annex."
  },

  gamification: {
    hint_system: [
      "The brandy was poisoned with the victim's own medication. Focus on " +
      "who had both routine access to the library and a reason to fear the " +
      "finished memoirs.",
      "Everyone else in the house has a motive and an alibi that holds. The " +
      "person who moved during the critical window is the one who had spent " +
      "two decades handling the judge's most sensitive files.",
      "Match the toxicology and residue to the draft chapter that names a " +
      "clerk, then find who was seen leaving the annex toward the library " +
      "just after the judge went in."
    ],
    achievements: [
      "Cleared all seven innocent suspects before making an accusation",
      "Solved the case without using a single hint"
    ]
  }
};
