// src/data/cases/case-01.js
// Level 1 — "The Alipore Bequest" — an intro-difficulty murder mystery.
// Drop this file in as-is; it matches the schema from the restructuring prompt.

export default {
  case_id: "case-01",
  level_number: 1,
  title: "The Alipore Bequest",
  case_type: "murder",
  difficulty: "easy",

  setting: {
    city: "Kolkata, India",
    date: "a Tuesday evening in March",
    real_world_anchor: "Alipore, Kolkata"
  },

  police_briefing: {
    summary:
      "Debashish Roy, a well-known antique art dealer, was found dead in the " +
      "study of his Alipore residence at 7:30 AM by his housekeeper. He had " +
      "suffered a single, forceful blow to the head. There is no sign of forced " +
      "entry — whoever did this either had a key, or Debashish let them in " +
      "himself. The house sits on a quiet lane behind Alipore's older bungalows, " +
      "with a front gate facing the street and a rarely-used back gate opening " +
      "onto a narrow service lane.\n\n" +
      "Debashish ran a respected antique shop on Park Street for over twenty " +
      "years, dealing in South and Southeast Asian art, sculpture, and " +
      "manuscripts. He lived alone since his wife's passing several years ago, " +
      "with a housekeeper coming in daily. His nephew and his longtime business " +
      "partner both feature heavily in his recent calendar entries, and a public " +
      "feud with a rival dealer has been the talk of Kolkata's antique circles " +
      "for months.\n\n" +
      "The medical examiner places time of death between 10:15 and 11:00 PM the " +
      "previous night. You have full access to the house, the shop, and " +
      "everyone who knew him. Find out who was in that study last.",
    victim_or_target: {
      name: "Debashish Roy",
      age: 58,
      occupation: "Antique art dealer, proprietor of Roy & Sons Antiques",
      background:
        "Debashish inherited a small curio business from his father and built it " +
        "into one of Park Street's most respected antique galleries, specializing " +
        "in authenticated South Asian sculpture and manuscripts. Known in the " +
        "trade for being scrupulously honest about provenance — sometimes to a " +
        "fault, having publicly disputed the authenticity of pieces sold by " +
        "competitors. He took on a business partner, Meera Sen, fifteen years " +
        "ago to help expand into international sales. His nephew Anirban has " +
        "worked on and off at the shop and has leaned on his uncle for money " +
        "more than once.\n\n" +
        "In the weeks before his death, colleagues noted Debashish seemed " +
        "distracted and had cancelled two sale appointments, telling one client " +
        "he needed to 'sort out a serious matter' with the business first.",
      last_known_movements:
        "Closed the shop on Park Street at 7:00 PM as usual and drove home. " +
        "Housekeeper Sunita was present when he arrived and left at 8:45 PM. " +
        "His nephew Anirban was at the house from roughly 8:15 to 9:30 PM. " +
        "Phone records show a two-minute call from Meera Sen at 9:45 PM. He was " +
        "found dead the next morning."
    },
    incident_details: {
      location: "Study, Debashish Roy's residence, Alipore",
      time_estimate: "Between 10:15 PM and 11:00 PM",
      cause_of_death_or_method:
        "Single forceful blow to the back of the head from a heavy blunt object",
      initial_state_of_scene:
        "Body found slumped over the desk. A brass Nataraja statue that normally " +
        "sat on a side shelf was found on the floor near the body, smudged and " +
        "displaced. Desk drawers were open but nothing appeared ransacked — this " +
        "does not look like a robbery. The back gate to the service lane was " +
        "found unlatched."
    }
  },

  suspects: [
    {
      id: "anirban",
      name: "Anirban Roy",
      role_in_victims_life: "Nephew; occasional shop employee",
      alibi:
        "Says he left his uncle's house around 9:30 PM and went straight to a " +
        "bar with friends, staying until close to midnight.",
      true_whereabouts:
        "Left the house at 9:30 PM as claimed, went to the bar, and stayed " +
        "there — he was gone well before the murder window.",
      motive:
        "Deep in debt, had asked his uncle for a loan that evening and was " +
        "refused; stood to inherit a stake in the shop.",
      motive_strength: "strong",
      personality: [
        "defensive when pressed on money",
        "quick temper but not violent",
        "genuinely fond of his uncle underneath the resentment",
        "prone to over-explaining himself"
      ],
      secrets: [
        "Has a gambling debt he hasn't told anyone in the family about"
      ],
      guilty: false,
      relationship_to_other_suspects:
        "Has always been mildly suspicious of Meera Sen, feeling she gets more " +
        "credit in the business than she deserves.",
      portrait_image: "/images/suspects/anirban.jpg"
    },
    {
      id: "meera",
      name: "Meera Sen",
      role_in_victims_life: "Business partner of fifteen years",
      alibi:
        "Says she went for a solitary walk along the riverside promenade near " +
        "Princep Ghat that evening to clear her head, alone, seeing no one she knew.",
      true_whereabouts:
        "Drove to Debashish's house shortly after 10:00 PM, entered through the " +
        "back gate, and confronted him about the authentication scandal and the " +
        "partnership dissolution. The confrontation turned violent.",
      motive:
        "Debashish had discovered she'd been forging authentication " +
        "certificates for several pieces sold through the gallery, and was " +
        "about to dissolve the partnership and expose her publicly.",
      motive_strength: "strong",
      personality: [
        "composed and articulate in public",
        "meticulous, detail-oriented",
        "deeply afraid of professional ruin",
        "becomes evasive rather than angry when cornered"
      ],
      secrets: [
        "Orchestrated a forgery scheme selling fraudulent authentication " +
        "certificates for at least three pieces over two years"
      ],
      guilty: true,
      relationship_to_other_suspects:
        "Long, mostly cordial working relationship with Debashish; views " +
        "Anirban as an occasional nuisance in the business.",
      portrait_image: "/images/suspects/meera.jpg"
    },
    {
      id: "ratan",
      name: "Ratan Ghosh",
      role_in_victims_life: "Rival antique dealer",
      alibi:
        "Says he was at an industry dinner across town all evening, in view of " +
        "dozens of colleagues.",
      true_whereabouts:
        "At the industry dinner the entire evening, exactly as claimed.",
      motive:
        "Public feud after Debashish publicly declared a Chola-era bronze Ratan " +
        "sold to be a fake, damaging his reputation.",
      motive_strength: "moderate",
      personality: [
        "proud and combative in professional disputes",
        "surprisingly good-humored one-on-one",
        "holds grudges but respects Debashish's eye for authenticity"
      ],
      secrets: [
        "Privately agrees the bronze probably was a later reproduction, but " +
        "would never admit it publicly"
      ],
      guilty: false,
      relationship_to_other_suspects:
        "No real relationship with Anirban or Meera beyond professional " +
        "circles.",
      portrait_image: "/images/suspects/ratan.jpg"
    },
    {
      id: "sunita",
      name: "Sunita Das",
      role_in_victims_life: "Housekeeper, employed for over a decade",
      alibi:
        "Says she left at 8:45 PM as usual, after Anirban's raised voice made " +
        "her uncomfortable, and heard nothing more that night.",
      true_whereabouts:
        "Left at 8:45 PM exactly as claimed and went home.",
      motive:
        "Had been quietly taking small amounts from the household petty cash to " +
        "cover a family medical bill, and feared Debashish had started to " +
        "notice discrepancies.",
      motive_strength: "weak",
      personality: [
        "warm and long-serving, genuinely attached to the household",
        "anxious and easily flustered under questioning",
        "ashamed of the money she's taken"
      ],
      secrets: [
        "Has been skimming small sums from the household petty cash for months"
      ],
      guilty: false,
      relationship_to_other_suspects:
        "Fond of Anirban, whom she's known since he was a boy; polite but " +
        "distant with Meera.",
      portrait_image: "/images/suspects/sunita.jpg"
    }
  ],

  witnesses: [
    {
      id: "chatterjee",
      name: "Mrs. Chatterjee",
      connection_to_case: "Neighbor whose garden backs onto the service lane",
      reliability: "reliable",
      what_they_actually_saw:
        "Around 10:45 PM, saw a figure in a dark green shawl slip out through " +
        "the back gate and hurry down the lane. Didn't think much of it at the " +
        "time.",
      what_they_will_initially_claim:
        "The same thing — she has no reason to embellish or hide what she saw, " +
        "though she'll only mention it if asked, assuming it isn't important.",
      personality: [
        "observant out of habit, minds everyone's business a little",
        "matter-of-fact, doesn't gossip maliciously",
        "happy to help once asked directly"
      ],
      portrait_image: "/images/witnesses/chatterjee.jpg"
    },
    {
      id: "ranjit",
      name: "Ranjit",
      connection_to_case: "Night watchman for the street the house is on",
      reliability: "partially mistaken",
      what_they_actually_saw:
        "Confirms Anirban's car left around 9:30–9:40 PM. He is posted on the " +
        "front street, not the back service lane, so has no view of anyone " +
        "entering or leaving through the back gate.",
      what_they_will_initially_claim:
        "The same, though he initially assumes 'nothing else happened' since he " +
        "didn't personally see anything — this is his honest blind spot, not a " +
        "lie.",
      personality: [
        "diligent within his actual post",
        "a little embarrassed to admit the limits of what he can see",
        "straightforward once he understands what's being asked"
      ],
      portrait_image: "/images/suspects/ranjit.jpg"
    }
  ],

  dialogue: {
    anirban: [
      {
        topic_id: "relationship",
        topic_label: "Ask about his relationship with his uncle",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "He practically raised me after my father passed. I know it looks bad " +
          "that I needed money from him again, but I loved him. I'd never have " +
          "hurt him.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "alibi",
        topic_label: "Ask where he was that night",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "I left around half nine and went straight to a bar with a couple of " +
          "friends. We were there till nearly midnight — ask them, ask the " +
          "bartender, ask anyone.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "confront_debt",
        topic_label: "Confront him about his debts",
        requires_evidence_id: "bank_statement",
        requires_topic_ids: [],
        response:
          "Fine — yes, I asked him for a loan that night. He said no, we argued, " +
          "it got loud. Sunita probably heard it. But I left. He was alive when " +
          "I walked out that door.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: ["leaving_time"]
      },
      {
        topic_id: "leaving_time",
        topic_label: "Press him on exactly when he left",
        requires_evidence_id: null,
        requires_topic_ids: ["confront_debt"],
        response:
          "9:30, maybe 9:35. Ranjit was outside, he must have seen my car go. I " +
          "didn't hang around after Uncle told me to get out.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "inheritance",
        topic_label: "Ask about the inheritance",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "I suppose I get a stake in the shop, yes. Everyone always assumes " +
          "that's the only reason I was ever around him. It wasn't.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    meera: [
      {
        topic_id: "partnership",
        topic_label: "Ask about the business partnership",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "Fifteen years. We built that gallery's international reputation " +
          "together. He was more than a business partner to me.",
        reaction: "evasive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "alibi_night",
        topic_label: "Ask where she was that night",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "Walking. Alone, along the riverside near Princep Ghat. I needed the " +
          "air. I didn't run into anyone I knew, if that's what you're asking.",
        reaction: "evasive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "confront_certificate",
        topic_label: "Confront her about the forged certificate",
        requires_evidence_id: "forged_certificate",
        requires_topic_ids: [],
        response:
          "I— that's an old file, it could be anyone's error. I don't see what " +
          "that has to do with what happened to Debashish.",
        reaction: "evasive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: ["confront_dissolution"]
      },
      {
        topic_id: "confront_dissolution",
        topic_label: "Confront her with the dissolution letter",
        requires_evidence_id: "dissolution_letter",
        requires_topic_ids: ["confront_certificate"],
        response:
          "Alright — yes. He found out. He was going to end the partnership and " +
          "go public with it, ruin me over three certificates. But I did not " +
          "kill him. I would never.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "confront_call",
        topic_label: "Ask about the 9:45 PM phone call",
        requires_evidence_id: "phone_log",
        requires_topic_ids: [],
        response:
          "I called to beg him to reconsider. He barely let me speak, said we'd " +
          "'talk properly tomorrow,' and hung up. That was the last time we " +
          "spoke. I went for my walk after that.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "confront_shawl",
        topic_label: "Show her the torn shawl fabric",
        requires_evidence_id: "torn_shawl",
        requires_topic_ids: ["confront_call"],
        response:
          "...That's mine. Fine. He wouldn't listen — he said he was calling the " +
          "authentication board himself in the morning, that this was 'bigger " +
          "than our friendship.' I picked up the statue. I don't even remember " +
          "deciding to. I just didn't want it to be real, and then it was too " +
          "late to undo.",
        reaction: "breaks_down",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    ratan: [
      {
        topic_id: "feud",
        topic_label: "Ask about the rivalry with Debashish",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "He called my Chola bronze a fake in front of half the trade. Whether " +
          "or not he was right, that's not something a man forgets easily.",
        reaction: "hostile",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "alibi_ratan",
        topic_label: "Ask where he was that night",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "At the dealers' dinner across town, all evening, in front of at least " +
          "thirty people who'll happily confirm it. I disliked the man, " +
          "Inspector. I didn't need to kill him.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "confront_emails",
        topic_label: "Confront him with the angry emails",
        requires_evidence_id: "feud_correspondence",
        requires_topic_ids: [],
        response:
          "I wrote angrier things than I'm proud of, yes. Words aren't a brass " +
          "statue to the back of a man's skull. Check the guest list from that " +
          "dinner before you waste more time on me.",
        reaction: "hostile",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    sunita: [
      {
        topic_id: "finding_body",
        topic_label: "Ask about finding the body",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "I came in at half seven like always, and he was just — slumped over " +
          "the desk. I called the police straightaway. I still can't stop " +
          "seeing it.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "her_evening",
        topic_label: "Ask about her evening before she left",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "Anirban Babu and Sir were arguing, loud enough that I didn't want to " +
          "be underfoot. I left at quarter to nine like I always do and went " +
          "straight home.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "confront_cash",
        topic_label: "Confront her about the missing petty cash",
        requires_evidence_id: "cash_discrepancy_note",
        requires_topic_ids: [],
        response:
          "I— yes, it was me. My daughter's hospital bills, I didn't know what " +
          "else to do, I was going to pay it back. Please, I never touched him, " +
          "I'd never hurt this family.",
        reaction: "breaks_down",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    chatterjee: [
      {
        topic_id: "what_saw",
        topic_label: "Ask what she saw that night",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "It was near a quarter to eleven — I was locking up my garden shed and " +
          "saw someone in a dark green shawl slip out of the Roys' back gate, " +
          "walking quickly down the lane. I didn't think anything of it until " +
          "your officers came round.",
        reaction: "calm",
        unlocks_evidence_ids: ["witness_sighting_note"],
        unlocks_topic_ids: []
      },
      {
        topic_id: "confirm_shawl",
        topic_label: "Show her the torn shawl fabric",
        requires_evidence_id: "torn_shawl",
        requires_topic_ids: ["what_saw"],
        response:
          "Yes — that color, that weave. That's exactly what I saw that person " +
          "wearing.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    ranjit: [
      {
        topic_id: "anirban_car",
        topic_label: "Ask about vehicles that night",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "Anirban Babu's car left around 9:30, maybe a few minutes after. I " +
          "remember because he usually stays much later than that.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "other_visitors",
        topic_label: "Ask if he saw anyone else that night",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "Not on the front street, no. But I'm posted here, not round the back " +
          "lane — I couldn't tell you who came or went that way.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ]
  },

  evidence: [
    {
      id: "murder_weapon",
      type: "physical",
      name: "Brass Nataraja statue",
      description:
        "A heavy brass statue of Nataraja, normally displayed on a shelf in the " +
        "study, found on the floor near the body with faint smudging along its " +
        "base.",
      location_found: "Study, Alipore residence",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: true
    },
    {
      id: "diary_entry",
      type: "document",
      name: "Debashish's appointment diary",
      description:
        "The victim's diary, open on the desk. The final entry, dated the day " +
        "of the murder, reads: 'Confront M. tomorrow re: certificates. No more " +
        "delay — partnership cannot continue like this.'",
      location_found: "Study, Alipore residence",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: true
    },
    {
      id: "dissolution_letter",
      type: "document",
      name: "Draft partnership dissolution letter",
      description:
        "A handwritten draft, dated the day of the murder, addressed to Meera " +
        "Sen, stating Debashish's intent to dissolve their partnership and " +
        "'report the certificate matter to the authentication board.'",
      location_found: "Desk drawer, study, Alipore residence",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: true
    },
    {
      id: "bank_statement",
      type: "document",
      name: "Anirban's bank statement",
      description:
        "Found among Debashish's papers — a recent loan request from Anirban, " +
        "marked 'Declined' in Debashish's handwriting, alongside a statement " +
        "showing Anirban's mounting debts.",
      location_found: "Study, Alipore residence",
      relevance: "supporting",
      unlocks: [],
      image: null,
      unlocked_by_default: true
    },
    {
      id: "forged_certificate",
      type: "document",
      name: "Forged authentication certificate",
      description:
        "A certificate of authenticity for a 'seventeenth-century Mughal " +
        "miniature,' bearing an expert's signature that doesn't match any " +
        "verified specimen — likely fabricated.",
      location_found: "Office files, Roy & Sons Antiques, Park Street",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "feud_correspondence",
      type: "document",
      name: "Feud correspondence with Ratan Ghosh",
      description:
        "A folder of heated email printouts between Debashish and Ratan Ghosh " +
        "over the authenticity of a Chola-era bronze.",
      location_found: "Old correspondence file, Roy & Sons Antiques, Park Street",
      relevance: "red_herring",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "cash_discrepancy_note",
      type: "document",
      name: "Household accounts discrepancy",
      description:
        "A handwritten household ledger showing small, recurring, unexplained " +
        "shortfalls in petty cash over the last several months.",
      location_found: "Household accounts drawer, Alipore residence",
      relevance: "red_herring",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "torn_shawl",
      type: "forensic",
      name: "Torn shawl fabric",
      description:
        "A small scrap of dark green woven fabric snagged on the latch of the " +
        "back gate.",
      location_found: "Back gate, Alipore residence",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "phone_log",
      type: "digital",
      name: "Debashish's phone call log",
      description:
        "Call records showing a two-minute incoming call from Meera Sen at " +
        "9:45 PM — the last call the victim received before his death.",
      location_found: "Desk, study, Alipore residence",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "witness_sighting_note",
      type: "testimony",
      name: "Neighbor's account of the back gate",
      description:
        "Mrs. Chatterjee's statement describing a figure in a dark green shawl " +
        "leaving through the back gate around 10:45 PM.",
      location_found: "Interview with Mrs. Chatterjee",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "alibi_gap",
      type: "testimony",
      name: "No confirmation of Meera's alibi",
      description:
        "No regular vendor or visitor along the riverside promenade near " +
        "Princep Ghat recalls seeing Meera Sen that evening, despite it being a " +
        "well-populated spot most nights.",
      location_found: "Riverside promenade, Princep Ghat",
      relevance: "supporting",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    }
  ],

  locations: [
    {
      id: "victim_residence",
      name: "Debashish Roy's Residence",
      real_world_reference: "Alipore, Kolkata",
      description:
        "A quiet old bungalow with a front gate on the street and a rarely-used " +
        "back gate opening onto a service lane behind the property.",
      image: "/images/locations/c01_victim_residence.jpg",
      examinable_details: [
        {
          id: "back_gate",
          text:
            "The back gate's latch is loose, and a small scrap of fabric is " +
            "caught on it.",
          unlocks_evidence_ids: ["torn_shawl"]
        },
        {
          id: "household_accounts",
          text:
            "A ledger in a kitchen drawer tracks household petty cash — the " +
            "recent entries don't quite add up.",
          unlocks_evidence_ids: ["cash_discrepancy_note"]
        },
        {
          id: "desk_phone",
          text:
            "The desk phone still has its call log available for the last " +
            "several days.",
          unlocks_evidence_ids: ["phone_log"]
        }
      ]
    },
    {
      id: "antique_shop",
      name: "Roy & Sons Antiques",
      real_world_reference: "Park Street, Kolkata",
      description:
        "Debashish's gallery, closed since his death, still full of sculpture, " +
        "manuscripts, and years of paperwork.",
      image: "/images/locations/c01_antique_shop.jpg",
      examinable_details: [
        {
          id: "office_files",
          text:
            "A locked file drawer holds authentication certificates for pieces " +
            "sold in the last two years.",
          unlocks_evidence_ids: ["forged_certificate"]
        },
        {
          id: "old_correspondence",
          text:
            "A folder of old printed emails, mostly heated exchanges with a " +
            "rival dealer.",
          unlocks_evidence_ids: ["feud_correspondence"]
        }
      ]
    },
    {
      id: "riverside_promenade",
      name: "Riverside Promenade",
      real_world_reference: "Princep Ghat, Kolkata",
      description:
        "A popular evening spot along the river, usually busy with walkers and " +
        "street vendors even after dark — where Meera claims to have spent the " +
        "evening alone.",
      image: "/images/locations/c01_riverside_promenade.jpg",
      examinable_details: [
        {
          id: "vendor_testimony",
          text:
            "None of the regular tea and snack vendors who work this stretch " +
            "every evening recall seeing Meera Sen that night.",
          unlocks_evidence_ids: ["alibi_gap"]
        }
      ]
    }
  ],

  timeline: [
    { time: "7:00 PM", event: "Debashish closes the shop and drives home.", public_knowledge: true },
    { time: "8:15 PM", event: "Anirban arrives at the residence; a loud argument follows.", public_knowledge: true },
    { time: "8:45 PM", event: "Housekeeper Sunita leaves for the night.", public_knowledge: true },
    { time: "9:00 PM", event: "Meera calls Debashish, but this call is not recorded on the phone log (a separate, earlier call from her landline).", public_knowledge: false, unlocks_with: "alibi_gap" },
    { time: "9:30 PM", event: "Anirban leaves the residence, seen by the night watchman.", public_knowledge: true },
    { time: "9:45 PM", event: "Meera calls Debashish's phone for two minutes.", public_knowledge: false, unlocks_with: "phone_log" },
    { time: "10:15–10:30 PM", event: "Meera arrives at the residence via the back gate.", public_knowledge: false, unlocks_with: "torn_shawl" },
    { time: "10:30–10:45 PM", event: "Confrontation over the forged certificates and the dissolution letter turns violent.", public_knowledge: false, unlocks_with: "dissolution_letter" },
    { time: "10:45 PM", event: "A figure in a dark green shawl is seen leaving via the back gate by a neighbor.", public_knowledge: false, unlocks_with: "witness_sighting_note" },
    { time: "7:30 AM (next day)", event: "Sunita arrives and discovers the body.", public_knowledge: true }
  ],

  red_herrings: [
    {
      description:
        "Anirban had a strong financial motive and a loud argument with the " +
        "victim hours before the murder.",
      why_it_misleads:
        "The debt, the refused loan, and the shouting all make him look like " +
        "the obvious culprit.",
      how_its_debunked:
        "The night watchman confirms his car left at 9:30 PM, well before the " +
        "murder window, and his alibi at the bar afterward holds up."
    },
    {
      description:
        "Ratan Ghosh had a bitter, very public feud with the victim over the " +
        "authenticity of a bronze statue.",
      why_it_misleads:
        "The angry correspondence and public humiliation suggest a strong " +
        "motive for revenge.",
      how_its_debunked:
        "He was at an industry dinner across town all evening, confirmed by " +
        "dozens of attendees — he never had the opportunity."
    },
    {
      description:
        "The housekeeper Sunita was quietly stealing petty cash and might have " +
        "feared being caught and dismissed.",
      why_it_misleads:
        "A secret, a motive to avoid confrontation, and being the one who " +
        "'discovered' the body all raise suspicion.",
      how_its_debunked:
        "She left at 8:45 PM, well before the murder window, and her theft, " +
        "while real, gave her no reason to want Debashish dead — only afraid he " +
        "might notice."
    }
  ],

  solution: {
    culprit_id: "meera",
    method:
      "Struck once from behind with the brass Nataraja statue during a " +
      "confrontation in the study.",
    motive:
      "To stop Debashish from dissolving their partnership and exposing the " +
      "forged authentication certificates she had been selling through the " +
      "gallery.",
    key_evidence_chain: [
      "forged_certificate",
      "dissolution_letter",
      "phone_log",
      "alibi_gap",
      "torn_shawl",
      "witness_sighting_note"
    ],
    full_explanation:
      "Meera Sen had spent two years quietly selling forged authentication " +
      "certificates alongside genuine pieces — a scheme Debashish finally " +
      "uncovered. His diary and the draft dissolution letter make clear he " +
      "intended to end their partnership and report her to the authentication " +
      "board the very next morning.\n\n" +
      "Her call to him at 9:45 PM was a last attempt to change his mind. When " +
      "he refused, she drove to the house herself, slipping in through the " +
      "rarely-used back gate rather than announcing herself at the front. The " +
      "confrontation in the study escalated, and in a moment she would later " +
      "describe as barely a decision at all, she struck him with the nearest " +
      "heavy object — the brass Nataraja statue from his own shelf.\n\n" +
      "She left the way she came, catching her shawl on the gate's loose latch " +
      "on the way out, and was seen — though not recognized — by a neighbor " +
      "putting away her garden tools. Her claimed evening walk near Princep " +
      "Ghat, meant to explain her absence from home, falls apart under the " +
      "simplest check: none of the vendors who work that stretch every single " +
      "evening remember seeing her at all.\n\n" +
      "Anirban's debts and Ratan's grudge made for louder, more obvious " +
      "motives — but neither man had the opportunity. Meera had both the " +
      "motive that mattered most and the one gap in her alibi that no one else " +
      "shared."
  },

  gamification: {
    hint_system: [
      "The person with the loudest, most obvious motive left the scene before " +
      "the murder even happened. Look at who has an alibi no one can actually " +
      "confirm.",
      "Someone's account of their evening has no witness at all, at a spot " +
      "that's usually full of people.",
      "Match the torn fabric at the back gate to the person whose alibi has a " +
      "gap — then ask them about the 9:45 PM phone call."
    ],
    achievements: [
      "Cleared both innocent suspects before making an accusation",
      "Solved the case without using a single hint"
    ]
  }
};
