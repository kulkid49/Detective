// src/data/cases/case-02.js
// Level 2 — "The Rajmata Necklace" — a medium-difficulty heist.
// Drop this file in as-is; it matches the schema from the restructuring prompt.

export default {
  case_id: "case-02",
  level_number: 2,
  title: "The Rajmata Necklace",
  case_type: "heist",
  difficulty: "medium",

  setting: {
    city: "Kolkata, India",
    date: "a Saturday evening in April",
    real_world_anchor: "Ballygunge, Kolkata"
  },

  police_briefing: {
    summary:
      "Kamala Mukherjee, an elderly philanthropist, was hosting a charity gala " +
      "at her Ballygunge mansion to unveil the Rajmata Necklace — a Rajput-era " +
      "diamond and emerald heirloom — before formally donating it to a museum " +
      "trust. Around 9:15 PM, the ballroom lights flickered and cut out for " +
      "roughly ninety seconds. When they returned, the necklace's glass " +
      "display case was found cracked.\n\n" +
      "At first glance, this looks like a theft carried out under cover of the " +
      "blackout. But the piece recovered from inside the broken case was sent " +
      "for gemological testing that same night — and it isn't the genuine " +
      "necklace. It's a very convincing paste replica.\n\n" +
      "That changes the entire timeline. If the necklace in the case was " +
      "already fake by 9:15 PM, the real theft happened earlier — sometime " +
      "before the gala even started. Earlier that afternoon, gemologist Ananya " +
      "Roy conducted a private authentication session with the necklace ahead " +
      "of the donation, and the case's security sensor shows it was " +
      "deactivated at 2:42 PM — hours before the blackout. Work out who had " +
      "access to that necklace that afternoon, and you'll find your thief. The " +
      "gala guests and the blackout may turn out to be a distraction from the " +
      "real crime scene.",
    victim_or_target: {
      name: "Kamala Mukherjee",
      age: 72,
      occupation: "Philanthropist; head of the Mukherjee family trust",
      background:
        "Kamala inherited the Rajmata Necklace, along with much of the family's " +
        "collection of heirlooms, from her late husband's estate. In recent " +
        "months she decided to donate the necklace to a museum trust rather " +
        "than pass it down within the family, a decision that has caused " +
        "friction with her grandnephew Rajiv. She commissioned gemologist " +
        "Ananya Roy to formally authenticate and photograph the piece for " +
        "insurance and museum records ahead of the gala where it would be " +
        "publicly shown one last time before the handover.",
      last_known_movements:
        "Met with Ananya Roy in her study at 2:15 PM for the authentication " +
        "session, stepped out around 2:20 PM to take a phone call from her " +
        "lawyer lasting roughly twenty-five minutes, returned to find the " +
        "session concluding as normal, and spent the rest of the day preparing " +
        "for the evening's gala."
    },
    incident_details: {
      location:
        "Believed at first to be the ballroom of the Mukherjee mansion; " +
        "actually the private study upstairs, hours earlier",
      time_estimate:
        "Initially assumed to be 9:15–9:17 PM during the ballroom blackout; " +
        "the sensor log places the real window at 2:20–2:45 PM that afternoon",
      cause_of_death_or_method:
        "The genuine necklace was swapped for a pre-made paste replica during " +
        "an unsupervised stretch of a private authentication session, after " +
        "the display case's sensor was deactivated. The case's glass cracking " +
        "during the evening blackout was an unrelated electrical fault that " +
        "revealed the switch rather than caused it.",
      initial_state_of_scene:
        "The display case was found cracked in the ballroom after the brief " +
        "blackout. The necklace still inside it looked intact to the naked " +
        "eye, but gemological testing that night confirmed it was a " +
        "well-made replica, not the genuine piece."
    }
  },

  suspects: [
    {
      id: "rajiv",
      name: "Rajiv Mukherjee",
      role_in_victims_life: "Grandnephew",
      alibi:
        "Says he was at his office in central Kolkata until about 6:30 PM, " +
        "then went home to change before arriving at the gala around 7:00 PM.",
      true_whereabouts:
        "Exactly as claimed — at his office until early evening, arriving at " +
        "the mansion well after the actual theft window that afternoon.",
      motive:
        "Deeply opposed to the museum donation, believing the necklace should " +
        "stay in the family or be sold, with proceeds shared among relatives.",
      motive_strength: "strong",
      personality: [
        "outspoken about family matters",
        "resentful but not underhanded",
        "genuinely fond of his grand-aunt despite the disagreement"
      ],
      secrets: [
        "Has been quietly consulting a lawyer about whether the donation can " +
        "be contested"
      ],
      guilty: false,
      relationship_to_other_suspects:
        "Barely knows Ananya Roy or the security/catering staff personally.",
      portrait_image: "/images/suspects/rajiv.jpg"
    },
    {
      id: "bikram",
      name: "Bikram Oberoi",
      role_in_victims_life: "Head of security for the gala, on a standing contract",
      alibi:
        "Says he was doing his usual perimeter rounds near the garden entrance " +
        "when the blackout hit, and radioed a colleague to confirm nothing " +
        "looked wrong outside.",
      true_whereabouts:
        "Doing his rounds as claimed during the blackout — but skipped his " +
        "scheduled 3:00 PM check of the display case sensor to take a personal " +
        "call about his debts, then logged it as completed anyway.",
      motive:
        "Significant gambling debts; controls the alarm system and case " +
        "sensors as part of his role.",
      motive_strength: "moderate",
      personality: [
        "professionally proud, hates admitting mistakes",
        "anxious under financial pressure",
        "not actually dishonest by nature, just embarrassed"
      ],
      secrets: [
        "Falsified his shift log to cover up skipping a scheduled sensor check"
      ],
      guilty: false,
      relationship_to_other_suspects:
        "Professional-only relationship with Ananya and the household staff.",
      portrait_image: "/images/suspects/bikram.jpg"
    },
    {
      id: "ananya",
      name: "Ananya Roy",
      role_in_victims_life: "Gemologist hired to authenticate the necklace",
      alibi:
        "Says the authentication session was entirely routine, and that she " +
        "was never alone with the necklace for more than a moment or two.",
      true_whereabouts:
        "Alone with the necklace from roughly 2:30 to 2:45 PM, after asking " +
        "Kamala's companion to step out for tea — the exact window in which " +
        "she disabled the case sensor and swapped the necklace for a replica " +
        "she'd had made two weeks earlier.",
      motive:
        "Crushing personal debt from a failed gem-import venture; recognized " +
        "the necklace's true value and the unsupervised opportunity the " +
        "authentication session presented.",
      motive_strength: "strong",
      personality: [
        "composed and professional in manner",
        "meticulous and technically excellent at her work",
        "becomes evasive rather than defensive when pressed"
      ],
      secrets: [
        "Commissioned a high-grade paste replica of the necklace two weeks " +
        "before the gala",
        "Is deep in debt from a failed gem-import business"
      ],
      guilty: true,
      relationship_to_other_suspects:
        "Purely professional relationship with the Mukherjee household; no " +
        "connection to Rajiv, Bikram, or Farhan.",
      portrait_image: "/images/suspects/ananya.jpg"
    },
    {
      id: "farhan",
      name: "Farhan Ali",
      role_in_victims_life: "Catering manager for the gala",
      alibi:
        "Says he was coordinating dinner service in the kitchen and service " +
        "areas when the blackout hit, and checked on his staff once the lights " +
        "came back.",
      true_whereabouts:
        "In the kitchen and service areas as claimed; didn't arrive at the " +
        "mansion until his crew set up at 5:00 PM, hours after the actual " +
        "theft window.",
      motive:
        "A past, never-substantiated allegation of petty theft at a previous " +
        "job makes him an easy person to suspect.",
      motive_strength: "weak",
      personality: [
        "hardworking and a little defensive about his reputation",
        "nervous under questioning, though not because he's hiding this crime",
        "protective of his catering staff"
      ],
      secrets: [
        "Still embarrassed and anxious about the old allegation resurfacing, " +
        "though he was cleared of it years ago"
      ],
      guilty: false,
      relationship_to_other_suspects:
        "No relationship with Rajiv, Bikram, or Ananya beyond having worked " +
        "the same events occasionally.",
      portrait_image: "/images/suspects/farhan.jpg"
    }
  ],

  witnesses: [
    {
      id: "priya",
      name: "Priya Ghosh",
      connection_to_case: "Kamala Mukherjee's live-in companion and assistant",
      reliability: "reliable",
      what_they_actually_saw:
        "Was asked by Ananya to fetch tea and stay out of the study for " +
        "'better lighting to work' around 2:30 PM, leaving Ananya alone with " +
        "the necklace for roughly fifteen minutes.",
      what_they_will_initially_claim:
        "The same, though she only thinks to mention the odd request once " +
        "directly asked about the appraisal session in detail — at the time it " +
        "seemed like a small, reasonable thing.",
      personality: [
        "devoted to Kamala",
        "observant but not naturally suspicious of people",
        "a little guilty in hindsight for not thinking twice about it"
      ],
      portrait_image: "/images/suspects/priya.jpg"
    },
    {
      id: "deepak",
      name: "Deepak",
      connection_to_case: "Photographer hired for the gala and the museum records",
      reliability: "reliable",
      what_they_actually_saw:
        "Photographed the genuine necklace in close detail two weeks before " +
        "the gala for the museum's donation records, and again briefly in the " +
        "ballroom that evening before the blackout — at the time, nothing " +
        "looked wrong to him.",
      what_they_will_initially_claim:
        "The same — he has no reason to hide anything and will happily hand " +
        "over both sets of photos if asked.",
      personality: [
        "meticulous about his equipment and timestamps",
        "easygoing, enjoys talking about his work",
        "unaware of the significance of his own photos until it's pointed out"
      ],
      portrait_image: "/images/suspects/deepak.jpg"
    }
  ],

  dialogue: {
    rajiv: [
      {
        topic_id: "ask_donation",
        topic_label: "Ask about the necklace donation",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "It should stay in the family, or at least be sold and shared out " +
          "properly. My grand-aunt's made up her mind and won't hear otherwise. " +
          "I think it's a mistake, but that's not a crime, is it?",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_alibi",
        topic_label: "Ask where he was that afternoon",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "At my office until half six, same as most Saturdays lately. I got " +
          "to the gala around seven. Ask anyone at my firm, or the guests who " +
          "greeted me when I arrived.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "confront_lawyer",
        topic_label: "Confront him about the lawyer's note",
        requires_evidence_id: "rajiv_lawyer_note",
        requires_topic_ids: [],
        response:
          "Fine — yes, I spoke to a lawyer about whether the donation could be " +
          "challenged. I wanted to know my options, that's all. I wasn't even " +
          "in this house until the evening, you can check that easily enough.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_relationship_aunt",
        topic_label: "Ask about his relationship with Kamala",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "She practically raised me for a few years growing up. We disagree " +
          "about the necklace, but I would never do anything to hurt her.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    bikram: [
      {
        topic_id: "ask_role",
        topic_label: "Ask about his role at the gala",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "I run security for the family on a standing contract — perimeter, " +
          "guest screening, and the sensor on that display case was under my " +
          "responsibility too.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_alibi_blackout",
        topic_label: "Ask where he was during the blackout",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "Doing my rounds near the garden entrance. I radioed a colleague " +
          "the moment the lights went, and we checked the perimeter together " +
          "once they came back.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "confront_shift_log",
        topic_label: "Confront him with his shift log",
        requires_evidence_id: "bikram_shift_log",
        requires_topic_ids: [],
        response:
          "That log's accurate. I checked the sensor at three, like I do every " +
          "Saturday. Everything was fine.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: ["confront_sensor_discrepancy"]
      },
      {
        topic_id: "confront_sensor_discrepancy",
        topic_label: "Point out the sensor was already off by then",
        requires_evidence_id: "sensor_log",
        requires_topic_ids: ["confront_shift_log"],
        response:
          "...Alright. I didn't actually check it at three. I was on the phone " +
          "with a bookie about money I owe, and I just wrote it up like I " +
          "always do because it's never once been a problem before. I know how " +
          "that looks, but I never touched that necklace.",
        reaction: "breaks_down",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    ananya: [
      {
        topic_id: "ask_appraisal",
        topic_label: "Ask about the authentication session",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "Standard procedure — full inspection, photographs, a written " +
          "report for insurance and the museum's records. The piece is " +
          "genuinely extraordinary work.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_alone_time",
        topic_label: "Ask if she was ever alone with the necklace",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "Briefly, while Mrs. Mukherjee took a call. That's completely normal " +
          "for this kind of work — I need quiet and good light to do it " +
          "properly.",
        reaction: "evasive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "confront_appointment_record",
        topic_label: "Confront her with the appointment record",
        requires_evidence_id: "appointment_record",
        requires_topic_ids: [],
        response:
          "Yes, that's the correct timeline. I don't see the issue — every " +
          "authentication session involves some time working without an " +
          "audience.",
        reaction: "evasive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "confront_invoice",
        topic_label: "Confront her with the replica invoice",
        requires_evidence_id: "ananya_equipment_invoice",
        requires_topic_ids: ["confront_appointment_record"],
        response:
          "That replica was commissioned for an unrelated museum display, a " +
          "different piece entirely. I work with reproductions often, it's " +
          "part of the job.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: ["confront_debt"]
      },
      {
        topic_id: "confront_debt",
        topic_label: "Confront her about her debts",
        requires_evidence_id: "debt_notice",
        requires_topic_ids: ["confront_invoice"],
        response:
          "My finances are my own business. Being in debt doesn't make someone " +
          "a thief.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: ["confront_photos"]
      },
      {
        topic_id: "confront_photos",
        topic_label: "Show her the photo comparison",
        requires_evidence_id: "photographer_reference_photos",
        requires_topic_ids: ["confront_debt"],
        response:
          "...The clasp setting doesn't match, does it. I knew someone would " +
          "eventually look closely enough. I commissioned the replica two " +
          "weeks ago. I was drowning in debt and I told myself no one would " +
          "ever look past the surface before it reached the museum. I'm sorry " +
          "— I never meant for Bikram or anyone else to take the blame.",
        reaction: "breaks_down",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    farhan: [
      {
        topic_id: "ask_role_farhan",
        topic_label: "Ask about his role at the gala",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "I manage catering for events like this. My crew and I arrived " +
          "around five to set up the dinner service — standard timing for a " +
          "gala this size.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_blackout_farhan",
        topic_label: "Ask about the blackout",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "I was in the kitchen coordinating the next course when the lights " +
          "went. Chaos for a minute, then I checked on my staff once things " +
          "came back on.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      },
      {
        topic_id: "confront_farhan_record",
        topic_label: "Confront him with his personnel file note",
        requires_evidence_id: "farhan_record",
        requires_topic_ids: [],
        response:
          "That was years ago, and I was cleared — nothing was ever proven " +
          "because nothing happened. I wasn't even in this house until five " +
          "o'clock today. I wish that old note would stop following me around.",
        reaction: "defensive",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ],
    priya: [
      {
        topic_id: "ask_appraisal_session",
        topic_label: "Ask about the afternoon's appraisal session",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "I was in and out of the study while Ananya worked. Mrs. Mukherjee " +
          "stepped out for a phone call partway through, and I stayed nearby " +
          "for a bit before Ananya asked me to fetch some tea.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: ["ask_send_out"]
      },
      {
        topic_id: "ask_send_out",
        topic_label: "Ask why she left the room",
        requires_evidence_id: null,
        requires_topic_ids: ["ask_appraisal_session"],
        response:
          "Ananya said she needed quiet and better light to finish her " +
          "inspection properly, so I went to get the tea and didn't come back " +
          "for maybe fifteen minutes. I didn't think anything of it at the " +
          "time — she seemed completely normal about it.",
        reaction: "calm",
        unlocks_evidence_ids: ["priya_testimony"],
        unlocks_topic_ids: []
      }
    ],
    deepak: [
      {
        topic_id: "ask_photos",
        topic_label: "Ask about his photography that week",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "I photographed the necklace in full detail two weeks ago for the " +
          "museum's donation records — close-up shots of every setting. I " +
          "took a few more at the gala itself before the blackout, just for " +
          "the evening's program.",
        reaction: "calm",
        unlocks_evidence_ids: ["photographer_reference_photos"],
        unlocks_topic_ids: []
      },
      {
        topic_id: "ask_blackout_deepak",
        topic_label: "Ask what he saw during the blackout",
        requires_evidence_id: null,
        requires_topic_ids: [],
        response:
          "Pitch dark for about a minute and a half. I was more worried about " +
          "keeping guests calm than seeing anything useful, honestly. I heard " +
          "a crack near the display case but couldn't tell you who or what " +
          "caused it.",
        reaction: "calm",
        unlocks_evidence_ids: [],
        unlocks_topic_ids: []
      }
    ]
  },

  evidence: [
    {
      id: "broken_case",
      type: "physical",
      name: "Cracked display case",
      description:
        "The necklace's glass display case, found cracked after the blackout. " +
        "The piece inside looks intact at a glance, but something about it " +
        "feels worth a closer look.",
      location_found: "Ballroom, Mukherjee mansion",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: true
    },
    {
      id: "bikram_shift_log",
      type: "document",
      name: "Bikram's shift log",
      description:
        "Bikram's handwritten security log, noting a sensor check on the " +
        "display case at 3:00 PM with the result 'normal.'",
      location_found: "Provided by security staff as standard incident paperwork",
      relevance: "red_herring",
      unlocks: [],
      image: null,
      unlocked_by_default: true
    },
    {
      id: "gemological_report",
      type: "forensic",
      name: "Gemological testing report",
      description:
        "A same-night lab report confirming the piece recovered from the " +
        "broken case is a high-quality paste replica, not the genuine " +
        "Rajmata Necklace.",
      location_found: "Sent for testing from the ballroom display case",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "sensor_log",
      type: "digital",
      name: "Display case sensor log",
      description:
        "A digital log showing the display case's sensor was deactivated at " +
        "2:42 PM — hours before the evening blackout.",
      location_found: "Security panel, study, Mukherjee mansion",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "appointment_record",
      type: "document",
      name: "Kamala's appointment diary",
      description:
        "Kamala Mukherjee's desk diary, confirming Ananya Roy's private " +
        "authentication session ran from 2:15 to 3:00 PM, with a note that " +
        "Kamala stepped out for a lawyer's call partway through.",
      location_found: "Desk, study, Mukherjee mansion",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "farhan_record",
      type: "document",
      name: "Farhan's personnel file note",
      description:
        "An old note referencing a never-substantiated theft allegation " +
        "against Farhan from a previous job years ago.",
      location_found: "Staff files, study, Mukherjee mansion",
      relevance: "red_herring",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "ananya_equipment_invoice",
      type: "document",
      name: "Replica commission invoice",
      description:
        "An invoice from a specialty prop and jewelry-replica maker for a " +
        "'high-grade historical replica piece,' dated two weeks before the " +
        "gala, found among Ananya's business receipts.",
      location_found: "Ananya Roy's workshop, Bowbazar, Kolkata",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "debt_notice",
      type: "document",
      name: "Debt notice",
      description:
        "A formal notice regarding Ananya's substantial outstanding debt from " +
        "a failed gem-import venture.",
      location_found: "Ananya Roy's workshop, Bowbazar, Kolkata",
      relevance: "supporting",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "rajiv_lawyer_note",
      type: "document",
      name: "Rajiv's lawyer note",
      description:
        "A note referencing Rajiv's consultation with a lawyer about " +
        "contesting the museum donation.",
      location_found: "Mentioned by Priya Ghosh",
      relevance: "red_herring",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "priya_testimony",
      type: "testimony",
      name: "Priya's account of the appraisal session",
      description:
        "Priya's statement that Ananya asked her to leave the study for " +
        "roughly fifteen minutes during the authentication session, citing a " +
        "need for quiet and better lighting.",
      location_found: "Interview with Priya Ghosh",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    },
    {
      id: "photographer_reference_photos",
      type: "photo",
      name: "Reference photos of the genuine necklace",
      description:
        "Deepak's detailed close-up photos of the genuine necklace, taken two " +
        "weeks before the gala, showing clasp and setting details that don't " +
        "match the piece recovered from the broken case.",
      location_found: "Provided by Deepak, the gala photographer",
      relevance: "critical",
      unlocks: [],
      image: null,
      unlocked_by_default: false
    }
  ],

  locations: [
    {
      id: "study",
      name: "Kamala Mukherjee's Study",
      real_world_reference: "Ballygunge, Kolkata",
      description:
        "A quiet upstairs room where Kamala keeps her desk, household files, " +
        "and the display case's security panel — the site of the actual " +
        "authentication session that afternoon.",
      examinable_details: [
        {
          id: "security_panel",
          text:
            "The display case's security panel keeps a digital log of every " +
            "sensor state change.",
          unlocks_evidence_ids: ["sensor_log"]
        },
        {
          id: "desk_diary",
          text:
            "Kamala's desk diary lists her appointments for the day in her " +
            "own handwriting.",
          unlocks_evidence_ids: ["appointment_record"]
        },
        {
          id: "staff_files",
          text:
            "A drawer of household staff files, kept for background-check " +
            "purposes.",
          unlocks_evidence_ids: ["farhan_record"]
        }
      ]
    },
    {
      id: "ballroom",
      name: "Mukherjee Mansion Ballroom",
      real_world_reference: "Ballygunge, Kolkata",
      description:
        "The grand room where the necklace was displayed for the gala, and " +
        "where the case cracked during the blackout.",
      examinable_details: [
        {
          id: "send_for_testing",
          text:
            "The piece recovered from the broken case can be sent for " +
            "gemological testing to confirm whether it's genuine.",
          unlocks_evidence_ids: ["gemological_report"]
        }
      ]
    },
    {
      id: "ananya_workshop",
      name: "Ananya Roy's Workshop",
      real_world_reference: "Bowbazar, Kolkata",
      description:
        "Ananya's small gemology workshop and office, tucked into Kolkata's " +
        "historic jewelry district.",
      examinable_details: [
        {
          id: "invoice_ledger",
          text:
            "A ledger of recent commissions and purchases from specialty " +
            "suppliers.",
          unlocks_evidence_ids: ["ananya_equipment_invoice"]
        },
        {
          id: "correspondence",
          text:
            "A stack of correspondence, including formal notices from a " +
            "lender.",
          unlocks_evidence_ids: ["debt_notice"]
        }
      ]
    }
  ],

  timeline: [
    { time: "2:15 PM", event: "Ananya Roy begins the private authentication session in the study.", public_knowledge: true },
    { time: "2:20 PM", event: "Kamala steps out to take a lawyer's phone call.", public_knowledge: true },
    { time: "2:30 PM", event: "Ananya asks Priya to fetch tea and leave the room.", public_knowledge: false },
    { time: "2:42 PM", event: "The display case's sensor is deactivated.", public_knowledge: false },
    { time: "2:45 PM", event: "The genuine necklace is swapped for the paste replica.", public_knowledge: false },
    { time: "3:00 PM", event: "The authentication session concludes; everything appears normal.", public_knowledge: true },
    { time: "5:00 PM", event: "Catering crew, including Farhan, arrives to set up.", public_knowledge: true },
    { time: "7:00 PM", event: "Rajiv arrives for the gala.", public_knowledge: true },
    { time: "7:15 PM", event: "Deepak photographs the (already replaced) necklace for the evening's program.", public_knowledge: true },
    { time: "9:15 PM", event: "A faulty connection, left loose during the earlier swap, trips a fuse — the ballroom loses power for about ninety seconds.", public_knowledge: true },
    { time: "9:16 PM", event: "The display case is cracked in the dark, likely by a guest bumping the stand.", public_knowledge: true },
    { time: "9:17 PM", event: "Power returns; the cracked case is discovered.", public_knowledge: true },
    { time: "Later that night", event: "Gemological testing reveals the recovered piece is a replica.", public_knowledge: true }
  ],

  red_herrings: [
    {
      description:
        "Rajiv had a strong, openly stated motive against the donation and " +
        "was secretly consulting a lawyer to contest it.",
      why_it_misleads:
        "His resentment is obvious and freely admitted, which makes him an " +
        "easy first suspect.",
      how_its_debunked:
        "He was at his office until 6:30 PM and didn't arrive at the mansion " +
        "until 7:00 PM — hours after the actual theft window that afternoon."
    },
    {
      description:
        "Bikram controlled the display case's alarm sensor, had significant " +
        "gambling debts, and falsified his shift log.",
      why_it_misleads:
        "Motive plus direct access to the very system that was disabled looks " +
        "damning.",
      how_its_debunked:
        "The sensor log shows it was deactivated at 2:42 PM, while Bikram's " +
        "own admitted (skipped) check wasn't scheduled until 3:00 PM — the " +
        "tampering happened while Ananya, not Bikram, was alone with the " +
        "necklace."
    },
    {
      description:
        "Farhan had a past, if unproven, theft allegation and was in the " +
        "house during the dramatic blackout everyone assumes is when the " +
        "theft occurred.",
      why_it_misleads:
        "A theft in his past plus presence during the incident makes him an " +
        "easy scapegoat.",
      how_its_debunked:
        "His catering crew didn't arrive until 5:00 PM, hours after the real " +
        "theft window — and the blackout itself turns out to be unrelated to " +
        "the theft."
    }
  ],

  solution: {
    culprit_id: "ananya",
    method:
      "Swapped the genuine necklace for a pre-made paste replica during an " +
      "unsupervised fifteen-minute stretch of a private authentication " +
      "session, after deactivating the display case's sensor.",
    motive:
      "To pay off crushing debt from a failed gem-import venture, gambling on " +
      "the switch going unnoticed before the piece reached the museum.",
    key_evidence_chain: [
      "appointment_record",
      "priya_testimony",
      "sensor_log",
      "ananya_equipment_invoice",
      "debt_notice",
      "photographer_reference_photos",
      "gemological_report"
    ],
    full_explanation:
      "Ananya Roy arrived at the Mukherjee mansion that afternoon for what " +
      "looked like routine work — authenticating and photographing the " +
      "Rajmata Necklace ahead of its donation to a museum trust. But Ananya " +
      "was drowning in debt from a failed gem-import venture, and the " +
      "unsupervised stretch of time the session offered was too good an " +
      "opportunity to pass up.\n\n" +
      "When Kamala stepped out for a lawyer's call, Ananya asked Priya to " +
      "fetch tea, buying herself roughly fifteen minutes alone. In that " +
      "window she deactivated the display case's sensor, swapped the genuine " +
      "necklace for a high-grade paste replica she'd commissioned two weeks " +
      "earlier, and reconnected the wiring in a rush — imperfectly, as it " +
      "turned out.\n\n" +
      "That loose connection went unnoticed until that evening, when a " +
      "chandelier adjustment tripped a fuse and plunged the ballroom into " +
      "darkness for ninety seconds. In the confusion, a guest bumped the " +
      "display stand and cracked the case — a coincidence that nearly worked " +
      "in Ananya's favor, since it pointed every investigator toward the " +
      "gala and its guests rather than a quiet afternoon session hours " +
      "earlier.\n\n" +
      "Rajiv's resentment and Bikram's falsified log both looked far more " +
      "damning at first glance than a composed, professional gemologist with " +
      "a spotless reputation. But the sensor log's timestamp, Priya's account " +
      "of being sent away, an invoice for a replica commissioned weeks in " +
      "advance, and photographs sharp enough to catch a mismatched clasp all " +
      "point to the one person who was ever truly alone with the necklace."
  },

  gamification: {
    hint_system: [
      "Everyone's attention is on the blackout. Ask instead about what " +
      "happened earlier that same day.",
      "Check exactly when the display case's sensor went quiet — it doesn't " +
      "line up with when most people assume the theft happened.",
      "Compare the necklace recovered from the broken case against earlier " +
      "reference photos, and find out who had unsupervised access to it that " +
      "afternoon."
    ],
    achievements: [
      "Realized the theft happened before the blackout without using a hint",
      "Cleared all three innocent suspects before making an accusation"
    ]
  }
};
