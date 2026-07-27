// src/data/cases/case-06.js
// Level 6 — "The Tollygunge Birthday" — an expert-difficulty murder with 7 suspects.
// Drop this file in as-is; it matches the schema from the restructuring prompt.

export default {
  case_id: "case-06",
  level_number: 6,
  title: "The Tollygunge Birthday",
  case_type: "murder",
  difficulty: "expert",

  setting: {
    city: "Kolkata, India",
    date: "a Saturday night in February",
    real_world_anchor: "Tollygunge, Kolkata"
  },

  police_briefing: {
    summary:
      "Pratap Rai Chowdhury, 75, patriarch of the Rai Chowdhury Tea & " +
      "Hospitality Group, was found dead in the library of the family's " +
      "heritage clubhouse in Tollygunge during his own 75th birthday " +
      "celebration. He'd excused himself after dinner, saying he had a phone " +
      "call to make, and was found roughly forty-five minutes later, " +
      "slumped in his armchair with a half-finished glass of brandy beside " +
      "him.\n\n" +
      "Given his known heart condition, it was first treated as a natural " +
      "death. The toxicology report changed that: a fatal, deliberately " +
      "administered overdose of his own heart medication.\n\n" +
      "Seven people were close enough to have had the opportunity that " +
      "night — his two children, a nephew, a daughter-in-law, an old friend " +
      "and former business partner, a longtime member of household staff, " +
      "and the family's physician of over twenty years. Nearly all of them " +
      "had a motive. Work out who actually had both the motive and the " +
      "chance.",
    victim_or_target: {
      name: "Pratap Rai Chowdhury",
      age: 75,
      occupation: "Patriarch and chairman, Rai Chowdhury Tea & Hospitality Group",
      background:
        "Pratap built the family's tea estates and hospitality business over " +
        "five decades. He'd managed a heart condition for years under the " +
        "care of Dr. Ashwin Mehra, a close friend as much as a physician. In " +
        "recent weeks, Pratap had discovered old records suggesting Mehra had " +
        "covered up a fatal error decades earlier, and confronted him " +
        "privately about it. Separately, he'd been drafting a new will and a " +
        "charitable trust that would significantly reshuffle the family's " +
        "expected inheritances, unsettling several relatives who'd learned " +
        "of it, in whole or in part.",
      last_known_movements:
        "Hosted his birthday dinner and mingled with guests afterward in the " +
        "main hall. Excused himself to the library around 9:25 PM, saying he " +
        "had a call to make. Found unresponsive in his armchair around " +
        "10:15 PM by a staff member bringing his evening medication."
    },
    incident_details: {
      location: "Library, Rai Chowdhury heritage clubhouse, Tollygunge",
      time_estimate: "Between 9:30 and 10:15 PM",
      cause_of_death_or_method:
        "Initially assumed a natural cardiac event given his known heart " +
        "condition; toxicology later revealed a fatal, deliberately " +
        "administered overdose of his own heart medication.",
      initial_state_of_scene:
        "Found slumped in his armchair, a half-finished glass of brandy " +
        "beside him and his medication box open on the side table — nothing " +
        "appeared disturbed, consistent with a quiet, natural death, until " +
        "the toxicology report came back."
    }
  },

  suspects: [
    {
      id: "rajat",
      name: "Rajat Rai Chowdhury",
      role_in_victims_life: "Eldest son; runs day-to-day business operations",
      alibi:
        "Says he was playing cards with three guests in the main hall the " +
        "entire evening.",
      true_whereabouts: "At the card table exactly as claimed, the whole evening.",
      motive:
        "His father had discovered he'd been embezzling company funds and " +
        "threatened to disinherit him and report him to the board.",
      motive_strength: "strong",
      personality: [
        "charming in public, anxious underneath",
        "quick to overexplain himself when pressed",
        "genuinely proud of the business despite his own wrongdoing"
      ],
      secrets: ["Has been embezzling from the family company to cover personal debts"],
      guilty: false,
      relationship_to_other_suspects:
        "Married to Priyanka; tense but civil with his sister Mallika; " +
        "cordial with the rest of the household.",
      portrait_image: null
    },
    {
      id: "mallika",
      name: "Mallika Rai Chowdhury",
      role_in_victims_life: "Daughter; involved in the family's philanthropic efforts",
      alibi:
        "Says she was on the terrace having a smoke break with two guests " +
        "the entire window.",
      true_whereabouts: "On the terrace exactly as claimed.",
      motive:
        "Feared her father's new charitable trust would significantly reduce " +
        "her own inheritance.",
      motive_strength: "moderate",
      personality: [
        "outspoken, protective of the family's public image",
        "resentful of being sidelined in business decisions",
        "direct rather than evasive once confronted"
      ],
      secrets: ["Had been quietly consulting a lawyer about her inheritance options"],
      guilty: false,
      relationship_to_other_suspects:
        "Tense but civil with her brother Rajat; cordial with Priyanka.",
      portrait_image: null
    },
    {
      id: "siddharth",
      name: "Siddharth Rai Chowdhury",
      role_in_victims_life: "Nephew; works loosely for the family business",
      alibi:
        "Says he was on a phone call in the study antechamber the entire " +
        "window.",
      true_whereabouts:
        "On the phone call exactly as claimed, confirmed by phone records " +
        "and a staff member who overheard him.",
      motive: "Significant gambling debts; hoped for an advance on his inheritance.",
      motive_strength: "moderate",
      personality: [
        "nervous and evasive about his finances",
        "otherwise easygoing and well-liked",
        "genuinely fond of his uncle"
      ],
      secrets: ["Owes a significant amount of money to informal lenders"],
      guilty: false,
      relationship_to_other_suspects:
        "Friendly with the rest of the family, no particular tension with anyone.",
      portrait_image: null
    },
    {
      id: "priyanka",
      name: "Priyanka Rai Chowdhury",
      role_in_victims_life: "Daughter-in-law; married to Rajat",
      alibi:
        "Says she was in the kitchen helping staff prepare the birthday cake " +
        "the entire window.",
      true_whereabouts: "In the kitchen exactly as claimed, confirmed by catering staff.",
      motive:
        "Recently discovered her husband's affair and grew anxious about her " +
        "own financial security if the family's fortunes were reshuffled.",
      motive_strength: "weak",
      personality: [
        "composed in public",
        "privately hurt and anxious",
        "protective of her children's future"
      ],
      secrets: ["Knows about Rajat's affair but hasn't confronted him about it yet"],
      guilty: false,
      relationship_to_other_suspects:
        "Married to Rajat; cordial with Mallika and the rest of the household.",
      portrait_image: null
    },
    {
      id: "bikash",
      name: "Colonel (Retd.) Bikash Roy",
      role_in_victims_life: "Old friend and former business partner of Pratap",
      alibi: "Says he was giving a toast to guests in the main hall during the window.",
      true_whereabouts: "Giving the toast exactly as claimed, witnessed by dozens.",
      motive:
        "Decades-old resentment over a business deal Pratap ended " +
        "unfavorably for him years earlier.",
      motive_strength: "weak",
      personality: [
        "proud, nostalgic",
        "quick to reminisce about old grievances",
        "surprisingly candid once he trusts you"
      ],
      secrets: [
        "Has been quietly in financial difficulty and hoped to ask Pratap " +
        "for a loan that night"
      ],
      guilty: false,
      relationship_to_other_suspects:
        "Longtime family friend; cordial with everyone present.",
      portrait_image: null
    },
    {
      id: "sunita",
      name: "Sunita",
      role_in_victims_life: "Longtime household staff, decades of service",
      alibi: "Says she was serving drinks and attending guests in the main hall.",
      true_whereabouts: "In the main hall exactly as claimed, seen by many.",
      motive:
        "Recently learned she'd be excluded from a promised pension and " +
        "property in a new draft of the will.",
      motive_strength: "weak",
      personality: [
        "devoted to the family after decades of service",
        "quietly hurt rather than openly resentful",
        "anxious under questioning but ultimately honest"
      ],
      secrets: ["Came across a draft of the new will by accident"],
      guilty: false,
      relationship_to_other_suspects:
        "Warmly regarded by the whole family; no particular tension with anyone.",
      portrait_image: null
    },
    {
      id: "mehra",
      name: "Dr. Ashwin Mehra",
      role_in_victims_life: "Family physician for over twenty years, close friend",
      alibi:
        "Says he stepped into the library briefly around 9:30 to check " +
        "Pratap's medication schedule as he always did, found him already " +
        "unwell, and tried to help but couldn't save him.",
      true_whereabouts:
        "Alone with Pratap in the library, where he administered a fatal " +
        "additional dose of Pratap's own heart medication under the guise of " +
        "a routine check.",
      motive:
        "Pratap had discovered records of a fatal malpractice error Mehra " +
        "covered up decades earlier, and privately threatened to expose it " +
        "publicly unless Mehra resigned from the hospital board and made " +
        "restitution — a threat to his reputation, license, and life's work.",
      motive_strength: "strong",
      personality: [
        "composed, used to being trusted without question",
        "becomes clinical and detached rather than emotional under pressure",
        "deeply respected, which has let him go unquestioned for decades"
      ],
      secrets: [
        "Covered up a fatal malpractice error decades earlier",
        "Was being pressured by Pratap to resign and make restitution"
      ],
      guilty: true,
      relationship_to_other_suspects:
        "Trusted by the entire family for decades; no personal connection to " +
        "the other suspects beyond his professional role.",
      portrait_image: null
    }
  ],

  witnesses: [
    {
      id: "sen",
      name: "Mr. Sen",
      connection_to_case: "Family friend, playing cards with Rajat that evening",
      reliability: "reliable",
      what_they_actually_saw:
        "Confirms Rajat was at the card table the entire evening, and " +
        "recalls Dr. Mehra excusing himself around 9:30 PM to check on " +
        "Pratap, returning about twenty minutes later looking pale and " +
        "saying Pratap wanted to rest quietly.",
      what_they_will_initially_claim:
        "The same — he has no reason to hide anything and mentions it " +
        "readily once asked.",
      personality: [
        "observant, a retired judge by profession",
        "measured and precise in how he describes what he saw",
        "cooperative and unhurried"
      ],
      portrait_image: null
    },
    {
      id: "kajal",
      name: "Kajal",
      connection_to_case: "Catering staff helping prepare the birthday cake",
      reliability: "reliable",
      what_they_actually_saw:
        "Confirms Priyanka was in the kitchen the entire evening helping " +
        "with the cake, and recalls seeing Dr. Mehra heading toward the " +
        "library with his medical bag around 9:30 PM.",
      what_they_will_initially_claim:
        "The same — she thought nothing of it at the time, since the doctor " +
        "checking on Pratap was completely routine.",
      personality: [
        "friendly and hardworking",
        "attentive to details in the kitchen",
        "a little nervous about being questioned by police"
      ],
      portrait_image: null
    }
  ],

  dialogue: {
    rajat: [
      {
        topic_id: "ask_relationship_father",
        topic_label: "Ask about his relationship with his father",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "I respected him enormously. Things had gotten tense between us " +
          "lately over business matters, but I loved him.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_that_night_rajat",
        topic_label: "Ask where he was that night",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "At the card table the whole evening. Ask Mr. Sen, ask the others " +
          "playing — I never left that room until we heard what happened.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "confront_embezzlement",
        topic_label: "Confront him about the embezzlement",
        requires_evidence_id: "rajat_embezzlement_records",
        requires_topic_ids: [],
        response:
          "He found irregularities, yes, and we argued about it days ago. I'm " +
          "not proud of what I did. But I never touched him that night, and " +
          "I have four witnesses who'll say I was at that card table the " +
          "entire time.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: ["confront_disinheritance"]
      },
      {
        topic_id: "confront_disinheritance",
        topic_label: "Confront him with the disinheritance note",
        requires_evidence_id: "father_confrontation_note",
        requires_topic_ids: ["confront_embezzlement"],
        response:
          "Yes, he threatened to cut me off and report me to the board. It " +
          "devastated me. But being angry and devastated isn't the same as " +
          "killing him, Inspector, and I was nowhere near that library.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    mallika: [
      {
        topic_id: "ask_relationship_father_mallika",
        topic_label: "Ask about her relationship with her father",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "I loved him, but I often felt sidelined in business decisions, " +
          "especially lately. He didn't always tell me things directly.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_that_night_mallika",
        topic_label: "Ask where she was that night",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "On the terrace, having a smoke with two of the guests, the whole " +
          "time. They'll tell you the same.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_inheritance_concerns",
        topic_label: "Ask about the new charitable trust",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "I was worried it would gut what the family would inherit, yes. " +
          "I'd even spoken to a lawyer about my options. That's not the same " +
          "thing as wanting my father dead, Inspector.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    siddharth: [
      {
        topic_id: "ask_relationship_siddharth",
        topic_label: "Ask about his relationship with his uncle",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "He gave me work when I needed it, brought me into the family " +
          "business. I respected him a great deal.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_that_night_siddharth",
        topic_label: "Ask where he was that night",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "On the phone in the study antechamber the whole window you're " +
          "asking about. One of the staff was nearby and overheard me — and " +
          "my phone records will show the exact timing.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_debts_siddharth",
        topic_label: "Ask about his finances",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "I owe some money to people I'd rather not owe money to, yes. I'd " +
          "hoped my uncle might help me out. That's the extent of it — I'd " +
          "never hurt him over money.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    priyanka: [
      {
        topic_id: "ask_relationship_priyanka",
        topic_label: "Ask about her relationship with Pratap",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "He was always kind to me, a good father-in-law. This whole thing " +
          "has been devastating for the family.",
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
          "In the kitchen the entire evening, helping the staff with the " +
          "cake. Kajal was with me the whole time.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_rajat_marriage",
        topic_label: "Ask about her marriage to Rajat",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "Things have been... strained, lately. I'd rather not get into it, " +
          "it's not really relevant to any of this.",
        reaction: "evasive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: ["ask_upsetting_discovery"]
      },
      {
        topic_id: "ask_upsetting_discovery",
        topic_label: "Press her on what she's not saying",
        requires_evidence_id: null,
        requires_topic_ids: ["ask_rajat_marriage"],
        response:
          "...I recently found out my husband has been having an affair. I " +
          "haven't even confronted him about it yet. I know how that sounds, " +
          "but it has nothing to do with what happened to Pratap.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    bikash: [
      {
        topic_id: "ask_friendship_bikash",
        topic_label: "Ask about his friendship with Pratap",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "We go back decades — old business partners, older friends. " +
          "We've had our disagreements over the years, as old friends do.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_that_night_bikash",
        topic_label: "Ask where he was that night",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "Giving a toast to the room, of all things, during the exact " +
          "window you're asking about. Dozens of people watched me do it.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_old_business_dispute",
        topic_label: "Ask about the old business dispute",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "He ended our partnership badly years ago, and yes, I've carried " +
          "some resentment about it since. Truthfully, I came tonight hoping " +
          "to ask him for a loan, not settle any old score.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    sunita: [
      {
        topic_id: "ask_years_of_service",
        topic_label: "Ask about her years with the family",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "I've served this family for over twenty years. They're as close " +
          "to family as anyone I have left.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_that_night_sunita",
        topic_label: "Ask where she was that night",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "Serving drinks and attending to guests in the main hall the whole " +
          "evening. Plenty of people saw me the entire time.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_will_concerns",
        topic_label: "Ask about the new will",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "...I came across a draft of it by accident. I learned my family " +
          "would be left out of a pension and a small property he'd always " +
          "promised us. It hurt terribly. But I would never do anything to " +
          "harm this family, not after everything they've meant to me.",
        reaction: "breaks_down",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    mehra: [
      {
        topic_id: "ask_relationship_mehra",
        topic_label: "Ask about his relationship with Pratap",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "I've been his physician, and his friend, for over twenty years. " +
          "This is an enormous loss for me personally, not just professionally.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_that_night_mehra",
        topic_label: "Ask where he was that night",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "I stepped into the library around half past nine, as I always did, " +
          "to check his evening medication schedule. He was already unwell " +
          "when I got there. I tried everything I could, but it was too late.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "confront_malpractice",
        topic_label: "Confront him with the malpractice records",
        requires_evidence_id: "malpractice_records",
        requires_topic_ids: [],
        response:
          "That's an old, long-settled matter from decades ago. I don't see " +
          "what it has to do with tonight.",
        reaction: "evasive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: ["confront_letter"]
      },
      {
        topic_id: "confront_letter",
        topic_label: "Confront him with the confrontation letter",
        requires_evidence_id: "confrontation_letter",
        requires_topic_ids: ["confront_malpractice"],
        response:
          "...Pratap had confronted me about it privately, yes, and made some " +
          "demands. I never intended anything beyond talking it through with " +
          "him properly.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: ["confront_bag"]
      },
      {
        topic_id: "confront_bag",
        topic_label: "Confront him about his medical bag",
        requires_evidence_id: "medical_bag_residue",
        requires_topic_ids: ["confront_letter"],
        response:
          "That's ordinary medical supply residue, nothing more. I carry " +
          "that bag everywhere, it's not evidence of anything.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: ["confront_settlement"]
      },
      {
        topic_id: "confront_settlement",
        topic_label: "Confront him with the settlement record",
        requires_evidence_id: "mehra_settlement_record",
        requires_topic_ids: ["confront_bag"],
        response:
          "...Alright. Decades ago, I made a fatal error and quietly settled " +
          "with the family involved to keep it out of the public record. " +
          "Pratap found the old paperwork and threatened to expose it, to end " +
          "everything I'd built. That night, alone with him, in a moment of " +
          "sheer panic, I added an additional dose to his medication and made " +
          "it look like his heart simply gave out. I've spent my whole career " +
          "being trusted without question. I used that trust to do this.",
        reaction: "breaks_down",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    sen: [
      {
        topic_id: "ask_what_saw_sen",
        topic_label: "Ask what he noticed that evening",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "Rajat was at our card table the entire night, I can vouch for " +
          "that myself. I also remember Dr. Mehra excusing himself around " +
          "half past nine to check on Pratap, and coming back maybe twenty " +
          "minutes later looking quite pale, saying Pratap wanted to rest.",
        reaction: "calm",
        unlocks_evidence_ids: ["sen_witness_statement"],
        unlocks_topic_ids: []
      }
    ],
    kajal: [
      {
        topic_id: "ask_what_saw_kajal",
        topic_label: "Ask what she noticed that evening",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "Priyanka was with me the whole evening helping with the cake, I " +
          "can promise you that. I also remember seeing Dr. Mehra heading " +
          "toward the library with his medical bag, around half past nine — " +
          "though at the time it seemed completely ordinary.",
        reaction: "calm",
        unlocks_evidence_ids: ["kajal_witness_statement"],
        unlocks_topic_ids: []
      }
    ]
  },

  evidence: [
    {
      id: "medication_box",
      type: "physical",
      name: "Pratap's medication box",
      description:
        "Found open on the side table beside his armchair, part of his " +
        "regular heart condition management.",
      location_found: "Library, Rai Chowdhury heritage clubhouse",
      relevance: "supporting",
      unlocks: [],
      image: null,
      unlocked_by_default: true
    },
    {
      id: "brandy_glass",
      type: "physical",
      name: "Half-finished brandy glass",
      description:
        "Found beside Pratap's chair, sent for testing once the death was " +
        "no longer treated as natural.",
      location_found: "Library, Rai Chowdhury heritage clubhouse",
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
        "Confirms a fatal, deliberately administered overdose of Pratap's " +
        "own heart medication — not a natural cardiac event.",
      location_found: "Library, Rai Chowdhury heritage clubhouse",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "malpractice_records",
      type: "document",
      name: "Old malpractice records",
      description:
        "Decades-old hospital records and clippings suggesting Dr. Mehra " +
        "covered up a fatal error involving a former patient.",
      location_found: "Locked desk drawer, library, Rai Chowdhury heritage clubhouse",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "confrontation_letter",
      type: "document",
      name: "Pratap's confrontation letter",
      description:
        "A private letter from Pratap to Dr. Mehra referencing their " +
        "confrontation and demanding his resignation and restitution.",
      location_found: "Desk correspondence, library, Rai Chowdhury heritage clubhouse",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "medical_bag_residue",
      type: "forensic",
      name: "Residue in Dr. Mehra's medical bag",
      description:
        "Trace residue in his medical bag, left behind in the library, " +
        "consistent with the substance found in the toxicology report.",
      location_found: "Library, Rai Chowdhury heritage clubhouse",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "mehra_settlement_record",
      type: "document",
      name: "Old settlement record",
      description:
        "A quiet financial settlement Dr. Mehra paid decades ago to keep the " +
        "malpractice case out of public record.",
      location_found: "Dr. Mehra's clinic, Rashbehari Avenue, Kolkata",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "rajat_embezzlement_records",
      type: "document",
      name: "Rajat's embezzlement records",
      description:
        "Financial records showing Rajat diverting company funds for " +
        "personal use.",
      location_found: "Rai Chowdhury family estate, Alipore, Kolkata",
      relevance: "red_herring",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "father_confrontation_note",
      type: "document",
      name: "Pratap's note on Rajat",
      description:
        "A private note in Pratap's handwriting detailing his intent to " +
        "disinherit Rajat and report the embezzlement to the board.",
      location_found: "Rai Chowdhury family estate, Alipore, Kolkata",
      relevance: "red_herring",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "sunita_will_draft",
      type: "document",
      name: "Draft of the new will",
      description:
        "A draft will excluding Sunita and her family from a previously " +
        "promised pension and property.",
      location_found: "Rai Chowdhury family estate, Alipore, Kolkata",
      relevance: "red_herring",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "sen_witness_statement",
      type: "testimony",
      name: "Mr. Sen's account of the evening",
      description:
        "Confirms Rajat's alibi and describes Dr. Mehra excusing himself to " +
        "the library around 9:30 PM and returning pale roughly twenty " +
        "minutes later.",
      location_found: "Interview with Mr. Sen",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "kajal_witness_statement",
      type: "testimony",
      name: "Kajal's account of the evening",
      description:
        "Confirms Priyanka's alibi and describes seeing Dr. Mehra head " +
        "toward the library with his medical bag around 9:30 PM.",
      location_found: "Interview with Kajal",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    }
  ],

  locations: [
    {
      id: "clubhouse_library",
      name: "Library, Rai Chowdhury Heritage Clubhouse",
      real_world_reference: "Tollygunge, Kolkata",
      description:
        "The private library where Pratap was found, adjoining the main " +
        "hall where the birthday celebration was held.",
      examinable_details: [
        {
          id: "brandy_residue_test",
          text: "The brandy glass can be sent for toxicology testing.",
          unlocks_evidence_ids: ["toxicology_report"]
        },
        {
          id: "desk_drawer",
          text: "A locked drawer in Pratap's library desk holds older personal papers.",
          unlocks_evidence_ids: ["malpractice_records"]
        },
        {
          id: "correspondence",
          text: "Recent correspondence left on the desk.",
          unlocks_evidence_ids: ["confrontation_letter"]
        },
        {
          id: "medical_bag_check",
          text: "Dr. Mehra's medical bag, left behind in the confusion.",
          unlocks_evidence_ids: ["medical_bag_residue"]
        }
      ]
    },
    {
      id: "mehra_clinic",
      name: "Dr. Mehra's Clinic",
      real_world_reference: "Rashbehari Avenue, Kolkata",
      description:
        "Dr. Mehra's private medical practice, in operation for over two " +
        "decades.",
      examinable_details: [
        {
          id: "old_case_files",
          text: "Older patient case files and financial records kept in storage.",
          unlocks_evidence_ids: ["mehra_settlement_record"]
        }
      ]
    },
    {
      id: "rai_chowdhury_estate",
      name: "Rai Chowdhury Family Estate",
      real_world_reference: "Alipore, Kolkata",
      description:
        "The family's main residence, separate from the clubhouse, where " +
        "personal and financial records are kept.",
      examinable_details: [
        {
          id: "family_financial_ledger",
          text: "The family company's financial ledgers.",
          unlocks_evidence_ids: ["rajat_embezzlement_records"]
        },
        {
          id: "personal_papers",
          text: "Pratap's personal papers and private notes.",
          unlocks_evidence_ids: ["father_confrontation_note"]
        },
        {
          id: "will_draft_folder",
          text: "A folder holding drafts of Pratap's evolving will.",
          unlocks_evidence_ids: ["sunita_will_draft"]
        }
      ]
    }
  ],

  timeline: [
    { time: "8:00 PM", event: "Birthday dinner concludes; guests move to the main hall.", public_knowledge: true },
    { time: "9:00 PM", event: "Pratap mingles with guests, seemingly in good spirits.", public_knowledge: true },
    { time: "9:25 PM", event: "Pratap excuses himself to the library, mentioning a phone call.", public_knowledge: true },
    { time: "9:30 PM", event: "Dr. Mehra follows shortly after to check Pratap's medication schedule.", public_knowledge: true },
    { time: "9:30–9:50 PM", event: "Alone with Pratap, Mehra administers a fatal additional dose after a final confrontation.", public_knowledge: false },
    { time: "9:50 PM", event: "Mehra returns to the main hall, pale, saying Pratap wants quiet time.", public_knowledge: true },
    { time: "10:15 PM", event: "A staff member finds Pratap unresponsive while bringing his evening medication.", public_knowledge: true },
    { time: "That night", event: "Death is initially treated as natural, given his known heart condition.", public_knowledge: true },
    { time: "Following days", event: "Toxicology results reveal a deliberate overdose, prompting a full investigation.", public_knowledge: true }
  ],

  red_herrings: [
    {
      description:
        "Rajat had been caught embezzling company funds and was threatened " +
        "with disinheritance days before the murder.",
      why_it_misleads: "A strong, urgent financial motive makes him an obvious suspect.",
      how_its_debunked:
        "He was at the card table the entire evening, confirmed by three " +
        "other guests including Mr. Sen."
    },
    {
      description:
        "Mallika feared the new charitable trust would significantly reduce " +
        "her inheritance and had consulted a lawyer about it.",
      why_it_misleads: "A clear financial motive plus legal consultation looks premeditated.",
      how_its_debunked:
        "She was on the terrace with two guests the entire window, both of " +
        "whom confirm it."
    },
    {
      description: "Siddharth had significant gambling debts and hoped for an early inheritance.",
      why_it_misleads: "Desperate financial need makes him look motivated enough to act.",
      how_its_debunked:
        "His phone call is confirmed by both records and a staff member who " +
        "overheard him the entire window."
    },
    {
      description:
        "Sunita had just learned she'd be excluded from a promised pension " +
        "and property in the new will.",
      why_it_misleads:
        "A sudden, painful betrayal after decades of loyal service is a " +
        "believable motive.",
      how_its_debunked: "She was seen serving guests in the main hall throughout the evening."
    },
    {
      description:
        "Colonel Bikash Roy carried decades-old resentment over a soured " +
        "business partnership with Pratap.",
      why_it_misleads: "A long-simmering grudge plus financial difficulty looks suspicious.",
      how_its_debunked: "He was giving a toast in front of dozens of witnesses during the window."
    },
    {
      description: "Priyanka had recently discovered her husband's affair.",
      why_it_misleads: "Personal betrayal and anxiety about her financial future suggest motive.",
      how_its_debunked:
        "She was in the kitchen with catering staff, including Kajal, the " +
        "entire evening."
    }
  ],

  solution: {
    culprit_id: "mehra",
    method:
      "Administered a fatal additional dose of Pratap's own heart " +
      "medication into his brandy while alone with him in the library, " +
      "under the guise of a routine medication check, staging it to " +
      "resemble a natural cardiac event.",
    motive:
      "To silence Pratap, who had discovered evidence of a decades-old " +
      "malpractice cover-up and threatened to expose it publicly unless " +
      "Mehra resigned in disgrace and made restitution — a threat to his " +
      "reputation, license, and life's work.",
    key_evidence_chain: [
      "malpractice_records",
      "confrontation_letter",
      "mehra_settlement_record",
      "medical_bag_residue",
      "toxicology_report",
      "kajal_witness_statement",
      "sen_witness_statement"
    ],
    full_explanation:
      "Every single member of Pratap Rai Chowdhury's family had a reason to " +
      "want him gone that night — an embezzlement about to be exposed, an " +
      "inheritance about to shrink, a debt that needed settling, a will " +
      "quietly rewritten, an old grudge never fully buried. And every one of " +
      "them has an alibi that holds up completely.\n\n" +
      "The one person with unquestioned access to Pratap that night was the " +
      "one person whose real motive had nothing to do with the family's " +
      "money at all. Dr. Ashwin Mehra had covered up a fatal error decades " +
      "earlier, quietly settling it to protect his career. When Pratap " +
      "uncovered the old records and confronted him privately, threatening " +
      "to expose everything unless Mehra resigned and made restitution, " +
      "decades of a carefully protected reputation suddenly stood on the " +
      "edge of collapse.\n\n" +
      "When Pratap excused himself to the library, Mehra followed shortly " +
      "after — completely unremarkable, since checking on his old friend's " +
      "medication was something he'd done a hundred times before. Alone with " +
      "him, after one final, desperate confrontation, Mehra added a fatal " +
      "extra dose of Pratap's own medication to his brandy, staging it to " +
      "look exactly like the natural cardiac event everyone would expect " +
      "from a man his age with his condition.\n\n" +
      "He nearly got away with it — if not for a toxicology report that " +
      "shouldn't have raised questions from a man everyone trusted without " +
      "hesitation, a bag left behind in the confusion, and old paperwork " +
      "that proved this wasn't the first time Dr. Mehra had made sure a fatal " +
      "mistake stayed quiet."
  },

  gamification: {
    hint_system: [
      "Every family member in this house has a reason to want Pratap gone " +
      "— and every single one of them has an alibi that holds up. Look " +
      "outside the family.",
      "The person everyone trusted enough to leave alone with him is the " +
      "one whose real reason to want him silent has nothing to do with " +
      "money.",
      "Dig into the family physician's decades-old case history, then match " +
      "it against what was said in his final private exchange with Pratap " +
      "that night."
    ],
    achievements: [
      "Cleared all six innocent suspects before making an accusation",
      "Solved the case without using a single hint"
    ]
  }
};
