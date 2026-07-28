// src/data/cases/case-08.js
// Level 8 — "The Alipore Necklace" — an expert-difficulty heist with inside help.
// Drop this file in as-is; it matches the schema from the restructuring prompt.

export default {
  case_id: "case-08",
  level_number: 8,
  title: "The Alipore Necklace",
  case_type: "heist",
  difficulty: "expert",

  setting: {
    city: "Kolkata, India",
    date: "a Saturday night in May",
    real_world_anchor: "Alipore, Kolkata"
  },

  police_briefing: {
    summary:
      "During a private charity reception at the Banerjee family mansion in " +
      "Alipore, a necklace of seven Mughal-era emeralds — insured for an " +
      "extraordinary sum and the centrepiece of the evening's display — " +
      "vanished from a locked glass case in the library. The case was found " +
      "open but undamaged; the mansion's alarm system had been selectively " +
      "disabled for twelve minutes; exterior cameras covering the east " +
      "garden showed only a brief, deliberate gap.\n\n" +
      "On the surface it looks like a professional external job timed to the " +
      "reception's peak. But the selective nature of the alarm blackout, the " +
      "absence of any forced entry, and a single partial print on the case " +
      "glass that does not match any known outsider all point inward. Eight " +
      "people had both the knowledge and the opportunity that night: the " +
      "host and hostess, their adult son, the head of household security, " +
      "the long-serving butler, a rival collector among the guests, the " +
      "insurance representative who had valued the piece only weeks earlier, " +
      "and the external technician who serviced the alarm system two days " +
      "before.\n\n" +
      "Recover the necklace's true path, identify who opened the case, and " +
      "determine who arranged the twelve-minute window that made the rest " +
      "possible.",
    victim_or_target: {
      name: "The Banerjee Emerald Necklace",
      age: null,
      occupation: "Heirloom collection piece / insured asset",
      background:
        "A seven-stone emerald necklace of documented Mughal provenance, " +
        "held by the Banerjee family for four generations. Recently " +
        "re-valued at a figure high enough to make any claim transformative " +
        "for the family's strained finances. Displayed that evening under " +
        "special lighting as the highlight of a charity reception raising " +
        "funds for a children's hospital wing.",
      last_known_movements:
        "Placed in the locked library display case at 7:40 PM by the butler " +
        "under the eye of the security chief. Case found open and empty at " +
        "9:55 PM when a guest requested a closer look."
    },
    incident_details: {
      location: "Library, Banerjee mansion, Alipore",
      time_estimate: "Between 9:05 and 9:20 PM (the documented alarm blackout)",
      cause_of_death_or_method:
        "Theft from a locked display case during a selective, twelve-minute " +
        "alarm and camera blackout. No forced entry; case opened with a key " +
        "or by someone who knew the mechanical release.",
      initial_state_of_scene:
        "Glass case standing open, interior velvet undisturbed except for " +
        "the missing necklace. No tool marks. A single partial fingerprint " +
        "on the upper edge of the glass does not match the household or the " +
        "known guest list. East-garden camera feed contains a clean " +
        "twelve-minute gap matching the alarm log."
    }
  },

  suspects: [
    {
      id: "arjun",
      name: "Arjun Banerjee",
      role_in_victims_life: "Host and current head of the Banerjee family",
      alibi:
        "Says he was delivering the opening remarks in the main hall from " +
        "9:00 to 9:25 PM, witnessed by dozens of guests.",
      true_whereabouts:
        "On the podium in the main hall exactly as claimed; video of the " +
        "speech confirms continuous presence.",
      motive:
        "Family finances have been under quiet pressure for two years; a " +
        "successful insurance claim on the necklace would have solved several " +
        "immediate problems without the need to sell other assets publicly.",
      motive_strength: "moderate",
      personality: [
        "publicly gracious, privately anxious about money",
        "avoids direct discussion of the family's liquidity",
        "protective of the family name above almost everything"
      ],
      secrets: [
        "Has been exploring a quiet sale of two other heirlooms through a " +
        "Singapore intermediary"
      ],
      guilty: false,
      relationship_to_other_suspects:
        "Husband of Leela; father of Kabir; employer of Dev and Ramesh; " +
        "host to the remaining guests.",
      portrait_image: "/images/suspects/c08_arjun.jpg"
    },
    {
      id: "leela",
      name: "Leela Banerjee",
      role_in_victims_life: "Hostess; Arjun's wife",
      alibi:
        "Says she was circulating among guests in the drawing room and " +
        "conservatory throughout the critical window.",
      true_whereabouts:
        "Moving between drawing room and conservatory as claimed; multiple " +
        "guests place her there continuously.",
      motive:
        "Shared the family's financial strain and had argued with Arjun " +
        "about selling the necklace outright rather than risking it on " +
        "display.",
      motive_strength: "weak",
      personality: [
        "warm, socially skilled",
        "privately more pragmatic than her husband about money",
        "dislikes being treated as merely decorative"
      ],
      secrets: [
        "Had obtained an informal second valuation of the necklace from a " +
        "dealer in Mumbai without telling Arjun"
      ],
      guilty: false,
      relationship_to_other_suspects:
        "Wife of Arjun; mother of Kabir; cordial with household staff.",
      portrait_image: "/images/suspects/c08_leela.jpg"
    },
    {
      id: "kabir",
      name: "Kabir Banerjee",
      role_in_victims_life: "Adult son; works in the family import business",
      alibi:
        "Says he stepped out to the east garden for air and a cigarette " +
        "around 9:05 and returned only after the alarm blackout ended.",
      true_whereabouts:
        "In the east garden during the window, but not alone — he met the " +
        "external alarm technician briefly to hand over a USB drive, then " +
        "remained outside until the blackout lifted.",
      motive:
        "Has run up significant gambling debts; the necklace (or its " +
        "insurance value) represented a way out if the family could be " +
        "persuaded to liquidate or claim.",
      motive_strength: "strong",
      personality: [
        "charming, restless",
        "quick to minimise his own problems",
        "genuinely attached to the family despite the debts"
      ],
      secrets: [
        "Owes a large sum to an informal lender who has begun applying " +
        "pressure",
        "Met the alarm technician in the garden during the blackout window"
      ],
      guilty: false,
      relationship_to_other_suspects:
        "Son of Arjun and Leela; knows the technician through a prior " +
        "introduction arranged by Dev.",
      portrait_image: "/images/suspects/c08_kabir.jpg"
    },
    {
      id: "dev",
      name: "Dev Malhotra",
      role_in_victims_life: "Head of household security for six years",
      alibi:
        "Says he was conducting a routine perimeter check and remained on " +
        "the radio with the gate the entire time.",
      true_whereabouts:
        "He disabled the relevant alarm zones and the east-garden camera " +
        "from the security closet using a maintenance override he alone " +
        "knew, then returned to the radio to maintain the appearance of a " +
        "normal check.",
      motive:
        "Had been systematically under-reporting the true cost of the " +
        "mansion's security upgrades and skimming the difference for three " +
        "years; Arjun had requested a full independent audit of the " +
        "security budget to begin the following week.",
      motive_strength: "strong",
      personality: [
        "quietly competent, rarely draws attention",
        "becomes clipped and procedural under pressure",
        "deeply invested in the professional identity he has built"
      ],
      secrets: [
        "Has been skimming from the security budget for three years",
        "Arranged the twelve-minute blackout and coordinated the timing " +
        "with the person who actually opened the case"
      ],
      guilty: true,
      relationship_to_other_suspects:
        "Employed by Arjun; professional contact with the alarm technician; " +
        "no personal ties to the family beyond service.",
      portrait_image: null
    },
    {
      id: "ramesh",
      name: "Ramesh",
      role_in_victims_life: "Long-serving butler and household manager",
      alibi:
        "Says he remained in the pantry and service corridor organising " +
        "the second round of canapés during the critical window.",
      true_whereabouts:
        "He left the service area, used his own key to open the library " +
        "display case, removed the necklace, and passed it through the " +
        "east-garden window to a waiting contact during the blackout, then " +
        "returned to the pantry.",
      motive:
        "Dev had discovered Ramesh's own small-scale thefts from the wine " +
        "cellar and household accounts and used the knowledge to compel his " +
        "cooperation; Ramesh believed refusal would mean exposure and the " +
        "loss of the only position he had known for twenty years.",
      motive_strength: "moderate",
      personality: [
        "deferential, almost invisible in a room full of guests",
        "anxious when the household's internal order is threatened",
        "ultimately more frightened than greedy"
      ],
      secrets: [
        "Has been taking small amounts from household accounts and the wine " +
        "cellar for several years",
        "Opened the display case and handed the necklace out during the " +
        "blackout under pressure from Dev"
      ],
      guilty: true,
      relationship_to_other_suspects:
        "Employed by the family for two decades; reports in practice to " +
        "both Arjun and Dev on security-related matters.",
      portrait_image: null
    },
    {
      id: "vikram",
      name: "Vikram Oberoi",
      role_in_victims_life: "Rival collector and guest at the reception",
      alibi:
        "Says he was in the main hall listening to Arjun's remarks and then " +
        "moved to the conservatory to speak with two other guests.",
      true_whereabouts:
        "In the main hall and conservatory as claimed; multiple independent " +
        "witnesses place him there throughout.",
      motive:
        "Had made no secret of his desire to acquire the necklace for his " +
        "own collection and had previously offered a sum the Banerjees " +
        "refused.",
      motive_strength: "moderate",
      personality: [
        "polished, openly competitive about acquisitions",
        "dismissive of any suggestion he would resort to theft",
        "cooperative once the seriousness of the inquiry is clear"
      ],
      secrets: [
        "Had been in contact with a Mumbai dealer about the possibility of " +
        "the necklace coming onto the market"
      ],
      guilty: false,
      relationship_to_other_suspects:
        "Social acquaintance of Arjun and Leela; no connection to the " +
        "household staff beyond the evening's events.",
      portrait_image: null
    },
    {
      id: "sonia",
      name: "Sonia Dutta",
      role_in_victims_life: "Insurance representative who valued the necklace",
      alibi:
        "Says she remained in the drawing room discussing coverage details " +
        "with two other guests for the entire window.",
      true_whereabouts:
        "In the drawing room as claimed; confirmed by the guests she was " +
        "speaking with.",
      motive:
        "None material to the theft itself; her firm would pay the claim, " +
        "not benefit from it.",
      motive_strength: "none",
      personality: [
        "professionally precise",
        "slightly defensive about the recent high valuation",
        "eager to demonstrate that her process was thorough"
      ],
      secrets: [
        "Accepted a modest 'expedite' fee from Arjun to complete the " +
        "valuation ahead of the reception — an ethical grey area but not " +
        "criminal"
      ],
      guilty: false,
      relationship_to_other_suspects:
        "Professional contact with Arjun only; no personal ties to the " +
        "others.",
      portrait_image: null
    },
    {
      id: "farhan",
      name: "Farhan Qureshi",
      role_in_victims_life: "External technician who serviced the alarm system",
      alibi:
        "Says he was not on the property that night; his last visit was the " +
        "scheduled service two days earlier.",
      true_whereabouts:
        "He was present in the east garden during the blackout, having been " +
        "let in through a side gate by prior arrangement; he received a USB " +
        "drive from Kabir and left again before the blackout ended. He did " +
        "not touch the necklace.",
      motive:
        "Paid a substantial sum by Dev to supply the maintenance override " +
        "codes and to be available as a cut-out if needed; he believed he " +
        "was only providing technical access for a 'security test'.",
      motive_strength: "moderate",
      personality: [
        "technically confident, socially cautious",
        "quick to insist he only followed instructions",
        "frightened once he understands the full scope of what the codes " +
        "enabled"
      ],
      secrets: [
        "Supplied Dev with the maintenance override codes used that night",
        "Met Kabir in the east garden during the blackout to collect a USB " +
        "drive containing those same codes (Kabir was an unwitting courier)"
      ],
      guilty: false,
      relationship_to_other_suspects:
        "Contracted through Dev; brief prior contact with Kabir arranged by " +
        "Dev under the guise of a technical hand-off.",
      portrait_image: null
    }
  ],

  witnesses: [
    {
      id: "priya",
      name: "Priya",
      connection_to_case: "Junior catering staff working the pantry",
      reliability: "reliable",
      what_they_actually_saw:
        "Noticed Ramesh leave the pantry area around 9:08 PM carrying " +
        "nothing visible, return roughly ten minutes later looking flushed, " +
        "and immediately resume organising trays. She thought he had simply " +
        "stepped out for air.",
      what_they_will_initially_claim:
        "The same — she mentions it only when asked whether anyone left the " +
        "service areas during the speeches.",
      personality: [
        "observant about staff movements",
        "reluctant to speak ill of senior household members",
        "precise once she understands the timing matters"
      ],
      portrait_image: null
    },
    {
      id: "gate",
      name: "Suresh",
      connection_to_case: "Night gatekeeper for the mansion grounds",
      reliability: "reliable",
      what_they_actually_saw:
        "Logged a brief, authorised side-gate entry at 9:06 PM for 'alarm " +
        "maintenance' on Dev's prior instruction, and the same person " +
        "leaving at 9:19 PM. Did not see a face clearly.",
      what_they_will_initially_claim:
        "The same — the entry was pre-authorised and he saw no reason to " +
        "challenge it.",
      personality: [
        "literal about the log book",
        "defers to security chief's instructions",
        "cooperative and unembellished"
      ],
      portrait_image: null
    }
  ],

  dialogue: {
    arjun: [
      {
        topic_id: "ask_reception",
        topic_label: "Ask about the reception and the necklace",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "The necklace has been in the family for generations. Displaying " +
          "it was meant to draw attention to the charity, not to put it at " +
          "risk. I still cannot believe it is gone.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_that_night_arjun",
        topic_label: "Ask where he was during the blackout",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "On the podium in the main hall from nine until twenty-five past. " +
          "There is video. I never left the stage.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_finances_arjun",
        topic_label: "Ask about the family's financial position",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "We have had some pressures, yes. Selling the necklace would have " +
          "been a last resort. An insurance claim was never part of any " +
          "plan of mine.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    leela: [
      {
        topic_id: "ask_role_leela",
        topic_label: "Ask about her role that evening",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "I was moving between the drawing room and the conservatory, " +
          "making sure guests were comfortable. I did not go near the " +
          "library during the speeches.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_sale_talk",
        topic_label: "Ask whether she wanted the necklace sold",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "I thought selling it outright was cleaner than risking it on " +
          "display. Arjun disagreed. That is the extent of our disagreement.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    kabir: [
      {
        topic_id: "ask_relationship_kabir",
        topic_label: "Ask about his relationship with the family assets",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "The necklace was never coming to me. I have my own problems. I " +
          "was not involved in whatever happened.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_that_night_kabir",
        topic_label: "Ask where he was during the blackout",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "In the east garden, smoking. I needed air. I came back in after " +
          "the speeches finished.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "confront_debts",
        topic_label: "Confront him about the gambling debts",
        requires_evidence_id: "kabir_debt_records",
        requires_topic_ids: [],
        response:
          "Yes, I owe money. It is bad. But I did not steal from my own " +
          "family. I was outside, that is all.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: ["confront_garden_meeting"]
      },
      {
        topic_id: "confront_garden_meeting",
        topic_label: "Confront him with the garden meeting evidence",
        requires_evidence_id: "garden_usb_transfer",
        requires_topic_ids: ["confront_debts"],
        response:
          "Dev asked me to hand a USB drive to the technician. He said it " +
          "was a routine firmware update that had to be done off-site. I " +
          "did not know what was on it. I swear I thought it was technical " +
          "maintenance.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    dev: [
      {
        topic_id: "ask_role_dev",
        topic_label: "Ask about his security responsibilities",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "I have run the mansion's security for six years. The system is " +
          "mine to maintain. A twelve-minute gap should not have been " +
          "possible without someone inside the override protocols.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_that_night_dev",
        topic_label: "Ask where he was during the blackout",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "On a perimeter radio check, in continuous contact with the gate. " +
          "The log will show the radio traffic.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "confront_skimming",
        topic_label: "Confront him with the security-budget skimming",
        requires_evidence_id: "security_budget_audit",
        requires_topic_ids: [],
        response:
          "The figures were... optimised. An independent audit would have " +
          "been uncomfortable. That does not mean I arranged a theft.",
        reaction: "evasive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: ["confront_override"]
      },
      {
        topic_id: "confront_override",
        topic_label: "Confront him with the maintenance override log",
        requires_evidence_id: "alarm_override_log",
        requires_topic_ids: ["confront_skimming"],
        response:
          "Those codes are restricted. Only a handful of people could have " +
          "used them. I will not speculate.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: ["confront_ramesh_link"]
      },
      {
        topic_id: "confront_ramesh_link",
        topic_label: "Confront him with evidence linking him to Ramesh's movements",
        requires_evidence_id: "priya_witness_statement",
        requires_topic_ids: ["confront_override"],
        response:
          "Ramesh has his own keys. Whatever he did is his responsibility.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: ["confront_full_chain"]
      },
      {
        topic_id: "confront_full_chain",
        topic_label: "Present the full chain: budget, override, Ramesh, technician",
        requires_evidence_id: "gate_side_entry",
        requires_topic_ids: ["confront_ramesh_link"],
        response:
          "...The audit would have ended me. I had been taking a percentage " +
          "of the upgrade budgets for three years. When Arjun ordered the " +
          "independent review I knew the window was closing. I used the " +
          "maintenance override to open a twelve-minute gap, told Ramesh " +
          "exactly when to open the case and pass the necklace through the " +
          "garden window, and had the technician on standby with the codes " +
          "in case anything needed adjusting. Kabir was only a courier — he " +
          "had no idea what the drive contained. The necklace was meant to " +
          "disappear cleanly and the claim would have covered far more than " +
          "I had taken. I never expected the partial print or the staff " +
          "girl noticing Ramesh leave the pantry.",
        reaction: "breaks_down",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    ramesh: [
      {
        topic_id: "ask_role_ramesh",
        topic_label: "Ask about his duties that evening",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "I have managed this household for twenty years. That night I was " +
          "in the pantry ensuring the service ran smoothly.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_that_night_ramesh",
        topic_label: "Ask where he was during the blackout",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "In the pantry and service corridor. I did not leave the service " +
          "wing.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "confront_pantry_absence",
        topic_label: "Confront him with Priya's account of his absence",
        requires_evidence_id: "priya_witness_statement",
        requires_topic_ids: [],
        response:
          "I stepped out for a moment. The heat in the pantry was " +
          "considerable. That is all.",
        reaction: "evasive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: ["confront_case_key"]
      },
      {
        topic_id: "confront_case_key",
        topic_label: "Confront him with the display-case key evidence",
        requires_evidence_id: "display_case_key_log",
        requires_topic_ids: ["confront_pantry_absence"],
        response:
          "I have a key for emergencies. I did not use it that night.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: ["confront_pressure"]
      },
      {
        topic_id: "confront_pressure",
        topic_label: "Confront him with Dev's leverage over his own thefts",
        requires_evidence_id: "ramesh_account_discrepancies",
        requires_topic_ids: ["confront_case_key"],
        response:
          "...Dev knew about the wine and the small amounts from the " +
          "household books. He told me if I did not open the case at the " +
          "exact minute and pass the necklace through the garden window, he " +
          "would destroy me. Twenty years in this house. I have nowhere " +
          "else. I opened the case. I handed it through. I came back and " +
          "tried to pretend nothing had happened. I am sorry.",
        reaction: "breaks_down",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    vikram: [
      {
        topic_id: "ask_interest",
        topic_label: "Ask about his interest in the necklace",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "I have admired it for years and made a fair offer that was " +
          "refused. That does not make me a thief. I was in the hall and " +
          "the conservatory the entire time.",
        reaction: "hostile",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_that_night_vikram",
        topic_label: "Ask where he was during the blackout",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "Listening to Arjun's remarks, then speaking with two other " +
          "collectors in the conservatory. They will confirm it.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    sonia: [
      {
        topic_id: "ask_valuation",
        topic_label: "Ask about the recent valuation",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "The valuation was thorough and by the book. The figure was high " +
          "because the provenance is exceptional. I stand by the work.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_that_night_sonia",
        topic_label: "Ask where she was during the blackout",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "In the drawing room discussing coverage language with two guests. " +
          "I never left that room.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "confront_expedite_fee",
        topic_label: "Ask about the expedite fee",
        requires_evidence_id: "sonia_fee_record",
        requires_topic_ids: [],
        response:
          "Arjun asked for the report ahead of the reception. I accepted a " +
          "modest additional fee to prioritise it. It was a scheduling " +
          "accommodation, nothing more.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    farhan: [
      {
        topic_id: "ask_service_visit",
        topic_label: "Ask about the alarm service two days earlier",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "Routine maintenance. I tested zones, updated firmware, and left. " +
          "I was not scheduled to return that week.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_that_night_farhan",
        topic_label: "Ask whether he was on the property that night",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "I was not. My last visit was the scheduled service.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "confront_side_gate",
        topic_label: "Confront him with the side-gate entry log",
        requires_evidence_id: "gate_side_entry",
        requires_topic_ids: [],
        response:
          "...Dev asked me to be available. He said it was a live security " +
          "test and I needed to hand off updated codes. I entered through " +
          "the side gate, took a USB from Kabir Banerjee in the garden, and " +
          "left. I never went near the library or the necklace.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: ["confront_codes"]
      },
      {
        topic_id: "confront_codes",
        topic_label: "Confront him about supplying the override codes",
        requires_evidence_id: "alarm_override_log",
        requires_topic_ids: ["confront_side_gate"],
        response:
          "I gave Dev the maintenance override set during the service visit. " +
          "He already had administrative access; he only needed the deeper " +
          "codes for a full zone blackout. I thought it was for testing. I " +
          "did not know it would be used for a theft.",
        reaction: "breaks_down",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    priya: [
      {
        topic_id: "ask_what_saw_priya",
        topic_label: "Ask what she noticed in the service areas",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "Ramesh left the pantry around eight minutes past nine, empty-handed. " +
          "He came back about ten minutes later looking flushed and went " +
          "straight back to the trays. I thought he had just needed air.",
        reaction: "calm",
        unlocks_evidence_ids: ["priya_witness_statement"],
        unlocks_topic_ids: []
      }
    ],
    gate: [
      {
        topic_id: "ask_what_saw_gate",
        topic_label: "Ask about the side-gate log that night",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "There was a brief authorised entry at 9:06 for alarm maintenance, " +
          "on Mr. Malhotra's prior instruction. The same person left at " +
          "9:19. I did not see the face clearly.",
        reaction: "calm",
        unlocks_evidence_ids: ["gate_side_entry"],
        unlocks_topic_ids: []
      }
    ]
  },

  evidence: [
    {
      id: "empty_display_case",
      type: "physical",
      name: "Opened display case",
      description:
        "The glass case in the library found standing open, interior velvet " +
        "undisturbed except for the missing necklace. No tool marks.",
      location_found: "Library, Banerjee mansion",
      relevance: "supporting",
      unlocks: [],
      image: null,
      unlocked_by_default: true
    },
    {
      id: "alarm_blackout_log",
      type: "digital",
      name: "Alarm system blackout log",
      description:
        "System log showing a clean twelve-minute selective disablement of " +
        "the library zone and east-garden camera between 9:05 and 9:17 PM.",
      location_found: "Security closet, Banerjee mansion",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "alarm_override_log",
      type: "digital",
      name: "Maintenance override usage record",
      description:
        "Record showing the deeper maintenance override codes were used to " +
        "create the blackout; those codes were last issued during the " +
        "service visit two days earlier.",
      location_found: "Security closet / alarm control panel",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "partial_print",
      type: "forensic",
      name: "Partial fingerprint on case glass",
      description:
        "A single partial print on the upper edge of the display-case glass " +
        "that does not match any household member or registered guest.",
      location_found: "Library display case",
      relevance: "supporting",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "security_budget_audit",
      type: "document",
      name: "Preliminary security-budget discrepancies",
      description:
        "Internal figures prepared for the coming independent audit showing " +
        "systematic overstatement of upgrade costs over three years.",
      location_found: "Arjun Banerjee's study",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "display_case_key_log",
      type: "document",
      name: "Display-case key register",
      description:
        "Household key register showing Ramesh holds one of the two " +
        "authorised keys to the library display case.",
      location_found: "Butler's pantry office",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "ramesh_account_discrepancies",
      type: "document",
      name: "Household account and cellar discrepancies",
      description:
        "Small, recurring shortfalls in household petty cash and wine-cellar " +
        "inventory consistent with long-term low-level theft by someone with " +
        "daily access.",
      location_found: "Butler's pantry office",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "priya_witness_statement",
      type: "testimony",
      name: "Priya's account of Ramesh's absence",
      description:
        "Statement that Ramesh left the pantry empty-handed around 9:08 PM " +
        "and returned flushed approximately ten minutes later.",
      location_found: "Interview with Priya",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "gate_side_entry",
      type: "document",
      name: "Side-gate entry log",
      description:
        "Gate log recording an authorised 'alarm maintenance' entry at " +
        "9:06 PM and exit at 9:19 PM on Dev Malhotra's prior instruction.",
      location_found: "Mansion gate log book",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "garden_usb_transfer",
      type: "digital",
      name: "Evidence of USB hand-off in the east garden",
      description:
        "Partial camera frame recovered from a secondary angle showing Kabir " +
        "Banerjee handing a small object consistent with a USB drive to an " +
        "unidentified person during the blackout window.",
      location_found: "Secondary garden camera (partial recovery)",
      relevance: "supporting",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "kabir_debt_records",
      type: "document",
      name: "Records of Kabir's gambling debts",
      description:
        "Evidence of substantial informal debts and recent pressure from a " +
        "lender.",
      location_found: "Kabir Banerjee's personal effects",
      relevance: "red_herring",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "sonia_fee_record",
      type: "document",
      name: "Expedite fee payment to Sonia Dutta",
      description:
        "Record of a modest additional fee paid by Arjun to prioritise the " +
        "necklace valuation ahead of the reception.",
      location_found: "Insurance correspondence files",
      relevance: "red_herring",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "east_garden_gap",
      type: "digital",
      name: "East-garden camera gap analysis",
      description:
        "Technical confirmation that the twelve-minute gap was produced by " +
        "a clean system-level disablement rather than physical camera " +
        "tampering.",
      location_found: "Security closet",
      relevance: "supporting",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    }
  ],

  locations: [
    {
      id: "library",
      name: "Library / Display Room",
      real_world_reference: "Alipore, Kolkata",
      description:
        "The formal library where the emerald necklace was displayed in a " +
        "locked glass case for the reception.",
      examinable_details: [
        {
          id: "case_glass",
          text: "The open display case and its glass surfaces can be examined for prints and tool marks.",
          unlocks_evidence_ids: ["partial_print"]
        },
        {
          id: "case_mechanism",
          text: "The mechanical lock and release of the case can be compared against the key register.",
          unlocks_evidence_ids: ["display_case_key_log"]
        }
      ]
    },
    {
      id: "security_closet",
      name: "Security Closet",
      real_world_reference: "Alipore, Kolkata",
      description:
        "The small room housing the alarm control panel and camera recorders.",
      examinable_details: [
        {
          id: "alarm_panel",
          text: "The alarm control panel and its event logs can be downloaded.",
          unlocks_evidence_ids: ["alarm_blackout_log", "alarm_override_log", "east_garden_gap"]
        }
      ]
    },
    {
      id: "pantry",
      name: "Butler's Pantry and Service Corridor",
      real_world_reference: "Alipore, Kolkata",
      description:
        "The service area from which Ramesh operated during the reception.",
      examinable_details: [
        {
          id: "key_register",
          text: "The household key register and petty-cash books are kept here.",
          unlocks_evidence_ids: ["display_case_key_log", "ramesh_account_discrepancies"]
        }
      ]
    },
    {
      id: "east_garden",
      name: "East Garden",
      real_world_reference: "Alipore, Kolkata",
      description:
        "The formal garden running along the library wing, with a side gate " +
        "and secondary camera coverage.",
      examinable_details: [
        {
          id: "secondary_camera",
          text: "A secondary camera angle can be recovered and examined for the blackout window.",
          unlocks_evidence_ids: ["garden_usb_transfer"]
        }
      ]
    },
    {
      id: "arjun_study",
      name: "Arjun Banerjee's Study",
      real_world_reference: "Alipore, Kolkata",
      description:
        "The host's private study, where financial and security-related " +
        "papers are kept.",
      examinable_details: [
        {
          id: "budget_papers",
          text: "Papers prepared for the coming security-budget audit.",
          unlocks_evidence_ids: ["security_budget_audit"]
        }
      ]
    },
    {
      id: "gatehouse",
      name: "Mansion Gatehouse",
      real_world_reference: "Alipore, Kolkata",
      description:
        "The staffed gate controlling access to the grounds.",
      examinable_details: [
        {
          id: "log_book",
          text: "The gate log for the evening can be examined.",
          unlocks_evidence_ids: ["gate_side_entry"]
        }
      ]
    }
  ],

  timeline: [
    { time: "Two days before", event: "Farhan Qureshi performs scheduled alarm maintenance and supplies deeper override codes to Dev.", public_knowledge: false },
    { time: "Week before", event: "Arjun orders an independent audit of the security budget to begin the following week.", public_knowledge: false },
    { time: "7:40 PM", event: "Necklace placed in the locked library display case by Ramesh under Dev's observation.", public_knowledge: true },
    { time: "9:00–9:25 PM", event: "Arjun delivers opening remarks in the main hall.", public_knowledge: true },
    { time: "9:05 PM", event: "Dev activates the maintenance override, creating a twelve-minute blackout of the library zone and east-garden camera.", public_knowledge: false },
    { time: "9:06 PM", event: "Farhan enters through the side gate on Dev's prior authorisation.", public_knowledge: false },
    { time: "9:08 PM", event: "Ramesh leaves the pantry, opens the display case, and removes the necklace.", public_knowledge: false },
    { time: "~9:10 PM", event: "Ramesh passes the necklace through the east-garden window; Kabir hands Farhan a USB drive containing the override codes (unwitting courier).", public_knowledge: false },
    { time: "9:17 PM", event: "Blackout ends; systems return to normal.", public_knowledge: true },
    { time: "9:19 PM", event: "Farhan exits through the side gate.", public_knowledge: false },
    { time: "9:55 PM", event: "Guest requests a closer look; empty case is discovered.", public_knowledge: true },
    { time: "Following days", event: "Selective blackout and partial print force a full internal investigation.", public_knowledge: true }
  ],

  red_herrings: [
    {
      description:
        "Kabir Banerjee had heavy gambling debts and was in the east garden " +
        "during the exact blackout window.",
      why_it_misleads:
        "Debt plus presence at the transfer point makes him look like an " +
        "active participant in the theft.",
      how_its_debunked:
        "He was an unwitting courier handing over a USB drive he believed " +
        "contained routine firmware; he never touched the necklace."
    },
    {
      description:
        "Arjun Banerjee faced quiet financial pressure and would have " +
        "benefited from a large insurance payout.",
      why_it_misleads:
        "Motive plus ownership of the asset is the classic insurance-fraud " +
        "pattern.",
      how_its_debunked:
        "Continuous video of his speech places him on the podium for the " +
        "entire window; he had no operational role in the blackout or the " +
        "case opening."
    },
    {
      description:
        "Vikram Oberoi had openly wanted the necklace and had previously " +
        "made an offer the family refused.",
      why_it_misleads:
        "A determined collector with means and motive is an easy external " +
        "suspect.",
      how_its_debunked:
        "Multiple independent witnesses keep him in the main hall and " +
        "conservatory throughout."
    },
    {
      description:
        "Sonia Dutta had produced a high valuation only weeks earlier and " +
        "accepted an expedite fee.",
      why_it_misleads:
        "A high valuation plus a grey-area fee can look like preparation " +
        "for a claim.",
      how_its_debunked:
        "She remained in the drawing room with other guests; the fee was " +
        "only for scheduling priority."
    },
    {
      description:
        "Farhan Qureshi supplied the override codes and was physically " +
        "present on the grounds during the blackout.",
      why_it_misleads:
        "Technical capability plus on-site presence during the exact window " +
        "looks like direct execution.",
      how_its_debunked:
        "He believed he was supporting a live security test; he never " +
        "entered the house or touched the necklace. He is a paid facilitator, " +
        "not the organiser."
    },
    {
      description:
        "Leela Banerjee had argued for selling the necklace and had obtained " +
        "an informal second valuation.",
      why_it_misleads:
        "Disagreement over the asset plus independent valuation interest " +
        "can suggest prior planning.",
      how_its_debunked:
        "Continuous guest sightings place her in the drawing room and " +
        "conservatory for the whole window."
    }
  ],

  solution: {
    culprit_id: "dev",
    method:
      "Dev Malhotra used restricted maintenance override codes to create a " +
      "twelve-minute selective blackout of the library alarm zone and " +
      "east-garden camera. Under that cover he directed Ramesh (the butler) " +
      "to open the display case with his authorised key, remove the " +
      "necklace, and pass it through the garden window. Farhan Qureshi " +
      "supplied the codes and was present as a technical cut-out; Kabir " +
      "Banerjee was used as an unwitting courier for a USB drive.",
    motive:
      "To generate a clean disappearance of a high-value insured asset so " +
      "that the subsequent claim would more than cover the three years of " +
      "security-budget skimming Dev had been conducting, which an imminent " +
      "independent audit would have exposed.",
    key_evidence_chain: [
      "alarm_blackout_log",
      "alarm_override_log",
      "security_budget_audit",
      "priya_witness_statement",
      "display_case_key_log",
      "ramesh_account_discrepancies",
      "gate_side_entry"
    ],
    full_explanation:
      "The Banerjee emerald necklace did not leave the mansion through any " +
      "external professional crew. It left through a twelve-minute window " +
      "created from inside the security system itself.\n\n" +
      "Dev Malhotra had been skimming a percentage of the mansion's security " +
      "upgrade budgets for three years. When Arjun ordered an independent " +
      "audit to begin the following week, Dev knew the exposure was " +
      "imminent. He already possessed the deeper maintenance override codes " +
      "supplied by the external technician Farhan Qureshi during a routine " +
      "service visit. On the night of the reception he activated those codes, " +
      "producing a clean blackout of the library zone and the east-garden " +
      "camera.\n\n" +
      "Under that cover he compelled the butler Ramesh — whose own small-scale " +
      "thefts from the household accounts and wine cellar Dev had discovered " +
      "— to open the display case with his authorised key, remove the " +
      "necklace, and pass it through the garden window. Farhan was brought " +
      "onto the grounds through the side gate as a technical cut-out and to " +
      "collect a USB drive; Kabir Banerjee, deep in gambling debt and eager " +
      "to stay useful to the security chief, was used as an unwitting courier " +
      "for that drive.\n\n" +
      "The locked case, the absence of forced entry, and the clean camera gap " +
      "were all intentional. What the plan could not erase was the budget " +
      "discrepancies already prepared for the audit, the key register that " +
      "named Ramesh, the junior staff member who noticed the butler's brief " +
      "absence from the pantry, and the gate log that recorded the 'alarm " +
      "maintenance' entry Dev himself had authorised."
  },

  gamification: {
    hint_system: [
      "The alarm did not fail randomly — it was turned off with codes only " +
      "a handful of people could have used. Start with who controlled those " +
      "codes and who benefited from the timing.",
      "Two people moved during the blackout who should not have needed to: " +
      "one left the pantry, one entered through the side gate. Connect them " +
      "to the person who ordered the independent security audit.",
      "The necklace was not taken by force or by an outsider with tools. It " +
      "was taken with a household key, under a system blackout ordered from " +
      "inside, by someone who needed the insurance money more than the " +
      "stones themselves."
    ],
    achievements: [
      "Identified both the organiser and the coerced accomplice before " +
      "making an accusation",
      "Cleared the unwitting courier and the external technician without " +
      "using a hint"
    ]
  }
};
