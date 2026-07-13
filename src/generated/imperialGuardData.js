export const imperialGuardData = {
  "generatedAt": "2026-07-13T20:14:03.331Z",
  "classId": 4258,
  "classSlug": "imperial-guard",
  "className": "Imperial Guard",
  "hasSkillTree": true,
  "pointLimit": 59,
  "pointLimitTimeline": [
    {
      "versionId": "pre",
      "label": "Pre-rebalances",
      "maxJobLevel": 50,
      "pointLimit": 49
    },
    {
      "versionId": "rebalance-1",
      "label": "Rebalance 1",
      "maxJobLevel": 50,
      "pointLimit": 49
    },
    {
      "versionId": "rebalance-2",
      "label": "Rebalance 2",
      "maxJobLevel": 50,
      "pointLimit": 49
    },
    {
      "versionId": "rebalance-3",
      "label": "Rebalance 3",
      "maxJobLevel": 55,
      "pointLimit": 54
    },
    {
      "versionId": "rebalance-4",
      "label": "Rebalance 4",
      "maxJobLevel": 55,
      "pointLimit": 54
    },
    {
      "versionId": "rebalance-5",
      "label": "Rebalance 5",
      "maxJobLevel": 60,
      "pointLimit": 59
    },
    {
      "versionId": "current",
      "label": "Current specs",
      "maxJobLevel": 60,
      "pointLimit": 59
    }
  ],
  "summary": {
    "changedSkills": 10,
    "noteCount": 76,
    "addedSkills": 1,
    "versions": 5
  },
  "tree": {
    "columns": 7,
    "rows": 4,
    "skillTreeUrl": "https://www.divine-pride.net/tools/skilltree/4258",
    "jobIconUrl": "assets/divine-pride/jobs/4258.png"
  },
  "sources": {
    "rebalances": [
      "rebalances/imperial-guard/rebalance_1.md",
      "rebalances/imperial-guard/rebalance_2.md",
      "rebalances/imperial-guard/rebalance_3.md",
      "rebalances/imperial-guard/rebalance_4.md",
      "rebalances/imperial-guard/rebalance_5.md"
    ],
    "rebalanceManifest": "rebalances/manifest.json",
    "divinePrideApiDocs": "https://www.divine-pride.net/api",
    "divinePrideSkillTree": "https://www.divine-pride.net/tools/skilltree/4258",
    "browiki": "https://browiki.org",
    "irowiki": "https://irowiki.org/wiki/"
  },
  "rebalanceVersions": [
    {
      "id": "rebalance-1",
      "label": "Rebalance 1",
      "file": "rebalances/imperial-guard/rebalance_1.md",
      "heading": "2. Imperial Guard",
      "className": "Imperial Guard",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=9805",
      "scope": "main",
      "appliesTo": "Main classes only",
      "maxJobLevel": 50,
      "pointLimit": 49,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "2.1",
          "name": "Attack Stance",
          "notes": [
            "Changes bonus from Atk + 30 to P.Atk + 15 and S.Matk + 15 based on level 5."
          ]
        },
        {
          "section": "2.2",
          "name": "Shield Shooting",
          "notes": [
            "Reduces cooldown from 2 second to 1 second based on level 5.",
            "Increases damage bonus from Shield Mastery,"
          ]
        },
        {
          "section": "2.3",
          "name": "Overslash",
          "notes": [
            "Reduces fixed casting time from 1 second to 0.5 seconds based on level 10.",
            "Reduces cooldown from 3 seconds to 1 second based on level 10.",
            "Reduces AP recovery rate from 3 to 2.",
            "Increases cast range from 1 cell to 3 cells.",
            "Increases maximum number of attack according to the number of enemies around the target from 5 hits to 7 hits."
          ]
        },
        {
          "section": "2.4",
          "name": "Guardian Shield",
          "notes": [
            "Reduces MaxHP factor to the half of user's MaxHP.",
            "Increases the bonus of shield by 15 times of the user's STA.",
            "Recovers 15 AP upon casting."
          ]
        },
        {
          "section": "2.5",
          "name": "Cross Rain",
          "notes": [
            "Reduces fixed casting time from 2 seconds to 1.5 seconds based on level 10.",
            "Reduces delay after skill from 1 second to 0.5 seconds based on level 10.",
            "Increases damage (includes Spear & Sword Mastery level 10 bonus) from 400%Matk to 2000%Matk, and 600%Matk to 3500%Matk while using Holy Shield."
          ]
        },
        {
          "section": "2.6",
          "name": "Genesis Ray",
          "notes": [
            "Increases damage to 3500%Matk based on level 10 regardless of neutral or holy property.",
            "Reduces SP consumption from 120 to 90 based on level 10."
          ]
        },
        {
          "section": "2.7",
          "name": "Vanishing Point",
          "notes": [
            "Increases damage (includes Bash level 10 bonus) from 1300%Atk to 1700%Atk based on level 10.",
            "Increases damage while under Grand Judgement buff from 1700%Atk to 2500%Atk.",
            "Increases SP consumption from 25 to 38 based on level 10.",
            "Increases Hit bonus from 30 to 50 based on level 10."
          ]
        },
        {
          "section": "2.8",
          "name": "Cannon Spear",
          "notes": [
            "Reduces cooldown from 2 seconds to 1.7 seconds based on level 5.",
            "Increases area of effect from 5x5 cells to 7x7 cells based on level 5.",
            "Increases critical chance from the half of the user's cri to the user's cri.",
            "Increases damage (on Str 130) from 900%Atk to 1250%Atk based on level 5.",
            "Increases damage while under Grand Judgement buff from 1050%Atk to 1650%Atk based on level 5."
          ]
        },
        {
          "section": "2.9",
          "name": "Overbrand",
          "notes": [
            "Increases damage from 1500%Atk to 1750%Atk based on level 5.",
            "Increases damage while under Overbrand Ready buff from 2250%Atk to 2500%Atk based on level 5."
          ]
        },
        {
          "section": "2.10",
          "name": "Hesperus Lit",
          "notes": [
            "Removes variable casting time.",
            "Reduces cooldown from 0.3 seconds to 0.2 seconds based on level 5.",
            "Reduces delay after skill from 1 second to 0.5 seconds based on level 5."
          ]
        },
        {
          "section": "2.11",
          "name": "Shield press",
          "notes": [
            "Increases damage while under Shield Shooting buff by adding damage bonus from Shield Mastery. (Based on Shield Press level 10 and Shield Mastery level 10. Damage will be increased from 2600%Atk to 4100%Atk)."
          ]
        },
        {
          "section": "2.12",
          "name": "Rapid Smiting",
          "notes": [
            "Increases damage while under Shield Shooting buff by adding damage bonus from Shield Mastery. (Based on Rapid Smiting level 5 and Shield Mastery level 10. Damage will be increased from 1650%Atk to 2000%Atk)."
          ]
        },
        {
          "section": "2.13",
          "name": "Earth Drive",
          "notes": [
            "Reduces cooldown from 3 seconds to 2.5 seconds based on level 5.",
            "Increases damage while under Shield Shooting buff by adding damage bonus from Shield Mastery. (Based on Earth Drive level 5 and Shield Mastery level 10. Damage will be increased from 2100%Atk to 3750%Atk)."
          ]
        }
      ]
    },
    {
      "id": "rebalance-2",
      "label": "Rebalance 2",
      "file": "rebalances/imperial-guard/rebalance_2.md",
      "heading": "2. Imperial Guard",
      "className": "Imperial Guard",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=11126",
      "scope": "main-and-expanded",
      "appliesTo": "Main and expanded classes",
      "maxJobLevel": 50,
      "pointLimit": 49,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "2.1",
          "name": "Overslash",
          "notes": [
            "Reduces cooldown from 1 second to 0.7 seconds.",
            "Reduces SP consumption from 68 to 65 based on level 5.",
            "Increases AP recovery rate from 2 to 3.",
            "Increases damage from 1800%Atk to 2200%Atk per hit based on level 10 (Spear & Sword Mastery level 10).",
            "Increases factor weight of POW in skill formula from 2 to 5."
          ]
        },
        {
          "section": "2.2",
          "name": "Shield Shooting",
          "notes": [
            "Reduces cooldown from 1 second to 0.7 seconds.",
            "Increases AP recovery rate from 2 to 3.",
            "Increases damage from 6440%Atk to 14440%Atk based on level 5 (Shield Mastery level 10, shield refine rate is 10 and shield weight is 150).",
            "Increases factor weight of POW in skill formula from 3 to 5."
          ]
        },
        {
          "section": "2.3",
          "name": "Cross Rain",
          "notes": [
            "Reduces cooldown from 5 seconds to 4.5 seconds.",
            "Reduces delay after skill from 0.5 seconds to 0.15 seconds.",
            "Increases SP consumption from 86 to 94 based on level 10.",
            "Increases AP recovery rate from 5 to 7.",
            "Increases damage from 2000%/3500%(Holy Shield)Matk to 3700%/5500%(Holy Shield)Matk per hit based on level 10 (Spear & Sword Mastery level 10)."
          ]
        },
        {
          "section": "2.4",
          "name": "Grand Judgement",
          "notes": [
            "Reduces cooldown from 60 seconds to 0.5 seconds. (actual cooldown from testing is 0.5 seconds)",
            "Removes 0.5 seconds delay after skill.",
            "Increases SP consumption from 68 to 78 based on level 10.",
            "Reduces AP consumption from 150 to 15.",
            "Reduces duration of Grand Judgement buff from 300 seconds to 150 seconds.",
            "Increases damage from 7500%/11000%(plant and insect race)Atk to 15250%/16850%(plant and insect race)Atk based on level 10."
          ]
        },
        {
          "section": "2.5",
          "name": "Judgement Cross",
          "notes": [
            "Reduces cooldown from 60 seconds to 0.5 seconds.",
            "Removes 1.5 seconds delay after skill.",
            "Reduces SP consumption from 150 to 105 based on level 10.",
            "Reduces AP consumption from 150 to 10.",
            "Increases damage from 7500%/11000%(plant and insect race)Matk to 19500%/21000%(plant and insect race)Matk based on level 10."
          ]
        }
      ]
    },
    {
      "id": "rebalance-3",
      "label": "Rebalance 3",
      "file": "rebalances/imperial-guard/rebalance_3.md",
      "heading": "7. Imperial Guard",
      "className": "Imperial Guard",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=12421",
      "scope": "main-and-expanded",
      "appliesTo": "Main and expanded classes",
      "maxJobLevel": 55,
      "pointLimit": 54,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "7.1",
          "name": "Shield Shooting",
          "notes": [
            "Reworks skill to dealing damage to surrounding enemies within 7 x 7 cells around the target.",
            "Reduces cast range from 11 cells to 9 cells.",
            "Increases factor weight of Shield Mastery skill level in skill formula from 75 to 250 based on level 5.",
            "Increases base damage from 11900%Atk to 14900%Atk based on level 5.",
            "Increases factor weight of POW in skill formula from 5 to 7.",
            "Increases factor weight of shield refine rate in skill formula from 4 to 25."
          ]
        },
        {
          "section": "7.2",
          "name": "Overslash",
          "notes": [
            "Increases base damage of from 1200%Atk to 1600%Atk based on level 10.",
            "Increases factor weight of Spear & Sword Mastery skill level in skill formula from 100 to 250 based on level 10.",
            "Increases factor weight of POW in skill formula from 5 to 7."
          ]
        },
        {
          "section": "7.3",
          "name": "Cross Rain",
          "notes": [
            "Reduces skill cooldown from 4.5 seconds to 2.4 seconds.",
            "Reduces skill duration from 4.5 seconds to 2.4 seconds based on level 10.",
            "Increases factor weight of Spear & Sword Mastery skill level in skill formula from 50/100 (Holy Shield) to 100/150 (Holy Shield) based on level 10.",
            "Increases factor weight of SPL in skill formula from 5 to 7.",
            "Reduces AP recovery rate from 7 to 4."
          ]
        }
      ]
    },
    {
      "id": "rebalance-4",
      "label": "Rebalance 4",
      "file": "rebalances/imperial-guard/rebalance_4.md",
      "heading": "7. Imperial Guard",
      "className": "Imperial Guard",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=13917",
      "scope": "main-and-expanded",
      "appliesTo": "Main and expanded classes",
      "maxJobLevel": 55,
      "pointLimit": 54,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "7.1",
          "name": "Attack Stance",
          "notes": [
            "Reduces fixed casting time from 1 second to 0.5 seconds.",
            "Removes 1 second variable casting time.",
            "No longer be removed by Dispell or Clearance."
          ]
        },
        {
          "section": "7.2",
          "name": "Guard Stance",
          "notes": [
            "Reduces fixed casting time from 1 second to 0.5 seconds.",
            "Removes 1 second variable casting time.",
            "No longer be removed by Dispell or Clearance."
          ]
        },
        {
          "section": "7.3",
          "name": "Guardian Shield",
          "notes": [
            "Reworks AP condition from recovering AP to consuming 35 AP upon using instead.",
            "Reduces skill duration from 60 seconds to 40 seconds.",
            "Increases skill cooldown from 15 seconds to 25 seconds.",
            "Reduces global cooldown from 1 second to 0.3 seconds.",
            "Reduces factor weight of MaxHP in skill formula from 50% to 30%.",
            "Reduces final durability factor of skill level from 250% to 125% based on level 5."
          ]
        },
        {
          "section": "7.4",
          "name": "Cross Rain",
          "notes": [
            "Increases AP recovery rate from 4 to 6.",
            "Increases base damage from 3200+(Spear & Sword Mastery skill level x 100)%/4500+(Spear & Sword Mastery skill level x 150)%(Holy Shield)Matk to 4500+(Spear & Sword Mastery skill level x 100)%/6500+(Spear & Sword Mastery skill level x 150)%(Holy Shield)Matk per hit based on level 10."
          ]
        },
        {
          "section": "7.5",
          "name": "Holy Shield",
          "notes": [
            "No longer be removed by Dispell or Clearance."
          ]
        },
        {
          "section": "7.6",
          "name": "Shield Shooting",
          "notes": [
            "Increases AP recovery rate from 3 to 5.",
            "Increases base damage from 14900+(Shield Mastery skill level x 250)%Atk to 18500+(Shield Mastery skill level x 750)%Atk based on level 5.",
            "Increases factor weight of shield refine rate in skill formula from 25 to 100.",
            "Increases factor weight of POW in skill formula from 7 to 10."
          ]
        },
        {
          "section": "7.7",
          "name": "Overslash",
          "notes": [
            "Increases AP recovery rate from 3 to 5.",
            "Increases base damage from 1600+(Spear & Sword Mastery skill level x 250)%Atk to 2200+(Spear & Sword Mastery skill level x 500)%Atk per hit based on level 10."
          ]
        },
        {
          "section": "7.8",
          "name": "Judgement Cross",
          "notes": [
            "Changes damage property from holy to neutral."
          ]
        }
      ]
    },
    {
      "id": "rebalance-5",
      "label": "Rebalance 5",
      "file": "rebalances/imperial-guard/rebalance_5.md",
      "heading": "2. Imperial Guard",
      "className": "Imperial Guard",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/7814-kro-27560-level-expansion-and-new-skills/",
      "scope": "main-and-expanded",
      "appliesTo": "Main and expanded classes",
      "maxJobLevel": 60,
      "pointLimit": 59,
      "addsNewSkills": true,
      "skills": []
    }
  ],
  "addedSkills": [
    {
      "versionId": "rebalance-5",
      "versionLabel": "Rebalance 5",
      "file": "rebalances/imperial-guard/added_skills.md",
      "skills": [
        "Imperial Pressure"
      ]
    }
  ],
  "skillTabs": [
    {
      "id": "current",
      "label": "Imperial Guard",
      "pointLimit": 59,
      "tree": {
        "columns": 7,
        "rows": 4
      },
      "skills": [
        {
          "id": 5259,
          "imageFile": "5259.png",
          "name": "Spear Sword Mastery",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Spear_Sword_Mastery",
          "description": "One-handed Swords, One-handed Spears, and Two-handed Spears increase HIT and Imperial Guard skill damage.",
          "levelDetails": [],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "0"
                },
                {
                  "level": 2,
                  "value": "0"
                },
                {
                  "level": 3,
                  "value": "0"
                },
                {
                  "level": 4,
                  "value": "0"
                },
                {
                  "level": 5,
                  "value": "0"
                },
                {
                  "level": 6,
                  "value": "0"
                },
                {
                  "level": 7,
                  "value": "0"
                },
                {
                  "level": 8,
                  "value": "0"
                },
                {
                  "level": 9,
                  "value": "0"
                },
                {
                  "level": 10,
                  "value": "0"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5259.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5259",
          "tree": {
            "idx": 1,
            "row": 0,
            "col": 1,
            "columns": 7,
            "requirements": []
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Passive Skill"
              },
              {
                "label": "Levels",
                "value": "10"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "sp-cost": "0"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 5258,
          "imageFile": "5258.png",
          "name": "Shield Mastery",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Shield_Mastery",
          "description": "Shields increase Physical Resistance and Imperial Guard skill damage.",
          "levelDetails": [],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "0"
                },
                {
                  "level": 2,
                  "value": "0"
                },
                {
                  "level": 3,
                  "value": "0"
                },
                {
                  "level": 4,
                  "value": "0"
                },
                {
                  "level": 5,
                  "value": "0"
                },
                {
                  "level": 6,
                  "value": "0"
                },
                {
                  "level": 7,
                  "value": "0"
                },
                {
                  "level": 8,
                  "value": "0"
                },
                {
                  "level": 9,
                  "value": "0"
                },
                {
                  "level": 10,
                  "value": "0"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5258.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5258",
          "tree": {
            "idx": 4,
            "row": 0,
            "col": 4,
            "columns": 7,
            "requirements": []
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Passive Skill"
              },
              {
                "label": "Levels",
                "value": "10"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "sp-cost": "0"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 5260,
          "imageFile": "5260.png",
          "name": "Attack Stance",
          "maxLevel": 5,
          "prerequisiteText": "Spear Sword Mastery Lv. 3",
          "group": "Active",
          "type": "Toggle",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Attack_Stance",
          "description": "Increase your P.ATK and S.MATK at the cost of your DEF.",
          "levelDetails": [
            {
              "level": 1,
              "text": "DEF - 40 / P.ATK,S.MATK + 3"
            },
            {
              "level": 2,
              "text": "DEF - 80 / P.ATK,S.MATK + 6"
            },
            {
              "level": 3,
              "text": "DEF - 120 / P.ATK,S.MATK + 9"
            },
            {
              "level": 4,
              "text": "DEF - 160 / P.ATK,S.MATK + 12"
            },
            {
              "level": 5,
              "text": "DEF - 200 / P.ATK,S.MATK + 15"
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "1 second",
          "castDelay": "0 seconds",
          "cooldown": "0 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "50"
                },
                {
                  "level": 2,
                  "value": "50"
                },
                {
                  "level": 3,
                  "value": "50"
                },
                {
                  "level": 4,
                  "value": "50"
                },
                {
                  "level": 5,
                  "value": "50"
                }
              ]
            }
          ],
          "spCost": "50",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5260.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5260",
          "tree": {
            "idx": 8,
            "row": 1,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 5259,
                "level": 3,
                "name": "Spear Sword Mastery",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "50"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0.5 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "1 second"
              },
              {
                "label": "Cast Delay",
                "value": "0 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0 seconds"
              },
              {
                "label": "Target",
                "value": "Self"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "p-atk",
                    "label": "P.Atk"
                  },
                  {
                    "id": "s-matk",
                    "label": "S.Matk"
                  },
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  },
                  {
                    "id": "def",
                    "label": "Def"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "def": "- 40",
                      "p-atk": "+ 3",
                      "s-matk": "+ 3",
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "def": "- 80",
                      "p-atk": "+ 6",
                      "s-matk": "+ 6",
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "def": "- 120",
                      "p-atk": "+ 9",
                      "s-matk": "+ 9",
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "def": "- 160",
                      "p-atk": "+ 12",
                      "s-matk": "+ 12",
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "def": "- 200",
                      "p-atk": "+ 15",
                      "s-matk": "+ 15",
                      "sp-cost": "50"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [
            {
              "skillName": "Attack Stance",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/imperial-guard/rebalance_1.md",
              "section": "2.1",
              "notes": [
                "Changes bonus from Atk + 30 to P.Atk + 15 and S.Matk + 15 based on level 5."
              ],
              "specRows": [
                {
                  "label": "Bonus",
                  "before": "Atk + 30",
                  "after": "P.Atk + 15 and S.Matk + 15",
                  "scope": "Lv 5",
                  "source": "Changes bonus from Atk + 30 to P.Atk + 15 and S.Matk + 15 based on level 5."
                }
              ]
            },
            {
              "skillName": "Attack Stance",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/imperial-guard/rebalance_4.md",
              "section": "7.1",
              "notes": [
                "Reduces fixed casting time from 1 second to 0.5 seconds.",
                "Removes 1 second variable casting time.",
                "No longer be removed by Dispell or Clearance."
              ],
              "specRows": [
                {
                  "label": "Fixed Casting Time",
                  "before": "1 second",
                  "after": "0.5 seconds",
                  "scope": "",
                  "source": "Reduces fixed casting time from 1 second to 0.5 seconds."
                },
                {
                  "label": "1 Second Variable Casting Time",
                  "before": "1 second variable casting time",
                  "after": "Removed",
                  "scope": "",
                  "source": "Removes 1 second variable casting time."
                }
              ]
            }
          ],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 6505,
          "imageFile": "6505.png",
          "name": "Imperial Pressure",
          "maxLevel": 5,
          "prerequisiteText": "Spear & Sword Mastery level 7, Guard Stance level 3",
          "group": "Active",
          "type": "Magic",
          "target": "Single target",
          "recoversAp": "2",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Imperial_Pressure",
          "description": "Crushes the target with the power of sincere faith.\nInflicts neutral property magical damage to the target and surrounding enemies around the target.\nIf Guard Stance is active, change the skill property to holy.\nDeals additional damage depends on user's base level, SPL and level of Spear & Sword Mastery user learned.",
          "levelDetails": [
            {
              "level": 1,
              "text": "(7450 + (Spear & Sword Mastery level x 50))% Matk / area of effect : 5 x 5 cells."
            },
            {
              "level": 2,
              "text": "(9300 + (Spear & Sword Mastery level x 50))% Matk / area of effect : 5 x 5 cells."
            },
            {
              "level": 3,
              "text": "(11150 + (Spear & Sword Mastery level x 50))% Matk / area of effect : 7 x 7 cells."
            },
            {
              "level": 4,
              "text": "(13000 + (Spear & Sword Mastery level x 50))% Matk / area of effect : 7 x 7 cells."
            },
            {
              "level": 5,
              "text": "(14850 + (Spear & Sword Mastery level x 50))% Matk / area of effect : 9 x 9 cells."
            }
          ],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "2 seconds",
          "castDelay": "1 second",
          "cooldown": "0.45 seconds",
          "levelExtras": [],
          "spCost": "85 + (4 × Skill Level)",
          "castRange": "Magic",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6505.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6505",
          "tree": {
            "idx": 10,
            "row": 1,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 5255,
                "level": 3,
                "name": "Guard Stance",
                "visible": true
              },
              {
                "id": 5259,
                "level": 7,
                "name": "Spear Sword Mastery",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "85 + (4 × Skill Level)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "1.5 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "2 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "1 second"
              },
              {
                "label": "Cooldown",
                "value": "0.45 seconds"
              },
              {
                "label": "Cast Range",
                "value": "Magic"
              },
              {
                "label": "Target",
                "value": "Single target"
              },
              {
                "label": "AP Generated",
                "value": "2"
              },
              {
                "label": "Property",
                "value": "neutral property magical damage"
              },
              {
                "label": "Damage",
                "value": "(14,850 + (Spear & Sword Mastery level x 50))% MATK"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "area-of-effect",
                    "label": "Area of Effect"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "area-of-effect": "5x5"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "5x5"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "7x7"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "7x7"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "9x9"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [
            {
              "skillName": "Imperial Pressure",
              "versionId": "rebalance-5",
              "versionLabel": "Rebalance 5",
              "file": "rebalances/imperial-guard/added_skills.md",
              "section": "Added skill",
              "notes": [
                "Added as a new skill in Rebalance 5."
              ],
              "specRows": [],
              "added": true
            }
          ],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 5255,
          "imageFile": "5255.png",
          "name": "Guard Stance",
          "maxLevel": 5,
          "prerequisiteText": "Shield Mastery Lv. 3",
          "group": "Active",
          "type": "Toggle",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Guard_Stance",
          "description": "A Shield skill.\nIncrease your equipment's DEF at the cost of its ATK.",
          "levelDetails": [],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "1 second",
          "castDelay": "0 seconds",
          "cooldown": "0 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "50"
                },
                {
                  "level": 2,
                  "value": "50"
                },
                {
                  "level": 3,
                  "value": "50"
                },
                {
                  "level": 4,
                  "value": "50"
                },
                {
                  "level": 5,
                  "value": "50"
                }
              ]
            }
          ],
          "spCost": "50",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5255.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5255",
          "tree": {
            "idx": 11,
            "row": 1,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 5258,
                "level": 3,
                "name": "Shield Mastery",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "50"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0.5 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "1 second"
              },
              {
                "label": "Cast Delay",
                "value": "0 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0 seconds"
              },
              {
                "label": "Target",
                "value": "Self"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "50"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [
            {
              "skillName": "Guard Stance",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/imperial-guard/rebalance_4.md",
              "section": "7.2",
              "notes": [
                "Reduces fixed casting time from 1 second to 0.5 seconds.",
                "Removes 1 second variable casting time.",
                "No longer be removed by Dispell or Clearance."
              ],
              "specRows": [
                {
                  "label": "Fixed Casting Time",
                  "before": "1 second",
                  "after": "0.5 seconds",
                  "scope": "",
                  "source": "Reduces fixed casting time from 1 second to 0.5 seconds."
                },
                {
                  "label": "1 Second Variable Casting Time",
                  "before": "1 second variable casting time",
                  "after": "Removed",
                  "scope": "",
                  "source": "Removes 1 second variable casting time."
                }
              ]
            }
          ],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 5267,
          "imageFile": "5267.png",
          "name": "Cross Rain",
          "maxLevel": 10,
          "prerequisiteText": "Shield Mastery 1",
          "group": "Active",
          "type": "Magic",
          "target": "1 cell ground target",
          "recoversAp": "4",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Cross_Rain",
          "description": "Summons the sacred area on the ground to deals holy property magical damage every 0.3 seconds for 2.4 seconds.\nIncreases skill damage if the user uses Holy Shield.\nDeals additional damage depends on user's base level, SPL and level of Spear & Sword Mastery the user learned.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 320+(Spear & Sword Mastery Level x10)%\n/ 450+(Spear & Sword Mastery Level x15)%(Holy Shield)/Area of Effect 3x3 Cells"
            },
            {
              "level": 2,
              "text": "MATK 640+(Spear & Sword Mastery Level x20)%\n/ 900+(Spear & Sword Mastery Level x30)%(Holy Shield)/Area of Effect 3x3 Cells"
            },
            {
              "level": 3,
              "text": "MATK 960+(Spear & Sword Mastery Level x30)%\n/ 1350+(Spear & Sword Mastery Level x45)%(Holy Shield)/Area of Effect 3x3 Cells"
            },
            {
              "level": 4,
              "text": "MATK 1280+(Spear & Sword Mastery Level x40)%\n/ 1800+(Spear & Sword Mastery Level x60)%(Holy Shield)/Area of Effect 5x5 Cells"
            },
            {
              "level": 5,
              "text": "MATK 1600+(Spear & Sword Mastery Level x50)%\n/ 2250+(Spear & Sword Mastery Level x75)%(Holy Shield)/Area of Effect 5x5 Cells"
            },
            {
              "level": 6,
              "text": "MATK 1920+(Spear & Sword Mastery Level x60)%\n/ 2700+(Spear & Sword Mastery Level x90)%(Holy Shield)/Area of Effect 5x5 Cells"
            },
            {
              "level": 7,
              "text": "MATK 2240+(Spear & Sword Mastery Level x70)%\n/ 3150+(Spear & Sword Mastery Level x105)%(Holy Shield)/Area of Effect 7x7 Cells"
            },
            {
              "level": 8,
              "text": "MATK 2560+(Spear & Sword Mastery Level x80)%\n/ 3600+(Spear & Sword Mastery Level x120)%(Holy Shield)/Area of Effect 7x7 Cells"
            },
            {
              "level": 9,
              "text": "MATK 2880+(Spear & Sword Mastery Level x90)%\n/ 4050+(Spear & Sword Mastery Level x135)%(Holy Shield)/Area of Effect 7x7 Cells"
            },
            {
              "level": 10,
              "text": "MATK 3200+(Spear & Sword Mastery Level x100)%\n/ 4500+(Spear & Sword Mastery Level x150)%(Holy Shield)/Area of Effect 9x9 Cells"
            }
          ],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "4 seconds",
          "castDelay": "0.15 seconds",
          "cooldown": "2.4 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "67"
                },
                {
                  "level": 2,
                  "value": "70"
                },
                {
                  "level": 3,
                  "value": "73"
                },
                {
                  "level": 4,
                  "value": "76"
                },
                {
                  "level": 5,
                  "value": "79"
                },
                {
                  "level": 6,
                  "value": "82"
                },
                {
                  "level": 7,
                  "value": "85"
                },
                {
                  "level": 8,
                  "value": "88"
                },
                {
                  "level": 9,
                  "value": "91"
                },
                {
                  "level": 10,
                  "value": "94"
                }
              ]
            }
          ],
          "spCost": "46 + (4 x Skill Level)",
          "areaOfEffect": "3 x 3 ~ 9 x 9",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5267.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5267",
          "tree": {
            "idx": 12,
            "row": 1,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 5258,
                "level": 1,
                "name": "Shield Mastery",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "10"
              },
              {
                "label": "SP Cost",
                "value": "46 + (4 x Skill Level)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "1.5 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "4 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.15 seconds"
              },
              {
                "label": "Cooldown",
                "value": "2.4 seconds"
              },
              {
                "label": "Target",
                "value": "1 cell ground target"
              },
              {
                "label": "AP Generated",
                "value": "4"
              },
              {
                "label": "Pulse",
                "value": "0.3 seconds"
              },
              {
                "label": "Damage",
                "value": "(3,200 + (Spear & Sword Mastery Level x 100))% MATK"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  },
                  {
                    "id": "area-of-effect",
                    "label": "Area of Effect"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "area-of-effect": "3x3",
                      "sp-cost": "67"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "3x3",
                      "sp-cost": "70"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "3x3",
                      "sp-cost": "73"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "5x5",
                      "sp-cost": "76"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "5x5",
                      "sp-cost": "79"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "area-of-effect": "5x5",
                      "sp-cost": "82"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "85"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "88"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "91"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "area-of-effect": "9x9",
                      "sp-cost": "94"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [
            {
              "skillName": "Cross Rain",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/imperial-guard/rebalance_1.md",
              "section": "2.5",
              "notes": [
                "Reduces fixed casting time from 2 seconds to 1.5 seconds based on level 10.",
                "Reduces delay after skill from 1 second to 0.5 seconds based on level 10.",
                "Increases damage (includes Spear & Sword Mastery level 10 bonus) from 400%Matk to 2000%Matk, and 600%Matk to 3500%Matk while using Holy Shield."
              ],
              "specRows": [
                {
                  "label": "Fixed Casting Time",
                  "before": "2 seconds",
                  "after": "1.5 seconds",
                  "scope": "Lv 10",
                  "source": "Reduces fixed casting time from 2 seconds to 1.5 seconds based on level 10."
                },
                {
                  "label": "Cast Delay",
                  "before": "1 second",
                  "after": "0.5 seconds",
                  "scope": "Lv 10",
                  "source": "Reduces delay after skill from 1 second to 0.5 seconds based on level 10."
                },
                {
                  "label": "Damage",
                  "before": "400%Matk (includes Spear & Sword Mastery level 10 bonus)",
                  "after": "2000%Matk, and 600%Matk to 3500%Matk while using Holy Shield (includes Spear & Sword Mastery level 10 bonus)",
                  "scope": "",
                  "source": "Increases damage (includes Spear & Sword Mastery level 10 bonus) from 400%Matk to 2000%Matk, and 600%Matk to 3500%Matk while using Holy Shield."
                }
              ]
            },
            {
              "skillName": "Cross Rain",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/imperial-guard/rebalance_2.md",
              "section": "2.3",
              "notes": [
                "Reduces cooldown from 5 seconds to 4.5 seconds.",
                "Reduces delay after skill from 0.5 seconds to 0.15 seconds.",
                "Increases SP consumption from 86 to 94 based on level 10.",
                "Increases AP recovery rate from 5 to 7.",
                "Increases damage from 2000%/3500%(Holy Shield)Matk to 3700%/5500%(Holy Shield)Matk per hit based on level 10 (Spear & Sword Mastery level 10)."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "5 seconds",
                  "after": "4.5 seconds",
                  "scope": "",
                  "source": "Reduces cooldown from 5 seconds to 4.5 seconds."
                },
                {
                  "label": "Cast Delay",
                  "before": "0.5 seconds",
                  "after": "0.15 seconds",
                  "scope": "",
                  "source": "Reduces delay after skill from 0.5 seconds to 0.15 seconds."
                },
                {
                  "label": "SP Cost",
                  "before": "86",
                  "after": "94",
                  "scope": "Lv 10",
                  "source": "Increases SP consumption from 86 to 94 based on level 10."
                },
                {
                  "label": "AP Generated",
                  "before": "5",
                  "after": "7",
                  "scope": "",
                  "source": "Increases AP recovery rate from 5 to 7."
                },
                {
                  "label": "Damage",
                  "before": "2000%/3500%(Holy Shield)Matk",
                  "after": "3700%/5500%(Holy Shield)Matk per hit",
                  "scope": "Lv 10 (Spear & Sword Mastery level 10)",
                  "source": "Increases damage from 2000%/3500%(Holy Shield)Matk to 3700%/5500%(Holy Shield)Matk per hit based on level 10 (Spear & Sword Mastery level 10)."
                }
              ]
            },
            {
              "skillName": "Cross Rain",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/imperial-guard/rebalance_3.md",
              "section": "7.3",
              "notes": [
                "Reduces skill cooldown from 4.5 seconds to 2.4 seconds.",
                "Reduces skill duration from 4.5 seconds to 2.4 seconds based on level 10.",
                "Increases factor weight of Spear & Sword Mastery skill level in skill formula from 50/100 (Holy Shield) to 100/150 (Holy Shield) based on level 10.",
                "Increases factor weight of SPL in skill formula from 5 to 7.",
                "Reduces AP recovery rate from 7 to 4."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "4.5 seconds",
                  "after": "2.4 seconds",
                  "scope": "",
                  "source": "Reduces skill cooldown from 4.5 seconds to 2.4 seconds."
                },
                {
                  "label": "Skill Duration",
                  "before": "4.5 seconds",
                  "after": "2.4 seconds",
                  "scope": "Lv 10",
                  "source": "Reduces skill duration from 4.5 seconds to 2.4 seconds based on level 10."
                },
                {
                  "label": "Factor Weight Of Spear & Sword Mastery Skill Level In Skill Formula",
                  "before": "50/100 (Holy Shield)",
                  "after": "100/150 (Holy Shield)",
                  "scope": "Lv 10",
                  "source": "Increases factor weight of Spear & Sword Mastery skill level in skill formula from 50/100 (Holy Shield) to 100/150 (Holy Shield) based on level 10."
                },
                {
                  "label": "Factor Weight Of Spl In Skill Formula",
                  "before": "5",
                  "after": "7",
                  "scope": "",
                  "source": "Increases factor weight of SPL in skill formula from 5 to 7."
                },
                {
                  "label": "AP Generated",
                  "before": "7",
                  "after": "4",
                  "scope": "",
                  "source": "Reduces AP recovery rate from 7 to 4."
                }
              ]
            },
            {
              "skillName": "Cross Rain",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/imperial-guard/rebalance_4.md",
              "section": "7.4",
              "notes": [
                "Increases AP recovery rate from 4 to 6.",
                "Increases base damage from 3200+(Spear & Sword Mastery skill level x 100)%/4500+(Spear & Sword Mastery skill level x 150)%(Holy Shield)Matk to 4500+(Spear & Sword Mastery skill level x 100)%/6500+(Spear & Sword Mastery skill level x 150)%(Holy Shield)Matk per hit based on level 10."
              ],
              "specRows": [
                {
                  "label": "AP Generated",
                  "before": "4",
                  "after": "6",
                  "scope": "",
                  "source": "Increases AP recovery rate from 4 to 6."
                },
                {
                  "label": "Damage",
                  "before": "3200+(Spear & Sword Mastery skill level x 100)%/4500+(Spear & Sword Mastery skill level x 150)%(Holy Shield)Matk",
                  "after": "4500+(Spear & Sword Mastery skill level x 100)%/6500+(Spear & Sword Mastery skill level x 150)%(Holy Shield)Matk per hit",
                  "scope": "Lv 10",
                  "source": "Increases base damage from 3200+(Spear & Sword Mastery skill level x 100)%/4500+(Spear & Sword Mastery skill level x 150)%(Holy Shield)Matk to 4500+(Spear & Sword Mastery skill level x 100)%/6500+(Spear & Sword Mastery skill level x 150)%(Holy Shield)Matk per hit based on level 10."
                }
              ]
            }
          ],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 5266,
          "imageFile": "5266.png",
          "name": "Overslash",
          "maxLevel": 10,
          "prerequisiteText": "Attack Stance 3",
          "group": "Active",
          "type": "Melee Physical",
          "target": "Single Target",
          "recoversAp": "3",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Overslash",
          "description": "Can only be used while using Attack Stance.\nDeals melee physical damage to the target and surrounding enemies within 7 x 7 cells around the target.\nThe number of attack is increased according to the number of surrounding enemies with range.\n(1 enemy: 3 hits / 2-3 enemies: 5 hits / 4 enemies or more: 7 hits)\nDamage is additionally increased depending on the user's base level and POW.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK Per Hit 160\n+ (Spear & Sword Mastery Level x25) %"
            },
            {
              "level": 2,
              "text": "ATK Per Hit 320\n+ (Spear & Sword Mastery Level x50) %"
            },
            {
              "level": 3,
              "text": "ATK Per Hit 480\n+ (Spear & Sword Mastery Level x75) %"
            },
            {
              "level": 4,
              "text": "ATK Per Hit 640\n+ (Spear & Sword Mastery Level x100) %"
            },
            {
              "level": 5,
              "text": "ATK Per Hit 800\n+ (Spear & Sword Mastery Level x125) %"
            },
            {
              "level": 6,
              "text": "ATK Per Hit 960\n+ (Spear & Sword Mastery Level x150) %"
            },
            {
              "level": 7,
              "text": "ATK Per Hit 1120\n+ (Spear & Sword Mastery Level x175) %"
            },
            {
              "level": 8,
              "text": "ATK Per Hit 1280\n+ (Spear & Sword Mastery Level x200) %"
            },
            {
              "level": 9,
              "text": "ATK Per Hit 1440\n+ (Spear & Sword Mastery Level x225) %"
            },
            {
              "level": 10,
              "text": "ATK Per Hit 1600\n+ (Spear & Sword Mastery Level x250) %"
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "0.7 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "38"
                },
                {
                  "level": 2,
                  "value": "41"
                },
                {
                  "level": 3,
                  "value": "44"
                },
                {
                  "level": 4,
                  "value": "47"
                },
                {
                  "level": 5,
                  "value": "50"
                },
                {
                  "level": 6,
                  "value": "53"
                },
                {
                  "level": 7,
                  "value": "56"
                },
                {
                  "level": 8,
                  "value": "59"
                },
                {
                  "level": 9,
                  "value": "62"
                },
                {
                  "level": 10,
                  "value": "65"
                }
              ]
            }
          ],
          "spCost": "38 + (3 × Skill Level)",
          "castRange": "Melee",
          "areaOfEffect": "7 x 7",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5266.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5266",
          "tree": {
            "idx": 15,
            "row": 2,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 5260,
                "level": 3,
                "name": "Attack Stance",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "10"
              },
              {
                "label": "SP Cost",
                "value": "38 + (3 × Skill Level)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0.5 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.5 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0.7 seconds"
              },
              {
                "label": "Cast Range",
                "value": "Melee"
              },
              {
                "label": "Target",
                "value": "Single Target"
              },
              {
                "label": "Area of Effect",
                "value": "7 x 7"
              },
              {
                "label": "AP Generated",
                "value": "3"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  },
                  {
                    "id": "effect",
                    "label": "Effect"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "ATK Per Hit 160\n+ (Spear & Sword Mastery Level x 25)%",
                      "sp-cost": "38"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "ATK Per Hit 320\n+ (Spear & Sword Mastery Level x 50)%",
                      "sp-cost": "41"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "ATK Per Hit 480\n+ (Spear & Sword Mastery Level x 75)%",
                      "sp-cost": "44"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "ATK Per Hit 640\n+ (Spear & Sword Mastery Level x 100)%",
                      "sp-cost": "47"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "ATK Per Hit 800\n+ (Spear & Sword Mastery Level x 125)%",
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "ATK Per Hit 960\n+ (Spear & Sword Mastery Level x 150)%",
                      "sp-cost": "53"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "ATK Per Hit 1120\n+ (Spear & Sword Mastery Level x 175)%",
                      "sp-cost": "56"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "ATK Per Hit 1280\n+ (Spear & Sword Mastery Level x 200)%",
                      "sp-cost": "59"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "ATK Per Hit 1440\n+ (Spear & Sword Mastery Level x 225)%",
                      "sp-cost": "62"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "ATK Per Hit 1600\n+ (Spear & Sword Mastery Level x 250)%",
                      "sp-cost": "65"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [
            {
              "skillName": "Overslash",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/imperial-guard/rebalance_1.md",
              "section": "2.3",
              "notes": [
                "Reduces fixed casting time from 1 second to 0.5 seconds based on level 10.",
                "Reduces cooldown from 3 seconds to 1 second based on level 10.",
                "Reduces AP recovery rate from 3 to 2.",
                "Increases cast range from 1 cell to 3 cells.",
                "Increases maximum number of attack according to the number of enemies around the target from 5 hits to 7 hits."
              ],
              "specRows": [
                {
                  "label": "Fixed Casting Time",
                  "before": "1 second",
                  "after": "0.5 seconds",
                  "scope": "Lv 10",
                  "source": "Reduces fixed casting time from 1 second to 0.5 seconds based on level 10."
                },
                {
                  "label": "Cooldown",
                  "before": "3 seconds",
                  "after": "1 second",
                  "scope": "Lv 10",
                  "source": "Reduces cooldown from 3 seconds to 1 second based on level 10."
                },
                {
                  "label": "AP Generated",
                  "before": "3",
                  "after": "2",
                  "scope": "",
                  "source": "Reduces AP recovery rate from 3 to 2."
                },
                {
                  "label": "Cast Range",
                  "before": "1 cells",
                  "after": "3 cells",
                  "scope": "",
                  "source": "Increases cast range from 1 cell to 3 cells."
                },
                {
                  "label": "Maximum Number Of Attack According To The Number Of Enemies Around The Target",
                  "before": "5 hits",
                  "after": "7 hits",
                  "scope": "",
                  "source": "Increases maximum number of attack according to the number of enemies around the target from 5 hits to 7 hits."
                }
              ]
            },
            {
              "skillName": "Overslash",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/imperial-guard/rebalance_2.md",
              "section": "2.1",
              "notes": [
                "Reduces cooldown from 1 second to 0.7 seconds.",
                "Reduces SP consumption from 68 to 65 based on level 5.",
                "Increases AP recovery rate from 2 to 3.",
                "Increases damage from 1800%Atk to 2200%Atk per hit based on level 10 (Spear & Sword Mastery level 10).",
                "Increases factor weight of POW in skill formula from 2 to 5."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "1 second",
                  "after": "0.7 seconds",
                  "scope": "",
                  "source": "Reduces cooldown from 1 second to 0.7 seconds."
                },
                {
                  "label": "SP Cost",
                  "before": "68",
                  "after": "65",
                  "scope": "Lv 5",
                  "source": "Reduces SP consumption from 68 to 65 based on level 5."
                },
                {
                  "label": "AP Generated",
                  "before": "2",
                  "after": "3",
                  "scope": "",
                  "source": "Increases AP recovery rate from 2 to 3."
                },
                {
                  "label": "Damage",
                  "before": "1800%Atk",
                  "after": "2200%Atk per hit",
                  "scope": "Lv 10 (Spear & Sword Mastery level 10)",
                  "source": "Increases damage from 1800%Atk to 2200%Atk per hit based on level 10 (Spear & Sword Mastery level 10)."
                },
                {
                  "label": "Factor Weight Of Pow In Skill Formula",
                  "before": "2",
                  "after": "5",
                  "scope": "",
                  "source": "Increases factor weight of POW in skill formula from 2 to 5."
                }
              ]
            },
            {
              "skillName": "Overslash",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/imperial-guard/rebalance_3.md",
              "section": "7.2",
              "notes": [
                "Increases base damage of from 1200%Atk to 1600%Atk based on level 10.",
                "Increases factor weight of Spear & Sword Mastery skill level in skill formula from 100 to 250 based on level 10.",
                "Increases factor weight of POW in skill formula from 5 to 7."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "1200%Atk (of)",
                  "after": "1600%Atk (of)",
                  "scope": "Lv 10",
                  "source": "Increases base damage of from 1200%Atk to 1600%Atk based on level 10."
                },
                {
                  "label": "Factor Weight Of Spear & Sword Mastery Skill Level In Skill Formula",
                  "before": "100",
                  "after": "250",
                  "scope": "Lv 10",
                  "source": "Increases factor weight of Spear & Sword Mastery skill level in skill formula from 100 to 250 based on level 10."
                },
                {
                  "label": "Factor Weight Of Pow In Skill Formula",
                  "before": "5",
                  "after": "7",
                  "scope": "",
                  "source": "Increases factor weight of POW in skill formula from 5 to 7."
                }
              ]
            },
            {
              "skillName": "Overslash",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/imperial-guard/rebalance_4.md",
              "section": "7.7",
              "notes": [
                "Increases AP recovery rate from 3 to 5.",
                "Increases base damage from 1600+(Spear & Sword Mastery skill level x 250)%Atk to 2200+(Spear & Sword Mastery skill level x 500)%Atk per hit based on level 10."
              ],
              "specRows": [
                {
                  "label": "AP Generated",
                  "before": "3",
                  "after": "5",
                  "scope": "",
                  "source": "Increases AP recovery rate from 3 to 5."
                },
                {
                  "label": "Damage",
                  "before": "1600+(Spear & Sword Mastery skill level x 250)%Atk",
                  "after": "2200+(Spear & Sword Mastery skill level x 500)%Atk per hit",
                  "scope": "Lv 10",
                  "source": "Increases base damage from 1600+(Spear & Sword Mastery skill level x 250)%Atk to 2200+(Spear & Sword Mastery skill level x 500)%Atk per hit based on level 10."
                }
              ]
            }
          ],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 5265,
          "imageFile": "5265.png",
          "name": "Shield Shooting",
          "maxLevel": 5,
          "prerequisiteText": "Shield Mastery 5, Attack Stance 2",
          "group": "Active",
          "type": "Ranged Physical",
          "target": "Single Target",
          "recoversAp": "3",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Shield_Shooting",
          "description": "Shield exclusive skill, Can only be used while using Attack Stance.\nThrows the shield to deals long ranged physical damage to the target and surrounding enemies around the target,\nthe user gains bonus that increases Rapid Smiting, Shield Press and Earth Drive damage for 10 seconds.\nDamage is additionally increased depending on the user's base level and POW.\nshield weight and shield refine rate.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 3500+(Shield Mastery level x50)%\nArea of Effect : 5x5 Cells"
            },
            {
              "level": 2,
              "text": "ATK 6350+(Shield Mastery level x100)%\nArea of Effect : 5x5 Cells"
            },
            {
              "level": 3,
              "text": "ATK 9200+(Shield Mastery level x150)%\nArea of Effect : 5x5 Cells"
            },
            {
              "level": 4,
              "text": "ATK 12050+(Shield Mastery level x200)%\nArea of Effect : 7x7 Cells"
            },
            {
              "level": 5,
              "text": "ATK 14900+(Shield Mastery level x250)%\nArea of Effect : 7x7 Cells"
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "0.5 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "0.7 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "40"
                },
                {
                  "level": 2,
                  "value": "45"
                },
                {
                  "level": 3,
                  "value": "50"
                },
                {
                  "level": 4,
                  "value": "55"
                },
                {
                  "level": 5,
                  "value": "60"
                }
              ]
            }
          ],
          "castRange": "? cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5265.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5265",
          "tree": {
            "idx": 16,
            "row": 2,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 5258,
                "level": 5,
                "name": "Shield Mastery",
                "visible": true
              },
              {
                "id": 5260,
                "level": 2,
                "name": "Attack Stance",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0.5 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "0.5 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.5 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0.7 seconds"
              },
              {
                "label": "Cast Range",
                "value": "? cells"
              },
              {
                "label": "Target",
                "value": "Single Target"
              },
              {
                "label": "AP Generated",
                "value": "3"
              },
              {
                "label": "Damage",
                "value": "(14,900 + (Shield Mastery level x 250))% ATK"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  },
                  {
                    "id": "area-of-effect",
                    "label": "Area of Effect"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "area-of-effect": "5x5",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "5x5",
                      "sp-cost": "45"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "5x5",
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "55"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "60"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [
            {
              "skillName": "Shield Shooting",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/imperial-guard/rebalance_1.md",
              "section": "2.2",
              "notes": [
                "Reduces cooldown from 2 second to 1 second based on level 5.",
                "Increases damage bonus from Shield Mastery,"
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "2 second",
                  "after": "1 second",
                  "scope": "Lv 5",
                  "source": "Reduces cooldown from 2 second to 1 second based on level 5."
                }
              ]
            },
            {
              "skillName": "Shield Shooting",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/imperial-guard/rebalance_2.md",
              "section": "2.2",
              "notes": [
                "Reduces cooldown from 1 second to 0.7 seconds.",
                "Increases AP recovery rate from 2 to 3.",
                "Increases damage from 6440%Atk to 14440%Atk based on level 5 (Shield Mastery level 10, shield refine rate is 10 and shield weight is 150).",
                "Increases factor weight of POW in skill formula from 3 to 5."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "1 second",
                  "after": "0.7 seconds",
                  "scope": "",
                  "source": "Reduces cooldown from 1 second to 0.7 seconds."
                },
                {
                  "label": "AP Generated",
                  "before": "2",
                  "after": "3",
                  "scope": "",
                  "source": "Increases AP recovery rate from 2 to 3."
                },
                {
                  "label": "Damage",
                  "before": "6440%Atk",
                  "after": "14440%Atk",
                  "scope": "Lv 5 (Shield Mastery level 10, shield refine rate is 10 and shield weight is 150)",
                  "source": "Increases damage from 6440%Atk to 14440%Atk based on level 5 (Shield Mastery level 10, shield refine rate is 10 and shield weight is 150)."
                },
                {
                  "label": "Factor Weight Of Pow In Skill Formula",
                  "before": "3",
                  "after": "5",
                  "scope": "",
                  "source": "Increases factor weight of POW in skill formula from 3 to 5."
                }
              ]
            },
            {
              "skillName": "Shield Shooting",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/imperial-guard/rebalance_3.md",
              "section": "7.1",
              "notes": [
                "Reworks skill to dealing damage to surrounding enemies within 7 x 7 cells around the target.",
                "Reduces cast range from 11 cells to 9 cells.",
                "Increases factor weight of Shield Mastery skill level in skill formula from 75 to 250 based on level 5.",
                "Increases base damage from 11900%Atk to 14900%Atk based on level 5.",
                "Increases factor weight of POW in skill formula from 5 to 7.",
                "Increases factor weight of shield refine rate in skill formula from 4 to 25."
              ],
              "specRows": [
                {
                  "label": "Cast Range",
                  "before": "11 cells",
                  "after": "9 cells",
                  "scope": "",
                  "source": "Reduces cast range from 11 cells to 9 cells."
                },
                {
                  "label": "Factor Weight Of Shield Mastery Skill Level In Skill Formula",
                  "before": "75",
                  "after": "250",
                  "scope": "Lv 5",
                  "source": "Increases factor weight of Shield Mastery skill level in skill formula from 75 to 250 based on level 5."
                },
                {
                  "label": "Damage",
                  "before": "11900%Atk",
                  "after": "14900%Atk",
                  "scope": "Lv 5",
                  "source": "Increases base damage from 11900%Atk to 14900%Atk based on level 5."
                },
                {
                  "label": "Factor Weight Of Pow In Skill Formula",
                  "before": "5",
                  "after": "7",
                  "scope": "",
                  "source": "Increases factor weight of POW in skill formula from 5 to 7."
                },
                {
                  "label": "Factor Weight Of Shield Refine Rate In Skill Formula",
                  "before": "4",
                  "after": "25",
                  "scope": "",
                  "source": "Increases factor weight of shield refine rate in skill formula from 4 to 25."
                }
              ]
            },
            {
              "skillName": "Shield Shooting",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/imperial-guard/rebalance_4.md",
              "section": "7.6",
              "notes": [
                "Increases AP recovery rate from 3 to 5.",
                "Increases base damage from 14900+(Shield Mastery skill level x 250)%Atk to 18500+(Shield Mastery skill level x 750)%Atk based on level 5.",
                "Increases factor weight of shield refine rate in skill formula from 25 to 100.",
                "Increases factor weight of POW in skill formula from 7 to 10."
              ],
              "specRows": [
                {
                  "label": "AP Generated",
                  "before": "3",
                  "after": "5",
                  "scope": "",
                  "source": "Increases AP recovery rate from 3 to 5."
                },
                {
                  "label": "Damage",
                  "before": "14900+(Shield Mastery skill level x 250)%Atk",
                  "after": "18500+(Shield Mastery skill level x 750)%Atk",
                  "scope": "Lv 5",
                  "source": "Increases base damage from 14900+(Shield Mastery skill level x 250)%Atk to 18500+(Shield Mastery skill level x 750)%Atk based on level 5."
                },
                {
                  "label": "Factor Weight Of Shield Refine Rate In Skill Formula",
                  "before": "25",
                  "after": "100",
                  "scope": "",
                  "source": "Increases factor weight of shield refine rate in skill formula from 25 to 100."
                },
                {
                  "label": "Factor Weight Of Pow In Skill Formula",
                  "before": "7",
                  "after": "10",
                  "scope": "",
                  "source": "Increases factor weight of POW in skill formula from 7 to 10."
                }
              ]
            }
          ],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 5257,
          "imageFile": "5257.png",
          "name": "Rebound Shield",
          "maxLevel": 5,
          "prerequisiteText": "Guard Stance Lv. 4",
          "group": "Active",
          "type": "Buff",
          "target": "Self",
          "recoversAp": "15",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Rebound_Shield",
          "description": "Can only be used while using Sacrifice in Guard Stance mode.\nDecrease Sacrifice-directed damage on you for 60 seconds.",
          "levelDetails": [],
          "fixedCastTime": "1 second",
          "variableCastTime": "2 seconds",
          "castDelay": "1 second",
          "cooldown": "15 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "60"
                },
                {
                  "level": 2,
                  "value": "60"
                },
                {
                  "level": 3,
                  "value": "60"
                },
                {
                  "level": 4,
                  "value": "60"
                },
                {
                  "level": 5,
                  "value": "60"
                }
              ]
            }
          ],
          "spCost": "60",
          "duration": "60 seconds",
          "areaOfEffect": "21 x 21",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5257.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5257",
          "tree": {
            "idx": 17,
            "row": 2,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 5255,
                "level": 4,
                "name": "Guard Stance",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "60"
              },
              {
                "label": "Fixed Cast Time",
                "value": "1 second"
              },
              {
                "label": "Variable Cast Time",
                "value": "2 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "1 second"
              },
              {
                "label": "Cooldown",
                "value": "15 seconds"
              },
              {
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "Area of Effect",
                "value": "21 x 21"
              },
              {
                "label": "Duration",
                "value": "60 seconds"
              },
              {
                "label": "AP Generated",
                "value": "15"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "60"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 5256,
          "imageFile": "5256.png",
          "name": "Guardian Shield",
          "maxLevel": 5,
          "prerequisiteText": "Guard Stance Lv. 2",
          "group": "Active",
          "type": "Buff",
          "target": "Self and Party Members",
          "recoversAp": "15",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Guardian_Shield",
          "description": "Requires Guard Stance.\nGrants a physical shield to yourself and party members within 21 x 21 cells for 60 seconds.\nThe durability of the shield is determined by the caster's MHP, base level, and STA.",
          "levelDetails": [
            {
              "level": 1,
              "text": "50% HP"
            },
            {
              "level": 2,
              "text": "100% HP"
            },
            {
              "level": 3,
              "text": "150% HP"
            },
            {
              "level": 4,
              "text": "200% HP"
            },
            {
              "level": 5,
              "text": "250% HP"
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "2 seconds",
          "castDelay": "0.3 seconds",
          "cooldown": "25 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "60"
                },
                {
                  "level": 2,
                  "value": "60"
                },
                {
                  "level": 3,
                  "value": "60"
                },
                {
                  "level": 4,
                  "value": "60"
                },
                {
                  "level": 5,
                  "value": "60"
                }
              ]
            }
          ],
          "spCost": "60",
          "duration": "60 seconds",
          "areaOfEffect": "21 x 21",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5256.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5256",
          "tree": {
            "idx": 18,
            "row": 2,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 5255,
                "level": 2,
                "name": "Guard Stance",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "60"
              },
              {
                "label": "Fixed Cast Time",
                "value": "1 second"
              },
              {
                "label": "Variable Cast Time",
                "value": "2 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.3 seconds"
              },
              {
                "label": "Cooldown",
                "value": "25 seconds"
              },
              {
                "label": "Target",
                "value": "Self and Party Members"
              },
              {
                "label": "Area of Effect",
                "value": "21 x 21"
              },
              {
                "label": "Duration",
                "value": "60 seconds"
              },
              {
                "label": "AP Generated",
                "value": "15"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  },
                  {
                    "id": "effect",
                    "label": "Effect"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "50% HP",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "100% HP",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "150% HP",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "200% HP",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "250% HP",
                      "sp-cost": "60"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [
            {
              "skillName": "Guardian Shield",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/imperial-guard/rebalance_1.md",
              "section": "2.4",
              "notes": [
                "Reduces MaxHP factor to the half of user's MaxHP.",
                "Increases the bonus of shield by 15 times of the user's STA.",
                "Recovers 15 AP upon casting."
              ],
              "specRows": []
            },
            {
              "skillName": "Guardian Shield",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/imperial-guard/rebalance_4.md",
              "section": "7.3",
              "notes": [
                "Reworks AP condition from recovering AP to consuming 35 AP upon using instead.",
                "Reduces skill duration from 60 seconds to 40 seconds.",
                "Increases skill cooldown from 15 seconds to 25 seconds.",
                "Reduces global cooldown from 1 second to 0.3 seconds.",
                "Reduces factor weight of MaxHP in skill formula from 50% to 30%.",
                "Reduces final durability factor of skill level from 250% to 125% based on level 5."
              ],
              "specRows": [
                {
                  "label": "Skill Duration",
                  "before": "60 seconds",
                  "after": "40 seconds",
                  "scope": "",
                  "source": "Reduces skill duration from 60 seconds to 40 seconds."
                },
                {
                  "label": "Cooldown",
                  "before": "15 seconds",
                  "after": "25 seconds",
                  "scope": "",
                  "source": "Increases skill cooldown from 15 seconds to 25 seconds."
                },
                {
                  "label": "Cooldown",
                  "before": "1 second",
                  "after": "0.3 seconds",
                  "scope": "",
                  "source": "Reduces global cooldown from 1 second to 0.3 seconds."
                },
                {
                  "label": "Factor Weight Of Maxhp In Skill Formula",
                  "before": "50%",
                  "after": "30%",
                  "scope": "",
                  "source": "Reduces factor weight of MaxHP in skill formula from 50% to 30%."
                },
                {
                  "label": "Final Durability Factor Of Skill Level",
                  "before": "250%",
                  "after": "125%",
                  "scope": "Lv 5",
                  "source": "Reduces final durability factor of skill level from 250% to 125% based on level 5."
                }
              ]
            }
          ],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 5262,
          "imageFile": "5262.png",
          "name": "Holy Shield",
          "maxLevel": 5,
          "prerequisiteText": "Shield Mastery Lv. 5 and Cross Rain Lv. 3",
          "group": "Active",
          "type": "Buff",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Holy_Shield",
          "description": "A Shield skill.\nImprove your Shadow and Undead Resistances and cast a Holy Magic Damage buff on you.",
          "levelDetails": [],
          "fixedCastTime": "1 second",
          "variableCastTime": "2 seconds",
          "castDelay": "1 second",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "60"
                },
                {
                  "level": 2,
                  "value": "60"
                },
                {
                  "level": 3,
                  "value": "60"
                },
                {
                  "level": 4,
                  "value": "60"
                },
                {
                  "level": 5,
                  "value": "60"
                }
              ]
            }
          ],
          "spCost": "60",
          "cooldown": "40 seconds",
          "duration": "40 ~ 120 seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5262.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5262",
          "tree": {
            "idx": 19,
            "row": 2,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 5258,
                "level": 5,
                "name": "Shield Mastery",
                "visible": true
              },
              {
                "id": 5267,
                "level": 3,
                "name": "Cross Rain",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "60"
              },
              {
                "label": "Fixed Cast Time",
                "value": "1 second"
              },
              {
                "label": "Variable Cast Time",
                "value": "2 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "1 second"
              },
              {
                "label": "Cooldown",
                "value": "40 seconds"
              },
              {
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "Duration",
                "value": "40 ~ 120 seconds"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "60"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [
            {
              "skillName": "Holy Shield",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/imperial-guard/rebalance_4.md",
              "section": "7.5",
              "notes": [
                "No longer be removed by Dispell or Clearance."
              ],
              "specRows": []
            }
          ],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 6504,
          "imageFile": "6504.png",
          "name": "Imperial Cross",
          "maxLevel": 5,
          "prerequisiteText": "Overslash 5",
          "group": "Active",
          "type": "Melee physical",
          "target": "Single target",
          "recoversAp": "2",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Imperial_Cross",
          "description": "Can only be used while using Attack Stance.\nDeals melee physical damage to the single target for 3 hits.\nIf Grand Judgement buff is active, the skill will deal more damage.\nDeals additional damage depends on level of Spear & Sword Mastery the user has learned, user's base level and POW.",
          "levelDetails": [
            {
              "level": 1,
              "text": "(3000 + (Spear & Sword Mastery level x 25)) % Atk / (3400 + (Spear & Sword Mastery level x 25)) % Atk (Grand Judgement) per hit."
            },
            {
              "level": 2,
              "text": "(4350 + (Spear & Sword Mastery level x 25)) % Atk / (5050 + (Spear & Sword Mastery level x 25)) % Atk (Grand Judgement) per hit."
            },
            {
              "level": 3,
              "text": "(5700 + (Spear & Sword Mastery level x 25)) % Atk / (6700 + (Spear & Sword Mastery level x 25)) % Atk (Grand Judgement) per hit."
            },
            {
              "level": 4,
              "text": "(7050 + (Spear & Sword Mastery level x 25)) % Atk / (8350 + (Spear & Sword Mastery level x 25)) % Atk (Grand Judgement) per hit."
            },
            {
              "level": 5,
              "text": "(8400 + (Spear & Sword Mastery level x 25)) % Atk / (10000 + (Spear & Sword Mastery level x 25)) % Atk (Grand Judgement) per hit."
            }
          ],
          "levelExtras": [],
          "spCost": "45 + (4 × Skill Level)",
          "castDelay": "0.5 seconds",
          "cooldown": "0.35 seconds",
          "castRange": "Melee",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6504.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6504",
          "tree": {
            "idx": 21,
            "row": 3,
            "col": 0,
            "columns": 7,
            "requirements": [
              {
                "id": 5266,
                "level": 5,
                "name": "Overslash",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "45 + (4 × Skill Level)"
              },
              {
                "label": "Cast Delay",
                "value": "0.5 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0.35 seconds"
              },
              {
                "label": "Cast Range",
                "value": "Melee"
              },
              {
                "label": "Target",
                "value": "Single target"
              },
              {
                "label": "AP Generated",
                "value": "2"
              },
              {
                "label": "Damage",
                "value": "(8,400 + (Spear & Sword Mastery level x 25))% ATK per hit/(10,000 + (Spear & Sword Mastery level x 25))% ATK per hit"
              }
            ],
            "levelTables": []
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 5263,
          "imageFile": "5263.png",
          "name": "Grand Judgement",
          "maxLevel": 10,
          "prerequisiteText": "Overslash Lv. 5 and Spear Sword Mastery Lv. 5",
          "group": "Active(AP)",
          "type": "Ranged Physical",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "150",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Grand_Judgement",
          "description": "A Spear-only skill. Can only be used while in Attack Stance.\nInflict Long Physical damage on a target and others in 7x7 cells around it\nIncreased damage from Vanishing Point/Cannon Spear for 150 seconds.\nInflicts more damage on Plant and Insect enemies.\nAdditional Damage increase based on the caster's Base Level and POW.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 1750%/ 2000% to Plant/Insect enemies"
            },
            {
              "level": 2,
              "text": "ATK 3250%/ 3650% to Plant/Insect enemies"
            },
            {
              "level": 3,
              "text": "ATK 4750%/ 5300% to Plant/Insect enemies"
            },
            {
              "level": 4,
              "text": "ATK 6250%/ 6950% to Plant/Insect enemies"
            },
            {
              "level": 5,
              "text": "ATK 7750%/ 8600% to Plant/Insect enemies"
            },
            {
              "level": 6,
              "text": "ATK 9250%/ 10250% to Plant/Insect enemies"
            },
            {
              "level": 7,
              "text": "ATK 10750%/ 11900% to Plant/Insect enemies"
            },
            {
              "level": 8,
              "text": "ATK 12250%/ 13550% to Plant/Insect enemies"
            },
            {
              "level": 9,
              "text": "ATK 13750%/ 15200% to Plant/Insect enemies"
            },
            {
              "level": 10,
              "text": "ATK 15250%/ 16850% to Plant/Insect enemies"
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "1 second",
          "castDelay": "0 seconds",
          "cooldown": "0.5 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "51"
                },
                {
                  "level": 2,
                  "value": "54"
                },
                {
                  "level": 3,
                  "value": "57"
                },
                {
                  "level": 4,
                  "value": "60"
                },
                {
                  "level": 5,
                  "value": "63"
                },
                {
                  "level": 6,
                  "value": "66"
                },
                {
                  "level": 7,
                  "value": "69"
                },
                {
                  "level": 8,
                  "value": "72"
                },
                {
                  "level": 9,
                  "value": "75"
                },
                {
                  "level": 10,
                  "value": "78"
                }
              ]
            }
          ],
          "areaOfEffect": "7 x 7",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5263.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5263",
          "tree": {
            "idx": 22,
            "row": 3,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 5259,
                "level": 5,
                "name": "Spear Sword Mastery",
                "visible": true
              },
              {
                "id": 5266,
                "level": 5,
                "name": "Overslash",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active(AP) Skill"
              },
              {
                "label": "Levels",
                "value": "10"
              },
              {
                "label": "Fixed Cast Time",
                "value": "1 second"
              },
              {
                "label": "Variable Cast Time",
                "value": "1 second"
              },
              {
                "label": "Cast Delay",
                "value": "0 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0.5 seconds"
              },
              {
                "label": "Target",
                "value": "1 Target"
              },
              {
                "label": "Area of Effect",
                "value": "7 x 7"
              },
              {
                "label": "AP Consumed",
                "value": "150"
              },
              {
                "label": "Damage",
                "value": "15,250% ATK"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "51"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "54"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "57"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "63"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "66"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "69"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "72"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "75"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "sp-cost": "78"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [
            {
              "skillName": "Grand Judgement",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/imperial-guard/rebalance_2.md",
              "section": "2.4",
              "notes": [
                "Reduces cooldown from 60 seconds to 0.5 seconds. (actual cooldown from testing is 0.5 seconds)",
                "Removes 0.5 seconds delay after skill.",
                "Increases SP consumption from 68 to 78 based on level 10.",
                "Reduces AP consumption from 150 to 15.",
                "Reduces duration of Grand Judgement buff from 300 seconds to 150 seconds.",
                "Increases damage from 7500%/11000%(plant and insect race)Atk to 15250%/16850%(plant and insect race)Atk based on level 10."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "60 seconds",
                  "after": "0.5 seconds. (actual cooldown from testing is 0.5 seconds)",
                  "scope": "",
                  "source": "Reduces cooldown from 60 seconds to 0.5 seconds. (actual cooldown from testing is 0.5 seconds)"
                },
                {
                  "label": "Cast Delay",
                  "before": "0.5 seconds delay",
                  "after": "Removed",
                  "scope": "",
                  "source": "Removes 0.5 seconds delay after skill."
                },
                {
                  "label": "SP Cost",
                  "before": "68",
                  "after": "78",
                  "scope": "Lv 10",
                  "source": "Increases SP consumption from 68 to 78 based on level 10."
                },
                {
                  "label": "AP Consumed",
                  "before": "150",
                  "after": "15",
                  "scope": "",
                  "source": "Reduces AP consumption from 150 to 15."
                },
                {
                  "label": "Duration Of Grand Judgement Buff",
                  "before": "300 seconds",
                  "after": "150 seconds",
                  "scope": "",
                  "source": "Reduces duration of Grand Judgement buff from 300 seconds to 150 seconds."
                },
                {
                  "label": "Damage",
                  "before": "7500%/11000%(plant and insect race)Atk",
                  "after": "15250%/16850%(plant and insect race)Atk",
                  "scope": "Lv 10",
                  "source": "Increases damage from 7500%/11000%(plant and insect race)Atk to 15250%/16850%(plant and insect race)Atk based on level 10."
                }
              ]
            }
          ],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 6503,
          "imageFile": "6503.png",
          "name": "Radiant Spear",
          "maxLevel": 10,
          "prerequisiteText": "Overslash 3, Shield Shooting 3",
          "group": "Active",
          "type": "Ranged Physical",
          "target": "Single target",
          "recoversAp": "2",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "One-handed spear exclusive skill, Can only be used while using Attack Stance.\nDeals long ranged physical damage to the target and surrounding enemies around the target.\nIf Grand Judgement buff is active, the skill will deal more damage.\nDeals additional damage depends on level of Spear & Sword Mastery the user has learned, user's base level and POW, has a chance to trigger critical, the critical chance is the user's Cri.\nThe effectiveness of critical modifier is applied by half.",
          "levelDetails": [
            {
              "level": 1,
              "text": "(4650 + (Spear & Sword Mastery level x 50)) % Atk / (4900 + (Spear & Sword Mastery level x 50)) % Atk (Grand Judgement) / area of effect: 3 x 3 cells."
            },
            {
              "level": 2,
              "text": "(5800 + (Spear & Sword Mastery level x 50)) % Atk / (6300 + (Spear & Sword Mastery level x 50)) % Atk (Grand Judgement) / area of effect: 3 x 3 cells."
            },
            {
              "level": 3,
              "text": "(6950 + (Spear & Sword Mastery level x 50)) % Atk / (7700 + (Spear & Sword Mastery level x 50)) % Atk (Grand Judgement) / area of effect: 3 x 3 cells."
            },
            {
              "level": 4,
              "text": "(8100 + (Spear & Sword Mastery level x 50)) % Atk / (9100 + (Spear & Sword Mastery level x 50)) % Atk (Grand Judgement) / area of effect: 3 x 3 cells."
            },
            {
              "level": 5,
              "text": "(9250 + (Spear & Sword Mastery level x 50)) % Atk / (10500 + (Spear & Sword Mastery level x 50)) % Atk (Grand Judgement) / area of effect: 5 x 5 cells."
            },
            {
              "level": 6,
              "text": "(10400 + (Spear & Sword Mastery level x 50)) % Atk / (11900 + (Spear & Sword Mastery level x 50)) % Atk (Grand Judgement) / area of effect: 5 x 5 cells."
            },
            {
              "level": 7,
              "text": "(11550 + (Spear & Sword Mastery level x 50)) % Atk / (13300 + (Spear & Sword Mastery level x 50)) % Atk (Grand Judgement) / area of effect: 5 x 5 cells."
            },
            {
              "level": 8,
              "text": "(12700 + (Spear & Sword Mastery level x 50)) % Atk / (14700 + (Spear & Sword Mastery level x 50)) % Atk (Grand Judgement) / area of effect: 5 x 5 cells."
            },
            {
              "level": 9,
              "text": "(13850 + (Spear & Sword Mastery level x 50)) % Atk / (16100 + (Spear & Sword Mastery level x 50)) % Atk (Grand Judgement) / area of effect: 7 x 7 cells."
            },
            {
              "level": 10,
              "text": "(15000 + (Spear & Sword Mastery level x 50)) % Atk / (17500 + (Spear & Sword Mastery level x 50)) % Atk (Grand Judgement) / area of effect: 7 x 7 cells."
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "1 second",
          "castDelay": "1 second",
          "cooldown": "0.7 seconds",
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6503.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6503",
          "tree": {
            "idx": 23,
            "row": 3,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 5265,
                "level": 3,
                "name": "Shield Shooting",
                "visible": true
              },
              {
                "id": 5266,
                "level": 3,
                "name": "Overslash",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "10"
              },
              {
                "label": "Fixed Cast Time",
                "value": "1 second"
              },
              {
                "label": "Variable Cast Time",
                "value": "1 second"
              },
              {
                "label": "Cast Delay",
                "value": "1 second"
              },
              {
                "label": "Cooldown",
                "value": "0.7 seconds"
              },
              {
                "label": "Target",
                "value": "Single target"
              },
              {
                "label": "AP Generated",
                "value": "2"
              },
              {
                "label": "Damage",
                "value": "(15,000 + (Spear & Sword Mastery level x 50))% ATK/(17,500 + (Spear & Sword Mastery level x 50))% ATK"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "area-of-effect",
                    "label": "Area of Effect"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "area-of-effect": "3x3"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "3x3"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "3x3"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "3x3"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "5x5"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "area-of-effect": "5x5"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "area-of-effect": "5x5"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "area-of-effect": "5x5"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "area-of-effect": "7x7"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "area-of-effect": "7x7"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 5261,
          "imageFile": "5261.png",
          "name": "Ultimate Sacrifice",
          "maxLevel": 5,
          "prerequisiteText": "Rebound Shield Lv. 3 and Guardian Shield Lv. 3",
          "group": "Active",
          "type": "Support",
          "target": "You and Party Members",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Ultimate_Sacrifice",
          "description": "Requires Guard Stance.\nUse all your remaining HP except 1 to give Resurrection Crystals to surrounding party members.\nThe Resurrection Crystal immediately resurrects its target on their current spot with full HP and SP.",
          "levelDetails": [],
          "fixedCastTime": "2 seconds",
          "variableCastTime": "2 seconds",
          "castDelay": "1 second",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "120"
                },
                {
                  "level": 2,
                  "value": "120"
                },
                {
                  "level": 3,
                  "value": "120"
                },
                {
                  "level": 4,
                  "value": "120"
                },
                {
                  "level": 5,
                  "value": "120"
                }
              ]
            }
          ],
          "spCost": "120",
          "cooldown": "20 ~ 100 seconds",
          "areaOfEffect": "3 x 3 ~ 7 x 7",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5261.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5261",
          "tree": {
            "idx": 25,
            "row": 3,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 5256,
                "level": 3,
                "name": "Guardian Shield",
                "visible": true
              },
              {
                "id": 5257,
                "level": 3,
                "name": "Rebound Shield",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "120"
              },
              {
                "label": "Fixed Cast Time",
                "value": "2 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "2 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "1 second"
              },
              {
                "label": "Cooldown",
                "value": "20 ~ 100 seconds"
              },
              {
                "label": "Target",
                "value": "You and Party Members"
              },
              {
                "label": "Area of Effect",
                "value": "3 x 3 ~ 7 x 7"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "120"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "120"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "120"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "120"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "120"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 5264,
          "imageFile": "5264.png",
          "name": "Judgement Cross",
          "maxLevel": 10,
          "prerequisiteText": "Cross Rain Lv. 5 and Holy Shield Lv. 3",
          "group": "Active(AP)",
          "type": "Magical",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "10",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Judgement_Cross",
          "description": "Inflict Holy Magic damage on a target\nDeals more damage if the target is a Plant/Insect type monster.\nAdditional Damage increase based on the caster's Base Level and SPL.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 1950%/ 2100% to Plant/Insect enemies"
            },
            {
              "level": 2,
              "text": "MATK 3900%/ 4200% to Plant/Insect enemies"
            },
            {
              "level": 3,
              "text": "MATK 5850%/ 6300% to Plant/Insect enemies"
            },
            {
              "level": 4,
              "text": "MATK 7800%/ 8400% to Plant/Insect enemies"
            },
            {
              "level": 5,
              "text": "MATK 9750%/ 10500% to Plant/Insect enemies"
            },
            {
              "level": 6,
              "text": "MATK 11700%/ 12600% to Plant/Insect enemies"
            },
            {
              "level": 7,
              "text": "MATK 13650%/ 14700% to Plant/Insect enemies"
            },
            {
              "level": 8,
              "text": "MATK 15600%/ 16800% to Plant/Insect enemies"
            },
            {
              "level": 9,
              "text": "MATK 17550%/ 18900% to Plant/Insect enemies"
            },
            {
              "level": 10,
              "text": "MATK 19500%/ 21000% to Plant/Insect enemies"
            }
          ],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "4 seconds",
          "castDelay": "0 seconds",
          "cooldown": "0.5 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "60"
                },
                {
                  "level": 2,
                  "value": "65"
                },
                {
                  "level": 3,
                  "value": "70"
                },
                {
                  "level": 4,
                  "value": "75"
                },
                {
                  "level": 5,
                  "value": "80"
                },
                {
                  "level": 6,
                  "value": "85"
                },
                {
                  "level": 7,
                  "value": "90"
                },
                {
                  "level": 8,
                  "value": "95"
                },
                {
                  "level": 9,
                  "value": "100"
                },
                {
                  "level": 10,
                  "value": "105"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5264.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5264",
          "tree": {
            "idx": 26,
            "row": 3,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 5262,
                "level": 3,
                "name": "Holy Shield",
                "visible": true
              },
              {
                "id": 5267,
                "level": 5,
                "name": "Cross Rain",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active(AP) Skill"
              },
              {
                "label": "Levels",
                "value": "10"
              },
              {
                "label": "Fixed Cast Time",
                "value": "1.5 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "4 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0.5 seconds"
              },
              {
                "label": "Target",
                "value": "1 Target"
              },
              {
                "label": "AP Consumed",
                "value": "10"
              },
              {
                "label": "Damage",
                "value": "19,500% MATK"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "65"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "70"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "75"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "80"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "85"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "90"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "95"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "sp-cost": "105"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [
            {
              "skillName": "Judgement Cross",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/imperial-guard/rebalance_2.md",
              "section": "2.5",
              "notes": [
                "Reduces cooldown from 60 seconds to 0.5 seconds.",
                "Removes 1.5 seconds delay after skill.",
                "Reduces SP consumption from 150 to 105 based on level 10.",
                "Reduces AP consumption from 150 to 10.",
                "Increases damage from 7500%/11000%(plant and insect race)Matk to 19500%/21000%(plant and insect race)Matk based on level 10."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "60 seconds",
                  "after": "0.5 seconds",
                  "scope": "",
                  "source": "Reduces cooldown from 60 seconds to 0.5 seconds."
                },
                {
                  "label": "Cast Delay",
                  "before": "1.5 seconds delay",
                  "after": "Removed",
                  "scope": "",
                  "source": "Removes 1.5 seconds delay after skill."
                },
                {
                  "label": "SP Cost",
                  "before": "150",
                  "after": "105",
                  "scope": "Lv 10",
                  "source": "Reduces SP consumption from 150 to 105 based on level 10."
                },
                {
                  "label": "AP Consumed",
                  "before": "150",
                  "after": "10",
                  "scope": "",
                  "source": "Reduces AP consumption from 150 to 10."
                },
                {
                  "label": "Damage",
                  "before": "7500%/11000%(plant and insect race)Matk",
                  "after": "19500%/21000%(plant and insect race)Matk",
                  "scope": "Lv 10",
                  "source": "Increases damage from 7500%/11000%(plant and insect race)Matk to 19500%/21000%(plant and insect race)Matk based on level 10."
                }
              ]
            },
            {
              "skillName": "Judgement Cross",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/imperial-guard/rebalance_4.md",
              "section": "7.8",
              "notes": [
                "Changes damage property from holy to neutral."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "holy (property)",
                  "after": "neutral (property)",
                  "scope": "",
                  "source": "Changes damage property from holy to neutral."
                }
              ]
            }
          ],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        }
      ]
    },
    {
      "id": "previous-1",
      "label": "Royal Guard",
      "pointLimit": 69,
      "tree": {
        "columns": 7,
        "rows": 6
      },
      "skills": [
        {
          "id": 2320,
          "imageFile": "2320.png",
          "name": "Moonslasher",
          "maxLevel": 5,
          "prerequisiteText": "Spear Mastery 1",
          "group": "Active / Damage",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Inflicts melee physical damages to all enemies around the caster(7x7 Cell).\nDamage increases based on BaseLv and skill level of Overbrand.\nWhen casted, it amplifies Overbrand.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 120%/ Duration : 2 sec"
            },
            {
              "level": 2,
              "text": "ATK 240%/ Duration : 4 sec"
            },
            {
              "level": 3,
              "text": "ATK 360%/ Duration : 6 sec"
            },
            {
              "level": 4,
              "text": "ATK 480%/ Duration : 8 sec"
            },
            {
              "level": 5,
              "text": "ATK 600%/ Duration : 10 sec"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "1 second",
          "castDelay": "1 second",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "20"
                },
                {
                  "level": 2,
                  "value": "24"
                },
                {
                  "level": 3,
                  "value": "28"
                },
                {
                  "level": 4,
                  "value": "32"
                },
                {
                  "level": 5,
                  "value": "36"
                }
              ]
            },
            {
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "3"
                },
                {
                  "level": 2,
                  "value": "3"
                },
                {
                  "level": 3,
                  "value": "3"
                },
                {
                  "level": 4,
                  "value": "3"
                },
                {
                  "level": 5,
                  "value": "3"
                }
              ]
            },
            {
              "label": "Data 2",
              "values": [
                {
                  "level": 1,
                  "value": "40"
                },
                {
                  "level": 2,
                  "value": "48"
                },
                {
                  "level": 3,
                  "value": "56"
                },
                {
                  "level": 4,
                  "value": "64"
                },
                {
                  "level": 5,
                  "value": "72"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2320.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2320",
          "tree": {
            "idx": 0,
            "row": 0,
            "col": 0,
            "columns": 7,
            "requirements": [
              {
                "id": 55,
                "level": 1,
                "name": "Spear Mastery",
                "visible": false
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Damage Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "1 second"
              },
              {
                "label": "Cast Delay",
                "value": "1 second"
              },
              {
                "label": "Damage",
                "value": "600% ATK"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  },
                  {
                    "id": "duration",
                    "label": "Duration"
                  },
                  {
                    "id": "data-1",
                    "label": "Data 1"
                  },
                  {
                    "id": "data-2",
                    "label": "Data 2"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "duration": "2 seconds",
                      "sp-cost": "20",
                      "data-1": "3",
                      "data-2": "40"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "4 seconds",
                      "sp-cost": "24",
                      "data-1": "3",
                      "data-2": "48"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "6 seconds",
                      "sp-cost": "28",
                      "data-1": "3",
                      "data-2": "56"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "8 seconds",
                      "sp-cost": "32",
                      "data-1": "3",
                      "data-2": "64"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "10 seconds",
                      "sp-cost": "36",
                      "data-1": "3",
                      "data-2": "72"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2308,
          "imageFile": "2308.png",
          "name": "Vanishing Point",
          "maxLevel": 10,
          "prerequisiteText": "Spear Mastery 1",
          "group": "Active / Damage",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Vanishing_Point",
          "description": "Spear Weapon Skill. Deals ranged physical damage to 1 target.\nHit increases as skill level increases, Damage increases based on BaseLv and Bash skill level.\nRange 7 Cells.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 100 +(Bash Lv x70)%"
            },
            {
              "level": 2,
              "text": "ATK 200 +(Bash Lv x70)%"
            },
            {
              "level": 3,
              "text": "ATK 300 +(Bash Lv x70)%"
            },
            {
              "level": 4,
              "text": "ATK 400 +(Bash Lv x70)%"
            },
            {
              "level": 5,
              "text": "ATK 500 +(Bash Lv x70)%"
            },
            {
              "level": 6,
              "text": "ATK 600 +(Bash Lv x70)%"
            },
            {
              "level": 7,
              "text": "ATK 700 +(Bash Lv x70)%"
            },
            {
              "level": 8,
              "text": "ATK 800 +(Bash Lv x70)%"
            },
            {
              "level": 9,
              "text": "ATK 900 +(Bash Lv x70)%"
            },
            {
              "level": 10,
              "text": "ATK 1000 +(Bash Lv x70)%"
            }
          ],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "20"
                },
                {
                  "level": 2,
                  "value": "22"
                },
                {
                  "level": 3,
                  "value": "24"
                },
                {
                  "level": 4,
                  "value": "26"
                },
                {
                  "level": 5,
                  "value": "28"
                },
                {
                  "level": 6,
                  "value": "30"
                },
                {
                  "level": 7,
                  "value": "32"
                },
                {
                  "level": 8,
                  "value": "34"
                },
                {
                  "level": 9,
                  "value": "36"
                },
                {
                  "level": 10,
                  "value": "38"
                }
              ]
            },
            {
              "label": "Range",
              "values": [
                {
                  "level": 1,
                  "value": "7 cells"
                },
                {
                  "level": 2,
                  "value": "7 cells"
                },
                {
                  "level": 3,
                  "value": "7 cells"
                },
                {
                  "level": 4,
                  "value": "7 cells"
                },
                {
                  "level": 5,
                  "value": "7 cells"
                },
                {
                  "level": 6,
                  "value": "7 cells"
                },
                {
                  "level": 7,
                  "value": "7 cells"
                },
                {
                  "level": 8,
                  "value": "7 cells"
                },
                {
                  "level": 9,
                  "value": "7 cells"
                },
                {
                  "level": 10,
                  "value": "7 cells"
                }
              ]
            },
            {
              "label": "Hit %",
              "values": [
                {
                  "level": 1,
                  "value": "105"
                },
                {
                  "level": 2,
                  "value": "110"
                },
                {
                  "level": 3,
                  "value": "115"
                },
                {
                  "level": 4,
                  "value": "120"
                },
                {
                  "level": 5,
                  "value": "125"
                },
                {
                  "level": 6,
                  "value": "130"
                },
                {
                  "level": 7,
                  "value": "135"
                },
                {
                  "level": 8,
                  "value": "140"
                },
                {
                  "level": 9,
                  "value": "145"
                },
                {
                  "level": 10,
                  "value": "150"
                }
              ]
            }
          ],
          "spCost": "20/25",
          "castRange": "7 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2308.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2308",
          "tree": {
            "idx": 1,
            "row": 0,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 55,
                "level": 1,
                "name": "Spear Mastery",
                "visible": false
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Damage Skill"
              },
              {
                "label": "Levels",
                "value": "10"
              },
              {
                "label": "SP Cost",
                "value": "20/25"
              },
              {
                "label": "Cast Range",
                "value": "7 cells"
              },
              {
                "label": "Target",
                "value": "Enemy"
              },
              {
                "label": "Damage",
                "value": "(1,000 + (Bash Lv x 70))% ATK"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  },
                  {
                    "id": "hit",
                    "label": "Hit %"
                  },
                  {
                    "id": "range",
                    "label": "Range"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "20",
                      "range": "7 cells",
                      "hit": "105"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "22",
                      "range": "7 cells",
                      "hit": "110"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "24",
                      "range": "7 cells",
                      "hit": "115"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "26",
                      "range": "7 cells",
                      "hit": "120"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "28",
                      "range": "7 cells",
                      "hit": "125"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "30",
                      "range": "7 cells",
                      "hit": "130"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "32",
                      "range": "7 cells",
                      "hit": "135"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "34",
                      "range": "7 cells",
                      "hit": "140"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "36",
                      "range": "7 cells",
                      "hit": "145"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "sp-cost": "38",
                      "range": "7 cells",
                      "hit": "150"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [
            {
              "skillName": "Vanishing Point",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/imperial-guard/rebalance_1.md",
              "section": "2.7",
              "notes": [
                "Increases damage (includes Bash level 10 bonus) from 1300%Atk to 1700%Atk based on level 10.",
                "Increases damage while under Grand Judgement buff from 1700%Atk to 2500%Atk.",
                "Increases SP consumption from 25 to 38 based on level 10.",
                "Increases Hit bonus from 30 to 50 based on level 10."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "1300%Atk (includes Bash level 10 bonus)/1700%Atk (while under Grand Judgement buff)",
                  "after": "1700%Atk (includes Bash level 10 bonus)/2500%Atk (while under Grand Judgement buff)",
                  "scope": "Lv 10",
                  "source": "Increases damage (includes Bash level 10 bonus) from 1300%Atk to 1700%Atk based on level 10. / Increases damage while under Grand Judgement buff from 1700%Atk to 2500%Atk."
                },
                {
                  "label": "SP Cost",
                  "before": "25",
                  "after": "38",
                  "scope": "Lv 10",
                  "source": "Increases SP consumption from 25 to 38 based on level 10."
                },
                {
                  "label": "Hit Bonus",
                  "before": "30",
                  "after": "50",
                  "scope": "Lv 10",
                  "source": "Increases Hit bonus from 30 to 50 based on level 10."
                }
              ]
            }
          ],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2313,
          "imageFile": "2313.png",
          "name": "Vanguard Force",
          "maxLevel": 5,
          "prerequisiteText": "Royal Guard Basic",
          "group": "Active / Buff (To yourself)",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Vanguard_Force",
          "description": "Increase your rage counter when you receive physical attack. The rage counters can be used for the skill Burst Attack. Vanguard Force will cancel when you cast Rage Burst. This skill consumes some SP at regular time interval to stay active.",
          "levelDetails": [
            {
              "level": 1,
              "text": "20% chance / Max rage counter 7"
            },
            {
              "level": 2,
              "text": "32% chance / Max rage counter 9"
            },
            {
              "level": 3,
              "text": "44% chance / Max rage counter 11"
            },
            {
              "level": 4,
              "text": "56% chance / Max rage counter 13"
            },
            {
              "level": 5,
              "text": "68% chance / Max rage counter 15"
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "0 seconds",
          "castDelay": "1 second",
          "cooldown": "0 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "30"
                },
                {
                  "level": 2,
                  "value": "30"
                },
                {
                  "level": 3,
                  "value": "30"
                },
                {
                  "level": 4,
                  "value": "30"
                },
                {
                  "level": 5,
                  "value": "30"
                }
              ]
            },
            {
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "7"
                },
                {
                  "level": 2,
                  "value": "9"
                },
                {
                  "level": 3,
                  "value": "11"
                },
                {
                  "level": 4,
                  "value": "13"
                },
                {
                  "level": 5,
                  "value": "15"
                }
              ]
            },
            {
              "label": "Data 2",
              "values": [
                {
                  "level": 1,
                  "value": "20"
                },
                {
                  "level": 2,
                  "value": "16"
                },
                {
                  "level": 3,
                  "value": "12"
                },
                {
                  "level": 4,
                  "value": "8"
                },
                {
                  "level": 5,
                  "value": "4"
                }
              ]
            },
            {
              "label": "Data 3",
              "values": [
                {
                  "level": 1,
                  "value": "20"
                },
                {
                  "level": 2,
                  "value": "32"
                },
                {
                  "level": 3,
                  "value": "44"
                },
                {
                  "level": 4,
                  "value": "56"
                },
                {
                  "level": 5,
                  "value": "68"
                }
              ]
            }
          ],
          "spCost": "30",
          "duration": "5 minutes",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2313.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2313",
          "tree": {
            "idx": 2,
            "row": 0,
            "col": 2,
            "columns": 7,
            "requirements": []
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Buff (To yourself) Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "30"
              },
              {
                "label": "Fixed Cast Time",
                "value": "1 second"
              },
              {
                "label": "Variable Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "1 second"
              },
              {
                "label": "Cooldown",
                "value": "0 seconds"
              },
              {
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "Duration",
                "value": "5 minutes"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  },
                  {
                    "id": "effect",
                    "label": "Effect"
                  },
                  {
                    "id": "data-1",
                    "label": "Data 1"
                  },
                  {
                    "id": "data-2",
                    "label": "Data 2"
                  },
                  {
                    "id": "data-3",
                    "label": "Data 3"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "20% chance / Ma x rage counter 7",
                      "sp-cost": "30",
                      "data-1": "7",
                      "data-2": "20",
                      "data-3": "20"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "32% chance / Ma x rage counter 9",
                      "sp-cost": "30",
                      "data-1": "9",
                      "data-2": "16",
                      "data-3": "32"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "44% chance / Ma x rage counter 11",
                      "sp-cost": "30",
                      "data-1": "11",
                      "data-2": "12",
                      "data-3": "44"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "56% chance / Ma x rage counter 13",
                      "sp-cost": "30",
                      "data-1": "13",
                      "data-2": "8",
                      "data-3": "56"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "68% chance / Ma x rage counter 15",
                      "sp-cost": "30",
                      "data-1": "15",
                      "data-2": "4",
                      "data-3": "68"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2309,
          "imageFile": "2309.png",
          "name": "Trample",
          "maxLevel": 3,
          "prerequisiteText": "Royal Guard Basic",
          "group": "Active / Special",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Trample",
          "description": "Tramples a 5x5 area around the caster, destroying all traps. Explosive type traps will activate with this skill.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Chance of Success 50%"
            },
            {
              "level": 2,
              "text": "Chance of Success 75%"
            },
            {
              "level": 3,
              "text": "Chance of Success 100%"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "1 second",
          "cooldown": "0 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "30"
                },
                {
                  "level": 2,
                  "value": "45"
                },
                {
                  "level": 3,
                  "value": "60"
                }
              ]
            },
            {
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "50"
                },
                {
                  "level": 2,
                  "value": "75"
                },
                {
                  "level": 3,
                  "value": "100"
                }
              ]
            }
          ],
          "spCost": "15 + (Skill Level × 15)",
          "areaOfEffect": "5 x 5",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2309.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2309",
          "tree": {
            "idx": 3,
            "row": 0,
            "col": 3,
            "columns": 7,
            "requirements": []
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Special Skill"
              },
              {
                "label": "Levels",
                "value": "3"
              },
              {
                "label": "SP Cost",
                "value": "15 + (Skill Level × 15)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "1 second"
              },
              {
                "label": "Cooldown",
                "value": "0 seconds"
              },
              {
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "Area of Effect",
                "value": "5 x 5"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  },
                  {
                    "id": "effect",
                    "label": "Effect"
                  },
                  {
                    "id": "data-1",
                    "label": "Data 1"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Chance of Success 50%",
                      "sp-cost": "30",
                      "data-1": "50"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Chance of Success 75%",
                      "sp-cost": "45",
                      "data-1": "75"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Chance of Success 100%",
                      "sp-cost": "60",
                      "data-1": "100"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2322,
          "imageFile": "2322.png",
          "name": "Piety",
          "maxLevel": 5,
          "prerequisiteText": "Faith 3",
          "group": "Active / Buff",
          "type": "",
          "target": "Ally or Caster",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Piety",
          "description": "Endows you or a party member and nearby party member's armors with Holy element. Consumes 2 Holy Waters.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Skill Duration 60 sec."
            },
            {
              "level": 2,
              "text": "Skill Duration 80 sec."
            },
            {
              "level": 3,
              "text": "Skill Duration 100 sec."
            },
            {
              "level": 4,
              "text": "Skill Duration 120 sec."
            },
            {
              "level": 5,
              "text": "Skill Duration 140 sec."
            }
          ],
          "fixedCastTime": "0 seconds",
          "castDelay": "0 seconds",
          "cooldown": "0 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "40"
                },
                {
                  "level": 2,
                  "value": "45"
                },
                {
                  "level": 3,
                  "value": "50"
                },
                {
                  "level": 4,
                  "value": "55"
                },
                {
                  "level": 5,
                  "value": "60"
                }
              ]
            },
            {
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "60000"
                },
                {
                  "level": 2,
                  "value": "80000"
                },
                {
                  "level": 3,
                  "value": "100000"
                },
                {
                  "level": 4,
                  "value": "120000"
                },
                {
                  "level": 5,
                  "value": "140000"
                }
              ]
            }
          ],
          "spCost": "35 + (Skill Level × 5)",
          "duration": "[40 + (Skill Level × 20)] seconds",
          "castRange": "9 cells",
          "areaOfEffect": "3 x 3",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2322.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2322",
          "tree": {
            "idx": 4,
            "row": 0,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 248,
                "level": 3,
                "name": "Faith",
                "visible": false
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Buff Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "35 + (Skill Level × 5)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0 seconds"
              },
              {
                "label": "Cast Range",
                "value": "9 cells"
              },
              {
                "label": "Target",
                "value": "Ally or Caster"
              },
              {
                "label": "Area of Effect",
                "value": "3 x 3"
              },
              {
                "label": "Duration",
                "value": "[40 + (Skill Level × 20)] seconds"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  },
                  {
                    "id": "effect",
                    "label": "Effect"
                  },
                  {
                    "id": "data-1",
                    "label": "Data 1"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Skill Duration 60 sec",
                      "sp-cost": "40",
                      "data-1": "60000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Skill Duration 80 sec",
                      "sp-cost": "45",
                      "data-1": "80000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Skill Duration 100 sec",
                      "sp-cost": "50",
                      "data-1": "100000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Skill Duration 120 sec",
                      "sp-cost": "55",
                      "data-1": "120000"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Skill Duration 140 sec",
                      "sp-cost": "60",
                      "data-1": "140000"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2311,
          "imageFile": "2311.png",
          "name": "Reflect Damage",
          "maxLevel": 5,
          "prerequisiteText": "Reflect Shield 5",
          "group": "Active / Self Buff",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Reflect_Damage",
          "description": "Shield Skill.\nReduce incoming reflection damage during the duration.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Reflection Damage 10% reduced"
            },
            {
              "level": 2,
              "text": "Reflection Damage 20% reduced"
            },
            {
              "level": 3,
              "text": "Reflection Damage 30% reduced"
            },
            {
              "level": 4,
              "text": "Reflection Damage 40% reduced"
            },
            {
              "level": 5,
              "text": "Reflection Damage 50% reduced"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0 seconds",
          "cooldown": "60 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "60"
                },
                {
                  "level": 2,
                  "value": "70"
                },
                {
                  "level": 3,
                  "value": "80"
                },
                {
                  "level": 4,
                  "value": "90"
                },
                {
                  "level": 5,
                  "value": "100"
                }
              ]
            },
            {
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "300000"
                },
                {
                  "level": 2,
                  "value": "300000"
                },
                {
                  "level": 3,
                  "value": "300000"
                },
                {
                  "level": 4,
                  "value": "300000"
                },
                {
                  "level": 5,
                  "value": "300000"
                }
              ]
            },
            {
              "label": "Data 2",
              "values": [
                {
                  "level": 1,
                  "value": "20"
                },
                {
                  "level": 2,
                  "value": "25"
                },
                {
                  "level": 3,
                  "value": "30"
                },
                {
                  "level": 4,
                  "value": "35"
                },
                {
                  "level": 5,
                  "value": "40"
                }
              ]
            },
            {
              "label": "Data 3",
              "values": [
                {
                  "level": 1,
                  "value": "30"
                },
                {
                  "level": 2,
                  "value": "40"
                },
                {
                  "level": 3,
                  "value": "50"
                },
                {
                  "level": 4,
                  "value": "60"
                },
                {
                  "level": 5,
                  "value": "70"
                }
              ]
            },
            {
              "label": "Data 4",
              "values": [
                {
                  "level": 1,
                  "value": "40"
                },
                {
                  "level": 2,
                  "value": "50"
                },
                {
                  "level": 3,
                  "value": "60"
                },
                {
                  "level": 4,
                  "value": "70"
                },
                {
                  "level": 5,
                  "value": "80"
                }
              ]
            },
            {
              "label": "Data 5",
              "values": [
                {
                  "level": 1,
                  "value": "30"
                },
                {
                  "level": 2,
                  "value": "35"
                },
                {
                  "level": 3,
                  "value": "40"
                },
                {
                  "level": 4,
                  "value": "45"
                },
                {
                  "level": 5,
                  "value": "50"
                }
              ]
            }
          ],
          "spCost": "20 + (Skill Level × 10)",
          "duration": "5 minutes",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2311.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2311",
          "tree": {
            "idx": 5,
            "row": 0,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 252,
                "level": 5,
                "name": "Shield Reflect",
                "visible": false
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Self Buff Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "20 + (Skill Level × 10)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0 seconds"
              },
              {
                "label": "Cooldown",
                "value": "60 seconds"
              },
              {
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "Duration",
                "value": "5 minutes"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  },
                  {
                    "id": "effect",
                    "label": "Effect"
                  },
                  {
                    "id": "data-1",
                    "label": "Data 1"
                  },
                  {
                    "id": "data-2",
                    "label": "Data 2"
                  },
                  {
                    "id": "data-3",
                    "label": "Data 3"
                  },
                  {
                    "id": "data-4",
                    "label": "Data 4"
                  },
                  {
                    "id": "data-5",
                    "label": "Data 5"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Reflection Damage 10% reduced",
                      "sp-cost": "60",
                      "data-1": "300000",
                      "data-2": "20",
                      "data-3": "30",
                      "data-4": "40",
                      "data-5": "30"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Reflection Damage 20% reduced",
                      "sp-cost": "70",
                      "data-1": "300000",
                      "data-2": "25",
                      "data-3": "40",
                      "data-4": "50",
                      "data-5": "35"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Reflection Damage 30% reduced",
                      "sp-cost": "80",
                      "data-1": "300000",
                      "data-2": "30",
                      "data-3": "50",
                      "data-4": "60",
                      "data-5": "40"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Reflection Damage 40% reduced",
                      "sp-cost": "90",
                      "data-1": "300000",
                      "data-2": "35",
                      "data-3": "60",
                      "data-4": "70",
                      "data-5": "45"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Reflection Damage 50% reduced",
                      "sp-cost": "100",
                      "data-1": "300000",
                      "data-2": "40",
                      "data-3": "70",
                      "data-4": "80",
                      "data-5": "50"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2310,
          "imageFile": "2310.png",
          "name": "Shield Press",
          "maxLevel": 10,
          "prerequisiteText": "Smite 3",
          "group": "Active / Damage",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Shield_Press",
          "description": "Can be used when equipped with a shield. Strikes one enemy with the shield to inflict physical damage.\nThe damage is influenced by shield weight, refine rate, and the caster's Base LV, STR, and VIT.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 200%"
            },
            {
              "level": 2,
              "text": "ATK 400%"
            },
            {
              "level": 3,
              "text": "ATK 600%"
            },
            {
              "level": 4,
              "text": "ATK 800%"
            },
            {
              "level": 5,
              "text": "ATK 1000%"
            },
            {
              "level": 6,
              "text": "ATK 1200%"
            },
            {
              "level": 7,
              "text": "ATK 1400%"
            },
            {
              "level": 8,
              "text": "ATK 1600%"
            },
            {
              "level": 9,
              "text": "ATK 1800%"
            },
            {
              "level": 10,
              "text": "ATK 2000%"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0 seconds",
          "cooldown": "2 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "10"
                },
                {
                  "level": 2,
                  "value": "12"
                },
                {
                  "level": 3,
                  "value": "14"
                },
                {
                  "level": 4,
                  "value": "16"
                },
                {
                  "level": 5,
                  "value": "18"
                },
                {
                  "level": 6,
                  "value": "20"
                },
                {
                  "level": 7,
                  "value": "22"
                },
                {
                  "level": 8,
                  "value": "24"
                },
                {
                  "level": 9,
                  "value": "26"
                },
                {
                  "level": 10,
                  "value": "28"
                }
              ]
            }
          ],
          "spCost": "8 + (Skill Level x 2)",
          "castRange": "Melee",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2310.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2310",
          "tree": {
            "idx": 6,
            "row": 0,
            "col": 6,
            "columns": 7,
            "requirements": [
              {
                "id": 250,
                "level": 3,
                "name": "Smite",
                "visible": false
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Damage Skill"
              },
              {
                "label": "Levels",
                "value": "10"
              },
              {
                "label": "SP Cost",
                "value": "8 + (Skill Level x 2)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0 seconds"
              },
              {
                "label": "Cooldown",
                "value": "2 seconds"
              },
              {
                "label": "Cast Range",
                "value": "Melee"
              },
              {
                "label": "Target",
                "value": "Enemy"
              },
              {
                "label": "Damage",
                "value": "2,000% ATK"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "14"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "16"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "18"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "22"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "24"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "26"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "sp-cost": "28"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [
            {
              "skillName": "Shield press",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/imperial-guard/rebalance_1.md",
              "section": "2.11",
              "notes": [
                "Increases damage while under Shield Shooting buff by adding damage bonus from Shield Mastery. (Based on Shield Press level 10 and Shield Mastery level 10. Damage will be increased from 2600%Atk to 4100%Atk)."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "Shield Mastery. (Based on Shield Press level 10 and Shield Mastery level 10. Damage will be increased from 2600%Atk (while under Shield Shooting buff by adding damage bonus)",
                  "after": "4100%Atk) (while under Shield Shooting buff by adding damage bonus)",
                  "scope": "",
                  "source": "Increases damage while under Shield Shooting buff by adding damage bonus from Shield Mastery. (Based on Shield Press level 10 and Shield Mastery level 10. Damage will be increased from 2600%Atk to 4100%Atk)."
                }
              ]
            }
          ],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2316,
          "imageFile": "2316.png",
          "name": "Exceed Break",
          "maxLevel": 5,
          "prerequisiteText": "Vanishing Point 3",
          "group": "Active / Buff (To yourself)",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Exceed_Break",
          "description": "Gather your strength to cause greater damage on your next attack. A short range physical attack on your body will cancel the skill. Your skill damage is not affected by this skill. Movement speed reduces while this skill is active.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Attack Power 100%"
            },
            {
              "level": 2,
              "text": "Attack Power 200%"
            },
            {
              "level": 3,
              "text": "Attack Power 300%"
            },
            {
              "level": 4,
              "text": "Attack Power 400%"
            },
            {
              "level": 5,
              "text": "Attack Power 500%"
            }
          ],
          "fixedCastTime": "0 seconds",
          "castDelay": "1 second",
          "cooldown": "0 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "20"
                },
                {
                  "level": 2,
                  "value": "32"
                },
                {
                  "level": 3,
                  "value": "44"
                },
                {
                  "level": 4,
                  "value": "56"
                },
                {
                  "level": 5,
                  "value": "68"
                }
              ]
            },
            {
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "300000"
                },
                {
                  "level": 2,
                  "value": "300000"
                },
                {
                  "level": 3,
                  "value": "300000"
                },
                {
                  "level": 4,
                  "value": "300000"
                },
                {
                  "level": 5,
                  "value": "300000"
                }
              ]
            },
            {
              "label": "Data 2",
              "values": [
                {
                  "level": 1,
                  "value": "50"
                },
                {
                  "level": 2,
                  "value": "40"
                },
                {
                  "level": 3,
                  "value": "30"
                },
                {
                  "level": 4,
                  "value": "20"
                },
                {
                  "level": 5,
                  "value": "10"
                }
              ]
            }
          ],
          "spCost": "20 + (Skill Level × 4)",
          "variableCastTime": "[4.5 + (Skill Level × 0.5)] seconds",
          "duration": "1 normal attack",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2316.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2316",
          "tree": {
            "idx": 7,
            "row": 1,
            "col": 0,
            "columns": 7,
            "requirements": [
              {
                "id": 2308,
                "level": 3,
                "name": "Vanishing Point",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Buff (To yourself) Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "20 + (Skill Level × 4)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "[4.5 + (Skill Level × 0.5)] seconds"
              },
              {
                "label": "Cast Delay",
                "value": "1 second"
              },
              {
                "label": "Cooldown",
                "value": "0 seconds"
              },
              {
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "Duration",
                "value": "1 normal attack"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  },
                  {
                    "id": "effect",
                    "label": "Effect"
                  },
                  {
                    "id": "data-1",
                    "label": "Data 1"
                  },
                  {
                    "id": "data-2",
                    "label": "Data 2"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Attack Power 100%",
                      "sp-cost": "20",
                      "data-1": "300000",
                      "data-2": "50"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Attack Power 200%",
                      "sp-cost": "32",
                      "data-1": "300000",
                      "data-2": "40"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Attack Power 300%",
                      "sp-cost": "44",
                      "data-1": "300000",
                      "data-2": "30"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Attack Power 400%",
                      "sp-cost": "56",
                      "data-1": "300000",
                      "data-2": "20"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Attack Power 500%",
                      "sp-cost": "68",
                      "data-1": "300000",
                      "data-2": "10"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2312,
          "imageFile": "2312.png",
          "name": "Pinpoint Attack",
          "maxLevel": 5,
          "prerequisiteText": "Vanishing Point 5",
          "group": "Active / Damage",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Pinpoint_Attack",
          "description": "Spear skill. Leaps toward a single target and inflicts Critical Damage.\nIt has a chance of either leaving them bleeding or breaking a piece of their equipment, depending on the skill level. Damage increases depending on the player's BaseLv and AGI.\nFor Critical Damage, only the half of total Critical Damage Options will be applied.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 100% / Bleed"
            },
            {
              "level": 2,
              "text": "ATK 200% / Break Helm"
            },
            {
              "level": 3,
              "text": "ATK 300% / Break Shield"
            },
            {
              "level": 4,
              "text": "ATK 400% / Break Armor"
            },
            {
              "level": 5,
              "text": "ATK 500% / Break Weapon"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "1 second",
          "cooldown": "5 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "50"
                },
                {
                  "level": 2,
                  "value": "50"
                },
                {
                  "level": 3,
                  "value": "50"
                },
                {
                  "level": 4,
                  "value": "50"
                },
                {
                  "level": 5,
                  "value": "50"
                }
              ]
            },
            {
              "label": "Range",
              "values": [
                {
                  "level": 1,
                  "value": "5 cells"
                },
                {
                  "level": 2,
                  "value": "5 cells"
                },
                {
                  "level": 3,
                  "value": "5 cells"
                },
                {
                  "level": 4,
                  "value": "5 cells"
                },
                {
                  "level": 5,
                  "value": "5 cells"
                }
              ]
            }
          ],
          "spCost": "50",
          "castRange": "5 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2312.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2312",
          "tree": {
            "idx": 8,
            "row": 1,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 2308,
                "level": 5,
                "name": "Vanishing Point",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Damage Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "50"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "1 second"
              },
              {
                "label": "Cooldown",
                "value": "5 seconds"
              },
              {
                "label": "Cast Range",
                "value": "5 cells"
              },
              {
                "label": "Target",
                "value": "Enemy"
              },
              {
                "label": "Damage",
                "value": "500% ATK"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  },
                  {
                    "id": "range",
                    "label": "Range"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "50",
                      "range": "5 cells"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "50",
                      "range": "5 cells"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "50",
                      "range": "5 cells"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "50",
                      "range": "5 cells"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "50",
                      "range": "5 cells"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2314,
          "imageFile": "2314.png",
          "name": "Burst Attack",
          "maxLevel": 1,
          "prerequisiteText": "Vanguard Force 1",
          "group": "Active / Damage",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Burst_Attack",
          "description": "Release all Rage Counters from Vanguard Force to deal great damage to an enemy.",
          "levelDetails": [],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "3 seconds",
          "cooldown": "0 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "150"
                }
              ]
            }
          ],
          "spCost": "150",
          "castRange": "Melee",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2314.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2314",
          "tree": {
            "idx": 9,
            "row": 1,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 2313,
                "level": 1,
                "name": "Vanguard Force",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Damage Skill"
              },
              {
                "label": "Levels",
                "value": "1"
              },
              {
                "label": "SP Cost",
                "value": "150"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "3 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0 seconds"
              },
              {
                "label": "Cast Range",
                "value": "Melee"
              },
              {
                "label": "Target",
                "value": "Enemy"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "150"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2318,
          "imageFile": "2318.png",
          "name": "Prestige",
          "maxLevel": 5,
          "prerequisiteText": "Trample 3",
          "group": "Active / Self Buff",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Prestige",
          "description": "Places a temporary buff on the user that increases Physical Defense and gives a chance of dodging magic damage. Dodging magic damage increases based on caster's stats, defense increases based on Defending Aura. Caster does not receive magic damage when dodged.\nIt does not overlap with Banding effect.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Duration 30 sec"
            },
            {
              "level": 2,
              "text": "Duration 45 sec"
            },
            {
              "level": 3,
              "text": "Duration 60 sec"
            },
            {
              "level": 4,
              "text": "Duration 75 sec"
            },
            {
              "level": 5,
              "text": "Duration 90 sec"
            }
          ],
          "fixedCastTime": "2 seconds",
          "variableCastTime": "1 second",
          "castDelay": "0 seconds",
          "cooldown": "60 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "75"
                },
                {
                  "level": 2,
                  "value": "80"
                },
                {
                  "level": 3,
                  "value": "85"
                },
                {
                  "level": 4,
                  "value": "90"
                },
                {
                  "level": 5,
                  "value": "95"
                }
              ]
            },
            {
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "30000"
                },
                {
                  "level": 2,
                  "value": "45000"
                },
                {
                  "level": 3,
                  "value": "60000"
                },
                {
                  "level": 4,
                  "value": "75000"
                },
                {
                  "level": 5,
                  "value": "90000"
                }
              ]
            }
          ],
          "spCost": "70 + (Skill Level × 5)",
          "duration": "[15 + (Skill Level × 15)] seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2318.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2318",
          "tree": {
            "idx": 10,
            "row": 1,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 2309,
                "level": 3,
                "name": "Trample",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Self Buff Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "70 + (Skill Level × 5)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "2 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "1 second"
              },
              {
                "label": "Cast Delay",
                "value": "0 seconds"
              },
              {
                "label": "Cooldown",
                "value": "60 seconds"
              },
              {
                "label": "Target",
                "value": "Self"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  },
                  {
                    "id": "duration",
                    "label": "Duration"
                  },
                  {
                    "id": "data-1",
                    "label": "Data 1"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "duration": "30 seconds",
                      "sp-cost": "75",
                      "data-1": "30000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "45 seconds",
                      "sp-cost": "80",
                      "data-1": "45000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "60 seconds",
                      "sp-cost": "85",
                      "data-1": "60000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "75 seconds",
                      "sp-cost": "90",
                      "data-1": "75000"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "90 seconds",
                      "sp-cost": "95",
                      "data-1": "90000"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2321,
          "imageFile": "2321.png",
          "name": "Genesis Ray",
          "maxLevel": 10,
          "prerequisiteText": "Grand Cross 5",
          "group": "Active / Damage",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Genesis_Ray",
          "description": "Inflicts Holy property Magic damage to all enemies in a 11x11 area around the Caster. Versus Undead property and Demon race monsters, it has a 50% chance of leaving them blind.\nDamage increases based on BaseLv and INT. During Inpiration, attack becomes Neutral property.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 350%"
            },
            {
              "level": 2,
              "text": "MATK 700%"
            },
            {
              "level": 3,
              "text": "MATK 1050%"
            },
            {
              "level": 4,
              "text": "MATK 1400%"
            },
            {
              "level": 5,
              "text": "MATK 1750%"
            },
            {
              "level": 6,
              "text": "MATK 2100%"
            },
            {
              "level": 7,
              "text": "MATK 2450%"
            },
            {
              "level": 8,
              "text": "MATK 2800%"
            },
            {
              "level": 9,
              "text": "MATK 3150%"
            },
            {
              "level": 10,
              "text": "MATK 3500%"
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "castDelay": "1 second",
          "cooldown": "2 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "45"
                },
                {
                  "level": 2,
                  "value": "50"
                },
                {
                  "level": 3,
                  "value": "55"
                },
                {
                  "level": 4,
                  "value": "60"
                },
                {
                  "level": 5,
                  "value": "65"
                },
                {
                  "level": 6,
                  "value": "70"
                },
                {
                  "level": 7,
                  "value": "75"
                },
                {
                  "level": 8,
                  "value": "80"
                },
                {
                  "level": 9,
                  "value": "85"
                },
                {
                  "level": 10,
                  "value": "90"
                }
              ]
            },
            {
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "3"
                },
                {
                  "level": 2,
                  "value": "3"
                },
                {
                  "level": 3,
                  "value": "6"
                },
                {
                  "level": 4,
                  "value": "6"
                },
                {
                  "level": 5,
                  "value": "9"
                },
                {
                  "level": 6,
                  "value": "9"
                },
                {
                  "level": 7,
                  "value": "12"
                },
                {
                  "level": 8,
                  "value": "12"
                },
                {
                  "level": 9,
                  "value": "15"
                },
                {
                  "level": 10,
                  "value": "15"
                }
              ]
            },
            {
              "label": "Data 2",
              "values": [
                {
                  "level": 1,
                  "value": "5"
                },
                {
                  "level": 2,
                  "value": "5"
                },
                {
                  "level": 3,
                  "value": "5"
                },
                {
                  "level": 4,
                  "value": "5"
                },
                {
                  "level": 5,
                  "value": "5"
                },
                {
                  "level": 6,
                  "value": "5"
                },
                {
                  "level": 7,
                  "value": "5"
                },
                {
                  "level": 8,
                  "value": "5"
                },
                {
                  "level": 9,
                  "value": "5"
                },
                {
                  "level": 10,
                  "value": "5"
                }
              ]
            }
          ],
          "spCost": "70 + (Skill Level x 5)",
          "variableCastTime": "[1.5 + (Skill Level × 0.5)] seconds",
          "areaOfEffect": "11 x 11",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2321.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2321",
          "tree": {
            "idx": 11,
            "row": 1,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 254,
                "level": 5,
                "name": "Grand Cross",
                "visible": false
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Damage Skill"
              },
              {
                "label": "Levels",
                "value": "10"
              },
              {
                "label": "SP Cost",
                "value": "70 + (Skill Level x 5)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0.5 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "[1.5 + (Skill Level × 0.5)] seconds"
              },
              {
                "label": "Cast Delay",
                "value": "1 second"
              },
              {
                "label": "Cooldown",
                "value": "2 seconds"
              },
              {
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "Area of Effect",
                "value": "11 x 11"
              },
              {
                "label": "Damage",
                "value": "3,500% MATK"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  },
                  {
                    "id": "data-1",
                    "label": "Data 1"
                  },
                  {
                    "id": "data-2",
                    "label": "Data 2"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "45",
                      "data-1": "3",
                      "data-2": "5"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "50",
                      "data-1": "3",
                      "data-2": "5"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "55",
                      "data-1": "6",
                      "data-2": "5"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "60",
                      "data-1": "6",
                      "data-2": "5"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "65",
                      "data-1": "9",
                      "data-2": "5"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "70",
                      "data-1": "9",
                      "data-2": "5"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "75",
                      "data-1": "12",
                      "data-2": "5"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "80",
                      "data-1": "12",
                      "data-2": "5"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "85",
                      "data-1": "15",
                      "data-2": "5"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "sp-cost": "90",
                      "data-1": "15",
                      "data-2": "5"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [
            {
              "skillName": "Genesis Ray",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/imperial-guard/rebalance_1.md",
              "section": "2.6",
              "notes": [
                "Increases damage to 3500%Matk based on level 10 regardless of neutral or holy property.",
                "Reduces SP consumption from 120 to 90 based on level 10."
              ],
              "specRows": [
                {
                  "label": "SP Cost",
                  "before": "120",
                  "after": "90",
                  "scope": "Lv 10",
                  "source": "Reduces SP consumption from 120 to 90 based on level 10."
                }
              ]
            }
          ],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2323,
          "imageFile": "2323.png",
          "name": "Earth Drive",
          "maxLevel": 5,
          "prerequisiteText": "Reflect Damage Reduction 3",
          "group": "Active / Damage",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Earth_Drive",
          "description": "Shield Skill. Deals melee physical damge to targets around.\nCan remove some earth related magics. Can deal damage to enemies in Hiding.\nDamage increases based on BaseLv, STR and VIT.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 380% / Range: 3 x 3"
            },
            {
              "level": 2,
              "text": "ATK 760% / Range : 3 x 3"
            },
            {
              "level": 3,
              "text": "ATK 1140% / Range : 5 x 5"
            },
            {
              "level": 4,
              "text": "ATK 1520% / Range : 5 x 5"
            },
            {
              "level": 5,
              "text": "ATK 1900% / Range : 7 x 7"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "1 second",
          "castDelay": "1 second",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "52"
                },
                {
                  "level": 2,
                  "value": "60"
                },
                {
                  "level": 3,
                  "value": "68"
                },
                {
                  "level": 4,
                  "value": "76"
                },
                {
                  "level": 5,
                  "value": "84"
                }
              ]
            },
            {
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "1"
                },
                {
                  "level": 2,
                  "value": "1"
                },
                {
                  "level": 3,
                  "value": "2"
                },
                {
                  "level": 4,
                  "value": "2"
                },
                {
                  "level": 5,
                  "value": "3"
                }
              ]
            },
            {
              "label": "Data 2",
              "values": [
                {
                  "level": 1,
                  "value": "5"
                },
                {
                  "level": 2,
                  "value": "5"
                },
                {
                  "level": 3,
                  "value": "5"
                },
                {
                  "level": 4,
                  "value": "5"
                },
                {
                  "level": 5,
                  "value": "5"
                }
              ]
            },
            {
              "label": "Data 3",
              "values": [
                {
                  "level": 1,
                  "value": "25"
                },
                {
                  "level": 2,
                  "value": "25"
                },
                {
                  "level": 3,
                  "value": "25"
                },
                {
                  "level": 4,
                  "value": "25"
                },
                {
                  "level": 5,
                  "value": "25"
                }
              ]
            },
            {
              "label": "Data 4",
              "values": [
                {
                  "level": 1,
                  "value": "3000"
                },
                {
                  "level": 2,
                  "value": "6000"
                },
                {
                  "level": 3,
                  "value": "9000"
                },
                {
                  "level": 4,
                  "value": "12000"
                },
                {
                  "level": 5,
                  "value": "15000"
                }
              ]
            }
          ],
          "spCost": "44 + (Skill Level × 8)",
          "cooldown": "(7 − Skill Level) seconds",
          "areaOfEffect": "3 x 3 ~ 7 x 7",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2323.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2323",
          "tree": {
            "idx": 12,
            "row": 1,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 2311,
                "level": 3,
                "name": "Reflect Damage",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Damage Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "44 + (Skill Level × 8)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "1 second"
              },
              {
                "label": "Cast Delay",
                "value": "1 second"
              },
              {
                "label": "Cooldown",
                "value": "(7 − Skill Level) seconds"
              },
              {
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "Area of Effect",
                "value": "3 x 3 ~ 7 x 7"
              },
              {
                "label": "Damage",
                "value": "1,900% ATK"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  },
                  {
                    "id": "data-1",
                    "label": "Data 1"
                  },
                  {
                    "id": "data-2",
                    "label": "Data 2"
                  },
                  {
                    "id": "data-3",
                    "label": "Data 3"
                  },
                  {
                    "id": "data-4",
                    "label": "Data 4"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "52",
                      "data-1": "1",
                      "data-2": "5",
                      "data-3": "25",
                      "data-4": "3000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "60",
                      "data-1": "1",
                      "data-2": "5",
                      "data-3": "25",
                      "data-4": "6000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "68",
                      "data-1": "2",
                      "data-2": "5",
                      "data-3": "25",
                      "data-4": "9000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "76",
                      "data-1": "2",
                      "data-2": "5",
                      "data-3": "25",
                      "data-4": "12000"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "84",
                      "data-1": "3",
                      "data-2": "5",
                      "data-3": "25",
                      "data-4": "15000"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [
            {
              "skillName": "Earth Drive",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/imperial-guard/rebalance_1.md",
              "section": "2.13",
              "notes": [
                "Reduces cooldown from 3 seconds to 2.5 seconds based on level 5.",
                "Increases damage while under Shield Shooting buff by adding damage bonus from Shield Mastery. (Based on Earth Drive level 5 and Shield Mastery level 10. Damage will be increased from 2100%Atk to 3750%Atk)."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "3 seconds",
                  "after": "2.5 seconds",
                  "scope": "Lv 5",
                  "source": "Reduces cooldown from 3 seconds to 2.5 seconds based on level 5."
                },
                {
                  "label": "Damage",
                  "before": "Shield Mastery. (Based on Earth Drive level 5 and Shield Mastery level 10. Damage will be increased from 2100%Atk (while under Shield Shooting buff by adding damage bonus)",
                  "after": "3750%Atk) (while under Shield Shooting buff by adding damage bonus)",
                  "scope": "",
                  "source": "Increases damage while under Shield Shooting buff by adding damage bonus from Shield Mastery. (Based on Earth Drive level 5 and Shield Mastery level 10. Damage will be increased from 2100%Atk to 3750%Atk)."
                }
              ]
            }
          ],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 5013,
          "imageFile": "5013.png",
          "name": "King's Grace",
          "maxLevel": 5,
          "prerequisiteText": "Reflect Damage Reduction 5",
          "group": "Active / Buff",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/King's_Grace",
          "description": "Protects and recovers nearby allies from all status effects and damage, recovers them as well.\nCannot control while being protected. During PVP, only party members can be affected.\nCurable status : Poison, Frozen, Freezing, Sleep, Deep Sleep, Stone, Stun, BLeeding, Curse, Confusion, Hallucination, Petrification, Silence, Burning, Fear, Mandragora howling.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Cures ally's status effect for 5 sec, Recovers 4% HP per 1 sec"
            },
            {
              "level": 2,
              "text": "Cures ally's status effect for 5 sec, Recovers 5% HP per 1 sec"
            },
            {
              "level": 3,
              "text": "Cures ally's status effect for 5 sec, Recovers 6% HP per 1 sec"
            },
            {
              "level": 4,
              "text": "Cures ally's status effect for 5 sec, Recovers 7% HP per 1 sec"
            },
            {
              "level": 5,
              "text": "Cures ally's status effect for 5 sec, Recovers 8% HP per 1 sec"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0.5 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "200"
                },
                {
                  "level": 2,
                  "value": "180"
                },
                {
                  "level": 3,
                  "value": "160"
                },
                {
                  "level": 4,
                  "value": "140"
                },
                {
                  "level": 5,
                  "value": "120"
                }
              ]
            },
            {
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "4"
                },
                {
                  "level": 2,
                  "value": "5"
                },
                {
                  "level": 3,
                  "value": "6"
                },
                {
                  "level": 4,
                  "value": "7"
                },
                {
                  "level": 5,
                  "value": "8"
                }
              ]
            }
          ],
          "spCost": "220 − (Skill Level × 20)",
          "cooldown": "[110 − (Skill Level × 10)] seconds",
          "duration": "5 seconds",
          "areaOfEffect": "7 x 7",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5013.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5013",
          "tree": {
            "idx": 13,
            "row": 1,
            "col": 6,
            "columns": 7,
            "requirements": [
              {
                "id": 2311,
                "level": 5,
                "name": "Reflect Damage",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Buff Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "220 − (Skill Level × 20)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.5 seconds"
              },
              {
                "label": "Cooldown",
                "value": "[110 − (Skill Level × 10)] seconds"
              },
              {
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "Area of Effect",
                "value": "7 x 7"
              },
              {
                "label": "Duration",
                "value": "5 seconds"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  },
                  {
                    "id": "effect",
                    "label": "Effect"
                  },
                  {
                    "id": "data-1",
                    "label": "Data 1"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Cures ally's status effect for 5 sec, Recovers 4% HP per 1 sec",
                      "sp-cost": "200",
                      "data-1": "4"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Cures ally's status effect for 5 sec, Recovers 5% HP per 1 sec",
                      "sp-cost": "180",
                      "data-1": "5"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Cures ally's status effect for 5 sec, Recovers 6% HP per 1 sec",
                      "sp-cost": "160",
                      "data-1": "6"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Cures ally's status effect for 5 sec, Recovers 7% HP per 1 sec",
                      "sp-cost": "140",
                      "data-1": "7"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Cures ally's status effect for 5 sec, Recovers 8% HP per 1 sec",
                      "sp-cost": "120",
                      "data-1": "8"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2307,
          "imageFile": "2307.png",
          "name": "Cannon Spear",
          "maxLevel": 5,
          "prerequisiteText": "Pinpoint Attack 1",
          "group": "Active / Damage",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Cannon_Spear",
          "description": "Spear Weapon Skill. Deals ranged physical damage to one target and all enemies within the AoE around it.\nDamage increases based on BaseLv and STR.\nCritical rate is applied equal to the player's critical rate.\nHalf of Critical Damage option is applied.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 120 +(STR x1)% / Range : 3 x 3"
            },
            {
              "level": 2,
              "text": "ATK 240 +(STR x2)% / Range : 3 x 3"
            },
            {
              "level": 3,
              "text": "ATK 360 +(STR x3)% / Range : 5 x 5"
            },
            {
              "level": 4,
              "text": "ATK 480 +(STR x4)% / Range : 5 x 5"
            },
            {
              "level": 5,
              "text": "ATK 600 +(STR x5)% / Range : 7 x 7"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0 seconds",
          "cooldown": "1.7 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "30"
                },
                {
                  "level": 2,
                  "value": "35"
                },
                {
                  "level": 3,
                  "value": "40"
                },
                {
                  "level": 4,
                  "value": "45"
                },
                {
                  "level": 5,
                  "value": "50"
                }
              ]
            },
            {
              "label": "Range",
              "values": [
                {
                  "level": 1,
                  "value": "11 cells"
                },
                {
                  "level": 2,
                  "value": "11 cells"
                },
                {
                  "level": 3,
                  "value": "11 cells"
                },
                {
                  "level": 4,
                  "value": "11 cells"
                },
                {
                  "level": 5,
                  "value": "11 cells"
                }
              ]
            }
          ],
          "spCost": "25 + (Skill Level × 5)",
          "castRange": "7 cells",
          "areaOfEffect": "3 x 3~7 x 7",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2307.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2307",
          "tree": {
            "idx": 14,
            "row": 2,
            "col": 0,
            "columns": 7,
            "requirements": [
              {
                "id": 2312,
                "level": 1,
                "name": "Pinpoint Attack",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Damage Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "25 + (Skill Level × 5)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0 seconds"
              },
              {
                "label": "Cooldown",
                "value": "1.7 seconds"
              },
              {
                "label": "Cast Range",
                "value": "7 cells"
              },
              {
                "label": "Target",
                "value": "Enemy"
              },
              {
                "label": "Area of Effect",
                "value": "3 x 3~7 x 7"
              },
              {
                "label": "Damage",
                "value": "(600 + (STR x 5))% ATK"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  },
                  {
                    "id": "effect",
                    "label": "Effect"
                  },
                  {
                    "id": "range",
                    "label": "Range"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Range : 3 x 3",
                      "sp-cost": "30",
                      "range": "11 cells"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Range : 3 x 3",
                      "sp-cost": "35",
                      "range": "11 cells"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Range : 5 x 5",
                      "sp-cost": "40",
                      "range": "11 cells"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Range : 5 x 5",
                      "sp-cost": "45",
                      "range": "11 cells"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Range : 7 x 7",
                      "sp-cost": "50",
                      "range": "11 cells"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [
            {
              "skillName": "Cannon Spear",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/imperial-guard/rebalance_1.md",
              "section": "2.8",
              "notes": [
                "Reduces cooldown from 2 seconds to 1.7 seconds based on level 5.",
                "Increases area of effect from 5x5 cells to 7x7 cells based on level 5.",
                "Increases critical chance from the half of the user's cri to the user's cri.",
                "Increases damage (on Str 130) from 900%Atk to 1250%Atk based on level 5.",
                "Increases damage while under Grand Judgement buff from 1050%Atk to 1650%Atk based on level 5."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "2 seconds",
                  "after": "1.7 seconds",
                  "scope": "Lv 5",
                  "source": "Reduces cooldown from 2 seconds to 1.7 seconds based on level 5."
                },
                {
                  "label": "Area of Effect",
                  "before": "5 x 5 cells",
                  "after": "7 x 7 cells",
                  "scope": "Lv 5",
                  "source": "Increases area of effect from 5x5 cells to 7x7 cells based on level 5."
                },
                {
                  "label": "Critical Chance",
                  "before": "the half of the user's cri",
                  "after": "the user's cri",
                  "scope": "",
                  "source": "Increases critical chance from the half of the user's cri to the user's cri."
                },
                {
                  "label": "Damage",
                  "before": "900%Atk (on Str 130)/1050%Atk (while under Grand Judgement buff)",
                  "after": "1250%Atk (on Str 130)/1650%Atk (while under Grand Judgement buff)",
                  "scope": "Lv 5",
                  "source": "Increases damage (on Str 130) from 900%Atk to 1250%Atk based on level 5. / Increases damage while under Grand Judgement buff from 1050%Atk to 1650%Atk based on level 5."
                }
              ]
            }
          ],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2317,
          "imageFile": "2317.png",
          "name": "Overbrand",
          "maxLevel": 5,
          "prerequisiteText": "Moon Slasher 3 / Pinpoint Attack 1",
          "group": "Active / Damage",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Overbrand",
          "description": "Spear Weapon Skill. Inflicts Melee Physical Damage to all enemies within 7 x 7 area.\nWhile in Moon Slasher effect, it deals more damage. Damage increases based on BaseLv, STR and DEX.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 350% / 500% (Moon Slasher)"
            },
            {
              "level": 2,
              "text": "ATK 700% / 1000% (Moon Slasher)"
            },
            {
              "level": 3,
              "text": "ATK 1050% / 1500% (Moon Slasher)"
            },
            {
              "level": 4,
              "text": "ATK 1400% / 2000% (Moon Slasher)"
            },
            {
              "level": 5,
              "text": "ATK 1750% / 2500% (Moon Slasher)"
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "1 second",
          "cooldown": "0.3 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "20"
                },
                {
                  "level": 2,
                  "value": "30"
                },
                {
                  "level": 3,
                  "value": "40"
                },
                {
                  "level": 4,
                  "value": "50"
                },
                {
                  "level": 5,
                  "value": "60"
                }
              ]
            },
            {
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "3"
                },
                {
                  "level": 2,
                  "value": "4"
                },
                {
                  "level": 3,
                  "value": "5"
                },
                {
                  "level": 4,
                  "value": "6"
                },
                {
                  "level": 5,
                  "value": "7"
                }
              ]
            }
          ],
          "spCost": "10 + (Skill Level x 10)",
          "castRange": "Melee",
          "areaOfEffect": "7 x 7",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2317.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2317",
          "tree": {
            "idx": 15,
            "row": 2,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 2312,
                "level": 1,
                "name": "Pinpoint Attack",
                "visible": true
              },
              {
                "id": 2320,
                "level": 3,
                "name": "Moonslasher",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Damage Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "10 + (Skill Level x 10)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0.5 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "1 second"
              },
              {
                "label": "Cooldown",
                "value": "0.3 seconds"
              },
              {
                "label": "Cast Range",
                "value": "Melee"
              },
              {
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "Area of Effect",
                "value": "7 x 7"
              },
              {
                "label": "Damage",
                "value": "1,750% ATK/2,500% ATK (Moon Slasher)"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  },
                  {
                    "id": "data-1",
                    "label": "Data 1"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "20",
                      "data-1": "3"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "30",
                      "data-1": "4"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "40",
                      "data-1": "5"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "50",
                      "data-1": "6"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "60",
                      "data-1": "7"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [
            {
              "skillName": "Overbrand",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/imperial-guard/rebalance_1.md",
              "section": "2.9",
              "notes": [
                "Increases damage from 1500%Atk to 1750%Atk based on level 5.",
                "Increases damage while under Overbrand Ready buff from 2250%Atk to 2500%Atk based on level 5."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "1500%Atk/2250%Atk (while under Overbrand Ready buff)",
                  "after": "1750%Atk/2500%Atk (while under Overbrand Ready buff)",
                  "scope": "Lv 5",
                  "source": "Increases damage from 1500%Atk to 1750%Atk based on level 5. / Increases damage while under Overbrand Ready buff from 2250%Atk to 2500%Atk based on level 5."
                }
              ]
            }
          ],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2319,
          "imageFile": "2319.png",
          "name": "Banding",
          "maxLevel": 5,
          "prerequisiteText": "Pinpoint Attack 3 / Rage Burst Attack 1",
          "group": "Active / Self Buff",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Banding",
          "description": "Can be used when caster's in party.\nWhen casted, increase caster's physical armor based on number of players in 11x11 Area around the caster.\nIt does not overlap with Prestige effect.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Per 1 party member, DEF + 18 / Duration : 60 sec"
            },
            {
              "level": 2,
              "text": "Per 1 party member, DEF + 21 / Duration : 90 sec"
            },
            {
              "level": 3,
              "text": "Per 1 party member, DEF + 24 / Duration : 120 sec"
            },
            {
              "level": 4,
              "text": "Per 1 party member, DEF + 27 / Duration : 150 sec"
            },
            {
              "level": 5,
              "text": "Per 1 party member, DEF + 30 / Duration : 180 sec"
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "0 seconds",
          "castDelay": "0 seconds",
          "cooldown": "5 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "30"
                },
                {
                  "level": 2,
                  "value": "36"
                },
                {
                  "level": 3,
                  "value": "42"
                },
                {
                  "level": 4,
                  "value": "48"
                },
                {
                  "level": 5,
                  "value": "54"
                }
              ]
            },
            {
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "6"
                },
                {
                  "level": 2,
                  "value": "5"
                },
                {
                  "level": 3,
                  "value": "4"
                },
                {
                  "level": 4,
                  "value": "3"
                },
                {
                  "level": 5,
                  "value": "2"
                }
              ]
            },
            {
              "label": "Data 2",
              "values": [
                {
                  "level": 1,
                  "value": "20"
                },
                {
                  "level": 2,
                  "value": "30"
                },
                {
                  "level": 3,
                  "value": "40"
                },
                {
                  "level": 4,
                  "value": "50"
                },
                {
                  "level": 5,
                  "value": "60"
                }
              ]
            },
            {
              "label": "Data 3",
              "values": [
                {
                  "level": 1,
                  "value": "6"
                },
                {
                  "level": 2,
                  "value": "7"
                },
                {
                  "level": 3,
                  "value": "8"
                },
                {
                  "level": 4,
                  "value": "9"
                },
                {
                  "level": 5,
                  "value": "10"
                }
              ]
            }
          ],
          "spCost": "24 + (Skill Level × 6)",
          "areaOfEffect": "11 x 11",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2319.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2319",
          "tree": {
            "idx": 16,
            "row": 2,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 2312,
                "level": 3,
                "name": "Pinpoint Attack",
                "visible": true
              },
              {
                "id": 2314,
                "level": 1,
                "name": "Burst Attack",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Self Buff Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "24 + (Skill Level × 6)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "1 second"
              },
              {
                "label": "Variable Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0 seconds"
              },
              {
                "label": "Cooldown",
                "value": "5 seconds"
              },
              {
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "Area of Effect",
                "value": "11 x 11"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  },
                  {
                    "id": "duration",
                    "label": "Duration"
                  },
                  {
                    "id": "data-1",
                    "label": "Data 1"
                  },
                  {
                    "id": "data-2",
                    "label": "Data 2"
                  },
                  {
                    "id": "data-3",
                    "label": "Data 3"
                  },
                  {
                    "id": "per-1-party-member-def",
                    "label": "Per 1 Party Member, Def"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "duration": "60 seconds",
                      "per-1-party-member-def": "+ 18",
                      "sp-cost": "30",
                      "data-1": "6",
                      "data-2": "20",
                      "data-3": "6"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "90 seconds",
                      "per-1-party-member-def": "+ 21",
                      "sp-cost": "36",
                      "data-1": "5",
                      "data-2": "30",
                      "data-3": "7"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "120 seconds",
                      "per-1-party-member-def": "+ 24",
                      "sp-cost": "42",
                      "data-1": "4",
                      "data-2": "40",
                      "data-3": "8"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "150 seconds",
                      "per-1-party-member-def": "+ 27",
                      "sp-cost": "48",
                      "data-1": "3",
                      "data-2": "50",
                      "data-3": "9"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "180 seconds",
                      "per-1-party-member-def": "+ 30",
                      "sp-cost": "54",
                      "data-1": "2",
                      "data-2": "60",
                      "data-3": "10"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2315,
          "imageFile": "2315.png",
          "name": "Shield Spell",
          "maxLevel": 3,
          "prerequisiteText": "Shield Press 3 / Earth Drive 2",
          "group": "Active / Special",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Shield_Spell",
          "description": "Shield Weapon Skill.\nPut your will on the shield and give yourself an effect for 90 seconds.\nEffect cannot be overlapped.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Recovers 3% of MaxHP every 3 sec."
            },
            {
              "level": 2,
              "text": "Recovers 5% of MaxSP every 5 sec."
            },
            {
              "level": 3,
              "text": "ATK +150, MATK +150"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "1 second",
          "castDelay": "1 second",
          "cooldown": "2 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "50"
                },
                {
                  "level": 2,
                  "value": "50"
                },
                {
                  "level": 3,
                  "value": "50"
                }
              ]
            }
          ],
          "spCost": "50",
          "duration": "90 seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2315.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2315",
          "tree": {
            "idx": 19,
            "row": 2,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 2310,
                "level": 3,
                "name": "Shield Press",
                "visible": true
              },
              {
                "id": 2323,
                "level": 2,
                "name": "Earth Drive",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Special Skill"
              },
              {
                "label": "Levels",
                "value": "3"
              },
              {
                "label": "SP Cost",
                "value": "50"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "1 second"
              },
              {
                "label": "Cast Delay",
                "value": "1 second"
              },
              {
                "label": "Cooldown",
                "value": "2 seconds"
              },
              {
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "Duration",
                "value": "90 seconds"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  },
                  {
                    "id": "effect",
                    "label": "Effect"
                  },
                  {
                    "id": "atk",
                    "label": "Atk"
                  },
                  {
                    "id": "matk",
                    "label": "Matk"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Recovers 3% of Ma x HP every 3 sec",
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Recovers 5% of Ma x SP every 5 sec",
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "atk": "+150",
                      "matk": "+150",
                      "sp-cost": "50"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2324,
          "imageFile": "2324.png",
          "name": "Hesperus Lit",
          "maxLevel": 5,
          "prerequisiteText": "Prestige 3 / Banding 3",
          "group": "Active / Damage",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Hesperus_Lit",
          "description": "Deals melee physical damage to 1 target.\nDamage increases based on BaseLv and VIT, deals more damage when Inspiration is active.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 300% / 450% (Inspiration)"
            },
            {
              "level": 2,
              "text": "ATK 600% / 900% (Inspiration)"
            },
            {
              "level": 3,
              "text": "ATK 900% / 1350% (Inspiration)"
            },
            {
              "level": 4,
              "text": "ATK 1200% / 1800% (Inspiration)"
            },
            {
              "level": 5,
              "text": "ATK 1500% / 2250% (Inspiration)"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "0.2 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "37"
                },
                {
                  "level": 2,
                  "value": "44"
                },
                {
                  "level": 3,
                  "value": "51"
                },
                {
                  "level": 4,
                  "value": "58"
                },
                {
                  "level": 5,
                  "value": "65"
                }
              ]
            },
            {
              "label": "Range",
              "values": [
                {
                  "level": 1,
                  "value": "3 cells"
                },
                {
                  "level": 2,
                  "value": "3 cells"
                },
                {
                  "level": 3,
                  "value": "3 cells"
                },
                {
                  "level": 4,
                  "value": "3 cells"
                },
                {
                  "level": 5,
                  "value": "3 cells"
                }
              ]
            }
          ],
          "spCost": "20+(17×SkillLevel)",
          "castRange": "Melee",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2324.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2324",
          "tree": {
            "idx": 24,
            "row": 3,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 2318,
                "level": 3,
                "name": "Prestige",
                "visible": true
              },
              {
                "id": 2319,
                "level": 3,
                "name": "Banding",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Damage Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "20+(17×SkillLevel)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.5 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0.2 seconds"
              },
              {
                "label": "Cast Range",
                "value": "Melee"
              },
              {
                "label": "Target",
                "value": "Enemy"
              },
              {
                "label": "Damage",
                "value": "1,500% ATK/2,250% ATK (Inspiration)"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  },
                  {
                    "id": "range",
                    "label": "Range"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "37",
                      "range": "3 cells"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "44",
                      "range": "3 cells"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "51",
                      "range": "3 cells"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "58",
                      "range": "3 cells"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "65",
                      "range": "3 cells"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [
            {
              "skillName": "Hesperus Lit",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/imperial-guard/rebalance_1.md",
              "section": "2.10",
              "notes": [
                "Removes variable casting time.",
                "Reduces cooldown from 0.3 seconds to 0.2 seconds based on level 5.",
                "Reduces delay after skill from 1 second to 0.5 seconds based on level 5."
              ],
              "specRows": [
                {
                  "label": "Variable Casting Time",
                  "before": "variable casting time",
                  "after": "Removed",
                  "scope": "",
                  "source": "Removes variable casting time."
                },
                {
                  "label": "Cooldown",
                  "before": "0.3 seconds",
                  "after": "0.2 seconds",
                  "scope": "Lv 5",
                  "source": "Reduces cooldown from 0.3 seconds to 0.2 seconds based on level 5."
                },
                {
                  "label": "Cast Delay",
                  "before": "1 second",
                  "after": "0.5 seconds",
                  "scope": "Lv 5",
                  "source": "Reduces delay after skill from 1 second to 0.5 seconds based on level 5."
                }
              ]
            }
          ],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2325,
          "imageFile": "2325.png",
          "name": "Inspiration",
          "maxLevel": 5,
          "prerequisiteText": "Shield Spell 3 / Ray of Genesis 4 / Piety 5",
          "group": "Active / Self Buff",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Inspiration",
          "description": "Inspired by holy spirit. Temporarily increase HIT, State, ATK, MATK, and MaxHP.\nDuring the duration, character is immune to some buffs or status effects. Consumes HP and SP per 5 sec.\nSkill goes off when Duration is over or HP or SP becomes 0.\nProtected buff and Status Effect : Poison, Dark, Stun, Silence, Confusion, Stone, Sleep, Bleeding, Curse, Blazing, Freezing, Frozen, Fear, Toxin, Paralysis, Venom Bleed, Magic Mushroom, Death heart, Pyrexia, Oblivion, Deel Sleep, Frenzy, Masquerade (Body Painting, Innovation, Groomy, Ignorance, Laziness, Unlucky, Weakness)",
          "levelDetails": [
            {
              "level": 1,
              "text": "HIT +12/ All State +6/ MaxHP +4%\n/ ATK +40/ MATK +40/ Duration 60 sec\nConsumes HP 3%, SP 4% per 5 sec."
            },
            {
              "level": 2,
              "text": "HIT +24/ All State +12/ MaxHP +8%\n/ ATK +80/ MATK +80/ Duration 90 sec\nConsumes HP 2.5%, SP 3.5% per 5 sec."
            },
            {
              "level": 3,
              "text": "HIT +36/ All State +18/ MaxHP +12%\n/ ATK +120/ MATK +120/ Duration 120 sec\nConsumes HP 2%, SP 3% per 5 sec."
            },
            {
              "level": 4,
              "text": "HIT +48/ All State +24/ MaxHP +16%\n/ ATK +160/ MATK +160/ Duration 150 sec\nConsumes HP 1.5%, SP 2.5% per 5 sec."
            },
            {
              "level": 5,
              "text": "HIT +60/ All State +30/ MaxHP +20%\n/ ATK +200/ MATK +200/ Duration 180 sec\nConsumes HP 1%, SP 2% per 5 sec."
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "2 seconds",
          "castDelay": "2 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "80"
                },
                {
                  "level": 2,
                  "value": "90"
                },
                {
                  "level": 3,
                  "value": "100"
                },
                {
                  "level": 4,
                  "value": "110"
                },
                {
                  "level": 5,
                  "value": "120"
                }
              ]
            },
            {
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "30"
                },
                {
                  "level": 2,
                  "value": "25"
                },
                {
                  "level": 3,
                  "value": "20"
                },
                {
                  "level": 4,
                  "value": "15"
                },
                {
                  "level": 5,
                  "value": "10"
                }
              ]
            },
            {
              "label": "Data 2",
              "values": [
                {
                  "level": 1,
                  "value": "40"
                },
                {
                  "level": 2,
                  "value": "35"
                },
                {
                  "level": 3,
                  "value": "30"
                },
                {
                  "level": 4,
                  "value": "25"
                },
                {
                  "level": 5,
                  "value": "20"
                }
              ]
            },
            {
              "label": "Data 3",
              "values": [
                {
                  "level": 1,
                  "value": "30000"
                },
                {
                  "level": 2,
                  "value": "45000"
                },
                {
                  "level": 3,
                  "value": "60000"
                },
                {
                  "level": 4,
                  "value": "75000"
                },
                {
                  "level": 5,
                  "value": "90000"
                }
              ]
            }
          ],
          "spCost": "100",
          "cooldown": "3 minutes",
          "duration": "[30 + (Skill Level × 30)] seconds Until SP reaches 0",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2325.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2325",
          "tree": {
            "idx": 26,
            "row": 3,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 2315,
                "level": 3,
                "name": "Shield Spell",
                "visible": true
              },
              {
                "id": 2321,
                "level": 4,
                "name": "Genesis Ray",
                "visible": true
              },
              {
                "id": 2322,
                "level": 5,
                "name": "Piety",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Self Buff Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "100"
              },
              {
                "label": "Fixed Cast Time",
                "value": "1 second"
              },
              {
                "label": "Variable Cast Time",
                "value": "2 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "2 seconds"
              },
              {
                "label": "Cooldown",
                "value": "3 minutes"
              },
              {
                "label": "Target",
                "value": "Self"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "maxhp",
                    "label": "MaxHP"
                  },
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  },
                  {
                    "id": "duration",
                    "label": "Duration"
                  },
                  {
                    "id": "effect",
                    "label": "Effect"
                  },
                  {
                    "id": "all-state",
                    "label": "All State"
                  },
                  {
                    "id": "atk",
                    "label": "Atk"
                  },
                  {
                    "id": "data-1",
                    "label": "Data 1"
                  },
                  {
                    "id": "data-2",
                    "label": "Data 2"
                  },
                  {
                    "id": "data-3",
                    "label": "Data 3"
                  },
                  {
                    "id": "hit",
                    "label": "Hit"
                  },
                  {
                    "id": "matk",
                    "label": "Matk"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "hit": "+12",
                      "all-state": "+6",
                      "maxhp": "+4%",
                      "duration": "60 seconds",
                      "atk": "+40",
                      "matk": "+40",
                      "effect": "Consumes HP 3%, SP 4% per 5 sec",
                      "sp-cost": "80",
                      "data-1": "30",
                      "data-2": "40",
                      "data-3": "30000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "hit": "+24",
                      "all-state": "+12",
                      "maxhp": "+8%",
                      "duration": "90 seconds",
                      "atk": "+80",
                      "matk": "+80",
                      "effect": "Consumes HP 2.5%, SP 3.5% per 5 sec",
                      "sp-cost": "90",
                      "data-1": "25",
                      "data-2": "35",
                      "data-3": "45000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "hit": "+36",
                      "all-state": "+18",
                      "maxhp": "+12%",
                      "duration": "120 seconds",
                      "atk": "+120",
                      "matk": "+120",
                      "effect": "Consumes HP 2%, SP 3% per 5 sec",
                      "sp-cost": "100",
                      "data-1": "20",
                      "data-2": "30",
                      "data-3": "60000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "hit": "+48",
                      "all-state": "+24",
                      "maxhp": "+16%",
                      "duration": "150 seconds",
                      "atk": "+160",
                      "matk": "+160",
                      "effect": "Consumes HP 1.5%, SP 2.5% per 5 sec",
                      "sp-cost": "110",
                      "data-1": "15",
                      "data-2": "25",
                      "data-3": "75000"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "hit": "+60",
                      "all-state": "+30",
                      "maxhp": "+20%",
                      "duration": "180 seconds",
                      "atk": "+200",
                      "matk": "+200",
                      "effect": "Consumes HP 1%, SP 2% per 5 sec",
                      "sp-cost": "120",
                      "data-1": "10",
                      "data-2": "20",
                      "data-3": "90000"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 5014,
          "imageFile": "5014.png",
          "name": "Full Throttle",
          "maxLevel": 5,
          "prerequisiteText": "3rd jobs",
          "group": "",
          "type": "Active Skill",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Full_Throttle",
          "description": "Exceed the limits of the body by\nsacrificing your own vitality to strengthen yourself\nfor a short time. You will become horribly\nexhausted after the skill's duration.\nFully restores HP when cast and increases\nmovement speed for the skill's duration.\nAll stats +20%.\nAfter the skill duration ends, you will be inflicted\nwith Rebound status. During rebound status,\nyour movement speed is lowered and your\nnatural HP/SP recovery is disabled.\nCannot be removed by dispel or clearance.\n50 Minute playtime cooldown",
          "levelDetails": [
            {
              "level": 1,
              "text": "Duration 10 seconds\nConsumes 6% MaxSP per second"
            },
            {
              "level": 2,
              "text": "Duration 15 seconds\nConsumes 4% MaxSP per second"
            },
            {
              "level": 3,
              "text": "Duration 20 seconds\nConsumes 3% MaxSP per second"
            },
            {
              "level": 4,
              "text": "Duration 25 seconds\nConsumes 2% MaxSP per second"
            },
            {
              "level": 5,
              "text": "Duration 30 seconds\nConsumes 1% MaxSP per second"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "3000 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "1"
                },
                {
                  "level": 2,
                  "value": "1"
                },
                {
                  "level": 3,
                  "value": "1"
                },
                {
                  "level": 4,
                  "value": "1"
                },
                {
                  "level": 5,
                  "value": "1"
                }
              ]
            },
            {
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "6"
                },
                {
                  "level": 2,
                  "value": "4"
                },
                {
                  "level": 3,
                  "value": "3"
                },
                {
                  "level": 4,
                  "value": "2"
                },
                {
                  "level": 5,
                  "value": "1"
                }
              ]
            },
            {
              "label": "Data 2",
              "values": [
                {
                  "level": 1,
                  "value": "10000"
                },
                {
                  "level": 2,
                  "value": "15000"
                },
                {
                  "level": 3,
                  "value": "20000"
                },
                {
                  "level": 4,
                  "value": "25000"
                },
                {
                  "level": 5,
                  "value": "30000"
                }
              ]
            }
          ],
          "spCost": "1",
          "duration": "[5 + (Skill Level × 5)] seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5014.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5014",
          "tree": {
            "idx": 41,
            "row": 5,
            "col": 6,
            "columns": 7,
            "requirements": []
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "1"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.5 seconds"
              },
              {
                "label": "Cooldown",
                "value": "3000 seconds"
              },
              {
                "label": "Target",
                "value": "Self"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  },
                  {
                    "id": "duration",
                    "label": "Duration"
                  },
                  {
                    "id": "effect",
                    "label": "Effect"
                  },
                  {
                    "id": "data-1",
                    "label": "Data 1"
                  },
                  {
                    "id": "data-2",
                    "label": "Data 2"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "duration": "10 seconds",
                      "effect": "Consumes 6% Ma x SP per second",
                      "sp-cost": "1",
                      "data-1": "6",
                      "data-2": "10000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "15 seconds",
                      "effect": "Consumes 4% Ma x SP per second",
                      "sp-cost": "1",
                      "data-1": "4",
                      "data-2": "15000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "20 seconds",
                      "effect": "Consumes 3% Ma x SP per second",
                      "sp-cost": "1",
                      "data-1": "3",
                      "data-2": "20000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "25 seconds",
                      "effect": "Consumes 2% Ma x SP per second",
                      "sp-cost": "1",
                      "data-1": "2",
                      "data-2": "25000"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "30 seconds",
                      "effect": "Consumes 1% Ma x SP per second",
                      "sp-cost": "1",
                      "data-1": "1",
                      "data-2": "30000"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        }
      ]
    },
    {
      "id": "previous-2",
      "label": "Paladin",
      "pointLimit": 69,
      "tree": {
        "columns": 7,
        "rows": 6
      },
      "skills": [
        {
          "id": 248,
          "imageFile": "248.png",
          "name": "Faith (Faith)",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Enhances MaxHP and resistance to Holy property damage.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MaxHP + 200, Resistance to Sacred property: + 5%"
            },
            {
              "level": 2,
              "text": "MaxHP + 400, Resistance to Sacred property: +10%"
            },
            {
              "level": 3,
              "text": "MaxHP + 600, Resistance to Sacred property: +15%"
            },
            {
              "level": 4,
              "text": "MaxHP + 800, Resistance to Sacred property: +20%"
            },
            {
              "level": 5,
              "text": "MaxHP +1000, Resistance to Sacred property: +25%"
            },
            {
              "level": 6,
              "text": "MaxHP +1200, Resistance to Sacred property: +30%"
            },
            {
              "level": 7,
              "text": "MaxHP +1400, Resistance to Sacred property: +35%"
            },
            {
              "level": 8,
              "text": "MaxHP +1600, Resistance to Sacred property: +40%"
            },
            {
              "level": 9,
              "text": "MaxHP +1800, Resistance to Sacred property: +45%"
            },
            {
              "level": 10,
              "text": "MaxHP +2000, Resistance to Sacred property: +50%"
            }
          ],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "0"
                },
                {
                  "level": 2,
                  "value": "0"
                },
                {
                  "level": 3,
                  "value": "0"
                },
                {
                  "level": 4,
                  "value": "0"
                },
                {
                  "level": 5,
                  "value": "0"
                },
                {
                  "level": 6,
                  "value": "0"
                },
                {
                  "level": 7,
                  "value": "0"
                },
                {
                  "level": 8,
                  "value": "0"
                },
                {
                  "level": 9,
                  "value": "0"
                },
                {
                  "level": 10,
                  "value": "0"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/248.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/248",
          "tree": {
            "idx": 0,
            "row": 0,
            "col": 0,
            "columns": 7,
            "requirements": []
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Passive Skill"
              },
              {
                "label": "Levels",
                "value": "10"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "maxhp",
                    "label": "MaxHP"
                  },
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  },
                  {
                    "id": "resistance-to-sacred-property",
                    "label": "Resistance To Sacred Property:"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "maxhp": "+ 200",
                      "resistance-to-sacred-property": "+ 5%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "maxhp": "+ 400",
                      "resistance-to-sacred-property": "+10%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "maxhp": "+ 600",
                      "resistance-to-sacred-property": "+15%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "maxhp": "+ 800",
                      "resistance-to-sacred-property": "+20%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "maxhp": "+1000",
                      "resistance-to-sacred-property": "+25%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "maxhp": "+1200",
                      "resistance-to-sacred-property": "+30%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "maxhp": "+1400",
                      "resistance-to-sacred-property": "+35%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "maxhp": "+1600",
                      "resistance-to-sacred-property": "+40%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "maxhp": "+1800",
                      "resistance-to-sacred-property": "+45%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "maxhp": "+2000",
                      "resistance-to-sacred-property": "+50%",
                      "sp-cost": "0"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 249,
          "imageFile": "249.png",
          "name": "Auto Guard",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "Supportive",
          "target": "Immediately",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Auto_Guard",
          "description": "Requires the user to have a shield equipped.\nAllows the user to block physical attacks with the equipped shield by chance in duration.\nThe player will be forced to pause momentarily whenever this skill blocks damage.\nThis skill can be switched on and off.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Defense probability: 5%"
            },
            {
              "level": 2,
              "text": "Defense probability:10%"
            },
            {
              "level": 3,
              "text": "Defense probability:14%"
            },
            {
              "level": 4,
              "text": "Defense probability:18%"
            },
            {
              "level": 5,
              "text": "Defense probability:21%"
            },
            {
              "level": 6,
              "text": "Defense probability:24%"
            },
            {
              "level": 7,
              "text": "Defense probability:26%"
            },
            {
              "level": 8,
              "text": "Defense probability:28%"
            },
            {
              "level": 9,
              "text": "Defense probability:29%"
            },
            {
              "level": 10,
              "text": "Defense probability:30%"
            }
          ],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "12"
                },
                {
                  "level": 2,
                  "value": "14"
                },
                {
                  "level": 3,
                  "value": "16"
                },
                {
                  "level": 4,
                  "value": "18"
                },
                {
                  "level": 5,
                  "value": "20"
                },
                {
                  "level": 6,
                  "value": "22"
                },
                {
                  "level": 7,
                  "value": "24"
                },
                {
                  "level": 8,
                  "value": "26"
                },
                {
                  "level": 9,
                  "value": "28"
                },
                {
                  "level": 10,
                  "value": "30"
                }
              ]
            }
          ],
          "spCost": "10 + (Skill Level × 2)",
          "duration": "5 minutes; Until recast",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/249.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/249",
          "tree": {
            "idx": 2,
            "row": 0,
            "col": 2,
            "columns": 7,
            "requirements": []
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "10"
              },
              {
                "label": "SP Cost",
                "value": "10 + (Skill Level × 2)"
              },
              {
                "label": "Target",
                "value": "Immediately"
              },
              {
                "label": "Duration",
                "value": "5 minutes; Until recast"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  },
                  {
                    "id": "effect",
                    "label": "Effect"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Defense probability: 5%",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Defense probability:10%",
                      "sp-cost": "14"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Defense probability:14%",
                      "sp-cost": "16"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Defense probability:18%",
                      "sp-cost": "18"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Defense probability:21%",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "Defense probability:24%",
                      "sp-cost": "22"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "Defense probability:26%",
                      "sp-cost": "24"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "Defense probability:28%",
                      "sp-cost": "26"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "Defense probability:29%",
                      "sp-cost": "28"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "Defense probability:30%",
                      "sp-cost": "30"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 55,
          "imageFile": "55.png",
          "name": "Spear Mastery",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Spear_Mastery",
          "description": "Enhances attack (Weapon Mastery) with Spear class weapons.\nThis bonus is higher if the user is mounted.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Not Mounted, Damage + 4, Mounted, + 5"
            },
            {
              "level": 2,
              "text": "Not Mounted, Damage + 8, Mounted, +10"
            },
            {
              "level": 3,
              "text": "Not Mounted, Damage +12, Mounted, +15"
            },
            {
              "level": 4,
              "text": "Not Mounted, Damage +16, Mounted, +20"
            },
            {
              "level": 5,
              "text": "Not Mounted, Damage +20, Mounted, +25"
            },
            {
              "level": 6,
              "text": "Not Mounted, Damage +24, Mounted, +30"
            },
            {
              "level": 7,
              "text": "Not Mounted, Damage +28, Mounted, +35"
            },
            {
              "level": 8,
              "text": "Not Mounted, Damage +32, Mounted, +40"
            },
            {
              "level": 9,
              "text": "Not Mounted, Damage +36, Mounted, +45"
            },
            {
              "level": 10,
              "text": "Not Mounted, Damage +40, Mounted, +50"
            }
          ],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "0"
                },
                {
                  "level": 2,
                  "value": "0"
                },
                {
                  "level": 3,
                  "value": "0"
                },
                {
                  "level": 4,
                  "value": "0"
                },
                {
                  "level": 5,
                  "value": "0"
                },
                {
                  "level": 6,
                  "value": "0"
                },
                {
                  "level": 7,
                  "value": "0"
                },
                {
                  "level": 8,
                  "value": "0"
                },
                {
                  "level": 9,
                  "value": "0"
                },
                {
                  "level": 10,
                  "value": "0"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/55.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/55",
          "tree": {
            "idx": 4,
            "row": 0,
            "col": 4,
            "columns": 7,
            "requirements": []
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Passive Skill"
              },
              {
                "label": "Levels",
                "value": "10"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  },
                  {
                    "id": "mounted",
                    "label": "Mounted,"
                  },
                  {
                    "id": "not-mounted-damage",
                    "label": "Not Mounted, Damage"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "not-mounted-damage": "+ 4",
                      "mounted": "+ 5",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "not-mounted-damage": "+ 8",
                      "mounted": "+10",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "not-mounted-damage": "+12",
                      "mounted": "+15",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "not-mounted-damage": "+16",
                      "mounted": "+20",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "not-mounted-damage": "+20",
                      "mounted": "+25",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "not-mounted-damage": "+24",
                      "mounted": "+30",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "not-mounted-damage": "+28",
                      "mounted": "+35",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "not-mounted-damage": "+32",
                      "mounted": "+40",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "not-mounted-damage": "+36",
                      "mounted": "+45",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "not-mounted-damage": "+40",
                      "mounted": "+50",
                      "sp-cost": "0"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 63,
          "imageFile": "63.png",
          "name": "Peco Peco Ride",
          "maxLevel": 1,
          "prerequisiteText": "Endure 1",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Peco_Peco_Ride",
          "description": "Enables Knights and Crusaders to ride a Peco Peco.",
          "levelDetails": [],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "0"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/63.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/63",
          "tree": {
            "idx": 5,
            "row": 0,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 8,
                "level": 1,
                "name": "Endure",
                "visible": false
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Passive Skill"
              },
              {
                "label": "Levels",
                "value": "1"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "0"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 1002,
          "imageFile": "1002.png",
          "name": "Shrink",
          "maxLevel": 1,
          "prerequisiteText": "Quest complete",
          "group": "Active",
          "type": "Supportive",
          "target": "Caster Only",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Shrink",
          "description": "Consumes 100 SP. Creates a high chance of Stunning enemies with a successful Guard within 15 minutes.\nUse this skill again for its duration to cancel its effect.",
          "levelDetails": [],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "100"
                }
              ]
            }
          ],
          "spCost": "100",
          "duration": "15 minutes; Until recast",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/1002.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/1002",
          "tree": {
            "idx": 6,
            "row": 0,
            "col": 6,
            "columns": 7,
            "requirements": []
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "1"
              },
              {
                "label": "SP Cost",
                "value": "100"
              },
              {
                "label": "Target",
                "value": "Caster Only"
              },
              {
                "label": "Duration",
                "value": "15 minutes; Until recast"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "100"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 35,
          "imageFile": "35.png",
          "name": "Cure",
          "maxLevel": 1,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "Supportive",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Cure",
          "description": "Cures a single target from the following status effects: Silence, Chaos and Blind and consumes SP15.",
          "levelDetails": [],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "15"
                }
              ]
            }
          ],
          "spCost": "15",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/35.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/35",
          "tree": {
            "idx": 7,
            "row": 1,
            "col": 0,
            "columns": 7,
            "requirements": [
              {
                "id": 248,
                "level": 5,
                "name": "Faith",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "1"
              },
              {
                "label": "SP Cost",
                "value": "15"
              },
              {
                "label": "Target",
                "value": "1 Target"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "15"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 253,
          "imageFile": "253.png",
          "name": "Holy Cross",
          "maxLevel": 10,
          "prerequisiteText": "Faith 7",
          "group": "Active",
          "type": "Physical Attack",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Holy_Cross",
          "description": "Slices a single target with a cross shaped attack to inflict Holy property physical damage. It has a chance of leaving the target [Abnormal Status: blind].\nThe chance of blind is reduced by the target's resistance to abnormal status.\nThe damage is doubled with a two-handed Spear.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 135%, with a two-handed Spear ATK 270%"
            },
            {
              "level": 2,
              "text": "ATK 170%, with a two-handed Spear ATK 340%"
            },
            {
              "level": 3,
              "text": "ATK 205%, with a two-handed Spear ATK 410%"
            },
            {
              "level": 4,
              "text": "ATK 240%, with a two-handed Spear ATK 480%"
            },
            {
              "level": 5,
              "text": "ATK 275%, with a two-handed Spear ATK 550%"
            },
            {
              "level": 6,
              "text": "ATK 310%, with a two-handed Spear ATK 620%"
            },
            {
              "level": 7,
              "text": "ATK 345%, with a two-handed Spear ATK 690%"
            },
            {
              "level": 8,
              "text": "ATK 380%, with a two-handed Spear ATK 760%"
            },
            {
              "level": 9,
              "text": "ATK 415%, with a two-handed Spear ATK 830%"
            },
            {
              "level": 10,
              "text": "ATK 450%, with a two-handed Spear ATK 900%"
            }
          ],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "11"
                },
                {
                  "level": 2,
                  "value": "12"
                },
                {
                  "level": 3,
                  "value": "13"
                },
                {
                  "level": 4,
                  "value": "14"
                },
                {
                  "level": 5,
                  "value": "15"
                },
                {
                  "level": 6,
                  "value": "16"
                },
                {
                  "level": 7,
                  "value": "17"
                },
                {
                  "level": 8,
                  "value": "18"
                },
                {
                  "level": 9,
                  "value": "19"
                },
                {
                  "level": 10,
                  "value": "20"
                }
              ]
            }
          ],
          "spCost": "(Skill Level + 10)",
          "castDelay": "ASPD",
          "castRange": "Melee",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/253.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/253",
          "tree": {
            "idx": 8,
            "row": 1,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 248,
                "level": 7,
                "name": "Faith",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "10"
              },
              {
                "label": "SP Cost",
                "value": "(Skill Level + 10)"
              },
              {
                "label": "Cast Delay",
                "value": "ASPD"
              },
              {
                "label": "Cast Range",
                "value": "Melee"
              },
              {
                "label": "Target",
                "value": "1 Target"
              },
              {
                "label": "Damage",
                "value": "450% ATK/900% ATK"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "11"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "13"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "14"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "16"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "17"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "18"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "19"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "sp-cost": "20"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 250,
          "imageFile": "250.png",
          "name": "Smite (Shield Charge)",
          "maxLevel": 5,
          "prerequisiteText": "Auto Guard 5",
          "group": "Active",
          "type": "Physical Attack",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Requires the user to have a shield equipped.\nSmashes the equipped shield into a single target to inflict physical damage and push it backwards. It has a chance of leaving the target [Abnormal Status: stunned].\nThe chance of stun is reduced by the target's resistance to abnormal status.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 120%, Stun Chance:20%, Knock Back Distance: 5"
            },
            {
              "level": 2,
              "text": "ATK 140%, Stun Chance:25%, Knock Back Distance: 6"
            },
            {
              "level": 3,
              "text": "ATK 160%, Stun Chance:30%, Knock Back Distance: 7"
            },
            {
              "level": 4,
              "text": "ATK 180%, Stun Chance:35%, Knock Back Distance: 8"
            },
            {
              "level": 5,
              "text": "ATK 200%, Stun Chance:40%, Knock Back Distance: 9"
            }
          ],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "10"
                },
                {
                  "level": 2,
                  "value": "10"
                },
                {
                  "level": 3,
                  "value": "10"
                },
                {
                  "level": 4,
                  "value": "10"
                },
                {
                  "level": 5,
                  "value": "10"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/250.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/250",
          "tree": {
            "idx": 9,
            "row": 1,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 249,
                "level": 5,
                "name": "Guard",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "Target",
                "value": "1 Target"
              },
              {
                "label": "Damage",
                "value": "200% ATK"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "10"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 258,
          "imageFile": "258.png",
          "name": "Spear Quicken",
          "maxLevel": 10,
          "prerequisiteText": "Spear Mastery 10",
          "group": "Active",
          "type": "Supportive",
          "target": "Caster Only",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Spear_Quicken",
          "description": "Requires the user to have a Spear class weapons equipped.\nTemporarily increases attack speed, critical hit rate and flee rate with Spear class weapons.\nDuration, the chance of critical, and flee rate increase depending on skill level.\nSwitching to a different weapon or dismounting a spear will cancel this effect.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Duration: 30sec, CRI+ 3, FLEE+ 2"
            },
            {
              "level": 2,
              "text": "Duration: 60sec, CRI+ 6, FLEE+ 4"
            },
            {
              "level": 3,
              "text": "Duration: 90sec, CRI+ 9, FLEE+ 6"
            },
            {
              "level": 4,
              "text": "Duration:120sec, CRI+12, FLEE+ 8"
            },
            {
              "level": 5,
              "text": "Duration:150sec, CRI+15, FLEE+10"
            },
            {
              "level": 6,
              "text": "Duration:180sec, CRI+18, FLEE+12"
            },
            {
              "level": 7,
              "text": "Duration:210sec, CRI+21, FLEE+14"
            },
            {
              "level": 8,
              "text": "Duration:240sec, CRI+24, FLEE+16"
            },
            {
              "level": 9,
              "text": "Duration:270sec, CRI+27, FLEE+18"
            },
            {
              "level": 10,
              "text": "Duration:300sec, CRI+30, FLEE+20"
            }
          ],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "24"
                },
                {
                  "level": 2,
                  "value": "28"
                },
                {
                  "level": 3,
                  "value": "32"
                },
                {
                  "level": 4,
                  "value": "36"
                },
                {
                  "level": 5,
                  "value": "40"
                },
                {
                  "level": 6,
                  "value": "44"
                },
                {
                  "level": 7,
                  "value": "48"
                },
                {
                  "level": 8,
                  "value": "52"
                },
                {
                  "level": 9,
                  "value": "56"
                },
                {
                  "level": 10,
                  "value": "60"
                }
              ]
            }
          ],
          "spCost": "20 + (Skill Level × 4)",
          "duration": "(Skill Level × 30) seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/258.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/258",
          "tree": {
            "idx": 11,
            "row": 1,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 55,
                "level": 10,
                "name": "Spear Mastery",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "10"
              },
              {
                "label": "SP Cost",
                "value": "20 + (Skill Level × 4)"
              },
              {
                "label": "Target",
                "value": "Caster Only"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  },
                  {
                    "id": "duration",
                    "label": "Duration"
                  },
                  {
                    "id": "cri",
                    "label": ", Cri"
                  },
                  {
                    "id": "flee",
                    "label": "Flee"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "duration": "30 seconds",
                      "cri": "+ 3",
                      "flee": "+ 2",
                      "sp-cost": "24"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "60 seconds",
                      "cri": "+ 6",
                      "flee": "+ 4",
                      "sp-cost": "28"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "90 seconds",
                      "cri": "+ 9",
                      "flee": "+ 6",
                      "sp-cost": "32"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "120 seconds",
                      "cri": "+12",
                      "flee": "+ 8",
                      "sp-cost": "36"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "150 seconds",
                      "cri": "+15",
                      "flee": "+10",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "duration": "180 seconds",
                      "cri": "+18",
                      "flee": "+12",
                      "sp-cost": "44"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "duration": "210 seconds",
                      "cri": "+21",
                      "flee": "+14",
                      "sp-cost": "48"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "duration": "240 seconds",
                      "cri": "+24",
                      "flee": "+16",
                      "sp-cost": "52"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "duration": "270 seconds",
                      "cri": "+27",
                      "flee": "+18",
                      "sp-cost": "56"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "duration": "300 seconds",
                      "cri": "+30",
                      "flee": "+20",
                      "sp-cost": "60"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 64,
          "imageFile": "64.png",
          "name": "Cavalier Mastery",
          "maxLevel": 5,
          "prerequisiteText": "Riding 1",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Cavalier_Mastery",
          "description": "Regains the attack speed loss when riding a Peco Peco .",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK Speed : 60%"
            },
            {
              "level": 2,
              "text": "ATK Speed : 70%"
            },
            {
              "level": 3,
              "text": "ATK Speed : 80%"
            },
            {
              "level": 4,
              "text": "ATK Speed : 90%"
            },
            {
              "level": 5,
              "text": "ATK Speed :100%"
            }
          ],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "0"
                },
                {
                  "level": 2,
                  "value": "0"
                },
                {
                  "level": 3,
                  "value": "0"
                },
                {
                  "level": 4,
                  "value": "0"
                },
                {
                  "level": 5,
                  "value": "0"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/64.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/64",
          "tree": {
            "idx": 12,
            "row": 1,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 63,
                "level": 1,
                "name": "Peco Peco Ride",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Passive Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "0"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 22,
          "imageFile": "22.png",
          "name": "Divine Protection",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Divine_Protection",
          "description": "Raises Soft Defense against Demon and Undead race monsters. The higher the character level, the higher the damage reduction.\nDecrease the damage received from Demon and Undead race monsters by the amount of damage reduction.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Damage reduction + 3"
            },
            {
              "level": 2,
              "text": "Damage reduction + 6"
            },
            {
              "level": 3,
              "text": "Damage reduction + 9"
            },
            {
              "level": 4,
              "text": "Damage reduction + 12"
            },
            {
              "level": 5,
              "text": "Damage reduction + 15"
            },
            {
              "level": 6,
              "text": "Damage reduction + 18"
            },
            {
              "level": 7,
              "text": "Damage reduction + 21"
            },
            {
              "level": 8,
              "text": "Damage reduction + 24"
            },
            {
              "level": 9,
              "text": "Damage reduction + 27"
            },
            {
              "level": 10,
              "text": "Damage reduction + 30"
            }
          ],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "0"
                },
                {
                  "level": 2,
                  "value": "0"
                },
                {
                  "level": 3,
                  "value": "0"
                },
                {
                  "level": 4,
                  "value": "0"
                },
                {
                  "level": 5,
                  "value": "0"
                },
                {
                  "level": 6,
                  "value": "0"
                },
                {
                  "level": 7,
                  "value": "0"
                },
                {
                  "level": 8,
                  "value": "0"
                },
                {
                  "level": 9,
                  "value": "0"
                },
                {
                  "level": 10,
                  "value": "0"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/22.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/22",
          "tree": {
            "idx": 14,
            "row": 2,
            "col": 0,
            "columns": 7,
            "requirements": [
              {
                "id": 35,
                "level": 1,
                "name": "Cure",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Passive Skill"
              },
              {
                "label": "Levels",
                "value": "10"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  },
                  {
                    "id": "damage-reduction",
                    "label": "Damage Reduction"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "damage-reduction": "+ 3",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "damage-reduction": "+ 6",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "damage-reduction": "+ 9",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "damage-reduction": "+ 12",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "damage-reduction": "+ 15",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "damage-reduction": "+ 18",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "damage-reduction": "+ 21",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "damage-reduction": "+ 24",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "damage-reduction": "+ 27",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "damage-reduction": "+ 30",
                      "sp-cost": "0"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 254,
          "imageFile": "254.png",
          "name": "Grand Cross",
          "maxLevel": 10,
          "prerequisiteText": "Faith 10, Holy Cross 6",
          "group": "Active",
          "type": "Special(Magic)",
          "target": "Immediately",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Grand_Cross",
          "description": "Inflicts Holy property Hybrid Damage 1 to 3 times to all enemies in a cross-shaped area around the user.\neach cast drains 20% of MaxHP and inflicts a third of the damage to the user.\nCast Time cannot be interrupted.\nAll demon, undead race monsters becomes [Abnormal Status: Blind] except boss monster.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK, MATK 140%"
            },
            {
              "level": 2,
              "text": "ATK, MATK 180%"
            },
            {
              "level": 3,
              "text": "ATK, MATK 220%"
            },
            {
              "level": 4,
              "text": "ATK, MATK 260%"
            },
            {
              "level": 5,
              "text": "ATK, MATK 300%"
            },
            {
              "level": 6,
              "text": "ATK, MATK 340%"
            },
            {
              "level": 7,
              "text": "ATK, MATK 380%"
            },
            {
              "level": 8,
              "text": "ATK, MATK 420%"
            },
            {
              "level": 9,
              "text": "ATK, MATK 460%"
            },
            {
              "level": 10,
              "text": "ATK, MATK 500%"
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "1 second",
          "castDelay": "0.5 seconds",
          "cooldown": "1 second",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "37"
                },
                {
                  "level": 2,
                  "value": "44"
                },
                {
                  "level": 3,
                  "value": "51"
                },
                {
                  "level": 4,
                  "value": "58"
                },
                {
                  "level": 5,
                  "value": "65"
                },
                {
                  "level": 6,
                  "value": "72"
                },
                {
                  "level": 7,
                  "value": "78"
                },
                {
                  "level": 8,
                  "value": "86"
                },
                {
                  "level": 9,
                  "value": "93"
                },
                {
                  "level": 10,
                  "value": "100"
                }
              ]
            }
          ],
          "spCost": "30 + (Skill Level × 7)",
          "duration": "0.9 seconds",
          "areaOfEffect": "Cross-shaped",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/254.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/254",
          "tree": {
            "idx": 15,
            "row": 2,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 248,
                "level": 10,
                "name": "Faith",
                "visible": true
              },
              {
                "id": 253,
                "level": 6,
                "name": "Holy Cross",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "10"
              },
              {
                "label": "SP Cost",
                "value": "30 + (Skill Level × 7)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0.5 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "1 second"
              },
              {
                "label": "Cast Delay",
                "value": "0.5 seconds"
              },
              {
                "label": "Cooldown",
                "value": "1 second"
              },
              {
                "label": "Target",
                "value": "Immediately"
              },
              {
                "label": "Area of Effect",
                "value": "Cross-shaped"
              },
              {
                "label": "Duration",
                "value": "0.9 seconds"
              },
              {
                "label": "Damage",
                "value": "500% MATK"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "37"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "44"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "51"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "58"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "65"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "72"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "78"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "86"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "93"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "sp-cost": "100"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 251,
          "imageFile": "251.png",
          "name": "Shield Boomerang",
          "maxLevel": 5,
          "prerequisiteText": "Smite 3",
          "group": "Active",
          "type": "Ranged Physical Attack",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Shield_Boomerang",
          "description": "Requires the user to have a shield equipped.\nHurls the equipped shield like a boomerang at a single target to inflict ranged physical damage.\nThe damage is affected by the equiped shield's weight and upgrade level.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 80%, Range: 3cell"
            },
            {
              "level": 2,
              "text": "ATK 160%, Range: 5cell"
            },
            {
              "level": 3,
              "text": "ATK 240%, Range: 7cell"
            },
            {
              "level": 4,
              "text": "ATK 320%, Range: 9cell"
            },
            {
              "level": 5,
              "text": "ATK 400%, Range:11cell"
            }
          ],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "12"
                },
                {
                  "level": 2,
                  "value": "12"
                },
                {
                  "level": 3,
                  "value": "12"
                },
                {
                  "level": 4,
                  "value": "12"
                },
                {
                  "level": 5,
                  "value": "12"
                }
              ]
            }
          ],
          "spCost": "12",
          "castDelay": "0.7 seconds",
          "castRange": "[1 + (Skill Level × 2)] cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/251.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/251",
          "tree": {
            "idx": 16,
            "row": 2,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 250,
                "level": 3,
                "name": "Smite",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "12"
              },
              {
                "label": "Cast Delay",
                "value": "0.7 seconds"
              },
              {
                "label": "Cast Range",
                "value": "[1 + (Skill Level × 2)] cells"
              },
              {
                "label": "Target",
                "value": "1 Target"
              },
              {
                "label": "Damage",
                "value": "400% ATK"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "12"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 367,
          "imageFile": "367.png",
          "name": "Gloria Domini",
          "maxLevel": 5,
          "prerequisiteText": "Endure 5, Faith 5, Smite 2",
          "group": "Active",
          "type": "Magic",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Gloria_Domini",
          "description": "Summon a massive crucifix to magical attack\nenemies with Holy property.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 650%"
            },
            {
              "level": 2,
              "text": "MATK 800%"
            },
            {
              "level": 3,
              "text": "MATK 950%"
            },
            {
              "level": 4,
              "text": "MATK 1100%"
            },
            {
              "level": 5,
              "text": "MATK 1250%"
            }
          ],
          "fixedCastTime": "0.4 seconds",
          "variableCastTime": "1 second",
          "castDelay": "1 second",
          "cooldown": "0 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "30"
                },
                {
                  "level": 2,
                  "value": "35"
                },
                {
                  "level": 3,
                  "value": "40"
                },
                {
                  "level": 4,
                  "value": "45"
                },
                {
                  "level": 5,
                  "value": "50"
                }
              ]
            }
          ],
          "spCost": "25 + (Skill Level × 5)",
          "castRange": "Magic",
          "translations": {
            "pt-BR": {
              "name": " Gloria Domini ",
              "description": "Derruba a santíssima cruz, fazendo uma imensa pressão no alvo.\nCausa dano mágico de propriedade Sagrado no alvo único.\nDano = {[(Nv. da habilidade × 150) + 500] × (Nv. de base ÷ 100)}%",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Gloria_Domini"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/367.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/367",
          "tree": {
            "idx": 17,
            "row": 2,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 8,
                "level": 5,
                "name": "Endure",
                "visible": false
              },
              {
                "id": 248,
                "level": 5,
                "name": "Faith",
                "visible": true
              },
              {
                "id": 250,
                "level": 2,
                "name": "Smite",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "25 + (Skill Level × 5)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0.4 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "1 second"
              },
              {
                "label": "Cast Delay",
                "value": "1 second"
              },
              {
                "label": "Cooldown",
                "value": "0 seconds"
              },
              {
                "label": "Cast Range",
                "value": "Magic"
              },
              {
                "label": "Target",
                "value": "1 Target"
              },
              {
                "label": "Damage",
                "value": "1,250% MATK"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "35"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "45"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "50"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 23,
          "imageFile": "23.png",
          "name": "Demonbane",
          "maxLevel": 10,
          "prerequisiteText": "Divine Protection 3",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Raises Physical Attack (Weapon Mastery) against Demon and Undead race monsters.\nDamage is added to the physical damage given to Demon and Undead race monsters.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Damage + 3"
            },
            {
              "level": 2,
              "text": "Damage + 6"
            },
            {
              "level": 3,
              "text": "Damage + 9"
            },
            {
              "level": 4,
              "text": "Damage + 12"
            },
            {
              "level": 5,
              "text": "Damage + 15"
            },
            {
              "level": 6,
              "text": "Damage + 18"
            },
            {
              "level": 7,
              "text": "Damage + 21"
            },
            {
              "level": 8,
              "text": "Damage + 24"
            },
            {
              "level": 9,
              "text": "Damage + 27"
            },
            {
              "level": 10,
              "text": "Damage + 30"
            }
          ],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "0"
                },
                {
                  "level": 2,
                  "value": "0"
                },
                {
                  "level": 3,
                  "value": "0"
                },
                {
                  "level": 4,
                  "value": "0"
                },
                {
                  "level": 5,
                  "value": "0"
                },
                {
                  "level": 6,
                  "value": "0"
                },
                {
                  "level": 7,
                  "value": "0"
                },
                {
                  "level": 8,
                  "value": "0"
                },
                {
                  "level": 9,
                  "value": "0"
                },
                {
                  "level": 10,
                  "value": "0"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/23.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/23",
          "tree": {
            "idx": 21,
            "row": 3,
            "col": 0,
            "columns": 7,
            "requirements": [
              {
                "id": 22,
                "level": 3,
                "name": "Divine Protection",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Passive Skill"
              },
              {
                "label": "Levels",
                "value": "10"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "sp-cost": "0"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 252,
          "imageFile": "252.png",
          "name": "Reflect Shield",
          "maxLevel": 10,
          "prerequisiteText": "Shield Boomerang 3",
          "group": "Active",
          "type": "Supportive",
          "target": "Immediately",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Reflect_Shield",
          "description": "Requires the user to have a shield equipped.\nProduces an aura of retaliation to reflect a portion of the close range physical damage taken back at the attacker for five minutes.\nThis skill is deactivated when the shield is released in duration.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Damage Reflection : 13%"
            },
            {
              "level": 2,
              "text": "Damage Reflection : 16%"
            },
            {
              "level": 3,
              "text": "Damage Reflection : 19%"
            },
            {
              "level": 4,
              "text": "Damage Reflection : 22%"
            },
            {
              "level": 5,
              "text": "Damage Reflection : 25%"
            },
            {
              "level": 6,
              "text": "Damage Reflection : 28%"
            },
            {
              "level": 7,
              "text": "Damage Reflection : 31%"
            },
            {
              "level": 8,
              "text": "Damage Reflection : 34%"
            },
            {
              "level": 9,
              "text": "Damage Reflection : 37%"
            },
            {
              "level": 10,
              "text": "Damage Reflection : 40%"
            }
          ],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "35"
                },
                {
                  "level": 2,
                  "value": "40"
                },
                {
                  "level": 3,
                  "value": "45"
                },
                {
                  "level": 4,
                  "value": "50"
                },
                {
                  "level": 5,
                  "value": "55"
                },
                {
                  "level": 6,
                  "value": "60"
                },
                {
                  "level": 7,
                  "value": "65"
                },
                {
                  "level": 8,
                  "value": "70"
                },
                {
                  "level": 9,
                  "value": "75"
                },
                {
                  "level": 10,
                  "value": "80"
                }
              ]
            }
          ],
          "spCost": "30 + (Skill Level × 5)",
          "castDelay": "1 second",
          "duration": "5 minutes",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/252.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/252",
          "tree": {
            "idx": 23,
            "row": 3,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 251,
                "level": 3,
                "name": "Shield Boomerang",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "10"
              },
              {
                "label": "SP Cost",
                "value": "30 + (Skill Level × 5)"
              },
              {
                "label": "Cast Delay",
                "value": "1 second"
              },
              {
                "label": "Target",
                "value": "Immediately"
              },
              {
                "label": "Duration",
                "value": "5 minutes"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  },
                  {
                    "id": "effect",
                    "label": "Effect"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Damage Reflection : 13%",
                      "sp-cost": "35"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Damage Reflection : 16%",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Damage Reflection : 19%",
                      "sp-cost": "45"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Damage Reflection : 22%",
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Damage Reflection : 25%",
                      "sp-cost": "55"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "Damage Reflection : 28%",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "Damage Reflection : 31%",
                      "sp-cost": "65"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "Damage Reflection : 34%",
                      "sp-cost": "70"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "Damage Reflection : 37%",
                      "sp-cost": "75"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "Damage Reflection : 40%",
                      "sp-cost": "80"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 257,
          "imageFile": "257.png",
          "name": "Defender",
          "maxLevel": 5,
          "prerequisiteText": "Shield Boomerang 1",
          "group": "Active",
          "type": "Supportive",
          "target": "Caster Only",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Defender",
          "description": "Requires the user to have a shield equipped.\nProduces an aura of protection to buffer all incoming ranged physical damage at cost of attack speed and movement speed.\nSkill level affects damage reduction and ATK speed.\nThis skill can be switched on and off.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Damage reduction from long distance: 20%, ATK Speed: 80%"
            },
            {
              "level": 2,
              "text": "Damage reduction from long distance: 35%, ATK Speed: 85%"
            },
            {
              "level": 3,
              "text": "Damage reduction from long distance: 50%, ATK Speed: 90%"
            },
            {
              "level": 4,
              "text": "Damage reduction from long distance: 65%, ATK Speed: 95%"
            },
            {
              "level": 5,
              "text": "Damage reduction from long distance: 80%, ATK Speed:100%"
            }
          ],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "30"
                },
                {
                  "level": 2,
                  "value": "30"
                },
                {
                  "level": 3,
                  "value": "30"
                },
                {
                  "level": 4,
                  "value": "30"
                },
                {
                  "level": 5,
                  "value": "30"
                }
              ]
            }
          ],
          "spCost": "30",
          "castDelay": "1 second",
          "duration": "3 minutes; Until recast",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/257.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/257",
          "tree": {
            "idx": 24,
            "row": 3,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 251,
                "level": 1,
                "name": "Shield Boomerang",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "30"
              },
              {
                "label": "Cast Delay",
                "value": "1 second"
              },
              {
                "label": "Target",
                "value": "Caster Only"
              },
              {
                "label": "Duration",
                "value": "3 minutes; Until recast"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "30"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 480,
          "imageFile": "480.png",
          "name": "Rapid Smiting",
          "maxLevel": 5,
          "prerequisiteText": "Shield Boomerang 5",
          "group": "Active",
          "type": "Ranged Physical Attack",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Rapid_Smiting",
          "description": "Enable the chance of striking an\nenemy 5 times with a Shield while in battle.\nAccuracy Rate affects chance of success and the\nShield's weight and Upgrade status and caster's level affects the\namount of damage. Rapid Smiting requires Shield.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 500% , Accuracy Rate +20"
            },
            {
              "level": 2,
              "text": "ATK 700% , Accuracy Rate +20"
            },
            {
              "level": 3,
              "text": "ATK 900% , Accuracy Rate +20"
            },
            {
              "level": 4,
              "text": "ATK 1100%, Accuracy Rate +20"
            },
            {
              "level": 5,
              "text": "ATK 1300% , Accuracy Rate +20"
            }
          ],
          "cooldown": "0.5 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "28"
                },
                {
                  "level": 2,
                  "value": "31"
                },
                {
                  "level": 3,
                  "value": "34"
                },
                {
                  "level": 4,
                  "value": "37"
                },
                {
                  "level": 5,
                  "value": "40"
                }
              ]
            }
          ],
          "spCost": "25 + (Skill Level × 3)",
          "fixedCastTime": "0.2 seconds",
          "variableCastTime": "0.8 seconds",
          "castDelay": "1 second",
          "castRange": "varies cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/480.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/480",
          "tree": {
            "idx": 25,
            "row": 3,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 251,
                "level": 5,
                "name": "Shield Boomerang",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "25 + (Skill Level × 3)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0.2 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "0.8 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "1 second"
              },
              {
                "label": "Cooldown",
                "value": "0.5 seconds"
              },
              {
                "label": "Cast Range",
                "value": "varies cells"
              },
              {
                "label": "Target",
                "value": "1 Target"
              },
              {
                "label": "Damage",
                "value": "1,300% ATK"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  },
                  {
                    "id": "accuracy-rate",
                    "label": ", Accuracy Rate"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "accuracy-rate": "+20",
                      "sp-cost": "28"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "accuracy-rate": "+20",
                      "sp-cost": "31"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "accuracy-rate": "+20",
                      "sp-cost": "34"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "accuracy-rate": "+20",
                      "sp-cost": "37"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "accuracy-rate": "+20",
                      "sp-cost": "40"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [
            {
              "skillName": "Rapid Smiting",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/imperial-guard/rebalance_1.md",
              "section": "2.12",
              "notes": [
                "Increases damage while under Shield Shooting buff by adding damage bonus from Shield Mastery. (Based on Rapid Smiting level 5 and Shield Mastery level 10. Damage will be increased from 1650%Atk to 2000%Atk)."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "Shield Mastery. (Based on Rapid Smiting level 5 and Shield Mastery level 10. Damage will be increased from 1650%Atk (while under Shield Shooting buff by adding damage bonus)",
                  "after": "2000%Atk) (while under Shield Shooting buff by adding damage bonus)",
                  "scope": "",
                  "source": "Increases damage while under Shield Shooting buff by adding damage bonus from Shield Mastery. (Based on Rapid Smiting level 5 and Shield Mastery level 10. Damage will be increased from 1650%Atk to 2000%Atk)."
                }
              ]
            }
          ],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 28,
          "imageFile": "28.png",
          "name": "Heal",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "Recovery",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Heal",
          "description": "Restores HP of a single target. This skill is also affected by User's LV, total INT, MATK.\nVersus Undead property targets, inflicts Holy property damage equal to half the amount of the HP restored.",
          "levelDetails": [],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "0 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "13"
                },
                {
                  "level": 2,
                  "value": "16"
                },
                {
                  "level": 3,
                  "value": "19"
                },
                {
                  "level": 4,
                  "value": "22"
                },
                {
                  "level": 5,
                  "value": "25"
                },
                {
                  "level": 6,
                  "value": "28"
                },
                {
                  "level": 7,
                  "value": "31"
                },
                {
                  "level": 8,
                  "value": "34"
                },
                {
                  "level": 9,
                  "value": "37"
                },
                {
                  "level": 10,
                  "value": "40"
                }
              ]
            }
          ],
          "spCost": "10 + (Skill Level × 3)",
          "castRange": "9 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/28.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/28",
          "tree": {
            "idx": 28,
            "row": 4,
            "col": 0,
            "columns": 7,
            "requirements": [
              {
                "id": 23,
                "level": 5,
                "name": "Demon Bane",
                "visible": true
              },
              {
                "id": 248,
                "level": 10,
                "name": "Faith",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "10"
              },
              {
                "label": "SP Cost",
                "value": "10 + (Skill Level × 3)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.5 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0 seconds"
              },
              {
                "label": "Cast Range",
                "value": "9 cells"
              },
              {
                "label": "Target",
                "value": "1 Target"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "13"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "16"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "19"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "22"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "28"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "31"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "34"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "37"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "sp-cost": "40"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 255,
          "imageFile": "255.png",
          "name": "Sacrifice (Devotion)",
          "maxLevel": 5,
          "prerequisiteText": "Grand Cross 4, Reflect Shield 5",
          "group": "Active",
          "type": "Supportive",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Links to a single target to take all of the damage in its place.\nThe level of the target and the caster's level must not differ by more than 10. This skill does not deactivate until a player takes damage when out of range of the skill, or the duration of the skill expires.\nSince it takes damage instead, the cast does not break even if the connected target is attacked during casting.\nCrusaders cannot be targeted by this skill.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Duration : 30sec, Maximum Connections: 1person"
            },
            {
              "level": 2,
              "text": "Duration : 45sec, Maximum Connections: 2people"
            },
            {
              "level": 3,
              "text": "Duration : 60sec, Maximum Connections: 3people"
            },
            {
              "level": 4,
              "text": "Duration : 75sec, Maximum Connections: 4people"
            },
            {
              "level": 5,
              "text": "Duration : 90sec, Maximum Connections: 5people"
            }
          ],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "25"
                },
                {
                  "level": 2,
                  "value": "25"
                },
                {
                  "level": 3,
                  "value": "25"
                },
                {
                  "level": 4,
                  "value": "25"
                },
                {
                  "level": 5,
                  "value": "25"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/255.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/255",
          "tree": {
            "idx": 29,
            "row": 4,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 252,
                "level": 5,
                "name": "Shield Reflect",
                "visible": true
              },
              {
                "id": 254,
                "level": 4,
                "name": "Grand Cross",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "Target",
                "value": "1 Target"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  },
                  {
                    "id": "duration",
                    "label": "Duration"
                  },
                  {
                    "id": "effect",
                    "label": "Effect"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "duration": "30 seconds",
                      "effect": ", Ma x imum Connections: 1person",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "45 seconds",
                      "effect": ", Ma x imum Connections: 2people",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "60 seconds",
                      "effect": ", Ma x imum Connections: 3people",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "75 seconds",
                      "effect": ", Ma x imum Connections: 4people",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "90 seconds",
                      "effect": ", Ma x imum Connections: 5people",
                      "sp-cost": "25"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 369,
          "imageFile": "369.png",
          "name": "Battle Chant",
          "maxLevel": 10,
          "prerequisiteText": "Faith 8, Divine Protection 3, Demon Bane 5",
          "group": "Active",
          "type": "Supportive",
          "target": "Immediately",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Battle_Chant",
          "description": "Sing a hymn that will cause one\nout of 10 different negative status effects to\nenemies and will endow one out of 10 positive\nstatuses upon Party Members within this skill's\nrange. This skill is cancelled if the caster is\nmuted during the casting of Battle Chant.",
          "levelDetails": [],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "80"
                },
                {
                  "level": 2,
                  "value": "80"
                },
                {
                  "level": 3,
                  "value": "80"
                },
                {
                  "level": 4,
                  "value": "80"
                },
                {
                  "level": 5,
                  "value": "80"
                },
                {
                  "level": 6,
                  "value": "100"
                },
                {
                  "level": 7,
                  "value": "100"
                },
                {
                  "level": 8,
                  "value": "100"
                },
                {
                  "level": 9,
                  "value": "100"
                },
                {
                  "level": 10,
                  "value": "100"
                }
              ]
            }
          ],
          "spCost": "80/100",
          "duration": "60 seconds; Until recast",
          "areaOfEffect": "Cross-shaped",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/369.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/369",
          "tree": {
            "idx": 30,
            "row": 4,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 22,
                "level": 3,
                "name": "Divine Protection",
                "visible": true
              },
              {
                "id": 23,
                "level": 5,
                "name": "Demon Bane",
                "visible": true
              },
              {
                "id": 248,
                "level": 8,
                "name": "Faith",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "10"
              },
              {
                "label": "SP Cost",
                "value": "80/100"
              },
              {
                "label": "Target",
                "value": "Immediately"
              },
              {
                "label": "Area of Effect",
                "value": "Cross-shaped"
              },
              {
                "label": "Duration",
                "value": "60 seconds; Until recast"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "80"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "80"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "80"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "80"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "80"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "sp-cost": "100"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 256,
          "imageFile": "256.png",
          "name": "Providence",
          "maxLevel": 5,
          "prerequisiteText": "Divine Protection 5, Heal 5",
          "group": "Active",
          "type": "Buff",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Providence",
          "description": "Boosts resistance against Demon race monsters and Holy property damage.\nCrusaders cannot be targeted by this skill, including the player itself.",
          "levelDetails": [
            {
              "level": 1,
              "text": "resistance against Demon race: + 5%, Resistance to Sacred property: + 5%"
            },
            {
              "level": 2,
              "text": "resistance against Demon race: +10%, Resistance to Sacred property: +10%"
            },
            {
              "level": 3,
              "text": "resistance against Demon race: +15%, Resistance to Sacred property: +15%"
            },
            {
              "level": 4,
              "text": "resistance against Demon race: +20%, Resistance to Sacred property: +20%"
            },
            {
              "level": 5,
              "text": "resistance against Demon race: +25%, Resistance to Sacred property: +25%"
            }
          ],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "30"
                },
                {
                  "level": 2,
                  "value": "30"
                },
                {
                  "level": 3,
                  "value": "30"
                },
                {
                  "level": 4,
                  "value": "30"
                },
                {
                  "level": 5,
                  "value": "30"
                }
              ]
            }
          ],
          "spCost": "30",
          "castDelay": "3 seconds",
          "duration": "3 minutes",
          "castRange": "9 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/256.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/256",
          "tree": {
            "idx": 35,
            "row": 5,
            "col": 0,
            "columns": 7,
            "requirements": [
              {
                "id": 22,
                "level": 5,
                "name": "Divine Protection",
                "visible": true
              },
              {
                "id": 28,
                "level": 5,
                "name": "Heal",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "30"
              },
              {
                "label": "Cast Delay",
                "value": "3 seconds"
              },
              {
                "label": "Cast Range",
                "value": "9 cells"
              },
              {
                "label": "Target",
                "value": "1 Target"
              },
              {
                "label": "Duration",
                "value": "3 minutes"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  },
                  {
                    "id": "resistance-against-demon-race",
                    "label": "Resistance Against Demon Race:"
                  },
                  {
                    "id": "resistance-to-sacred-property",
                    "label": "Resistance To Sacred Property:"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "resistance-against-demon-race": "+ 5%",
                      "resistance-to-sacred-property": "+ 5%",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "resistance-against-demon-race": "+10%",
                      "resistance-to-sacred-property": "+10%",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "resistance-against-demon-race": "+15%",
                      "resistance-to-sacred-property": "+15%",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "resistance-against-demon-race": "+20%",
                      "resistance-to-sacred-property": "+20%",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "resistance-against-demon-race": "+25%",
                      "resistance-to-sacred-property": "+25%",
                      "sp-cost": "30"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 368,
          "imageFile": "368.png",
          "name": "Martyr's Reckoning",
          "maxLevel": 5,
          "prerequisiteText": "Endure 1, Sacrifice 3",
          "group": "Active",
          "type": "Supportive",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Martyr's_Reckoning",
          "description": "Change 5 physical attacks\nafter activating this skill into special attack.\nEach attack enhanced by Martyr's Reckoning will drain an\namount of HP equal to 9% of character's MaxHP.\nThis skill can make the caster killed.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Damage times 1"
            },
            {
              "level": 2,
              "text": "Damage*1.1"
            },
            {
              "level": 3,
              "text": "Damage*1.2"
            },
            {
              "level": 4,
              "text": "Damage*1.3"
            },
            {
              "level": 5,
              "text": "Damage*1.4"
            }
          ],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "100"
                },
                {
                  "level": 2,
                  "value": "100"
                },
                {
                  "level": 3,
                  "value": "100"
                },
                {
                  "level": 4,
                  "value": "100"
                },
                {
                  "level": 5,
                  "value": "100"
                }
              ]
            }
          ],
          "spCost": "100",
          "castDelay": "ASPD",
          "duration": "Until ne x t 5 attacks",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/368.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/368",
          "tree": {
            "idx": 36,
            "row": 5,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 8,
                "level": 1,
                "name": "Endure",
                "visible": false
              },
              {
                "id": 255,
                "level": 3,
                "name": "Sacrifice",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "100"
              },
              {
                "label": "Cast Delay",
                "value": "ASPD"
              },
              {
                "label": "Target",
                "value": "1 Target"
              },
              {
                "label": "Duration",
                "value": "Until ne x t 5 attacks"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  },
                  {
                    "id": "effect",
                    "label": "Effect"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Damage times 1",
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Damage*1.1",
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Damage*1.2",
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Damage*1.3",
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Damage*1.4",
                      "sp-cost": "100"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        }
      ]
    },
    {
      "id": "previous-3",
      "label": "Swordman",
      "pointLimit": 49,
      "tree": {
        "columns": 7,
        "rows": 3
      },
      "skills": [
        {
          "id": 1,
          "imageFile": "1.png",
          "name": "Basic Skill",
          "maxLevel": 9,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Basic_Skill",
          "description": "",
          "levelDetails": [
            {
              "level": 1,
              "text": "Enables Trading\nAllows the trading of items with other characters. Right click on a character to initiate."
            },
            {
              "level": 2,
              "text": "Enables Emotions\nAlt+(0~9) and Ctrl+(1,-,=.)\nAlt+L opens additional Emotion icons."
            },
            {
              "level": 3,
              "text": "Enables Sitting\nSitting doubles HP/SP Recovery Speed.\nPress the Insert key or type /sit."
            },
            {
              "level": 4,
              "text": "Enables Chat Room Creation\nAlt + C Opens a Chat Room or click the\nChat button in the Basic Information Window."
            },
            {
              "level": 5,
              "text": "Join a Party\nCharacter can join a party."
            },
            {
              "level": 6,
              "text": "Enables Use of Kafra Storage\nAllows use of Kafra Storage."
            },
            {
              "level": 7,
              "text": "Organize Party\nCreate a party by typing /organize ''[Party Name]''\nSet party options in the Party Window (Alt+Z)."
            },
            {
              "level": 9,
              "text": "Enables Change to First Job Class\nQualifies character for change from Novice to one\nof the First Job Classes."
            }
          ],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "0"
                },
                {
                  "level": 2,
                  "value": "0"
                },
                {
                  "level": 3,
                  "value": "0"
                },
                {
                  "level": 4,
                  "value": "0"
                },
                {
                  "level": 5,
                  "value": "0"
                },
                {
                  "level": 6,
                  "value": "0"
                },
                {
                  "level": 7,
                  "value": "0"
                },
                {
                  "level": 8,
                  "value": "0"
                },
                {
                  "level": 9,
                  "value": "0"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/1.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/1",
          "tree": {
            "idx": 0,
            "row": 0,
            "col": 0,
            "columns": 7,
            "requirements": []
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Passive Skill"
              },
              {
                "label": "Levels",
                "value": "9"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  },
                  {
                    "id": "effect",
                    "label": "Effect"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Enables Trading\nAllows the trading of items with other characters. Right click on a character to initiate",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Enables Emotions\nAlt+(0~9) and Ctrl+(1,-,=.)\nAlt+L opens additional Emotion icons",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Enables Sitting\nSitting doubles HP / SP Recovery Speed\nPress the Insert key or type / sit",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Enables Chat Room Creation\nAlt + C Opens a Chat Room or click the\nChat button in the Basic Information Window",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Join a Party\nCharacter can join a party",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "Enables Use of Kafra Storage\nAllows use of Kafra Storage",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "Organize Party\nCreate a party by typing / organize ''[Party Name]''\nSet party options in the Party Window (Alt+Z)",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "Enables Change to First Job Class\nQualifies character for change from Novice to one\nof the First Job Classes",
                      "sp-cost": "0"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2,
          "imageFile": "2.png",
          "name": "Sword Mastery",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Sword_Mastery",
          "description": "Increase damage with One Handed\nSword or Dagger Class Weapons.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Damage +4"
            },
            {
              "level": 2,
              "text": "Damage +8"
            },
            {
              "level": 3,
              "text": "Damage +12"
            },
            {
              "level": 4,
              "text": "Damage +16"
            },
            {
              "level": 5,
              "text": "Damage +20"
            },
            {
              "level": 6,
              "text": "Damage +24"
            },
            {
              "level": 7,
              "text": "Damage +28"
            },
            {
              "level": 8,
              "text": "Damage +32"
            },
            {
              "level": 9,
              "text": "Damage +36"
            },
            {
              "level": 10,
              "text": "Damage +40"
            }
          ],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "0"
                },
                {
                  "level": 2,
                  "value": "0"
                },
                {
                  "level": 3,
                  "value": "0"
                },
                {
                  "level": 4,
                  "value": "0"
                },
                {
                  "level": 5,
                  "value": "0"
                },
                {
                  "level": 6,
                  "value": "0"
                },
                {
                  "level": 7,
                  "value": "0"
                },
                {
                  "level": 8,
                  "value": "0"
                },
                {
                  "level": 9,
                  "value": "0"
                },
                {
                  "level": 10,
                  "value": "0"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2",
          "tree": {
            "idx": 1,
            "row": 0,
            "col": 1,
            "columns": 7,
            "requirements": []
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Passive Skill"
              },
              {
                "label": "Levels",
                "value": "10"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "sp-cost": "0"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 4,
          "imageFile": "4.png",
          "name": "Increase HP Recovery",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Increase_HP_Recovery",
          "description": "Enhance natural HP Recovery. Max\nHP affects how much HP restoration is increased.\nHP recovery happens every 10 seconds while standing.\nBut it doesn't work while walking or HP/SP regen disabled.",
          "levelDetails": [
            {
              "level": 1,
              "text": "(HP 5+0.2% of MaxHP)/10 sec"
            },
            {
              "level": 2,
              "text": "(HP 10+0.4% of MaxHP)/10 sec"
            },
            {
              "level": 3,
              "text": "(HP 15+0.6% of MaxHP)/10 sec"
            },
            {
              "level": 4,
              "text": "(HP 20+0.8% of MaxHP)/10 sec"
            },
            {
              "level": 5,
              "text": "(HP 25+1.0% of MaxHP)/10 sec"
            },
            {
              "level": 6,
              "text": "(HP 30+1.2% of MaxHP)/10 sec"
            },
            {
              "level": 7,
              "text": "(HP 35+1.4% of MaxHP)/10 sec"
            },
            {
              "level": 8,
              "text": "(HP 40+1.6% of MaxHP)/10 sec"
            },
            {
              "level": 9,
              "text": "(HP 45+1.8% of MaxHP)/10 sec"
            },
            {
              "level": 10,
              "text": "(HP 50+2.0% of MaxHP)/10 sec"
            }
          ],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "0"
                },
                {
                  "level": 2,
                  "value": "0"
                },
                {
                  "level": 3,
                  "value": "0"
                },
                {
                  "level": 4,
                  "value": "0"
                },
                {
                  "level": 5,
                  "value": "0"
                },
                {
                  "level": 6,
                  "value": "0"
                },
                {
                  "level": 7,
                  "value": "0"
                },
                {
                  "level": 8,
                  "value": "0"
                },
                {
                  "level": 9,
                  "value": "0"
                },
                {
                  "level": 10,
                  "value": "0"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/4.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/4",
          "tree": {
            "idx": 2,
            "row": 0,
            "col": 2,
            "columns": 7,
            "requirements": []
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Passive Skill"
              },
              {
                "label": "Levels",
                "value": "10"
              },
              {
                "label": "Pulse",
                "value": "10 seconds"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  },
                  {
                    "id": "duration",
                    "label": "Duration"
                  },
                  {
                    "id": "effect",
                    "label": "Effect"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "duration": "10 seconds",
                      "effect": "(HP 5+0.2% of Ma x HP)",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "10 seconds",
                      "effect": "(HP 10+0.4% of Ma x HP)",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "10 seconds",
                      "effect": "(HP 15+0.6% of Ma x HP)",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "10 seconds",
                      "effect": "(HP 20+0.8% of Ma x HP)",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "10 seconds",
                      "effect": "(HP 25+1.0% of Ma x HP)",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "duration": "10 seconds",
                      "effect": "(HP 30+1.2% of Ma x HP)",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "duration": "10 seconds",
                      "effect": "(HP 35+1.4% of Ma x HP)",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "duration": "10 seconds",
                      "effect": "(HP 40+1.6% of Ma x HP)",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "duration": "10 seconds",
                      "effect": "(HP 45+1.8% of Ma x HP)",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "duration": "10 seconds",
                      "effect": "(HP 50+2.0% of Ma x HP)",
                      "sp-cost": "0"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 5,
          "imageFile": "5.png",
          "name": "Bash",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Offensive",
          "type": "Physical Attack",
          "target": "1 Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Bash",
          "description": "Hit an enemy with crushing force.\nIf the Fatal Blow skill is learned, Bash will have\nan added Stun effect at levels 5 and higher.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 130%, Acurracy Bonus: 5%, SP Consumption: 8"
            },
            {
              "level": 2,
              "text": "ATK 160%, Acurracy Bonus:10%, SP Consumption: 8"
            },
            {
              "level": 3,
              "text": "ATK 190%, Acurracy Bonus:15%, SP Consumption: 8"
            },
            {
              "level": 4,
              "text": "ATK 220%, Acurracy Bonus:20%, SP Consumption: 8"
            },
            {
              "level": 5,
              "text": "ATK 250%, Acurracy Bonus:25%, SP Consumption: 8"
            },
            {
              "level": 6,
              "text": "ATK 280%, Acurracy Bonus:30%, SP Consumption:15"
            },
            {
              "level": 7,
              "text": "ATK 310%, Acurracy Bonus:35%, SP Consumption:15"
            },
            {
              "level": 8,
              "text": "ATK 340%, Acurracy Bonus:40%, SP Consumption:15"
            },
            {
              "level": 9,
              "text": "ATK 370%, Acurracy Bonus:45%, SP Consumption:15"
            },
            {
              "level": 10,
              "text": "ATK 400%, Acurracy Bonus:50%, SP Consumption:15"
            }
          ],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "8"
                },
                {
                  "level": 2,
                  "value": "8"
                },
                {
                  "level": 3,
                  "value": "8"
                },
                {
                  "level": 4,
                  "value": "8"
                },
                {
                  "level": 5,
                  "value": "8"
                },
                {
                  "level": 6,
                  "value": "15"
                },
                {
                  "level": 7,
                  "value": "15"
                },
                {
                  "level": 8,
                  "value": "15"
                },
                {
                  "level": 9,
                  "value": "15"
                },
                {
                  "level": 10,
                  "value": "15"
                }
              ]
            }
          ],
          "spCost": "8/15",
          "castDelay": "ASPD",
          "castRange": "Melee",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5",
          "tree": {
            "idx": 3,
            "row": 0,
            "col": 3,
            "columns": 7,
            "requirements": []
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Offensive Skill"
              },
              {
                "label": "Levels",
                "value": "10"
              },
              {
                "label": "SP Cost",
                "value": "8/15"
              },
              {
                "label": "Cast Delay",
                "value": "ASPD"
              },
              {
                "label": "Cast Range",
                "value": "Melee"
              },
              {
                "label": "Target",
                "value": "1 Enemy"
              },
              {
                "label": "Damage",
                "value": "400% ATK"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "8"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "8"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "8"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "8"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "8"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "sp-cost": "15"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 6,
          "imageFile": "6.png",
          "name": "Provoke",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "Debuff",
          "target": "1 Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Provoke",
          "description": "Enrage a single target to decrease player's defense\nbased on VIT or monster's physical defense\nat cost of increasing its Attack Strength.\nIneffective against the Undead and Boss monster.\nEffect of Provoke on Enemies by Skill's Level.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Enemy's ATK +5%, Enemy's DEF -10%"
            },
            {
              "level": 2,
              "text": "Enemy's ATK +8%, Enemy's DEF -15%"
            },
            {
              "level": 3,
              "text": "Enemy's ATK +11%, Enemy's DEF -20%"
            },
            {
              "level": 4,
              "text": "Enemy's ATK +14%, Enemy's DEF -25%"
            },
            {
              "level": 5,
              "text": "Enemy's ATK +17%, Enemy's DEF -30%"
            },
            {
              "level": 6,
              "text": "Enemy's ATK +20%, Enemy's DEF -35%"
            },
            {
              "level": 7,
              "text": "Enemy's ATK +23%, Enemy's DEF -40%"
            },
            {
              "level": 8,
              "text": "Enemy's ATK +26%, Enemy's DEF -45%"
            },
            {
              "level": 9,
              "text": "Enemy's ATK +29%, Enemy's DEF -50%"
            },
            {
              "level": 10,
              "text": "Enemy's ATK +32%, Enemy's DEF -55%"
            }
          ],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "4"
                },
                {
                  "level": 2,
                  "value": "5"
                },
                {
                  "level": 3,
                  "value": "6"
                },
                {
                  "level": 4,
                  "value": "7"
                },
                {
                  "level": 5,
                  "value": "8"
                },
                {
                  "level": 6,
                  "value": "9"
                },
                {
                  "level": 7,
                  "value": "10"
                },
                {
                  "level": 8,
                  "value": "11"
                },
                {
                  "level": 9,
                  "value": "12"
                },
                {
                  "level": 10,
                  "value": "13"
                }
              ]
            }
          ],
          "spCost": "(Skill Level + 3)",
          "castDelay": "ASPD",
          "duration": "30 seconds",
          "castRange": "9 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6",
          "tree": {
            "idx": 4,
            "row": 0,
            "col": 4,
            "columns": 7,
            "requirements": []
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "10"
              },
              {
                "label": "SP Cost",
                "value": "(Skill Level + 3)"
              },
              {
                "label": "Cast Delay",
                "value": "ASPD"
              },
              {
                "label": "Cast Range",
                "value": "9 cells"
              },
              {
                "label": "Target",
                "value": "1 Enemy"
              },
              {
                "label": "Duration",
                "value": "30 seconds"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  },
                  {
                    "id": "enemy-s-atk",
                    "label": "Enemy's Atk"
                  },
                  {
                    "id": "enemy-s-def",
                    "label": "Enemy's Def"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "enemy-s-atk": "+5%",
                      "enemy-s-def": "-10%",
                      "sp-cost": "4"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "enemy-s-atk": "+8%",
                      "enemy-s-def": "-15%",
                      "sp-cost": "5"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "enemy-s-atk": "+11%",
                      "enemy-s-def": "-20%",
                      "sp-cost": "6"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "enemy-s-atk": "+14%",
                      "enemy-s-def": "-25%",
                      "sp-cost": "7"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "enemy-s-atk": "+17%",
                      "enemy-s-def": "-30%",
                      "sp-cost": "8"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "enemy-s-atk": "+20%",
                      "enemy-s-def": "-35%",
                      "sp-cost": "9"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "enemy-s-atk": "+23%",
                      "enemy-s-def": "-40%",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "enemy-s-atk": "+26%",
                      "enemy-s-def": "-45%",
                      "sp-cost": "11"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "enemy-s-atk": "+29%",
                      "enemy-s-def": "-50%",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "enemy-s-atk": "+32%",
                      "enemy-s-def": "-55%",
                      "sp-cost": "13"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 146,
          "imageFile": "146.png",
          "name": "Berserk",
          "maxLevel": 1,
          "prerequisiteText": "Finish Quest",
          "group": "Passive",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Berserk",
          "description": "Empowered by rage, character\nenters condition that is equivalent to Level 10\nProvoke status when HP is reduced to less than\n25% of MaxHP. Provoked status lasts until\ncharacter HP is restored to more than 25% of\nMaxHP or if Provoke effect is nullified.",
          "levelDetails": [],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "1"
                }
              ]
            }
          ],
          "spCost": "1",
          "duration": "Until recast",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/146.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/146",
          "tree": {
            "idx": 5,
            "row": 0,
            "col": 5,
            "columns": 7,
            "requirements": []
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Passive Skill"
              },
              {
                "label": "Levels",
                "value": "1"
              },
              {
                "label": "SP Cost",
                "value": "1"
              },
              {
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "Duration",
                "value": "Until recast"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "1"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 144,
          "imageFile": "144.png",
          "name": "HP Recovery While Moving",
          "maxLevel": 1,
          "prerequisiteText": "Finish Quest",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/HP_Recovery_While_Moving",
          "description": "Enable natural recovery of HP\nwhile moving. Only 25% of the HP that is\nnaturally recovered while standing is restored\nduring movement. The Increase Recovery skill\ndoes not affect HP Recovery While Moving.",
          "levelDetails": [],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "0"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/144.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/144",
          "tree": {
            "idx": 6,
            "row": 0,
            "col": 6,
            "columns": 7,
            "requirements": []
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Passive Skill"
              },
              {
                "label": "Levels",
                "value": "1"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "0"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 142,
          "imageFile": "142.png",
          "name": "First Aid",
          "maxLevel": 1,
          "prerequisiteText": "Finish Quest",
          "group": "Supportive",
          "type": "",
          "target": "Player",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/First_Aid",
          "description": "Consume 3SP to restore 5HP.",
          "levelDetails": [],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "3"
                }
              ]
            }
          ],
          "spCost": "3",
          "castDelay": "ASPD",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/142.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/142",
          "tree": {
            "idx": 7,
            "row": 1,
            "col": 0,
            "columns": 7,
            "requirements": []
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Supportive Skill"
              },
              {
                "label": "Levels",
                "value": "1"
              },
              {
                "label": "SP Cost",
                "value": "3"
              },
              {
                "label": "Cast Delay",
                "value": "ASPD"
              },
              {
                "label": "Target",
                "value": "Player"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "3"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 3,
          "imageFile": "3.png",
          "name": "Two Handed Sword Mastery",
          "maxLevel": 10,
          "prerequisiteText": "Sword Mastery 1",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Two_Handed_Sword_Mastery",
          "description": "Increase damage with Two Handed Sword Class Weapons.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Damage +4"
            },
            {
              "level": 2,
              "text": "Damage +8"
            },
            {
              "level": 3,
              "text": "Damage +12"
            },
            {
              "level": 4,
              "text": "Damage +16"
            },
            {
              "level": 5,
              "text": "Damage +20"
            },
            {
              "level": 6,
              "text": "Damage +24"
            },
            {
              "level": 7,
              "text": "Damage +28"
            },
            {
              "level": 8,
              "text": "Damage +32"
            },
            {
              "level": 9,
              "text": "Damage +36"
            },
            {
              "level": 10,
              "text": "Damage +40"
            }
          ],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "0"
                },
                {
                  "level": 2,
                  "value": "0"
                },
                {
                  "level": 3,
                  "value": "0"
                },
                {
                  "level": 4,
                  "value": "0"
                },
                {
                  "level": 5,
                  "value": "0"
                },
                {
                  "level": 6,
                  "value": "0"
                },
                {
                  "level": 7,
                  "value": "0"
                },
                {
                  "level": 8,
                  "value": "0"
                },
                {
                  "level": 9,
                  "value": "0"
                },
                {
                  "level": 10,
                  "value": "0"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/3.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/3",
          "tree": {
            "idx": 8,
            "row": 1,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 2,
                "level": 1,
                "name": "Sword Mastery",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Passive Skill"
              },
              {
                "label": "Levels",
                "value": "10"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "sp-cost": "0"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 7,
          "imageFile": "7.png",
          "name": "Magnum Break",
          "maxLevel": 10,
          "prerequisiteText": "Bash 5",
          "group": "Active",
          "type": "Offensive, Buff",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Magnum_Break",
          "description": "Drain a small amount of the caster's\nHP to inflict Fire property area effect damage on\nenemies in the caster's vicinity and force them\nbackward. For 10 seconds after Magnum Break,\ncaster's weapon will receive a 20% Fire property\nstrength enhancement.\nDescription : SP 30 Consumption, inflict Fire property physical damage to all enemies in a 5x5 area around the user and push them 2 cells backwards.\nThis skill adds an additional 20% Fire property damage for ten seconds.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 120%"
            },
            {
              "level": 2,
              "text": "ATK 140%"
            },
            {
              "level": 3,
              "text": "ATK 160%"
            },
            {
              "level": 4,
              "text": "ATK 180%"
            },
            {
              "level": 5,
              "text": "ATK 200%"
            },
            {
              "level": 6,
              "text": "ATK 220%"
            },
            {
              "level": 7,
              "text": "ATK 240%"
            },
            {
              "level": 8,
              "text": "ATK 260%"
            },
            {
              "level": 9,
              "text": "ATK 280%"
            },
            {
              "level": 10,
              "text": "ATK 300%"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "2 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "30"
                },
                {
                  "level": 2,
                  "value": "30"
                },
                {
                  "level": 3,
                  "value": "30"
                },
                {
                  "level": 4,
                  "value": "30"
                },
                {
                  "level": 5,
                  "value": "30"
                },
                {
                  "level": 6,
                  "value": "30"
                },
                {
                  "level": 7,
                  "value": "30"
                },
                {
                  "level": 8,
                  "value": "30"
                },
                {
                  "level": 9,
                  "value": "30"
                },
                {
                  "level": 10,
                  "value": "30"
                }
              ]
            }
          ],
          "spCost": "30",
          "castRange": "Melee",
          "areaOfEffect": "5 x 5",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/7.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/7",
          "tree": {
            "idx": 10,
            "row": 1,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 5,
                "level": 5,
                "name": "Bash",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "10"
              },
              {
                "label": "SP Cost",
                "value": "30"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.5 seconds"
              },
              {
                "label": "Cooldown",
                "value": "2 seconds"
              },
              {
                "label": "Cast Range",
                "value": "Melee"
              },
              {
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "Area of Effect",
                "value": "5 x 5"
              },
              {
                "label": "Damage",
                "value": "300% ATK"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "sp-cost": "30"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 8,
          "imageFile": "8.png",
          "name": "Endure",
          "maxLevel": 10,
          "prerequisiteText": "Provoke 5",
          "group": "Active",
          "type": "Supportive",
          "target": "Caster Only",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Endure",
          "description": "Enables attacking and movement\nwhile receiving damage, but is automatically\ncanceled after skill duration elapses or after\ncaster is hit by 7 attacks. 10 sec cast delay.\nDisabled in War of Emperium.\nDuration and Mdef Bonus by Skill's Level\nDescription : Resist flinching from enemy melee attacks temporarily. Stiffness occurs when damage is caused by Magic and skill attacks.\nIf attacked more than seven times by an enemy in an Endure state, the Endure state will be released.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Duration 10 sec, MDEF +1"
            },
            {
              "level": 2,
              "text": "Duration 13 sec, MDEF +2"
            },
            {
              "level": 3,
              "text": "Duration 16 sec, MDEF +3"
            },
            {
              "level": 4,
              "text": "Duration 19 sec, MDEF +4"
            },
            {
              "level": 5,
              "text": "Duration 22 sec, MDEF +5"
            },
            {
              "level": 6,
              "text": "Duration 25 sec, MDEF +6"
            },
            {
              "level": 7,
              "text": "Duration 28 sec, MDEF +7"
            },
            {
              "level": 8,
              "text": "Duration 31 sec, MDEF +8"
            },
            {
              "level": 9,
              "text": "Duration 34 sec, MDEF +9"
            },
            {
              "level": 10,
              "text": "Duration 37 sec, MDEF +10"
            }
          ],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "10"
                },
                {
                  "level": 2,
                  "value": "10"
                },
                {
                  "level": 3,
                  "value": "10"
                },
                {
                  "level": 4,
                  "value": "10"
                },
                {
                  "level": 5,
                  "value": "10"
                },
                {
                  "level": 6,
                  "value": "10"
                },
                {
                  "level": 7,
                  "value": "10"
                },
                {
                  "level": 8,
                  "value": "10"
                },
                {
                  "level": 9,
                  "value": "10"
                },
                {
                  "level": 10,
                  "value": "10"
                }
              ]
            }
          ],
          "spCost": "10",
          "cooldown": "10 seconds",
          "duration": "[7 + (Skill Level × 3)] seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/8.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/8",
          "tree": {
            "idx": 11,
            "row": 1,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 6,
                "level": 5,
                "name": "Provoke",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "10"
              },
              {
                "label": "SP Cost",
                "value": "10"
              },
              {
                "label": "Cooldown",
                "value": "10 seconds"
              },
              {
                "label": "Target",
                "value": "Caster Only"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  },
                  {
                    "id": "duration",
                    "label": "Duration"
                  },
                  {
                    "id": "mdef",
                    "label": ", Mdef"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "duration": "10 seconds",
                      "mdef": "+1",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "13 seconds",
                      "mdef": "+2",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "16 seconds",
                      "mdef": "+3",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "19 seconds",
                      "mdef": "+4",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "22 seconds",
                      "mdef": "+5",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "duration": "25 seconds",
                      "mdef": "+6",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "duration": "28 seconds",
                      "mdef": "+7",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "duration": "31 seconds",
                      "mdef": "+8",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "duration": "34 seconds",
                      "mdef": "+9",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "duration": "37 seconds",
                      "mdef": "+10",
                      "sp-cost": "10"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 145,
          "imageFile": "145.png",
          "name": "Fatal Blow",
          "maxLevel": 1,
          "prerequisiteText": "Finish Quest",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Fatal_Blow",
          "description": "Cause the Stun effect on targeted\nenemy when using Level 5 Bash or higher.\nThe chance of inflicting Stun increases with Bash\nskill level and Base Level of the caster.",
          "levelDetails": [],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "0"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/145.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/145",
          "tree": {
            "idx": 12,
            "row": 1,
            "col": 5,
            "columns": 7,
            "requirements": []
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Passive Skill"
              },
              {
                "label": "Levels",
                "value": "1"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "0"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 143,
          "imageFile": "143.png",
          "name": "Play Dead",
          "maxLevel": 1,
          "prerequisiteText": "Finish Quest, Novice Only",
          "group": "Supportive",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Play_Dead",
          "description": "Feign death to avoid\nthe menace of nearby enemies.\nThe Play Dead status is cancelled by casting\nthis skill again or attacks from an enemy.",
          "levelDetails": [],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "5"
                }
              ]
            }
          ],
          "spCost": "1",
          "duration": "Indefinite",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/143.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/143",
          "tree": {
            "idx": 14,
            "row": 2,
            "col": 0,
            "columns": 7,
            "requirements": []
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Supportive Skill"
              },
              {
                "label": "Levels",
                "value": "1"
              },
              {
                "label": "SP Cost",
                "value": "1"
              },
              {
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "Duration",
                "value": "Indefinite"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "5"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        }
      ]
    }
  ],
  "skills": [
    {
      "id": 5259,
      "imageFile": "5259.png",
      "name": "Spear Sword Mastery",
      "maxLevel": 10,
      "prerequisiteText": "basic skill",
      "group": "Passive",
      "type": "",
      "target": "",
      "recoversAp": "",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Spear_Sword_Mastery",
      "description": "One-handed Swords, One-handed Spears, and Two-handed Spears increase HIT and Imperial Guard skill damage.",
      "levelDetails": [],
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "0"
            },
            {
              "level": 2,
              "value": "0"
            },
            {
              "level": 3,
              "value": "0"
            },
            {
              "level": 4,
              "value": "0"
            },
            {
              "level": 5,
              "value": "0"
            },
            {
              "level": 6,
              "value": "0"
            },
            {
              "level": 7,
              "value": "0"
            },
            {
              "level": 8,
              "value": "0"
            },
            {
              "level": 9,
              "value": "0"
            },
            {
              "level": 10,
              "value": "0"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5259.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5259",
      "tree": {
        "idx": 1,
        "row": 0,
        "col": 1,
        "columns": 7,
        "requirements": []
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Passive Skill"
          },
          {
            "label": "Levels",
            "value": "10"
          }
        ],
        "levelTables": [
          {
            "title": "Level Scaling",
            "columns": [
              {
                "id": "sp-cost",
                "label": "SP Cost"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "sp-cost": "0"
                }
              },
              {
                "level": 2,
                "values": {
                  "sp-cost": "0"
                }
              },
              {
                "level": 3,
                "values": {
                  "sp-cost": "0"
                }
              },
              {
                "level": 4,
                "values": {
                  "sp-cost": "0"
                }
              },
              {
                "level": 5,
                "values": {
                  "sp-cost": "0"
                }
              },
              {
                "level": 6,
                "values": {
                  "sp-cost": "0"
                }
              },
              {
                "level": 7,
                "values": {
                  "sp-cost": "0"
                }
              },
              {
                "level": 8,
                "values": {
                  "sp-cost": "0"
                }
              },
              {
                "level": 9,
                "values": {
                  "sp-cost": "0"
                }
              },
              {
                "level": 10,
                "values": {
                  "sp-cost": "0"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "balanceNotes": [],
      "api": {
        "status": "not-used",
        "entries": [],
        "selectedEntry": null
      }
    },
    {
      "id": 5258,
      "imageFile": "5258.png",
      "name": "Shield Mastery",
      "maxLevel": 10,
      "prerequisiteText": "basic skill",
      "group": "Passive",
      "type": "",
      "target": "",
      "recoversAp": "",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Shield_Mastery",
      "description": "Shields increase Physical Resistance and Imperial Guard skill damage.",
      "levelDetails": [],
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "0"
            },
            {
              "level": 2,
              "value": "0"
            },
            {
              "level": 3,
              "value": "0"
            },
            {
              "level": 4,
              "value": "0"
            },
            {
              "level": 5,
              "value": "0"
            },
            {
              "level": 6,
              "value": "0"
            },
            {
              "level": 7,
              "value": "0"
            },
            {
              "level": 8,
              "value": "0"
            },
            {
              "level": 9,
              "value": "0"
            },
            {
              "level": 10,
              "value": "0"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5258.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5258",
      "tree": {
        "idx": 4,
        "row": 0,
        "col": 4,
        "columns": 7,
        "requirements": []
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Passive Skill"
          },
          {
            "label": "Levels",
            "value": "10"
          }
        ],
        "levelTables": [
          {
            "title": "Level Scaling",
            "columns": [
              {
                "id": "sp-cost",
                "label": "SP Cost"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "sp-cost": "0"
                }
              },
              {
                "level": 2,
                "values": {
                  "sp-cost": "0"
                }
              },
              {
                "level": 3,
                "values": {
                  "sp-cost": "0"
                }
              },
              {
                "level": 4,
                "values": {
                  "sp-cost": "0"
                }
              },
              {
                "level": 5,
                "values": {
                  "sp-cost": "0"
                }
              },
              {
                "level": 6,
                "values": {
                  "sp-cost": "0"
                }
              },
              {
                "level": 7,
                "values": {
                  "sp-cost": "0"
                }
              },
              {
                "level": 8,
                "values": {
                  "sp-cost": "0"
                }
              },
              {
                "level": 9,
                "values": {
                  "sp-cost": "0"
                }
              },
              {
                "level": 10,
                "values": {
                  "sp-cost": "0"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "balanceNotes": [],
      "api": {
        "status": "not-used",
        "entries": [],
        "selectedEntry": null
      }
    },
    {
      "id": 5260,
      "imageFile": "5260.png",
      "name": "Attack Stance",
      "maxLevel": 5,
      "prerequisiteText": "Spear Sword Mastery Lv. 3",
      "group": "Active",
      "type": "Toggle",
      "target": "Self",
      "recoversAp": "",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Attack_Stance",
      "description": "Increase your P.ATK and S.MATK at the cost of your DEF.",
      "levelDetails": [
        {
          "level": 1,
          "text": "DEF - 40 / P.ATK,S.MATK + 3"
        },
        {
          "level": 2,
          "text": "DEF - 80 / P.ATK,S.MATK + 6"
        },
        {
          "level": 3,
          "text": "DEF - 120 / P.ATK,S.MATK + 9"
        },
        {
          "level": 4,
          "text": "DEF - 160 / P.ATK,S.MATK + 12"
        },
        {
          "level": 5,
          "text": "DEF - 200 / P.ATK,S.MATK + 15"
        }
      ],
      "fixedCastTime": "0.5 seconds",
      "variableCastTime": "1 second",
      "castDelay": "0 seconds",
      "cooldown": "0 seconds",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "50"
            },
            {
              "level": 2,
              "value": "50"
            },
            {
              "level": 3,
              "value": "50"
            },
            {
              "level": 4,
              "value": "50"
            },
            {
              "level": 5,
              "value": "50"
            }
          ]
        }
      ],
      "spCost": "50",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5260.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5260",
      "tree": {
        "idx": 8,
        "row": 1,
        "col": 1,
        "columns": 7,
        "requirements": [
          {
            "id": 5259,
            "level": 3,
            "name": "Spear Sword Mastery",
            "visible": true
          }
        ]
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Active Skill"
          },
          {
            "label": "Levels",
            "value": "5"
          },
          {
            "label": "SP Cost",
            "value": "50"
          },
          {
            "label": "Fixed Cast Time",
            "value": "0.5 seconds"
          },
          {
            "label": "Variable Cast Time",
            "value": "1 second"
          },
          {
            "label": "Cast Delay",
            "value": "0 seconds"
          },
          {
            "label": "Cooldown",
            "value": "0 seconds"
          },
          {
            "label": "Target",
            "value": "Self"
          }
        ],
        "levelTables": [
          {
            "title": "Level Scaling",
            "columns": [
              {
                "id": "p-atk",
                "label": "P.Atk"
              },
              {
                "id": "s-matk",
                "label": "S.Matk"
              },
              {
                "id": "sp-cost",
                "label": "SP Cost"
              },
              {
                "id": "def",
                "label": "Def"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "def": "- 40",
                  "p-atk": "+ 3",
                  "s-matk": "+ 3",
                  "sp-cost": "50"
                }
              },
              {
                "level": 2,
                "values": {
                  "def": "- 80",
                  "p-atk": "+ 6",
                  "s-matk": "+ 6",
                  "sp-cost": "50"
                }
              },
              {
                "level": 3,
                "values": {
                  "def": "- 120",
                  "p-atk": "+ 9",
                  "s-matk": "+ 9",
                  "sp-cost": "50"
                }
              },
              {
                "level": 4,
                "values": {
                  "def": "- 160",
                  "p-atk": "+ 12",
                  "s-matk": "+ 12",
                  "sp-cost": "50"
                }
              },
              {
                "level": 5,
                "values": {
                  "def": "- 200",
                  "p-atk": "+ 15",
                  "s-matk": "+ 15",
                  "sp-cost": "50"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "balanceNotes": [
        {
          "skillName": "Attack Stance",
          "versionId": "rebalance-1",
          "versionLabel": "Rebalance 1",
          "file": "rebalances/imperial-guard/rebalance_1.md",
          "section": "2.1",
          "notes": [
            "Changes bonus from Atk + 30 to P.Atk + 15 and S.Matk + 15 based on level 5."
          ],
          "specRows": [
            {
              "label": "Bonus",
              "before": "Atk + 30",
              "after": "P.Atk + 15 and S.Matk + 15",
              "scope": "Lv 5",
              "source": "Changes bonus from Atk + 30 to P.Atk + 15 and S.Matk + 15 based on level 5."
            }
          ]
        },
        {
          "skillName": "Attack Stance",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/imperial-guard/rebalance_4.md",
          "section": "7.1",
          "notes": [
            "Reduces fixed casting time from 1 second to 0.5 seconds.",
            "Removes 1 second variable casting time.",
            "No longer be removed by Dispell or Clearance."
          ],
          "specRows": [
            {
              "label": "Fixed Casting Time",
              "before": "1 second",
              "after": "0.5 seconds",
              "scope": "",
              "source": "Reduces fixed casting time from 1 second to 0.5 seconds."
            },
            {
              "label": "1 Second Variable Casting Time",
              "before": "1 second variable casting time",
              "after": "Removed",
              "scope": "",
              "source": "Removes 1 second variable casting time."
            }
          ]
        }
      ],
      "api": {
        "status": "not-used",
        "entries": [],
        "selectedEntry": null
      }
    },
    {
      "id": 6505,
      "imageFile": "6505.png",
      "name": "Imperial Pressure",
      "maxLevel": 5,
      "prerequisiteText": "Spear & Sword Mastery level 7, Guard Stance level 3",
      "group": "Active",
      "type": "Magic",
      "target": "Single target",
      "recoversAp": "2",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Imperial_Pressure",
      "description": "Crushes the target with the power of sincere faith.\nInflicts neutral property magical damage to the target and surrounding enemies around the target.\nIf Guard Stance is active, change the skill property to holy.\nDeals additional damage depends on user's base level, SPL and level of Spear & Sword Mastery user learned.",
      "levelDetails": [
        {
          "level": 1,
          "text": "(7450 + (Spear & Sword Mastery level x 50))% Matk / area of effect : 5 x 5 cells."
        },
        {
          "level": 2,
          "text": "(9300 + (Spear & Sword Mastery level x 50))% Matk / area of effect : 5 x 5 cells."
        },
        {
          "level": 3,
          "text": "(11150 + (Spear & Sword Mastery level x 50))% Matk / area of effect : 7 x 7 cells."
        },
        {
          "level": 4,
          "text": "(13000 + (Spear & Sword Mastery level x 50))% Matk / area of effect : 7 x 7 cells."
        },
        {
          "level": 5,
          "text": "(14850 + (Spear & Sword Mastery level x 50))% Matk / area of effect : 9 x 9 cells."
        }
      ],
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "2 seconds",
      "castDelay": "1 second",
      "cooldown": "0.45 seconds",
      "levelExtras": [],
      "spCost": "85 + (4 × Skill Level)",
      "castRange": "Magic",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/6505.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6505",
      "tree": {
        "idx": 10,
        "row": 1,
        "col": 3,
        "columns": 7,
        "requirements": [
          {
            "id": 5255,
            "level": 3,
            "name": "Guard Stance",
            "visible": true
          },
          {
            "id": 5259,
            "level": 7,
            "name": "Spear Sword Mastery",
            "visible": true
          }
        ]
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Active Skill"
          },
          {
            "label": "Levels",
            "value": "5"
          },
          {
            "label": "SP Cost",
            "value": "85 + (4 × Skill Level)"
          },
          {
            "label": "Fixed Cast Time",
            "value": "1.5 seconds"
          },
          {
            "label": "Variable Cast Time",
            "value": "2 seconds"
          },
          {
            "label": "Cast Delay",
            "value": "1 second"
          },
          {
            "label": "Cooldown",
            "value": "0.45 seconds"
          },
          {
            "label": "Cast Range",
            "value": "Magic"
          },
          {
            "label": "Target",
            "value": "Single target"
          },
          {
            "label": "AP Generated",
            "value": "2"
          },
          {
            "label": "Property",
            "value": "neutral property magical damage"
          },
          {
            "label": "Damage",
            "value": "(14,850 + (Spear & Sword Mastery level x 50))% MATK"
          }
        ],
        "levelTables": [
          {
            "title": "Level Scaling",
            "columns": [
              {
                "id": "area-of-effect",
                "label": "Area of Effect"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "area-of-effect": "5x5"
                }
              },
              {
                "level": 2,
                "values": {
                  "area-of-effect": "5x5"
                }
              },
              {
                "level": 3,
                "values": {
                  "area-of-effect": "7x7"
                }
              },
              {
                "level": 4,
                "values": {
                  "area-of-effect": "7x7"
                }
              },
              {
                "level": 5,
                "values": {
                  "area-of-effect": "9x9"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "balanceNotes": [
        {
          "skillName": "Imperial Pressure",
          "versionId": "rebalance-5",
          "versionLabel": "Rebalance 5",
          "file": "rebalances/imperial-guard/added_skills.md",
          "section": "Added skill",
          "notes": [
            "Added as a new skill in Rebalance 5."
          ],
          "specRows": [],
          "added": true
        }
      ],
      "api": {
        "status": "not-used",
        "entries": [],
        "selectedEntry": null
      }
    },
    {
      "id": 5255,
      "imageFile": "5255.png",
      "name": "Guard Stance",
      "maxLevel": 5,
      "prerequisiteText": "Shield Mastery Lv. 3",
      "group": "Active",
      "type": "Toggle",
      "target": "Self",
      "recoversAp": "",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Guard_Stance",
      "description": "A Shield skill.\nIncrease your equipment's DEF at the cost of its ATK.",
      "levelDetails": [],
      "fixedCastTime": "0.5 seconds",
      "variableCastTime": "1 second",
      "castDelay": "0 seconds",
      "cooldown": "0 seconds",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "50"
            },
            {
              "level": 2,
              "value": "50"
            },
            {
              "level": 3,
              "value": "50"
            },
            {
              "level": 4,
              "value": "50"
            },
            {
              "level": 5,
              "value": "50"
            }
          ]
        }
      ],
      "spCost": "50",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5255.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5255",
      "tree": {
        "idx": 11,
        "row": 1,
        "col": 4,
        "columns": 7,
        "requirements": [
          {
            "id": 5258,
            "level": 3,
            "name": "Shield Mastery",
            "visible": true
          }
        ]
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Active Skill"
          },
          {
            "label": "Levels",
            "value": "5"
          },
          {
            "label": "SP Cost",
            "value": "50"
          },
          {
            "label": "Fixed Cast Time",
            "value": "0.5 seconds"
          },
          {
            "label": "Variable Cast Time",
            "value": "1 second"
          },
          {
            "label": "Cast Delay",
            "value": "0 seconds"
          },
          {
            "label": "Cooldown",
            "value": "0 seconds"
          },
          {
            "label": "Target",
            "value": "Self"
          }
        ],
        "levelTables": [
          {
            "title": "Level Scaling",
            "columns": [
              {
                "id": "sp-cost",
                "label": "SP Cost"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "sp-cost": "50"
                }
              },
              {
                "level": 2,
                "values": {
                  "sp-cost": "50"
                }
              },
              {
                "level": 3,
                "values": {
                  "sp-cost": "50"
                }
              },
              {
                "level": 4,
                "values": {
                  "sp-cost": "50"
                }
              },
              {
                "level": 5,
                "values": {
                  "sp-cost": "50"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "balanceNotes": [
        {
          "skillName": "Guard Stance",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/imperial-guard/rebalance_4.md",
          "section": "7.2",
          "notes": [
            "Reduces fixed casting time from 1 second to 0.5 seconds.",
            "Removes 1 second variable casting time.",
            "No longer be removed by Dispell or Clearance."
          ],
          "specRows": [
            {
              "label": "Fixed Casting Time",
              "before": "1 second",
              "after": "0.5 seconds",
              "scope": "",
              "source": "Reduces fixed casting time from 1 second to 0.5 seconds."
            },
            {
              "label": "1 Second Variable Casting Time",
              "before": "1 second variable casting time",
              "after": "Removed",
              "scope": "",
              "source": "Removes 1 second variable casting time."
            }
          ]
        }
      ],
      "api": {
        "status": "not-used",
        "entries": [],
        "selectedEntry": null
      }
    },
    {
      "id": 5267,
      "imageFile": "5267.png",
      "name": "Cross Rain",
      "maxLevel": 10,
      "prerequisiteText": "Shield Mastery 1",
      "group": "Active",
      "type": "Magic",
      "target": "1 cell ground target",
      "recoversAp": "4",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Cross_Rain",
      "description": "Summons the sacred area on the ground to deals holy property magical damage every 0.3 seconds for 2.4 seconds.\nIncreases skill damage if the user uses Holy Shield.\nDeals additional damage depends on user's base level, SPL and level of Spear & Sword Mastery the user learned.",
      "levelDetails": [
        {
          "level": 1,
          "text": "MATK 320+(Spear & Sword Mastery Level x10)%\n/ 450+(Spear & Sword Mastery Level x15)%(Holy Shield)/Area of Effect 3x3 Cells"
        },
        {
          "level": 2,
          "text": "MATK 640+(Spear & Sword Mastery Level x20)%\n/ 900+(Spear & Sword Mastery Level x30)%(Holy Shield)/Area of Effect 3x3 Cells"
        },
        {
          "level": 3,
          "text": "MATK 960+(Spear & Sword Mastery Level x30)%\n/ 1350+(Spear & Sword Mastery Level x45)%(Holy Shield)/Area of Effect 3x3 Cells"
        },
        {
          "level": 4,
          "text": "MATK 1280+(Spear & Sword Mastery Level x40)%\n/ 1800+(Spear & Sword Mastery Level x60)%(Holy Shield)/Area of Effect 5x5 Cells"
        },
        {
          "level": 5,
          "text": "MATK 1600+(Spear & Sword Mastery Level x50)%\n/ 2250+(Spear & Sword Mastery Level x75)%(Holy Shield)/Area of Effect 5x5 Cells"
        },
        {
          "level": 6,
          "text": "MATK 1920+(Spear & Sword Mastery Level x60)%\n/ 2700+(Spear & Sword Mastery Level x90)%(Holy Shield)/Area of Effect 5x5 Cells"
        },
        {
          "level": 7,
          "text": "MATK 2240+(Spear & Sword Mastery Level x70)%\n/ 3150+(Spear & Sword Mastery Level x105)%(Holy Shield)/Area of Effect 7x7 Cells"
        },
        {
          "level": 8,
          "text": "MATK 2560+(Spear & Sword Mastery Level x80)%\n/ 3600+(Spear & Sword Mastery Level x120)%(Holy Shield)/Area of Effect 7x7 Cells"
        },
        {
          "level": 9,
          "text": "MATK 2880+(Spear & Sword Mastery Level x90)%\n/ 4050+(Spear & Sword Mastery Level x135)%(Holy Shield)/Area of Effect 7x7 Cells"
        },
        {
          "level": 10,
          "text": "MATK 3200+(Spear & Sword Mastery Level x100)%\n/ 4500+(Spear & Sword Mastery Level x150)%(Holy Shield)/Area of Effect 9x9 Cells"
        }
      ],
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "4 seconds",
      "castDelay": "0.15 seconds",
      "cooldown": "2.4 seconds",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "67"
            },
            {
              "level": 2,
              "value": "70"
            },
            {
              "level": 3,
              "value": "73"
            },
            {
              "level": 4,
              "value": "76"
            },
            {
              "level": 5,
              "value": "79"
            },
            {
              "level": 6,
              "value": "82"
            },
            {
              "level": 7,
              "value": "85"
            },
            {
              "level": 8,
              "value": "88"
            },
            {
              "level": 9,
              "value": "91"
            },
            {
              "level": 10,
              "value": "94"
            }
          ]
        }
      ],
      "spCost": "46 + (4 x Skill Level)",
      "areaOfEffect": "3 x 3 ~ 9 x 9",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5267.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5267",
      "tree": {
        "idx": 12,
        "row": 1,
        "col": 5,
        "columns": 7,
        "requirements": [
          {
            "id": 5258,
            "level": 1,
            "name": "Shield Mastery",
            "visible": true
          }
        ]
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Active Skill"
          },
          {
            "label": "Levels",
            "value": "10"
          },
          {
            "label": "SP Cost",
            "value": "46 + (4 x Skill Level)"
          },
          {
            "label": "Fixed Cast Time",
            "value": "1.5 seconds"
          },
          {
            "label": "Variable Cast Time",
            "value": "4 seconds"
          },
          {
            "label": "Cast Delay",
            "value": "0.15 seconds"
          },
          {
            "label": "Cooldown",
            "value": "2.4 seconds"
          },
          {
            "label": "Target",
            "value": "1 cell ground target"
          },
          {
            "label": "AP Generated",
            "value": "4"
          },
          {
            "label": "Pulse",
            "value": "0.3 seconds"
          },
          {
            "label": "Damage",
            "value": "(3,200 + (Spear & Sword Mastery Level x 100))% MATK"
          }
        ],
        "levelTables": [
          {
            "title": "Level Scaling",
            "columns": [
              {
                "id": "sp-cost",
                "label": "SP Cost"
              },
              {
                "id": "area-of-effect",
                "label": "Area of Effect"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "area-of-effect": "3x3",
                  "sp-cost": "67"
                }
              },
              {
                "level": 2,
                "values": {
                  "area-of-effect": "3x3",
                  "sp-cost": "70"
                }
              },
              {
                "level": 3,
                "values": {
                  "area-of-effect": "3x3",
                  "sp-cost": "73"
                }
              },
              {
                "level": 4,
                "values": {
                  "area-of-effect": "5x5",
                  "sp-cost": "76"
                }
              },
              {
                "level": 5,
                "values": {
                  "area-of-effect": "5x5",
                  "sp-cost": "79"
                }
              },
              {
                "level": 6,
                "values": {
                  "area-of-effect": "5x5",
                  "sp-cost": "82"
                }
              },
              {
                "level": 7,
                "values": {
                  "area-of-effect": "7x7",
                  "sp-cost": "85"
                }
              },
              {
                "level": 8,
                "values": {
                  "area-of-effect": "7x7",
                  "sp-cost": "88"
                }
              },
              {
                "level": 9,
                "values": {
                  "area-of-effect": "7x7",
                  "sp-cost": "91"
                }
              },
              {
                "level": 10,
                "values": {
                  "area-of-effect": "9x9",
                  "sp-cost": "94"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "balanceNotes": [
        {
          "skillName": "Cross Rain",
          "versionId": "rebalance-1",
          "versionLabel": "Rebalance 1",
          "file": "rebalances/imperial-guard/rebalance_1.md",
          "section": "2.5",
          "notes": [
            "Reduces fixed casting time from 2 seconds to 1.5 seconds based on level 10.",
            "Reduces delay after skill from 1 second to 0.5 seconds based on level 10.",
            "Increases damage (includes Spear & Sword Mastery level 10 bonus) from 400%Matk to 2000%Matk, and 600%Matk to 3500%Matk while using Holy Shield."
          ],
          "specRows": [
            {
              "label": "Fixed Casting Time",
              "before": "2 seconds",
              "after": "1.5 seconds",
              "scope": "Lv 10",
              "source": "Reduces fixed casting time from 2 seconds to 1.5 seconds based on level 10."
            },
            {
              "label": "Cast Delay",
              "before": "1 second",
              "after": "0.5 seconds",
              "scope": "Lv 10",
              "source": "Reduces delay after skill from 1 second to 0.5 seconds based on level 10."
            },
            {
              "label": "Damage",
              "before": "400%Matk (includes Spear & Sword Mastery level 10 bonus)",
              "after": "2000%Matk, and 600%Matk to 3500%Matk while using Holy Shield (includes Spear & Sword Mastery level 10 bonus)",
              "scope": "",
              "source": "Increases damage (includes Spear & Sword Mastery level 10 bonus) from 400%Matk to 2000%Matk, and 600%Matk to 3500%Matk while using Holy Shield."
            }
          ]
        },
        {
          "skillName": "Cross Rain",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/imperial-guard/rebalance_2.md",
          "section": "2.3",
          "notes": [
            "Reduces cooldown from 5 seconds to 4.5 seconds.",
            "Reduces delay after skill from 0.5 seconds to 0.15 seconds.",
            "Increases SP consumption from 86 to 94 based on level 10.",
            "Increases AP recovery rate from 5 to 7.",
            "Increases damage from 2000%/3500%(Holy Shield)Matk to 3700%/5500%(Holy Shield)Matk per hit based on level 10 (Spear & Sword Mastery level 10)."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "5 seconds",
              "after": "4.5 seconds",
              "scope": "",
              "source": "Reduces cooldown from 5 seconds to 4.5 seconds."
            },
            {
              "label": "Cast Delay",
              "before": "0.5 seconds",
              "after": "0.15 seconds",
              "scope": "",
              "source": "Reduces delay after skill from 0.5 seconds to 0.15 seconds."
            },
            {
              "label": "SP Cost",
              "before": "86",
              "after": "94",
              "scope": "Lv 10",
              "source": "Increases SP consumption from 86 to 94 based on level 10."
            },
            {
              "label": "AP Generated",
              "before": "5",
              "after": "7",
              "scope": "",
              "source": "Increases AP recovery rate from 5 to 7."
            },
            {
              "label": "Damage",
              "before": "2000%/3500%(Holy Shield)Matk",
              "after": "3700%/5500%(Holy Shield)Matk per hit",
              "scope": "Lv 10 (Spear & Sword Mastery level 10)",
              "source": "Increases damage from 2000%/3500%(Holy Shield)Matk to 3700%/5500%(Holy Shield)Matk per hit based on level 10 (Spear & Sword Mastery level 10)."
            }
          ]
        },
        {
          "skillName": "Cross Rain",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/imperial-guard/rebalance_3.md",
          "section": "7.3",
          "notes": [
            "Reduces skill cooldown from 4.5 seconds to 2.4 seconds.",
            "Reduces skill duration from 4.5 seconds to 2.4 seconds based on level 10.",
            "Increases factor weight of Spear & Sword Mastery skill level in skill formula from 50/100 (Holy Shield) to 100/150 (Holy Shield) based on level 10.",
            "Increases factor weight of SPL in skill formula from 5 to 7.",
            "Reduces AP recovery rate from 7 to 4."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "4.5 seconds",
              "after": "2.4 seconds",
              "scope": "",
              "source": "Reduces skill cooldown from 4.5 seconds to 2.4 seconds."
            },
            {
              "label": "Skill Duration",
              "before": "4.5 seconds",
              "after": "2.4 seconds",
              "scope": "Lv 10",
              "source": "Reduces skill duration from 4.5 seconds to 2.4 seconds based on level 10."
            },
            {
              "label": "Factor Weight Of Spear & Sword Mastery Skill Level In Skill Formula",
              "before": "50/100 (Holy Shield)",
              "after": "100/150 (Holy Shield)",
              "scope": "Lv 10",
              "source": "Increases factor weight of Spear & Sword Mastery skill level in skill formula from 50/100 (Holy Shield) to 100/150 (Holy Shield) based on level 10."
            },
            {
              "label": "Factor Weight Of Spl In Skill Formula",
              "before": "5",
              "after": "7",
              "scope": "",
              "source": "Increases factor weight of SPL in skill formula from 5 to 7."
            },
            {
              "label": "AP Generated",
              "before": "7",
              "after": "4",
              "scope": "",
              "source": "Reduces AP recovery rate from 7 to 4."
            }
          ]
        },
        {
          "skillName": "Cross Rain",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/imperial-guard/rebalance_4.md",
          "section": "7.4",
          "notes": [
            "Increases AP recovery rate from 4 to 6.",
            "Increases base damage from 3200+(Spear & Sword Mastery skill level x 100)%/4500+(Spear & Sword Mastery skill level x 150)%(Holy Shield)Matk to 4500+(Spear & Sword Mastery skill level x 100)%/6500+(Spear & Sword Mastery skill level x 150)%(Holy Shield)Matk per hit based on level 10."
          ],
          "specRows": [
            {
              "label": "AP Generated",
              "before": "4",
              "after": "6",
              "scope": "",
              "source": "Increases AP recovery rate from 4 to 6."
            },
            {
              "label": "Damage",
              "before": "3200+(Spear & Sword Mastery skill level x 100)%/4500+(Spear & Sword Mastery skill level x 150)%(Holy Shield)Matk",
              "after": "4500+(Spear & Sword Mastery skill level x 100)%/6500+(Spear & Sword Mastery skill level x 150)%(Holy Shield)Matk per hit",
              "scope": "Lv 10",
              "source": "Increases base damage from 3200+(Spear & Sword Mastery skill level x 100)%/4500+(Spear & Sword Mastery skill level x 150)%(Holy Shield)Matk to 4500+(Spear & Sword Mastery skill level x 100)%/6500+(Spear & Sword Mastery skill level x 150)%(Holy Shield)Matk per hit based on level 10."
            }
          ]
        }
      ],
      "api": {
        "status": "not-used",
        "entries": [],
        "selectedEntry": null
      }
    },
    {
      "id": 5266,
      "imageFile": "5266.png",
      "name": "Overslash",
      "maxLevel": 10,
      "prerequisiteText": "Attack Stance 3",
      "group": "Active",
      "type": "Melee Physical",
      "target": "Single Target",
      "recoversAp": "3",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Overslash",
      "description": "Can only be used while using Attack Stance.\nDeals melee physical damage to the target and surrounding enemies within 7 x 7 cells around the target.\nThe number of attack is increased according to the number of surrounding enemies with range.\n(1 enemy: 3 hits / 2-3 enemies: 5 hits / 4 enemies or more: 7 hits)\nDamage is additionally increased depending on the user's base level and POW.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK Per Hit 160\n+ (Spear & Sword Mastery Level x25) %"
        },
        {
          "level": 2,
          "text": "ATK Per Hit 320\n+ (Spear & Sword Mastery Level x50) %"
        },
        {
          "level": 3,
          "text": "ATK Per Hit 480\n+ (Spear & Sword Mastery Level x75) %"
        },
        {
          "level": 4,
          "text": "ATK Per Hit 640\n+ (Spear & Sword Mastery Level x100) %"
        },
        {
          "level": 5,
          "text": "ATK Per Hit 800\n+ (Spear & Sword Mastery Level x125) %"
        },
        {
          "level": 6,
          "text": "ATK Per Hit 960\n+ (Spear & Sword Mastery Level x150) %"
        },
        {
          "level": 7,
          "text": "ATK Per Hit 1120\n+ (Spear & Sword Mastery Level x175) %"
        },
        {
          "level": 8,
          "text": "ATK Per Hit 1280\n+ (Spear & Sword Mastery Level x200) %"
        },
        {
          "level": 9,
          "text": "ATK Per Hit 1440\n+ (Spear & Sword Mastery Level x225) %"
        },
        {
          "level": 10,
          "text": "ATK Per Hit 1600\n+ (Spear & Sword Mastery Level x250) %"
        }
      ],
      "fixedCastTime": "0.5 seconds",
      "variableCastTime": "0 seconds",
      "castDelay": "0.5 seconds",
      "cooldown": "0.7 seconds",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "38"
            },
            {
              "level": 2,
              "value": "41"
            },
            {
              "level": 3,
              "value": "44"
            },
            {
              "level": 4,
              "value": "47"
            },
            {
              "level": 5,
              "value": "50"
            },
            {
              "level": 6,
              "value": "53"
            },
            {
              "level": 7,
              "value": "56"
            },
            {
              "level": 8,
              "value": "59"
            },
            {
              "level": 9,
              "value": "62"
            },
            {
              "level": 10,
              "value": "65"
            }
          ]
        }
      ],
      "spCost": "38 + (3 × Skill Level)",
      "castRange": "Melee",
      "areaOfEffect": "7 x 7",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5266.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5266",
      "tree": {
        "idx": 15,
        "row": 2,
        "col": 1,
        "columns": 7,
        "requirements": [
          {
            "id": 5260,
            "level": 3,
            "name": "Attack Stance",
            "visible": true
          }
        ]
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Active Skill"
          },
          {
            "label": "Levels",
            "value": "10"
          },
          {
            "label": "SP Cost",
            "value": "38 + (3 × Skill Level)"
          },
          {
            "label": "Fixed Cast Time",
            "value": "0.5 seconds"
          },
          {
            "label": "Variable Cast Time",
            "value": "0 seconds"
          },
          {
            "label": "Cast Delay",
            "value": "0.5 seconds"
          },
          {
            "label": "Cooldown",
            "value": "0.7 seconds"
          },
          {
            "label": "Cast Range",
            "value": "Melee"
          },
          {
            "label": "Target",
            "value": "Single Target"
          },
          {
            "label": "Area of Effect",
            "value": "7 x 7"
          },
          {
            "label": "AP Generated",
            "value": "3"
          }
        ],
        "levelTables": [
          {
            "title": "Level Scaling",
            "columns": [
              {
                "id": "sp-cost",
                "label": "SP Cost"
              },
              {
                "id": "effect",
                "label": "Effect"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "effect": "ATK Per Hit 160\n+ (Spear & Sword Mastery Level x 25)%",
                  "sp-cost": "38"
                }
              },
              {
                "level": 2,
                "values": {
                  "effect": "ATK Per Hit 320\n+ (Spear & Sword Mastery Level x 50)%",
                  "sp-cost": "41"
                }
              },
              {
                "level": 3,
                "values": {
                  "effect": "ATK Per Hit 480\n+ (Spear & Sword Mastery Level x 75)%",
                  "sp-cost": "44"
                }
              },
              {
                "level": 4,
                "values": {
                  "effect": "ATK Per Hit 640\n+ (Spear & Sword Mastery Level x 100)%",
                  "sp-cost": "47"
                }
              },
              {
                "level": 5,
                "values": {
                  "effect": "ATK Per Hit 800\n+ (Spear & Sword Mastery Level x 125)%",
                  "sp-cost": "50"
                }
              },
              {
                "level": 6,
                "values": {
                  "effect": "ATK Per Hit 960\n+ (Spear & Sword Mastery Level x 150)%",
                  "sp-cost": "53"
                }
              },
              {
                "level": 7,
                "values": {
                  "effect": "ATK Per Hit 1120\n+ (Spear & Sword Mastery Level x 175)%",
                  "sp-cost": "56"
                }
              },
              {
                "level": 8,
                "values": {
                  "effect": "ATK Per Hit 1280\n+ (Spear & Sword Mastery Level x 200)%",
                  "sp-cost": "59"
                }
              },
              {
                "level": 9,
                "values": {
                  "effect": "ATK Per Hit 1440\n+ (Spear & Sword Mastery Level x 225)%",
                  "sp-cost": "62"
                }
              },
              {
                "level": 10,
                "values": {
                  "effect": "ATK Per Hit 1600\n+ (Spear & Sword Mastery Level x 250)%",
                  "sp-cost": "65"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "balanceNotes": [
        {
          "skillName": "Overslash",
          "versionId": "rebalance-1",
          "versionLabel": "Rebalance 1",
          "file": "rebalances/imperial-guard/rebalance_1.md",
          "section": "2.3",
          "notes": [
            "Reduces fixed casting time from 1 second to 0.5 seconds based on level 10.",
            "Reduces cooldown from 3 seconds to 1 second based on level 10.",
            "Reduces AP recovery rate from 3 to 2.",
            "Increases cast range from 1 cell to 3 cells.",
            "Increases maximum number of attack according to the number of enemies around the target from 5 hits to 7 hits."
          ],
          "specRows": [
            {
              "label": "Fixed Casting Time",
              "before": "1 second",
              "after": "0.5 seconds",
              "scope": "Lv 10",
              "source": "Reduces fixed casting time from 1 second to 0.5 seconds based on level 10."
            },
            {
              "label": "Cooldown",
              "before": "3 seconds",
              "after": "1 second",
              "scope": "Lv 10",
              "source": "Reduces cooldown from 3 seconds to 1 second based on level 10."
            },
            {
              "label": "AP Generated",
              "before": "3",
              "after": "2",
              "scope": "",
              "source": "Reduces AP recovery rate from 3 to 2."
            },
            {
              "label": "Cast Range",
              "before": "1 cells",
              "after": "3 cells",
              "scope": "",
              "source": "Increases cast range from 1 cell to 3 cells."
            },
            {
              "label": "Maximum Number Of Attack According To The Number Of Enemies Around The Target",
              "before": "5 hits",
              "after": "7 hits",
              "scope": "",
              "source": "Increases maximum number of attack according to the number of enemies around the target from 5 hits to 7 hits."
            }
          ]
        },
        {
          "skillName": "Overslash",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/imperial-guard/rebalance_2.md",
          "section": "2.1",
          "notes": [
            "Reduces cooldown from 1 second to 0.7 seconds.",
            "Reduces SP consumption from 68 to 65 based on level 5.",
            "Increases AP recovery rate from 2 to 3.",
            "Increases damage from 1800%Atk to 2200%Atk per hit based on level 10 (Spear & Sword Mastery level 10).",
            "Increases factor weight of POW in skill formula from 2 to 5."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "1 second",
              "after": "0.7 seconds",
              "scope": "",
              "source": "Reduces cooldown from 1 second to 0.7 seconds."
            },
            {
              "label": "SP Cost",
              "before": "68",
              "after": "65",
              "scope": "Lv 5",
              "source": "Reduces SP consumption from 68 to 65 based on level 5."
            },
            {
              "label": "AP Generated",
              "before": "2",
              "after": "3",
              "scope": "",
              "source": "Increases AP recovery rate from 2 to 3."
            },
            {
              "label": "Damage",
              "before": "1800%Atk",
              "after": "2200%Atk per hit",
              "scope": "Lv 10 (Spear & Sword Mastery level 10)",
              "source": "Increases damage from 1800%Atk to 2200%Atk per hit based on level 10 (Spear & Sword Mastery level 10)."
            },
            {
              "label": "Factor Weight Of Pow In Skill Formula",
              "before": "2",
              "after": "5",
              "scope": "",
              "source": "Increases factor weight of POW in skill formula from 2 to 5."
            }
          ]
        },
        {
          "skillName": "Overslash",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/imperial-guard/rebalance_3.md",
          "section": "7.2",
          "notes": [
            "Increases base damage of from 1200%Atk to 1600%Atk based on level 10.",
            "Increases factor weight of Spear & Sword Mastery skill level in skill formula from 100 to 250 based on level 10.",
            "Increases factor weight of POW in skill formula from 5 to 7."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "1200%Atk (of)",
              "after": "1600%Atk (of)",
              "scope": "Lv 10",
              "source": "Increases base damage of from 1200%Atk to 1600%Atk based on level 10."
            },
            {
              "label": "Factor Weight Of Spear & Sword Mastery Skill Level In Skill Formula",
              "before": "100",
              "after": "250",
              "scope": "Lv 10",
              "source": "Increases factor weight of Spear & Sword Mastery skill level in skill formula from 100 to 250 based on level 10."
            },
            {
              "label": "Factor Weight Of Pow In Skill Formula",
              "before": "5",
              "after": "7",
              "scope": "",
              "source": "Increases factor weight of POW in skill formula from 5 to 7."
            }
          ]
        },
        {
          "skillName": "Overslash",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/imperial-guard/rebalance_4.md",
          "section": "7.7",
          "notes": [
            "Increases AP recovery rate from 3 to 5.",
            "Increases base damage from 1600+(Spear & Sword Mastery skill level x 250)%Atk to 2200+(Spear & Sword Mastery skill level x 500)%Atk per hit based on level 10."
          ],
          "specRows": [
            {
              "label": "AP Generated",
              "before": "3",
              "after": "5",
              "scope": "",
              "source": "Increases AP recovery rate from 3 to 5."
            },
            {
              "label": "Damage",
              "before": "1600+(Spear & Sword Mastery skill level x 250)%Atk",
              "after": "2200+(Spear & Sword Mastery skill level x 500)%Atk per hit",
              "scope": "Lv 10",
              "source": "Increases base damage from 1600+(Spear & Sword Mastery skill level x 250)%Atk to 2200+(Spear & Sword Mastery skill level x 500)%Atk per hit based on level 10."
            }
          ]
        }
      ],
      "api": {
        "status": "not-used",
        "entries": [],
        "selectedEntry": null
      }
    },
    {
      "id": 5265,
      "imageFile": "5265.png",
      "name": "Shield Shooting",
      "maxLevel": 5,
      "prerequisiteText": "Shield Mastery 5, Attack Stance 2",
      "group": "Active",
      "type": "Ranged Physical",
      "target": "Single Target",
      "recoversAp": "3",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Shield_Shooting",
      "description": "Shield exclusive skill, Can only be used while using Attack Stance.\nThrows the shield to deals long ranged physical damage to the target and surrounding enemies around the target,\nthe user gains bonus that increases Rapid Smiting, Shield Press and Earth Drive damage for 10 seconds.\nDamage is additionally increased depending on the user's base level and POW.\nshield weight and shield refine rate.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK 3500+(Shield Mastery level x50)%\nArea of Effect : 5x5 Cells"
        },
        {
          "level": 2,
          "text": "ATK 6350+(Shield Mastery level x100)%\nArea of Effect : 5x5 Cells"
        },
        {
          "level": 3,
          "text": "ATK 9200+(Shield Mastery level x150)%\nArea of Effect : 5x5 Cells"
        },
        {
          "level": 4,
          "text": "ATK 12050+(Shield Mastery level x200)%\nArea of Effect : 7x7 Cells"
        },
        {
          "level": 5,
          "text": "ATK 14900+(Shield Mastery level x250)%\nArea of Effect : 7x7 Cells"
        }
      ],
      "fixedCastTime": "0.5 seconds",
      "variableCastTime": "0.5 seconds",
      "castDelay": "0.5 seconds",
      "cooldown": "0.7 seconds",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "40"
            },
            {
              "level": 2,
              "value": "45"
            },
            {
              "level": 3,
              "value": "50"
            },
            {
              "level": 4,
              "value": "55"
            },
            {
              "level": 5,
              "value": "60"
            }
          ]
        }
      ],
      "castRange": "? cells",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5265.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5265",
      "tree": {
        "idx": 16,
        "row": 2,
        "col": 2,
        "columns": 7,
        "requirements": [
          {
            "id": 5258,
            "level": 5,
            "name": "Shield Mastery",
            "visible": true
          },
          {
            "id": 5260,
            "level": 2,
            "name": "Attack Stance",
            "visible": true
          }
        ]
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Active Skill"
          },
          {
            "label": "Levels",
            "value": "5"
          },
          {
            "label": "Fixed Cast Time",
            "value": "0.5 seconds"
          },
          {
            "label": "Variable Cast Time",
            "value": "0.5 seconds"
          },
          {
            "label": "Cast Delay",
            "value": "0.5 seconds"
          },
          {
            "label": "Cooldown",
            "value": "0.7 seconds"
          },
          {
            "label": "Cast Range",
            "value": "? cells"
          },
          {
            "label": "Target",
            "value": "Single Target"
          },
          {
            "label": "AP Generated",
            "value": "3"
          },
          {
            "label": "Damage",
            "value": "(14,900 + (Shield Mastery level x 250))% ATK"
          }
        ],
        "levelTables": [
          {
            "title": "Level Scaling",
            "columns": [
              {
                "id": "sp-cost",
                "label": "SP Cost"
              },
              {
                "id": "area-of-effect",
                "label": "Area of Effect"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "area-of-effect": "5x5",
                  "sp-cost": "40"
                }
              },
              {
                "level": 2,
                "values": {
                  "area-of-effect": "5x5",
                  "sp-cost": "45"
                }
              },
              {
                "level": 3,
                "values": {
                  "area-of-effect": "5x5",
                  "sp-cost": "50"
                }
              },
              {
                "level": 4,
                "values": {
                  "area-of-effect": "7x7",
                  "sp-cost": "55"
                }
              },
              {
                "level": 5,
                "values": {
                  "area-of-effect": "7x7",
                  "sp-cost": "60"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "balanceNotes": [
        {
          "skillName": "Shield Shooting",
          "versionId": "rebalance-1",
          "versionLabel": "Rebalance 1",
          "file": "rebalances/imperial-guard/rebalance_1.md",
          "section": "2.2",
          "notes": [
            "Reduces cooldown from 2 second to 1 second based on level 5.",
            "Increases damage bonus from Shield Mastery,"
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "2 second",
              "after": "1 second",
              "scope": "Lv 5",
              "source": "Reduces cooldown from 2 second to 1 second based on level 5."
            }
          ]
        },
        {
          "skillName": "Shield Shooting",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/imperial-guard/rebalance_2.md",
          "section": "2.2",
          "notes": [
            "Reduces cooldown from 1 second to 0.7 seconds.",
            "Increases AP recovery rate from 2 to 3.",
            "Increases damage from 6440%Atk to 14440%Atk based on level 5 (Shield Mastery level 10, shield refine rate is 10 and shield weight is 150).",
            "Increases factor weight of POW in skill formula from 3 to 5."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "1 second",
              "after": "0.7 seconds",
              "scope": "",
              "source": "Reduces cooldown from 1 second to 0.7 seconds."
            },
            {
              "label": "AP Generated",
              "before": "2",
              "after": "3",
              "scope": "",
              "source": "Increases AP recovery rate from 2 to 3."
            },
            {
              "label": "Damage",
              "before": "6440%Atk",
              "after": "14440%Atk",
              "scope": "Lv 5 (Shield Mastery level 10, shield refine rate is 10 and shield weight is 150)",
              "source": "Increases damage from 6440%Atk to 14440%Atk based on level 5 (Shield Mastery level 10, shield refine rate is 10 and shield weight is 150)."
            },
            {
              "label": "Factor Weight Of Pow In Skill Formula",
              "before": "3",
              "after": "5",
              "scope": "",
              "source": "Increases factor weight of POW in skill formula from 3 to 5."
            }
          ]
        },
        {
          "skillName": "Shield Shooting",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/imperial-guard/rebalance_3.md",
          "section": "7.1",
          "notes": [
            "Reworks skill to dealing damage to surrounding enemies within 7 x 7 cells around the target.",
            "Reduces cast range from 11 cells to 9 cells.",
            "Increases factor weight of Shield Mastery skill level in skill formula from 75 to 250 based on level 5.",
            "Increases base damage from 11900%Atk to 14900%Atk based on level 5.",
            "Increases factor weight of POW in skill formula from 5 to 7.",
            "Increases factor weight of shield refine rate in skill formula from 4 to 25."
          ],
          "specRows": [
            {
              "label": "Cast Range",
              "before": "11 cells",
              "after": "9 cells",
              "scope": "",
              "source": "Reduces cast range from 11 cells to 9 cells."
            },
            {
              "label": "Factor Weight Of Shield Mastery Skill Level In Skill Formula",
              "before": "75",
              "after": "250",
              "scope": "Lv 5",
              "source": "Increases factor weight of Shield Mastery skill level in skill formula from 75 to 250 based on level 5."
            },
            {
              "label": "Damage",
              "before": "11900%Atk",
              "after": "14900%Atk",
              "scope": "Lv 5",
              "source": "Increases base damage from 11900%Atk to 14900%Atk based on level 5."
            },
            {
              "label": "Factor Weight Of Pow In Skill Formula",
              "before": "5",
              "after": "7",
              "scope": "",
              "source": "Increases factor weight of POW in skill formula from 5 to 7."
            },
            {
              "label": "Factor Weight Of Shield Refine Rate In Skill Formula",
              "before": "4",
              "after": "25",
              "scope": "",
              "source": "Increases factor weight of shield refine rate in skill formula from 4 to 25."
            }
          ]
        },
        {
          "skillName": "Shield Shooting",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/imperial-guard/rebalance_4.md",
          "section": "7.6",
          "notes": [
            "Increases AP recovery rate from 3 to 5.",
            "Increases base damage from 14900+(Shield Mastery skill level x 250)%Atk to 18500+(Shield Mastery skill level x 750)%Atk based on level 5.",
            "Increases factor weight of shield refine rate in skill formula from 25 to 100.",
            "Increases factor weight of POW in skill formula from 7 to 10."
          ],
          "specRows": [
            {
              "label": "AP Generated",
              "before": "3",
              "after": "5",
              "scope": "",
              "source": "Increases AP recovery rate from 3 to 5."
            },
            {
              "label": "Damage",
              "before": "14900+(Shield Mastery skill level x 250)%Atk",
              "after": "18500+(Shield Mastery skill level x 750)%Atk",
              "scope": "Lv 5",
              "source": "Increases base damage from 14900+(Shield Mastery skill level x 250)%Atk to 18500+(Shield Mastery skill level x 750)%Atk based on level 5."
            },
            {
              "label": "Factor Weight Of Shield Refine Rate In Skill Formula",
              "before": "25",
              "after": "100",
              "scope": "",
              "source": "Increases factor weight of shield refine rate in skill formula from 25 to 100."
            },
            {
              "label": "Factor Weight Of Pow In Skill Formula",
              "before": "7",
              "after": "10",
              "scope": "",
              "source": "Increases factor weight of POW in skill formula from 7 to 10."
            }
          ]
        }
      ],
      "api": {
        "status": "not-used",
        "entries": [],
        "selectedEntry": null
      }
    },
    {
      "id": 5257,
      "imageFile": "5257.png",
      "name": "Rebound Shield",
      "maxLevel": 5,
      "prerequisiteText": "Guard Stance Lv. 4",
      "group": "Active",
      "type": "Buff",
      "target": "Self",
      "recoversAp": "15",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Rebound_Shield",
      "description": "Can only be used while using Sacrifice in Guard Stance mode.\nDecrease Sacrifice-directed damage on you for 60 seconds.",
      "levelDetails": [],
      "fixedCastTime": "1 second",
      "variableCastTime": "2 seconds",
      "castDelay": "1 second",
      "cooldown": "15 seconds",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "60"
            },
            {
              "level": 2,
              "value": "60"
            },
            {
              "level": 3,
              "value": "60"
            },
            {
              "level": 4,
              "value": "60"
            },
            {
              "level": 5,
              "value": "60"
            }
          ]
        }
      ],
      "spCost": "60",
      "duration": "60 seconds",
      "areaOfEffect": "21 x 21",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5257.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5257",
      "tree": {
        "idx": 17,
        "row": 2,
        "col": 3,
        "columns": 7,
        "requirements": [
          {
            "id": 5255,
            "level": 4,
            "name": "Guard Stance",
            "visible": true
          }
        ]
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Active Skill"
          },
          {
            "label": "Levels",
            "value": "5"
          },
          {
            "label": "SP Cost",
            "value": "60"
          },
          {
            "label": "Fixed Cast Time",
            "value": "1 second"
          },
          {
            "label": "Variable Cast Time",
            "value": "2 seconds"
          },
          {
            "label": "Cast Delay",
            "value": "1 second"
          },
          {
            "label": "Cooldown",
            "value": "15 seconds"
          },
          {
            "label": "Target",
            "value": "Self"
          },
          {
            "label": "Area of Effect",
            "value": "21 x 21"
          },
          {
            "label": "Duration",
            "value": "60 seconds"
          },
          {
            "label": "AP Generated",
            "value": "15"
          }
        ],
        "levelTables": [
          {
            "title": "Level Scaling",
            "columns": [
              {
                "id": "sp-cost",
                "label": "SP Cost"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "sp-cost": "60"
                }
              },
              {
                "level": 2,
                "values": {
                  "sp-cost": "60"
                }
              },
              {
                "level": 3,
                "values": {
                  "sp-cost": "60"
                }
              },
              {
                "level": 4,
                "values": {
                  "sp-cost": "60"
                }
              },
              {
                "level": 5,
                "values": {
                  "sp-cost": "60"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "balanceNotes": [],
      "api": {
        "status": "not-used",
        "entries": [],
        "selectedEntry": null
      }
    },
    {
      "id": 5256,
      "imageFile": "5256.png",
      "name": "Guardian Shield",
      "maxLevel": 5,
      "prerequisiteText": "Guard Stance Lv. 2",
      "group": "Active",
      "type": "Buff",
      "target": "Self and Party Members",
      "recoversAp": "15",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Guardian_Shield",
      "description": "Requires Guard Stance.\nGrants a physical shield to yourself and party members within 21 x 21 cells for 60 seconds.\nThe durability of the shield is determined by the caster's MHP, base level, and STA.",
      "levelDetails": [
        {
          "level": 1,
          "text": "50% HP"
        },
        {
          "level": 2,
          "text": "100% HP"
        },
        {
          "level": 3,
          "text": "150% HP"
        },
        {
          "level": 4,
          "text": "200% HP"
        },
        {
          "level": 5,
          "text": "250% HP"
        }
      ],
      "fixedCastTime": "1 second",
      "variableCastTime": "2 seconds",
      "castDelay": "0.3 seconds",
      "cooldown": "25 seconds",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "60"
            },
            {
              "level": 2,
              "value": "60"
            },
            {
              "level": 3,
              "value": "60"
            },
            {
              "level": 4,
              "value": "60"
            },
            {
              "level": 5,
              "value": "60"
            }
          ]
        }
      ],
      "spCost": "60",
      "duration": "60 seconds",
      "areaOfEffect": "21 x 21",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5256.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5256",
      "tree": {
        "idx": 18,
        "row": 2,
        "col": 4,
        "columns": 7,
        "requirements": [
          {
            "id": 5255,
            "level": 2,
            "name": "Guard Stance",
            "visible": true
          }
        ]
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Active Skill"
          },
          {
            "label": "Levels",
            "value": "5"
          },
          {
            "label": "SP Cost",
            "value": "60"
          },
          {
            "label": "Fixed Cast Time",
            "value": "1 second"
          },
          {
            "label": "Variable Cast Time",
            "value": "2 seconds"
          },
          {
            "label": "Cast Delay",
            "value": "0.3 seconds"
          },
          {
            "label": "Cooldown",
            "value": "25 seconds"
          },
          {
            "label": "Target",
            "value": "Self and Party Members"
          },
          {
            "label": "Area of Effect",
            "value": "21 x 21"
          },
          {
            "label": "Duration",
            "value": "60 seconds"
          },
          {
            "label": "AP Generated",
            "value": "15"
          }
        ],
        "levelTables": [
          {
            "title": "Level Scaling",
            "columns": [
              {
                "id": "sp-cost",
                "label": "SP Cost"
              },
              {
                "id": "effect",
                "label": "Effect"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "effect": "50% HP",
                  "sp-cost": "60"
                }
              },
              {
                "level": 2,
                "values": {
                  "effect": "100% HP",
                  "sp-cost": "60"
                }
              },
              {
                "level": 3,
                "values": {
                  "effect": "150% HP",
                  "sp-cost": "60"
                }
              },
              {
                "level": 4,
                "values": {
                  "effect": "200% HP",
                  "sp-cost": "60"
                }
              },
              {
                "level": 5,
                "values": {
                  "effect": "250% HP",
                  "sp-cost": "60"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "balanceNotes": [
        {
          "skillName": "Guardian Shield",
          "versionId": "rebalance-1",
          "versionLabel": "Rebalance 1",
          "file": "rebalances/imperial-guard/rebalance_1.md",
          "section": "2.4",
          "notes": [
            "Reduces MaxHP factor to the half of user's MaxHP.",
            "Increases the bonus of shield by 15 times of the user's STA.",
            "Recovers 15 AP upon casting."
          ],
          "specRows": []
        },
        {
          "skillName": "Guardian Shield",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/imperial-guard/rebalance_4.md",
          "section": "7.3",
          "notes": [
            "Reworks AP condition from recovering AP to consuming 35 AP upon using instead.",
            "Reduces skill duration from 60 seconds to 40 seconds.",
            "Increases skill cooldown from 15 seconds to 25 seconds.",
            "Reduces global cooldown from 1 second to 0.3 seconds.",
            "Reduces factor weight of MaxHP in skill formula from 50% to 30%.",
            "Reduces final durability factor of skill level from 250% to 125% based on level 5."
          ],
          "specRows": [
            {
              "label": "Skill Duration",
              "before": "60 seconds",
              "after": "40 seconds",
              "scope": "",
              "source": "Reduces skill duration from 60 seconds to 40 seconds."
            },
            {
              "label": "Cooldown",
              "before": "15 seconds",
              "after": "25 seconds",
              "scope": "",
              "source": "Increases skill cooldown from 15 seconds to 25 seconds."
            },
            {
              "label": "Cooldown",
              "before": "1 second",
              "after": "0.3 seconds",
              "scope": "",
              "source": "Reduces global cooldown from 1 second to 0.3 seconds."
            },
            {
              "label": "Factor Weight Of Maxhp In Skill Formula",
              "before": "50%",
              "after": "30%",
              "scope": "",
              "source": "Reduces factor weight of MaxHP in skill formula from 50% to 30%."
            },
            {
              "label": "Final Durability Factor Of Skill Level",
              "before": "250%",
              "after": "125%",
              "scope": "Lv 5",
              "source": "Reduces final durability factor of skill level from 250% to 125% based on level 5."
            }
          ]
        }
      ],
      "api": {
        "status": "not-used",
        "entries": [],
        "selectedEntry": null
      }
    },
    {
      "id": 5262,
      "imageFile": "5262.png",
      "name": "Holy Shield",
      "maxLevel": 5,
      "prerequisiteText": "Shield Mastery Lv. 5 and Cross Rain Lv. 3",
      "group": "Active",
      "type": "Buff",
      "target": "Self",
      "recoversAp": "",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Holy_Shield",
      "description": "A Shield skill.\nImprove your Shadow and Undead Resistances and cast a Holy Magic Damage buff on you.",
      "levelDetails": [],
      "fixedCastTime": "1 second",
      "variableCastTime": "2 seconds",
      "castDelay": "1 second",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "60"
            },
            {
              "level": 2,
              "value": "60"
            },
            {
              "level": 3,
              "value": "60"
            },
            {
              "level": 4,
              "value": "60"
            },
            {
              "level": 5,
              "value": "60"
            }
          ]
        }
      ],
      "spCost": "60",
      "cooldown": "40 seconds",
      "duration": "40 ~ 120 seconds",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5262.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5262",
      "tree": {
        "idx": 19,
        "row": 2,
        "col": 5,
        "columns": 7,
        "requirements": [
          {
            "id": 5258,
            "level": 5,
            "name": "Shield Mastery",
            "visible": true
          },
          {
            "id": 5267,
            "level": 3,
            "name": "Cross Rain",
            "visible": true
          }
        ]
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Active Skill"
          },
          {
            "label": "Levels",
            "value": "5"
          },
          {
            "label": "SP Cost",
            "value": "60"
          },
          {
            "label": "Fixed Cast Time",
            "value": "1 second"
          },
          {
            "label": "Variable Cast Time",
            "value": "2 seconds"
          },
          {
            "label": "Cast Delay",
            "value": "1 second"
          },
          {
            "label": "Cooldown",
            "value": "40 seconds"
          },
          {
            "label": "Target",
            "value": "Self"
          },
          {
            "label": "Duration",
            "value": "40 ~ 120 seconds"
          }
        ],
        "levelTables": [
          {
            "title": "Level Scaling",
            "columns": [
              {
                "id": "sp-cost",
                "label": "SP Cost"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "sp-cost": "60"
                }
              },
              {
                "level": 2,
                "values": {
                  "sp-cost": "60"
                }
              },
              {
                "level": 3,
                "values": {
                  "sp-cost": "60"
                }
              },
              {
                "level": 4,
                "values": {
                  "sp-cost": "60"
                }
              },
              {
                "level": 5,
                "values": {
                  "sp-cost": "60"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "balanceNotes": [
        {
          "skillName": "Holy Shield",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/imperial-guard/rebalance_4.md",
          "section": "7.5",
          "notes": [
            "No longer be removed by Dispell or Clearance."
          ],
          "specRows": []
        }
      ],
      "api": {
        "status": "not-used",
        "entries": [],
        "selectedEntry": null
      }
    },
    {
      "id": 6504,
      "imageFile": "6504.png",
      "name": "Imperial Cross",
      "maxLevel": 5,
      "prerequisiteText": "Overslash 5",
      "group": "Active",
      "type": "Melee physical",
      "target": "Single target",
      "recoversAp": "2",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Imperial_Cross",
      "description": "Can only be used while using Attack Stance.\nDeals melee physical damage to the single target for 3 hits.\nIf Grand Judgement buff is active, the skill will deal more damage.\nDeals additional damage depends on level of Spear & Sword Mastery the user has learned, user's base level and POW.",
      "levelDetails": [
        {
          "level": 1,
          "text": "(3000 + (Spear & Sword Mastery level x 25)) % Atk / (3400 + (Spear & Sword Mastery level x 25)) % Atk (Grand Judgement) per hit."
        },
        {
          "level": 2,
          "text": "(4350 + (Spear & Sword Mastery level x 25)) % Atk / (5050 + (Spear & Sword Mastery level x 25)) % Atk (Grand Judgement) per hit."
        },
        {
          "level": 3,
          "text": "(5700 + (Spear & Sword Mastery level x 25)) % Atk / (6700 + (Spear & Sword Mastery level x 25)) % Atk (Grand Judgement) per hit."
        },
        {
          "level": 4,
          "text": "(7050 + (Spear & Sword Mastery level x 25)) % Atk / (8350 + (Spear & Sword Mastery level x 25)) % Atk (Grand Judgement) per hit."
        },
        {
          "level": 5,
          "text": "(8400 + (Spear & Sword Mastery level x 25)) % Atk / (10000 + (Spear & Sword Mastery level x 25)) % Atk (Grand Judgement) per hit."
        }
      ],
      "levelExtras": [],
      "spCost": "45 + (4 × Skill Level)",
      "castDelay": "0.5 seconds",
      "cooldown": "0.35 seconds",
      "castRange": "Melee",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/6504.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6504",
      "tree": {
        "idx": 21,
        "row": 3,
        "col": 0,
        "columns": 7,
        "requirements": [
          {
            "id": 5266,
            "level": 5,
            "name": "Overslash",
            "visible": true
          }
        ]
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Active Skill"
          },
          {
            "label": "Levels",
            "value": "5"
          },
          {
            "label": "SP Cost",
            "value": "45 + (4 × Skill Level)"
          },
          {
            "label": "Cast Delay",
            "value": "0.5 seconds"
          },
          {
            "label": "Cooldown",
            "value": "0.35 seconds"
          },
          {
            "label": "Cast Range",
            "value": "Melee"
          },
          {
            "label": "Target",
            "value": "Single target"
          },
          {
            "label": "AP Generated",
            "value": "2"
          },
          {
            "label": "Damage",
            "value": "(8,400 + (Spear & Sword Mastery level x 25))% ATK per hit/(10,000 + (Spear & Sword Mastery level x 25))% ATK per hit"
          }
        ],
        "levelTables": []
      },
      "balanceNotes": [],
      "api": {
        "status": "not-used",
        "entries": [],
        "selectedEntry": null
      }
    },
    {
      "id": 5263,
      "imageFile": "5263.png",
      "name": "Grand Judgement",
      "maxLevel": 10,
      "prerequisiteText": "Overslash Lv. 5 and Spear Sword Mastery Lv. 5",
      "group": "Active(AP)",
      "type": "Ranged Physical",
      "target": "1 Target",
      "recoversAp": "",
      "consumesAp": "150",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Grand_Judgement",
      "description": "A Spear-only skill. Can only be used while in Attack Stance.\nInflict Long Physical damage on a target and others in 7x7 cells around it\nIncreased damage from Vanishing Point/Cannon Spear for 150 seconds.\nInflicts more damage on Plant and Insect enemies.\nAdditional Damage increase based on the caster's Base Level and POW.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK 1750%/ 2000% to Plant/Insect enemies"
        },
        {
          "level": 2,
          "text": "ATK 3250%/ 3650% to Plant/Insect enemies"
        },
        {
          "level": 3,
          "text": "ATK 4750%/ 5300% to Plant/Insect enemies"
        },
        {
          "level": 4,
          "text": "ATK 6250%/ 6950% to Plant/Insect enemies"
        },
        {
          "level": 5,
          "text": "ATK 7750%/ 8600% to Plant/Insect enemies"
        },
        {
          "level": 6,
          "text": "ATK 9250%/ 10250% to Plant/Insect enemies"
        },
        {
          "level": 7,
          "text": "ATK 10750%/ 11900% to Plant/Insect enemies"
        },
        {
          "level": 8,
          "text": "ATK 12250%/ 13550% to Plant/Insect enemies"
        },
        {
          "level": 9,
          "text": "ATK 13750%/ 15200% to Plant/Insect enemies"
        },
        {
          "level": 10,
          "text": "ATK 15250%/ 16850% to Plant/Insect enemies"
        }
      ],
      "fixedCastTime": "1 second",
      "variableCastTime": "1 second",
      "castDelay": "0 seconds",
      "cooldown": "0.5 seconds",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "51"
            },
            {
              "level": 2,
              "value": "54"
            },
            {
              "level": 3,
              "value": "57"
            },
            {
              "level": 4,
              "value": "60"
            },
            {
              "level": 5,
              "value": "63"
            },
            {
              "level": 6,
              "value": "66"
            },
            {
              "level": 7,
              "value": "69"
            },
            {
              "level": 8,
              "value": "72"
            },
            {
              "level": 9,
              "value": "75"
            },
            {
              "level": 10,
              "value": "78"
            }
          ]
        }
      ],
      "areaOfEffect": "7 x 7",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5263.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5263",
      "tree": {
        "idx": 22,
        "row": 3,
        "col": 1,
        "columns": 7,
        "requirements": [
          {
            "id": 5259,
            "level": 5,
            "name": "Spear Sword Mastery",
            "visible": true
          },
          {
            "id": 5266,
            "level": 5,
            "name": "Overslash",
            "visible": true
          }
        ]
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Active(AP) Skill"
          },
          {
            "label": "Levels",
            "value": "10"
          },
          {
            "label": "Fixed Cast Time",
            "value": "1 second"
          },
          {
            "label": "Variable Cast Time",
            "value": "1 second"
          },
          {
            "label": "Cast Delay",
            "value": "0 seconds"
          },
          {
            "label": "Cooldown",
            "value": "0.5 seconds"
          },
          {
            "label": "Target",
            "value": "1 Target"
          },
          {
            "label": "Area of Effect",
            "value": "7 x 7"
          },
          {
            "label": "AP Consumed",
            "value": "150"
          },
          {
            "label": "Damage",
            "value": "15,250% ATK"
          }
        ],
        "levelTables": [
          {
            "title": "Level Scaling",
            "columns": [
              {
                "id": "sp-cost",
                "label": "SP Cost"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "sp-cost": "51"
                }
              },
              {
                "level": 2,
                "values": {
                  "sp-cost": "54"
                }
              },
              {
                "level": 3,
                "values": {
                  "sp-cost": "57"
                }
              },
              {
                "level": 4,
                "values": {
                  "sp-cost": "60"
                }
              },
              {
                "level": 5,
                "values": {
                  "sp-cost": "63"
                }
              },
              {
                "level": 6,
                "values": {
                  "sp-cost": "66"
                }
              },
              {
                "level": 7,
                "values": {
                  "sp-cost": "69"
                }
              },
              {
                "level": 8,
                "values": {
                  "sp-cost": "72"
                }
              },
              {
                "level": 9,
                "values": {
                  "sp-cost": "75"
                }
              },
              {
                "level": 10,
                "values": {
                  "sp-cost": "78"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "balanceNotes": [
        {
          "skillName": "Grand Judgement",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/imperial-guard/rebalance_2.md",
          "section": "2.4",
          "notes": [
            "Reduces cooldown from 60 seconds to 0.5 seconds. (actual cooldown from testing is 0.5 seconds)",
            "Removes 0.5 seconds delay after skill.",
            "Increases SP consumption from 68 to 78 based on level 10.",
            "Reduces AP consumption from 150 to 15.",
            "Reduces duration of Grand Judgement buff from 300 seconds to 150 seconds.",
            "Increases damage from 7500%/11000%(plant and insect race)Atk to 15250%/16850%(plant and insect race)Atk based on level 10."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "60 seconds",
              "after": "0.5 seconds. (actual cooldown from testing is 0.5 seconds)",
              "scope": "",
              "source": "Reduces cooldown from 60 seconds to 0.5 seconds. (actual cooldown from testing is 0.5 seconds)"
            },
            {
              "label": "Cast Delay",
              "before": "0.5 seconds delay",
              "after": "Removed",
              "scope": "",
              "source": "Removes 0.5 seconds delay after skill."
            },
            {
              "label": "SP Cost",
              "before": "68",
              "after": "78",
              "scope": "Lv 10",
              "source": "Increases SP consumption from 68 to 78 based on level 10."
            },
            {
              "label": "AP Consumed",
              "before": "150",
              "after": "15",
              "scope": "",
              "source": "Reduces AP consumption from 150 to 15."
            },
            {
              "label": "Duration Of Grand Judgement Buff",
              "before": "300 seconds",
              "after": "150 seconds",
              "scope": "",
              "source": "Reduces duration of Grand Judgement buff from 300 seconds to 150 seconds."
            },
            {
              "label": "Damage",
              "before": "7500%/11000%(plant and insect race)Atk",
              "after": "15250%/16850%(plant and insect race)Atk",
              "scope": "Lv 10",
              "source": "Increases damage from 7500%/11000%(plant and insect race)Atk to 15250%/16850%(plant and insect race)Atk based on level 10."
            }
          ]
        }
      ],
      "api": {
        "status": "not-used",
        "entries": [],
        "selectedEntry": null
      }
    },
    {
      "id": 6503,
      "imageFile": "6503.png",
      "name": "Radiant Spear",
      "maxLevel": 10,
      "prerequisiteText": "Overslash 3, Shield Shooting 3",
      "group": "Active",
      "type": "Ranged Physical",
      "target": "Single target",
      "recoversAp": "2",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "",
      "description": "One-handed spear exclusive skill, Can only be used while using Attack Stance.\nDeals long ranged physical damage to the target and surrounding enemies around the target.\nIf Grand Judgement buff is active, the skill will deal more damage.\nDeals additional damage depends on level of Spear & Sword Mastery the user has learned, user's base level and POW, has a chance to trigger critical, the critical chance is the user's Cri.\nThe effectiveness of critical modifier is applied by half.",
      "levelDetails": [
        {
          "level": 1,
          "text": "(4650 + (Spear & Sword Mastery level x 50)) % Atk / (4900 + (Spear & Sword Mastery level x 50)) % Atk (Grand Judgement) / area of effect: 3 x 3 cells."
        },
        {
          "level": 2,
          "text": "(5800 + (Spear & Sword Mastery level x 50)) % Atk / (6300 + (Spear & Sword Mastery level x 50)) % Atk (Grand Judgement) / area of effect: 3 x 3 cells."
        },
        {
          "level": 3,
          "text": "(6950 + (Spear & Sword Mastery level x 50)) % Atk / (7700 + (Spear & Sword Mastery level x 50)) % Atk (Grand Judgement) / area of effect: 3 x 3 cells."
        },
        {
          "level": 4,
          "text": "(8100 + (Spear & Sword Mastery level x 50)) % Atk / (9100 + (Spear & Sword Mastery level x 50)) % Atk (Grand Judgement) / area of effect: 3 x 3 cells."
        },
        {
          "level": 5,
          "text": "(9250 + (Spear & Sword Mastery level x 50)) % Atk / (10500 + (Spear & Sword Mastery level x 50)) % Atk (Grand Judgement) / area of effect: 5 x 5 cells."
        },
        {
          "level": 6,
          "text": "(10400 + (Spear & Sword Mastery level x 50)) % Atk / (11900 + (Spear & Sword Mastery level x 50)) % Atk (Grand Judgement) / area of effect: 5 x 5 cells."
        },
        {
          "level": 7,
          "text": "(11550 + (Spear & Sword Mastery level x 50)) % Atk / (13300 + (Spear & Sword Mastery level x 50)) % Atk (Grand Judgement) / area of effect: 5 x 5 cells."
        },
        {
          "level": 8,
          "text": "(12700 + (Spear & Sword Mastery level x 50)) % Atk / (14700 + (Spear & Sword Mastery level x 50)) % Atk (Grand Judgement) / area of effect: 5 x 5 cells."
        },
        {
          "level": 9,
          "text": "(13850 + (Spear & Sword Mastery level x 50)) % Atk / (16100 + (Spear & Sword Mastery level x 50)) % Atk (Grand Judgement) / area of effect: 7 x 7 cells."
        },
        {
          "level": 10,
          "text": "(15000 + (Spear & Sword Mastery level x 50)) % Atk / (17500 + (Spear & Sword Mastery level x 50)) % Atk (Grand Judgement) / area of effect: 7 x 7 cells."
        }
      ],
      "fixedCastTime": "1 second",
      "variableCastTime": "1 second",
      "castDelay": "1 second",
      "cooldown": "0.7 seconds",
      "levelExtras": [],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/6503.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6503",
      "tree": {
        "idx": 23,
        "row": 3,
        "col": 2,
        "columns": 7,
        "requirements": [
          {
            "id": 5265,
            "level": 3,
            "name": "Shield Shooting",
            "visible": true
          },
          {
            "id": 5266,
            "level": 3,
            "name": "Overslash",
            "visible": true
          }
        ]
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Active Skill"
          },
          {
            "label": "Levels",
            "value": "10"
          },
          {
            "label": "Fixed Cast Time",
            "value": "1 second"
          },
          {
            "label": "Variable Cast Time",
            "value": "1 second"
          },
          {
            "label": "Cast Delay",
            "value": "1 second"
          },
          {
            "label": "Cooldown",
            "value": "0.7 seconds"
          },
          {
            "label": "Target",
            "value": "Single target"
          },
          {
            "label": "AP Generated",
            "value": "2"
          },
          {
            "label": "Damage",
            "value": "(15,000 + (Spear & Sword Mastery level x 50))% ATK/(17,500 + (Spear & Sword Mastery level x 50))% ATK"
          }
        ],
        "levelTables": [
          {
            "title": "Level Scaling",
            "columns": [
              {
                "id": "area-of-effect",
                "label": "Area of Effect"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "area-of-effect": "3x3"
                }
              },
              {
                "level": 2,
                "values": {
                  "area-of-effect": "3x3"
                }
              },
              {
                "level": 3,
                "values": {
                  "area-of-effect": "3x3"
                }
              },
              {
                "level": 4,
                "values": {
                  "area-of-effect": "3x3"
                }
              },
              {
                "level": 5,
                "values": {
                  "area-of-effect": "5x5"
                }
              },
              {
                "level": 6,
                "values": {
                  "area-of-effect": "5x5"
                }
              },
              {
                "level": 7,
                "values": {
                  "area-of-effect": "5x5"
                }
              },
              {
                "level": 8,
                "values": {
                  "area-of-effect": "5x5"
                }
              },
              {
                "level": 9,
                "values": {
                  "area-of-effect": "7x7"
                }
              },
              {
                "level": 10,
                "values": {
                  "area-of-effect": "7x7"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "balanceNotes": [],
      "api": {
        "status": "not-used",
        "entries": [],
        "selectedEntry": null
      }
    },
    {
      "id": 5261,
      "imageFile": "5261.png",
      "name": "Ultimate Sacrifice",
      "maxLevel": 5,
      "prerequisiteText": "Rebound Shield Lv. 3 and Guardian Shield Lv. 3",
      "group": "Active",
      "type": "Support",
      "target": "You and Party Members",
      "recoversAp": "",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Ultimate_Sacrifice",
      "description": "Requires Guard Stance.\nUse all your remaining HP except 1 to give Resurrection Crystals to surrounding party members.\nThe Resurrection Crystal immediately resurrects its target on their current spot with full HP and SP.",
      "levelDetails": [],
      "fixedCastTime": "2 seconds",
      "variableCastTime": "2 seconds",
      "castDelay": "1 second",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "120"
            },
            {
              "level": 2,
              "value": "120"
            },
            {
              "level": 3,
              "value": "120"
            },
            {
              "level": 4,
              "value": "120"
            },
            {
              "level": 5,
              "value": "120"
            }
          ]
        }
      ],
      "spCost": "120",
      "cooldown": "20 ~ 100 seconds",
      "areaOfEffect": "3 x 3 ~ 7 x 7",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5261.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5261",
      "tree": {
        "idx": 25,
        "row": 3,
        "col": 4,
        "columns": 7,
        "requirements": [
          {
            "id": 5256,
            "level": 3,
            "name": "Guardian Shield",
            "visible": true
          },
          {
            "id": 5257,
            "level": 3,
            "name": "Rebound Shield",
            "visible": true
          }
        ]
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Active Skill"
          },
          {
            "label": "Levels",
            "value": "5"
          },
          {
            "label": "SP Cost",
            "value": "120"
          },
          {
            "label": "Fixed Cast Time",
            "value": "2 seconds"
          },
          {
            "label": "Variable Cast Time",
            "value": "2 seconds"
          },
          {
            "label": "Cast Delay",
            "value": "1 second"
          },
          {
            "label": "Cooldown",
            "value": "20 ~ 100 seconds"
          },
          {
            "label": "Target",
            "value": "You and Party Members"
          },
          {
            "label": "Area of Effect",
            "value": "3 x 3 ~ 7 x 7"
          }
        ],
        "levelTables": [
          {
            "title": "Level Scaling",
            "columns": [
              {
                "id": "sp-cost",
                "label": "SP Cost"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "sp-cost": "120"
                }
              },
              {
                "level": 2,
                "values": {
                  "sp-cost": "120"
                }
              },
              {
                "level": 3,
                "values": {
                  "sp-cost": "120"
                }
              },
              {
                "level": 4,
                "values": {
                  "sp-cost": "120"
                }
              },
              {
                "level": 5,
                "values": {
                  "sp-cost": "120"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "balanceNotes": [],
      "api": {
        "status": "not-used",
        "entries": [],
        "selectedEntry": null
      }
    },
    {
      "id": 5264,
      "imageFile": "5264.png",
      "name": "Judgement Cross",
      "maxLevel": 10,
      "prerequisiteText": "Cross Rain Lv. 5 and Holy Shield Lv. 3",
      "group": "Active(AP)",
      "type": "Magical",
      "target": "1 Target",
      "recoversAp": "",
      "consumesAp": "10",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Judgement_Cross",
      "description": "Inflict Holy Magic damage on a target\nDeals more damage if the target is a Plant/Insect type monster.\nAdditional Damage increase based on the caster's Base Level and SPL.",
      "levelDetails": [
        {
          "level": 1,
          "text": "MATK 1950%/ 2100% to Plant/Insect enemies"
        },
        {
          "level": 2,
          "text": "MATK 3900%/ 4200% to Plant/Insect enemies"
        },
        {
          "level": 3,
          "text": "MATK 5850%/ 6300% to Plant/Insect enemies"
        },
        {
          "level": 4,
          "text": "MATK 7800%/ 8400% to Plant/Insect enemies"
        },
        {
          "level": 5,
          "text": "MATK 9750%/ 10500% to Plant/Insect enemies"
        },
        {
          "level": 6,
          "text": "MATK 11700%/ 12600% to Plant/Insect enemies"
        },
        {
          "level": 7,
          "text": "MATK 13650%/ 14700% to Plant/Insect enemies"
        },
        {
          "level": 8,
          "text": "MATK 15600%/ 16800% to Plant/Insect enemies"
        },
        {
          "level": 9,
          "text": "MATK 17550%/ 18900% to Plant/Insect enemies"
        },
        {
          "level": 10,
          "text": "MATK 19500%/ 21000% to Plant/Insect enemies"
        }
      ],
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "4 seconds",
      "castDelay": "0 seconds",
      "cooldown": "0.5 seconds",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "60"
            },
            {
              "level": 2,
              "value": "65"
            },
            {
              "level": 3,
              "value": "70"
            },
            {
              "level": 4,
              "value": "75"
            },
            {
              "level": 5,
              "value": "80"
            },
            {
              "level": 6,
              "value": "85"
            },
            {
              "level": 7,
              "value": "90"
            },
            {
              "level": 8,
              "value": "95"
            },
            {
              "level": 9,
              "value": "100"
            },
            {
              "level": 10,
              "value": "105"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5264.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5264",
      "tree": {
        "idx": 26,
        "row": 3,
        "col": 5,
        "columns": 7,
        "requirements": [
          {
            "id": 5262,
            "level": 3,
            "name": "Holy Shield",
            "visible": true
          },
          {
            "id": 5267,
            "level": 5,
            "name": "Cross Rain",
            "visible": true
          }
        ]
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Active(AP) Skill"
          },
          {
            "label": "Levels",
            "value": "10"
          },
          {
            "label": "Fixed Cast Time",
            "value": "1.5 seconds"
          },
          {
            "label": "Variable Cast Time",
            "value": "4 seconds"
          },
          {
            "label": "Cast Delay",
            "value": "0 seconds"
          },
          {
            "label": "Cooldown",
            "value": "0.5 seconds"
          },
          {
            "label": "Target",
            "value": "1 Target"
          },
          {
            "label": "AP Consumed",
            "value": "10"
          },
          {
            "label": "Damage",
            "value": "19,500% MATK"
          }
        ],
        "levelTables": [
          {
            "title": "Level Scaling",
            "columns": [
              {
                "id": "sp-cost",
                "label": "SP Cost"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "sp-cost": "60"
                }
              },
              {
                "level": 2,
                "values": {
                  "sp-cost": "65"
                }
              },
              {
                "level": 3,
                "values": {
                  "sp-cost": "70"
                }
              },
              {
                "level": 4,
                "values": {
                  "sp-cost": "75"
                }
              },
              {
                "level": 5,
                "values": {
                  "sp-cost": "80"
                }
              },
              {
                "level": 6,
                "values": {
                  "sp-cost": "85"
                }
              },
              {
                "level": 7,
                "values": {
                  "sp-cost": "90"
                }
              },
              {
                "level": 8,
                "values": {
                  "sp-cost": "95"
                }
              },
              {
                "level": 9,
                "values": {
                  "sp-cost": "100"
                }
              },
              {
                "level": 10,
                "values": {
                  "sp-cost": "105"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "balanceNotes": [
        {
          "skillName": "Judgement Cross",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/imperial-guard/rebalance_2.md",
          "section": "2.5",
          "notes": [
            "Reduces cooldown from 60 seconds to 0.5 seconds.",
            "Removes 1.5 seconds delay after skill.",
            "Reduces SP consumption from 150 to 105 based on level 10.",
            "Reduces AP consumption from 150 to 10.",
            "Increases damage from 7500%/11000%(plant and insect race)Matk to 19500%/21000%(plant and insect race)Matk based on level 10."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "60 seconds",
              "after": "0.5 seconds",
              "scope": "",
              "source": "Reduces cooldown from 60 seconds to 0.5 seconds."
            },
            {
              "label": "Cast Delay",
              "before": "1.5 seconds delay",
              "after": "Removed",
              "scope": "",
              "source": "Removes 1.5 seconds delay after skill."
            },
            {
              "label": "SP Cost",
              "before": "150",
              "after": "105",
              "scope": "Lv 10",
              "source": "Reduces SP consumption from 150 to 105 based on level 10."
            },
            {
              "label": "AP Consumed",
              "before": "150",
              "after": "10",
              "scope": "",
              "source": "Reduces AP consumption from 150 to 10."
            },
            {
              "label": "Damage",
              "before": "7500%/11000%(plant and insect race)Matk",
              "after": "19500%/21000%(plant and insect race)Matk",
              "scope": "Lv 10",
              "source": "Increases damage from 7500%/11000%(plant and insect race)Matk to 19500%/21000%(plant and insect race)Matk based on level 10."
            }
          ]
        },
        {
          "skillName": "Judgement Cross",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/imperial-guard/rebalance_4.md",
          "section": "7.8",
          "notes": [
            "Changes damage property from holy to neutral."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "holy (property)",
              "after": "neutral (property)",
              "scope": "",
              "source": "Changes damage property from holy to neutral."
            }
          ]
        }
      ],
      "api": {
        "status": "not-used",
        "entries": [],
        "selectedEntry": null
      }
    }
  ]
};

export default imperialGuardData;
