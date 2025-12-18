// Netherworld Covenant Game Data
// Source: Steam Store, GamiUnity, Indie Games Tavern, Steam Community

export const GAME_INFO = {
  name: "Netherworld Covenant",
  developer: "MadGoat Game Studio",
  publisher: "Infini Fun",
  releaseDate: "December 9, 2025",
  version: "1.0",
  steamAppId: 2735580,
  steamUrl: "https://store.steampowered.com/app/2735580/Netherworld_Covenant/",
  genre: ["Action Roguelike", "Soulslike", "Dark Fantasy", "Isometric RPG"],
};

export const STEAM_IMAGES = {
  header: "https://cdn.akamai.steamstatic.com/steam/apps/2735580/header.jpg",
  capsule: "https://cdn.akamai.steamstatic.com/steam/apps/2735580/capsule_616x353.jpg",
  hero: "https://cdn.akamai.steamstatic.com/steam/apps/2735580/library_hero.jpg",
  logo: "https://cdn.akamai.steamstatic.com/steam/apps/2735580/logo.png",
  screenshots: [
    "/images/screenshot-1.webp",
    "/images/screenshot-2.webp",
    "/images/screenshot-3.webp",
    "/images/screenshot-4.webp",
    "/images/screenshot-5.webp",
  ],
};

export const CLASSES = [
  {
    id: "berserker",
    name: "Berserker",
    title: "Aggressive Melee",
    difficulty: "Medium",
    description: "A devastating melee fighter who trades defense for overwhelming offense. Master the art of controlled aggression and sustain through combat.",
    longDescription: "The Berserker is Netherworld Covenant's premier damage dealer. Built around the philosophy of \"the best defense is a good offense,\" Berserkers thrive in extended combat where their lifesteal and damage bonuses stack up. While lacking the defensive options of Shield Guard or the range of Hunter, the Berserker compensates with raw power and the ability to heal through dealing damage.",
    stats: {
      damage: 5,
      defense: 2,
      mobility: 3,
      sustain: 4,
    },
    playstyle: "High-risk, high-reward aggressive combat. Stay in the fight to heal through damage.",
    strengths: [
      "Highest damage output in melee range",
      "Lifesteal sustain during combat",
      "Strong stagger damage",
      "Excellent crowd control with wide swings",
    ],
    weaknesses: [
      "Low defense - mistakes are punishing",
      "Requires constant aggression to sustain",
      "Vulnerable during attack animations",
      "Struggles against ranged enemies",
    ],
    recommendedWeapons: ["Double-Bladed Axe", "Greatsword", "Short Sword"],
    recommendedCompanions: ["Guardian", "Swordsman"],
    buildStrategies: [
      {
        name: "Lifesteal Berserker",
        focus: "Stack lifesteal and damage bonuses for sustained aggression",
        priorityStats: ["Lifesteal %", "Attack Power", "Critical Damage", "Stagger Damage"],
        keyRelics: [
          "Any relic with lifesteal bonuses",
          "Damage increase on low HP",
          "Attack speed modifiers",
          "Critical hit chance/damage",
        ],
        playstyle: "Stay aggressive to maintain health through combat. Use high damage to stagger enemies before they can retaliate.",
      },
      {
        name: "Critical Berserker",
        focus: "Maximize critical hits for burst damage",
        priorityStats: ["Critical Chance", "Critical Damage", "Attack Speed", "Lifesteal %"],
        keyRelics: [
          "Critical chance boosters",
          "Critical damage multipliers",
          "On-crit effect triggers",
          "Attack speed increases",
        ],
        playstyle: "Focus on landing critical hits to burst down enemies quickly. Use the high damage spikes to create openings.",
      },
    ],
    combatTips: [
      {
        title: "Commit to Attacks",
        description: "Your damage is your defense. Half-hearted attacks will get you killed. When you engage, go all in.",
      },
      {
        title: "Manage Stamina",
        description: "Despite aggressive playstyle, always reserve stamina for one dodge. Getting caught without escape is death.",
      },
      {
        title: "Target Priority",
        description: "Kill the most dangerous enemy first. Your lifesteal works better when enemies die fast.",
      },
      {
        title: "Use Stagger",
        description: "Heavy weapons stagger enemies. A staggered enemy can't attack. Chain staggers for free damage.",
      },
      {
        title: "Learn Enemy Windows",
        description: "Every enemy has recovery frames after attacks. These are your openings for maximum damage.",
      },
      {
        title: "Don't Chase Low HP",
        description: "If you're low on health, stay aggressive to heal. Running away means no lifesteal.",
      },
    ],
  },
  {
    id: "mage",
    name: "Mage",
    title: "Ranged Caster",
    difficulty: "Hard",
    description: "A powerful spellcaster who controls the battlefield from range. Master spell rotations and positioning to unleash devastating arcane power.",
    longDescription: "The Mage is Netherworld Covenant's glass cannon. With the highest burst damage potential in the game, Mages can delete enemies before they become a threat. However, this power comes at the cost of durability—one mistake can be fatal. Success as a Mage requires mastering the \"Warm Flow\" mechanic, which governs mana regeneration and spell potency.",
    stats: {
      damage: 5,
      defense: 1,
      range: 5,
      complexity: 4,
    },
    playstyle: "Keep distance, build Warm Flow stacks, and unleash devastating burst damage.",
    strengths: [
      "Highest burst damage in the game",
      "Excellent range and zoning",
      "Strong crowd control spells",
      "Warm Flow provides scaling power",
    ],
    weaknesses: [
      "Extremely fragile - lowest defense",
      "Requires precise positioning",
      "Mana management is crucial",
      "Struggles in close quarters",
    ],
    recommendedWeapons: ["Staff", "Short Sword (backup)"],
    recommendedCompanions: ["Guardian", "Ranger"],
    uniqueMechanic: {
      name: "Warm Flow",
      description: "Landing spells builds Warm Flow stacks, which increase both damage and mana regeneration.",
      tiers: [
        { stacks: "1-3", effect: "Normal regeneration" },
        { stacks: "4-6", effect: "Enhanced regen + 15% damage" },
        { stacks: "7+", effect: "Maximum power + 30% damage" },
      ],
    },
    buildStrategies: [
      {
        name: "Burst Mage",
        focus: "Maximize spell damage for one-shot potential",
        priorityStats: ["Spell Damage", "Cooldown Reduction", "Mana Regen", "Cast Speed"],
        keyRelics: [
          "Spell damage amplification",
          "Mana cost reduction",
          "Cooldown reduction",
          "Warm Flow stack bonuses",
        ],
        playstyle: "Build Warm Flow stacks safely, then unleash devastating burst combos. Position at max range and use Ethereal Dash to maintain distance.",
      },
      {
        name: "Sustained Caster",
        focus: "Continuous spell pressure with efficient mana use",
        priorityStats: ["Mana Regen", "Cast Speed", "Cooldown Reduction", "Spell Damage"],
        keyRelics: [
          "Mana regeneration boosters",
          "Cast speed increases",
          "Spell cost reduction",
          "Duration extensions",
        ],
        playstyle: "Focus on constant spell output rather than burst. Maintain Warm Flow through continuous casting.",
      },
    ],
    combatTips: [
      {
        title: "Maintain Distance",
        description: "You have no business being in melee range. Use the full arena and kite relentlessly.",
      },
      {
        title: "Pre-stack Warm Flow",
        description: "Before boss fights, build stacks on regular enemies. Enter the fight at maximum power.",
      },
      {
        title: "Use Nether Lantern",
        description: "Your lantern spells can interrupt enemy attacks. Use them defensively, not just offensively.",
      },
      {
        title: "Ghost Step Positioning",
        description: "Place your companion at safe positions. Ghost Step is your emergency escape button.",
      },
      {
        title: "Mana Conservation",
        description: "Don't spam spells. Wait for optimal moments to maximize damage per mana spent.",
      },
      {
        title: "Know Your Cooldowns",
        description: "Track your spell cooldowns mentally. Being caught without your main damage spell is dangerous.",
      },
    ],
  },
  {
    id: "hunter",
    name: "Hunter",
    title: "Mobile Ranged",
    difficulty: "Medium",
    description: "An agile ranged fighter specializing in mobility and precision. Master the art of kiting to deal consistent damage while staying safe.",
    longDescription: "The Hunter excels at maintaining distance and dealing consistent damage over time. While lacking the burst of Mage or the raw power of Berserker, Hunters offer the safest playstyle with excellent kiting potential. Perfect for players who prefer methodical, low-risk gameplay.",
    stats: {
      damage: 3,
      defense: 2,
      mobility: 5,
      safety: 4,
    },
    playstyle: "Keep moving, maintain distance, and whittle down enemies with precise shots.",
    strengths: [
      "Safest playstyle with excellent kiting",
      "High mobility for repositioning",
      "Consistent damage output",
      "Strong critical hit potential",
    ],
    weaknesses: [
      "Lower burst damage than Mage",
      "Requires good aim for optimal damage",
      "Can struggle in tight spaces",
      "Dependent on maintaining distance",
    ],
    recommendedWeapons: ["Bow", "Spear", "Daggers"],
    recommendedCompanions: ["Rogue", "Guardian"],
    buildStrategies: [
      {
        name: "Critical Hunter",
        focus: "Stack critical hit chance and damage for devastating shots",
        priorityStats: ["Critical Chance", "Critical Damage", "Movement Speed", "Attack Speed"],
        keyRelics: [
          "Critical chance boosters",
          "Critical damage multipliers",
          "Movement speed increases",
          "Attack speed bonuses",
        ],
        playstyle: "Maintain maximum range at all times. Use mobility to kite enemies in circles while landing headshots.",
      },
      {
        name: "Speed Hunter",
        focus: "Maximize attack speed for continuous pressure",
        priorityStats: ["Attack Speed", "Movement Speed", "Damage", "Critical Chance"],
        keyRelics: [
          "Attack speed increases",
          "Movement speed boosts",
          "On-hit effects",
          "Stamina efficiency",
        ],
        playstyle: "Rapid-fire approach with constant movement. Prioritize hitting many times over hitting hard.",
      },
    ],
    combatTips: [
      {
        title: "Kite in Circles",
        description: "Move in wide arcs, not straight lines. This maximizes distance while allowing continuous fire.",
      },
      {
        title: "Prioritize Mobility",
        description: "Never stop moving. Even when attacking, use movement to stay unpredictable.",
      },
      {
        title: "Aim for Crits",
        description: "Headshots deal critical damage. Take the extra moment to aim for maximum efficiency.",
      },
      {
        title: "Save Dash for Emergencies",
        description: "Ethereal Dash is your panic button. Don't waste it for damage—save it for survival.",
      },
      {
        title: "Use Terrain",
        description: "Position around obstacles to break enemy line of sight and create safe firing angles.",
      },
      {
        title: "Focus Ranged Enemies First",
        description: "Take out enemy archers and casters before they can pressure your kiting path.",
      },
    ],
  },
  {
    id: "shield-guard",
    name: "Shield Guard",
    title: "Defensive Tank",
    difficulty: "Easy",
    description: "A stalwart defender who excels at blocking and counterattacking. The most forgiving class for new players, with powerful defensive tools.",
    longDescription: "The Shield Guard is the recommended starting class for new players. With the highest defense in the game and a forgiving block mechanic, mistakes are rarely fatal. What you sacrifice in damage, you gain in survivability and the ability to learn enemy patterns safely.",
    stats: {
      damage: 2,
      defense: 5,
      sustain: 4,
      beginner: 5,
    },
    playstyle: "Block enemy attacks, learn their patterns, then punish with powerful counters.",
    strengths: [
      "Highest defense and survivability",
      "Forgiving for learning enemy patterns",
      "Powerful counter-attack damage",
      "Can face-tank most attacks",
    ],
    weaknesses: [
      "Lowest damage output",
      "Slower kill times",
      "Can struggle against groups",
      "Stamina-dependent blocking",
    ],
    recommendedWeapons: ["Shield + Sword", "Shield + Spear", "Greatsword"],
    recommendedCompanions: ["Swordsman", "Ranger"],
    uniqueMechanic: {
      name: "Block & Parry",
      description: "Shield Guard has access to both passive blocking and active parrying.",
      details: [
        { type: "Block", effect: "Hold to reduce incoming damage significantly. Drains stamina per hit." },
        { type: "Perfect Parry", effect: "Time your block at impact for zero damage and enemy stagger." },
      ],
    },
    buildStrategies: [
      {
        name: "Counter Tank",
        focus: "Perfect parries and devastating counter-attacks",
        priorityStats: ["Stamina", "Block Efficiency", "Counter Damage", "HP Regen"],
        keyRelics: [
          "Counter damage increases",
          "Stamina regeneration",
          "Block efficiency bonuses",
          "HP regeneration",
        ],
        playstyle: "Focus on perfect parries and devastating counters. Build stamina and defense to sustain through long fights.",
      },
      {
        name: "Fortress Guard",
        focus: "Maximum survivability and sustained blocking",
        priorityStats: ["HP", "Defense", "Stamina", "HP Regen"],
        keyRelics: [
          "HP increases",
          "Defense boosts",
          "Stamina pool expansion",
          "Damage reduction",
        ],
        playstyle: "Become an immovable fortress. Outlast enemies through superior defense.",
      },
    ],
    combatTips: [
      {
        title: "Learn Before You Parry",
        description: "Use regular blocks first to learn enemy timing. Then graduate to parries.",
      },
      {
        title: "Stamina is Life",
        description: "Running out of stamina mid-block is death. Always keep reserves.",
      },
      {
        title: "Counter Windows",
        description: "After a parry, you have 2-3 hits before the enemy recovers. Don't get greedy.",
      },
      {
        title: "Position Near Walls",
        description: "Blocking near walls prevents knockback and keeps you in counter range.",
      },
      {
        title: "Watch for Unblockables",
        description: "Some attacks can't be blocked. Learn which ones and dodge instead.",
      },
      {
        title: "Use Your Companion",
        description: "Let your companion deal damage while you focus on defense and counters.",
      },
    ],
  },
  {
    id: "useless-person",
    name: "Useless Person",
    title: "Adaptive Challenge",
    difficulty: "Very Hard",
    description: "The ultimate challenge class. Starts with nothing but has unlimited potential. For players who have mastered the game and seek the ultimate test.",
    longDescription: "The \"Useless Person\" is Netherworld Covenant's equivalent of a Deprived or Wretch class from Souls games. You start with nothing—no class bonuses, no starting equipment advantages, just raw potential and enhanced stamina recovery. What makes this class unique is its universal weapon proficiency.",
    stats: {
      starting: 1,
      potential: 5,
      flexibility: 5,
      stamina: 5,
    },
    playstyle: "Adapt to whatever the run offers. Build identity forms during gameplay based on available relics.",
    strengths: [
      "Can use ALL weapons effectively",
      "Superior stamina regeneration",
      "Ultimate build flexibility",
      "Highest potential ceiling",
    ],
    weaknesses: [
      "No starting bonuses at all",
      "Brutal early game",
      "Requires mastery of all weapons",
      "Completely run-dependent",
    ],
    recommendedWeapons: ["Any - depends on relics found"],
    recommendedCompanions: ["Guardian (early survival)", "Rogue (experienced players)"],
    uniqueMechanic: {
      name: "Universal Proficiency",
      description: "Unlike other classes, Useless Person can use ALL weapons with equal effectiveness.",
      details: [
        { type: "Flexibility", effect: "Switch weapons mid-run based on relic drops" },
        { type: "Stamina Bonus", effect: "Enhanced stamina regeneration compensates for lack of other bonuses" },
      ],
    },
    buildStrategies: [
      {
        name: "Adaptive Opportunist",
        focus: "Build around whatever relics the game offers",
        priorityStats: ["Varies by run", "Stamina", "HP", "Damage"],
        keyRelics: [
          "Any synergistic relics",
          "Defensive options early",
          "Damage scaling mid-game",
          "Build-defining legendaries",
        ],
        playstyle: "Survive early game at all costs. Identify strongest relic synergies mid-game and pivot weapon choice to match.",
      },
    ],
    combatTips: [
      {
        title: "Abuse Stamina Regen",
        description: "Your stamina recovers faster. Use this to dodge more and stay aggressive longer than enemies expect.",
      },
      {
        title: "Stay Flexible",
        description: "Don't force a build. If the game gives you crit relics, go daggers. Spell relics? Go staff.",
      },
      {
        title: "Early Game Caution",
        description: "Your first few rooms are the hardest. Play extremely safe until you find your first weapon upgrade.",
      },
      {
        title: "Master All Weapons",
        description: "Practice with every weapon type. You never know what the RNG will offer in a run.",
      },
      {
        title: "Prioritize Defensive Relics Early",
        description: "You can't deal damage if you're dead. Early survivability enables late-game scaling.",
      },
      {
        title: "Know When to Commit",
        description: "By room 10, your build should have direction. Don't keep hedging—commit to a strategy.",
      },
    ],
  },
];

export const WEAPONS = [
  {
    id: "short-sword",
    name: "Short Sword",
    type: "One-Handed",
    description: "A balanced and reliable choice, excellent for newcomers to learn the game's rhythm.",
    damage: 3,
    speed: 4,
    range: 2,
    stagger: 2,
    pros: ["Fast attack speed", "Easy to learn", "Good stamina efficiency", "Versatile combos"],
    cons: ["Lower damage per hit", "Short range", "Less stagger"],
    bestFor: ["Shield Guard", "Beginners", "Defensive playstyles"],
    combos: [
      "Light > Light > Heavy for basic damage",
      "Light > Dodge Cancel > Light for safe damage",
    ],
  },
  {
    id: "greatsword",
    name: "Greatsword",
    type: "Two-Handed",
    description: "Slower but more powerful. Its hits deal extra damage and stagger enemies more effectively.",
    damage: 5,
    speed: 2,
    range: 4,
    stagger: 5,
    pros: ["Highest stagger damage", "Wide arc attacks", "High damage per hit", "Good crowd control"],
    cons: ["Slow attack speed", "Long recovery frames", "Stamina intensive", "Commitment required"],
    bestFor: ["Berserker", "Aggressive players", "Stagger builds"],
    combos: [
      "Charged Heavy for maximum stagger",
      "Light > Light > Charged Heavy for combo",
    ],
  },
  {
    id: "daggers",
    name: "Daggers",
    type: "Dual-Wield",
    description: "Focus on high attack speed and critical hits. Perfect for players who favor agility.",
    damage: 2,
    speed: 5,
    range: 1,
    stagger: 1,
    pros: ["Fastest attack speed", "High critical rate", "Excellent mobility", "Rapid combos"],
    cons: ["Lowest damage per hit", "Very short range", "No stagger", "High risk in melee"],
    bestFor: ["Hunter", "Critical builds", "Aggressive agile playstyles"],
    combos: [
      "Rapid Light combo for crit fishing",
      "Backstep > Dash Attack for safe engagement",
    ],
  },
  {
    id: "double-bladed-axe",
    name: "Double-Bladed Axe",
    type: "Two-Handed",
    description: "The signature Berserker weapon. Massive damage per hit synergizes perfectly with lifesteal.",
    damage: 5,
    speed: 2,
    range: 3,
    stagger: 4,
    pros: ["Massive damage", "Wide swing arc", "Great lifesteal synergy", "Strong stagger"],
    cons: ["Slow attacks", "Stamina hungry", "Requires commitment", "Punishing misses"],
    bestFor: ["Berserker", "Lifesteal builds", "Crowd control"],
    combos: [
      "Spinning attack for crowd clear",
      "Heavy > Heavy for maximum damage",
    ],
  },
  {
    id: "staff",
    name: "Staff",
    type: "Two-Handed (Spell)",
    description: "The definitive Mage weapon. Enhances spell damage and provides the best mana efficiency.",
    damage: 4,
    speed: 3,
    range: 5,
    stagger: 2,
    pros: ["Spell damage bonus", "Best range", "Mana efficiency", "Safe playstyle"],
    cons: ["Requires mana", "Weak in melee", "Cooldown dependent", "No physical damage"],
    bestFor: ["Mage", "Spell builds", "Ranged playstyles"],
    combos: [
      "Build Warm Flow > Burst combo",
      "Maintain range > Spell weaving",
    ],
  },
  {
    id: "bow",
    name: "Bow",
    type: "Ranged",
    description: "Offers safe, ranged damage and can help you manage groups of enemies from a distance.",
    damage: 3,
    speed: 3,
    range: 5,
    stagger: 1,
    pros: ["Excellent range", "Safe positioning", "Good aim rewards", "Kiting potential"],
    cons: ["Requires aim", "Low stagger", "Weak up close", "Arrow management"],
    bestFor: ["Hunter", "Kiting builds", "Safe playstyles"],
    combos: [
      "Charged shot for maximum damage",
      "Quick shots while moving",
    ],
  },
  {
    id: "spear",
    name: "Spear",
    type: "Two-Handed",
    description: "Great reach for keeping enemies at bay. Strong poke damage and decent mobility.",
    damage: 3,
    speed: 3,
    range: 4,
    stagger: 3,
    pros: ["Excellent reach", "Safe poke damage", "Good mobility", "Thrust attacks"],
    cons: ["Narrow hit arc", "Medium damage", "Less crowd control", "Predictable patterns"],
    bestFor: ["Hunter", "Shield Guard", "Defensive melee"],
    combos: [
      "Poke > Retreat > Poke for safe damage",
      "Thrust combo for single target",
    ],
  },
  {
    id: "shield",
    name: "Shield",
    type: "Off-Hand",
    description: "Excels at breaking an enemy's posture, allowing for a quick stun. Essential for Shield Guard.",
    damage: 1,
    speed: 3,
    range: 1,
    stagger: 5,
    pros: ["Block capability", "Parry potential", "Posture damage", "Counter setups"],
    cons: ["Requires main weapon", "Low damage", "Stamina on block", "Timing dependent"],
    bestFor: ["Shield Guard", "Defensive builds", "Counter playstyles"],
    combos: [
      "Block > Parry > Counter",
      "Shield Bash for stagger",
    ],
  },
];

export const SOUL_COMPANIONS = [
  {
    id: "swordsman",
    name: "Swordsman",
    type: "Melee DPS",
    description: "A balanced combat companion that fights alongside you in close quarters.",
    abilities: [
      "Melee combo attacks",
      "Follows player closely",
      "Ghost Step node placement",
    ],
    playstyle: "Aggressive support that adds extra melee damage. Good all-around choice.",
    bestFor: ["Shield Guard", "Berserker", "Players who want extra damage"],
    synergies: ["Stagger builds", "Melee-focused classes", "Counter-attack strategies"],
  },
  {
    id: "ranger",
    name: "Ranger",
    type: "Ranged Support",
    description: "A ranged companion that eliminates enemies from a distance.",
    abilities: [
      "Ranged arrow attacks",
      "Maintains distance from enemies",
      "Safe Ghost Step positioning",
    ],
    playstyle: "Provides ranged support while you fight. Great for classes that lack range.",
    bestFor: ["Mage", "Berserker", "Players who want ranged backup"],
    synergies: ["Ranged builds", "Kiting strategies", "Glass cannon setups"],
  },
  {
    id: "guardian",
    name: "Guardian",
    type: "Tank",
    description: "A defensive companion that draws aggro and protects you from harm.",
    abilities: [
      "Taunts enemies",
      "Absorbs damage",
      "Creates safe zones for Ghost Step",
    ],
    playstyle: "Draws enemy attention so you can attack safely. Essential for fragile classes.",
    bestFor: ["Mage", "Hunter", "Useless Person (early game)", "New players"],
    synergies: ["Glass cannon builds", "Spell casters", "Learning enemy patterns"],
  },
  {
    id: "rogue",
    name: "Rogue",
    type: "Burst DPS",
    description: "An agile companion that uses daggers for rapid, precise strikes.",
    abilities: [
      "Fast dagger attacks",
      "High critical chance",
      "Evasive positioning",
    ],
    playstyle: "High-risk, high-reward companion that excels at burst damage.",
    bestFor: ["Hunter", "Experienced players", "Critical builds"],
    synergies: ["Critical damage builds", "Fast-paced playstyles", "Boss rushing"],
  },
];

export const CHAPTERS = [
  {
    id: 1,
    name: "The Dungeons",
    description: "Dark underground passages filled with undead and corrupted souls.",
    enemies: ["Skeleton Warriors", "Corrupted Souls", "Dungeon Crawlers"],
    eliteBosses: ["Dungeon Warden", "Bone Collector"],
    finalBoss: "The Forgotten Knight",
    difficulty: 1,
    tips: [
      "Learn basic combat here",
      "Enemies telegraph attacks clearly",
      "Good for farming early resources",
    ],
  },
  {
    id: 2,
    name: "The Village",
    description: "A corrupted settlement where twisted villagers roam.",
    enemies: ["Corrupted Villagers", "Plague Bearers", "Feral Hounds"],
    eliteBosses: ["Village Elder", "Plague Doctor"],
    finalBoss: "The Butcher",
    difficulty: 2,
    tips: [
      "Watch for ambushes in houses",
      "Hounds attack in packs",
      "Use narrow spaces to your advantage",
    ],
  },
  {
    id: 3,
    name: "Coastal Fishing Hamlet",
    description: "A seaside village consumed by eldritch horrors from the deep.",
    enemies: ["Deep Ones", "Fishmen", "Tentacle Horrors"],
    eliteBosses: ["Sea Priest", "Kraken Spawn"],
    finalBoss: "The Drowned God",
    difficulty: 3,
    tips: [
      "Water areas slow movement",
      "Tentacles attack from unexpected angles",
      "Ranged weapons excel here",
    ],
  },
  {
    id: 4,
    name: "The Black Tower",
    description: "An ancient spire of dark magic, home to powerful sorcerers.",
    enemies: ["Dark Mages", "Arcane Constructs", "Shadow Assassins"],
    eliteBosses: ["Archmage", "Void Walker"],
    finalBoss: "The Tower Master",
    difficulty: 4,
    tips: [
      "Magical attacks are common",
      "Dodge projectiles constantly",
      "Interrupt caster enemies quickly",
    ],
  },
  {
    id: 5,
    name: "The Ruins",
    description: "Ancient ruins where primordial demons dwell.",
    enemies: ["The Lost Seeker of Knowledge", "Curtain Wanderer", "Curtain Believer", "Curtain Attendant", "Soulless Ancient Guardian"],
    eliteBosses: ["Burning Bone Demon Ursok"],
    finalBoss: "Chaos Before Creation",
    difficulty: 5,
    tips: [
      "Enemies have complex attack patterns",
      "Environmental hazards are deadly",
      "Bring your strongest build",
    ],
  },
  {
    id: 6,
    name: "The Void",
    description: "The dimensional void where the ultimate evil awaits.",
    enemies: ["Void Entities", "Dimensional Horrors", "Reality Warpers"],
    eliteBosses: ["Void Herald", "Dimension Ripper"],
    finalBoss: "The Final Covenant",
    difficulty: 6,
    tips: [
      "Bullet hell attacks are common",
      "Ghost Step is essential",
      "Master all mechanics before attempting",
    ],
  },
];

export const GAME_MODES = [
  {
    id: "standard",
    name: "Standard Run",
    description: "The classic roguelike experience through all six chapters.",
    unlockCondition: "Available from start",
  },
  {
    id: "boss-rush",
    name: "Boss Rush",
    description: "Fight all bosses back-to-back with limited healing between fights.",
    unlockCondition: "Complete Chapter 4",
  },
  {
    id: "chaos-mode",
    name: "Chaos Mode",
    description: "Randomized maps with mixed enemy types from all chapters.",
    unlockCondition: "Complete the game once",
  },
  {
    id: "iron-crown-frenzy",
    name: "Iron Crown Frenzy",
    description: "Higher difficulty with stronger enemies and reduced healing.",
    unlockCondition: "Complete Chaos Mode",
  },
  {
    id: "corruption-mode",
    name: "Corruption Mode",
    description: "The ultimate challenge. Enemies deal massive damage and have new abilities.",
    unlockCondition: "Complete Iron Crown Frenzy",
  },
];

export const COMBAT_MECHANICS = {
  basicActions: [
    {
      name: "Light Attack",
      description: "Fast attack with low damage and stamina cost.",
      input: "Left Click / Square / X",
    },
    {
      name: "Heavy Attack",
      description: "Slow attack with high damage and stagger.",
      input: "Hold Left Click / Hold Square / Hold X",
    },
    {
      name: "Dodge",
      description: "Invincible roll that consumes stamina.",
      input: "Space / Circle / B",
    },
    {
      name: "Block (Shield Guard)",
      description: "Reduce incoming damage at stamina cost.",
      input: "Right Click / L1 / LB",
    },
  ],
  advancedMechanics: [
    {
      name: "Ethereal Dash",
      description: "A longer invincible dash for repositioning. Essential for avoiding bullet-hell attacks.",
      cooldown: "10 seconds",
      tips: [
        "Use to escape dangerous situations",
        "Can pass through enemies",
        "Save for emergencies in boss fights",
      ],
    },
    {
      name: "Ghost Step",
      description: "Teleport to your Soul Companion's position. Leaves a node you can return to.",
      cooldown: "15 seconds",
      tips: [
        "Place companion in safe spots before engaging",
        "Use to instantly escape boss attacks",
        "Essential for bullet-hell phases",
      ],
    },
    {
      name: "Perfect Parry",
      description: "Time your block exactly with an attack to negate all damage and stagger the enemy.",
      window: "~200ms",
      tips: [
        "Learn enemy attack timings",
        "Practice on regular enemies first",
        "Creates counter-attack opportunities",
      ],
    },
    {
      name: "Nether Lantern",
      description: "Your secondary weapon ability. Varies based on equipped lantern type.",
      types: ["Bow (ranged)", "Sword (melee)", "Shield (defensive)"],
      tips: [
        "Use during enemy vulnerability windows",
        "Increases stagger significantly",
        "Different lanterns for different builds",
      ],
    },
  ],
  statusEffects: [
    { name: "Stagger", description: "Interrupts enemy actions and creates attack windows" },
    { name: "Palsy", description: "Slows enemy movement and attack speed" },
    { name: "Burn", description: "Deals damage over time" },
    { name: "Freeze", description: "Immobilizes enemies temporarily" },
    { name: "Poison", description: "Gradual health drain" },
  ],
};

export const PROGRESSION_SYSTEM = {
  currencies: [
    {
      name: "Blackstone",
      description: "Primary currency for permanent upgrades at Crossroads Camp.",
      priority: 1,
      tips: "Always prioritize Blackstone rooms",
    },
    {
      name: "Gold",
      description: "In-run currency for purchasing items from merchants.",
      priority: 2,
      tips: "Spend before boss fights",
    },
    {
      name: "Legion Badges",
      description: "Rare currency from elite enemies for special upgrades.",
      priority: 3,
      tips: "Save for powerful unlocks",
    },
  ],
  roomPriority: [
    { type: "Blackstone", priority: 1, reason: "Permanent progression" },
    { type: "Gold", priority: 2, reason: "Immediate power" },
    { type: "Soul Skill", priority: 3, reason: "Build enhancement" },
    { type: "Treasure", priority: 4, reason: "Relic acquisition" },
    { type: "Merchant", priority: 5, reason: "Targeted purchases" },
    { type: "Upgrade", priority: 6, reason: "Stat boosts" },
  ],
  talents: [
    { name: "Max HP", description: "Increases maximum health", priority: "High" },
    { name: "Stamina", description: "Increases stamina pool", priority: "Medium" },
    { name: "Damage", description: "Increases base damage", priority: "Medium" },
    { name: "Critical", description: "Increases critical chance", priority: "Low (build dependent)" },
  ],
};

export const AURAS = [
  {
    name: "Blessing of Fireworks",
    description: "Gain 1 layer of Warm Flow for 7 seconds after using a skill. Each layer increases Stamina recovery by 25%.",
    bestFor: ["Mage", "Stamina-intensive builds"],
  },
  {
    name: "Ice Shield",
    description: "Periodically gain a protective Ice Shield that blocks incoming damage.",
    bestFor: ["All classes", "Survival builds"],
  },
  {
    name: "Thunder-Charged Body",
    description: "For every 1 point of Stamina recovered, release a Lightning Chain dealing 45 lightning damage.",
    bestFor: ["High stamina regen builds", "AoE damage"],
  },
];

// ============================================
// TIER RATINGS - For Tier List Page
// ============================================

export const TIER_RATINGS = {
  classes: {
    "shield-guard": { tier: "S", reason: "Most forgiving for beginners, excellent survivability" },
    "hunter": { tier: "A", reason: "Safe ranged playstyle, consistent damage output" },
    "berserker": { tier: "A", reason: "High damage potential, good lifesteal sustain" },
    "mage": { tier: "B", reason: "Highest burst but very fragile, requires mastery" },
    "useless-person": { tier: "C", reason: "Challenge class, brutal early game but high ceiling" },
  },
  weapons: {
    "greatsword": { tier: "S", reason: "Best stagger, wide arc, excellent crowd control" },
    "staff": { tier: "S", reason: "Best range, spell synergy, mana efficient" },
    "bow": { tier: "A", reason: "Safe ranged damage, good kiting potential" },
    "double-bladed-axe": { tier: "A", reason: "Massive damage, great lifesteal synergy" },
    "spear": { tier: "B", reason: "Good reach, but narrow hit arc" },
    "short-sword": { tier: "B", reason: "Balanced but lacks specialization" },
    "daggers": { tier: "B", reason: "Fast crits but very short range" },
    "shield": { tier: "A", reason: "Essential for Shield Guard, parry potential" },
  },
  companions: {
    "guardian": { tier: "S", reason: "Best for fragile classes, draws aggro effectively" },
    "ranger": { tier: "A", reason: "Good ranged support, safe Ghost Step positioning" },
    "swordsman": { tier: "B", reason: "Solid melee support, good all-around" },
    "rogue": { tier: "B", reason: "High risk high reward, needs experienced players" },
  },
};

// ============================================
// RELICS - Equipment Items
// ============================================

export const RELICS = [
  // S-Tier Relics
  {
    id: "soul-devourer",
    name: "Soul Devourer",
    rarity: "legendary",
    effect: "Gain 5% lifesteal on all attacks. Stacks with class abilities.",
    bestFor: ["Berserker", "Melee builds"],
    tier: "S",
    category: "offense",
  },
  {
    id: "ethereal-cloak",
    name: "Ethereal Cloak",
    rarity: "legendary",
    effect: "Ethereal Dash cooldown reduced by 40%. Gain 2 seconds of invulnerability after dashing.",
    bestFor: ["All classes", "Survival builds"],
    tier: "S",
    category: "defense",
  },
  {
    id: "nether-amplifier",
    name: "Nether Amplifier",
    rarity: "legendary",
    effect: "Nether Lantern damage increased by 50%. Stagger damage doubled.",
    bestFor: ["All classes", "Stagger builds"],
    tier: "S",
    category: "offense",
  },
  // A-Tier Relics
  {
    id: "critical-eye",
    name: "Critical Eye",
    rarity: "rare",
    effect: "Critical hit chance increased by 15%. Critical damage increased by 25%.",
    bestFor: ["Hunter", "Daggers build"],
    tier: "A",
    category: "offense",
  },
  {
    id: "stamina-reservoir",
    name: "Stamina Reservoir",
    rarity: "rare",
    effect: "Maximum stamina increased by 30%. Stamina regeneration increased by 20%.",
    bestFor: ["Berserker", "Useless Person"],
    tier: "A",
    category: "utility",
  },
  {
    id: "warm-flow-catalyst",
    name: "Warm Flow Catalyst",
    rarity: "rare",
    effect: "Warm Flow stacks build 50% faster. Maximum stacks increased by 3.",
    bestFor: ["Mage"],
    tier: "A",
    category: "offense",
  },
  {
    id: "guardian-shield",
    name: "Guardian's Shield",
    rarity: "rare",
    effect: "Block efficiency increased by 25%. Perfect parry window extended by 100ms.",
    bestFor: ["Shield Guard"],
    tier: "A",
    category: "defense",
  },
  {
    id: "swift-hunter",
    name: "Swift Hunter",
    rarity: "rare",
    effect: "Movement speed increased by 15%. Attack speed increased by 10%.",
    bestFor: ["Hunter", "Kiting builds"],
    tier: "A",
    category: "utility",
  },
  // B-Tier Relics
  {
    id: "health-crystal",
    name: "Health Crystal",
    rarity: "common",
    effect: "Maximum HP increased by 20%.",
    bestFor: ["All classes", "Beginners"],
    tier: "B",
    category: "defense",
  },
  {
    id: "damage-sigil",
    name: "Damage Sigil",
    rarity: "common",
    effect: "Base damage increased by 15%.",
    bestFor: ["All classes"],
    tier: "B",
    category: "offense",
  },
  {
    id: "mana-well",
    name: "Mana Well",
    rarity: "common",
    effect: "Mana regeneration increased by 30%. Spell costs reduced by 10%.",
    bestFor: ["Mage"],
    tier: "B",
    category: "utility",
  },
  {
    id: "thorns-armor",
    name: "Thorns Armor",
    rarity: "common",
    effect: "Reflect 20% of damage taken back to attackers.",
    bestFor: ["Shield Guard", "Tank builds"],
    tier: "B",
    category: "defense",
  },
  {
    id: "gold-magnet",
    name: "Gold Magnet",
    rarity: "common",
    effect: "Gold pickup range increased. Gold drops increased by 20%.",
    bestFor: ["All classes", "Farming runs"],
    tier: "B",
    category: "utility",
  },
  // C-Tier Relics
  {
    id: "minor-heal",
    name: "Minor Healing Charm",
    rarity: "common",
    effect: "Regenerate 1 HP per second out of combat.",
    bestFor: ["Beginners"],
    tier: "C",
    category: "defense",
  },
  {
    id: "light-step",
    name: "Light Step",
    rarity: "common",
    effect: "Dodge distance increased by 10%.",
    bestFor: ["All classes"],
    tier: "C",
    category: "utility",
  },
];

// ============================================
// BOSS GUIDES - Detailed Boss Strategies
// ============================================

export const BOSS_GUIDES = {
  "forgotten-knight": {
    id: "forgotten-knight",
    name: "The Forgotten Knight",
    chapter: 1,
    difficulty: 2,
    description: "A fallen knight corrupted by the Netherworld's influence. Once a noble defender, now a relentless enemy.",
    phases: [
      {
        name: "Phase 1 (100%-50% HP)",
        description: "Basic sword combos and shield charges",
        attacks: [
          { name: "Three-Hit Combo", description: "Three consecutive sword slashes. Dodge after the second hit.", telegraph: "Raises sword high" },
          { name: "Shield Charge", description: "Rushes forward with shield. Creates shockwave on impact.", telegraph: "Crouches and braces shield" },
          { name: "Overhead Slam", description: "Heavy overhead attack. High damage but slow.", telegraph: "Two-handed grip, long windup" },
        ],
      },
      {
        name: "Phase 2 (Below 50% HP)",
        description: "Becomes more aggressive, adds new attacks",
        attacks: [
          { name: "All Phase 1 attacks", description: "Faster execution", telegraph: "Same as Phase 1" },
          { name: "Dark Wave", description: "Ranged shockwave attack. Jump or dodge through it.", telegraph: "Sword glows purple" },
          { name: "Berserk Combo", description: "Five-hit combo ending with AoE slam.", telegraph: "Eyes glow red" },
        ],
      },
    ],
    tips: [
      "Stay close to bait melee attacks, which have clearer telegraphs",
      "Shield Charge can be parried for massive stagger damage",
      "In Phase 2, don't get greedy - his combos are much longer",
      "Use Ghost Step during Dark Wave for safe positioning",
    ],
    recommendedClasses: ["Shield Guard", "Berserker"],
    recommendedCompanions: ["Guardian", "Swordsman"],
  },
  "the-butcher": {
    id: "the-butcher",
    name: "The Butcher",
    chapter: 2,
    difficulty: 3,
    description: "A massive, cleaver-wielding horror from the corrupted village. Slow but devastating.",
    phases: [
      {
        name: "Phase 1 (100%-60% HP)",
        description: "Slow, telegraphed attacks with high damage",
        attacks: [
          { name: "Cleaver Slam", description: "Overhead slam creating shockwave. Dodge to the side.", telegraph: "Raises cleaver with both hands" },
          { name: "Horizontal Sweep", description: "Wide horizontal slash. Jump or duck.", telegraph: "Pulls cleaver back to side" },
          { name: "Grab Attack", description: "Grabs and throws player. Cannot be blocked.", telegraph: "Reaches out with free hand" },
        ],
      },
      {
        name: "Phase 2 (Below 60% HP)",
        description: "Summons minions and becomes faster",
        attacks: [
          { name: "All Phase 1 attacks", description: "20% faster execution", telegraph: "Same as Phase 1" },
          { name: "Summon Minions", description: "Spawns 3 corrupted villagers.", telegraph: "Slams ground and roars" },
          { name: "Frenzy Mode", description: "Rapid consecutive slams. Find cover or stay far away.", telegraph: "Eyes turn completely red" },
        ],
      },
    ],
    tips: [
      "His attacks are slow - you have time to land 2-3 hits after dodging",
      "Kill minions quickly in Phase 2 before they overwhelm you",
      "Ranged classes can kite him easily due to his slow movement",
      "Grab attack ignores block - always dodge when you see his hand reach out",
    ],
    recommendedClasses: ["Hunter", "Mage"],
    recommendedCompanions: ["Ranger", "Guardian"],
  },
  "drowned-god": {
    id: "drowned-god",
    name: "The Drowned God",
    chapter: 3,
    difficulty: 4,
    description: "An eldritch horror from the deep. Uses water and tentacle attacks.",
    phases: [
      {
        name: "Phase 1 (100%-70% HP)",
        description: "Tentacle attacks and water hazards",
        attacks: [
          { name: "Tentacle Slam", description: "Multiple tentacles slam the arena. Watch for shadows.", telegraph: "Shadows appear on ground" },
          { name: "Water Burst", description: "AoE water explosion at player location.", telegraph: "Water bubbles beneath feet" },
          { name: "Ink Cloud", description: "Obscures vision temporarily.", telegraph: "Boss submerges briefly" },
        ],
      },
      {
        name: "Phase 2 (70%-30% HP)",
        description: "Arena floods, movement restricted",
        attacks: [
          { name: "All Phase 1 attacks", description: "Increased frequency", telegraph: "Same as Phase 1" },
          { name: "Whirlpool", description: "Creates pulling vortex. Dash away or be pulled in.", telegraph: "Water starts spinning" },
          { name: "Tidal Wave", description: "Large wave crosses arena. Jump or use Ethereal Dash.", telegraph: "Water recedes before wave" },
        ],
      },
      {
        name: "Phase 3 (Below 30% HP)",
        description: "Desperate attacks, tentacles everywhere",
        attacks: [
          { name: "All previous attacks", description: "Much faster", telegraph: "Same as before" },
          { name: "Tentacle Storm", description: "Tentacles attack from all directions. Constant dodging required.", telegraph: "Boss screams" },
          { name: "Death Grip", description: "Must button mash to escape or die.", telegraph: "Giant tentacle emerges" },
        ],
      },
    ],
    tips: [
      "Movement speed is crucial - the flooded arena slows you down",
      "Ghost Step is essential for escaping Whirlpool",
      "Stay near arena edges in Phase 3 for easier tentacle avoidance",
      "Bring ranged weapons - melee is risky due to tentacle attacks",
    ],
    recommendedClasses: ["Mage", "Hunter"],
    recommendedCompanions: ["Guardian", "Ranger"],
  },
  "tower-master": {
    id: "tower-master",
    name: "The Tower Master",
    chapter: 4,
    difficulty: 5,
    description: "A powerful sorcerer who commands dark magic. Uses projectiles and summons.",
    phases: [
      {
        name: "Phase 1 (100%-50% HP)",
        description: "Ranged spell attacks",
        attacks: [
          { name: "Magic Missiles", description: "Fires tracking projectiles. Can be dodged.", telegraph: "Hands glow with energy" },
          { name: "Arcane Beam", description: "Sweeping laser beam. Jump over it.", telegraph: "Charges up with bright light" },
          { name: "Teleport Strike", description: "Teleports behind and attacks.", telegraph: "Body flickers" },
        ],
      },
      {
        name: "Phase 2 (Below 50% HP)",
        description: "Summons constructs and uses more spells",
        attacks: [
          { name: "All Phase 1 attacks", description: "Faster casting", telegraph: "Same as Phase 1" },
          { name: "Summon Constructs", description: "Spawns 2 arcane constructs.", telegraph: "Creates magic circles" },
          { name: "Meteor Rain", description: "Meteors fall across arena. Keep moving.", telegraph: "Sky darkens" },
          { name: "Time Slow Field", description: "Creates zone that slows player.", telegraph: "Purple dome appears" },
        ],
      },
    ],
    tips: [
      "Interrupt his spells with Nether Lantern when possible",
      "Destroy constructs immediately - they heal him",
      "Stay mobile during Meteor Rain - don't try to fight",
      "Melee classes should rush him and stay aggressive to prevent casting",
    ],
    recommendedClasses: ["Berserker", "Shield Guard"],
    recommendedCompanions: ["Swordsman", "Rogue"],
  },
  "chaos-before-creation": {
    id: "chaos-before-creation",
    name: "Chaos Before Creation",
    chapter: 5,
    difficulty: 6,
    description: "A primordial demon from before time. Reality warps around it.",
    phases: [
      {
        name: "Phase 1 (100%-60% HP)",
        description: "Reality-warping attacks",
        attacks: [
          { name: "Void Slash", description: "Tears reality, creating damaging rifts.", telegraph: "Claw motion in air" },
          { name: "Dimensional Shift", description: "Swaps positions with player.", telegraph: "Eyes flash" },
          { name: "Chaos Orbs", description: "Slow-moving orbs that explode.", telegraph: "Hands create spheres" },
        ],
      },
      {
        name: "Phase 2 (60%-30% HP)",
        description: "Arena transforms, gravity shifts",
        attacks: [
          { name: "All Phase 1 attacks", description: "Enhanced versions", telegraph: "Same as Phase 1" },
          { name: "Gravity Reverse", description: "Briefly inverts gravity.", telegraph: "Purple glow on ground" },
          { name: "Clone Split", description: "Creates 2 clones. Find the real one.", telegraph: "Body splits apart" },
          { name: "Void Prison", description: "Traps player. Break free or take massive damage.", telegraph: "Circle appears under player" },
        ],
      },
      {
        name: "Phase 3 (Below 30% HP)",
        description: "Full chaos mode",
        attacks: [
          { name: "All previous attacks", description: "Simultaneous attacks possible", telegraph: "Same as before" },
          { name: "Reality Collapse", description: "Arena shrinks temporarily.", telegraph: "Edges glow and contract" },
          { name: "Final Chaos", description: "Bullet hell attack. Constant dodging.", telegraph: "Boss transforms" },
        ],
      },
    ],
    tips: [
      "Learn to identify the real boss from clones - slightly different color",
      "Save Ethereal Dash for Void Prison escape",
      "During Gravity Reverse, attacks still work normally",
      "In Phase 3, prioritize survival over damage",
    ],
    recommendedClasses: ["Hunter", "Shield Guard"],
    recommendedCompanions: ["Guardian", "Ranger"],
  },
  "final-covenant": {
    id: "final-covenant",
    name: "The Final Covenant",
    chapter: 6,
    difficulty: 7,
    description: "The ultimate evil awaiting in the Void. Master of all elements and dimensions.",
    phases: [
      {
        name: "Phase 1 (100%-75% HP)",
        description: "Tests player with elemental attacks",
        attacks: [
          { name: "Elemental Cycle", description: "Rotates through fire, ice, lightning attacks.", telegraph: "Aura color changes" },
          { name: "Void Tendrils", description: "Tendrils attack from portals.", telegraph: "Portals open around arena" },
          { name: "Soul Drain", description: "Channeled attack. Must interrupt or take heavy damage.", telegraph: "Purple beam from hands" },
        ],
      },
      {
        name: "Phase 2 (75%-40% HP)",
        description: "Combines elements, summons minions",
        attacks: [
          { name: "All Phase 1 attacks", description: "Can combine elements", telegraph: "Multiple aura colors" },
          { name: "Summon Echoes", description: "Summons echoes of previous bosses.", telegraph: "Roars and creates portals" },
          { name: "Dimensional Rift", description: "Creates damaging zones across arena.", telegraph: "Space tears apart" },
        ],
      },
      {
        name: "Phase 3 (40%-15% HP)",
        description: "Desperation attacks",
        attacks: [
          { name: "All previous attacks", description: "Much faster, more aggressive", telegraph: "Same as before" },
          { name: "Covenant's Wrath", description: "Screen-wide attack. Must use cover.", telegraph: "Charges up for 3 seconds" },
          { name: "Time Stop", description: "Freezes player briefly.", telegraph: "Clock sound" },
        ],
      },
      {
        name: "Final Phase (Below 15% HP)",
        description: "True form revealed",
        attacks: [
          { name: "All attacks combined", description: "No safe moments", telegraph: "Constant" },
          { name: "Final Reckoning", description: "Enrage - must kill quickly or wipe.", telegraph: "HP bar turns red" },
        ],
      },
    ],
    tips: [
      "This is a marathon, not a sprint - preserve resources for later phases",
      "Kill Echo summons quickly - they use their original boss attacks",
      "During Covenant's Wrath, hide behind the pillars that spawn",
      "In Final Phase, go all-out - you have limited time before enrage",
      "Bring your best build and practice all previous bosses first",
    ],
    recommendedClasses: ["Shield Guard", "Hunter"],
    recommendedCompanions: ["Guardian", "Ranger"],
  },
};

// ============================================
// CLASS FINDER QUESTIONS - For Quiz Tool
// ============================================

export const CLASS_FINDER_QUESTIONS = [
  {
    id: "playstyle",
    question: "What's your preferred combat style?",
    options: [
      { label: "Get in their face and deal massive damage", scores: { berserker: 3, "shield-guard": 1, mage: 0, hunter: 0, "useless-person": 2 } },
      { label: "Keep my distance and attack safely", scores: { berserker: 0, "shield-guard": 0, mage: 3, hunter: 3, "useless-person": 1 } },
      { label: "Block attacks and counter-attack", scores: { berserker: 1, "shield-guard": 3, mage: 0, hunter: 0, "useless-person": 1 } },
      { label: "Adapt to whatever the situation requires", scores: { berserker: 1, "shield-guard": 1, mage: 1, hunter: 1, "useless-person": 3 } },
    ],
  },
  {
    id: "difficulty",
    question: "How much challenge do you want?",
    options: [
      { label: "I'm new to roguelikes - go easy on me", scores: { berserker: 1, "shield-guard": 3, mage: 0, hunter: 2, "useless-person": 0 } },
      { label: "Moderate challenge is fine", scores: { berserker: 3, "shield-guard": 2, mage: 1, hunter: 3, "useless-person": 1 } },
      { label: "I want to be tested", scores: { berserker: 2, "shield-guard": 1, mage: 3, hunter: 2, "useless-person": 2 } },
      { label: "Give me the hardest option", scores: { berserker: 1, "shield-guard": 0, mage: 2, hunter: 1, "useless-person": 3 } },
    ],
  },
  {
    id: "survival",
    question: "How do you prefer to survive?",
    options: [
      { label: "High defense and blocking", scores: { berserker: 0, "shield-guard": 3, mage: 0, hunter: 1, "useless-person": 1 } },
      { label: "Lifesteal and sustain through damage", scores: { berserker: 3, "shield-guard": 1, mage: 0, hunter: 0, "useless-person": 2 } },
      { label: "Don't get hit in the first place", scores: { berserker: 0, "shield-guard": 0, mage: 2, hunter: 3, "useless-person": 2 } },
      { label: "Kill enemies before they kill me", scores: { berserker: 2, "shield-guard": 0, mage: 3, hunter: 2, "useless-person": 1 } },
    ],
  },
  {
    id: "mistakes",
    question: "How do you handle making mistakes?",
    options: [
      { label: "I need forgiveness for errors", scores: { berserker: 1, "shield-guard": 3, mage: 0, hunter: 2, "useless-person": 0 } },
      { label: "I can recover from occasional mistakes", scores: { berserker: 3, "shield-guard": 2, mage: 1, hunter: 3, "useless-person": 1 } },
      { label: "I rarely make mistakes", scores: { berserker: 2, "shield-guard": 1, mage: 3, hunter: 2, "useless-person": 2 } },
      { label: "One mistake = restart (I'm masochistic)", scores: { berserker: 0, "shield-guard": 0, mage: 2, hunter: 1, "useless-person": 3 } },
    ],
  },
  {
    id: "weapons",
    question: "What weapon type appeals to you?",
    options: [
      { label: "Big, heavy weapons with wide swings", scores: { berserker: 3, "shield-guard": 2, mage: 0, hunter: 0, "useless-person": 2 } },
      { label: "Magic staffs and spells", scores: { berserker: 0, "shield-guard": 0, mage: 3, hunter: 0, "useless-person": 1 } },
      { label: "Bows or ranged weapons", scores: { berserker: 0, "shield-guard": 0, mage: 1, hunter: 3, "useless-person": 1 } },
      { label: "Shield and sword combo", scores: { berserker: 0, "shield-guard": 3, mage: 0, hunter: 0, "useless-person": 1 } },
      { label: "Whatever I find - I'm flexible", scores: { berserker: 1, "shield-guard": 1, mage: 1, hunter: 1, "useless-person": 3 } },
    ],
  },
  {
    id: "soulslike",
    question: "Have you played Soulslike games before?",
    options: [
      { label: "Never played any", scores: { berserker: 1, "shield-guard": 3, mage: 0, hunter: 2, "useless-person": 0 } },
      { label: "Played a few, somewhat experienced", scores: { berserker: 2, "shield-guard": 2, mage: 2, hunter: 2, "useless-person": 1 } },
      { label: "I've beaten multiple Souls games", scores: { berserker: 3, "shield-guard": 1, mage: 3, hunter: 2, "useless-person": 2 } },
      { label: "I do challenge runs for fun", scores: { berserker: 2, "shield-guard": 0, mage: 2, hunter: 1, "useless-person": 3 } },
    ],
  },
];

// ============================================
// BUILD CALCULATOR DATA - Stats and Bonuses
// ============================================

export const BUILD_CALCULATOR_DATA = {
  baseStats: {
    berserker: { hp: 100, stamina: 100, damage: 15, defense: 5, critChance: 10, critDamage: 150, attackSpeed: 1.0, moveSpeed: 100 },
    mage: { hp: 70, stamina: 80, damage: 20, defense: 3, critChance: 5, critDamage: 150, attackSpeed: 0.8, moveSpeed: 95, mana: 100 },
    hunter: { hp: 85, stamina: 110, damage: 12, defense: 4, critChance: 15, critDamage: 175, attackSpeed: 1.2, moveSpeed: 115 },
    "shield-guard": { hp: 120, stamina: 90, damage: 10, defense: 10, critChance: 5, critDamage: 150, attackSpeed: 0.9, moveSpeed: 90, blockEfficiency: 50 },
    "useless-person": { hp: 80, stamina: 120, damage: 8, defense: 4, critChance: 10, critDamage: 150, attackSpeed: 1.0, moveSpeed: 100 },
  },
  weaponBonuses: {
    "short-sword": { damage: 5, attackSpeed: 0.2 },
    "greatsword": { damage: 15, attackSpeed: -0.3, stagger: 20 },
    "daggers": { damage: 3, attackSpeed: 0.5, critChance: 10 },
    "double-bladed-axe": { damage: 18, attackSpeed: -0.2, lifesteal: 3 },
    "staff": { damage: 8, spellDamage: 25, manaRegen: 20 },
    "bow": { damage: 10, range: 30, critChance: 5 },
    "spear": { damage: 8, range: 15, attackSpeed: 0.1 },
    "shield": { defense: 10, blockEfficiency: 25, counterDamage: 10 },
  },
  companionBonuses: {
    "swordsman": { damage: 5, stagger: 5 },
    "ranger": { damage: 3, critChance: 3 },
    "guardian": { defense: 5, hp: 15 },
    "rogue": { critChance: 5, critDamage: 25 },
  },
};
