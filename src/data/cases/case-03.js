// src/data/cases/case-03.js
// Level 3 — "The Vanishing at Rabindra Sarobar" — a hard-difficulty disappearance.
// Drop this file in as-is; it matches the schema from the restructuring prompt.

export default {
  case_id: "case-03",
  level_number: 3,
  title: "The Vanishing at Rabindra Sarobar",
  case_type: "disappearance",
  difficulty: "hard",

  setting: {
    city: "Kolkata, India",
    date: "a Thursday evening in June",
    real_world_anchor: "Rabindra Sarobar, Kolkata"
  },

  police_briefing: {
    summary:
      "Arjun Kapoor, the 34-year-old founder of the fintech startup NovaPay, " +
      "hasn't been seen since he went for his usual evening jog around " +
      "Rabindra Sarobar last Thursday. His car was found neatly parked in the " +
      "usual lot, keys inside. His phone was found at his apartment, fully " +
      "charged on its stand — unusual for a man who was rarely without it.\n\n" +
      "There's no body, no sign of a struggle, and no ransom demand. Everyone " +
      "close to him assumes the worst: an abduction, or worse. But the closer " +
      "you look at NovaPay's books, the less this looks like something that " +
      "happened to Arjun, and the more it looks like something Arjun arranged " +
      "himself.\n\n" +
      "Days before he vanished, his co-founder discovered serious " +
      "irregularities in the company's investor accounts. An angry investor " +
      "had left him a threatening voicemail. His fiancée says he'd grown " +
      "secretive and anxious. And somewhere between the lake and wherever he " +
      "actually went that night, a cab driver picked up a man matching his " +
      "description, in different clothes, and dropped him near the airport. " +
      "Work out who helped him disappear, and why.",
    victim_or_target: {
      name: "Arjun Kapoor",
      age: 34,
      occupation: "Founder and CEO of NovaPay, a fintech startup",
      background:
        "Arjun built NovaPay from a small idea into one of Kolkata's fastest- " +
        "growing fintech companies over six years, raising money from dozens " +
        "of investors on the promise of high, steady returns. In reality, " +
        "returns paid to early investors were funded largely by money from " +
        "newer investors — a structure that could only hold up as long as new " +
        "money kept coming in. His co-founder Vikram Chatterjee began " +
        "noticing irregularities in the accounts in the weeks before Arjun " +
        "disappeared. Arjun was engaged to Rhea Malhotra, and by most " +
        "accounts had grown visibly stressed and secretive in recent weeks.",
      last_known_movements:
        "Left the NovaPay office around 6:15 PM after a tense conversation " +
        "with Vikram about the account discrepancies. Went home briefly to " +
        "change into jogging clothes, leaving his phone behind on its " +
        "charger. Arrived at Rabindra Sarobar around 7:00 PM and began his " +
        "usual jogging route, as confirmed by regular evening joggers."
    },
    incident_details: {
      location: "Jogging path around Rabindra Sarobar Lake",
      time_estimate: "Between 7:00 PM and 7:45 PM",
      cause_of_death_or_method:
        "Initially treated as a possible abduction, but mounting evidence " +
        "points toward a voluntarily staged disappearance rather than any " +
        "harm coming to him.",
      initial_state_of_scene:
        "His car was found neatly parked with the keys inside; his phone was " +
        "left behind at his apartment, fully charged — behavior everyone who " +
        "knows him calls completely out of character."
    }
  },

  suspects: [
    {
      id: "vikram",
      name: "Vikram Chatterjee",
      role_in_victims_life: "Co-founder and business partner at NovaPay",
      alibi:
        "Says he spent the entire evening in an emergency meeting with the " +
        "company's lawyers and two board members, discussing the account " +
        "irregularities he'd discovered.",
      true_whereabouts:
        "Exactly as claimed — in that meeting the entire evening, with " +
        "multiple people able to confirm his presence throughout.",
      motive:
        "Would gain sole control of NovaPay if Arjun were gone, and had " +
        "recently had heated arguments with him over the company's finances.",
      motive_strength: "moderate",
      personality: [
        "sharp and detail-oriented",
        "increasingly angry rather than sad about the situation",
        "wants Arjun found and held accountable, not harmed"
      ],
      secrets: [
        "Had drafted an email to the board and regulators about the " +
        "irregularities, intending to send it the following week"
      ],
      guilty: false,
      relationship_to_other_suspects:
        "No relationship with Sanjana or Farid beyond professional dealings; " +
        "knows Rhea only casually through Arjun.",
      portrait_image: null
    },
    {
      id: "rhea",
      name: "Rhea Malhotra",
      role_in_victims_life: "Arjun's fiancée",
      alibi:
        "Says she was at a work dinner with colleagues until late, and only " +
        "grew worried when Arjun stopped answering her texts around 9:30 PM.",
      true_whereabouts:
        "At the work dinner exactly as claimed, confirmed by several " +
        "colleagues.",
      motive:
        "None of substance — genuinely distressed and pushing hard for the " +
        "investigation to move faster.",
      motive_strength: "none",
      personality: [
        "anxious and increasingly frustrated with the pace of the investigation",
        "protective of Arjun's reputation",
        "honest, if a little defensive when questioned closely"
      ],
      secrets: [
        "Didn't know about a recently increased life insurance policy Arjun " +
        "had taken out naming her"
      ],
      guilty: false,
      relationship_to_other_suspects:
        "Cordial with Vikram, has never met Sanjana or Farid personally.",
      portrait_image: null
    },
    {
      id: "sanjana",
      name: "Sanjana Iyer",
      role_in_victims_life: "NovaPay's CFO and personal accountant to Arjun",
      alibi:
        "Says she was catching up on paperwork at home alone that evening, " +
        "with no one to confirm it.",
      true_whereabouts:
        "At home, but not doing paperwork — finalizing an offshore transfer " +
        "and a set of travel documents for Arjun under a new identity, as part " +
        "of a disappearance she'd been quietly arranging with him for days.",
      motive:
        "Deeply complicit in the investor fraud herself; helping Arjun " +
        "vanish removed the one person who could implicate her if caught, and " +
        "she intended to eventually join him.",
      motive_strength: "strong",
      personality: [
        "calm and controlled under normal circumstances",
        "meticulous with money and paperwork",
        "becomes flustered rather than hostile when cornered"
      ],
      secrets: [
        "Helped arrange a false identity and an offshore transfer for Arjun",
        "Was fully aware of, and complicit in, the investor fraud"
      ],
      guilty: true,
      relationship_to_other_suspects:
        "Purely professional relationship with Vikram; barely knows Rhea or " +
        "Farid.",
      portrait_image: null
    },
    {
      id: "farid",
      name: "Farid Khan",
      role_in_victims_life: "An investor who lost his life savings in NovaPay",
      alibi:
        "Says he was at his nephew's engagement ceremony all evening, with " +
        "dozens of family members present.",
      true_whereabouts:
        "At the engagement ceremony exactly as claimed.",
      motive:
        "Lost his life savings to Arjun's fraud and left him an angry, " +
        "threatening voicemail days before the disappearance.",
      motive_strength: "moderate",
      personality: [
        "still furious about his financial losses",
        "regrets the tone of his voicemail, if not the sentiment",
        "protective of his family, embarrassed to be seen as a suspect"
      ],
      secrets: [
        "None beyond the voicemail — his anger is genuine but he took no " +
        "further action"
      ],
      guilty: false,
      relationship_to_other_suspects:
        "No relationship with Vikram, Sanjana, or Rhea beyond having been an " +
        "investor in NovaPay.",
      portrait_image: null
    }
  ],

  witnesses: [
    {
      id: "debjani",
      name: "Debjani",
      connection_to_case: "A regular evening jogger at Rabindra Sarobar",
      reliability: "reliable",
      what_they_actually_saw:
        "Saw Arjun that evening looking unusually anxious, checking his phone " +
        "repeatedly, and briefly meeting someone near the boat club before " +
        "continuing his run alone.",
      what_they_will_initially_claim:
        "The same, though she only mentions the brief meeting when asked " +
        "directly — at the time it seemed unremarkable.",
      personality: [
        "friendly and observant, knows most of the lake's regulars by sight",
        "genuinely worried once she heard he'd gone missing",
        "straightforward, doesn't embellish what she saw"
      ],
      portrait_image: null
    },
    {
      id: "iqbal",
      name: "Iqbal",
      connection_to_case: "A cab driver who works the roads near the lake",
      reliability: "reliable",
      what_they_actually_saw:
        "Picked up a man matching Arjun's build and face near the lake around " +
        "7:45 PM, wearing different clothes than what witnesses describe him " +
        "leaving home in and a cap pulled low, and dropped him near the " +
        "domestic airport terminal.",
      what_they_will_initially_claim:
        "The same — he has no reason to hide it and didn't think much of the " +
        "fare until police started asking questions about that night.",
      personality: [
        "easygoing, chatty about his regular routes",
        "good with faces and times, keeps mental track of his fares",
        "a little uneasy about being pulled into a police matter"
      ],
      portrait_image: null
    }
  ],

  dialogue: {
    vikram: [
      {
        topic_id: "ask_partnership",
        topic_label: "Ask about his partnership with Arjun",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "We built NovaPay together from nothing over six years. I was proud " +
          "of what we made. Lately, though, things between us had gotten " +
          "tense — and I think you already know why.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_alibi_vikram",
        topic_label: "Ask where he was that evening",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "In an emergency meeting with our lawyers and two board members, " +
          "the entire evening. I can give you every name in that room.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "confront_whistleblower",
        topic_label: "Confront him with the draft email",
        requires_evidence_id: "whistleblower_email",
        requires_topic_ids: [],
        response:
          "Yes, I found serious problems in the accounts and I was going to " +
          "report them — to the board, to regulators, whoever needed to know. " +
          "I wanted him held accountable, in a courtroom. I never wanted " +
          "anything to happen to him.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_reaction",
        topic_label: "Ask how he felt about Arjun",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "Betrayed, honestly. Angry. But I wanted him to face what he'd " +
          "done, not to vanish from it entirely — that just leaves everyone " +
          "he defrauded with nothing.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    rhea: [
      {
        topic_id: "ask_relationship_rhea",
        topic_label: "Ask about her relationship with Arjun",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "We've been engaged almost a year. He'd been stressed lately, more " +
          "than usual, but he wouldn't tell me why. I assumed it was work.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_that_night_rhea",
        topic_label: "Ask where she was that evening",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "At a work dinner with colleagues until late. I texted him a few " +
          "times through the evening and got nothing back, which wasn't like " +
          "him at all. I started really worrying around half nine.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "confront_insurance",
        topic_label: "Confront her with the life insurance policy",
        requires_evidence_id: "life_insurance_policy",
        requires_topic_ids: [],
        response:
          "I— I didn't know that existed. He never mentioned increasing any " +
          "policy, let alone naming me on it. Why would he do that without " +
          "telling me? I don't understand any of this.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_recent_behavior",
        topic_label: "Ask about changes in his recent behavior",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "He'd gotten secretive. Taking calls behind closed doors, jumpy " +
          "whenever his phone buzzed. I asked him about it more than once and " +
          "he always brushed it off as 'just work stuff.'",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    sanjana: [
      {
        topic_id: "ask_role_sanjana",
        topic_label: "Ask about her role at NovaPay",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "I handle the books — investor funds, disbursements, all of it. " +
          "I've worked closely with Arjun since almost the beginning.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_finances_sanjana",
        topic_label: "Ask about the company's finances",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "Everything's been handled appropriately, as far as my role goes. " +
          "I really can't speak to whatever Vikram thinks he's found.",
        reaction: "evasive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "confront_audit",
        topic_label: "Confront her with the financial audit",
        requires_evidence_id: "financial_audit",
        requires_topic_ids: [],
        response:
          "Some funds were... restructured, under Arjun's direction. I was " +
          "following instructions. That's all I can really say about it.",
        reaction: "evasive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: ["confront_transfer"]
      },
      {
        topic_id: "confront_transfer",
        topic_label: "Confront her with the offshore bank transfer",
        requires_evidence_id: "sanjana_bank_transfer",
        requires_topic_ids: ["confront_audit"],
        response:
          "That transfer was for a client matter, entirely legitimate. I'd " +
          "rather not get into specifics — there are confidentiality " +
          "obligations involved.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: ["confront_passport"]
      },
      {
        topic_id: "confront_passport",
        topic_label: "Confront her with the false identity documents",
        requires_evidence_id: "fake_passport_application",
        requires_topic_ids: ["confront_transfer"],
        response:
          "...Alright. Yes. I helped him set up a new identity and move money " +
          "somewhere safe once Vikram started asking questions — I knew it was " +
          "all about to collapse. Arjun is alive. He's not hurt. He chose to " +
          "run rather than face what he'd done, and I helped him, because if " +
          "he was caught, I would be too. He said he'd send for me once things " +
          "settled down.",
        reaction: "breaks_down",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    farid: [
      {
        topic_id: "ask_investment",
        topic_label: "Ask about his investment with Arjun",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "I put my life savings into that company. Every rupee I'd saved for " +
          "my daughter's wedding. Gone. So no, I don't have much sympathy for " +
          "whatever's happened to him.",
        reaction: "hostile",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_alibi_farid",
        topic_label: "Ask where he was that evening",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "At my nephew's engagement ceremony, surrounded by family the whole " +
          "evening. Ask any of them.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "confront_voicemail",
        topic_label: "Confront him about the threatening voicemail",
        requires_evidence_id: "threatening_voicemail",
        requires_topic_ids: [],
        response:
          "I said angry things in the heat of the moment, yes. I'm not proud " +
          "of it. But I never went near him, and I was surrounded by family " +
          "the entire evening he vanished — you can check every name at that " +
          "ceremony.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    debjani: [
      {
        topic_id: "ask_what_saw_debjani",
        topic_label: "Ask what she saw that evening",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "He looked on edge — checking his phone over and over, which wasn't " +
          "like him on his runs. Near the boat club he stopped and spoke to " +
          "someone briefly before carrying on alone.",
        reaction: "calm",
        unlocks_evidence_ids: ["lake_witness_statement"],
        unlocks_topic_ids: ["ask_who_met"]
      },
      {
        topic_id: "ask_who_met",
        topic_label: "Ask who he met near the boat club",
        requires_evidence_id: null,
        requires_topic_ids: ["ask_what_saw_debjani"],
        response:
          "Honestly, I couldn't tell you — it was getting dark and I wasn't " +
          "paying close attention at the time. Ordinary clothes, nothing " +
          "that stood out. I only remembered it clearly once I heard he'd " +
          "gone missing.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    iqbal: [
      {
        topic_id: "ask_fare_that_night",
        topic_label: "Ask about fares near the lake that night",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "Picked up a man near the lake around quarter to eight, build and " +
          "face matching the photo you showed me, though he was dressed " +
          "differently than what I've heard described, cap pulled down low.",
        reaction: "calm",
        unlocks_evidence_ids: ["cab_driver_statement"],
        unlocks_topic_ids: ["ask_destination"]
      },
      {
        topic_id: "ask_destination",
        topic_label: "Ask where he dropped that passenger",
        requires_evidence_id: null,
        requires_topic_ids: ["ask_fare_that_night"],
        response:
          "Near the domestic terminal at the airport. He seemed in a hurry, " +
          "paid well, didn't say much. I didn't think twice about it until " +
          "your officers came asking around.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ]
  },

  evidence: [
    {
      id: "car_at_scene",
      type: "physical",
      name: "Arjun's parked car",
      description:
        "Found neatly parked in the usual lot near the lake, keys inside, " +
        "nothing disturbed — no sign of a struggle.",
      location_found: "Parking area, Rabindra Sarobar",
      relevance: "supporting",
      unlocks: [],
      image: null,
      unlocked_by_default: true
    },
    {
      id: "phone_left_home",
      type: "physical",
      name: "Arjun's phone, left at home",
      description:
        "Found fully charged on its stand at his apartment — unusual for a " +
        "man rarely seen without it.",
      location_found: "Arjun's apartment",
      relevance: "supporting",
      unlocks: [],
      image: null,
      unlocked_by_default: true
    },
    {
      id: "spare_clothes_bag",
      type: "physical",
      name: "Discarded gym bag with a change of clothes",
      description:
        "A gym bag tucked behind a bench along the jogging path, containing a " +
        "full change of clothes that don't match anything in Arjun's known " +
        "wardrobe.",
      location_found: "Jogging path, Rabindra Sarobar",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "financial_audit",
      type: "document",
      name: "Internal financial audit",
      description:
        "An internal NovaPay audit revealing massive, unexplained " +
        "discrepancies in investor funds — consistent with new investor money " +
        "being used to pay off earlier investors.",
      location_found: "NovaPay office, Sector V, Salt Lake, Kolkata",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "whistleblower_email",
      type: "document",
      name: "Vikram's draft whistleblower email",
      description:
        "An unsent draft email from Vikram to the board and regulators, " +
        "dated days before the disappearance, detailing the discrepancies he'd " +
        "found.",
      location_found: "NovaPay office, Sector V, Salt Lake, Kolkata",
      relevance: "supporting",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "threatening_voicemail",
      type: "digital",
      name: "Threatening voicemail from Farid",
      description:
        "An angry voicemail left on Arjun's phone days before he vanished, " +
        "with Farid demanding his money back and threatening consequences.",
      location_found: "Voicemail records, Arjun's apartment",
      relevance: "red_herring",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "life_insurance_policy",
      type: "document",
      name: "Recently increased life insurance policy",
      description:
        "A life insurance policy on Arjun, recently and substantially " +
        "increased, naming Rhea as the sole beneficiary.",
      location_found: "Home documents, Arjun's apartment",
      relevance: "red_herring",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "sanjana_bank_transfer",
      type: "document",
      name: "Offshore bank transfer record",
      description:
        "A record of a large, recent wire transfer arranged by Sanjana to an " +
        "offshore account under a name that doesn't appear anywhere else in " +
        "NovaPay's records.",
      location_found: "Sanjana Iyer's office, New Town, Kolkata",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "fake_passport_application",
      type: "document",
      name: "False identity travel documents",
      description:
        "A set of travel documents and a passport application under an alias, " +
        "the photo unmistakably Arjun's, processed with Sanjana's help.",
      location_found: "Sanjana Iyer's office, New Town, Kolkata",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "lake_witness_statement",
      type: "testimony",
      name: "Debjani's account of the lake sighting",
      description:
        "Debjani's statement that Arjun seemed anxious, checked his phone " +
        "repeatedly, and briefly met someone near the boat club before " +
        "continuing alone.",
      location_found: "Interview with Debjani",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "cab_driver_statement",
      type: "testimony",
      name: "Iqbal's account of the late fare",
      description:
        "Iqbal's statement describing a man matching Arjun's description, " +
        "dressed differently than reported, picked up near the lake and " +
        "dropped near the domestic airport terminal.",
      location_found: "Interview with Iqbal",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    }
  ],

  locations: [
    {
      id: "rabindra_sarobar",
      name: "Rabindra Sarobar",
      real_world_reference: "Rabindra Sarobar, Kolkata",
      description:
        "A large lake popular with evening joggers and walkers, with a " +
        "boat club along its edge — the last confirmed place Arjun was seen.",
      examinable_details: [
        {
          id: "jogging_path",
          text:
            "A stretch of the jogging path near a quiet bench, slightly off " +
            "the main route.",
          unlocks_evidence_ids: ["spare_clothes_bag"]
        }
      ]
    },
    {
      id: "novapay_office",
      name: "NovaPay Office",
      real_world_reference: "Sector V, Salt Lake, Kolkata",
      description:
        "The fintech startup's office, still operating amid the chaos of " +
        "Arjun's disappearance and the surfacing fraud allegations.",
      examinable_details: [
        {
          id: "audit_files",
          text:
            "A locked file cabinet holds the company's internal financial " +
            "audits.",
          unlocks_evidence_ids: ["financial_audit"]
        },
        {
          id: "vikram_drafts",
          text:
            "Vikram's unsent draft emails, saved on the shared office server.",
          unlocks_evidence_ids: ["whistleblower_email"]
        }
      ]
    },
    {
      id: "arjun_apartment",
      name: "Arjun's Apartment",
      real_world_reference: "Lake Gardens, Kolkata",
      description:
        "Arjun's apartment, close to the lake, where his phone and personal " +
        "documents were found.",
      examinable_details: [
        {
          id: "phone_voicemails",
          text: "Arjun's phone, left behind, still holds his recent voicemails.",
          unlocks_evidence_ids: ["threatening_voicemail"]
        },
        {
          id: "home_documents",
          text: "A drawer of personal paperwork and policy documents.",
          unlocks_evidence_ids: ["life_insurance_policy"]
        }
      ]
    },
    {
      id: "sanjana_office",
      name: "Sanjana Iyer's Office",
      real_world_reference: "New Town, Kolkata",
      description:
        "Sanjana's private office, separate from the main NovaPay premises, " +
        "where she handles the company's more sensitive financial matters.",
      examinable_details: [
        {
          id: "transfer_records",
          text: "A folder of recent international transfer records.",
          unlocks_evidence_ids: ["sanjana_bank_transfer"]
        },
        {
          id: "travel_documents_drawer",
          text: "A locked drawer containing travel-related paperwork.",
          unlocks_evidence_ids: ["fake_passport_application"]
        }
      ]
    }
  ],

  timeline: [
    { time: "6:15 PM", event: "Arjun leaves the NovaPay office after a tense conversation with Vikram.", public_knowledge: true },
    { time: "6:45 PM", event: "Arrives home briefly, changes into jogging clothes, leaves his phone on its charger.", public_knowledge: true },
    { time: "7:00 PM", event: "Arrives at Rabindra Sarobar and begins his usual jogging route.", public_knowledge: true },
    { time: "7:20 PM", event: "Briefly meets someone near the boat club, appearing anxious.", public_knowledge: false },
    { time: "7:40 PM", event: "Last seen continuing along the path alone.", public_knowledge: true },
    { time: "7:45 PM", event: "A man matching his description, in different clothes, is picked up by a cab near the lake.", public_knowledge: false },
    { time: "8:15 PM", event: "Dropped near the domestic airport terminal.", public_knowledge: false },
    { time: "9:30 PM", event: "Rhea grows worried after repeated unanswered texts and calls.", public_knowledge: true },
    { time: "11:00 PM", event: "Rhea files a missing persons report after finding his phone at home and his car still at the lake.", public_knowledge: true },
    { time: "Following days", event: "The financial audit and Vikram's draft whistleblower email surface during the investigation.", public_knowledge: false }
  ],

  red_herrings: [
    {
      description:
        "Vikram had a financial motive to see Arjun gone and had been in " +
        "open conflict with him over the company's accounts.",
      why_it_misleads:
        "Sole control of the company and a documented recent dispute make " +
        "him look like an obvious beneficiary of Arjun's disappearance.",
      how_its_debunked:
        "His draft whistleblower email shows he wanted Arjun exposed and " +
        "prosecuted, not vanished, and his alibi — an all-night meeting with " +
        "lawyers and board members — holds up completely."
    },
    {
      description:
        "Farid lost his life savings to Arjun's fraud and left him an angry, " +
        "threatening voicemail days before he vanished.",
      why_it_misleads:
        "A clear financial motive plus a documented threat make him an easy " +
        "suspect for foul play.",
      how_its_debunked:
        "He was at a family engagement ceremony the entire evening, confirmed " +
        "by dozens of relatives, and never acted beyond the one angry message."
    },
    {
      description:
        "A recently increased life insurance policy names Rhea as sole " +
        "beneficiary, suggesting a financial motive for her.",
      why_it_misleads:
        "A large payout tied to Arjun's death or disappearance looks " +
        "suspicious on its face.",
      how_its_debunked:
        "Rhea didn't know the policy existed, has a solid alibi at a work " +
        "dinner, and the policy turns out to be something Arjun arranged " +
        "unilaterally as part of covering his own tracks, not a motive for " +
        "her."
    }
  ],

  solution: {
    culprit_id: "sanjana",
    method:
      "Helped Arjun stage his disappearance by deactivating his usual habits " +
      "of contact, arranging a false identity, and moving funds to an " +
      "offshore account once it became clear the fraud was about to be " +
      "exposed.",
    motive:
      "To protect herself from prosecution as his accomplice in the investor " +
      "fraud, and to help Arjun escape justice, with plans to eventually join " +
      "him abroad.",
    key_evidence_chain: [
      "financial_audit",
      "lake_witness_statement",
      "cab_driver_statement",
      "sanjana_bank_transfer",
      "fake_passport_application"
    ],
    full_explanation:
      "Arjun Kapoor is not dead, and he was never abducted. NovaPay's " +
      "investor fund had been a slow-motion fraud for years, and once Vikram " +
      "started noticing the discrepancies, Arjun and his accountant Sanjana " +
      "Iyer both understood exactly how little time was left before it all " +
      "came apart.\n\n" +
      "Sanjana, fully complicit in the fraud herself, had as much to lose as " +
      "Arjun did if he were caught and made to testify. Over the days before " +
      "he vanished, she quietly arranged an offshore transfer and a new " +
      "identity for him, while Arjun kept up appearances — a tense meeting " +
      "with his co-founder, an ordinary evening jog — right up until the " +
      "moment he changed clothes near the boat club and let a waiting cab " +
      "carry him toward the airport.\n\n" +
      "Vikram's anger and Farid's threat both looked, at first glance, like " +
      "motives for someone to have hurt Arjun. But Vikram wanted him exposed " +
      "in a courtroom, not gone, and Farid never left the sight of dozens of " +
      "relatives that whole evening. The life insurance policy pointed " +
      "suspicion at Rhea, who genuinely had no idea it existed.\n\n" +
      "It was the quieter details that told the real story: a discarded bag " +
      "of clothes by the lake, a witness who noticed him checking his phone " +
      "too often, a cab driver who remembered a fare in a hurry, and a set of " +
      "transfer records and travel documents that only one person had the " +
      "access and the reason to arrange."
  },

  gamification: {
    hint_system: [
      "Not every disappearance is something done to a person — consider " +
      "whether this one might have been arranged by Arjun himself.",
      "Look closely at who had the access to move money and paperwork " +
      "quietly in the days before he vanished.",
      "Follow the trail from the audit discrepancies to the offshore " +
      "transfer and the false travel documents — then ask the accountant why " +
      "she helped set up a new identity."
    ],
    achievements: [
      "Realized this was a staged disappearance, not an abduction, without " +
      "using a hint",
      "Cleared all three innocent suspects before making an accusation"
    ]
  }
};
