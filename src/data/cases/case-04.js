// src/data/cases/case-04.js
// Level 4 — "The Chowringhee Gallery Fire" — a hard-difficulty insurance fraud case.
// Drop this file in as-is; it matches the schema from the restructuring prompt.

export default {
  case_id: "case-04",
  level_number: 4,
  title: "The Chowringhee Gallery Fire",
  case_type: "fraud",
  difficulty: "hard",

  setting: {
    city: "Kolkata, India",
    date: "a Monday night in November",
    real_world_anchor: "Chowringhee, Kolkata"
  },

  police_briefing: {
    summary:
      "A fire gutted the ground floor of Mallik Gallery on Chowringhee just " +
      "after 2 AM, destroying a collection of paintings insured for an " +
      "enormous sum, including several attributed to the celebrated Bengali " +
      "painter Satyen Bose. The owner, Aveek Mallik, has filed a full " +
      "insurance claim for the loss.\n\n" +
      "Fire investigators quickly ruled out an electrical fault: accelerant " +
      "residue and multiple points of origin point to deliberate arson. That " +
      "alone would be a straightforward case of arson-for-insurance. But a " +
      "shopkeeper next door recalls a van being loaded late at night, days " +
      "before the fire — and a handful of salvageable fragments recovered " +
      "from the ash don't match the known material composition of the " +
      "paintings they're supposed to be.\n\n" +
      "If the fragments aren't genuine, then what actually burned wasn't the " +
      "real collection at all. Work out where the real paintings went, who " +
      "helped make that possible, and who ultimately set the fire to make " +
      "sure no one would ever be able to tell the difference.",
    victim_or_target: {
      name: "Aveek Mallik",
      age: 61,
      occupation: "Owner of Mallik Gallery, art dealer and collector",
      background:
        "Aveek runs a gallery on Chowringhee that has been in his family for " +
        "three generations, known for its collection of modern Bengali " +
        "painting, including several works attributed to Satyen Bose. Years " +
        "ago, a failed art-investment fund he'd launched left him deep in " +
        "debt, a fact he's kept carefully private from clients and, by most " +
        "accounts, from his own family. He insured the collection heavily " +
        "ahead of a planned expansion, and commissioned an independent " +
        "appraisal just three days before the fire.",
      last_known_movements:
        "Closed the gallery as usual that evening and went home. The " +
        "insurance appraisal had concluded three days earlier. He says he " +
        "was asleep at home when he received a call about the fire around " +
        "2:20 AM."
    },
    incident_details: {
      location: "Mallik Gallery, Chowringhee, Kolkata",
      time_estimate: "Fire started between approximately 2:00 and 2:15 AM",
      cause_of_death_or_method:
        "Fire investigators found accelerant residue and multiple points of " +
        "origin, consistent with deliberate arson rather than an accidental " +
        "or electrical cause.",
      initial_state_of_scene:
        "The gallery's ground floor was gutted, reducing the insured " +
        "paintings to ash and precluding any straightforward examination of " +
        "whether they were genuine — until a few salvageable fragments were " +
        "recovered and sent for analysis."
    }
  },

  suspects: [
    {
      id: "aveek",
      name: "Aveek Mallik",
      role_in_victims_life: "Gallery owner; the man filing the insurance claim",
      alibi:
        "Says he was asleep at home when he got the call about the fire, and " +
        "is devastated by the loss of pieces his family held for decades.",
      true_whereabouts:
        "At home, exactly as claimed — he arranged for an intermediary to " +
        "hire an arsonist rather than being present himself, keeping his own " +
        "hands clean.",
      motive:
        "Crushing debt from a failed art-investment fund years earlier; saw " +
        "an opportunity to profit from the same collection twice — once by " +
        "quietly selling the genuine paintings, and again through a fraudulent " +
        "insurance payout.",
      motive_strength: "strong",
      personality: [
        "outwardly grief-stricken and cooperative",
        "meticulous and controlled under pressure",
        "subtly steers conversation away from financial questions"
      ],
      secrets: [
        "Secretly sold the genuine paintings to an overseas private collector " +
        "weeks before the fire",
        "Commissioned convincing forgeries to replace them so the switch " +
        "wouldn't be noticed before the insurance valuation",
        "Arranged for the gallery to be set on fire to destroy the forgeries " +
        "and prevent any examination"
      ],
      guilty: true,
      relationship_to_other_suspects:
        "Long working relationship with Ranjan Basu; a longtime client of " +
        "Sourav Dutta; employer of Kunal Sen.",
      portrait_image: null
    },
    {
      id: "ranjan",
      name: "Ranjan Basu",
      role_in_victims_life: "Art restorer who has worked with the gallery for years",
      alibi:
        "Says he was home that night, uninvolved in gallery affairs beyond " +
        "occasional restoration work.",
      true_whereabouts:
        "At home that night, as claimed — but weeks earlier he'd been " +
        "secretly commissioned by Aveek to paint a set of convincing forgeries " +
        "of the collection's most valuable pieces.",
      motive:
        "Needed the substantial payment Aveek offered, and told himself it " +
        "wasn't his business what Aveek intended to do with the copies.",
      motive_strength: "moderate",
      personality: [
        "quiet and professionally respected",
        "uncomfortable with confrontation",
        "genuinely torn between guilt and self-justification"
      ],
      secrets: [
        "Painted a set of forgeries for Aveek in the weeks before the fire",
        "Was paid generously and told not to ask questions"
      ],
      guilty: true,
      relationship_to_other_suspects:
        "Long professional relationship with Aveek; no connection to Sourav " +
        "or Kunal.",
      portrait_image: "/images/suspects/c04_ranjan.jpg"
    },
    {
      id: "sourav",
      name: "Sourav Dutta",
      role_in_victims_life: "Independent appraiser hired by the insurer",
      alibi:
        "Says his valuation, completed three days before the fire, was " +
        "thorough and by the book.",
      true_whereabouts:
        "Conducted the valuation as claimed, though rushed — he accepted an " +
        "informal 'referral fee' from Aveek to complete the report ahead of " +
        "schedule, with no idea the pieces he examined were forgeries.",
      motive:
        "Accepted an inappropriate rush fee, and is now embarrassed about the " +
        "corners he cut, though he had no knowledge of any fraud.",
      motive_strength: "weak",
      personality: [
        "professionally proud, mortified at the suggestion he was careless",
        "cooperative once he understands the stakes",
        "genuinely shaken by the possibility he was deceived"
      ],
      secrets: [
        "Accepted a 'rush fee' from Aveek to fast-track the appraisal report"
      ],
      guilty: false,
      relationship_to_other_suspects:
        "Longtime professional relationship with Aveek; no " +
        "connection to Ranjan or Kunal.",
      portrait_image: "/images/suspects/c04_sourav.jpg"
    },
    {
      id: "kunal",
      name: "Kunal Sen",
      role_in_victims_life: "Night security guard at the gallery",
      alibi:
        "Says he did his usual rounds and stepped away briefly around 2 AM " +
        "for tea from a nearby stall, noticing nothing unusual before that.",
      true_whereabouts:
        "Exactly as claimed, but he'd been paid by an intermediary claiming " +
        "to represent a client wanting a private after-hours viewing, to leave " +
        "a side door unlocked and step away from that section around 2 AM.",
      motive:
        "Needed extra money for a family expense, and believed he was simply " +
        "helping arrange a quiet private viewing.",
      motive_strength: "weak",
      personality: [
        "hardworking and normally conscientious",
        "increasingly anxious as questioning continues",
        "clearly shaken once he realizes what he may have enabled"
      ],
      secrets: [
        "Was paid to leave a side door unlocked and step away at a specific " +
        "time, without knowing why"
      ],
      guilty: false,
      relationship_to_other_suspects:
        "Cordial with Aveek; professional friction with Sourav.",
      portrait_image: "/images/suspects/c04_kunal.jpg"
    }
  ],

  witnesses: [
    {
      id: "amitava",
      name: "Amitava",
      connection_to_case: "Fire investigator assigned to the scene",
      reliability: "reliable",
      what_they_actually_saw:
        "Found accelerant residue near the side door and identified multiple " +
        "distinct points of origin — the signature of a deliberate, " +
        "professional job rather than an accident or an amateur attempt.",
      what_they_will_initially_claim:
        "The same — his findings are in his official report and he has no " +
        "reason to withhold anything.",
      personality: [
        "methodical and precise",
        "unbothered by pressure, sticks to what the evidence shows",
        "happy to explain technical findings in plain terms"
      ],
      portrait_image: null
    },
    {
      id: "bannerjee",
      name: "Mrs. Bannerjee",
      connection_to_case: "Runs a shop next door to the gallery",
      reliability: "reliable",
      what_they_actually_saw:
        "Saw a van parked outside the gallery late at night about ten days " +
        "before the fire, being loaded with what looked like large framed " +
        "items — she assumed it was ordinary gallery business at the time.",
      what_they_will_initially_claim:
        "The same, though she only mentions it once asked directly about " +
        "anything unusual in the weeks before the fire.",
      personality: [
        "chatty and observant about the neighborhood",
        "not naturally suspicious of people",
        "happy to help once she understands why it matters"
      ],
      portrait_image: null
    }
  ],

  dialogue: {
    aveek: [
      {
        topic_id: "ask_gallery",
        topic_label: "Ask about the gallery and the collection",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "My family built this gallery over three generations. The Bose " +
          "pieces alone were the heart of the collection. Losing them is like " +
          "losing part of my own history.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_that_night_aveek",
        topic_label: "Ask where he was that night",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "Asleep at home. I got the call a little after two and rushed over. " +
          "I've barely slept since.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "confront_overseas_email",
        topic_label: "Confront him with the overseas sale email",
        requires_evidence_id: "overseas_sale_email",
        requires_topic_ids: [],
        response:
          "That was a private sale of a few smaller, unrelated pieces — " +
          "nothing to do with what burned. Collectors sell things quietly all " +
          "the time, Inspector, it's not unusual.",
        reaction: "evasive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: ["confront_forgery_payment"]
      },
      {
        topic_id: "confront_forgery_payment",
        topic_label: "Confront him with the payment to Ranjan Basu",
        requires_evidence_id: "forgery_payment_record",
        requires_topic_ids: ["confront_overseas_email"],
        response:
          "Ranjan does restoration work for me regularly. That payment was " +
          "for routine conservation, nothing more sinister than that.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: ["confront_fragment_analysis"]
      },
      {
        topic_id: "confront_fragment_analysis",
        topic_label: "Confront him with the fragment analysis",
        requires_evidence_id: "burnt_fragment_analysis",
        requires_topic_ids: ["confront_forgery_payment"],
        response:
          "That lab must have made an error. I don't know what else to tell " +
          "you — those were my family's paintings.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: ["confront_van_sighting"]
      },
      {
        topic_id: "confront_van_sighting",
        topic_label: "Confront him with the van sighting",
        requires_evidence_id: "van_sighting_note",
        requires_topic_ids: ["confront_fragment_analysis"],
        response:
          "...Alright. Yes. I sold the real paintings to a private collector " +
          "abroad. I had Ranjan paint copies so no one would notice before the " +
          "appraisal. And when it became clear an insurance investigation " +
          "would eventually look too closely at those copies, I arranged for " +
          "someone to make sure there'd be nothing left to examine. I was " +
          "drowning in debt. I saw a way to be paid twice for the same " +
          "collection, and I took it.",
        reaction: "breaks_down",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    ranjan: [
      {
        topic_id: "ask_relationship_gallery",
        topic_label: "Ask about his work with Mallik Gallery",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "I've done restoration work for Aveek for close to fifteen years. " +
          "He's always paid fairly and trusted my judgment on delicate " +
          "pieces.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_that_night_ranjan",
        topic_label: "Ask where he was the night of the fire",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "Home, asleep. I heard about the fire the next morning and was " +
          "genuinely shocked — some of those pieces I'd worked on myself over " +
          "the years.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "confront_forgery_payment_ranjan",
        topic_label: "Confront him with the payment record",
        requires_evidence_id: "forgery_payment_record",
        requires_topic_ids: [],
        response:
          "That was payment for a large restoration commission, that's all. " +
          "Aveek wanted several pieces professionally reproduced for a " +
          "planned museum loan program.",
        reaction: "evasive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: ["confront_studio_supplies"]
      },
      {
        topic_id: "confront_studio_supplies",
        topic_label: "Confront him with the matching studio materials",
        requires_evidence_id: "ranjan_studio_supplies",
        requires_topic_ids: ["confront_forgery_payment_ranjan"],
        response:
          "Fine, yes, the materials match because I made those reproductions. " +
          "But he told me they were for a legitimate loan program. I didn't " +
          "know he meant to pass them off as the real thing for an insurance " +
          "claim.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: ["confront_fragment_analysis_ranjan"]
      },
      {
        topic_id: "confront_fragment_analysis_ranjan",
        topic_label: "Show him the fragment analysis",
        requires_evidence_id: "burnt_fragment_analysis",
        requires_topic_ids: ["confront_studio_supplies"],
        response:
          "...I painted those copies. He paid me very well and told me not to " +
          "ask questions, and I needed the money badly enough that I didn't " +
          "push. I told myself it wasn't really my concern what he did with " +
          "them afterward. I swear to you, I had no idea about any fire. I " +
          "never would have agreed to that.",
        reaction: "breaks_down",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    sourav: [
      {
        topic_id: "ask_role_sourav",
        topic_label: "Ask about his work as an appraiser",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "I'm an independent appraiser, hired by the insurer to value the " +
          "collection ahead of the policy renewal. I've done this kind of " +
          "work for over twenty years.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_valuation_process",
        topic_label: "Ask how thorough his process was",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "Standard procedure — visual inspection, provenance review, " +
          "comparison against prior records. I was a little pressed for time " +
          "on this one, but I stand by the work.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "confront_rush_fee",
        topic_label: "Confront him about the rush fee",
        requires_evidence_id: "rush_fee_receipt",
        requires_topic_ids: [],
        response:
          "...Aveek offered me something extra to get the report done ahead " +
          "of his own deadline. I shouldn't have accepted it, and I still " +
          "examined every piece, just faster than I normally would have. I " +
          "had no reason to think anything was wrong.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: ["ask_forgery_possibility"]
      },
      {
        topic_id: "ask_forgery_possibility",
        topic_label: "Ask if he could have missed a forgery",
        requires_evidence_id: null,
        requires_topic_ids: ["confront_rush_fee"],
        response:
          "A truly excellent forgery, under time pressure, examined by " +
          "someone who trusted the client... yes, honestly, it's possible. " +
          "I'm horrified at the thought, but I can't rule it out.",
        reaction: "breaks_down",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    kunal: [
      {
        topic_id: "ask_role_kunal",
        topic_label: "Ask about his job at the gallery",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "Night security, two years now. I do rounds every hour, check the " +
          "doors and the alarm panel.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_that_night_kunal",
        topic_label: "Ask about the night of the fire",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "I did my usual rounds. Stepped out around two for tea from the " +
          "stall down the road, like most nights. Nothing seemed off before " +
          "that.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "confront_bribe_note",
        topic_label: "Confront him about the payment he received",
        requires_evidence_id: "security_bribe_note",
        requires_topic_ids: [],
        response:
          "...Someone contacted me saying a client wanted a quiet after-hours " +
          "look at a piece, and paid me to leave the side door open and stay " +
          "away from that end of the building for a bit. I swear I thought it " +
          "was just a private viewing. I didn't know anything about a fire. " +
          "I feel sick thinking about what I might have let happen.",
        reaction: "breaks_down",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    amitava: [
      {
        topic_id: "ask_findings",
        topic_label: "Ask what he found at the scene",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "Accelerant residue near the side door, and burn patterns showing " +
          "multiple separate points of origin. That's not how an electrical " +
          "fault or an accidental fire behaves — this was set, deliberately, " +
          "by someone who knew what they were doing.",
        reaction: "calm",
        unlocks_evidence_ids: ["arson_report"],
        unlocks_topic_ids: ["ask_origin_points"]
      },
      {
        topic_id: "ask_origin_points",
        topic_label: "Ask about the multiple points of origin",
        requires_evidence_id: null,
        requires_topic_ids: ["ask_findings"],
        response:
          "Three separate points, spaced to make sure the whole ground floor " +
          "went up fast. That level of planning tells me this wasn't " +
          "impulsive — someone wanted total destruction, not just a fire.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    bannerjee: [
      {
        topic_id: "ask_what_saw_bannerjee",
        topic_label: "Ask what she saw in the weeks before the fire",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "About ten days before, there was a van parked outside the gallery " +
          "quite late — being loaded with big framed things. I assumed it was " +
          "just gallery deliveries, nothing I thought twice about.",
        reaction: "calm",
        unlocks_evidence_ids: ["van_sighting_note"],
        unlocks_topic_ids: ["ask_frequency"]
      },
      {
        topic_id: "ask_frequency",
        topic_label: "Ask if that was unusual",
        requires_evidence_id: null,
        requires_topic_ids: ["ask_what_saw_bannerjee"],
        response:
          "Now that you mention it, yes — gallery deliveries usually happen " +
          "during the day. That van came well after closing, which I suppose " +
          "should have struck me as odd at the time.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ]
  },

  evidence: [
    {
      id: "insurance_claim_form",
      type: "document",
      name: "Aveek's insurance claim",
      description:
        "The formal claim filed by Aveek listing the destroyed paintings and " +
        "their declared value.",
      location_found: "Provided by the insurer as standard paperwork",
      relevance: "supporting",
      unlocks: [],
      image: null,
      unlocked_by_default: true
    },
    {
      id: "arson_report",
      type: "forensic",
      name: "Fire investigator's arson report",
      description:
        "Confirms accelerant residue and three distinct points of origin, " +
        "consistent with a deliberately set fire.",
      location_found: "Provided by fire investigator Amitava",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "appraisal_report",
      type: "document",
      name: "Sourav's appraisal report",
      description:
        "The valuation report filed three days before the fire, listing the " +
        "collection's assessed value.",
      location_found: "Sourav Dutta's office, Camac Street, Kolkata",
      relevance: "supporting",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "rush_fee_receipt",
      type: "document",
      name: "Rush fee payment record",
      description:
        "A record showing Aveek paid Sourav an informal 'referral fee' " +
        "around the time of the appraisal, to expedite the report.",
      location_found: "Sourav Dutta's office, Camac Street, Kolkata",
      relevance: "red_herring",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "forgery_payment_record",
      type: "document",
      name: "Payment record to Ranjan Basu",
      description:
        "A bank record showing a large, vaguely labeled payment from Aveek " +
        "to Ranjan Basu weeks before the fire.",
      location_found: "Ranjan Basu's studio, Kumartuli, Kolkata",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "overseas_sale_email",
      type: "digital",
      name: "Overseas sale correspondence",
      description:
        "An email exchange between Aveek and a private overseas collector " +
        "finalizing the sale of the 'original collection' weeks before the " +
        "fire.",
      location_found: "Aveek Mallik's study, Alipore, Kolkata",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "debt_history",
      type: "document",
      name: "Records of past financial trouble",
      description:
        "Documents detailing Aveek's substantial debt from a failed " +
        "art-investment fund years earlier.",
      location_found: "Aveek Mallik's study, Alipore, Kolkata",
      relevance: "supporting",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "van_sighting_note",
      type: "testimony",
      name: "Mrs. Bannerjee's account of the van",
      description:
        "Her statement describing a van loaded with large framed items late " +
        "at night, about ten days before the fire.",
      location_found: "Interview with Mrs. Bannerjee",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "security_bribe_note",
      type: "digital",
      name: "Kunal's payment message",
      description:
        "A message on Kunal's phone confirming he was paid to leave a side " +
        "door unlocked and step away around 2 AM the night of the fire.",
      location_found: "Guard's locker, Mallik Gallery ruins",
      relevance: "red_herring",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "side_door_forensics",
      type: "forensic",
      name: "Side door lock examination",
      description:
        "Forensic examination showing the side door was unlocked rather than " +
        "forced open.",
      location_found: "Mallik Gallery ruins, Chowringhee, Kolkata",
      relevance: "supporting",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "ranjan_studio_supplies",
      type: "forensic",
      name: "Matching studio materials",
      description:
        "Pigments and canvas materials in Ranjan's studio that match residue " +
        "found on unburned fragments recovered from the gallery.",
      location_found: "Ranjan Basu's studio, Kumartuli, Kolkata",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "burnt_fragment_analysis",
      type: "forensic",
      name: "Salvaged fragment analysis",
      description:
        "Lab analysis of a few salvageable painting fragments recovered from " +
        "the ash, showing pigment and canvas composition inconsistent with " +
        "the known originals — proving what burned wasn't genuine.",
      location_found: "Mallik Gallery ruins, Chowringhee, Kolkata",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    }
  ],

  locations: [
    {
      id: "mallik_gallery_ruins",
      name: "Mallik Gallery (Ruins)",
      real_world_reference: "Chowringhee, Kolkata",
      description:
        "The gutted ground floor of the gallery, still being processed by " +
        "fire investigators.",
      examinable_details: [
        {
          id: "salvaged_fragments",
          text:
            "A handful of painting fragments survived enough to be sent for " +
            "material analysis.",
          unlocks_evidence_ids: ["burnt_fragment_analysis"]
        },
        {
          id: "side_door",
          text: "The side door's lock mechanism can be examined for signs of forced entry.",
          unlocks_evidence_ids: ["side_door_forensics"]
        },
        {
          id: "guard_locker",
          text: "Kunal's locker, left untouched since the night of the fire.",
          unlocks_evidence_ids: ["security_bribe_note"]
        }
      ]
    },
    {
      id: "appraiser_office",
      name: "Sourav Dutta's Office",
      real_world_reference: "Camac Street, Kolkata",
      description:
        "The independent appraiser's office, where his valuation records and " +
        "billing history are kept.",
      examinable_details: [
        {
          id: "valuation_files",
          text: "Sourav's filed valuation report for the Mallik collection.",
          unlocks_evidence_ids: ["appraisal_report"]
        },
        {
          id: "payment_records",
          text: "Recent payment records, including an unusual entry from Aveek Mallik.",
          unlocks_evidence_ids: ["rush_fee_receipt"]
        }
      ]
    },
    {
      id: "ranjan_studio",
      name: "Ranjan Basu's Studio",
      real_world_reference: "Kumartuli, Kolkata",
      description:
        "A small restoration studio tucked into Kolkata's historic artisan " +
        "quarter.",
      examinable_details: [
        {
          id: "bank_records",
          text: "Ranjan's bank records, including a large recent deposit.",
          unlocks_evidence_ids: ["forgery_payment_record"]
        },
        {
          id: "supply_cabinet",
          text: "A cabinet of pigments and canvas materials used for recent work.",
          unlocks_evidence_ids: ["ranjan_studio_supplies"]
        }
      ]
    },
    {
      id: "aveek_study",
      name: "Aveek Mallik's Study",
      real_world_reference: "Alipore, Kolkata",
      description:
        "Aveek's private home study, where he handles the gallery's personal " +
        "correspondence and finances.",
      examinable_details: [
        {
          id: "computer_emails",
          text: "Aveek's personal computer holds his recent email correspondence.",
          unlocks_evidence_ids: ["overseas_sale_email"]
        },
        {
          id: "financial_records",
          text: "A drawer of older financial paperwork.",
          unlocks_evidence_ids: ["debt_history"]
        }
      ]
    }
  ],

  timeline: [
    { time: "~3 weeks before", event: "Aveek finalizes a private sale of the genuine paintings to an overseas collector.", public_knowledge: false },
    { time: "~2-3 weeks before", event: "Aveek commissions Ranjan Basu to paint forgeries of the sold pieces.", public_knowledge: false },
    { time: "~10 days before", event: "A van is loaded late at night outside the gallery, seen by Mrs. Bannerjee.", public_knowledge: false },
    { time: "3 days before", event: "Sourav Dutta conducts a rushed appraisal, valuing the collection (now forgeries) at genuine prices.", public_knowledge: true },
    { time: "1:45 AM (night of the fire)", event: "Kunal is paid to leave a side door unlocked and step away.", public_knowledge: false },
    { time: "2:00–2:15 AM", event: "The fire is set at three separate points of origin.", public_knowledge: true },
    { time: "2:20 AM", event: "The fire is noticed and the brigade is called.", public_knowledge: true },
    { time: "Following days", event: "The arson report and fragment analysis raise questions about what actually burned.", public_knowledge: false }
  ],

  red_herrings: [
    {
      description:
        "Sourav Dutta rushed his appraisal after accepting an informal fee " +
        "from Aveek.",
      why_it_misleads:
        "Taking money from the client and cutting corners on the valuation " +
        "looks like direct collusion in the fraud.",
      how_its_debunked:
        "He genuinely had no idea the pieces were forgeries — the fee bought " +
        "him speed, not knowledge, and he's horrified once he realizes what " +
        "he may have missed."
    },
    {
      description:
        "Kunal Sen was paid to leave a side door unlocked and step away " +
        "around the exact time the fire was set.",
      why_it_misleads:
        "Direct, paid access to the building at the precise moment of the " +
        "fire looks like knowing complicity in the arson.",
      how_its_debunked:
        "He believed the payment was for an unrelated private viewing and " +
        "had no idea it was connected to any plan to set a fire."
    }
  ],

  solution: {
    culprit_id: "aveek",
    method:
      "Secretly sold the genuine paintings to an overseas collector, " +
      "commissioned Ranjan Basu to paint convincing forgeries to replace " +
      "them, let a rushed appraisal value the forgeries at genuine prices, " +
      "then arranged for the gallery to be set on fire to destroy the " +
      "forgeries and prevent any examination before collecting a full " +
      "insurance payout.",
    motive:
      "To profit twice from the same collection — once through a quiet " +
      "overseas sale, and again through a fraudulent insurance claim — in " +
      "order to pay off crushing debt from a failed investment venture.",
    key_evidence_chain: [
      "overseas_sale_email",
      "forgery_payment_record",
      "van_sighting_note",
      "ranjan_studio_supplies",
      "burnt_fragment_analysis",
      "arson_report"
    ],
    full_explanation:
      "The paintings that burned in Mallik Gallery were never the genuine " +
      "collection everyone assumed had been lost. Weeks before the fire, " +
      "Aveek Mallik — quietly buried in debt from a failed investment venture " +
      "years earlier — arranged to sell the real paintings to a private " +
      "collector overseas, striking a deal that would net him a substantial " +
      "sum with no one the wiser.\n\n" +
      "To keep the switch hidden long enough to collect on the insurance " +
      "too, he commissioned longtime restorer Ranjan Basu to paint a set of " +
      "convincing forgeries, telling Ranjan they were for a museum loan " +
      "program. A rushed appraisal — sped along by an under-the-table fee " +
      "Aveek paid to Sourav Dutta — valued the forgeries as if they were the " +
      "genuine originals, completing the paper trail he needed.\n\n" +
      "The final step was making sure no one would ever look closely enough " +
      "at the forgeries to notice. Aveek arranged, through an intermediary, " +
      "to have a side door quietly left open — Kunal Sen, believing he was " +
      "simply enabling a private viewing, was paid to step away at the right " +
      "moment — and had the gallery set alight at three separate points to " +
      "ensure total destruction.\n\n" +
      "Sourav's rushed valuation and Kunal's unwitting bribe both looked, at " +
      "first, like signs of knowing complicity. But neither man had any idea " +
      "what they were really part of. It was the overseas sale " +
      "correspondence, the payment to Ranjan, a neighbor's memory of a van " +
      "loaded late at night, and a lab report on a few surviving fragments " +
      "that finally proved the fire wasn't destroying a tragedy — it was " +
      "destroying the evidence of one."
  },

  gamification: {
    hint_system: [
      "The paintings that burned might not have been the paintings everyone " +
      "assumes they were.",
      "Follow the money in two directions — one leading overseas, one " +
      "leading to a local restorer's studio.",
      "Compare the ash fragments against the studio supplies of the man " +
      "Aveek quietly paid weeks before the fire — then find out where the " +
      "real paintings actually went."
    ],
    achievements: [
      "Identified the double-fraud (secret sale plus insurance claim) " +
      "without using a hint",
      "Cleared both unwitting suspects before making an accusation"
    ]
  }
};
