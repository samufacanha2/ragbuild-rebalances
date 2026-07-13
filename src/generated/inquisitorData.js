export const inquisitorData = {
  "generatedAt": "2026-07-13T20:14:11.443Z",
  "classId": 4262,
  "classSlug": "inquisitor",
  "className": "Inquisitor",
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
    "changedSkills": 11,
    "noteCount": 75,
    "addedSkills": 1,
    "versions": 5
  },
  "tree": {
    "columns": 7,
    "rows": 5,
    "skillTreeUrl": "https://www.divine-pride.net/tools/skilltree/4262",
    "jobIconUrl": "assets/divine-pride/jobs/4262.png"
  },
  "sources": {
    "rebalances": [
      "rebalances/inquisitor/rebalance_1.md",
      "rebalances/inquisitor/rebalance_2.md",
      "rebalances/inquisitor/rebalance_3.md",
      "rebalances/inquisitor/rebalance_4.md",
      "rebalances/inquisitor/rebalance_5.md"
    ],
    "rebalanceManifest": "rebalances/manifest.json",
    "divinePrideApiDocs": "https://www.divine-pride.net/api",
    "divinePrideSkillTree": "https://www.divine-pride.net/tools/skilltree/4262",
    "browiki": "https://browiki.org",
    "irowiki": "https://irowiki.org/wiki/"
  },
  "rebalanceVersions": [
    {
      "id": "rebalance-1",
      "label": "Rebalance 1",
      "file": "rebalances/inquisitor/rebalance_1.md",
      "heading": "10. Inquisitor",
      "className": "Inquisitor",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=9805",
      "scope": "main",
      "appliesTo": "Main classes only",
      "maxJobLevel": 50,
      "pointLimit": 49,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "10.1",
          "name": "Oleum Sanctum",
          "notes": [
            "Reduces cooldown from 6 seconds to 3 seconds based on level 5."
          ]
        },
        {
          "section": "10.2",
          "name": "Explosion Blaster",
          "notes": [
            "Reduces cooldown from 5 seconds to 1 second based on level 5.",
            "Removes delay after skill based on level 5.",
            "Reduces AP recovery rate from 5 to 4.",
            "Increases damage from 2250%Atk to 3250%Atk based on level 5.",
            "Increases damage to the target who is inflicted by Oleum Sanctum from 3000%Atk to 4250%Atk based on level 5.",
            "Applies critical damage, the critical chance is the user's Cri."
          ]
        },
        {
          "section": "10.3",
          "name": "Judge",
          "notes": [
            "Reduces AP consumption from 100 to 50."
          ]
        },
        {
          "section": "10.4",
          "name": "Third Exorcism Flame",
          "notes": [
            "Reduces AP consumption from 150 to 100."
          ]
        },
        {
          "section": "10.5",
          "name": "Massive Flame Blaster",
          "notes": [
            "Applies critical damage, the critical chance is the user's Cri."
          ]
        },
        {
          "section": "10.6",
          "name": "Third Punish",
          "notes": [
            "Increases damage from 2750%Atk to 3250%Atk based on level 5.",
            "Changes damage logic from 2 split hits to 2 cumulative hits.",
            "Applies critical damage, the critical chance is the user's Cri."
          ]
        },
        {
          "section": "10.7",
          "name": "Third Consecration",
          "notes": [
            "Changes damage logic from 3 split hits to 5 cumulative hits."
          ]
        },
        {
          "section": "10.8",
          "name": "Third Flame Bomb",
          "notes": [
            "Applies 20% of the user's MaxHP to the skill damage factor."
          ]
        }
      ]
    },
    {
      "id": "rebalance-2",
      "label": "Rebalance 2",
      "file": "rebalances/inquisitor/rebalance_2.md",
      "heading": "10. Inquisitor",
      "className": "Inquisitor",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=11126",
      "scope": "main-and-expanded",
      "appliesTo": "Main and expanded classes",
      "maxJobLevel": 50,
      "pointLimit": 49,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "10.1",
          "name": "First Brand",
          "notes": [
            "Reduces cooldown from 0.5 seconds to 0.3 seconds.",
            "Increases SP consumption from 50 to 62 based on level 5.",
            "Unifies brand duration to 5 second regardless of skill level.",
            "Unifies area of effect to 7 x 7 cells regardless of skill level.",
            "Increases cast range from 2 cells to 3 cells.",
            "Increases damage from 2250%Atk to 6000%Atk based on level 5.",
            "Increases factor weight of POW in skill formula from 3 to 5."
          ]
        },
        {
          "section": "10.2",
          "name": "Second Faith",
          "notes": [
            "Reduces cooldown from 1 second to 0.7 seconds.",
            "Increases SP consumption from 60 to 65 based on level 5.",
            "Increases AP recovery rate from 1 to 4.",
            "Unifies area of effect to 7 x 7 cells regardless of skill level.",
            "Increases damage from 2500%Atk to 11600%Atk based on level 5.",
            "Increases factor weight of POW in skill formula from 4 to 5."
          ]
        },
        {
          "section": "10.3",
          "name": "Second Judgement",
          "notes": [
            "Reduces cooldown from 1 second to 0.7 seconds.",
            "Increases SP consumption from 65 to 70 based on level 5.",
            "Increases AP recovery rate from 2 to 4.",
            "Unifies area of effect to 7 x 7 cells regardless of skill level.",
            "Increases damage from 2625%Atk to 13150%Atk based on level 5.",
            "Increases factor weight of POW in skill formula from 4 to 7."
          ]
        },
        {
          "section": "10.4",
          "name": "Second Flame",
          "notes": [
            "Reduces cooldown from 1 second to 0.7 seconds.",
            "Increases SP consumption from 70 to 75 based on level 5.",
            "Increases AP recovery rate from 3 to 4.",
            "Unifies area of effect to 7 x 7 cells regardless of skill level.",
            "Increases damage from 2750%Atk to 14700%Atk based on level 5.",
            "Increases factor weight of POW in skill formula from 4 to 9."
          ]
        },
        {
          "section": "10.5",
          "name": "Third Punish",
          "notes": [
            "Reduces cooldown from 2 seconds to 1 second.",
            "Increases number of hit from 2 hits to 3 hits.",
            "Unifies area of effect to 7 x 7 cells regardless of skill level.",
            "Increases damage from 3250%Atk to 7850%Atk per hit based on level 5.",
            "Increases factor weight of POW in skill formula from 5 to 10."
          ]
        },
        {
          "section": "10.6",
          "name": "Third Consecration",
          "notes": [
            "Reduces cooldown from 2 seconds to 1 second.",
            "Unifies area of effect to 7 x 7 cells regardless of skill level.",
            "Increases damage from 3250%Atk to 3500%Atk per hit based on level 5.",
            "Increases factor weight of POW in skill formula from 5 to 10."
          ]
        },
        {
          "section": "10.7",
          "name": "Third Flame Bomb",
          "notes": [
            "Reduces cooldown from 2 seconds to 1 second.",
            "Unifies area of effect to 7 x 7 cells regardless of skill level.",
            "Increases factor weight of POW in skill formula from 5 to 10."
          ]
        },
        {
          "section": "10.8",
          "name": "Oleum Sanctum",
          "notes": [
            "Reduces cooldown from 3 seconds to 2 seconds.",
            "Removes 0.5 seconds delay after skill.",
            "Increases SP consumption from 70 to 85 based on level 5.",
            "Increases damage from 2000%Atk to 10500%Atk based on level 5.",
            "Increases area of effect from 7 x 7 cells to 11 x 11 cells based on level 5.",
            "Increases factor weight of POW in skill formula from 3 to 5."
          ]
        },
        {
          "section": "10.9",
          "name": "Explosion Blaster",
          "notes": [
            "Reduces cooldown from 1 second to 0.7 seconds.",
            "Reduces SP consumption from 120 to 90 based on level 5.",
            "Increases damage from 3250%/4250%(Oleum Sanctum)Atk to 14000%/16000%(Oleum Sanctum)Atk per hit based on level 5.",
            "Increases area of effect from 9 x 9 cells to 11 x 11 cells based on level 5.",
            "Increases factor weight of POW in skill formula from 3/5 to 15/15."
          ]
        },
        {
          "section": "10.10",
          "name": "First Faith Power",
          "notes": [
            "Reworks cooldown from 30~150 seconds to 180~60 seconds (level 1~5).",
            "Unifies duration to 300 seconds regardless of skill level."
          ]
        },
        {
          "section": "10.11",
          "name": "Judge",
          "notes": [
            "Reworks cooldown from 30~150 seconds to 180~60 seconds (level 1~5).",
            "Unifies duration to 300 seconds regardless of skill level.",
            "Changes AP consumption from 50 regardless of skill level to scaling with skill level, from 80 on level 1 down to 40 on level 5."
          ]
        },
        {
          "section": "10.12",
          "name": "Third Exorcism Flame",
          "notes": [
            "Reworks cooldown from 30~150 seconds to 180~60 seconds (level 1~5).",
            "Unifies duration to 300 seconds regardless of skill level.",
            "Changes AP consumption from 100 regardless of skill level to scaling with skill level, from 120 on level 1 down to 60 on level 5."
          ]
        },
        {
          "section": "10.13",
          "name": "Massive Flame Blaster",
          "notes": [
            "Reduces cooldown from 60 seconds to 5 seconds.",
            "Removes 1 second delay after skill.",
            "Reduces AP consumption from 150 to 12.",
            "Increases damage from 8000%/11000%(demon and brute race)Atk to 21500%/23000%(demon and brute race)Atk based on level 10.",
            "Increases area of effect from 9 x 9 cells to 11 x 11 cells.",
            "Increases factor weight of POW in skill formula from 10/10(demon and brute race) to 15/15(demon and brute race).",
            "Reduces duration of Massive Flame Blaster buff from 300 seconds to 150 seconds."
          ]
        }
      ]
    },
    {
      "id": "rebalance-3",
      "label": "Rebalance 3",
      "file": "rebalances/inquisitor/rebalance_3.md",
      "heading": "10. Inquisitor",
      "className": "Inquisitor",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=12421",
      "scope": "main-and-expanded",
      "appliesTo": "Main and expanded classes",
      "maxJobLevel": 55,
      "pointLimit": 54,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "10.1",
          "name": "Oleum Sanctum",
          "notes": [
            "Reduces skill cooldown from 2 seconds to 1.5 seconds.",
            "No longer require Holy Water on casting.",
            "Reduces area of effect from 11 x 11 cells to 9 x 9 cells based on level 5."
          ]
        },
        {
          "section": "10.2",
          "name": "Explosion Blaster",
          "notes": [
            "Adds global cooldown by 1 second.",
            "Increases SP consumption from 90 to 125 based on level 5.",
            "Reduces area of effect from 11 x 11 cells to 9 x 9 cells based on level 5.",
            "Reduces base damage of from 14000%Atk to 12000%Atk based on level 5.",
            "Increases base damage against Oleum Sanctum debuff from 16000%Atk to 17600%Atk based on level 5.",
            "Reduces factor weight of POW in skill formula (without Oleum Sanctum debuff) from 15 to 10."
          ]
        },
        {
          "section": "10.3",
          "name": "Massive Flame Blaster",
          "notes": [
            "Adds global cooldown by 0.5 seconds.",
            "Reduces area of effect from 11 x 11 cells to 9 x 9 cells.",
            "Increases base damage from 21500%/23000%Atk to 23000%/24500%Atk based on level 10."
          ]
        }
      ]
    },
    {
      "id": "rebalance-4",
      "label": "Rebalance 4",
      "file": "rebalances/inquisitor/rebalance_4.md",
      "heading": "11. Inquisitor",
      "className": "Inquisitor",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=13917",
      "scope": "main-and-expanded",
      "appliesTo": "Main and expanded classes",
      "maxJobLevel": 55,
      "pointLimit": 54,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "11.1",
          "name": "Explosion Blaster",
          "notes": [
            "Increases base damage from 12000%/17600%(Oleum Sanctum)Atk to 13450%/18200%(Oleum Sanctum)Atk based on level 5."
          ]
        },
        {
          "section": "11.2",
          "name": "Third Punish",
          "notes": [
            "Reduces skill cooldown from 1 second to 0.7 seconds.",
            "Adds global cooldown by 0.5 seconds.",
            "Increases base damage from 7850%Atk to 9450%Atk based on level 5."
          ]
        },
        {
          "section": "11.3",
          "name": "Third Flame Bomb",
          "notes": [
            "Adds global cooldown by 0.7 seconds."
          ]
        }
      ]
    },
    {
      "id": "rebalance-5",
      "label": "Rebalance 5",
      "file": "rebalances/inquisitor/rebalance_5.md",
      "heading": "7. Inquisitor",
      "className": "Inquisitor",
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
      "file": "rebalances/inquisitor/added_skills.md",
      "skills": [
        "Blazing Flame Blast"
      ]
    }
  ],
  "skillTabs": [
    {
      "id": "current",
      "label": "Inquisitor",
      "pointLimit": 59,
      "tree": {
        "columns": 7,
        "rows": 5
      },
      "skills": [
        {
          "id": 5240,
          "imageFile": "5240.png",
          "name": "Will of Faith",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Will_of_Faith",
          "description": "Fortify your determination to eradicate evil.\nKnuckles inflict more Physical damage on Demon and Undead monsters and decrease Physical/Magic damage from them.",
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
          "iconUrl": "assets/divine-pride/skills/5240.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5240",
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
          "id": 5242,
          "imageFile": "5242.png",
          "name": "Sincere Faith",
          "maxLevel": 5,
          "prerequisiteText": "Will of Faith Lv. 1",
          "group": "Active",
          "type": "Support",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Sincere_Faith",
          "description": "Strengthen your faith, increasing your ASPD and adding durability to your attacks.\nCan't be used with Powerful Faith or Firm Faith.",
          "levelDetails": [],
          "fixedCastTime": "1 second",
          "variableCastTime": "1 second",
          "castDelay": "0 seconds",
          "cooldown": "60 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "54"
                },
                {
                  "level": 2,
                  "value": "58"
                },
                {
                  "level": 3,
                  "value": "62"
                },
                {
                  "level": 4,
                  "value": "66"
                },
                {
                  "level": 5,
                  "value": "70"
                }
              ]
            }
          ],
          "spCost": "50 + (Skill Level x 4)",
          "duration": "90 + (Skill Level x 30)",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5242.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5242",
          "tree": {
            "idx": 7,
            "row": 1,
            "col": 0,
            "columns": 7,
            "requirements": [
              {
                "id": 5240,
                "level": 1,
                "name": "Will of Faith",
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
                "value": "50 + (Skill Level x 4)"
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
                "value": "60 seconds"
              },
              {
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "Duration",
                "value": "90 + (Skill Level x 30)"
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
                      "sp-cost": "54"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "58"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "62"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "66"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "70"
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
          "id": 5239,
          "imageFile": "5239.png",
          "name": "Firm Faith",
          "maxLevel": 5,
          "prerequisiteText": "Will of Faith Lv. 1",
          "group": "Active",
          "type": "Support",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Firm_Faith",
          "description": "Strengthen your faith, increasing your Max HP and RES.\nCan't be used with Powerful Faith or Sincere Faith.",
          "levelDetails": [],
          "fixedCastTime": "1 second",
          "variableCastTime": "1 second",
          "castDelay": "0 seconds",
          "cooldown": "60 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "54"
                },
                {
                  "level": 2,
                  "value": "58"
                },
                {
                  "level": 3,
                  "value": "62"
                },
                {
                  "level": 4,
                  "value": "66"
                },
                {
                  "level": 5,
                  "value": "70"
                }
              ]
            }
          ],
          "spCost": "50 + (Skill Level x 4)",
          "duration": "90 + (Skill Level x 30)",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5239.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5239",
          "tree": {
            "idx": 8,
            "row": 1,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 5240,
                "level": 1,
                "name": "Will of Faith",
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
                "value": "50 + (Skill Level x 4)"
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
                "value": "60 seconds"
              },
              {
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "Duration",
                "value": "90 + (Skill Level x 30)"
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
                      "sp-cost": "54"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "58"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "62"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "66"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "70"
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
          "id": 5238,
          "imageFile": "5238.png",
          "name": "Powerful Faith",
          "maxLevel": 5,
          "prerequisiteText": "Will of Faith Lv. 1",
          "group": "Active",
          "type": "Support",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Powerful_Faith",
          "description": "Strengthen your faith, increasing your ATK and P. ATK.\nCan't be used with Firm Faith or Sincere Faith.",
          "levelDetails": [],
          "fixedCastTime": "1 second",
          "variableCastTime": "1 second",
          "castDelay": "0 seconds",
          "cooldown": "60 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "54"
                },
                {
                  "level": 2,
                  "value": "58"
                },
                {
                  "level": 3,
                  "value": "62"
                },
                {
                  "level": 4,
                  "value": "66"
                },
                {
                  "level": 5,
                  "value": "70"
                }
              ]
            }
          ],
          "spCost": "50 + (Skill Level x 4)",
          "duration": "90 + (Skill Level x 30)",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5238.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5238",
          "tree": {
            "idx": 9,
            "row": 1,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 5240,
                "level": 1,
                "name": "Will of Faith",
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
                "value": "50 + (Skill Level x 4)"
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
                "value": "60 seconds"
              },
              {
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "Duration",
                "value": "90 + (Skill Level x 30)"
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
                      "sp-cost": "54"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "58"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "62"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "66"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "70"
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
          "id": 5245,
          "imageFile": "5245.png",
          "name": "First Brand(First Brand)",
          "maxLevel": 5,
          "prerequisiteText": "basic skill",
          "group": "",
          "type": "Melee Physics",
          "target": "Single Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Deals Melee Physics damage to the target and targets within a 7x7 cell range around the target, and marks them for 5 seconds.\nDamage increases additionally based on the caster's base level and POW.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 1200%"
            },
            {
              "level": 2,
              "text": "ATK 2400%"
            },
            {
              "level": 3,
              "text": "ATK 3600%"
            },
            {
              "level": 4,
              "text": "ATK 4800%"
            },
            {
              "level": 5,
              "text": "ATK 6000%"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0 seconds",
          "cooldown": "0.3 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "46"
                },
                {
                  "level": 2,
                  "value": "50"
                },
                {
                  "level": 3,
                  "value": "54"
                },
                {
                  "level": 4,
                  "value": "58"
                },
                {
                  "level": 5,
                  "value": "62"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5245.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5245",
          "tree": {
            "idx": 10,
            "row": 1,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 5240,
                "level": 2,
                "name": "Will of Faith",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Melee Physics"
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
                "value": "0 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0.3 seconds"
              },
              {
                "label": "Target",
                "value": "Single Target"
              },
              {
                "label": "Damage",
                "value": "6,000% ATK"
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
                      "sp-cost": "46"
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
                      "sp-cost": "54"
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
                      "sp-cost": "62"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [
            {
              "skillName": "First Brand",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/inquisitor/rebalance_2.md",
              "section": "10.1",
              "notes": [
                "Reduces cooldown from 0.5 seconds to 0.3 seconds.",
                "Increases SP consumption from 50 to 62 based on level 5.",
                "Unifies brand duration to 5 second regardless of skill level.",
                "Unifies area of effect to 7 x 7 cells regardless of skill level.",
                "Increases cast range from 2 cells to 3 cells.",
                "Increases damage from 2250%Atk to 6000%Atk based on level 5.",
                "Increases factor weight of POW in skill formula from 3 to 5."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "0.5 seconds",
                  "after": "0.3 seconds",
                  "scope": "",
                  "source": "Reduces cooldown from 0.5 seconds to 0.3 seconds."
                },
                {
                  "label": "SP Cost",
                  "before": "50",
                  "after": "62",
                  "scope": "Lv 5",
                  "source": "Increases SP consumption from 50 to 62 based on level 5."
                },
                {
                  "label": "Cast Range",
                  "before": "2 cells",
                  "after": "3 cells",
                  "scope": "",
                  "source": "Increases cast range from 2 cells to 3 cells."
                },
                {
                  "label": "Damage",
                  "before": "2250%Atk",
                  "after": "6000%Atk",
                  "scope": "Lv 5",
                  "source": "Increases damage from 2250%Atk to 6000%Atk based on level 5."
                },
                {
                  "label": "Factor Weight Of Pow In Skill Formula",
                  "before": "3",
                  "after": "5",
                  "scope": "",
                  "source": "Increases factor weight of POW in skill formula from 3 to 5."
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
          "id": 5241,
          "imageFile": "5241.png",
          "name": "Oleum Sanctum",
          "maxLevel": 5,
          "prerequisiteText": "Aqua Benedicta 1, Will of Faith 3",
          "group": "Active",
          "type": "Ranged Physical",
          "target": "Instant Cast",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Oleum_Sanctum",
          "description": "Baptizes surrounding enemies around the user, deals long ranged physical damage,\ngives the debuff that the targets will taken more damage from long ranged physical damage for the skill duration.\nDamage is additionally increased depending on the user's base level and POW.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 2500%/Area of Effect 7x7cells/Duration: 3Sec"
            },
            {
              "level": 2,
              "text": "ATK 4500%/Area of Effect 7x7cells/Duration: 4Sec"
            },
            {
              "level": 3,
              "text": "ATK 6500%/Area of Effect 7x7cells/Duration: 5Sec"
            },
            {
              "level": 4,
              "text": "ATK 8500%/Area of Effect 9x9cells/Duration: 6Sec"
            },
            {
              "level": 5,
              "text": "ATK 10500%/Area of Effect 9x9cells/Duration: 7Sec"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0 seconds",
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
                  "value": "55"
                },
                {
                  "level": 3,
                  "value": "65"
                },
                {
                  "level": 4,
                  "value": "75"
                },
                {
                  "level": 5,
                  "value": "85"
                }
              ]
            }
          ],
          "spCost": "20 + (Skill Level × 10)",
          "cooldown": "3 seconds",
          "duration": "3~7 seconds",
          "castRange": "9 cells",
          "areaOfEffect": "3 x 3~7 x 7",
          "translations": {
            "pt-BR": {
              "name": " Oleum Sanctum ",
              "description": "Derrama Água Benta em oponentes ao seu redor, causando dano físico a distância.\nInimigos atingidos receberão o estado de [ Óleo Ungido ] por alguns segundos.\nATQ = {[Dano base + (POD × 3)] + Nv. de base ÷ 100}%",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Oleum_Sanctum"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/5241.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5241",
          "tree": {
            "idx": 13,
            "row": 1,
            "col": 6,
            "columns": 7,
            "requirements": [
              {
                "id": 31,
                "level": 1,
                "name": "Aqua Benedicta",
                "visible": false
              },
              {
                "id": 5240,
                "level": 3,
                "name": "Will of Faith",
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
                "value": "3 seconds"
              },
              {
                "label": "Cast Range",
                "value": "9 cells"
              },
              {
                "label": "Target",
                "value": "Instant Cast"
              },
              {
                "label": "Damage",
                "value": "10,500% ATK"
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
                  },
                  {
                    "id": "duration",
                    "label": "Duration"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "area-of-effect": "7x7",
                      "duration": "3 seconds",
                      "sp-cost": "45"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "7x7",
                      "duration": "4 seconds",
                      "sp-cost": "55"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "7x7",
                      "duration": "5 seconds",
                      "sp-cost": "65"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "9x9",
                      "duration": "6 seconds",
                      "sp-cost": "75"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "9x9",
                      "duration": "7 seconds",
                      "sp-cost": "85"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [
            {
              "skillName": "Oleum Sanctum",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/inquisitor/rebalance_1.md",
              "section": "10.1",
              "notes": [
                "Reduces cooldown from 6 seconds to 3 seconds based on level 5."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "6 seconds",
                  "after": "3 seconds",
                  "scope": "Lv 5",
                  "source": "Reduces cooldown from 6 seconds to 3 seconds based on level 5."
                }
              ]
            },
            {
              "skillName": "Oleum Sanctum",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/inquisitor/rebalance_2.md",
              "section": "10.8",
              "notes": [
                "Reduces cooldown from 3 seconds to 2 seconds.",
                "Removes 0.5 seconds delay after skill.",
                "Increases SP consumption from 70 to 85 based on level 5.",
                "Increases damage from 2000%Atk to 10500%Atk based on level 5.",
                "Increases area of effect from 7 x 7 cells to 11 x 11 cells based on level 5.",
                "Increases factor weight of POW in skill formula from 3 to 5."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "3 seconds",
                  "after": "2 seconds",
                  "scope": "",
                  "source": "Reduces cooldown from 3 seconds to 2 seconds."
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
                  "before": "70",
                  "after": "85",
                  "scope": "Lv 5",
                  "source": "Increases SP consumption from 70 to 85 based on level 5."
                },
                {
                  "label": "Damage",
                  "before": "2000%Atk",
                  "after": "10500%Atk",
                  "scope": "Lv 5",
                  "source": "Increases damage from 2000%Atk to 10500%Atk based on level 5."
                },
                {
                  "label": "Area of Effect",
                  "before": "7 x 7 cells",
                  "after": "11 x 11 cells",
                  "scope": "Lv 5",
                  "source": "Increases area of effect from 7 x 7 cells to 11 x 11 cells based on level 5."
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
              "skillName": "Oleum Sanctum",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/inquisitor/rebalance_3.md",
              "section": "10.1",
              "notes": [
                "Reduces skill cooldown from 2 seconds to 1.5 seconds.",
                "No longer require Holy Water on casting.",
                "Reduces area of effect from 11 x 11 cells to 9 x 9 cells based on level 5."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "2 seconds",
                  "after": "1.5 seconds",
                  "scope": "",
                  "source": "Reduces skill cooldown from 2 seconds to 1.5 seconds."
                },
                {
                  "label": "Area of Effect",
                  "before": "11 x 11 cells",
                  "after": "9 x 9 cells",
                  "scope": "Lv 5",
                  "source": "Reduces area of effect from 11 x 11 cells to 9 x 9 cells based on level 5."
                }
              ]
            }
          ],
          "api": {
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 5246,
          "imageFile": "5246.png",
          "name": "First Faith Power(First Faith Power)",
          "maxLevel": 5,
          "prerequisiteText": "basic skill",
          "group": "",
          "type": "Support",
          "target": "Self-Buff",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "300Accept the true belief and fight with it.\nAdditionally, while the Power of Belief state is maintained, you can use the Fallen Empire without consuming the device.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Skill Cooldown : 180seconds"
            },
            {
              "level": 2,
              "text": "Skill Cooldown : 150seconds"
            },
            {
              "level": 3,
              "text": "Skill Cooldown : 120seconds"
            },
            {
              "level": 4,
              "text": "Skill Cooldown : 90seconds"
            },
            {
              "level": 5,
              "text": "Skill Cooldown : 60seconds"
            }
          ],
          "fixedCastTime": "2 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0.5 seconds",
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5246.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5246",
          "tree": {
            "idx": 17,
            "row": 2,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 5240,
                "level": 3,
                "name": "Will of Faith",
                "visible": true
              },
              {
                "id": 5245,
                "level": 1,
                "name": "First Brand",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Support"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "Fixed Cast Time",
                "value": "2 seconds"
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
                "label": "Target",
                "value": "Self-Buff"
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
                    "id": "cooldown",
                    "label": "Cooldown"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "cooldown": "180 seconds",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "cooldown": "150 seconds",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "cooldown": "120 seconds",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "cooldown": "90 seconds",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "cooldown": "60 seconds",
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
              "skillName": "First Faith Power",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/inquisitor/rebalance_2.md",
              "section": "10.10",
              "notes": [
                "Reworks cooldown from 30~150 seconds to 180~60 seconds (level 1~5).",
                "Unifies duration to 300 seconds regardless of skill level."
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
          "id": 5247,
          "imageFile": "5247.png",
          "name": "Judge(Judge)",
          "maxLevel": 5,
          "prerequisiteText": "basic skill",
          "group": "",
          "type": "Support",
          "target": "Self-Buff",
          "recoversAp": "",
          "consumesAp": "80/70/60/50/40",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Available in Power of Conviction state.\nYou will become God's judge for 300 seconds and be able to execute judgment on evil deeds.\nAdditionally, in judgement mode, you can use the Fallen Empire and Flash Combo without consuming any equipment.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Skill Cooldown : 180seconds"
            },
            {
              "level": 2,
              "text": "Skill Cooldown : 150seconds"
            },
            {
              "level": 3,
              "text": "Skill Cooldown : 120seconds"
            },
            {
              "level": 4,
              "text": "Skill Cooldown : 90seconds"
            },
            {
              "level": 5,
              "text": "Skill Cooldown : 60seconds"
            }
          ],
          "fixedCastTime": "2 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0.5 seconds",
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5247.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5247",
          "tree": {
            "idx": 18,
            "row": 2,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 5246,
                "level": 1,
                "name": "First Faith Power",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Support"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "Fixed Cast Time",
                "value": "2 seconds"
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
                "label": "Target",
                "value": "Self-Buff"
              },
              {
                "label": "AP Consumed",
                "value": "80/70/60/50/40"
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
                    "id": "cooldown",
                    "label": "Cooldown"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "cooldown": "180 seconds",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "cooldown": "150 seconds",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "cooldown": "120 seconds",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "cooldown": "90 seconds",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "cooldown": "60 seconds",
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
          "id": 5254,
          "imageFile": "5254.png",
          "name": "Third Exor Flame(Third Exor Flame)",
          "maxLevel": 5,
          "prerequisiteText": "basic skill",
          "group": "",
          "type": "Support",
          "target": "Self-Buff",
          "recoversAp": "",
          "consumesAp": "120/105/90/75/60",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Available in Judgement status.\nEnters a powerful flame state of destruction that destroys all monsters for 300 seconds.\nAdditionally, in the Flame of Destruction state, you can use the Fallen Empire, Flash Combo, and Tiger Cannon without consuming any equipment.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Skill Cooldown : 180seconds"
            },
            {
              "level": 2,
              "text": "Skill Cooldown : 150seconds"
            },
            {
              "level": 3,
              "text": "Skill Cooldown : 120seconds"
            },
            {
              "level": 4,
              "text": "Skill Cooldown : 90seconds"
            },
            {
              "level": 5,
              "text": "Skill Cooldown : 60seconds"
            }
          ],
          "fixedCastTime": "2 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0.5 seconds",
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5254.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5254",
          "tree": {
            "idx": 19,
            "row": 2,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 5247,
                "level": 1,
                "name": "Judgment",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Support"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "Fixed Cast Time",
                "value": "2 seconds"
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
                "label": "Target",
                "value": "Self-Buff"
              },
              {
                "label": "AP Consumed",
                "value": "120/105/90/75/60"
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
                    "id": "cooldown",
                    "label": "Cooldown"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "cooldown": "180 seconds",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "cooldown": "150 seconds",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "cooldown": "120 seconds",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "cooldown": "90 seconds",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "cooldown": "60 seconds",
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
              "skillName": "Third Exorcism Flame",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/inquisitor/rebalance_1.md",
              "section": "10.4",
              "notes": [
                "Reduces AP consumption from 150 to 100."
              ],
              "specRows": [
                {
                  "label": "AP Consumed",
                  "before": "150",
                  "after": "100",
                  "scope": "",
                  "source": "Reduces AP consumption from 150 to 100."
                }
              ]
            },
            {
              "skillName": "Third Exorcism Flame",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/inquisitor/rebalance_2.md",
              "section": "10.12",
              "notes": [
                "Reworks cooldown from 30~150 seconds to 180~60 seconds (level 1~5).",
                "Unifies duration to 300 seconds regardless of skill level.",
                "Changes AP consumption from 100 regardless of skill level to scaling with skill level, from 120 on level 1 down to 60 on level 5."
              ],
              "specRows": [
                {
                  "label": "AP Consumed",
                  "before": "100 regardless of skill level",
                  "after": "scaling with skill level, from 120 on level 1 down to 60 on level 5",
                  "scope": "",
                  "source": "Changes AP consumption from 100 regardless of skill level to scaling with skill level, from 120 on level 1 down to 60 on level 5."
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
          "id": 5244,
          "imageFile": "5244.png",
          "name": "Explosion Blaster",
          "maxLevel": 5,
          "prerequisiteText": "Oleum Sanctum 1",
          "group": "Active",
          "type": "Ranged Physical",
          "target": "Instant Cast",
          "recoversAp": "4",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Explosion_Blaster",
          "description": "Blows the powerful bomb to deals long ranged physical damage to surrounding enemies around the user.\nDeals additional damage to the target who is inflicted by Oleum Sanctum.\nDamage is additionally increased depending on the user's base level and POW.\nHas a chance to trigger critical, critical chance is the user's Cri,\nIn the case of critical damage, half of the total critical damage increase options are applied.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 2400%/ 3800%(Oleum Sanctum)/Area of Effect 7x7 Cells"
            },
            {
              "level": 2,
              "text": "ATK 4800%/ 7250%(Oleum Sanctum)/Area of Effect 7x7 Cells"
            },
            {
              "level": 3,
              "text": "ATK 7200%/ 10700%(Oleum Sanctum)/Area of Effect 7x7 Cells"
            },
            {
              "level": 4,
              "text": "ATK 9600%/ 14150%(Oleum Sanctum)/Area of Effect 9x9 Cells"
            },
            {
              "level": 5,
              "text": "ATK 12000%/ 17600%(Oleum Sanctum)/Area of Effect 9x9 Cells"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "1 second",
          "cooldown": "0.7 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
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
                }
              ]
            }
          ],
          "spCost": "70 + (Skill Level x 10)",
          "castRange": "9 cells",
          "areaOfEffect": "5 x 5 ~ 9 x 9",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5244.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5244",
          "tree": {
            "idx": 20,
            "row": 2,
            "col": 6,
            "columns": 7,
            "requirements": [
              {
                "id": 5241,
                "level": 1,
                "name": "Oleum Sanctum",
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
                "value": "70 + (Skill Level x 10)"
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
                "value": "0.7 seconds"
              },
              {
                "label": "Cast Range",
                "value": "9 cells"
              },
              {
                "label": "Target",
                "value": "Instant Cast"
              },
              {
                "label": "AP Generated",
                "value": "4"
              },
              {
                "label": "Damage",
                "value": "12,000% ATK/17,600% ATK (Oleum Sanctum)"
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
                      "area-of-effect": "7x7",
                      "sp-cost": "105"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "110"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "115"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "9x9",
                      "sp-cost": "120"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "9x9",
                      "sp-cost": "125"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [
            {
              "skillName": "Explosion Blaster",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/inquisitor/rebalance_1.md",
              "section": "10.2",
              "notes": [
                "Reduces cooldown from 5 seconds to 1 second based on level 5.",
                "Removes delay after skill based on level 5.",
                "Reduces AP recovery rate from 5 to 4.",
                "Increases damage from 2250%Atk to 3250%Atk based on level 5.",
                "Increases damage to the target who is inflicted by Oleum Sanctum from 3000%Atk to 4250%Atk based on level 5.",
                "Applies critical damage, the critical chance is the user's Cri."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "5 seconds",
                  "after": "1 second",
                  "scope": "Lv 5",
                  "source": "Reduces cooldown from 5 seconds to 1 second based on level 5."
                },
                {
                  "label": "Cast Delay",
                  "before": "delay after skill based on level 5",
                  "after": "Removed",
                  "scope": "",
                  "source": "Removes delay after skill based on level 5."
                },
                {
                  "label": "AP Generated",
                  "before": "5",
                  "after": "4",
                  "scope": "",
                  "source": "Reduces AP recovery rate from 5 to 4."
                },
                {
                  "label": "Damage",
                  "before": "2250%Atk/3000%Atk (to the target who is inflicted by Oleum Sanctum)",
                  "after": "3250%Atk/4250%Atk (to the target who is inflicted by Oleum Sanctum)",
                  "scope": "Lv 5",
                  "source": "Increases damage from 2250%Atk to 3250%Atk based on level 5. / Increases damage to the target who is inflicted by Oleum Sanctum from 3000%Atk to 4250%Atk based on level 5."
                }
              ]
            },
            {
              "skillName": "Explosion Blaster",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/inquisitor/rebalance_2.md",
              "section": "10.9",
              "notes": [
                "Reduces cooldown from 1 second to 0.7 seconds.",
                "Reduces SP consumption from 120 to 90 based on level 5.",
                "Increases damage from 3250%/4250%(Oleum Sanctum)Atk to 14000%/16000%(Oleum Sanctum)Atk per hit based on level 5.",
                "Increases area of effect from 9 x 9 cells to 11 x 11 cells based on level 5.",
                "Increases factor weight of POW in skill formula from 3/5 to 15/15."
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
                  "before": "120",
                  "after": "90",
                  "scope": "Lv 5",
                  "source": "Reduces SP consumption from 120 to 90 based on level 5."
                },
                {
                  "label": "Damage",
                  "before": "3250%/4250%(Oleum Sanctum)Atk",
                  "after": "14000%/16000%(Oleum Sanctum)Atk per hit",
                  "scope": "Lv 5",
                  "source": "Increases damage from 3250%/4250%(Oleum Sanctum)Atk to 14000%/16000%(Oleum Sanctum)Atk per hit based on level 5."
                },
                {
                  "label": "Area of Effect",
                  "before": "9 x 9 cells",
                  "after": "11 x 11 cells",
                  "scope": "Lv 5",
                  "source": "Increases area of effect from 9 x 9 cells to 11 x 11 cells based on level 5."
                },
                {
                  "label": "Factor Weight Of Pow In Skill Formula",
                  "before": "3/5",
                  "after": "15/15",
                  "scope": "",
                  "source": "Increases factor weight of POW in skill formula from 3/5 to 15/15."
                }
              ]
            },
            {
              "skillName": "Explosion Blaster",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/inquisitor/rebalance_3.md",
              "section": "10.2",
              "notes": [
                "Adds global cooldown by 1 second.",
                "Increases SP consumption from 90 to 125 based on level 5.",
                "Reduces area of effect from 11 x 11 cells to 9 x 9 cells based on level 5.",
                "Reduces base damage of from 14000%Atk to 12000%Atk based on level 5.",
                "Increases base damage against Oleum Sanctum debuff from 16000%Atk to 17600%Atk based on level 5.",
                "Reduces factor weight of POW in skill formula (without Oleum Sanctum debuff) from 15 to 10."
              ],
              "specRows": [
                {
                  "label": "SP Cost",
                  "before": "90",
                  "after": "125",
                  "scope": "Lv 5",
                  "source": "Increases SP consumption from 90 to 125 based on level 5."
                },
                {
                  "label": "Area of Effect",
                  "before": "11 x 11 cells",
                  "after": "9 x 9 cells",
                  "scope": "Lv 5",
                  "source": "Reduces area of effect from 11 x 11 cells to 9 x 9 cells based on level 5."
                },
                {
                  "label": "Damage",
                  "before": "14000%Atk (of)/16000%Atk (against Oleum Sanctum debuff)",
                  "after": "12000%Atk (of)/17600%Atk (against Oleum Sanctum debuff)",
                  "scope": "Lv 5",
                  "source": "Reduces base damage of from 14000%Atk to 12000%Atk based on level 5. / Increases base damage against Oleum Sanctum debuff from 16000%Atk to 17600%Atk based on level 5."
                },
                {
                  "label": "Factor Weight Of Pow In Skill Formula (without Oleum Sanctum Debuff)",
                  "before": "15",
                  "after": "10",
                  "scope": "",
                  "source": "Reduces factor weight of POW in skill formula (without Oleum Sanctum debuff) from 15 to 10."
                }
              ]
            },
            {
              "skillName": "Explosion Blaster",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/inquisitor/rebalance_4.md",
              "section": "11.1",
              "notes": [
                "Increases base damage from 12000%/17600%(Oleum Sanctum)Atk to 13450%/18200%(Oleum Sanctum)Atk based on level 5."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "12000%/17600%(Oleum Sanctum)Atk",
                  "after": "13450%/18200%(Oleum Sanctum)Atk",
                  "scope": "Lv 5",
                  "source": "Increases base damage from 12000%/17600%(Oleum Sanctum)Atk to 13450%/18200%(Oleum Sanctum)Atk based on level 5."
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
          "id": 5249,
          "imageFile": "5249.png",
          "name": "Second Faith(Second Faith)",
          "maxLevel": 5,
          "prerequisiteText": "basic skill",
          "group": "",
          "type": "Melee Physics",
          "target": "Single Target",
          "recoversAp": "4",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Power of Faith, Judge, Available in Flame of Destruction state.\nDeals Melee Physics damage to the target and any targets within a 7x7 cell radius around them that have a Mark or Judgement Mark, and applies the Mark of Judgement for 5 seconds.\nIf the Mark of Judgement has already been applied, the duration of the effect is refreshed.\nDamage increases additionally based on the caster's base level and POW.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 2400%"
            },
            {
              "level": 2,
              "text": "ATK 4700%"
            },
            {
              "level": 3,
              "text": "ATK 7000%"
            },
            {
              "level": 4,
              "text": "ATK 9300%"
            },
            {
              "level": 5,
              "text": "ATK 11600%"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0 seconds",
          "cooldown": "0.7 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "41"
                },
                {
                  "level": 2,
                  "value": "47"
                },
                {
                  "level": 3,
                  "value": "53"
                },
                {
                  "level": 4,
                  "value": "59"
                },
                {
                  "level": 5,
                  "value": "65"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5249.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5249",
          "tree": {
            "idx": 24,
            "row": 3,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 5246,
                "level": 1,
                "name": "First Faith Power",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Melee Physics"
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
                "value": "0 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0.7 seconds"
              },
              {
                "label": "Target",
                "value": "Single Target"
              },
              {
                "label": "AP Generated",
                "value": "4"
              },
              {
                "label": "Damage",
                "value": "11,600% ATK"
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
                      "sp-cost": "41"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "47"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "53"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "59"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
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
              "skillName": "Second Faith",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/inquisitor/rebalance_2.md",
              "section": "10.2",
              "notes": [
                "Reduces cooldown from 1 second to 0.7 seconds.",
                "Increases SP consumption from 60 to 65 based on level 5.",
                "Increases AP recovery rate from 1 to 4.",
                "Unifies area of effect to 7 x 7 cells regardless of skill level.",
                "Increases damage from 2500%Atk to 11600%Atk based on level 5.",
                "Increases factor weight of POW in skill formula from 4 to 5."
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
                  "before": "60",
                  "after": "65",
                  "scope": "Lv 5",
                  "source": "Increases SP consumption from 60 to 65 based on level 5."
                },
                {
                  "label": "AP Generated",
                  "before": "1",
                  "after": "4",
                  "scope": "",
                  "source": "Increases AP recovery rate from 1 to 4."
                },
                {
                  "label": "Damage",
                  "before": "2500%Atk",
                  "after": "11600%Atk",
                  "scope": "Lv 5",
                  "source": "Increases damage from 2500%Atk to 11600%Atk based on level 5."
                },
                {
                  "label": "Factor Weight Of Pow In Skill Formula",
                  "before": "4",
                  "after": "5",
                  "scope": "",
                  "source": "Increases factor weight of POW in skill formula from 4 to 5."
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
          "id": 5250,
          "imageFile": "5250.png",
          "name": "Second Judgement(Second Judgement)",
          "maxLevel": 5,
          "prerequisiteText": "basic skill",
          "group": "",
          "type": "Melee Physics",
          "target": "Single Target",
          "recoversAp": "4",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Judge, Available in Flame of Destruction state.\nDeals Melee Physics damage to the target and any targets within a 7x7 cell radius around them that have a Mark or Judgement Mark, and applies the Mark of Judgement for 5 seconds.\nIf the Mark of Judgement has already been applied, its duration is refreshed.\nDamage increases additionally based on the caster's base level and POW.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 2750%"
            },
            {
              "level": 2,
              "text": "ATK 5350%"
            },
            {
              "level": 3,
              "text": "ATK 7950%"
            },
            {
              "level": 4,
              "text": "ATK 10550%"
            },
            {
              "level": 5,
              "text": "ATK 13150%"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0 seconds",
          "cooldown": "0.7 seconds",
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
                  "value": "55"
                },
                {
                  "level": 3,
                  "value": "60"
                },
                {
                  "level": 4,
                  "value": "65"
                },
                {
                  "level": 5,
                  "value": "70"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5250.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5250",
          "tree": {
            "idx": 25,
            "row": 3,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 5247,
                "level": 1,
                "name": "Judgment",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Melee Physics"
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
                "value": "0 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0.7 seconds"
              },
              {
                "label": "Target",
                "value": "Single Target"
              },
              {
                "label": "AP Generated",
                "value": "4"
              },
              {
                "label": "Damage",
                "value": "13,150% ATK"
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
                      "sp-cost": "55"
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
                      "sp-cost": "65"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "70"
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
          "id": 5248,
          "imageFile": "5248.png",
          "name": "Second Flame(Second Flame)",
          "maxLevel": 5,
          "prerequisiteText": "basic skill",
          "group": "",
          "type": "Melee Physics",
          "target": "Single Target",
          "recoversAp": "4",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Available in Flame of Destruction state.\nDeals Melee Physics damage to the target and any targets within a 7x7 cell radius around them that have a Mark or Judgement Mark, and applies the Mark of Judgement for 5 seconds.\nIf the Mark of Judgement has already been applied, its duration is refreshed.\nDamage increases additionally based on the caster's base level and POW.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 3100%"
            },
            {
              "level": 2,
              "text": "ATK 6000%"
            },
            {
              "level": 3,
              "text": "ATK 8900%"
            },
            {
              "level": 4,
              "text": "ATK 11800%"
            },
            {
              "level": 5,
              "text": "ATK 14700%"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0 seconds",
          "cooldown": "0.7 seconds",
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
                  "value": "57"
                },
                {
                  "level": 3,
                  "value": "63"
                },
                {
                  "level": 4,
                  "value": "69"
                },
                {
                  "level": 5,
                  "value": "75"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5248.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5248",
          "tree": {
            "idx": 26,
            "row": 3,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 5254,
                "level": 1,
                "name": "Third Exorcism Flame",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Melee Physics"
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
                "value": "0 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0.7 seconds"
              },
              {
                "label": "Target",
                "value": "Single Target"
              },
              {
                "label": "AP Generated",
                "value": "4"
              },
              {
                "label": "Damage",
                "value": "14,700% ATK"
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
                      "sp-cost": "57"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "63"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "69"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "75"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [
            {
              "skillName": "Second Flame",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/inquisitor/rebalance_2.md",
              "section": "10.4",
              "notes": [
                "Reduces cooldown from 1 second to 0.7 seconds.",
                "Increases SP consumption from 70 to 75 based on level 5.",
                "Increases AP recovery rate from 3 to 4.",
                "Unifies area of effect to 7 x 7 cells regardless of skill level.",
                "Increases damage from 2750%Atk to 14700%Atk based on level 5.",
                "Increases factor weight of POW in skill formula from 4 to 9."
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
                  "before": "70",
                  "after": "75",
                  "scope": "Lv 5",
                  "source": "Increases SP consumption from 70 to 75 based on level 5."
                },
                {
                  "label": "AP Generated",
                  "before": "3",
                  "after": "4",
                  "scope": "",
                  "source": "Increases AP recovery rate from 3 to 4."
                },
                {
                  "label": "Damage",
                  "before": "2750%Atk",
                  "after": "14700%Atk",
                  "scope": "Lv 5",
                  "source": "Increases damage from 2750%Atk to 14700%Atk based on level 5."
                },
                {
                  "label": "Factor Weight Of Pow In Skill Formula",
                  "before": "4",
                  "after": "9",
                  "scope": "",
                  "source": "Increases factor weight of POW in skill formula from 4 to 9."
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
          "id": 5243,
          "imageFile": "5243.png",
          "name": "Massive Flame Blaster",
          "maxLevel": 10,
          "prerequisiteText": "Oleum Sanctum 3, Explosion Blaster 3, Will of Faith 5",
          "group": "Active(AP)",
          "type": "Ranged Physical",
          "target": "Instant Cast",
          "recoversAp": "",
          "consumesAp": "150",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Massive_Flame_Blaster",
          "description": "Creates the powerful explosion to deals long ranged physical damage to surrounding enemies within 9 x 9 cells around the user.\nThis skill deals additional damage against demon and brute race monsters.\nDamage is additionally increased depending on the user's base level and POW.\nWhen using, adds the ability that removes spirit sphere consumption of Lightning Ride and Rampage Blast for 150 seconds.\nHas a chance to trigger critical, critical chance is the user's Cri,\nIn the case of critical damage, half of the total critical damage increase options are applied.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 2300%/ 2450%(Demon, Brute)"
            },
            {
              "level": 2,
              "text": "ATK 4600%/ 4900%(Demon, Brute)"
            },
            {
              "level": 3,
              "text": "ATK 6900%/ 7350%(Demon, Brute)"
            },
            {
              "level": 4,
              "text": "ATK 9200%/ 9800%(Demon, Brute)"
            },
            {
              "level": 5,
              "text": "ATK 11500%/ 12250%(Demon, Brute)"
            },
            {
              "level": 6,
              "text": "ATK 13800%/ 14700%(Demon, Brute)"
            },
            {
              "level": 7,
              "text": "ATK 16100%/ 17150%(Demon, Brute)"
            },
            {
              "level": 8,
              "text": "ATK 18400%/ 19600%(Demon, Brute)"
            },
            {
              "level": 9,
              "text": "ATK 20700%/ 22050%(Demon, Brute)"
            },
            {
              "level": 10,
              "text": "ATK 23000%/ 24500%(Demon, Brute)"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "3.5 seconds",
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
          "spCost": "100",
          "duration": "150 seconds",
          "castRange": "9 cells",
          "areaOfEffect": "9×9",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5243.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5243",
          "tree": {
            "idx": 27,
            "row": 3,
            "col": 6,
            "columns": 7,
            "requirements": [
              {
                "id": 5240,
                "level": 5,
                "name": "Will of Faith",
                "visible": true
              },
              {
                "id": 5241,
                "level": 3,
                "name": "Oleum Sanctum",
                "visible": true
              },
              {
                "id": 5244,
                "level": 3,
                "name": "Explosion Blaster",
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
                "label": "SP Cost",
                "value": "100"
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
                "value": "3.5 seconds"
              },
              {
                "label": "Cast Range",
                "value": "9 cells"
              },
              {
                "label": "Target",
                "value": "Instant Cast"
              },
              {
                "label": "Area of Effect",
                "value": "9×9"
              },
              {
                "label": "Duration",
                "value": "150 seconds"
              },
              {
                "label": "AP Consumed",
                "value": "150"
              },
              {
                "label": "Damage",
                "value": "23,000% ATK/24,500% ATK (Demon, Brute)"
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
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "100"
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
          "balanceNotes": [
            {
              "skillName": "Massive Flame Blaster",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/inquisitor/rebalance_1.md",
              "section": "10.5",
              "notes": [
                "Applies critical damage, the critical chance is the user's Cri."
              ],
              "specRows": []
            },
            {
              "skillName": "Massive Flame Blaster",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/inquisitor/rebalance_2.md",
              "section": "10.13",
              "notes": [
                "Reduces cooldown from 60 seconds to 5 seconds.",
                "Removes 1 second delay after skill.",
                "Reduces AP consumption from 150 to 12.",
                "Increases damage from 8000%/11000%(demon and brute race)Atk to 21500%/23000%(demon and brute race)Atk based on level 10.",
                "Increases area of effect from 9 x 9 cells to 11 x 11 cells.",
                "Increases factor weight of POW in skill formula from 10/10(demon and brute race) to 15/15(demon and brute race).",
                "Reduces duration of Massive Flame Blaster buff from 300 seconds to 150 seconds."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "60 seconds",
                  "after": "5 seconds",
                  "scope": "",
                  "source": "Reduces cooldown from 60 seconds to 5 seconds."
                },
                {
                  "label": "Cast Delay",
                  "before": "1 second delay",
                  "after": "Removed",
                  "scope": "",
                  "source": "Removes 1 second delay after skill."
                },
                {
                  "label": "AP Consumed",
                  "before": "150",
                  "after": "12",
                  "scope": "",
                  "source": "Reduces AP consumption from 150 to 12."
                },
                {
                  "label": "Damage",
                  "before": "8000%/11000%(demon and brute race)Atk",
                  "after": "21500%/23000%(demon and brute race)Atk",
                  "scope": "Lv 10",
                  "source": "Increases damage from 8000%/11000%(demon and brute race)Atk to 21500%/23000%(demon and brute race)Atk based on level 10."
                },
                {
                  "label": "Area of Effect",
                  "before": "9 x 9 cells",
                  "after": "11 x 11 cells",
                  "scope": "",
                  "source": "Increases area of effect from 9 x 9 cells to 11 x 11 cells."
                },
                {
                  "label": "Factor Weight Of Pow In Skill Formula",
                  "before": "10/10(demon and brute race)",
                  "after": "15/15(demon and brute race)",
                  "scope": "",
                  "source": "Increases factor weight of POW in skill formula from 10/10(demon and brute race) to 15/15(demon and brute race)."
                },
                {
                  "label": "Duration Of Massive Flame Blaster Buff",
                  "before": "300 seconds",
                  "after": "150 seconds",
                  "scope": "",
                  "source": "Reduces duration of Massive Flame Blaster buff from 300 seconds to 150 seconds."
                }
              ]
            },
            {
              "skillName": "Massive Flame Blaster",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/inquisitor/rebalance_3.md",
              "section": "10.3",
              "notes": [
                "Adds global cooldown by 0.5 seconds.",
                "Reduces area of effect from 11 x 11 cells to 9 x 9 cells.",
                "Increases base damage from 21500%/23000%Atk to 23000%/24500%Atk based on level 10."
              ],
              "specRows": [
                {
                  "label": "Area of Effect",
                  "before": "11 x 11 cells",
                  "after": "9 x 9 cells",
                  "scope": "",
                  "source": "Reduces area of effect from 11 x 11 cells to 9 x 9 cells."
                },
                {
                  "label": "Damage",
                  "before": "21500%/23000%Atk",
                  "after": "23000%/24500%Atk",
                  "scope": "Lv 10",
                  "source": "Increases base damage from 21500%/23000%Atk to 23000%/24500%Atk based on level 10."
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
          "id": 5251,
          "imageFile": "5251.png",
          "name": "Third Punish(Third Punish)",
          "maxLevel": 5,
          "prerequisiteText": "basic skill",
          "group": "",
          "type": "Melee Physics",
          "target": "Single Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Power of Faith, Judge, Available in Flame of Destruction state.\nDeals Melee Physics damage 3 times to the target and any target within a 7x7 cell area around it with the Mark of Judgement, and erases the target's Mark of Judgement.\nDamage increases additionally based on the caster's base level and POW.\nWhen cast, an additional optical axis effect is triggered.\nCritical damage is applied based on the caster's critical probability.\nIn case of critical damage, half of the total critical damage increase options is applied.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Per hit ATK 1850%"
            },
            {
              "level": 2,
              "text": "Per hit ATK 3350%"
            },
            {
              "level": 3,
              "text": "Per hit ATK 4850%"
            },
            {
              "level": 4,
              "text": "Per hit ATK 6350%"
            },
            {
              "level": 5,
              "text": "Per hit ATK 7850%"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "0.7 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "56"
                },
                {
                  "level": 2,
                  "value": "62"
                },
                {
                  "level": 3,
                  "value": "68"
                },
                {
                  "level": 4,
                  "value": "74"
                },
                {
                  "level": 5,
                  "value": "80"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5251.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5251",
          "tree": {
            "idx": 31,
            "row": 4,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 5249,
                "level": 2,
                "name": "Second Faith",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Melee Physics"
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
                "label": "Target",
                "value": "Single Target"
              },
              {
                "label": "Damage",
                "value": "7,850% ATK per hit"
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
                      "sp-cost": "56"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "62"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "68"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "74"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
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
          "id": 5253,
          "imageFile": "5253.png",
          "name": "Third Consecration(Third Consecration)",
          "maxLevel": 5,
          "prerequisiteText": "basic skill",
          "group": "",
          "type": "Melee Physics",
          "target": "Single Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Judge, Available in Flame of Destruction state.\nDeals Melee Physics damage 5 times to the target and any target within a 7x7 cell area around it with the Mark of Judgement, and removes the target's Mark of Judgement.\nDamage increases additionally based on the caster's base level and POW.\nAdditionally, the caster receives HP and SP Recovery effects from the power of purification, and the amount of Recovery increases based on the skill level and the caster's base level.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Per hit ATK 700%"
            },
            {
              "level": 2,
              "text": "Per hit ATK 1400%"
            },
            {
              "level": 3,
              "text": "Per hit ATK 2100%"
            },
            {
              "level": 4,
              "text": "Per hit ATK 2800%"
            },
            {
              "level": 5,
              "text": "Per hit ATK 3500%"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0 seconds",
          "cooldown": "0.7 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "65"
                },
                {
                  "level": 2,
                  "value": "70"
                },
                {
                  "level": 3,
                  "value": "75"
                },
                {
                  "level": 4,
                  "value": "80"
                },
                {
                  "level": 5,
                  "value": "85"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5253.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5253",
          "tree": {
            "idx": 32,
            "row": 4,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 5250,
                "level": 2,
                "name": "Second Judgment",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Melee Physics"
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
                "value": "0 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0.7 seconds"
              },
              {
                "label": "Target",
                "value": "Single Target"
              },
              {
                "label": "Damage",
                "value": "3,500% ATK per hit"
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
                      "sp-cost": "65"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "70"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "75"
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
                      "sp-cost": "85"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [
            {
              "skillName": "Third Consecration",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/inquisitor/rebalance_1.md",
              "section": "10.7",
              "notes": [
                "Changes damage logic from 3 split hits to 5 cumulative hits."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "3 split hits (logic)",
                  "after": "5 cumulative hits (logic)",
                  "scope": "",
                  "source": "Changes damage logic from 3 split hits to 5 cumulative hits."
                }
              ]
            },
            {
              "skillName": "Third Consecration",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/inquisitor/rebalance_2.md",
              "section": "10.6",
              "notes": [
                "Reduces cooldown from 2 seconds to 1 second.",
                "Unifies area of effect to 7 x 7 cells regardless of skill level.",
                "Increases damage from 3250%Atk to 3500%Atk per hit based on level 5.",
                "Increases factor weight of POW in skill formula from 5 to 10."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "2 seconds",
                  "after": "1 second",
                  "scope": "",
                  "source": "Reduces cooldown from 2 seconds to 1 second."
                },
                {
                  "label": "Damage",
                  "before": "3250%Atk",
                  "after": "3500%Atk per hit",
                  "scope": "Lv 5",
                  "source": "Increases damage from 3250%Atk to 3500%Atk per hit based on level 5."
                },
                {
                  "label": "Factor Weight Of Pow In Skill Formula",
                  "before": "5",
                  "after": "10",
                  "scope": "",
                  "source": "Increases factor weight of POW in skill formula from 5 to 10."
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
          "id": 5252,
          "imageFile": "5252.png",
          "name": "Third Flame Bomb(Third Flame Bomb)",
          "maxLevel": 5,
          "prerequisiteText": "basic skill",
          "group": "",
          "type": "Melee Physics",
          "target": "Single Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Available in Flame of Destruction state.\nDeals Melee Physics damage to the target and any targets within a 7x7 cell area around it with the Mark of Judgement, and erases the target's Mark of Judgement.\nAttacks up to 3 times depending on the number of devices currently in possession. Damage increases additionally based on the caster's base level and POW.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Per hit ATK (650+MHP 20%)%"
            },
            {
              "level": 2,
              "text": "Per hit ATK (1300+MHP 20%)%"
            },
            {
              "level": 3,
              "text": "Per hit ATK (1950+MHP 20%)%"
            },
            {
              "level": 4,
              "text": "Per hit ATK (2600+MHP 20%)%"
            },
            {
              "level": 5,
              "text": "Per hit ATK (3250+MHP 20%)%"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0.7 seconds",
          "cooldown": "1 second",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "74"
                },
                {
                  "level": 2,
                  "value": "78"
                },
                {
                  "level": 3,
                  "value": "82"
                },
                {
                  "level": 4,
                  "value": "86"
                },
                {
                  "level": 5,
                  "value": "90"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5252.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5252",
          "tree": {
            "idx": 33,
            "row": 4,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 5248,
                "level": 2,
                "name": "Second Flame",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Melee Physics"
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
                "value": "0 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.7 seconds"
              },
              {
                "label": "Cooldown",
                "value": "1 second"
              },
              {
                "label": "Target",
                "value": "Single Target"
              },
              {
                "label": "Damage",
                "value": "(3250 + MHP 20%)% ATK per hit"
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
                      "sp-cost": "74"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "78"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "82"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "86"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "90"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [
            {
              "skillName": "Third Flame Bomb",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/inquisitor/rebalance_1.md",
              "section": "10.8",
              "notes": [
                "Applies 20% of the user's MaxHP to the skill damage factor."
              ],
              "specRows": []
            },
            {
              "skillName": "Third Flame Bomb",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/inquisitor/rebalance_2.md",
              "section": "10.7",
              "notes": [
                "Reduces cooldown from 2 seconds to 1 second.",
                "Unifies area of effect to 7 x 7 cells regardless of skill level.",
                "Increases factor weight of POW in skill formula from 5 to 10."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "2 seconds",
                  "after": "1 second",
                  "scope": "",
                  "source": "Reduces cooldown from 2 seconds to 1 second."
                },
                {
                  "label": "Factor Weight Of Pow In Skill Formula",
                  "before": "5",
                  "after": "10",
                  "scope": "",
                  "source": "Increases factor weight of POW in skill formula from 5 to 10."
                }
              ]
            },
            {
              "skillName": "Third Flame Bomb",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/inquisitor/rebalance_4.md",
              "section": "11.3",
              "notes": [
                "Adds global cooldown by 0.7 seconds."
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
          "id": 6519,
          "imageFile": "6519.png",
          "name": "Blazing Flame Blast",
          "maxLevel": 5,
          "prerequisiteText": "Massive Flame Blaster level 7",
          "group": "Active",
          "type": "Ranged Physical",
          "target": "Single target",
          "recoversAp": "2",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Can only be used in Fury state.\nInflicts long ranged physical damage to the target ,if the user is under Massive Flame Blaster buff, the skill will deal more damage.\nDeals additional damage depends on user's base level and POW, has a chance to trigger critical, critical chance is the user's Cri.\nThe effectiveness of critical modifier is applied by half.",
          "levelDetails": [
            {
              "level": 1,
              "text": "5800% Atk / 7700% Atk (Massive Flame Blaster)."
            },
            {
              "level": 2,
              "text": "9600% Atk / 11900% Atk (Massive Flame Blaster)."
            },
            {
              "level": 3,
              "text": "13400% Atk / 16100% Atk (Massive Flame Blaster)."
            },
            {
              "level": 4,
              "text": "17200% Atk / 20300% Atk (Massive Flame Blaster)."
            },
            {
              "level": 5,
              "text": "21000% Atk / 24500% Atk (Massive Flame Blaster)."
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "0.5 seconds",
          "castDelay": "1 second",
          "cooldown": "0.7 seconds",
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6519.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6519",
          "tree": {
            "idx": 34,
            "row": 4,
            "col": 6,
            "columns": 7,
            "requirements": [
              {
                "id": 5243,
                "level": 7,
                "name": "Massive Flame Blaster",
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
                "value": "21,000% ATK/24,500% ATK (Massive Flame Blaster)"
              }
            ],
            "levelTables": []
          },
          "balanceNotes": [
            {
              "skillName": "Blazing Flame Blast",
              "versionId": "rebalance-5",
              "versionLabel": "Rebalance 5",
              "file": "rebalances/inquisitor/added_skills.md",
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
        }
      ]
    },
    {
      "id": "previous-1",
      "label": "Sura",
      "pointLimit": 69,
      "tree": {
        "columns": 7,
        "rows": 6
      },
      "skills": [
        {
          "id": 2341,
          "imageFile": "2341.png",
          "name": "Power Implantation",
          "maxLevel": 1,
          "prerequisiteText": "Summon Spirit Sphere 5",
          "group": "Active / Special",
          "type": "",
          "target": "Player",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Power_Implantation",
          "description": "Transfers all of your Spirit Spheres to the selected target.",
          "levelDetails": [],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "1.5 seconds",
          "castDelay": "0 seconds",
          "cooldown": "0 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "50"
                }
              ]
            },
            {
              "label": "Range",
              "values": [
                {
                  "level": 1,
                  "value": "3 cells"
                }
              ]
            }
          ],
          "spCost": "50",
          "castRange": "9 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2341.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2341",
          "tree": {
            "idx": 0,
            "row": 0,
            "col": 0,
            "columns": 7,
            "requirements": [
              {
                "id": 261,
                "level": 5,
                "name": "Summon Spirit Sphere",
                "visible": false
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
                "value": "1"
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
                "value": "1.5 seconds"
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
                      "range": "3 cells"
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
          "id": 2518,
          "imageFile": "2518.png",
          "name": "Lightning Ride",
          "maxLevel": 5,
          "prerequisiteText": "Spirit Sphere 3",
          "group": "Active / Damage",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Lightning_Ride",
          "description": "Inflicts Ranged Physical Damage to all enemies in a set area around the targeted location by using 2 Spheres.\nDamage increases depending on caster's base level, and if the equipped weapon is a Knuckle, this skill will inflict additional damage.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 40%/ 90%(Knuckle)/Area of Effect 3 x 3/1 time attack"
            },
            {
              "level": 2,
              "text": "ATK 80%/ 180%(Knuckle)/Area of Effect 3 x 3/2 time attack"
            },
            {
              "level": 3,
              "text": "ATK 120%/270%(Knuckle)/Area of Effect 5 x 5/3 time attack"
            },
            {
              "level": 4,
              "text": "ATK 160%/360%(Knuckle)/Area of Effect 5 x 5/4 time attack"
            },
            {
              "level": 5,
              "text": "ATK 200%/450%(Knuckle)/Area of Effect 7 x 7/5 time attack"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "1 second",
          "castDelay": "0 seconds",
          "cooldown": "0.5 seconds",
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
                  "value": "30"
                },
                {
                  "level": 3,
                  "value": "35"
                },
                {
                  "level": 4,
                  "value": "40"
                },
                {
                  "level": 5,
                  "value": "45"
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
                  "value": "1"
                },
                {
                  "level": 2,
                  "value": "2"
                },
                {
                  "level": 3,
                  "value": "3"
                },
                {
                  "level": 4,
                  "value": "4"
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
                  "value": "50"
                },
                {
                  "level": 2,
                  "value": "100"
                },
                {
                  "level": 3,
                  "value": "150"
                },
                {
                  "level": 4,
                  "value": "200"
                },
                {
                  "level": 5,
                  "value": "250"
                }
              ]
            }
          ],
          "spCost": "20 + (Skill Level × 2)",
          "castRange": "9 cells",
          "areaOfEffect": "3 x 3 ~ 7 x 7",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2518.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2518",
          "tree": {
            "idx": 1,
            "row": 0,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 267,
                "level": 3,
                "name": "Throw Spirit Sphere",
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
                "label": "SP Cost",
                "value": "20 + (Skill Level × 2)"
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
                "value": "0 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0.5 seconds"
              },
              {
                "label": "Cast Range",
                "value": "9 cells"
              },
              {
                "label": "Target",
                "value": "Enemy"
              },
              {
                "label": "Area of Effect",
                "value": "3 x 3 ~ 7 x 7"
              },
              {
                "label": "Damage",
                "value": "200% ATK/450% ATK (Knuckle)"
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
                    "id": "range",
                    "label": "Range"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "25",
                      "range": "11 cells",
                      "data-1": "1",
                      "data-2": "1",
                      "data-3": "50"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "30",
                      "range": "11 cells",
                      "data-1": "1",
                      "data-2": "2",
                      "data-3": "100"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "35",
                      "range": "11 cells",
                      "data-1": "2",
                      "data-2": "3",
                      "data-3": "150"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "40",
                      "range": "11 cells",
                      "data-1": "2",
                      "data-2": "4",
                      "data-3": "200"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "45",
                      "range": "11 cells",
                      "data-1": "3",
                      "data-2": "5",
                      "data-3": "250"
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
          "id": 2326,
          "imageFile": "2326.png",
          "name": "Dragon Combo",
          "maxLevel": 10,
          "prerequisiteText": "Raging Trifecta Blow 5",
          "group": "Active / Damage",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Dragon_Combo",
          "description": "Kicks twice, inflicts Melee Physical Damage to a single target. Can use with Fallen Empire as a combo.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 180% / Chance to stun 2%"
            },
            {
              "level": 2,
              "text": "ATK 260% / Chance to stun 3%"
            },
            {
              "level": 3,
              "text": "ATK 340% / Chance to stun 4%"
            },
            {
              "level": 4,
              "text": "ATK 420% / Chance to stun 5%"
            },
            {
              "level": 5,
              "text": "ATK 500% / Chance to stun 6%"
            },
            {
              "level": 6,
              "text": "ATK 580% / Chance to stun 7%"
            },
            {
              "level": 7,
              "text": "ATK 660% / Chance to stun 8%"
            },
            {
              "level": 8,
              "text": "ATK 740% / Chance to stun 9%"
            },
            {
              "level": 9,
              "text": "ATK 820% / Chance to stun 10%"
            },
            {
              "level": 10,
              "text": "ATK 900% / Chance to stun 11%"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0 seconds",
          "cooldown": "0 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
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
                },
                {
                  "level": 6,
                  "value": "8"
                },
                {
                  "level": 7,
                  "value": "9"
                },
                {
                  "level": 8,
                  "value": "10"
                },
                {
                  "level": 9,
                  "value": "11"
                },
                {
                  "level": 10,
                  "value": "12"
                }
              ]
            },
            {
              "label": "Data 1",
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
                },
                {
                  "level": 6,
                  "value": "70"
                },
                {
                  "level": 7,
                  "value": "80"
                },
                {
                  "level": 8,
                  "value": "90"
                },
                {
                  "level": 9,
                  "value": "100"
                },
                {
                  "level": 10,
                  "value": "110"
                }
              ]
            }
          ],
          "spCost": "(Skill Level + 2)",
          "castRange": "Melee",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2326.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2326",
          "tree": {
            "idx": 2,
            "row": 0,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 263,
                "level": 5,
                "name": "Raging Trifecta Blow",
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
                "value": "(Skill Level + 2)"
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
                "value": "0 seconds"
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
                "value": "900% ATK"
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
                      "sp-cost": "3",
                      "data-1": "20"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "4",
                      "data-1": "30"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "5",
                      "data-1": "40"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "6",
                      "data-1": "50"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "7",
                      "data-1": "60"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "8",
                      "data-1": "70"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "9",
                      "data-1": "80"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "10",
                      "data-1": "90"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "11",
                      "data-1": "100"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "sp-cost": "12",
                      "data-1": "110"
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
          "id": 2327,
          "imageFile": "2327.png",
          "name": "Sky Blow",
          "maxLevel": 5,
          "prerequisiteText": "Dragon Combo 3",
          "group": "Active / Damage",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Sky_Blow",
          "description": "Spinning blow that kicks up a storm, dealing damage to all targets in an area. Damage increases as BaseLv and AGI increases.",
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
            }
          ],
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
                }
              ]
            },
            {
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "2"
                },
                {
                  "level": 2,
                  "value": "2"
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
                  "value": "2"
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
            }
          ],
          "spCost": "9 + (Skill Level x 2)",
          "areaOfEffect": "5 x 5",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2327.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2327",
          "tree": {
            "idx": 3,
            "row": 0,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 2326,
                "level": 3,
                "name": "Dragon Combo",
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
                "value": "9 + (Skill Level x 2)"
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
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "Area of Effect",
                "value": "5 x 5"
              },
              {
                "label": "Damage",
                "value": "1,000% ATK"
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
                      "sp-cost": "12",
                      "data-1": "2",
                      "data-2": "5"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "14",
                      "data-1": "2",
                      "data-2": "5"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "16",
                      "data-1": "2",
                      "data-2": "5"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "18",
                      "data-1": "2",
                      "data-2": "5"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "20",
                      "data-1": "2",
                      "data-2": "5"
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
          "id": 2334,
          "imageFile": "2334.png",
          "name": "Cursed Circle",
          "maxLevel": 5,
          "prerequisiteText": "Root 2 / Gentle Touch-Silence 2",
          "group": "Active / Special",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Cursed_Circle",
          "description": "While in Area of Effect, all enemies will be unable to move, attack and receive the Silence Status for the duration of the skill. If the caster uses any other skill, Cursed Circle will be cancelled. Consumes 1 spirit sphere per 1 target.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Range 3 x 3 cells / Duration 3 sec."
            },
            {
              "level": 2,
              "text": "Range 3 x 3 cells / Duration 4 sec."
            },
            {
              "level": 3,
              "text": "Range 5 x 5 cells / Duration 5 sec."
            },
            {
              "level": 4,
              "text": "Range 5 x 5 cells / Duration 6 sec."
            },
            {
              "level": 5,
              "text": "Range 7 x 7 cells / Duration 7 sec."
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "1 second",
          "cooldown": "10 seconds",
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
                  "value": "60"
                },
                {
                  "level": 3,
                  "value": "80"
                },
                {
                  "level": 4,
                  "value": "100"
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
                  "value": "1"
                },
                {
                  "level": 2,
                  "value": "2"
                },
                {
                  "level": 3,
                  "value": "3"
                },
                {
                  "level": 4,
                  "value": "4"
                },
                {
                  "level": 5,
                  "value": "5"
                }
              ]
            },
            {
              "label": "Data 2",
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
              "label": "Data 3",
              "values": [
                {
                  "level": 1,
                  "value": "3000"
                },
                {
                  "level": 2,
                  "value": "4000"
                },
                {
                  "level": 3,
                  "value": "5000"
                },
                {
                  "level": 4,
                  "value": "6000"
                },
                {
                  "level": 5,
                  "value": "7000"
                }
              ]
            }
          ],
          "spCost": "120",
          "duration": "(Skill Level + 2) seconds",
          "areaOfEffect": "3 x 3 ~ 7 x 7",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2334.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2334",
          "tree": {
            "idx": 4,
            "row": 0,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 269,
                "level": 2,
                "name": "Root",
                "visible": false
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
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "120"
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
                "value": "10 seconds"
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
                    "id": "area-of-effect",
                    "label": "Area of Effect"
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
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "area-of-effect": "3x3",
                      "duration": "3 seconds",
                      "sp-cost": "40",
                      "data-1": "1",
                      "data-2": "1",
                      "data-3": "3000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "3x3",
                      "duration": "4 seconds",
                      "sp-cost": "60",
                      "data-1": "2",
                      "data-2": "1",
                      "data-3": "4000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "5x5",
                      "duration": "5 seconds",
                      "sp-cost": "80",
                      "data-1": "3",
                      "data-2": "2",
                      "data-3": "5000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "5x5",
                      "duration": "6 seconds",
                      "sp-cost": "100",
                      "data-1": "4",
                      "data-2": "2",
                      "data-3": "6000"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "7x7",
                      "duration": "7 seconds",
                      "sp-cost": "120",
                      "data-1": "5",
                      "data-2": "3",
                      "data-3": "7000"
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
          "id": 2344,
          "imageFile": "2344.png",
          "name": "Gentle Touch-Silence",
          "maxLevel": 5,
          "prerequisiteText": "Basic Skill",
          "group": "Active / Damage and Debuff",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Gentle_Touch-Silence",
          "description": "Using the knowledge of pressure point techniques, you put the target on Silence status while dealing damage. Your Dex will greatly increase the damage.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Skill Range 2 cells / Atk 100%"
            },
            {
              "level": 2,
              "text": "Skill Range 2 cells / Atk 200%"
            },
            {
              "level": 3,
              "text": "Skill Range 2 cells / Atk 300%"
            },
            {
              "level": 4,
              "text": "Skill Range 2 cells / Atk 400%"
            },
            {
              "level": 5,
              "text": "Skill Range 2 cells / Atk 500%"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0 seconds",
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
              "label": "Range",
              "values": [
                {
                  "level": 1,
                  "value": "2 cells"
                },
                {
                  "level": 2,
                  "value": "2 cells"
                },
                {
                  "level": 3,
                  "value": "2 cells"
                },
                {
                  "level": 4,
                  "value": "2 cells"
                },
                {
                  "level": 5,
                  "value": "2 cells"
                }
              ]
            },
            {
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "5000"
                },
                {
                  "level": 2,
                  "value": "7000"
                },
                {
                  "level": 3,
                  "value": "9000"
                },
                {
                  "level": 4,
                  "value": "11000"
                },
                {
                  "level": 5,
                  "value": "13000"
                }
              ]
            }
          ],
          "spCost": "15 + (Skill Level × 5)",
          "cooldown": "[0.5 + (Skill Level × 0.5)] seconds",
          "castRange": "Melee",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2344.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2344",
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
                "value": "Active / Damage and Debuff Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "15 + (Skill Level × 5)"
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
                "value": "[0.5 + (Skill Level × 0.5)] seconds"
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
                    "id": "data-1",
                    "label": "Data 1"
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
                      "range": "2 cells",
                      "data-1": "5000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "25",
                      "range": "2 cells",
                      "data-1": "7000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "30",
                      "range": "2 cells",
                      "data-1": "9000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "35",
                      "range": "2 cells",
                      "data-1": "11000"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "40",
                      "range": "2 cells",
                      "data-1": "13000"
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
          "id": 2340,
          "imageFile": "2340.png",
          "name": "Power Absorb",
          "maxLevel": 1,
          "prerequisiteText": "Spiritual Sphere Absorption 1, Power Implantation 1",
          "group": "Active / Special",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Power_Absorb",
          "description": "Absorb Spirit Spheres on all targets in a 5x5 area, recovering your SP",
          "levelDetails": [],
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
                  "value": "10"
                }
              ]
            },
            {
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "1"
                }
              ]
            },
            {
              "label": "Data 2",
              "values": [
                {
                  "level": 1,
                  "value": "2"
                }
              ]
            }
          ],
          "spCost": "10",
          "areaOfEffect": "5 x 5",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2340.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2340",
          "tree": {
            "idx": 7,
            "row": 1,
            "col": 0,
            "columns": 7,
            "requirements": [
              {
                "id": 262,
                "level": 1,
                "name": "Spiritual Sphere Absorption",
                "visible": false
              },
              {
                "id": 2341,
                "level": 1,
                "name": "Power Implantation",
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
                "value": "1"
              },
              {
                "label": "SP Cost",
                "value": "10"
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
                      "sp-cost": "10",
                      "data-1": "1",
                      "data-2": "2"
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
          "id": 2338,
          "imageFile": "2338.png",
          "name": "Rising Dragon",
          "maxLevel": 10,
          "prerequisiteText": "Power Implantation 1",
          "group": "Active / Buff",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Rising_Dragon",
          "description": "Places a temporary buff on the user that extends the limit of Spirit Spheres the user can have,\nincreases MaxHP and MaxSP based on skill level as a percentage, and applies all the effects of Fury..",
          "levelDetails": [
            {
              "level": 1,
              "text": "Spheres 6 / Duration 120 sec"
            },
            {
              "level": 2,
              "text": "Spheres 7 / Duration 140 sec"
            },
            {
              "level": 3,
              "text": "Spheres 8 / Duration 160 sec"
            },
            {
              "level": 4,
              "text": "Spheres 9 / Duration 180 sec"
            },
            {
              "level": 5,
              "text": "Spheres 10 / Duration 200 sec"
            },
            {
              "level": 6,
              "text": "Spheres 11 / Duration 220 sec"
            },
            {
              "level": 7,
              "text": "Spheres 12 / Duration 240 sec"
            },
            {
              "level": 8,
              "text": "Spheres 13 / Duration 260 sec"
            },
            {
              "level": 9,
              "text": "Spheres 14 / Duration 280 sec"
            },
            {
              "level": 10,
              "text": "Spheres 15 / Duration 300 sec"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "1 second",
          "cooldown": "30 seconds",
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
                },
                {
                  "level": 6,
                  "value": "120"
                },
                {
                  "level": 7,
                  "value": "120"
                },
                {
                  "level": 8,
                  "value": "120"
                },
                {
                  "level": 9,
                  "value": "120"
                },
                {
                  "level": 10,
                  "value": "120"
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
                },
                {
                  "level": 6,
                  "value": "105000"
                },
                {
                  "level": 7,
                  "value": "120000"
                },
                {
                  "level": 8,
                  "value": "135000"
                },
                {
                  "level": 9,
                  "value": "150000"
                },
                {
                  "level": 10,
                  "value": "165000"
                }
              ]
            },
            {
              "label": "Data 2",
              "values": [
                {
                  "level": 1,
                  "value": "1"
                },
                {
                  "level": 2,
                  "value": "2"
                },
                {
                  "level": 3,
                  "value": "3"
                },
                {
                  "level": 4,
                  "value": "4"
                },
                {
                  "level": 5,
                  "value": "5"
                },
                {
                  "level": 6,
                  "value": "6"
                },
                {
                  "level": 7,
                  "value": "7"
                },
                {
                  "level": 8,
                  "value": "8"
                },
                {
                  "level": 9,
                  "value": "9"
                },
                {
                  "level": 10,
                  "value": "10"
                }
              ]
            },
            {
              "label": "Data 3",
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
                },
                {
                  "level": 6,
                  "value": "8"
                },
                {
                  "level": 7,
                  "value": "9"
                },
                {
                  "level": 8,
                  "value": "10"
                },
                {
                  "level": 9,
                  "value": "11"
                },
                {
                  "level": 10,
                  "value": "12"
                }
              ]
            }
          ],
          "spCost": "120",
          "duration": "100 + (Skill Level × 20) seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2338.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2338",
          "tree": {
            "idx": 8,
            "row": 1,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 261,
                "level": 5,
                "name": "Summon Spirit Sphere",
                "visible": false
              },
              {
                "id": 2341,
                "level": 1,
                "name": "Power Implantation",
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
                "value": "10"
              },
              {
                "label": "SP Cost",
                "value": "120"
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
                "value": "30 seconds"
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
                      "duration": "120 seconds",
                      "effect": "Spheres 6",
                      "sp-cost": "120",
                      "data-1": "30000",
                      "data-2": "1",
                      "data-3": "3"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "140 seconds",
                      "effect": "Spheres 7",
                      "sp-cost": "120",
                      "data-1": "45000",
                      "data-2": "2",
                      "data-3": "4"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "160 seconds",
                      "effect": "Spheres 8",
                      "sp-cost": "120",
                      "data-1": "60000",
                      "data-2": "3",
                      "data-3": "5"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "180 seconds",
                      "effect": "Spheres 9",
                      "sp-cost": "120",
                      "data-1": "75000",
                      "data-2": "4",
                      "data-3": "6"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "200 seconds",
                      "effect": "Spheres 10",
                      "sp-cost": "120",
                      "data-1": "90000",
                      "data-2": "5",
                      "data-3": "7"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "duration": "220 seconds",
                      "effect": "Spheres 11",
                      "sp-cost": "120",
                      "data-1": "105000",
                      "data-2": "6",
                      "data-3": "8"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "duration": "240 seconds",
                      "effect": "Spheres 12",
                      "sp-cost": "120",
                      "data-1": "120000",
                      "data-2": "7",
                      "data-3": "9"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "duration": "260 seconds",
                      "effect": "Spheres 13",
                      "sp-cost": "120",
                      "data-1": "135000",
                      "data-2": "8",
                      "data-3": "10"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "duration": "280 seconds",
                      "effect": "Spheres 14",
                      "sp-cost": "120",
                      "data-1": "150000",
                      "data-2": "9",
                      "data-3": "11"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "duration": "300 seconds",
                      "effect": "Spheres 15",
                      "sp-cost": "120",
                      "data-1": "165000",
                      "data-2": "10",
                      "data-3": "12"
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
          "id": 2329,
          "imageFile": "2329.png",
          "name": "Fallen Empire",
          "maxLevel": 10,
          "prerequisiteText": "Dragon Combo 3",
          "group": "Active / Damage(Special)",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Fallen_Empire",
          "description": "Use your shoulders and fists to do an upwards blow to deal large damage.\nCan be casted after Dragon Combo, and can cast Tiger Cannon / Gate of Hell after.\nDamage increases based on BaseLv and caster's STR.\nTwo Sphere is consumed when using the skill, and one Sphere is consumed from level 6.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 400%"
            },
            {
              "level": 2,
              "text": "ATK 700%"
            },
            {
              "level": 3,
              "text": "ATK 1000%"
            },
            {
              "level": 4,
              "text": "ATK 1300%"
            },
            {
              "level": 5,
              "text": "ATK 1600%"
            },
            {
              "level": 6,
              "text": "ATK 1900%"
            },
            {
              "level": 7,
              "text": "ATK 2200%"
            },
            {
              "level": 8,
              "text": "ATK 2500%"
            },
            {
              "level": 9,
              "text": "ATK 2800%"
            },
            {
              "level": 10,
              "text": "ATK 3100%"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0 seconds",
          "cooldown": "0 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "18"
                },
                {
                  "level": 2,
                  "value": "21"
                },
                {
                  "level": 3,
                  "value": "24"
                },
                {
                  "level": 4,
                  "value": "27"
                },
                {
                  "level": 5,
                  "value": "30"
                },
                {
                  "level": 6,
                  "value": "33"
                },
                {
                  "level": 7,
                  "value": "36"
                },
                {
                  "level": 8,
                  "value": "39"
                },
                {
                  "level": 9,
                  "value": "42"
                },
                {
                  "level": 10,
                  "value": "45"
                }
              ]
            },
            {
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "500"
                },
                {
                  "level": 2,
                  "value": "500"
                },
                {
                  "level": 3,
                  "value": "1000"
                },
                {
                  "level": 4,
                  "value": "1000"
                },
                {
                  "level": 5,
                  "value": "1500"
                },
                {
                  "level": 6,
                  "value": "1500"
                },
                {
                  "level": 7,
                  "value": "2000"
                },
                {
                  "level": 8,
                  "value": "2000"
                },
                {
                  "level": 9,
                  "value": "2500"
                },
                {
                  "level": 10,
                  "value": "2500"
                }
              ]
            },
            {
              "label": "Data 2",
              "values": [
                {
                  "level": 1,
                  "value": "2"
                },
                {
                  "level": 2,
                  "value": "2"
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
                  "value": "2"
                },
                {
                  "level": 6,
                  "value": "1"
                },
                {
                  "level": 7,
                  "value": "1"
                },
                {
                  "level": 8,
                  "value": "1"
                },
                {
                  "level": 9,
                  "value": "1"
                },
                {
                  "level": 10,
                  "value": "1"
                }
              ]
            }
          ],
          "spCost": "15 + (Skill Level x 3)",
          "castRange": "Melee",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2329.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2329",
          "tree": {
            "idx": 9,
            "row": 1,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 2326,
                "level": 3,
                "name": "Dragon Combo",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Damage(Special) Skill"
              },
              {
                "label": "Levels",
                "value": "10"
              },
              {
                "label": "SP Cost",
                "value": "15 + (Skill Level x 3)"
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
                "value": "0 seconds"
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
                "value": "3,100% ATK"
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
                      "sp-cost": "18",
                      "data-1": "500",
                      "data-2": "2"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "21",
                      "data-1": "500",
                      "data-2": "2"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "24",
                      "data-1": "1000",
                      "data-2": "2"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "27",
                      "data-1": "1000",
                      "data-2": "2"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "30",
                      "data-1": "1500",
                      "data-2": "2"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "33",
                      "data-1": "1500",
                      "data-2": "1"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "36",
                      "data-1": "2000",
                      "data-2": "1"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "39",
                      "data-1": "2000",
                      "data-2": "1"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "42",
                      "data-1": "2500",
                      "data-2": "1"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "sp-cost": "45",
                      "data-1": "2500",
                      "data-2": "1"
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
          "id": 2328,
          "imageFile": "2328.png",
          "name": "Earth Shaker",
          "maxLevel": 5,
          "prerequisiteText": "Dragon Combo 3",
          "group": "Active / Damage",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Earth_Shaker",
          "description": "Sends a shockwave through the ground damaging all targets in the area of effect, targets in Hide/Cloak will be revealed and receive additional damage.\nIf the target is a monster, increase the skill damage of Rampage Blast to the target for 5 seconds. The caster's Str stat and base level increase the skill damage.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Range 3 x 3 cells / Atk 300%"
            },
            {
              "level": 2,
              "text": "Range 5 x 5 cells / Atk 600%"
            },
            {
              "level": 3,
              "text": "Range 7 x 7 cells / Atk 900%"
            },
            {
              "level": 4,
              "text": "Range 9 x 9 cells / Atk 1200%"
            },
            {
              "level": 5,
              "text": "Range 11 x 11 cells / Atk 1500%"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0 seconds",
          "cooldown": "3 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "36"
                },
                {
                  "level": 2,
                  "value": "40"
                },
                {
                  "level": 3,
                  "value": "44"
                },
                {
                  "level": 4,
                  "value": "48"
                },
                {
                  "level": 5,
                  "value": "52"
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
                  "value": "2"
                },
                {
                  "level": 3,
                  "value": "3"
                },
                {
                  "level": 4,
                  "value": "4"
                },
                {
                  "level": 5,
                  "value": "5"
                }
              ]
            },
            {
              "label": "Data 2",
              "values": [
                {
                  "level": 1,
                  "value": "1000"
                },
                {
                  "level": 2,
                  "value": "2000"
                },
                {
                  "level": 3,
                  "value": "2000"
                },
                {
                  "level": 4,
                  "value": "3000"
                },
                {
                  "level": 5,
                  "value": "3000"
                }
              ]
            },
            {
              "label": "Data 3",
              "values": [
                {
                  "level": 1,
                  "value": "300"
                },
                {
                  "level": 2,
                  "value": "350"
                },
                {
                  "level": 3,
                  "value": "400"
                },
                {
                  "level": 4,
                  "value": "450"
                },
                {
                  "level": 5,
                  "value": "500"
                }
              ]
            }
          ],
          "spCost": "32 + (Skill Level × 4)",
          "areaOfEffect": "3 x 3 ~ 11 x 11",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2328.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2328",
          "tree": {
            "idx": 10,
            "row": 1,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 2326,
                "level": 3,
                "name": "Dragon Combo",
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
                "value": "32 + (Skill Level × 4)"
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
                "value": "3 seconds"
              },
              {
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "Damage",
                "value": "1,500% ATK"
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
                      "area-of-effect": "3x3",
                      "sp-cost": "36",
                      "data-1": "1",
                      "data-2": "1000",
                      "data-3": "300"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "5x5",
                      "sp-cost": "40",
                      "data-1": "2",
                      "data-2": "2000",
                      "data-3": "350"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "44",
                      "data-1": "3",
                      "data-2": "2000",
                      "data-3": "400"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "9x9",
                      "sp-cost": "48",
                      "data-1": "4",
                      "data-2": "3000",
                      "data-3": "450"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "11x11",
                      "sp-cost": "52",
                      "data-1": "5",
                      "data-2": "3000",
                      "data-3": "500"
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
          "id": 2337,
          "imageFile": "2337.png",
          "name": "Windmill",
          "maxLevel": 1,
          "prerequisiteText": "Cursed Circle 1",
          "group": "Active / Damage",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Windmill",
          "description": "A low to the ground round kick that damages targets in a 5x5 area around you and forces them to sit. Monsters in the area will be stunned. Does not work on boss or MVP type monsters.",
          "levelDetails": [],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "1 second",
          "castDelay": "0.5 seconds",
          "cooldown": "3 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "45"
                }
              ]
            },
            {
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "2"
                }
              ]
            }
          ],
          "spCost": "45",
          "castRange": "Melee",
          "areaOfEffect": "5 x 5",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2337.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2337",
          "tree": {
            "idx": 11,
            "row": 1,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 2334,
                "level": 1,
                "name": "Cursed Circle",
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
                "value": "45"
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
                "value": "0.5 seconds"
              },
              {
                "label": "Cooldown",
                "value": "3 seconds"
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
                      "sp-cost": "45",
                      "data-1": "2"
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
          "id": 2345,
          "imageFile": "2345.png",
          "name": "Gentle Touch-Cure",
          "maxLevel": 5,
          "prerequisiteText": "Gentle Touch-Silence 1",
          "group": "Active / Recovery and Buff",
          "type": "",
          "target": "Player or Caster",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Gentle_Touch-Cure",
          "description": "Using the knowledge of pressure point techniques, you cure a target's Abnormal Status and recovers the target's HP. The higher the skill level the higher the chance of success. Can recover Petrify, Frozen, Stun, Poison, Silence, Blind, Hallucination. Caster can recover from Petrify, Frozen and Stun. Consumes 1 Spirit Sphere.",
          "levelDetails": [],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "1 second",
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
              "label": "Range",
              "values": [
                {
                  "level": 1,
                  "value": "2 cells"
                },
                {
                  "level": 2,
                  "value": "2 cells"
                },
                {
                  "level": 3,
                  "value": "2 cells"
                },
                {
                  "level": 4,
                  "value": "2 cells"
                },
                {
                  "level": 5,
                  "value": "2 cells"
                }
              ]
            }
          ],
          "spCost": "30 + (Skill Level × 10)",
          "cooldown": "[0.5 + (Skill Level × 0.5)] seconds",
          "castRange": "2 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2345.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2345",
          "tree": {
            "idx": 13,
            "row": 1,
            "col": 6,
            "columns": 7,
            "requirements": [
              {
                "id": 2344,
                "level": 1,
                "name": "Gentle Touch-Silence",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Recovery and Buff Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "30 + (Skill Level × 10)"
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
                "value": "[0.5 + (Skill Level × 0.5)] seconds"
              },
              {
                "label": "Cast Range",
                "value": "2 cells"
              },
              {
                "label": "Target",
                "value": "Player or Caster"
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
                      "sp-cost": "40",
                      "range": "2 cells"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "50",
                      "range": "2 cells"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "60",
                      "range": "2 cells"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "70",
                      "range": "2 cells"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "80",
                      "range": "2 cells"
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
          "id": 2517,
          "imageFile": "2517.png",
          "name": "Lion's Howl",
          "maxLevel": 5,
          "prerequisiteText": "Lightning Ride 3, Power Absorb 1",
          "group": "Active / Damage",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Lion's_Howl",
          "description": "Inflicts ranged physical damage to all enemies in a set area around the user and cancels their Maestro and Wanderer songs.\nDamage increases depending on player's base level, and consumes 3 Spheres when used.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Area of Effect 5 x 5 / ATK 500%"
            },
            {
              "level": 2,
              "text": "Area of Effect 5 x 5 / ATK 1000%"
            },
            {
              "level": 3,
              "text": "Area of Effect 7 x 7 / ATK 1500%"
            },
            {
              "level": 4,
              "text": "Area of Effect 7 x 7 / ATK 2000%"
            },
            {
              "level": 5,
              "text": "Area of Effect 9 x 9 / ATK 2500%"
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "1 second",
          "castDelay": "0 seconds",
          "cooldown": "10 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "70"
                },
                {
                  "level": 2,
                  "value": "70"
                },
                {
                  "level": 3,
                  "value": "70"
                },
                {
                  "level": 4,
                  "value": "70"
                },
                {
                  "level": 5,
                  "value": "70"
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
            },
            {
              "label": "Data 2",
              "values": [
                {
                  "level": 1,
                  "value": "10"
                },
                {
                  "level": 2,
                  "value": "15"
                },
                {
                  "level": 3,
                  "value": "20"
                },
                {
                  "level": 4,
                  "value": "25"
                },
                {
                  "level": 5,
                  "value": "30"
                }
              ]
            }
          ],
          "spCost": "70",
          "areaOfEffect": "5 x 5 ~ 9 x 9",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2517.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2517",
          "tree": {
            "idx": 14,
            "row": 2,
            "col": 0,
            "columns": 7,
            "requirements": [
              {
                "id": 2340,
                "level": 1,
                "name": "Power Absorb",
                "visible": true
              },
              {
                "id": 2518,
                "level": 3,
                "name": "Lightning Ride",
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
                "value": "70"
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
                "value": "10 seconds"
              },
              {
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "Area of Effect",
                "value": "5 x 5 ~ 9 x 9"
              },
              {
                "label": "Damage",
                "value": "2,500% ATK"
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
                      "sp-cost": "70",
                      "data-1": "3",
                      "data-2": "10"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "70",
                      "data-1": "4",
                      "data-2": "15"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "70",
                      "data-1": "5",
                      "data-2": "20"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "70",
                      "data-1": "6",
                      "data-2": "25"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "70",
                      "data-1": "7",
                      "data-2": "30"
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
          "id": 2330,
          "imageFile": "2330.png",
          "name": "Tiger Cannon",
          "maxLevel": 10,
          "prerequisiteText": "Fallen Empire 3",
          "group": "Active / Damage(Special)",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Tiger_Cannon",
          "description": "Deals special physical damage based on caster's MaxHP and MaxSP, to targets around the caster. Consumes 2 Spheres and it can only be used while in Critical Explosion.\nCan be used after Fallen Empire as a combo.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Area of Effect 5 x 5Cell/ MaxHP 12%/ MaxSP 6%"
            },
            {
              "level": 2,
              "text": "Area of Effect 5 x 5Cell/ MaxHP 14%/ MaxSP 7%"
            },
            {
              "level": 3,
              "text": "Area of Effect 5 x 5Cell/ MaxHP 16%/ MaxSP 8%"
            },
            {
              "level": 4,
              "text": "Area of Effect 5 x 5Cell/ MaxHP 18%/ MaxSP 9%"
            },
            {
              "level": 5,
              "text": "Area of Effect 5 x 5Cell/ MaxHP 20%/ MaxSP 10%"
            },
            {
              "level": 6,
              "text": "Area of Effect 7 x 7Cell/ MaxHP 22%/ MaxSP 11%"
            },
            {
              "level": 7,
              "text": "Area of Effect 7 x 7Cell/ MaxHP 24%/ MaxSP 12%"
            },
            {
              "level": 8,
              "text": "Area of Effect 7 x 7Cell/ MaxHP 26%/ MaxSP 13%"
            },
            {
              "level": 9,
              "text": "Area of Effect 7 x 7Cell/ MaxHP 28%/ MaxSP 14%"
            },
            {
              "level": 10,
              "text": "Area of Effect 7 x 7Cell/ MaxHP 30%/ MaxSP 15%"
            }
          ],
          "fixedCastTime": "0 seconds",
          "castDelay": "1 second",
          "cooldown": "3 seconds",
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
                },
                {
                  "level": 6,
                  "value": "55"
                },
                {
                  "level": 7,
                  "value": "60"
                },
                {
                  "level": 8,
                  "value": "65"
                },
                {
                  "level": 9,
                  "value": "70"
                },
                {
                  "level": 10,
                  "value": "75"
                }
              ]
            },
            {
              "label": "Range",
              "values": [
                {
                  "level": 1,
                  "value": "1 cells"
                },
                {
                  "level": 2,
                  "value": "1 cells"
                },
                {
                  "level": 3,
                  "value": "1 cells"
                },
                {
                  "level": 4,
                  "value": "1 cells"
                },
                {
                  "level": 5,
                  "value": "1 cells"
                },
                {
                  "level": 6,
                  "value": "1 cells"
                },
                {
                  "level": 7,
                  "value": "1 cells"
                },
                {
                  "level": 8,
                  "value": "1 cells"
                },
                {
                  "level": 9,
                  "value": "1 cells"
                },
                {
                  "level": 10,
                  "value": "1 cells"
                }
              ]
            },
            {
              "label": "Data 1",
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
            },
            {
              "label": "Data 2",
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
                },
                {
                  "level": 6,
                  "value": "11"
                },
                {
                  "level": 7,
                  "value": "12"
                },
                {
                  "level": 8,
                  "value": "13"
                },
                {
                  "level": 9,
                  "value": "14"
                },
                {
                  "level": 10,
                  "value": "15"
                }
              ]
            },
            {
              "label": "Data 3",
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
                },
                {
                  "level": 6,
                  "value": "2"
                },
                {
                  "level": 7,
                  "value": "2"
                },
                {
                  "level": 8,
                  "value": "2"
                },
                {
                  "level": 9,
                  "value": "2"
                },
                {
                  "level": 10,
                  "value": "2"
                }
              ]
            }
          ],
          "spCost": "25 + (5 × Skill Level)",
          "variableCastTime": "[1 + (Skill Level × 0.1)] seconds",
          "castRange": "Melee",
          "areaOfEffect": "5 x 5 ~ 7 x 7",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2330.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2330",
          "tree": {
            "idx": 16,
            "row": 2,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 2329,
                "level": 3,
                "name": "Fallen Empire",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Damage(Special) Skill"
              },
              {
                "label": "Levels",
                "value": "10"
              },
              {
                "label": "SP Cost",
                "value": "25 + (5 × Skill Level)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "[1 + (Skill Level × 0.1)] seconds"
              },
              {
                "label": "Cast Delay",
                "value": "1 second"
              },
              {
                "label": "Cooldown",
                "value": "3 seconds"
              },
              {
                "label": "Cast Range",
                "value": "Melee"
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
                    "id": "area-of-effect",
                    "label": "Area of Effect"
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
                    "id": "range",
                    "label": "Range"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "area-of-effect": "5x5",
                      "effect": "Ma x HP 12% / Ma x SP 6%",
                      "sp-cost": "30",
                      "range": "1 cells",
                      "data-1": "12",
                      "data-2": "6",
                      "data-3": "1"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "5x5",
                      "effect": "Ma x HP 14% / Ma x SP 7%",
                      "sp-cost": "35",
                      "range": "1 cells",
                      "data-1": "14",
                      "data-2": "7",
                      "data-3": "1"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "5x5",
                      "effect": "Ma x HP 16% / Ma x SP 8%",
                      "sp-cost": "40",
                      "range": "1 cells",
                      "data-1": "16",
                      "data-2": "8",
                      "data-3": "1"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "5x5",
                      "effect": "Ma x HP 18% / Ma x SP 9%",
                      "sp-cost": "45",
                      "range": "1 cells",
                      "data-1": "18",
                      "data-2": "9",
                      "data-3": "1"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "5x5",
                      "effect": "Ma x HP 20% / Ma x SP 10%",
                      "sp-cost": "50",
                      "range": "1 cells",
                      "data-1": "20",
                      "data-2": "10",
                      "data-3": "1"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "area-of-effect": "7x7",
                      "effect": "Ma x HP 22% / Ma x SP 11%",
                      "sp-cost": "55",
                      "range": "1 cells",
                      "data-1": "22",
                      "data-2": "11",
                      "data-3": "2"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "area-of-effect": "7x7",
                      "effect": "Ma x HP 24% / Ma x SP 12%",
                      "sp-cost": "60",
                      "range": "1 cells",
                      "data-1": "24",
                      "data-2": "12",
                      "data-3": "2"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "area-of-effect": "7x7",
                      "effect": "Ma x HP 26% / Ma x SP 13%",
                      "sp-cost": "65",
                      "range": "1 cells",
                      "data-1": "26",
                      "data-2": "13",
                      "data-3": "2"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "area-of-effect": "7x7",
                      "effect": "Ma x HP 28% / Ma x SP 14%",
                      "sp-cost": "70",
                      "range": "1 cells",
                      "data-1": "28",
                      "data-2": "14",
                      "data-3": "2"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "area-of-effect": "7x7",
                      "effect": "Ma x HP 30% / Ma x SP 15%",
                      "sp-cost": "75",
                      "range": "1 cells",
                      "data-1": "30",
                      "data-2": "15",
                      "data-3": "2"
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
          "id": 2332,
          "imageFile": "2332.png",
          "name": "Rampage Blast",
          "maxLevel": 5,
          "prerequisiteText": "Earth Shaker 2",
          "group": "Active / Damage",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Rampage_Blast",
          "description": "Deals ranged physical damage to targets within 7 x 7 cells around the caster. Consumes 3 Spheres, and can be used when Critical Explosion is active.\nDamage increases based on caster's BaseLv and skill level of Critical Explosion.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 350%(Normal)/ 550%(Earth Shaker)"
            },
            {
              "level": 2,
              "text": "ATK 700%(Normal)/1100%(Earth Shaker)"
            },
            {
              "level": 3,
              "text": "ATK1050%(Normal)/1650%(Earth Shaker)"
            },
            {
              "level": 4,
              "text": "ATK1400%(Normal)/2200%(Earth Shaker)"
            },
            {
              "level": 5,
              "text": "ATK1750%(Normal)/2750%(Earth Shaker)"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "1 second",
          "cooldown": "10 seconds",
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
            }
          ],
          "spCost": "100",
          "areaOfEffect": "7 x 7",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2332.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2332",
          "tree": {
            "idx": 17,
            "row": 2,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 2328,
                "level": 2,
                "name": "Earth Shaker",
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
                "value": "100"
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
                "value": "10 seconds"
              },
              {
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "Area of Effect",
                "value": "7 x 7"
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
                      "sp-cost": "100",
                      "data-1": "3"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "100",
                      "data-1": "3"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "ATK1050%(Normal) / 1650%(Earth Shaker)",
                      "sp-cost": "100",
                      "data-1": "3"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "ATK1400%(Normal) / 2200%(Earth Shaker)",
                      "sp-cost": "100",
                      "data-1": "3"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "ATK1750%(Normal) / 2750%(Earth Shaker)",
                      "sp-cost": "100",
                      "data-1": "3"
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
          "id": 2335,
          "imageFile": "2335.png",
          "name": "Lightning Walk",
          "maxLevel": 5,
          "prerequisiteText": "Windmill 1",
          "group": "Active Toggle / Special",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Lightning_Walk",
          "description": "When targeted with a ranged or magic attack (single target), there is a chance that you will immediately jump to the attacker. Cancels when the skill activates.",
          "levelDetails": [
            {
              "level": 1,
              "text": "45% proc chance / 5 second duration"
            },
            {
              "level": 2,
              "text": "50% proc chance / 6 second duration"
            },
            {
              "level": 3,
              "text": "55% proc chance / 7 second duration"
            },
            {
              "level": 4,
              "text": "60% proc chance / 8 second duration"
            },
            {
              "level": 5,
              "text": "65% proc chance / 9 second duration"
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
                  "value": "40"
                },
                {
                  "level": 2,
                  "value": "40"
                },
                {
                  "level": 3,
                  "value": "40"
                },
                {
                  "level": 4,
                  "value": "40"
                },
                {
                  "level": 5,
                  "value": "40"
                }
              ]
            },
            {
              "label": "Data 1",
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
                }
              ]
            },
            {
              "label": "Data 2",
              "values": [
                {
                  "level": 1,
                  "value": "5000"
                },
                {
                  "level": 2,
                  "value": "6000"
                },
                {
                  "level": 3,
                  "value": "7000"
                },
                {
                  "level": 4,
                  "value": "8000"
                },
                {
                  "level": 5,
                  "value": "9000"
                }
              ]
            }
          ],
          "spCost": "40",
          "duration": "(Skill Level + 4) seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2335.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2335",
          "tree": {
            "idx": 18,
            "row": 2,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 2337,
                "level": 1,
                "name": "Windmill",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active Toggle / Special Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "40"
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
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "Duration",
                "value": "(Skill Level + 4) seconds"
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
                      "effect": "45% proc chance / 5 second duration",
                      "sp-cost": "40",
                      "data-1": "45",
                      "data-2": "5000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "50% proc chance / 6 second duration",
                      "sp-cost": "40",
                      "data-1": "50",
                      "data-2": "6000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "55% proc chance / 7 second duration",
                      "sp-cost": "40",
                      "data-1": "55",
                      "data-2": "7000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "60% proc chance / 8 second duration",
                      "sp-cost": "40",
                      "data-1": "60",
                      "data-2": "8000"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "65% proc chance / 9 second duration",
                      "sp-cost": "40",
                      "data-1": "65",
                      "data-2": "9000"
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
          "id": 2333,
          "imageFile": "2333.png",
          "name": "Crescent Elbow",
          "maxLevel": 5,
          "prerequisiteText": "Windmill 1",
          "group": "Active / Counterattack",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Crescent_Elbow",
          "description": "Has a chance to counter an attack, deals damage and knocks back the enemy while taking part of the damage yourself when receiving physical attack. The higher the HP of the target, the more damage it deals. Consumes 2 spirit spheres. Does not work on MVP type monsters.",
          "levelDetails": [
            {
              "level": 1,
              "text": "55% chance of proc / 3 second duration"
            },
            {
              "level": 2,
              "text": "60% chance of proc / 4 second duration"
            },
            {
              "level": 3,
              "text": "65% chance of proc / 5 second duration"
            },
            {
              "level": 4,
              "text": "70% chance of proc / 6 second duration"
            },
            {
              "level": 5,
              "text": "75% chance of proc / 7 second duration"
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
                }
              ]
            },
            {
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "3000"
                },
                {
                  "level": 2,
                  "value": "4000"
                },
                {
                  "level": 3,
                  "value": "5000"
                },
                {
                  "level": 4,
                  "value": "6000"
                },
                {
                  "level": 5,
                  "value": "7000"
                }
              ]
            },
            {
              "label": "Data 2",
              "values": [
                {
                  "level": 1,
                  "value": "55"
                },
                {
                  "level": 2,
                  "value": "60"
                },
                {
                  "level": 3,
                  "value": "65"
                },
                {
                  "level": 4,
                  "value": "70"
                },
                {
                  "level": 5,
                  "value": "75"
                }
              ]
            }
          ],
          "spCost": "80",
          "duration": "(Skill Level + 2) seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2333.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2333",
          "tree": {
            "idx": 19,
            "row": 2,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 2337,
                "level": 1,
                "name": "Windmill",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Counterattack Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "80"
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
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "Duration",
                "value": "(Skill Level + 2) seconds"
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
                      "effect": "55% chance of proc / 3 second duration",
                      "sp-cost": "80",
                      "data-1": "3000",
                      "data-2": "55"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "60% chance of proc / 4 second duration",
                      "sp-cost": "80",
                      "data-1": "4000",
                      "data-2": "60"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "65% chance of proc / 5 second duration",
                      "sp-cost": "80",
                      "data-1": "5000",
                      "data-2": "65"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "70% chance of proc / 6 second duration",
                      "sp-cost": "80",
                      "data-1": "6000",
                      "data-2": "70"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "75% chance of proc / 7 second duration",
                      "sp-cost": "80",
                      "data-1": "7000",
                      "data-2": "75"
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
          "id": 2346,
          "imageFile": "2346.png",
          "name": "Gentle Touch-Energy Gain",
          "maxLevel": 5,
          "prerequisiteText": "Gentle Touch-Cure 1",
          "group": "Active / Buff (To yourself)",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Gentle_Touch-Energy_Gain",
          "description": "Use the knowledge of pressure point techniques, to improve your fighting spirit which allows you to the chance to gain a spirit sphere when you deal or receive physical damage.\nIncrease damage of Raging Thrust, Chain Crush Combo, Glacier Fist while consuming HP.",
          "levelDetails": [
            {
              "level": 1,
              "text": "HP 1% Consumption / Chance to gain Spirit Sphere 15%"
            },
            {
              "level": 2,
              "text": "HP 2% Consumption / Chance to gain Spirit Sphere 20%"
            },
            {
              "level": 3,
              "text": "HP 3% Consumption / Chance to gain Spirit Sphere 25%"
            },
            {
              "level": 4,
              "text": "HP 4% Consumption / Chance to gain Spirit Sphere 30%"
            },
            {
              "level": 5,
              "text": "HP 5% Consumption / Chance to gain Spirit Sphere 35%"
            }
          ],
          "variableCastTime": "1 second",
          "castDelay": "1 second",
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
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "1"
                },
                {
                  "level": 2,
                  "value": "2"
                },
                {
                  "level": 3,
                  "value": "3"
                },
                {
                  "level": 4,
                  "value": "4"
                },
                {
                  "level": 5,
                  "value": "5"
                }
              ]
            },
            {
              "label": "Data 2",
              "values": [
                {
                  "level": 1,
                  "value": "15"
                },
                {
                  "level": 2,
                  "value": "20"
                },
                {
                  "level": 3,
                  "value": "25"
                },
                {
                  "level": 4,
                  "value": "30"
                },
                {
                  "level": 5,
                  "value": "35"
                }
              ]
            },
            {
              "label": "Data 3",
              "values": [
                {
                  "level": 1,
                  "value": "240000"
                },
                {
                  "level": 2,
                  "value": "240000"
                },
                {
                  "level": 3,
                  "value": "240000"
                },
                {
                  "level": 4,
                  "value": "240000"
                },
                {
                  "level": 5,
                  "value": "240000"
                }
              ]
            }
          ],
          "spCost": "30 + (Skill Level × 10)",
          "fixedCastTime": "[0.5 + (Skill Level × 0.5)] seconds",
          "duration": "4 minutes",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2346.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2346",
          "tree": {
            "idx": 20,
            "row": 2,
            "col": 6,
            "columns": 7,
            "requirements": [
              {
                "id": 2345,
                "level": 1,
                "name": "Gentle Touch-Cure",
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
                "value": "30 + (Skill Level × 10)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "[0.5 + (Skill Level × 0.5)] seconds"
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
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "Duration",
                "value": "4 minutes"
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
                      "effect": "HP 1% Consumption / Chance to gain Spirit Sphere 15%",
                      "sp-cost": "40",
                      "data-1": "1",
                      "data-2": "15",
                      "data-3": "240000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "HP 2% Consumption / Chance to gain Spirit Sphere 20%",
                      "sp-cost": "50",
                      "data-1": "2",
                      "data-2": "20",
                      "data-3": "240000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "HP 3% Consumption / Chance to gain Spirit Sphere 25%",
                      "sp-cost": "60",
                      "data-1": "3",
                      "data-2": "25",
                      "data-3": "240000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "HP 4% Consumption / Chance to gain Spirit Sphere 30%",
                      "sp-cost": "70",
                      "data-1": "4",
                      "data-2": "30",
                      "data-3": "240000"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "HP 5% Consumption / Chance to gain Spirit Sphere 35%",
                      "sp-cost": "80",
                      "data-1": "5",
                      "data-2": "35",
                      "data-3": "240000"
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
          "id": 5009,
          "imageFile": "5009.png",
          "name": "Flash Combo",
          "maxLevel": 5,
          "prerequisiteText": "Dragon Combo 3 / Fallen Empire 3 / Tiger Cannon 5 / Sky Blow 1",
          "group": "Active / Special",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Flash_Combo",
          "description": "Performs Dragon Combo, Fallen Empire and Tiger Cannon in rapid succession. Uses highest level learned of each of the skills.\nCannot consume any items or use other skills while casting.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Consumes 5 Spheres, For 4 sec, ATK 40 increased"
            },
            {
              "level": 2,
              "text": "Consumes 5 Spheres, For 4 sec, ATK 60 increased"
            },
            {
              "level": 3,
              "text": "Consumes 4 Spheres, For 4 sec, ATK 80 increased"
            },
            {
              "level": 4,
              "text": "Consumes 4 Spheres, For 4 sec, ATK 100 increased"
            },
            {
              "level": 5,
              "text": "Consumes 3 Spheres, For 4 sec, ATK 120 increased"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "1 second",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "65"
                },
                {
                  "level": 2,
                  "value": "65"
                },
                {
                  "level": 3,
                  "value": "65"
                },
                {
                  "level": 4,
                  "value": "65"
                },
                {
                  "level": 5,
                  "value": "65"
                }
              ]
            },
            {
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "4000"
                },
                {
                  "level": 2,
                  "value": "4000"
                },
                {
                  "level": 3,
                  "value": "4000"
                },
                {
                  "level": 4,
                  "value": "4000"
                },
                {
                  "level": 5,
                  "value": "4000"
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
                  "value": "4"
                },
                {
                  "level": 4,
                  "value": "4"
                },
                {
                  "level": 5,
                  "value": "3"
                }
              ]
            },
            {
              "label": "Data 3",
              "values": [
                {
                  "level": 1,
                  "value": "40"
                },
                {
                  "level": 2,
                  "value": "60"
                },
                {
                  "level": 3,
                  "value": "80"
                },
                {
                  "level": 4,
                  "value": "100"
                },
                {
                  "level": 5,
                  "value": "120"
                }
              ]
            }
          ],
          "spCost": "65",
          "cooldown": "3 seconds",
          "castRange": "Melee",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5009.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5009",
          "tree": {
            "idx": 23,
            "row": 3,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 2326,
                "level": 3,
                "name": "Dragon Combo",
                "visible": true
              },
              {
                "id": 2327,
                "level": 1,
                "name": "Sky Blow",
                "visible": true
              },
              {
                "id": 2329,
                "level": 3,
                "name": "Fallen Empire",
                "visible": true
              },
              {
                "id": 2330,
                "level": 5,
                "name": "Tiger Cannon",
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
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "65"
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
                "value": "3 seconds"
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
                      "effect": "Consumes 5 Spheres, For 4 sec, ATK 40 increased",
                      "sp-cost": "65",
                      "data-1": "4000",
                      "data-2": "5",
                      "data-3": "40"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Consumes 5 Spheres, For 4 sec, ATK 60 increased",
                      "sp-cost": "65",
                      "data-1": "4000",
                      "data-2": "5",
                      "data-3": "60"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Consumes 4 Spheres, For 4 sec, ATK 80 increased",
                      "sp-cost": "65",
                      "data-1": "4000",
                      "data-2": "4",
                      "data-3": "80"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Consumes 4 Spheres, For 4 sec, ATK 100 increased",
                      "sp-cost": "65",
                      "data-1": "4000",
                      "data-2": "4",
                      "data-3": "100"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Consumes 3 Spheres, For 4 sec, ATK 120 increased",
                      "sp-cost": "65",
                      "data-1": "4000",
                      "data-2": "3",
                      "data-3": "120"
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
          "id": 2336,
          "imageFile": "2336.png",
          "name": "Knuckle Arrow",
          "maxLevel": 10,
          "prerequisiteText": "Lightning Walk 1",
          "group": "Active / Damage",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Knuckle_Arrow",
          "description": "Instantly brings you and the target next to each other, damaging the target while knocking the target back. Deals additional damage if the target hits a wall or an obstacle during the knockback.\nThe caster's base level increase the skill damage. Deals additional knock back damage to targets that have more weight. Boss monster that cannot be nocked back get additional skill damage.\nConsumes 1 spirit spheres and no spirit sphere from level 6.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Atk 600% / Knock back Damage 150% / Boss type Attack 700%"
            },
            {
              "level": 2,
              "text": "Atk 700% / Knock back Damage 300% / Boss type Attack 900%"
            },
            {
              "level": 3,
              "text": "Atk 800% / Knock back Damage 450% / Boss type Attack 1100%"
            },
            {
              "level": 4,
              "text": "Atk 900% / Knock back Damage 600% / Boss type Attack 1300%"
            },
            {
              "level": 5,
              "text": "Atk 1000% / Knock back Damage 750% / Boss type Attack 1500%"
            },
            {
              "level": 6,
              "text": "Atk 1100% / Knock back Damage 900% / Boss type Attack 1700%"
            },
            {
              "level": 7,
              "text": "Atk 1200% / Knock back Damage 1050% / Boss type Attack 1900%"
            },
            {
              "level": 8,
              "text": "Atk 1300% / Knock back Damage 1200% / Boss type Attack 2100%"
            },
            {
              "level": 9,
              "text": "Atk 1400% / Knock back Damage 1350% / Boss type Attack 2300%"
            },
            {
              "level": 10,
              "text": "Atk 1500% / Knock back Damage 1500% / Boss type Attack 2500%"
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
                  "value": "8 cells"
                },
                {
                  "level": 4,
                  "value": "8 cells"
                },
                {
                  "level": 5,
                  "value": "9 cells"
                },
                {
                  "level": 6,
                  "value": "9 cells"
                },
                {
                  "level": 7,
                  "value": "10 cells"
                },
                {
                  "level": 8,
                  "value": "10 cells"
                },
                {
                  "level": 9,
                  "value": "11 cells"
                },
                {
                  "level": 10,
                  "value": "11 cells"
                }
              ]
            },
            {
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "2"
                },
                {
                  "level": 2,
                  "value": "2"
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
                  "value": "4"
                },
                {
                  "level": 6,
                  "value": "4"
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
                  "value": "6"
                },
                {
                  "level": 10,
                  "value": "6"
                }
              ]
            },
            {
              "label": "Data 2",
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
          "spCost": "10 + (Skill Level x 2)",
          "castRange": "8 ~ 12 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2336.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2336",
          "tree": {
            "idx": 25,
            "row": 3,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 2335,
                "level": 1,
                "name": "Lightning Walk",
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
                "value": "10"
              },
              {
                "label": "SP Cost",
                "value": "10 + (Skill Level x 2)"
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
                "label": "Cast Range",
                "value": "8 ~ 12 cells"
              },
              {
                "label": "Target",
                "value": "Enemy"
              },
              {
                "label": "Damage",
                "value": "1,500% ATK"
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
                    "id": "range",
                    "label": "Range"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "12",
                      "range": "7 cells",
                      "data-1": "2",
                      "data-2": "1"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "14",
                      "range": "7 cells",
                      "data-1": "2",
                      "data-2": "1"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "16",
                      "range": "8 cells",
                      "data-1": "3",
                      "data-2": "1"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "18",
                      "range": "8 cells",
                      "data-1": "3",
                      "data-2": "1"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "20",
                      "range": "9 cells",
                      "data-1": "4",
                      "data-2": "1"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "22",
                      "range": "9 cells",
                      "data-1": "4",
                      "data-2": "0"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "24",
                      "range": "10 cells",
                      "data-1": "5",
                      "data-2": "0"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "26",
                      "range": "10 cells",
                      "data-1": "5",
                      "data-2": "0"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "28",
                      "range": "11 cells",
                      "data-1": "6",
                      "data-2": "0"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "sp-cost": "30",
                      "range": "11 cells",
                      "data-1": "6",
                      "data-2": "0"
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
          "id": 2348,
          "imageFile": "2348.png",
          "name": "Gentle Touch-Revitalize",
          "maxLevel": 5,
          "prerequisiteText": "Gentle Touch-Energy Gain 3",
          "group": "Active / Buff",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Gentle_Touch-Revitalize",
          "description": "Using the knowledge of pressure point techniques, your attack speed, MaxHP and DEF increases while improving your natural and skill HP recovery. HP can be recovered while moving or attacking. This skill cannot be used in combination with Gentle Touch-Energy Gain or Gentle Touch-Convert. Consumes 1 Spirit Spheres.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MaxHP increases by 2% / DEF + 20 / HP Recovery Speed increases by 80%"
            },
            {
              "level": 2,
              "text": "MaxHP increases by 4% / DEF + 40 / HP Recovery Speed increases by 110%"
            },
            {
              "level": 3,
              "text": "MaxHP increases by 6% / DEF + 60 / HP Recovery Speed increases by 140%"
            },
            {
              "level": 4,
              "text": "MaxHP increases by 8% / DEF + 80 / HP Recovery Speed increases by 170%"
            },
            {
              "level": 5,
              "text": "MaxHP increases by 10% / DEF + 100 / HP Recovery Speed increases by 200%"
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "1 second",
          "castDelay": "1 second",
          "cooldown": "1 second",
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
              "label": "Range",
              "values": [
                {
                  "level": 1,
                  "value": "2 cells"
                },
                {
                  "level": 2,
                  "value": "2 cells"
                },
                {
                  "level": 3,
                  "value": "2 cells"
                },
                {
                  "level": 4,
                  "value": "2 cells"
                },
                {
                  "level": 5,
                  "value": "2 cells"
                }
              ]
            },
            {
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "240000"
                },
                {
                  "level": 2,
                  "value": "240000"
                },
                {
                  "level": 3,
                  "value": "240000"
                },
                {
                  "level": 4,
                  "value": "240000"
                },
                {
                  "level": 5,
                  "value": "240000"
                }
              ]
            }
          ],
          "spCost": "30 + (Skill Level × 10)",
          "duration": "4 minutes",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2348.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2348",
          "tree": {
            "idx": 26,
            "row": 3,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 2344,
                "level": 1,
                "name": "Gentle Touch-Silence",
                "visible": true
              },
              {
                "id": 2345,
                "level": 1,
                "name": "Gentle Touch-Cure",
                "visible": true
              },
              {
                "id": 2346,
                "level": 3,
                "name": "Gentle Touch-Energy Gain",
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
                "value": "30 + (Skill Level × 10)"
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
                "value": "1 second"
              },
              {
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "Duration",
                "value": "4 minutes"
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
                    "id": "maxhp-increases-by-10-def",
                    "label": "MaxHP Increases By 10% / Def"
                  },
                  {
                    "id": "maxhp-increases-by-2-def",
                    "label": "MaxHP Increases By 2% / Def"
                  },
                  {
                    "id": "maxhp-increases-by-4-def",
                    "label": "MaxHP Increases By 4% / Def"
                  },
                  {
                    "id": "maxhp-increases-by-6-def",
                    "label": "MaxHP Increases By 6% / Def"
                  },
                  {
                    "id": "maxhp-increases-by-8-def",
                    "label": "MaxHP Increases By 8% / Def"
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
                      "maxhp-increases-by-2-def": "+ 20",
                      "effect": "HP Recovery Speed increases by 80%",
                      "sp-cost": "40",
                      "range": "2 cells",
                      "data-1": "240000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "maxhp-increases-by-4-def": "+ 40",
                      "effect": "HP Recovery Speed increases by 110%",
                      "sp-cost": "50",
                      "range": "2 cells",
                      "data-1": "240000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "maxhp-increases-by-6-def": "+ 60",
                      "effect": "HP Recovery Speed increases by 140%",
                      "sp-cost": "60",
                      "range": "2 cells",
                      "data-1": "240000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "maxhp-increases-by-8-def": "+ 80",
                      "effect": "HP Recovery Speed increases by 170%",
                      "sp-cost": "70",
                      "range": "2 cells",
                      "data-1": "240000"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "maxhp-increases-by-10-def": "+ 100",
                      "effect": "HP Recovery Speed increases by 200%",
                      "sp-cost": "80",
                      "range": "2 cells",
                      "data-1": "240000"
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
          "id": 2347,
          "imageFile": "2347.png",
          "name": "Gentle Touch-Convert",
          "maxLevel": 5,
          "prerequisiteText": "Gentle Touch-Energy Gain 3",
          "group": "Active / Buff",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Gentle_Touch-Convert",
          "description": "Using the knowledge of pressure point techniques, increase attack and attack speed and skill damage of Rampage Blast and Knuckle Arrow. Consumes 1 Spirit Sphere and some HP. This skill cannot be used in combination with Gentle Touch-Revitalize.",
          "levelDetails": [
            {
              "level": 1,
              "text": "HP 1% Consumption / ATK + 8 / ATK + 1%"
            },
            {
              "level": 2,
              "text": "HP 2% Consumption / ATK +16 / ATK + 2%"
            },
            {
              "level": 3,
              "text": "HP 3% Consumption / ATK +24 / ATK + 3%"
            },
            {
              "level": 4,
              "text": "HP 4% Consumption / ATK +32 / ATK + 4%"
            },
            {
              "level": 5,
              "text": "HP 5% Consumption / ATK +40 / ATK + 5%"
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "1 second",
          "castDelay": "1 second",
          "cooldown": "1 second",
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
              "label": "Range",
              "values": [
                {
                  "level": 1,
                  "value": "2 cells"
                },
                {
                  "level": 2,
                  "value": "2 cells"
                },
                {
                  "level": 3,
                  "value": "2 cells"
                },
                {
                  "level": 4,
                  "value": "2 cells"
                },
                {
                  "level": 5,
                  "value": "2 cells"
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
                  "value": "2"
                },
                {
                  "level": 3,
                  "value": "3"
                },
                {
                  "level": 4,
                  "value": "4"
                },
                {
                  "level": 5,
                  "value": "5"
                }
              ]
            },
            {
              "label": "Data 2",
              "values": [
                {
                  "level": 1,
                  "value": "240000"
                },
                {
                  "level": 2,
                  "value": "240000"
                },
                {
                  "level": 3,
                  "value": "240000"
                },
                {
                  "level": 4,
                  "value": "240000"
                },
                {
                  "level": 5,
                  "value": "240000"
                }
              ]
            }
          ],
          "spCost": "30 + (Skill Level × 10)",
          "duration": "4 minutes",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2347.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2347",
          "tree": {
            "idx": 27,
            "row": 3,
            "col": 6,
            "columns": 7,
            "requirements": [
              {
                "id": 2344,
                "level": 1,
                "name": "Gentle Touch-Silence",
                "visible": true
              },
              {
                "id": 2345,
                "level": 1,
                "name": "Gentle Touch-Cure",
                "visible": true
              },
              {
                "id": 2346,
                "level": 3,
                "name": "Gentle Touch-Energy Gain",
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
                "value": "30 + (Skill Level × 10)"
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
                "value": "1 second"
              },
              {
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "Duration",
                "value": "4 minutes"
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
                    "id": "hp-1-consumption-atk",
                    "label": "Hp 1% Consumption / Atk"
                  },
                  {
                    "id": "hp-2-consumption-atk",
                    "label": "Hp 2% Consumption / Atk"
                  },
                  {
                    "id": "hp-3-consumption-atk",
                    "label": "Hp 3% Consumption / Atk"
                  },
                  {
                    "id": "hp-4-consumption-atk",
                    "label": "Hp 4% Consumption / Atk"
                  },
                  {
                    "id": "hp-5-consumption-atk",
                    "label": "Hp 5% Consumption / Atk"
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
                      "hp-1-consumption-atk": "+ 8",
                      "atk": "+ 1%",
                      "sp-cost": "40",
                      "range": "2 cells",
                      "data-1": "1",
                      "data-2": "240000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "hp-2-consumption-atk": "+16",
                      "atk": "+ 2%",
                      "sp-cost": "50",
                      "range": "2 cells",
                      "data-1": "2",
                      "data-2": "240000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "hp-3-consumption-atk": "+24",
                      "atk": "+ 3%",
                      "sp-cost": "60",
                      "range": "2 cells",
                      "data-1": "3",
                      "data-2": "240000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "hp-4-consumption-atk": "+32",
                      "atk": "+ 4%",
                      "sp-cost": "70",
                      "range": "2 cells",
                      "data-1": "4",
                      "data-2": "240000"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "hp-5-consumption-atk": "+40",
                      "atk": "+ 5%",
                      "sp-cost": "80",
                      "range": "2 cells",
                      "data-1": "5",
                      "data-2": "240000"
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
          "id": 2343,
          "imageFile": "2343.png",
          "name": "Gates of Hell",
          "maxLevel": 10,
          "prerequisiteText": "Rising Dragon 5 / Tiger Cannon 5",
          "group": "Active / Damage",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Gates_of_Hell",
          "description": "Strikes the target with countless blows. The lower your HP, the more damage it deals. Consumes 2 Spirit Spheres and 100 SP. Can be used after Fallen Empire, in that case the damage is slightly higher.",
          "levelDetails": [],
          "fixedCastTime": "0 seconds",
          "cooldown": "0 seconds",
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
            },
            {
              "label": "Range",
              "values": [
                {
                  "level": 1,
                  "value": "1 cells"
                },
                {
                  "level": 2,
                  "value": "2 cells"
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
                  "value": "4 cells"
                },
                {
                  "level": 6,
                  "value": "4 cells"
                },
                {
                  "level": 7,
                  "value": "5 cells"
                },
                {
                  "level": 8,
                  "value": "5 cells"
                },
                {
                  "level": 9,
                  "value": "6 cells"
                },
                {
                  "level": 10,
                  "value": "7 cells"
                }
              ]
            },
            {
              "label": "Data 1",
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
          "spCost": "100",
          "variableCastTime": "[0.8 + (Skill Level × 0.2)] seconds",
          "castDelay": "(Skill Level × 0.1) seconds",
          "castRange": "7 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2343.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2343",
          "tree": {
            "idx": 31,
            "row": 4,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 2330,
                "level": 5,
                "name": "Tiger Cannon",
                "visible": true
              },
              {
                "id": 2332,
                "level": 1,
                "name": "Rampage Blast",
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
                "value": "10"
              },
              {
                "label": "SP Cost",
                "value": "100"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "[0.8 + (Skill Level × 0.2)] seconds"
              },
              {
                "label": "Cast Delay",
                "value": "(Skill Level × 0.1) seconds"
              },
              {
                "label": "Cooldown",
                "value": "0 seconds"
              },
              {
                "label": "Cast Range",
                "value": "7 cells"
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
                  },
                  {
                    "id": "data-1",
                    "label": "Data 1"
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
                      "sp-cost": "100",
                      "range": "1 cells",
                      "data-1": "12"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "100",
                      "range": "2 cells",
                      "data-1": "14"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "100",
                      "range": "3 cells",
                      "data-1": "16"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "100",
                      "range": "3 cells",
                      "data-1": "18"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "100",
                      "range": "4 cells",
                      "data-1": "20"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "100",
                      "range": "4 cells",
                      "data-1": "22"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "100",
                      "range": "5 cells",
                      "data-1": "24"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "100",
                      "range": "5 cells",
                      "data-1": "26"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "100",
                      "range": "6 cells",
                      "data-1": "28"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "sp-cost": "100",
                      "range": "7 cells",
                      "data-1": "30"
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
      "label": "Champion",
      "pointLimit": 69,
      "tree": {
        "columns": 7,
        "rows": 5
      },
      "skills": [
        {
          "id": 259,
          "imageFile": "259.png",
          "name": "Iron Fists",
          "maxLevel": 10,
          "prerequisiteText": "Demonbane, Divine Protection 10",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Iron_Fists",
          "description": "Increases ATK (Weapon Mastery) with Knuckle class weapons or Bare Handed.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Damage +3"
            },
            {
              "level": 2,
              "text": "Damage +6"
            },
            {
              "level": 3,
              "text": "Damage +9"
            },
            {
              "level": 4,
              "text": "Damage +12"
            },
            {
              "level": 5,
              "text": "Damage +15"
            },
            {
              "level": 6,
              "text": "Damage +18"
            },
            {
              "level": 7,
              "text": "Damage +21"
            },
            {
              "level": 8,
              "text": "Damage +24"
            },
            {
              "level": 9,
              "text": "Damage +27"
            },
            {
              "level": 10,
              "text": "Damage +30"
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
          "iconUrl": "assets/divine-pride/skills/259.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/259",
          "tree": {
            "idx": 0,
            "row": 0,
            "col": 0,
            "columns": 7,
            "requirements": [
              {
                "id": 22,
                "level": 10,
                "name": "Divine Protection",
                "visible": false
              },
              {
                "id": 23,
                "level": 10,
                "name": "Demon Bane",
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
          "id": 261,
          "imageFile": "261.png",
          "name": "Summon Spirit Sphere",
          "maxLevel": 5,
          "prerequisiteText": "Iron Fists 2",
          "group": "Active",
          "type": "Supportive",
          "target": "Caster Only",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Summon_Spirit_Sphere",
          "description": "Summons one Spirit Sphere that will orbit the user consuming SP8.\nSummoned sphere is maintained for 10 minutes. and affeccts when using the skill.\nEach sphere increases ATK by 3.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Maximum Summon Spirit Sphere : 1"
            },
            {
              "level": 2,
              "text": "Maximum Summon Spirit Sphere : 2"
            },
            {
              "level": 3,
              "text": "Maximum Summon Spirit Sphere : 3"
            },
            {
              "level": 4,
              "text": "Maximum Summon Spirit Sphere : 4"
            },
            {
              "level": 5,
              "text": "Maximum Summon Spirit Sphere : 5"
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
                }
              ]
            }
          ],
          "spCost": "8",
          "fixedCastTime": "0.5 second",
          "variableCastTime": "0.5 second",
          "duration": "10 minutes",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/261.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/261",
          "tree": {
            "idx": 1,
            "row": 0,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 259,
                "level": 2,
                "name": "Iron Fists",
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
                "value": "8"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0.5 second"
              },
              {
                "label": "Variable Cast Time",
                "value": "0.5 second"
              },
              {
                "label": "Target",
                "value": "Caster Only"
              },
              {
                "label": "Duration",
                "value": "10 minutes"
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
                      "effect": "Ma x imum Summon Spirit Sphere : 1",
                      "sp-cost": "8"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Ma x imum Summon Spirit Sphere : 2",
                      "sp-cost": "8"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Ma x imum Summon Spirit Sphere : 3",
                      "sp-cost": "8"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Ma x imum Summon Spirit Sphere : 4",
                      "sp-cost": "8"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Ma x imum Summon Spirit Sphere : 5",
                      "sp-cost": "8"
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
          "id": 265,
          "imageFile": "265.png",
          "name": "Flee (Skill)",
          "maxLevel": 10,
          "prerequisiteText": "Iron Fists 5, Summon Spirit Sphere 5",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Flee_(Skill)",
          "description": "Increases Flee Rate.",
          "levelDetails": [
            {
              "level": 1,
              "text": "FLEE + 1"
            },
            {
              "level": 2,
              "text": "FLEE + 3"
            },
            {
              "level": 3,
              "text": "FLEE + 4"
            },
            {
              "level": 4,
              "text": "FLEE + 6"
            },
            {
              "level": 5,
              "text": "FLEE + 7"
            },
            {
              "level": 6,
              "text": "FLEE + 9"
            },
            {
              "level": 7,
              "text": "FLEE +10"
            },
            {
              "level": 8,
              "text": "FLEE +12"
            },
            {
              "level": 9,
              "text": "FLEE +13"
            },
            {
              "level": 10,
              "text": "FLEE +15"
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
          "iconUrl": "assets/divine-pride/skills/265.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/265",
          "tree": {
            "idx": 2,
            "row": 0,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 259,
                "level": 5,
                "name": "Iron Fists",
                "visible": true
              },
              {
                "id": 261,
                "level": 5,
                "name": "Summon Spirit Sphere",
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
                    "id": "flee",
                    "label": "Flee"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "flee": "+ 1",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "flee": "+ 3",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "flee": "+ 4",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "flee": "+ 6",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "flee": "+ 7",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "flee": "+ 9",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "flee": "+10",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "flee": "+12",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "flee": "+13",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "flee": "+15",
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
          "id": 263,
          "imageFile": "263.png",
          "name": "Raging Trifecta Blow",
          "maxLevel": 10,
          "prerequisiteText": "Flee (Skill) 5",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Raging_Trifecta_Blow",
          "description": "Each cast has a 30% chance to inflict one bundle of 3 hits.\nThere's a dalay time (0.3s) for cast Raging quadruple after casting Raging Trifecta Blow.",
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
          "castDelay": "1.3 – ( AGI × 0.004) − ( DE x × 0.002) seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/263.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/263",
          "tree": {
            "idx": 3,
            "row": 0,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 265,
                "level": 5,
                "name": "Flee",
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
              },
              {
                "label": "Cast Delay",
                "value": "1.3 – ( AGI × 0.004) − ( DE x × 0.002) seconds"
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
          "id": 1015,
          "imageFile": "1015.png",
          "name": "Spiritual Bestowment",
          "maxLevel": 1,
          "prerequisiteText": "Finish Quest",
          "group": "Supportive",
          "type": "",
          "target": "1 Party Member",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Spiritual_Bestowment",
          "description": "Transfer the caster's Spiritual\nSpheres to a targeted Party Member. Each cast\nwill transfer 1 Spiritual Sphere.",
          "levelDetails": [],
          "fixedCastTime": "1 second",
          "variableCastTime": "1 second",
          "cooldown": "0.5 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "40"
                }
              ]
            }
          ],
          "spCost": "40",
          "castDelay": "1 second",
          "duration": "10 minutes",
          "castRange": "9 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/1015.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/1015",
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
                "value": "Supportive Skill"
              },
              {
                "label": "Levels",
                "value": "1"
              },
              {
                "label": "SP Cost",
                "value": "40"
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
                "value": "0.5 seconds"
              },
              {
                "label": "Cast Range",
                "value": "9 cells"
              },
              {
                "label": "Target",
                "value": "1 Party Member"
              },
              {
                "label": "Duration",
                "value": "10 minutes"
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
          "id": 262,
          "imageFile": "262.png",
          "name": "Spiritual Sphere Absorption",
          "maxLevel": 1,
          "prerequisiteText": "Summon Spirit Sphere 5",
          "group": "Active",
          "type": "Supportive",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Spiritual_Sphere_Absorption",
          "description": "Absorbs all Spirit Spheres the user/target has to regain SP consuming SP5,.\nregains 7 SP per sphere. In PvP, Guild battle, it is available to absorb the spirit sphere of another monk.\nVersus monsters, each cast has a 20% chance to regain SP equal to twice the target's level.\nThis skill does not work for boss monsters or guardians..",
          "levelDetails": [],
          "variableCastTime": "0 seconds",
          "castDelay": "0 seconds",
          "cooldown": "0 seconds",
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
          "spCost": "5",
          "fixedCastTime": "0.5 seconds",
          "castRange": "9 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/262.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/262",
          "tree": {
            "idx": 7,
            "row": 1,
            "col": 0,
            "columns": 7,
            "requirements": [
              {
                "id": 261,
                "level": 5,
                "name": "Summon Spirit Sphere",
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
                "value": "5"
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
        },
        {
          "id": 266,
          "imageFile": "266.png",
          "name": "Occult Impaction",
          "maxLevel": 5,
          "prerequisiteText": "Summon Spirit Sphere 5",
          "group": "Active",
          "type": "Special",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Occult_Impaction",
          "description": "Strikes inside a single target with a psychic impact.\ninflict piercing physical damage in proportion with the target's defense.\nThe higher the target's equipment defense, the more damage it has..\nDamage of skill itself is increased by 50% when using in Root status.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 100%, SP Consumption: 10"
            },
            {
              "level": 2,
              "text": "ATK 200%, SP Consumption: 14"
            },
            {
              "level": 3,
              "text": "ATK 300%, SP Consumption: 17"
            },
            {
              "level": 4,
              "text": "ATK 400%, SP Consumption: 19"
            },
            {
              "level": 5,
              "text": "ATK 500%, SP Consumption: 20"
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
                  "value": "14"
                },
                {
                  "level": 3,
                  "value": "17"
                },
                {
                  "level": 4,
                  "value": "19"
                },
                {
                  "level": 5,
                  "value": "20"
                }
              ]
            }
          ],
          "spCost": "(10 + (Skill Level x 11) - (Skill Level) ^2 ) ÷ 2",
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "0.5 seconds",
          "castDelay": "0.5 seconds",
          "castRange": "Melee",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/266.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/266",
          "tree": {
            "idx": 8,
            "row": 1,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 261,
                "level": 5,
                "name": "Summon Spirit Sphere",
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
                "value": "(10 + (Skill Level x 11) - (Skill Level) ^2 ) ÷ 2"
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
                "label": "Cast Range",
                "value": "Melee"
              },
              {
                "label": "Target",
                "value": "1 Target"
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
                      "sp-cost": "14"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "17"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "19"
                    }
                  },
                  {
                    "level": 5,
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
          "id": 269,
          "imageFile": "269.png",
          "name": "Root",
          "maxLevel": 5,
          "prerequisiteText": "Flee (Skill) 5",
          "group": "Active",
          "type": "Debuff",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Root",
          "description": "Catch the target attacking you and stop the caster and target for 10 seconds consuming SP10 and 1 summoned spirit sphere.\nWhen one of the two becomes incapable of fighting, the other one can move.\nWhen the skill level increases, some skill attacks while holding the target become possible.\nWhen used on boss monsters, the casting time is reduced.",
          "levelDetails": [
            {
              "level": 1,
              "text": "skill unavailable"
            },
            {
              "level": 2,
              "text": "Throw Spririt Sphere available"
            },
            {
              "level": 3,
              "text": "Occult impaction available"
            },
            {
              "level": 4,
              "text": "Raging quadruple available"
            },
            {
              "level": 5,
              "text": "Guillotine available\nThere must be at leaset one spirit sphere."
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "3 seconds",
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
              "label": "Data 2",
              "values": [
                {
                  "level": 1,
                  "value": "500"
                },
                {
                  "level": 2,
                  "value": "700"
                },
                {
                  "level": 3,
                  "value": "900"
                },
                {
                  "level": 4,
                  "value": "1100"
                },
                {
                  "level": 5,
                  "value": "1300"
                }
              ]
            },
            {
              "label": "Data 3",
              "values": [
                {
                  "level": 1,
                  "value": "10000"
                },
                {
                  "level": 2,
                  "value": "10000"
                },
                {
                  "level": 3,
                  "value": "10000"
                },
                {
                  "level": 4,
                  "value": "10000"
                },
                {
                  "level": 5,
                  "value": "10000"
                }
              ]
            }
          ],
          "spCost": "10",
          "duration": "10 seconds",
          "castRange": "Melee",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/269.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/269",
          "tree": {
            "idx": 9,
            "row": 1,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 265,
                "level": 5,
                "name": "Flee",
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
                "value": "10"
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
                "value": "3 seconds"
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
                "label": "Duration",
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
                      "effect": "skill unavailable",
                      "sp-cost": "10",
                      "data-1": "1",
                      "data-2": "500",
                      "data-3": "10000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Throw Spririt Sphere available",
                      "sp-cost": "10",
                      "data-1": "1",
                      "data-2": "700",
                      "data-3": "10000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Occult impaction available",
                      "sp-cost": "10",
                      "data-1": "1",
                      "data-2": "900",
                      "data-3": "10000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Raging quadruple available",
                      "sp-cost": "10",
                      "data-1": "1",
                      "data-2": "1100",
                      "data-3": "10000"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Guillotine available\nThere must be at leaset one spirit sphere",
                      "sp-cost": "10",
                      "data-1": "1",
                      "data-2": "1300",
                      "data-3": "10000"
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
          "id": 272,
          "imageFile": "272.png",
          "name": "Raging Quadruple Blow",
          "maxLevel": 5,
          "prerequisiteText": "Raging Trifecta Blow 5",
          "group": "Active",
          "type": "Physical Attack",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Raging_Quadruple_Blow",
          "description": "This skill can only be used immediately after Raging Trifecta Blow or during Level 4 Root status and can be followed up with Raging Thrust.\nInflicts four hits while spinning the current target.\nWhen used as a knuckle weapon, it hits the enemy 6 times with double damage.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 300%, SP Consumption: 5"
            },
            {
              "level": 2,
              "text": "ATK 350%, SP Consumption: 6"
            },
            {
              "level": 3,
              "text": "ATK 400%, SP Consumption: 7"
            },
            {
              "level": 4,
              "text": "ATK 450%, SP Consumption: 8"
            },
            {
              "level": 5,
              "text": "ATK 500%, SP Consumption: 9"
            }
          ],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "5"
                },
                {
                  "level": 2,
                  "value": "6"
                },
                {
                  "level": 3,
                  "value": "7"
                },
                {
                  "level": 4,
                  "value": "8"
                },
                {
                  "level": 5,
                  "value": "9"
                }
              ]
            }
          ],
          "spCost": "(Skill Level + 10)",
          "castDelay": "1.3 – [( AGI × 0.004) − ( DE x × 0.002)] seconds",
          "castRange": "Melee",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/272.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/272",
          "tree": {
            "idx": 10,
            "row": 1,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 263,
                "level": 5,
                "name": "Raging Trifecta Blow",
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
                "value": "(Skill Level + 10)"
              },
              {
                "label": "Cast Delay",
                "value": "1.3 – [( AGI × 0.004) − ( DE x × 0.002)] seconds"
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
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "5"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "6"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "7"
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
                      "sp-cost": "9"
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
          "id": 370,
          "imageFile": "370.png",
          "name": "Raging Palm Strike",
          "maxLevel": 5,
          "prerequisiteText": "Iron Fists 7, Summon Spirit Sphere 5",
          "group": "Active",
          "type": "Physical Attack",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Raging_Palm_Strike",
          "description": "Strike an enemy using the palms,\npushing back the enemy and causing damage, which\nis determined by the skill's level, after a\n1 second delay. This skill can only be used\nduring the Fury status.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 300%"
            },
            {
              "level": 2,
              "text": "ATK 400%"
            },
            {
              "level": 3,
              "text": "ATK 500%"
            },
            {
              "level": 4,
              "text": "ATK 600%"
            },
            {
              "level": 5,
              "text": "ATK 700%"
            }
          ],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "2"
                },
                {
                  "level": 2,
                  "value": "4"
                },
                {
                  "level": 3,
                  "value": "6"
                },
                {
                  "level": 4,
                  "value": "8"
                },
                {
                  "level": 5,
                  "value": "10"
                }
              ]
            }
          ],
          "spCost": "(Skill Level × 2)",
          "castDelay": "0.3 seconds",
          "castRange": "Melee",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/370.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/370",
          "tree": {
            "idx": 11,
            "row": 1,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 259,
                "level": 7,
                "name": "Iron Fists",
                "visible": true
              },
              {
                "id": 261,
                "level": 5,
                "name": "Summon Spirit Sphere",
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
                "value": "(Skill Level × 2)"
              },
              {
                "label": "Cast Delay",
                "value": "0.3 seconds"
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
                "value": "700% ATK"
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
                      "sp-cost": "2"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "4"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "6"
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
          "id": 1016,
          "imageFile": "1016.png",
          "name": "Excruciating Palm",
          "maxLevel": 1,
          "prerequisiteText": "Quest complete",
          "group": "Active",
          "type": "Physical Attack",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Excruciating_Palm",
          "description": "Focus your inner energies and attack an enemy. The targeted enemy receives 800% ATK damage, and adds a chance to push back and stun nearby monsters. Drains SP 40, HP 200 per use.",
          "levelDetails": [],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "40"
                }
              ]
            }
          ],
          "spCost": "20",
          "castDelay": "2 seconds",
          "castRange": "Melee",
          "areaOfEffect": "3 x 3",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/1016.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/1016",
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
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "1"
              },
              {
                "label": "SP Cost",
                "value": "20"
              },
              {
                "label": "Cast Delay",
                "value": "2 seconds"
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
                "label": "Area of Effect",
                "value": "3 x 3"
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
          "id": 270,
          "imageFile": "270.png",
          "name": "Fury",
          "maxLevel": 5,
          "prerequisiteText": "Spiritual Sphere Absorption 1",
          "group": "Active",
          "type": "Buff",
          "target": "Caster Only",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Fury",
          "description": "Unleashes the inner power of the user to increase Critical Hit Rate. Each cast uses five Spirit Spheres.\nIn Fury status, SP natural recovery speed is reduced by 50%.",
          "levelDetails": [
            {
              "level": 1,
              "text": "CRI + 10.0"
            },
            {
              "level": 2,
              "text": "CRI + 12.5"
            },
            {
              "level": 3,
              "text": "CRI + 15.0"
            },
            {
              "level": 4,
              "text": "CRI + 17.5"
            },
            {
              "level": 5,
              "text": "CRI + 20.0"
            }
          ],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "15"
                },
                {
                  "level": 2,
                  "value": "15"
                },
                {
                  "level": 3,
                  "value": "15"
                },
                {
                  "level": 4,
                  "value": "15"
                },
                {
                  "level": 5,
                  "value": "15"
                }
              ]
            }
          ],
          "spCost": "15",
          "duration": "3 minutes",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/270.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/270",
          "tree": {
            "idx": 14,
            "row": 2,
            "col": 0,
            "columns": 7,
            "requirements": [
              {
                "id": 262,
                "level": 1,
                "name": "Spiritual Sphere Absorption",
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
                "value": "15"
              },
              {
                "label": "Target",
                "value": "Caster Only"
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
                    "id": "cri",
                    "label": "Cri"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "cri": "+ 10.0",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "cri": "+ 12.5",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "cri": "+ 15.0",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "cri": "+ 17.5",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "cri": "+ 20.0",
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
          "id": 267,
          "imageFile": "267.png",
          "name": "Throw Spirit Sphere",
          "maxLevel": 5,
          "prerequisiteText": "Occult Impaction 3",
          "group": "Active",
          "type": "Ranged Physical Attack",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Throw_Spirit_Sphere",
          "description": "Throws the Spirit Spheres at a single target that will inflict ranged physical damage.\nDamage of skill itself is increased by 50% when using in Root status.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 800%"
            },
            {
              "level": 2,
              "text": "ATK 1000%"
            },
            {
              "level": 3,
              "text": "ATK 1200%"
            },
            {
              "level": 4,
              "text": "ATK 1400%"
            },
            {
              "level": 5,
              "text": "ATK 1600%"
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "0.5 seconds",
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
            },
            {
              "label": "Range",
              "values": [
                {
                  "level": 1,
                  "value": "9 cells"
                },
                {
                  "level": 2,
                  "value": "9 cells"
                },
                {
                  "level": 3,
                  "value": "9 cells"
                },
                {
                  "level": 4,
                  "value": "9 cells"
                },
                {
                  "level": 5,
                  "value": "9 cells"
                }
              ]
            },
            {
              "label": "Atk %",
              "values": [
                {
                  "level": 1,
                  "value": "800"
                },
                {
                  "level": 2,
                  "value": "1000"
                },
                {
                  "level": 3,
                  "value": "1200"
                },
                {
                  "level": 4,
                  "value": "1400"
                },
                {
                  "level": 5,
                  "value": "1600"
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
              "label": "Data 2",
              "values": [
                {
                  "level": 1,
                  "value": "1200"
                },
                {
                  "level": 2,
                  "value": "1500"
                },
                {
                  "level": 3,
                  "value": "1600"
                },
                {
                  "level": 4,
                  "value": "2100"
                },
                {
                  "level": 5,
                  "value": "2400"
                }
              ]
            }
          ],
          "spCost": "8 + (Skill Level x 4)",
          "castDelay": "0.5 seconds",
          "cooldown": "1 seconds",
          "castRange": "9 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/267.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/267",
          "tree": {
            "idx": 15,
            "row": 2,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 266,
                "level": 3,
                "name": "Occult Impaction",
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
                "value": "8 + (Skill Level x 4)"
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
                "value": "1 seconds"
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
                "label": "Damage",
                "value": "1,600% ATK"
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
                    "id": "atk",
                    "label": "Atk %"
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
                    "id": "range",
                    "label": "Range"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "10",
                      "range": "9 cells",
                      "atk": "800",
                      "data-1": "1",
                      "data-2": "1200"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "10",
                      "range": "9 cells",
                      "atk": "1000",
                      "data-1": "1",
                      "data-2": "1500"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "10",
                      "range": "9 cells",
                      "atk": "1200",
                      "data-1": "1",
                      "data-2": "1600"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "10",
                      "range": "9 cells",
                      "atk": "1400",
                      "data-1": "1",
                      "data-2": "2100"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "10",
                      "range": "9 cells",
                      "atk": "1600",
                      "data-1": "1",
                      "data-2": "2400"
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
          "id": 260,
          "imageFile": "260.png",
          "name": "Spiritual Cadence",
          "maxLevel": 5,
          "prerequisiteText": "Root 2",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Spiritual_Cadence",
          "description": "Enables to naturally recover additional HP and SP while the user is sitting.\nWhen overweight(over 70%), HP and SP is recovered every 20 seconds instead.\nBelow is the recovery amount for 10sec.",
          "levelDetails": [
            {
              "level": 1,
              "text": "HP+( 4+MaxHP 0.2%),SP+( 2+MaxSP 0.2%)"
            },
            {
              "level": 2,
              "text": "HP+( 8+MaxHP 0.4%),SP+( 4+MaxSP 0.4%)"
            },
            {
              "level": 3,
              "text": "HP+(12+MaxHP 0.6%),SP+( 6+MaxSP 0.6%)"
            },
            {
              "level": 4,
              "text": "HP+(16+MaxHP 0.8%),SP+( 8+MaxSP 0.8%)"
            },
            {
              "level": 5,
              "text": "HP+(20+MaxHP 1.0%),SP+(10+MaxSP 1.0%)"
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
          "iconUrl": "assets/divine-pride/skills/260.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/260",
          "tree": {
            "idx": 16,
            "row": 2,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 269,
                "level": 2,
                "name": "Root",
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
              },
              {
                "label": "Pulse",
                "value": "20 seconds"
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
                      "effect": "HP+( 4+Ma x HP 0.2%),SP+( 2+Ma x SP 0.2%)",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "HP+( 8+Ma x HP 0.4%),SP+( 4+Ma x SP 0.4%)",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "HP+(12+Ma x HP 0.6%),SP+( 6+Ma x SP 0.6%)",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "HP+(16+Ma x HP 0.8%),SP+( 8+Ma x SP 0.8%)",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "HP+(20+Ma x HP 1.0%),SP+(10+Ma x SP 1.0%)",
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
          "id": 273,
          "imageFile": "273.png",
          "name": "Raging Thrust",
          "maxLevel": 5,
          "prerequisiteText": "Raging Quadruple Blow 3",
          "group": "Active",
          "type": "Physical Attack",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Raging_Thrust",
          "description": "This skill can only be used immediately after Raging Quadruple Blow.\nPerforms a brutal, finishing strike at the current target. Each cast uses a Spirit Sphere.\nDamage is further increased by caster's STR.\nIf learned Guillotine Fist, there's a delay time(0.3) for casting Guillotine Fist.\nThis skill can be followed up with Chain Crush Combo, Glacier Fist or Guillotine Fist if the user is in Fury status and has 4 Spirit Spheres after this skill.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 600%, SP Consumption: 3"
            },
            {
              "level": 2,
              "text": "ATK 750%, SP Consumption: 4"
            },
            {
              "level": 3,
              "text": "ATK 900%, SP Consumption: 5"
            },
            {
              "level": 4,
              "text": "ATK1050%, SP Consumption: 6"
            },
            {
              "level": 5,
              "text": "ATK1200%, SP Consumption: 7"
            }
          ],
          "levelExtras": [
            {
              "label": "SP Cost",
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
          "spCost": "(Skill Level + 2)",
          "castDelay": "1.3 – [( AGI × 0.004) − ( DE x × 0.002)] seconds",
          "castRange": "Melee",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/273.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/273",
          "tree": {
            "idx": 17,
            "row": 2,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 272,
                "level": 3,
                "name": "Raging Quadruple Blow",
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
                "value": "(Skill Level + 2)"
              },
              {
                "label": "Cast Delay",
                "value": "1.3 – [( AGI × 0.004) − ( DE x × 0.002)] seconds"
              },
              {
                "label": "Cast Range",
                "value": "Melee"
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
                    "id": "effect",
                    "label": "Effect"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "3"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "4"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "5"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "ATK1050%, SP Consumption: 6",
                      "sp-cost": "6"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "ATK1200%, SP Consumption: 7",
                      "sp-cost": "7"
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
          "id": 401,
          "imageFile": "401.png",
          "name": "Zen",
          "maxLevel": 1,
          "prerequisiteText": "Fury 5",
          "group": "Supportive",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Zen",
          "description": "Summon 5 Spirit Spheres at one time.\nThe cast time of this skill is double the time\nof the Summon Spirit Sphere skill.",
          "levelDetails": [],
          "fixedCastTime": "1 second",
          "variableCastTime": "0 seconds",
          "castDelay": "0 seconds",
          "cooldown": "0 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "20"
                }
              ]
            }
          ],
          "spCost": "20",
          "translations": {
            "pt-BR": {
              "name": " Zen ",
              "description": "Invoca todas as esferas espirituais de uma só vez.\nAuréola do Poder · Golpe Pantocrator · Soco Guilhotina Auréola do Juiz · Toque Intercessor · Veredicto Auréola das Chamas · Palma Fervorosa · Fogueira Espiritual\nConcentrar · Olhos de Águia · Olhos de Coruja",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Zen"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/401.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/401",
          "tree": {
            "idx": 21,
            "row": 3,
            "col": 0,
            "columns": 7,
            "requirements": [
              {
                "id": 270,
                "level": 5,
                "name": "Fury",
                "visible": true
              }
            ]
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
                "value": "20"
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
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 271,
          "imageFile": "271.png",
          "name": "Guillotine Fist",
          "maxLevel": 5,
          "prerequisiteText": "Fury 3, Throw Spirit Sphere 3",
          "group": "Active",
          "type": "Special physics",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Guillotine_Fist",
          "description": "Requires the user to be in Fury status.\nPerforms an ultimate, devastating strike at a single/current target to inflict massive piercing physical damage at cost of all of the user's SP.\nAfter the execution of this skill, the user cannot regenerate SP naturally for 10 seconds afterwards.",
          "levelDetails": [],
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
            }
          ],
          "spCost": "Remaining SP",
          "fixedCastTime": "2.25 - (Skill Level × 0.25) seconds",
          "variableCastTime": "2.25 - (Skill Level × 0.25) seconds",
          "castDelay": "3.5 − (Skill Level × 0.5) seconds",
          "cooldown": "3 seconds",
          "castRange": "Melee",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/271.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/271",
          "tree": {
            "idx": 22,
            "row": 3,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 267,
                "level": 3,
                "name": "Throw Spirit Sphere",
                "visible": true
              },
              {
                "id": 270,
                "level": 3,
                "name": "Fury",
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
                "value": "Remaining SP"
              },
              {
                "label": "Fixed Cast Time",
                "value": "2.25 - (Skill Level × 0.25) seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "2.25 - (Skill Level × 0.25) seconds"
              },
              {
                "label": "Cast Delay",
                "value": "3.5 − (Skill Level × 0.5) seconds"
              },
              {
                "label": "Cooldown",
                "value": "3 seconds"
              },
              {
                "label": "Cast Range",
                "value": "Melee"
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
                      "sp-cost": "1"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "1"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "1"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "1"
                    }
                  },
                  {
                    "level": 5,
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
          "id": 268,
          "imageFile": "268.png",
          "name": "Mental Strength",
          "maxLevel": 5,
          "prerequisiteText": "Raging Thrust 3",
          "group": "Active",
          "type": "Supportive",
          "target": "Caster Only",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Mental_Strength",
          "description": "Strengthens the user's mind to temporarily reduce all incoming damage to 10%. Each cast uses five Spirit Spheres and SP200.\nCost of reduced Movement Speed and Attack Speed and the inability of using active and offensive skills.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Duration: 30sec"
            },
            {
              "level": 2,
              "text": "Duration: 60sec"
            },
            {
              "level": 3,
              "text": "Duration: 90sec"
            },
            {
              "level": 4,
              "text": "Duration:120sec"
            },
            {
              "level": 5,
              "text": "Duration:150sec"
            }
          ],
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
                  "value": "200"
                },
                {
                  "level": 3,
                  "value": "200"
                },
                {
                  "level": 4,
                  "value": "200"
                },
                {
                  "level": 5,
                  "value": "200"
                }
              ]
            }
          ],
          "spCost": "200",
          "fixedCastTime": "2.5 seconds",
          "variableCastTime": "2.5 seconds",
          "castDelay": "(Skill Duration)",
          "duration": "(Skill Level × 30) seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/268.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/268",
          "tree": {
            "idx": 24,
            "row": 3,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 273,
                "level": 3,
                "name": "Raging Thrust",
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
                "value": "200"
              },
              {
                "label": "Fixed Cast Time",
                "value": "2.5 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "2.5 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "(Skill Duration)"
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
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "duration": "30 seconds",
                      "sp-cost": "200"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "60 seconds",
                      "sp-cost": "200"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "90 seconds",
                      "sp-cost": "200"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "120 seconds",
                      "sp-cost": "200"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "150 seconds",
                      "sp-cost": "200"
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
          "id": 371,
          "imageFile": "371.png",
          "name": "Glacier Fist",
          "maxLevel": 5,
          "prerequisiteText": "Iron Fists 5, Raging Trifecta Blow 5, Raging Thrust 3",
          "group": "Active",
          "type": "Physical Attack",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Glacier_Fist",
          "description": "A combo skill that can be cast\nafter using Raging Quadruple Blow. An enemy hit\nby this skill is immobilized for a short period\nof time. Each cast requires 1 Spirit Sphere.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 650%, Freezing Chance 20%"
            },
            {
              "level": 2,
              "text": "ATK 800%, Freezing Chance 30%"
            },
            {
              "level": 3,
              "text": "ATK 950%, Freezing Chance 40%"
            },
            {
              "level": 4,
              "text": "ATK 1100%, Freezing Chance 50%"
            },
            {
              "level": 5,
              "text": "ATK 1250%, Freezing Chance 60%"
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
                  "value": "6"
                },
                {
                  "level": 3,
                  "value": "8"
                },
                {
                  "level": 4,
                  "value": "10"
                },
                {
                  "level": 5,
                  "value": "12"
                }
              ]
            }
          ],
          "spCost": "2 + (Skill Level × 2)",
          "castDelay": "1.3 – [( AGI × 0.004) − ( DE x × 0.002)] seconds",
          "castRange": "Melee",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/371.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/371",
          "tree": {
            "idx": 25,
            "row": 3,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 259,
                "level": 5,
                "name": "Iron Fists",
                "visible": true
              },
              {
                "id": 263,
                "level": 5,
                "name": "Raging Trifecta Blow",
                "visible": true
              },
              {
                "id": 273,
                "level": 3,
                "name": "Raging Thrust",
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
                "value": "2 + (Skill Level × 2)"
              },
              {
                "label": "Cast Delay",
                "value": "1.3 – [( AGI × 0.004) − ( DE x × 0.002)] seconds"
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
                "value": "1,250% ATK"
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
                      "sp-cost": "4"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "6"
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
                      "sp-cost": "10"
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
          "id": 264,
          "imageFile": "264.png",
          "name": "Snap",
          "maxLevel": 1,
          "prerequisiteText": "Spiritual Cadence 2, Guillotine Fist 3, Mental Strength 3",
          "group": "Active",
          "type": "1 cell on ground",
          "target": "Ground",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Snap",
          "description": "Instantly transports the user to a targeted location. Each cast uses a Spirit Sphere and SP 14.\nIf there's solid obstacle between the user and the destination, this skill is unavailable.\nIn Fury status, a Spirit Sphere is not consumed.\nThere is a Cast Delay of 2 seconds for a casted Guillotine Fist immediately after this skill.",
          "levelDetails": [],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "14"
                }
              ]
            }
          ],
          "spCost": "14",
          "castDelay": "ASPD Based *",
          "castRange": "18 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/264.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/264",
          "tree": {
            "idx": 30,
            "row": 4,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 260,
                "level": 2,
                "name": "Spiritual Cadence",
                "visible": true
              },
              {
                "id": 268,
                "level": 3,
                "name": "Mental Strength",
                "visible": true
              },
              {
                "id": 271,
                "level": 3,
                "name": "Guillotine Fist",
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
                "value": "14"
              },
              {
                "label": "Cast Delay",
                "value": "ASPD Based *"
              },
              {
                "label": "Cast Range",
                "value": "18 cells"
              },
              {
                "label": "Target",
                "value": "Ground"
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
                      "sp-cost": "14"
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
          "id": 372,
          "imageFile": "372.png",
          "name": "Chain Crush Combo",
          "maxLevel": 10,
          "prerequisiteText": "Iron Fists 5, Summon Spirit Sphere 5, Glacier Fist 2",
          "group": "Active",
          "type": "Physical Attack",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Chain_Crush_Combo",
          "description": "A combo skill that can be cast\nafter using Raging Thrust. Glacier Fist cannot\nbe used after this skill, although it can be\nfollowed up with Guillotine Fist.\nEach cast requires 1 Spirit Spheres.",
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
                  "value": "6"
                },
                {
                  "level": 3,
                  "value": "8"
                },
                {
                  "level": 4,
                  "value": "10"
                },
                {
                  "level": 5,
                  "value": "12"
                },
                {
                  "level": 6,
                  "value": "14"
                },
                {
                  "level": 7,
                  "value": "16"
                },
                {
                  "level": 8,
                  "value": "18"
                },
                {
                  "level": 9,
                  "value": "20"
                },
                {
                  "level": 10,
                  "value": "22"
                }
              ]
            }
          ],
          "spCost": "2 + (Skill Level × 2)",
          "castDelay": "(1~5) 0.8 seconds; (6~10) 1 second",
          "castRange": "Melee",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/372.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/372",
          "tree": {
            "idx": 32,
            "row": 4,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 259,
                "level": 5,
                "name": "Iron Fists",
                "visible": true
              },
              {
                "id": 261,
                "level": 5,
                "name": "Summon Spirit Sphere",
                "visible": true
              },
              {
                "id": 371,
                "level": 2,
                "name": "Glacier Fist",
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
                "value": "2 + (Skill Level × 2)"
              },
              {
                "label": "Cast Delay",
                "value": "(1~5) 0.8 seconds; (6~10) 1 second"
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
                      "sp-cost": "4"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "6"
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
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "14"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "16"
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
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "sp-cost": "22"
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
      "label": "Acolyte",
      "pointLimit": 49,
      "tree": {
        "columns": 7,
        "rows": 4
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
          "id": 24,
          "imageFile": "24.png",
          "name": "Ruwach",
          "maxLevel": 1,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "Supportive, Magic",
          "target": "Immediately",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Ruwach",
          "description": "Each cast consumes SP10, reveal hidden enemies within 5*5cell around it.\nIf the hidden is enemy, inflict 145% Holy property magic damage.",
          "levelDetails": [],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "10"
                }
              ]
            }
          ],
          "spCost": "10",
          "duration": "10 seconds",
          "areaOfEffect": "5 x 5",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/24.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/24",
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
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "1"
              },
              {
                "label": "SP Cost",
                "value": "10"
              },
              {
                "label": "Target",
                "value": "Immediately"
              },
              {
                "label": "Area of Effect",
                "value": "5 x 5"
              },
              {
                "label": "Duration",
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
                  }
                ],
                "rows": [
                  {
                    "level": 1,
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
          "id": 31,
          "imageFile": "31.png",
          "name": "Aqua Benedicta",
          "maxLevel": 1,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "Supportive",
          "target": "Immediately",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Aqua_Benedicta",
          "description": "Draws water under the caster to create a single Holy Water from it. Requires the player to be in shallow water and each cast consumes SP10.",
          "levelDetails": [],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "10"
                }
              ]
            }
          ],
          "spCost": "10",
          "fixedCastTime": "0.2 seconds",
          "variableCastTime": "0.8 seconds",
          "castDelay": "0.5 seconds",
          "translations": {
            "pt-BR": {
              "name": " Aqua Benedicta ",
              "description": "Cria Água Benta a partir de uma Garrafa Vazia e um pouco de água.\nConcentrar · Olhos de Águia · Olhos de Coruja\nAumentar Capacidade de Carga · Comércio · Desconto · Identificar Item · Mammonita · Superfaturar · Usar Carrinho",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Aqua_Benedicta"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/31.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/31",
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
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "1"
              },
              {
                "label": "SP Cost",
                "value": "10"
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
                "value": "0.5 seconds"
              },
              {
                "label": "Target",
                "value": "Immediately"
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
          "id": 156,
          "imageFile": "156.png",
          "name": "Holy Light",
          "maxLevel": 1,
          "prerequisiteText": "Finish Quest",
          "group": "Offensive",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Holy_Light",
          "description": "Summon holy light to counter evil.",
          "levelDetails": [],
          "castDelay": "0 seconds",
          "cooldown": "0 seconds",
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
          "fixedCastTime": "0.2 seconds",
          "variableCastTime": "0.8 seconds",
          "castRange": "Magic",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/156.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/156",
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
                "value": "Offensive Skill"
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
                "label": "Fixed Cast Time",
                "value": "0.2 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "0.8 seconds"
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
                "value": "Magic"
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
          "id": 26,
          "imageFile": "26.png",
          "name": "Teleport",
          "maxLevel": 2,
          "prerequisiteText": "Ruwach 1",
          "group": "Active",
          "type": "Supportive",
          "target": "Immediately",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Teleport",
          "description": "Warps the user to a different location instantly.\nThis skill is disabled within land protector effect.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Warps to Random in Map, ConsumptionSP: 10"
            },
            {
              "level": 2,
              "text": "Warps to Map and Save Point, ConsumptionSP: 9"
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
                  "value": "9"
                }
              ]
            }
          ],
          "spCost": "11 − Skill Level",
          "castDelay": "ASPD",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/26.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/26",
          "tree": {
            "idx": 8,
            "row": 1,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 24,
                "level": 1,
                "name": "Ruwach",
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
                "value": "2"
              },
              {
                "label": "SP Cost",
                "value": "11 − Skill Level"
              },
              {
                "label": "Cast Delay",
                "value": "ASPD"
              },
              {
                "label": "Target",
                "value": "Immediately"
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
                      "effect": "Warps to Random in Map, ConsumptionSP: 10",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Warps to Map and Save Point, ConsumptionSP: 9",
                      "sp-cost": "9"
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
            "idx": 9,
            "row": 1,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 28,
                "level": 2,
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
          "id": 29,
          "imageFile": "29.png",
          "name": "Increase agility",
          "maxLevel": 10,
          "prerequisiteText": "Heal 3",
          "group": "Active",
          "type": "Buff",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Places a temporary buff on a single target that increases AGI and Movement Speed. Each cast consumes additional HP10.\nWhen use this skill to the target leaving in [Abnormal Status : Decrease agility], the target releases the state and increases agility.",
          "levelDetails": [
            {
              "level": 1,
              "text": "AGI+3, ATK Speed: +1%, Duration: 60sec"
            },
            {
              "level": 2,
              "text": "AGI+4, ATK Speed: +2%, Duration: 80sec"
            },
            {
              "level": 3,
              "text": "AGI+5, ATK Speed: +3%, Duration:100sec"
            },
            {
              "level": 4,
              "text": "AGI+6, ATK Speed: +4%, Duration:120sec"
            },
            {
              "level": 5,
              "text": "AGI+7, ATK Speed: +5%, Duration:140sec"
            },
            {
              "level": 6,
              "text": "AGI+8, ATK Speed: +6%, Duration:160sec"
            },
            {
              "level": 7,
              "text": "AGI+9, ATK Speed: +7%, Duration:180sec"
            },
            {
              "level": 8,
              "text": "AGI+10, ATK Speed: +8%, Duration:200sec"
            },
            {
              "level": 9,
              "text": "AGI+11, ATK Speed: +9%, Duration:220sec"
            },
            {
              "level": 10,
              "text": "AGI+12, ATK Speed: +10%, Duration:240sec"
            }
          ],
          "fixedCastTime": "0.2 seconds",
          "variableCastTime": "0.8 seconds",
          "castDelay": "0.4 seconds",
          "cooldown": "0 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "18"
                },
                {
                  "level": 2,
                  "value": "21"
                },
                {
                  "level": 3,
                  "value": "24"
                },
                {
                  "level": 4,
                  "value": "27"
                },
                {
                  "level": 5,
                  "value": "30"
                },
                {
                  "level": 6,
                  "value": "33"
                },
                {
                  "level": 7,
                  "value": "36"
                },
                {
                  "level": 8,
                  "value": "39"
                },
                {
                  "level": 9,
                  "value": "42"
                },
                {
                  "level": 10,
                  "value": "45"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/29.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/29",
          "tree": {
            "idx": 10,
            "row": 1,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 28,
                "level": 3,
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
                "value": "10"
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
                "value": "0.4 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0 seconds"
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
                    "id": "agi",
                    "label": "Agi"
                  },
                  {
                    "id": "atk-speed",
                    "label": "Atk Speed:"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "duration": "60 seconds",
                      "agi": "+3",
                      "atk-speed": "+1%",
                      "sp-cost": "18"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "80 seconds",
                      "agi": "+4",
                      "atk-speed": "+2%",
                      "sp-cost": "21"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "100 seconds",
                      "agi": "+5",
                      "atk-speed": "+3%",
                      "sp-cost": "24"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "120 seconds",
                      "agi": "+6",
                      "atk-speed": "+4%",
                      "sp-cost": "27"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "140 seconds",
                      "agi": "+7",
                      "atk-speed": "+5%",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "duration": "160 seconds",
                      "agi": "+8",
                      "atk-speed": "+6%",
                      "sp-cost": "33"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "duration": "180 seconds",
                      "agi": "+9",
                      "atk-speed": "+7%",
                      "sp-cost": "36"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "duration": "200 seconds",
                      "agi": "+10",
                      "atk-speed": "+8%",
                      "sp-cost": "39"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "duration": "220 seconds",
                      "agi": "+11",
                      "atk-speed": "+9%",
                      "sp-cost": "42"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "duration": "240 seconds",
                      "agi": "+12",
                      "atk-speed": "+10%",
                      "sp-cost": "45"
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
          "id": 34,
          "imageFile": "34.png",
          "name": "Blessing",
          "maxLevel": 10,
          "prerequisiteText": "Divine Protection 5",
          "group": "Active",
          "type": "Buff",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Blessing",
          "description": "Places a temporary buff on a single target that increases STR, DEX, INT and Accuracy rate. This skill also purges the target of Curse and Stone statuses.\nVersus Undead property and Demon race monsters, halves their STR, DEX and INT instead.",
          "levelDetails": [
            {
              "level": 1,
              "text": "STR,INT,DEX+1,HIT+2, Duration: 60sec"
            },
            {
              "level": 2,
              "text": "STR,INT,DEX+2,HIT+4, Duration: 80sec"
            },
            {
              "level": 3,
              "text": "STR,INT,DEX+3,HIT+6, Duration:100sec"
            },
            {
              "level": 4,
              "text": "STR,INT,DEX+4,HIT+8, Duration:120sec"
            },
            {
              "level": 5,
              "text": "STR,INT,DEX+5,HIT+10, Duration:140sec"
            },
            {
              "level": 6,
              "text": "STR,INT,DEX+6,HIT+12, Duration:160sec"
            },
            {
              "level": 7,
              "text": "STR,INT,DEX+7,HIT+14, Duration:180sec"
            },
            {
              "level": 8,
              "text": "STR,INT,DEX+8,HIT+16, Duration:200sec"
            },
            {
              "level": 9,
              "text": "STR,INT,DEX+9,HIT+18, Duration:220sec"
            },
            {
              "level": 10,
              "text": "STR,INT,DEX+10,HIT+20, Duration:240sec"
            }
          ],
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
                  "value": "32"
                },
                {
                  "level": 3,
                  "value": "36"
                },
                {
                  "level": 4,
                  "value": "40"
                },
                {
                  "level": 5,
                  "value": "44"
                },
                {
                  "level": 6,
                  "value": "48"
                },
                {
                  "level": 7,
                  "value": "52"
                },
                {
                  "level": 8,
                  "value": "56"
                },
                {
                  "level": 9,
                  "value": "60"
                },
                {
                  "level": 10,
                  "value": "64"
                }
              ]
            }
          ],
          "spCost": "24 + (Skill Level × 4)",
          "duration": "40 + (Skill Level × 20) seconds",
          "castRange": "9 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/34.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/34",
          "tree": {
            "idx": 11,
            "row": 1,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 22,
                "level": 5,
                "name": "Divine Protection",
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
                "value": "24 + (Skill Level × 4)"
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
                  },
                  {
                    "id": "duration",
                    "label": "Duration"
                  },
                  {
                    "id": "hit",
                    "label": "Hit"
                  },
                  {
                    "id": "str-int-dex",
                    "label": "Str,int,dex"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "duration": "60 seconds",
                      "str-int-dex": "+1",
                      "hit": "+2",
                      "sp-cost": "28"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "80 seconds",
                      "str-int-dex": "+2",
                      "hit": "+4",
                      "sp-cost": "32"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "100 seconds",
                      "str-int-dex": "+3",
                      "hit": "+6",
                      "sp-cost": "36"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "120 seconds",
                      "str-int-dex": "+4",
                      "hit": "+8",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "140 seconds",
                      "str-int-dex": "+5",
                      "hit": "+10",
                      "sp-cost": "44"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "duration": "160 seconds",
                      "str-int-dex": "+6",
                      "hit": "+12",
                      "sp-cost": "48"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "duration": "180 seconds",
                      "str-int-dex": "+7",
                      "hit": "+14",
                      "sp-cost": "52"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "duration": "200 seconds",
                      "str-int-dex": "+8",
                      "hit": "+16",
                      "sp-cost": "56"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "duration": "220 seconds",
                      "str-int-dex": "+9",
                      "hit": "+18",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "duration": "240 seconds",
                      "str-int-dex": "+10",
                      "hit": "+20",
                      "sp-cost": "64"
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
            "idx": 12,
            "row": 1,
            "col": 5,
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
          "id": 33,
          "imageFile": "33.png",
          "name": "Angelus",
          "maxLevel": 10,
          "prerequisiteText": "Divine Protection 3",
          "group": "Active",
          "type": "Buff",
          "target": "Immediately",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Angelus",
          "description": "Increase physical defense and MaxHP on the user and all party members in a 14x14 area around the user.",
          "levelDetails": [
            {
              "level": 1,
              "text": "VIT Defense+ 5%, HP+ 50, Duration: 30sec"
            },
            {
              "level": 2,
              "text": "VIT Defense+10%, HP+100, Duration: 60sec"
            },
            {
              "level": 3,
              "text": "VIT Defense+15%, HP+150, Duration: 90sec"
            },
            {
              "level": 4,
              "text": "VIT Defense+20%, HP+200, Duration:120sec"
            },
            {
              "level": 5,
              "text": "VIT Defense+25%, HP+250, Duration:150sec"
            },
            {
              "level": 6,
              "text": "VIT Defense+30%, HP+300, Duration:180sec"
            },
            {
              "level": 7,
              "text": "VIT Defense+35%, HP+350, Duration:210sec"
            },
            {
              "level": 8,
              "text": "VIT Defense+40%, HP+400, Duration:240sec"
            },
            {
              "level": 9,
              "text": "VIT Defense+45%, HP+450, Duration:270sec"
            },
            {
              "level": 10,
              "text": "VIT Defense+50%, HP+500, Duration:300sec"
            }
          ],
          "fixedCastTime": "0.15 seconds",
          "variableCastTime": "0.35 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "30 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "23"
                },
                {
                  "level": 2,
                  "value": "26"
                },
                {
                  "level": 3,
                  "value": "29"
                },
                {
                  "level": 4,
                  "value": "32"
                },
                {
                  "level": 5,
                  "value": "35"
                },
                {
                  "level": 6,
                  "value": "38"
                },
                {
                  "level": 7,
                  "value": "41"
                },
                {
                  "level": 8,
                  "value": "44"
                },
                {
                  "level": 9,
                  "value": "47"
                },
                {
                  "level": 10,
                  "value": "50"
                }
              ]
            }
          ],
          "spCost": "20 + (Skill Level × 3)",
          "duration": "(Skill Level × 30) seconds",
          "areaOfEffect": "14 x 14",
          "translations": {
            "pt-BR": {
              "name": " Angelus ",
              "description": "Uma oração para anunciar boas virtudes.\nAumenta o HP e a DEF de todos os membros do grupo ao redor do usuário.\nConcentrar · Olhos de Águia · Olhos de Coruja",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Angelus"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/33.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/33",
          "tree": {
            "idx": 13,
            "row": 1,
            "col": 6,
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
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "10"
              },
              {
                "label": "SP Cost",
                "value": "20 + (Skill Level × 3)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0.15 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "0.35 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.5 seconds"
              },
              {
                "label": "Cooldown",
                "value": "30 seconds"
              },
              {
                "label": "Target",
                "value": "Immediately"
              },
              {
                "label": "Area of Effect",
                "value": "14 x 14"
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
                    "id": "hp",
                    "label": "Hp"
                  },
                  {
                    "id": "vit-defense",
                    "label": "Vit Defense"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "duration": "30 seconds",
                      "vit-defense": "+ 5%",
                      "hp": "+ 50",
                      "sp-cost": "23"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "60 seconds",
                      "vit-defense": "+10%",
                      "hp": "+100",
                      "sp-cost": "26"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "90 seconds",
                      "vit-defense": "+15%",
                      "hp": "+150",
                      "sp-cost": "29"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "120 seconds",
                      "vit-defense": "+20%",
                      "hp": "+200",
                      "sp-cost": "32"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "150 seconds",
                      "vit-defense": "+25%",
                      "hp": "+250",
                      "sp-cost": "35"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "duration": "180 seconds",
                      "vit-defense": "+30%",
                      "hp": "+300",
                      "sp-cost": "38"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "duration": "210 seconds",
                      "vit-defense": "+35%",
                      "hp": "+350",
                      "sp-cost": "41"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "duration": "240 seconds",
                      "vit-defense": "+40%",
                      "hp": "+400",
                      "sp-cost": "44"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "duration": "270 seconds",
                      "vit-defense": "+45%",
                      "hp": "+450",
                      "sp-cost": "47"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "duration": "300 seconds",
                      "vit-defense": "+50%",
                      "hp": "+500",
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
        },
        {
          "id": 27,
          "imageFile": "27.png",
          "name": "Warp portal",
          "maxLevel": 4,
          "prerequisiteText": "Teleportation 2",
          "group": "Active",
          "type": "1 cell on ground",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Creates a Warp Portal that will transport those that enter to the portal's destination. Up to 8 players can be transported regardless of the skill level. Each cast consumes a Blue Gemstone.\nThis skill is disabled within land protector effect.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Move to save point."
            },
            {
              "level": 2,
              "text": "1 custom position available"
            },
            {
              "level": 3,
              "text": "2 custom position available"
            },
            {
              "level": 4,
              "text": "3 custom position available\n[Custom Position] : Stand in the area and type in [/memo] to store a Memo Point of the current spot."
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
                  "value": "32"
                },
                {
                  "level": 3,
                  "value": "29"
                },
                {
                  "level": 4,
                  "value": "26"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/27.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/27",
          "tree": {
            "idx": 15,
            "row": 2,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 26,
                "level": 2,
                "name": "Teleport",
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
                "value": "4"
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
                      "effect": "Move to save point",
                      "sp-cost": "35"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "1 custom position available",
                      "sp-cost": "32"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "2 custom position available",
                      "sp-cost": "29"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "3 custom position available\n[Custom Position] : Stand in the area and type in [ / memo] to store a Memo Point of the current spot",
                      "sp-cost": "26"
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
          "id": 30,
          "imageFile": "30.png",
          "name": "Decrease agility",
          "maxLevel": 10,
          "prerequisiteText": "Increase agility 1",
          "group": "Active",
          "type": "Debuff",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Attempts to place a debuff[Abnormal Status : Decrease agility] on a single target.\nTarget's movement speed and AGI is decreased during the Duration.",
          "levelDetails": [
            {
              "level": 1,
              "text": "AGI- 3, success rate: 53%, Duration: 20sec"
            },
            {
              "level": 2,
              "text": "AGI- 4, success rate: 56%, Duration: 25sec"
            },
            {
              "level": 3,
              "text": "AGI- 5, success rate: 59%, Duration: 30sec"
            },
            {
              "level": 4,
              "text": "AGI- 6, success rate: 62%, Duration: 35sec"
            },
            {
              "level": 5,
              "text": "AGI- 7, success rate: 65%, Duration: 40sec"
            },
            {
              "level": 6,
              "text": "AGI- 8, success rate: 68%, Duration: 45sec"
            },
            {
              "level": 7,
              "text": "AGI- 9, success rate: 71%, Duration: 50sec"
            },
            {
              "level": 8,
              "text": "AGI-10, success rate: 74%, Duration: 55sec"
            },
            {
              "level": 9,
              "text": "AGI-11, success rate: 77%, Duration: 60sec"
            },
            {
              "level": 10,
              "text": "AGI-12, success rate: 80%, Duration: 65sec"
            }
          ],
          "fixedCastTime": "0.25 seconds",
          "variableCastTime": "0.75 seconds",
          "castDelay": "1 second",
          "cooldown": "0.5 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "15"
                },
                {
                  "level": 2,
                  "value": "17"
                },
                {
                  "level": 3,
                  "value": "19"
                },
                {
                  "level": 4,
                  "value": "21"
                },
                {
                  "level": 5,
                  "value": "23"
                },
                {
                  "level": 6,
                  "value": "25"
                },
                {
                  "level": 7,
                  "value": "27"
                },
                {
                  "level": 8,
                  "value": "29"
                },
                {
                  "level": 9,
                  "value": "31"
                },
                {
                  "level": 10,
                  "value": "33"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/30.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/30",
          "tree": {
            "idx": 17,
            "row": 2,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 29,
                "level": 1,
                "name": "Increase Agility",
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
                "value": "0.25 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "0.75 seconds"
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
                  },
                  {
                    "id": "agi",
                    "label": "Agi"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "duration": "20 seconds",
                      "agi": "- 3",
                      "effect": "success rate: 53%",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "25 seconds",
                      "agi": "- 4",
                      "effect": "success rate: 56%",
                      "sp-cost": "17"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "30 seconds",
                      "agi": "- 5",
                      "effect": "success rate: 59%",
                      "sp-cost": "19"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "35 seconds",
                      "agi": "- 6",
                      "effect": "success rate: 62%",
                      "sp-cost": "21"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "40 seconds",
                      "agi": "- 7",
                      "effect": "success rate: 65%",
                      "sp-cost": "23"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "duration": "45 seconds",
                      "agi": "- 8",
                      "effect": "success rate: 68%",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "duration": "50 seconds",
                      "agi": "- 9",
                      "effect": "success rate: 71%",
                      "sp-cost": "27"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "duration": "55 seconds",
                      "agi": "-10",
                      "effect": "success rate: 74%",
                      "sp-cost": "29"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "duration": "60 seconds",
                      "agi": "-11",
                      "effect": "success rate: 77%",
                      "sp-cost": "31"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "duration": "65 seconds",
                      "agi": "-12",
                      "effect": "success rate: 80%",
                      "sp-cost": "33"
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
          "id": 32,
          "imageFile": "32.png",
          "name": "Signum Crucis",
          "maxLevel": 10,
          "prerequisiteText": "Demon Bane 3",
          "group": "Active",
          "type": "Debuff",
          "target": "Immediately",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Signum_Crucis",
          "description": "Decreases the hard defense of all Undead property and Demon race monsters in the caster's screen.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Physical Defense -14%, success rate: 27%"
            },
            {
              "level": 2,
              "text": "Physical Defense -18%, success rate: 31%"
            },
            {
              "level": 3,
              "text": "Physical Defense -22%, success rate: 35%"
            },
            {
              "level": 4,
              "text": "Physical Defense -26%, success rate: 39%"
            },
            {
              "level": 5,
              "text": "Physical Defense -30%, success rate: 43%"
            },
            {
              "level": 6,
              "text": "Physical Defense -34%, success rate: 47%"
            },
            {
              "level": 7,
              "text": "Physical Defense -38%, success rate: 51%"
            },
            {
              "level": 8,
              "text": "Physical Defense -42%, success rate: 55%"
            },
            {
              "level": 9,
              "text": "Physical Defense -46%, success rate: 59%"
            },
            {
              "level": 10,
              "text": "Physical Defense -50%, success rate: 63%"
            }
          ],
          "fixedCastTime": "0.15 seconds",
          "variableCastTime": "0.35 seconds",
          "castDelay": "2 seconds",
          "cooldown": "1 second",
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
                  "value": "35"
                },
                {
                  "level": 3,
                  "value": "35"
                },
                {
                  "level": 4,
                  "value": "35"
                },
                {
                  "level": 5,
                  "value": "35"
                },
                {
                  "level": 6,
                  "value": "35"
                },
                {
                  "level": 7,
                  "value": "35"
                },
                {
                  "level": 8,
                  "value": "35"
                },
                {
                  "level": 9,
                  "value": "35"
                },
                {
                  "level": 10,
                  "value": "35"
                }
              ]
            }
          ],
          "spCost": "35",
          "areaOfEffect": "Screen",
          "translations": {
            "pt-BR": {
              "name": " Signum Crucis ",
              "description": "Marca o mal com o símbolo da cruz.\nTem chance de reduzir a DEF da raça demônio e da propriedade maldito .\nConcentrar · Olhos de Águia · Olhos de Coruja",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Signum_Crucis"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/32.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/32",
          "tree": {
            "idx": 19,
            "row": 2,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 23,
                "level": 3,
                "name": "Demon Bane",
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
                "value": "35"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0.15 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "0.35 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "2 seconds"
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
                "value": "Screen"
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
                    "id": "physical-defense",
                    "label": "Physical Defense"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "physical-defense": "-14%",
                      "effect": "success rate: 27%",
                      "sp-cost": "35"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "physical-defense": "-18%",
                      "effect": "success rate: 31%",
                      "sp-cost": "35"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "physical-defense": "-22%",
                      "effect": "success rate: 35%",
                      "sp-cost": "35"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "physical-defense": "-26%",
                      "effect": "success rate: 39%",
                      "sp-cost": "35"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "physical-defense": "-30%",
                      "effect": "success rate: 43%",
                      "sp-cost": "35"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "physical-defense": "-34%",
                      "effect": "success rate: 47%",
                      "sp-cost": "35"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "physical-defense": "-38%",
                      "effect": "success rate: 51%",
                      "sp-cost": "35"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "physical-defense": "-42%",
                      "effect": "success rate: 55%",
                      "sp-cost": "35"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "physical-defense": "-46%",
                      "effect": "success rate: 59%",
                      "sp-cost": "35"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "physical-defense": "-50%",
                      "effect": "success rate: 63%",
                      "sp-cost": "35"
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
          "id": 25,
          "imageFile": "25.png",
          "name": "Pneuma",
          "maxLevel": 1,
          "prerequisiteText": "Warp portal 4",
          "group": "Active",
          "type": "1 cell on ground",
          "target": "Ground",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Pneuma",
          "description": "Each cast consumes SP10, Creates a green cloud on a targeted location that blocks Ranged physical damage for ten seconds.",
          "levelDetails": [],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "10"
                }
              ]
            }
          ],
          "spCost": "10",
          "castDelay": "ASPD",
          "duration": "10 seconds",
          "castRange": "9 cells",
          "areaOfEffect": "3 x 3",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/25.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/25",
          "tree": {
            "idx": 22,
            "row": 3,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 27,
                "level": 4,
                "name": "Warp Portal",
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
                "value": "10"
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
                "value": "Ground"
              },
              {
                "label": "Area of Effect",
                "value": "3 x 3"
              },
              {
                "label": "Duration",
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
                  }
                ],
                "rows": [
                  {
                    "level": 1,
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
        }
      ]
    }
  ],
  "skills": [
    {
      "id": 5240,
      "imageFile": "5240.png",
      "name": "Will of Faith",
      "maxLevel": 10,
      "prerequisiteText": "basic skill",
      "group": "Passive",
      "type": "",
      "target": "",
      "recoversAp": "",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Will_of_Faith",
      "description": "Fortify your determination to eradicate evil.\nKnuckles inflict more Physical damage on Demon and Undead monsters and decrease Physical/Magic damage from them.",
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
      "iconUrl": "assets/divine-pride/skills/5240.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5240",
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
      "id": 5242,
      "imageFile": "5242.png",
      "name": "Sincere Faith",
      "maxLevel": 5,
      "prerequisiteText": "Will of Faith Lv. 1",
      "group": "Active",
      "type": "Support",
      "target": "Self",
      "recoversAp": "",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Sincere_Faith",
      "description": "Strengthen your faith, increasing your ASPD and adding durability to your attacks.\nCan't be used with Powerful Faith or Firm Faith.",
      "levelDetails": [],
      "fixedCastTime": "1 second",
      "variableCastTime": "1 second",
      "castDelay": "0 seconds",
      "cooldown": "60 seconds",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "54"
            },
            {
              "level": 2,
              "value": "58"
            },
            {
              "level": 3,
              "value": "62"
            },
            {
              "level": 4,
              "value": "66"
            },
            {
              "level": 5,
              "value": "70"
            }
          ]
        }
      ],
      "spCost": "50 + (Skill Level x 4)",
      "duration": "90 + (Skill Level x 30)",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5242.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5242",
      "tree": {
        "idx": 7,
        "row": 1,
        "col": 0,
        "columns": 7,
        "requirements": [
          {
            "id": 5240,
            "level": 1,
            "name": "Will of Faith",
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
            "value": "50 + (Skill Level x 4)"
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
            "value": "60 seconds"
          },
          {
            "label": "Target",
            "value": "Self"
          },
          {
            "label": "Duration",
            "value": "90 + (Skill Level x 30)"
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
                  "sp-cost": "54"
                }
              },
              {
                "level": 2,
                "values": {
                  "sp-cost": "58"
                }
              },
              {
                "level": 3,
                "values": {
                  "sp-cost": "62"
                }
              },
              {
                "level": 4,
                "values": {
                  "sp-cost": "66"
                }
              },
              {
                "level": 5,
                "values": {
                  "sp-cost": "70"
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
      "id": 5239,
      "imageFile": "5239.png",
      "name": "Firm Faith",
      "maxLevel": 5,
      "prerequisiteText": "Will of Faith Lv. 1",
      "group": "Active",
      "type": "Support",
      "target": "Self",
      "recoversAp": "",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Firm_Faith",
      "description": "Strengthen your faith, increasing your Max HP and RES.\nCan't be used with Powerful Faith or Sincere Faith.",
      "levelDetails": [],
      "fixedCastTime": "1 second",
      "variableCastTime": "1 second",
      "castDelay": "0 seconds",
      "cooldown": "60 seconds",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "54"
            },
            {
              "level": 2,
              "value": "58"
            },
            {
              "level": 3,
              "value": "62"
            },
            {
              "level": 4,
              "value": "66"
            },
            {
              "level": 5,
              "value": "70"
            }
          ]
        }
      ],
      "spCost": "50 + (Skill Level x 4)",
      "duration": "90 + (Skill Level x 30)",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5239.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5239",
      "tree": {
        "idx": 8,
        "row": 1,
        "col": 1,
        "columns": 7,
        "requirements": [
          {
            "id": 5240,
            "level": 1,
            "name": "Will of Faith",
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
            "value": "50 + (Skill Level x 4)"
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
            "value": "60 seconds"
          },
          {
            "label": "Target",
            "value": "Self"
          },
          {
            "label": "Duration",
            "value": "90 + (Skill Level x 30)"
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
                  "sp-cost": "54"
                }
              },
              {
                "level": 2,
                "values": {
                  "sp-cost": "58"
                }
              },
              {
                "level": 3,
                "values": {
                  "sp-cost": "62"
                }
              },
              {
                "level": 4,
                "values": {
                  "sp-cost": "66"
                }
              },
              {
                "level": 5,
                "values": {
                  "sp-cost": "70"
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
      "id": 5238,
      "imageFile": "5238.png",
      "name": "Powerful Faith",
      "maxLevel": 5,
      "prerequisiteText": "Will of Faith Lv. 1",
      "group": "Active",
      "type": "Support",
      "target": "Self",
      "recoversAp": "",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Powerful_Faith",
      "description": "Strengthen your faith, increasing your ATK and P. ATK.\nCan't be used with Firm Faith or Sincere Faith.",
      "levelDetails": [],
      "fixedCastTime": "1 second",
      "variableCastTime": "1 second",
      "castDelay": "0 seconds",
      "cooldown": "60 seconds",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "54"
            },
            {
              "level": 2,
              "value": "58"
            },
            {
              "level": 3,
              "value": "62"
            },
            {
              "level": 4,
              "value": "66"
            },
            {
              "level": 5,
              "value": "70"
            }
          ]
        }
      ],
      "spCost": "50 + (Skill Level x 4)",
      "duration": "90 + (Skill Level x 30)",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5238.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5238",
      "tree": {
        "idx": 9,
        "row": 1,
        "col": 2,
        "columns": 7,
        "requirements": [
          {
            "id": 5240,
            "level": 1,
            "name": "Will of Faith",
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
            "value": "50 + (Skill Level x 4)"
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
            "value": "60 seconds"
          },
          {
            "label": "Target",
            "value": "Self"
          },
          {
            "label": "Duration",
            "value": "90 + (Skill Level x 30)"
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
                  "sp-cost": "54"
                }
              },
              {
                "level": 2,
                "values": {
                  "sp-cost": "58"
                }
              },
              {
                "level": 3,
                "values": {
                  "sp-cost": "62"
                }
              },
              {
                "level": 4,
                "values": {
                  "sp-cost": "66"
                }
              },
              {
                "level": 5,
                "values": {
                  "sp-cost": "70"
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
      "id": 5245,
      "imageFile": "5245.png",
      "name": "First Brand(First Brand)",
      "maxLevel": 5,
      "prerequisiteText": "basic skill",
      "group": "",
      "type": "Melee Physics",
      "target": "Single Target",
      "recoversAp": "",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "",
      "description": "Deals Melee Physics damage to the target and targets within a 7x7 cell range around the target, and marks them for 5 seconds.\nDamage increases additionally based on the caster's base level and POW.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK 1200%"
        },
        {
          "level": 2,
          "text": "ATK 2400%"
        },
        {
          "level": 3,
          "text": "ATK 3600%"
        },
        {
          "level": 4,
          "text": "ATK 4800%"
        },
        {
          "level": 5,
          "text": "ATK 6000%"
        }
      ],
      "fixedCastTime": "0 seconds",
      "variableCastTime": "0 seconds",
      "castDelay": "0 seconds",
      "cooldown": "0.3 seconds",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "46"
            },
            {
              "level": 2,
              "value": "50"
            },
            {
              "level": 3,
              "value": "54"
            },
            {
              "level": 4,
              "value": "58"
            },
            {
              "level": 5,
              "value": "62"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5245.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5245",
      "tree": {
        "idx": 10,
        "row": 1,
        "col": 3,
        "columns": 7,
        "requirements": [
          {
            "id": 5240,
            "level": 2,
            "name": "Will of Faith",
            "visible": true
          }
        ]
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Melee Physics"
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
            "value": "0 seconds"
          },
          {
            "label": "Cast Delay",
            "value": "0 seconds"
          },
          {
            "label": "Cooldown",
            "value": "0.3 seconds"
          },
          {
            "label": "Target",
            "value": "Single Target"
          },
          {
            "label": "Damage",
            "value": "6,000% ATK"
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
                  "sp-cost": "46"
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
                  "sp-cost": "54"
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
                  "sp-cost": "62"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "balanceNotes": [
        {
          "skillName": "First Brand",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/inquisitor/rebalance_2.md",
          "section": "10.1",
          "notes": [
            "Reduces cooldown from 0.5 seconds to 0.3 seconds.",
            "Increases SP consumption from 50 to 62 based on level 5.",
            "Unifies brand duration to 5 second regardless of skill level.",
            "Unifies area of effect to 7 x 7 cells regardless of skill level.",
            "Increases cast range from 2 cells to 3 cells.",
            "Increases damage from 2250%Atk to 6000%Atk based on level 5.",
            "Increases factor weight of POW in skill formula from 3 to 5."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "0.5 seconds",
              "after": "0.3 seconds",
              "scope": "",
              "source": "Reduces cooldown from 0.5 seconds to 0.3 seconds."
            },
            {
              "label": "SP Cost",
              "before": "50",
              "after": "62",
              "scope": "Lv 5",
              "source": "Increases SP consumption from 50 to 62 based on level 5."
            },
            {
              "label": "Cast Range",
              "before": "2 cells",
              "after": "3 cells",
              "scope": "",
              "source": "Increases cast range from 2 cells to 3 cells."
            },
            {
              "label": "Damage",
              "before": "2250%Atk",
              "after": "6000%Atk",
              "scope": "Lv 5",
              "source": "Increases damage from 2250%Atk to 6000%Atk based on level 5."
            },
            {
              "label": "Factor Weight Of Pow In Skill Formula",
              "before": "3",
              "after": "5",
              "scope": "",
              "source": "Increases factor weight of POW in skill formula from 3 to 5."
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
      "id": 5241,
      "imageFile": "5241.png",
      "name": "Oleum Sanctum",
      "maxLevel": 5,
      "prerequisiteText": "Aqua Benedicta 1, Will of Faith 3",
      "group": "Active",
      "type": "Ranged Physical",
      "target": "Instant Cast",
      "recoversAp": "",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Oleum_Sanctum",
      "description": "Baptizes surrounding enemies around the user, deals long ranged physical damage,\ngives the debuff that the targets will taken more damage from long ranged physical damage for the skill duration.\nDamage is additionally increased depending on the user's base level and POW.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK 2500%/Area of Effect 7x7cells/Duration: 3Sec"
        },
        {
          "level": 2,
          "text": "ATK 4500%/Area of Effect 7x7cells/Duration: 4Sec"
        },
        {
          "level": 3,
          "text": "ATK 6500%/Area of Effect 7x7cells/Duration: 5Sec"
        },
        {
          "level": 4,
          "text": "ATK 8500%/Area of Effect 9x9cells/Duration: 6Sec"
        },
        {
          "level": 5,
          "text": "ATK 10500%/Area of Effect 9x9cells/Duration: 7Sec"
        }
      ],
      "fixedCastTime": "0 seconds",
      "variableCastTime": "0 seconds",
      "castDelay": "0 seconds",
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
              "value": "55"
            },
            {
              "level": 3,
              "value": "65"
            },
            {
              "level": 4,
              "value": "75"
            },
            {
              "level": 5,
              "value": "85"
            }
          ]
        }
      ],
      "spCost": "20 + (Skill Level × 10)",
      "cooldown": "3 seconds",
      "duration": "3~7 seconds",
      "castRange": "9 cells",
      "areaOfEffect": "3 x 3~7 x 7",
      "translations": {
        "pt-BR": {
          "name": " Oleum Sanctum ",
          "description": "Derrama Água Benta em oponentes ao seu redor, causando dano físico a distância.\nInimigos atingidos receberão o estado de [ Óleo Ungido ] por alguns segundos.\nATQ = {[Dano base + (POD × 3)] + Nv. de base ÷ 100}%",
          "source": "bROWiki",
          "sourceUrl": "https://browiki.org/wiki/Oleum_Sanctum"
        }
      },
      "apiStatus": "translated",
      "iconUrl": "assets/divine-pride/skills/5241.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5241",
      "tree": {
        "idx": 13,
        "row": 1,
        "col": 6,
        "columns": 7,
        "requirements": [
          {
            "id": 31,
            "level": 1,
            "name": "Aqua Benedicta",
            "visible": false
          },
          {
            "id": 5240,
            "level": 3,
            "name": "Will of Faith",
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
            "value": "3 seconds"
          },
          {
            "label": "Cast Range",
            "value": "9 cells"
          },
          {
            "label": "Target",
            "value": "Instant Cast"
          },
          {
            "label": "Damage",
            "value": "10,500% ATK"
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
              },
              {
                "id": "duration",
                "label": "Duration"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "area-of-effect": "7x7",
                  "duration": "3 seconds",
                  "sp-cost": "45"
                }
              },
              {
                "level": 2,
                "values": {
                  "area-of-effect": "7x7",
                  "duration": "4 seconds",
                  "sp-cost": "55"
                }
              },
              {
                "level": 3,
                "values": {
                  "area-of-effect": "7x7",
                  "duration": "5 seconds",
                  "sp-cost": "65"
                }
              },
              {
                "level": 4,
                "values": {
                  "area-of-effect": "9x9",
                  "duration": "6 seconds",
                  "sp-cost": "75"
                }
              },
              {
                "level": 5,
                "values": {
                  "area-of-effect": "9x9",
                  "duration": "7 seconds",
                  "sp-cost": "85"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "balanceNotes": [
        {
          "skillName": "Oleum Sanctum",
          "versionId": "rebalance-1",
          "versionLabel": "Rebalance 1",
          "file": "rebalances/inquisitor/rebalance_1.md",
          "section": "10.1",
          "notes": [
            "Reduces cooldown from 6 seconds to 3 seconds based on level 5."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "6 seconds",
              "after": "3 seconds",
              "scope": "Lv 5",
              "source": "Reduces cooldown from 6 seconds to 3 seconds based on level 5."
            }
          ]
        },
        {
          "skillName": "Oleum Sanctum",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/inquisitor/rebalance_2.md",
          "section": "10.8",
          "notes": [
            "Reduces cooldown from 3 seconds to 2 seconds.",
            "Removes 0.5 seconds delay after skill.",
            "Increases SP consumption from 70 to 85 based on level 5.",
            "Increases damage from 2000%Atk to 10500%Atk based on level 5.",
            "Increases area of effect from 7 x 7 cells to 11 x 11 cells based on level 5.",
            "Increases factor weight of POW in skill formula from 3 to 5."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "3 seconds",
              "after": "2 seconds",
              "scope": "",
              "source": "Reduces cooldown from 3 seconds to 2 seconds."
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
              "before": "70",
              "after": "85",
              "scope": "Lv 5",
              "source": "Increases SP consumption from 70 to 85 based on level 5."
            },
            {
              "label": "Damage",
              "before": "2000%Atk",
              "after": "10500%Atk",
              "scope": "Lv 5",
              "source": "Increases damage from 2000%Atk to 10500%Atk based on level 5."
            },
            {
              "label": "Area of Effect",
              "before": "7 x 7 cells",
              "after": "11 x 11 cells",
              "scope": "Lv 5",
              "source": "Increases area of effect from 7 x 7 cells to 11 x 11 cells based on level 5."
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
          "skillName": "Oleum Sanctum",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/inquisitor/rebalance_3.md",
          "section": "10.1",
          "notes": [
            "Reduces skill cooldown from 2 seconds to 1.5 seconds.",
            "No longer require Holy Water on casting.",
            "Reduces area of effect from 11 x 11 cells to 9 x 9 cells based on level 5."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "2 seconds",
              "after": "1.5 seconds",
              "scope": "",
              "source": "Reduces skill cooldown from 2 seconds to 1.5 seconds."
            },
            {
              "label": "Area of Effect",
              "before": "11 x 11 cells",
              "after": "9 x 9 cells",
              "scope": "Lv 5",
              "source": "Reduces area of effect from 11 x 11 cells to 9 x 9 cells based on level 5."
            }
          ]
        }
      ],
      "api": {
        "status": "translated",
        "entries": [],
        "selectedEntry": null
      }
    },
    {
      "id": 5246,
      "imageFile": "5246.png",
      "name": "First Faith Power(First Faith Power)",
      "maxLevel": 5,
      "prerequisiteText": "basic skill",
      "group": "",
      "type": "Support",
      "target": "Self-Buff",
      "recoversAp": "",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "",
      "description": "300Accept the true belief and fight with it.\nAdditionally, while the Power of Belief state is maintained, you can use the Fallen Empire without consuming the device.",
      "levelDetails": [
        {
          "level": 1,
          "text": "Skill Cooldown : 180seconds"
        },
        {
          "level": 2,
          "text": "Skill Cooldown : 150seconds"
        },
        {
          "level": 3,
          "text": "Skill Cooldown : 120seconds"
        },
        {
          "level": 4,
          "text": "Skill Cooldown : 90seconds"
        },
        {
          "level": 5,
          "text": "Skill Cooldown : 60seconds"
        }
      ],
      "fixedCastTime": "2 seconds",
      "variableCastTime": "0 seconds",
      "castDelay": "0.5 seconds",
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
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5246.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5246",
      "tree": {
        "idx": 17,
        "row": 2,
        "col": 3,
        "columns": 7,
        "requirements": [
          {
            "id": 5240,
            "level": 3,
            "name": "Will of Faith",
            "visible": true
          },
          {
            "id": 5245,
            "level": 1,
            "name": "First Brand",
            "visible": true
          }
        ]
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Support"
          },
          {
            "label": "Levels",
            "value": "5"
          },
          {
            "label": "Fixed Cast Time",
            "value": "2 seconds"
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
            "label": "Target",
            "value": "Self-Buff"
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
                "id": "cooldown",
                "label": "Cooldown"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "cooldown": "180 seconds",
                  "sp-cost": "60"
                }
              },
              {
                "level": 2,
                "values": {
                  "cooldown": "150 seconds",
                  "sp-cost": "60"
                }
              },
              {
                "level": 3,
                "values": {
                  "cooldown": "120 seconds",
                  "sp-cost": "60"
                }
              },
              {
                "level": 4,
                "values": {
                  "cooldown": "90 seconds",
                  "sp-cost": "60"
                }
              },
              {
                "level": 5,
                "values": {
                  "cooldown": "60 seconds",
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
          "skillName": "First Faith Power",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/inquisitor/rebalance_2.md",
          "section": "10.10",
          "notes": [
            "Reworks cooldown from 30~150 seconds to 180~60 seconds (level 1~5).",
            "Unifies duration to 300 seconds regardless of skill level."
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
      "id": 5247,
      "imageFile": "5247.png",
      "name": "Judge(Judge)",
      "maxLevel": 5,
      "prerequisiteText": "basic skill",
      "group": "",
      "type": "Support",
      "target": "Self-Buff",
      "recoversAp": "",
      "consumesAp": "80/70/60/50/40",
      "ammunition": "",
      "irowikiUrl": "",
      "description": "Available in Power of Conviction state.\nYou will become God's judge for 300 seconds and be able to execute judgment on evil deeds.\nAdditionally, in judgement mode, you can use the Fallen Empire and Flash Combo without consuming any equipment.",
      "levelDetails": [
        {
          "level": 1,
          "text": "Skill Cooldown : 180seconds"
        },
        {
          "level": 2,
          "text": "Skill Cooldown : 150seconds"
        },
        {
          "level": 3,
          "text": "Skill Cooldown : 120seconds"
        },
        {
          "level": 4,
          "text": "Skill Cooldown : 90seconds"
        },
        {
          "level": 5,
          "text": "Skill Cooldown : 60seconds"
        }
      ],
      "fixedCastTime": "2 seconds",
      "variableCastTime": "0 seconds",
      "castDelay": "0.5 seconds",
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
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5247.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5247",
      "tree": {
        "idx": 18,
        "row": 2,
        "col": 4,
        "columns": 7,
        "requirements": [
          {
            "id": 5246,
            "level": 1,
            "name": "First Faith Power",
            "visible": true
          }
        ]
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Support"
          },
          {
            "label": "Levels",
            "value": "5"
          },
          {
            "label": "Fixed Cast Time",
            "value": "2 seconds"
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
            "label": "Target",
            "value": "Self-Buff"
          },
          {
            "label": "AP Consumed",
            "value": "80/70/60/50/40"
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
                "id": "cooldown",
                "label": "Cooldown"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "cooldown": "180 seconds",
                  "sp-cost": "60"
                }
              },
              {
                "level": 2,
                "values": {
                  "cooldown": "150 seconds",
                  "sp-cost": "60"
                }
              },
              {
                "level": 3,
                "values": {
                  "cooldown": "120 seconds",
                  "sp-cost": "60"
                }
              },
              {
                "level": 4,
                "values": {
                  "cooldown": "90 seconds",
                  "sp-cost": "60"
                }
              },
              {
                "level": 5,
                "values": {
                  "cooldown": "60 seconds",
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
      "id": 5254,
      "imageFile": "5254.png",
      "name": "Third Exor Flame(Third Exor Flame)",
      "maxLevel": 5,
      "prerequisiteText": "basic skill",
      "group": "",
      "type": "Support",
      "target": "Self-Buff",
      "recoversAp": "",
      "consumesAp": "120/105/90/75/60",
      "ammunition": "",
      "irowikiUrl": "",
      "description": "Available in Judgement status.\nEnters a powerful flame state of destruction that destroys all monsters for 300 seconds.\nAdditionally, in the Flame of Destruction state, you can use the Fallen Empire, Flash Combo, and Tiger Cannon without consuming any equipment.",
      "levelDetails": [
        {
          "level": 1,
          "text": "Skill Cooldown : 180seconds"
        },
        {
          "level": 2,
          "text": "Skill Cooldown : 150seconds"
        },
        {
          "level": 3,
          "text": "Skill Cooldown : 120seconds"
        },
        {
          "level": 4,
          "text": "Skill Cooldown : 90seconds"
        },
        {
          "level": 5,
          "text": "Skill Cooldown : 60seconds"
        }
      ],
      "fixedCastTime": "2 seconds",
      "variableCastTime": "0 seconds",
      "castDelay": "0.5 seconds",
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
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5254.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5254",
      "tree": {
        "idx": 19,
        "row": 2,
        "col": 5,
        "columns": 7,
        "requirements": [
          {
            "id": 5247,
            "level": 1,
            "name": "Judgment",
            "visible": true
          }
        ]
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Support"
          },
          {
            "label": "Levels",
            "value": "5"
          },
          {
            "label": "Fixed Cast Time",
            "value": "2 seconds"
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
            "label": "Target",
            "value": "Self-Buff"
          },
          {
            "label": "AP Consumed",
            "value": "120/105/90/75/60"
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
                "id": "cooldown",
                "label": "Cooldown"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "cooldown": "180 seconds",
                  "sp-cost": "60"
                }
              },
              {
                "level": 2,
                "values": {
                  "cooldown": "150 seconds",
                  "sp-cost": "60"
                }
              },
              {
                "level": 3,
                "values": {
                  "cooldown": "120 seconds",
                  "sp-cost": "60"
                }
              },
              {
                "level": 4,
                "values": {
                  "cooldown": "90 seconds",
                  "sp-cost": "60"
                }
              },
              {
                "level": 5,
                "values": {
                  "cooldown": "60 seconds",
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
          "skillName": "Third Exorcism Flame",
          "versionId": "rebalance-1",
          "versionLabel": "Rebalance 1",
          "file": "rebalances/inquisitor/rebalance_1.md",
          "section": "10.4",
          "notes": [
            "Reduces AP consumption from 150 to 100."
          ],
          "specRows": [
            {
              "label": "AP Consumed",
              "before": "150",
              "after": "100",
              "scope": "",
              "source": "Reduces AP consumption from 150 to 100."
            }
          ]
        },
        {
          "skillName": "Third Exorcism Flame",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/inquisitor/rebalance_2.md",
          "section": "10.12",
          "notes": [
            "Reworks cooldown from 30~150 seconds to 180~60 seconds (level 1~5).",
            "Unifies duration to 300 seconds regardless of skill level.",
            "Changes AP consumption from 100 regardless of skill level to scaling with skill level, from 120 on level 1 down to 60 on level 5."
          ],
          "specRows": [
            {
              "label": "AP Consumed",
              "before": "100 regardless of skill level",
              "after": "scaling with skill level, from 120 on level 1 down to 60 on level 5",
              "scope": "",
              "source": "Changes AP consumption from 100 regardless of skill level to scaling with skill level, from 120 on level 1 down to 60 on level 5."
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
      "id": 5244,
      "imageFile": "5244.png",
      "name": "Explosion Blaster",
      "maxLevel": 5,
      "prerequisiteText": "Oleum Sanctum 1",
      "group": "Active",
      "type": "Ranged Physical",
      "target": "Instant Cast",
      "recoversAp": "4",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Explosion_Blaster",
      "description": "Blows the powerful bomb to deals long ranged physical damage to surrounding enemies around the user.\nDeals additional damage to the target who is inflicted by Oleum Sanctum.\nDamage is additionally increased depending on the user's base level and POW.\nHas a chance to trigger critical, critical chance is the user's Cri,\nIn the case of critical damage, half of the total critical damage increase options are applied.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK 2400%/ 3800%(Oleum Sanctum)/Area of Effect 7x7 Cells"
        },
        {
          "level": 2,
          "text": "ATK 4800%/ 7250%(Oleum Sanctum)/Area of Effect 7x7 Cells"
        },
        {
          "level": 3,
          "text": "ATK 7200%/ 10700%(Oleum Sanctum)/Area of Effect 7x7 Cells"
        },
        {
          "level": 4,
          "text": "ATK 9600%/ 14150%(Oleum Sanctum)/Area of Effect 9x9 Cells"
        },
        {
          "level": 5,
          "text": "ATK 12000%/ 17600%(Oleum Sanctum)/Area of Effect 9x9 Cells"
        }
      ],
      "fixedCastTime": "0 seconds",
      "variableCastTime": "0 seconds",
      "castDelay": "1 second",
      "cooldown": "0.7 seconds",
      "levelExtras": [
        {
          "label": "SP Cost",
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
            }
          ]
        }
      ],
      "spCost": "70 + (Skill Level x 10)",
      "castRange": "9 cells",
      "areaOfEffect": "5 x 5 ~ 9 x 9",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5244.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5244",
      "tree": {
        "idx": 20,
        "row": 2,
        "col": 6,
        "columns": 7,
        "requirements": [
          {
            "id": 5241,
            "level": 1,
            "name": "Oleum Sanctum",
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
            "value": "70 + (Skill Level x 10)"
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
            "value": "0.7 seconds"
          },
          {
            "label": "Cast Range",
            "value": "9 cells"
          },
          {
            "label": "Target",
            "value": "Instant Cast"
          },
          {
            "label": "AP Generated",
            "value": "4"
          },
          {
            "label": "Damage",
            "value": "12,000% ATK/17,600% ATK (Oleum Sanctum)"
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
                  "area-of-effect": "7x7",
                  "sp-cost": "105"
                }
              },
              {
                "level": 2,
                "values": {
                  "area-of-effect": "7x7",
                  "sp-cost": "110"
                }
              },
              {
                "level": 3,
                "values": {
                  "area-of-effect": "7x7",
                  "sp-cost": "115"
                }
              },
              {
                "level": 4,
                "values": {
                  "area-of-effect": "9x9",
                  "sp-cost": "120"
                }
              },
              {
                "level": 5,
                "values": {
                  "area-of-effect": "9x9",
                  "sp-cost": "125"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "balanceNotes": [
        {
          "skillName": "Explosion Blaster",
          "versionId": "rebalance-1",
          "versionLabel": "Rebalance 1",
          "file": "rebalances/inquisitor/rebalance_1.md",
          "section": "10.2",
          "notes": [
            "Reduces cooldown from 5 seconds to 1 second based on level 5.",
            "Removes delay after skill based on level 5.",
            "Reduces AP recovery rate from 5 to 4.",
            "Increases damage from 2250%Atk to 3250%Atk based on level 5.",
            "Increases damage to the target who is inflicted by Oleum Sanctum from 3000%Atk to 4250%Atk based on level 5.",
            "Applies critical damage, the critical chance is the user's Cri."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "5 seconds",
              "after": "1 second",
              "scope": "Lv 5",
              "source": "Reduces cooldown from 5 seconds to 1 second based on level 5."
            },
            {
              "label": "Cast Delay",
              "before": "delay after skill based on level 5",
              "after": "Removed",
              "scope": "",
              "source": "Removes delay after skill based on level 5."
            },
            {
              "label": "AP Generated",
              "before": "5",
              "after": "4",
              "scope": "",
              "source": "Reduces AP recovery rate from 5 to 4."
            },
            {
              "label": "Damage",
              "before": "2250%Atk/3000%Atk (to the target who is inflicted by Oleum Sanctum)",
              "after": "3250%Atk/4250%Atk (to the target who is inflicted by Oleum Sanctum)",
              "scope": "Lv 5",
              "source": "Increases damage from 2250%Atk to 3250%Atk based on level 5. / Increases damage to the target who is inflicted by Oleum Sanctum from 3000%Atk to 4250%Atk based on level 5."
            }
          ]
        },
        {
          "skillName": "Explosion Blaster",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/inquisitor/rebalance_2.md",
          "section": "10.9",
          "notes": [
            "Reduces cooldown from 1 second to 0.7 seconds.",
            "Reduces SP consumption from 120 to 90 based on level 5.",
            "Increases damage from 3250%/4250%(Oleum Sanctum)Atk to 14000%/16000%(Oleum Sanctum)Atk per hit based on level 5.",
            "Increases area of effect from 9 x 9 cells to 11 x 11 cells based on level 5.",
            "Increases factor weight of POW in skill formula from 3/5 to 15/15."
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
              "before": "120",
              "after": "90",
              "scope": "Lv 5",
              "source": "Reduces SP consumption from 120 to 90 based on level 5."
            },
            {
              "label": "Damage",
              "before": "3250%/4250%(Oleum Sanctum)Atk",
              "after": "14000%/16000%(Oleum Sanctum)Atk per hit",
              "scope": "Lv 5",
              "source": "Increases damage from 3250%/4250%(Oleum Sanctum)Atk to 14000%/16000%(Oleum Sanctum)Atk per hit based on level 5."
            },
            {
              "label": "Area of Effect",
              "before": "9 x 9 cells",
              "after": "11 x 11 cells",
              "scope": "Lv 5",
              "source": "Increases area of effect from 9 x 9 cells to 11 x 11 cells based on level 5."
            },
            {
              "label": "Factor Weight Of Pow In Skill Formula",
              "before": "3/5",
              "after": "15/15",
              "scope": "",
              "source": "Increases factor weight of POW in skill formula from 3/5 to 15/15."
            }
          ]
        },
        {
          "skillName": "Explosion Blaster",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/inquisitor/rebalance_3.md",
          "section": "10.2",
          "notes": [
            "Adds global cooldown by 1 second.",
            "Increases SP consumption from 90 to 125 based on level 5.",
            "Reduces area of effect from 11 x 11 cells to 9 x 9 cells based on level 5.",
            "Reduces base damage of from 14000%Atk to 12000%Atk based on level 5.",
            "Increases base damage against Oleum Sanctum debuff from 16000%Atk to 17600%Atk based on level 5.",
            "Reduces factor weight of POW in skill formula (without Oleum Sanctum debuff) from 15 to 10."
          ],
          "specRows": [
            {
              "label": "SP Cost",
              "before": "90",
              "after": "125",
              "scope": "Lv 5",
              "source": "Increases SP consumption from 90 to 125 based on level 5."
            },
            {
              "label": "Area of Effect",
              "before": "11 x 11 cells",
              "after": "9 x 9 cells",
              "scope": "Lv 5",
              "source": "Reduces area of effect from 11 x 11 cells to 9 x 9 cells based on level 5."
            },
            {
              "label": "Damage",
              "before": "14000%Atk (of)/16000%Atk (against Oleum Sanctum debuff)",
              "after": "12000%Atk (of)/17600%Atk (against Oleum Sanctum debuff)",
              "scope": "Lv 5",
              "source": "Reduces base damage of from 14000%Atk to 12000%Atk based on level 5. / Increases base damage against Oleum Sanctum debuff from 16000%Atk to 17600%Atk based on level 5."
            },
            {
              "label": "Factor Weight Of Pow In Skill Formula (without Oleum Sanctum Debuff)",
              "before": "15",
              "after": "10",
              "scope": "",
              "source": "Reduces factor weight of POW in skill formula (without Oleum Sanctum debuff) from 15 to 10."
            }
          ]
        },
        {
          "skillName": "Explosion Blaster",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/inquisitor/rebalance_4.md",
          "section": "11.1",
          "notes": [
            "Increases base damage from 12000%/17600%(Oleum Sanctum)Atk to 13450%/18200%(Oleum Sanctum)Atk based on level 5."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "12000%/17600%(Oleum Sanctum)Atk",
              "after": "13450%/18200%(Oleum Sanctum)Atk",
              "scope": "Lv 5",
              "source": "Increases base damage from 12000%/17600%(Oleum Sanctum)Atk to 13450%/18200%(Oleum Sanctum)Atk based on level 5."
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
      "id": 5249,
      "imageFile": "5249.png",
      "name": "Second Faith(Second Faith)",
      "maxLevel": 5,
      "prerequisiteText": "basic skill",
      "group": "",
      "type": "Melee Physics",
      "target": "Single Target",
      "recoversAp": "4",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "",
      "description": "Power of Faith, Judge, Available in Flame of Destruction state.\nDeals Melee Physics damage to the target and any targets within a 7x7 cell radius around them that have a Mark or Judgement Mark, and applies the Mark of Judgement for 5 seconds.\nIf the Mark of Judgement has already been applied, the duration of the effect is refreshed.\nDamage increases additionally based on the caster's base level and POW.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK 2400%"
        },
        {
          "level": 2,
          "text": "ATK 4700%"
        },
        {
          "level": 3,
          "text": "ATK 7000%"
        },
        {
          "level": 4,
          "text": "ATK 9300%"
        },
        {
          "level": 5,
          "text": "ATK 11600%"
        }
      ],
      "fixedCastTime": "0 seconds",
      "variableCastTime": "0 seconds",
      "castDelay": "0 seconds",
      "cooldown": "0.7 seconds",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "41"
            },
            {
              "level": 2,
              "value": "47"
            },
            {
              "level": 3,
              "value": "53"
            },
            {
              "level": 4,
              "value": "59"
            },
            {
              "level": 5,
              "value": "65"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5249.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5249",
      "tree": {
        "idx": 24,
        "row": 3,
        "col": 3,
        "columns": 7,
        "requirements": [
          {
            "id": 5246,
            "level": 1,
            "name": "First Faith Power",
            "visible": true
          }
        ]
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Melee Physics"
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
            "value": "0 seconds"
          },
          {
            "label": "Cast Delay",
            "value": "0 seconds"
          },
          {
            "label": "Cooldown",
            "value": "0.7 seconds"
          },
          {
            "label": "Target",
            "value": "Single Target"
          },
          {
            "label": "AP Generated",
            "value": "4"
          },
          {
            "label": "Damage",
            "value": "11,600% ATK"
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
                  "sp-cost": "41"
                }
              },
              {
                "level": 2,
                "values": {
                  "sp-cost": "47"
                }
              },
              {
                "level": 3,
                "values": {
                  "sp-cost": "53"
                }
              },
              {
                "level": 4,
                "values": {
                  "sp-cost": "59"
                }
              },
              {
                "level": 5,
                "values": {
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
          "skillName": "Second Faith",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/inquisitor/rebalance_2.md",
          "section": "10.2",
          "notes": [
            "Reduces cooldown from 1 second to 0.7 seconds.",
            "Increases SP consumption from 60 to 65 based on level 5.",
            "Increases AP recovery rate from 1 to 4.",
            "Unifies area of effect to 7 x 7 cells regardless of skill level.",
            "Increases damage from 2500%Atk to 11600%Atk based on level 5.",
            "Increases factor weight of POW in skill formula from 4 to 5."
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
              "before": "60",
              "after": "65",
              "scope": "Lv 5",
              "source": "Increases SP consumption from 60 to 65 based on level 5."
            },
            {
              "label": "AP Generated",
              "before": "1",
              "after": "4",
              "scope": "",
              "source": "Increases AP recovery rate from 1 to 4."
            },
            {
              "label": "Damage",
              "before": "2500%Atk",
              "after": "11600%Atk",
              "scope": "Lv 5",
              "source": "Increases damage from 2500%Atk to 11600%Atk based on level 5."
            },
            {
              "label": "Factor Weight Of Pow In Skill Formula",
              "before": "4",
              "after": "5",
              "scope": "",
              "source": "Increases factor weight of POW in skill formula from 4 to 5."
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
      "id": 5250,
      "imageFile": "5250.png",
      "name": "Second Judgement(Second Judgement)",
      "maxLevel": 5,
      "prerequisiteText": "basic skill",
      "group": "",
      "type": "Melee Physics",
      "target": "Single Target",
      "recoversAp": "4",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "",
      "description": "Judge, Available in Flame of Destruction state.\nDeals Melee Physics damage to the target and any targets within a 7x7 cell radius around them that have a Mark or Judgement Mark, and applies the Mark of Judgement for 5 seconds.\nIf the Mark of Judgement has already been applied, its duration is refreshed.\nDamage increases additionally based on the caster's base level and POW.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK 2750%"
        },
        {
          "level": 2,
          "text": "ATK 5350%"
        },
        {
          "level": 3,
          "text": "ATK 7950%"
        },
        {
          "level": 4,
          "text": "ATK 10550%"
        },
        {
          "level": 5,
          "text": "ATK 13150%"
        }
      ],
      "fixedCastTime": "0 seconds",
      "variableCastTime": "0 seconds",
      "castDelay": "0 seconds",
      "cooldown": "0.7 seconds",
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
              "value": "55"
            },
            {
              "level": 3,
              "value": "60"
            },
            {
              "level": 4,
              "value": "65"
            },
            {
              "level": 5,
              "value": "70"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5250.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5250",
      "tree": {
        "idx": 25,
        "row": 3,
        "col": 4,
        "columns": 7,
        "requirements": [
          {
            "id": 5247,
            "level": 1,
            "name": "Judgment",
            "visible": true
          }
        ]
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Melee Physics"
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
            "value": "0 seconds"
          },
          {
            "label": "Cast Delay",
            "value": "0 seconds"
          },
          {
            "label": "Cooldown",
            "value": "0.7 seconds"
          },
          {
            "label": "Target",
            "value": "Single Target"
          },
          {
            "label": "AP Generated",
            "value": "4"
          },
          {
            "label": "Damage",
            "value": "13,150% ATK"
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
                  "sp-cost": "55"
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
                  "sp-cost": "65"
                }
              },
              {
                "level": 5,
                "values": {
                  "sp-cost": "70"
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
      "id": 5248,
      "imageFile": "5248.png",
      "name": "Second Flame(Second Flame)",
      "maxLevel": 5,
      "prerequisiteText": "basic skill",
      "group": "",
      "type": "Melee Physics",
      "target": "Single Target",
      "recoversAp": "4",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "",
      "description": "Available in Flame of Destruction state.\nDeals Melee Physics damage to the target and any targets within a 7x7 cell radius around them that have a Mark or Judgement Mark, and applies the Mark of Judgement for 5 seconds.\nIf the Mark of Judgement has already been applied, its duration is refreshed.\nDamage increases additionally based on the caster's base level and POW.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK 3100%"
        },
        {
          "level": 2,
          "text": "ATK 6000%"
        },
        {
          "level": 3,
          "text": "ATK 8900%"
        },
        {
          "level": 4,
          "text": "ATK 11800%"
        },
        {
          "level": 5,
          "text": "ATK 14700%"
        }
      ],
      "fixedCastTime": "0 seconds",
      "variableCastTime": "0 seconds",
      "castDelay": "0 seconds",
      "cooldown": "0.7 seconds",
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
              "value": "57"
            },
            {
              "level": 3,
              "value": "63"
            },
            {
              "level": 4,
              "value": "69"
            },
            {
              "level": 5,
              "value": "75"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5248.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5248",
      "tree": {
        "idx": 26,
        "row": 3,
        "col": 5,
        "columns": 7,
        "requirements": [
          {
            "id": 5254,
            "level": 1,
            "name": "Third Exorcism Flame",
            "visible": true
          }
        ]
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Melee Physics"
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
            "value": "0 seconds"
          },
          {
            "label": "Cast Delay",
            "value": "0 seconds"
          },
          {
            "label": "Cooldown",
            "value": "0.7 seconds"
          },
          {
            "label": "Target",
            "value": "Single Target"
          },
          {
            "label": "AP Generated",
            "value": "4"
          },
          {
            "label": "Damage",
            "value": "14,700% ATK"
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
                  "sp-cost": "57"
                }
              },
              {
                "level": 3,
                "values": {
                  "sp-cost": "63"
                }
              },
              {
                "level": 4,
                "values": {
                  "sp-cost": "69"
                }
              },
              {
                "level": 5,
                "values": {
                  "sp-cost": "75"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "balanceNotes": [
        {
          "skillName": "Second Flame",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/inquisitor/rebalance_2.md",
          "section": "10.4",
          "notes": [
            "Reduces cooldown from 1 second to 0.7 seconds.",
            "Increases SP consumption from 70 to 75 based on level 5.",
            "Increases AP recovery rate from 3 to 4.",
            "Unifies area of effect to 7 x 7 cells regardless of skill level.",
            "Increases damage from 2750%Atk to 14700%Atk based on level 5.",
            "Increases factor weight of POW in skill formula from 4 to 9."
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
              "before": "70",
              "after": "75",
              "scope": "Lv 5",
              "source": "Increases SP consumption from 70 to 75 based on level 5."
            },
            {
              "label": "AP Generated",
              "before": "3",
              "after": "4",
              "scope": "",
              "source": "Increases AP recovery rate from 3 to 4."
            },
            {
              "label": "Damage",
              "before": "2750%Atk",
              "after": "14700%Atk",
              "scope": "Lv 5",
              "source": "Increases damage from 2750%Atk to 14700%Atk based on level 5."
            },
            {
              "label": "Factor Weight Of Pow In Skill Formula",
              "before": "4",
              "after": "9",
              "scope": "",
              "source": "Increases factor weight of POW in skill formula from 4 to 9."
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
      "id": 5243,
      "imageFile": "5243.png",
      "name": "Massive Flame Blaster",
      "maxLevel": 10,
      "prerequisiteText": "Oleum Sanctum 3, Explosion Blaster 3, Will of Faith 5",
      "group": "Active(AP)",
      "type": "Ranged Physical",
      "target": "Instant Cast",
      "recoversAp": "",
      "consumesAp": "150",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Massive_Flame_Blaster",
      "description": "Creates the powerful explosion to deals long ranged physical damage to surrounding enemies within 9 x 9 cells around the user.\nThis skill deals additional damage against demon and brute race monsters.\nDamage is additionally increased depending on the user's base level and POW.\nWhen using, adds the ability that removes spirit sphere consumption of Lightning Ride and Rampage Blast for 150 seconds.\nHas a chance to trigger critical, critical chance is the user's Cri,\nIn the case of critical damage, half of the total critical damage increase options are applied.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK 2300%/ 2450%(Demon, Brute)"
        },
        {
          "level": 2,
          "text": "ATK 4600%/ 4900%(Demon, Brute)"
        },
        {
          "level": 3,
          "text": "ATK 6900%/ 7350%(Demon, Brute)"
        },
        {
          "level": 4,
          "text": "ATK 9200%/ 9800%(Demon, Brute)"
        },
        {
          "level": 5,
          "text": "ATK 11500%/ 12250%(Demon, Brute)"
        },
        {
          "level": 6,
          "text": "ATK 13800%/ 14700%(Demon, Brute)"
        },
        {
          "level": 7,
          "text": "ATK 16100%/ 17150%(Demon, Brute)"
        },
        {
          "level": 8,
          "text": "ATK 18400%/ 19600%(Demon, Brute)"
        },
        {
          "level": 9,
          "text": "ATK 20700%/ 22050%(Demon, Brute)"
        },
        {
          "level": 10,
          "text": "ATK 23000%/ 24500%(Demon, Brute)"
        }
      ],
      "fixedCastTime": "0 seconds",
      "variableCastTime": "0 seconds",
      "castDelay": "0.5 seconds",
      "cooldown": "3.5 seconds",
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
      "spCost": "100",
      "duration": "150 seconds",
      "castRange": "9 cells",
      "areaOfEffect": "9×9",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5243.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5243",
      "tree": {
        "idx": 27,
        "row": 3,
        "col": 6,
        "columns": 7,
        "requirements": [
          {
            "id": 5240,
            "level": 5,
            "name": "Will of Faith",
            "visible": true
          },
          {
            "id": 5241,
            "level": 3,
            "name": "Oleum Sanctum",
            "visible": true
          },
          {
            "id": 5244,
            "level": 3,
            "name": "Explosion Blaster",
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
            "label": "SP Cost",
            "value": "100"
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
            "value": "3.5 seconds"
          },
          {
            "label": "Cast Range",
            "value": "9 cells"
          },
          {
            "label": "Target",
            "value": "Instant Cast"
          },
          {
            "label": "Area of Effect",
            "value": "9×9"
          },
          {
            "label": "Duration",
            "value": "150 seconds"
          },
          {
            "label": "AP Consumed",
            "value": "150"
          },
          {
            "label": "Damage",
            "value": "23,000% ATK/24,500% ATK (Demon, Brute)"
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
              },
              {
                "level": 2,
                "values": {
                  "sp-cost": "100"
                }
              },
              {
                "level": 3,
                "values": {
                  "sp-cost": "100"
                }
              },
              {
                "level": 4,
                "values": {
                  "sp-cost": "100"
                }
              },
              {
                "level": 5,
                "values": {
                  "sp-cost": "100"
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
      "balanceNotes": [
        {
          "skillName": "Massive Flame Blaster",
          "versionId": "rebalance-1",
          "versionLabel": "Rebalance 1",
          "file": "rebalances/inquisitor/rebalance_1.md",
          "section": "10.5",
          "notes": [
            "Applies critical damage, the critical chance is the user's Cri."
          ],
          "specRows": []
        },
        {
          "skillName": "Massive Flame Blaster",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/inquisitor/rebalance_2.md",
          "section": "10.13",
          "notes": [
            "Reduces cooldown from 60 seconds to 5 seconds.",
            "Removes 1 second delay after skill.",
            "Reduces AP consumption from 150 to 12.",
            "Increases damage from 8000%/11000%(demon and brute race)Atk to 21500%/23000%(demon and brute race)Atk based on level 10.",
            "Increases area of effect from 9 x 9 cells to 11 x 11 cells.",
            "Increases factor weight of POW in skill formula from 10/10(demon and brute race) to 15/15(demon and brute race).",
            "Reduces duration of Massive Flame Blaster buff from 300 seconds to 150 seconds."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "60 seconds",
              "after": "5 seconds",
              "scope": "",
              "source": "Reduces cooldown from 60 seconds to 5 seconds."
            },
            {
              "label": "Cast Delay",
              "before": "1 second delay",
              "after": "Removed",
              "scope": "",
              "source": "Removes 1 second delay after skill."
            },
            {
              "label": "AP Consumed",
              "before": "150",
              "after": "12",
              "scope": "",
              "source": "Reduces AP consumption from 150 to 12."
            },
            {
              "label": "Damage",
              "before": "8000%/11000%(demon and brute race)Atk",
              "after": "21500%/23000%(demon and brute race)Atk",
              "scope": "Lv 10",
              "source": "Increases damage from 8000%/11000%(demon and brute race)Atk to 21500%/23000%(demon and brute race)Atk based on level 10."
            },
            {
              "label": "Area of Effect",
              "before": "9 x 9 cells",
              "after": "11 x 11 cells",
              "scope": "",
              "source": "Increases area of effect from 9 x 9 cells to 11 x 11 cells."
            },
            {
              "label": "Factor Weight Of Pow In Skill Formula",
              "before": "10/10(demon and brute race)",
              "after": "15/15(demon and brute race)",
              "scope": "",
              "source": "Increases factor weight of POW in skill formula from 10/10(demon and brute race) to 15/15(demon and brute race)."
            },
            {
              "label": "Duration Of Massive Flame Blaster Buff",
              "before": "300 seconds",
              "after": "150 seconds",
              "scope": "",
              "source": "Reduces duration of Massive Flame Blaster buff from 300 seconds to 150 seconds."
            }
          ]
        },
        {
          "skillName": "Massive Flame Blaster",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/inquisitor/rebalance_3.md",
          "section": "10.3",
          "notes": [
            "Adds global cooldown by 0.5 seconds.",
            "Reduces area of effect from 11 x 11 cells to 9 x 9 cells.",
            "Increases base damage from 21500%/23000%Atk to 23000%/24500%Atk based on level 10."
          ],
          "specRows": [
            {
              "label": "Area of Effect",
              "before": "11 x 11 cells",
              "after": "9 x 9 cells",
              "scope": "",
              "source": "Reduces area of effect from 11 x 11 cells to 9 x 9 cells."
            },
            {
              "label": "Damage",
              "before": "21500%/23000%Atk",
              "after": "23000%/24500%Atk",
              "scope": "Lv 10",
              "source": "Increases base damage from 21500%/23000%Atk to 23000%/24500%Atk based on level 10."
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
      "id": 5251,
      "imageFile": "5251.png",
      "name": "Third Punish(Third Punish)",
      "maxLevel": 5,
      "prerequisiteText": "basic skill",
      "group": "",
      "type": "Melee Physics",
      "target": "Single Target",
      "recoversAp": "",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "",
      "description": "Power of Faith, Judge, Available in Flame of Destruction state.\nDeals Melee Physics damage 3 times to the target and any target within a 7x7 cell area around it with the Mark of Judgement, and erases the target's Mark of Judgement.\nDamage increases additionally based on the caster's base level and POW.\nWhen cast, an additional optical axis effect is triggered.\nCritical damage is applied based on the caster's critical probability.\nIn case of critical damage, half of the total critical damage increase options is applied.",
      "levelDetails": [
        {
          "level": 1,
          "text": "Per hit ATK 1850%"
        },
        {
          "level": 2,
          "text": "Per hit ATK 3350%"
        },
        {
          "level": 3,
          "text": "Per hit ATK 4850%"
        },
        {
          "level": 4,
          "text": "Per hit ATK 6350%"
        },
        {
          "level": 5,
          "text": "Per hit ATK 7850%"
        }
      ],
      "fixedCastTime": "0 seconds",
      "variableCastTime": "0 seconds",
      "castDelay": "0.5 seconds",
      "cooldown": "0.7 seconds",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "56"
            },
            {
              "level": 2,
              "value": "62"
            },
            {
              "level": 3,
              "value": "68"
            },
            {
              "level": 4,
              "value": "74"
            },
            {
              "level": 5,
              "value": "80"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5251.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5251",
      "tree": {
        "idx": 31,
        "row": 4,
        "col": 3,
        "columns": 7,
        "requirements": [
          {
            "id": 5249,
            "level": 2,
            "name": "Second Faith",
            "visible": true
          }
        ]
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Melee Physics"
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
            "label": "Target",
            "value": "Single Target"
          },
          {
            "label": "Damage",
            "value": "7,850% ATK per hit"
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
                  "sp-cost": "56"
                }
              },
              {
                "level": 2,
                "values": {
                  "sp-cost": "62"
                }
              },
              {
                "level": 3,
                "values": {
                  "sp-cost": "68"
                }
              },
              {
                "level": 4,
                "values": {
                  "sp-cost": "74"
                }
              },
              {
                "level": 5,
                "values": {
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
      "id": 5253,
      "imageFile": "5253.png",
      "name": "Third Consecration(Third Consecration)",
      "maxLevel": 5,
      "prerequisiteText": "basic skill",
      "group": "",
      "type": "Melee Physics",
      "target": "Single Target",
      "recoversAp": "",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "",
      "description": "Judge, Available in Flame of Destruction state.\nDeals Melee Physics damage 5 times to the target and any target within a 7x7 cell area around it with the Mark of Judgement, and removes the target's Mark of Judgement.\nDamage increases additionally based on the caster's base level and POW.\nAdditionally, the caster receives HP and SP Recovery effects from the power of purification, and the amount of Recovery increases based on the skill level and the caster's base level.",
      "levelDetails": [
        {
          "level": 1,
          "text": "Per hit ATK 700%"
        },
        {
          "level": 2,
          "text": "Per hit ATK 1400%"
        },
        {
          "level": 3,
          "text": "Per hit ATK 2100%"
        },
        {
          "level": 4,
          "text": "Per hit ATK 2800%"
        },
        {
          "level": 5,
          "text": "Per hit ATK 3500%"
        }
      ],
      "fixedCastTime": "0 seconds",
      "variableCastTime": "0 seconds",
      "castDelay": "0 seconds",
      "cooldown": "0.7 seconds",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "65"
            },
            {
              "level": 2,
              "value": "70"
            },
            {
              "level": 3,
              "value": "75"
            },
            {
              "level": 4,
              "value": "80"
            },
            {
              "level": 5,
              "value": "85"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5253.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5253",
      "tree": {
        "idx": 32,
        "row": 4,
        "col": 4,
        "columns": 7,
        "requirements": [
          {
            "id": 5250,
            "level": 2,
            "name": "Second Judgment",
            "visible": true
          }
        ]
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Melee Physics"
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
            "value": "0 seconds"
          },
          {
            "label": "Cast Delay",
            "value": "0 seconds"
          },
          {
            "label": "Cooldown",
            "value": "0.7 seconds"
          },
          {
            "label": "Target",
            "value": "Single Target"
          },
          {
            "label": "Damage",
            "value": "3,500% ATK per hit"
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
                  "sp-cost": "65"
                }
              },
              {
                "level": 2,
                "values": {
                  "sp-cost": "70"
                }
              },
              {
                "level": 3,
                "values": {
                  "sp-cost": "75"
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
                  "sp-cost": "85"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "balanceNotes": [
        {
          "skillName": "Third Consecration",
          "versionId": "rebalance-1",
          "versionLabel": "Rebalance 1",
          "file": "rebalances/inquisitor/rebalance_1.md",
          "section": "10.7",
          "notes": [
            "Changes damage logic from 3 split hits to 5 cumulative hits."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "3 split hits (logic)",
              "after": "5 cumulative hits (logic)",
              "scope": "",
              "source": "Changes damage logic from 3 split hits to 5 cumulative hits."
            }
          ]
        },
        {
          "skillName": "Third Consecration",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/inquisitor/rebalance_2.md",
          "section": "10.6",
          "notes": [
            "Reduces cooldown from 2 seconds to 1 second.",
            "Unifies area of effect to 7 x 7 cells regardless of skill level.",
            "Increases damage from 3250%Atk to 3500%Atk per hit based on level 5.",
            "Increases factor weight of POW in skill formula from 5 to 10."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "2 seconds",
              "after": "1 second",
              "scope": "",
              "source": "Reduces cooldown from 2 seconds to 1 second."
            },
            {
              "label": "Damage",
              "before": "3250%Atk",
              "after": "3500%Atk per hit",
              "scope": "Lv 5",
              "source": "Increases damage from 3250%Atk to 3500%Atk per hit based on level 5."
            },
            {
              "label": "Factor Weight Of Pow In Skill Formula",
              "before": "5",
              "after": "10",
              "scope": "",
              "source": "Increases factor weight of POW in skill formula from 5 to 10."
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
      "id": 5252,
      "imageFile": "5252.png",
      "name": "Third Flame Bomb(Third Flame Bomb)",
      "maxLevel": 5,
      "prerequisiteText": "basic skill",
      "group": "",
      "type": "Melee Physics",
      "target": "Single Target",
      "recoversAp": "",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "",
      "description": "Available in Flame of Destruction state.\nDeals Melee Physics damage to the target and any targets within a 7x7 cell area around it with the Mark of Judgement, and erases the target's Mark of Judgement.\nAttacks up to 3 times depending on the number of devices currently in possession. Damage increases additionally based on the caster's base level and POW.",
      "levelDetails": [
        {
          "level": 1,
          "text": "Per hit ATK (650+MHP 20%)%"
        },
        {
          "level": 2,
          "text": "Per hit ATK (1300+MHP 20%)%"
        },
        {
          "level": 3,
          "text": "Per hit ATK (1950+MHP 20%)%"
        },
        {
          "level": 4,
          "text": "Per hit ATK (2600+MHP 20%)%"
        },
        {
          "level": 5,
          "text": "Per hit ATK (3250+MHP 20%)%"
        }
      ],
      "fixedCastTime": "0 seconds",
      "variableCastTime": "0 seconds",
      "castDelay": "0.7 seconds",
      "cooldown": "1 second",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "74"
            },
            {
              "level": 2,
              "value": "78"
            },
            {
              "level": 3,
              "value": "82"
            },
            {
              "level": 4,
              "value": "86"
            },
            {
              "level": 5,
              "value": "90"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5252.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5252",
      "tree": {
        "idx": 33,
        "row": 4,
        "col": 5,
        "columns": 7,
        "requirements": [
          {
            "id": 5248,
            "level": 2,
            "name": "Second Flame",
            "visible": true
          }
        ]
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Melee Physics"
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
            "value": "0 seconds"
          },
          {
            "label": "Cast Delay",
            "value": "0.7 seconds"
          },
          {
            "label": "Cooldown",
            "value": "1 second"
          },
          {
            "label": "Target",
            "value": "Single Target"
          },
          {
            "label": "Damage",
            "value": "(3250 + MHP 20%)% ATK per hit"
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
                  "sp-cost": "74"
                }
              },
              {
                "level": 2,
                "values": {
                  "sp-cost": "78"
                }
              },
              {
                "level": 3,
                "values": {
                  "sp-cost": "82"
                }
              },
              {
                "level": 4,
                "values": {
                  "sp-cost": "86"
                }
              },
              {
                "level": 5,
                "values": {
                  "sp-cost": "90"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "balanceNotes": [
        {
          "skillName": "Third Flame Bomb",
          "versionId": "rebalance-1",
          "versionLabel": "Rebalance 1",
          "file": "rebalances/inquisitor/rebalance_1.md",
          "section": "10.8",
          "notes": [
            "Applies 20% of the user's MaxHP to the skill damage factor."
          ],
          "specRows": []
        },
        {
          "skillName": "Third Flame Bomb",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/inquisitor/rebalance_2.md",
          "section": "10.7",
          "notes": [
            "Reduces cooldown from 2 seconds to 1 second.",
            "Unifies area of effect to 7 x 7 cells regardless of skill level.",
            "Increases factor weight of POW in skill formula from 5 to 10."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "2 seconds",
              "after": "1 second",
              "scope": "",
              "source": "Reduces cooldown from 2 seconds to 1 second."
            },
            {
              "label": "Factor Weight Of Pow In Skill Formula",
              "before": "5",
              "after": "10",
              "scope": "",
              "source": "Increases factor weight of POW in skill formula from 5 to 10."
            }
          ]
        },
        {
          "skillName": "Third Flame Bomb",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/inquisitor/rebalance_4.md",
          "section": "11.3",
          "notes": [
            "Adds global cooldown by 0.7 seconds."
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
      "id": 6519,
      "imageFile": "6519.png",
      "name": "Blazing Flame Blast",
      "maxLevel": 5,
      "prerequisiteText": "Massive Flame Blaster level 7",
      "group": "Active",
      "type": "Ranged Physical",
      "target": "Single target",
      "recoversAp": "2",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "",
      "description": "Can only be used in Fury state.\nInflicts long ranged physical damage to the target ,if the user is under Massive Flame Blaster buff, the skill will deal more damage.\nDeals additional damage depends on user's base level and POW, has a chance to trigger critical, critical chance is the user's Cri.\nThe effectiveness of critical modifier is applied by half.",
      "levelDetails": [
        {
          "level": 1,
          "text": "5800% Atk / 7700% Atk (Massive Flame Blaster)."
        },
        {
          "level": 2,
          "text": "9600% Atk / 11900% Atk (Massive Flame Blaster)."
        },
        {
          "level": 3,
          "text": "13400% Atk / 16100% Atk (Massive Flame Blaster)."
        },
        {
          "level": 4,
          "text": "17200% Atk / 20300% Atk (Massive Flame Blaster)."
        },
        {
          "level": 5,
          "text": "21000% Atk / 24500% Atk (Massive Flame Blaster)."
        }
      ],
      "fixedCastTime": "0.5 seconds",
      "variableCastTime": "0.5 seconds",
      "castDelay": "1 second",
      "cooldown": "0.7 seconds",
      "levelExtras": [],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/6519.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6519",
      "tree": {
        "idx": 34,
        "row": 4,
        "col": 6,
        "columns": 7,
        "requirements": [
          {
            "id": 5243,
            "level": 7,
            "name": "Massive Flame Blaster",
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
            "value": "21,000% ATK/24,500% ATK (Massive Flame Blaster)"
          }
        ],
        "levelTables": []
      },
      "balanceNotes": [
        {
          "skillName": "Blazing Flame Blast",
          "versionId": "rebalance-5",
          "versionLabel": "Rebalance 5",
          "file": "rebalances/inquisitor/added_skills.md",
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
    }
  ]
};

export default inquisitorData;
