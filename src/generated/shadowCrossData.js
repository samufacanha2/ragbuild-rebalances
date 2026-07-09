export const shadowCrossData = {
  "generatedAt": "2026-07-09T03:37:10.297Z",
  "classId": 4254,
  "classSlug": "shadow-cross",
  "className": "Shadow Cross",
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
    "changedSkills": 7,
    "noteCount": 50,
    "addedSkills": 0,
    "versions": 4
  },
  "tree": {
    "columns": 9,
    "rows": 4,
    "skillTreeUrl": "https://www.divine-pride.net/tools/skilltree/4254",
    "jobIconUrl": "assets/divine-pride/jobs/4254.png"
  },
  "sources": {
    "rebalances": [
      "rebalances/shadow-cross/rebalance_1.md",
      "rebalances/shadow-cross/rebalance_2.md",
      "rebalances/shadow-cross/rebalance_3.md",
      "rebalances/shadow-cross/rebalance_4.md"
    ],
    "rebalanceManifest": "rebalances/manifest.json",
    "divinePrideApiDocs": "https://www.divine-pride.net/api",
    "divinePrideSkillTree": "https://www.divine-pride.net/tools/skilltree/4254",
    "browiki": "https://browiki.org"
  },
  "rebalanceVersions": [
    {
      "id": "rebalance-1",
      "label": "Rebalance 1",
      "file": "rebalances/shadow-cross/rebalance_1.md",
      "heading": "5. Shadow Cross",
      "className": "Shadow Cross",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=9805",
      "scope": "main",
      "appliesTo": "Main classes only",
      "maxJobLevel": 50,
      "pointLimit": 49,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "5.1",
          "name": "Shadow Stab",
          "notes": [
            "Reduces cooldown from 3 seconds to 1 second based on level 5.",
            "Reduces AP recovery rate from 3 to 1."
          ]
        },
        {
          "section": "5.2",
          "name": "Savage Impact",
          "notes": [
            "Removes \"cloaking\" condition requirement.",
            "Reduces cooldown from 3 seconds to 1 second based on level 10.",
            "Adds delay after skill by 0.3 seconds based on level 10.",
            "Changes damage from 3500%Atk to 600%Atk based on level 10.",
            "Changes damage while under Shadow Exceed buff from 5000%Atk to 1000%Atk based on level 10.",
            "Changes damage logic from 8 split hits to 3 cumulative hits.",
            "Increases number of hit to 5 hits if using the skill while under Cloaking Exceed buff."
          ]
        },
        {
          "section": "5.3",
          "name": "Eternal Slash",
          "notes": [
            "Reduces cooldown from 1.5 seconds to 0.350.75 seconds based on level 5.",
            "Reduces delay after skill from 1 second to 0.5 seconds."
          ]
        }
      ]
    },
    {
      "id": "rebalance-2",
      "label": "Rebalance 2",
      "file": "rebalances/shadow-cross/rebalance_2.md",
      "heading": "5. Shadow Cross",
      "className": "Shadow Cross",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=11126",
      "scope": "main-and-expanded",
      "appliesTo": "Main and expanded classes",
      "maxJobLevel": 50,
      "pointLimit": 49,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "5.1",
          "name": "Savage Impact",
          "notes": [
            "Increases SP consumption from 55 to 72 based on level 10.",
            "Increases area of effect from 3 x 3 cells to 5 x 5 cells.",
            "Increases damage from 600%/1000%(Shadow Exceed)Atk to 900%/1100%(Shadow Exceed)Atk per hit based on level 10."
          ]
        },
        {
          "section": "5.2",
          "name": "Eternal Slash",
          "notes": [
            "Reduces cooldown from 0.75 seconds to 0.5 seconds.",
            "Reduces damage from 1750%/2500%(Shadow Exceed)Atk to 1325%/1825%(Shadow Exceed)Atk per hit based on level 5.",
            "Increases SP consumption from 40 to 60 based on level 5.",
            "Increases cast range from 2 cells to 3 cells.",
            "Reduces factor weight of POW in skill formula from 5/7(Shadow Exceed) to 2/3(Shadow Exceed)."
          ]
        },
        {
          "section": "5.3",
          "name": "Impact Crater",
          "notes": [
            "Reduces cooldown from 5 seconds to 1.5 seconds.",
            "Removes delay after skill.",
            "Increases SP consumption from 54 to 78 based on level 5.",
            "Reduces AP recovery rate from 5 to 3.",
            "Increases damage from 325%Atk to 400%Atk per hit based on level 5."
          ]
        },
        {
          "section": "5.4",
          "name": "Shadow Stab",
          "notes": [
            "Reduces SP consumption from 65 to 60 based on level 5.",
            "Increases AP recovery rate from 1 to 2.",
            "Reduces cooldown from 1 seconds to 0.35 seconds.",
            "Removes 0.5 seconds delay after skill.",
            "Reduces damage from 3750%Atk to 1500%Atk per hit based on level 5."
          ]
        },
        {
          "section": "5.5",
          "name": "Potent Venom",
          "notes": [
            "Increases duration from 120 seconds to 300 seconds based on level 10.",
            "Reduces physical resistance ignoring from 30% to 20% based on level 10."
          ]
        },
        {
          "section": "5.6",
          "name": "Fatal Shadow Claw",
          "notes": [
            "Reduces fixed casting time from 1.5 seconds to 0.5 seconds.",
            "Reduces variable casting time from 4 seconds to 0.5 seconds.",
            "Removes 0.5 seconds delay after skill.",
            "Increases damage from 6500%/9500%(demihuman and dragon race)Atk to 13000%/14500%(demihuman and dragon race)Atk based on level 10."
          ]
        },
        {
          "section": "5.7",
          "name": "Shadow Exceed",
          "notes": [
            "Removes 1 second delay after skill.",
            "Reduces AP consumption from 150 to 125 based on level 10.",
            "Increases duration from 240 seconds to 300 seconds based on level 10."
          ]
        }
      ]
    },
    {
      "id": "rebalance-3",
      "label": "Rebalance 3",
      "file": "rebalances/shadow-cross/rebalance_3.md",
      "heading": "3. Shadow Cross",
      "className": "Shadow Cross",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=12421",
      "scope": "main-and-expanded",
      "appliesTo": "Main and expanded classes",
      "maxJobLevel": 55,
      "pointLimit": 54,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "3.1",
          "name": "Savage Impact",
          "notes": [
            "Reduces skill cooldown from 1 second to 0.7 seconds.",
            "Increases area of effect from 5 x 5 cells to 7 x 7 cells based on level 10.",
            "Applies AP recovery rate by 2."
          ]
        },
        {
          "section": "3.2",
          "name": "Shadow Stab",
          "notes": [
            "The skill will deal damage for 2 hits.",
            "While under Cloaking Exceed buff, increases number of hit to 3 hits with higher damage per hit.",
            "Increases factor weight of POW in skill formula while under Cloaking Exceed buff from 5 to 7.",
            "Increases base damage from 1500%Atk to 1750%/2000%Atk per hit based on level 5."
          ]
        }
      ]
    },
    {
      "id": "rebalance-4",
      "label": "Rebalance 4",
      "file": "rebalances/shadow-cross/rebalance_4.md",
      "heading": "3. Shadow Cross",
      "className": "Shadow Cross",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=13917",
      "scope": "main-and-expanded",
      "appliesTo": "Main and expanded classes",
      "maxJobLevel": 55,
      "pointLimit": 54,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "3.1",
          "name": "Savage Impact",
          "notes": [
            "Increases base damage from 900%/1100%(Shadow Exceed)Atk to 1050%/1250%(Shadow Exceed)Atk per hit based on level 10."
          ]
        },
        {
          "section": "3.2",
          "name": "Shadow Stab",
          "notes": [
            "Unifies number of hit from 2/3(Cloaking Exceed) hits to 3 hits regardless of Cloaking Exceed buff.",
            "Increases base damage from 1750%/2000%(Cloaking Exceed)Atk to 2750%/3250%(Cloaking Exceed)Atk per hit based on level 5."
          ]
        },
        {
          "section": "3.3",
          "name": "Eternal Slash",
          "notes": [
            "Attack count no longer be removed by Dispell or Clearance.",
            "Increases base damage from 1325%/1825%(Shadow Exceed)Atk to 1500%/2100%(Shadow Exceed)Atk per hit based on level 5."
          ]
        }
      ]
    }
  ],
  "addedSkills": [],
  "skillTabs": [
    {
      "id": "current",
      "label": "Shadow Cross",
      "pointLimit": 59,
      "tree": {
        "columns": 9,
        "rows": 4
      },
      "skills": [
        {
          "id": 5288,
          "imageFile": "5288.png",
          "name": "Shadow Sense",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Increase your FLEE. Katars and Daggers also increase CRIT.",
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
          "iconUrl": "assets/divine-pride/skills/5288.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5288",
          "tree": {
            "idx": 0,
            "row": 0,
            "col": 0,
            "columns": 9,
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
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 5286,
          "imageFile": "5286.png",
          "name": "Dancing Knife",
          "maxLevel": 5,
          "prerequisiteText": "Shadow Sense Lv. 3",
          "group": "Active",
          "type": "Buff",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "description": "A Dagger skill.\nSummon small spinning blades around you to attack surrounding enemies in 5 x5 cells.\nThis skill's effect is canceled immediately if you change to a different, non-Dagger Weapon for its duration.\nThis skill additionally increases damage, depending on your Base Level and POW.",
          "levelDetails": [],
          "fixedCastTime": "1 second",
          "variableCastTime": "1 second",
          "castDelay": "1 second",
          "cooldown": "30 seconds",
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5286.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5286",
          "tree": {
            "idx": 8,
            "row": 0,
            "col": 8,
            "columns": 9,
            "requirements": [
              {
                "id": 5288,
                "level": 3,
                "name": "Shadow Sense",
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
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "45"
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
                      "sp-cost": "55"
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
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 5287,
          "imageFile": "5287.png",
          "name": "Savage Impact",
          "maxLevel": 10,
          "prerequisiteText": "Cross-impact 5, Shadow Sense 3",
          "group": "Active",
          "type": "Melee Physical",
          "target": "Single Target",
          "recoversAp": "2",
          "consumesAp": "",
          "description": "Katar-only skills,\nQuickly approaches the target and inflicts melee physical damage 3 times to the target and enemies within the surrounding range.\n(When cast in Cloaking Exceed state, deals melee physical damage 5 times.)\nDamage increases additionally depending on the user's base level and POW, and causes greater damage in Shadow Exceed state.\nCritical damage is applied with a probability of half the user's critical probability.\nIn the case of critical damage, half of the total critical damage increase options are applied.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK Per Hit 90%/ 110%(Shadow Exceed)\nArea of Effect: 5x5Cells"
            },
            {
              "level": 2,
              "text": "ATK Per Hit 180%/ 220%(Shadow Exceed)\nArea of Effect: 5x5Cells"
            },
            {
              "level": 3,
              "text": "ATK Per Hit 270%/ 330%(Shadow Exceed)\nArea of Effect: 5x5Cells"
            },
            {
              "level": 4,
              "text": "ATK Per Hit 360%/ 440%(Shadow Exceed)\nArea of Effect: 5x5Cells"
            },
            {
              "level": 5,
              "text": "ATK Per Hit 450%/ 550%(Shadow Exceed)\nArea of Effect: 5x5Cells"
            },
            {
              "level": 6,
              "text": "ATK Per Hit 540%/ 660%(Shadow Exceed)\nArea of Effect: 7x7Cells"
            },
            {
              "level": 7,
              "text": "ATK Per Hit 630%/ 770%(Shadow Exceed)\nArea of Effect: 7x7Cells"
            },
            {
              "level": 8,
              "text": "ATK Per Hit 720%/ 880%(Shadow Exceed)\nArea of Effect: 7x7Cells"
            },
            {
              "level": 9,
              "text": "ATK Per Hit 810%/ 990%(Shadow Exceed)\nArea of Effect: 7x7Cells"
            },
            {
              "level": 10,
              "text": "ATK Per Hit 900%/ 1100%(Shadow Exceed)\nArea of Effect: 7x7Cells"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0.3 seconds",
          "cooldown": "0.7 seconds",
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
                  "value": "48"
                },
                {
                  "level": 3,
                  "value": "51"
                },
                {
                  "level": 4,
                  "value": "54"
                },
                {
                  "level": 5,
                  "value": "57"
                },
                {
                  "level": 6,
                  "value": "60"
                },
                {
                  "level": 7,
                  "value": "63"
                },
                {
                  "level": 8,
                  "value": "66"
                },
                {
                  "level": 9,
                  "value": "69"
                },
                {
                  "level": 10,
                  "value": "72"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5287.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5287",
          "tree": {
            "idx": 10,
            "row": 1,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 2022,
                "level": 5,
                "name": "Cross Impact",
                "visible": false
              },
              {
                "id": 5288,
                "level": 3,
                "name": "Shadow Sense",
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
                "value": "0 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.3 seconds"
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
                "value": "2"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "base-damage-atk-per-hit",
                    "label": "Base Damage (ATK per Hit)"
                  },
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
                      "base-damage-atk-per-hit": "90%",
                      "area-of-effect": "5x5",
                      "sp-cost": "45"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-atk-per-hit": "180%",
                      "area-of-effect": "5x5",
                      "sp-cost": "48"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-atk-per-hit": "270%",
                      "area-of-effect": "5x5",
                      "sp-cost": "51"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-atk-per-hit": "360%",
                      "area-of-effect": "5x5",
                      "sp-cost": "54"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-atk-per-hit": "450%",
                      "area-of-effect": "5x5",
                      "sp-cost": "57"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "base-damage-atk-per-hit": "540%",
                      "area-of-effect": "7x7",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "base-damage-atk-per-hit": "630%",
                      "area-of-effect": "7x7",
                      "sp-cost": "63"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "base-damage-atk-per-hit": "720%",
                      "area-of-effect": "7x7",
                      "sp-cost": "66"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "base-damage-atk-per-hit": "810%",
                      "area-of-effect": "7x7",
                      "sp-cost": "69"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "base-damage-atk-per-hit": "900%",
                      "area-of-effect": "7x7",
                      "sp-cost": "72"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [
            {
              "skillName": "Savage Impact",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/shadow-cross/rebalance_1.md",
              "section": "5.2",
              "notes": [
                "Removes \"cloaking\" condition requirement.",
                "Reduces cooldown from 3 seconds to 1 second based on level 10.",
                "Adds delay after skill by 0.3 seconds based on level 10.",
                "Changes damage from 3500%Atk to 600%Atk based on level 10.",
                "Changes damage while under Shadow Exceed buff from 5000%Atk to 1000%Atk based on level 10.",
                "Changes damage logic from 8 split hits to 3 cumulative hits.",
                "Increases number of hit to 5 hits if using the skill while under Cloaking Exceed buff."
              ],
              "specRows": [
                {
                  "label": "\"cloaking\" Condition Requirement",
                  "before": "\"cloaking\" condition requirement",
                  "after": "Removed",
                  "scope": "",
                  "source": "Removes \"cloaking\" condition requirement."
                },
                {
                  "label": "Cooldown",
                  "before": "3 seconds",
                  "after": "1 second",
                  "scope": "Lv 10",
                  "source": "Reduces cooldown from 3 seconds to 1 second based on level 10."
                },
                {
                  "label": "Damage",
                  "before": "3500%Atk",
                  "after": "600%Atk",
                  "scope": "Lv 10",
                  "source": "Changes damage from 3500%Atk to 600%Atk based on level 10."
                },
                {
                  "label": "Damage While Under Shadow Exceed Buff",
                  "before": "5000%Atk",
                  "after": "1000%Atk",
                  "scope": "Lv 10",
                  "source": "Changes damage while under Shadow Exceed buff from 5000%Atk to 1000%Atk based on level 10."
                },
                {
                  "label": "Damage Logic",
                  "before": "8 split hits",
                  "after": "3 cumulative hits",
                  "scope": "",
                  "source": "Changes damage logic from 8 split hits to 3 cumulative hits."
                }
              ]
            },
            {
              "skillName": "Savage Impact",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/shadow-cross/rebalance_2.md",
              "section": "5.1",
              "notes": [
                "Increases SP consumption from 55 to 72 based on level 10.",
                "Increases area of effect from 3 x 3 cells to 5 x 5 cells.",
                "Increases damage from 600%/1000%(Shadow Exceed)Atk to 900%/1100%(Shadow Exceed)Atk per hit based on level 10."
              ],
              "specRows": [
                {
                  "label": "SP Cost",
                  "before": "55",
                  "after": "72",
                  "scope": "Lv 10",
                  "source": "Increases SP consumption from 55 to 72 based on level 10."
                },
                {
                  "label": "Area of Effect",
                  "before": "3 x 3 cells",
                  "after": "5 x 5 cells",
                  "scope": "",
                  "source": "Increases area of effect from 3 x 3 cells to 5 x 5 cells."
                },
                {
                  "label": "Damage",
                  "before": "600%/1000%(Shadow E x ceed)Atk",
                  "after": "900%/1100%(Shadow E x ceed)Atk per hit",
                  "scope": "Lv 10",
                  "source": "Increases damage from 600%/1000%(Shadow Exceed)Atk to 900%/1100%(Shadow Exceed)Atk per hit based on level 10."
                }
              ]
            },
            {
              "skillName": "Savage Impact",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/shadow-cross/rebalance_3.md",
              "section": "3.1",
              "notes": [
                "Reduces skill cooldown from 1 second to 0.7 seconds.",
                "Increases area of effect from 5 x 5 cells to 7 x 7 cells based on level 10.",
                "Applies AP recovery rate by 2."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "1 second",
                  "after": "0.7 seconds",
                  "scope": "",
                  "source": "Reduces skill cooldown from 1 second to 0.7 seconds."
                },
                {
                  "label": "Area of Effect",
                  "before": "5 x 5 cells",
                  "after": "7 x 7 cells",
                  "scope": "Lv 10",
                  "source": "Increases area of effect from 5 x 5 cells to 7 x 7 cells based on level 10."
                }
              ]
            },
            {
              "skillName": "Savage Impact",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/shadow-cross/rebalance_4.md",
              "section": "3.1",
              "notes": [
                "Increases base damage from 900%/1100%(Shadow Exceed)Atk to 1050%/1250%(Shadow Exceed)Atk per hit based on level 10."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "900%/1100%(Shadow E x ceed)Atk",
                  "after": "1050%/1250%(Shadow E x ceed)Atk per hit",
                  "scope": "Lv 10",
                  "source": "Increases base damage from 900%/1100%(Shadow Exceed)Atk to 1050%/1250%(Shadow Exceed)Atk per hit based on level 10."
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
          "id": 5293,
          "imageFile": "5293.png",
          "name": "Enchanting Shadow",
          "maxLevel": 5,
          "prerequisiteText": "Poisonous Weapon Lv. 5 and Shadow Sense Lv. 3",
          "group": "Active",
          "type": "Buff",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Imbue your Weapon with the power of shadows.\nAttacks create a chance of leaving Shadow Wounds on enemies, increasing their damage, depending on the number of Shadow Wounds on them.",
          "levelDetails": [],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "1 second",
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
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5293.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5293",
          "tree": {
            "idx": 12,
            "row": 1,
            "col": 3,
            "columns": 9,
            "requirements": [
              {
                "id": 2027,
                "level": 5,
                "name": "Poisonous Weapon",
                "visible": false
              },
              {
                "id": 5288,
                "level": 3,
                "name": "Shadow Sense",
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
                "value": "1.5 seconds"
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
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "40"
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
                      "sp-cost": "60"
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
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 5289,
          "imageFile": "5289.png",
          "name": "Eternal Slash",
          "maxLevel": 5,
          "prerequisiteText": "Weapon Blocking Lv. 3, Shadow Sense Lv. 5, and Dancing Knife Lv. 3",
          "group": "Active",
          "type": "Melee Physical",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Can be used during Weapon Blocking.\nCritically inflict Melee Physical damage on a target.\nEach time it is used again within 3 seconds, the number of attacks is increased by 1 (up to a maximum of 5).\nAdditional damage increase based on the caster's base level and POW.\nand uses 50% of your CRIT to inflict Critical damage,\nIf the hit crits, half-total of the Critical Damage Bonus option is applied.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK per hit 265%/ 365% when Shadow Exceed is active"
            },
            {
              "level": 2,
              "text": "ATK per hit 530%/ 730% when Shadow Exceed is active"
            },
            {
              "level": 3,
              "text": "ATK per hit 795%/ 1095% when Shadow Exceed is active"
            },
            {
              "level": 4,
              "text": "ATK per hit 1060%/ 1460% when Shadow Exceed is active"
            },
            {
              "level": 5,
              "text": "ATK per hit 1325%/ 1825% when Shadow Exceed is active"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0.5 seconds",
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
          "iconUrl": "assets/divine-pride/skills/5289.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5289",
          "tree": {
            "idx": 15,
            "row": 1,
            "col": 6,
            "columns": 9,
            "requirements": [
              {
                "id": 2028,
                "level": 3,
                "name": "Weapon Blocking",
                "visible": false
              },
              {
                "id": 5286,
                "level": 3,
                "name": "Dancing Knife",
                "visible": true
              },
              {
                "id": 5288,
                "level": 5,
                "name": "Shadow Sense",
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
                    "id": "base-damage-atk-per-hit",
                    "label": "Base Damage (ATK per Hit)"
                  },
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "base-damage-atk-per-hit": "265%",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-atk-per-hit": "530%",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-atk-per-hit": "795%",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-atk-per-hit": "1060%",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-atk-per-hit": "1325%",
                      "sp-cost": "60"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [
            {
              "skillName": "Eternal Slash",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/shadow-cross/rebalance_1.md",
              "section": "5.3",
              "notes": [
                "Reduces cooldown from 1.5 seconds to 0.350.75 seconds based on level 5.",
                "Reduces delay after skill from 1 second to 0.5 seconds."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "1.5 seconds",
                  "after": "0.350.75 seconds",
                  "scope": "Lv 5",
                  "source": "Reduces cooldown from 1.5 seconds to 0.350.75 seconds based on level 5."
                },
                {
                  "label": "Cast Delay",
                  "before": "1 second",
                  "after": "0.5 seconds",
                  "scope": "",
                  "source": "Reduces delay after skill from 1 second to 0.5 seconds."
                }
              ]
            },
            {
              "skillName": "Eternal Slash",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/shadow-cross/rebalance_2.md",
              "section": "5.2",
              "notes": [
                "Reduces cooldown from 0.75 seconds to 0.5 seconds.",
                "Reduces damage from 1750%/2500%(Shadow Exceed)Atk to 1325%/1825%(Shadow Exceed)Atk per hit based on level 5.",
                "Increases SP consumption from 40 to 60 based on level 5.",
                "Increases cast range from 2 cells to 3 cells.",
                "Reduces factor weight of POW in skill formula from 5/7(Shadow Exceed) to 2/3(Shadow Exceed)."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "0.75 seconds",
                  "after": "0.5 seconds",
                  "scope": "",
                  "source": "Reduces cooldown from 0.75 seconds to 0.5 seconds."
                },
                {
                  "label": "Damage",
                  "before": "1750%/2500%(Shadow E x ceed)Atk",
                  "after": "1325%/1825%(Shadow E x ceed)Atk per hit",
                  "scope": "Lv 5",
                  "source": "Reduces damage from 1750%/2500%(Shadow Exceed)Atk to 1325%/1825%(Shadow Exceed)Atk per hit based on level 5."
                },
                {
                  "label": "SP Cost",
                  "before": "40",
                  "after": "60",
                  "scope": "Lv 5",
                  "source": "Increases SP consumption from 40 to 60 based on level 5."
                },
                {
                  "label": "Cast Range",
                  "before": "2 cells",
                  "after": "3 cells",
                  "scope": "",
                  "source": "Increases cast range from 2 cells to 3 cells."
                },
                {
                  "label": "Factor Weight Of Pow In Skill Formula",
                  "before": "5/7(Shadow E x ceed)",
                  "after": "2/3(Shadow E x ceed)",
                  "scope": "",
                  "source": "Reduces factor weight of POW in skill formula from 5/7(Shadow Exceed) to 2/3(Shadow Exceed)."
                }
              ]
            },
            {
              "skillName": "Eternal Slash",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/shadow-cross/rebalance_4.md",
              "section": "3.3",
              "notes": [
                "Attack count no longer be removed by Dispell or Clearance.",
                "Increases base damage from 1325%/1825%(Shadow Exceed)Atk to 1500%/2100%(Shadow Exceed)Atk per hit based on level 5."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "1325%/1825%(Shadow E x ceed)Atk",
                  "after": "1500%/2100%(Shadow E x ceed)Atk per hit",
                  "scope": "Lv 5",
                  "source": "Increases base damage from 1325%/1825%(Shadow Exceed)Atk to 1500%/2100%(Shadow Exceed)Atk per hit based on level 5."
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
          "id": 6511,
          "imageFile": "6511.png",
          "name": "Cross Slash",
          "maxLevel": 5,
          "prerequisiteText": "Weapon Blocking 3, Dancing Knife 3",
          "group": "Active",
          "type": "Melee physical",
          "target": "Single target",
          "recoversAp": "2",
          "consumesAp": "",
          "description": "Deals melee physical damage to the target and surrounding enemies around the target for 3 hits.\nGains successful blocking state for 10 seconds when using this skill.\nDeals additional damage depends on user's base level and POW, deals more damage while under Shadow Exceed buff.\nHas a chance to trigger critical, critical chance is the half user's Cri.\nThe effectiveness of critical modifier is applied by half.",
          "levelDetails": [
            {
              "level": 1,
              "text": "300% Atk / 360% Atk (Shadow Exceed) per hit / area of effect: 5 x 5 cells."
            },
            {
              "level": 2,
              "text": "600% Atk / 720% Atk (Shadow Exceed) per hit / area of effect: 5 x 5 cells."
            },
            {
              "level": 3,
              "text": "900% Atk / 1080% Atk (Shadow Exceed) per hit / area of effect: 5 x 5 cells."
            },
            {
              "level": 4,
              "text": "1200% Atk / 1440% Atk (Shadow Exceed) per hit / area of effect: 7 x 7 cells."
            },
            {
              "level": 5,
              "text": "1500% Atk / 1800% Atk (Shadow Exceed) per hit / area of effect: 7 x 7 cells."
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6511.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6511",
          "tree": {
            "idx": 16,
            "row": 1,
            "col": 7,
            "columns": 9,
            "requirements": [
              {
                "id": 2028,
                "level": 3,
                "name": "Weapon Blocking",
                "visible": false
              },
              {
                "id": 5286,
                "level": 3,
                "name": "Dancing Knife",
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
                "value": "Single target"
              },
              {
                "label": "AP Generated",
                "value": "2"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "base-damage-atk-per-hit",
                    "label": "Base Damage (ATK per Hit)"
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
                      "base-damage-atk-per-hit": "300%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk-per-hit": "600%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk-per-hit": "900%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-atk-per-hit": "1200%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-atk-per-hit": "1500%"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 5292,
          "imageFile": "5292.png",
          "name": "Impact Crater",
          "maxLevel": 5,
          "prerequisiteText": "Rolling Cutter Lv. 5, Shadow Sense Lv. 5, Savage Impact Lv. 5, and Weapon Blocking Lv. 3",
          "group": "Active",
          "type": "Melee Physical",
          "target": "Area of Effect",
          "recoversAp": "3",
          "consumesAp": "",
          "description": "Katar-only skill.\nInflict Melee Physical damage on surrounding target that can crit, depending on your Spin stacks.\n(You can't use the skill without Spin stack)\nThis skill also casts Weapon Blocking Success mode for 10 seconds.\nAdditional Damage increase based on the caster's base level and POW.\nand uses 50% of your CRIT to inflict Critical damage,\nIf it crits, it inflicts half of the total of your Critical Damage Bonus options as damage.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK per hit 80%/Effective range: 3x3 cells"
            },
            {
              "level": 2,
              "text": "ATK per hit 160%/Effective range: 3x3 cells"
            },
            {
              "level": 3,
              "text": "ATK per hit 240%/Effective range: 5x5 cells"
            },
            {
              "level": 4,
              "text": "ATK per hit 320%/Effective range: 5x5 cells"
            },
            {
              "level": 5,
              "text": "ATK per hit 400%/Effective range: 7x7 cells"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0.3 seconds",
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
                  "value": "54"
                },
                {
                  "level": 3,
                  "value": "62"
                },
                {
                  "level": 4,
                  "value": "70"
                },
                {
                  "level": 5,
                  "value": "78"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5292.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5292",
          "tree": {
            "idx": 17,
            "row": 1,
            "col": 8,
            "columns": 9,
            "requirements": [
              {
                "id": 2028,
                "level": 3,
                "name": "Weapon Blocking",
                "visible": false
              },
              {
                "id": 2036,
                "level": 5,
                "name": "Rolling Cutter",
                "visible": false
              },
              {
                "id": 5287,
                "level": 5,
                "name": "Savage Impact",
                "visible": true
              },
              {
                "id": 5288,
                "level": 5,
                "name": "Shadow Sense",
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
                "value": "0 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.3 seconds"
              },
              {
                "label": "Target",
                "value": "Area of Effect"
              },
              {
                "label": "Area of Effect",
                "value": "Lv 1: 3 x 3 cells / Lv 2: 3 x 3 cells / Lv 3: 5 x 5 cells / Lv 4: 5 x 5 cells / Lv 5: 7 x 7 cells"
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
                    "id": "base-damage-atk-per-hit",
                    "label": "Base Damage (ATK per Hit)"
                  },
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "base-damage-atk-per-hit": "80%",
                      "sp-cost": "46"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-atk-per-hit": "160%",
                      "sp-cost": "54"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-atk-per-hit": "240%",
                      "sp-cost": "62"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-atk-per-hit": "320%",
                      "sp-cost": "70"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-atk-per-hit": "400%",
                      "sp-cost": "78"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [
            {
              "skillName": "Impact Crater",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/shadow-cross/rebalance_2.md",
              "section": "5.3",
              "notes": [
                "Reduces cooldown from 5 seconds to 1.5 seconds.",
                "Removes delay after skill.",
                "Increases SP consumption from 54 to 78 based on level 5.",
                "Reduces AP recovery rate from 5 to 3.",
                "Increases damage from 325%Atk to 400%Atk per hit based on level 5."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "5 seconds",
                  "after": "1.5 seconds",
                  "scope": "",
                  "source": "Reduces cooldown from 5 seconds to 1.5 seconds."
                },
                {
                  "label": "Cast Delay",
                  "before": "delay",
                  "after": "Removed",
                  "scope": "",
                  "source": "Removes delay after skill."
                },
                {
                  "label": "SP Cost",
                  "before": "54",
                  "after": "78",
                  "scope": "Lv 5",
                  "source": "Increases SP consumption from 54 to 78 based on level 5."
                },
                {
                  "label": "AP Generated",
                  "before": "5",
                  "after": "3",
                  "scope": "",
                  "source": "Reduces AP recovery rate from 5 to 3."
                },
                {
                  "label": "Damage",
                  "before": "325%Atk",
                  "after": "400%Atk per hit",
                  "scope": "Lv 5",
                  "source": "Increases damage from 325%Atk to 400%Atk per hit based on level 5."
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
          "id": 5290,
          "imageFile": "5290.png",
          "name": "Potent Venom",
          "maxLevel": 10,
          "prerequisiteText": "Shadow Sense Lv. 5 and Enchanting Shadow Lv. 3",
          "group": "Active",
          "type": "Buff",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Requires a Weapon with Deadly Poison applied on it.\nGive yourself an effect to ignore the target's Physical Resistance (RES).\nWhen Deadly Poison is dispelled, the effect of Potent Venom is also dispelled.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Ignore Physical RES: 2%/ Effect Duration: 75 seconds"
            },
            {
              "level": 2,
              "text": "Ignore Physical RES: 4%/ Effect Duration: 100 seconds"
            },
            {
              "level": 3,
              "text": "Ignore Physical RES: 6%/ Effect Duration: 125 seconds"
            },
            {
              "level": 4,
              "text": "Ignore Physical RES: 8%/ Effect Duration: 150 seconds"
            },
            {
              "level": 5,
              "text": "Ignore Physical RES: 10%/ Effect Duration: 175 seconds"
            },
            {
              "level": 6,
              "text": "Ignore Physical RES: 12%/ Effect Duration: 200 seconds"
            },
            {
              "level": 7,
              "text": "Ignore Physical RES: 14%/ Effect Duration: 225 seconds"
            },
            {
              "level": 8,
              "text": "Ignore Physical RES: 16%/ Effect Duration: 250 seconds"
            },
            {
              "level": 9,
              "text": "Ignore Physical RES: 18%/ Effect Duration: 275 seconds"
            },
            {
              "level": 10,
              "text": "Ignore Physical RES: 20%/ Effect Duration: 300 seconds"
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
                },
                {
                  "level": 6,
                  "value": "40"
                },
                {
                  "level": 7,
                  "value": "45"
                },
                {
                  "level": 8,
                  "value": "50"
                },
                {
                  "level": 9,
                  "value": "55"
                },
                {
                  "level": 10,
                  "value": "60"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5290.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5290",
          "tree": {
            "idx": 19,
            "row": 2,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 5288,
                "level": 5,
                "name": "Shadow Sense",
                "visible": true
              },
              {
                "id": 5293,
                "level": 3,
                "name": "Enchanting Shadow",
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
                "label": "Duration",
                "value": "Lv 1: 75 seconds / Lv 2: 100 seconds / Lv 3: 125 seconds / Lv 4: 150 seconds / Lv 5: 175 seconds / Lv 6: 200 seconds / Lv 7: 225 seconds / Lv 8: 250 seconds / Lv 9: 275 seconds / Lv 10: 300 seconds"
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
                      "effect": "Ignore Physical RES: 2%/ Effect Duration: 75 seconds",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Ignore Physical RES: 4%/ Effect Duration: 100 seconds",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Ignore Physical RES: 6%/ Effect Duration: 125 seconds",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Ignore Physical RES: 8%/ Effect Duration: 150 seconds",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Ignore Physical RES: 10%/ Effect Duration: 175 seconds",
                      "sp-cost": "35"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "Ignore Physical RES: 12%/ Effect Duration: 200 seconds",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "Ignore Physical RES: 14%/ Effect Duration: 225 seconds",
                      "sp-cost": "45"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "Ignore Physical RES: 16%/ Effect Duration: 250 seconds",
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "Ignore Physical RES: 18%/ Effect Duration: 275 seconds",
                      "sp-cost": "55"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "Ignore Physical RES: 20%/ Effect Duration: 300 seconds",
                      "sp-cost": "60"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [
            {
              "skillName": "Potent Venom",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/shadow-cross/rebalance_2.md",
              "section": "5.5",
              "notes": [
                "Increases duration from 120 seconds to 300 seconds based on level 10.",
                "Reduces physical resistance ignoring from 30% to 20% based on level 10."
              ],
              "specRows": [
                {
                  "label": "Duration",
                  "before": "120 seconds",
                  "after": "300 seconds",
                  "scope": "Lv 10",
                  "source": "Increases duration from 120 seconds to 300 seconds based on level 10."
                },
                {
                  "label": "Physical Resistance Ignoring",
                  "before": "30%",
                  "after": "20%",
                  "scope": "Lv 10",
                  "source": "Reduces physical resistance ignoring from 30% to 20% based on level 10."
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
          "id": 5291,
          "imageFile": "5291.png",
          "name": "Shadow Stab",
          "maxLevel": 5,
          "prerequisiteText": "Cloaking Exeed 5, Shadow Sense 5, Dancing Knife 5, Eternal Slash 3",
          "group": "Active",
          "type": "Melee Physical",
          "target": "Single Target",
          "recoversAp": "2",
          "consumesAp": "",
          "description": "Dagger-only skill.\nDeals melee physical damage to the target twice, ignoring the target's physical defense.\nWhen used in Cloaking Exceed state, attacks 3 times with higher attack power.\nDamage is additionally increased depending on the user's base level and POW.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK Per Hit 350%/400%(Cloaking Exceed)"
            },
            {
              "level": 2,
              "text": "ATK Per Hit 700%/800%(Cloaking Exceed)"
            },
            {
              "level": 3,
              "text": "ATK Per Hit 1050%/1200%(Cloaking Exceed)"
            },
            {
              "level": 4,
              "text": "ATK Per Hit 1400%/1600%(Cloaking Exceed)"
            },
            {
              "level": 5,
              "text": "ATK Per Hit 1750%/2000%(Cloaking Exceed)"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0 seconds",
          "cooldown": "0.35 seconds",
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5291.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5291",
          "tree": {
            "idx": 22,
            "row": 2,
            "col": 4,
            "columns": 9,
            "requirements": [
              {
                "id": 2033,
                "level": 5,
                "name": "Cloaking Exceed",
                "visible": false
              },
              {
                "id": 5286,
                "level": 5,
                "name": "Dancing Knife",
                "visible": true
              },
              {
                "id": 5288,
                "level": 5,
                "name": "Shadow Sense",
                "visible": true
              },
              {
                "id": 5289,
                "level": 3,
                "name": "Eternal Slash",
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
                "value": "0.35 seconds"
              },
              {
                "label": "Target",
                "value": "Single Target"
              },
              {
                "label": "AP Generated",
                "value": "2"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "base-damage-atk-per-hit",
                    "label": "Base Damage (ATK per Hit)"
                  },
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "base-damage-atk-per-hit": "350%",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-atk-per-hit": "700%",
                      "sp-cost": "45"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-atk-per-hit": "1050%",
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-atk-per-hit": "1400%",
                      "sp-cost": "55"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-atk-per-hit": "1750%",
                      "sp-cost": "60"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [
            {
              "skillName": "Shadow Stab",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/shadow-cross/rebalance_1.md",
              "section": "5.1",
              "notes": [
                "Reduces cooldown from 3 seconds to 1 second based on level 5.",
                "Reduces AP recovery rate from 3 to 1."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "3 seconds",
                  "after": "1 second",
                  "scope": "Lv 5",
                  "source": "Reduces cooldown from 3 seconds to 1 second based on level 5."
                },
                {
                  "label": "AP Generated",
                  "before": "3",
                  "after": "1",
                  "scope": "",
                  "source": "Reduces AP recovery rate from 3 to 1."
                }
              ]
            },
            {
              "skillName": "Shadow Stab",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/shadow-cross/rebalance_2.md",
              "section": "5.4",
              "notes": [
                "Reduces SP consumption from 65 to 60 based on level 5.",
                "Increases AP recovery rate from 1 to 2.",
                "Reduces cooldown from 1 seconds to 0.35 seconds.",
                "Removes 0.5 seconds delay after skill.",
                "Reduces damage from 3750%Atk to 1500%Atk per hit based on level 5."
              ],
              "specRows": [
                {
                  "label": "SP Cost",
                  "before": "65",
                  "after": "60",
                  "scope": "Lv 5",
                  "source": "Reduces SP consumption from 65 to 60 based on level 5."
                },
                {
                  "label": "AP Generated",
                  "before": "1",
                  "after": "2",
                  "scope": "",
                  "source": "Increases AP recovery rate from 1 to 2."
                },
                {
                  "label": "Cooldown",
                  "before": "1 seconds",
                  "after": "0.35 seconds",
                  "scope": "",
                  "source": "Reduces cooldown from 1 seconds to 0.35 seconds."
                },
                {
                  "label": "Cast Delay",
                  "before": "0.5 seconds delay",
                  "after": "Removed",
                  "scope": "",
                  "source": "Removes 0.5 seconds delay after skill."
                },
                {
                  "label": "Damage",
                  "before": "3750%Atk",
                  "after": "1500%Atk per hit",
                  "scope": "Lv 5",
                  "source": "Reduces damage from 3750%Atk to 1500%Atk per hit based on level 5."
                }
              ]
            },
            {
              "skillName": "Shadow Stab",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/shadow-cross/rebalance_3.md",
              "section": "3.2",
              "notes": [
                "The skill will deal damage for 2 hits.",
                "While under Cloaking Exceed buff, increases number of hit to 3 hits with higher damage per hit.",
                "Increases factor weight of POW in skill formula while under Cloaking Exceed buff from 5 to 7.",
                "Increases base damage from 1500%Atk to 1750%/2000%Atk per hit based on level 5."
              ],
              "specRows": [
                {
                  "label": "Factor Weight Of Pow In Skill Formula While Under Cloaking Exceed Buff",
                  "before": "5",
                  "after": "7",
                  "scope": "",
                  "source": "Increases factor weight of POW in skill formula while under Cloaking Exceed buff from 5 to 7."
                },
                {
                  "label": "Damage",
                  "before": "1500%Atk",
                  "after": "1750%/2000%Atk per hit",
                  "scope": "Lv 5",
                  "source": "Increases base damage from 1500%Atk to 1750%/2000%Atk per hit based on level 5."
                }
              ]
            },
            {
              "skillName": "Shadow Stab",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/shadow-cross/rebalance_4.md",
              "section": "3.2",
              "notes": [
                "Unifies number of hit from 2/3(Cloaking Exceed) hits to 3 hits regardless of Cloaking Exceed buff.",
                "Increases base damage from 1750%/2000%(Cloaking Exceed)Atk to 2750%/3250%(Cloaking Exceed)Atk per hit based on level 5."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "1750%/2000%(Cloaking E x ceed)Atk",
                  "after": "2750%/3250%(Cloaking E x ceed)Atk per hit",
                  "scope": "Lv 5",
                  "source": "Increases base damage from 1750%/2000%(Cloaking Exceed)Atk to 2750%/3250%(Cloaking Exceed)Atk per hit based on level 5."
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
          "id": 5285,
          "imageFile": "5285.png",
          "name": "Shadow Exceed",
          "maxLevel": 10,
          "prerequisiteText": "Shadow Sense Lv. 7, Enchanting Shadow Lv. 5, and Potent Venom Lv. 3",
          "group": "Active(AP)",
          "type": "Buff",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Maximizes your abilities to increase the power of Savage Impact and Eternal Slash temporarily.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Duration: 30 seconds/ Consumed AP: 152"
            },
            {
              "level": 2,
              "text": "Duration: 60 seconds/ Consumed AP: 149"
            },
            {
              "level": 3,
              "text": "Duration: 90 seconds/ Consumed AP: 146"
            },
            {
              "level": 4,
              "text": "Duration: 120 seconds/ Consumed AP: 143"
            },
            {
              "level": 5,
              "text": "Duration: 150 seconds/ Consumed AP: 140"
            },
            {
              "level": 6,
              "text": "Duration: 180 seconds/ Consumed AP: 137"
            },
            {
              "level": 7,
              "text": "Duration: 210 seconds/ Consumed AP: 134"
            },
            {
              "level": 8,
              "text": "Duration: 240 seconds/ Consumed AP: 131"
            },
            {
              "level": 9,
              "text": "Duration: 270 seconds/ Consumed AP: 128"
            },
            {
              "level": 10,
              "text": "Duration: 300 seconds/ Consumed AP: 125"
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "0 seconds",
          "castDelay": "0 seconds",
          "cooldown": "60 seconds",
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5285.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5285",
          "tree": {
            "idx": 25,
            "row": 2,
            "col": 7,
            "columns": 9,
            "requirements": [
              {
                "id": 5288,
                "level": 7,
                "name": "Shadow Sense",
                "visible": true
              },
              {
                "id": 5290,
                "level": 3,
                "name": "Potent Venom",
                "visible": true
              },
              {
                "id": 5293,
                "level": 5,
                "name": "Enchanting Shadow",
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
                      "effect": "/ Consumed AP: 152",
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "60 seconds",
                      "effect": "/ Consumed AP: 149",
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "90 seconds",
                      "effect": "/ Consumed AP: 146",
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "120 seconds",
                      "effect": "/ Consumed AP: 143",
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "150 seconds",
                      "effect": "/ Consumed AP: 140",
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "duration": "180 seconds",
                      "effect": "/ Consumed AP: 137",
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "duration": "210 seconds",
                      "effect": "/ Consumed AP: 134",
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "duration": "240 seconds",
                      "effect": "/ Consumed AP: 131",
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "duration": "270 seconds",
                      "effect": "/ Consumed AP: 128",
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "duration": "300 seconds",
                      "effect": "/ Consumed AP: 125",
                      "sp-cost": "100"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [
            {
              "skillName": "Shadow Exceed",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/shadow-cross/rebalance_2.md",
              "section": "5.7",
              "notes": [
                "Removes 1 second delay after skill.",
                "Reduces AP consumption from 150 to 125 based on level 10.",
                "Increases duration from 240 seconds to 300 seconds based on level 10."
              ],
              "specRows": [
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
                  "after": "125",
                  "scope": "Lv 10",
                  "source": "Reduces AP consumption from 150 to 125 based on level 10."
                },
                {
                  "label": "Duration",
                  "before": "240 seconds",
                  "after": "300 seconds",
                  "scope": "Lv 10",
                  "source": "Increases duration from 240 seconds to 300 seconds based on level 10."
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
          "id": 5294,
          "imageFile": "5294.png",
          "name": "Fatal Shadow Claw",
          "maxLevel": 10,
          "prerequisiteText": "Shadow Stab Lv. 5 and Impact Crater Lv. 5",
          "group": "Active(AP)",
          "type": "Melee Physical",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Quickly approach target, cast Dark Claw on it and others around it, and Critically inflict Melee Physical damage.\nHowever, this effect follows your Dark Claw level.\nInflicts more damage to Demi-Human and Dragon monsters.\nAdditional damage increase based on the caster's Base Level and POW, and for the Critical Damage bonus option, only a fraction of the total is applied.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 1300%/ 1450% to Human/Dragon enemies\nEffective range: : 3x3 cells"
            },
            {
              "level": 2,
              "text": "ATK 2600%/ 2900% to Human/Dragon enemies\nEffective range: : 3x3 cells"
            },
            {
              "level": 3,
              "text": "ATK 3900%/ 4350% to Human/Dragon enemies\nEffective range: : 3x3 cells"
            },
            {
              "level": 4,
              "text": "ATK 5200%/ 5800% to Human/Dragon enemies\nEffective range: : 3x3 cells"
            },
            {
              "level": 5,
              "text": "ATK 6500%/ 7250% to Human/Dragon enemies\nEffective range: : 5x5 cells"
            },
            {
              "level": 6,
              "text": "ATK 7800%/ 8700% to Human/Dragon enemies\nEffective range: : 5x5 cells"
            },
            {
              "level": 7,
              "text": "ATK 9100%/ 10150% to Human/Dragon enemies\nEffective range: : 5x5 cells"
            },
            {
              "level": 8,
              "text": "ATK 10400%/ 11600% to Human/Dragon enemies\nEffective range: : 5x5 cells"
            },
            {
              "level": 9,
              "text": "ATK 11700%/ 13050% to Human/Dragon enemies\nEffective range: : 7x7 cells"
            },
            {
              "level": 10,
              "text": "ATK 13000%/ 14500% to Human/Dragon enemies\nEffective range: : 7x7 cells"
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "0.5 seconds",
          "castDelay": "0 seconds",
          "cooldown": "60 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "150"
                },
                {
                  "level": 2,
                  "value": "150"
                },
                {
                  "level": 3,
                  "value": "150"
                },
                {
                  "level": 4,
                  "value": "150"
                },
                {
                  "level": 5,
                  "value": "150"
                },
                {
                  "level": 6,
                  "value": "150"
                },
                {
                  "level": 7,
                  "value": "150"
                },
                {
                  "level": 8,
                  "value": "150"
                },
                {
                  "level": 9,
                  "value": "150"
                },
                {
                  "level": 10,
                  "value": "150"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5294.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5294",
          "tree": {
            "idx": 30,
            "row": 3,
            "col": 3,
            "columns": 9,
            "requirements": [
              {
                "id": 5291,
                "level": 5,
                "name": "Shadow Stab",
                "visible": true
              },
              {
                "id": 5292,
                "level": 5,
                "name": "Impact Crater",
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
                "value": "0.5 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "0.5 seconds"
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
                "value": "1 Target"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "base-damage-atk",
                    "label": "Base Damage (ATK)"
                  },
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
                      "base-damage-atk": "1300%",
                      "effect": "Effective range: : 3 x 3 cells",
                      "sp-cost": "150"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-atk": "2600%",
                      "effect": "Effective range: : 3 x 3 cells",
                      "sp-cost": "150"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-atk": "3900%",
                      "effect": "Effective range: : 3 x 3 cells",
                      "sp-cost": "150"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-atk": "5200%",
                      "effect": "Effective range: : 3 x 3 cells",
                      "sp-cost": "150"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-atk": "6500%",
                      "effect": "Effective range: : 5 x 5 cells",
                      "sp-cost": "150"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "base-damage-atk": "7800%",
                      "effect": "Effective range: : 5 x 5 cells",
                      "sp-cost": "150"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "base-damage-atk": "9100%",
                      "effect": "Effective range: : 5 x 5 cells",
                      "sp-cost": "150"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "base-damage-atk": "10400%",
                      "effect": "Effective range: : 5 x 5 cells",
                      "sp-cost": "150"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "base-damage-atk": "11700%",
                      "effect": "Effective range: : 7 x 7 cells",
                      "sp-cost": "150"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "base-damage-atk": "13000%",
                      "effect": "Effective range: : 7 x 7 cells",
                      "sp-cost": "150"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [
            {
              "skillName": "Fatal Shadow Claw",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/shadow-cross/rebalance_2.md",
              "section": "5.6",
              "notes": [
                "Reduces fixed casting time from 1.5 seconds to 0.5 seconds.",
                "Reduces variable casting time from 4 seconds to 0.5 seconds.",
                "Removes 0.5 seconds delay after skill.",
                "Increases damage from 6500%/9500%(demihuman and dragon race)Atk to 13000%/14500%(demihuman and dragon race)Atk based on level 10."
              ],
              "specRows": [
                {
                  "label": "Fixed Casting Time",
                  "before": "1.5 seconds",
                  "after": "0.5 seconds",
                  "scope": "",
                  "source": "Reduces fixed casting time from 1.5 seconds to 0.5 seconds."
                },
                {
                  "label": "Variable Casting Time",
                  "before": "4 seconds",
                  "after": "0.5 seconds",
                  "scope": "",
                  "source": "Reduces variable casting time from 4 seconds to 0.5 seconds."
                },
                {
                  "label": "Cast Delay",
                  "before": "0.5 seconds delay",
                  "after": "Removed",
                  "scope": "",
                  "source": "Removes 0.5 seconds delay after skill."
                },
                {
                  "label": "Damage",
                  "before": "6500%/9500%(demihuman and dragon race)Atk",
                  "after": "13000%/14500%(demihuman and dragon race)Atk",
                  "scope": "Lv 10",
                  "source": "Increases damage from 6500%/9500%(demihuman and dragon race)Atk to 13000%/14500%(demihuman and dragon race)Atk based on level 10."
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
      "label": "Glt. Cross",
      "pointLimit": 69,
      "tree": {
        "columns": 9,
        "rows": 5
      },
      "skills": [
        {
          "id": 2022,
          "imageFile": "2022.png",
          "name": "Cross Impact",
          "maxLevel": 5,
          "prerequisiteText": "Sonic Blow 10",
          "group": "Active / Damage",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Leaps to a target and deals melee physical damage.\nOnly the half of critical chance applies, damage increases based on BaseLv.\nOnly the half of Critical Damage option applies. Range 7Cell.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Damage 1550%"
            },
            {
              "level": 2,
              "text": "Damage 1700%"
            },
            {
              "level": 3,
              "text": "Damage 1850%"
            },
            {
              "level": 4,
              "text": "Damage 2000%"
            },
            {
              "level": 5,
              "text": "Damage 2150%"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "cooldown": "0.35 seconds",
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2022.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2022",
          "tree": {
            "idx": 0,
            "row": 0,
            "col": 0,
            "columns": 9,
            "requirements": [
              {
                "id": 136,
                "level": 10,
                "name": "Sonic Blow",
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
                "value": "0 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0.35 seconds"
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
                      "effect": "Damage 1550%",
                      "sp-cost": "40",
                      "range": "3 cells"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Damage 1700%",
                      "sp-cost": "40",
                      "range": "3 cells"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Damage 1850%",
                      "sp-cost": "40",
                      "range": "3 cells"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Damage 2000%",
                      "sp-cost": "40",
                      "range": "3 cells"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Damage 2150%",
                      "sp-cost": "40",
                      "range": "3 cells"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2033,
          "imageFile": "2033.png",
          "name": "Cloaking Exceed",
          "maxLevel": 5,
          "prerequisiteText": "Cloaking 3",
          "group": "Active / Special",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Cannot be found by Insect and\nDemon type monsters. Not released until the\ncaster is hit 3 times. Increase Movement\nSpeed according to Skill Level.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Consume SP 9 per sec. / Movement\nSpeed 100% / Endure the damage once"
            },
            {
              "level": 2,
              "text": "Consume SP 8 per sec. / Movement\nSpeed 110% / Endure the damage once"
            },
            {
              "level": 3,
              "text": "Consume SP 7 per sec. / Movement\nSpeed 120% / Endure the damage twice"
            },
            {
              "level": 4,
              "text": "Consume SP 6 per sec. / Movement\nSpeed 130% / Endure the damage twice"
            },
            {
              "level": 5,
              "text": "Consume SP 5 per sec. / Movement\nSpeed 140% / Endure the damage three times"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "2 seconds",
          "cooldown": "0 seconds",
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
                  "value": "45"
                },
                {
                  "level": 3,
                  "value": "45"
                },
                {
                  "level": 4,
                  "value": "45"
                },
                {
                  "level": 5,
                  "value": "45"
                }
              ]
            },
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "9"
                },
                {
                  "level": 2,
                  "value": "8"
                },
                {
                  "level": 3,
                  "value": "7"
                },
                {
                  "level": 4,
                  "value": "6"
                },
                {
                  "level": 5,
                  "value": "5"
                }
              ]
            },
            {
              "label": "Damage",
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
              "label": "Speed (cells/sec)",
              "values": [
                {
                  "level": 1,
                  "value": "0"
                },
                {
                  "level": 2,
                  "value": "10"
                },
                {
                  "level": 3,
                  "value": "20"
                },
                {
                  "level": 4,
                  "value": "30"
                },
                {
                  "level": 5,
                  "value": "40"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2033.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2033",
          "tree": {
            "idx": 1,
            "row": 0,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 135,
                "level": 3,
                "name": "Cloaking",
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
                "label": "Fixed Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "2 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0 seconds"
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
                    "id": "damage",
                    "label": "Damage"
                  },
                  {
                    "id": "speed-cells-sec",
                    "label": "Speed (cells/sec)"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Consume SP 9 per sec. / Movement\nSpeed 100% / Endure the damage once",
                      "sp-cost": "45\n9",
                      "damage": "1",
                      "speed-cells-sec": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Consume SP 8 per sec. / Movement\nSpeed 110% / Endure the damage once",
                      "sp-cost": "45\n8",
                      "damage": "1",
                      "speed-cells-sec": "10"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Consume SP 7 per sec. / Movement\nSpeed 120% / Endure the damage twice",
                      "sp-cost": "45\n7",
                      "damage": "2",
                      "speed-cells-sec": "20"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Consume SP 6 per sec. / Movement\nSpeed 130% / Endure the damage twice",
                      "sp-cost": "45\n6",
                      "damage": "2",
                      "speed-cells-sec": "30"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Consume SP 5 per sec. / Movement\nSpeed 140% / Endure the damage three times",
                      "sp-cost": "45\n5",
                      "damage": "3",
                      "speed-cells-sec": "40"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2036,
          "imageFile": "2036.png",
          "name": "Rolling Cutter",
          "maxLevel": 5,
          "prerequisiteText": "Sonic Blow 10",
          "group": "Active / Damage",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Katar Weapon Skill, spins and inflicts damage to all enemies around.\nSpin Count increases as using the skill, and damage of Cross Ripper Slasher increases based on Spin Counts.\nSpin Counter continues for 10 sec, and the effect is removed when you move.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Damage 130% / Area of Effect 3 x 3"
            },
            {
              "level": 2,
              "text": "Damage 210% / Area of Effect 3 x 3"
            },
            {
              "level": 3,
              "text": "Damage 290% / Area of Effect 5 x 5"
            },
            {
              "level": 4,
              "text": "Damage 370% / Area of Effect 5 x 5"
            },
            {
              "level": 5,
              "text": "Damage 450% / Area of Effect 7 x 7"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0.2 seconds",
          "cooldown": "0 seconds",
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
              "label": "Atk %",
              "values": [
                {
                  "level": 1,
                  "value": "120"
                },
                {
                  "level": 2,
                  "value": "140"
                },
                {
                  "level": 3,
                  "value": "160"
                },
                {
                  "level": 4,
                  "value": "180"
                },
                {
                  "level": 5,
                  "value": "200"
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
                  "value": "2"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2036.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2036",
          "tree": {
            "idx": 2,
            "row": 0,
            "col": 2,
            "columns": 9,
            "requirements": [
              {
                "id": 136,
                "level": 10,
                "name": "Sonic Blow",
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
                "value": "0 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.2 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0 seconds"
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
                    "label": "Atk %"
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
                      "effect": "Damage 130% / Area of Effect 3 x 3",
                      "sp-cost": "5",
                      "atk": "120",
                      "data-1": "1"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Damage 210% / Area of Effect 3 x 3",
                      "sp-cost": "5",
                      "atk": "140",
                      "data-1": "1"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Damage 290% / Area of Effect 5 x 5",
                      "sp-cost": "5",
                      "atk": "160",
                      "data-1": "1"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Damage 370% / Area of Effect 5 x 5",
                      "sp-cost": "5",
                      "atk": "180",
                      "data-1": "1"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Damage 450% / Area of Effect 7 x 7",
                      "sp-cost": "5",
                      "atk": "200",
                      "data-1": "2"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2028,
          "imageFile": "2028.png",
          "name": "Weapon Blocking",
          "maxLevel": 5,
          "prerequisiteText": "Lefthand Mastery 5",
          "group": "Active / Buff",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Has a chance to cancel an enemy's\nmelee physical attack and can use Weapon Crush when skill is active.\nWhen attack block success, get into the counter stance for 10 secods.\nDuring the counter stance, you can use Counter Slash.\nContinuously consumes SP while\nthis skill is activated. If skill is recast,\nWeapon Blocking is canceled.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Defense Rate 12% / Duration 180 sec"
            },
            {
              "level": 2,
              "text": "Defense Rate 14% / Duration 180 sec"
            },
            {
              "level": 3,
              "text": "Defense Rate 16% / Duration 180 sec"
            },
            {
              "level": 4,
              "text": "Defense Rate 18% / Duration 180 sec"
            },
            {
              "level": 5,
              "text": "Defense Rate 20% / Duration 180 sec"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "2 seconds",
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
                  "value": "36"
                },
                {
                  "level": 3,
                  "value": "32"
                },
                {
                  "level": 4,
                  "value": "28"
                },
                {
                  "level": 5,
                  "value": "24"
                }
              ]
            },
            {
              "label": "Def",
              "values": [
                {
                  "level": 1,
                  "value": "12%"
                },
                {
                  "level": 2,
                  "value": "14%"
                },
                {
                  "level": 3,
                  "value": "16%"
                },
                {
                  "level": 4,
                  "value": "18%"
                },
                {
                  "level": 5,
                  "value": "20%"
                }
              ]
            },
            {
              "label": "Duration",
              "values": [
                {
                  "level": 1,
                  "value": "3 min"
                },
                {
                  "level": 2,
                  "value": "3 min"
                },
                {
                  "level": 3,
                  "value": "3 min"
                },
                {
                  "level": 4,
                  "value": "3 min"
                },
                {
                  "level": 5,
                  "value": "3 min"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2028.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2028",
          "tree": {
            "idx": 3,
            "row": 0,
            "col": 3,
            "columns": 9,
            "requirements": [
              {
                "id": 133,
                "level": 5,
                "name": "Lefthand Mastery",
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
                "label": "Fixed Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "2 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0 seconds"
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
                    "id": "def",
                    "label": "Def"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Defense Rate 12% / Duration 180 sec",
                      "sp-cost": "40",
                      "def": "12%",
                      "duration": "3 min"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Defense Rate 14% / Duration 180 sec",
                      "sp-cost": "36",
                      "def": "14%",
                      "duration": "3 min"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Defense Rate 16% / Duration 180 sec",
                      "sp-cost": "32",
                      "def": "16%",
                      "duration": "3 min"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Defense Rate 18% / Duration 180 sec",
                      "sp-cost": "28",
                      "def": "18%",
                      "duration": "3 min"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Defense Rate 20% / Duration 180 sec",
                      "sp-cost": "24",
                      "def": "20%",
                      "duration": "3 min"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2021,
          "imageFile": "2021.png",
          "name": "Venom Impression",
          "maxLevel": 5,
          "prerequisiteText": "Enchant Poison 3",
          "group": "Active / Debuff",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Weaken the enemy's resistance\nagainst Venom type attacks in a 10x10 range.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Weaken venom resistance by 10%"
            },
            {
              "level": 2,
              "text": "Weaken venom resistance by 20%"
            },
            {
              "level": 3,
              "text": "Weaken venom resistance by 30%"
            },
            {
              "level": 4,
              "text": "Weaken venom resistance by 40%"
            },
            {
              "level": 5,
              "text": "Weaken venom resistance by 50%"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
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
                  "value": "16"
                },
                {
                  "level": 3,
                  "value": "20"
                },
                {
                  "level": 4,
                  "value": "24"
                },
                {
                  "level": 5,
                  "value": "28"
                }
              ]
            },
            {
              "label": "Range",
              "values": [
                {
                  "level": 1,
                  "value": "10 cells"
                },
                {
                  "level": 2,
                  "value": "10 cells"
                },
                {
                  "level": 3,
                  "value": "10 cells"
                },
                {
                  "level": 4,
                  "value": "10 cells"
                },
                {
                  "level": 5,
                  "value": "10 cells"
                }
              ]
            },
            {
              "label": "Amount",
              "values": [
                {
                  "level": 1,
                  "value": "10%"
                },
                {
                  "level": 2,
                  "value": "20%"
                },
                {
                  "level": 3,
                  "value": "30%"
                },
                {
                  "level": 4,
                  "value": "40%"
                },
                {
                  "level": 5,
                  "value": "50%"
                }
              ]
            },
            {
              "label": "Duration",
              "values": [
                {
                  "level": 1,
                  "value": "10 sec"
                },
                {
                  "level": 2,
                  "value": "20 sec"
                },
                {
                  "level": 3,
                  "value": "30 sec"
                },
                {
                  "level": 4,
                  "value": "40 sec"
                },
                {
                  "level": 5,
                  "value": "50 sec"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2021.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2021",
          "tree": {
            "idx": 4,
            "row": 0,
            "col": 4,
            "columns": 9,
            "requirements": []
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Debuff Skill"
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
                "label": "Cooldown",
                "value": "0 seconds"
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
                    "id": "amount",
                    "label": "Amount"
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
                      "effect": "Weaken venom resistance by 10%",
                      "sp-cost": "12",
                      "range": "10 cells",
                      "amount": "10%",
                      "duration": "10 sec"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Weaken venom resistance by 20%",
                      "sp-cost": "16",
                      "range": "10 cells",
                      "amount": "20%",
                      "duration": "20 sec"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Weaken venom resistance by 30%",
                      "sp-cost": "20",
                      "range": "10 cells",
                      "amount": "30%",
                      "duration": "30 sec"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Weaken venom resistance by 40%",
                      "sp-cost": "24",
                      "range": "10 cells",
                      "amount": "40%",
                      "duration": "40 sec"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Weaken venom resistance by 50%",
                      "sp-cost": "28",
                      "range": "10 cells",
                      "amount": "50%",
                      "duration": "50 sec"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2024,
          "imageFile": "2024.png",
          "name": "New Poison Research",
          "maxLevel": 10,
          "prerequisiteText": "Guillotine Cross Base Skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Learns to create a new poison. Depending on the skill level, the number of poisons and manufacturing that can be made increases, and the probability of success rate increases.\nRequires a medicine bowl and a poison kit, and each poison must have the necessary materials.\nAdditionally, the lethal poison grant time is increased by 15 seconds per level from 45 sec",
          "levelDetails": [
            {
              "level": 1,
              "text": "Chance to success 35% / Paralysis : 20 Poisonous Toad Skin, 1 Poison herb Amoena"
            },
            {
              "level": 2,
              "text": "Chance to success 40% / Pyrexia: 20 Anolian Skin,1 Poison Herb Rantana"
            },
            {
              "level": 3,
              "text": "Chance to success 45% / Death Hurt: 25 Decayed Nail, 1 Poison Herb Seratum"
            },
            {
              "level": 4,
              "text": "Chance to success 50% / Leech End: 1 Poison Herb Scopolia, 1 Poison Herb Nerium"
            },
            {
              "level": 5,
              "text": "Chance to success 55% / Antidote: 2 Green Herb, 1 Blue Herb, 1 White Herb"
            },
            {
              "level": 6,
              "text": "Chance to success 60% / Venom Bleed: 10 Sticky Poison, 1 Izidor"
            },
            {
              "level": 7,
              "text": "Chance to success 65% / Magic Mushroom: 10 Poison Spore, 1 Poison herb Makulata"
            },
            {
              "level": 8,
              "text": "Chance to success 70% / Toxin: 10 Sticky Poison, 1 Poison Herb Nerium"
            },
            {
              "level": 9,
              "text": "Chance to success 75% / Oblivion Curse: 10 Mermaid's Heart, 1 Izidor"
            },
            {
              "level": 10,
              "text": "Chance to success 80% / -"
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
          "iconUrl": "assets/divine-pride/skills/2024.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2024",
          "tree": {
            "idx": 5,
            "row": 0,
            "col": 5,
            "columns": 9,
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
                    "id": "effect",
                    "label": "Effect"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Chance to success 35% / Paralysis : 20 Poisonous Toad Skin, 1 Poison herb Amoena",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Chance to success 40% / Pyre x ia: 20 Anolian Skin,1 Poison Herb Rantana",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Chance to success 45% / Death Hurt: 25 Decayed Nail, 1 Poison Herb Seratum",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Chance to success 50% / Leech End: 1 Poison Herb Scopolia, 1 Poison Herb Nerium",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Chance to success 55% / Antidote: 2 Green Herb, 1 Blue Herb, 1 White Herb",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "Chance to success 60% / Venom Bleed: 10 Sticky Poison, 1 Izidor",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "Chance to success 65% / Magic Mushroom: 10 Poison Spore, 1 Poison herb Makulata",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "Chance to success 70% / To x in: 10 Sticky Poison, 1 Poison Herb Nerium",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "Chance to success 75% / Oblivion Curse: 10 Mermaid's Heart, 1 Izidor",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "Chance to success 80% / -",
                      "sp-cost": "0"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2023,
          "imageFile": "2023.png",
          "name": "Dark Illusion",
          "maxLevel": 5,
          "prerequisiteText": "Cross Impact 3",
          "group": "Active / Damage - Special",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Quickly reach and attack an enemy. Has a low chance of activating Cross Impact.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Damage 100% / 5 cell range"
            },
            {
              "level": 2,
              "text": "Damage 100% / 6 cell range"
            },
            {
              "level": 3,
              "text": "Damage 100% / 7 cell range"
            },
            {
              "level": 4,
              "text": "Damage 100% / 8 cell range"
            },
            {
              "level": 5,
              "text": "Damage 100% / 9 cell range"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "1.5 seconds",
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
              "label": "Range",
              "values": [
                {
                  "level": 1,
                  "value": "5 cells"
                },
                {
                  "level": 2,
                  "value": "6 cells"
                },
                {
                  "level": 3,
                  "value": "7 cells"
                },
                {
                  "level": 4,
                  "value": "8 cells"
                },
                {
                  "level": 5,
                  "value": "9 cells"
                }
              ]
            },
            {
              "label": "Chance",
              "values": [
                {
                  "level": 1,
                  "value": "4%"
                },
                {
                  "level": 2,
                  "value": "8%"
                },
                {
                  "level": 3,
                  "value": "12%"
                },
                {
                  "level": 4,
                  "value": "16%"
                },
                {
                  "level": 5,
                  "value": "20%"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2023.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2023",
          "tree": {
            "idx": 7,
            "row": 0,
            "col": 7,
            "columns": 9,
            "requirements": [
              {
                "id": 2022,
                "level": 3,
                "name": "Cross Impact",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Damage - Special Skill"
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
                "value": "1.5 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0 seconds"
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
                    "id": "chance",
                    "label": "Chance"
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
                      "effect": "Damage 100% / 5 cells range",
                      "sp-cost": "40",
                      "range": "5 cells",
                      "chance": "4%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Damage 100% / 6 cells range",
                      "sp-cost": "40",
                      "range": "6 cells",
                      "chance": "8%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Damage 100% / 7 cells range",
                      "sp-cost": "40",
                      "range": "7 cells",
                      "chance": "12%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Damage 100% / 8 cells range",
                      "sp-cost": "40",
                      "range": "8 cells",
                      "chance": "16%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Damage 100% / 9 cells range",
                      "sp-cost": "40",
                      "range": "9 cells",
                      "chance": "20%"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2037,
          "imageFile": "2037.png",
          "name": "Cross Ripper Slasher",
          "maxLevel": 5,
          "prerequisiteText": "Rolling Cutter 1",
          "group": "Active / Damage",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Can be used when player has Spin Counts.\nInflicts a strong damage to a target far away.\nDamage increases based on BaseLv, AGI, and number of Spin Counts.\nSkill range increases 1 cell per skill level, starting from 9 cell.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Damage 80%+Spin Count%"
            },
            {
              "level": 2,
              "text": "Damage160%+Spin Count%"
            },
            {
              "level": 3,
              "text": "Damage240%+Spin Count%"
            },
            {
              "level": 4,
              "text": "Damage320%+Spin Count%"
            },
            {
              "level": 5,
              "text": "Damage400%+Spin Count%"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "cooldown": "0.2 seconds",
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
              "label": "Range",
              "values": [
                {
                  "level": 1,
                  "value": "9 cells"
                },
                {
                  "level": 2,
                  "value": "10 cells"
                },
                {
                  "level": 3,
                  "value": "11 cells"
                },
                {
                  "level": 4,
                  "value": "12 cells"
                },
                {
                  "level": 5,
                  "value": "13 cells"
                }
              ]
            },
            {
              "label": "Atk %",
              "values": [
                {
                  "level": 1,
                  "value": "200"
                },
                {
                  "level": 2,
                  "value": "240"
                },
                {
                  "level": 3,
                  "value": "280"
                },
                {
                  "level": 4,
                  "value": "320"
                },
                {
                  "level": 5,
                  "value": "360"
                }
              ]
            },
            {
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "100"
                },
                {
                  "level": 2,
                  "value": "200"
                },
                {
                  "level": 3,
                  "value": "300"
                },
                {
                  "level": 4,
                  "value": "400"
                },
                {
                  "level": 5,
                  "value": "500"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2037.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2037",
          "tree": {
            "idx": 9,
            "row": 1,
            "col": 0,
            "columns": 9,
            "requirements": [
              {
                "id": 2036,
                "level": 1,
                "name": "Rolling Cutter",
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
                "label": "Fixed Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0.2 seconds"
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
                    "label": "Atk %"
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
                      "effect": "Damage 80%+Spin Count%",
                      "sp-cost": "20",
                      "range": "9 cells",
                      "atk": "200",
                      "data-1": "100"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Damage160%+Spin Count%",
                      "sp-cost": "24",
                      "range": "10 cells",
                      "atk": "240",
                      "data-1": "200"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Damage240%+Spin Count%",
                      "sp-cost": "28",
                      "range": "11 cells",
                      "atk": "280",
                      "data-1": "300"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Damage320%+Spin Count%",
                      "sp-cost": "32",
                      "range": "12 cells",
                      "atk": "320",
                      "data-1": "400"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Damage400%+Spin Count%",
                      "sp-cost": "36",
                      "range": "13 cells",
                      "atk": "360",
                      "data-1": "500"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2030,
          "imageFile": "2030.png",
          "name": "Weapon Crush",
          "maxLevel": 5,
          "prerequisiteText": "Weapon Blocking 1",
          "group": "Active / Debuff",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "If Weapon Blocking skill\nis successful, you can attack the enemy\nsuccessively with Weapon Crush. Able to\ndivest the target's weapon. Increases the\nduration and success rate according to the\ncaster's Skill Level.",
          "levelDetails": [],
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
                  "value": "20"
                },
                {
                  "level": 2,
                  "value": "20"
                },
                {
                  "level": 3,
                  "value": "20"
                },
                {
                  "level": 4,
                  "value": "20"
                },
                {
                  "level": 5,
                  "value": "20"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2030.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2030",
          "tree": {
            "idx": 10,
            "row": 1,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 2028,
                "level": 1,
                "name": "Weapon Blocking",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Debuff Skill"
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
                "value": "1 second"
              },
              {
                "label": "Cooldown",
                "value": "0 seconds"
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
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "20"
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
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2029,
          "imageFile": "2029.png",
          "name": "Counter Slash",
          "maxLevel": 10,
          "prerequisiteText": "Weapon Blocking 1",
          "group": "Active / Damage",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Can be used while in Counter by Weapon Blocking. Deals damage to enemies around.\nDamage ignores targets' physical defense, and damage ignorance increases based on BaseLv, JobLv and AGI.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Damage 450% / Area of Effect 3 x 3"
            },
            {
              "level": 2,
              "text": "Damage 600% / Area of Effect 3 x 3"
            },
            {
              "level": 3,
              "text": "Damage 750% / Area of Effect 3 x 3"
            },
            {
              "level": 4,
              "text": "Damage 900% / Area of Effect 3 x 3"
            },
            {
              "level": 5,
              "text": "Damage 1050% / Area of Effect 3 x 3"
            },
            {
              "level": 6,
              "text": "Damage 1200% / Area of Effect 5 x 5"
            },
            {
              "level": 7,
              "text": "Damage 1350% / Area of Effect 5 x 5"
            },
            {
              "level": 8,
              "text": "Damage 1500% / Area of Effect 5 x 5"
            },
            {
              "level": 9,
              "text": "Damage 1650% / Area of Effect 5 x 5"
            },
            {
              "level": 10,
              "text": "Damage 1800% / Area of Effect 5 x 5"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "cooldown": "0 seconds",
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
                  "value": "8"
                },
                {
                  "level": 3,
                  "value": "11"
                },
                {
                  "level": 4,
                  "value": "14"
                },
                {
                  "level": 5,
                  "value": "17"
                },
                {
                  "level": 6,
                  "value": "19"
                },
                {
                  "level": 7,
                  "value": "21"
                },
                {
                  "level": 8,
                  "value": "23"
                },
                {
                  "level": 9,
                  "value": "25"
                },
                {
                  "level": 10,
                  "value": "27"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2029.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2029",
          "tree": {
            "idx": 11,
            "row": 1,
            "col": 2,
            "columns": 9,
            "requirements": [
              {
                "id": 2028,
                "level": 1,
                "name": "Weapon Blocking",
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
                "label": "Fixed Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0 seconds"
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
                      "effect": "Damage 450% / Area of Effect 3 x 3",
                      "sp-cost": "5"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Damage 600% / Area of Effect 3 x 3",
                      "sp-cost": "8"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Damage 750% / Area of Effect 3 x 3",
                      "sp-cost": "11"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Damage 900% / Area of Effect 3 x 3",
                      "sp-cost": "14"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Damage 1050% / Area of Effect 3 x 3",
                      "sp-cost": "17"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "Damage 1200% / Area of Effect 5 x 5",
                      "sp-cost": "19"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "Damage 1350% / Area of Effect 5 x 5",
                      "sp-cost": "21"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "Damage 1500% / Area of Effect 5 x 5",
                      "sp-cost": "23"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "Damage 1650% / Area of Effect 5 x 5",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "Damage 1800% / Area of Effect 5 x 5",
                      "sp-cost": "27"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2025,
          "imageFile": "2025.png",
          "name": "New Poison Creation",
          "maxLevel": 1,
          "prerequisiteText": "New Poison Research 1",
          "group": "Active",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Create new poison from\nthe list of possible poisons shown according\nto the level of New Poison Research and the\nmaterials you have.",
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
                  "value": "10"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2025.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2025",
          "tree": {
            "idx": 12,
            "row": 1,
            "col": 3,
            "columns": 9,
            "requirements": [
              {
                "id": 2024,
                "level": 1,
                "name": "New Poison Research",
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
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2026,
          "imageFile": "2026.png",
          "name": "Antidote",
          "maxLevel": 1,
          "prerequisiteText": "New Poison Research 5",
          "group": "Active / Detoxification",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Can detoxify Guillotine Cross's\npoison status and 1 target consuming 1 Antidote.",
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
            },
            {
              "label": "Range",
              "values": [
                {
                  "level": 1,
                  "value": "5 cells"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2026.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2026",
          "tree": {
            "idx": 13,
            "row": 1,
            "col": 4,
            "columns": 9,
            "requirements": [
              {
                "id": 2024,
                "level": 5,
                "name": "New Poison Research",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Detoxification Skill"
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
                      "range": "5 cells"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 5001,
          "imageFile": "5001.png",
          "name": "Dark Claw",
          "maxLevel": 5,
          "prerequisiteText": "Dark Illusion 5",
          "group": "Active / Damage(Debuff)",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Inflicts a wound that deals melee physical damge, and removes target's damage reflection effect.\nWound continues for 20 sec, and target cannot use damage reflection effect, receives more damage from melee physical attack.\nOnly the half of damage amplification applies to Boss monsters.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Damage 100%/Wound damage 1.3X"
            },
            {
              "level": 2,
              "text": "Damage 200%/Wound Damage 1.6X"
            },
            {
              "level": 3,
              "text": "Damage 300%/Wound Damage 1.9X"
            },
            {
              "level": 4,
              "text": "Damage 400%/Wound Damage 2.2X"
            },
            {
              "level": 5,
              "text": "Damage 500%/Wound Damage 2.5X"
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
                  "value": "22"
                },
                {
                  "level": 2,
                  "value": "34"
                },
                {
                  "level": 3,
                  "value": "46"
                },
                {
                  "level": 4,
                  "value": "58"
                },
                {
                  "level": 5,
                  "value": "70"
                }
              ]
            },
            {
              "label": "Atk %",
              "values": [
                {
                  "level": 1,
                  "value": "100"
                },
                {
                  "level": 2,
                  "value": "200"
                },
                {
                  "level": 3,
                  "value": "300"
                },
                {
                  "level": 4,
                  "value": "400"
                },
                {
                  "level": 5,
                  "value": "500"
                }
              ]
            },
            {
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "130"
                },
                {
                  "level": 2,
                  "value": "160"
                },
                {
                  "level": 3,
                  "value": "190"
                },
                {
                  "level": 4,
                  "value": "220"
                },
                {
                  "level": 5,
                  "value": "250"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5001.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5001",
          "tree": {
            "idx": 14,
            "row": 1,
            "col": 5,
            "columns": 9,
            "requirements": [
              {
                "id": 2023,
                "level": 5,
                "name": "Dark Illusion",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Damage(Debuff) Skill"
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
                "value": "60 seconds"
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
                    "label": "Atk %"
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
                      "effect": "Damage 100%/Wound damage 1.3 x",
                      "sp-cost": "22",
                      "atk": "100",
                      "data-1": "130"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Damage 200%/Wound Damage 1.6 x",
                      "sp-cost": "34",
                      "atk": "200",
                      "data-1": "160"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Damage 300%/Wound Damage 1.9 x",
                      "sp-cost": "46",
                      "atk": "300",
                      "data-1": "190"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Damage 400%/Wound Damage 2.2 x",
                      "sp-cost": "58",
                      "atk": "400",
                      "data-1": "220"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Damage 500%/Wound Damage 2.5 x",
                      "sp-cost": "70",
                      "atk": "500",
                      "data-1": "250"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2034,
          "imageFile": "2034.png",
          "name": "Phantom Menace",
          "maxLevel": 1,
          "prerequisiteText": "Dark Illusion 5,",
          "group": "Active / Detecting",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Guillotine Cross attacks all\nhidden enemies within a 7x7 range for 300%\ndamage. The enemies hit by this can be seen.",
          "levelDetails": [],
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
                }
              ]
            },
            {
              "label": "Atk %",
              "values": [
                {
                  "level": 1,
                  "value": "300"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2034.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2034",
          "tree": {
            "idx": 15,
            "row": 1,
            "col": 6,
            "columns": 9,
            "requirements": [
              {
                "id": 2023,
                "level": 5,
                "name": "Dark Illusion",
                "visible": true
              },
              {
                "id": 2033,
                "level": 5,
                "name": "Cloaking Exceed",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Detecting Skill"
              },
              {
                "label": "Levels",
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
                "value": "1 second"
              },
              {
                "label": "Cooldown",
                "value": "0 seconds"
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
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "30",
                      "atk": "300"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2027,
          "imageFile": "2027.png",
          "name": "Poisonous Weapon",
          "maxLevel": 5,
          "prerequisiteText": "Research New Poison 1",
          "group": "Active / Buff",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Make the caster's weapon coated by Guillotine Cross's new poison. During duration, caster's melee physical damage increases, provides special effect based on what's coated.\nHas a change to poison the target by attacking.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Chance 4% / Duration 60 sec"
            },
            {
              "level": 2,
              "text": "Chance 6% / Duration 120 sec"
            },
            {
              "level": 3,
              "text": "Chance 8% / Duration 180 sec"
            },
            {
              "level": 4,
              "text": "Chance 10% / Duration 240 sec"
            },
            {
              "level": 5,
              "text": "Chance 12% / Duration 300 sec\n[Paralysis] : Increase movement speed\n[Pyrexia] : Increase critical damage, increase base physical damage\n[Death Hurt] : Recovers MaxHP 1% per 1 sec\n[Leech End] : Increase resistance to dark and stun status by 100%\n[Venom Bleed] : Reduce melee reflection damage by 30%\n[Magic Mushroom] : Reduce delay after skill by 10%\n[Toxin] : Recovers MaxSP 1% per 1 sec\n[Oblivion Curse] : Increase resistance to silence and curse by 100%"
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
              "label": "Chance",
              "values": [
                {
                  "level": 1,
                  "value": "4%"
                },
                {
                  "level": 2,
                  "value": "6%"
                },
                {
                  "level": 3,
                  "value": "8%"
                },
                {
                  "level": 4,
                  "value": "10%"
                },
                {
                  "level": 5,
                  "value": "12%"
                }
              ]
            },
            {
              "label": "Duration",
              "values": [
                {
                  "level": 1,
                  "value": "1 min"
                },
                {
                  "level": 2,
                  "value": "2 min"
                },
                {
                  "level": 3,
                  "value": "3 min"
                },
                {
                  "level": 4,
                  "value": "4 min"
                },
                {
                  "level": 5,
                  "value": "5 min"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2027.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2027",
          "tree": {
            "idx": 19,
            "row": 2,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 2025,
                "level": 1,
                "name": "New Poison Creation",
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
                    "id": "chance",
                    "label": "Chance"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Chance 4% / Duration 60 sec",
                      "sp-cost": "20",
                      "chance": "4%",
                      "duration": "1 min"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Chance 6% / Duration 120 sec",
                      "sp-cost": "24",
                      "chance": "6%",
                      "duration": "2 min"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Chance 8% / Duration 180 sec",
                      "sp-cost": "28",
                      "chance": "8%",
                      "duration": "3 min"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Chance 10% / Duration 240 sec",
                      "sp-cost": "32",
                      "chance": "10%",
                      "duration": "4 min"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Chance 12% / Duration 300 sec\n[Paralysis] : Increase movement speed\n[Pyre x ia] : Increase critical damage, increase base physical damage\n[Death Hurt] : Recovers Ma x HP 1% per 1 sec\n[Leech End] : Increase resistance to dark and stun status by 100%\n[Venom Bleed] : Reduce melee reflection damage by 30%\n[Magic Mushroom] : Reduce delay after skill by 10%\n[To x in] : Recovers Ma x SP 1% per 1 sec\n[Oblivion Curse] : Increase resistance to silence and curse by 100%",
                      "sp-cost": "36",
                      "chance": "12%",
                      "duration": "5 min"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2035,
          "imageFile": "2035.png",
          "name": "Hallucination Walk",
          "maxLevel": 5,
          "prerequisiteText": "Phantom Menace 1",
          "group": "Active / Buff",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Increase the caster's speed to the Maximum, increases Flee rate and certain chance to ignore MATK. Consumes HP when casting, decreases Movement Speed and ASPD by half for 25 secondsafter using the skill.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Flee Rate +50 / ignore MATK +10%"
            },
            {
              "level": 2,
              "text": "Flee Rate +100 / ignore MATK +20%"
            },
            {
              "level": 3,
              "text": "Flee Rate +150 / ignore MATK +30%"
            },
            {
              "level": 4,
              "text": "Flee Rate +200 / ignore MATK +40%"
            },
            {
              "level": 5,
              "text": "Flee Rate +250 / ignore MATK +50%"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0 seconds",
          "cooldown": "300 seconds",
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
                  "value": "20"
                },
                {
                  "level": 3,
                  "value": "30"
                },
                {
                  "level": 4,
                  "value": "40"
                },
                {
                  "level": 5,
                  "value": "50"
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
                  "value": "35000"
                },
                {
                  "level": 3,
                  "value": "40000"
                },
                {
                  "level": 4,
                  "value": "45000"
                },
                {
                  "level": 5,
                  "value": "50000"
                }
              ]
            },
            {
              "label": "Data 4",
              "values": [
                {
                  "level": 1,
                  "value": "16"
                },
                {
                  "level": 2,
                  "value": "14"
                },
                {
                  "level": 3,
                  "value": "12"
                },
                {
                  "level": 4,
                  "value": "10"
                },
                {
                  "level": 5,
                  "value": "8"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2035.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2035",
          "tree": {
            "idx": 22,
            "row": 2,
            "col": 4,
            "columns": 9,
            "requirements": [
              {
                "id": 2034,
                "level": 1,
                "name": "Phantom Menace",
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
                "value": "300 seconds"
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
                  },
                  {
                    "id": "flee-rate-100-ignore-matk",
                    "label": "Flee Rate +100 / Ignore Matk"
                  },
                  {
                    "id": "flee-rate-150-ignore-matk",
                    "label": "Flee Rate +150 / Ignore Matk"
                  },
                  {
                    "id": "flee-rate-200-ignore-matk",
                    "label": "Flee Rate +200 / Ignore Matk"
                  },
                  {
                    "id": "flee-rate-250-ignore-matk",
                    "label": "Flee Rate +250 / Ignore Matk"
                  },
                  {
                    "id": "flee-rate-50-ignore-matk",
                    "label": "Flee Rate +50 / Ignore Matk"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "flee-rate-50-ignore-matk": "+10%",
                      "sp-cost": "100",
                      "data-1": "50",
                      "data-2": "10",
                      "data-3": "30000",
                      "data-4": "16"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "flee-rate-100-ignore-matk": "+20%",
                      "sp-cost": "100",
                      "data-1": "100",
                      "data-2": "20",
                      "data-3": "35000",
                      "data-4": "14"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "flee-rate-150-ignore-matk": "+30%",
                      "sp-cost": "100",
                      "data-1": "150",
                      "data-2": "30",
                      "data-3": "40000",
                      "data-4": "12"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "flee-rate-200-ignore-matk": "+40%",
                      "sp-cost": "100",
                      "data-1": "200",
                      "data-2": "40",
                      "data-3": "45000",
                      "data-4": "10"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "flee-rate-250-ignore-matk": "+50%",
                      "sp-cost": "100",
                      "data-1": "250",
                      "data-2": "50",
                      "data-3": "50000",
                      "data-4": "8"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2031,
          "imageFile": "2031.png",
          "name": "Venom Pressure",
          "maxLevel": 5,
          "prerequisiteText": "Weapon Blocking 1,",
          "group": "Active / Buff",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Gives damage to the enemy nearby\nand poisons the enemy with the poisoned\nweapon. After casting the skill, the effect\nof Poisoning Weapon is canceled.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Poisoning Rate 75% / Accuracy +14"
            },
            {
              "level": 2,
              "text": "Poisoning Rate 80% / Accuracy +18"
            },
            {
              "level": 3,
              "text": "Poisoning Rate 85% / Accuracy +22"
            },
            {
              "level": 4,
              "text": "Poisoning Rate 90% / Accuracy +26"
            },
            {
              "level": 5,
              "text": "Poisoning Rate 95% / Accuracy +30"
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
              "label": "Atk %",
              "values": [
                {
                  "level": 1,
                  "value": "1000"
                },
                {
                  "level": 2,
                  "value": "1000"
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
                  "value": "1000"
                }
              ]
            },
            {
              "label": "Chance",
              "values": [
                {
                  "level": 1,
                  "value": "75%"
                },
                {
                  "level": 2,
                  "value": "80%"
                },
                {
                  "level": 3,
                  "value": "85%"
                },
                {
                  "level": 4,
                  "value": "90%"
                },
                {
                  "level": 5,
                  "value": "95%"
                }
              ]
            },
            {
              "label": "Accuracy",
              "values": [
                {
                  "level": 1,
                  "value": "14"
                },
                {
                  "level": 2,
                  "value": "18"
                },
                {
                  "level": 3,
                  "value": "22"
                },
                {
                  "level": 4,
                  "value": "26"
                },
                {
                  "level": 5,
                  "value": "30"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2031.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2031",
          "tree": {
            "idx": 25,
            "row": 2,
            "col": 7,
            "columns": 9,
            "requirements": [
              {
                "id": 2027,
                "level": 3,
                "name": "Poisonous Weapon",
                "visible": true
              },
              {
                "id": 2028,
                "level": 1,
                "name": "Weapon Blocking",
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
                    "id": "accuracy",
                    "label": "Accuracy"
                  },
                  {
                    "id": "atk",
                    "label": "Atk %"
                  },
                  {
                    "id": "chance",
                    "label": "Chance"
                  },
                  {
                    "id": "poisoning-rate-75-accuracy",
                    "label": "Poisoning Rate 75% / Accuracy"
                  },
                  {
                    "id": "poisoning-rate-80-accuracy",
                    "label": "Poisoning Rate 80% / Accuracy"
                  },
                  {
                    "id": "poisoning-rate-85-accuracy",
                    "label": "Poisoning Rate 85% / Accuracy"
                  },
                  {
                    "id": "poisoning-rate-90-accuracy",
                    "label": "Poisoning Rate 90% / Accuracy"
                  },
                  {
                    "id": "poisoning-rate-95-accuracy",
                    "label": "Poisoning Rate 95% / Accuracy"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "poisoning-rate-75-accuracy": "+14",
                      "sp-cost": "30",
                      "atk": "1000",
                      "chance": "75%",
                      "accuracy": "14"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "poisoning-rate-80-accuracy": "+18",
                      "sp-cost": "40",
                      "atk": "1000",
                      "chance": "80%",
                      "accuracy": "18"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "poisoning-rate-85-accuracy": "+22",
                      "sp-cost": "50",
                      "atk": "1000",
                      "chance": "85%",
                      "accuracy": "22"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "poisoning-rate-90-accuracy": "+26",
                      "sp-cost": "60",
                      "atk": "1000",
                      "chance": "90%",
                      "accuracy": "26"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "poisoning-rate-95-accuracy": "+30",
                      "sp-cost": "70",
                      "atk": "1000",
                      "chance": "95%",
                      "accuracy": "30"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2032,
          "imageFile": "2032.png",
          "name": "Poisonous Smoke",
          "maxLevel": 5,
          "prerequisiteText": "Venom Pressure 5, Poisoning Weapon 5",
          "group": "Active / Buff",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "With Poisoning Weapon activated, spread a poisonous smoke around 5x5 cells. Enemy in the range have a 20% chance of getting poisoned every 2 seconds. When casting, Poisoning Weapon effect gets removed.",
          "levelDetails": [
            {
              "level": 1,
              "text": "10 sec. duration"
            },
            {
              "level": 2,
              "text": "12 sec. duration"
            },
            {
              "level": 3,
              "text": "14 sec. duration"
            },
            {
              "level": 4,
              "text": "16 sec. duration"
            },
            {
              "level": 5,
              "text": "18 sec. duration"
            }
          ],
          "fixedCastTime": "2 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "2 seconds",
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
            },
            {
              "label": "Duration",
              "values": [
                {
                  "level": 1,
                  "value": "10 sec"
                },
                {
                  "level": 2,
                  "value": "12 sec"
                },
                {
                  "level": 3,
                  "value": "14 sec"
                },
                {
                  "level": 4,
                  "value": "16 sec"
                },
                {
                  "level": 5,
                  "value": "18 sec"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2032.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2032",
          "tree": {
            "idx": 26,
            "row": 2,
            "col": 8,
            "columns": 9,
            "requirements": [
              {
                "id": 2027,
                "level": 5,
                "name": "Poisonous Weapon",
                "visible": true
              },
              {
                "id": 2031,
                "level": 5,
                "name": "Venom Pressure",
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
                "label": "Fixed Cast Time",
                "value": "2 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "2 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0 seconds"
              },
              {
                "label": "Pulse",
                "value": "2 seconds"
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
                    "id": "range",
                    "label": "Range"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "10 sec. duration",
                      "sp-cost": "40",
                      "range": "5 cells",
                      "duration": "10 sec"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "12 sec. duration",
                      "sp-cost": "40",
                      "range": "5 cells",
                      "duration": "12 sec"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "14 sec. duration",
                      "sp-cost": "40",
                      "range": "5 cells",
                      "duration": "14 sec"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "16 sec. duration",
                      "sp-cost": "40",
                      "range": "5 cells",
                      "duration": "16 sec"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "18 sec. duration",
                      "sp-cost": "40",
                      "range": "5 cells",
                      "duration": "18 sec"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
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
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5014.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5014",
          "tree": {
            "idx": 41,
            "row": 4,
            "col": 5,
            "columns": 9,
            "requirements": []
          },
          "details": {
            "rows": [
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
                "value": "3000 seconds"
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
          "irowikiUrl": "",
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
      "label": "Assassin Cross",
      "pointLimit": 69,
      "tree": {
        "columns": 9,
        "rows": 3
      },
      "skills": [
        {
          "id": 132,
          "imageFile": "132.png",
          "name": "Right hand Mastery",
          "maxLevel": 5,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Restores right-hand damage that is reduced when using two-hand weapons.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Right Hand Damage: 60%"
            },
            {
              "level": 2,
              "text": "Right Hand Damage: 70%"
            },
            {
              "level": 3,
              "text": "Right Hand Damage: 80%"
            },
            {
              "level": 4,
              "text": "Right Hand Damage: 90%"
            },
            {
              "level": 5,
              "text": "Right Hand Damage:100%"
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
          "iconUrl": "assets/divine-pride/skills/132.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/132",
          "tree": {
            "idx": 0,
            "row": 0,
            "col": 0,
            "columns": 9,
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
                      "effect": "Right Hand Damage: 60%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Right Hand Damage: 70%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Right Hand Damage: 80%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Right Hand Damage: 90%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Right Hand Damage:100%",
                      "sp-cost": "0"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 134,
          "imageFile": "134.png",
          "name": "Katar Matery",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Enhances attack (Weapon Mastery) with Katar class weapons.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Damage: +3"
            },
            {
              "level": 2,
              "text": "Damage: +6"
            },
            {
              "level": 3,
              "text": "Damage: +9"
            },
            {
              "level": 4,
              "text": "Damage: +12"
            },
            {
              "level": 5,
              "text": "Damage: +15"
            },
            {
              "level": 6,
              "text": "Damage: +18"
            },
            {
              "level": 7,
              "text": "Damage: +21"
            },
            {
              "level": 8,
              "text": "Damage: +24"
            },
            {
              "level": 9,
              "text": "Damage: +27"
            },
            {
              "level": 10,
              "text": "Damage: +30"
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
          "iconUrl": "assets/divine-pride/skills/134.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/134",
          "tree": {
            "idx": 1,
            "row": 0,
            "col": 1,
            "columns": 9,
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
                    "id": "damage",
                    "label": "Damage:"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "damage": "+3",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "damage": "+6",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "damage": "+9",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "damage": "+12",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "damage": "+15",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "damage": "+18",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "damage": "+21",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "damage": "+24",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "damage": "+27",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "damage": "+30",
                      "sp-cost": "0"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 135,
          "imageFile": "135.png",
          "name": "Cloaking",
          "maxLevel": 10,
          "prerequisiteText": "Hiding 2",
          "group": "Active",
          "type": "Supportive",
          "target": "Caster Only",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Conceals oneself and allows movement in this state.\nIt can move quickly when it is attached to the wall, but it slows down when it is not attached.\nFor levels 1 and 2, this skill can only be used if the user is adjacent to a wall.\nMaintaining this skill active will drain SP.\nDemon, Insect race monsters and boss monsters can find.\nAfter the effect is released, the item cannot be picked up for 3 seconds.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Off Wall:Not available, On Wall:100%, per0.5sec SP1per0.5sec"
            },
            {
              "level": 2,
              "text": "Off Wall:Not available, On Wall:103%, SP1per1.0sec"
            },
            {
              "level": 3,
              "text": "Off Wall: 79%, On Wall:106%, SP1per2.0sec"
            },
            {
              "level": 4,
              "text": "Off Wall: 82%, On Wall:109%, SP1per3.0sec"
            },
            {
              "level": 5,
              "text": "Off Wall: 85%, On Wall:112%, SP1per4.0sec"
            },
            {
              "level": 6,
              "text": "Off Wall: 88%, On Wall:115%, SP1per5.0sec"
            },
            {
              "level": 7,
              "text": "Off Wall: 91%, On Wall:118%, SP1per6.0sec"
            },
            {
              "level": 8,
              "text": "Off Wall: 94%, On Wall:121%, SP1per7.0sec"
            },
            {
              "level": 9,
              "text": "Off Wall: 97%, On Wall:124%, SP1per8.0sec"
            },
            {
              "level": 10,
              "text": "Off Wall:100%, On Wall:125%, SP1per9.0sec"
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/135.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/135",
          "tree": {
            "idx": 2,
            "row": 0,
            "col": 2,
            "columns": 9,
            "requirements": [
              {
                "id": 51,
                "level": 2,
                "name": "Hiding",
                "visible": false
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
                    "id": "effect",
                    "label": "Effect"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Off Wall:Not available, On Wall:100%, per0.5sec SP1per0.5sec",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Off Wall:Not available, On Wall:103%, SP1per1.0sec",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Off Wall: 79%, On Wall:106%, SP1per2.0sec",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Off Wall: 82%, On Wall:109%, SP1per3.0sec",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Off Wall: 85%, On Wall:112%, SP1per4.0sec",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "Off Wall: 88%, On Wall:115%, SP1per5.0sec",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "Off Wall: 91%, On Wall:118%, SP1per6.0sec",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "Off Wall: 94%, On Wall:121%, SP1per7.0sec",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "Off Wall: 97%, On Wall:124%, SP1per8.0sec",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "Off Wall:100%, On Wall:125%, SP1per9.0sec",
                      "sp-cost": "15"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 138,
          "imageFile": "138.png",
          "name": "Enchant Poison",
          "maxLevel": 10,
          "prerequisiteText": "Envenom 1",
          "group": "Active",
          "type": "Buff",
          "target": "the user and 1 party member",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Endows a single target's equipped weapon with the Poison property temporarily.\nThis skill also gives the chance of leaving enemies poisoned while physically attacking.\nSwitching to a different weapon will cancel this effect.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Duration: 30sec"
            },
            {
              "level": 2,
              "text": "Duration: 45sec"
            },
            {
              "level": 3,
              "text": "Duration: 60sec"
            },
            {
              "level": 4,
              "text": "Duration: 75sec"
            },
            {
              "level": 5,
              "text": "Duration: 90sec"
            },
            {
              "level": 6,
              "text": "Duration:105sec"
            },
            {
              "level": 7,
              "text": "Duration:120sec"
            },
            {
              "level": 8,
              "text": "Duration:135sec"
            },
            {
              "level": 9,
              "text": "Duration:150sec"
            },
            {
              "level": 10,
              "text": "Duration:165sec"
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
                  "value": "20"
                },
                {
                  "level": 3,
                  "value": "20"
                },
                {
                  "level": 4,
                  "value": "20"
                },
                {
                  "level": 5,
                  "value": "20"
                },
                {
                  "level": 6,
                  "value": "20"
                },
                {
                  "level": 7,
                  "value": "20"
                },
                {
                  "level": 8,
                  "value": "20"
                },
                {
                  "level": 9,
                  "value": "20"
                },
                {
                  "level": 10,
                  "value": "20"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/138.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/138",
          "tree": {
            "idx": 3,
            "row": 0,
            "col": 3,
            "columns": 9,
            "requirements": [
              {
                "id": 52,
                "level": 1,
                "name": "Envenom",
                "visible": false
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
                "label": "Target",
                "value": "the user and 1 party member"
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
                      "effect": "Duration: 30sec",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Duration: 45sec",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Duration: 60sec",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Duration: 75sec",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Duration: 90sec",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "Duration:105sec",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "Duration:120sec",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "Duration:135sec",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "Duration:150sec",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "Duration:165sec",
                      "sp-cost": "20"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 1004,
          "imageFile": "1004.png",
          "name": "Venom Knife",
          "maxLevel": 1,
          "prerequisiteText": "Quest complete",
          "group": "Active",
          "type": "Ranged Physical Attack",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Throws 1 Venom Knife you're equipping to the target to inflict Long-ranged Physical damage of 500% of ATK at the cost of 35 SP.\nCreates a high chance of Poisoning the target.",
          "levelDetails": [],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "35"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/1004.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/1004",
          "tree": {
            "idx": 6,
            "row": 0,
            "col": 6,
            "columns": 9,
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
                      "sp-cost": "35"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 133,
          "imageFile": "133.png",
          "name": "Left hand Mastery",
          "maxLevel": 5,
          "prerequisiteText": "Righthand Mastery 2",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Restores right-hand damage that is reduced when using two-hand weapons.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Left Hand Damage: 40%"
            },
            {
              "level": 2,
              "text": "Left Hand Damage: 50%"
            },
            {
              "level": 3,
              "text": "Left Hand Damage: 60%"
            },
            {
              "level": 4,
              "text": "Left Hand Damage: 70%"
            },
            {
              "level": 5,
              "text": "Left Hand Damage: 80%"
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
          "iconUrl": "assets/divine-pride/skills/133.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/133",
          "tree": {
            "idx": 7,
            "row": 0,
            "col": 7,
            "columns": 9,
            "requirements": [
              {
                "id": 132,
                "level": 2,
                "name": "Righthand Mastery",
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
                      "effect": "Left Hand Damage: 40%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Left Hand Damage: 50%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Left Hand Damage: 60%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Left Hand Damage: 70%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Left Hand Damage: 80%",
                      "sp-cost": "0"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 136,
          "imageFile": "136.png",
          "name": "Sonic Blow",
          "maxLevel": 10,
          "prerequisiteText": "Katar Matery 4",
          "group": "Active",
          "type": "Physical Attack",
          "target": "1 Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Only for Katar.\nDirects a flurry of rapid slices with the equipped katar at a single target while spinning it to inflict physical damage.\nIt has a chance of leaving the target stunned.\nThe chance of stun is reduced by the target's resistance to abnormal status.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 300%, Stun Chance: 12%"
            },
            {
              "level": 2,
              "text": "ATK 400%, Stun Chance: 14%"
            },
            {
              "level": 3,
              "text": "ATK 500%, Stun Chance: 16%"
            },
            {
              "level": 4,
              "text": "ATK 600%, Stun Chance: 18%"
            },
            {
              "level": 5,
              "text": "ATK 700%, Stun Chance: 20%"
            },
            {
              "level": 6,
              "text": "ATK 800%, Stun Chance: 22%"
            },
            {
              "level": 7,
              "text": "ATK 900%, Stun Chance: 24%"
            },
            {
              "level": 8,
              "text": "ATK1000%, Stun Chance: 26%"
            },
            {
              "level": 9,
              "text": "ATK1100%, Stun Chance: 28%"
            },
            {
              "level": 10,
              "text": "ATK1200%, Stun Chance: 30%"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0 seconds",
          "cooldown": "1 second",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "16"
                },
                {
                  "level": 2,
                  "value": "18"
                },
                {
                  "level": 3,
                  "value": "20"
                },
                {
                  "level": 4,
                  "value": "22"
                },
                {
                  "level": 5,
                  "value": "24"
                },
                {
                  "level": 6,
                  "value": "26"
                },
                {
                  "level": 7,
                  "value": "28"
                },
                {
                  "level": 8,
                  "value": "30"
                },
                {
                  "level": 9,
                  "value": "32"
                },
                {
                  "level": 10,
                  "value": "34"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/136.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/136",
          "tree": {
            "idx": 8,
            "row": 0,
            "col": 8,
            "columns": 9,
            "requirements": [
              {
                "id": 134,
                "level": 4,
                "name": "Katar Mastery",
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
                "value": "1 second"
              },
              {
                "label": "Target",
                "value": "1 Enemy"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "base-damage-atk",
                    "label": "Base Damage (ATK)"
                  },
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
                      "base-damage-atk": "300%",
                      "sp-cost": "16"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-atk": "400%",
                      "sp-cost": "18"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-atk": "500%",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-atk": "600%",
                      "sp-cost": "22"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-atk": "700%",
                      "sp-cost": "24"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "base-damage-atk": "800%",
                      "sp-cost": "26"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "base-damage-atk": "900%",
                      "sp-cost": "28"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "ATK1000%, Stun Chance: 26%",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "ATK1100%, Stun Chance: 28%",
                      "sp-cost": "32"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "ATK1200%, Stun Chance: 30%",
                      "sp-cost": "34"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 376,
          "imageFile": "376.png",
          "name": "Advanced Katar Mastery",
          "maxLevel": 5,
          "prerequisiteText": "Double Attack 5, Katar Matery 7",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Enhance the damage that is\ninflicted with Katar Class Weapons.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Damage +12%"
            },
            {
              "level": 2,
              "text": "Damage +14%"
            },
            {
              "level": 3,
              "text": "Damage +16%"
            },
            {
              "level": 4,
              "text": "Damage +18%"
            },
            {
              "level": 5,
              "text": "Damage +20%"
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
          "iconUrl": "assets/divine-pride/skills/376.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/376",
          "tree": {
            "idx": 9,
            "row": 1,
            "col": 0,
            "columns": 9,
            "requirements": [
              {
                "id": 48,
                "level": 5,
                "name": "Double Attack",
                "visible": false
              },
              {
                "id": 134,
                "level": 7,
                "name": "Katar Mastery",
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
                  },
                  {
                    "id": "damage",
                    "label": "Damage"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "damage": "+12%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "damage": "+14%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "damage": "+16%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "damage": "+18%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "damage": "+20%",
                      "sp-cost": "0"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 140,
          "imageFile": "140.png",
          "name": "Venom Dust",
          "maxLevel": 10,
          "prerequisiteText": "Enchant Poison 5",
          "group": "Active",
          "type": "1 cell on ground",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Contaminates a targeted location with a toxin that will leave all enemies within the area of effect poisoned. Each cast consumes a Red Gemstone. .\nIt has a chance of leaving the target [Abnormal Status: Poisoned].\nThe chance of poisoned is reduced by the target's resistance to abnormal status.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Duration : 5sec"
            },
            {
              "level": 2,
              "text": "Duration : 10sec"
            },
            {
              "level": 3,
              "text": "Duration : 15sec"
            },
            {
              "level": 4,
              "text": "Duration : 20sec"
            },
            {
              "level": 5,
              "text": "Duration : 25sec"
            },
            {
              "level": 6,
              "text": "Duration : 30sec"
            },
            {
              "level": 7,
              "text": "Duration : 35sec"
            },
            {
              "level": 8,
              "text": "Duration : 40sec"
            },
            {
              "level": 9,
              "text": "Duration : 45sec"
            },
            {
              "level": 10,
              "text": "Duration : 50sec"
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
                  "value": "20"
                },
                {
                  "level": 3,
                  "value": "20"
                },
                {
                  "level": 4,
                  "value": "20"
                },
                {
                  "level": 5,
                  "value": "20"
                },
                {
                  "level": 6,
                  "value": "20"
                },
                {
                  "level": 7,
                  "value": "20"
                },
                {
                  "level": 8,
                  "value": "20"
                },
                {
                  "level": 9,
                  "value": "20"
                },
                {
                  "level": 10,
                  "value": "20"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/140.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/140",
          "tree": {
            "idx": 10,
            "row": 1,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 138,
                "level": 5,
                "name": "Enchant Poison",
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
                      "effect": "Duration : 5sec",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Duration : 10sec",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Duration : 15sec",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Duration : 20sec",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Duration : 25sec",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "Duration : 30sec",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "Duration : 35sec",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "Duration : 40sec",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "Duration : 45sec",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "Duration : 50sec",
                      "sp-cost": "20"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 139,
          "imageFile": "139.png",
          "name": "Poison React",
          "maxLevel": 10,
          "prerequisiteText": "Enchant Poison 3",
          "group": "Active",
          "type": "Supportive",
          "target": "the user",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Retaliates with a stronger physical attack against poison property attack for 1 time.\nIf the caster have learned Double Attack, the chance of Double Attack is applied when counterattacking.\nGives a level 5 Envenom when the user or monster which is not poison property attack.",
          "levelDetails": [
            {
              "level": 1,
              "text": "counterattack ATK 130%, Envenom: 1times"
            },
            {
              "level": 2,
              "text": "counterattack ATK 160%, Envenom: 1times"
            },
            {
              "level": 3,
              "text": "counterattack ATK 190%, Envenom: 2times"
            },
            {
              "level": 4,
              "text": "counterattack ATK 220%, Envenom: 2times"
            },
            {
              "level": 5,
              "text": "counterattack ATK 250%, Envenom: 3times"
            },
            {
              "level": 6,
              "text": "counterattack ATK 280%, Envenom: 3times"
            },
            {
              "level": 7,
              "text": "counterattack ATK 310%, Envenom: 4times"
            },
            {
              "level": 8,
              "text": "counterattack ATK 340%, Envenom: 4times"
            },
            {
              "level": 9,
              "text": "counterattack ATK 370%, Envenom: 5times"
            },
            {
              "level": 10,
              "text": "counterattack ATK 400%, Envenom: 5times"
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
                },
                {
                  "level": 6,
                  "value": "50"
                },
                {
                  "level": 7,
                  "value": "55"
                },
                {
                  "level": 8,
                  "value": "60"
                },
                {
                  "level": 9,
                  "value": "45"
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
          "iconUrl": "assets/divine-pride/skills/139.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/139",
          "tree": {
            "idx": 11,
            "row": 1,
            "col": 2,
            "columns": 9,
            "requirements": [
              {
                "id": 138,
                "level": 3,
                "name": "Enchant Poison",
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
                "label": "Target",
                "value": "the user"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "base-damage-atk",
                    "label": "Base Damage (ATK)"
                  },
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "base-damage-atk": "130%",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-atk": "160%",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-atk": "190%",
                      "sp-cost": "35"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-atk": "220%",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-atk": "250%",
                      "sp-cost": "45"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "base-damage-atk": "280%",
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "base-damage-atk": "310%",
                      "sp-cost": "55"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "base-damage-atk": "340%",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "base-damage-atk": "370%",
                      "sp-cost": "45"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "base-damage-atk": "400%",
                      "sp-cost": "45"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 407,
          "imageFile": "407.png",
          "name": "Create Deadly Poison",
          "maxLevel": 1,
          "prerequisiteText": "Envenom 10, Detoxify 1,",
          "group": "Supportive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Create a bottle of Deadly Poison\nthat will increase the Attack Speed of Assassin\nCrosses with the risk of being inflicted with\nthe Poison status, but will instantly kill\ncharacters in any other job if they drink it.\nCaster's DEX and LUK affect this skill's\nsuccess rate. If this skill fails, the caster\nloses an amount of HP equal to 25% of\nhis MaxHP.\nItems Required to create Deadly Poison:\n1 Empty Bottle\n1 Poison Spore\n1 Venom Canine\n1 Bee Sting\n1 Cactus Needle\n1 Berserk Potion\n1 Karvodailnirol",
          "levelDetails": [],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "50"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/407.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/407",
          "tree": {
            "idx": 12,
            "row": 1,
            "col": 3,
            "columns": 9,
            "requirements": [
              {
                "id": 52,
                "level": 10,
                "name": "Envenom",
                "visible": false
              },
              {
                "id": 53,
                "level": 1,
                "name": "Detoxify",
                "visible": false
              },
              {
                "id": 138,
                "level": 5,
                "name": "Enchant Poison",
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
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 1003,
          "imageFile": "1003.png",
          "name": "Sonic Acceleration",
          "maxLevel": 1,
          "prerequisiteText": "Quest complete",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Adjusts Sonic Blow HIT Rate by 90% and increases its damage by 90%.",
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
          "iconUrl": "assets/divine-pride/skills/1003.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/1003",
          "tree": {
            "idx": 13,
            "row": 1,
            "col": 4,
            "columns": 9,
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
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 137,
          "imageFile": "137.png",
          "name": "Grimtooth",
          "maxLevel": 5,
          "prerequisiteText": "Cloaking 2, Sonic Blow 5",
          "group": "Active",
          "type": "PATK",
          "target": "1 Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Only for Katar.\nStrikes a single target with the equipped katar while hidden at a distance to inflict physical damage to all enemies within the area of effect by consuming SP3.\nLevels 1 and 2 inflict close range damage while Levels 3 and above inflict ranged damage .\nFor normal monsters, movement speed of targets that take damage are reduced by 50% for 1 second.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 120%, Range: 2cell"
            },
            {
              "level": 2,
              "text": "ATK 140%, Range: 3cell"
            },
            {
              "level": 3,
              "text": "ATK 160%, Range: 4cell"
            },
            {
              "level": 4,
              "text": "ATK 180%, Range: 5cell"
            },
            {
              "level": 5,
              "text": "ATK 200%, Range: 6cell"
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/137.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/137",
          "tree": {
            "idx": 15,
            "row": 1,
            "col": 6,
            "columns": 9,
            "requirements": [
              {
                "id": 135,
                "level": 2,
                "name": "Cloaking",
                "visible": true
              },
              {
                "id": 136,
                "level": 5,
                "name": "Sonic Blow",
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
                "value": "1 Enemy"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "base-damage-atk",
                    "label": "Base Damage (ATK)"
                  },
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "base-damage-atk": "120%",
                      "sp-cost": "3"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-atk": "140%",
                      "sp-cost": "3"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-atk": "160%",
                      "sp-cost": "3"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-atk": "180%",
                      "sp-cost": "3"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-atk": "200%",
                      "sp-cost": "3"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 141,
          "imageFile": "141.png",
          "name": "Venom Splasher",
          "maxLevel": 10,
          "prerequisiteText": "Poison React 5, Venom Dust 5",
          "group": "Active",
          "type": "Physical Attack",
          "target": "1 Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Attaches a dangerous toxin onto a single target which causes a venomous explosion afterwards.\ninflicting physical damage to all enemies around the target and leaves the target [Abnormal Status: Poisoned].\nThe chance of poisoned is reduced by the target's resistance to abnormal status.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 500%, Explosion delay time: 11sec"
            },
            {
              "level": 2,
              "text": "ATK 600%, Explosion delay time: 10sec"
            },
            {
              "level": 3,
              "text": "ATK 700%, Explosion delay time: 9sec"
            },
            {
              "level": 4,
              "text": "ATK 800%, Explosion delay time: 8sec"
            },
            {
              "level": 5,
              "text": "ATK 900%, Explosion delay time: 7sec"
            },
            {
              "level": 6,
              "text": "ATK1000%, Explosion delay time: 6sec"
            },
            {
              "level": 7,
              "text": "ATK1100%, Explosion delay time: 5sec"
            },
            {
              "level": 8,
              "text": "ATK1200%, Explosion delay time: 4sec"
            },
            {
              "level": 9,
              "text": "ATK1300%, Explosion delay time: 3sec"
            },
            {
              "level": 10,
              "text": "ATK1400%, Explosion delay time: 2sec"
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "0.5 seconds",
          "castDelay": "0 seconds",
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/141.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/141",
          "tree": {
            "idx": 17,
            "row": 1,
            "col": 8,
            "columns": 9,
            "requirements": [
              {
                "id": 139,
                "level": 5,
                "name": "Poison React",
                "visible": true
              },
              {
                "id": 140,
                "level": 5,
                "name": "Venom Dust",
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
                "value": "0.5 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "0.5 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0 seconds"
              },
              {
                "label": "Target",
                "value": "1 Enemy"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "base-damage-atk",
                    "label": "Base Damage (ATK)"
                  },
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
                      "base-damage-atk": "500%",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-atk": "600%",
                      "sp-cost": "14"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-atk": "700%",
                      "sp-cost": "16"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-atk": "800%",
                      "sp-cost": "18"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-atk": "900%",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "ATK1000%, E x plosion delay time: 6sec",
                      "sp-cost": "22"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "ATK1100%, E x plosion delay time: 5sec",
                      "sp-cost": "24"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "ATK1200%, E x plosion delay time: 4sec",
                      "sp-cost": "26"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "ATK1300%, E x plosion delay time: 3sec",
                      "sp-cost": "28"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "ATK1400%, E x plosion delay time: 2sec",
                      "sp-cost": "30"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 379,
          "imageFile": "379.png",
          "name": "Soul Destroyer",
          "maxLevel": 10,
          "prerequisiteText": "Double Attack 5, Envenom 5, Cloaking 3, Enchant Poison 6",
          "group": "Active",
          "type": "Ranged physical",
          "target": "1 target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Deals strong ranged physical damage to a target.\nOnly the half of Critical Chance is applied. Damage increases based on BaseLv, STR and INT.\nOnly the half of Critical Damage option applies.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 150%"
            },
            {
              "level": 2,
              "text": "ATK 300%"
            },
            {
              "level": 3,
              "text": "ATK 450%"
            },
            {
              "level": 4,
              "text": "ATK 600%"
            },
            {
              "level": 5,
              "text": "ATK 750%"
            },
            {
              "level": 6,
              "text": "ATK 900%"
            },
            {
              "level": 7,
              "text": "ATK 1050%"
            },
            {
              "level": 8,
              "text": "ATK 1200%"
            },
            {
              "level": 9,
              "text": "ATK 1350%"
            },
            {
              "level": 10,
              "text": "ATK 1500%"
            }
          ],
          "fixedCastTime": "0.25 seconds",
          "variableCastTime": "0.25 seconds",
          "castDelay": "1 second",
          "cooldown": "0.25 seconds",
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
                },
                {
                  "level": 6,
                  "value": "60"
                },
                {
                  "level": 7,
                  "value": "60"
                },
                {
                  "level": 8,
                  "value": "60"
                },
                {
                  "level": 9,
                  "value": "60"
                },
                {
                  "level": 10,
                  "value": "60"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/379.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/379",
          "tree": {
            "idx": 18,
            "row": 2,
            "col": 0,
            "columns": 9,
            "requirements": [
              {
                "id": 48,
                "level": 5,
                "name": "Double Attack",
                "visible": false
              },
              {
                "id": 52,
                "level": 5,
                "name": "Envenom",
                "visible": false
              },
              {
                "id": 135,
                "level": 3,
                "name": "Cloaking",
                "visible": true
              },
              {
                "id": 138,
                "level": 6,
                "name": "Enchant Poison",
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
                "value": "0.25 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "1 second"
              },
              {
                "label": "Cooldown",
                "value": "0.25 seconds"
              },
              {
                "label": "Target",
                "value": "1 target"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "base-damage-atk",
                    "label": "Base Damage (ATK)"
                  },
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "base-damage-atk": "150%",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-atk": "300%",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-atk": "450%",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-atk": "600%",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-atk": "750%",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "base-damage-atk": "900%",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "base-damage-atk": "1050%",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "base-damage-atk": "1200%",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "base-damage-atk": "1350%",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "base-damage-atk": "1500%",
                      "sp-cost": "60"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 378,
          "imageFile": "378.png",
          "name": "Enchant Deadly Poison",
          "maxLevel": 5,
          "prerequisiteText": "Create Deadly Poison 1",
          "group": "Active",
          "type": "Buff",
          "target": "Caster Only",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Enchant a weapon with deadly\npoison to enhance its damage and poison\ntargets by chance, causing the target's HP to\ndramatically decrease for the poison's duration.\nEach cast requires 1 Poison Bottle.",
          "levelDetails": [],
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
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/378.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/378",
          "tree": {
            "idx": 19,
            "row": 2,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 407,
                "level": 1,
                "name": "Create Deadly Poison",
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
                      "sp-cost": "70"
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
                      "sp-cost": "90"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "100"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 406,
          "imageFile": "406.png",
          "name": "Meteor Assault",
          "maxLevel": 10,
          "prerequisiteText": "Katar Mastery 5,",
          "group": "Aggressive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Damage all enemies in a 5*5 cell\narea around the caster with the chance of\ncausing statuses such as Stun, Blind or Bleed.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Atk 80%"
            },
            {
              "level": 2,
              "text": "Atk 120%"
            },
            {
              "level": 3,
              "text": "Atk 160%"
            },
            {
              "level": 4,
              "text": "Atk 200%"
            },
            {
              "level": 5,
              "text": "Atk 240%"
            },
            {
              "level": 6,
              "text": "Atk 280%"
            },
            {
              "level": 7,
              "text": "Atk 320%"
            },
            {
              "level": 8,
              "text": "Atk 360%"
            },
            {
              "level": 9,
              "text": "Atk 400%"
            },
            {
              "level": 10,
              "text": "Atk 440%"
            }
          ],
          "fixedCastTime": "0.25 seconds",
          "variableCastTime": "0.25 seconds",
          "castDelay": "0 seconds",
          "cooldown": "0.5 seconds",
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/406.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/406",
          "tree": {
            "idx": 25,
            "row": 2,
            "col": 7,
            "columns": 9,
            "requirements": [
              {
                "id": 132,
                "level": 3,
                "name": "Righthand Mastery",
                "visible": true
              },
              {
                "id": 134,
                "level": 5,
                "name": "Katar Mastery",
                "visible": true
              },
              {
                "id": 136,
                "level": 5,
                "name": "Sonic Blow",
                "visible": true
              },
              {
                "id": 379,
                "level": 1,
                "name": "Soul Destroyer",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Aggressive Skill"
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
                "value": "0.25 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0.5 seconds"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "base-damage-atk",
                    "label": "Base Damage (ATK)"
                  },
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "base-damage-atk": "80%",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-atk": "120%",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-atk": "160%",
                      "sp-cost": "14"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-atk": "200%",
                      "sp-cost": "16"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-atk": "240%",
                      "sp-cost": "18"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "base-damage-atk": "280%",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "base-damage-atk": "320%",
                      "sp-cost": "22"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "base-damage-atk": "360%",
                      "sp-cost": "24"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "base-damage-atk": "400%",
                      "sp-cost": "26"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "base-damage-atk": "440%",
                      "sp-cost": "28"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
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
      "label": "Thief",
      "pointLimit": 49,
      "tree": {
        "columns": 9,
        "rows": 2
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
            "columns": 9,
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
                      "effect": "Enables Sitting\nSitting doubles HP/SP Recovery Speed\nPress the Insert key or type /sit",
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
                      "effect": "Organize Party\nCreate a party by typing /organize ''[Party Name]''\nSet party options in the Party Window (Alt+Z)",
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
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 48,
          "imageFile": "48.png",
          "name": "Double Attack",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Gives the chance to inflict two hits instead of one and improves hit rate while attacking with Dagger class weapons.\nWhen using Katar type weapon, it affects off-hand damage.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Chance: 7%, Hit improvement: 1%"
            },
            {
              "level": 2,
              "text": "Chance: 14%, Hit improvement: 2%"
            },
            {
              "level": 3,
              "text": "Chance: 21%, Hit improvement: 3%"
            },
            {
              "level": 4,
              "text": "Chance: 28%, Hit improvement: 4%"
            },
            {
              "level": 5,
              "text": "Chance: 35%, Hit improvement: 5%"
            },
            {
              "level": 6,
              "text": "Chance: 42%, Hit improvement: 6%"
            },
            {
              "level": 7,
              "text": "Chance: 49%, Hit improvement: 7%"
            },
            {
              "level": 8,
              "text": "Chance: 56%, Hit improvement: 8%"
            },
            {
              "level": 9,
              "text": "Chance: 63%, Hit improvement: 9%"
            },
            {
              "level": 10,
              "text": "Chance: 70%, Hit improvement: 10%"
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
          "iconUrl": "assets/divine-pride/skills/48.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/48",
          "tree": {
            "idx": 1,
            "row": 0,
            "col": 1,
            "columns": 9,
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
                    "id": "effect",
                    "label": "Effect"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Chance: 7%, Hit improvement: 1%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Chance: 14%, Hit improvement: 2%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Chance: 21%, Hit improvement: 3%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Chance: 28%, Hit improvement: 4%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Chance: 35%, Hit improvement: 5%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "Chance: 42%, Hit improvement: 6%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "Chance: 49%, Hit improvement: 7%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "Chance: 56%, Hit improvement: 8%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "Chance: 63%, Hit improvement: 9%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "Chance: 70%, Hit improvement: 10%",
                      "sp-cost": "0"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 50,
          "imageFile": "50.png",
          "name": "Steal",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "Supportive",
          "target": "1 Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Consumes SP10 and attempts to steal an item from a targeted monster. The higher the target's DEX than yours, the lower the chance of success.\nBoss monsters and players cannot be stolen from. After success, it is not possible to steal again from the same target.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Base success rate: 8%"
            },
            {
              "level": 2,
              "text": "Base success rate: 14%"
            },
            {
              "level": 3,
              "text": "Base success rate: 20%"
            },
            {
              "level": 4,
              "text": "Base success rate: 26%"
            },
            {
              "level": 5,
              "text": "Base success rate: 32%"
            },
            {
              "level": 6,
              "text": "Base success rate: 38%"
            },
            {
              "level": 7,
              "text": "Base success rate: 44%"
            },
            {
              "level": 8,
              "text": "Base success rate: 50%"
            },
            {
              "level": 9,
              "text": "Base success rate: 56%"
            },
            {
              "level": 10,
              "text": "Base success rate: 62%"
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/50.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/50",
          "tree": {
            "idx": 2,
            "row": 0,
            "col": 2,
            "columns": 9,
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
                "label": "Target",
                "value": "1 Enemy"
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
                      "effect": "Base success rate: 8%",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Base success rate: 14%",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Base success rate: 20%",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Base success rate: 26%",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Base success rate: 32%",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "Base success rate: 38%",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "Base success rate: 44%",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "Base success rate: 50%",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "Base success rate: 56%",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "Base success rate: 62%",
                      "sp-cost": "10"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 52,
          "imageFile": "52.png",
          "name": "Envenom",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "Physical Attack",
          "target": "1 Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Consumes SP12 and strikes a single target to inflict Poison property physical damage. It has a chance of leaving the target [Abnormal Status : poisoned].\nPoisoned targets take damage per second, and their physical defense is reduced by 25%.\nEnvenom Skill damage is the sum of general physical damage and damage by this skill",
          "levelDetails": [
            {
              "level": 1,
              "text": "Damage: + 15, Chance of Effect: 14%"
            },
            {
              "level": 2,
              "text": "Damage: + 30, Chance of Effect: 18%"
            },
            {
              "level": 3,
              "text": "Damage: + 45, Chance of Effect: 22%"
            },
            {
              "level": 4,
              "text": "Damage: + 60, Chance of Effect: 26%"
            },
            {
              "level": 5,
              "text": "Damage: + 75, Chance of Effect: 30%"
            },
            {
              "level": 6,
              "text": "Damage: + 90, Chance of Effect: 34%"
            },
            {
              "level": 7,
              "text": "Damage: +105, Chance of Effect: 38%"
            },
            {
              "level": 8,
              "text": "Damage: +120, Chance of Effect: 42%"
            },
            {
              "level": 9,
              "text": "Damage: +135, Chance of Effect: 46%"
            },
            {
              "level": 10,
              "text": "Damage: +150, Chance of Effect: 50%"
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
                },
                {
                  "level": 6,
                  "value": "12"
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
                  "value": "12"
                },
                {
                  "level": 10,
                  "value": "12"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/52.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/52",
          "tree": {
            "idx": 3,
            "row": 0,
            "col": 3,
            "columns": 9,
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
                "label": "Target",
                "value": "1 Enemy"
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
                      "effect": "Damage: + 15, Chance of Effect: 14%",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Damage: + 30, Chance of Effect: 18%",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Damage: + 45, Chance of Effect: 22%",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Damage: + 60, Chance of Effect: 26%",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Damage: + 75, Chance of Effect: 30%",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "Damage: + 90, Chance of Effect: 34%",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "Damage: +105, Chance of Effect: 38%",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "Damage: +120, Chance of Effect: 42%",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "Damage: +135, Chance of Effect: 46%",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "Damage: +150, Chance of Effect: 50%",
                      "sp-cost": "12"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 149,
          "imageFile": "149.png",
          "name": "Sand Attack",
          "maxLevel": 1,
          "prerequisiteText": "Finish Quest",
          "group": "Offensive (Earth Property)",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Kick sand into the face of an enemy\nwhich will inflict 130% of the damage of a\nnormal attack and also have the chance to\ncause the Blind or Stun status on the target.",
          "levelDetails": [],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "9"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/149.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/149",
          "tree": {
            "idx": 4,
            "row": 0,
            "col": 4,
            "columns": 9,
            "requirements": []
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Offensive (Earth Property) Skill"
              },
              {
                "label": "Levels",
                "value": "1"
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
                      "sp-cost": "9"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 152,
          "imageFile": "152.png",
          "name": "Stone Fling",
          "maxLevel": 1,
          "prerequisiteText": "Finish Quest",
          "group": "Attack",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Attack an enemy with a Stone which\ninflicts 50 damage that will pierce enemy\ndefense and has a low chance of causing the\nStun or Blind status.\nEach cast requires 1 Stone.",
          "levelDetails": [],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "2"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/152.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/152",
          "tree": {
            "idx": 5,
            "row": 0,
            "col": 5,
            "columns": 9,
            "requirements": []
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Attack Skill"
              },
              {
                "label": "Levels",
                "value": "1"
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
                      "sp-cost": "2"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/142.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/142",
          "tree": {
            "idx": 7,
            "row": 0,
            "col": 7,
            "columns": 9,
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
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 49,
          "imageFile": "49.png",
          "name": "Improve Dodge",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Enhances flee rate. The benefits of this skill are improved upon reaching 2nd class and further.\nAlso slightly enhances the Movement Speed of the Assassin class.",
          "levelDetails": [
            {
              "level": 1,
              "text": "1st Class FLEE + 3, 2nd Class FLEE + 4"
            },
            {
              "level": 2,
              "text": "1st Class FLEE + 6, 2nd Class FLEE + 8"
            },
            {
              "level": 3,
              "text": "1st Class FLEE + 9, 2nd Class FLEE +12"
            },
            {
              "level": 4,
              "text": "1st Class FLEE +12, 2nd Class FLEE +16"
            },
            {
              "level": 5,
              "text": "1st Class FLEE +15, 2nd Class FLEE +20"
            },
            {
              "level": 6,
              "text": "1st Class FLEE +18, 2nd Class FLEE +24"
            },
            {
              "level": 7,
              "text": "1st Class FLEE +21, 2nd Class FLEE +28"
            },
            {
              "level": 8,
              "text": "1st Class FLEE +24, 2nd Class FLEE +32"
            },
            {
              "level": 9,
              "text": "1st Class FLEE +27, 2nd Class FLEE +36"
            },
            {
              "level": 10,
              "text": "1st Class FLEE +30, 2nd Class FLEE +40"
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
          "iconUrl": "assets/divine-pride/skills/49.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/49",
          "tree": {
            "idx": 8,
            "row": 0,
            "col": 8,
            "columns": 9,
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
                    "id": "1st-class-flee-3-2nd-class-flee",
                    "label": "1st Class Flee + 3, 2nd Class Flee"
                  },
                  {
                    "id": "1st-class-flee-6-2nd-class-flee",
                    "label": "1st Class Flee + 6, 2nd Class Flee"
                  },
                  {
                    "id": "1st-class-flee-9-2nd-class-flee",
                    "label": "1st Class Flee + 9, 2nd Class Flee"
                  },
                  {
                    "id": "1st-class-flee-12-2nd-class-flee",
                    "label": "1st Class Flee +12, 2nd Class Flee"
                  },
                  {
                    "id": "1st-class-flee-15-2nd-class-flee",
                    "label": "1st Class Flee +15, 2nd Class Flee"
                  },
                  {
                    "id": "1st-class-flee-18-2nd-class-flee",
                    "label": "1st Class Flee +18, 2nd Class Flee"
                  },
                  {
                    "id": "1st-class-flee-21-2nd-class-flee",
                    "label": "1st Class Flee +21, 2nd Class Flee"
                  },
                  {
                    "id": "1st-class-flee-24-2nd-class-flee",
                    "label": "1st Class Flee +24, 2nd Class Flee"
                  },
                  {
                    "id": "1st-class-flee-27-2nd-class-flee",
                    "label": "1st Class Flee +27, 2nd Class Flee"
                  },
                  {
                    "id": "1st-class-flee-30-2nd-class-flee",
                    "label": "1st Class Flee +30, 2nd Class Flee"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "1st-class-flee-3-2nd-class-flee": "+ 4",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "1st-class-flee-6-2nd-class-flee": "+ 8",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "1st-class-flee-9-2nd-class-flee": "+12",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "1st-class-flee-12-2nd-class-flee": "+16",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "1st-class-flee-15-2nd-class-flee": "+20",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "1st-class-flee-18-2nd-class-flee": "+24",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "1st-class-flee-21-2nd-class-flee": "+28",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "1st-class-flee-24-2nd-class-flee": "+32",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "1st-class-flee-27-2nd-class-flee": "+36",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "1st-class-flee-30-2nd-class-flee": "+40",
                      "sp-cost": "0"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 51,
          "imageFile": "51.png",
          "name": "Hiding",
          "maxLevel": 10,
          "prerequisiteText": "Steal 5",
          "group": "Active",
          "type": "Supportive",
          "target": "Immediately",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Consumes SP10 and conceals oneself to avoid enemies. The skills Sight and Ruwach can be used to reveal hidden players.\nInsect, Demon and Boss Protocol monsters can detect hidden players. Reveals oneself when using the skill again.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Duration: 30s, Add SP 1 per 5 seconds Consumption"
            },
            {
              "level": 2,
              "text": "Duration: 60s, Add SP 1 per 6 seconds Consumption"
            },
            {
              "level": 3,
              "text": "Duration: 90s, Add SP 1 per 7 seconds Consumption"
            },
            {
              "level": 4,
              "text": "Duration: 120s, Add SP 1 per 8 seconds Consumption"
            },
            {
              "level": 5,
              "text": "Duration: 150s, Add SP 1 per 9 seconds Consumption"
            },
            {
              "level": 6,
              "text": "Duration: 180s, Add SP 1 per 10 seconds Consumption"
            },
            {
              "level": 7,
              "text": "Duration: 210s, Add SP 1 per 11 seconds Consumption"
            },
            {
              "level": 8,
              "text": "Duration: 240s, Add SP 1 per 12 seconds Consumption"
            },
            {
              "level": 9,
              "text": "Duration: 270s, Add SP 1 per 13 seconds Consumption"
            },
            {
              "level": 10,
              "text": "Duration: 300s, Add SP 1 per 14 seconds Consumption"
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/51.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/51",
          "tree": {
            "idx": 9,
            "row": 1,
            "col": 0,
            "columns": 9,
            "requirements": [
              {
                "id": 50,
                "level": 5,
                "name": "Steal",
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
                      "effect": "Duration: 30s, Add SP 1 per 5 seconds Consumption",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Duration: 60s, Add SP 1 per 6 seconds Consumption",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Duration: 90s, Add SP 1 per 7 seconds Consumption",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Duration: 120s, Add SP 1 per 8 seconds Consumption",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Duration: 150s, Add SP 1 per 9 seconds Consumption",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "Duration: 180s, Add SP 1 per 10 seconds Consumption",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "Duration: 210s, Add SP 1 per 11 seconds Consumption",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "Duration: 240s, Add SP 1 per 12 seconds Consumption",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "Duration: 270s, Add SP 1 per 13 seconds Consumption",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "Duration: 300s, Add SP 1 per 14 seconds Consumption",
                      "sp-cost": "10"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 53,
          "imageFile": "53.png",
          "name": "Detoxify",
          "maxLevel": 1,
          "prerequisiteText": "Envenom 3",
          "group": "Active",
          "type": "Supportive",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Consumes SP 10 and cures a single target from Poison status effect.",
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/53.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/53",
          "tree": {
            "idx": 10,
            "row": 1,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 52,
                "level": 3,
                "name": "Envenom",
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
                      "sp-cost": "10"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 150,
          "imageFile": "150.png",
          "name": "Back Slide",
          "maxLevel": 1,
          "prerequisiteText": "Finish Quest",
          "group": "Supportive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Quickly move backwards to position\nyourself safely away from threats.",
          "levelDetails": [],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "7"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/150.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/150",
          "tree": {
            "idx": 11,
            "row": 1,
            "col": 2,
            "columns": 9,
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
                      "sp-cost": "7"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 151,
          "imageFile": "151.png",
          "name": "Find Stone",
          "maxLevel": 1,
          "prerequisiteText": "Finish Quest",
          "group": "Supportive",
          "type": "",
          "target": "Ground",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Pick up a Stone from the ground.",
          "levelDetails": [],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "2"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/151.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/151",
          "tree": {
            "idx": 12,
            "row": 1,
            "col": 3,
            "columns": 9,
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
                      "sp-cost": "2"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
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
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/143.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/143",
          "tree": {
            "idx": 14,
            "row": 1,
            "col": 5,
            "columns": 9,
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
          "irowikiUrl": "",
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
      "id": 5288,
      "imageFile": "5288.png",
      "name": "Shadow Sense",
      "maxLevel": 10,
      "prerequisiteText": "basic skill",
      "group": "Passive",
      "type": "",
      "target": "",
      "recoversAp": "",
      "consumesAp": "",
      "description": "Increase your FLEE. Katars and Daggers also increase CRIT.",
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
      "iconUrl": "assets/divine-pride/skills/5288.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5288",
      "tree": {
        "idx": 0,
        "row": 0,
        "col": 0,
        "columns": 9,
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
      "irowikiUrl": "",
      "balanceNotes": [],
      "api": {
        "status": "not-used",
        "entries": [],
        "selectedEntry": null
      }
    },
    {
      "id": 5286,
      "imageFile": "5286.png",
      "name": "Dancing Knife",
      "maxLevel": 5,
      "prerequisiteText": "Shadow Sense Lv. 3",
      "group": "Active",
      "type": "Buff",
      "target": "Self",
      "recoversAp": "",
      "consumesAp": "",
      "description": "A Dagger skill.\nSummon small spinning blades around you to attack surrounding enemies in 5 x5 cells.\nThis skill's effect is canceled immediately if you change to a different, non-Dagger Weapon for its duration.\nThis skill additionally increases damage, depending on your Base Level and POW.",
      "levelDetails": [],
      "fixedCastTime": "1 second",
      "variableCastTime": "1 second",
      "castDelay": "1 second",
      "cooldown": "30 seconds",
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
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5286.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5286",
      "tree": {
        "idx": 8,
        "row": 0,
        "col": 8,
        "columns": 9,
        "requirements": [
          {
            "id": 5288,
            "level": 3,
            "name": "Shadow Sense",
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
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "sp-cost": "40"
                }
              },
              {
                "level": 2,
                "values": {
                  "sp-cost": "45"
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
                  "sp-cost": "55"
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
      "irowikiUrl": "",
      "balanceNotes": [],
      "api": {
        "status": "not-used",
        "entries": [],
        "selectedEntry": null
      }
    },
    {
      "id": 5287,
      "imageFile": "5287.png",
      "name": "Savage Impact",
      "maxLevel": 10,
      "prerequisiteText": "Cross-impact 5, Shadow Sense 3",
      "group": "Active",
      "type": "Melee Physical",
      "target": "Single Target",
      "recoversAp": "2",
      "consumesAp": "",
      "description": "Katar-only skills,\nQuickly approaches the target and inflicts melee physical damage 3 times to the target and enemies within the surrounding range.\n(When cast in Cloaking Exceed state, deals melee physical damage 5 times.)\nDamage increases additionally depending on the user's base level and POW, and causes greater damage in Shadow Exceed state.\nCritical damage is applied with a probability of half the user's critical probability.\nIn the case of critical damage, half of the total critical damage increase options are applied.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK Per Hit 90%/ 110%(Shadow Exceed)\nArea of Effect: 5x5Cells"
        },
        {
          "level": 2,
          "text": "ATK Per Hit 180%/ 220%(Shadow Exceed)\nArea of Effect: 5x5Cells"
        },
        {
          "level": 3,
          "text": "ATK Per Hit 270%/ 330%(Shadow Exceed)\nArea of Effect: 5x5Cells"
        },
        {
          "level": 4,
          "text": "ATK Per Hit 360%/ 440%(Shadow Exceed)\nArea of Effect: 5x5Cells"
        },
        {
          "level": 5,
          "text": "ATK Per Hit 450%/ 550%(Shadow Exceed)\nArea of Effect: 5x5Cells"
        },
        {
          "level": 6,
          "text": "ATK Per Hit 540%/ 660%(Shadow Exceed)\nArea of Effect: 7x7Cells"
        },
        {
          "level": 7,
          "text": "ATK Per Hit 630%/ 770%(Shadow Exceed)\nArea of Effect: 7x7Cells"
        },
        {
          "level": 8,
          "text": "ATK Per Hit 720%/ 880%(Shadow Exceed)\nArea of Effect: 7x7Cells"
        },
        {
          "level": 9,
          "text": "ATK Per Hit 810%/ 990%(Shadow Exceed)\nArea of Effect: 7x7Cells"
        },
        {
          "level": 10,
          "text": "ATK Per Hit 900%/ 1100%(Shadow Exceed)\nArea of Effect: 7x7Cells"
        }
      ],
      "fixedCastTime": "0 seconds",
      "variableCastTime": "0 seconds",
      "castDelay": "0.3 seconds",
      "cooldown": "0.7 seconds",
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
              "value": "48"
            },
            {
              "level": 3,
              "value": "51"
            },
            {
              "level": 4,
              "value": "54"
            },
            {
              "level": 5,
              "value": "57"
            },
            {
              "level": 6,
              "value": "60"
            },
            {
              "level": 7,
              "value": "63"
            },
            {
              "level": 8,
              "value": "66"
            },
            {
              "level": 9,
              "value": "69"
            },
            {
              "level": 10,
              "value": "72"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5287.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5287",
      "tree": {
        "idx": 10,
        "row": 1,
        "col": 1,
        "columns": 9,
        "requirements": [
          {
            "id": 2022,
            "level": 5,
            "name": "Cross Impact",
            "visible": false
          },
          {
            "id": 5288,
            "level": 3,
            "name": "Shadow Sense",
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
            "value": "0 seconds"
          },
          {
            "label": "Variable Cast Time",
            "value": "0 seconds"
          },
          {
            "label": "Cast Delay",
            "value": "0.3 seconds"
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
            "value": "2"
          }
        ],
        "levelTables": [
          {
            "title": "Level Scaling",
            "columns": [
              {
                "id": "base-damage-atk-per-hit",
                "label": "Base Damage (ATK per Hit)"
              },
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
                  "base-damage-atk-per-hit": "90%",
                  "area-of-effect": "5x5",
                  "sp-cost": "45"
                }
              },
              {
                "level": 2,
                "values": {
                  "base-damage-atk-per-hit": "180%",
                  "area-of-effect": "5x5",
                  "sp-cost": "48"
                }
              },
              {
                "level": 3,
                "values": {
                  "base-damage-atk-per-hit": "270%",
                  "area-of-effect": "5x5",
                  "sp-cost": "51"
                }
              },
              {
                "level": 4,
                "values": {
                  "base-damage-atk-per-hit": "360%",
                  "area-of-effect": "5x5",
                  "sp-cost": "54"
                }
              },
              {
                "level": 5,
                "values": {
                  "base-damage-atk-per-hit": "450%",
                  "area-of-effect": "5x5",
                  "sp-cost": "57"
                }
              },
              {
                "level": 6,
                "values": {
                  "base-damage-atk-per-hit": "540%",
                  "area-of-effect": "7x7",
                  "sp-cost": "60"
                }
              },
              {
                "level": 7,
                "values": {
                  "base-damage-atk-per-hit": "630%",
                  "area-of-effect": "7x7",
                  "sp-cost": "63"
                }
              },
              {
                "level": 8,
                "values": {
                  "base-damage-atk-per-hit": "720%",
                  "area-of-effect": "7x7",
                  "sp-cost": "66"
                }
              },
              {
                "level": 9,
                "values": {
                  "base-damage-atk-per-hit": "810%",
                  "area-of-effect": "7x7",
                  "sp-cost": "69"
                }
              },
              {
                "level": 10,
                "values": {
                  "base-damage-atk-per-hit": "900%",
                  "area-of-effect": "7x7",
                  "sp-cost": "72"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "irowikiUrl": "",
      "balanceNotes": [
        {
          "skillName": "Savage Impact",
          "versionId": "rebalance-1",
          "versionLabel": "Rebalance 1",
          "file": "rebalances/shadow-cross/rebalance_1.md",
          "section": "5.2",
          "notes": [
            "Removes \"cloaking\" condition requirement.",
            "Reduces cooldown from 3 seconds to 1 second based on level 10.",
            "Adds delay after skill by 0.3 seconds based on level 10.",
            "Changes damage from 3500%Atk to 600%Atk based on level 10.",
            "Changes damage while under Shadow Exceed buff from 5000%Atk to 1000%Atk based on level 10.",
            "Changes damage logic from 8 split hits to 3 cumulative hits.",
            "Increases number of hit to 5 hits if using the skill while under Cloaking Exceed buff."
          ],
          "specRows": [
            {
              "label": "\"cloaking\" Condition Requirement",
              "before": "\"cloaking\" condition requirement",
              "after": "Removed",
              "scope": "",
              "source": "Removes \"cloaking\" condition requirement."
            },
            {
              "label": "Cooldown",
              "before": "3 seconds",
              "after": "1 second",
              "scope": "Lv 10",
              "source": "Reduces cooldown from 3 seconds to 1 second based on level 10."
            },
            {
              "label": "Damage",
              "before": "3500%Atk",
              "after": "600%Atk",
              "scope": "Lv 10",
              "source": "Changes damage from 3500%Atk to 600%Atk based on level 10."
            },
            {
              "label": "Damage While Under Shadow Exceed Buff",
              "before": "5000%Atk",
              "after": "1000%Atk",
              "scope": "Lv 10",
              "source": "Changes damage while under Shadow Exceed buff from 5000%Atk to 1000%Atk based on level 10."
            },
            {
              "label": "Damage Logic",
              "before": "8 split hits",
              "after": "3 cumulative hits",
              "scope": "",
              "source": "Changes damage logic from 8 split hits to 3 cumulative hits."
            }
          ]
        },
        {
          "skillName": "Savage Impact",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/shadow-cross/rebalance_2.md",
          "section": "5.1",
          "notes": [
            "Increases SP consumption from 55 to 72 based on level 10.",
            "Increases area of effect from 3 x 3 cells to 5 x 5 cells.",
            "Increases damage from 600%/1000%(Shadow Exceed)Atk to 900%/1100%(Shadow Exceed)Atk per hit based on level 10."
          ],
          "specRows": [
            {
              "label": "SP Cost",
              "before": "55",
              "after": "72",
              "scope": "Lv 10",
              "source": "Increases SP consumption from 55 to 72 based on level 10."
            },
            {
              "label": "Area of Effect",
              "before": "3 x 3 cells",
              "after": "5 x 5 cells",
              "scope": "",
              "source": "Increases area of effect from 3 x 3 cells to 5 x 5 cells."
            },
            {
              "label": "Damage",
              "before": "600%/1000%(Shadow E x ceed)Atk",
              "after": "900%/1100%(Shadow E x ceed)Atk per hit",
              "scope": "Lv 10",
              "source": "Increases damage from 600%/1000%(Shadow Exceed)Atk to 900%/1100%(Shadow Exceed)Atk per hit based on level 10."
            }
          ]
        },
        {
          "skillName": "Savage Impact",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/shadow-cross/rebalance_3.md",
          "section": "3.1",
          "notes": [
            "Reduces skill cooldown from 1 second to 0.7 seconds.",
            "Increases area of effect from 5 x 5 cells to 7 x 7 cells based on level 10.",
            "Applies AP recovery rate by 2."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "1 second",
              "after": "0.7 seconds",
              "scope": "",
              "source": "Reduces skill cooldown from 1 second to 0.7 seconds."
            },
            {
              "label": "Area of Effect",
              "before": "5 x 5 cells",
              "after": "7 x 7 cells",
              "scope": "Lv 10",
              "source": "Increases area of effect from 5 x 5 cells to 7 x 7 cells based on level 10."
            }
          ]
        },
        {
          "skillName": "Savage Impact",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/shadow-cross/rebalance_4.md",
          "section": "3.1",
          "notes": [
            "Increases base damage from 900%/1100%(Shadow Exceed)Atk to 1050%/1250%(Shadow Exceed)Atk per hit based on level 10."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "900%/1100%(Shadow E x ceed)Atk",
              "after": "1050%/1250%(Shadow E x ceed)Atk per hit",
              "scope": "Lv 10",
              "source": "Increases base damage from 900%/1100%(Shadow Exceed)Atk to 1050%/1250%(Shadow Exceed)Atk per hit based on level 10."
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
      "id": 5293,
      "imageFile": "5293.png",
      "name": "Enchanting Shadow",
      "maxLevel": 5,
      "prerequisiteText": "Poisonous Weapon Lv. 5 and Shadow Sense Lv. 3",
      "group": "Active",
      "type": "Buff",
      "target": "Self",
      "recoversAp": "",
      "consumesAp": "",
      "description": "Imbue your Weapon with the power of shadows.\nAttacks create a chance of leaving Shadow Wounds on enemies, increasing their damage, depending on the number of Shadow Wounds on them.",
      "levelDetails": [],
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "0 seconds",
      "castDelay": "1 second",
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
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5293.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5293",
      "tree": {
        "idx": 12,
        "row": 1,
        "col": 3,
        "columns": 9,
        "requirements": [
          {
            "id": 2027,
            "level": 5,
            "name": "Poisonous Weapon",
            "visible": false
          },
          {
            "id": 5288,
            "level": 3,
            "name": "Shadow Sense",
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
            "value": "1.5 seconds"
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
                  "sp-cost": "30"
                }
              },
              {
                "level": 2,
                "values": {
                  "sp-cost": "40"
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
                  "sp-cost": "60"
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
      "irowikiUrl": "",
      "balanceNotes": [],
      "api": {
        "status": "not-used",
        "entries": [],
        "selectedEntry": null
      }
    },
    {
      "id": 5289,
      "imageFile": "5289.png",
      "name": "Eternal Slash",
      "maxLevel": 5,
      "prerequisiteText": "Weapon Blocking Lv. 3, Shadow Sense Lv. 5, and Dancing Knife Lv. 3",
      "group": "Active",
      "type": "Melee Physical",
      "target": "1 Target",
      "recoversAp": "",
      "consumesAp": "",
      "description": "Can be used during Weapon Blocking.\nCritically inflict Melee Physical damage on a target.\nEach time it is used again within 3 seconds, the number of attacks is increased by 1 (up to a maximum of 5).\nAdditional damage increase based on the caster's base level and POW.\nand uses 50% of your CRIT to inflict Critical damage,\nIf the hit crits, half-total of the Critical Damage Bonus option is applied.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK per hit 265%/ 365% when Shadow Exceed is active"
        },
        {
          "level": 2,
          "text": "ATK per hit 530%/ 730% when Shadow Exceed is active"
        },
        {
          "level": 3,
          "text": "ATK per hit 795%/ 1095% when Shadow Exceed is active"
        },
        {
          "level": 4,
          "text": "ATK per hit 1060%/ 1460% when Shadow Exceed is active"
        },
        {
          "level": 5,
          "text": "ATK per hit 1325%/ 1825% when Shadow Exceed is active"
        }
      ],
      "fixedCastTime": "0 seconds",
      "variableCastTime": "0 seconds",
      "castDelay": "0.5 seconds",
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
      "iconUrl": "assets/divine-pride/skills/5289.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5289",
      "tree": {
        "idx": 15,
        "row": 1,
        "col": 6,
        "columns": 9,
        "requirements": [
          {
            "id": 2028,
            "level": 3,
            "name": "Weapon Blocking",
            "visible": false
          },
          {
            "id": 5286,
            "level": 3,
            "name": "Dancing Knife",
            "visible": true
          },
          {
            "id": 5288,
            "level": 5,
            "name": "Shadow Sense",
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
                "id": "base-damage-atk-per-hit",
                "label": "Base Damage (ATK per Hit)"
              },
              {
                "id": "sp-cost",
                "label": "SP Cost"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "base-damage-atk-per-hit": "265%",
                  "sp-cost": "60"
                }
              },
              {
                "level": 2,
                "values": {
                  "base-damage-atk-per-hit": "530%",
                  "sp-cost": "60"
                }
              },
              {
                "level": 3,
                "values": {
                  "base-damage-atk-per-hit": "795%",
                  "sp-cost": "60"
                }
              },
              {
                "level": 4,
                "values": {
                  "base-damage-atk-per-hit": "1060%",
                  "sp-cost": "60"
                }
              },
              {
                "level": 5,
                "values": {
                  "base-damage-atk-per-hit": "1325%",
                  "sp-cost": "60"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "irowikiUrl": "",
      "balanceNotes": [
        {
          "skillName": "Eternal Slash",
          "versionId": "rebalance-1",
          "versionLabel": "Rebalance 1",
          "file": "rebalances/shadow-cross/rebalance_1.md",
          "section": "5.3",
          "notes": [
            "Reduces cooldown from 1.5 seconds to 0.350.75 seconds based on level 5.",
            "Reduces delay after skill from 1 second to 0.5 seconds."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "1.5 seconds",
              "after": "0.350.75 seconds",
              "scope": "Lv 5",
              "source": "Reduces cooldown from 1.5 seconds to 0.350.75 seconds based on level 5."
            },
            {
              "label": "Cast Delay",
              "before": "1 second",
              "after": "0.5 seconds",
              "scope": "",
              "source": "Reduces delay after skill from 1 second to 0.5 seconds."
            }
          ]
        },
        {
          "skillName": "Eternal Slash",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/shadow-cross/rebalance_2.md",
          "section": "5.2",
          "notes": [
            "Reduces cooldown from 0.75 seconds to 0.5 seconds.",
            "Reduces damage from 1750%/2500%(Shadow Exceed)Atk to 1325%/1825%(Shadow Exceed)Atk per hit based on level 5.",
            "Increases SP consumption from 40 to 60 based on level 5.",
            "Increases cast range from 2 cells to 3 cells.",
            "Reduces factor weight of POW in skill formula from 5/7(Shadow Exceed) to 2/3(Shadow Exceed)."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "0.75 seconds",
              "after": "0.5 seconds",
              "scope": "",
              "source": "Reduces cooldown from 0.75 seconds to 0.5 seconds."
            },
            {
              "label": "Damage",
              "before": "1750%/2500%(Shadow E x ceed)Atk",
              "after": "1325%/1825%(Shadow E x ceed)Atk per hit",
              "scope": "Lv 5",
              "source": "Reduces damage from 1750%/2500%(Shadow Exceed)Atk to 1325%/1825%(Shadow Exceed)Atk per hit based on level 5."
            },
            {
              "label": "SP Cost",
              "before": "40",
              "after": "60",
              "scope": "Lv 5",
              "source": "Increases SP consumption from 40 to 60 based on level 5."
            },
            {
              "label": "Cast Range",
              "before": "2 cells",
              "after": "3 cells",
              "scope": "",
              "source": "Increases cast range from 2 cells to 3 cells."
            },
            {
              "label": "Factor Weight Of Pow In Skill Formula",
              "before": "5/7(Shadow E x ceed)",
              "after": "2/3(Shadow E x ceed)",
              "scope": "",
              "source": "Reduces factor weight of POW in skill formula from 5/7(Shadow Exceed) to 2/3(Shadow Exceed)."
            }
          ]
        },
        {
          "skillName": "Eternal Slash",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/shadow-cross/rebalance_4.md",
          "section": "3.3",
          "notes": [
            "Attack count no longer be removed by Dispell or Clearance.",
            "Increases base damage from 1325%/1825%(Shadow Exceed)Atk to 1500%/2100%(Shadow Exceed)Atk per hit based on level 5."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "1325%/1825%(Shadow E x ceed)Atk",
              "after": "1500%/2100%(Shadow E x ceed)Atk per hit",
              "scope": "Lv 5",
              "source": "Increases base damage from 1325%/1825%(Shadow Exceed)Atk to 1500%/2100%(Shadow Exceed)Atk per hit based on level 5."
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
      "id": 6511,
      "imageFile": "6511.png",
      "name": "Cross Slash",
      "maxLevel": 5,
      "prerequisiteText": "Weapon Blocking 3, Dancing Knife 3",
      "group": "Active",
      "type": "Melee physical",
      "target": "Single target",
      "recoversAp": "2",
      "consumesAp": "",
      "description": "Deals melee physical damage to the target and surrounding enemies around the target for 3 hits.\nGains successful blocking state for 10 seconds when using this skill.\nDeals additional damage depends on user's base level and POW, deals more damage while under Shadow Exceed buff.\nHas a chance to trigger critical, critical chance is the half user's Cri.\nThe effectiveness of critical modifier is applied by half.",
      "levelDetails": [
        {
          "level": 1,
          "text": "300% Atk / 360% Atk (Shadow Exceed) per hit / area of effect: 5 x 5 cells."
        },
        {
          "level": 2,
          "text": "600% Atk / 720% Atk (Shadow Exceed) per hit / area of effect: 5 x 5 cells."
        },
        {
          "level": 3,
          "text": "900% Atk / 1080% Atk (Shadow Exceed) per hit / area of effect: 5 x 5 cells."
        },
        {
          "level": 4,
          "text": "1200% Atk / 1440% Atk (Shadow Exceed) per hit / area of effect: 7 x 7 cells."
        },
        {
          "level": 5,
          "text": "1500% Atk / 1800% Atk (Shadow Exceed) per hit / area of effect: 7 x 7 cells."
        }
      ],
      "levelExtras": [],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/6511.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6511",
      "tree": {
        "idx": 16,
        "row": 1,
        "col": 7,
        "columns": 9,
        "requirements": [
          {
            "id": 2028,
            "level": 3,
            "name": "Weapon Blocking",
            "visible": false
          },
          {
            "id": 5286,
            "level": 3,
            "name": "Dancing Knife",
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
            "value": "Single target"
          },
          {
            "label": "AP Generated",
            "value": "2"
          }
        ],
        "levelTables": [
          {
            "title": "Level Scaling",
            "columns": [
              {
                "id": "base-damage-atk-per-hit",
                "label": "Base Damage (ATK per Hit)"
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
                  "base-damage-atk-per-hit": "300%"
                }
              },
              {
                "level": 2,
                "values": {
                  "area-of-effect": "5x5",
                  "base-damage-atk-per-hit": "600%"
                }
              },
              {
                "level": 3,
                "values": {
                  "area-of-effect": "5x5",
                  "base-damage-atk-per-hit": "900%"
                }
              },
              {
                "level": 4,
                "values": {
                  "area-of-effect": "7x7",
                  "base-damage-atk-per-hit": "1200%"
                }
              },
              {
                "level": 5,
                "values": {
                  "area-of-effect": "7x7",
                  "base-damage-atk-per-hit": "1500%"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "irowikiUrl": "",
      "balanceNotes": [],
      "api": {
        "status": "not-used",
        "entries": [],
        "selectedEntry": null
      }
    },
    {
      "id": 5292,
      "imageFile": "5292.png",
      "name": "Impact Crater",
      "maxLevel": 5,
      "prerequisiteText": "Rolling Cutter Lv. 5, Shadow Sense Lv. 5, Savage Impact Lv. 5, and Weapon Blocking Lv. 3",
      "group": "Active",
      "type": "Melee Physical",
      "target": "Area of Effect",
      "recoversAp": "3",
      "consumesAp": "",
      "description": "Katar-only skill.\nInflict Melee Physical damage on surrounding target that can crit, depending on your Spin stacks.\n(You can't use the skill without Spin stack)\nThis skill also casts Weapon Blocking Success mode for 10 seconds.\nAdditional Damage increase based on the caster's base level and POW.\nand uses 50% of your CRIT to inflict Critical damage,\nIf it crits, it inflicts half of the total of your Critical Damage Bonus options as damage.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK per hit 80%/Effective range: 3x3 cells"
        },
        {
          "level": 2,
          "text": "ATK per hit 160%/Effective range: 3x3 cells"
        },
        {
          "level": 3,
          "text": "ATK per hit 240%/Effective range: 5x5 cells"
        },
        {
          "level": 4,
          "text": "ATK per hit 320%/Effective range: 5x5 cells"
        },
        {
          "level": 5,
          "text": "ATK per hit 400%/Effective range: 7x7 cells"
        }
      ],
      "fixedCastTime": "0 seconds",
      "variableCastTime": "0 seconds",
      "castDelay": "0.3 seconds",
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
              "value": "54"
            },
            {
              "level": 3,
              "value": "62"
            },
            {
              "level": 4,
              "value": "70"
            },
            {
              "level": 5,
              "value": "78"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5292.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5292",
      "tree": {
        "idx": 17,
        "row": 1,
        "col": 8,
        "columns": 9,
        "requirements": [
          {
            "id": 2028,
            "level": 3,
            "name": "Weapon Blocking",
            "visible": false
          },
          {
            "id": 2036,
            "level": 5,
            "name": "Rolling Cutter",
            "visible": false
          },
          {
            "id": 5287,
            "level": 5,
            "name": "Savage Impact",
            "visible": true
          },
          {
            "id": 5288,
            "level": 5,
            "name": "Shadow Sense",
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
            "value": "0 seconds"
          },
          {
            "label": "Variable Cast Time",
            "value": "0 seconds"
          },
          {
            "label": "Cast Delay",
            "value": "0.3 seconds"
          },
          {
            "label": "Target",
            "value": "Area of Effect"
          },
          {
            "label": "Area of Effect",
            "value": "Lv 1: 3 x 3 cells / Lv 2: 3 x 3 cells / Lv 3: 5 x 5 cells / Lv 4: 5 x 5 cells / Lv 5: 7 x 7 cells"
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
                "id": "base-damage-atk-per-hit",
                "label": "Base Damage (ATK per Hit)"
              },
              {
                "id": "sp-cost",
                "label": "SP Cost"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "base-damage-atk-per-hit": "80%",
                  "sp-cost": "46"
                }
              },
              {
                "level": 2,
                "values": {
                  "base-damage-atk-per-hit": "160%",
                  "sp-cost": "54"
                }
              },
              {
                "level": 3,
                "values": {
                  "base-damage-atk-per-hit": "240%",
                  "sp-cost": "62"
                }
              },
              {
                "level": 4,
                "values": {
                  "base-damage-atk-per-hit": "320%",
                  "sp-cost": "70"
                }
              },
              {
                "level": 5,
                "values": {
                  "base-damage-atk-per-hit": "400%",
                  "sp-cost": "78"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "irowikiUrl": "",
      "balanceNotes": [
        {
          "skillName": "Impact Crater",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/shadow-cross/rebalance_2.md",
          "section": "5.3",
          "notes": [
            "Reduces cooldown from 5 seconds to 1.5 seconds.",
            "Removes delay after skill.",
            "Increases SP consumption from 54 to 78 based on level 5.",
            "Reduces AP recovery rate from 5 to 3.",
            "Increases damage from 325%Atk to 400%Atk per hit based on level 5."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "5 seconds",
              "after": "1.5 seconds",
              "scope": "",
              "source": "Reduces cooldown from 5 seconds to 1.5 seconds."
            },
            {
              "label": "Cast Delay",
              "before": "delay",
              "after": "Removed",
              "scope": "",
              "source": "Removes delay after skill."
            },
            {
              "label": "SP Cost",
              "before": "54",
              "after": "78",
              "scope": "Lv 5",
              "source": "Increases SP consumption from 54 to 78 based on level 5."
            },
            {
              "label": "AP Generated",
              "before": "5",
              "after": "3",
              "scope": "",
              "source": "Reduces AP recovery rate from 5 to 3."
            },
            {
              "label": "Damage",
              "before": "325%Atk",
              "after": "400%Atk per hit",
              "scope": "Lv 5",
              "source": "Increases damage from 325%Atk to 400%Atk per hit based on level 5."
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
      "id": 5290,
      "imageFile": "5290.png",
      "name": "Potent Venom",
      "maxLevel": 10,
      "prerequisiteText": "Shadow Sense Lv. 5 and Enchanting Shadow Lv. 3",
      "group": "Active",
      "type": "Buff",
      "target": "Self",
      "recoversAp": "",
      "consumesAp": "",
      "description": "Requires a Weapon with Deadly Poison applied on it.\nGive yourself an effect to ignore the target's Physical Resistance (RES).\nWhen Deadly Poison is dispelled, the effect of Potent Venom is also dispelled.",
      "levelDetails": [
        {
          "level": 1,
          "text": "Ignore Physical RES: 2%/ Effect Duration: 75 seconds"
        },
        {
          "level": 2,
          "text": "Ignore Physical RES: 4%/ Effect Duration: 100 seconds"
        },
        {
          "level": 3,
          "text": "Ignore Physical RES: 6%/ Effect Duration: 125 seconds"
        },
        {
          "level": 4,
          "text": "Ignore Physical RES: 8%/ Effect Duration: 150 seconds"
        },
        {
          "level": 5,
          "text": "Ignore Physical RES: 10%/ Effect Duration: 175 seconds"
        },
        {
          "level": 6,
          "text": "Ignore Physical RES: 12%/ Effect Duration: 200 seconds"
        },
        {
          "level": 7,
          "text": "Ignore Physical RES: 14%/ Effect Duration: 225 seconds"
        },
        {
          "level": 8,
          "text": "Ignore Physical RES: 16%/ Effect Duration: 250 seconds"
        },
        {
          "level": 9,
          "text": "Ignore Physical RES: 18%/ Effect Duration: 275 seconds"
        },
        {
          "level": 10,
          "text": "Ignore Physical RES: 20%/ Effect Duration: 300 seconds"
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
            },
            {
              "level": 6,
              "value": "40"
            },
            {
              "level": 7,
              "value": "45"
            },
            {
              "level": 8,
              "value": "50"
            },
            {
              "level": 9,
              "value": "55"
            },
            {
              "level": 10,
              "value": "60"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5290.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5290",
      "tree": {
        "idx": 19,
        "row": 2,
        "col": 1,
        "columns": 9,
        "requirements": [
          {
            "id": 5288,
            "level": 5,
            "name": "Shadow Sense",
            "visible": true
          },
          {
            "id": 5293,
            "level": 3,
            "name": "Enchanting Shadow",
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
            "label": "Duration",
            "value": "Lv 1: 75 seconds / Lv 2: 100 seconds / Lv 3: 125 seconds / Lv 4: 150 seconds / Lv 5: 175 seconds / Lv 6: 200 seconds / Lv 7: 225 seconds / Lv 8: 250 seconds / Lv 9: 275 seconds / Lv 10: 300 seconds"
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
                  "effect": "Ignore Physical RES: 2%/ Effect Duration: 75 seconds",
                  "sp-cost": "15"
                }
              },
              {
                "level": 2,
                "values": {
                  "effect": "Ignore Physical RES: 4%/ Effect Duration: 100 seconds",
                  "sp-cost": "20"
                }
              },
              {
                "level": 3,
                "values": {
                  "effect": "Ignore Physical RES: 6%/ Effect Duration: 125 seconds",
                  "sp-cost": "25"
                }
              },
              {
                "level": 4,
                "values": {
                  "effect": "Ignore Physical RES: 8%/ Effect Duration: 150 seconds",
                  "sp-cost": "30"
                }
              },
              {
                "level": 5,
                "values": {
                  "effect": "Ignore Physical RES: 10%/ Effect Duration: 175 seconds",
                  "sp-cost": "35"
                }
              },
              {
                "level": 6,
                "values": {
                  "effect": "Ignore Physical RES: 12%/ Effect Duration: 200 seconds",
                  "sp-cost": "40"
                }
              },
              {
                "level": 7,
                "values": {
                  "effect": "Ignore Physical RES: 14%/ Effect Duration: 225 seconds",
                  "sp-cost": "45"
                }
              },
              {
                "level": 8,
                "values": {
                  "effect": "Ignore Physical RES: 16%/ Effect Duration: 250 seconds",
                  "sp-cost": "50"
                }
              },
              {
                "level": 9,
                "values": {
                  "effect": "Ignore Physical RES: 18%/ Effect Duration: 275 seconds",
                  "sp-cost": "55"
                }
              },
              {
                "level": 10,
                "values": {
                  "effect": "Ignore Physical RES: 20%/ Effect Duration: 300 seconds",
                  "sp-cost": "60"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "irowikiUrl": "",
      "balanceNotes": [
        {
          "skillName": "Potent Venom",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/shadow-cross/rebalance_2.md",
          "section": "5.5",
          "notes": [
            "Increases duration from 120 seconds to 300 seconds based on level 10.",
            "Reduces physical resistance ignoring from 30% to 20% based on level 10."
          ],
          "specRows": [
            {
              "label": "Duration",
              "before": "120 seconds",
              "after": "300 seconds",
              "scope": "Lv 10",
              "source": "Increases duration from 120 seconds to 300 seconds based on level 10."
            },
            {
              "label": "Physical Resistance Ignoring",
              "before": "30%",
              "after": "20%",
              "scope": "Lv 10",
              "source": "Reduces physical resistance ignoring from 30% to 20% based on level 10."
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
      "id": 5291,
      "imageFile": "5291.png",
      "name": "Shadow Stab",
      "maxLevel": 5,
      "prerequisiteText": "Cloaking Exeed 5, Shadow Sense 5, Dancing Knife 5, Eternal Slash 3",
      "group": "Active",
      "type": "Melee Physical",
      "target": "Single Target",
      "recoversAp": "2",
      "consumesAp": "",
      "description": "Dagger-only skill.\nDeals melee physical damage to the target twice, ignoring the target's physical defense.\nWhen used in Cloaking Exceed state, attacks 3 times with higher attack power.\nDamage is additionally increased depending on the user's base level and POW.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK Per Hit 350%/400%(Cloaking Exceed)"
        },
        {
          "level": 2,
          "text": "ATK Per Hit 700%/800%(Cloaking Exceed)"
        },
        {
          "level": 3,
          "text": "ATK Per Hit 1050%/1200%(Cloaking Exceed)"
        },
        {
          "level": 4,
          "text": "ATK Per Hit 1400%/1600%(Cloaking Exceed)"
        },
        {
          "level": 5,
          "text": "ATK Per Hit 1750%/2000%(Cloaking Exceed)"
        }
      ],
      "fixedCastTime": "0 seconds",
      "variableCastTime": "0 seconds",
      "castDelay": "0 seconds",
      "cooldown": "0.35 seconds",
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
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5291.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5291",
      "tree": {
        "idx": 22,
        "row": 2,
        "col": 4,
        "columns": 9,
        "requirements": [
          {
            "id": 2033,
            "level": 5,
            "name": "Cloaking Exceed",
            "visible": false
          },
          {
            "id": 5286,
            "level": 5,
            "name": "Dancing Knife",
            "visible": true
          },
          {
            "id": 5288,
            "level": 5,
            "name": "Shadow Sense",
            "visible": true
          },
          {
            "id": 5289,
            "level": 3,
            "name": "Eternal Slash",
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
            "value": "0.35 seconds"
          },
          {
            "label": "Target",
            "value": "Single Target"
          },
          {
            "label": "AP Generated",
            "value": "2"
          }
        ],
        "levelTables": [
          {
            "title": "Level Scaling",
            "columns": [
              {
                "id": "base-damage-atk-per-hit",
                "label": "Base Damage (ATK per Hit)"
              },
              {
                "id": "sp-cost",
                "label": "SP Cost"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "base-damage-atk-per-hit": "350%",
                  "sp-cost": "40"
                }
              },
              {
                "level": 2,
                "values": {
                  "base-damage-atk-per-hit": "700%",
                  "sp-cost": "45"
                }
              },
              {
                "level": 3,
                "values": {
                  "base-damage-atk-per-hit": "1050%",
                  "sp-cost": "50"
                }
              },
              {
                "level": 4,
                "values": {
                  "base-damage-atk-per-hit": "1400%",
                  "sp-cost": "55"
                }
              },
              {
                "level": 5,
                "values": {
                  "base-damage-atk-per-hit": "1750%",
                  "sp-cost": "60"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "irowikiUrl": "",
      "balanceNotes": [
        {
          "skillName": "Shadow Stab",
          "versionId": "rebalance-1",
          "versionLabel": "Rebalance 1",
          "file": "rebalances/shadow-cross/rebalance_1.md",
          "section": "5.1",
          "notes": [
            "Reduces cooldown from 3 seconds to 1 second based on level 5.",
            "Reduces AP recovery rate from 3 to 1."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "3 seconds",
              "after": "1 second",
              "scope": "Lv 5",
              "source": "Reduces cooldown from 3 seconds to 1 second based on level 5."
            },
            {
              "label": "AP Generated",
              "before": "3",
              "after": "1",
              "scope": "",
              "source": "Reduces AP recovery rate from 3 to 1."
            }
          ]
        },
        {
          "skillName": "Shadow Stab",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/shadow-cross/rebalance_2.md",
          "section": "5.4",
          "notes": [
            "Reduces SP consumption from 65 to 60 based on level 5.",
            "Increases AP recovery rate from 1 to 2.",
            "Reduces cooldown from 1 seconds to 0.35 seconds.",
            "Removes 0.5 seconds delay after skill.",
            "Reduces damage from 3750%Atk to 1500%Atk per hit based on level 5."
          ],
          "specRows": [
            {
              "label": "SP Cost",
              "before": "65",
              "after": "60",
              "scope": "Lv 5",
              "source": "Reduces SP consumption from 65 to 60 based on level 5."
            },
            {
              "label": "AP Generated",
              "before": "1",
              "after": "2",
              "scope": "",
              "source": "Increases AP recovery rate from 1 to 2."
            },
            {
              "label": "Cooldown",
              "before": "1 seconds",
              "after": "0.35 seconds",
              "scope": "",
              "source": "Reduces cooldown from 1 seconds to 0.35 seconds."
            },
            {
              "label": "Cast Delay",
              "before": "0.5 seconds delay",
              "after": "Removed",
              "scope": "",
              "source": "Removes 0.5 seconds delay after skill."
            },
            {
              "label": "Damage",
              "before": "3750%Atk",
              "after": "1500%Atk per hit",
              "scope": "Lv 5",
              "source": "Reduces damage from 3750%Atk to 1500%Atk per hit based on level 5."
            }
          ]
        },
        {
          "skillName": "Shadow Stab",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/shadow-cross/rebalance_3.md",
          "section": "3.2",
          "notes": [
            "The skill will deal damage for 2 hits.",
            "While under Cloaking Exceed buff, increases number of hit to 3 hits with higher damage per hit.",
            "Increases factor weight of POW in skill formula while under Cloaking Exceed buff from 5 to 7.",
            "Increases base damage from 1500%Atk to 1750%/2000%Atk per hit based on level 5."
          ],
          "specRows": [
            {
              "label": "Factor Weight Of Pow In Skill Formula While Under Cloaking Exceed Buff",
              "before": "5",
              "after": "7",
              "scope": "",
              "source": "Increases factor weight of POW in skill formula while under Cloaking Exceed buff from 5 to 7."
            },
            {
              "label": "Damage",
              "before": "1500%Atk",
              "after": "1750%/2000%Atk per hit",
              "scope": "Lv 5",
              "source": "Increases base damage from 1500%Atk to 1750%/2000%Atk per hit based on level 5."
            }
          ]
        },
        {
          "skillName": "Shadow Stab",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/shadow-cross/rebalance_4.md",
          "section": "3.2",
          "notes": [
            "Unifies number of hit from 2/3(Cloaking Exceed) hits to 3 hits regardless of Cloaking Exceed buff.",
            "Increases base damage from 1750%/2000%(Cloaking Exceed)Atk to 2750%/3250%(Cloaking Exceed)Atk per hit based on level 5."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "1750%/2000%(Cloaking E x ceed)Atk",
              "after": "2750%/3250%(Cloaking E x ceed)Atk per hit",
              "scope": "Lv 5",
              "source": "Increases base damage from 1750%/2000%(Cloaking Exceed)Atk to 2750%/3250%(Cloaking Exceed)Atk per hit based on level 5."
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
      "id": 5285,
      "imageFile": "5285.png",
      "name": "Shadow Exceed",
      "maxLevel": 10,
      "prerequisiteText": "Shadow Sense Lv. 7, Enchanting Shadow Lv. 5, and Potent Venom Lv. 3",
      "group": "Active(AP)",
      "type": "Buff",
      "target": "Self",
      "recoversAp": "",
      "consumesAp": "",
      "description": "Maximizes your abilities to increase the power of Savage Impact and Eternal Slash temporarily.",
      "levelDetails": [
        {
          "level": 1,
          "text": "Duration: 30 seconds/ Consumed AP: 152"
        },
        {
          "level": 2,
          "text": "Duration: 60 seconds/ Consumed AP: 149"
        },
        {
          "level": 3,
          "text": "Duration: 90 seconds/ Consumed AP: 146"
        },
        {
          "level": 4,
          "text": "Duration: 120 seconds/ Consumed AP: 143"
        },
        {
          "level": 5,
          "text": "Duration: 150 seconds/ Consumed AP: 140"
        },
        {
          "level": 6,
          "text": "Duration: 180 seconds/ Consumed AP: 137"
        },
        {
          "level": 7,
          "text": "Duration: 210 seconds/ Consumed AP: 134"
        },
        {
          "level": 8,
          "text": "Duration: 240 seconds/ Consumed AP: 131"
        },
        {
          "level": 9,
          "text": "Duration: 270 seconds/ Consumed AP: 128"
        },
        {
          "level": 10,
          "text": "Duration: 300 seconds/ Consumed AP: 125"
        }
      ],
      "fixedCastTime": "1 second",
      "variableCastTime": "0 seconds",
      "castDelay": "0 seconds",
      "cooldown": "60 seconds",
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
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5285.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5285",
      "tree": {
        "idx": 25,
        "row": 2,
        "col": 7,
        "columns": 9,
        "requirements": [
          {
            "id": 5288,
            "level": 7,
            "name": "Shadow Sense",
            "visible": true
          },
          {
            "id": 5290,
            "level": 3,
            "name": "Potent Venom",
            "visible": true
          },
          {
            "id": 5293,
            "level": 5,
            "name": "Enchanting Shadow",
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
                  "effect": "/ Consumed AP: 152",
                  "sp-cost": "100"
                }
              },
              {
                "level": 2,
                "values": {
                  "duration": "60 seconds",
                  "effect": "/ Consumed AP: 149",
                  "sp-cost": "100"
                }
              },
              {
                "level": 3,
                "values": {
                  "duration": "90 seconds",
                  "effect": "/ Consumed AP: 146",
                  "sp-cost": "100"
                }
              },
              {
                "level": 4,
                "values": {
                  "duration": "120 seconds",
                  "effect": "/ Consumed AP: 143",
                  "sp-cost": "100"
                }
              },
              {
                "level": 5,
                "values": {
                  "duration": "150 seconds",
                  "effect": "/ Consumed AP: 140",
                  "sp-cost": "100"
                }
              },
              {
                "level": 6,
                "values": {
                  "duration": "180 seconds",
                  "effect": "/ Consumed AP: 137",
                  "sp-cost": "100"
                }
              },
              {
                "level": 7,
                "values": {
                  "duration": "210 seconds",
                  "effect": "/ Consumed AP: 134",
                  "sp-cost": "100"
                }
              },
              {
                "level": 8,
                "values": {
                  "duration": "240 seconds",
                  "effect": "/ Consumed AP: 131",
                  "sp-cost": "100"
                }
              },
              {
                "level": 9,
                "values": {
                  "duration": "270 seconds",
                  "effect": "/ Consumed AP: 128",
                  "sp-cost": "100"
                }
              },
              {
                "level": 10,
                "values": {
                  "duration": "300 seconds",
                  "effect": "/ Consumed AP: 125",
                  "sp-cost": "100"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "irowikiUrl": "",
      "balanceNotes": [
        {
          "skillName": "Shadow Exceed",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/shadow-cross/rebalance_2.md",
          "section": "5.7",
          "notes": [
            "Removes 1 second delay after skill.",
            "Reduces AP consumption from 150 to 125 based on level 10.",
            "Increases duration from 240 seconds to 300 seconds based on level 10."
          ],
          "specRows": [
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
              "after": "125",
              "scope": "Lv 10",
              "source": "Reduces AP consumption from 150 to 125 based on level 10."
            },
            {
              "label": "Duration",
              "before": "240 seconds",
              "after": "300 seconds",
              "scope": "Lv 10",
              "source": "Increases duration from 240 seconds to 300 seconds based on level 10."
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
      "id": 5294,
      "imageFile": "5294.png",
      "name": "Fatal Shadow Claw",
      "maxLevel": 10,
      "prerequisiteText": "Shadow Stab Lv. 5 and Impact Crater Lv. 5",
      "group": "Active(AP)",
      "type": "Melee Physical",
      "target": "1 Target",
      "recoversAp": "",
      "consumesAp": "",
      "description": "Quickly approach target, cast Dark Claw on it and others around it, and Critically inflict Melee Physical damage.\nHowever, this effect follows your Dark Claw level.\nInflicts more damage to Demi-Human and Dragon monsters.\nAdditional damage increase based on the caster's Base Level and POW, and for the Critical Damage bonus option, only a fraction of the total is applied.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK 1300%/ 1450% to Human/Dragon enemies\nEffective range: : 3x3 cells"
        },
        {
          "level": 2,
          "text": "ATK 2600%/ 2900% to Human/Dragon enemies\nEffective range: : 3x3 cells"
        },
        {
          "level": 3,
          "text": "ATK 3900%/ 4350% to Human/Dragon enemies\nEffective range: : 3x3 cells"
        },
        {
          "level": 4,
          "text": "ATK 5200%/ 5800% to Human/Dragon enemies\nEffective range: : 3x3 cells"
        },
        {
          "level": 5,
          "text": "ATK 6500%/ 7250% to Human/Dragon enemies\nEffective range: : 5x5 cells"
        },
        {
          "level": 6,
          "text": "ATK 7800%/ 8700% to Human/Dragon enemies\nEffective range: : 5x5 cells"
        },
        {
          "level": 7,
          "text": "ATK 9100%/ 10150% to Human/Dragon enemies\nEffective range: : 5x5 cells"
        },
        {
          "level": 8,
          "text": "ATK 10400%/ 11600% to Human/Dragon enemies\nEffective range: : 5x5 cells"
        },
        {
          "level": 9,
          "text": "ATK 11700%/ 13050% to Human/Dragon enemies\nEffective range: : 7x7 cells"
        },
        {
          "level": 10,
          "text": "ATK 13000%/ 14500% to Human/Dragon enemies\nEffective range: : 7x7 cells"
        }
      ],
      "fixedCastTime": "0.5 seconds",
      "variableCastTime": "0.5 seconds",
      "castDelay": "0 seconds",
      "cooldown": "60 seconds",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "150"
            },
            {
              "level": 2,
              "value": "150"
            },
            {
              "level": 3,
              "value": "150"
            },
            {
              "level": 4,
              "value": "150"
            },
            {
              "level": 5,
              "value": "150"
            },
            {
              "level": 6,
              "value": "150"
            },
            {
              "level": 7,
              "value": "150"
            },
            {
              "level": 8,
              "value": "150"
            },
            {
              "level": 9,
              "value": "150"
            },
            {
              "level": 10,
              "value": "150"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5294.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5294",
      "tree": {
        "idx": 30,
        "row": 3,
        "col": 3,
        "columns": 9,
        "requirements": [
          {
            "id": 5291,
            "level": 5,
            "name": "Shadow Stab",
            "visible": true
          },
          {
            "id": 5292,
            "level": 5,
            "name": "Impact Crater",
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
            "value": "0.5 seconds"
          },
          {
            "label": "Variable Cast Time",
            "value": "0.5 seconds"
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
            "value": "1 Target"
          }
        ],
        "levelTables": [
          {
            "title": "Level Scaling",
            "columns": [
              {
                "id": "base-damage-atk",
                "label": "Base Damage (ATK)"
              },
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
                  "base-damage-atk": "1300%",
                  "effect": "Effective range: : 3 x 3 cells",
                  "sp-cost": "150"
                }
              },
              {
                "level": 2,
                "values": {
                  "base-damage-atk": "2600%",
                  "effect": "Effective range: : 3 x 3 cells",
                  "sp-cost": "150"
                }
              },
              {
                "level": 3,
                "values": {
                  "base-damage-atk": "3900%",
                  "effect": "Effective range: : 3 x 3 cells",
                  "sp-cost": "150"
                }
              },
              {
                "level": 4,
                "values": {
                  "base-damage-atk": "5200%",
                  "effect": "Effective range: : 3 x 3 cells",
                  "sp-cost": "150"
                }
              },
              {
                "level": 5,
                "values": {
                  "base-damage-atk": "6500%",
                  "effect": "Effective range: : 5 x 5 cells",
                  "sp-cost": "150"
                }
              },
              {
                "level": 6,
                "values": {
                  "base-damage-atk": "7800%",
                  "effect": "Effective range: : 5 x 5 cells",
                  "sp-cost": "150"
                }
              },
              {
                "level": 7,
                "values": {
                  "base-damage-atk": "9100%",
                  "effect": "Effective range: : 5 x 5 cells",
                  "sp-cost": "150"
                }
              },
              {
                "level": 8,
                "values": {
                  "base-damage-atk": "10400%",
                  "effect": "Effective range: : 5 x 5 cells",
                  "sp-cost": "150"
                }
              },
              {
                "level": 9,
                "values": {
                  "base-damage-atk": "11700%",
                  "effect": "Effective range: : 7 x 7 cells",
                  "sp-cost": "150"
                }
              },
              {
                "level": 10,
                "values": {
                  "base-damage-atk": "13000%",
                  "effect": "Effective range: : 7 x 7 cells",
                  "sp-cost": "150"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "irowikiUrl": "",
      "balanceNotes": [
        {
          "skillName": "Fatal Shadow Claw",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/shadow-cross/rebalance_2.md",
          "section": "5.6",
          "notes": [
            "Reduces fixed casting time from 1.5 seconds to 0.5 seconds.",
            "Reduces variable casting time from 4 seconds to 0.5 seconds.",
            "Removes 0.5 seconds delay after skill.",
            "Increases damage from 6500%/9500%(demihuman and dragon race)Atk to 13000%/14500%(demihuman and dragon race)Atk based on level 10."
          ],
          "specRows": [
            {
              "label": "Fixed Casting Time",
              "before": "1.5 seconds",
              "after": "0.5 seconds",
              "scope": "",
              "source": "Reduces fixed casting time from 1.5 seconds to 0.5 seconds."
            },
            {
              "label": "Variable Casting Time",
              "before": "4 seconds",
              "after": "0.5 seconds",
              "scope": "",
              "source": "Reduces variable casting time from 4 seconds to 0.5 seconds."
            },
            {
              "label": "Cast Delay",
              "before": "0.5 seconds delay",
              "after": "Removed",
              "scope": "",
              "source": "Removes 0.5 seconds delay after skill."
            },
            {
              "label": "Damage",
              "before": "6500%/9500%(demihuman and dragon race)Atk",
              "after": "13000%/14500%(demihuman and dragon race)Atk",
              "scope": "Lv 10",
              "source": "Increases damage from 6500%/9500%(demihuman and dragon race)Atk to 13000%/14500%(demihuman and dragon race)Atk based on level 10."
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

export default shadowCrossData;
