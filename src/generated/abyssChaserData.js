export const abyssChaserData = {
  "generatedAt": "2026-07-10T18:52:50.392Z",
  "classId": 4260,
  "classSlug": "abyss-chaser",
  "className": "Abyss Chaser",
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
    "changedSkills": 9,
    "noteCount": 80,
    "addedSkills": 1,
    "versions": 5
  },
  "tree": {
    "columns": 7,
    "rows": 4,
    "skillTreeUrl": "https://www.divine-pride.net/tools/skilltree/4260",
    "jobIconUrl": "assets/divine-pride/jobs/4260.png"
  },
  "sources": {
    "rebalances": [
      "rebalances/abyss-chaser/rebalance_1.md",
      "rebalances/abyss-chaser/rebalance_2.md",
      "rebalances/abyss-chaser/rebalance_3.md",
      "rebalances/abyss-chaser/rebalance_4.md",
      "rebalances/abyss-chaser/rebalance_5.md"
    ],
    "rebalanceManifest": "rebalances/manifest.json",
    "divinePrideApiDocs": "https://www.divine-pride.net/api",
    "divinePrideSkillTree": "https://www.divine-pride.net/tools/skilltree/4260",
    "browiki": "https://browiki.org",
    "irowiki": "https://irowiki.org/wiki/"
  },
  "rebalanceVersions": [
    {
      "id": "rebalance-1",
      "label": "Rebalance 1",
      "file": "rebalances/abyss-chaser/rebalance_1.md",
      "heading": "6. Abyss Chaser",
      "className": "Abyss Chaser",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=9805",
      "scope": "main",
      "appliesTo": "Main classes only",
      "maxJobLevel": 50,
      "pointLimit": 49,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "6.1",
          "name": "Deft Stab",
          "notes": [
            "Reduces cooldown from 2 seconds to 0.3 seconds based on level 10."
          ]
        },
        {
          "section": "6.2",
          "name": "Unlucky Rush",
          "notes": [
            "Removes fixed casting time and variable casting time.",
            "Reduces cooldown from 2 seconds to 0.25 seconds based on level 5.",
            "Reduces damage from 2500%Atk to 1600%Atk based on level 5.",
            "Increases cast range to 9 cells.",
            "Changes damage bonus from CRT to POW."
          ]
        },
        {
          "section": "6.3",
          "name": "Abyss Dagger",
          "notes": [
            "Reduces damage from 2750%Atk to 1750%Atk but the skill will deal damage twice.",
            "Increases area of effect from 5x5 cells to 7x7 cells based on level 5.",
            "Reduces cooldown from 3 seconds to 0.3 seconds based on level 5.",
            "Increases duration of Abyss Dagger buff from 10 seconds to 15 seconds based on level 5.",
            "No longer increases Fatal Menace damage by 35%, the skill will apply the damage bonus in the skill damage formula instead."
          ]
        },
        {
          "section": "6.4",
          "name": "Fatal Menace",
          "notes": [
            "Increases cast range from 1 cell to 2 cells.",
            "Skill damage formula while under Abyss Dagger buff is increased to 1500%Atk based on level 10."
          ]
        },
        {
          "section": "6.5",
          "name": "Abyss Slayer",
          "notes": [
            "Increases duration from 60 seconds to 300 seconds."
          ]
        },
        {
          "section": "6.6",
          "name": "From the Abyss",
          "notes": [
            "Reduces sphere creation interval from 2 seconds to 1 second based on level 5.",
            "Recovers 20 AP based on level 5.",
            "Increases trigger chance from 10% to 15%.",
            "Increases area of effect from 7x7 cells to 9x9 cells."
          ]
        },
        {
          "section": "6.7",
          "name": "Abyss Square",
          "notes": [
            "Improves damage interval from every 0.7 seconds for 4 seconds to every 0.3 seconds for 3 seconds.",
            "Reduces cooldown from 4 seconds to 3 seconds based on level 5.",
            "Reduces delay after skill from 1 second to 0.5 seconds based on level 5.",
            "Increases damage from 700%Matk to 2000%Matk (includes Magic Sword Mastery level 10 bonus) based on level 5."
          ]
        },
        {
          "section": "6.8",
          "name": "Chain Reaction Shot",
          "notes": [
            "Reduces fixed casting time from 1.5 seconds to 1 second based on level 5.",
            "Reduces cooldown from 3 seconds to 1.5 seconds based on level 5.",
            "Reduces delay after skill from 1 second to 0.5 seconds.",
            "Increases damage of the secondary attack from 4250%Atk to 4750%Atk based on level 5."
          ]
        },
        {
          "section": "6.9",
          "name": "Frenzy Shot",
          "notes": [
            "Reduces cooldown from 2 seconds to 0.2 seconds based on level 10.",
            "Increases SP consumption from 85 to 125 based on level 10.",
            "Reduces AP recovery rate from 2 to 1.",
            "Reduces arrow consumption from 10 to 3.",
            "Reworks skill by replacing the chance to trigger the skill one more time with the 50% chance to deal 3 times damage based on level 10.",
            "Increases critical chance from the half of the user's cri to the user's cri. (By the way, the skill description mentiones that the skill already applied critical chance by the user's cri. I'm not sure what it means)."
          ]
        }
      ]
    },
    {
      "id": "rebalance-2",
      "label": "Rebalance 2",
      "file": "rebalances/abyss-chaser/rebalance_2.md",
      "heading": "6. Abyss Chaser",
      "className": "Abyss Chaser",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=11126",
      "scope": "main-and-expanded",
      "appliesTo": "Main and expanded classes",
      "maxJobLevel": 50,
      "pointLimit": 49,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "6.1",
          "name": "Abyss Dagger",
          "notes": [
            "Increases SP consumption from 60 to 64 based on level 5.",
            "Increases damage from 1750%Atk to 2600%Atk per hit based on level 5."
          ]
        },
        {
          "section": "6.2",
          "name": "Deft Stab",
          "notes": [
            "Increases SP consumption from 55 to 62 based on level 10.",
            "Increases AP recovery rate from 2 to 3.",
            "Increases damage from 3600%Atk to 5850%Atk based on level 10.",
            "Increases area of effect from 5 x 5 cells to 7 x 7 cells based on level 10."
          ]
        },
        {
          "section": "6.3",
          "name": "From the Abyss",
          "notes": [
            "Increases number of hit from 1 hit to 2 hits.",
            "Increases damage from 500%Matk to 2600%Matk per hit based on level 5."
          ]
        },
        {
          "section": "6.4",
          "name": "Abyss Square",
          "notes": [
            "Increases AP recovery rate from 4 to 5.",
            "Increases damage from 2000%Matk to 3850%Matk per hit based on level 5 (Magic Sword Mastery level 10)."
          ]
        },
        {
          "section": "6.5",
          "name": "Chain Reaction Shot",
          "notes": [
            "Reduces cooldown from 1.5 seconds to 1 second.",
            "Removes 0.5 seconds delay after skill.",
            "Reduces SP consumption from 80 to 75 based on level 5.",
            "Increases area of effect of secondary damage from 3 x 3 cells to 7 x 7 cells.",
            "Increases area of effect of primary damage from 7 x 7 cells to 9 x 9 cells based on level 5.",
            "Increases damage from 3000%(primary)/4750%(secondary)Atk to 4250%(primary)/12350%(secondary)Atk based on level 5.",
            "Increases factor weight of CON in skill formula from 5 to 15."
          ]
        },
        {
          "section": "6.6",
          "name": "Frenzy Shot",
          "notes": [
            "Reduces SP consumption from 125 to 55 based on level 10.",
            "Increases damage from 3500%Atk to 4000%Atk per hit based on level 10."
          ]
        },
        {
          "section": "6.7",
          "name": "Omega Abyss Strike",
          "notes": [
            "Reduces cooldown from 60 seconds to 3 seconds.",
            "Reduces SP consumption from 150 to 125.",
            "Reduces AP consumption from 150 to 15.",
            "Increases damage from 6000%/11500%(angel and demon race)Matk to 22000%/23500%(angel and demon race)Matk based on level 10."
          ]
        }
      ]
    },
    {
      "id": "rebalance-3",
      "label": "Rebalance 3",
      "file": "rebalances/abyss-chaser/rebalance_3.md",
      "heading": "9. Abyss Chaser",
      "className": "Abyss Chaser",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=12421",
      "scope": "main-and-expanded",
      "appliesTo": "Main and expanded classes",
      "maxJobLevel": 55,
      "pointLimit": 54,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "9.1",
          "name": "Abyss Dagger",
          "notes": [
            "Increases skill cooldown from 0.3 seconds to 0.4 seconds based on level 5.",
            "Increases SP consumption from 64 to 76 based on level 5.",
            "Increases base damage from 2600%Atk to 4600%Atk based on level 5."
          ]
        },
        {
          "section": "9.2",
          "name": "Deft Stab",
          "notes": [
            "Removes a chance to trigger the skill one more time.",
            "Increases SP consumption from 62 to 72 based on level 10.",
            "Increases skill cooldown from 0.3 seconds to 0.7 seconds.",
            "Reduces base damage from 5850%Atk to 3750%Atk based on level 10.",
            "Changes damage logic from 5 split hits to 5 cumulative hits."
          ]
        },
        {
          "section": "9.3",
          "name": "Frenzy Shot",
          "notes": [
            "Increases skill cooldown from 0.2 seconds to 0.35 seconds.",
            "Increases SP consumption from 55 to 65 based on level 10.",
            "Increases number of hit from 1 hit to 2 hits.",
            "Increases base damage from 4000%Atk to 6150%Atk based on level 10.",
            "Increases factor weight of CON in skill formula from 5 to 15."
          ]
        }
      ]
    },
    {
      "id": "rebalance-4",
      "label": "Rebalance 4",
      "file": "rebalances/abyss-chaser/rebalance_4.md",
      "heading": "9. Abyss Chaser",
      "className": "Abyss Chaser",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=13917",
      "scope": "main-and-expanded",
      "appliesTo": "Main and expanded classes",
      "maxJobLevel": 55,
      "pointLimit": 54,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "9.1",
          "name": "Abyss Slayer",
          "notes": [
            "Reduces AP consumption from 150 to 120."
          ]
        },
        {
          "section": "9.2",
          "name": "Omega Abyss Strike",
          "notes": [
            "Reduces fixed casting time from 1.5 seconds to 1 second.",
            "Reduces skill cooldown from 3 seconds to 0.7 seconds.",
            "Reduces AP consumption from 15 to 10.",
            "Changes damage property from neutral to fire.",
            "Increases base damage from 22000%/23500%(angel and demon)Matk to 26500%/28500%(angel and demon)Matk based on level 10."
          ]
        },
        {
          "section": "9.3",
          "name": "Abyss Dagger",
          "notes": [
            "Increases base damage from 4600%Atk to 7350%Atk based on level 5."
          ]
        },
        {
          "section": "9.4",
          "name": "Deft Stab",
          "notes": [
            "Increases base damage from 3750%Atk to 6200%Atk based on level 10.",
            "Increases factor weight of POW in skill formula from 5 to 7."
          ]
        },
        {
          "section": "9.5",
          "name": "From the Abyss",
          "notes": [
            "Reduces skill cooldown from 60 seconds to 30 seconds.",
            "Increases number of hit from 2 hits to 5 hits.",
            "Increases base damage from 2600%Matk to 3400%Matk based on level 5.",
            "No longer be removed by Dispell or Clearance.",
            "Increases the trigger chance of abyss sphere from 15% to 25% based on level 5."
          ]
        },
        {
          "section": "9.6",
          "name": "Abyss Square",
          "notes": [
            "Increases base damage from 2850+(Magic Sword Mastery skill level x 100)%Matk to 3750+(Magic Sword Mastery skill level x 200)Matk based on level 5."
          ]
        },
        {
          "section": "9.7",
          "name": "Chain Reaction Shot",
          "notes": [
            "Increases base damage of secondary attack from 12350%Atk to 13550%Atk based on level 5."
          ]
        },
        {
          "section": "9.8",
          "name": "Frenzy Shot",
          "notes": [
            "Increases AP recovery rate from 1 to 3.",
            "Increases base damage from 6150%Atk to 8250%Atk per hit based on level 10."
          ]
        }
      ]
    },
    {
      "id": "rebalance-5",
      "label": "Rebalance 5",
      "file": "rebalances/abyss-chaser/rebalance_5.md",
      "heading": "3. Abyss Chaser",
      "className": "Abyss Chaser",
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
      "file": "rebalances/abyss-chaser/added_skills.md",
      "skills": [
        "Abyss Flame"
      ]
    }
  ],
  "skillTabs": [
    {
      "id": "current",
      "label": "Abyss Chaser",
      "pointLimit": 59,
      "tree": {
        "columns": 7,
        "rows": 4
      },
      "skills": [
        {
          "id": 5311,
          "imageFile": "5311.png",
          "name": "Dagger Bow Mastery",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Dagger_Bow_Mastery",
          "description": "Daggers and Bows increase Physical damage on enemies, depending on their size.",
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
          "iconUrl": "assets/divine-pride/skills/5311.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5311",
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
          "id": 6512,
          "imageFile": "6512.png",
          "name": "Hit and Sliding",
          "maxLevel": 5,
          "prerequisiteText": "Dagger & Bow Mastery 3",
          "group": "Active",
          "type": "Melee physical",
          "target": "Single target",
          "recoversAp": "2",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Attack the target, deals melee physical damage to the target and moves the user backwards.\nIf using bow, damage type is long ranged physical damage.\nAdditionally, grants Chasing buff to the user for 60 seconds.\nDeals additional damage depends on user's base level and POW.\n[additional effect of Chasing]\nWhen Chasing buff is active, increases damage of the following skills.\n[Unlucky Rush]\n: +(Unlucky Rush Lv x2500)%\n[Chain Reaction Shot 2차 데미지]\n: +(Chain Reaction Shot Lv x700)%",
          "levelDetails": [
            {
              "level": 1,
              "text": "3500% Atk / moves 1 cell."
            },
            {
              "level": 2,
              "text": "7000% Atk / moves 2 cells."
            },
            {
              "level": 3,
              "text": "10500% Atk / moves 3 cells."
            },
            {
              "level": 4,
              "text": "14000% Atk / moves 4 cells."
            },
            {
              "level": 5,
              "text": "17500% Atk / moves 5 cells."
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6512.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6512",
          "tree": {
            "idx": 2,
            "row": 0,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 5311,
                "level": 3,
                "name": "Dagger Bow Mastery",
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
          "id": 5312,
          "imageFile": "5312.png",
          "name": "Magic Sword Mastery",
          "maxLevel": 10,
          "prerequisiteText": "Reproduce Lv. 5 and Shadow Spell Lv. 5",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Magic_Sword_Mastery",
          "description": "Daggers and One-handed Swords increase Magic damage on enemies, depending on their size.",
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
          "iconUrl": "assets/divine-pride/skills/5312.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5312",
          "tree": {
            "idx": 5,
            "row": 0,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 2285,
                "level": 5,
                "name": "Reproduce",
                "visible": false
              },
              {
                "id": 2286,
                "level": 5,
                "name": "Shadow Spell",
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
          "id": 5314,
          "imageFile": "5314.png",
          "name": "Abyss Dagger",
          "maxLevel": 5,
          "prerequisiteText": "Fatal Menace 5, Dagger & Bow Mastery 3",
          "group": "Active",
          "type": "Melee Physical",
          "target": "Instant Cast",
          "recoversAp": "0",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Abyss_Dagger",
          "description": "Dagger and one-handed sword only skill.\nDeals 2 hits of melee physical damage to the surrounding enemies within 7 x 7 cells around the user.\nDamage is additionally increased depending on the user's base level and POW.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK Per Hit 1000%/ increases Fatal Menace damage: 3Sec"
            },
            {
              "level": 2,
              "text": "ATK Per Hit 1900%/ increases Fatal Menace damage: 6Sec"
            },
            {
              "level": 3,
              "text": "ATK Per Hit 2800%/ increases Fatal Menace damage: 9Sec"
            },
            {
              "level": 4,
              "text": "ATK Per Hit 3700%/ increases Fatal Menace damage: 12Sec"
            },
            {
              "level": 5,
              "text": "ATK Per Hit 4600%/ increases Fatal Menace damage: 15Sec"
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
                  "value": "60"
                },
                {
                  "level": 2,
                  "value": "64"
                },
                {
                  "level": 3,
                  "value": "68"
                },
                {
                  "level": 4,
                  "value": "72"
                },
                {
                  "level": 5,
                  "value": "76"
                }
              ]
            }
          ],
          "spCost": "35 + (Skill Level × 5)",
          "cooldown": "0.4 seconds",
          "areaOfEffect": "7 x 7",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5314.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5314",
          "tree": {
            "idx": 8,
            "row": 1,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 2284,
                "level": 5,
                "name": "Fatal Menace",
                "visible": false
              },
              {
                "id": 5311,
                "level": 3,
                "name": "Dagger Bow Mastery",
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
                "value": "35 + (Skill Level × 5)"
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
                "value": "0.4 seconds"
              },
              {
                "label": "Target",
                "value": "Instant Cast"
              },
              {
                "label": "Area of Effect",
                "value": "7 x 7"
              },
              {
                "label": "AP Generated",
                "value": "0"
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
                      "sp-cost": "64"
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
                      "sp-cost": "72"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "76"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [
            {
              "skillName": "Abyss Dagger",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/abyss-chaser/rebalance_1.md",
              "section": "6.3",
              "notes": [
                "Reduces damage from 2750%Atk to 1750%Atk but the skill will deal damage twice.",
                "Increases area of effect from 5x5 cells to 7x7 cells based on level 5.",
                "Reduces cooldown from 3 seconds to 0.3 seconds based on level 5.",
                "Increases duration of Abyss Dagger buff from 10 seconds to 15 seconds based on level 5.",
                "No longer increases Fatal Menace damage by 35%, the skill will apply the damage bonus in the skill damage formula instead."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "2750%Atk",
                  "after": "1750%Atk but the skill will deal damage twice",
                  "scope": "",
                  "source": "Reduces damage from 2750%Atk to 1750%Atk but the skill will deal damage twice."
                },
                {
                  "label": "Area of Effect",
                  "before": "5 x 5 cells",
                  "after": "7 x 7 cells",
                  "scope": "Lv 5",
                  "source": "Increases area of effect from 5x5 cells to 7x7 cells based on level 5."
                },
                {
                  "label": "Cooldown",
                  "before": "3 seconds",
                  "after": "0.3 seconds",
                  "scope": "Lv 5",
                  "source": "Reduces cooldown from 3 seconds to 0.3 seconds based on level 5."
                },
                {
                  "label": "Duration Of Abyss Dagger Buff",
                  "before": "10 seconds",
                  "after": "15 seconds",
                  "scope": "Lv 5",
                  "source": "Increases duration of Abyss Dagger buff from 10 seconds to 15 seconds based on level 5."
                }
              ]
            },
            {
              "skillName": "Abyss Dagger",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/abyss-chaser/rebalance_2.md",
              "section": "6.1",
              "notes": [
                "Increases SP consumption from 60 to 64 based on level 5.",
                "Increases damage from 1750%Atk to 2600%Atk per hit based on level 5."
              ],
              "specRows": [
                {
                  "label": "SP Cost",
                  "before": "60",
                  "after": "64",
                  "scope": "Lv 5",
                  "source": "Increases SP consumption from 60 to 64 based on level 5."
                },
                {
                  "label": "Damage",
                  "before": "1750%Atk",
                  "after": "2600%Atk per hit",
                  "scope": "Lv 5",
                  "source": "Increases damage from 1750%Atk to 2600%Atk per hit based on level 5."
                }
              ]
            },
            {
              "skillName": "Abyss Dagger",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/abyss-chaser/rebalance_3.md",
              "section": "9.1",
              "notes": [
                "Increases skill cooldown from 0.3 seconds to 0.4 seconds based on level 5.",
                "Increases SP consumption from 64 to 76 based on level 5.",
                "Increases base damage from 2600%Atk to 4600%Atk based on level 5."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "0.3 seconds",
                  "after": "0.4 seconds",
                  "scope": "Lv 5",
                  "source": "Increases skill cooldown from 0.3 seconds to 0.4 seconds based on level 5."
                },
                {
                  "label": "SP Cost",
                  "before": "64",
                  "after": "76",
                  "scope": "Lv 5",
                  "source": "Increases SP consumption from 64 to 76 based on level 5."
                },
                {
                  "label": "Damage",
                  "before": "2600%Atk",
                  "after": "4600%Atk",
                  "scope": "Lv 5",
                  "source": "Increases base damage from 2600%Atk to 4600%Atk based on level 5."
                }
              ]
            },
            {
              "skillName": "Abyss Dagger",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/abyss-chaser/rebalance_4.md",
              "section": "9.3",
              "notes": [
                "Increases base damage from 4600%Atk to 7350%Atk based on level 5."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "4600%Atk",
                  "after": "7350%Atk",
                  "scope": "Lv 5",
                  "source": "Increases base damage from 4600%Atk to 7350%Atk based on level 5."
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
          "id": 6513,
          "imageFile": "6513.png",
          "name": "Chasing Break",
          "maxLevel": 5,
          "prerequisiteText": "Hit and Sliding 3",
          "group": "Active",
          "type": "Melee physical",
          "target": "Single target",
          "recoversAp": "2",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Chases and charges towards the target, deals melee physical damage to the target and surrounding enemies around the target for 5 hits.\nIf Chasing buff is active, the skill will deal more damage for 7 hits.\nDeals additional damage depends on user's base level and POW.",
          "levelDetails": [
            {
              "level": 1,
              "text": "2000% Atk / 2250% Atk (Chasing) per hit / area of effect: 5 x 5 cells."
            },
            {
              "level": 2,
              "text": "2450% Atk / 2750% Atk (Chasing) per hit / area of effect: 5 x 5 cells."
            },
            {
              "level": 3,
              "text": "2900% Atk / 3250% Atk (Chasing) per hit / area of effect: 5 x 5 cells."
            },
            {
              "level": 4,
              "text": "3350% Atk / 3750% Atk (Chasing) per hit / area of effect: 7 x 7 cells."
            },
            {
              "level": 5,
              "text": "3800% Atk / 4250% Atk (Chasing) per hit / area of effect: 7 x 7 cells."
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6513.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6513",
          "tree": {
            "idx": 9,
            "row": 1,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 6512,
                "level": 3,
                "name": "Hit and Sliding",
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
                      "area-of-effect": "5x5"
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
          "id": 5316,
          "imageFile": "5316.png",
          "name": "Chain Reaction Shot",
          "maxLevel": 5,
          "prerequisiteText": "Triangle Shot Lv. 5 and Dagger Bow Mastery Lv. 3",
          "group": "Active",
          "type": "Ranged Physical",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "7 Arrows",
          "irowikiUrl": "https://irowiki.org/wiki/Chain_Reaction_Shot",
          "description": "Bow-only skills.\nUsing 7 equipped arrows, inflict Long-ranged Physical damage on and around a target.\n(You must have at least 8 arrows to activate this skill.)\nDamaged targets deal additional Ranged Physical damage to targets within a 7x7 range around them.\nAdditional Damage increase based on the caster's base level and CON.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 850%/2950%(2nd)/range: 5x5 cells"
            },
            {
              "level": 2,
              "text": "ATK 1700%/5300%(2nd)/range: 5x5 cells"
            },
            {
              "level": 3,
              "text": "ATK 2550%/7650%(2nd)/range: 7x7 cells"
            },
            {
              "level": 4,
              "text": "ATK 3400%/10000%(2nd)/range: 7x7 cells"
            },
            {
              "level": 5,
              "text": "ATK 4250%/12350%(2nd)/range: 9x9 cells"
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "1 second",
          "castDelay": "0 seconds",
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
                  "value": "45"
                },
                {
                  "level": 3,
                  "value": "55"
                },
                {
                  "level": 4,
                  "value": "65"
                },
                {
                  "level": 5,
                  "value": "75"
                }
              ]
            }
          ],
          "spCost": "30 + (Skill Level × 10)",
          "castRange": "9 cells",
          "areaOfEffect": "3 x 3 ~ 7 x 7",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5316.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5316",
          "tree": {
            "idx": 10,
            "row": 1,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 2288,
                "level": 5,
                "name": "Triangle Shot",
                "visible": false
              },
              {
                "id": 5311,
                "level": 3,
                "name": "Dagger Bow Mastery",
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
                "value": "0 seconds"
              },
              {
                "label": "Cooldown",
                "value": "1 second"
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
                "label": "Ammunition",
                "value": "7 Arrows"
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
                      "sp-cost": "35"
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
                      "area-of-effect": "7x7",
                      "sp-cost": "55"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "65"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "9x9",
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
              "skillName": "Chain Reaction Shot",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/abyss-chaser/rebalance_1.md",
              "section": "6.8",
              "notes": [
                "Reduces fixed casting time from 1.5 seconds to 1 second based on level 5.",
                "Reduces cooldown from 3 seconds to 1.5 seconds based on level 5.",
                "Reduces delay after skill from 1 second to 0.5 seconds.",
                "Increases damage of the secondary attack from 4250%Atk to 4750%Atk based on level 5."
              ],
              "specRows": [
                {
                  "label": "Fixed Casting Time",
                  "before": "1.5 seconds",
                  "after": "1 second",
                  "scope": "Lv 5",
                  "source": "Reduces fixed casting time from 1.5 seconds to 1 second based on level 5."
                },
                {
                  "label": "Cooldown",
                  "before": "3 seconds",
                  "after": "1.5 seconds",
                  "scope": "Lv 5",
                  "source": "Reduces cooldown from 3 seconds to 1.5 seconds based on level 5."
                },
                {
                  "label": "Cast Delay",
                  "before": "1 second",
                  "after": "0.5 seconds",
                  "scope": "",
                  "source": "Reduces delay after skill from 1 second to 0.5 seconds."
                },
                {
                  "label": "Damage",
                  "before": "4250%Atk (secondary attack)",
                  "after": "4750%Atk (secondary attack)",
                  "scope": "Lv 5",
                  "source": "Increases damage of the secondary attack from 4250%Atk to 4750%Atk based on level 5."
                }
              ]
            },
            {
              "skillName": "Chain Reaction Shot",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/abyss-chaser/rebalance_2.md",
              "section": "6.5",
              "notes": [
                "Reduces cooldown from 1.5 seconds to 1 second.",
                "Removes 0.5 seconds delay after skill.",
                "Reduces SP consumption from 80 to 75 based on level 5.",
                "Increases area of effect of secondary damage from 3 x 3 cells to 7 x 7 cells.",
                "Increases area of effect of primary damage from 7 x 7 cells to 9 x 9 cells based on level 5.",
                "Increases damage from 3000%(primary)/4750%(secondary)Atk to 4250%(primary)/12350%(secondary)Atk based on level 5.",
                "Increases factor weight of CON in skill formula from 5 to 15."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "1.5 seconds",
                  "after": "1 second",
                  "scope": "",
                  "source": "Reduces cooldown from 1.5 seconds to 1 second."
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
                  "before": "80",
                  "after": "75",
                  "scope": "Lv 5",
                  "source": "Reduces SP consumption from 80 to 75 based on level 5."
                },
                {
                  "label": "Area of Effect",
                  "before": "3 x 3 cells",
                  "after": "7 x 7 cells",
                  "scope": "",
                  "source": "Increases area of effect of secondary damage from 3 x 3 cells to 7 x 7 cells."
                },
                {
                  "label": "Area of Effect",
                  "before": "7 x 7 cells",
                  "after": "9 x 9 cells",
                  "scope": "Lv 5",
                  "source": "Increases area of effect of primary damage from 7 x 7 cells to 9 x 9 cells based on level 5."
                },
                {
                  "label": "Damage",
                  "before": "3000%(primary)/4750%(secondary)Atk",
                  "after": "4250%(primary)/12350%(secondary)Atk",
                  "scope": "Lv 5",
                  "source": "Increases damage from 3000%(primary)/4750%(secondary)Atk to 4250%(primary)/12350%(secondary)Atk based on level 5."
                },
                {
                  "label": "Factor Weight Of Con In Skill Formula",
                  "before": "5",
                  "after": "15",
                  "scope": "",
                  "source": "Increases factor weight of CON in skill formula from 5 to 15."
                }
              ]
            },
            {
              "skillName": "Chain Reaction Shot",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/abyss-chaser/rebalance_4.md",
              "section": "9.7",
              "notes": [
                "Increases base damage of secondary attack from 12350%Atk to 13550%Atk based on level 5."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "12350%Atk (secondary attack)",
                  "after": "13550%Atk (secondary attack)",
                  "scope": "Lv 5",
                  "source": "Increases base damage of secondary attack from 12350%Atk to 13550%Atk based on level 5."
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
          "id": 6514,
          "imageFile": "6514.png",
          "name": "Chasing Shot",
          "maxLevel": 5,
          "prerequisiteText": "Hit and Sliding 3",
          "group": "Active",
          "type": "Ranged Physical",
          "target": "Single target",
          "recoversAp": "2",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Bow exclusive skill.\nChases and charges towards the target, deals long ranged physical damage to the target and surrounding enemies around the target for 2 hits.\nIf Chasing buff is active, the skill will deal more damage for 3 hits.\nDeals additional damage depends on user's base level and CON, as a chance to trigger critical, critical chance is the half user's Cri.\nThe effectiveness of critical modifier is applied by half.",
          "levelDetails": [
            {
              "level": 1,
              "text": "2200% Atk / 2450% Atk (Chasing) per hit / area of effect: 5 x 5 cells."
            },
            {
              "level": 2,
              "text": "2900% Atk / 3150% Atk (Chasing) per hit / area of effect: 5 x 5 cells."
            },
            {
              "level": 3,
              "text": "3600% Atk / 3850% Atk (Chasing) per hit / area of effect: 5 x 5 cells."
            },
            {
              "level": 4,
              "text": "4300% Atk / 4550% Atk (Chasing) per hit / area of effect: 7 x 7 cells."
            },
            {
              "level": 5,
              "text": "5000% Atk / 5250% Atk (Chasing) per hit / area of effect: 7 x 7 cells."
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "1 second",
          "castDelay": "0.5 seconds",
          "cooldown": "0.75 seconds",
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6514.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6514",
          "tree": {
            "idx": 11,
            "row": 1,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 6512,
                "level": 3,
                "name": "Hit and Sliding",
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
                "value": "0.5 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0.75 seconds"
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
                      "area-of-effect": "5x5"
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
          "id": 5317,
          "imageFile": "5317.png",
          "name": "From the Abyss",
          "maxLevel": 5,
          "prerequisiteText": "Magic Sword Mastery Lv. 3",
          "group": "Active",
          "type": "Buff",
          "target": "Self",
          "recoversAp": "4/8/12/16/20",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/From_the_Abyss",
          "description": "During the skill duration, you gain control of a sphere containing the power of Abyss.\nThis skill instantly creates 5 Abyss Orbs,\nNormal Physical attacks create a chance of consuming 1 Abyss Orb and inflicting 2 hits of Neutral Magic damage on a target and others in 9x9 cells.\nAbyss Orbs are regenerated at regular intervals.\nAdditional damage increase based on the caster's Base Level and SPL.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 600%/Effect Duration: 30 seconds/new Abyss Orb per 3.0 seconds"
            },
            {
              "level": 2,
              "text": "MATK 1100%/Effect Duration: 60 seconds/new Abyss Orb per 2.5 seconds"
            },
            {
              "level": 3,
              "text": "MATK 1600%/Effect Duration: 90 seconds/new Abyss Orb per 2.0 seconds"
            },
            {
              "level": 4,
              "text": "MATK 2100%/Effect Duration: 120 seconds/new Abyss Orb per 1.5 seconds"
            },
            {
              "level": 5,
              "text": "MATK 2600%/Effect Duration: 150 seconds/new Abyss Orb per 1.0 seconds"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0 seconds",
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
            }
          ],
          "spCost": "30 + (Skill Level × 10)",
          "areaOfEffect": "9 x 9",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5317.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5317",
          "tree": {
            "idx": 12,
            "row": 1,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 5312,
                "level": 3,
                "name": "Magic Sword Mastery",
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
                "value": "0 seconds"
              },
              {
                "label": "Cooldown",
                "value": "30 seconds"
              },
              {
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "Area of Effect",
                "value": "9 x 9"
              },
              {
                "label": "Duration",
                "value": "Lv 1: 30 seconds / Lv 2: 60 seconds / Lv 3: 90 seconds / Lv 4: 120 seconds / Lv 5: 150 seconds"
              },
              {
                "label": "AP Generated",
                "value": "4/8/12/16/20"
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
                      "sp-cost": "50"
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
                      "sp-cost": "70"
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
          "balanceNotes": [
            {
              "skillName": "From the Abyss",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/abyss-chaser/rebalance_1.md",
              "section": "6.6",
              "notes": [
                "Reduces sphere creation interval from 2 seconds to 1 second based on level 5.",
                "Recovers 20 AP based on level 5.",
                "Increases trigger chance from 10% to 15%.",
                "Increases area of effect from 7x7 cells to 9x9 cells."
              ],
              "specRows": [
                {
                  "label": "Sphere Creation Interval",
                  "before": "2 seconds",
                  "after": "1 second",
                  "scope": "Lv 5",
                  "source": "Reduces sphere creation interval from 2 seconds to 1 second based on level 5."
                },
                {
                  "label": "Trigger Chance",
                  "before": "10%",
                  "after": "15%",
                  "scope": "",
                  "source": "Increases trigger chance from 10% to 15%."
                },
                {
                  "label": "Area of Effect",
                  "before": "7 x 7 cells",
                  "after": "9 x 9 cells",
                  "scope": "",
                  "source": "Increases area of effect from 7x7 cells to 9x9 cells."
                }
              ]
            },
            {
              "skillName": "From the Abyss",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/abyss-chaser/rebalance_2.md",
              "section": "6.3",
              "notes": [
                "Increases number of hit from 1 hit to 2 hits.",
                "Increases damage from 500%Matk to 2600%Matk per hit based on level 5."
              ],
              "specRows": [
                {
                  "label": "Number Of Hit",
                  "before": "1 hit",
                  "after": "2 hits",
                  "scope": "",
                  "source": "Increases number of hit from 1 hit to 2 hits."
                },
                {
                  "label": "Damage",
                  "before": "500%Matk",
                  "after": "2600%Matk per hit",
                  "scope": "Lv 5",
                  "source": "Increases damage from 500%Matk to 2600%Matk per hit based on level 5."
                }
              ]
            },
            {
              "skillName": "From the Abyss",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/abyss-chaser/rebalance_4.md",
              "section": "9.5",
              "notes": [
                "Reduces skill cooldown from 60 seconds to 30 seconds.",
                "Increases number of hit from 2 hits to 5 hits.",
                "Increases base damage from 2600%Matk to 3400%Matk based on level 5.",
                "No longer be removed by Dispell or Clearance.",
                "Increases the trigger chance of abyss sphere from 15% to 25% based on level 5."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "60 seconds",
                  "after": "30 seconds",
                  "scope": "",
                  "source": "Reduces skill cooldown from 60 seconds to 30 seconds."
                },
                {
                  "label": "Number Of Hit",
                  "before": "2 hits",
                  "after": "5 hits",
                  "scope": "",
                  "source": "Increases number of hit from 2 hits to 5 hits."
                },
                {
                  "label": "Damage",
                  "before": "2600%Matk",
                  "after": "3400%Matk",
                  "scope": "Lv 5",
                  "source": "Increases base damage from 2600%Matk to 3400%Matk based on level 5."
                },
                {
                  "label": "The Trigger Chance Of Abyss Sphere",
                  "before": "15%",
                  "after": "25%",
                  "scope": "Lv 5",
                  "source": "Increases the trigger chance of abyss sphere from 15% to 25% based on level 5."
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
          "id": 5313,
          "imageFile": "5313.png",
          "name": "Divest Shadow",
          "maxLevel": 5,
          "prerequisiteText": "Divest Accessory Lv. 1 and Dagger Bow Mastery Lv. 7",
          "group": "Active",
          "type": "Debuff",
          "target": "1 Target",
          "recoversAp": "2",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Divest_Shadow",
          "description": "Remove all Shadow equipment from the target and prevent reequipping for a while.\nIn the case of monsters, this skill decreases their Physical and Magical Resistances.",
          "levelDetails": [],
          "fixedCastTime": "1 second",
          "variableCastTime": "1 second",
          "castDelay": "1 second",
          "cooldown": "2 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "29"
                },
                {
                  "level": 2,
                  "value": "33"
                },
                {
                  "level": 3,
                  "value": "37"
                },
                {
                  "level": 4,
                  "value": "41"
                },
                {
                  "level": 5,
                  "value": "45"
                }
              ]
            }
          ],
          "spCost": "25 + (Skill Level × 4)",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5313.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5313",
          "tree": {
            "idx": 14,
            "row": 2,
            "col": 0,
            "columns": 7,
            "requirements": [
              {
                "id": 2298,
                "level": 1,
                "name": "Divest Accessory",
                "visible": false
              },
              {
                "id": 5311,
                "level": 7,
                "name": "Dagger Bow Mastery",
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
                "value": "25 + (Skill Level × 4)"
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
                "value": "2 seconds"
              },
              {
                "label": "Target",
                "value": "1 Target"
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
                    "id": "sp-cost",
                    "label": "SP Cost"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "29"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "33"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "37"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "41"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
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
          "id": 5315,
          "imageFile": "5315.png",
          "name": "Misfortune Rush",
          "maxLevel": 5,
          "prerequisiteText": "Abyss Dagger Lv. 3 and Dagger Bow Mastery Lv. 4",
          "group": "Active",
          "type": "Melee Physical",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Misfortune_Rush",
          "description": "Instantly move to the target, inflicting Melee Physical damage with a chance of Misfortune.\nThis skill additionally increases damage, depending on your Base Level and POW.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 400% / Misfortune Chance : 40%"
            },
            {
              "level": 2,
              "text": "ATK 700% / Misfortune Chance : 50%"
            },
            {
              "level": 3,
              "text": "ATK 1000% / Misfortune Chance : 60%"
            },
            {
              "level": 4,
              "text": "ATK 1300% / Misfortune Chance : 70%"
            },
            {
              "level": 5,
              "text": "ATK 1600% / Misfortune Chance : 80%"
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
          "cooldown": "0.25 * (6 - Skill Level) seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5315.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5315",
          "tree": {
            "idx": 15,
            "row": 2,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 5311,
                "level": 4,
                "name": "Dagger Bow Mastery",
                "visible": true
              },
              {
                "id": 5314,
                "level": 3,
                "name": "Abyss Dagger",
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
                "value": "0.25 * (6 - Skill Level) seconds"
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
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 5320,
          "imageFile": "5320.png",
          "name": "Deft Stab",
          "maxLevel": 10,
          "prerequisiteText": "Abyss Dagger 3, Dagger & Bow Mastery 5",
          "group": "Active",
          "type": "Melee Physical",
          "target": "Single Target",
          "recoversAp": "3",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Deft_Stab",
          "description": "Quickly attacks the target and deals melee physical damage to the target and surrounding enemies around the target for 5 hits.\nDamage is additionally increased depending on the user's base level and POW.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK Per Hit 600%/Area of Effect: 5x5 Cells"
            },
            {
              "level": 2,
              "text": "ATK Per Hit 950%/Area of Effect: 5x5 Cells"
            },
            {
              "level": 3,
              "text": "ATK Per Hit 1300%/Area of Effect: 5x5 Cells"
            },
            {
              "level": 4,
              "text": "ATK Per Hit 1650%/Area of Effect: 5x5 Cells"
            },
            {
              "level": 5,
              "text": "ATK Per Hit 2000%/Area of Effect: 5x5 Cells"
            },
            {
              "level": 6,
              "text": "ATK Per Hit 2350%/Area of Effect: 7x7 Cells"
            },
            {
              "level": 7,
              "text": "ATK Per Hit 2700%/Area of Effect: 7x7 Cells"
            },
            {
              "level": 8,
              "text": "ATK Per Hit 3050%/Area of Effect: 7x7 Cells"
            },
            {
              "level": 9,
              "text": "ATK Per Hit 3400%/Area of Effect: 7x7 Cells"
            },
            {
              "level": 10,
              "text": "ATK Per Hit 3750%/Area of Effect: 7x7 Cells"
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
          "spCost": "35 + (Skill Level x 5)",
          "areaOfEffect": "3 x 3 ~ 5 x 5",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5320.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5320",
          "tree": {
            "idx": 16,
            "row": 2,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 5311,
                "level": 5,
                "name": "Dagger Bow Mastery",
                "visible": true
              },
              {
                "id": 5314,
                "level": 3,
                "name": "Abyss Dagger",
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
                "value": "35 + (Skill Level x 5)"
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
                    "id": "area-of-effect",
                    "label": "Area of Effect"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "area-of-effect": "5x5",
                      "sp-cost": "45"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "5x5",
                      "sp-cost": "48"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "5x5",
                      "sp-cost": "51"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "5x5",
                      "sp-cost": "54"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "5x5",
                      "sp-cost": "57"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "63"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "66"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "69"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "72"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [
            {
              "skillName": "Deft Stab",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/abyss-chaser/rebalance_1.md",
              "section": "6.1",
              "notes": [
                "Reduces cooldown from 2 seconds to 0.3 seconds based on level 10."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "2 seconds",
                  "after": "0.3 seconds",
                  "scope": "Lv 10",
                  "source": "Reduces cooldown from 2 seconds to 0.3 seconds based on level 10."
                }
              ]
            },
            {
              "skillName": "Deft Stab",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/abyss-chaser/rebalance_2.md",
              "section": "6.2",
              "notes": [
                "Increases SP consumption from 55 to 62 based on level 10.",
                "Increases AP recovery rate from 2 to 3.",
                "Increases damage from 3600%Atk to 5850%Atk based on level 10.",
                "Increases area of effect from 5 x 5 cells to 7 x 7 cells based on level 10."
              ],
              "specRows": [
                {
                  "label": "SP Cost",
                  "before": "55",
                  "after": "62",
                  "scope": "Lv 10",
                  "source": "Increases SP consumption from 55 to 62 based on level 10."
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
                  "before": "3600%Atk",
                  "after": "5850%Atk",
                  "scope": "Lv 10",
                  "source": "Increases damage from 3600%Atk to 5850%Atk based on level 10."
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
              "skillName": "Deft Stab",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/abyss-chaser/rebalance_3.md",
              "section": "9.2",
              "notes": [
                "Removes a chance to trigger the skill one more time.",
                "Increases SP consumption from 62 to 72 based on level 10.",
                "Increases skill cooldown from 0.3 seconds to 0.7 seconds.",
                "Reduces base damage from 5850%Atk to 3750%Atk based on level 10.",
                "Changes damage logic from 5 split hits to 5 cumulative hits."
              ],
              "specRows": [
                {
                  "label": "A Chance To Trigger The Skill One More Time",
                  "before": "a chance to trigger the skill one more time",
                  "after": "Removed",
                  "scope": "",
                  "source": "Removes a chance to trigger the skill one more time."
                },
                {
                  "label": "SP Cost",
                  "before": "62",
                  "after": "72",
                  "scope": "Lv 10",
                  "source": "Increases SP consumption from 62 to 72 based on level 10."
                },
                {
                  "label": "Cooldown",
                  "before": "0.3 seconds",
                  "after": "0.7 seconds",
                  "scope": "",
                  "source": "Increases skill cooldown from 0.3 seconds to 0.7 seconds."
                },
                {
                  "label": "Damage",
                  "before": "5850%Atk/5 split hits (logic)",
                  "after": "3750%Atk/5 cumulative hits (logic)",
                  "scope": "Lv 10",
                  "source": "Reduces base damage from 5850%Atk to 3750%Atk based on level 10. / Changes damage logic from 5 split hits to 5 cumulative hits."
                }
              ]
            },
            {
              "skillName": "Deft Stab",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/abyss-chaser/rebalance_4.md",
              "section": "9.4",
              "notes": [
                "Increases base damage from 3750%Atk to 6200%Atk based on level 10.",
                "Increases factor weight of POW in skill formula from 5 to 7."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "3750%Atk",
                  "after": "6200%Atk",
                  "scope": "Lv 10",
                  "source": "Increases base damage from 3750%Atk to 6200%Atk based on level 10."
                },
                {
                  "label": "Factor Weight Of Pow In Skill Formula",
                  "before": "5",
                  "after": "7",
                  "scope": "",
                  "source": "Increases factor weight of POW in skill formula from 5 to 7."
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
          "id": 5322,
          "imageFile": "5322.png",
          "name": "Frenzy Shot",
          "maxLevel": 10,
          "prerequisiteText": "Chain Reaction Shot 3, Dagger & Bow Mastery 5",
          "group": "Active",
          "type": "Ranged Physical",
          "target": "Single Target",
          "recoversAp": "1",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Frenzy_Shot",
          "description": "Bow only skill.\nDeals 2 hits of long ranged physical damage to the target, has a chance to deal damage for 3 hits.\nDeals additional damage depends on user's base level and CON.\nConsumes 3 equipped arrows.\nHas a chance to trigger critical, critical chance is the user's Cri,\nIn the case of critical damage, half of the total critical damage increase options are applied.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK Per Hit 750%/ chance to deal damage for 3 hits: 5%"
            },
            {
              "level": 2,
              "text": "ATK Per Hit 1350%/ chance to deal damage for 3 hits: 10%"
            },
            {
              "level": 3,
              "text": "ATK Per Hit 1950%/ chance to deal damage for 3 hits: 15%"
            },
            {
              "level": 4,
              "text": "ATK Per Hit 2550%/ chance to deal damage for 3 hits: 20%"
            },
            {
              "level": 5,
              "text": "ATK Per Hit 3150%/ chance to deal damage for 3 hits: 25%"
            },
            {
              "level": 6,
              "text": "ATK Per Hit 3750%/ chance to deal damage for 3 hits: 30%"
            },
            {
              "level": 7,
              "text": "ATK Per Hit 4350%/ chance to deal damage for 3 hits: 35%"
            },
            {
              "level": 8,
              "text": "ATK Per Hit 4950%/ chance to deal damage for 3 hits: 40%"
            },
            {
              "level": 9,
              "text": "ATK Per Hit 5550%/ chance to deal damage for 3 hits: 45%"
            },
            {
              "level": 10,
              "text": "ATK Per Hit 6150%/ chance to deal damage for 3 hits: 50%"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "0.35 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "47"
                },
                {
                  "level": 2,
                  "value": "49"
                },
                {
                  "level": 3,
                  "value": "51"
                },
                {
                  "level": 4,
                  "value": "53"
                },
                {
                  "level": 5,
                  "value": "55"
                },
                {
                  "level": 6,
                  "value": "57"
                },
                {
                  "level": 7,
                  "value": "59"
                },
                {
                  "level": 8,
                  "value": "61"
                },
                {
                  "level": 9,
                  "value": "63"
                },
                {
                  "level": 10,
                  "value": "65"
                }
              ]
            }
          ],
          "spCost": "25 + (Skill Level × 10)",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5322.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5322",
          "tree": {
            "idx": 17,
            "row": 2,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 5311,
                "level": 5,
                "name": "Dagger Bow Mastery",
                "visible": true
              },
              {
                "id": 5316,
                "level": 3,
                "name": "Chain Reaction Shot",
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
                "value": "25 + (Skill Level × 10)"
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
                "value": "0.35 seconds"
              },
              {
                "label": "Target",
                "value": "Single Target"
              },
              {
                "label": "AP Generated",
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
                      "sp-cost": "47"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "49"
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
                      "sp-cost": "53"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "55"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "57"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "59"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "61"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "63"
                    }
                  },
                  {
                    "level": 10,
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
              "skillName": "Frenzy Shot",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/abyss-chaser/rebalance_1.md",
              "section": "6.9",
              "notes": [
                "Reduces cooldown from 2 seconds to 0.2 seconds based on level 10.",
                "Increases SP consumption from 85 to 125 based on level 10.",
                "Reduces AP recovery rate from 2 to 1.",
                "Reduces arrow consumption from 10 to 3.",
                "Reworks skill by replacing the chance to trigger the skill one more time with the 50% chance to deal 3 times damage based on level 10.",
                "Increases critical chance from the half of the user's cri to the user's cri. (By the way, the skill description mentiones that the skill already applied critical chance by the user's cri. I'm not sure what it means)."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "2 seconds",
                  "after": "0.2 seconds",
                  "scope": "Lv 10",
                  "source": "Reduces cooldown from 2 seconds to 0.2 seconds based on level 10."
                },
                {
                  "label": "SP Cost",
                  "before": "85",
                  "after": "125",
                  "scope": "Lv 10",
                  "source": "Increases SP consumption from 85 to 125 based on level 10."
                },
                {
                  "label": "AP Generated",
                  "before": "2",
                  "after": "1",
                  "scope": "",
                  "source": "Reduces AP recovery rate from 2 to 1."
                },
                {
                  "label": "Arrow Consumption",
                  "before": "10",
                  "after": "3",
                  "scope": "",
                  "source": "Reduces arrow consumption from 10 to 3."
                },
                {
                  "label": "Critical Chance",
                  "before": "the half of the user's cri",
                  "after": "the user's cri. (By the way, the skill description mentiones that the skill already applied critical chance by the user's cri. I'm not sure what it means)",
                  "scope": "",
                  "source": "Increases critical chance from the half of the user's cri to the user's cri. (By the way, the skill description mentiones that the skill already applied critical chance by the user's cri. I'm not sure what it means)."
                }
              ]
            },
            {
              "skillName": "Frenzy Shot",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/abyss-chaser/rebalance_2.md",
              "section": "6.6",
              "notes": [
                "Reduces SP consumption from 125 to 55 based on level 10.",
                "Increases damage from 3500%Atk to 4000%Atk per hit based on level 10."
              ],
              "specRows": [
                {
                  "label": "SP Cost",
                  "before": "125",
                  "after": "55",
                  "scope": "Lv 10",
                  "source": "Reduces SP consumption from 125 to 55 based on level 10."
                },
                {
                  "label": "Damage",
                  "before": "3500%Atk",
                  "after": "4000%Atk per hit",
                  "scope": "Lv 10",
                  "source": "Increases damage from 3500%Atk to 4000%Atk per hit based on level 10."
                }
              ]
            },
            {
              "skillName": "Frenzy Shot",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/abyss-chaser/rebalance_3.md",
              "section": "9.3",
              "notes": [
                "Increases skill cooldown from 0.2 seconds to 0.35 seconds.",
                "Increases SP consumption from 55 to 65 based on level 10.",
                "Increases number of hit from 1 hit to 2 hits.",
                "Increases base damage from 4000%Atk to 6150%Atk based on level 10.",
                "Increases factor weight of CON in skill formula from 5 to 15."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "0.2 seconds",
                  "after": "0.35 seconds",
                  "scope": "",
                  "source": "Increases skill cooldown from 0.2 seconds to 0.35 seconds."
                },
                {
                  "label": "SP Cost",
                  "before": "55",
                  "after": "65",
                  "scope": "Lv 10",
                  "source": "Increases SP consumption from 55 to 65 based on level 10."
                },
                {
                  "label": "Number Of Hit",
                  "before": "1 hit",
                  "after": "2 hits",
                  "scope": "",
                  "source": "Increases number of hit from 1 hit to 2 hits."
                },
                {
                  "label": "Damage",
                  "before": "4000%Atk",
                  "after": "6150%Atk",
                  "scope": "Lv 10",
                  "source": "Increases base damage from 4000%Atk to 6150%Atk based on level 10."
                },
                {
                  "label": "Factor Weight Of Con In Skill Formula",
                  "before": "5",
                  "after": "15",
                  "scope": "",
                  "source": "Increases factor weight of CON in skill formula from 5 to 15."
                }
              ]
            },
            {
              "skillName": "Frenzy Shot",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/abyss-chaser/rebalance_4.md",
              "section": "9.8",
              "notes": [
                "Increases AP recovery rate from 1 to 3.",
                "Increases base damage from 6150%Atk to 8250%Atk per hit based on level 10."
              ],
              "specRows": [
                {
                  "label": "AP Generated",
                  "before": "1",
                  "after": "3",
                  "scope": "",
                  "source": "Increases AP recovery rate from 1 to 3."
                },
                {
                  "label": "Damage",
                  "before": "6150%Atk",
                  "after": "8250%Atk per hit",
                  "scope": "Lv 10",
                  "source": "Increases base damage from 6150%Atk to 8250%Atk per hit based on level 10."
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
          "id": 5321,
          "imageFile": "5321.png",
          "name": "Abyss Square",
          "maxLevel": 5,
          "prerequisiteText": "From the Abyss Lv. 1 and Magic Sword Mastery Lv. 5",
          "group": "Active",
          "type": "Magical",
          "target": "1 Ground cell",
          "recoversAp": "5",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Abyss_Square",
          "description": "Awaken the Abyss and inflict Neutral Magic damage every 0.3 seconds for 3 seconds within 7x7 cells.\nIf the caster is in range of skill, each attack hits twice.\nAdditional Damage increase based on the caster's Base Level and SPL.\nIf you are under the effect of From the Abyss, creates a chance of auto-casting Abyss Square with Normal Physical attacks.\nIf triggered this way, deal damage based on current skill level, but AP will not be recovered.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 570 +(Magic Sword Mastery Lv x20)%"
            },
            {
              "level": 2,
              "text": "MATK 1140 +(Magic Sword Mastery Lv x40)%"
            },
            {
              "level": 3,
              "text": "MATK 1710 +(Magic Sword Mastery Lv x60)%"
            },
            {
              "level": 4,
              "text": "MATK 2280 +(Magic Sword Mastery Lv x80)%"
            },
            {
              "level": 5,
              "text": "MATK 2850 +(Magic Sword Mastery Lv x100)%"
            }
          ],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "5 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "3 seconds",
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
                  "value": "75"
                },
                {
                  "level": 3,
                  "value": "85"
                },
                {
                  "level": 4,
                  "value": "95"
                },
                {
                  "level": 5,
                  "value": "105"
                }
              ]
            }
          ],
          "spCost": "55 + (Skill Level × 10)",
          "castRange": "Magic",
          "areaOfEffect": "7 x 7",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5321.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5321",
          "tree": {
            "idx": 19,
            "row": 2,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 5312,
                "level": 5,
                "name": "Magic Sword Mastery",
                "visible": true
              },
              {
                "id": 5317,
                "level": 1,
                "name": "From the Abyss",
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
                "value": "55 + (Skill Level × 10)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "1.5 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "5 seconds"
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
                "value": "Magic"
              },
              {
                "label": "Target",
                "value": "1 Ground cell"
              },
              {
                "label": "Area of Effect",
                "value": "7 x 7"
              },
              {
                "label": "AP Generated",
                "value": "5"
              },
              {
                "label": "Pulse",
                "value": "0.3 seconds"
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
                      "sp-cost": "75"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "85"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "95"
                    }
                  },
                  {
                    "level": 5,
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
              "skillName": "Abyss Square",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/abyss-chaser/rebalance_1.md",
              "section": "6.7",
              "notes": [
                "Improves damage interval from every 0.7 seconds for 4 seconds to every 0.3 seconds for 3 seconds.",
                "Reduces cooldown from 4 seconds to 3 seconds based on level 5.",
                "Reduces delay after skill from 1 second to 0.5 seconds based on level 5.",
                "Increases damage from 700%Matk to 2000%Matk (includes Magic Sword Mastery level 10 bonus) based on level 5."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "4 seconds",
                  "after": "3 seconds",
                  "scope": "Lv 5",
                  "source": "Reduces cooldown from 4 seconds to 3 seconds based on level 5."
                },
                {
                  "label": "Cast Delay",
                  "before": "1 second",
                  "after": "0.5 seconds",
                  "scope": "Lv 5",
                  "source": "Reduces delay after skill from 1 second to 0.5 seconds based on level 5."
                },
                {
                  "label": "Damage",
                  "before": "700%Matk",
                  "after": "2000%Matk (includes Magic Sword Mastery level 10 bonus)",
                  "scope": "Lv 5",
                  "source": "Increases damage from 700%Matk to 2000%Matk (includes Magic Sword Mastery level 10 bonus) based on level 5."
                }
              ]
            },
            {
              "skillName": "Abyss Square",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/abyss-chaser/rebalance_2.md",
              "section": "6.4",
              "notes": [
                "Increases AP recovery rate from 4 to 5.",
                "Increases damage from 2000%Matk to 3850%Matk per hit based on level 5 (Magic Sword Mastery level 10)."
              ],
              "specRows": [
                {
                  "label": "AP Generated",
                  "before": "4",
                  "after": "5",
                  "scope": "",
                  "source": "Increases AP recovery rate from 4 to 5."
                },
                {
                  "label": "Damage",
                  "before": "2000%Matk",
                  "after": "3850%Matk per hit",
                  "scope": "Lv 5 (Magic Sword Mastery level 10)",
                  "source": "Increases damage from 2000%Matk to 3850%Matk per hit based on level 5 (Magic Sword Mastery level 10)."
                }
              ]
            },
            {
              "skillName": "Abyss Square",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/abyss-chaser/rebalance_4.md",
              "section": "9.6",
              "notes": [
                "Increases base damage from 2850+(Magic Sword Mastery skill level x 100)%Matk to 3750+(Magic Sword Mastery skill level x 200)Matk based on level 5."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "2850+(Magic Sword Mastery skill level x 100)%Matk",
                  "after": "3750+(Magic Sword Mastery skill level x 200)Matk",
                  "scope": "Lv 5",
                  "source": "Increases base damage from 2850+(Magic Sword Mastery skill level x 100)%Matk to 3750+(Magic Sword Mastery skill level x 200)Matk based on level 5."
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
          "id": 6515,
          "imageFile": "6515.png",
          "name": "Abyss Flame",
          "maxLevel": 5,
          "prerequisiteText": "Magic Sword Mastery level 5, From the Abyss level 3",
          "group": "Active",
          "type": "Magic",
          "target": "Single target",
          "recoversAp": "2",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Creates flames centered on the target, inflicts fire property magical damage to the target and surrounding enemies around the target for 5 hits.\nAt the same time, emits abyss flames centered on the user, inflicts fire property magical damage to surrounding enemies around the user for 3 hits.\nDeals additional damage depends on level of Magic Sword Mastery user learned, user's base level and SPL.",
          "levelDetails": [
            {
              "level": 1,
              "text": "(500 + (Magic Sword Mastery level x 15))% Matk per hit (around the target) / (820 + (Magic Sword Mastery level x 30))% Matk per hit (around the user) / area of effect: 5 x 5 cells."
            },
            {
              "level": 2,
              "text": "(1000 + (Magic Sword Mastery level x 30))% Matk per hit (around the target) / (1640 + (Magic Sword Mastery level x 60))% Matk per hit (around the user) / area of effect: 5 x 5 cells."
            },
            {
              "level": 3,
              "text": "(1500 + (Magic Sword Mastery level x 45))% Matk per hit (around the target) / (2460 + (Magic Sword Mastery level x 90))% Matk per hit (around the user) / area of effect: 5 x 5 cells."
            },
            {
              "level": 4,
              "text": "(2000 + (Magic Sword Mastery level x 60))% Matk per hit (around the target) / (3280 + (Magic Sword Mastery level x 120))% Matk per hit (around the user) / area of effect: 7 x 7 cells."
            },
            {
              "level": 5,
              "text": "(2500 + (Magic Sword Mastery level x 75))% Matk per hit (around the target) / (4100 + (Magic Sword Mastery level x 150))% Matk per hit (around the user) / area of effect: 7 x 7 cells."
            }
          ],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "3 seconds",
          "castDelay": "1 second",
          "cooldown": "0.7 seconds",
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6515.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6515",
          "tree": {
            "idx": 20,
            "row": 2,
            "col": 6,
            "columns": 7,
            "requirements": [
              {
                "id": 5312,
                "level": 5,
                "name": "Magic Sword Mastery",
                "visible": true
              },
              {
                "id": 5317,
                "level": 3,
                "name": "From the Abyss",
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
                "value": "3 seconds"
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
                "label": "Property",
                "value": "fire property magical damage"
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
                      "area-of-effect": "5x5"
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
                      "area-of-effect": "7x7"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [
            {
              "skillName": "Abyss Flame",
              "versionId": "rebalance-5",
              "versionLabel": "Rebalance 5",
              "file": "rebalances/abyss-chaser/added_skills.md",
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
          "id": 5318,
          "imageFile": "5318.png",
          "name": "Abyss Slayer",
          "maxLevel": 10,
          "prerequisiteText": "Abyss Dagger Lv. 5 and Deft Stab Lv. 5",
          "group": "Active (AP)",
          "type": "Buff",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "150",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Abyss_Slayer",
          "description": "Accept the power of the Abyss into your body for 300 seconds.\nDuring this effect, significantly improve your combat abilities.",
          "levelDetails": [
            {
              "level": 1,
              "text": "+ P.ATK/S.MAKT + 12/HIT + 120"
            },
            {
              "level": 2,
              "text": "+ P.ATK/S.MATK + 14/HIT + 140"
            },
            {
              "level": 3,
              "text": "+ P.ATK/S.MATK + 16/HIT + 160"
            },
            {
              "level": 4,
              "text": "+ P.ATK/S.MATK + 18/HIT + 180"
            },
            {
              "level": 5,
              "text": "+ P.ATK/S.MATK + 20/HIT + 200"
            },
            {
              "level": 6,
              "text": "+ P.ATK/S.MATK + 22/HIT + 220"
            },
            {
              "level": 7,
              "text": "+ P.ATK/S.MATK + 24/HIT + 240"
            },
            {
              "level": 8,
              "text": "+ P.ATK/S.MATK + 26/HIT + 260"
            },
            {
              "level": 9,
              "text": "+ P.ATK/S.MATK + 28/HIT + 280"
            },
            {
              "level": 10,
              "text": "+ P.ATK/S.MATK + 30/HIT + 300"
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "0 seconds",
          "castDelay": "1 second",
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
          "spCost": "100",
          "duration": "300 seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5318.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5318",
          "tree": {
            "idx": 23,
            "row": 3,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 5314,
                "level": 5,
                "name": "Abyss Dagger",
                "visible": true
              },
              {
                "id": 5320,
                "level": 5,
                "name": "Deft Stab",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active (AP) Skill"
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
                "value": "60 seconds"
              },
              {
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "Duration",
                "value": "300 seconds"
              },
              {
                "label": "AP Consumed",
                "value": "150"
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
                    "id": "hit",
                    "label": "Hit"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "p-atk": "+ 12",
                      "s-matk": "+ 12",
                      "hit": "+ 120",
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "p-atk": "+ 14",
                      "s-matk": "+ 14",
                      "hit": "+ 140",
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "p-atk": "+ 16",
                      "s-matk": "+ 16",
                      "hit": "+ 160",
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "p-atk": "+ 18",
                      "s-matk": "+ 18",
                      "hit": "+ 180",
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "p-atk": "+ 20",
                      "s-matk": "+ 20",
                      "hit": "+ 200",
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "p-atk": "+ 22",
                      "s-matk": "+ 22",
                      "hit": "+ 220",
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "p-atk": "+ 24",
                      "s-matk": "+ 24",
                      "hit": "+ 240",
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "p-atk": "+ 26",
                      "s-matk": "+ 26",
                      "hit": "+ 260",
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "p-atk": "+ 28",
                      "s-matk": "+ 28",
                      "hit": "+ 280",
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "p-atk": "+ 30",
                      "s-matk": "+ 30",
                      "hit": "+ 300",
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
              "skillName": "Abyss Slayer",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/abyss-chaser/rebalance_1.md",
              "section": "6.5",
              "notes": [
                "Increases duration from 60 seconds to 300 seconds."
              ],
              "specRows": [
                {
                  "label": "Duration",
                  "before": "60 seconds",
                  "after": "300 seconds",
                  "scope": "",
                  "source": "Increases duration from 60 seconds to 300 seconds."
                }
              ]
            },
            {
              "skillName": "Abyss Slayer",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/abyss-chaser/rebalance_4.md",
              "section": "9.1",
              "notes": [
                "Reduces AP consumption from 150 to 120."
              ],
              "specRows": [
                {
                  "label": "AP Consumed",
                  "before": "150",
                  "after": "120",
                  "scope": "",
                  "source": "Reduces AP consumption from 150 to 120."
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
          "id": 5319,
          "imageFile": "5319.png",
          "name": "Omega Abyss Strike",
          "maxLevel": 10,
          "prerequisiteText": "From the Abyss Lv. 3 and Abyss Square Lv. 3",
          "group": "Active(AP)",
          "type": "Magical",
          "target": "1 Ground cell",
          "recoversAp": "",
          "consumesAp": "150",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Omega_Abyss_Strike",
          "description": "Drop a massive meteor onto the ground, inflicting Neutral Magic damage in 9 x9 cells.\nThis skill inflicts more damage to Angel and Demon enemies.\nAdditional Damage increase on your Base Level and SPL.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 2200%/ 2350% to Angel/Demon enemies"
            },
            {
              "level": 2,
              "text": "MATK 4400%/ 4700% to Angel/Demon enemies"
            },
            {
              "level": 3,
              "text": "MATK 6600%/ 7050% to Angel/Demon enemies"
            },
            {
              "level": 4,
              "text": "MATK 8800%/ 9400% to Angel/Demon enemies"
            },
            {
              "level": 5,
              "text": "MATK 11000%/ 11750% to Angel/Demon enemies"
            },
            {
              "level": 6,
              "text": "MATK 13200%/ 14100% to Angel/Demon enemies"
            },
            {
              "level": 7,
              "text": "MATK 15400%/ 16450% to Angel/Demon enemies"
            },
            {
              "level": 8,
              "text": "MATK 17600%/ 18800% to Angel/Demon enemies"
            },
            {
              "level": 9,
              "text": "MATK 19800%/ 21150% to Angel/Demon enemies"
            },
            {
              "level": 10,
              "text": "MATK 22000%/ 23500% to Angel/Demon enemies"
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "4 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "0.7 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "125"
                },
                {
                  "level": 2,
                  "value": "125"
                },
                {
                  "level": 3,
                  "value": "125"
                },
                {
                  "level": 4,
                  "value": "125"
                },
                {
                  "level": 5,
                  "value": "125"
                },
                {
                  "level": 6,
                  "value": "125"
                },
                {
                  "level": 7,
                  "value": "125"
                },
                {
                  "level": 8,
                  "value": "125"
                },
                {
                  "level": 9,
                  "value": "125"
                },
                {
                  "level": 10,
                  "value": "125"
                }
              ]
            }
          ],
          "spCost": "150",
          "castRange": "Magic",
          "areaOfEffect": "9 x 9",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5319.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5319",
          "tree": {
            "idx": 26,
            "row": 3,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 5317,
                "level": 3,
                "name": "From the Abyss",
                "visible": true
              },
              {
                "id": 5321,
                "level": 3,
                "name": "Abyss Square",
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
                "value": "150"
              },
              {
                "label": "Fixed Cast Time",
                "value": "1 second"
              },
              {
                "label": "Variable Cast Time",
                "value": "4 seconds"
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
                "value": "Magic"
              },
              {
                "label": "Target",
                "value": "1 Ground cell"
              },
              {
                "label": "Area of Effect",
                "value": "9 x 9"
              },
              {
                "label": "AP Consumed",
                "value": "150"
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
                      "sp-cost": "125"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "125"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "125"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "125"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "125"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "125"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "125"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "125"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "125"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
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
              "skillName": "Omega Abyss Strike",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/abyss-chaser/rebalance_2.md",
              "section": "6.7",
              "notes": [
                "Reduces cooldown from 60 seconds to 3 seconds.",
                "Reduces SP consumption from 150 to 125.",
                "Reduces AP consumption from 150 to 15.",
                "Increases damage from 6000%/11500%(angel and demon race)Matk to 22000%/23500%(angel and demon race)Matk based on level 10."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "60 seconds",
                  "after": "3 seconds",
                  "scope": "",
                  "source": "Reduces cooldown from 60 seconds to 3 seconds."
                },
                {
                  "label": "SP Cost",
                  "before": "150",
                  "after": "125",
                  "scope": "",
                  "source": "Reduces SP consumption from 150 to 125."
                },
                {
                  "label": "AP Consumed",
                  "before": "150",
                  "after": "15",
                  "scope": "",
                  "source": "Reduces AP consumption from 150 to 15."
                },
                {
                  "label": "Damage",
                  "before": "6000%/11500%(angel and demon race)Matk",
                  "after": "22000%/23500%(angel and demon race)Matk",
                  "scope": "Lv 10",
                  "source": "Increases damage from 6000%/11500%(angel and demon race)Matk to 22000%/23500%(angel and demon race)Matk based on level 10."
                }
              ]
            },
            {
              "skillName": "Omega Abyss Strike",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/abyss-chaser/rebalance_4.md",
              "section": "9.2",
              "notes": [
                "Reduces fixed casting time from 1.5 seconds to 1 second.",
                "Reduces skill cooldown from 3 seconds to 0.7 seconds.",
                "Reduces AP consumption from 15 to 10.",
                "Changes damage property from neutral to fire.",
                "Increases base damage from 22000%/23500%(angel and demon)Matk to 26500%/28500%(angel and demon)Matk based on level 10."
              ],
              "specRows": [
                {
                  "label": "Fixed Casting Time",
                  "before": "1.5 seconds",
                  "after": "1 second",
                  "scope": "",
                  "source": "Reduces fixed casting time from 1.5 seconds to 1 second."
                },
                {
                  "label": "Cooldown",
                  "before": "3 seconds",
                  "after": "0.7 seconds",
                  "scope": "",
                  "source": "Reduces skill cooldown from 3 seconds to 0.7 seconds."
                },
                {
                  "label": "AP Consumed",
                  "before": "15",
                  "after": "10",
                  "scope": "",
                  "source": "Reduces AP consumption from 15 to 10."
                },
                {
                  "label": "Damage",
                  "before": "neutral (property)/22000%/23500%(angel and demon)Matk",
                  "after": "fire (property)/26500%/28500%(angel and demon)Matk",
                  "scope": "Lv 10",
                  "source": "Changes damage property from neutral to fire. / Increases base damage from 22000%/23500%(angel and demon)Matk to 26500%/28500%(angel and demon)Matk based on level 10."
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
      "label": "Shadow Chaser",
      "pointLimit": 69,
      "tree": {
        "columns": 7,
        "rows": 6
      },
      "skills": [
        {
          "id": 2285,
          "imageFile": "2285.png",
          "name": "Reproduce",
          "maxLevel": 10,
          "prerequisiteText": "Intimidate Lv. 5",
          "group": "Active Toggle/Buff",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Reproduce",
          "description": "Enables you to learn enemy skills used on you. Use this skill again to cancel its effect and lock in the skill you've learned.\nOnly 1 skill can be learned, and its learning level is affected by your Reproduce level.\nSkills learned by Reproduce require 30% more SP than usual.\nThese skills, since they're not really learned with SP, can't be chained with other skills or used with special effects and items based on their learning levels.",
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
                },
                {
                  "level": 6,
                  "value": "65"
                },
                {
                  "level": 7,
                  "value": "70"
                },
                {
                  "level": 8,
                  "value": "75"
                },
                {
                  "level": 9,
                  "value": "80"
                },
                {
                  "level": 10,
                  "value": "85"
                }
              ]
            },
            {
              "label": "Data 1",
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
                  "value": "7"
                },
                {
                  "level": 4,
                  "value": "7"
                },
                {
                  "level": 5,
                  "value": "6"
                },
                {
                  "level": 6,
                  "value": "6"
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
                  "value": "4"
                },
                {
                  "level": 10,
                  "value": "4"
                }
              ]
            }
          ],
          "spCost": "35 + (Skill Level × 5)",
          "duration": "Until SP reaches 0 or recast",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2285.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2285",
          "tree": {
            "idx": 0,
            "row": 0,
            "col": 0,
            "columns": 7,
            "requirements": [
              {
                "id": 225,
                "level": 5,
                "name": "Intimidate",
                "visible": false
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active Toggle/Buff Skill"
              },
              {
                "label": "Levels",
                "value": "10"
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
                "value": "Until SP reaches 0 or recast"
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
                      "sp-cost": "40",
                      "data-1": "8"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "45",
                      "data-1": "8"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "50",
                      "data-1": "7"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "55",
                      "data-1": "7"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "60",
                      "data-1": "6"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "65",
                      "data-1": "6"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "70",
                      "data-1": "5"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "75",
                      "data-1": "5"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "80",
                      "data-1": "4"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "sp-cost": "85",
                      "data-1": "4"
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
          "id": 2287,
          "imageFile": "2287.png",
          "name": "Shadow Formation",
          "maxLevel": 5,
          "prerequisiteText": "Stalk 3",
          "group": "Active / Debuff",
          "type": "",
          "target": "Player",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Shadow_Formation",
          "description": "Hide yourself behind another player's shadow and make the front player receive damage instead of you. The skill is canceled if the front player has been attacked a certain amount of times or the distance between you and the front player gets farther. Skills and Items can't be used while in this state.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Number of damage - 5 times / Consume 10 SP per sec. 10 / Duration 30 sec."
            },
            {
              "level": 2,
              "text": "Number of damage - 6 times / Consume 9 SP per sec. / Duration 40 sec."
            },
            {
              "level": 3,
              "text": "Number of damage - 7 times / Consume 8 SP per sec. / Duration 50 sec."
            },
            {
              "level": 4,
              "text": "Number of damage - 8 times / Consume 7 SP per sec. / Duration 60 sec."
            },
            {
              "level": 5,
              "text": "Number of damage - 9 times / Consume 6 SP per sec. / Duration 70 sec."
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
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "10"
                },
                {
                  "level": 2,
                  "value": "9"
                },
                {
                  "level": 3,
                  "value": "8"
                },
                {
                  "level": 4,
                  "value": "7"
                },
                {
                  "level": 5,
                  "value": "6"
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
                  "value": "40000"
                },
                {
                  "level": 3,
                  "value": "50000"
                },
                {
                  "level": 4,
                  "value": "60000"
                },
                {
                  "level": 5,
                  "value": "70000"
                }
              ]
            }
          ],
          "duration": "[20 + (Skill Level * 10)] seconds",
          "castRange": "5 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2287.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2287",
          "tree": {
            "idx": 1,
            "row": 0,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 213,
                "level": 3,
                "name": "Stalk",
                "visible": false
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
              },
              {
                "label": "Cast Range",
                "value": "5 cells"
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
                      "duration": "30 seconds",
                      "effect": "Number of damage - 5 times / Consume 10 SP per sec. 10",
                      "sp-cost": "40",
                      "range": "5 cells",
                      "data-1": "10",
                      "data-2": "5",
                      "data-3": "30000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "40 seconds",
                      "effect": "Number of damage - 6 times / Consume 9 SP per sec.",
                      "sp-cost": "50",
                      "range": "5 cells",
                      "data-1": "9",
                      "data-2": "6",
                      "data-3": "40000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "50 seconds",
                      "effect": "Number of damage - 7 times / Consume 8 SP per sec.",
                      "sp-cost": "60",
                      "range": "5 cells",
                      "data-1": "8",
                      "data-2": "7",
                      "data-3": "50000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "60 seconds",
                      "effect": "Number of damage - 8 times / Consume 7 SP per sec.",
                      "sp-cost": "70",
                      "range": "5 cells",
                      "data-1": "7",
                      "data-2": "8",
                      "data-3": "60000"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "70 seconds",
                      "effect": "Number of damage - 9 times / Consume 6 SP per sec.",
                      "sp-cost": "80",
                      "range": "5 cells",
                      "data-1": "6",
                      "data-2": "9",
                      "data-3": "70000"
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
          "id": 2284,
          "imageFile": "2284.png",
          "name": "Fatal Manace",
          "maxLevel": 10,
          "prerequisiteText": "Intimidate 5",
          "group": "Active / Damage",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Fatal_Manace",
          "description": "Deals melee physical damage to a target and enemies around it.\nDamage increases based on BaseLv and AGI.\nWhen using knife, deals damage twice.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 120%/HIT-30/Range 3x3"
            },
            {
              "level": 2,
              "text": "ATK 240%/HIT-25/Range 3x3"
            },
            {
              "level": 3,
              "text": "ATK 360%/HIT-20/Range 3x3"
            },
            {
              "level": 4,
              "text": "ATK 480%/HIT-15/Range 3x3"
            },
            {
              "level": 5,
              "text": "ATK 600%/HIT-10/Range 3x3"
            },
            {
              "level": 6,
              "text": "ATK 720%/HIT+ 0/Range 5x5"
            },
            {
              "level": 7,
              "text": "ATK 840%/HIT+ 5/Range 5x5"
            },
            {
              "level": 8,
              "text": "ATK 960%/HIT+10/Range 5x5"
            },
            {
              "level": 9,
              "text": "ATK 1080%/HIT+15/Range 5x5"
            },
            {
              "level": 10,
              "text": "ATK 1200%/HIT+20/Range 5x5"
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
                  "value": "10"
                },
                {
                  "level": 2,
                  "value": "14"
                },
                {
                  "level": 3,
                  "value": "18"
                },
                {
                  "level": 4,
                  "value": "22"
                },
                {
                  "level": 5,
                  "value": "26"
                },
                {
                  "level": 6,
                  "value": "30"
                },
                {
                  "level": 7,
                  "value": "34"
                },
                {
                  "level": 8,
                  "value": "38"
                },
                {
                  "level": 9,
                  "value": "42"
                },
                {
                  "level": 10,
                  "value": "46"
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
            },
            {
              "label": "Data 2",
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
                  "value": "5"
                },
                {
                  "level": 8,
                  "value": "10"
                },
                {
                  "level": 9,
                  "value": "15"
                },
                {
                  "level": 10,
                  "value": "20"
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
          "spCost": "6 + (Skill Level x 4)",
          "castRange": "2 cells",
          "areaOfEffect": "3 x 3 ~ 5 x 5",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2284.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2284",
          "tree": {
            "idx": 2,
            "row": 0,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 219,
                "level": 5,
                "name": "Snatch",
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
                "value": "6 + (Skill Level x 4)"
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
                "value": "2 cells"
              },
              {
                "label": "Target",
                "value": "Enemy"
              },
              {
                "label": "Area of Effect",
                "value": "3 x 3 ~ 5 x 5"
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
                    "id": "hit",
                    "label": "Hit"
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
                      "hit": "-30",
                      "effect": "Range 3 x 3",
                      "sp-cost": "10",
                      "range": "1 cells",
                      "data-1": "30",
                      "data-2": "0",
                      "data-3": "1"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "hit": "-25",
                      "effect": "Range 3 x 3",
                      "sp-cost": "14",
                      "range": "1 cells",
                      "data-1": "25",
                      "data-2": "0",
                      "data-3": "1"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "hit": "-20",
                      "effect": "Range 3 x 3",
                      "sp-cost": "18",
                      "range": "1 cells",
                      "data-1": "20",
                      "data-2": "0",
                      "data-3": "1"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "hit": "-15",
                      "effect": "Range 3 x 3",
                      "sp-cost": "22",
                      "range": "1 cells",
                      "data-1": "15",
                      "data-2": "0",
                      "data-3": "1"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "hit": "-10",
                      "effect": "Range 3 x 3",
                      "sp-cost": "26",
                      "range": "1 cells",
                      "data-1": "10",
                      "data-2": "0",
                      "data-3": "1"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "hit": "+ 0",
                      "effect": "Range 5 x 5",
                      "sp-cost": "30",
                      "range": "1 cells",
                      "data-1": "0",
                      "data-2": "0",
                      "data-3": "2"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "hit": "+ 5",
                      "effect": "Range 5 x 5",
                      "sp-cost": "34",
                      "range": "1 cells",
                      "data-1": "0",
                      "data-2": "5",
                      "data-3": "2"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "hit": "+10",
                      "effect": "Range 5 x 5",
                      "sp-cost": "38",
                      "range": "1 cells",
                      "data-1": "0",
                      "data-2": "10",
                      "data-3": "2"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "hit": "+15",
                      "effect": "Range 5 x 5",
                      "sp-cost": "42",
                      "range": "1 cells",
                      "data-1": "0",
                      "data-2": "15",
                      "data-3": "2"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "hit": "+20",
                      "effect": "Range 5 x 5",
                      "sp-cost": "46",
                      "range": "1 cells",
                      "data-1": "0",
                      "data-2": "20",
                      "data-3": "2"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [
            {
              "skillName": "Fatal Menace",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/abyss-chaser/rebalance_1.md",
              "section": "6.4",
              "notes": [
                "Increases cast range from 1 cell to 2 cells.",
                "Skill damage formula while under Abyss Dagger buff is increased to 1500%Atk based on level 10."
              ],
              "specRows": [
                {
                  "label": "Cast Range",
                  "before": "1 cells",
                  "after": "2 cells",
                  "scope": "",
                  "source": "Increases cast range from 1 cell to 2 cells."
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
          "id": 2289,
          "imageFile": "2289.png",
          "name": "Body Painting",
          "maxLevel": 5,
          "prerequisiteText": "Shadow Chaser Basic",
          "group": "Active / Debuff / Detect",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Body_Painting",
          "description": "Splash paint around the caster and find hidden enemies. The target and all surroundings that have been exposed to the paint get [Blind] curse along with a chance to decrease attack speed.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Chance to curse [Blind] 55% / Chance to decrease attack speed 25% / Duration 5 sec."
            },
            {
              "level": 2,
              "text": "Chance to curse [Blind] 57% / Chance to decrease attack speed 30% / Duration 7 sec."
            },
            {
              "level": 3,
              "text": "Chance to curse [Blind] 59% / Chance to decrease attack speed 35% / Duration 9 sec."
            },
            {
              "level": 4,
              "text": "Chance to curse [Blind] 61% / Chance to decrease attack speed 40% / Duration 11 sec."
            },
            {
              "level": 5,
              "text": "Chance to curse [Blind] 63% / Chance to decrease attack speed 45% / Duration 13 sec."
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "1 second",
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
                  "value": "55"
                },
                {
                  "level": 2,
                  "value": "57"
                },
                {
                  "level": 3,
                  "value": "59"
                },
                {
                  "level": 4,
                  "value": "61"
                },
                {
                  "level": 5,
                  "value": "63"
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
              "label": "Data 4",
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
          "spCost": "5 + (Skill Level * 5)",
          "duration": "3 + (Skill Level * 2) seccons",
          "areaOfEffect": "5 x 5",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2289.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2289",
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
                "value": "Active / Debuff / Detect Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "5 + (Skill Level * 5)"
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
                "value": "2 seconds"
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
                  },
                  {
                    "id": "data-4",
                    "label": "Data 4"
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
                      "duration": "5 seconds",
                      "effect": "Chance to curse [Blind] 55% / Chance to decrease attack speed 25%",
                      "sp-cost": "10",
                      "range": "1 cells",
                      "data-1": "2",
                      "data-2": "55",
                      "data-3": "25",
                      "data-4": "5000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "7 seconds",
                      "effect": "Chance to curse [Blind] 57% / Chance to decrease attack speed 30%",
                      "sp-cost": "15",
                      "range": "1 cells",
                      "data-1": "2",
                      "data-2": "57",
                      "data-3": "30",
                      "data-4": "7000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "9 seconds",
                      "effect": "Chance to curse [Blind] 59% / Chance to decrease attack speed 35%",
                      "sp-cost": "20",
                      "range": "1 cells",
                      "data-1": "2",
                      "data-2": "59",
                      "data-3": "35",
                      "data-4": "9000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "11 seconds",
                      "effect": "Chance to curse [Blind] 61% / Chance to decrease attack speed 40%",
                      "sp-cost": "25",
                      "range": "1 cells",
                      "data-1": "2",
                      "data-2": "61",
                      "data-3": "40",
                      "data-4": "11000"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "13 seconds",
                      "effect": "Chance to curse [Blind] 63% / Chance to decrease attack speed 45%",
                      "sp-cost": "30",
                      "range": "1 cells",
                      "data-1": "2",
                      "data-2": "63",
                      "data-3": "45",
                      "data-4": "13000"
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
          "id": 2288,
          "imageFile": "2288.png",
          "name": "Triangle Shot",
          "maxLevel": 10,
          "prerequisiteText": "Double Strafe 7",
          "group": "Active / Damage",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "3 Arrows",
          "irowikiUrl": "https://irowiki.org/wiki/Triangle_Shot",
          "description": "Deals ranged physical damage to 1 target.\nDamage increases based on BaseLv and AGI.\nConsumes 3 arrows.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 230% / Range 7Cell"
            },
            {
              "level": 2,
              "text": "ATK 460% / Range 7Cell"
            },
            {
              "level": 3,
              "text": "ATK 690% / Range 7Cell"
            },
            {
              "level": 4,
              "text": "ATK 920% / Range 9Cell"
            },
            {
              "level": 5,
              "text": "ATK 1150% / Range 9Cell"
            },
            {
              "level": 6,
              "text": "ATK 1380% / Range 9Cell"
            },
            {
              "level": 7,
              "text": "ATK 1610% / Range 9Cell"
            },
            {
              "level": 8,
              "text": "ATK 1840% / Range 11Cell"
            },
            {
              "level": 9,
              "text": "ATK 2070% / Range 11Cell"
            },
            {
              "level": 10,
              "text": "ATK 2300% / Range 11Cell"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0.35 seconds",
          "cooldown": "0.2 seconds",
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
                  "value": "24"
                },
                {
                  "level": 3,
                  "value": "26"
                },
                {
                  "level": 4,
                  "value": "28"
                },
                {
                  "level": 5,
                  "value": "30"
                },
                {
                  "level": 6,
                  "value": "32"
                },
                {
                  "level": 7,
                  "value": "34"
                },
                {
                  "level": 8,
                  "value": "36"
                },
                {
                  "level": 9,
                  "value": "38"
                },
                {
                  "level": 10,
                  "value": "40"
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
                  "value": "9 cells"
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
                  "value": "9 cells"
                },
                {
                  "level": 8,
                  "value": "11 cells"
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
                  "value": "3"
                },
                {
                  "level": 3,
                  "value": "4"
                },
                {
                  "level": 4,
                  "value": "5"
                },
                {
                  "level": 5,
                  "value": "6"
                },
                {
                  "level": 6,
                  "value": "7"
                },
                {
                  "level": 7,
                  "value": "8"
                },
                {
                  "level": 8,
                  "value": "9"
                },
                {
                  "level": 9,
                  "value": "10"
                },
                {
                  "level": 10,
                  "value": "11"
                }
              ]
            },
            {
              "label": "Data 2",
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
                },
                {
                  "level": 6,
                  "value": "3"
                },
                {
                  "level": 7,
                  "value": "3"
                },
                {
                  "level": 8,
                  "value": "3"
                },
                {
                  "level": 9,
                  "value": "3"
                },
                {
                  "level": 10,
                  "value": "3"
                }
              ]
            }
          ],
          "spCost": "20 + (Skill Level x 2)",
          "castRange": "7 ~ 11 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2288.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2288",
          "tree": {
            "idx": 4,
            "row": 0,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 46,
                "level": 7,
                "name": "Double Strafe",
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
                "value": "20 + (Skill Level x 2)"
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
                "value": "0.35 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0.2 seconds"
              },
              {
                "label": "Cast Range",
                "value": "7 ~ 11 cells"
              },
              {
                "label": "Target",
                "value": "Enemy"
              },
              {
                "label": "Ammunition",
                "value": "3 Arrows"
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
                      "sp-cost": "22",
                      "range": "7 cells",
                      "data-1": "2",
                      "data-2": "3"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "24",
                      "range": "7 cells",
                      "data-1": "3",
                      "data-2": "3"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "26",
                      "range": "7 cells",
                      "data-1": "4",
                      "data-2": "3"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "28",
                      "range": "9 cells",
                      "data-1": "5",
                      "data-2": "3"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "30",
                      "range": "9 cells",
                      "data-1": "6",
                      "data-2": "3"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "32",
                      "range": "9 cells",
                      "data-1": "7",
                      "data-2": "3"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "34",
                      "range": "9 cells",
                      "data-1": "8",
                      "data-2": "3"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "36",
                      "range": "11 cells",
                      "data-1": "9",
                      "data-2": "3"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "38",
                      "range": "11 cells",
                      "data-1": "10",
                      "data-2": "3"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "sp-cost": "40",
                      "range": "11 cells",
                      "data-1": "11",
                      "data-2": "3"
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
          "id": 2299,
          "imageFile": "2299.png",
          "name": "Manhole",
          "maxLevel": 3,
          "prerequisiteText": "Piece 1",
          "group": "Active / Ground",
          "type": "",
          "target": "Ground",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Manhole",
          "description": "Draw 1 manhole on the ground and push 1 target into the hole. Trapped targets are disabled from doing anything including attacks. Must have a Paint Brush and consumes 1 Surface Paint.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Skill Duration 5 sec."
            },
            {
              "level": 2,
              "text": "Skill Duration 10 sec."
            },
            {
              "level": 3,
              "text": "Skill Duration 15 sec."
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "1 second",
          "castDelay": "2 seconds",
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
                  "value": "25"
                },
                {
                  "level": 3,
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
                  "value": "7 cells"
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
                  "value": "10000"
                },
                {
                  "level": 3,
                  "value": "15000"
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
                  "value": "10000"
                },
                {
                  "level": 3,
                  "value": "15000"
                }
              ]
            }
          ],
          "spCost": "15 + (Skill Level x 5)",
          "duration": "(Skill Level x 5) seconds",
          "castRange": "7 cells",
          "areaOfEffect": "3 x 3",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2299.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2299",
          "tree": {
            "idx": 5,
            "row": 0,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 221,
                "level": 1,
                "name": "Piece",
                "visible": false
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Ground Skill"
              },
              {
                "label": "Levels",
                "value": "3"
              },
              {
                "label": "SP Cost",
                "value": "15 + (Skill Level x 5)"
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
                "value": "2 seconds"
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
                "value": "Ground"
              },
              {
                "label": "Area of Effect",
                "value": "3 x 3"
              },
              {
                "label": "Duration",
                "value": "(Skill Level x 5) seconds"
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
                    "id": "range",
                    "label": "Range"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Skill Duration 5 sec",
                      "sp-cost": "20",
                      "range": "7 cells",
                      "data-1": "5000",
                      "data-2": "5000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Skill Duration 10 sec",
                      "sp-cost": "25",
                      "range": "7 cells",
                      "data-1": "10000",
                      "data-2": "10000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Skill Duration 15 sec",
                      "sp-cost": "30",
                      "range": "7 cells",
                      "data-1": "15000",
                      "data-2": "15000"
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
          "id": 2298,
          "imageFile": "2298.png",
          "name": "Divest Accessory",
          "maxLevel": 5,
          "prerequisiteText": "Divest Weapon 1",
          "group": "Active / Debuff",
          "type": "",
          "target": "All Entity",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Divest_Accessory",
          "description": "Divest 2 accessories from target's body. The target is disabled to re-equip those released accessories during skill duration. To monsters, it decreases 20% of INT, DEX and LUK for a while.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Chance of Success 14% / Duration 60 sec."
            },
            {
              "level": 2,
              "text": "Chance of Success 16% / Duration 60 sec."
            },
            {
              "level": 3,
              "text": "Chance of Success 18% / Duration 60 sec."
            },
            {
              "level": 4,
              "text": "Chance of Success 20% / Duration 60 sec."
            },
            {
              "level": 5,
              "text": "Chance of Success 22% / Duration 60 sec."
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "1 second",
          "castDelay": "1 second",
          "cooldown": "0 seconds",
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
                  "value": "18"
                },
                {
                  "level": 3,
                  "value": "21"
                },
                {
                  "level": 4,
                  "value": "24"
                },
                {
                  "level": 5,
                  "value": "27"
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
                  "value": "70000"
                },
                {
                  "level": 3,
                  "value": "80000"
                },
                {
                  "level": 4,
                  "value": "90000"
                },
                {
                  "level": 5,
                  "value": "100000"
                }
              ]
            },
            {
              "label": "Data 2",
              "values": [
                {
                  "level": 1,
                  "value": "14"
                },
                {
                  "level": 2,
                  "value": "16"
                },
                {
                  "level": 3,
                  "value": "18"
                },
                {
                  "level": 4,
                  "value": "20"
                },
                {
                  "level": 5,
                  "value": "22"
                }
              ]
            }
          ],
          "spCost": "12 + (Skill Level x 3)",
          "duration": "[50 + (Skill Level x 10)] seconds (modified)",
          "castRange": "3 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2298.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2298",
          "tree": {
            "idx": 6,
            "row": 0,
            "col": 6,
            "columns": 7,
            "requirements": [
              {
                "id": 215,
                "level": 1,
                "name": "Divest Weapon",
                "visible": false
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
                "label": "SP Cost",
                "value": "12 + (Skill Level x 3)"
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
                "value": "0 seconds"
              },
              {
                "label": "Cast Range",
                "value": "3 cells"
              },
              {
                "label": "Target",
                "value": "All Entity"
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
                    "id": "range",
                    "label": "Range"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "duration": "60 seconds",
                      "effect": "Chance of Success 14%",
                      "sp-cost": "15",
                      "range": "3 cells",
                      "data-1": "60000",
                      "data-2": "14"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "60 seconds",
                      "effect": "Chance of Success 16%",
                      "sp-cost": "18",
                      "range": "3 cells",
                      "data-1": "70000",
                      "data-2": "16"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "60 seconds",
                      "effect": "Chance of Success 18%",
                      "sp-cost": "21",
                      "range": "3 cells",
                      "data-1": "80000",
                      "data-2": "18"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "60 seconds",
                      "effect": "Chance of Success 20%",
                      "sp-cost": "24",
                      "range": "3 cells",
                      "data-1": "90000",
                      "data-2": "20"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "60 seconds",
                      "effect": "Chance of Success 22%",
                      "sp-cost": "27",
                      "range": "3 cells",
                      "data-1": "100000",
                      "data-2": "22"
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
          "id": 2286,
          "imageFile": "2286.png",
          "name": "Shadow Spell",
          "maxLevel": 10,
          "prerequisiteText": "Reproduce 5",
          "group": "Active / Buff",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Shadow_Spell",
          "description": "Enables the caster to use magic skills that the caster has learned through Intimidate or Reproduce.\nBasic physical attacks creates a chance of casting those magic skills for its skills duration.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Chance 28%/3LvCast/MATK+ 5/60 sec"
            },
            {
              "level": 2,
              "text": "Chance 26%/3LvCast/MATK+10/80 sec"
            },
            {
              "level": 3,
              "text": "Chance 24%/4LvCast/MATK+15/100 sec"
            },
            {
              "level": 4,
              "text": "Chance 22%/4LvCast/MATK+20/120 sec"
            },
            {
              "level": 5,
              "text": "Chance 20%/5LvCast/MATK+25/140 sec"
            },
            {
              "level": 6,
              "text": "Chance 18%/5LvCast/MATK+30/160 sec"
            },
            {
              "level": 7,
              "text": "Chance 16%/6LvCast/MATK+35/180 sec"
            },
            {
              "level": 8,
              "text": "Chance 14%/6LvCast/MATK+40/200 sec"
            },
            {
              "level": 9,
              "text": "Chance 12%/7LvCast/MATK+45/220 sec"
            },
            {
              "level": 10,
              "text": "Chance 15%/7LvCast/MATK+50/300 sec"
            }
          ],
          "fixedCastTime": "2 seconds",
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
                },
                {
                  "level": 6,
                  "value": "65"
                },
                {
                  "level": 7,
                  "value": "70"
                },
                {
                  "level": 8,
                  "value": "75"
                },
                {
                  "level": 9,
                  "value": "80"
                },
                {
                  "level": 10,
                  "value": "85"
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
                },
                {
                  "level": 6,
                  "value": "160000"
                },
                {
                  "level": 7,
                  "value": "180000"
                },
                {
                  "level": 8,
                  "value": "200000"
                },
                {
                  "level": 9,
                  "value": "220000"
                },
                {
                  "level": 10,
                  "value": "300000"
                }
              ]
            },
            {
              "label": "Data 2",
              "values": [
                {
                  "level": 1,
                  "value": "280"
                },
                {
                  "level": 2,
                  "value": "260"
                },
                {
                  "level": 3,
                  "value": "240"
                },
                {
                  "level": 4,
                  "value": "220"
                },
                {
                  "level": 5,
                  "value": "200"
                },
                {
                  "level": 6,
                  "value": "180"
                },
                {
                  "level": 7,
                  "value": "160"
                },
                {
                  "level": 8,
                  "value": "140"
                },
                {
                  "level": 9,
                  "value": "120"
                },
                {
                  "level": 10,
                  "value": "150"
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
                  "value": "3"
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
                  "value": "5"
                },
                {
                  "level": 6,
                  "value": "5"
                },
                {
                  "level": 7,
                  "value": "6"
                },
                {
                  "level": 8,
                  "value": "6"
                },
                {
                  "level": 9,
                  "value": "7"
                },
                {
                  "level": 10,
                  "value": "7"
                }
              ]
            }
          ],
          "spCost": "35 + (5 x Skill Level)",
          "variableCastTime": "(4 / Skill Level) seconds",
          "duration": "[40 + (Skill Level * 20)] seconds ~ 300 seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2286.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2286",
          "tree": {
            "idx": 7,
            "row": 1,
            "col": 0,
            "columns": 7,
            "requirements": [
              {
                "id": 2285,
                "level": 5,
                "name": "Reproduce",
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
                "value": "35 + (5 x Skill Level)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "2 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "(4 / Skill Level) seconds"
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
                  },
                  {
                    "id": "duration",
                    "label": "Duration"
                  },
                  {
                    "id": "chance-12-7lvcast-matk",
                    "label": "Chance 12%/7lvcast/matk"
                  },
                  {
                    "id": "chance-14-6lvcast-matk",
                    "label": "Chance 14%/6lvcast/matk"
                  },
                  {
                    "id": "chance-15-7lvcast-matk",
                    "label": "Chance 15%/7lvcast/matk"
                  },
                  {
                    "id": "chance-16-6lvcast-matk",
                    "label": "Chance 16%/6lvcast/matk"
                  },
                  {
                    "id": "chance-18-5lvcast-matk",
                    "label": "Chance 18%/5lvcast/matk"
                  },
                  {
                    "id": "chance-20-5lvcast-matk",
                    "label": "Chance 20%/5lvcast/matk"
                  },
                  {
                    "id": "chance-22-4lvcast-matk",
                    "label": "Chance 22%/4lvcast/matk"
                  },
                  {
                    "id": "chance-24-4lvcast-matk",
                    "label": "Chance 24%/4lvcast/matk"
                  },
                  {
                    "id": "chance-26-3lvcast-matk",
                    "label": "Chance 26%/3lvcast/matk"
                  },
                  {
                    "id": "chance-28-3lvcast-matk",
                    "label": "Chance 28%/3lvcast/matk"
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
                      "duration": "60 seconds",
                      "chance-28-3lvcast-matk": "+ 5",
                      "sp-cost": "40",
                      "data-1": "60000",
                      "data-2": "280",
                      "data-3": "3"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "80 seconds",
                      "chance-26-3lvcast-matk": "+10",
                      "sp-cost": "45",
                      "data-1": "80000",
                      "data-2": "260",
                      "data-3": "3"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "100 seconds",
                      "chance-24-4lvcast-matk": "+15",
                      "sp-cost": "50",
                      "data-1": "100000",
                      "data-2": "240",
                      "data-3": "4"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "120 seconds",
                      "chance-22-4lvcast-matk": "+20",
                      "sp-cost": "55",
                      "data-1": "120000",
                      "data-2": "220",
                      "data-3": "4"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "140 seconds",
                      "chance-20-5lvcast-matk": "+25",
                      "sp-cost": "60",
                      "data-1": "140000",
                      "data-2": "200",
                      "data-3": "5"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "duration": "160 seconds",
                      "chance-18-5lvcast-matk": "+30",
                      "sp-cost": "65",
                      "data-1": "160000",
                      "data-2": "180",
                      "data-3": "5"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "duration": "180 seconds",
                      "chance-16-6lvcast-matk": "+35",
                      "sp-cost": "70",
                      "data-1": "180000",
                      "data-2": "160",
                      "data-3": "6"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "duration": "200 seconds",
                      "chance-14-6lvcast-matk": "+40",
                      "sp-cost": "75",
                      "data-1": "200000",
                      "data-2": "140",
                      "data-3": "6"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "duration": "220 seconds",
                      "chance-12-7lvcast-matk": "+45",
                      "sp-cost": "80",
                      "data-1": "220000",
                      "data-2": "120",
                      "data-3": "7"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "duration": "300 seconds",
                      "chance-15-7lvcast-matk": "+50",
                      "sp-cost": "85",
                      "data-1": "300000",
                      "data-2": "150",
                      "data-3": "7"
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
          "id": 2292,
          "imageFile": "2292.png",
          "name": "Masquerade-Enervation",
          "maxLevel": 3,
          "prerequisiteText": "Body Painting 1",
          "group": "Active / Debuff",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Masquerade-Enervation",
          "description": "Decrease target's ATK with and strips all Spirit Spheres he/she has. Must have a Makeover Brush and consumes 1 Face Paint. The chance of success depends on the caster and target's level and stats.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 30% Decrease / Duration 10 sec."
            },
            {
              "level": 2,
              "text": "ATK 40% Decrease / Duration 15 sec."
            },
            {
              "level": 3,
              "text": "ATK 50% Decrease / Duration 20 sec."
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "2 seconds",
          "castDelay": "1 second",
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
                  "value": "40"
                },
                {
                  "level": 3,
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
                },
                {
                  "level": 2,
                  "value": "3 cells"
                },
                {
                  "level": 3,
                  "value": "3 cells"
                }
              ]
            },
            {
              "label": "Data 1",
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
                }
              ]
            },
            {
              "label": "Data 2",
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
                }
              ]
            }
          ],
          "duration": "5 + (SkillLevel * 5) seconds",
          "castRange": "3 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2292.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2292",
          "tree": {
            "idx": 9,
            "row": 1,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 2289,
                "level": 1,
                "name": "Body Painting",
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
                "value": "3"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0 seconds"
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
                "value": "2 seconds"
              },
              {
                "label": "Cast Range",
                "value": "3 cells"
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
                    "id": "range",
                    "label": "Range"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "duration": "10 seconds",
                      "sp-cost": "30",
                      "range": "3 cells",
                      "data-1": "10000",
                      "data-2": "30"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "15 seconds",
                      "sp-cost": "40",
                      "range": "3 cells",
                      "data-1": "15000",
                      "data-2": "40"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "20 seconds",
                      "sp-cost": "50",
                      "range": "3 cells",
                      "data-1": "20000",
                      "data-2": "50"
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
          "id": 2293,
          "imageFile": "2293.png",
          "name": "Masquerade-Gloomy",
          "maxLevel": 3,
          "prerequisiteText": "Body Painting 1",
          "group": "Active / Debuff",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Masquerade-Gloomy",
          "description": "Decrease target's accuracy and attack speed. Target's animals, pets or Homunculus are stripped with this skill. Must have a Makeover Brush and consume 1 Face Paint. The chance of success depends on the caster and target's level and stats.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Attack Speed 30% Decrease / Accuracy Rate 20% Decrease / Duration 10 sec."
            },
            {
              "level": 2,
              "text": "Attack Speed 40% Decrease / Accuracy Rate 40% Decrease / Duration 15 sec."
            },
            {
              "level": 3,
              "text": "Attack Speed 50% Decrease / Accuracy Rate 60% Decrease / Duration 20 sec."
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "2 seconds",
          "castDelay": "1 second",
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
                  "value": "40"
                },
                {
                  "level": 3,
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
                },
                {
                  "level": 2,
                  "value": "3 cells"
                },
                {
                  "level": 3,
                  "value": "3 cells"
                }
              ]
            },
            {
              "label": "Data 1",
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
                }
              ]
            },
            {
              "label": "Data 2",
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
                  "value": "40"
                },
                {
                  "level": 3,
                  "value": "60"
                }
              ]
            }
          ],
          "duration": "5 + (Skill Level * 5) seconds",
          "castRange": "3 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2293.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2293",
          "tree": {
            "idx": 10,
            "row": 1,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 2289,
                "level": 1,
                "name": "Body Painting",
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
                "value": "3"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0 seconds"
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
                "value": "2 seconds"
              },
              {
                "label": "Cast Range",
                "value": "3 cells"
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
                      "duration": "10 seconds",
                      "effect": "Attack Speed 30% Decrease / Accuracy Rate 20% Decrease",
                      "sp-cost": "30",
                      "range": "3 cells",
                      "data-1": "10000",
                      "data-2": "30",
                      "data-3": "20"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "15 seconds",
                      "effect": "Attack Speed 40% Decrease / Accuracy Rate 40% Decrease",
                      "sp-cost": "40",
                      "range": "3 cells",
                      "data-1": "15000",
                      "data-2": "40",
                      "data-3": "40"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "20 seconds",
                      "effect": "Attack Speed 50% Decrease / Accuracy Rate 60% Decrease",
                      "sp-cost": "50",
                      "range": "3 cells",
                      "data-1": "20000",
                      "data-2": "50",
                      "data-3": "60"
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
          "id": 2294,
          "imageFile": "2294.png",
          "name": "Masquerade-Ignorance",
          "maxLevel": 3,
          "prerequisiteText": "Body Painting 1",
          "group": "Active / Debuff",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Masquerade-Ignorance",
          "description": "Drain and receive half of target's SP. To monsters, receive a certain amount of SP depending on monster's level. Target is disabled to use magic or skill while this skill is active. Must have a Makeover Brush and consumes 1 Face Paint. The chance of success depends on the caster and target's level and stats.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Consume SP 100 / Duration 10 sec."
            },
            {
              "level": 2,
              "text": "Consume SP 200 / Duration 15 sec."
            },
            {
              "level": 3,
              "text": "Consume SP 300 / Duration 20 sec."
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "2 seconds",
          "castDelay": "1 second",
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
                  "value": "40"
                },
                {
                  "level": 3,
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
                },
                {
                  "level": 2,
                  "value": "3 cells"
                },
                {
                  "level": 3,
                  "value": "3 cells"
                }
              ]
            },
            {
              "label": "Data 1",
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
                }
              ]
            },
            {
              "label": "Data 2",
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
                }
              ]
            }
          ],
          "duration": "5 + (Skill Level * 5) seconds",
          "castRange": "3 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2294.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2294",
          "tree": {
            "idx": 11,
            "row": 1,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 2289,
                "level": 1,
                "name": "Body Painting",
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
                "value": "3"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0 seconds"
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
                "value": "2 seconds"
              },
              {
                "label": "Cast Range",
                "value": "3 cells"
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
                      "duration": "10 seconds",
                      "effect": "Consume SP 100",
                      "sp-cost": "30",
                      "range": "3 cells",
                      "data-1": "10000",
                      "data-2": "100",
                      "data-3": "50"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "15 seconds",
                      "effect": "Consume SP 200",
                      "sp-cost": "40",
                      "range": "3 cells",
                      "data-1": "15000",
                      "data-2": "200",
                      "data-3": "100"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "20 seconds",
                      "effect": "Consume SP 300",
                      "sp-cost": "50",
                      "range": "3 cells",
                      "data-1": "20000",
                      "data-2": "300",
                      "data-3": "150"
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
          "id": 2301,
          "imageFile": "2301.png",
          "name": "Chaos Panic",
          "maxLevel": 3,
          "prerequisiteText": "Manhole 1",
          "group": "Active / Ground",
          "type": "",
          "target": "Ground",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Chaos_Panic",
          "description": "Draw whirling shape on the ground and trap the target into a chaos. The trapped target is in a chaos, so it loses its way and moves abnormally. To monsters, it makes the monster confused, so the monster changes its attacking target randomly. Must have a Paint Brush and consumes 2 Surface Paint.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Skill Duration 5 sec."
            },
            {
              "level": 2,
              "text": "Skill Duration 10 sec."
            },
            {
              "level": 3,
              "text": "Skill Duration 15 sec."
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "2 seconds",
          "castDelay": "2 seconds",
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
                  "value": "36"
                },
                {
                  "level": 3,
                  "value": "42"
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
                  "value": "10000"
                },
                {
                  "level": 3,
                  "value": "15000"
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
                  "value": "65"
                },
                {
                  "level": 3,
                  "value": "80"
                }
              ]
            }
          ],
          "spCost": "24 + (Skill Level * 6)",
          "duration": "(Skill Level * 5) seconds",
          "castRange": "7 cells",
          "areaOfEffect": "5 x 5",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2301.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2301",
          "tree": {
            "idx": 12,
            "row": 1,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 2299,
                "level": 1,
                "name": "Manhole",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Ground Skill"
              },
              {
                "label": "Levels",
                "value": "3"
              },
              {
                "label": "SP Cost",
                "value": "24 + (Skill Level * 6)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0 seconds"
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
                "value": "0 seconds"
              },
              {
                "label": "Cast Range",
                "value": "7 cells"
              },
              {
                "label": "Target",
                "value": "Ground"
              },
              {
                "label": "Area of Effect",
                "value": "5 x 5"
              },
              {
                "label": "Duration",
                "value": "(Skill Level * 5) seconds"
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
                    "id": "range",
                    "label": "Range"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Skill Duration 5 sec",
                      "sp-cost": "30",
                      "range": "7 cells",
                      "data-1": "5000",
                      "data-2": "50"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Skill Duration 10 sec",
                      "sp-cost": "36",
                      "range": "7 cells",
                      "data-1": "10000",
                      "data-2": "65"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Skill Duration 15 sec",
                      "sp-cost": "42",
                      "range": "7 cells",
                      "data-1": "15000",
                      "data-2": "80"
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
          "id": 2300,
          "imageFile": "2300.png",
          "name": "Dimensional Door",
          "maxLevel": 3,
          "prerequisiteText": "Manhole 1",
          "group": "Active / Ground",
          "type": "",
          "target": "Ground",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Dimensional_Door",
          "description": "Draw magic door on the ground and teleport the target who stepps on it to a random location. Must have a Paint Brush and consumes 1 Surface Paint.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Skill Duration 4 sec."
            },
            {
              "level": 2,
              "text": "Skill Duration 8 sec."
            },
            {
              "level": 3,
              "text": "Skill Duration 12 sec."
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "1 second",
          "castDelay": "2 seconds",
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
                  "value": "36"
                },
                {
                  "level": 3,
                  "value": "42"
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
                  "value": "8000"
                },
                {
                  "level": 3,
                  "value": "12000"
                }
              ]
            }
          ],
          "spCost": "24 + (Skill Level x 6) seconds",
          "duration": "(Skill Level x 4) seconds",
          "castRange": "7 cells",
          "areaOfEffect": "1 x 1",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2300.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2300",
          "tree": {
            "idx": 13,
            "row": 1,
            "col": 6,
            "columns": 7,
            "requirements": [
              {
                "id": 2299,
                "level": 1,
                "name": "Manhole",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Ground Skill"
              },
              {
                "label": "Levels",
                "value": "3"
              },
              {
                "label": "SP Cost",
                "value": "24 + (Skill Level x 6) seconds"
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
                "value": "2 seconds"
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
                "value": "Ground"
              },
              {
                "label": "Area of Effect",
                "value": "1 x 1"
              },
              {
                "label": "Duration",
                "value": "(Skill Level x 4) seconds"
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
                    "id": "range",
                    "label": "Range"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Skill Duration 4 sec",
                      "sp-cost": "30",
                      "range": "7 cells",
                      "data-1": "4000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Skill Duration 8 sec",
                      "sp-cost": "36",
                      "range": "7 cells",
                      "data-1": "8000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Skill Duration 12 sec",
                      "sp-cost": "42",
                      "range": "7 cells",
                      "data-1": "12000"
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
          "id": 2291,
          "imageFile": "2291.png",
          "name": "Deadly Infection",
          "maxLevel": 5,
          "prerequisiteText": "Shadow Formation 3 / Shadow Spell 5",
          "group": "Active / Buff",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Deadly_Infection",
          "description": "Transfer abnormal status that caster holds at the moment to the target or attacking enemies. Even if the caster transferred its curse to others, the curse on caster is maintained.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Skill Duration 10 sec. / 40% chance of infection"
            },
            {
              "level": 2,
              "text": "Skill Duration 15 sec. / 50% chance of infection"
            },
            {
              "level": 3,
              "text": "Skill Duration 20 sec. / 60% chance of infection"
            },
            {
              "level": 4,
              "text": "Skill Duration 25 sec. / 70% chance of infection"
            },
            {
              "level": 5,
              "text": "Skill Duration 30 sec. / 80% chance of infection"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "1 second",
          "cooldown": "2 seconds",
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
                  "value": "44"
                },
                {
                  "level": 3,
                  "value": "48"
                },
                {
                  "level": 4,
                  "value": "52"
                },
                {
                  "level": 5,
                  "value": "56"
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
                }
              ]
            },
            {
              "label": "Data 1",
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
            }
          ],
          "spCost": "36 + (Skill Level * 4)",
          "duration": "5 + (Skill Level * 5) seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2291.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2291",
          "tree": {
            "idx": 15,
            "row": 2,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 2286,
                "level": 5,
                "name": "Shadow Spell",
                "visible": true
              },
              {
                "id": 2287,
                "level": 3,
                "name": "Shadow Formation",
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
                "value": "36 + (Skill Level * 4)"
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
                "value": "2 seconds"
              },
              {
                "label": "Duration",
                "value": "5 + (Skill Level * 5) seconds"
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
                    "id": "range",
                    "label": "Range"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Skill Duration 10 sec. / 40% chance of infection",
                      "sp-cost": "40",
                      "range": "1 cells",
                      "data-1": "10000",
                      "data-2": "40"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Skill Duration 15 sec. / 50% chance of infection",
                      "sp-cost": "44",
                      "range": "1 cells",
                      "data-1": "15000",
                      "data-2": "50"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Skill Duration 20 sec. / 60% chance of infection",
                      "sp-cost": "48",
                      "range": "1 cells",
                      "data-1": "20000",
                      "data-2": "60"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Skill Duration 25 sec. / 70% chance of infection",
                      "sp-cost": "52",
                      "range": "1 cells",
                      "data-1": "25000",
                      "data-2": "70"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Skill Duration 30 sec. / 80% chance of infection",
                      "sp-cost": "56",
                      "range": "1 cells",
                      "data-1": "30000",
                      "data-2": "80"
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
          "id": 2295,
          "imageFile": "2295.png",
          "name": "Masquerade-Laziness",
          "maxLevel": 3,
          "prerequisiteText": "Masquerade-Enervation 1 / Gloomy 1 / Ignorance 1",
          "group": "Active / Debuff",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Masquerade-Laziness",
          "description": "Decrease target's movement, casting speed and also flee rate. The target has to consume additional SP [Laziness skill level x 10] to use any skills while target is affected by Laziness. Must have a Makeover Brush and consume 1 Face Paint. The chance of success depends on the caster and target's level and stats.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Flee Rate 10% Decrease / Casting Speed 20% Decrease / Duration 10 sec."
            },
            {
              "level": 2,
              "text": "Flee Rate 20% Decrease / Casting Speed 30% Decrease / Duration 15 sec."
            },
            {
              "level": 3,
              "text": "Flee Rate 30% Decrease / Casting Speed 40% Decrease / Duration 20 sec."
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "2 seconds",
          "castDelay": "1 second",
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
                  "value": "40"
                },
                {
                  "level": 3,
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
                },
                {
                  "level": 2,
                  "value": "3 cells"
                },
                {
                  "level": 3,
                  "value": "3 cells"
                }
              ]
            },
            {
              "label": "Data 1",
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
                }
              ]
            },
            {
              "label": "Data 3",
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
                }
              ]
            },
            {
              "label": "Data 4",
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
                }
              ]
            }
          ],
          "duration": "5 + (Skill Level * 5) seconds",
          "castRange": "3 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2295.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2295",
          "tree": {
            "idx": 16,
            "row": 2,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 2292,
                "level": 1,
                "name": "Masquerade-Enervation",
                "visible": true
              },
              {
                "id": 2293,
                "level": 1,
                "name": "Masquerade-Gloomy",
                "visible": true
              },
              {
                "id": 2294,
                "level": 1,
                "name": "Masquerade-Ignorance",
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
                "value": "3"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0 seconds"
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
                "value": "2 seconds"
              },
              {
                "label": "Cast Range",
                "value": "3 cells"
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
                  },
                  {
                    "id": "data-4",
                    "label": "Data 4"
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
                      "duration": "10 seconds",
                      "effect": "Flee Rate 10% Decrease / Casting Speed 20% Decrease",
                      "sp-cost": "30",
                      "range": "3 cells",
                      "data-1": "10000",
                      "data-2": "20",
                      "data-3": "10",
                      "data-4": "10"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "15 seconds",
                      "effect": "Flee Rate 20% Decrease / Casting Speed 30% Decrease",
                      "sp-cost": "40",
                      "range": "3 cells",
                      "data-1": "15000",
                      "data-2": "30",
                      "data-3": "20",
                      "data-4": "20"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "20 seconds",
                      "effect": "Flee Rate 30% Decrease / Casting Speed 40% Decrease",
                      "sp-cost": "50",
                      "range": "3 cells",
                      "data-1": "20000",
                      "data-2": "40",
                      "data-3": "30",
                      "data-4": "30"
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
          "id": 2297,
          "imageFile": "2297.png",
          "name": "Masquerade-Weakness",
          "maxLevel": 3,
          "prerequisiteText": "Masquerade-Enervation 1 / Gloomy 1 / Ignorance 1",
          "group": "Active / Debuff",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Masquerade-Weakness",
          "description": "Decrease Maximum HP and divest weapon and shield from target's body temporary. Target can not equip weapon or shield during casting duration. Required to have Makeover Brush and consume 1 Face Paint. The chance of success is changeable depending on caster and target's level and stats.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MaxHP 10% Decrease / Duration 10 sec."
            },
            {
              "level": 2,
              "text": "MaxHP 20% Decrease / Duration 15 sec."
            },
            {
              "level": 3,
              "text": "MaxHP 30% Decrease / Duration 20 sec."
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "2 seconds",
          "castDelay": "1 second",
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
                  "value": "40"
                },
                {
                  "level": 3,
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
                },
                {
                  "level": 2,
                  "value": "3 cells"
                },
                {
                  "level": 3,
                  "value": "3 cells"
                }
              ]
            },
            {
              "label": "Data 1",
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
                }
              ]
            }
          ],
          "duration": "5 + (Skill Level * 5) seconds",
          "castRange": "3 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2297.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2297",
          "tree": {
            "idx": 17,
            "row": 2,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 2292,
                "level": 1,
                "name": "Masquerade-Enervation",
                "visible": true
              },
              {
                "id": 2293,
                "level": 1,
                "name": "Masquerade-Gloomy",
                "visible": true
              },
              {
                "id": 2294,
                "level": 1,
                "name": "Masquerade-Ignorance",
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
                "value": "3"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0 seconds"
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
                "value": "2 seconds"
              },
              {
                "label": "Cast Range",
                "value": "3 cells"
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
                    "id": "range",
                    "label": "Range"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "duration": "10 seconds",
                      "effect": "Ma x HP 10% Decrease",
                      "sp-cost": "30",
                      "range": "3 cells",
                      "data-1": "10000",
                      "data-2": "10"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "15 seconds",
                      "effect": "Ma x HP 20% Decrease",
                      "sp-cost": "40",
                      "range": "3 cells",
                      "data-1": "15000",
                      "data-2": "20"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "20 seconds",
                      "effect": "Ma x HP 30% Decrease",
                      "sp-cost": "50",
                      "range": "3 cells",
                      "data-1": "20000",
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
          "id": 5010,
          "imageFile": "5010.png",
          "name": "Urgent Escape",
          "maxLevel": 5,
          "prerequisiteText": "Triangle Shot 2",
          "group": "",
          "type": "Active / Sub",
          "target": "Lif and Alchemist",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Urgent_Escape",
          "description": "Caster immediately lays down a trap on the ground and backslides. Caster cannot backslide over dead cells (walls etc).\nConsumes 1 Special Alloy Trap.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Escape range 5 Cells"
            },
            {
              "level": 2,
              "text": "Escape range 6 Cells"
            },
            {
              "level": 3,
              "text": "Escape range 7 Cells"
            },
            {
              "level": 4,
              "text": "Escape range 8 Cells"
            },
            {
              "level": 5,
              "text": "Escape range 9 Cells"
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
                  "value": "30"
                },
                {
                  "level": 2,
                  "value": "26"
                },
                {
                  "level": 3,
                  "value": "22"
                },
                {
                  "level": 4,
                  "value": "18"
                },
                {
                  "level": 5,
                  "value": "14"
                }
              ]
            },
            {
              "label": "Data 1",
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
          "spCost": "15 + (Skill Level × 5)",
          "cooldown": "35 seconds",
          "duration": "45 − (Skill Level × 5) seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5010.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5010",
          "tree": {
            "idx": 18,
            "row": 2,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 2288,
                "level": 2,
                "name": "Triangle Shot",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Sub"
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
                "value": "0.5 seconds"
              },
              {
                "label": "Cooldown",
                "value": "35 seconds"
              },
              {
                "label": "Target",
                "value": "Lif and Alchemist"
              },
              {
                "label": "Duration",
                "value": "45 − (Skill Level × 5) seconds"
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
                      "effect": "Escape range 5 cells",
                      "sp-cost": "30",
                      "data-1": "5"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Escape range 6 cells",
                      "sp-cost": "26",
                      "data-1": "6"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Escape range 7 cells",
                      "sp-cost": "22",
                      "data-1": "7"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Escape range 8 cells",
                      "sp-cost": "18",
                      "data-1": "8"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Escape range 9 cells",
                      "sp-cost": "14",
                      "data-1": "9"
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
          "id": 2304,
          "imageFile": "2304.png",
          "name": "Feint Bomb",
          "maxLevel": 10,
          "prerequisiteText": "Dimensional Door 3",
          "group": "Active / Ground",
          "type": "",
          "target": "Ground",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Feint_Bomb",
          "description": "Draw a fake copycat of yourself on the ground and step backwards with Backslide.\nAfter a while, the fake copycat explodes itself and gives damage to all surrounding enemies.\nMust have a Paint Brush and consumes 1 Surface Paint.\nIncrease damage as caster's BaseLV, JobLV, and DEX gets higher.",
          "levelDetails": [
            {
              "level": 1,
              "text": "1 cell Backward"
            },
            {
              "level": 2,
              "text": "2 cells Backward"
            },
            {
              "level": 3,
              "text": "3 cells Backward"
            },
            {
              "level": 4,
              "text": "4 cells Backward"
            },
            {
              "level": 5,
              "text": "5 cells Backward"
            },
            {
              "level": 6,
              "text": "6 cells Backward"
            },
            {
              "level": 7,
              "text": "7 cells Backward"
            },
            {
              "level": 8,
              "text": "8 cells Backward"
            },
            {
              "level": 9,
              "text": "9 cells Backward"
            },
            {
              "level": 10,
              "text": "10 cells Backward"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "1 second",
          "castDelay": "0 seconds",
          "cooldown": "5 seconds",
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
            },
            {
              "label": "Data 2",
              "values": [
                {
                  "level": 1,
                  "value": "1500"
                },
                {
                  "level": 2,
                  "value": "1500"
                },
                {
                  "level": 3,
                  "value": "1500"
                },
                {
                  "level": 4,
                  "value": "1500"
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
                  "value": "1500"
                },
                {
                  "level": 8,
                  "value": "1500"
                },
                {
                  "level": 9,
                  "value": "1500"
                },
                {
                  "level": 10,
                  "value": "1500"
                }
              ]
            }
          ],
          "spCost": "20 + (4 x Skill Level)",
          "areaOfEffect": "5 x 5",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2304.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2304",
          "tree": {
            "idx": 19,
            "row": 2,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 2300,
                "level": 3,
                "name": "Dimensional Door",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Ground Skill"
              },
              {
                "label": "Levels",
                "value": "10"
              },
              {
                "label": "SP Cost",
                "value": "20 + (4 x Skill Level)"
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
                "value": "5 seconds"
              },
              {
                "label": "Target",
                "value": "Ground"
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
                      "effect": "1 cells Backward",
                      "sp-cost": "24",
                      "range": "1 cells",
                      "data-1": "2",
                      "data-2": "1500"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "2 cells Backward",
                      "sp-cost": "28",
                      "range": "1 cells",
                      "data-1": "2",
                      "data-2": "1500"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "3 cells Backward",
                      "sp-cost": "32",
                      "range": "1 cells",
                      "data-1": "2",
                      "data-2": "1500"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "4 cells Backward",
                      "sp-cost": "36",
                      "range": "1 cells",
                      "data-1": "2",
                      "data-2": "1500"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "5 cells Backward",
                      "sp-cost": "40",
                      "range": "1 cells",
                      "data-1": "2",
                      "data-2": "1500"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "6 cells Backward",
                      "sp-cost": "44",
                      "range": "1 cells",
                      "data-1": "2",
                      "data-2": "1500"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "7 cells Backward",
                      "sp-cost": "48",
                      "range": "1 cells",
                      "data-1": "2",
                      "data-2": "1500"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "8 cells Backward",
                      "sp-cost": "52",
                      "range": "1 cells",
                      "data-1": "2",
                      "data-2": "1500"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "9 cells Backward",
                      "sp-cost": "56",
                      "range": "1 cells",
                      "data-1": "2",
                      "data-2": "1500"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "10 cells Backward",
                      "sp-cost": "60",
                      "range": "1 cells",
                      "data-1": "2",
                      "data-2": "1500"
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
          "id": 2303,
          "imageFile": "2303.png",
          "name": "Bloody Lust",
          "maxLevel": 3,
          "prerequisiteText": "Dimensional Door 3",
          "group": "Active / Ground",
          "type": "",
          "target": "Ground",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Bloody_Lust",
          "description": "Draw a red circle on the ground and give the target who steps on it the Frenzy effect. Must have a Paint Brush and consumes 2 Surface Paint.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Skill Duration 7 sec."
            },
            {
              "level": 2,
              "text": "Skill Duration 14 sec."
            },
            {
              "level": 3,
              "text": "Skill Duration 21 sec."
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "2 seconds",
          "castDelay": "2 seconds",
          "cooldown": "180 seconds",
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
                  "value": "10000"
                },
                {
                  "level": 3,
                  "value": "15000"
                }
              ]
            }
          ],
          "spCost": "50 + (Skill Level * 10)",
          "duration": "(Skill Level * 5) seconds",
          "areaOfEffect": "7 x 7",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2303.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2303",
          "tree": {
            "idx": 20,
            "row": 2,
            "col": 6,
            "columns": 7,
            "requirements": [
              {
                "id": 2300,
                "level": 3,
                "name": "Dimensional Door",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Ground Skill"
              },
              {
                "label": "Levels",
                "value": "3"
              },
              {
                "label": "SP Cost",
                "value": "50 + (Skill Level * 10)"
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
                "value": "180 seconds"
              },
              {
                "label": "Target",
                "value": "Ground"
              },
              {
                "label": "Area of Effect",
                "value": "7 x 7"
              },
              {
                "label": "Duration",
                "value": "(Skill Level * 5) seconds"
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
                    "id": "range",
                    "label": "Range"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Skill Duration 7 sec",
                      "sp-cost": "60",
                      "range": "7 cells",
                      "data-1": "5000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Skill Duration 14 sec",
                      "sp-cost": "70",
                      "range": "7 cells",
                      "data-1": "10000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Skill Duration 21 sec",
                      "sp-cost": "80",
                      "range": "7 cells",
                      "data-1": "15000"
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
          "id": 2296,
          "imageFile": "2296.png",
          "name": "Masquerade-Unlucky",
          "maxLevel": 3,
          "prerequisiteText": "Masquerade-Laziness 1 / Weakness 1",
          "group": "Active / Debuff",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Masquerade-Unlucky",
          "description": "Decrease target's CRI and Perfect Dodge rate. Certain amount of Zeny is consumed every time target is casting skills. Must give 1 abnormal status to the target among Poison, Blind and Silence status. Required to have Makeover Brush and consume 1 Face Paint. The chance of success is changeable depending on caster and target's level and stats.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Critical 10 Decrease / Perfect Dodge 10 Decrease / Duration 10 sec."
            },
            {
              "level": 2,
              "text": "Critical 20 Decrease / Perfect Dodge 20 Decrease / Duration 15 sec."
            },
            {
              "level": 3,
              "text": "Critical 30 Decrease / Perfect Dodge 30 Decrease / Duration 20 sec."
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "2 seconds",
          "castDelay": "1 second",
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
                  "value": "40"
                },
                {
                  "level": 3,
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
                },
                {
                  "level": 2,
                  "value": "3 cells"
                },
                {
                  "level": 3,
                  "value": "3 cells"
                }
              ]
            },
            {
              "label": "Data 1",
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
                }
              ]
            },
            {
              "label": "Data 3",
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
                }
              ]
            },
            {
              "label": "Data 4",
              "values": [
                {
                  "level": 1,
                  "value": "250"
                },
                {
                  "level": 2,
                  "value": "500"
                },
                {
                  "level": 3,
                  "value": "1000"
                }
              ]
            }
          ],
          "duration": "[5 + (Skill Level * 5)] seconds",
          "castRange": "3 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2296.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2296",
          "tree": {
            "idx": 24,
            "row": 3,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 2295,
                "level": 1,
                "name": "Masquerade-Laziness",
                "visible": true
              },
              {
                "id": 2297,
                "level": 1,
                "name": "Masquerade-Weakness",
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
                "value": "3"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0 seconds"
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
                "value": "2 seconds"
              },
              {
                "label": "Cast Range",
                "value": "3 cells"
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
                  },
                  {
                    "id": "data-4",
                    "label": "Data 4"
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
                      "duration": "10 seconds",
                      "effect": "Critical 10 Decrease / Perfect Dodge 10 Decrease",
                      "sp-cost": "30",
                      "range": "3 cells",
                      "data-1": "10000",
                      "data-2": "10",
                      "data-3": "10",
                      "data-4": "250"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "15 seconds",
                      "effect": "Critical 20 Decrease / Perfect Dodge 20 Decrease",
                      "sp-cost": "40",
                      "range": "3 cells",
                      "data-1": "15000",
                      "data-2": "20",
                      "data-3": "20",
                      "data-4": "500"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "20 seconds",
                      "effect": "Critical 30 Decrease / Perfect Dodge 30 Decrease",
                      "sp-cost": "50",
                      "range": "3 cells",
                      "data-1": "20000",
                      "data-2": "30",
                      "data-3": "30",
                      "data-4": "1000"
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
          "id": 2290,
          "imageFile": "2290.png",
          "name": "Invisibility",
          "maxLevel": 5,
          "prerequisiteText": "Shadow Spell 7 / Deadly Infection 5 / Masquerade-Unlucky 3",
          "group": "Active / Buff",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Invisibility",
          "description": "Make yourself invisible. You can attack enemies during invisible state but the property of attack becomes Ghost Property level 1. It keeps consuming caster's SP and also other skill or items can not be used while the skill is casted. Skill is canceled if SP becomes 0. Ignore some of detect skills.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Critical +20% / Attack Speed decrease 40% / Consume SP in a sec. 10%"
            },
            {
              "level": 2,
              "text": "Critical +40% / Attack Speed decrease 30% / Consume SP in a sec. 8%"
            },
            {
              "level": 3,
              "text": "Critical +60% / Attack Speed decrease 20% / Consume SP in a sec. 6%"
            },
            {
              "level": 4,
              "text": "Critical +80% / Attack Speed decrease 10% / Consume SP in a sec. 5%"
            },
            {
              "level": 5,
              "text": "Critical +100% / Attack Speed decrease 0% / Consume SP in a sec. 2%"
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
                  "value": "40"
                },
                {
                  "level": 3,
                  "value": "60"
                },
                {
                  "level": 4,
                  "value": "80"
                },
                {
                  "level": 5,
                  "value": "100"
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
                  "value": "30"
                },
                {
                  "level": 3,
                  "value": "20"
                },
                {
                  "level": 4,
                  "value": "10"
                },
                {
                  "level": 5,
                  "value": "0"
                }
              ]
            },
            {
              "label": "Data 3",
              "values": [
                {
                  "level": 1,
                  "value": "10"
                },
                {
                  "level": 2,
                  "value": "8"
                },
                {
                  "level": 3,
                  "value": "6"
                },
                {
                  "level": 4,
                  "value": "4"
                },
                {
                  "level": 5,
                  "value": "2"
                }
              ]
            }
          ],
          "spCost": "100",
          "cooldown": "[10 + (Skill Level x 10)] seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2290.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2290",
          "tree": {
            "idx": 29,
            "row": 4,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 2286,
                "level": 7,
                "name": "Shadow Spell",
                "visible": true
              },
              {
                "id": 2291,
                "level": 5,
                "name": "Deadly Infection",
                "visible": true
              },
              {
                "id": 2296,
                "level": 3,
                "name": "Masquerade-Unlucky",
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
                "value": "100"
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
                "value": "[10 + (Skill Level x 10)] seconds"
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
                    "id": "effect",
                    "label": "Effect"
                  },
                  {
                    "id": "critical",
                    "label": "Critical"
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
                      "critical": "+20%",
                      "effect": "Attack Speed decrease 40% / Consume SP in a sec. 10%",
                      "sp-cost": "100",
                      "range": "1 cells",
                      "data-1": "20",
                      "data-2": "40",
                      "data-3": "10"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "critical": "+40%",
                      "effect": "Attack Speed decrease 30% / Consume SP in a sec. 8%",
                      "sp-cost": "100",
                      "range": "1 cells",
                      "data-1": "40",
                      "data-2": "30",
                      "data-3": "8"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "critical": "+60%",
                      "effect": "Attack Speed decrease 20% / Consume SP in a sec. 6%",
                      "sp-cost": "100",
                      "range": "1 cells",
                      "data-1": "60",
                      "data-2": "20",
                      "data-3": "6"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "critical": "+80%",
                      "effect": "Attack Speed decrease 10% / Consume SP in a sec. 5%",
                      "sp-cost": "100",
                      "range": "1 cells",
                      "data-1": "80",
                      "data-2": "10",
                      "data-3": "4"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "critical": "+100%",
                      "effect": "Attack Speed decrease 0% / Consume SP in a sec. 2%",
                      "sp-cost": "100",
                      "range": "1 cells",
                      "data-1": "100",
                      "data-2": "0",
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
          "id": 2302,
          "imageFile": "2302.png",
          "name": "Maelstrom",
          "maxLevel": 3,
          "prerequisiteText": "Chaos Panic 3 / Masquerade-Unlucky 3",
          "group": "Active / Ground",
          "type": "",
          "target": "Ground",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Maelstrom",
          "description": "Draw swirling circle on the ground and absorb other magic that is cast on the ground. Caster recovers SP depending on absorbed magic level. Must have a Paint Brush and consumes 2 Surface Paint.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Skill Duration 7 sec."
            },
            {
              "level": 2,
              "text": "Skill Duration 14 sec."
            },
            {
              "level": 3,
              "text": "Skill Duration 21 sec."
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "2 seconds",
          "castDelay": "2 seconds",
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
                  "value": "55"
                },
                {
                  "level": 3,
                  "value": "60"
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
                }
              ]
            },
            {
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "7000"
                },
                {
                  "level": 2,
                  "value": "14000"
                },
                {
                  "level": 3,
                  "value": "21000"
                }
              ]
            }
          ],
          "duration": "(Skil Level * 7) seconds",
          "castRange": "7 cells",
          "areaOfEffect": "5 x 5",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2302.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2302",
          "tree": {
            "idx": 33,
            "row": 4,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 2296,
                "level": 3,
                "name": "Masquerade-Unlucky",
                "visible": true
              },
              {
                "id": 2301,
                "level": 3,
                "name": "Chaos Panic",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Ground Skill"
              },
              {
                "label": "Levels",
                "value": "3"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0 seconds"
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
                "value": "0 seconds"
              },
              {
                "label": "Cast Range",
                "value": "7 cells"
              },
              {
                "label": "Target",
                "value": "Ground"
              },
              {
                "label": "Area of Effect",
                "value": "5 x 5"
              },
              {
                "label": "Duration",
                "value": "(Skil Level * 7) seconds"
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
                    "id": "range",
                    "label": "Range"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Skill Duration 7 sec",
                      "sp-cost": "50",
                      "range": "7 cells",
                      "data-1": "7000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Skill Duration 14 sec",
                      "sp-cost": "55",
                      "range": "7 cells",
                      "data-1": "14000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Skill Duration 21 sec",
                      "sp-cost": "60",
                      "range": "7 cells",
                      "data-1": "21000"
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
      "label": "Stalker",
      "pointLimit": 69,
      "tree": {
        "columns": 7,
        "rows": 6
      },
      "skills": [
        {
          "id": 44,
          "imageFile": "44.png",
          "name": "Vulture's Eye",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Vulture's_Eye",
          "description": "Enhances Attack range and Hit rate with Bow class weapons.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Range Bonus + 1, HIT Bonus: 1%"
            },
            {
              "level": 2,
              "text": "Range Bonus + 2, HIT Bonus: 2%"
            },
            {
              "level": 3,
              "text": "Range Bonus + 3, HIT Bonus: 3%"
            },
            {
              "level": 4,
              "text": "Range Bonus + 4, HIT Bonus: 4%"
            },
            {
              "level": 5,
              "text": "Range Bonus + 5, HIT Bonus: 5%"
            },
            {
              "level": 6,
              "text": "Range Bonus + 6, HIT Bonus: 6%"
            },
            {
              "level": 7,
              "text": "Range Bonus + 7, HIT Bonus: 7%"
            },
            {
              "level": 8,
              "text": "Range Bonus + 8, HIT Bonus: 8%"
            },
            {
              "level": 9,
              "text": "Range Bonus + 9, HIT Bonus: 9%"
            },
            {
              "level": 10,
              "text": "Range Bonus +10, HIT Bonus:10%"
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
          "iconUrl": "assets/divine-pride/skills/44.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/44",
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
                    "id": "sp-cost",
                    "label": "SP Cost"
                  },
                  {
                    "id": "effect",
                    "label": "Effect"
                  },
                  {
                    "id": "range-bonus",
                    "label": "Range Bonus"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "range-bonus": "+ 1",
                      "effect": "HIT Bonus: 1%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "range-bonus": "+ 2",
                      "effect": "HIT Bonus: 2%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "range-bonus": "+ 3",
                      "effect": "HIT Bonus: 3%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "range-bonus": "+ 4",
                      "effect": "HIT Bonus: 4%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "range-bonus": "+ 5",
                      "effect": "HIT Bonus: 5%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "range-bonus": "+ 6",
                      "effect": "HIT Bonus: 6%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "range-bonus": "+ 7",
                      "effect": "HIT Bonus: 7%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "range-bonus": "+ 8",
                      "effect": "HIT Bonus: 8%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "range-bonus": "+ 9",
                      "effect": "HIT Bonus: 9%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "range-bonus": "+10",
                      "effect": "HIT Bonus:10%",
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
          "id": 213,
          "imageFile": "213.png",
          "name": "Stalk (Tunnel Drive)",
          "maxLevel": 5,
          "prerequisiteText": "Hiding 1",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Allows the user to move while hidden. Moving in Hiding status is slower than general moving.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Movement speed : 26%"
            },
            {
              "level": 2,
              "text": "Movement speed : 32%"
            },
            {
              "level": 3,
              "text": "Movement speed : 38%"
            },
            {
              "level": 4,
              "text": "Movement speed : 44%"
            },
            {
              "level": 5,
              "text": "Movement speed : 50%"
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
          "iconUrl": "assets/divine-pride/skills/213.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/213",
          "tree": {
            "idx": 1,
            "row": 0,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 51,
                "level": 1,
                "name": "Hiding",
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
                      "effect": "Movement speed : 26%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Movement speed : 32%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Movement speed : 38%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Movement speed : 44%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Movement speed : 50%",
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
          "id": 210,
          "imageFile": "210.png",
          "name": "Snatcher",
          "maxLevel": 10,
          "prerequisiteText": "Steal 1",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Snatcher",
          "description": "Gives a chance to autocast Steal on the target when physically attacking, using its currently learned level.\nSkill level affects the chance of steel.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Steal Chance: 7%"
            },
            {
              "level": 2,
              "text": "Steal Chance: 8%"
            },
            {
              "level": 3,
              "text": "Steal Chance: 10%"
            },
            {
              "level": 4,
              "text": "Steal Chance: 11%"
            },
            {
              "level": 5,
              "text": "Steal Chance: 13%"
            },
            {
              "level": 6,
              "text": "Steal Chance: 14%"
            },
            {
              "level": 7,
              "text": "Steal Chance: 16%"
            },
            {
              "level": 8,
              "text": "Steal Chance: 17%"
            },
            {
              "level": 9,
              "text": "Steal Chance: 19%"
            },
            {
              "level": 10,
              "text": "Steal Chance: 20%"
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
                  "value": "8"
                },
                {
                  "level": 3,
                  "value": "10"
                },
                {
                  "level": 4,
                  "value": "11"
                },
                {
                  "level": 5,
                  "value": "13"
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
                  "value": "17"
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/210.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/210",
          "tree": {
            "idx": 2,
            "row": 0,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 50,
                "level": 1,
                "name": "Steal",
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
                      "effect": "Steal Chance: 7%",
                      "sp-cost": "0",
                      "data-1": "7"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Steal Chance: 8%",
                      "sp-cost": "0",
                      "data-1": "8"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Steal Chance: 10%",
                      "sp-cost": "0",
                      "data-1": "10"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Steal Chance: 11%",
                      "sp-cost": "0",
                      "data-1": "11"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Steal Chance: 13%",
                      "sp-cost": "0",
                      "data-1": "13"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "Steal Chance: 14%",
                      "sp-cost": "0",
                      "data-1": "14"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "Steal Chance: 16%",
                      "sp-cost": "0",
                      "data-1": "16"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "Steal Chance: 17%",
                      "sp-cost": "0",
                      "data-1": "17"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "Steal Chance: 19%",
                      "sp-cost": "0",
                      "data-1": "19"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "Steal Chance: 20%",
                      "sp-cost": "0",
                      "data-1": "20"
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
          "id": 218,
          "imageFile": "218.png",
          "name": "Strip Helm",
          "maxLevel": 5,
          "prerequisiteText": "Steal Coin 2",
          "group": "Active",
          "type": "Debuff",
          "target": "1 Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Strip_Helm",
          "description": "Attempt to forcibly strip the equipped headgear off a single target and prevents it to equip any headgear temporarily.\nAgainst monsters, this will decrease their INT by 40% temporarily.\nit does not affect the SP of the monster.\nBoth Base Chance and Base Duration are affected by the difference between both the user's and target's DEX. (Chance, Duration).",
          "levelDetails": [
            {
              "level": 1,
              "text": "Strip chance: 10%"
            },
            {
              "level": 2,
              "text": "Strip chance: 15%"
            },
            {
              "level": 3,
              "text": "Strip chance: 20%"
            },
            {
              "level": 4,
              "text": "Strip chance: 25%"
            },
            {
              "level": 5,
              "text": "Strip chance: 30%"
            }
          ],
          "cooldown": "0.5 seconds",
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
            }
          ],
          "spCost": "10 + (Skill Level × 2)",
          "castDelay": "1 second",
          "duration": "60 + (Skill Level × 15) seconds",
          "castRange": "Melee",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/218.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/218",
          "tree": {
            "idx": 3,
            "row": 0,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 211,
                "level": 2,
                "name": "Mug",
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
                "value": "10 + (Skill Level × 2)"
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
                "value": "Melee"
              },
              {
                "label": "Target",
                "value": "1 Enemy"
              },
              {
                "label": "Duration",
                "value": "60 + (Skill Level × 15) seconds"
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
                      "effect": "Strip chance: 10%",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Strip chance: 15%",
                      "sp-cost": "14"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Strip chance: 20%",
                      "sp-cost": "16"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Strip chance: 25%",
                      "sp-cost": "18"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Strip chance: 30%",
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
          "id": 1005,
          "imageFile": "1005.png",
          "name": "Close Confine",
          "maxLevel": 1,
          "prerequisiteText": "Quest complete",
          "group": "Active",
          "type": "Debuff",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Close_Confine",
          "description": "Takes hold of the attacker for 10 sec. to disable their movement at the cost of 40 SP. You become unable to move too.\nReceives a FLEE + 50 bonus while holding the target. If you use Fly Wing, Butterfly Wing, or Teleportation, get detached from the target due to knockdown or a Knockback skill, or go into Hiding status, this skill is automatically canceled.\nYou cannot hold a Boss monster with this skill.",
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
          "spCost": "25",
          "castDelay": "1 second",
          "cooldown": "None",
          "duration": "15 seconds",
          "castRange": "Melee",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/1005.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/1005",
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
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "1"
              },
              {
                "label": "SP Cost",
                "value": "25"
              },
              {
                "label": "Cast Delay",
                "value": "1 second"
              },
              {
                "label": "Cooldown",
                "value": "None"
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
                "value": "15 seconds"
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
          "id": 46,
          "imageFile": "46.png",
          "name": "Double Strafe(Double strafing)",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "Ranged Physical Attack",
          "target": "1 Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Consumes SP12 and shoots a double bolt at a single target.\nDouble Strafe's basic range is 9 cells.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 100% X 2times"
            },
            {
              "level": 2,
              "text": "ATK 110% X 2times"
            },
            {
              "level": 3,
              "text": "ATK 120% X 2times"
            },
            {
              "level": 4,
              "text": "ATK 130% X 2times"
            },
            {
              "level": 5,
              "text": "ATK 140% X 2times"
            },
            {
              "level": 6,
              "text": "ATK 150% X 2times"
            },
            {
              "level": 7,
              "text": "ATK 160% X 2times"
            },
            {
              "level": 8,
              "text": "ATK 170% X 2times"
            },
            {
              "level": 9,
              "text": "ATK 180% X 2times"
            },
            {
              "level": 10,
              "text": "ATK 190% X 2times"
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
          "iconUrl": "assets/divine-pride/skills/46.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/46",
          "tree": {
            "idx": 7,
            "row": 1,
            "col": 0,
            "columns": 7,
            "requirements": [
              {
                "id": 44,
                "level": 10,
                "name": "Vulture's Eye",
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
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 10,
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
          "id": 389,
          "imageFile": "389.png",
          "name": "Stealth",
          "maxLevel": 5,
          "prerequisiteText": "Hiding 5, Stalk 3",
          "group": "Active",
          "type": "Supportive",
          "target": "Caster Only",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Stealth",
          "description": "Enter a special Hiding status in\nwhich caster can move without being detected by\nskills such as Improve Concentration, Sight or\nRuwach. However, the caster will leave\nfootprints and can be damaged by skills that\ntarget the ground. Ineffective against Insect,\nDevil and Boss monsters. During WoE (Guild War),\nthis skill will consume 5 times as much SP.",
          "levelDetails": [
            {
              "level": 1,
              "text": "12 SP/10 sec 70% Movement Speed\n+1 STR added after 1st 10 sec"
            },
            {
              "level": 2,
              "text": "14 SP/10 sec 75% Movement Speed\n+2 STR added after 1st 10 sec"
            },
            {
              "level": 3,
              "text": "16 SP/10 sec 80% Movement Speed\n+4 STR added after 1st 10 sec"
            },
            {
              "level": 4,
              "text": "18 SP/10 sec 85% Movement Speed\n+8 STR added after 1st 10 sec"
            },
            {
              "level": 5,
              "text": "20 SP/10 sec 90% Movement Speed\n+16 STR added after 1st 10 sec"
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
          "spCost": "Cast: 10 Normal: [10 + (Skill Level x 2)] per 10 seconds WoE : [50 + (Skill Level x 10)] per 10 seconds",
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "0.5 seconds",
          "duration": "Sustained (Limited by SP)",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/389.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/389",
          "tree": {
            "idx": 8,
            "row": 1,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 51,
                "level": 5,
                "name": "Hiding",
                "visible": false
              },
              {
                "id": 213,
                "level": 3,
                "name": "Stalk",
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
                "value": "Cast: 10 Normal: [10 + (Skill Level x 2)] per 10 seconds WoE : [50 + (Skill Level x 10)] per 10 seconds"
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
                "label": "Target",
                "value": "Caster Only"
              },
              {
                "label": "Duration",
                "value": "Sustained (Limited by SP)"
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
                      "effect": "12 SP / 10 sec 70% Movement Speed\n+1 STR added after 1st 10 sec",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "14 SP / 10 sec 75% Movement Speed\n+2 STR added after 1st 10 sec",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "16 SP / 10 sec 80% Movement Speed\n+4 STR added after 1st 10 sec",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "18 SP / 10 sec 85% Movement Speed\n+8 STR added after 1st 10 sec",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "20 SP / 10 sec 90% Movement Speed\n+16 STR added after 1st 10 sec",
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
          "id": 211,
          "imageFile": "211.png",
          "name": "Steal Coin",
          "maxLevel": 10,
          "prerequisiteText": "Snatcher 4",
          "group": "Active",
          "type": "Supportive",
          "target": "1 Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Steal_Coin",
          "description": "Attempts to snatch a set amount of Zeny from a targeted monster. A successful cast will draw the targeted monster's aggresion.\nSuccess Rate is affected by the user's DEX, LUK, and the level difference between the user and the target.\nCannot be used on players and Boss monsters.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Base success rate: 1%"
            },
            {
              "level": 2,
              "text": "Base success rate: 2%"
            },
            {
              "level": 3,
              "text": "Base success rate: 3%"
            },
            {
              "level": 4,
              "text": "Base success rate: 4%"
            },
            {
              "level": 5,
              "text": "Base success rate: 5%"
            },
            {
              "level": 6,
              "text": "Base success rate: 6%"
            },
            {
              "level": 7,
              "text": "Base success rate: 7%"
            },
            {
              "level": 8,
              "text": "Base success rate: 8%"
            },
            {
              "level": 9,
              "text": "Base success rate: 9%"
            },
            {
              "level": 10,
              "text": "Base success rate:10%"
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
          "spCost": "15",
          "castRange": "1 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/211.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/211",
          "tree": {
            "idx": 9,
            "row": 1,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 210,
                "level": 4,
                "name": "Gank",
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
                "value": "15"
              },
              {
                "label": "Cast Range",
                "value": "1 cells"
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
                      "effect": "Base success rate: 1%",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Base success rate: 2%",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Base success rate: 3%",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Base success rate: 4%",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Base success rate: 5%",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "Base success rate: 6%",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "Base success rate: 7%",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "Base success rate: 8%",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "Base success rate: 9%",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "Base success rate:10%",
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
          "id": 216,
          "imageFile": "216.png",
          "name": "Strip Shield",
          "maxLevel": 5,
          "prerequisiteText": "Strip Helm 5",
          "group": "Active",
          "type": "Debuff",
          "target": "1 Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Strip_Shield",
          "description": "Attempt to forcibly strip the equipped shield off a single target and prevents it to equip any shield temporarily.\nAgainst monsters, this will decrease their Hard DEF by 15% temporarily.\nBoth Base Chance and Base Duration are affected by the difference between both the user's and target's DEX. (Chance, Duration).",
          "levelDetails": [
            {
              "level": 1,
              "text": "Strip chance: 10%"
            },
            {
              "level": 2,
              "text": "Strip chance: 15%"
            },
            {
              "level": 3,
              "text": "Strip chance: 20%"
            },
            {
              "level": 4,
              "text": "Strip chance: 25%"
            },
            {
              "level": 5,
              "text": "Strip chance: 30%"
            }
          ],
          "cooldown": "0.5 seconds",
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
            }
          ],
          "spCost": "10 + (Skill Level × 2)",
          "castDelay": "1 second",
          "duration": "60 + (Skill Level × 15) seconds",
          "castRange": "Melee",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/216.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/216",
          "tree": {
            "idx": 10,
            "row": 1,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 218,
                "level": 5,
                "name": "Divest Helm",
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
                "value": "10 + (Skill Level × 2)"
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
                "value": "Melee"
              },
              {
                "label": "Target",
                "value": "1 Enemy"
              },
              {
                "label": "Duration",
                "value": "60 + (Skill Level × 15) seconds"
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
                      "effect": "Strip chance: 10%",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Strip chance: 15%",
                      "sp-cost": "14"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Strip chance: 20%",
                      "sp-cost": "16"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Strip chance: 25%",
                      "sp-cost": "18"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Strip chance: 30%",
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
          "id": 223,
          "imageFile": "223.png",
          "name": "GangSter's Paradise",
          "maxLevel": 1,
          "prerequisiteText": "Strip Shield 3",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "When two or more Rogues are sitting adjacent to each other and at least one of them knows this skill, monsters will not attack them.\nThis skill does not affect boss monsters.",
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
          "iconUrl": "assets/divine-pride/skills/223.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/223",
          "tree": {
            "idx": 11,
            "row": 1,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 216,
                "level": 3,
                "name": "Divest Shield",
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
          "id": 124,
          "imageFile": "124.png",
          "name": "Remove Trap",
          "maxLevel": 1,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "Supportive",
          "target": "Installed trap",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Remove_Trap",
          "description": "Removes a trap that has been set on the ground by consuming SPS.\nWhen the trap is removed, the item is returned to the inventory.",
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
          "spCost": "5",
          "castRange": "1 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/124.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/124",
          "tree": {
            "idx": 14,
            "row": 2,
            "col": 0,
            "columns": 7,
            "requirements": [
              {
                "id": 46,
                "level": 5,
                "name": "Double Strafe",
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
                "label": "Cast Range",
                "value": "1 cells"
              },
              {
                "label": "Target",
                "value": "Installed trap"
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
          "id": 212,
          "imageFile": "212.png",
          "name": "Back Stab",
          "maxLevel": 10,
          "prerequisiteText": "Steal Coin 4",
          "group": "Active",
          "type": "Supportive",
          "target": "1 Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Back_Stab",
          "description": "Attack from the other side of the target, causing a physical attack damage.\nThe damage is reduced by half when the bow is mounted, and the damage occurs twice when the dagger is mounted.\nEnhances hit rate upon skill level.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 340%, with Bow ATK 170%"
            },
            {
              "level": 2,
              "text": "ATK 380%, with Bow ATK 190%"
            },
            {
              "level": 3,
              "text": "ATK 420%, with Bow ATK 210%"
            },
            {
              "level": 4,
              "text": "ATK 460%, with Bow ATK 230%"
            },
            {
              "level": 5,
              "text": "ATK 500%, with Bow ATK 250%"
            },
            {
              "level": 6,
              "text": "ATK 540%, with Bow ATK 270%"
            },
            {
              "level": 7,
              "text": "ATK 580%, with Bow ATK 290%"
            },
            {
              "level": 8,
              "text": "ATK 620%, with Bow ATK 310%"
            },
            {
              "level": 9,
              "text": "ATK 660%, with Bow ATK 330%"
            },
            {
              "level": 10,
              "text": "ATK 700%, with Bow ATK 350%"
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
                  "value": "16"
                },
                {
                  "level": 2,
                  "value": "16"
                },
                {
                  "level": 3,
                  "value": "16"
                },
                {
                  "level": 4,
                  "value": "16"
                },
                {
                  "level": 5,
                  "value": "16"
                },
                {
                  "level": 6,
                  "value": "16"
                },
                {
                  "level": 7,
                  "value": "16"
                },
                {
                  "level": 8,
                  "value": "16"
                },
                {
                  "level": 9,
                  "value": "16"
                },
                {
                  "level": 10,
                  "value": "16"
                }
              ]
            },
            {
              "label": "Atk %",
              "values": [
                {
                  "level": 1,
                  "value": "340"
                },
                {
                  "level": 2,
                  "value": "380"
                },
                {
                  "level": 3,
                  "value": "420"
                },
                {
                  "level": 4,
                  "value": "460"
                },
                {
                  "level": 5,
                  "value": "500"
                },
                {
                  "level": 6,
                  "value": "540"
                },
                {
                  "level": 7,
                  "value": "580"
                },
                {
                  "level": 8,
                  "value": "620"
                },
                {
                  "level": 9,
                  "value": "660"
                },
                {
                  "level": 10,
                  "value": "700"
                }
              ]
            },
            {
              "label": "Data 1",
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
          "spCost": "12",
          "castRange": "Melee",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/212.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/212",
          "tree": {
            "idx": 16,
            "row": 2,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 211,
                "level": 4,
                "name": "Mug",
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
                "value": "12"
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
                "label": "Cast Range",
                "value": "Melee"
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
                      "sp-cost": "16",
                      "atk": "340",
                      "data-1": "105"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "16",
                      "atk": "380",
                      "data-1": "110"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "16",
                      "atk": "420",
                      "data-1": "115"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "16",
                      "atk": "460",
                      "data-1": "120"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "16",
                      "atk": "500",
                      "data-1": "125"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "16",
                      "atk": "540",
                      "data-1": "130"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "16",
                      "atk": "580",
                      "data-1": "135"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "16",
                      "atk": "620",
                      "data-1": "140"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "16",
                      "atk": "660",
                      "data-1": "145"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "sp-cost": "16",
                      "atk": "700",
                      "data-1": "150"
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
          "id": 217,
          "imageFile": "217.png",
          "name": "Strip Armor",
          "maxLevel": 5,
          "prerequisiteText": "Strip Shield 5",
          "group": "Active",
          "type": "Debuff",
          "target": "1 Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Strip_Armor",
          "description": "Attempt to forcibly strip the equipped armor off a single target and prevents it to equip any armor temporarily.\nAgainst monsters, this will decrease their VIT by 40% temporarily.\nit does not affect the HP of the monster.\nBoth Base Chance and Base Duration are affected by the difference between both the user's and target's DEX. (Chance, Duration).",
          "levelDetails": [
            {
              "level": 1,
              "text": "Strip chance: 10%"
            },
            {
              "level": 2,
              "text": "Strip chance: 15%"
            },
            {
              "level": 3,
              "text": "Strip chance: 20%"
            },
            {
              "level": 4,
              "text": "Strip chance: 25%"
            },
            {
              "level": 5,
              "text": "Strip chance: 30%"
            }
          ],
          "cooldown": "0.5 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "17"
                },
                {
                  "level": 2,
                  "value": "19"
                },
                {
                  "level": 3,
                  "value": "21"
                },
                {
                  "level": 4,
                  "value": "23"
                },
                {
                  "level": 5,
                  "value": "25"
                }
              ]
            }
          ],
          "spCost": "15 + (Skill Level × 2)",
          "castDelay": "1 second",
          "duration": "60 + (Skill Level × 15) seconds",
          "castRange": "Melee",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/217.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/217",
          "tree": {
            "idx": 17,
            "row": 2,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 216,
                "level": 5,
                "name": "Divest Shield",
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
                "value": "15 + (Skill Level × 2)"
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
                "value": "Melee"
              },
              {
                "label": "Target",
                "value": "1 Enemy"
              },
              {
                "label": "Duration",
                "value": "60 + (Skill Level × 15) seconds"
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
                      "effect": "Strip chance: 10%",
                      "sp-cost": "17"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Strip chance: 15%",
                      "sp-cost": "19"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Strip chance: 20%",
                      "sp-cost": "21"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Strip chance: 25%",
                      "sp-cost": "23"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Strip chance: 30%",
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
          "id": 222,
          "imageFile": "222.png",
          "name": "Remover",
          "maxLevel": 1,
          "prerequisiteText": "GangSter Paradise",
          "group": "Active",
          "type": "Supportive",
          "target": "Flag",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Remover",
          "description": "Cleans graffiti from the targeted Guild Flag. Each cast consumes 1 Wet Duster",
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
          "spCost": "5",
          "castDelay": "Unknown",
          "cooldown": "Unknown",
          "castRange": "Unknown cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/222.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/222",
          "tree": {
            "idx": 18,
            "row": 2,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 223,
                "level": 1,
                "name": "Slyness",
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
                "label": "Cast Delay",
                "value": "Unknown"
              },
              {
                "label": "Cooldown",
                "value": "Unknown"
              },
              {
                "label": "Cast Range",
                "value": "Unknown cells"
              },
              {
                "label": "Target",
                "value": "Flag"
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
          "id": 224,
          "imageFile": "224.png",
          "name": "Compulsion Discount",
          "maxLevel": 5,
          "prerequisiteText": "GangSter's Paradise 1",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Compulsion_Discount",
          "description": "Enables to purchase items from NPC Shops at lower prices.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Discount rate 9%"
            },
            {
              "level": 2,
              "text": "Discount rate 13%"
            },
            {
              "level": 3,
              "text": "Discount rate 17%"
            },
            {
              "level": 4,
              "text": "Discount rate 21%"
            },
            {
              "level": 5,
              "text": "Discount rate 25%"
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
          "iconUrl": "assets/divine-pride/skills/224.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/224",
          "tree": {
            "idx": 19,
            "row": 2,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 223,
                "level": 1,
                "name": "Slyness",
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
                      "effect": "Discount rate 9%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Discount rate 13%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Discount rate 17%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Discount rate 21%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Discount rate 25%",
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
          "id": 214,
          "imageFile": "214.png",
          "name": "Raid",
          "maxLevel": 5,
          "prerequisiteText": "Stalk 2, Back Stap 2",
          "group": "Active",
          "type": "Physical Attack",
          "target": "Immediately",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Raid",
          "description": "This skill can only be used with Hiding active.\nHiding is canceled afterwards. It has a chance of leaving them [Abnormal Status: blind] or [Abnormal Status: stunned].\nEnemies struck with this skill will take 30% more damage for 10 seconds .\nThe chance of stun/blind is reduced by the target's resistance to abnormal status.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 200%, Blind and Stun chance: 13%"
            },
            {
              "level": 2,
              "text": "ATK 350%, Blind and Stun chance: 16%"
            },
            {
              "level": 3,
              "text": "ATK 500%, Blind and Stun chance: 19%"
            },
            {
              "level": 4,
              "text": "ATK 650%, Blind and Stun chance: 22%"
            },
            {
              "level": 5,
              "text": "ATK 800%, Blind and Stun chance: 25%"
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
          "castDelay": "ASPD Based",
          "castRange": "Melee",
          "areaOfEffect": "7 x 7",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/214.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/214",
          "tree": {
            "idx": 22,
            "row": 3,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 212,
                "level": 2,
                "name": "Back Stab",
                "visible": true
              },
              {
                "id": 213,
                "level": 2,
                "name": "Stalk",
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
                "label": "Cast Delay",
                "value": "ASPD Based"
              },
              {
                "label": "Cast Range",
                "value": "Melee"
              },
              {
                "label": "Target",
                "value": "Immediately"
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
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 5,
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
          "id": 215,
          "imageFile": "215.png",
          "name": "Divest Weapon (Strip Weapon)",
          "maxLevel": 5,
          "prerequisiteText": "Strip Armor 5",
          "group": "Active",
          "type": "Debuff",
          "target": "1 Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Attempt to forcibly strip the equipped weapon off a single target and prevents it to equip any weapon temporarily.\nAgainst monsters, this will decrease their ATK by 25% temporarily.\nBoth Base Chance and Base Duration are affected by the difference between both the user's and target's DEX. (Chance, Duration).",
          "levelDetails": [
            {
              "level": 1,
              "text": "Strip chance: 10%"
            },
            {
              "level": 2,
              "text": "Strip chance: 15%"
            },
            {
              "level": 3,
              "text": "Strip chance: 20%"
            },
            {
              "level": 4,
              "text": "Strip chance: 25%"
            },
            {
              "level": 5,
              "text": "Strip chance: 30%"
            }
          ],
          "cooldown": "0.5 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "17"
                },
                {
                  "level": 2,
                  "value": "19"
                },
                {
                  "level": 3,
                  "value": "21"
                },
                {
                  "level": 4,
                  "value": "23"
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
          "iconUrl": "assets/divine-pride/skills/215.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/215",
          "tree": {
            "idx": 24,
            "row": 3,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 217,
                "level": 5,
                "name": "Divest Armor",
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
                "label": "Cooldown",
                "value": "0.5 seconds"
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
                      "effect": "Strip chance: 10%",
                      "sp-cost": "17"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Strip chance: 15%",
                      "sp-cost": "19"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Strip chance: 20%",
                      "sp-cost": "21"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Strip chance: 25%",
                      "sp-cost": "23"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Strip chance: 30%",
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
          "id": 221,
          "imageFile": "221.png",
          "name": "Flag Graffiti",
          "maxLevel": 5,
          "prerequisiteText": "Remover 1",
          "group": "Active",
          "type": "Supportive",
          "target": "Flag",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Flag_Graffiti",
          "description": "Places a graffiti on the targeted Guild Flag to replace the guild emblem with an image of the user's making.\nAs skill levels increase, the type of graffiti increases. ì‚¬Each cast consumes 1 Giant Paint Brush",
          "levelDetails": [],
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
          "spCost": "10",
          "castDelay": "Unknown",
          "cooldown": "Unknown",
          "castRange": "Unknown cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/221.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/221",
          "tree": {
            "idx": 25,
            "row": 3,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 222,
                "level": 1,
                "name": "Remover",
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
                "label": "Cast Delay",
                "value": "Unknown"
              },
              {
                "label": "Cooldown",
                "value": "Unknown"
              },
              {
                "label": "Cast Range",
                "value": "Unknown cells"
              },
              {
                "label": "Target",
                "value": "Flag"
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
          "id": 219,
          "imageFile": "219.png",
          "name": "Intimidate",
          "maxLevel": 5,
          "prerequisiteText": "Raid 5, Back Stap 4",
          "group": "Active",
          "type": "Physical Attack",
          "target": "1 Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Intimidate",
          "description": "Attack the target, give it a physical Attack damage, and warp to a random place within the map with the target.\nCannot be used on players and Boss monsters, The higher the caster's level, the lower the target's level/the higher the probability of success.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 130%"
            },
            {
              "level": 2,
              "text": "ATK 160%"
            },
            {
              "level": 3,
              "text": "ATK 190%"
            },
            {
              "level": 4,
              "text": "ATK 220%"
            },
            {
              "level": 5,
              "text": "ATK 250%"
            }
          ],
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
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/219.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/219",
          "tree": {
            "idx": 29,
            "row": 4,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 212,
                "level": 4,
                "name": "Back Stab",
                "visible": true
              },
              {
                "id": 214,
                "level": 5,
                "name": "Sightless Mind",
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
          "id": 476,
          "imageFile": "476.png",
          "name": "Full Divestment",
          "maxLevel": 5,
          "prerequisiteText": "Divest Weapon 5",
          "group": "",
          "type": "Debuff",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Full_Divestment",
          "description": "Cast all four Divest skills at the\nsame time. This skill's success rate increases\nif the caster has higher DEX than the skill's\ntarget.",
          "levelDetails": [
            {
              "level": 1,
              "text": "7% Success Rate"
            },
            {
              "level": 2,
              "text": "9% Success Rate"
            },
            {
              "level": 3,
              "text": "11% Success Rate"
            },
            {
              "level": 4,
              "text": "13% Success Rate"
            },
            {
              "level": 5,
              "text": "15% Success Rate"
            }
          ],
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
                  "value": "24"
                },
                {
                  "level": 3,
                  "value": "26"
                },
                {
                  "level": 4,
                  "value": "28"
                },
                {
                  "level": 5,
                  "value": "30"
                }
              ]
            }
          ],
          "spCost": "20 + (Skill Level x 2)",
          "castDelay": "1 second",
          "duration": "135 seconds +/-",
          "castRange": "Melee",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/476.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/476",
          "tree": {
            "idx": 30,
            "row": 4,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 215,
                "level": 5,
                "name": "Divest Weapon",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Debuff"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "20 + (Skill Level x 2)"
              },
              {
                "label": "Cast Delay",
                "value": "1 second"
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
                "value": "135 seconds +/-"
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
                      "effect": "7% Success Rate",
                      "sp-cost": "22"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "9% Success Rate",
                      "sp-cost": "24"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "11% Success Rate",
                      "sp-cost": "26"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "13% Success Rate",
                      "sp-cost": "28"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "15% Success Rate",
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
          "id": 390,
          "imageFile": "390.png",
          "name": "Counter Instinct",
          "maxLevel": 5,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "Supportive",
          "target": "Caster Only",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Counter_Instinct",
          "description": "If an enemy is using a Sword Class\nWeapon, activating this skill can deflect\nattacks, reducing damage from Swords by half.\nA total of 3 attacks can be deflected after\nthis skill is cast. On monsters, the damage\nthat is deflected will be directed back at the\nmonster.",
          "levelDetails": [
            {
              "level": 1,
              "text": "15% Deflect Sword Attack Success"
            },
            {
              "level": 2,
              "text": "30% Deflect Sword Attack Success"
            },
            {
              "level": 3,
              "text": "45% Deflect Sword Attack Success"
            },
            {
              "level": 4,
              "text": "60% Deflect Sword Attack Success"
            },
            {
              "level": 5,
              "text": "75% Deflect Sword Attack Success"
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
          "spCost": "5 + (Skill Level x 5)",
          "castDelay": "None",
          "duration": "Indefinite",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/390.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/390",
          "tree": {
            "idx": 31,
            "row": 4,
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
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "5 + (Skill Level x 5)"
              },
              {
                "label": "Cast Delay",
                "value": "None"
              },
              {
                "label": "Target",
                "value": "Caster Only"
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
                      "effect": "15% Deflect Sword Attack Success",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "30% Deflect Sword Attack Success",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "45% Deflect Sword Attack Success",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "60% Deflect Sword Attack Success",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "75% Deflect Sword Attack Success",
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
          "id": 220,
          "imageFile": "220.png",
          "name": "Graffiti",
          "maxLevel": 1,
          "prerequisiteText": "Flag Graffiti 5",
          "group": "Active",
          "type": "1 cell on ground",
          "target": "Ground",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Graffiti",
          "description": "Places a graffiti on the targeted location with a message. Each cast consumes 1 Red Gemstone.\nThe message is up to 20 characters.\nInstances of this skill cannot be overlapped.",
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
          "duration": "3 minutes",
          "castRange": "1 cells",
          "areaOfEffect": "5 x 5",
          "translations": {
            "pt-BR": {
              "name": " Graffiti ",
              "description": "Pinta uma mensagem de até 20 dígitos no chão.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Graffiti"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/220.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/220",
          "tree": {
            "idx": 32,
            "row": 4,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 221,
                "level": 5,
                "name": "Piece",
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
                "label": "Cast Range",
                "value": "1 cells"
              },
              {
                "label": "Target",
                "value": "Ground"
              },
              {
                "label": "Area of Effect",
                "value": "5 x 5"
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
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 225,
          "imageFile": "225.png",
          "name": "Intimidate (Plagiarism)",
          "maxLevel": 10,
          "prerequisiteText": "Intimidate 5",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Attack speed increases with skill level,\nEnables to use the last skill that was inflicted by the enemy, which does not need to connect in order to be plagiarized.\nSkill level affects the Maximum level of the plagiarized skill that the user can obtain.\nIt cannot exceed the Maximum level of this skill. Special effects such as items that affect the skill tree or bring the level of learning cannot be used.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Lv. 1 Able to memorize, Increase ATK Speed: 1%"
            },
            {
              "level": 2,
              "text": "Lv. 2 Able to memorize, Increase ATK Speed: 2%"
            },
            {
              "level": 3,
              "text": "Lv. 3 Able to memorize, Increase ATK Speed: 3%"
            },
            {
              "level": 4,
              "text": "Lv. 4 Able to memorize, Increase ATK Speed: 4%"
            },
            {
              "level": 5,
              "text": "Lv. 5 Able to memorize, Increase ATK Speed: 5%"
            },
            {
              "level": 6,
              "text": "Lv. 6 Able to memorize, Increase ATK Speed: 6%"
            },
            {
              "level": 7,
              "text": "Lv. 7 Able to memorize, Increase ATK Speed: 7%"
            },
            {
              "level": 8,
              "text": "Lv. 8 Able to memorize, Increase ATK Speed: 8%"
            },
            {
              "level": 9,
              "text": "Lv. 9 Able to memorize, Increase ATK Speed: 9%"
            },
            {
              "level": 10,
              "text": "Lv.10 Able to memorize, Increase ATK Speed:10%"
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
          "iconUrl": "assets/divine-pride/skills/225.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/225",
          "tree": {
            "idx": 36,
            "row": 5,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 219,
                "level": 5,
                "name": "Snatch",
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
          "id": 475,
          "imageFile": "475.png",
          "name": "Preserve",
          "maxLevel": 1,
          "prerequisiteText": "Intimidate 10",
          "group": "",
          "type": "Supportive",
          "target": "Caster Only",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Preserve",
          "description": "Prevent the automatic copying of\nskills through the Intimidate skill for 10\nminutes in order to preserve the last skill\ncopied through Intimidate.",
          "levelDetails": [],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "30"
                }
              ]
            }
          ],
          "spCost": "30",
          "fixedCastTime": "1 second",
          "duration": "10 minutes",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/475.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/475",
          "tree": {
            "idx": 38,
            "row": 5,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 225,
                "level": 10,
                "name": "Intimidate",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Supportive"
              },
              {
                "label": "Levels",
                "value": "1"
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
                  }
                ],
                "rows": [
                  {
                    "level": 1,
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
        }
      ]
    },
    {
      "id": "previous-3",
      "label": "Thief",
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
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Double_Attack",
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
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Steal",
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
          "spCost": "10",
          "castDelay": "1 second",
          "castRange": "Melee",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/50.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/50",
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
                "value": "10"
              },
              {
                "label": "Cast Delay",
                "value": "1 second"
              },
              {
                "label": "Cast Range",
                "value": "Melee"
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
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Envenom",
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
          "spCost": "12",
          "castDelay": "ASPD",
          "castRange": "Melee",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/52.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/52",
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
                "value": "10"
              },
              {
                "label": "SP Cost",
                "value": "12"
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
                    "label": "Damage:"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "damage": "+ 15",
                      "effect": "Chance of Effect: 14%",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "damage": "+ 30",
                      "effect": "Chance of Effect: 18%",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "damage": "+ 45",
                      "effect": "Chance of Effect: 22%",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "damage": "+ 60",
                      "effect": "Chance of Effect: 26%",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "damage": "+ 75",
                      "effect": "Chance of Effect: 30%",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "damage": "+ 90",
                      "effect": "Chance of Effect: 34%",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "damage": "+105",
                      "effect": "Chance of Effect: 38%",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "damage": "+120",
                      "effect": "Chance of Effect: 42%",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "damage": "+135",
                      "effect": "Chance of Effect: 46%",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "damage": "+150",
                      "effect": "Chance of Effect: 50%",
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
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Sand_Attack",
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
          "spCost": "9",
          "castRange": "Melee",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/149.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/149",
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
                "value": "Offensive (Earth Property) Skill"
              },
              {
                "label": "Levels",
                "value": "1"
              },
              {
                "label": "SP Cost",
                "value": "9"
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
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Stone_Fling",
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
          "spCost": "2",
          "castDelay": "ASPD",
          "castRange": "7 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/152.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/152",
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
                "value": "Attack Skill"
              },
              {
                "label": "Levels",
                "value": "1"
              },
              {
                "label": "SP Cost",
                "value": "2"
              },
              {
                "label": "Cast Delay",
                "value": "ASPD"
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
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Improve_Dodge",
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
            "row": 1,
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
                  },
                  {
                    "id": "1st-class-flee",
                    "label": "1st Class Flee"
                  },
                  {
                    "id": "2nd-class-flee",
                    "label": "2nd Class Flee"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "1st-class-flee": "+ 3",
                      "2nd-class-flee": "+ 4",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "1st-class-flee": "+ 6",
                      "2nd-class-flee": "+ 8",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "1st-class-flee": "+ 9",
                      "2nd-class-flee": "+12",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "1st-class-flee": "+12",
                      "2nd-class-flee": "+16",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "1st-class-flee": "+15",
                      "2nd-class-flee": "+20",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "1st-class-flee": "+18",
                      "2nd-class-flee": "+24",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "1st-class-flee": "+21",
                      "2nd-class-flee": "+28",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "1st-class-flee": "+24",
                      "2nd-class-flee": "+32",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "1st-class-flee": "+27",
                      "2nd-class-flee": "+36",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "1st-class-flee": "+30",
                      "2nd-class-flee": "+40",
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
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Hiding",
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
          "spCost": "10",
          "duration": "(Skill Level × 30) seconds; Until recast or SP reaches zero",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/51.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/51",
          "tree": {
            "idx": 9,
            "row": 1,
            "col": 2,
            "columns": 7,
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
                "label": "SP Cost",
                "value": "10"
              },
              {
                "label": "Target",
                "value": "Immediately"
              },
              {
                "label": "Duration",
                "value": "(Skill Level × 30) seconds; Until recast or SP reaches zero"
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
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Detoxify",
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
          "spCost": "10",
          "castDelay": "ASPD",
          "castRange": "9 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/53.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/53",
          "tree": {
            "idx": 10,
            "row": 1,
            "col": 3,
            "columns": 7,
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
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Back_Slide",
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
          "spCost": "7",
          "castDelay": "ASPD",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/150.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/150",
          "tree": {
            "idx": 11,
            "row": 1,
            "col": 4,
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
                "value": "7"
              },
              {
                "label": "Cast Delay",
                "value": "ASPD"
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
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Find_Stone",
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
          "spCost": "2",
          "fixedCastTime": "0.5 seconds",
          "castDelay": "ASPD",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/151.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/151",
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
                "value": "Supportive Skill"
              },
              {
                "label": "Levels",
                "value": "1"
              },
              {
                "label": "SP Cost",
                "value": "2"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0.5 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "ASPD"
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
      "id": 5311,
      "imageFile": "5311.png",
      "name": "Dagger Bow Mastery",
      "maxLevel": 10,
      "prerequisiteText": "basic skill",
      "group": "Passive",
      "type": "",
      "target": "",
      "recoversAp": "",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Dagger_Bow_Mastery",
      "description": "Daggers and Bows increase Physical damage on enemies, depending on their size.",
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
      "iconUrl": "assets/divine-pride/skills/5311.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5311",
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
      "id": 6512,
      "imageFile": "6512.png",
      "name": "Hit and Sliding",
      "maxLevel": 5,
      "prerequisiteText": "Dagger & Bow Mastery 3",
      "group": "Active",
      "type": "Melee physical",
      "target": "Single target",
      "recoversAp": "2",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "",
      "description": "Attack the target, deals melee physical damage to the target and moves the user backwards.\nIf using bow, damage type is long ranged physical damage.\nAdditionally, grants Chasing buff to the user for 60 seconds.\nDeals additional damage depends on user's base level and POW.\n[additional effect of Chasing]\nWhen Chasing buff is active, increases damage of the following skills.\n[Unlucky Rush]\n: +(Unlucky Rush Lv x2500)%\n[Chain Reaction Shot 2차 데미지]\n: +(Chain Reaction Shot Lv x700)%",
      "levelDetails": [
        {
          "level": 1,
          "text": "3500% Atk / moves 1 cell."
        },
        {
          "level": 2,
          "text": "7000% Atk / moves 2 cells."
        },
        {
          "level": 3,
          "text": "10500% Atk / moves 3 cells."
        },
        {
          "level": 4,
          "text": "14000% Atk / moves 4 cells."
        },
        {
          "level": 5,
          "text": "17500% Atk / moves 5 cells."
        }
      ],
      "levelExtras": [],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/6512.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6512",
      "tree": {
        "idx": 2,
        "row": 0,
        "col": 2,
        "columns": 7,
        "requirements": [
          {
            "id": 5311,
            "level": 3,
            "name": "Dagger Bow Mastery",
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
      "id": 5312,
      "imageFile": "5312.png",
      "name": "Magic Sword Mastery",
      "maxLevel": 10,
      "prerequisiteText": "Reproduce Lv. 5 and Shadow Spell Lv. 5",
      "group": "Passive",
      "type": "",
      "target": "",
      "recoversAp": "",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Magic_Sword_Mastery",
      "description": "Daggers and One-handed Swords increase Magic damage on enemies, depending on their size.",
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
      "iconUrl": "assets/divine-pride/skills/5312.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5312",
      "tree": {
        "idx": 5,
        "row": 0,
        "col": 5,
        "columns": 7,
        "requirements": [
          {
            "id": 2285,
            "level": 5,
            "name": "Reproduce",
            "visible": false
          },
          {
            "id": 2286,
            "level": 5,
            "name": "Shadow Spell",
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
      "id": 5314,
      "imageFile": "5314.png",
      "name": "Abyss Dagger",
      "maxLevel": 5,
      "prerequisiteText": "Fatal Menace 5, Dagger & Bow Mastery 3",
      "group": "Active",
      "type": "Melee Physical",
      "target": "Instant Cast",
      "recoversAp": "0",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Abyss_Dagger",
      "description": "Dagger and one-handed sword only skill.\nDeals 2 hits of melee physical damage to the surrounding enemies within 7 x 7 cells around the user.\nDamage is additionally increased depending on the user's base level and POW.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK Per Hit 1000%/ increases Fatal Menace damage: 3Sec"
        },
        {
          "level": 2,
          "text": "ATK Per Hit 1900%/ increases Fatal Menace damage: 6Sec"
        },
        {
          "level": 3,
          "text": "ATK Per Hit 2800%/ increases Fatal Menace damage: 9Sec"
        },
        {
          "level": 4,
          "text": "ATK Per Hit 3700%/ increases Fatal Menace damage: 12Sec"
        },
        {
          "level": 5,
          "text": "ATK Per Hit 4600%/ increases Fatal Menace damage: 15Sec"
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
              "value": "60"
            },
            {
              "level": 2,
              "value": "64"
            },
            {
              "level": 3,
              "value": "68"
            },
            {
              "level": 4,
              "value": "72"
            },
            {
              "level": 5,
              "value": "76"
            }
          ]
        }
      ],
      "spCost": "35 + (Skill Level × 5)",
      "cooldown": "0.4 seconds",
      "areaOfEffect": "7 x 7",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5314.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5314",
      "tree": {
        "idx": 8,
        "row": 1,
        "col": 1,
        "columns": 7,
        "requirements": [
          {
            "id": 2284,
            "level": 5,
            "name": "Fatal Menace",
            "visible": false
          },
          {
            "id": 5311,
            "level": 3,
            "name": "Dagger Bow Mastery",
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
            "value": "35 + (Skill Level × 5)"
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
            "value": "0.4 seconds"
          },
          {
            "label": "Target",
            "value": "Instant Cast"
          },
          {
            "label": "Area of Effect",
            "value": "7 x 7"
          },
          {
            "label": "AP Generated",
            "value": "0"
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
                  "sp-cost": "64"
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
                  "sp-cost": "72"
                }
              },
              {
                "level": 5,
                "values": {
                  "sp-cost": "76"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "balanceNotes": [
        {
          "skillName": "Abyss Dagger",
          "versionId": "rebalance-1",
          "versionLabel": "Rebalance 1",
          "file": "rebalances/abyss-chaser/rebalance_1.md",
          "section": "6.3",
          "notes": [
            "Reduces damage from 2750%Atk to 1750%Atk but the skill will deal damage twice.",
            "Increases area of effect from 5x5 cells to 7x7 cells based on level 5.",
            "Reduces cooldown from 3 seconds to 0.3 seconds based on level 5.",
            "Increases duration of Abyss Dagger buff from 10 seconds to 15 seconds based on level 5.",
            "No longer increases Fatal Menace damage by 35%, the skill will apply the damage bonus in the skill damage formula instead."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "2750%Atk",
              "after": "1750%Atk but the skill will deal damage twice",
              "scope": "",
              "source": "Reduces damage from 2750%Atk to 1750%Atk but the skill will deal damage twice."
            },
            {
              "label": "Area of Effect",
              "before": "5 x 5 cells",
              "after": "7 x 7 cells",
              "scope": "Lv 5",
              "source": "Increases area of effect from 5x5 cells to 7x7 cells based on level 5."
            },
            {
              "label": "Cooldown",
              "before": "3 seconds",
              "after": "0.3 seconds",
              "scope": "Lv 5",
              "source": "Reduces cooldown from 3 seconds to 0.3 seconds based on level 5."
            },
            {
              "label": "Duration Of Abyss Dagger Buff",
              "before": "10 seconds",
              "after": "15 seconds",
              "scope": "Lv 5",
              "source": "Increases duration of Abyss Dagger buff from 10 seconds to 15 seconds based on level 5."
            }
          ]
        },
        {
          "skillName": "Abyss Dagger",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/abyss-chaser/rebalance_2.md",
          "section": "6.1",
          "notes": [
            "Increases SP consumption from 60 to 64 based on level 5.",
            "Increases damage from 1750%Atk to 2600%Atk per hit based on level 5."
          ],
          "specRows": [
            {
              "label": "SP Cost",
              "before": "60",
              "after": "64",
              "scope": "Lv 5",
              "source": "Increases SP consumption from 60 to 64 based on level 5."
            },
            {
              "label": "Damage",
              "before": "1750%Atk",
              "after": "2600%Atk per hit",
              "scope": "Lv 5",
              "source": "Increases damage from 1750%Atk to 2600%Atk per hit based on level 5."
            }
          ]
        },
        {
          "skillName": "Abyss Dagger",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/abyss-chaser/rebalance_3.md",
          "section": "9.1",
          "notes": [
            "Increases skill cooldown from 0.3 seconds to 0.4 seconds based on level 5.",
            "Increases SP consumption from 64 to 76 based on level 5.",
            "Increases base damage from 2600%Atk to 4600%Atk based on level 5."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "0.3 seconds",
              "after": "0.4 seconds",
              "scope": "Lv 5",
              "source": "Increases skill cooldown from 0.3 seconds to 0.4 seconds based on level 5."
            },
            {
              "label": "SP Cost",
              "before": "64",
              "after": "76",
              "scope": "Lv 5",
              "source": "Increases SP consumption from 64 to 76 based on level 5."
            },
            {
              "label": "Damage",
              "before": "2600%Atk",
              "after": "4600%Atk",
              "scope": "Lv 5",
              "source": "Increases base damage from 2600%Atk to 4600%Atk based on level 5."
            }
          ]
        },
        {
          "skillName": "Abyss Dagger",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/abyss-chaser/rebalance_4.md",
          "section": "9.3",
          "notes": [
            "Increases base damage from 4600%Atk to 7350%Atk based on level 5."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "4600%Atk",
              "after": "7350%Atk",
              "scope": "Lv 5",
              "source": "Increases base damage from 4600%Atk to 7350%Atk based on level 5."
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
      "id": 6513,
      "imageFile": "6513.png",
      "name": "Chasing Break",
      "maxLevel": 5,
      "prerequisiteText": "Hit and Sliding 3",
      "group": "Active",
      "type": "Melee physical",
      "target": "Single target",
      "recoversAp": "2",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "",
      "description": "Chases and charges towards the target, deals melee physical damage to the target and surrounding enemies around the target for 5 hits.\nIf Chasing buff is active, the skill will deal more damage for 7 hits.\nDeals additional damage depends on user's base level and POW.",
      "levelDetails": [
        {
          "level": 1,
          "text": "2000% Atk / 2250% Atk (Chasing) per hit / area of effect: 5 x 5 cells."
        },
        {
          "level": 2,
          "text": "2450% Atk / 2750% Atk (Chasing) per hit / area of effect: 5 x 5 cells."
        },
        {
          "level": 3,
          "text": "2900% Atk / 3250% Atk (Chasing) per hit / area of effect: 5 x 5 cells."
        },
        {
          "level": 4,
          "text": "3350% Atk / 3750% Atk (Chasing) per hit / area of effect: 7 x 7 cells."
        },
        {
          "level": 5,
          "text": "3800% Atk / 4250% Atk (Chasing) per hit / area of effect: 7 x 7 cells."
        }
      ],
      "levelExtras": [],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/6513.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6513",
      "tree": {
        "idx": 9,
        "row": 1,
        "col": 2,
        "columns": 7,
        "requirements": [
          {
            "id": 6512,
            "level": 3,
            "name": "Hit and Sliding",
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
                  "area-of-effect": "5x5"
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
      "id": 5316,
      "imageFile": "5316.png",
      "name": "Chain Reaction Shot",
      "maxLevel": 5,
      "prerequisiteText": "Triangle Shot Lv. 5 and Dagger Bow Mastery Lv. 3",
      "group": "Active",
      "type": "Ranged Physical",
      "target": "1 Target",
      "recoversAp": "",
      "consumesAp": "",
      "ammunition": "7 Arrows",
      "irowikiUrl": "https://irowiki.org/wiki/Chain_Reaction_Shot",
      "description": "Bow-only skills.\nUsing 7 equipped arrows, inflict Long-ranged Physical damage on and around a target.\n(You must have at least 8 arrows to activate this skill.)\nDamaged targets deal additional Ranged Physical damage to targets within a 7x7 range around them.\nAdditional Damage increase based on the caster's base level and CON.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK 850%/2950%(2nd)/range: 5x5 cells"
        },
        {
          "level": 2,
          "text": "ATK 1700%/5300%(2nd)/range: 5x5 cells"
        },
        {
          "level": 3,
          "text": "ATK 2550%/7650%(2nd)/range: 7x7 cells"
        },
        {
          "level": 4,
          "text": "ATK 3400%/10000%(2nd)/range: 7x7 cells"
        },
        {
          "level": 5,
          "text": "ATK 4250%/12350%(2nd)/range: 9x9 cells"
        }
      ],
      "fixedCastTime": "1 second",
      "variableCastTime": "1 second",
      "castDelay": "0 seconds",
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
              "value": "45"
            },
            {
              "level": 3,
              "value": "55"
            },
            {
              "level": 4,
              "value": "65"
            },
            {
              "level": 5,
              "value": "75"
            }
          ]
        }
      ],
      "spCost": "30 + (Skill Level × 10)",
      "castRange": "9 cells",
      "areaOfEffect": "3 x 3 ~ 7 x 7",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5316.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5316",
      "tree": {
        "idx": 10,
        "row": 1,
        "col": 3,
        "columns": 7,
        "requirements": [
          {
            "id": 2288,
            "level": 5,
            "name": "Triangle Shot",
            "visible": false
          },
          {
            "id": 5311,
            "level": 3,
            "name": "Dagger Bow Mastery",
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
            "value": "0 seconds"
          },
          {
            "label": "Cooldown",
            "value": "1 second"
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
            "label": "Ammunition",
            "value": "7 Arrows"
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
                  "sp-cost": "35"
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
                  "area-of-effect": "7x7",
                  "sp-cost": "55"
                }
              },
              {
                "level": 4,
                "values": {
                  "area-of-effect": "7x7",
                  "sp-cost": "65"
                }
              },
              {
                "level": 5,
                "values": {
                  "area-of-effect": "9x9",
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
          "skillName": "Chain Reaction Shot",
          "versionId": "rebalance-1",
          "versionLabel": "Rebalance 1",
          "file": "rebalances/abyss-chaser/rebalance_1.md",
          "section": "6.8",
          "notes": [
            "Reduces fixed casting time from 1.5 seconds to 1 second based on level 5.",
            "Reduces cooldown from 3 seconds to 1.5 seconds based on level 5.",
            "Reduces delay after skill from 1 second to 0.5 seconds.",
            "Increases damage of the secondary attack from 4250%Atk to 4750%Atk based on level 5."
          ],
          "specRows": [
            {
              "label": "Fixed Casting Time",
              "before": "1.5 seconds",
              "after": "1 second",
              "scope": "Lv 5",
              "source": "Reduces fixed casting time from 1.5 seconds to 1 second based on level 5."
            },
            {
              "label": "Cooldown",
              "before": "3 seconds",
              "after": "1.5 seconds",
              "scope": "Lv 5",
              "source": "Reduces cooldown from 3 seconds to 1.5 seconds based on level 5."
            },
            {
              "label": "Cast Delay",
              "before": "1 second",
              "after": "0.5 seconds",
              "scope": "",
              "source": "Reduces delay after skill from 1 second to 0.5 seconds."
            },
            {
              "label": "Damage",
              "before": "4250%Atk (secondary attack)",
              "after": "4750%Atk (secondary attack)",
              "scope": "Lv 5",
              "source": "Increases damage of the secondary attack from 4250%Atk to 4750%Atk based on level 5."
            }
          ]
        },
        {
          "skillName": "Chain Reaction Shot",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/abyss-chaser/rebalance_2.md",
          "section": "6.5",
          "notes": [
            "Reduces cooldown from 1.5 seconds to 1 second.",
            "Removes 0.5 seconds delay after skill.",
            "Reduces SP consumption from 80 to 75 based on level 5.",
            "Increases area of effect of secondary damage from 3 x 3 cells to 7 x 7 cells.",
            "Increases area of effect of primary damage from 7 x 7 cells to 9 x 9 cells based on level 5.",
            "Increases damage from 3000%(primary)/4750%(secondary)Atk to 4250%(primary)/12350%(secondary)Atk based on level 5.",
            "Increases factor weight of CON in skill formula from 5 to 15."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "1.5 seconds",
              "after": "1 second",
              "scope": "",
              "source": "Reduces cooldown from 1.5 seconds to 1 second."
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
              "before": "80",
              "after": "75",
              "scope": "Lv 5",
              "source": "Reduces SP consumption from 80 to 75 based on level 5."
            },
            {
              "label": "Area of Effect",
              "before": "3 x 3 cells",
              "after": "7 x 7 cells",
              "scope": "",
              "source": "Increases area of effect of secondary damage from 3 x 3 cells to 7 x 7 cells."
            },
            {
              "label": "Area of Effect",
              "before": "7 x 7 cells",
              "after": "9 x 9 cells",
              "scope": "Lv 5",
              "source": "Increases area of effect of primary damage from 7 x 7 cells to 9 x 9 cells based on level 5."
            },
            {
              "label": "Damage",
              "before": "3000%(primary)/4750%(secondary)Atk",
              "after": "4250%(primary)/12350%(secondary)Atk",
              "scope": "Lv 5",
              "source": "Increases damage from 3000%(primary)/4750%(secondary)Atk to 4250%(primary)/12350%(secondary)Atk based on level 5."
            },
            {
              "label": "Factor Weight Of Con In Skill Formula",
              "before": "5",
              "after": "15",
              "scope": "",
              "source": "Increases factor weight of CON in skill formula from 5 to 15."
            }
          ]
        },
        {
          "skillName": "Chain Reaction Shot",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/abyss-chaser/rebalance_4.md",
          "section": "9.7",
          "notes": [
            "Increases base damage of secondary attack from 12350%Atk to 13550%Atk based on level 5."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "12350%Atk (secondary attack)",
              "after": "13550%Atk (secondary attack)",
              "scope": "Lv 5",
              "source": "Increases base damage of secondary attack from 12350%Atk to 13550%Atk based on level 5."
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
      "id": 6514,
      "imageFile": "6514.png",
      "name": "Chasing Shot",
      "maxLevel": 5,
      "prerequisiteText": "Hit and Sliding 3",
      "group": "Active",
      "type": "Ranged Physical",
      "target": "Single target",
      "recoversAp": "2",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "",
      "description": "Bow exclusive skill.\nChases and charges towards the target, deals long ranged physical damage to the target and surrounding enemies around the target for 2 hits.\nIf Chasing buff is active, the skill will deal more damage for 3 hits.\nDeals additional damage depends on user's base level and CON, as a chance to trigger critical, critical chance is the half user's Cri.\nThe effectiveness of critical modifier is applied by half.",
      "levelDetails": [
        {
          "level": 1,
          "text": "2200% Atk / 2450% Atk (Chasing) per hit / area of effect: 5 x 5 cells."
        },
        {
          "level": 2,
          "text": "2900% Atk / 3150% Atk (Chasing) per hit / area of effect: 5 x 5 cells."
        },
        {
          "level": 3,
          "text": "3600% Atk / 3850% Atk (Chasing) per hit / area of effect: 5 x 5 cells."
        },
        {
          "level": 4,
          "text": "4300% Atk / 4550% Atk (Chasing) per hit / area of effect: 7 x 7 cells."
        },
        {
          "level": 5,
          "text": "5000% Atk / 5250% Atk (Chasing) per hit / area of effect: 7 x 7 cells."
        }
      ],
      "fixedCastTime": "1 second",
      "variableCastTime": "1 second",
      "castDelay": "0.5 seconds",
      "cooldown": "0.75 seconds",
      "levelExtras": [],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/6514.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6514",
      "tree": {
        "idx": 11,
        "row": 1,
        "col": 4,
        "columns": 7,
        "requirements": [
          {
            "id": 6512,
            "level": 3,
            "name": "Hit and Sliding",
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
            "value": "0.5 seconds"
          },
          {
            "label": "Cooldown",
            "value": "0.75 seconds"
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
                  "area-of-effect": "5x5"
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
      "id": 5317,
      "imageFile": "5317.png",
      "name": "From the Abyss",
      "maxLevel": 5,
      "prerequisiteText": "Magic Sword Mastery Lv. 3",
      "group": "Active",
      "type": "Buff",
      "target": "Self",
      "recoversAp": "4/8/12/16/20",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/From_the_Abyss",
      "description": "During the skill duration, you gain control of a sphere containing the power of Abyss.\nThis skill instantly creates 5 Abyss Orbs,\nNormal Physical attacks create a chance of consuming 1 Abyss Orb and inflicting 2 hits of Neutral Magic damage on a target and others in 9x9 cells.\nAbyss Orbs are regenerated at regular intervals.\nAdditional damage increase based on the caster's Base Level and SPL.",
      "levelDetails": [
        {
          "level": 1,
          "text": "MATK 600%/Effect Duration: 30 seconds/new Abyss Orb per 3.0 seconds"
        },
        {
          "level": 2,
          "text": "MATK 1100%/Effect Duration: 60 seconds/new Abyss Orb per 2.5 seconds"
        },
        {
          "level": 3,
          "text": "MATK 1600%/Effect Duration: 90 seconds/new Abyss Orb per 2.0 seconds"
        },
        {
          "level": 4,
          "text": "MATK 2100%/Effect Duration: 120 seconds/new Abyss Orb per 1.5 seconds"
        },
        {
          "level": 5,
          "text": "MATK 2600%/Effect Duration: 150 seconds/new Abyss Orb per 1.0 seconds"
        }
      ],
      "fixedCastTime": "0 seconds",
      "variableCastTime": "0 seconds",
      "castDelay": "0 seconds",
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
        }
      ],
      "spCost": "30 + (Skill Level × 10)",
      "areaOfEffect": "9 x 9",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5317.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5317",
      "tree": {
        "idx": 12,
        "row": 1,
        "col": 5,
        "columns": 7,
        "requirements": [
          {
            "id": 5312,
            "level": 3,
            "name": "Magic Sword Mastery",
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
            "value": "0 seconds"
          },
          {
            "label": "Cooldown",
            "value": "30 seconds"
          },
          {
            "label": "Target",
            "value": "Self"
          },
          {
            "label": "Area of Effect",
            "value": "9 x 9"
          },
          {
            "label": "Duration",
            "value": "Lv 1: 30 seconds / Lv 2: 60 seconds / Lv 3: 90 seconds / Lv 4: 120 seconds / Lv 5: 150 seconds"
          },
          {
            "label": "AP Generated",
            "value": "4/8/12/16/20"
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
                  "sp-cost": "50"
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
                  "sp-cost": "70"
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
      "balanceNotes": [
        {
          "skillName": "From the Abyss",
          "versionId": "rebalance-1",
          "versionLabel": "Rebalance 1",
          "file": "rebalances/abyss-chaser/rebalance_1.md",
          "section": "6.6",
          "notes": [
            "Reduces sphere creation interval from 2 seconds to 1 second based on level 5.",
            "Recovers 20 AP based on level 5.",
            "Increases trigger chance from 10% to 15%.",
            "Increases area of effect from 7x7 cells to 9x9 cells."
          ],
          "specRows": [
            {
              "label": "Sphere Creation Interval",
              "before": "2 seconds",
              "after": "1 second",
              "scope": "Lv 5",
              "source": "Reduces sphere creation interval from 2 seconds to 1 second based on level 5."
            },
            {
              "label": "Trigger Chance",
              "before": "10%",
              "after": "15%",
              "scope": "",
              "source": "Increases trigger chance from 10% to 15%."
            },
            {
              "label": "Area of Effect",
              "before": "7 x 7 cells",
              "after": "9 x 9 cells",
              "scope": "",
              "source": "Increases area of effect from 7x7 cells to 9x9 cells."
            }
          ]
        },
        {
          "skillName": "From the Abyss",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/abyss-chaser/rebalance_2.md",
          "section": "6.3",
          "notes": [
            "Increases number of hit from 1 hit to 2 hits.",
            "Increases damage from 500%Matk to 2600%Matk per hit based on level 5."
          ],
          "specRows": [
            {
              "label": "Number Of Hit",
              "before": "1 hit",
              "after": "2 hits",
              "scope": "",
              "source": "Increases number of hit from 1 hit to 2 hits."
            },
            {
              "label": "Damage",
              "before": "500%Matk",
              "after": "2600%Matk per hit",
              "scope": "Lv 5",
              "source": "Increases damage from 500%Matk to 2600%Matk per hit based on level 5."
            }
          ]
        },
        {
          "skillName": "From the Abyss",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/abyss-chaser/rebalance_4.md",
          "section": "9.5",
          "notes": [
            "Reduces skill cooldown from 60 seconds to 30 seconds.",
            "Increases number of hit from 2 hits to 5 hits.",
            "Increases base damage from 2600%Matk to 3400%Matk based on level 5.",
            "No longer be removed by Dispell or Clearance.",
            "Increases the trigger chance of abyss sphere from 15% to 25% based on level 5."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "60 seconds",
              "after": "30 seconds",
              "scope": "",
              "source": "Reduces skill cooldown from 60 seconds to 30 seconds."
            },
            {
              "label": "Number Of Hit",
              "before": "2 hits",
              "after": "5 hits",
              "scope": "",
              "source": "Increases number of hit from 2 hits to 5 hits."
            },
            {
              "label": "Damage",
              "before": "2600%Matk",
              "after": "3400%Matk",
              "scope": "Lv 5",
              "source": "Increases base damage from 2600%Matk to 3400%Matk based on level 5."
            },
            {
              "label": "The Trigger Chance Of Abyss Sphere",
              "before": "15%",
              "after": "25%",
              "scope": "Lv 5",
              "source": "Increases the trigger chance of abyss sphere from 15% to 25% based on level 5."
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
      "id": 5313,
      "imageFile": "5313.png",
      "name": "Divest Shadow",
      "maxLevel": 5,
      "prerequisiteText": "Divest Accessory Lv. 1 and Dagger Bow Mastery Lv. 7",
      "group": "Active",
      "type": "Debuff",
      "target": "1 Target",
      "recoversAp": "2",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Divest_Shadow",
      "description": "Remove all Shadow equipment from the target and prevent reequipping for a while.\nIn the case of monsters, this skill decreases their Physical and Magical Resistances.",
      "levelDetails": [],
      "fixedCastTime": "1 second",
      "variableCastTime": "1 second",
      "castDelay": "1 second",
      "cooldown": "2 seconds",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "29"
            },
            {
              "level": 2,
              "value": "33"
            },
            {
              "level": 3,
              "value": "37"
            },
            {
              "level": 4,
              "value": "41"
            },
            {
              "level": 5,
              "value": "45"
            }
          ]
        }
      ],
      "spCost": "25 + (Skill Level × 4)",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5313.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5313",
      "tree": {
        "idx": 14,
        "row": 2,
        "col": 0,
        "columns": 7,
        "requirements": [
          {
            "id": 2298,
            "level": 1,
            "name": "Divest Accessory",
            "visible": false
          },
          {
            "id": 5311,
            "level": 7,
            "name": "Dagger Bow Mastery",
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
            "value": "25 + (Skill Level × 4)"
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
            "value": "2 seconds"
          },
          {
            "label": "Target",
            "value": "1 Target"
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
                "id": "sp-cost",
                "label": "SP Cost"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "sp-cost": "29"
                }
              },
              {
                "level": 2,
                "values": {
                  "sp-cost": "33"
                }
              },
              {
                "level": 3,
                "values": {
                  "sp-cost": "37"
                }
              },
              {
                "level": 4,
                "values": {
                  "sp-cost": "41"
                }
              },
              {
                "level": 5,
                "values": {
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
      "id": 5315,
      "imageFile": "5315.png",
      "name": "Misfortune Rush",
      "maxLevel": 5,
      "prerequisiteText": "Abyss Dagger Lv. 3 and Dagger Bow Mastery Lv. 4",
      "group": "Active",
      "type": "Melee Physical",
      "target": "1 Target",
      "recoversAp": "",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Misfortune_Rush",
      "description": "Instantly move to the target, inflicting Melee Physical damage with a chance of Misfortune.\nThis skill additionally increases damage, depending on your Base Level and POW.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK 400% / Misfortune Chance : 40%"
        },
        {
          "level": 2,
          "text": "ATK 700% / Misfortune Chance : 50%"
        },
        {
          "level": 3,
          "text": "ATK 1000% / Misfortune Chance : 60%"
        },
        {
          "level": 4,
          "text": "ATK 1300% / Misfortune Chance : 70%"
        },
        {
          "level": 5,
          "text": "ATK 1600% / Misfortune Chance : 80%"
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
      "cooldown": "0.25 * (6 - Skill Level) seconds",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5315.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5315",
      "tree": {
        "idx": 15,
        "row": 2,
        "col": 1,
        "columns": 7,
        "requirements": [
          {
            "id": 5311,
            "level": 4,
            "name": "Dagger Bow Mastery",
            "visible": true
          },
          {
            "id": 5314,
            "level": 3,
            "name": "Abyss Dagger",
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
            "value": "0.25 * (6 - Skill Level) seconds"
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
        "status": "not-used",
        "entries": [],
        "selectedEntry": null
      }
    },
    {
      "id": 5320,
      "imageFile": "5320.png",
      "name": "Deft Stab",
      "maxLevel": 10,
      "prerequisiteText": "Abyss Dagger 3, Dagger & Bow Mastery 5",
      "group": "Active",
      "type": "Melee Physical",
      "target": "Single Target",
      "recoversAp": "3",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Deft_Stab",
      "description": "Quickly attacks the target and deals melee physical damage to the target and surrounding enemies around the target for 5 hits.\nDamage is additionally increased depending on the user's base level and POW.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK Per Hit 600%/Area of Effect: 5x5 Cells"
        },
        {
          "level": 2,
          "text": "ATK Per Hit 950%/Area of Effect: 5x5 Cells"
        },
        {
          "level": 3,
          "text": "ATK Per Hit 1300%/Area of Effect: 5x5 Cells"
        },
        {
          "level": 4,
          "text": "ATK Per Hit 1650%/Area of Effect: 5x5 Cells"
        },
        {
          "level": 5,
          "text": "ATK Per Hit 2000%/Area of Effect: 5x5 Cells"
        },
        {
          "level": 6,
          "text": "ATK Per Hit 2350%/Area of Effect: 7x7 Cells"
        },
        {
          "level": 7,
          "text": "ATK Per Hit 2700%/Area of Effect: 7x7 Cells"
        },
        {
          "level": 8,
          "text": "ATK Per Hit 3050%/Area of Effect: 7x7 Cells"
        },
        {
          "level": 9,
          "text": "ATK Per Hit 3400%/Area of Effect: 7x7 Cells"
        },
        {
          "level": 10,
          "text": "ATK Per Hit 3750%/Area of Effect: 7x7 Cells"
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
      "spCost": "35 + (Skill Level x 5)",
      "areaOfEffect": "3 x 3 ~ 5 x 5",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5320.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5320",
      "tree": {
        "idx": 16,
        "row": 2,
        "col": 2,
        "columns": 7,
        "requirements": [
          {
            "id": 5311,
            "level": 5,
            "name": "Dagger Bow Mastery",
            "visible": true
          },
          {
            "id": 5314,
            "level": 3,
            "name": "Abyss Dagger",
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
            "value": "35 + (Skill Level x 5)"
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
                "id": "area-of-effect",
                "label": "Area of Effect"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "area-of-effect": "5x5",
                  "sp-cost": "45"
                }
              },
              {
                "level": 2,
                "values": {
                  "area-of-effect": "5x5",
                  "sp-cost": "48"
                }
              },
              {
                "level": 3,
                "values": {
                  "area-of-effect": "5x5",
                  "sp-cost": "51"
                }
              },
              {
                "level": 4,
                "values": {
                  "area-of-effect": "5x5",
                  "sp-cost": "54"
                }
              },
              {
                "level": 5,
                "values": {
                  "area-of-effect": "5x5",
                  "sp-cost": "57"
                }
              },
              {
                "level": 6,
                "values": {
                  "area-of-effect": "7x7",
                  "sp-cost": "60"
                }
              },
              {
                "level": 7,
                "values": {
                  "area-of-effect": "7x7",
                  "sp-cost": "63"
                }
              },
              {
                "level": 8,
                "values": {
                  "area-of-effect": "7x7",
                  "sp-cost": "66"
                }
              },
              {
                "level": 9,
                "values": {
                  "area-of-effect": "7x7",
                  "sp-cost": "69"
                }
              },
              {
                "level": 10,
                "values": {
                  "area-of-effect": "7x7",
                  "sp-cost": "72"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "balanceNotes": [
        {
          "skillName": "Deft Stab",
          "versionId": "rebalance-1",
          "versionLabel": "Rebalance 1",
          "file": "rebalances/abyss-chaser/rebalance_1.md",
          "section": "6.1",
          "notes": [
            "Reduces cooldown from 2 seconds to 0.3 seconds based on level 10."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "2 seconds",
              "after": "0.3 seconds",
              "scope": "Lv 10",
              "source": "Reduces cooldown from 2 seconds to 0.3 seconds based on level 10."
            }
          ]
        },
        {
          "skillName": "Deft Stab",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/abyss-chaser/rebalance_2.md",
          "section": "6.2",
          "notes": [
            "Increases SP consumption from 55 to 62 based on level 10.",
            "Increases AP recovery rate from 2 to 3.",
            "Increases damage from 3600%Atk to 5850%Atk based on level 10.",
            "Increases area of effect from 5 x 5 cells to 7 x 7 cells based on level 10."
          ],
          "specRows": [
            {
              "label": "SP Cost",
              "before": "55",
              "after": "62",
              "scope": "Lv 10",
              "source": "Increases SP consumption from 55 to 62 based on level 10."
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
              "before": "3600%Atk",
              "after": "5850%Atk",
              "scope": "Lv 10",
              "source": "Increases damage from 3600%Atk to 5850%Atk based on level 10."
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
          "skillName": "Deft Stab",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/abyss-chaser/rebalance_3.md",
          "section": "9.2",
          "notes": [
            "Removes a chance to trigger the skill one more time.",
            "Increases SP consumption from 62 to 72 based on level 10.",
            "Increases skill cooldown from 0.3 seconds to 0.7 seconds.",
            "Reduces base damage from 5850%Atk to 3750%Atk based on level 10.",
            "Changes damage logic from 5 split hits to 5 cumulative hits."
          ],
          "specRows": [
            {
              "label": "A Chance To Trigger The Skill One More Time",
              "before": "a chance to trigger the skill one more time",
              "after": "Removed",
              "scope": "",
              "source": "Removes a chance to trigger the skill one more time."
            },
            {
              "label": "SP Cost",
              "before": "62",
              "after": "72",
              "scope": "Lv 10",
              "source": "Increases SP consumption from 62 to 72 based on level 10."
            },
            {
              "label": "Cooldown",
              "before": "0.3 seconds",
              "after": "0.7 seconds",
              "scope": "",
              "source": "Increases skill cooldown from 0.3 seconds to 0.7 seconds."
            },
            {
              "label": "Damage",
              "before": "5850%Atk/5 split hits (logic)",
              "after": "3750%Atk/5 cumulative hits (logic)",
              "scope": "Lv 10",
              "source": "Reduces base damage from 5850%Atk to 3750%Atk based on level 10. / Changes damage logic from 5 split hits to 5 cumulative hits."
            }
          ]
        },
        {
          "skillName": "Deft Stab",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/abyss-chaser/rebalance_4.md",
          "section": "9.4",
          "notes": [
            "Increases base damage from 3750%Atk to 6200%Atk based on level 10.",
            "Increases factor weight of POW in skill formula from 5 to 7."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "3750%Atk",
              "after": "6200%Atk",
              "scope": "Lv 10",
              "source": "Increases base damage from 3750%Atk to 6200%Atk based on level 10."
            },
            {
              "label": "Factor Weight Of Pow In Skill Formula",
              "before": "5",
              "after": "7",
              "scope": "",
              "source": "Increases factor weight of POW in skill formula from 5 to 7."
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
      "id": 5322,
      "imageFile": "5322.png",
      "name": "Frenzy Shot",
      "maxLevel": 10,
      "prerequisiteText": "Chain Reaction Shot 3, Dagger & Bow Mastery 5",
      "group": "Active",
      "type": "Ranged Physical",
      "target": "Single Target",
      "recoversAp": "1",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Frenzy_Shot",
      "description": "Bow only skill.\nDeals 2 hits of long ranged physical damage to the target, has a chance to deal damage for 3 hits.\nDeals additional damage depends on user's base level and CON.\nConsumes 3 equipped arrows.\nHas a chance to trigger critical, critical chance is the user's Cri,\nIn the case of critical damage, half of the total critical damage increase options are applied.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK Per Hit 750%/ chance to deal damage for 3 hits: 5%"
        },
        {
          "level": 2,
          "text": "ATK Per Hit 1350%/ chance to deal damage for 3 hits: 10%"
        },
        {
          "level": 3,
          "text": "ATK Per Hit 1950%/ chance to deal damage for 3 hits: 15%"
        },
        {
          "level": 4,
          "text": "ATK Per Hit 2550%/ chance to deal damage for 3 hits: 20%"
        },
        {
          "level": 5,
          "text": "ATK Per Hit 3150%/ chance to deal damage for 3 hits: 25%"
        },
        {
          "level": 6,
          "text": "ATK Per Hit 3750%/ chance to deal damage for 3 hits: 30%"
        },
        {
          "level": 7,
          "text": "ATK Per Hit 4350%/ chance to deal damage for 3 hits: 35%"
        },
        {
          "level": 8,
          "text": "ATK Per Hit 4950%/ chance to deal damage for 3 hits: 40%"
        },
        {
          "level": 9,
          "text": "ATK Per Hit 5550%/ chance to deal damage for 3 hits: 45%"
        },
        {
          "level": 10,
          "text": "ATK Per Hit 6150%/ chance to deal damage for 3 hits: 50%"
        }
      ],
      "fixedCastTime": "0 seconds",
      "variableCastTime": "0 seconds",
      "castDelay": "0.5 seconds",
      "cooldown": "0.35 seconds",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "47"
            },
            {
              "level": 2,
              "value": "49"
            },
            {
              "level": 3,
              "value": "51"
            },
            {
              "level": 4,
              "value": "53"
            },
            {
              "level": 5,
              "value": "55"
            },
            {
              "level": 6,
              "value": "57"
            },
            {
              "level": 7,
              "value": "59"
            },
            {
              "level": 8,
              "value": "61"
            },
            {
              "level": 9,
              "value": "63"
            },
            {
              "level": 10,
              "value": "65"
            }
          ]
        }
      ],
      "spCost": "25 + (Skill Level × 10)",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5322.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5322",
      "tree": {
        "idx": 17,
        "row": 2,
        "col": 3,
        "columns": 7,
        "requirements": [
          {
            "id": 5311,
            "level": 5,
            "name": "Dagger Bow Mastery",
            "visible": true
          },
          {
            "id": 5316,
            "level": 3,
            "name": "Chain Reaction Shot",
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
            "value": "25 + (Skill Level × 10)"
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
            "value": "0.35 seconds"
          },
          {
            "label": "Target",
            "value": "Single Target"
          },
          {
            "label": "AP Generated",
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
                  "sp-cost": "47"
                }
              },
              {
                "level": 2,
                "values": {
                  "sp-cost": "49"
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
                  "sp-cost": "53"
                }
              },
              {
                "level": 5,
                "values": {
                  "sp-cost": "55"
                }
              },
              {
                "level": 6,
                "values": {
                  "sp-cost": "57"
                }
              },
              {
                "level": 7,
                "values": {
                  "sp-cost": "59"
                }
              },
              {
                "level": 8,
                "values": {
                  "sp-cost": "61"
                }
              },
              {
                "level": 9,
                "values": {
                  "sp-cost": "63"
                }
              },
              {
                "level": 10,
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
          "skillName": "Frenzy Shot",
          "versionId": "rebalance-1",
          "versionLabel": "Rebalance 1",
          "file": "rebalances/abyss-chaser/rebalance_1.md",
          "section": "6.9",
          "notes": [
            "Reduces cooldown from 2 seconds to 0.2 seconds based on level 10.",
            "Increases SP consumption from 85 to 125 based on level 10.",
            "Reduces AP recovery rate from 2 to 1.",
            "Reduces arrow consumption from 10 to 3.",
            "Reworks skill by replacing the chance to trigger the skill one more time with the 50% chance to deal 3 times damage based on level 10.",
            "Increases critical chance from the half of the user's cri to the user's cri. (By the way, the skill description mentiones that the skill already applied critical chance by the user's cri. I'm not sure what it means)."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "2 seconds",
              "after": "0.2 seconds",
              "scope": "Lv 10",
              "source": "Reduces cooldown from 2 seconds to 0.2 seconds based on level 10."
            },
            {
              "label": "SP Cost",
              "before": "85",
              "after": "125",
              "scope": "Lv 10",
              "source": "Increases SP consumption from 85 to 125 based on level 10."
            },
            {
              "label": "AP Generated",
              "before": "2",
              "after": "1",
              "scope": "",
              "source": "Reduces AP recovery rate from 2 to 1."
            },
            {
              "label": "Arrow Consumption",
              "before": "10",
              "after": "3",
              "scope": "",
              "source": "Reduces arrow consumption from 10 to 3."
            },
            {
              "label": "Critical Chance",
              "before": "the half of the user's cri",
              "after": "the user's cri. (By the way, the skill description mentiones that the skill already applied critical chance by the user's cri. I'm not sure what it means)",
              "scope": "",
              "source": "Increases critical chance from the half of the user's cri to the user's cri. (By the way, the skill description mentiones that the skill already applied critical chance by the user's cri. I'm not sure what it means)."
            }
          ]
        },
        {
          "skillName": "Frenzy Shot",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/abyss-chaser/rebalance_2.md",
          "section": "6.6",
          "notes": [
            "Reduces SP consumption from 125 to 55 based on level 10.",
            "Increases damage from 3500%Atk to 4000%Atk per hit based on level 10."
          ],
          "specRows": [
            {
              "label": "SP Cost",
              "before": "125",
              "after": "55",
              "scope": "Lv 10",
              "source": "Reduces SP consumption from 125 to 55 based on level 10."
            },
            {
              "label": "Damage",
              "before": "3500%Atk",
              "after": "4000%Atk per hit",
              "scope": "Lv 10",
              "source": "Increases damage from 3500%Atk to 4000%Atk per hit based on level 10."
            }
          ]
        },
        {
          "skillName": "Frenzy Shot",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/abyss-chaser/rebalance_3.md",
          "section": "9.3",
          "notes": [
            "Increases skill cooldown from 0.2 seconds to 0.35 seconds.",
            "Increases SP consumption from 55 to 65 based on level 10.",
            "Increases number of hit from 1 hit to 2 hits.",
            "Increases base damage from 4000%Atk to 6150%Atk based on level 10.",
            "Increases factor weight of CON in skill formula from 5 to 15."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "0.2 seconds",
              "after": "0.35 seconds",
              "scope": "",
              "source": "Increases skill cooldown from 0.2 seconds to 0.35 seconds."
            },
            {
              "label": "SP Cost",
              "before": "55",
              "after": "65",
              "scope": "Lv 10",
              "source": "Increases SP consumption from 55 to 65 based on level 10."
            },
            {
              "label": "Number Of Hit",
              "before": "1 hit",
              "after": "2 hits",
              "scope": "",
              "source": "Increases number of hit from 1 hit to 2 hits."
            },
            {
              "label": "Damage",
              "before": "4000%Atk",
              "after": "6150%Atk",
              "scope": "Lv 10",
              "source": "Increases base damage from 4000%Atk to 6150%Atk based on level 10."
            },
            {
              "label": "Factor Weight Of Con In Skill Formula",
              "before": "5",
              "after": "15",
              "scope": "",
              "source": "Increases factor weight of CON in skill formula from 5 to 15."
            }
          ]
        },
        {
          "skillName": "Frenzy Shot",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/abyss-chaser/rebalance_4.md",
          "section": "9.8",
          "notes": [
            "Increases AP recovery rate from 1 to 3.",
            "Increases base damage from 6150%Atk to 8250%Atk per hit based on level 10."
          ],
          "specRows": [
            {
              "label": "AP Generated",
              "before": "1",
              "after": "3",
              "scope": "",
              "source": "Increases AP recovery rate from 1 to 3."
            },
            {
              "label": "Damage",
              "before": "6150%Atk",
              "after": "8250%Atk per hit",
              "scope": "Lv 10",
              "source": "Increases base damage from 6150%Atk to 8250%Atk per hit based on level 10."
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
      "id": 5321,
      "imageFile": "5321.png",
      "name": "Abyss Square",
      "maxLevel": 5,
      "prerequisiteText": "From the Abyss Lv. 1 and Magic Sword Mastery Lv. 5",
      "group": "Active",
      "type": "Magical",
      "target": "1 Ground cell",
      "recoversAp": "5",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Abyss_Square",
      "description": "Awaken the Abyss and inflict Neutral Magic damage every 0.3 seconds for 3 seconds within 7x7 cells.\nIf the caster is in range of skill, each attack hits twice.\nAdditional Damage increase based on the caster's Base Level and SPL.\nIf you are under the effect of From the Abyss, creates a chance of auto-casting Abyss Square with Normal Physical attacks.\nIf triggered this way, deal damage based on current skill level, but AP will not be recovered.",
      "levelDetails": [
        {
          "level": 1,
          "text": "MATK 570 +(Magic Sword Mastery Lv x20)%"
        },
        {
          "level": 2,
          "text": "MATK 1140 +(Magic Sword Mastery Lv x40)%"
        },
        {
          "level": 3,
          "text": "MATK 1710 +(Magic Sword Mastery Lv x60)%"
        },
        {
          "level": 4,
          "text": "MATK 2280 +(Magic Sword Mastery Lv x80)%"
        },
        {
          "level": 5,
          "text": "MATK 2850 +(Magic Sword Mastery Lv x100)%"
        }
      ],
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "5 seconds",
      "castDelay": "0.5 seconds",
      "cooldown": "3 seconds",
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
              "value": "75"
            },
            {
              "level": 3,
              "value": "85"
            },
            {
              "level": 4,
              "value": "95"
            },
            {
              "level": 5,
              "value": "105"
            }
          ]
        }
      ],
      "spCost": "55 + (Skill Level × 10)",
      "castRange": "Magic",
      "areaOfEffect": "7 x 7",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5321.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5321",
      "tree": {
        "idx": 19,
        "row": 2,
        "col": 5,
        "columns": 7,
        "requirements": [
          {
            "id": 5312,
            "level": 5,
            "name": "Magic Sword Mastery",
            "visible": true
          },
          {
            "id": 5317,
            "level": 1,
            "name": "From the Abyss",
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
            "value": "55 + (Skill Level × 10)"
          },
          {
            "label": "Fixed Cast Time",
            "value": "1.5 seconds"
          },
          {
            "label": "Variable Cast Time",
            "value": "5 seconds"
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
            "value": "Magic"
          },
          {
            "label": "Target",
            "value": "1 Ground cell"
          },
          {
            "label": "Area of Effect",
            "value": "7 x 7"
          },
          {
            "label": "AP Generated",
            "value": "5"
          },
          {
            "label": "Pulse",
            "value": "0.3 seconds"
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
                  "sp-cost": "75"
                }
              },
              {
                "level": 3,
                "values": {
                  "sp-cost": "85"
                }
              },
              {
                "level": 4,
                "values": {
                  "sp-cost": "95"
                }
              },
              {
                "level": 5,
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
          "skillName": "Abyss Square",
          "versionId": "rebalance-1",
          "versionLabel": "Rebalance 1",
          "file": "rebalances/abyss-chaser/rebalance_1.md",
          "section": "6.7",
          "notes": [
            "Improves damage interval from every 0.7 seconds for 4 seconds to every 0.3 seconds for 3 seconds.",
            "Reduces cooldown from 4 seconds to 3 seconds based on level 5.",
            "Reduces delay after skill from 1 second to 0.5 seconds based on level 5.",
            "Increases damage from 700%Matk to 2000%Matk (includes Magic Sword Mastery level 10 bonus) based on level 5."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "4 seconds",
              "after": "3 seconds",
              "scope": "Lv 5",
              "source": "Reduces cooldown from 4 seconds to 3 seconds based on level 5."
            },
            {
              "label": "Cast Delay",
              "before": "1 second",
              "after": "0.5 seconds",
              "scope": "Lv 5",
              "source": "Reduces delay after skill from 1 second to 0.5 seconds based on level 5."
            },
            {
              "label": "Damage",
              "before": "700%Matk",
              "after": "2000%Matk (includes Magic Sword Mastery level 10 bonus)",
              "scope": "Lv 5",
              "source": "Increases damage from 700%Matk to 2000%Matk (includes Magic Sword Mastery level 10 bonus) based on level 5."
            }
          ]
        },
        {
          "skillName": "Abyss Square",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/abyss-chaser/rebalance_2.md",
          "section": "6.4",
          "notes": [
            "Increases AP recovery rate from 4 to 5.",
            "Increases damage from 2000%Matk to 3850%Matk per hit based on level 5 (Magic Sword Mastery level 10)."
          ],
          "specRows": [
            {
              "label": "AP Generated",
              "before": "4",
              "after": "5",
              "scope": "",
              "source": "Increases AP recovery rate from 4 to 5."
            },
            {
              "label": "Damage",
              "before": "2000%Matk",
              "after": "3850%Matk per hit",
              "scope": "Lv 5 (Magic Sword Mastery level 10)",
              "source": "Increases damage from 2000%Matk to 3850%Matk per hit based on level 5 (Magic Sword Mastery level 10)."
            }
          ]
        },
        {
          "skillName": "Abyss Square",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/abyss-chaser/rebalance_4.md",
          "section": "9.6",
          "notes": [
            "Increases base damage from 2850+(Magic Sword Mastery skill level x 100)%Matk to 3750+(Magic Sword Mastery skill level x 200)Matk based on level 5."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "2850+(Magic Sword Mastery skill level x 100)%Matk",
              "after": "3750+(Magic Sword Mastery skill level x 200)Matk",
              "scope": "Lv 5",
              "source": "Increases base damage from 2850+(Magic Sword Mastery skill level x 100)%Matk to 3750+(Magic Sword Mastery skill level x 200)Matk based on level 5."
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
      "id": 6515,
      "imageFile": "6515.png",
      "name": "Abyss Flame",
      "maxLevel": 5,
      "prerequisiteText": "Magic Sword Mastery level 5, From the Abyss level 3",
      "group": "Active",
      "type": "Magic",
      "target": "Single target",
      "recoversAp": "2",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "",
      "description": "Creates flames centered on the target, inflicts fire property magical damage to the target and surrounding enemies around the target for 5 hits.\nAt the same time, emits abyss flames centered on the user, inflicts fire property magical damage to surrounding enemies around the user for 3 hits.\nDeals additional damage depends on level of Magic Sword Mastery user learned, user's base level and SPL.",
      "levelDetails": [
        {
          "level": 1,
          "text": "(500 + (Magic Sword Mastery level x 15))% Matk per hit (around the target) / (820 + (Magic Sword Mastery level x 30))% Matk per hit (around the user) / area of effect: 5 x 5 cells."
        },
        {
          "level": 2,
          "text": "(1000 + (Magic Sword Mastery level x 30))% Matk per hit (around the target) / (1640 + (Magic Sword Mastery level x 60))% Matk per hit (around the user) / area of effect: 5 x 5 cells."
        },
        {
          "level": 3,
          "text": "(1500 + (Magic Sword Mastery level x 45))% Matk per hit (around the target) / (2460 + (Magic Sword Mastery level x 90))% Matk per hit (around the user) / area of effect: 5 x 5 cells."
        },
        {
          "level": 4,
          "text": "(2000 + (Magic Sword Mastery level x 60))% Matk per hit (around the target) / (3280 + (Magic Sword Mastery level x 120))% Matk per hit (around the user) / area of effect: 7 x 7 cells."
        },
        {
          "level": 5,
          "text": "(2500 + (Magic Sword Mastery level x 75))% Matk per hit (around the target) / (4100 + (Magic Sword Mastery level x 150))% Matk per hit (around the user) / area of effect: 7 x 7 cells."
        }
      ],
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "3 seconds",
      "castDelay": "1 second",
      "cooldown": "0.7 seconds",
      "levelExtras": [],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/6515.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6515",
      "tree": {
        "idx": 20,
        "row": 2,
        "col": 6,
        "columns": 7,
        "requirements": [
          {
            "id": 5312,
            "level": 5,
            "name": "Magic Sword Mastery",
            "visible": true
          },
          {
            "id": 5317,
            "level": 3,
            "name": "From the Abyss",
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
            "value": "3 seconds"
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
            "label": "Property",
            "value": "fire property magical damage"
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
                  "area-of-effect": "5x5"
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
                  "area-of-effect": "7x7"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "balanceNotes": [
        {
          "skillName": "Abyss Flame",
          "versionId": "rebalance-5",
          "versionLabel": "Rebalance 5",
          "file": "rebalances/abyss-chaser/added_skills.md",
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
      "id": 5318,
      "imageFile": "5318.png",
      "name": "Abyss Slayer",
      "maxLevel": 10,
      "prerequisiteText": "Abyss Dagger Lv. 5 and Deft Stab Lv. 5",
      "group": "Active (AP)",
      "type": "Buff",
      "target": "Self",
      "recoversAp": "",
      "consumesAp": "150",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Abyss_Slayer",
      "description": "Accept the power of the Abyss into your body for 300 seconds.\nDuring this effect, significantly improve your combat abilities.",
      "levelDetails": [
        {
          "level": 1,
          "text": "+ P.ATK/S.MAKT + 12/HIT + 120"
        },
        {
          "level": 2,
          "text": "+ P.ATK/S.MATK + 14/HIT + 140"
        },
        {
          "level": 3,
          "text": "+ P.ATK/S.MATK + 16/HIT + 160"
        },
        {
          "level": 4,
          "text": "+ P.ATK/S.MATK + 18/HIT + 180"
        },
        {
          "level": 5,
          "text": "+ P.ATK/S.MATK + 20/HIT + 200"
        },
        {
          "level": 6,
          "text": "+ P.ATK/S.MATK + 22/HIT + 220"
        },
        {
          "level": 7,
          "text": "+ P.ATK/S.MATK + 24/HIT + 240"
        },
        {
          "level": 8,
          "text": "+ P.ATK/S.MATK + 26/HIT + 260"
        },
        {
          "level": 9,
          "text": "+ P.ATK/S.MATK + 28/HIT + 280"
        },
        {
          "level": 10,
          "text": "+ P.ATK/S.MATK + 30/HIT + 300"
        }
      ],
      "fixedCastTime": "1 second",
      "variableCastTime": "0 seconds",
      "castDelay": "1 second",
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
      "spCost": "100",
      "duration": "300 seconds",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5318.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5318",
      "tree": {
        "idx": 23,
        "row": 3,
        "col": 2,
        "columns": 7,
        "requirements": [
          {
            "id": 5314,
            "level": 5,
            "name": "Abyss Dagger",
            "visible": true
          },
          {
            "id": 5320,
            "level": 5,
            "name": "Deft Stab",
            "visible": true
          }
        ]
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Active (AP) Skill"
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
            "value": "60 seconds"
          },
          {
            "label": "Target",
            "value": "Self"
          },
          {
            "label": "Duration",
            "value": "300 seconds"
          },
          {
            "label": "AP Consumed",
            "value": "150"
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
                "id": "hit",
                "label": "Hit"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "p-atk": "+ 12",
                  "s-matk": "+ 12",
                  "hit": "+ 120",
                  "sp-cost": "100"
                }
              },
              {
                "level": 2,
                "values": {
                  "p-atk": "+ 14",
                  "s-matk": "+ 14",
                  "hit": "+ 140",
                  "sp-cost": "100"
                }
              },
              {
                "level": 3,
                "values": {
                  "p-atk": "+ 16",
                  "s-matk": "+ 16",
                  "hit": "+ 160",
                  "sp-cost": "100"
                }
              },
              {
                "level": 4,
                "values": {
                  "p-atk": "+ 18",
                  "s-matk": "+ 18",
                  "hit": "+ 180",
                  "sp-cost": "100"
                }
              },
              {
                "level": 5,
                "values": {
                  "p-atk": "+ 20",
                  "s-matk": "+ 20",
                  "hit": "+ 200",
                  "sp-cost": "100"
                }
              },
              {
                "level": 6,
                "values": {
                  "p-atk": "+ 22",
                  "s-matk": "+ 22",
                  "hit": "+ 220",
                  "sp-cost": "100"
                }
              },
              {
                "level": 7,
                "values": {
                  "p-atk": "+ 24",
                  "s-matk": "+ 24",
                  "hit": "+ 240",
                  "sp-cost": "100"
                }
              },
              {
                "level": 8,
                "values": {
                  "p-atk": "+ 26",
                  "s-matk": "+ 26",
                  "hit": "+ 260",
                  "sp-cost": "100"
                }
              },
              {
                "level": 9,
                "values": {
                  "p-atk": "+ 28",
                  "s-matk": "+ 28",
                  "hit": "+ 280",
                  "sp-cost": "100"
                }
              },
              {
                "level": 10,
                "values": {
                  "p-atk": "+ 30",
                  "s-matk": "+ 30",
                  "hit": "+ 300",
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
          "skillName": "Abyss Slayer",
          "versionId": "rebalance-1",
          "versionLabel": "Rebalance 1",
          "file": "rebalances/abyss-chaser/rebalance_1.md",
          "section": "6.5",
          "notes": [
            "Increases duration from 60 seconds to 300 seconds."
          ],
          "specRows": [
            {
              "label": "Duration",
              "before": "60 seconds",
              "after": "300 seconds",
              "scope": "",
              "source": "Increases duration from 60 seconds to 300 seconds."
            }
          ]
        },
        {
          "skillName": "Abyss Slayer",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/abyss-chaser/rebalance_4.md",
          "section": "9.1",
          "notes": [
            "Reduces AP consumption from 150 to 120."
          ],
          "specRows": [
            {
              "label": "AP Consumed",
              "before": "150",
              "after": "120",
              "scope": "",
              "source": "Reduces AP consumption from 150 to 120."
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
      "id": 5319,
      "imageFile": "5319.png",
      "name": "Omega Abyss Strike",
      "maxLevel": 10,
      "prerequisiteText": "From the Abyss Lv. 3 and Abyss Square Lv. 3",
      "group": "Active(AP)",
      "type": "Magical",
      "target": "1 Ground cell",
      "recoversAp": "",
      "consumesAp": "150",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Omega_Abyss_Strike",
      "description": "Drop a massive meteor onto the ground, inflicting Neutral Magic damage in 9 x9 cells.\nThis skill inflicts more damage to Angel and Demon enemies.\nAdditional Damage increase on your Base Level and SPL.",
      "levelDetails": [
        {
          "level": 1,
          "text": "MATK 2200%/ 2350% to Angel/Demon enemies"
        },
        {
          "level": 2,
          "text": "MATK 4400%/ 4700% to Angel/Demon enemies"
        },
        {
          "level": 3,
          "text": "MATK 6600%/ 7050% to Angel/Demon enemies"
        },
        {
          "level": 4,
          "text": "MATK 8800%/ 9400% to Angel/Demon enemies"
        },
        {
          "level": 5,
          "text": "MATK 11000%/ 11750% to Angel/Demon enemies"
        },
        {
          "level": 6,
          "text": "MATK 13200%/ 14100% to Angel/Demon enemies"
        },
        {
          "level": 7,
          "text": "MATK 15400%/ 16450% to Angel/Demon enemies"
        },
        {
          "level": 8,
          "text": "MATK 17600%/ 18800% to Angel/Demon enemies"
        },
        {
          "level": 9,
          "text": "MATK 19800%/ 21150% to Angel/Demon enemies"
        },
        {
          "level": 10,
          "text": "MATK 22000%/ 23500% to Angel/Demon enemies"
        }
      ],
      "fixedCastTime": "1 second",
      "variableCastTime": "4 seconds",
      "castDelay": "0.5 seconds",
      "cooldown": "0.7 seconds",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "125"
            },
            {
              "level": 2,
              "value": "125"
            },
            {
              "level": 3,
              "value": "125"
            },
            {
              "level": 4,
              "value": "125"
            },
            {
              "level": 5,
              "value": "125"
            },
            {
              "level": 6,
              "value": "125"
            },
            {
              "level": 7,
              "value": "125"
            },
            {
              "level": 8,
              "value": "125"
            },
            {
              "level": 9,
              "value": "125"
            },
            {
              "level": 10,
              "value": "125"
            }
          ]
        }
      ],
      "spCost": "150",
      "castRange": "Magic",
      "areaOfEffect": "9 x 9",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5319.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5319",
      "tree": {
        "idx": 26,
        "row": 3,
        "col": 5,
        "columns": 7,
        "requirements": [
          {
            "id": 5317,
            "level": 3,
            "name": "From the Abyss",
            "visible": true
          },
          {
            "id": 5321,
            "level": 3,
            "name": "Abyss Square",
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
            "value": "150"
          },
          {
            "label": "Fixed Cast Time",
            "value": "1 second"
          },
          {
            "label": "Variable Cast Time",
            "value": "4 seconds"
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
            "value": "Magic"
          },
          {
            "label": "Target",
            "value": "1 Ground cell"
          },
          {
            "label": "Area of Effect",
            "value": "9 x 9"
          },
          {
            "label": "AP Consumed",
            "value": "150"
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
                  "sp-cost": "125"
                }
              },
              {
                "level": 2,
                "values": {
                  "sp-cost": "125"
                }
              },
              {
                "level": 3,
                "values": {
                  "sp-cost": "125"
                }
              },
              {
                "level": 4,
                "values": {
                  "sp-cost": "125"
                }
              },
              {
                "level": 5,
                "values": {
                  "sp-cost": "125"
                }
              },
              {
                "level": 6,
                "values": {
                  "sp-cost": "125"
                }
              },
              {
                "level": 7,
                "values": {
                  "sp-cost": "125"
                }
              },
              {
                "level": 8,
                "values": {
                  "sp-cost": "125"
                }
              },
              {
                "level": 9,
                "values": {
                  "sp-cost": "125"
                }
              },
              {
                "level": 10,
                "values": {
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
          "skillName": "Omega Abyss Strike",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/abyss-chaser/rebalance_2.md",
          "section": "6.7",
          "notes": [
            "Reduces cooldown from 60 seconds to 3 seconds.",
            "Reduces SP consumption from 150 to 125.",
            "Reduces AP consumption from 150 to 15.",
            "Increases damage from 6000%/11500%(angel and demon race)Matk to 22000%/23500%(angel and demon race)Matk based on level 10."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "60 seconds",
              "after": "3 seconds",
              "scope": "",
              "source": "Reduces cooldown from 60 seconds to 3 seconds."
            },
            {
              "label": "SP Cost",
              "before": "150",
              "after": "125",
              "scope": "",
              "source": "Reduces SP consumption from 150 to 125."
            },
            {
              "label": "AP Consumed",
              "before": "150",
              "after": "15",
              "scope": "",
              "source": "Reduces AP consumption from 150 to 15."
            },
            {
              "label": "Damage",
              "before": "6000%/11500%(angel and demon race)Matk",
              "after": "22000%/23500%(angel and demon race)Matk",
              "scope": "Lv 10",
              "source": "Increases damage from 6000%/11500%(angel and demon race)Matk to 22000%/23500%(angel and demon race)Matk based on level 10."
            }
          ]
        },
        {
          "skillName": "Omega Abyss Strike",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/abyss-chaser/rebalance_4.md",
          "section": "9.2",
          "notes": [
            "Reduces fixed casting time from 1.5 seconds to 1 second.",
            "Reduces skill cooldown from 3 seconds to 0.7 seconds.",
            "Reduces AP consumption from 15 to 10.",
            "Changes damage property from neutral to fire.",
            "Increases base damage from 22000%/23500%(angel and demon)Matk to 26500%/28500%(angel and demon)Matk based on level 10."
          ],
          "specRows": [
            {
              "label": "Fixed Casting Time",
              "before": "1.5 seconds",
              "after": "1 second",
              "scope": "",
              "source": "Reduces fixed casting time from 1.5 seconds to 1 second."
            },
            {
              "label": "Cooldown",
              "before": "3 seconds",
              "after": "0.7 seconds",
              "scope": "",
              "source": "Reduces skill cooldown from 3 seconds to 0.7 seconds."
            },
            {
              "label": "AP Consumed",
              "before": "15",
              "after": "10",
              "scope": "",
              "source": "Reduces AP consumption from 15 to 10."
            },
            {
              "label": "Damage",
              "before": "neutral (property)/22000%/23500%(angel and demon)Matk",
              "after": "fire (property)/26500%/28500%(angel and demon)Matk",
              "scope": "Lv 10",
              "source": "Changes damage property from neutral to fire. / Increases base damage from 22000%/23500%(angel and demon)Matk to 26500%/28500%(angel and demon)Matk based on level 10."
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

export default abyssChaserData;
