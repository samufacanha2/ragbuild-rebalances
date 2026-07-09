export const shiranuiData = {
  "generatedAt": "2026-07-09T03:39:57.587Z",
  "classId": 4305,
  "classSlug": "shiranui",
  "className": "Shiranui",
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
    "changedSkills": 16,
    "noteCount": 104,
    "addedSkills": 0,
    "versions": 3
  },
  "tree": {
    "columns": 9,
    "rows": 5,
    "skillTreeUrl": "https://www.divine-pride.net/tools/skilltree/4305",
    "jobIconUrl": "assets/divine-pride/jobs/4305.png"
  },
  "sources": {
    "rebalances": [
      "rebalances/shiranui/rebalance_2.md",
      "rebalances/shiranui/rebalance_3.md",
      "rebalances/shiranui/rebalance_4.md"
    ],
    "rebalanceManifest": "rebalances/manifest.json",
    "divinePrideApiDocs": "https://www.divine-pride.net/api",
    "divinePrideSkillTree": "https://www.divine-pride.net/tools/skilltree/4305",
    "browiki": "https://browiki.org"
  },
  "rebalanceVersions": [
    {
      "id": "rebalance-2",
      "label": "Rebalance 2",
      "file": "rebalances/shiranui/rebalance_2.md",
      "heading": "13. Shinkiro & Shiranui",
      "className": "Shiranui",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=11126",
      "scope": "main-and-expanded",
      "appliesTo": "Main and expanded classes",
      "maxJobLevel": 50,
      "pointLimit": 49,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "13.1",
          "name": "Shadow Hunting",
          "notes": [
            "Increases SP consumption from 48 to 60 based on level 10.",
            "Increases AP recovery rate from 1 to 2."
          ]
        },
        {
          "section": "13.2",
          "name": "Shadow Dance",
          "notes": [
            "Removes variable casting time.",
            "Reduces cooldown from 1 second to 0.5 seconds.",
            "Reduces delay after skill from 0.5 seconds to 0.25 seconds.",
            "Increases SP consumption from 52 to 65 based on level 10.",
            "Increases AP recovery rate from 1 to 2.",
            "Reduces damage from 6500%Atk to 5900%Atk based on level 10."
          ]
        },
        {
          "section": "13.3",
          "name": "Shadow Flash",
          "notes": [
            "Removes 0.5 seconds fixed casting time.",
            "Removes 1 second variable casting time.",
            "Reduces cooldown from 1 second to 0.5 seconds.",
            "Reduces damage from 9700%Atk to 8600%Atk based on level 10."
          ]
        },
        {
          "section": "13.4",
          "name": "Huuma Shuriken - Grasp",
          "notes": [
            "Removes 0.5 seconds delay after skill.",
            "Increases SP consumption from 56 to 84 based on level 10.",
            "Increases AP recovery rate from 2 to 3."
          ]
        },
        {
          "section": "13.5",
          "name": "Huuma Shuriken - Construct",
          "notes": [
            "Increases SP consumption from 64 to 65 based on level 10."
          ]
        },
        {
          "section": "13.6",
          "name": "Kunai - Distortion",
          "notes": [
            "Increases SP consumption from 46 to 54 based on level 10.",
            "Increases AP recovery rate from 1 to 2.",
            "Increases damage from 4000%Atk to 6300%Atk based on level 10.",
            "Increases factor weight of Kunai - Refraction skill level in skill formula from 7 to 10."
          ]
        },
        {
          "section": "13.7",
          "name": "Kunai - Rotation",
          "notes": [
            "Increases SP consumption from 55 to 76 based on level 5.",
            "Increases damage from 3300%Atk to 4300%Atk based on level 5.",
            "Increases factor weight of Kunai - Distortion skill level in skill formula from 50 to 70."
          ]
        },
        {
          "section": "13.8",
          "name": "Kunai - Refraction",
          "notes": [
            "Increases SP consumption from 50 to 76 based on level 10.",
            "Increases factor weight of Kunai - Rotation skill level in skill formula from 5 to 10."
          ]
        },
        {
          "section": "13.9",
          "name": "Red Flame Cannon",
          "notes": [
            "Reduces fixed casting time from 1.5 seconds to 1 seconds.",
            "Reduces cooldown from 1 second to 0.7 seconds.",
            "Removes 0.5 seconds delay after skill.",
            "Increases SP consumption from 62 to 92 based on level 10.",
            "Increases damage from 6200%Matk to 13350%Matk based on level 10.",
            "Increases factor weight of Darkening Cannon skill level in skill formula from 50 to 70."
          ]
        },
        {
          "section": "13.10",
          "name": "Cold Blooded Cannon",
          "notes": [
            "Reduces fixed casting time from 1.5 seconds to 1 seconds.",
            "Removes 0.5 seconds delay after skill.",
            "Increases SP consumption from 61 to 88 based on level 10.",
            "Increases damage from 3500%Matk to 5750%Matk based on level 10.",
            "Increases factor weight of Darkening Cannon skill level in skill formula from 25 to 40."
          ]
        },
        {
          "section": "13.11",
          "name": "Thundering Cannon",
          "notes": [
            "Reduces fixed casting time from 1.5 seconds to 1 seconds.",
            "Reduces cooldown from 1 second to 0.7 seconds.",
            "Removes 0.5 seconds delay after skill.",
            "Increases SP consumption from 62 to 92 based on level 10.",
            "Increases damage from 6500%Matk to 13600%Matk based on level 10.",
            "Increases factor weight of Darkening Cannon skill level in skill formula from 50 to 70."
          ]
        },
        {
          "section": "13.12",
          "name": "Golden Dragon Cannon",
          "notes": [
            "Reduces fixed casting time from 1.5 seconds to 1 seconds.",
            "Removes 0.5 seconds delay after skill.",
            "Increases SP consumption from 48 to 88 based on level 10.",
            "Increases damage from 2350%Matk to 4300%Matk based on level 10.",
            "Increases factor weight of Darkening Cannon skill level in skill formula from 7 to 15."
          ]
        },
        {
          "section": "13.13",
          "name": "Darkening Cannon",
          "notes": [
            "Reduces fixed casting time from 1.5 seconds to 1 seconds.",
            "Removes 0.5 seconds delay after skill.",
            "Increases SP consumption from 58 to 94 based on level 10.",
            "Increases damage from 5400%Matk to 9950%Matk based on level 10."
          ]
        },
        {
          "section": "13.14",
          "name": "Shadow - Nightmare",
          "notes": [
            "Reduces cooldown from 5 seconds to 1 second.",
            "Reduces AP consumption from 30 to 20.",
            "Increases damage from 15000%Atk to 18000%Atk."
          ]
        },
        {
          "section": "13.15",
          "name": "Kunai - Nightmare",
          "notes": [
            "Reduces cooldown from 5 seconds to 1 second.",
            "Reduces AP consumption from 30 to 20.",
            "Increases damage from 15000%Atk to 18000%Atk."
          ]
        },
        {
          "section": "13.16",
          "name": "Dark Dragon - Nightmare",
          "notes": [
            "Reduces fixed casting time from 1.5 seconds to 1 seconds.",
            "Reduces cooldown from 5 seconds to 1 second.",
            "Reduces AP consumption from 30 to 20.",
            "Increases damage from 12000%Matk to 15500%Matk."
          ]
        }
      ]
    },
    {
      "id": "rebalance-3",
      "label": "Rebalance 3",
      "file": "rebalances/shiranui/rebalance_3.md",
      "heading": "13. Shinkiro & Shiranui",
      "className": "Shiranui",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=12421",
      "scope": "main-and-expanded",
      "appliesTo": "Main and expanded classes",
      "maxJobLevel": 55,
      "pointLimit": 54,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "13.1",
          "name": "Shadow Hunting",
          "notes": [
            "Increases base damage from 4500%Atk to 9600%Atk based on level 10."
          ]
        },
        {
          "section": "13.2",
          "name": "Shadow Dance",
          "notes": [
            "Reduces skill cooldown from 0.5 seconds to 0.4 seconds.",
            "Increases SP consumption from 65 to 82 based on level 10.",
            "Reduces area of effect from 9 x 9 cells to 7 x 7 cells based on level 10.",
            "Increases base damage from 5900%Atk to 8050%Atk based on level 10."
          ]
        },
        {
          "section": "13.3",
          "name": "Shadow Flash",
          "notes": [
            "Reworks skill to become target skill and also deal damage to surrounding enemies around the target.",
            "Area of effect is 7 x 7 cells based on level 10.",
            "Applies critical damage, the critical chance is the user's Cri.",
            "No longer be cast by clones from Mirage.",
            "Increases cast range from 1 cell to 2 cells.",
            "Increases base damage from 8600%Atk to 9000%Atk based on level 10.",
            "Reduces factor weight of Shadow Dance skill level in skill formula from 1000 to 500 based on level 10."
          ]
        },
        {
          "section": "13.4",
          "name": "Huuma Shuriken - Grasp",
          "notes": [
            "Increases base damage from 2700%Atk to 4350%Atk based on level 10."
          ]
        },
        {
          "section": "13.5",
          "name": "Huuma Shuriken - Construct",
          "notes": [
            "Reworks skill to become ground skill and deal damage to all enemies within 9 x 9 cells around the target cell.",
            "Increases cast range from 1 cell to 9 cells.",
            "Increases base damage from 4600%/6800%(Memorization Zone)Atk to 12600%/15600%(Memorization Zone)Atk based on level 10."
          ]
        },
        {
          "section": "13.6",
          "name": "Red Flame Cannon",
          "notes": [
            "Reworks skill to become target skill and also deal damage to surrounding enemies around the target.",
            "Area of effect is 7 x 7 cells based on level 10.",
            "Increases cast range from 1 cell to 9 cells.",
            "Reduces SP consumption from 92 to 80 based on level 10.",
            "Reduces base damage from 13350%Matk to 10500%Matk based on level 10."
          ]
        },
        {
          "section": "13.7",
          "name": "Cold Blooded Cannon",
          "notes": [
            "Reduces SP consumption from 92 to 76 based on level 10.",
            "Increases base damage from 5750%Matk to 8850%Matk based on level 10."
          ]
        },
        {
          "section": "13.8",
          "name": "Thundering Cannon",
          "notes": [
            "Reworks skill to become target skill and also deal damage to surrounding enemies around the target.",
            "Area of effect is 7 x 7 cells based on level 10.",
            "Increases cast range from 1 cell to 9 cells.",
            "Reduces SP consumption from 92 to 80 based on level 10.",
            "Reduces base damage from 13600%Matk to 10000%Matk based on level 10."
          ]
        },
        {
          "section": "13.9",
          "name": "Golden Dragon Cannon",
          "notes": [
            "Reworks skill to become target skill and also deal damage to surrounding enemies around the target.",
            "Area of effect is 5 x 5 cells based on level 10.",
            "Reduces cast range from 13 cell to 9 cells.",
            "Reduces SP consumption from 88 to 65 based on level 10.",
            "Increases base damage from 4300%Matk to 9950%Matk based on level 10."
          ]
        }
      ]
    },
    {
      "id": "rebalance-4",
      "label": "Rebalance 4",
      "file": "rebalances/shiranui/rebalance_4.md",
      "heading": "13. Shinkiro & Shiranui",
      "className": "Shiranui",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=13917",
      "scope": "main-and-expanded",
      "appliesTo": "Main and expanded classes",
      "maxJobLevel": 55,
      "pointLimit": 54,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "14.1",
          "name": "Shadow Dance",
          "notes": [
            "Increases base damage from 8050+(Shadow Hunting skill level x 500)%Atk to 9750+(Shadow Hunting skill level x 500700)%Atk based on level 10."
          ]
        },
        {
          "section": "14.2",
          "name": "Shadow Flash",
          "notes": [
            "Increases base damage from 9000+(Shadow Dance skill level x 500)%Atk to 11000+(Shadow Dance skill level x 10001500)%Atk based on level 10."
          ]
        },
        {
          "section": "14.3",
          "name": "Huuma Shuriken - Construct",
          "notes": [
            "Increases base damage from 12600+(Huuma Shuriken - Grasp level x 300)%/15600+(Huuma Shuriken - Grasp level x 300)%(explosion)Atk to 1590018400+(Huuma Shuriken - Grasp level x 5001000)%/18400+(Huuma Shuriken - Grasp level x 5001000)%(explosion)Atk based on level 10.",
            "Reduces skill cooldown from 1 second to 0.7 seconds."
          ]
        },
        {
          "section": "14.4",
          "name": "Kunai - Rotation",
          "notes": [
            "Increases base damage from 4300+(Kunai - Distortion skill level x 350)%Atk to 50506200+(Kunai - Distortion skill level x 350500)%Atk based on level 5."
          ]
        },
        {
          "section": "14.5",
          "name": "Kunai - Refraction",
          "notes": [
            "Increases base damage from 3800+(Kunai - Rotation skill level x 100)%Atk to 4450+(Kunai - Rotation skill level x 100)%Atk based on level 10."
          ]
        },
        {
          "section": "14.6",
          "name": "Red Flame Cannon",
          "notes": [
            "Increases base damage from 10500+(Darkening Cannon skill level x 700)%Matk to 11600+(Darkening Cannon skill level x 700)%Matk based on level 10."
          ]
        },
        {
          "section": "14.7",
          "name": "Cold Blooded Cannon",
          "notes": [
            "Increases base damage from 8850+(Darkening Cannon skill level x 400)%Matk to 9950+(Darkening Cannon skill level x 400)%Matk based on level 10."
          ]
        },
        {
          "section": "14.8",
          "name": "Thundering Cannon",
          "notes": [
            "Increases base damage from 10000+(Darkening Cannon skill level x 700)%Matk to 11600+(Darkening Cannon skill level x 700)%Matk based on level 10."
          ]
        },
        {
          "section": "14.9",
          "name": "Golden Dragon Cannon",
          "notes": [
            "Increases base damage from 9950+(Darkening Cannon skill level x 150)%Matk to 15800+(Darkening Cannon skill level x 150)%Matk based on level 10."
          ]
        }
      ]
    }
  ],
  "addedSkills": [],
  "skillTabs": [
    {
      "id": "current",
      "label": "Shiranui",
      "pointLimit": 59,
      "tree": {
        "columns": 9,
        "rows": 5
      },
      "skills": [
        {
          "id": 5479,
          "imageFile": "5479.png",
          "name": "Mirage",
          "maxLevel": 1,
          "prerequisiteText": "Basic Skill",
          "group": "Active",
          "type": "Support",
          "target": "1 Cell Ground Target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Summons a Mirage clone of yourself at the designated location.\nThe Mirage clone lasts for 20 seconds, and up to 3 clones can be summoned.\nThe Mirage clone reacts to the skills used by the main body, using those skills with approximately 30% of the main body's power.",
          "levelDetails": [],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "25"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5479.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5479",
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
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "1"
              },
              {
                "label": "Target",
                "value": "1 Cell Ground Target"
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
                      "sp-cost": "25"
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
          "id": 5488,
          "imageFile": "5488.png",
          "name": "Red Flame Cannon",
          "maxLevel": 10,
          "prerequisiteText": "Basic Skill",
          "group": "Active",
          "type": "Magic",
          "target": "Single Target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Using the haze of red flames, spews powerful flames, inflicting fire attribute magic damage to targets within the forward range.\nDeals additional damage depends on level of Darkening Cannon user learned, user's base level and SPL.\nConsumes 1 Haze of Prominence.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 1500+(Darkening Cannon Lv x70)%/Range: 5x5"
            },
            {
              "level": 2,
              "text": "MATK 2500+(Darkening Cannon Lv x140)%/Range: 5x5"
            },
            {
              "level": 3,
              "text": "MATK 3500+(Darkening Cannon Lv x210)%/Range: 5x5"
            },
            {
              "level": 4,
              "text": "MATK 4500+(Darkening Cannon Lv x280)%/Range: 5x5"
            },
            {
              "level": 5,
              "text": "MATK 5500+(Darkening Cannon Lv x350)%/Range: 5x5"
            },
            {
              "level": 6,
              "text": "MATK 6500+(Darkening Cannon Lv x420)%/Range: 7x7"
            },
            {
              "level": 7,
              "text": "MATK 7500+(Darkening Cannon Lv x490)%/Range: 7x7"
            },
            {
              "level": 8,
              "text": "MATK 8500+(Darkening Cannon Lv x560)%/Range: 7x7"
            },
            {
              "level": 9,
              "text": "MATK 9500+(Darkening Cannon Lv x630)%/Range: 7x7"
            },
            {
              "level": 10,
              "text": "MATK 10500+(Darkening Cannon Lv x700)%/Range: 7x7"
            }
          ],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "53"
                },
                {
                  "level": 2,
                  "value": "56"
                },
                {
                  "level": 3,
                  "value": "59"
                },
                {
                  "level": 4,
                  "value": "62"
                },
                {
                  "level": 5,
                  "value": "65"
                },
                {
                  "level": 6,
                  "value": "68"
                },
                {
                  "level": 7,
                  "value": "71"
                },
                {
                  "level": 8,
                  "value": "74"
                },
                {
                  "level": 9,
                  "value": "77"
                },
                {
                  "level": 10,
                  "value": "80"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5488.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5488",
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
                "value": "10"
              },
              {
                "label": "Target",
                "value": "Single Target"
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
                      "effect": "MATK 1500+(Darkening Cannon Lv x 70)%/Range: 5 x 5",
                      "sp-cost": "53"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "MATK 2500+(Darkening Cannon Lv x 140)%/Range: 5 x 5",
                      "sp-cost": "56"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "MATK 3500+(Darkening Cannon Lv x 210)%/Range: 5 x 5",
                      "sp-cost": "59"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "MATK 4500+(Darkening Cannon Lv x 280)%/Range: 5 x 5",
                      "sp-cost": "62"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "MATK 5500+(Darkening Cannon Lv x 350)%/Range: 5 x 5",
                      "sp-cost": "65"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "MATK 6500+(Darkening Cannon Lv x 420)%/Range: 7 x 7",
                      "sp-cost": "68"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "MATK 7500+(Darkening Cannon Lv x 490)%/Range: 7 x 7",
                      "sp-cost": "71"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "MATK 8500+(Darkening Cannon Lv x 560)%/Range: 7 x 7",
                      "sp-cost": "74"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "MATK 9500+(Darkening Cannon Lv x 630)%/Range: 7 x 7",
                      "sp-cost": "77"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "MATK 10500+(Darkening Cannon Lv x 700)%/Range: 7 x 7",
                      "sp-cost": "80"
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
              "skillName": "Red Flame Cannon",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/shiranui/rebalance_2.md",
              "section": "13.9",
              "notes": [
                "Reduces fixed casting time from 1.5 seconds to 1 seconds.",
                "Reduces cooldown from 1 second to 0.7 seconds.",
                "Removes 0.5 seconds delay after skill.",
                "Increases SP consumption from 62 to 92 based on level 10.",
                "Increases damage from 6200%Matk to 13350%Matk based on level 10.",
                "Increases factor weight of Darkening Cannon skill level in skill formula from 50 to 70."
              ],
              "specRows": [
                {
                  "label": "Fixed Casting Time",
                  "before": "1.5 seconds",
                  "after": "1 seconds",
                  "scope": "",
                  "source": "Reduces fixed casting time from 1.5 seconds to 1 seconds."
                },
                {
                  "label": "Cooldown",
                  "before": "1 second",
                  "after": "0.7 seconds",
                  "scope": "",
                  "source": "Reduces cooldown from 1 second to 0.7 seconds."
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
                  "before": "62",
                  "after": "92",
                  "scope": "Lv 10",
                  "source": "Increases SP consumption from 62 to 92 based on level 10."
                },
                {
                  "label": "Damage",
                  "before": "6200%Matk",
                  "after": "13350%Matk",
                  "scope": "Lv 10",
                  "source": "Increases damage from 6200%Matk to 13350%Matk based on level 10."
                },
                {
                  "label": "Factor Weight Of Darkening Cannon Skill Level In Skill Formula",
                  "before": "50",
                  "after": "70",
                  "scope": "",
                  "source": "Increases factor weight of Darkening Cannon skill level in skill formula from 50 to 70."
                }
              ]
            },
            {
              "skillName": "Red Flame Cannon",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/shiranui/rebalance_3.md",
              "section": "13.6",
              "notes": [
                "Reworks skill to become target skill and also deal damage to surrounding enemies around the target.",
                "Area of effect is 7 x 7 cells based on level 10.",
                "Increases cast range from 1 cell to 9 cells.",
                "Reduces SP consumption from 92 to 80 based on level 10.",
                "Reduces base damage from 13350%Matk to 10500%Matk based on level 10."
              ],
              "specRows": [
                {
                  "label": "Cast Range",
                  "before": "1 cells",
                  "after": "9 cells",
                  "scope": "",
                  "source": "Increases cast range from 1 cell to 9 cells."
                },
                {
                  "label": "SP Cost",
                  "before": "92",
                  "after": "80",
                  "scope": "Lv 10",
                  "source": "Reduces SP consumption from 92 to 80 based on level 10."
                },
                {
                  "label": "Damage",
                  "before": "13350%Matk",
                  "after": "10500%Matk",
                  "scope": "Lv 10",
                  "source": "Reduces base damage from 13350%Matk to 10500%Matk based on level 10."
                }
              ]
            },
            {
              "skillName": "Red Flame Cannon",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/shiranui/rebalance_4.md",
              "section": "14.6",
              "notes": [
                "Increases base damage from 10500+(Darkening Cannon skill level x 700)%Matk to 11600+(Darkening Cannon skill level x 700)%Matk based on level 10."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "10500+(Darkening Cannon skill level x 700)%Matk",
                  "after": "11600+(Darkening Cannon skill level x 700)%Matk",
                  "scope": "Lv 10",
                  "source": "Increases base damage from 10500+(Darkening Cannon skill level x 700)%Matk to 11600+(Darkening Cannon skill level x 700)%Matk based on level 10."
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
          "id": 5477,
          "imageFile": "5477.png",
          "name": "Infiltrate",
          "maxLevel": 5,
          "prerequisiteText": "Mirage 1",
          "group": "Active",
          "type": "Melee Physical",
          "target": "Single Target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Instantly seeps into the target's shadow and inflicts melee physical damage to the target.\nWhen cast, moves to the other side of the target and enters shadow cloaking state for 2 seconds.\nIf there are mirage clones of oneself within the 31x31 cell range around the target, the clones are brought to the area around the caster.\nIf the location across from the target is not moveable, the skill cannot be used.\nDamage is additionally increased depending on the caster's base level and CON.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 700%"
            },
            {
              "level": 2,
              "text": "ATK 1400%"
            },
            {
              "level": 3,
              "text": "ATK 2100%"
            },
            {
              "level": 4,
              "text": "ATK 2800%"
            },
            {
              "level": 5,
              "text": "ATK 3500%"
            }
          ],
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
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5477.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5477",
          "tree": {
            "idx": 7,
            "row": 0,
            "col": 7,
            "columns": 9,
            "requirements": [
              {
                "id": 5479,
                "level": 1,
                "name": "Mirage",
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
                "value": "Single Target"
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
                      "base-damage-atk": "700%",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-atk": "1400%",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-atk": "2100%",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-atk": "2800%",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-atk": "3500%",
                      "sp-cost": "40"
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
          "id": 5485,
          "imageFile": "5485.png",
          "name": "Kunai - Distortion",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "",
          "type": "Ranged physical",
          "target": "1 cell ground target",
          "recoversAp": "2",
          "consumesAp": "",
          "description": "Throw a kunai at 1 cell ground target, dealing Ranged physical damage to enemies within a 5x5 cell range and inflicting the Nightmare effect for 5 seconds. Additionally, install a [Distortion Zone] at that location for 5 seconds.\nDeals additional damage depends on level of Kunai - Refraction user learned, user's base level and POW.\nThe attack attribute depends on the attribute of the equipped kunai, and consumes 2 equipped kunai.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 900+(Kunai - RefractionLv x10)%"
            },
            {
              "level": 2,
              "text": "ATK 1500+(Kunai - RefractionLv x20)%"
            },
            {
              "level": 3,
              "text": "ATK 2100+(Kunai - RefractionLv x30)%"
            },
            {
              "level": 4,
              "text": "ATK 2700+(Kunai - RefractionLv x40)%"
            },
            {
              "level": 5,
              "text": "ATK 3300+(Kunai - RefractionLv x50)%"
            },
            {
              "level": 6,
              "text": "ATK 3900+(Kunai - RefractionLv x60)%"
            },
            {
              "level": 7,
              "text": "ATK 4500+(Kunai - RefractionLv x70)%"
            },
            {
              "level": 8,
              "text": "ATK 5100+(Kunai - RefractionLv x80)%"
            },
            {
              "level": 9,
              "text": "ATK 5700+(Kunai - RefractionLv x90)%"
            },
            {
              "level": 10,
              "text": "ATK 6300+(Kunai - RefractionLv x100)%"
            }
          ],
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
                  "value": "38"
                },
                {
                  "level": 3,
                  "value": "40"
                },
                {
                  "level": 4,
                  "value": "42"
                },
                {
                  "level": 5,
                  "value": "44"
                },
                {
                  "level": 6,
                  "value": "46"
                },
                {
                  "level": 7,
                  "value": "48"
                },
                {
                  "level": 8,
                  "value": "50"
                },
                {
                  "level": 9,
                  "value": "52"
                },
                {
                  "level": 10,
                  "value": "54"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5485.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5485",
          "tree": {
            "idx": 9,
            "row": 1,
            "col": 0,
            "columns": 9,
            "requirements": [
              {
                "id": 5479,
                "level": 1,
                "name": "Mirage",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Ranged physical"
              },
              {
                "label": "Levels",
                "value": "10"
              },
              {
                "label": "Target",
                "value": "1 cell ground target"
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
                      "effect": "ATK 900+(Kunai - RefractionLv x 10)%",
                      "sp-cost": "36"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "ATK 1500+(Kunai - RefractionLv x 20)%",
                      "sp-cost": "38"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "ATK 2100+(Kunai - RefractionLv x 30)%",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "ATK 2700+(Kunai - RefractionLv x 40)%",
                      "sp-cost": "42"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "ATK 3300+(Kunai - RefractionLv x 50)%",
                      "sp-cost": "44"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "ATK 3900+(Kunai - RefractionLv x 60)%",
                      "sp-cost": "46"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "ATK 4500+(Kunai - RefractionLv x 70)%",
                      "sp-cost": "48"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "ATK 5100+(Kunai - RefractionLv x 80)%",
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "ATK 5700+(Kunai - RefractionLv x 90)%",
                      "sp-cost": "52"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "ATK 6300+(Kunai - RefractionLv x 100)%",
                      "sp-cost": "54"
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
              "skillName": "Kunai - Distortion",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/shiranui/rebalance_2.md",
              "section": "13.6",
              "notes": [
                "Increases SP consumption from 46 to 54 based on level 10.",
                "Increases AP recovery rate from 1 to 2.",
                "Increases damage from 4000%Atk to 6300%Atk based on level 10.",
                "Increases factor weight of Kunai - Refraction skill level in skill formula from 7 to 10."
              ],
              "specRows": [
                {
                  "label": "SP Cost",
                  "before": "46",
                  "after": "54",
                  "scope": "Lv 10",
                  "source": "Increases SP consumption from 46 to 54 based on level 10."
                },
                {
                  "label": "AP Generated",
                  "before": "1",
                  "after": "2",
                  "scope": "",
                  "source": "Increases AP recovery rate from 1 to 2."
                },
                {
                  "label": "Damage",
                  "before": "4000%Atk",
                  "after": "6300%Atk",
                  "scope": "Lv 10",
                  "source": "Increases damage from 4000%Atk to 6300%Atk based on level 10."
                },
                {
                  "label": "Factor Weight Of Kunai - Refraction Skill Level In Skill Formula",
                  "before": "7",
                  "after": "10",
                  "scope": "",
                  "source": "Increases factor weight of Kunai - Refraction skill level in skill formula from 7 to 10."
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
          "id": 5480,
          "imageFile": "5480.png",
          "name": "Shadow Hunting",
          "maxLevel": 10,
          "prerequisiteText": "Mirage 1",
          "group": "Active",
          "type": "Melee Physical",
          "target": "1 Cell Ground Target",
          "recoversAp": "",
          "consumesAp": "2",
          "description": "Swing the shadow sword at the location, inflicting melee physical damage to targets within a 5x5 range and applying a nightmare effect for 5 seconds.\nDamage is additionally increased depending on Shadow Flash skill level, caster's base level, and POW.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 1500+(Shadow Flash Lv x5)%"
            },
            {
              "level": 2,
              "text": "ATK 2400+(Shadow Flash Lv x10)%"
            },
            {
              "level": 3,
              "text": "ATK 3300+(Shadow Flash Lv x15)%"
            },
            {
              "level": 4,
              "text": "ATK 4200+(Shadow Flash Lv x20)%"
            },
            {
              "level": 5,
              "text": "ATK 5100+(Shadow Flash Lv x25)%"
            },
            {
              "level": 6,
              "text": "ATK 6000+(Shadow Flash Lv x30)%"
            },
            {
              "level": 7,
              "text": "ATK 6900+(Shadow Flash Lv x35)%"
            },
            {
              "level": 8,
              "text": "ATK 7800+(Shadow Flash Lv x40)%"
            },
            {
              "level": 9,
              "text": "ATK 8700+(Shadow Flash Lv x45)%"
            },
            {
              "level": 10,
              "text": "ATK 9600+(Shadow Flash Lv x50)%"
            }
          ],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "33"
                },
                {
                  "level": 2,
                  "value": "36"
                },
                {
                  "level": 3,
                  "value": "39"
                },
                {
                  "level": 4,
                  "value": "42"
                },
                {
                  "level": 5,
                  "value": "45"
                },
                {
                  "level": 6,
                  "value": "48"
                },
                {
                  "level": 7,
                  "value": "51"
                },
                {
                  "level": 8,
                  "value": "54"
                },
                {
                  "level": 9,
                  "value": "57"
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
          "iconUrl": "assets/divine-pride/skills/5480.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5480",
          "tree": {
            "idx": 11,
            "row": 1,
            "col": 2,
            "columns": 9,
            "requirements": [
              {
                "id": 5479,
                "level": 1,
                "name": "Mirage",
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
                "value": "1 Cell Ground Target"
              },
              {
                "label": "AP Consumed",
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
                      "effect": "ATK 1500+(Shadow Flash Lv x 5)%",
                      "sp-cost": "33"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "ATK 2400+(Shadow Flash Lv x 10)%",
                      "sp-cost": "36"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "ATK 3300+(Shadow Flash Lv x 15)%",
                      "sp-cost": "39"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "ATK 4200+(Shadow Flash Lv x 20)%",
                      "sp-cost": "42"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "ATK 5100+(Shadow Flash Lv x 25)%",
                      "sp-cost": "45"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "ATK 6000+(Shadow Flash Lv x 30)%",
                      "sp-cost": "48"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "ATK 6900+(Shadow Flash Lv x 35)%",
                      "sp-cost": "51"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "ATK 7800+(Shadow Flash Lv x 40)%",
                      "sp-cost": "54"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "ATK 8700+(Shadow Flash Lv x 45)%",
                      "sp-cost": "57"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "ATK 9600+(Shadow Flash Lv x 50)%",
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
              "skillName": "Shadow Hunting",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/shiranui/rebalance_2.md",
              "section": "13.1",
              "notes": [
                "Increases SP consumption from 48 to 60 based on level 10.",
                "Increases AP recovery rate from 1 to 2."
              ],
              "specRows": [
                {
                  "label": "SP Cost",
                  "before": "48",
                  "after": "60",
                  "scope": "Lv 10",
                  "source": "Increases SP consumption from 48 to 60 based on level 10."
                },
                {
                  "label": "AP Generated",
                  "before": "1",
                  "after": "2",
                  "scope": "",
                  "source": "Increases AP recovery rate from 1 to 2."
                }
              ]
            },
            {
              "skillName": "Shadow Hunting",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/shiranui/rebalance_3.md",
              "section": "13.1",
              "notes": [
                "Increases base damage from 4500%Atk to 9600%Atk based on level 10."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "4500%Atk",
                  "after": "9600%Atk",
                  "scope": "Lv 10",
                  "source": "Increases base damage from 4500%Atk to 9600%Atk based on level 10."
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
          "id": 5499,
          "imageFile": "5499.png",
          "name": "Four Colors Charm",
          "maxLevel": 1,
          "prerequisiteText": "Release Ninja Spell 1, Mirage 1",
          "group": "Active",
          "type": "Buff",
          "target": "Instant Casting",
          "recoversAp": "",
          "consumesAp": "20",
          "description": "Can only be used when 10 spirits of the same property are summoned.\nThe charm that strengthens the skills linked to the property of the summoned spirit.\nIncreases Red Flame Cannon / Thundering Cannon / Cold Blooded cannon / Golden Dragon cannon damage.\nThe buffs from different property can be overlapped.\n[Fire Charm (spirit of fire)]\n: [Four Colors Charm: Fire] - Red Flame Cannon Damage +8500%\n[Ice Charm (spirit of water)]\n: [Four Colors Charm: Water] - Cold Blooded cannon damage +7000%\n[Wind Charm (spirit of the wind)]\n: [Four Colors Charm: Wind] - Thundering Cannon damage +8500%\n[Earth Charm (spirit of the earth)]\n: [Four Colors Charm: Earth] - Golden Dragon Cannon damage +5500%",
          "levelDetails": [
            {
              "level": 1,
              "text": "Duration: 300 seconds."
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5499.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5499",
          "tree": {
            "idx": 12,
            "row": 1,
            "col": 3,
            "columns": 9,
            "requirements": [
              {
                "id": 3019,
                "level": 1,
                "name": "Release Ninja Spell",
                "visible": false
              },
              {
                "id": 5479,
                "level": 1,
                "name": "Mirage",
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
                "value": "Instant Casting"
              },
              {
                "label": "AP Consumed",
                "value": "20"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "duration",
                    "label": "Duration"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "duration": "300 seconds"
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
          "id": 5489,
          "imageFile": "5489.png",
          "name": "Cold Blooded Cannon",
          "maxLevel": 10,
          "prerequisiteText": "Basic Skill",
          "group": "Active",
          "type": "Magic",
          "target": "1 Cell Ground Target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Throws a haze of ice and snow and summons cold-blooded spheres that explode in the area, inflicting water magic damage to targets within the range.\nDeals additional damage depends on level of Darkening Cannon user learned, user's base level and SPL.\nConsumes 1 Haze of Icy Snow.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 1200+(Darkening Cannon Lv x40)%\nRange : 5x5cell"
            },
            {
              "level": 2,
              "text": "MATK 2050+(Darkening Cannon Lv x80)%\nRange : 5x5cell"
            },
            {
              "level": 3,
              "text": "MATK 2900+(Darkening Cannon Lv x120)%\nRange : 5x5cell"
            },
            {
              "level": 4,
              "text": "MATK 3750+(Darkening Cannon Lv x160)%\nRange : 5x5cell"
            },
            {
              "level": 5,
              "text": "MATK 4600+(Darkening Cannon Lv x200)%\nRange : 5x5cell"
            },
            {
              "level": 6,
              "text": "MATK 5450+(Darkening Cannon Lv x240)%\nRange : 7x7cell"
            },
            {
              "level": 7,
              "text": "MATK 6300+(Darkening Cannon Lv x280)%\nRange : 7x7cell"
            },
            {
              "level": 8,
              "text": "MATK 7150+(Darkening Cannon Lv x320)%\nRange : 7x7cell"
            },
            {
              "level": 9,
              "text": "MATK 8000+(Darkening Cannon Lv x360)%\nRange : 7x7cell"
            },
            {
              "level": 10,
              "text": "MATK 8850+(Darkening Cannon Lv x400)%\nRange : 9x9cell"
            }
          ],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "58"
                },
                {
                  "level": 2,
                  "value": "60"
                },
                {
                  "level": 3,
                  "value": "62"
                },
                {
                  "level": 4,
                  "value": "64"
                },
                {
                  "level": 5,
                  "value": "66"
                },
                {
                  "level": 6,
                  "value": "68"
                },
                {
                  "level": 7,
                  "value": "70"
                },
                {
                  "level": 8,
                  "value": "72"
                },
                {
                  "level": 9,
                  "value": "74"
                },
                {
                  "level": 10,
                  "value": "76"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5489.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5489",
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
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "10"
              },
              {
                "label": "Target",
                "value": "1 Cell Ground Target"
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
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "MATK 1200+(Darkening Cannon Lv x 40)%",
                      "area-of-effect": "5x5",
                      "sp-cost": "58"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "MATK 2050+(Darkening Cannon Lv x 80)%",
                      "area-of-effect": "5x5",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "MATK 2900+(Darkening Cannon Lv x 120)%",
                      "area-of-effect": "5x5",
                      "sp-cost": "62"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "MATK 3750+(Darkening Cannon Lv x 160)%",
                      "area-of-effect": "5x5",
                      "sp-cost": "64"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "MATK 4600+(Darkening Cannon Lv x 200)%",
                      "area-of-effect": "5x5",
                      "sp-cost": "66"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "MATK 5450+(Darkening Cannon Lv x 240)%",
                      "area-of-effect": "7x7",
                      "sp-cost": "68"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "MATK 6300+(Darkening Cannon Lv x 280)%",
                      "area-of-effect": "7x7",
                      "sp-cost": "70"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "MATK 7150+(Darkening Cannon Lv x 320)%",
                      "area-of-effect": "7x7",
                      "sp-cost": "72"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "MATK 8000+(Darkening Cannon Lv x 360)%",
                      "area-of-effect": "7x7",
                      "sp-cost": "74"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "MATK 8850+(Darkening Cannon Lv x 400)%",
                      "area-of-effect": "9x9",
                      "sp-cost": "76"
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
              "skillName": "Cold Blooded Cannon",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/shiranui/rebalance_2.md",
              "section": "13.10",
              "notes": [
                "Reduces fixed casting time from 1.5 seconds to 1 seconds.",
                "Removes 0.5 seconds delay after skill.",
                "Increases SP consumption from 61 to 88 based on level 10.",
                "Increases damage from 3500%Matk to 5750%Matk based on level 10.",
                "Increases factor weight of Darkening Cannon skill level in skill formula from 25 to 40."
              ],
              "specRows": [
                {
                  "label": "Fixed Casting Time",
                  "before": "1.5 seconds",
                  "after": "1 seconds",
                  "scope": "",
                  "source": "Reduces fixed casting time from 1.5 seconds to 1 seconds."
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
                  "before": "61",
                  "after": "88",
                  "scope": "Lv 10",
                  "source": "Increases SP consumption from 61 to 88 based on level 10."
                },
                {
                  "label": "Damage",
                  "before": "3500%Matk",
                  "after": "5750%Matk",
                  "scope": "Lv 10",
                  "source": "Increases damage from 3500%Matk to 5750%Matk based on level 10."
                },
                {
                  "label": "Factor Weight Of Darkening Cannon Skill Level In Skill Formula",
                  "before": "25",
                  "after": "40",
                  "scope": "",
                  "source": "Increases factor weight of Darkening Cannon skill level in skill formula from 25 to 40."
                }
              ]
            },
            {
              "skillName": "Cold Blooded Cannon",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/shiranui/rebalance_3.md",
              "section": "13.7",
              "notes": [
                "Reduces SP consumption from 92 to 76 based on level 10.",
                "Increases base damage from 5750%Matk to 8850%Matk based on level 10."
              ],
              "specRows": [
                {
                  "label": "SP Cost",
                  "before": "92",
                  "after": "76",
                  "scope": "Lv 10",
                  "source": "Reduces SP consumption from 92 to 76 based on level 10."
                },
                {
                  "label": "Damage",
                  "before": "5750%Matk",
                  "after": "8850%Matk",
                  "scope": "Lv 10",
                  "source": "Increases base damage from 5750%Matk to 8850%Matk based on level 10."
                }
              ]
            },
            {
              "skillName": "Cold Blooded Cannon",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/shiranui/rebalance_4.md",
              "section": "14.7",
              "notes": [
                "Increases base damage from 8850+(Darkening Cannon skill level x 400)%Matk to 9950+(Darkening Cannon skill level x 400)%Matk based on level 10."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "8850+(Darkening Cannon skill level x 400)%Matk",
                  "after": "9950+(Darkening Cannon skill level x 400)%Matk",
                  "scope": "Lv 10",
                  "source": "Increases base damage from 8850+(Darkening Cannon skill level x 400)%Matk to 9950+(Darkening Cannon skill level x 400)%Matk based on level 10."
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
          "id": 5476,
          "imageFile": "5476.png",
          "name": "Melt Away",
          "maxLevel": 5,
          "prerequisiteText": "Mirage 1",
          "group": "Active",
          "type": "Magic",
          "target": "1 cell ground target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Melts your own shadow and scatters it forward, inflicting shadow property magic damage to targets within the range.\nAs soon as you use the skill, you move backwards 3 cells and enter shadow cloaking for 2 seconds.\nDamage is additionally increased depending on the caster's base level and CON.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 700%"
            },
            {
              "level": 2,
              "text": "MATK 1400%"
            },
            {
              "level": 3,
              "text": "MATK 2100%"
            },
            {
              "level": 4,
              "text": "MATK 2800%"
            },
            {
              "level": 5,
              "text": "MATK 3500%"
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
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5476.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5476",
          "tree": {
            "idx": 14,
            "row": 1,
            "col": 5,
            "columns": 9,
            "requirements": [
              {
                "id": 5479,
                "level": 1,
                "name": "Mirage",
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
                "value": "1 cell ground target"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "base-damage-matk",
                    "label": "Base Damage (MATK)"
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
                      "base-damage-matk": "700%",
                      "sp-cost": "35"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-matk": "1400%",
                      "sp-cost": "35"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-matk": "2100%",
                      "sp-cost": "35"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-matk": "2800%",
                      "sp-cost": "35"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-matk": "3500%",
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
          "id": 5486,
          "imageFile": "5486.png",
          "name": "Kunai - Rotation",
          "maxLevel": 5,
          "prerequisiteText": "basic skill",
          "group": "",
          "type": "Ranged physical",
          "target": "Instant cast",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Scatter kunai around yourself, dealing Ranged physical damage every 0.5 seconds for 2 seconds to targets within range, and putting yourself in a shadowy state. Additionally, install a [Distortion Zone] at your location for 5 seconds.\nDeals additional damage depends on level of Kunai - Distortion user learned, user's base level and POW.\nThe attack attribute depends on the attribute of the equipped kunai, and consumes 5 equipped kunai.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Per hit ATK 1500+(Kunai DistortionLv x70)%\nrange : 5x5Cell"
            },
            {
              "level": 2,
              "text": "Per hit ATK 2200+(Kunai DistortionLv x140)%\nrange : 5x5Cell"
            },
            {
              "level": 3,
              "text": "Per hit ATK 2900+(Kunai DistortionLv x210)%\nrange : 7x7Cell"
            },
            {
              "level": 4,
              "text": "Per hit ATK 3600+(Kunai DistortionLv x280)%\nrange : 7x7Cell"
            },
            {
              "level": 5,
              "text": "Per hit ATK 4300+(Kunai DistortionLv x350)%\nrange : 9x9Cell"
            }
          ],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "44"
                },
                {
                  "level": 2,
                  "value": "52"
                },
                {
                  "level": 3,
                  "value": "60"
                },
                {
                  "level": 4,
                  "value": "68"
                },
                {
                  "level": 5,
                  "value": "76"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5486.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5486",
          "tree": {
            "idx": 16,
            "row": 1,
            "col": 7,
            "columns": 9,
            "requirements": [
              {
                "id": 5485,
                "level": 3,
                "name": "Kunai - Distortion",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Ranged physical"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "Target",
                "value": "Instant cast"
              },
              {
                "label": "Pulse",
                "value": "0.5 seconds"
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
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Per hit ATK 1500+(Kunai DistortionLv x 70)%",
                      "area-of-effect": "5x5",
                      "sp-cost": "44"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Per hit ATK 2200+(Kunai DistortionLv x 140)%",
                      "area-of-effect": "5x5",
                      "sp-cost": "52"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Per hit ATK 2900+(Kunai DistortionLv x 210)%",
                      "area-of-effect": "7x7",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Per hit ATK 3600+(Kunai DistortionLv x 280)%",
                      "area-of-effect": "7x7",
                      "sp-cost": "68"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Per hit ATK 4300+(Kunai DistortionLv x 350)%",
                      "area-of-effect": "9x9",
                      "sp-cost": "76"
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
              "skillName": "Kunai - Rotation",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/shiranui/rebalance_2.md",
              "section": "13.7",
              "notes": [
                "Increases SP consumption from 55 to 76 based on level 5.",
                "Increases damage from 3300%Atk to 4300%Atk based on level 5.",
                "Increases factor weight of Kunai - Distortion skill level in skill formula from 50 to 70."
              ],
              "specRows": [
                {
                  "label": "SP Cost",
                  "before": "55",
                  "after": "76",
                  "scope": "Lv 5",
                  "source": "Increases SP consumption from 55 to 76 based on level 5."
                },
                {
                  "label": "Damage",
                  "before": "3300%Atk",
                  "after": "4300%Atk",
                  "scope": "Lv 5",
                  "source": "Increases damage from 3300%Atk to 4300%Atk based on level 5."
                },
                {
                  "label": "Factor Weight Of Kunai - Distortion Skill Level In Skill Formula",
                  "before": "50",
                  "after": "70",
                  "scope": "",
                  "source": "Increases factor weight of Kunai - Distortion skill level in skill formula from 50 to 70."
                }
              ]
            },
            {
              "skillName": "Kunai - Rotation",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/shiranui/rebalance_4.md",
              "section": "14.4",
              "notes": [
                "Increases base damage from 4300+(Kunai - Distortion skill level x 350)%Atk to 50506200+(Kunai - Distortion skill level x 350500)%Atk based on level 5."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "4300+(Kunai - Distortion skill level x 350)%Atk",
                  "after": "50506200+(Kunai - Distortion skill level x 350500)%Atk",
                  "scope": "Lv 5",
                  "source": "Increases base damage from 4300+(Kunai - Distortion skill level x 350)%Atk to 50506200+(Kunai - Distortion skill level x 350500)%Atk based on level 5."
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
          "id": 5483,
          "imageFile": "5483.png",
          "name": "Huuma Shuriken - Grasp",
          "maxLevel": 10,
          "prerequisiteText": "Kunai - Distortion 3",
          "group": "Active",
          "type": "Range Physical",
          "target": "1 Cell Ground Target",
          "recoversAp": "",
          "consumesAp": "3",
          "description": "Throws a Huuma Shuriken to install a powerful [Hidden Weapon Zone] at a 1 Cell Ground Target, dealing Range Physical damage every 0.25 seconds to enemies within the surrounding range for 5 seconds and applying the Nightmare effect for 5 seconds.\nUp to two [Hidden Weapon Zone] can be installed.\nDeals additional damage depends on level of Huuma Shuriken - Construct user learned, user's base level and POW. Attack properties depend on the properties of the equipped kunai.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK per hit 1200+(Huuma Shuriken - Construct Lv x5)%\nRange: 5x5"
            },
            {
              "level": 2,
              "text": "ATK per hit 1550+(Huuma Shuriken - Construct Lv x10)%\nRange: 5x5"
            },
            {
              "level": 3,
              "text": "ATK per hit 1900+(Huuma Shuriken - Construct Lv x15)%\nRange: 5x5"
            },
            {
              "level": 4,
              "text": "ATK per hit 2250+(Huuma Shuriken - Construct Lv x20)%\nRange: 5x5"
            },
            {
              "level": 5,
              "text": "ATK per hit 2600+(Huuma Shuriken - Construct Lv x25)%\nRange: 7x7"
            },
            {
              "level": 6,
              "text": "ATK per hit 2950+(Huuma Shuriken - Construct Lv x30)%\nRange: 7x7"
            },
            {
              "level": 7,
              "text": "ATK per hit 3300+(Huuma Shuriken - Construct Lv x35)%\nRange: 7x7"
            },
            {
              "level": 8,
              "text": "ATK per hit 3650+(Huuma Shuriken - Construct Lv x40)%\nRange: 7x7"
            },
            {
              "level": 9,
              "text": "ATK per hit 4000+(Huuma Shuriken - Construct Lv x45)%\nRange: 9x9"
            },
            {
              "level": 10,
              "text": "ATK per hit 4350+(Huuma Shuriken - Construct Lv x50)%\nRange: 9x9"
            }
          ],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "48"
                },
                {
                  "level": 2,
                  "value": "52"
                },
                {
                  "level": 3,
                  "value": "56"
                },
                {
                  "level": 4,
                  "value": "60"
                },
                {
                  "level": 5,
                  "value": "64"
                },
                {
                  "level": 6,
                  "value": "68"
                },
                {
                  "level": 7,
                  "value": "72"
                },
                {
                  "level": 8,
                  "value": "76"
                },
                {
                  "level": 9,
                  "value": "80"
                },
                {
                  "level": 10,
                  "value": "84"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5483.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5483",
          "tree": {
            "idx": 17,
            "row": 1,
            "col": 8,
            "columns": 9,
            "requirements": [
              {
                "id": 5485,
                "level": 3,
                "name": "Kunai - Distortion",
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
                "value": "1 Cell Ground Target"
              },
              {
                "label": "AP Consumed",
                "value": "3"
              },
              {
                "label": "Pulse",
                "value": "0.25 seconds"
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
                      "effect": "ATK per hit 1200+(Huuma Shuriken - Construct Lv x 5)%\nRange: 5 x 5",
                      "sp-cost": "48"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "ATK per hit 1550+(Huuma Shuriken - Construct Lv x 10)%\nRange: 5 x 5",
                      "sp-cost": "52"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "ATK per hit 1900+(Huuma Shuriken - Construct Lv x 15)%\nRange: 5 x 5",
                      "sp-cost": "56"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "ATK per hit 2250+(Huuma Shuriken - Construct Lv x 20)%\nRange: 5 x 5",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "ATK per hit 2600+(Huuma Shuriken - Construct Lv x 25)%\nRange: 7 x 7",
                      "sp-cost": "64"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "ATK per hit 2950+(Huuma Shuriken - Construct Lv x 30)%\nRange: 7 x 7",
                      "sp-cost": "68"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "ATK per hit 3300+(Huuma Shuriken - Construct Lv x 35)%\nRange: 7 x 7",
                      "sp-cost": "72"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "ATK per hit 3650+(Huuma Shuriken - Construct Lv x 40)%\nRange: 7 x 7",
                      "sp-cost": "76"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "ATK per hit 4000+(Huuma Shuriken - Construct Lv x 45)%\nRange: 9 x 9",
                      "sp-cost": "80"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "ATK per hit 4350+(Huuma Shuriken - Construct Lv x 50)%\nRange: 9 x 9",
                      "sp-cost": "84"
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
              "skillName": "Huuma Shuriken - Grasp",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/shiranui/rebalance_2.md",
              "section": "13.4",
              "notes": [
                "Removes 0.5 seconds delay after skill.",
                "Increases SP consumption from 56 to 84 based on level 10.",
                "Increases AP recovery rate from 2 to 3."
              ],
              "specRows": [
                {
                  "label": "Cast Delay",
                  "before": "0.5 seconds delay",
                  "after": "Removed",
                  "scope": "",
                  "source": "Removes 0.5 seconds delay after skill."
                },
                {
                  "label": "SP Cost",
                  "before": "56",
                  "after": "84",
                  "scope": "Lv 10",
                  "source": "Increases SP consumption from 56 to 84 based on level 10."
                },
                {
                  "label": "AP Generated",
                  "before": "2",
                  "after": "3",
                  "scope": "",
                  "source": "Increases AP recovery rate from 2 to 3."
                }
              ]
            },
            {
              "skillName": "Huuma Shuriken - Grasp",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/shiranui/rebalance_3.md",
              "section": "13.4",
              "notes": [
                "Increases base damage from 2700%Atk to 4350%Atk based on level 10."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "2700%Atk",
                  "after": "4350%Atk",
                  "scope": "Lv 10",
                  "source": "Increases base damage from 2700%Atk to 4350%Atk based on level 10."
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
          "id": 5481,
          "imageFile": "5481.png",
          "name": "Shadow Dance",
          "maxLevel": 10,
          "prerequisiteText": "Shadow Hunting 3",
          "group": "Active",
          "type": "Melee Physical",
          "target": "Instant Cast",
          "recoversAp": "",
          "consumesAp": "2",
          "description": "Swings a shadow and inflicts melee physical damage to enemies within the surrounding range.\nDamage increases additionally depending on Shadow Hunting skill level, caster's base level, and POW.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 1300+(Shadow HuntingLv x50)%\nRange: 5x5"
            },
            {
              "level": 2,
              "text": "ATK 2050+(Shadow HuntingLv x100)%\nRange: 5x5"
            },
            {
              "level": 3,
              "text": "ATK 2800+(Shadow HuntingLv x150)%\nRange: 5x5"
            },
            {
              "level": 4,
              "text": "ATK 3550+(Shadow HuntingLv x200)%\nRange: 5x5"
            },
            {
              "level": 5,
              "text": "ATK 4300+(Shadow HuntingLv x250)%\nRange: 5x5"
            },
            {
              "level": 6,
              "text": "ATK 5050+(Shadow HuntingLv x300)%\nRange: 7x7"
            },
            {
              "level": 7,
              "text": "ATK 5800+(Shadow HuntingLv x350)%\nRange: 7x7"
            },
            {
              "level": 8,
              "text": "ATK 6550+(Shadow HuntingLv x400)%\nRange: 7x7"
            },
            {
              "level": 9,
              "text": "ATK 7300+(Shadow HuntingLv x450)%\nRange: 7x7"
            },
            {
              "level": 10,
              "text": "ATK 8050+(Shadow HuntingLv x500)%\nRange: 7x7"
            }
          ],
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
                  "value": "42"
                },
                {
                  "level": 3,
                  "value": "47"
                },
                {
                  "level": 4,
                  "value": "52"
                },
                {
                  "level": 5,
                  "value": "57"
                },
                {
                  "level": 6,
                  "value": "62"
                },
                {
                  "level": 7,
                  "value": "67"
                },
                {
                  "level": 8,
                  "value": "72"
                },
                {
                  "level": 9,
                  "value": "77"
                },
                {
                  "level": 10,
                  "value": "82"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5481.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5481",
          "tree": {
            "idx": 18,
            "row": 2,
            "col": 0,
            "columns": 9,
            "requirements": [
              {
                "id": 5480,
                "level": 3,
                "name": "Shadow Hunting",
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
                "value": "Instant Cast"
              },
              {
                "label": "AP Consumed",
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
                      "effect": "ATK 1300+(Shadow HuntingLv x 50)%\nRange: 5 x 5",
                      "sp-cost": "37"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "ATK 2050+(Shadow HuntingLv x 100)%\nRange: 5 x 5",
                      "sp-cost": "42"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "ATK 2800+(Shadow HuntingLv x 150)%\nRange: 5 x 5",
                      "sp-cost": "47"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "ATK 3550+(Shadow HuntingLv x 200)%\nRange: 5 x 5",
                      "sp-cost": "52"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "ATK 4300+(Shadow HuntingLv x 250)%\nRange: 5 x 5",
                      "sp-cost": "57"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "ATK 5050+(Shadow HuntingLv x 300)%\nRange: 7 x 7",
                      "sp-cost": "62"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "ATK 5800+(Shadow HuntingLv x 350)%\nRange: 7 x 7",
                      "sp-cost": "67"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "ATK 6550+(Shadow HuntingLv x 400)%\nRange: 7 x 7",
                      "sp-cost": "72"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "ATK 7300+(Shadow HuntingLv x 450)%\nRange: 7 x 7",
                      "sp-cost": "77"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "ATK 8050+(Shadow HuntingLv x 500)%\nRange: 7 x 7",
                      "sp-cost": "82"
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
              "skillName": "Shadow Dance",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/shiranui/rebalance_2.md",
              "section": "13.2",
              "notes": [
                "Removes variable casting time.",
                "Reduces cooldown from 1 second to 0.5 seconds.",
                "Reduces delay after skill from 0.5 seconds to 0.25 seconds.",
                "Increases SP consumption from 52 to 65 based on level 10.",
                "Increases AP recovery rate from 1 to 2.",
                "Reduces damage from 6500%Atk to 5900%Atk based on level 10."
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
                  "before": "1 second",
                  "after": "0.5 seconds",
                  "scope": "",
                  "source": "Reduces cooldown from 1 second to 0.5 seconds."
                },
                {
                  "label": "Cast Delay",
                  "before": "0.5 seconds",
                  "after": "0.25 seconds",
                  "scope": "",
                  "source": "Reduces delay after skill from 0.5 seconds to 0.25 seconds."
                },
                {
                  "label": "SP Cost",
                  "before": "52",
                  "after": "65",
                  "scope": "Lv 10",
                  "source": "Increases SP consumption from 52 to 65 based on level 10."
                },
                {
                  "label": "AP Generated",
                  "before": "1",
                  "after": "2",
                  "scope": "",
                  "source": "Increases AP recovery rate from 1 to 2."
                },
                {
                  "label": "Damage",
                  "before": "6500%Atk",
                  "after": "5900%Atk",
                  "scope": "Lv 10",
                  "source": "Reduces damage from 6500%Atk to 5900%Atk based on level 10."
                }
              ]
            },
            {
              "skillName": "Shadow Dance",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/shiranui/rebalance_3.md",
              "section": "13.2",
              "notes": [
                "Reduces skill cooldown from 0.5 seconds to 0.4 seconds.",
                "Increases SP consumption from 65 to 82 based on level 10.",
                "Reduces area of effect from 9 x 9 cells to 7 x 7 cells based on level 10.",
                "Increases base damage from 5900%Atk to 8050%Atk based on level 10."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "0.5 seconds",
                  "after": "0.4 seconds",
                  "scope": "",
                  "source": "Reduces skill cooldown from 0.5 seconds to 0.4 seconds."
                },
                {
                  "label": "SP Cost",
                  "before": "65",
                  "after": "82",
                  "scope": "Lv 10",
                  "source": "Increases SP consumption from 65 to 82 based on level 10."
                },
                {
                  "label": "Area of Effect",
                  "before": "9 x 9 cells",
                  "after": "7 x 7 cells",
                  "scope": "Lv 10",
                  "source": "Reduces area of effect from 9 x 9 cells to 7 x 7 cells based on level 10."
                },
                {
                  "label": "Damage",
                  "before": "5900%Atk",
                  "after": "8050%Atk",
                  "scope": "Lv 10",
                  "source": "Increases base damage from 5900%Atk to 8050%Atk based on level 10."
                }
              ]
            },
            {
              "skillName": "Shadow Dance",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/shiranui/rebalance_4.md",
              "section": "14.1",
              "notes": [
                "Increases base damage from 8050+(Shadow Hunting skill level x 500)%Atk to 9750+(Shadow Hunting skill level x 500700)%Atk based on level 10."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "8050+(Shadow Hunting skill level x 500)%Atk",
                  "after": "9750+(Shadow Hunting skill level x 500700)%Atk",
                  "scope": "Lv 10",
                  "source": "Increases base damage from 8050+(Shadow Hunting skill level x 500)%Atk to 9750+(Shadow Hunting skill level x 500700)%Atk based on level 10."
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
          "id": 5490,
          "imageFile": "5490.png",
          "name": "Thundering Cannon",
          "maxLevel": 10,
          "prerequisiteText": "Basic Skill",
          "group": "Active",
          "type": "Magic",
          "target": "Single Target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Throws Haze of North Wind on the ground to summon the powerful wind, inflicts wind property magical damage to the target and surrounding enemies around the target.\nDeals additional damage depends on level of Darkening Cannon user learned, user's base level and SPL.\nConsumes 1 Haze of North Wind.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 1450+(Darkening Cannon Lv x70)%/Range: 5x5"
            },
            {
              "level": 2,
              "text": "MATK 2400+(Darkening Cannon Lv x140)%/Range: 5x5"
            },
            {
              "level": 3,
              "text": "MATK 3350+(Darkening Cannon Lv x210)%/Range: 5x5"
            },
            {
              "level": 4,
              "text": "MATK 4300+(Darkening Cannon Lv x280)%/Range: 5x5"
            },
            {
              "level": 5,
              "text": "MATK 5250+(Darkening Cannon Lv x350)%/Range: 5x5"
            },
            {
              "level": 6,
              "text": "MATK 6200+(Darkening Cannon Lv x420)%/Range: 7x7"
            },
            {
              "level": 7,
              "text": "MATK 7150+(Darkening Cannon Lv x490)%/Range: 7x7"
            },
            {
              "level": 8,
              "text": "MATK 8100+(Darkening Cannon Lv x560)%/Range: 7x7"
            },
            {
              "level": 9,
              "text": "MATK 9050+(Darkening Cannon Lv x630)%/Range: 7x7"
            },
            {
              "level": 10,
              "text": "MATK 10000+(Darkening Cannon Lv x700)%/Range: 7x7"
            }
          ],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "53"
                },
                {
                  "level": 2,
                  "value": "56"
                },
                {
                  "level": 3,
                  "value": "59"
                },
                {
                  "level": 4,
                  "value": "62"
                },
                {
                  "level": 5,
                  "value": "65"
                },
                {
                  "level": 6,
                  "value": "68"
                },
                {
                  "level": 7,
                  "value": "71"
                },
                {
                  "level": 8,
                  "value": "74"
                },
                {
                  "level": 9,
                  "value": "77"
                },
                {
                  "level": 10,
                  "value": "80"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5490.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5490",
          "tree": {
            "idx": 20,
            "row": 2,
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
                "value": "Single Target"
              },
              {
                "label": "Property",
                "value": "wind property magical damage"
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
                      "effect": "MATK 1450+(Darkening Cannon Lv x 70)%/Range: 5 x 5",
                      "sp-cost": "53"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "MATK 2400+(Darkening Cannon Lv x 140)%/Range: 5 x 5",
                      "sp-cost": "56"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "MATK 3350+(Darkening Cannon Lv x 210)%/Range: 5 x 5",
                      "sp-cost": "59"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "MATK 4300+(Darkening Cannon Lv x 280)%/Range: 5 x 5",
                      "sp-cost": "62"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "MATK 5250+(Darkening Cannon Lv x 350)%/Range: 5 x 5",
                      "sp-cost": "65"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "MATK 6200+(Darkening Cannon Lv x 420)%/Range: 7 x 7",
                      "sp-cost": "68"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "MATK 7150+(Darkening Cannon Lv x 490)%/Range: 7 x 7",
                      "sp-cost": "71"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "MATK 8100+(Darkening Cannon Lv x 560)%/Range: 7 x 7",
                      "sp-cost": "74"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "MATK 9050+(Darkening Cannon Lv x 630)%/Range: 7 x 7",
                      "sp-cost": "77"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "MATK 10000+(Darkening Cannon Lv x 700)%/Range: 7 x 7",
                      "sp-cost": "80"
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
              "skillName": "Thundering Cannon",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/shiranui/rebalance_2.md",
              "section": "13.11",
              "notes": [
                "Reduces fixed casting time from 1.5 seconds to 1 seconds.",
                "Reduces cooldown from 1 second to 0.7 seconds.",
                "Removes 0.5 seconds delay after skill.",
                "Increases SP consumption from 62 to 92 based on level 10.",
                "Increases damage from 6500%Matk to 13600%Matk based on level 10.",
                "Increases factor weight of Darkening Cannon skill level in skill formula from 50 to 70."
              ],
              "specRows": [
                {
                  "label": "Fixed Casting Time",
                  "before": "1.5 seconds",
                  "after": "1 seconds",
                  "scope": "",
                  "source": "Reduces fixed casting time from 1.5 seconds to 1 seconds."
                },
                {
                  "label": "Cooldown",
                  "before": "1 second",
                  "after": "0.7 seconds",
                  "scope": "",
                  "source": "Reduces cooldown from 1 second to 0.7 seconds."
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
                  "before": "62",
                  "after": "92",
                  "scope": "Lv 10",
                  "source": "Increases SP consumption from 62 to 92 based on level 10."
                },
                {
                  "label": "Damage",
                  "before": "6500%Matk",
                  "after": "13600%Matk",
                  "scope": "Lv 10",
                  "source": "Increases damage from 6500%Matk to 13600%Matk based on level 10."
                },
                {
                  "label": "Factor Weight Of Darkening Cannon Skill Level In Skill Formula",
                  "before": "50",
                  "after": "70",
                  "scope": "",
                  "source": "Increases factor weight of Darkening Cannon skill level in skill formula from 50 to 70."
                }
              ]
            },
            {
              "skillName": "Thundering Cannon",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/shiranui/rebalance_3.md",
              "section": "13.8",
              "notes": [
                "Reworks skill to become target skill and also deal damage to surrounding enemies around the target.",
                "Area of effect is 7 x 7 cells based on level 10.",
                "Increases cast range from 1 cell to 9 cells.",
                "Reduces SP consumption from 92 to 80 based on level 10.",
                "Reduces base damage from 13600%Matk to 10000%Matk based on level 10."
              ],
              "specRows": [
                {
                  "label": "Cast Range",
                  "before": "1 cells",
                  "after": "9 cells",
                  "scope": "",
                  "source": "Increases cast range from 1 cell to 9 cells."
                },
                {
                  "label": "SP Cost",
                  "before": "92",
                  "after": "80",
                  "scope": "Lv 10",
                  "source": "Reduces SP consumption from 92 to 80 based on level 10."
                },
                {
                  "label": "Damage",
                  "before": "13600%Matk",
                  "after": "10000%Matk",
                  "scope": "Lv 10",
                  "source": "Reduces base damage from 13600%Matk to 10000%Matk based on level 10."
                }
              ]
            },
            {
              "skillName": "Thundering Cannon",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/shiranui/rebalance_4.md",
              "section": "14.8",
              "notes": [
                "Increases base damage from 10000+(Darkening Cannon skill level x 700)%Matk to 11600+(Darkening Cannon skill level x 700)%Matk based on level 10."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "10000+(Darkening Cannon skill level x 700)%Matk",
                  "after": "11600+(Darkening Cannon skill level x 700)%Matk",
                  "scope": "Lv 10",
                  "source": "Increases base damage from 10000+(Darkening Cannon skill level x 700)%Matk to 11600+(Darkening Cannon skill level x 700)%Matk based on level 10."
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
          "id": 5478,
          "imageFile": "5478.png",
          "name": "Nightmare Erasion",
          "maxLevel": 1,
          "prerequisiteText": "Basic Skill",
          "group": "Active",
          "type": "Supportive",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Removes the nightmare effect granted to targets within a 15x15 range around you.",
          "levelDetails": [],
          "fixedCastTime": "0.2 seconds",
          "variableCastTime": "1 second",
          "castDelay": "0.25 seconds",
          "cooldown": "15 seconds",
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
          "iconUrl": "assets/divine-pride/skills/5478.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5478",
          "tree": {
            "idx": 21,
            "row": 2,
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
                "value": "1"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0.2 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "1 second"
              },
              {
                "label": "Cast Delay",
                "value": "0.25 seconds"
              },
              {
                "label": "Cooldown",
                "value": "15 seconds"
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
          "id": 5487,
          "imageFile": "5487.png",
          "name": "Kunai - Refraction",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "",
          "type": "Ranged physical",
          "target": "Instant cast",
          "recoversAp": "",
          "consumesAp": "",
          "description": "It explodes all [Distortion Zones] installed within a 15x15 range around you, inflicting Ranged physical damage to enemies within a 5x5 Cell range every 0.25 seconds for 2 seconds.\nDamage is additionally increased depending on Kunai-Rotation skill level, caster's base level, and POW.\nThe attack attribute depends on the attribute of the equipped kunai.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Per hit ATK 560+(Kunai RotationLv x10)%"
            },
            {
              "level": 2,
              "text": "Per hit ATK 920+(Kunai RotationLv x20)%"
            },
            {
              "level": 3,
              "text": "Per hit ATK 1280+(Kunai RotationLv x30)%"
            },
            {
              "level": 4,
              "text": "Per hit ATK 1640+(Kunai RotationLv x40)%"
            },
            {
              "level": 5,
              "text": "Per hit ATK 2000+(Kunai RotationLv x50)%"
            },
            {
              "level": 6,
              "text": "Per hit ATK 2360+(Kunai RotationLv x60)%"
            },
            {
              "level": 7,
              "text": "Per hit ATK 2720+(Kunai RotationLv x70)%"
            },
            {
              "level": 8,
              "text": "Per hit ATK 3080+(Kunai RotationLv x80)%"
            },
            {
              "level": 9,
              "text": "Per hit ATK 3440+(Kunai RotationLv x90)%"
            },
            {
              "level": 10,
              "text": "Per hit ATK 3800+(Kunai RotationLv x100)%"
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "1.5 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "2 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "49"
                },
                {
                  "level": 2,
                  "value": "52"
                },
                {
                  "level": 3,
                  "value": "55"
                },
                {
                  "level": 4,
                  "value": "58"
                },
                {
                  "level": 5,
                  "value": "61"
                },
                {
                  "level": 6,
                  "value": "64"
                },
                {
                  "level": 7,
                  "value": "67"
                },
                {
                  "level": 8,
                  "value": "70"
                },
                {
                  "level": 9,
                  "value": "73"
                },
                {
                  "level": 10,
                  "value": "76"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5487.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5487",
          "tree": {
            "idx": 23,
            "row": 2,
            "col": 5,
            "columns": 9,
            "requirements": [
              {
                "id": 5486,
                "level": 5,
                "name": "Kunai - Rotation",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Ranged physical"
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
                "value": "1.5 seconds"
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
                "label": "Target",
                "value": "Instant cast"
              },
              {
                "label": "Pulse",
                "value": "0.25 seconds"
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
                      "effect": "Per hit ATK 560+(Kunai RotationLv x 10)%",
                      "sp-cost": "49"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Per hit ATK 920+(Kunai RotationLv x 20)%",
                      "sp-cost": "52"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Per hit ATK 1280+(Kunai RotationLv x 30)%",
                      "sp-cost": "55"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Per hit ATK 1640+(Kunai RotationLv x 40)%",
                      "sp-cost": "58"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Per hit ATK 2000+(Kunai RotationLv x 50)%",
                      "sp-cost": "61"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "Per hit ATK 2360+(Kunai RotationLv x 60)%",
                      "sp-cost": "64"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "Per hit ATK 2720+(Kunai RotationLv x 70)%",
                      "sp-cost": "67"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "Per hit ATK 3080+(Kunai RotationLv x 80)%",
                      "sp-cost": "70"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "Per hit ATK 3440+(Kunai RotationLv x 90)%",
                      "sp-cost": "73"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "Per hit ATK 3800+(Kunai RotationLv x 100)%",
                      "sp-cost": "76"
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
              "skillName": "Kunai - Refraction",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/shiranui/rebalance_2.md",
              "section": "13.8",
              "notes": [
                "Increases SP consumption from 50 to 76 based on level 10.",
                "Increases factor weight of Kunai - Rotation skill level in skill formula from 5 to 10."
              ],
              "specRows": [
                {
                  "label": "SP Cost",
                  "before": "50",
                  "after": "76",
                  "scope": "Lv 10",
                  "source": "Increases SP consumption from 50 to 76 based on level 10."
                },
                {
                  "label": "Factor Weight Of Kunai - Rotation Skill Level In Skill Formula",
                  "before": "5",
                  "after": "10",
                  "scope": "",
                  "source": "Increases factor weight of Kunai - Rotation skill level in skill formula from 5 to 10."
                }
              ]
            },
            {
              "skillName": "Kunai - Refraction",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/shiranui/rebalance_4.md",
              "section": "14.5",
              "notes": [
                "Increases base damage from 3800+(Kunai - Rotation skill level x 100)%Atk to 4450+(Kunai - Rotation skill level x 100)%Atk based on level 10."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "3800+(Kunai - Rotation skill level x 100)%Atk",
                  "after": "4450+(Kunai - Rotation skill level x 100)%Atk",
                  "scope": "Lv 10",
                  "source": "Increases base damage from 3800+(Kunai - Rotation skill level x 100)%Atk to 4450+(Kunai - Rotation skill level x 100)%Atk based on level 10."
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
          "id": 5484,
          "imageFile": "5484.png",
          "name": "Huuma Shuriken - Construct",
          "maxLevel": 10,
          "prerequisiteText": "Huuma Shuriken - Grasp 5",
          "group": "Active",
          "type": "Range Physical",
          "target": "1 Cell Ground Target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Throws a H.Shuriken imbued with powerful energy, dealing Range Physical damage to enemies within a 9x9 range around the targeted cell.\nIf a [Hidden Weapon Zone] exists within the effect range, it will explode, dealing additional Range Physical damage in a 9x9 range centered on that location.\nDeals additional damage depends on level of H.S. - Grasp learned, base level and POW. Attack properties depend on the properties of the equipped kunai.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 1800+(H.S. - Grasp Lv x30)%\nATK(Explosion) 2100+(H.S. - Grasp Lv x30)%"
            },
            {
              "level": 2,
              "text": "ATK 3000+(H.S. - Grasp Lv x60)%\nATK(Explosion) 3600+(H.S. - Grasp Lv x60)%"
            },
            {
              "level": 3,
              "text": "ATK 4200+(H.S. - Grasp Lv x90)%\nATK(Explosion) 5100+(H.S. - Grasp Lv x90)%"
            },
            {
              "level": 4,
              "text": "ATK 5400+(H.S. - Grasp Lv x120)%\nATK(Explosion) 6600+(H.S. - Grasp Lv x120)%"
            },
            {
              "level": 5,
              "text": "ATK 6600+(H.S. - Grasp Lv x150)%\nATK(Explosion) 8100+(H.S. - Grasp Lv x150)%"
            },
            {
              "level": 6,
              "text": "ATK 7800+(H.S. - Grasp Lv x180)%\nATK(Explosion) 9600+(H.S. - Grasp Lv x180)%"
            },
            {
              "level": 7,
              "text": "ATK 9000+(H.S. - Grasp Lv x210)%\nATK(Explosion) 11100+(H.S. - Grasp Lv x210)%"
            },
            {
              "level": 8,
              "text": "ATK 10200+(H.S. - Grasp Lv x240)%\nATK(Explosion) 12600+(H.S. - Grasp Lv x240)%"
            },
            {
              "level": 9,
              "text": "ATK 11400+(H.S. - Grasp Lv x270)%\nATK(Explosion) 14100+(H.S. - Grasp Lv x270)%"
            },
            {
              "level": 10,
              "text": "ATK 12600+(H.S. - Grasp Lv x300)%\nATK(Explosion) 15600+(H.S. - Grasp Lv x300)%"
            }
          ],
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
                },
                {
                  "level": 6,
                  "value": "49"
                },
                {
                  "level": 7,
                  "value": "53"
                },
                {
                  "level": 8,
                  "value": "57"
                },
                {
                  "level": 9,
                  "value": "61"
                },
                {
                  "level": 10,
                  "value": "65"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5484.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5484",
          "tree": {
            "idx": 24,
            "row": 2,
            "col": 6,
            "columns": 9,
            "requirements": [
              {
                "id": 5483,
                "level": 5,
                "name": "Huuma Shuriken - Grasp",
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
                "value": "1 Cell Ground Target"
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
                      "effect": "ATK 1800+(H.S. - Grasp Lv x 30)%\nATK(E x plosion) 2100+(H.S. - Grasp Lv x 30)%",
                      "sp-cost": "29"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "ATK 3000+(H.S. - Grasp Lv x 60)%\nATK(E x plosion) 3600+(H.S. - Grasp Lv x 60)%",
                      "sp-cost": "33"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "ATK 4200+(H.S. - Grasp Lv x 90)%\nATK(E x plosion) 5100+(H.S. - Grasp Lv x 90)%",
                      "sp-cost": "37"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "ATK 5400+(H.S. - Grasp Lv x 120)%\nATK(E x plosion) 6600+(H.S. - Grasp Lv x 120)%",
                      "sp-cost": "41"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "ATK 6600+(H.S. - Grasp Lv x 150)%\nATK(E x plosion) 8100+(H.S. - Grasp Lv x 150)%",
                      "sp-cost": "45"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "ATK 7800+(H.S. - Grasp Lv x 180)%\nATK(E x plosion) 9600+(H.S. - Grasp Lv x 180)%",
                      "sp-cost": "49"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "ATK 9000+(H.S. - Grasp Lv x 210)%\nATK(E x plosion) 11100+(H.S. - Grasp Lv x 210)%",
                      "sp-cost": "53"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "ATK 10200+(H.S. - Grasp Lv x 240)%\nATK(E x plosion) 12600+(H.S. - Grasp Lv x 240)%",
                      "sp-cost": "57"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "ATK 11400+(H.S. - Grasp Lv x 270)%\nATK(E x plosion) 14100+(H.S. - Grasp Lv x 270)%",
                      "sp-cost": "61"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "ATK 12600+(H.S. - Grasp Lv x 300)%\nATK(E x plosion) 15600+(H.S. - Grasp Lv x 300)%",
                      "sp-cost": "65"
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
              "skillName": "Huuma Shuriken - Construct",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/shiranui/rebalance_2.md",
              "section": "13.5",
              "notes": [
                "Increases SP consumption from 64 to 65 based on level 10."
              ],
              "specRows": [
                {
                  "label": "SP Cost",
                  "before": "64",
                  "after": "65",
                  "scope": "Lv 10",
                  "source": "Increases SP consumption from 64 to 65 based on level 10."
                }
              ]
            },
            {
              "skillName": "Huuma Shuriken - Construct",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/shiranui/rebalance_3.md",
              "section": "13.5",
              "notes": [
                "Reworks skill to become ground skill and deal damage to all enemies within 9 x 9 cells around the target cell.",
                "Increases cast range from 1 cell to 9 cells.",
                "Increases base damage from 4600%/6800%(Memorization Zone)Atk to 12600%/15600%(Memorization Zone)Atk based on level 10."
              ],
              "specRows": [
                {
                  "label": "Cast Range",
                  "before": "1 cells",
                  "after": "9 cells",
                  "scope": "",
                  "source": "Increases cast range from 1 cell to 9 cells."
                },
                {
                  "label": "Damage",
                  "before": "4600%/6800%(Memorization Zone)Atk",
                  "after": "12600%/15600%(Memorization Zone)Atk",
                  "scope": "Lv 10",
                  "source": "Increases base damage from 4600%/6800%(Memorization Zone)Atk to 12600%/15600%(Memorization Zone)Atk based on level 10."
                }
              ]
            },
            {
              "skillName": "Huuma Shuriken - Construct",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/shiranui/rebalance_4.md",
              "section": "14.3",
              "notes": [
                "Increases base damage from 12600+(Huuma Shuriken - Grasp level x 300)%/15600+(Huuma Shuriken - Grasp level x 300)%(explosion)Atk to 1590018400+(Huuma Shuriken - Grasp level x 5001000)%/18400+(Huuma Shuriken - Grasp level x 5001000)%(explosion)Atk based on level 10.",
                "Reduces skill cooldown from 1 second to 0.7 seconds."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "12600+(Huuma Shuriken - Grasp level x 300)%/15600+(Huuma Shuriken - Grasp level x 300)%(e x plosion)Atk",
                  "after": "1590018400+(Huuma Shuriken - Grasp level x 5001000)%/18400+(Huuma Shuriken - Grasp level x 5001000)%(e x plosion)Atk",
                  "scope": "Lv 10",
                  "source": "Increases base damage from 12600+(Huuma Shuriken - Grasp level x 300)%/15600+(Huuma Shuriken - Grasp level x 300)%(explosion)Atk to 1590018400+(Huuma Shuriken - Grasp level x 5001000)%/18400+(Huuma Shuriken - Grasp level x 5001000)%(explosion)Atk based on level 10."
                },
                {
                  "label": "Cooldown",
                  "before": "1 second",
                  "after": "0.7 seconds",
                  "scope": "",
                  "source": "Reduces skill cooldown from 1 second to 0.7 seconds."
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
          "id": 5482,
          "imageFile": "5482.png",
          "name": "Shadow Flash",
          "maxLevel": 10,
          "prerequisiteText": "Shadow Dance 5",
          "group": "Active",
          "type": "Melee Physical",
          "target": "Single Target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Fires a powerful shadow sword slash toward the target, dealing Melee Physical damage to all targets within range around the target.\nDamage is additionally increased depending on Shadow Dance skill level, caster's base level, and POW.\nCritical damage is applied based on the user's critical rate,\nThe effectiveness of critical modifier is applied by half.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 2250+(Shadow DanceLv x50)%\nRange: 5x5"
            },
            {
              "level": 2,
              "text": "ATK 3000+(Shadow DanceLv x100)%\nRange: 5x5"
            },
            {
              "level": 3,
              "text": "ATK 3750+(Shadow DanceLv x150)%\nRange: 5x5"
            },
            {
              "level": 4,
              "text": "ATK 4500+(Shadow DanceLv x200)%\nRange: 5x5"
            },
            {
              "level": 5,
              "text": "ATK 5250+(Shadow DanceLv x250)%\nRange: 5x5"
            },
            {
              "level": 6,
              "text": "ATK 6000+(Shadow DanceLv x300)%\nRange: 7x7"
            },
            {
              "level": 7,
              "text": "ATK 6750+(Shadow DanceLv x350)%\nRange: 7x7"
            },
            {
              "level": 8,
              "text": "ATK 7500+(Shadow DanceLv x400)%\nRange: 7x7"
            },
            {
              "level": 9,
              "text": "ATK 8250+(Shadow DanceLv x450)%\nRange: 7x7"
            },
            {
              "level": 10,
              "text": "ATK 9000+(Shadow DanceLv x500)%\nRange: 7x7"
            }
          ],
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
                  "value": "39"
                },
                {
                  "level": 3,
                  "value": "42"
                },
                {
                  "level": 4,
                  "value": "45"
                },
                {
                  "level": 5,
                  "value": "48"
                },
                {
                  "level": 6,
                  "value": "51"
                },
                {
                  "level": 7,
                  "value": "54"
                },
                {
                  "level": 8,
                  "value": "57"
                },
                {
                  "level": 9,
                  "value": "60"
                },
                {
                  "level": 10,
                  "value": "63"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5482.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5482",
          "tree": {
            "idx": 25,
            "row": 2,
            "col": 7,
            "columns": 9,
            "requirements": [
              {
                "id": 5481,
                "level": 5,
                "name": "Shadow Dance",
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
                "value": "Single Target"
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
                      "effect": "ATK 2250+(Shadow DanceLv x 50)%\nRange: 5 x 5",
                      "sp-cost": "36"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "ATK 3000+(Shadow DanceLv x 100)%\nRange: 5 x 5",
                      "sp-cost": "39"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "ATK 3750+(Shadow DanceLv x 150)%\nRange: 5 x 5",
                      "sp-cost": "42"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "ATK 4500+(Shadow DanceLv x 200)%\nRange: 5 x 5",
                      "sp-cost": "45"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "ATK 5250+(Shadow DanceLv x 250)%\nRange: 5 x 5",
                      "sp-cost": "48"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "ATK 6000+(Shadow DanceLv x 300)%\nRange: 7 x 7",
                      "sp-cost": "51"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "ATK 6750+(Shadow DanceLv x 350)%\nRange: 7 x 7",
                      "sp-cost": "54"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "ATK 7500+(Shadow DanceLv x 400)%\nRange: 7 x 7",
                      "sp-cost": "57"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "ATK 8250+(Shadow DanceLv x 450)%\nRange: 7 x 7",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "ATK 9000+(Shadow DanceLv x 500)%\nRange: 7 x 7",
                      "sp-cost": "63"
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
              "skillName": "Shadow Flash",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/shiranui/rebalance_2.md",
              "section": "13.3",
              "notes": [
                "Removes 0.5 seconds fixed casting time.",
                "Removes 1 second variable casting time.",
                "Reduces cooldown from 1 second to 0.5 seconds.",
                "Reduces damage from 9700%Atk to 8600%Atk based on level 10."
              ],
              "specRows": [
                {
                  "label": "0.5 Seconds Fixed Casting Time",
                  "before": "0.5 seconds fi x ed casting time",
                  "after": "Removed",
                  "scope": "",
                  "source": "Removes 0.5 seconds fixed casting time."
                },
                {
                  "label": "1 Second Variable Casting Time",
                  "before": "1 second variable casting time",
                  "after": "Removed",
                  "scope": "",
                  "source": "Removes 1 second variable casting time."
                },
                {
                  "label": "Cooldown",
                  "before": "1 second",
                  "after": "0.5 seconds",
                  "scope": "",
                  "source": "Reduces cooldown from 1 second to 0.5 seconds."
                },
                {
                  "label": "Damage",
                  "before": "9700%Atk",
                  "after": "8600%Atk",
                  "scope": "Lv 10",
                  "source": "Reduces damage from 9700%Atk to 8600%Atk based on level 10."
                }
              ]
            },
            {
              "skillName": "Shadow Flash",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/shiranui/rebalance_3.md",
              "section": "13.3",
              "notes": [
                "Reworks skill to become target skill and also deal damage to surrounding enemies around the target.",
                "Area of effect is 7 x 7 cells based on level 10.",
                "Applies critical damage, the critical chance is the user's Cri.",
                "No longer be cast by clones from Mirage.",
                "Increases cast range from 1 cell to 2 cells.",
                "Increases base damage from 8600%Atk to 9000%Atk based on level 10.",
                "Reduces factor weight of Shadow Dance skill level in skill formula from 1000 to 500 based on level 10."
              ],
              "specRows": [
                {
                  "label": "Cast Range",
                  "before": "1 cells",
                  "after": "2 cells",
                  "scope": "",
                  "source": "Increases cast range from 1 cell to 2 cells."
                },
                {
                  "label": "Damage",
                  "before": "8600%Atk",
                  "after": "9000%Atk",
                  "scope": "Lv 10",
                  "source": "Increases base damage from 8600%Atk to 9000%Atk based on level 10."
                },
                {
                  "label": "Factor Weight Of Shadow Dance Skill Level In Skill Formula",
                  "before": "1000",
                  "after": "500",
                  "scope": "Lv 10",
                  "source": "Reduces factor weight of Shadow Dance skill level in skill formula from 1000 to 500 based on level 10."
                }
              ]
            },
            {
              "skillName": "Shadow Flash",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/shiranui/rebalance_4.md",
              "section": "14.2",
              "notes": [
                "Increases base damage from 9000+(Shadow Dance skill level x 500)%Atk to 11000+(Shadow Dance skill level x 10001500)%Atk based on level 10."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "9000+(Shadow Dance skill level x 500)%Atk",
                  "after": "11000+(Shadow Dance skill level x 10001500)%Atk",
                  "scope": "Lv 10",
                  "source": "Increases base damage from 9000+(Shadow Dance skill level x 500)%Atk to 11000+(Shadow Dance skill level x 10001500)%Atk based on level 10."
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
          "id": 5491,
          "imageFile": "5491.png",
          "name": "Golden Dragon Cannon",
          "maxLevel": 10,
          "prerequisiteText": "Basic Skill",
          "group": "Active",
          "type": "Magic",
          "target": "Single Target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Blows a haze of earth and inflicts earth magic damage to surrounding enemies.\nDeals additional damage depends on level of Darkening Cannon user learned, user's base level and SPL.\nConsumes 1 Haze of The Earth.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 1400+(Darkening Cannon Lv x15)%/Range: 3x3"
            },
            {
              "level": 2,
              "text": "MATK 2350+(Darkening Cannon Lv x30)%/Range: 3x3"
            },
            {
              "level": 3,
              "text": "MATK 3300+(Darkening Cannon Lv x45)%/Range: 3x3"
            },
            {
              "level": 4,
              "text": "MATK 4250+(Darkening Cannon Lv x60)%/Range: 3x3"
            },
            {
              "level": 5,
              "text": "MATK 5200+(Darkening Cannon Lv x75)%/Range: 3x3"
            },
            {
              "level": 6,
              "text": "MATK 6150+(Darkening Cannon Lv x90)%/Range: 5x5"
            },
            {
              "level": 7,
              "text": "MATK 7100+(Darkening Cannon Lv x105)%/Range: 5x5"
            },
            {
              "level": 8,
              "text": "MATK 8050+(Darkening Cannon Lv x120)%/Range: 5x5"
            },
            {
              "level": 9,
              "text": "MATK 9000+(Darkening Cannon Lv x135)%/Range: 5x5"
            },
            {
              "level": 10,
              "text": "MATK 9950+(Darkening Cannon Lv x150)%/Range: 5x5"
            }
          ],
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5491.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5491",
          "tree": {
            "idx": 27,
            "row": 3,
            "col": 0,
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
                "value": "Single Target"
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
                      "effect": "MATK 1400+(Darkening Cannon Lv x 15)%/Range: 3 x 3",
                      "sp-cost": "47"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "MATK 2350+(Darkening Cannon Lv x 30)%/Range: 3 x 3",
                      "sp-cost": "49"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "MATK 3300+(Darkening Cannon Lv x 45)%/Range: 3 x 3",
                      "sp-cost": "51"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "MATK 4250+(Darkening Cannon Lv x 60)%/Range: 3 x 3",
                      "sp-cost": "53"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "MATK 5200+(Darkening Cannon Lv x 75)%/Range: 3 x 3",
                      "sp-cost": "55"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "MATK 6150+(Darkening Cannon Lv x 90)%/Range: 5 x 5",
                      "sp-cost": "57"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "MATK 7100+(Darkening Cannon Lv x 105)%/Range: 5 x 5",
                      "sp-cost": "59"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "MATK 8050+(Darkening Cannon Lv x 120)%/Range: 5 x 5",
                      "sp-cost": "61"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "MATK 9000+(Darkening Cannon Lv x 135)%/Range: 5 x 5",
                      "sp-cost": "63"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "MATK 9950+(Darkening Cannon Lv x 150)%/Range: 5 x 5",
                      "sp-cost": "65"
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
              "skillName": "Golden Dragon Cannon",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/shiranui/rebalance_2.md",
              "section": "13.12",
              "notes": [
                "Reduces fixed casting time from 1.5 seconds to 1 seconds.",
                "Removes 0.5 seconds delay after skill.",
                "Increases SP consumption from 48 to 88 based on level 10.",
                "Increases damage from 2350%Matk to 4300%Matk based on level 10.",
                "Increases factor weight of Darkening Cannon skill level in skill formula from 7 to 15."
              ],
              "specRows": [
                {
                  "label": "Fixed Casting Time",
                  "before": "1.5 seconds",
                  "after": "1 seconds",
                  "scope": "",
                  "source": "Reduces fixed casting time from 1.5 seconds to 1 seconds."
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
                  "before": "48",
                  "after": "88",
                  "scope": "Lv 10",
                  "source": "Increases SP consumption from 48 to 88 based on level 10."
                },
                {
                  "label": "Damage",
                  "before": "2350%Matk",
                  "after": "4300%Matk",
                  "scope": "Lv 10",
                  "source": "Increases damage from 2350%Matk to 4300%Matk based on level 10."
                },
                {
                  "label": "Factor Weight Of Darkening Cannon Skill Level In Skill Formula",
                  "before": "7",
                  "after": "15",
                  "scope": "",
                  "source": "Increases factor weight of Darkening Cannon skill level in skill formula from 7 to 15."
                }
              ]
            },
            {
              "skillName": "Golden Dragon Cannon",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/shiranui/rebalance_3.md",
              "section": "13.9",
              "notes": [
                "Reworks skill to become target skill and also deal damage to surrounding enemies around the target.",
                "Area of effect is 5 x 5 cells based on level 10.",
                "Reduces cast range from 13 cell to 9 cells.",
                "Reduces SP consumption from 88 to 65 based on level 10.",
                "Increases base damage from 4300%Matk to 9950%Matk based on level 10."
              ],
              "specRows": [
                {
                  "label": "Cast Range",
                  "before": "13 cells",
                  "after": "9 cells",
                  "scope": "",
                  "source": "Reduces cast range from 13 cell to 9 cells."
                },
                {
                  "label": "SP Cost",
                  "before": "88",
                  "after": "65",
                  "scope": "Lv 10",
                  "source": "Reduces SP consumption from 88 to 65 based on level 10."
                },
                {
                  "label": "Damage",
                  "before": "4300%Matk",
                  "after": "9950%Matk",
                  "scope": "Lv 10",
                  "source": "Increases base damage from 4300%Matk to 9950%Matk based on level 10."
                }
              ]
            },
            {
              "skillName": "Golden Dragon Cannon",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/shiranui/rebalance_4.md",
              "section": "14.9",
              "notes": [
                "Increases base damage from 9950+(Darkening Cannon skill level x 150)%Matk to 15800+(Darkening Cannon skill level x 150)%Matk based on level 10."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "9950+(Darkening Cannon skill level x 150)%Matk",
                  "after": "15800+(Darkening Cannon skill level x 150)%Matk",
                  "scope": "Lv 10",
                  "source": "Increases base damage from 9950+(Darkening Cannon skill level x 150)%Matk to 15800+(Darkening Cannon skill level x 150)%Matk based on level 10."
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
          "id": 5494,
          "imageFile": "5494.png",
          "name": "Kunai - Nightmare",
          "maxLevel": 1,
          "prerequisiteText": "basic skill",
          "group": "",
          "type": "Ranged physical",
          "target": "Instant cast",
          "recoversAp": "",
          "consumesAp": "20",
          "description": "Disperses numerous hidden weapons to all enemies within a 13x13 cell range, inflicting powerful long range physical damage.\nDeals 1.5x damage to targets affected by the nightmare effect (the nightmare effect is removed).\nDamage increases additionally based on the caster's base level and POW.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 18000%"
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "2 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "1 second",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "70"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5494.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5494",
          "tree": {
            "idx": 30,
            "row": 3,
            "col": 3,
            "columns": 9,
            "requirements": [
              {
                "id": 5479,
                "level": 1,
                "name": "Mirage",
                "visible": true
              },
              {
                "id": 5485,
                "level": 5,
                "name": "Kunai - Distortion",
                "visible": true
              },
              {
                "id": 5486,
                "level": 5,
                "name": "Kunai - Rotation",
                "visible": true
              },
              {
                "id": 5487,
                "level": 5,
                "name": "Kunai - Refraction",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Ranged physical"
              },
              {
                "label": "Levels",
                "value": "1"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0.5 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "2 seconds"
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
                "value": "Instant cast"
              },
              {
                "label": "AP Consumed",
                "value": "20"
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
                      "base-damage-atk": "18000%",
                      "sp-cost": "70"
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
              "skillName": "Kunai - Nightmare",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/shiranui/rebalance_2.md",
              "section": "13.15",
              "notes": [
                "Reduces cooldown from 5 seconds to 1 second.",
                "Reduces AP consumption from 30 to 20.",
                "Increases damage from 15000%Atk to 18000%Atk."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "5 seconds",
                  "after": "1 second",
                  "scope": "",
                  "source": "Reduces cooldown from 5 seconds to 1 second."
                },
                {
                  "label": "AP Consumed",
                  "before": "30",
                  "after": "20",
                  "scope": "",
                  "source": "Reduces AP consumption from 30 to 20."
                },
                {
                  "label": "Damage",
                  "before": "15000%Atk",
                  "after": "18000%Atk",
                  "scope": "",
                  "source": "Increases damage from 15000%Atk to 18000%Atk."
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
          "id": 5493,
          "imageFile": "5493.png",
          "name": "Shadow - Nightmare",
          "maxLevel": 1,
          "prerequisiteText": "basic skill",
          "group": "",
          "type": "Melee Physics",
          "target": "Instant cast",
          "recoversAp": "",
          "consumesAp": "20",
          "description": "Inflicts powerful Melee Physics damage to all enemies within a 13x13Cell range by casting shadows on them.\nDeals 1.5x damage to targets affected by the nightmare effect (the nightmare effect is removed).\nDamage increases additionally based on the caster's base level and POW.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 18000%"
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "2 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "1 second",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "70"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5493.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5493",
          "tree": {
            "idx": 32,
            "row": 3,
            "col": 5,
            "columns": 9,
            "requirements": [
              {
                "id": 5479,
                "level": 1,
                "name": "Mirage",
                "visible": true
              },
              {
                "id": 5482,
                "level": 7,
                "name": "Shadow Flash",
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
                "value": "1"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0.5 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "2 seconds"
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
                "value": "Instant cast"
              },
              {
                "label": "AP Consumed",
                "value": "20"
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
                      "base-damage-atk": "18000%",
                      "sp-cost": "70"
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
              "skillName": "Shadow - Nightmare",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/shiranui/rebalance_2.md",
              "section": "13.14",
              "notes": [
                "Reduces cooldown from 5 seconds to 1 second.",
                "Reduces AP consumption from 30 to 20.",
                "Increases damage from 15000%Atk to 18000%Atk."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "5 seconds",
                  "after": "1 second",
                  "scope": "",
                  "source": "Reduces cooldown from 5 seconds to 1 second."
                },
                {
                  "label": "AP Consumed",
                  "before": "30",
                  "after": "20",
                  "scope": "",
                  "source": "Reduces AP consumption from 30 to 20."
                },
                {
                  "label": "Damage",
                  "before": "15000%Atk",
                  "after": "18000%Atk",
                  "scope": "",
                  "source": "Increases damage from 15000%Atk to 18000%Atk."
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
          "id": 5492,
          "imageFile": "5492.png",
          "name": "Darkening Cannon",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "",
          "type": "Magic",
          "target": "Instant cast",
          "recoversAp": "2",
          "consumesAp": "",
          "description": "Connects his own shadow to a pitch-black haze and swings it around, dealing dark attribute Magic damage to all enemies within a surrounding range and inflicting the Nightmare effect for 5 seconds.\nDamage increases further based on the caster's base level and SPL.\nConsumes 1 Haze of Pitch Darkness.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 1400% /range : 5x5Cell"
            },
            {
              "level": 2,
              "text": "MATK 2350% /range : 5x5Cell"
            },
            {
              "level": 3,
              "text": "MATK 3300% /range : 5x5Cell"
            },
            {
              "level": 4,
              "text": "MATK 4250% /range : 5x5Cell"
            },
            {
              "level": 5,
              "text": "MATK 5200% /range : 5x5Cell"
            },
            {
              "level": 6,
              "text": "MATK 6150% /range : 7x7Cell"
            },
            {
              "level": 7,
              "text": "MATK 7100% /range : 7x7Cell"
            },
            {
              "level": 8,
              "text": "MATK 8050% /range : 7x7Cell"
            },
            {
              "level": 9,
              "text": "MATK 9000% /range : 7x7Cell"
            },
            {
              "level": 10,
              "text": "MATK 9950% /range : 7x7Cell"
            }
          ],
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
                  "value": "46"
                },
                {
                  "level": 3,
                  "value": "52"
                },
                {
                  "level": 4,
                  "value": "58"
                },
                {
                  "level": 5,
                  "value": "64"
                },
                {
                  "level": 6,
                  "value": "70"
                },
                {
                  "level": 7,
                  "value": "76"
                },
                {
                  "level": 8,
                  "value": "82"
                },
                {
                  "level": 9,
                  "value": "88"
                },
                {
                  "level": 10,
                  "value": "94"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5492.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5492",
          "tree": {
            "idx": 34,
            "row": 3,
            "col": 7,
            "columns": 9,
            "requirements": []
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Magic"
              },
              {
                "label": "Levels",
                "value": "10"
              },
              {
                "label": "Target",
                "value": "Instant cast"
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
                    "id": "base-damage-matk",
                    "label": "Base Damage (MATK)"
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
                      "area-of-effect": "5x5",
                      "base-damage-matk": "1400%",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk": "2350%",
                      "sp-cost": "46"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk": "3300%",
                      "sp-cost": "52"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk": "4250%",
                      "sp-cost": "58"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk": "5200%",
                      "sp-cost": "64"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk": "6150%",
                      "sp-cost": "70"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk": "7100%",
                      "sp-cost": "76"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk": "8050%",
                      "sp-cost": "82"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk": "9000%",
                      "sp-cost": "88"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk": "9950%",
                      "sp-cost": "94"
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
              "skillName": "Darkening Cannon",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/shiranui/rebalance_2.md",
              "section": "13.13",
              "notes": [
                "Reduces fixed casting time from 1.5 seconds to 1 seconds.",
                "Removes 0.5 seconds delay after skill.",
                "Increases SP consumption from 58 to 94 based on level 10.",
                "Increases damage from 5400%Matk to 9950%Matk based on level 10."
              ],
              "specRows": [
                {
                  "label": "Fixed Casting Time",
                  "before": "1.5 seconds",
                  "after": "1 seconds",
                  "scope": "",
                  "source": "Reduces fixed casting time from 1.5 seconds to 1 seconds."
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
                  "before": "58",
                  "after": "94",
                  "scope": "Lv 10",
                  "source": "Increases SP consumption from 58 to 94 based on level 10."
                },
                {
                  "label": "Damage",
                  "before": "5400%Matk",
                  "after": "9950%Matk",
                  "scope": "Lv 10",
                  "source": "Increases damage from 5400%Matk to 9950%Matk based on level 10."
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
          "id": 5495,
          "imageFile": "5495.png",
          "name": "Dark Dragon - Nightmare",
          "maxLevel": 1,
          "prerequisiteText": "basic skill",
          "group": "",
          "type": "Magic",
          "target": "Instant cast",
          "recoversAp": "",
          "consumesAp": "20",
          "description": "Summons a shadow dragon in an 11x11 cell range around you, dealing powerful dark attribute Magic damage.\nDeals additional fire attribute Magic damage of the same power to targets affected by the Nightmare effect (the Nightmare effect is removed).\nDamage increases further based on the caster's base level and SPL.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 15500%"
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "2 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "1 second",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "120"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5495.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5495",
          "tree": {
            "idx": 41,
            "row": 4,
            "col": 5,
            "columns": 9,
            "requirements": [
              {
                "id": 5479,
                "level": 1,
                "name": "Mirage",
                "visible": true
              },
              {
                "id": 5488,
                "level": 5,
                "name": "Red Flame Cannon",
                "visible": true
              },
              {
                "id": 5489,
                "level": 5,
                "name": "Cold Blooded Cannon",
                "visible": true
              },
              {
                "id": 5490,
                "level": 5,
                "name": "Thundering Cannon",
                "visible": true
              },
              {
                "id": 5491,
                "level": 5,
                "name": "Golden Dragon Cannon",
                "visible": true
              },
              {
                "id": 5492,
                "level": 5,
                "name": "Darkening Cannon",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Magic"
              },
              {
                "label": "Levels",
                "value": "1"
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
                "value": "0.5 seconds"
              },
              {
                "label": "Cooldown",
                "value": "1 second"
              },
              {
                "label": "Target",
                "value": "Instant cast"
              },
              {
                "label": "AP Consumed",
                "value": "20"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "base-damage-matk",
                    "label": "Base Damage (MATK)"
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
                      "base-damage-matk": "15500%",
                      "sp-cost": "120"
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
              "skillName": "Dark Dragon - Nightmare",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/shiranui/rebalance_2.md",
              "section": "13.16",
              "notes": [
                "Reduces fixed casting time from 1.5 seconds to 1 seconds.",
                "Reduces cooldown from 5 seconds to 1 second.",
                "Reduces AP consumption from 30 to 20.",
                "Increases damage from 12000%Matk to 15500%Matk."
              ],
              "specRows": [
                {
                  "label": "Fixed Casting Time",
                  "before": "1.5 seconds",
                  "after": "1 seconds",
                  "scope": "",
                  "source": "Reduces fixed casting time from 1.5 seconds to 1 seconds."
                },
                {
                  "label": "Cooldown",
                  "before": "5 seconds",
                  "after": "1 second",
                  "scope": "",
                  "source": "Reduces cooldown from 5 seconds to 1 second."
                },
                {
                  "label": "AP Consumed",
                  "before": "30",
                  "after": "20",
                  "scope": "",
                  "source": "Reduces AP consumption from 30 to 20."
                },
                {
                  "label": "Damage",
                  "before": "12000%Matk",
                  "after": "15500%Matk",
                  "scope": "",
                  "source": "Increases damage from 12000%Matk to 15500%Matk."
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
      "label": "Oboro",
      "pointLimit": 69,
      "tree": {
        "columns": 9,
        "rows": 5
      },
      "skills": [
        {
          "id": 3001,
          "imageFile": "3001.png",
          "name": "Shadow Hiding",
          "maxLevel": 1,
          "prerequisiteText": "Shadow Slash Lv. 5",
          "group": "",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Enables you to hide yourself. Basically the same as Thief's Hiding skill.\nThe skill is canceled if your SP reaches 0 or if you cast it again. Shadow Hiding continuously consumes\nSP for its duration.",
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
          "iconUrl": "assets/divine-pride/skills/3001.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/3001",
          "tree": {
            "idx": 0,
            "row": 0,
            "col": 0,
            "columns": 9,
            "requirements": [
              {
                "id": 530,
                "level": 5,
                "name": "Shadow Slash",
                "visible": false
              }
            ]
          },
          "details": {
            "rows": [
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
          "id": 3012,
          "imageFile": "3012.png",
          "name": "Illusion - Shadow",
          "maxLevel": 5,
          "prerequisiteText": "Cicada Skin Shed Lv. 1",
          "group": "",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Create a likeness of you using illusion. This clone has a certain amount of HP and disappears if its HP reaches 0.\nThe higher your MaxSP, the more your clone's HP.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Clone HP: 6,000"
            },
            {
              "level": 2,
              "text": "Clone HP: 9,000"
            },
            {
              "level": 3,
              "text": "Clone HP: 12,000"
            },
            {
              "level": 4,
              "text": "Clone HP: 15,000"
            },
            {
              "level": 5,
              "text": "Clone HP: 18,000"
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
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "27000"
                },
                {
                  "level": 2,
                  "value": "24000"
                },
                {
                  "level": 3,
                  "value": "21000"
                },
                {
                  "level": 4,
                  "value": "18000"
                },
                {
                  "level": 5,
                  "value": "15000"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/3012.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/3012",
          "tree": {
            "idx": 1,
            "row": 0,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 531,
                "level": 1,
                "name": "Cicada Skin Shed",
                "visible": false
              }
            ]
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
                "value": "1 second"
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
                      "effect": "Clone HP: 6,000",
                      "sp-cost": "40",
                      "data-1": "27000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Clone HP: 9,000",
                      "sp-cost": "44",
                      "data-1": "24000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Clone HP: 12,000",
                      "sp-cost": "48",
                      "data-1": "21000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Clone HP: 15,000",
                      "sp-cost": "52",
                      "data-1": "18000"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Clone HP: 18,000",
                      "sp-cost": "56",
                      "data-1": "15000"
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
          "id": 3021,
          "imageFile": "3021.png",
          "name": "Illusion - Bewitch",
          "maxLevel": 5,
          "prerequisiteText": "Cicada Skin Shed Lv. 1",
          "group": "",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Switch places with a target. This skill creates a chance of [Confusing] you and your target.",
          "levelDetails": [],
          "fixedCastTime": "0 seconds",
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
              "label": "Data 1",
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
          "iconUrl": "assets/divine-pride/skills/3021.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/3021",
          "tree": {
            "idx": 2,
            "row": 0,
            "col": 2,
            "columns": 9,
            "requirements": [
              {
                "id": 531,
                "level": 1,
                "name": "Cicada Skin Shed",
                "visible": false
              }
            ]
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
                "label": "Cast Delay",
                "value": "1 second"
              },
              {
                "label": "Cooldown",
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
                      "sp-cost": "40",
                      "range": "5 cells",
                      "data-1": "50"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "44",
                      "range": "6 cells",
                      "data-1": "55"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "48",
                      "range": "7 cells",
                      "data-1": "60"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "52",
                      "range": "8 cells",
                      "data-1": "65"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "56",
                      "range": "9 cells",
                      "data-1": "70"
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
          "id": 3013,
          "imageFile": "3013.png",
          "name": "Illusion - Shock",
          "maxLevel": 5,
          "prerequisiteText": "Illusion - Bewitch Lv. 2",
          "group": "",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Cast Illusion on 1 target, turning it into a monster with decreased stats.\nDuring this skill's effect, the target can't switch or remove equipment. Not applicable to allies or monsters.\nFor WoE only",
          "levelDetails": [
            {
              "level": 1,
              "text": "All stats -2 to 3"
            },
            {
              "level": 2,
              "text": "All stats -4 to 6"
            },
            {
              "level": 3,
              "text": "All stats -6 to 9"
            },
            {
              "level": 4,
              "text": "All stats -8 to 12"
            },
            {
              "level": 5,
              "text": "All stats -10 to 15"
            }
          ],
          "fixedCastTime": "0 seconds",
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
                  "value": "12000"
                },
                {
                  "level": 2,
                  "value": "14000"
                },
                {
                  "level": 3,
                  "value": "16000"
                },
                {
                  "level": 4,
                  "value": "18000"
                },
                {
                  "level": 5,
                  "value": "20000"
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
          "iconUrl": "assets/divine-pride/skills/3013.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/3013",
          "tree": {
            "idx": 3,
            "row": 0,
            "col": 3,
            "columns": 9,
            "requirements": [
              {
                "id": 3021,
                "level": 2,
                "name": "Illusion - Bewitch",
                "visible": true
              }
            ]
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
                "label": "Cast Delay",
                "value": "1 second"
              },
              {
                "label": "Cooldown",
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
                    "id": "range",
                    "label": "Range"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "All stats -2 to 3",
                      "sp-cost": "40",
                      "range": "5 cells",
                      "data-1": "12000",
                      "data-2": "50"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "All stats -4 to 6",
                      "sp-cost": "44",
                      "range": "5 cells",
                      "data-1": "14000",
                      "data-2": "55"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "All stats -6 to 9",
                      "sp-cost": "48",
                      "range": "5 cells",
                      "data-1": "16000",
                      "data-2": "60"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "All stats -8 to 12",
                      "sp-cost": "52",
                      "range": "5 cells",
                      "data-1": "18000",
                      "data-2": "65"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "All stats -10 to 15",
                      "sp-cost": "56",
                      "range": "5 cells",
                      "data-1": "20000",
                      "data-2": "70"
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
          "id": 3014,
          "imageFile": "3014.png",
          "name": "Illusion - Death",
          "maxLevel": 5,
          "prerequisiteText": "Illusion - Shock Lv. 3",
          "group": "",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Cast Illusion on 1 target, Cursing and decreasing its HP.\nAlso, create a low chance of [Coma]. [Coma] is only applied to enemies at the same Level as you\nor lower. Not applicable to monsters.",
          "levelDetails": [],
          "fixedCastTime": "0 seconds",
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
                  "value": "8000"
                },
                {
                  "level": 2,
                  "value": "10000"
                },
                {
                  "level": 3,
                  "value": "12000"
                },
                {
                  "level": 4,
                  "value": "14000"
                },
                {
                  "level": 5,
                  "value": "16000"
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
          "iconUrl": "assets/divine-pride/skills/3014.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/3014",
          "tree": {
            "idx": 4,
            "row": 0,
            "col": 4,
            "columns": 9,
            "requirements": [
              {
                "id": 3013,
                "level": 3,
                "name": "Illusion - Shock",
                "visible": true
              }
            ]
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
                "label": "Cast Delay",
                "value": "1 second"
              },
              {
                "label": "Cooldown",
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
                      "sp-cost": "40",
                      "range": "5 cells",
                      "data-1": "8000",
                      "data-2": "50"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "44",
                      "range": "5 cells",
                      "data-1": "10000",
                      "data-2": "55"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "48",
                      "range": "5 cells",
                      "data-1": "12000",
                      "data-2": "60"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "52",
                      "range": "5 cells",
                      "data-1": "14000",
                      "data-2": "65"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "56",
                      "range": "5 cells",
                      "data-1": "16000",
                      "data-2": "70"
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
          "id": 3004,
          "imageFile": "3004.png",
          "name": "Cross Slash",
          "maxLevel": 10,
          "prerequisiteText": "Shadow Hiding Lv. 1",
          "group": "",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "A Kagerou and Oboro Co-op skill. Deliver a Cross Slash, causing Cross Wound on enemies for 3 seconds.\nCross Wound intensifies Cross Slash damage on the enemies.\nThe higher your Base Level, the greater the additional damage.",
          "levelDetails": [
            {
              "level": 1,
              "text": "200% of ATK/Attack Range: 4 Cells"
            },
            {
              "level": 2,
              "text": "400% of ATK/Attack Range: 4 Cells"
            },
            {
              "level": 3,
              "text": "600% of ATK/Attack Range: 4 Cells"
            },
            {
              "level": 4,
              "text": "800% of ATK/Attack Range: 5 Cells"
            },
            {
              "level": 5,
              "text": "1,000% of ATK/Attack Range: 5 Cells"
            },
            {
              "level": 6,
              "text": "1,200% of ATK/Attack Range: 5 Cells"
            },
            {
              "level": 7,
              "text": "1,400% of ATK/Attack Range: 6 Cells"
            },
            {
              "level": 8,
              "text": "1,600% of ATK/Attack Range: 6 Cells"
            },
            {
              "level": 9,
              "text": "1,800% of ATK/Attack Range: 6 Cells"
            },
            {
              "level": 10,
              "text": "2,000% of ATK/Attack Range: 7 Cells"
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
                  "value": "4 cells"
                },
                {
                  "level": 3,
                  "value": "5 cells"
                },
                {
                  "level": 4,
                  "value": "6 cells"
                },
                {
                  "level": 5,
                  "value": "7 cells"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/3004.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/3004",
          "tree": {
            "idx": 7,
            "row": 0,
            "col": 7,
            "columns": 9,
            "requirements": [
              {
                "id": 3001,
                "level": 1,
                "name": "Shadow Hiding",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
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
                      "effect": "200% of ATK/Attack Range: 4 cells",
                      "sp-cost": "10",
                      "range": "3 cells"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "400% of ATK/Attack Range: 4 cells",
                      "sp-cost": "12",
                      "range": "4 cells"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "600% of ATK/Attack Range: 4 cells",
                      "sp-cost": "14",
                      "range": "5 cells"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "800% of ATK/Attack Range: 5 cells",
                      "sp-cost": "16",
                      "range": "6 cells"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "1,000% of ATK/Attack Range: 5 cells",
                      "sp-cost": "18",
                      "range": "7 cells"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "1,200% of ATK/Attack Range: 5 cells",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "1,400% of ATK/Attack Range: 6 cells",
                      "sp-cost": "22"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "1,600% of ATK/Attack Range: 6 cells",
                      "sp-cost": "24"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "1,800% of ATK/Attack Range: 6 cells",
                      "sp-cost": "26"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "2,000% of ATK/Attack Range: 7 cells",
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
        },
        {
          "id": 3026,
          "imageFile": "3026.png",
          "name": "Distorted Crescent",
          "maxLevel": 5,
          "prerequisiteText": "Illusion - Bewitch 1",
          "group": "",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Changes a target's ATK or MATK based on its HP or SP.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Duration: 60 sec."
            },
            {
              "level": 2,
              "text": "Duration: 75 sec."
            },
            {
              "level": 3,
              "text": "Duration: 90 sec."
            },
            {
              "level": 4,
              "text": "Duration: 105 sec."
            },
            {
              "level": 5,
              "text": "Duration: 120 sec."
            }
          ],
          "fixedCastTime": "2 seconds",
          "castDelay": "1 second",
          "cooldown": "30 seconds",
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
                  "value": "75000"
                },
                {
                  "level": 3,
                  "value": "90000"
                },
                {
                  "level": 4,
                  "value": "105000"
                },
                {
                  "level": 5,
                  "value": "120000"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/3026.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/3026",
          "tree": {
            "idx": 9,
            "row": 1,
            "col": 0,
            "columns": 9,
            "requirements": [
              {
                "id": 3021,
                "level": 1,
                "name": "Illusion - Bewitch",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "Fixed Cast Time",
                "value": "2 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "1 second"
              },
              {
                "label": "Cooldown",
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
                      "effect": "Duration: 60 sec",
                      "sp-cost": "60",
                      "range": "7 cells",
                      "data-1": "60000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Duration: 75 sec",
                      "sp-cost": "70",
                      "range": "7 cells",
                      "data-1": "75000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Duration: 90 sec",
                      "sp-cost": "80",
                      "range": "7 cells",
                      "data-1": "90000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Duration: 105 sec",
                      "sp-cost": "90",
                      "range": "7 cells",
                      "data-1": "105000"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Duration: 120 sec",
                      "sp-cost": "100",
                      "range": "7 cells",
                      "data-1": "120000"
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
          "id": 3015,
          "imageFile": "3015.png",
          "name": "Fire Charm",
          "maxLevel": 1,
          "prerequisiteText": "basic skill",
          "group": "",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Summon a Fire Spirit by using a Fire Charm to increase the damage of Fire Property skills.\nCan summon up to 10 spirits. If 10 spirits are summoned, Weapon Property changes to Fire.\nConsumes 1 Fire Charm per use.",
          "levelDetails": [],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "2 seconds",
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/3015.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/3015",
          "tree": {
            "idx": 10,
            "row": 1,
            "col": 1,
            "columns": 9,
            "requirements": []
          },
          "details": {
            "rows": [
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
                "value": "2 seconds"
              },
              {
                "label": "Cast Delay",
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
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 3016,
          "imageFile": "3016.png",
          "name": "Ice Charm",
          "maxLevel": 1,
          "prerequisiteText": "basic skill",
          "group": "",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Summon an Ice Spirit by using an Ice Charm to increase the damage of Ice Property skills.\nCan summon up to 10 spirits. If 10 spirits are summoned, Weapon Property changes to Water.\nConsumes 1 Ice Charm per use.",
          "levelDetails": [],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "2 seconds",
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/3016.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/3016",
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
                "label": "Levels",
                "value": "1"
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
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 3017,
          "imageFile": "3017.png",
          "name": "Wind Charm",
          "maxLevel": 1,
          "prerequisiteText": "basic skill",
          "group": "",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Summon a Wind Spirit by using a Wind Charm to increase the damage of Wind Property skills.\nCan summon up to 10 spirits. If 10 spirits are summoned, Weapon Property changes to Wind.\nConsumes 1 Wind Charm per use.",
          "levelDetails": [],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "2 seconds",
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/3017.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/3017",
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
                "label": "Levels",
                "value": "1"
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
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 3018,
          "imageFile": "3018.png",
          "name": "Earth Charm",
          "maxLevel": 1,
          "prerequisiteText": "basic skill",
          "group": "",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Summon an Earth Spirit by using an Earth Charm to increase the damage of Earth Property skills.\nCan summon up to 10 spirits. If 10 spirits are summoned, Weapon Property changes to Earth.\nConsumes 1 Earth Charm per use.",
          "levelDetails": [],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "2 seconds",
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/3018.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/3018",
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
                "label": "Levels",
                "value": "1"
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
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 3005,
          "imageFile": "3005.png",
          "name": "Soul Cutter",
          "maxLevel": 5,
          "prerequisiteText": "Cross Slash Lv. 2",
          "group": "",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Inflicts additional damage on targets with the Soul Linker's Soul buffs on them.\nAlso, force-cancels the Soul skills. The higher the Soul skill level, the greater this skill's additional damage.",
          "levelDetails": [
            {
              "level": 1,
              "text": "100% of ATK"
            },
            {
              "level": 2,
              "text": "200% of ATK"
            },
            {
              "level": 3,
              "text": "300% of ATK"
            },
            {
              "level": 4,
              "text": "400% of ATK"
            },
            {
              "level": 5,
              "text": "500% of ATK"
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/3005.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/3005",
          "tree": {
            "idx": 14,
            "row": 1,
            "col": 5,
            "columns": 9,
            "requirements": [
              {
                "id": 3004,
                "level": 2,
                "name": "Cross Slash",
                "visible": true
              }
            ]
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
                "value": "0 seconds"
              },
              {
                "label": "Cooldown",
                "value": "3 seconds"
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
                      "effect": "100% of ATK",
                      "sp-cost": "12",
                      "range": "2 cells"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "200% of ATK",
                      "sp-cost": "16",
                      "range": "2 cells"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "300% of ATK",
                      "sp-cost": "20",
                      "range": "2 cells"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "400% of ATK",
                      "sp-cost": "24",
                      "range": "2 cells"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "500% of ATK",
                      "sp-cost": "28",
                      "range": "2 cells"
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
          "id": 3029,
          "imageFile": "3029.png",
          "name": "Ominous Moonlight",
          "maxLevel": 5,
          "prerequisiteText": "Distorted Crescent Lv. 2",
          "group": "",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Makes certain HP-healing skills inflict damage on their targets instead of restoring their HP.\nThis skill can't be used on players outside PvP. Not Applicable to allies or Boss monsters.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Duration: 10 sec."
            },
            {
              "level": 2,
              "text": "Duration: 15 sec."
            },
            {
              "level": 3,
              "text": "Duration: 20 sec."
            },
            {
              "level": 4,
              "text": "Duration: 25 sec."
            },
            {
              "level": 5,
              "text": "Duration: 30 sec."
            }
          ],
          "fixedCastTime": "2 seconds",
          "castDelay": "1 second",
          "cooldown": "30 seconds",
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
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/3029.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/3029",
          "tree": {
            "idx": 16,
            "row": 1,
            "col": 7,
            "columns": 9,
            "requirements": [
              {
                "id": 3026,
                "level": 2,
                "name": "Distorted Crescent",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "Fixed Cast Time",
                "value": "2 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "1 second"
              },
              {
                "label": "Cooldown",
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
                      "effect": "Duration: 10 sec",
                      "sp-cost": "20",
                      "range": "7 cells",
                      "data-1": "10000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Duration: 15 sec",
                      "sp-cost": "30",
                      "range": "7 cells",
                      "data-1": "15000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Duration: 20 sec",
                      "sp-cost": "40",
                      "range": "7 cells",
                      "data-1": "20000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Duration: 25 sec",
                      "sp-cost": "50",
                      "range": "7 cells",
                      "data-1": "25000"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Duration: 30 sec",
                      "sp-cost": "60",
                      "range": "7 cells",
                      "data-1": "30000"
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
          "id": 3019,
          "imageFile": "3019.png",
          "name": "Release Ninja Spell",
          "maxLevel": 1,
          "prerequisiteText": "Fire/Ice/Wind/Earth Charm Lv. 1",
          "group": "",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Discharge the power of your Charms, attacking 1 target. The inflicted damage is of the same property as your summoned Charms.",
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
                  "value": "11 cells"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/3019.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/3019",
          "tree": {
            "idx": 17,
            "row": 1,
            "col": 8,
            "columns": 9,
            "requirements": [
              {
                "id": 3015,
                "level": 1,
                "name": "Fire Charm",
                "visible": true
              },
              {
                "id": 3016,
                "level": 1,
                "name": "Ice Charm",
                "visible": true
              },
              {
                "id": 3017,
                "level": 1,
                "name": "Wind Charm",
                "visible": true
              },
              {
                "id": 3018,
                "level": 1,
                "name": "Earth Charm",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
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
                      "range": "11 cells"
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
          "id": 3006,
          "imageFile": "3006.png",
          "name": "Kunai Explosion",
          "maxLevel": 5,
          "prerequisiteText": "Throw Kunai Lv. 5",
          "group": "",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Throw an explosive kunai at a target and inflict damage on and around the target.\nThis skill consumes 1 Explosive Kunai per use. Explosive Kunais are consumed directly from your inventory. (Can't be equipped)",
          "levelDetails": [
            {
              "level": 1,
              "text": "Attack Range: 7 Cells/Effective Range: 5 x5 Cells"
            },
            {
              "level": 2,
              "text": "Attack Range: 8 Cells/Effective Range: 5 x5 Cells"
            },
            {
              "level": 3,
              "text": "Attack Range: 9 Cells/Effective Range: 5 x5 Cells"
            },
            {
              "level": 4,
              "text": "Attack Range: 10 Cells/Effective Range: 5 x5 Cells"
            },
            {
              "level": 5,
              "text": "Attack Range: 11 Cells/Effective Range: 5 x5 Cells"
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
              "label": "Range",
              "values": [
                {
                  "level": 1,
                  "value": "7 cells"
                },
                {
                  "level": 2,
                  "value": "8 cells"
                },
                {
                  "level": 3,
                  "value": "9 cells"
                },
                {
                  "level": 4,
                  "value": "10 cells"
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/3006.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/3006",
          "tree": {
            "idx": 21,
            "row": 2,
            "col": 3,
            "columns": 9,
            "requirements": [
              {
                "id": 524,
                "level": 5,
                "name": "Throw Kunai",
                "visible": false
              }
            ]
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
                "label": "Cast Delay",
                "value": "1 second"
              },
              {
                "label": "Cooldown",
                "value": "3 seconds"
              },
              {
                "label": "Area of Effect",
                "value": "5 x 5 cells"
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
                      "effect": "Attack Range: 7 cells/Effective Range: 5 x 5 cells",
                      "sp-cost": "5",
                      "range": "7 cells",
                      "data-1": "1"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Attack Range: 8 cells/Effective Range: 5 x 5 cells",
                      "sp-cost": "6",
                      "range": "8 cells",
                      "data-1": "1"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Attack Range: 9 cells/Effective Range: 5 x 5 cells",
                      "sp-cost": "7",
                      "range": "9 cells",
                      "data-1": "1"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Attack Range: 10 cells/Effective Range: 5 x 5 cells",
                      "sp-cost": "8",
                      "range": "10 cells",
                      "data-1": "1"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Attack Range: 11 cells/Effective Range: 5 x 5 cells",
                      "sp-cost": "9",
                      "range": "11 cells",
                      "data-1": "1"
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
          "id": 3027,
          "imageFile": "3027.png",
          "name": "Moonlight Fantasy",
          "maxLevel": 5,
          "prerequisiteText": "Ominous Moonlight Lv. 3",
          "group": "",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Randomly increases or decreases a target's HP and SP, depending on its current HP and SP.\nAlso, makes the target give off splash damage when attacked. Not applicable to monsters.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Duration: 10 sec."
            },
            {
              "level": 2,
              "text": "Duration: 15 sec."
            },
            {
              "level": 3,
              "text": "Duration: 20 sec."
            },
            {
              "level": 4,
              "text": "Duration: 25 sec."
            },
            {
              "level": 5,
              "text": "Duration: 30 sec."
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "1 second",
          "castDelay": "1 second",
          "cooldown": "15 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/3027.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/3027",
          "tree": {
            "idx": 23,
            "row": 2,
            "col": 5,
            "columns": 9,
            "requirements": [
              {
                "id": 3029,
                "level": 3,
                "name": "Ominous Moonlight",
                "visible": true
              }
            ]
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
                "value": "1 second"
              },
              {
                "label": "Cast Delay",
                "value": "1 second"
              },
              {
                "label": "Cooldown",
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
                      "effect": "Duration: 10 sec",
                      "sp-cost": "55",
                      "range": "7 cells",
                      "data-1": "10000",
                      "data-2": "30"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Duration: 15 sec",
                      "sp-cost": "60",
                      "range": "7 cells",
                      "data-1": "15000",
                      "data-2": "35"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Duration: 20 sec",
                      "sp-cost": "65",
                      "range": "7 cells",
                      "data-1": "20000",
                      "data-2": "40"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Duration: 25 sec",
                      "sp-cost": "70",
                      "range": "7 cells",
                      "data-1": "25000",
                      "data-2": "45"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Duration: 30 sec",
                      "sp-cost": "75",
                      "range": "7 cells",
                      "data-1": "30000",
                      "data-2": "50"
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
          "id": 3020,
          "imageFile": "3020.png",
          "name": "Cast Ninja Spell",
          "maxLevel": 1,
          "prerequisiteText": "Release Ninja Spell 1,",
          "group": "",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Release the power of your Charms onto the ground, summoning a circle that creates various effects.\nFire Charm: Causes Ignition to all enemies within range. Also, increases your weapon's ATK if it's of Fire Property.\nWater Charm: Causes Frozen, Crystallization, or Freezing to all enemies within range. Also, increases your weapon's ATK if it's of Water Property.\nWind Charm: Causes Silence, Sleep, or Deep Sleep to all enemies within range. Also, increases your weapon's ATK if it's of Wind Property.\nEarth Charm: Causes Petrification or Poison to all enemies within range. Also, increases your weapon's ATK if it's of Earth Property.",
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
              "label": "Range",
              "values": [
                {
                  "level": 1,
                  "value": "7 cells"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/3020.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/3020",
          "tree": {
            "idx": 24,
            "row": 2,
            "col": 6,
            "columns": 9,
            "requirements": [
              {
                "id": 3019,
                "level": 1,
                "name": "Release Ninja Spell",
                "visible": true
              },
              {
                "id": 3022,
                "level": 1,
                "name": "16th Night",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
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
                    "id": "range",
                    "label": "Range"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "30",
                      "range": "7 cells"
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
          "id": 3022,
          "imageFile": "3022.png",
          "name": "16th Night",
          "maxLevel": 5,
          "prerequisiteText": "Ninja Mastery Lv. 5",
          "group": "",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Removes Fixed Cast Time from all Ninja skills, halves Variable Cast Time, and increases MATK.",
          "levelDetails": [],
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
                  "value": "70"
                },
                {
                  "level": 2,
                  "value": "75"
                },
                {
                  "level": 3,
                  "value": "80"
                },
                {
                  "level": 4,
                  "value": "85"
                },
                {
                  "level": 5,
                  "value": "90"
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/3022.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/3022",
          "tree": {
            "idx": 25,
            "row": 2,
            "col": 7,
            "columns": 9,
            "requirements": [
              {
                "id": 533,
                "level": 5,
                "name": "Ninja Mastery",
                "visible": false
              }
            ]
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
                    "id": "data-1",
                    "label": "Data 1"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "70",
                      "data-1": "30000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "75",
                      "data-1": "45000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "80",
                      "data-1": "60000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "85",
                      "data-1": "75000"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "90",
                      "data-1": "90000"
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
          "id": 3011,
          "imageFile": "3011.png",
          "name": "Pure Soul",
          "maxLevel": 5,
          "prerequisiteText": "Ninja Mastery Lv. 10",
          "group": "",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Concentrate your mind for 10 seconds to restore HP and SP rapidly. You can't move while using this skill.\nCreates a chance of ignoring incoming damage for its duration.",
          "levelDetails": [
            {
              "level": 1,
              "text": "HP +2% and SP +1% per sec."
            },
            {
              "level": 2,
              "text": "HP +4% and SP +2% per sec."
            },
            {
              "level": 3,
              "text": "HP +6% and SP +3% per sec."
            },
            {
              "level": 4,
              "text": "HP +8% and SP +4% per sec."
            },
            {
              "level": 5,
              "text": "HP +10% and SP +5% per sec."
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "3 seconds",
          "castDelay": "0 seconds",
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/3011.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/3011",
          "tree": {
            "idx": 26,
            "row": 2,
            "col": 8,
            "columns": 9,
            "requirements": [
              {
                "id": 533,
                "level": 10,
                "name": "Ninja Mastery",
                "visible": false
              }
            ]
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
                "value": "3 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0 seconds"
              },
              {
                "label": "Cooldown",
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
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "HP +2% and SP +1% per sec",
                      "sp-cost": "100",
                      "data-1": "10000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "HP +4% and SP +2% per sec",
                      "sp-cost": "100",
                      "data-1": "10000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "HP +6% and SP +3% per sec",
                      "sp-cost": "100",
                      "data-1": "10000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "HP +8% and SP +4% per sec",
                      "sp-cost": "100",
                      "data-1": "10000"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "HP +10% and SP +5% per sec",
                      "sp-cost": "100",
                      "data-1": "10000"
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
          "id": 3007,
          "imageFile": "3007.png",
          "name": "Kunai Splash",
          "maxLevel": 5,
          "prerequisiteText": "Kunai Explosion Lv. 1",
          "group": "",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Attack all surrounding enemies within range with kunais.\nThis skill consumes 2 kunais per use.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Range: 9 x9 Cells"
            },
            {
              "level": 2,
              "text": "Range: 9 x9 Cells"
            },
            {
              "level": 3,
              "text": "Range: 9 x9 Cells"
            },
            {
              "level": 4,
              "text": "Range: 9 x9 Cells"
            },
            {
              "level": 5,
              "text": "Range: 11 x11 Cells"
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
              "label": "Range",
              "values": [
                {
                  "level": 1,
                  "value": "4 cells"
                },
                {
                  "level": 2,
                  "value": "4 cells"
                },
                {
                  "level": 3,
                  "value": "4 cells"
                },
                {
                  "level": 4,
                  "value": "4 cells"
                },
                {
                  "level": 5,
                  "value": "4 cells"
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
                  "value": "4"
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
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/3007.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/3007",
          "tree": {
            "idx": 28,
            "row": 3,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 3006,
                "level": 1,
                "name": "Kunai Explosion",
                "visible": true
              }
            ]
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
                    "id": "area-of-effect",
                    "label": "Area of Effect"
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
                      "area-of-effect": "9x9",
                      "sp-cost": "12",
                      "range": "4 cells",
                      "data-1": "4"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "9x9",
                      "sp-cost": "14",
                      "range": "4 cells",
                      "data-1": "4"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "9x9",
                      "sp-cost": "16",
                      "range": "4 cells",
                      "data-1": "4"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "9x9",
                      "sp-cost": "18",
                      "range": "4 cells",
                      "data-1": "4"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "11x11",
                      "sp-cost": "20",
                      "range": "4 cells",
                      "data-1": "5"
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
          "id": 3010,
          "imageFile": "3010.png",
          "name": "Makibishi (Caltrop Scatter)",
          "maxLevel": 5,
          "prerequisiteText": "Throw Coins Lv. 1",
          "group": "",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Scatter diamond-shaped metal spikes to temporarily Immobilize or Stun enemies around you.\nThe higher this skill's level, the more Makibishis you can scatter. You can also use this skill while moving.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Costs 3 Makibishis"
            },
            {
              "level": 2,
              "text": "Costs 4 Makibishis"
            },
            {
              "level": 3,
              "text": "Costs 5 Makibishis"
            },
            {
              "level": 4,
              "text": "Costs 6 Makibishis"
            },
            {
              "level": 5,
              "text": "Costs 7 Makibishis"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0 seconds",
          "cooldown": "10 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "9"
                },
                {
                  "level": 2,
                  "value": "12"
                },
                {
                  "level": 3,
                  "value": "15"
                },
                {
                  "level": 4,
                  "value": "18"
                },
                {
                  "level": 5,
                  "value": "21"
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
                  "value": "12000"
                },
                {
                  "level": 2,
                  "value": "14000"
                },
                {
                  "level": 3,
                  "value": "16000"
                },
                {
                  "level": 4,
                  "value": "18000"
                },
                {
                  "level": 5,
                  "value": "20000"
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
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/3010.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/3010",
          "tree": {
            "idx": 30,
            "row": 3,
            "col": 3,
            "columns": 9,
            "requirements": [
              {
                "id": 526,
                "level": 1,
                "name": "Throw Coins",
                "visible": false
              }
            ]
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
                "value": "0 seconds"
              },
              {
                "label": "Cooldown",
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
                      "effect": "Costs 3 Makibishis",
                      "sp-cost": "9",
                      "data-1": "3",
                      "data-2": "12000",
                      "data-3": "3"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Costs 4 Makibishis",
                      "sp-cost": "12",
                      "data-1": "4",
                      "data-2": "14000",
                      "data-3": "4"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Costs 5 Makibishis",
                      "sp-cost": "15",
                      "data-1": "5",
                      "data-2": "16000",
                      "data-3": "5"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Costs 6 Makibishis",
                      "sp-cost": "18",
                      "data-1": "6",
                      "data-2": "18000",
                      "data-3": "6"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Costs 7 Makibishis",
                      "sp-cost": "21",
                      "data-1": "7",
                      "data-2": "20000",
                      "data-3": "7"
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
          "id": 3002,
          "imageFile": "3002.png",
          "name": "Righthand Mastery",
          "maxLevel": 5,
          "prerequisiteText": "basic skill",
          "group": "",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Restores your right-hand ATK, which decreases when you're equipped with two weapons.\nAt Levels 4 and 5, it also increases your ATK past the single-wield limit.",
          "levelDetails": [
            {
              "level": 1,
              "text": "80% of ATK"
            },
            {
              "level": 2,
              "text": "90% of ATK"
            },
            {
              "level": 3,
              "text": "100% of ATK"
            },
            {
              "level": 4,
              "text": "110% of ATK"
            },
            {
              "level": 5,
              "text": "120% of ATK"
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
          "iconUrl": "assets/divine-pride/skills/3002.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/3002",
          "tree": {
            "idx": 33,
            "row": 3,
            "col": 6,
            "columns": 9,
            "requirements": []
          },
          "details": {
            "rows": [
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
                      "effect": "80% of ATK",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "90% of ATK",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "100% of ATK",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "110% of ATK",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "120% of ATK",
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
          "id": 3003,
          "imageFile": "3003.png",
          "name": "Lefthand Mastery",
          "maxLevel": 5,
          "prerequisiteText": "basic skill",
          "group": "",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Restores your left-hand ATK, which decreases when you're equipped with two weapons.",
          "levelDetails": [
            {
              "level": 1,
              "text": "60% of ATK"
            },
            {
              "level": 2,
              "text": "70% of ATK"
            },
            {
              "level": 3,
              "text": "80% of ATK"
            },
            {
              "level": 4,
              "text": "90% of ATK"
            },
            {
              "level": 5,
              "text": "100% of ATK"
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
          "iconUrl": "assets/divine-pride/skills/3003.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/3003",
          "tree": {
            "idx": 34,
            "row": 3,
            "col": 7,
            "columns": 9,
            "requirements": []
          },
          "details": {
            "rows": [
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
                      "effect": "60% of ATK",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "70% of ATK",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "80% of ATK",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "90% of ATK",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "100% of ATK",
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
          "id": 3009,
          "imageFile": "3009.png",
          "name": "Swirling Petal",
          "maxLevel": 10,
          "prerequisiteText": "Throw Huuma Shuriken Lv. 5",
          "group": "",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Throw a Huuma Shuriken at a target and inflict damage on and around the target.\nYour Base Level affects your [Throw Huuma Shuriken] Level and your STR affects this skill's ATK.",
          "levelDetails": [
            {
              "level": 1,
              "text": "150% of ATK/Attack Range: 11 Cells"
            },
            {
              "level": 2,
              "text": "300% of ATK/Attack Range: 11 Cells"
            },
            {
              "level": 3,
              "text": "450% of ATK/Attack Range: 11 Cells"
            },
            {
              "level": 4,
              "text": "600% of ATK/Attack Range: 11 Cells"
            },
            {
              "level": 5,
              "text": "750% of ATK/Attack Range: 11 Cells"
            },
            {
              "level": 6,
              "text": "900% of ATK/Attack Range: 11 Cells"
            },
            {
              "level": 7,
              "text": "1,050% of ATK/Attack Range: 11 Cells"
            },
            {
              "level": 8,
              "text": "1,200% of ATK/Attack Range: 11 Cells"
            },
            {
              "level": 9,
              "text": "1,350% of ATK/Attack Range: 11 Cells"
            },
            {
              "level": 10,
              "text": "1,500% of ATK/Attack Range: 11 Cells"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "1.5 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "3 seconds",
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
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/3009.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/3009",
          "tree": {
            "idx": 36,
            "row": 4,
            "col": 0,
            "columns": 9,
            "requirements": [
              {
                "id": 525,
                "level": 5,
                "name": "Throw Huuma Shuriken",
                "visible": false
              }
            ]
          },
          "details": {
            "rows": [
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
                "value": "1.5 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.5 seconds"
              },
              {
                "label": "Cooldown",
                "value": "3 seconds"
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
                      "effect": "150% of ATK/Attack Range: 11 cells",
                      "sp-cost": "22",
                      "range": "9 cells"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "300% of ATK/Attack Range: 11 cells",
                      "sp-cost": "24",
                      "range": "10 cells"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "450% of ATK/Attack Range: 11 cells",
                      "sp-cost": "26",
                      "range": "11 cells"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "600% of ATK/Attack Range: 11 cells",
                      "sp-cost": "28",
                      "range": "12 cells"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "750% of ATK/Attack Range: 11 cells",
                      "sp-cost": "30",
                      "range": "13 cells"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "900% of ATK/Attack Range: 11 cells",
                      "sp-cost": "32"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "1,050% of ATK/Attack Range: 11 cells",
                      "sp-cost": "34"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "1,200% of ATK/Attack Range: 11 cells",
                      "sp-cost": "36"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "1,350% of ATK/Attack Range: 11 cells",
                      "sp-cost": "38"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "1,500% of ATK/Attack Range: 11 cells",
                      "sp-cost": "40"
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
          "id": 3008,
          "imageFile": "3008.png",
          "name": "Rapid Throw",
          "maxLevel": 10,
          "prerequisiteText": "Makibishi Lv. 3",
          "group": "",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "A souped-up version of Ninja's [Coin Throw]. Throw up to 100,000 Zeny at all enemies within range, inflicting random, DEF-ignoring splashed damage. This skill's damage is halved against Boss monsters.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Costs 10,000 Zeny and randomly inflicts 5,000 - 10,000 damage."
            },
            {
              "level": 2,
              "text": "Costs 20,000 Zeny and randomly inflicts 10,000 - 20,000 damage."
            },
            {
              "level": 3,
              "text": "Costs 30,000 Zeny and randomly inflicts 15,000 - 30,000 damage."
            },
            {
              "level": 4,
              "text": "Costs 40,000 Zeny and randomly inflicts 20,000 - 40,000 damage."
            },
            {
              "level": 5,
              "text": "Costs 50,000 Zeny and randomly inflicts 25,000 - 50,000 damage."
            },
            {
              "level": 6,
              "text": "Costs 60,000 Zeny and randomly inflicts 30,000 - 60,000 damage."
            },
            {
              "level": 7,
              "text": "Costs 70,000 Zeny and randomly inflicts 35,000 - 70,000 damage."
            },
            {
              "level": 8,
              "text": "Costs 80,000 Zeny and randomly inflicts 40,000 - 80,000 damage."
            },
            {
              "level": 9,
              "text": "Costs 90,000 Zeny and randomly inflicts 45,000 - 90,000 damage."
            },
            {
              "level": 10,
              "text": "Costs 100,000 Zeny and randomly inflicts 50,000 - 100,000 damage."
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "1 second",
          "castDelay": "0 seconds",
          "cooldown": "10 seconds",
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
                },
                {
                  "level": 6,
                  "value": "50"
                },
                {
                  "level": 7,
                  "value": "50"
                },
                {
                  "level": 8,
                  "value": "50"
                },
                {
                  "level": 9,
                  "value": "50"
                },
                {
                  "level": 10,
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
                },
                {
                  "level": 6,
                  "value": "11 cells"
                },
                {
                  "level": 7,
                  "value": "11 cells"
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
                  "value": "10000"
                },
                {
                  "level": 2,
                  "value": "20000"
                },
                {
                  "level": 3,
                  "value": "30000"
                },
                {
                  "level": 4,
                  "value": "40000"
                },
                {
                  "level": 5,
                  "value": "50000"
                },
                {
                  "level": 6,
                  "value": "60000"
                },
                {
                  "level": 7,
                  "value": "70000"
                },
                {
                  "level": 8,
                  "value": "80000"
                },
                {
                  "level": 9,
                  "value": "90000"
                },
                {
                  "level": 10,
                  "value": "100000"
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
                  "value": "2"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/3008.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/3008",
          "tree": {
            "idx": 37,
            "row": 4,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 3010,
                "level": 3,
                "name": "Makibishi",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
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
                "value": "1 second"
              },
              {
                "label": "Cast Delay",
                "value": "0 seconds"
              },
              {
                "label": "Cooldown",
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
                    "id": "range",
                    "label": "Range"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Costs 10,000 Zeny and randomly inflicts 5,000 - 10,000 damage",
                      "sp-cost": "50",
                      "range": "11 cells",
                      "data-1": "10000",
                      "data-2": "1"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Costs 20,000 Zeny and randomly inflicts 10,000 - 20,000 damage",
                      "sp-cost": "50",
                      "range": "11 cells",
                      "data-1": "20000",
                      "data-2": "1"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Costs 30,000 Zeny and randomly inflicts 15,000 - 30,000 damage",
                      "sp-cost": "50",
                      "range": "11 cells",
                      "data-1": "30000",
                      "data-2": "1"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Costs 40,000 Zeny and randomly inflicts 20,000 - 40,000 damage",
                      "sp-cost": "50",
                      "range": "11 cells",
                      "data-1": "40000",
                      "data-2": "1"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Costs 50,000 Zeny and randomly inflicts 25,000 - 50,000 damage",
                      "sp-cost": "50",
                      "range": "11 cells",
                      "data-1": "50000",
                      "data-2": "1"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "Costs 60,000 Zeny and randomly inflicts 30,000 - 60,000 damage",
                      "sp-cost": "50",
                      "range": "11 cells",
                      "data-1": "60000",
                      "data-2": "1"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "Costs 70,000 Zeny and randomly inflicts 35,000 - 70,000 damage",
                      "sp-cost": "50",
                      "range": "11 cells",
                      "data-1": "70000",
                      "data-2": "1"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "Costs 80,000 Zeny and randomly inflicts 40,000 - 80,000 damage",
                      "sp-cost": "50",
                      "range": "11 cells",
                      "data-1": "80000",
                      "data-2": "1"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "Costs 90,000 Zeny and randomly inflicts 45,000 - 90,000 damage",
                      "sp-cost": "50",
                      "range": "11 cells",
                      "data-1": "90000",
                      "data-2": "1"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "Costs 100,000 Zeny and randomly inflicts 50,000 - 100,000 damage",
                      "sp-cost": "50",
                      "range": "11 cells",
                      "data-1": "100000",
                      "data-2": "2"
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
      "label": "Ninja",
      "pointLimit": 69,
      "tree": {
        "columns": 9,
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
          "id": 522,
          "imageFile": "522.png",
          "name": "Dagger Throwing Practice",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Increase Shuriken damage.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Atk +3"
            },
            {
              "level": 2,
              "text": "Atk +6"
            },
            {
              "level": 3,
              "text": "Atk +9"
            },
            {
              "level": 4,
              "text": "Atk +12"
            },
            {
              "level": 5,
              "text": "Atk +15"
            },
            {
              "level": 6,
              "text": "Atk +18"
            },
            {
              "level": 7,
              "text": "Atk +21"
            },
            {
              "level": 8,
              "text": "Atk +24"
            },
            {
              "level": 9,
              "text": "Atk +27"
            },
            {
              "level": 10,
              "text": "Atk +30"
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
          "iconUrl": "assets/divine-pride/skills/522.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/522",
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
                    "id": "atk",
                    "label": "Atk"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "atk": "+3",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "atk": "+6",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "atk": "+9",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "atk": "+12",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "atk": "+15",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "atk": "+18",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "atk": "+21",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "atk": "+24",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "atk": "+27",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "atk": "+30",
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
          "id": 527,
          "imageFile": "527.png",
          "name": "Flip Tatami",
          "maxLevel": 5,
          "prerequisiteText": "basic skill",
          "group": "Offensive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Flip tatami to cause the 4*4 area\naround the caster to ignore long range physical\ndamage for 3 seconds. Each cast is followed by\na 3 second cast delay, and has the chance to\ndamage and push enemies 3 cells backward if\nthey are within the skill's attack range.\nAttack Range & Damage by Skill Level",
          "levelDetails": [
            {
              "level": 1,
              "text": "1 cell, 110% Atk"
            },
            {
              "level": 2,
              "text": "2 cells, 120% Atk"
            },
            {
              "level": 3,
              "text": "2 cells, 130% Atk"
            },
            {
              "level": 4,
              "text": "3 cells, 140% Atk"
            },
            {
              "level": 5,
              "text": "3 cells, 150% Atk"
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/527.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/527",
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
                "value": "Offensive Skill"
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
                      "base-damage-atk": "110%",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-atk": "120%",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-atk": "130%",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-atk": "140%",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-atk": "150%",
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
          "id": 533,
          "imageFile": "533.png",
          "name": "Ninja Mastery",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Increase SP Restoration Speed by\ntraining in the Ninja Arts. The amount of SP\nrestored by this skill is affected by the\ncharacter's MaxSP.",
          "levelDetails": [
            {
              "level": 1,
              "text": "+3 SP/10 Sec."
            },
            {
              "level": 2,
              "text": "+6 SP/10 Sec."
            },
            {
              "level": 3,
              "text": "+9 SP/10 Sec."
            },
            {
              "level": 4,
              "text": "+12 SP/10 Sec."
            },
            {
              "level": 5,
              "text": "+15 SP/10 Sec."
            },
            {
              "level": 6,
              "text": "+18 SP/10 Sec."
            },
            {
              "level": 7,
              "text": "+21 SP/10 Sec."
            },
            {
              "level": 8,
              "text": "+24 SP/10 Sec."
            },
            {
              "level": 9,
              "text": "+27 SP/10 Sec."
            },
            {
              "level": 10,
              "text": "+30 SP/10 Sec."
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
          "iconUrl": "assets/divine-pride/skills/533.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/533",
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
                      "effect": "+3 SP/10 Sec",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "+6 SP/10 Sec",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "+9 SP/10 Sec",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "+12 SP/10 Sec",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "+15 SP/10 Sec",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "+18 SP/10 Sec",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "+21 SP/10 Sec",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "+24 SP/10 Sec",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "+27 SP/10 Sec",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "+30 SP/10 Sec",
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
          "id": 523,
          "imageFile": "523.png",
          "name": "Throw Shuriken",
          "maxLevel": 10,
          "prerequisiteText": "Dagger Throwing Practice 1",
          "group": "Offensive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Throw a Shuriken at a target\nfrom a distance of up to 9 cells away from the\ncaster. Each cast consumes 1 Shuriken.",
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/523.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/523",
          "tree": {
            "idx": 8,
            "row": 0,
            "col": 8,
            "columns": 9,
            "requirements": [
              {
                "id": 522,
                "level": 1,
                "name": "Dagger Throwing Practice",
                "visible": true
              }
            ]
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
                      "damage": "+4",
                      "sp-cost": "5"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "damage": "+8",
                      "sp-cost": "5"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "damage": "+12",
                      "sp-cost": "5"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "damage": "+16",
                      "sp-cost": "5"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "damage": "+20",
                      "sp-cost": "5"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "damage": "+24",
                      "sp-cost": "5"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "damage": "+28",
                      "sp-cost": "5"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "damage": "+32",
                      "sp-cost": "5"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "damage": "+36",
                      "sp-cost": "5"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "damage": "+40",
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
        },
        {
          "id": 529,
          "imageFile": "529.png",
          "name": "Shadow Leap",
          "maxLevel": 5,
          "prerequisiteText": "Flip Tatami 1",
          "group": "Supportive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Shadow Leap can only be performed\nwhen the caster is in Hiding status\n(attainable through the Haze Slasher skill).\nThis skill instantly moves the caster to a\ntargeted cell, ignoring obstacles in the\ncaster's way.\nLeap Range by Skill Level",
          "levelDetails": [
            {
              "level": 1,
              "text": "5 cells"
            },
            {
              "level": 2,
              "text": "6 cells"
            },
            {
              "level": 3,
              "text": "7 cells"
            },
            {
              "level": 4,
              "text": "8 cells"
            },
            {
              "level": 5,
              "text": "9 cells"
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
          "iconUrl": "assets/divine-pride/skills/529.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/529",
          "tree": {
            "idx": 9,
            "row": 1,
            "col": 0,
            "columns": 9,
            "requirements": [
              {
                "id": 527,
                "level": 1,
                "name": "Flip Tatami",
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
                      "effect": "5 cells",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "6 cells",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "7 cells",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "8 cells",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "9 cells",
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
          "id": 543,
          "imageFile": "543.png",
          "name": "Ninja Aura",
          "maxLevel": 5,
          "prerequisiteText": "Ninja Mastery 5",
          "group": "Supportive(Psychokinesis)",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Focus spritual energy to enter\nNinja Aura status, which endows the caster with\nINT and STR bonuses. Ninja Aura status enables\nthe use of the Mirror Image and Killing Strike\nskills, although using those skills will cancel\nNinja Aura.\nSTR, INT Bonuses & Duration by Skill Level",
          "levelDetails": [
            {
              "level": 1,
              "text": "STR, INT +1, 30 Sec."
            },
            {
              "level": 2,
              "text": "STR, INT +2, 45 Sec."
            },
            {
              "level": 3,
              "text": "STR, INT +3, 60 Sec."
            },
            {
              "level": 4,
              "text": "STR, INT +4, 75 Sec."
            },
            {
              "level": 5,
              "text": "STR, INT +5, 90 Sec."
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
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/543.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/543",
          "tree": {
            "idx": 10,
            "row": 1,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 533,
                "level": 5,
                "name": "Ninja Mastery",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Supportive(Psychokinesis) Skill"
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
                      "effect": "STR, INT +1, 30 Sec",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "STR, INT +2, 45 Sec",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "STR, INT +3, 60 Sec",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "STR, INT +4, 75 Sec",
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "STR, INT +5, 90 Sec",
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
          "id": 534,
          "imageFile": "534.png",
          "name": "Flaming Petals",
          "maxLevel": 10,
          "prerequisiteText": "Ninja Mastery 1",
          "group": "Offensive(Fire)",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Inflict Fire property damage at a\ntarget by shooting flaming petals. This skill's\nlevel affects the number of strikes, and each\nstrike causes an amount of damage equal to 90%\nof the caster's Matk.",
          "levelDetails": [],
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
                  "value": "20"
                },
                {
                  "level": 3,
                  "value": "22"
                },
                {
                  "level": 4,
                  "value": "24"
                },
                {
                  "level": 5,
                  "value": "26"
                },
                {
                  "level": 6,
                  "value": "28"
                },
                {
                  "level": 7,
                  "value": "30"
                },
                {
                  "level": 8,
                  "value": "32"
                },
                {
                  "level": 9,
                  "value": "34"
                },
                {
                  "level": 10,
                  "value": "36"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/534.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/534",
          "tree": {
            "idx": 11,
            "row": 1,
            "col": 2,
            "columns": 9,
            "requirements": [
              {
                "id": 533,
                "level": 1,
                "name": "Ninja Mastery",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Offensive(Fire) Skill"
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
                      "sp-cost": "18"
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
                      "sp-cost": "22"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "24"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "26"
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
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "32"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "34"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "sp-cost": "36"
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
          "id": 537,
          "imageFile": "537.png",
          "name": "Freezing Spear",
          "maxLevel": 10,
          "prerequisiteText": "Ninja Mastery 1",
          "group": "Offensive(Ice)",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Summon spears of ice that will\nstrike a targeted enemy multiple times. Each\nstrike inflicts an amount of damage that is\nequal to 70% of the caster's Matk.",
          "levelDetails": [
            {
              "level": 1,
              "text": "3 Strikes"
            },
            {
              "level": 2,
              "text": "4 Strikes"
            },
            {
              "level": 3,
              "text": "5 Strikes"
            },
            {
              "level": 4,
              "text": "6 Strikes"
            },
            {
              "level": 5,
              "text": "7 Strikes"
            },
            {
              "level": 6,
              "text": "8 Strikes"
            },
            {
              "level": 7,
              "text": "9 Strikes"
            },
            {
              "level": 8,
              "text": "10 Strikes"
            },
            {
              "level": 9,
              "text": "11 Strikes"
            },
            {
              "level": 10,
              "text": "12 Strikes"
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
                },
                {
                  "level": 6,
                  "value": "30"
                },
                {
                  "level": 7,
                  "value": "33"
                },
                {
                  "level": 8,
                  "value": "36"
                },
                {
                  "level": 9,
                  "value": "39"
                },
                {
                  "level": 10,
                  "value": "42"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/537.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/537",
          "tree": {
            "idx": 12,
            "row": 1,
            "col": 3,
            "columns": 9,
            "requirements": [
              {
                "id": 533,
                "level": 1,
                "name": "Ninja Mastery",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Offensive(Ice) Skill"
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
                      "effect": "3 Strikes",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "4 Strikes",
                      "sp-cost": "18"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "5 Strikes",
                      "sp-cost": "21"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "6 Strikes",
                      "sp-cost": "24"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "7 Strikes",
                      "sp-cost": "27"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "8 Strikes",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "9 Strikes",
                      "sp-cost": "33"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "10 Strikes",
                      "sp-cost": "36"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "11 Strikes",
                      "sp-cost": "39"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "12 Strikes",
                      "sp-cost": "42"
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
          "id": 540,
          "imageFile": "540.png",
          "name": "Wind Blade",
          "maxLevel": 10,
          "prerequisiteText": "Ninja Mastery 1",
          "group": "Offensive(Lightning)",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Shoot a shearing blade of\nair that will inflict Wind property damage\nto a targeted enemy.",
          "levelDetails": [
            {
              "level": 1,
              "text": "1 Strike"
            },
            {
              "level": 2,
              "text": "2 Strikes"
            },
            {
              "level": 3,
              "text": "2 Strikes"
            },
            {
              "level": 4,
              "text": "3 Strikes"
            },
            {
              "level": 5,
              "text": "3 Strikes"
            },
            {
              "level": 6,
              "text": "4 Strikes"
            },
            {
              "level": 7,
              "text": "4 Strikes"
            },
            {
              "level": 8,
              "text": "5 Strikes"
            },
            {
              "level": 9,
              "text": "5 Strikes"
            },
            {
              "level": 10,
              "text": "6 Strikes"
            }
          ],
          "castDelay": "0 seconds",
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
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/540.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/540",
          "tree": {
            "idx": 13,
            "row": 1,
            "col": 4,
            "columns": 9,
            "requirements": [
              {
                "id": 533,
                "level": 1,
                "name": "Ninja Mastery",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Offensive(Lightning) Skill"
              },
              {
                "label": "Levels",
                "value": "10"
              },
              {
                "label": "Cast Delay",
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
                      "effect": "1 Strike",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "2 Strikes",
                      "sp-cost": "14"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "2 Strikes",
                      "sp-cost": "16"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "3 Strikes",
                      "sp-cost": "18"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "3 Strikes",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "4 Strikes",
                      "sp-cost": "22"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "4 Strikes",
                      "sp-cost": "24"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "5 Strikes",
                      "sp-cost": "26"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "5 Strikes",
                      "sp-cost": "28"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "6 Strikes",
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
        },
        {
          "id": 524,
          "imageFile": "524.png",
          "name": "Throw Kunai",
          "maxLevel": 5,
          "prerequisiteText": "Throw Shuriken 5",
          "group": "Offensive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Throw a Kunai that will strike its\ntarget 3 times in one attack. Each cast consumes\n1 Kunai, and the attack's property is affected\nby the type of Kunai thrown.",
          "levelDetails": [],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0 seconds",
          "cooldown": "0.2 seconds",
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
          "iconUrl": "assets/divine-pride/skills/524.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/524",
          "tree": {
            "idx": 15,
            "row": 1,
            "col": 6,
            "columns": 9,
            "requirements": [
              {
                "id": 523,
                "level": 5,
                "name": "Throw Shuriken",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Offensive Skill"
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
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 528,
          "imageFile": "528.png",
          "name": "Haze Slasher",
          "maxLevel": 10,
          "prerequisiteText": "Shadow Leap 1",
          "group": "Offensive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Strike an enemy, and then\nimmediately enter the Hiding status; can be\nfollowed by the Shadow Leap or Shadow Slash\nskill.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Atk 110%"
            },
            {
              "level": 2,
              "text": "Atk 120%"
            },
            {
              "level": 3,
              "text": "Atk 130%"
            },
            {
              "level": 4,
              "text": "Atk 140%"
            },
            {
              "level": 5,
              "text": "Atk 150%"
            },
            {
              "level": 6,
              "text": "Atk 160%"
            },
            {
              "level": 7,
              "text": "Atk 170%"
            },
            {
              "level": 8,
              "text": "Atk 180%"
            },
            {
              "level": 9,
              "text": "Atk 190%"
            },
            {
              "level": 10,
              "text": "Atk 200%"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0 seconds",
          "cooldown": "0.5 seconds",
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
                  "value": "8"
                },
                {
                  "level": 7,
                  "value": "8"
                },
                {
                  "level": 8,
                  "value": "8"
                },
                {
                  "level": 9,
                  "value": "8"
                },
                {
                  "level": 10,
                  "value": "8"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/528.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/528",
          "tree": {
            "idx": 16,
            "row": 1,
            "col": 7,
            "columns": 9,
            "requirements": [
              {
                "id": 529,
                "level": 1,
                "name": "Shadow Leap",
                "visible": true
              }
            ]
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
                      "base-damage-atk": "110%",
                      "sp-cost": "8"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-atk": "120%",
                      "sp-cost": "8"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-atk": "130%",
                      "sp-cost": "8"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-atk": "140%",
                      "sp-cost": "8"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-atk": "150%",
                      "sp-cost": "8"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "base-damage-atk": "160%",
                      "sp-cost": "8"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "base-damage-atk": "170%",
                      "sp-cost": "8"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "base-damage-atk": "180%",
                      "sp-cost": "8"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "base-damage-atk": "190%",
                      "sp-cost": "8"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "base-damage-atk": "200%",
                      "sp-cost": "8"
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
          "id": 531,
          "imageFile": "531.png",
          "name": "Cicada Skin Shed",
          "maxLevel": 5,
          "prerequisiteText": "Shadow Leap 5",
          "group": "Supportive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Enable Cicada Skin Shed status,\nwhich enables caster to automatically dodge a\nset number of attacks. Each special dodge is\nfollowed by a backward movement of 7 cells.\nWhen the number of attacks reaches the skill's\nlimit, Cicada Skin Shed status is cancelled.\nDuration and Number of Cicada Dodges by Level",
          "levelDetails": [
            {
              "level": 1,
              "text": "20 Sec, 1 Dodge"
            },
            {
              "level": 2,
              "text": "30 Sec, 1 Dodge"
            },
            {
              "level": 3,
              "text": "40 Sec, 2 Dodges"
            },
            {
              "level": 4,
              "text": "50 Sec, 2 Dodges"
            },
            {
              "level": 5,
              "text": "60 Sec, 3 Dodges"
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
                  "value": "15"
                },
                {
                  "level": 3,
                  "value": "18"
                },
                {
                  "level": 4,
                  "value": "21"
                },
                {
                  "level": 5,
                  "value": "24"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/531.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/531",
          "tree": {
            "idx": 17,
            "row": 1,
            "col": 8,
            "columns": 9,
            "requirements": [
              {
                "id": 529,
                "level": 5,
                "name": "Shadow Leap",
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
                      "effect": "20 Sec, 1 Dodge",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "30 Sec, 1 Dodge",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "40 Sec, 2 Dodges",
                      "sp-cost": "18"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "50 Sec, 2 Dodges",
                      "sp-cost": "21"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "60 Sec, 3 Dodges",
                      "sp-cost": "24"
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
          "id": 535,
          "imageFile": "535.png",
          "name": "Blaze Shield",
          "maxLevel": 10,
          "prerequisiteText": "Flaming Petals 5",
          "group": "Offensive(Fire)",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Summon a blazing storm in a 5*5\ncell area around the caster that will deliver\nmultiple strikes to enemies within its range.\nThe Blaze Shield lasts for 20 seconds, but is\nautomatically canceled after inflicting its\nMaximum number of strikes. Each cast consumes\n1 Flame Stone.",
          "levelDetails": [
            {
              "level": 1,
              "text": "5 Strikes"
            },
            {
              "level": 2,
              "text": "5 Strikes"
            },
            {
              "level": 3,
              "text": "6 Strikes"
            },
            {
              "level": 4,
              "text": "6 Strikes"
            },
            {
              "level": 5,
              "text": "7 Strikes"
            },
            {
              "level": 6,
              "text": "7 Strikes"
            },
            {
              "level": 7,
              "text": "8 Strikes"
            },
            {
              "level": 8,
              "text": "8 Strikes"
            },
            {
              "level": 9,
              "text": "9 Strikes"
            },
            {
              "level": 10,
              "text": "9 Strikes"
            }
          ],
          "castDelay": "1 second",
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
                },
                {
                  "level": 6,
                  "value": "25"
                },
                {
                  "level": 7,
                  "value": "25"
                },
                {
                  "level": 8,
                  "value": "25"
                },
                {
                  "level": 9,
                  "value": "25"
                },
                {
                  "level": 10,
                  "value": "25"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/535.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/535",
          "tree": {
            "idx": 18,
            "row": 2,
            "col": 0,
            "columns": 9,
            "requirements": [
              {
                "id": 534,
                "level": 5,
                "name": "Flaming Petals",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Offensive(Fire) Skill"
              },
              {
                "label": "Levels",
                "value": "10"
              },
              {
                "label": "Cast Delay",
                "value": "1 second"
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
                      "effect": "5 Strikes",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "5 Strikes",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "6 Strikes",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "6 Strikes",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "7 Strikes",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "7 Strikes",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "8 Strikes",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "8 Strikes",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "9 Strikes",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "9 Strikes",
                      "sp-cost": "25"
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
          "id": 538,
          "imageFile": "538.png",
          "name": "Watery Evasion",
          "maxLevel": 10,
          "prerequisiteText": "Freezing Spear 5",
          "group": "Supportive(Ice)",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Create a water pool that will\naffect enemies within range by decreasing their\nAGI and reducing Movement Speed by 50%. All\nNinja Class characters, including the caster,\nare immune to these AGI and Movement Speed\npenalties. The area targeted by Watery Evasion\nwill increase the damage of the Freezing Spear\nskill, and enable the use of Water Ball and Aqua\nBenedicta for other players.\nEach cast consumes 1 Ice Stone.\nRange, Duration & AGI Reduction by Skill Level",
          "levelDetails": [
            {
              "level": 1,
              "text": "3*3 cells 15 Sec."
            },
            {
              "level": 2,
              "text": "3*3 cells 20 Sec, AGI - 3"
            },
            {
              "level": 3,
              "text": "3*3 cells 25 Sec, AGI - 3"
            },
            {
              "level": 4,
              "text": "5*5 cells 30 Sec, AGI - 3"
            },
            {
              "level": 5,
              "text": "5*5 cells 35 Sec, AGI - 5"
            },
            {
              "level": 6,
              "text": "5*5 cells 40 Sec, AGI - 5"
            },
            {
              "level": 7,
              "text": "7*7 cells 45 Sec, AGI - 5"
            },
            {
              "level": 8,
              "text": "7*7 cells 50 Sec, AGI - 8"
            },
            {
              "level": 9,
              "text": "7*7 cells 55 Sec, AGI - 8"
            },
            {
              "level": 10,
              "text": "9*9 cells 60 Sec, AGI - 8"
            }
          ],
          "fixedCastTime": "0.6 seconds",
          "variableCastTime": "2.4 seconds",
          "castDelay": "2 seconds",
          "cooldown": "1 second",
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
                },
                {
                  "level": 6,
                  "value": "30"
                },
                {
                  "level": 7,
                  "value": "33"
                },
                {
                  "level": 8,
                  "value": "36"
                },
                {
                  "level": 9,
                  "value": "39"
                },
                {
                  "level": 10,
                  "value": "42"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/538.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/538",
          "tree": {
            "idx": 19,
            "row": 2,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 537,
                "level": 5,
                "name": "Freezing Spear",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Supportive(Ice) Skill"
              },
              {
                "label": "Levels",
                "value": "10"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0.6 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "2.4 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "2 seconds"
              },
              {
                "label": "Cooldown",
                "value": "1 second"
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
                    "id": "3-3-cells-20-sec-agi",
                    "label": "3*3 Cells 20 Sec, Agi"
                  },
                  {
                    "id": "3-3-cells-25-sec-agi",
                    "label": "3*3 Cells 25 Sec, Agi"
                  },
                  {
                    "id": "5-5-cells-30-sec-agi",
                    "label": "5*5 Cells 30 Sec, Agi"
                  },
                  {
                    "id": "5-5-cells-35-sec-agi",
                    "label": "5*5 Cells 35 Sec, Agi"
                  },
                  {
                    "id": "5-5-cells-40-sec-agi",
                    "label": "5*5 Cells 40 Sec, Agi"
                  },
                  {
                    "id": "7-7-cells-45-sec-agi",
                    "label": "7*7 Cells 45 Sec, Agi"
                  },
                  {
                    "id": "7-7-cells-50-sec-agi",
                    "label": "7*7 Cells 50 Sec, Agi"
                  },
                  {
                    "id": "7-7-cells-55-sec-agi",
                    "label": "7*7 Cells 55 Sec, Agi"
                  },
                  {
                    "id": "9-9-cells-60-sec-agi",
                    "label": "9*9 Cells 60 Sec, Agi"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "3*3 cells 15 Sec",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "3-3-cells-20-sec-agi": "- 3",
                      "sp-cost": "18"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "3-3-cells-25-sec-agi": "- 3",
                      "sp-cost": "21"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "5-5-cells-30-sec-agi": "- 3",
                      "sp-cost": "24"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "5-5-cells-35-sec-agi": "- 5",
                      "sp-cost": "27"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "5-5-cells-40-sec-agi": "- 5",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "7-7-cells-45-sec-agi": "- 5",
                      "sp-cost": "33"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "7-7-cells-50-sec-agi": "- 8",
                      "sp-cost": "36"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "7-7-cells-55-sec-agi": "- 8",
                      "sp-cost": "39"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "9-9-cells-60-sec-agi": "- 8",
                      "sp-cost": "42"
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
          "id": 541,
          "imageFile": "541.png",
          "name": "Lightning Jolt",
          "maxLevel": 5,
          "prerequisiteText": "Wind Blade",
          "group": "Offensive(Lightning)",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Summon lightning bolts around the\ncaster to damage enemies within the skill's\nrange. Each cast consumes 1 Wind Stone.\nDamage & Range by Skill Level",
          "levelDetails": [
            {
              "level": 1,
              "text": "+200% Matk, 5*5 cells"
            },
            {
              "level": 2,
              "text": "+240% Matk, 5*5 cells"
            },
            {
              "level": 3,
              "text": "+280% Matk, 7*7 cells"
            },
            {
              "level": 4,
              "text": "+320% Matk, 7*7 cells"
            },
            {
              "level": 5,
              "text": "+360% Matk, 9*9 cells"
            }
          ],
          "fixedCastTime": "0.3 seconds",
          "variableCastTime": "1.7 seconds",
          "castDelay": "0 seconds",
          "cooldown": "0 seconds",
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
                  "value": "20"
                },
                {
                  "level": 3,
                  "value": "24"
                },
                {
                  "level": 4,
                  "value": "28"
                },
                {
                  "level": 5,
                  "value": "32"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/541.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/541",
          "tree": {
            "idx": 20,
            "row": 2,
            "col": 2,
            "columns": 9,
            "requirements": [
              {
                "id": 540,
                "level": 5,
                "name": "Wind Blade",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Offensive(Lightning) Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0.3 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "1.7 seconds"
              },
              {
                "label": "Cast Delay",
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
                    "id": "base-damage-matk",
                    "label": "Base Damage (MATK)"
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
                      "base-damage-matk": "200%",
                      "sp-cost": "16"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-matk": "240%",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-matk": "280%",
                      "sp-cost": "24"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-matk": "320%",
                      "sp-cost": "28"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-matk": "360%",
                      "sp-cost": "32"
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
          "id": 525,
          "imageFile": "525.png",
          "name": "Throw Huuma Shuriken",
          "maxLevel": 5,
          "prerequisiteText": "Dagger Throwing Practice 5,",
          "group": "Offensive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Requires a Huuma Class Weapon.\nThrow a Huuma Shuriken that will damage its\ntarget and any nearby enemies. The total amount\nof damage is divided among the enemies damaged\nby this skill. Raising this skill's level\nincreases its number of strikes.\nTotal Amount of Damage by Skill Level",
          "levelDetails": [
            {
              "level": 1,
              "text": "300% Atk"
            },
            {
              "level": 2,
              "text": "450% Atk"
            },
            {
              "level": 3,
              "text": "600% Atk"
            },
            {
              "level": 4,
              "text": "750% Atk"
            },
            {
              "level": 5,
              "text": "900% Atk"
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "1 second",
          "castDelay": "0.5 seconds",
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
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/525.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/525",
          "tree": {
            "idx": 22,
            "row": 2,
            "col": 4,
            "columns": 9,
            "requirements": [
              {
                "id": 522,
                "level": 5,
                "name": "Dagger Throwing Practice",
                "visible": true
              },
              {
                "id": 524,
                "level": 5,
                "name": "Throw Kunai",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Offensive Skill"
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
                "value": "1 second"
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
                      "base-damage-atk": "300%",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-atk": "450%",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-atk": "600%",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-atk": "750%",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-atk": "900%",
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
          "id": 530,
          "imageFile": "530.png",
          "name": "Shadow Slash",
          "maxLevel": 5,
          "prerequisiteText": "Haze Slashwer 5",
          "group": "Active",
          "type": "Physical Melee",
          "target": "1 target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Requires Hiding Status.\nLeaps from the shadows toward a single target and performs a slicing move to inflict physical damage.\nHiding is removed upon using this skill, and Critical Damage can be applied depending on its skill level.\nFor Critical Damage, only the half of total Critical Damage Options will be applied.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 200%, Critical Chance 30%"
            },
            {
              "level": 2,
              "text": "ATK 350%, Critical Chance 35%"
            },
            {
              "level": 3,
              "text": "ATK 500%, Critical Chance 40%"
            },
            {
              "level": 4,
              "text": "ATK 650%, Critical Chance 45%"
            },
            {
              "level": 5,
              "text": "ATK 800%, Critical Chance 50%"
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
                  "value": "11"
                },
                {
                  "level": 3,
                  "value": "12"
                },
                {
                  "level": 4,
                  "value": "13"
                },
                {
                  "level": 5,
                  "value": "14"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/530.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/530",
          "tree": {
            "idx": 23,
            "row": 2,
            "col": 5,
            "columns": 9,
            "requirements": [
              {
                "id": 528,
                "level": 5,
                "name": "Haze Slasher",
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
                      "base-damage-atk": "200%",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-atk": "350%",
                      "sp-cost": "11"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-atk": "500%",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-atk": "650%",
                      "sp-cost": "13"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-atk": "800%",
                      "sp-cost": "14"
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
          "id": 536,
          "imageFile": "536.png",
          "name": "Exploding Dragon",
          "maxLevel": 5,
          "prerequisiteText": "Ninja Mastery 10,",
          "group": "Offensive(Fire)",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Summon a flaming dragon that will\ninflict 3 strikes on all enemies in a 5*5 cell\narea around the cell targeted by this skill.\nEach cast consumes 1 Flame Stone.",
          "levelDetails": [
            {
              "level": 1,
              "text": "+300% Matk"
            },
            {
              "level": 2,
              "text": "+450% Matk"
            },
            {
              "level": 3,
              "text": "+600% Matk"
            },
            {
              "level": 4,
              "text": "+750% Matk"
            },
            {
              "level": 5,
              "text": "+900% Matk"
            }
          ],
          "fixedCastTime": "0.8 seconds",
          "variableCastTime": "2 seconds",
          "castDelay": "0.5 seconds",
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
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/536.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/536",
          "tree": {
            "idx": 25,
            "row": 2,
            "col": 7,
            "columns": 9,
            "requirements": [
              {
                "id": 533,
                "level": 10,
                "name": "Ninja Mastery",
                "visible": true
              },
              {
                "id": 535,
                "level": 7,
                "name": "Blaze Shield",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Offensive(Fire) Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0.8 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "2 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.5 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0.3 seconds"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "base-damage-matk",
                    "label": "Base Damage (MATK)"
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
                      "base-damage-matk": "300%",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-matk": "450%",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-matk": "600%",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-matk": "750%",
                      "sp-cost": "35"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-matk": "900%",
                      "sp-cost": "40"
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
          "id": 539,
          "imageFile": "539.png",
          "name": "Snow Flake Draft",
          "maxLevel": 5,
          "prerequisiteText": "Ninja Mastery 10, Watery Evasion 7",
          "group": "Offensive(Ice)",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Summon a meteor of ice that will\ndamage enemies in a 7*7 cell area around the\ncaster. Each cast consumes 1 Ice Stone.",
          "levelDetails": [
            {
              "level": 1,
              "text": "+150% Matk 20% Freeze Chance"
            },
            {
              "level": 2,
              "text": "+200% Matk 30% Freeze Chance"
            },
            {
              "level": 3,
              "text": "+250% Matk 40% Freeze Chance"
            },
            {
              "level": 4,
              "text": "+300% Matk 50% Freeze Chance"
            },
            {
              "level": 5,
              "text": "+350% Matk 60% Freeze Chance"
            }
          ],
          "fixedCastTime": "0.8 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "0.3 seconds",
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
          "iconUrl": "assets/divine-pride/skills/539.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/539",
          "tree": {
            "idx": 26,
            "row": 2,
            "col": 8,
            "columns": 9,
            "requirements": [
              {
                "id": 533,
                "level": 10,
                "name": "Ninja Mastery",
                "visible": true
              },
              {
                "id": 538,
                "level": 7,
                "name": "Watery Evasion",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Offensive(Ice) Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0.8 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.5 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0.3 seconds"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "base-damage-matk",
                    "label": "Base Damage (MATK)"
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
                      "base-damage-matk": "20%",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-matk": "30%",
                      "sp-cost": "45"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-matk": "40%",
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-matk": "50%",
                      "sp-cost": "55"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-matk": "60%",
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
          "id": 542,
          "imageFile": "542.png",
          "name": "First Wind",
          "maxLevel": 5,
          "prerequisiteText": "Ninja Mastery 10,",
          "group": "Offensive(Lightning)",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Shoot a blade of sharp wind that\nwill slash all enemies between the caster and\nthe skill's target.\nEach cast consumes 1 Wind Stone.\nDamage & Range by Skill Level",
          "levelDetails": [
            {
              "level": 1,
              "text": "+200% Matk, 5 cells"
            },
            {
              "level": 2,
              "text": "+300% Matk, 6 cells"
            },
            {
              "level": 3,
              "text": "+400% Matk, 7 cells"
            },
            {
              "level": 4,
              "text": "+500% Matk, 8 cells"
            },
            {
              "level": 5,
              "text": "+600% Matk, 9 cells"
            }
          ],
          "fixedCastTime": "0.3 seconds",
          "variableCastTime": "1.2 seconds",
          "castDelay": "0 seconds",
          "cooldown": "0 seconds",
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
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/542.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/542",
          "tree": {
            "idx": 27,
            "row": 3,
            "col": 0,
            "columns": 9,
            "requirements": [
              {
                "id": 533,
                "level": 10,
                "name": "Ninja Mastery",
                "visible": true
              },
              {
                "id": 541,
                "level": 5,
                "name": "Lightning Jolt",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Offensive(Lightning) Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0.3 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "1.2 seconds"
              },
              {
                "label": "Cast Delay",
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
                    "id": "base-damage-matk",
                    "label": "Base Damage (MATK)"
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
                      "base-damage-matk": "200%",
                      "sp-cost": "24"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-matk": "300%",
                      "sp-cost": "28"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-matk": "400%",
                      "sp-cost": "32"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-matk": "500%",
                      "sp-cost": "36"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-matk": "600%",
                      "sp-cost": "40"
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
          "id": 526,
          "imageFile": "526.png",
          "name": "Throw Coins",
          "maxLevel": 10,
          "prerequisiteText": "Dagger Throwing Practice 10,",
          "group": "Offensive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Throw money at a target to inflict\nan amount of Defense piercing damage equal to\nthe amount of zeny spent in the attack. This\nskill is followed by a 5 second Cast Delay, and\nits damage is reduced against Boss monsters and\nin PvP.\nZeny Consumption by Skill Level",
          "levelDetails": [
            {
              "level": 1,
              "text": "500~1,000 zeny"
            },
            {
              "level": 2,
              "text": "1,000~2,000 zeny"
            },
            {
              "level": 3,
              "text": "1,500~3,000 zeny"
            },
            {
              "level": 4,
              "text": "2,000~4,000 zeny"
            },
            {
              "level": 5,
              "text": "2,500~5,000 zeny"
            },
            {
              "level": 6,
              "text": "3,000~6,000 zeny"
            },
            {
              "level": 7,
              "text": "3,500~7,000 zeny"
            },
            {
              "level": 8,
              "text": "4,000~8,000 zeny"
            },
            {
              "level": 9,
              "text": "4,500~9,000 zeny"
            },
            {
              "level": 10,
              "text": "5,000~10,000 zeny"
            }
          ],
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
                },
                {
                  "level": 6,
                  "value": "50"
                },
                {
                  "level": 7,
                  "value": "50"
                },
                {
                  "level": 8,
                  "value": "50"
                },
                {
                  "level": 9,
                  "value": "50"
                },
                {
                  "level": 10,
                  "value": "50"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/526.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/526",
          "tree": {
            "idx": 29,
            "row": 3,
            "col": 2,
            "columns": 9,
            "requirements": [
              {
                "id": 522,
                "level": 10,
                "name": "Dagger Throwing Practice",
                "visible": true
              },
              {
                "id": 525,
                "level": 5,
                "name": "Throw Huuma Shuriken",
                "visible": true
              }
            ]
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
                      "effect": "500~1,000 zeny",
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "1,000~2,000 zeny",
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "1,500~3,000 zeny",
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "2,000~4,000 zeny",
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "2,500~5,000 zeny",
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "3,000~6,000 zeny",
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "3,500~7,000 zeny",
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "4,000~8,000 zeny",
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "4,500~9,000 zeny",
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "5,000~10,000 zeny",
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
          "id": 532,
          "imageFile": "532.png",
          "name": "Mirror Image",
          "maxLevel": 10,
          "prerequisiteText": "Shadow Slash 3,",
          "group": "Supportive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Mirror Image can only be cast\nduring Ninja Aura status, and consumes 1 Shadow\nOrb. Create a mirror image that will enable the\ncaster to dodge a set number of long and short\nrange physical attacks. This skill cannot be\nused to block or evade magic based attacks.\nDuration and Number of Dodges by Skill Level",
          "levelDetails": [
            {
              "level": 1,
              "text": "60 Sec, 1 Dodge"
            },
            {
              "level": 2,
              "text": "80 Sec, 1 Dodge"
            },
            {
              "level": 3,
              "text": "100 Sec, 2 Dodges"
            },
            {
              "level": 4,
              "text": "120 Sec, 2 Dodges"
            },
            {
              "level": 5,
              "text": "140 Sec, 3 Dodges"
            },
            {
              "level": 6,
              "text": "160 Sec, 3 Dodges"
            },
            {
              "level": 7,
              "text": "180 Sec, 4 Dodges"
            },
            {
              "level": 8,
              "text": "200 Sec, 4 Dodges"
            },
            {
              "level": 9,
              "text": "220 Sec, 5 Dodges"
            },
            {
              "level": 10,
              "text": "240 Sec, 5 Dodges"
            }
          ],
          "castDelay": "1 second",
          "cooldown": "0.5 seconds",
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
                  "value": "32"
                },
                {
                  "level": 3,
                  "value": "34"
                },
                {
                  "level": 4,
                  "value": "36"
                },
                {
                  "level": 5,
                  "value": "38"
                },
                {
                  "level": 6,
                  "value": "40"
                },
                {
                  "level": 7,
                  "value": "42"
                },
                {
                  "level": 8,
                  "value": "44"
                },
                {
                  "level": 9,
                  "value": "46"
                },
                {
                  "level": 10,
                  "value": "48"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/532.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/532",
          "tree": {
            "idx": 30,
            "row": 3,
            "col": 3,
            "columns": 9,
            "requirements": [
              {
                "id": 530,
                "level": 3,
                "name": "Shadow Slash",
                "visible": true
              },
              {
                "id": 531,
                "level": 4,
                "name": "Cicada Skin Shed",
                "visible": true
              },
              {
                "id": 543,
                "level": 1,
                "name": "Ninja Aura",
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
                "value": "10"
              },
              {
                "label": "Cast Delay",
                "value": "1 second"
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
                      "effect": "60 Sec, 1 Dodge",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "80 Sec, 1 Dodge",
                      "sp-cost": "32"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "100 Sec, 2 Dodges",
                      "sp-cost": "34"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "120 Sec, 2 Dodges",
                      "sp-cost": "36"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "140 Sec, 3 Dodges",
                      "sp-cost": "38"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "160 Sec, 3 Dodges",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "180 Sec, 4 Dodges",
                      "sp-cost": "42"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "200 Sec, 4 Dodges",
                      "sp-cost": "44"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "220 Sec, 5 Dodges",
                      "sp-cost": "46"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "240 Sec, 5 Dodges",
                      "sp-cost": "48"
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
          "id": 544,
          "imageFile": "544.png",
          "name": "Killing Strike",
          "maxLevel": 10,
          "prerequisiteText": "Dagger Throwing Practice 7,",
          "group": "Offensive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Sacrifice the caster's remaining HP\nto inflict devastating damage to the targeted\nenemy. The amount of remaining HP affects the\ndamage inflicted, and each cast of this skill\nwill always reduce the caster's HP to 1.",
          "levelDetails": [],
          "levelExtras": [
            {
              "label": "SP Cost",
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
                },
                {
                  "level": 6,
                  "value": "80"
                },
                {
                  "level": 7,
                  "value": "85"
                },
                {
                  "level": 8,
                  "value": "90"
                },
                {
                  "level": 9,
                  "value": "95"
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
          "iconUrl": "assets/divine-pride/skills/544.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/544",
          "tree": {
            "idx": 31,
            "row": 3,
            "col": 4,
            "columns": 9,
            "requirements": [
              {
                "id": 522,
                "level": 7,
                "name": "Dagger Throwing Practice",
                "visible": true
              },
              {
                "id": 530,
                "level": 5,
                "name": "Shadow Slash",
                "visible": true
              },
              {
                "id": 543,
                "level": 1,
                "name": "Ninja Aura",
                "visible": true
              }
            ]
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
                      "sp-cost": "55"
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
                      "sp-cost": "65"
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
                      "sp-cost": "75"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "80"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "85"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "90"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "95"
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
      "id": 5479,
      "imageFile": "5479.png",
      "name": "Mirage",
      "maxLevel": 1,
      "prerequisiteText": "Basic Skill",
      "group": "Active",
      "type": "Support",
      "target": "1 Cell Ground Target",
      "recoversAp": "",
      "consumesAp": "",
      "description": "Summons a Mirage clone of yourself at the designated location.\nThe Mirage clone lasts for 20 seconds, and up to 3 clones can be summoned.\nThe Mirage clone reacts to the skills used by the main body, using those skills with approximately 30% of the main body's power.",
      "levelDetails": [],
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "25"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5479.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5479",
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
            "value": "Active Skill"
          },
          {
            "label": "Levels",
            "value": "1"
          },
          {
            "label": "Target",
            "value": "1 Cell Ground Target"
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
                  "sp-cost": "25"
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
      "id": 5488,
      "imageFile": "5488.png",
      "name": "Red Flame Cannon",
      "maxLevel": 10,
      "prerequisiteText": "Basic Skill",
      "group": "Active",
      "type": "Magic",
      "target": "Single Target",
      "recoversAp": "",
      "consumesAp": "",
      "description": "Using the haze of red flames, spews powerful flames, inflicting fire attribute magic damage to targets within the forward range.\nDeals additional damage depends on level of Darkening Cannon user learned, user's base level and SPL.\nConsumes 1 Haze of Prominence.",
      "levelDetails": [
        {
          "level": 1,
          "text": "MATK 1500+(Darkening Cannon Lv x70)%/Range: 5x5"
        },
        {
          "level": 2,
          "text": "MATK 2500+(Darkening Cannon Lv x140)%/Range: 5x5"
        },
        {
          "level": 3,
          "text": "MATK 3500+(Darkening Cannon Lv x210)%/Range: 5x5"
        },
        {
          "level": 4,
          "text": "MATK 4500+(Darkening Cannon Lv x280)%/Range: 5x5"
        },
        {
          "level": 5,
          "text": "MATK 5500+(Darkening Cannon Lv x350)%/Range: 5x5"
        },
        {
          "level": 6,
          "text": "MATK 6500+(Darkening Cannon Lv x420)%/Range: 7x7"
        },
        {
          "level": 7,
          "text": "MATK 7500+(Darkening Cannon Lv x490)%/Range: 7x7"
        },
        {
          "level": 8,
          "text": "MATK 8500+(Darkening Cannon Lv x560)%/Range: 7x7"
        },
        {
          "level": 9,
          "text": "MATK 9500+(Darkening Cannon Lv x630)%/Range: 7x7"
        },
        {
          "level": 10,
          "text": "MATK 10500+(Darkening Cannon Lv x700)%/Range: 7x7"
        }
      ],
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "53"
            },
            {
              "level": 2,
              "value": "56"
            },
            {
              "level": 3,
              "value": "59"
            },
            {
              "level": 4,
              "value": "62"
            },
            {
              "level": 5,
              "value": "65"
            },
            {
              "level": 6,
              "value": "68"
            },
            {
              "level": 7,
              "value": "71"
            },
            {
              "level": 8,
              "value": "74"
            },
            {
              "level": 9,
              "value": "77"
            },
            {
              "level": 10,
              "value": "80"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5488.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5488",
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
            "value": "10"
          },
          {
            "label": "Target",
            "value": "Single Target"
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
                  "effect": "MATK 1500+(Darkening Cannon Lv x 70)%/Range: 5 x 5",
                  "sp-cost": "53"
                }
              },
              {
                "level": 2,
                "values": {
                  "effect": "MATK 2500+(Darkening Cannon Lv x 140)%/Range: 5 x 5",
                  "sp-cost": "56"
                }
              },
              {
                "level": 3,
                "values": {
                  "effect": "MATK 3500+(Darkening Cannon Lv x 210)%/Range: 5 x 5",
                  "sp-cost": "59"
                }
              },
              {
                "level": 4,
                "values": {
                  "effect": "MATK 4500+(Darkening Cannon Lv x 280)%/Range: 5 x 5",
                  "sp-cost": "62"
                }
              },
              {
                "level": 5,
                "values": {
                  "effect": "MATK 5500+(Darkening Cannon Lv x 350)%/Range: 5 x 5",
                  "sp-cost": "65"
                }
              },
              {
                "level": 6,
                "values": {
                  "effect": "MATK 6500+(Darkening Cannon Lv x 420)%/Range: 7 x 7",
                  "sp-cost": "68"
                }
              },
              {
                "level": 7,
                "values": {
                  "effect": "MATK 7500+(Darkening Cannon Lv x 490)%/Range: 7 x 7",
                  "sp-cost": "71"
                }
              },
              {
                "level": 8,
                "values": {
                  "effect": "MATK 8500+(Darkening Cannon Lv x 560)%/Range: 7 x 7",
                  "sp-cost": "74"
                }
              },
              {
                "level": 9,
                "values": {
                  "effect": "MATK 9500+(Darkening Cannon Lv x 630)%/Range: 7 x 7",
                  "sp-cost": "77"
                }
              },
              {
                "level": 10,
                "values": {
                  "effect": "MATK 10500+(Darkening Cannon Lv x 700)%/Range: 7 x 7",
                  "sp-cost": "80"
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
          "skillName": "Red Flame Cannon",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/shiranui/rebalance_2.md",
          "section": "13.9",
          "notes": [
            "Reduces fixed casting time from 1.5 seconds to 1 seconds.",
            "Reduces cooldown from 1 second to 0.7 seconds.",
            "Removes 0.5 seconds delay after skill.",
            "Increases SP consumption from 62 to 92 based on level 10.",
            "Increases damage from 6200%Matk to 13350%Matk based on level 10.",
            "Increases factor weight of Darkening Cannon skill level in skill formula from 50 to 70."
          ],
          "specRows": [
            {
              "label": "Fixed Casting Time",
              "before": "1.5 seconds",
              "after": "1 seconds",
              "scope": "",
              "source": "Reduces fixed casting time from 1.5 seconds to 1 seconds."
            },
            {
              "label": "Cooldown",
              "before": "1 second",
              "after": "0.7 seconds",
              "scope": "",
              "source": "Reduces cooldown from 1 second to 0.7 seconds."
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
              "before": "62",
              "after": "92",
              "scope": "Lv 10",
              "source": "Increases SP consumption from 62 to 92 based on level 10."
            },
            {
              "label": "Damage",
              "before": "6200%Matk",
              "after": "13350%Matk",
              "scope": "Lv 10",
              "source": "Increases damage from 6200%Matk to 13350%Matk based on level 10."
            },
            {
              "label": "Factor Weight Of Darkening Cannon Skill Level In Skill Formula",
              "before": "50",
              "after": "70",
              "scope": "",
              "source": "Increases factor weight of Darkening Cannon skill level in skill formula from 50 to 70."
            }
          ]
        },
        {
          "skillName": "Red Flame Cannon",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/shiranui/rebalance_3.md",
          "section": "13.6",
          "notes": [
            "Reworks skill to become target skill and also deal damage to surrounding enemies around the target.",
            "Area of effect is 7 x 7 cells based on level 10.",
            "Increases cast range from 1 cell to 9 cells.",
            "Reduces SP consumption from 92 to 80 based on level 10.",
            "Reduces base damage from 13350%Matk to 10500%Matk based on level 10."
          ],
          "specRows": [
            {
              "label": "Cast Range",
              "before": "1 cells",
              "after": "9 cells",
              "scope": "",
              "source": "Increases cast range from 1 cell to 9 cells."
            },
            {
              "label": "SP Cost",
              "before": "92",
              "after": "80",
              "scope": "Lv 10",
              "source": "Reduces SP consumption from 92 to 80 based on level 10."
            },
            {
              "label": "Damage",
              "before": "13350%Matk",
              "after": "10500%Matk",
              "scope": "Lv 10",
              "source": "Reduces base damage from 13350%Matk to 10500%Matk based on level 10."
            }
          ]
        },
        {
          "skillName": "Red Flame Cannon",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/shiranui/rebalance_4.md",
          "section": "14.6",
          "notes": [
            "Increases base damage from 10500+(Darkening Cannon skill level x 700)%Matk to 11600+(Darkening Cannon skill level x 700)%Matk based on level 10."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "10500+(Darkening Cannon skill level x 700)%Matk",
              "after": "11600+(Darkening Cannon skill level x 700)%Matk",
              "scope": "Lv 10",
              "source": "Increases base damage from 10500+(Darkening Cannon skill level x 700)%Matk to 11600+(Darkening Cannon skill level x 700)%Matk based on level 10."
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
      "id": 5477,
      "imageFile": "5477.png",
      "name": "Infiltrate",
      "maxLevel": 5,
      "prerequisiteText": "Mirage 1",
      "group": "Active",
      "type": "Melee Physical",
      "target": "Single Target",
      "recoversAp": "",
      "consumesAp": "",
      "description": "Instantly seeps into the target's shadow and inflicts melee physical damage to the target.\nWhen cast, moves to the other side of the target and enters shadow cloaking state for 2 seconds.\nIf there are mirage clones of oneself within the 31x31 cell range around the target, the clones are brought to the area around the caster.\nIf the location across from the target is not moveable, the skill cannot be used.\nDamage is additionally increased depending on the caster's base level and CON.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK 700%"
        },
        {
          "level": 2,
          "text": "ATK 1400%"
        },
        {
          "level": 3,
          "text": "ATK 2100%"
        },
        {
          "level": 4,
          "text": "ATK 2800%"
        },
        {
          "level": 5,
          "text": "ATK 3500%"
        }
      ],
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
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5477.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5477",
      "tree": {
        "idx": 7,
        "row": 0,
        "col": 7,
        "columns": 9,
        "requirements": [
          {
            "id": 5479,
            "level": 1,
            "name": "Mirage",
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
            "value": "Single Target"
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
                  "base-damage-atk": "700%",
                  "sp-cost": "40"
                }
              },
              {
                "level": 2,
                "values": {
                  "base-damage-atk": "1400%",
                  "sp-cost": "40"
                }
              },
              {
                "level": 3,
                "values": {
                  "base-damage-atk": "2100%",
                  "sp-cost": "40"
                }
              },
              {
                "level": 4,
                "values": {
                  "base-damage-atk": "2800%",
                  "sp-cost": "40"
                }
              },
              {
                "level": 5,
                "values": {
                  "base-damage-atk": "3500%",
                  "sp-cost": "40"
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
      "id": 5485,
      "imageFile": "5485.png",
      "name": "Kunai - Distortion",
      "maxLevel": 10,
      "prerequisiteText": "basic skill",
      "group": "",
      "type": "Ranged physical",
      "target": "1 cell ground target",
      "recoversAp": "2",
      "consumesAp": "",
      "description": "Throw a kunai at 1 cell ground target, dealing Ranged physical damage to enemies within a 5x5 cell range and inflicting the Nightmare effect for 5 seconds. Additionally, install a [Distortion Zone] at that location for 5 seconds.\nDeals additional damage depends on level of Kunai - Refraction user learned, user's base level and POW.\nThe attack attribute depends on the attribute of the equipped kunai, and consumes 2 equipped kunai.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK 900+(Kunai - RefractionLv x10)%"
        },
        {
          "level": 2,
          "text": "ATK 1500+(Kunai - RefractionLv x20)%"
        },
        {
          "level": 3,
          "text": "ATK 2100+(Kunai - RefractionLv x30)%"
        },
        {
          "level": 4,
          "text": "ATK 2700+(Kunai - RefractionLv x40)%"
        },
        {
          "level": 5,
          "text": "ATK 3300+(Kunai - RefractionLv x50)%"
        },
        {
          "level": 6,
          "text": "ATK 3900+(Kunai - RefractionLv x60)%"
        },
        {
          "level": 7,
          "text": "ATK 4500+(Kunai - RefractionLv x70)%"
        },
        {
          "level": 8,
          "text": "ATK 5100+(Kunai - RefractionLv x80)%"
        },
        {
          "level": 9,
          "text": "ATK 5700+(Kunai - RefractionLv x90)%"
        },
        {
          "level": 10,
          "text": "ATK 6300+(Kunai - RefractionLv x100)%"
        }
      ],
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
              "value": "38"
            },
            {
              "level": 3,
              "value": "40"
            },
            {
              "level": 4,
              "value": "42"
            },
            {
              "level": 5,
              "value": "44"
            },
            {
              "level": 6,
              "value": "46"
            },
            {
              "level": 7,
              "value": "48"
            },
            {
              "level": 8,
              "value": "50"
            },
            {
              "level": 9,
              "value": "52"
            },
            {
              "level": 10,
              "value": "54"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5485.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5485",
      "tree": {
        "idx": 9,
        "row": 1,
        "col": 0,
        "columns": 9,
        "requirements": [
          {
            "id": 5479,
            "level": 1,
            "name": "Mirage",
            "visible": true
          }
        ]
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Ranged physical"
          },
          {
            "label": "Levels",
            "value": "10"
          },
          {
            "label": "Target",
            "value": "1 cell ground target"
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
                  "effect": "ATK 900+(Kunai - RefractionLv x 10)%",
                  "sp-cost": "36"
                }
              },
              {
                "level": 2,
                "values": {
                  "effect": "ATK 1500+(Kunai - RefractionLv x 20)%",
                  "sp-cost": "38"
                }
              },
              {
                "level": 3,
                "values": {
                  "effect": "ATK 2100+(Kunai - RefractionLv x 30)%",
                  "sp-cost": "40"
                }
              },
              {
                "level": 4,
                "values": {
                  "effect": "ATK 2700+(Kunai - RefractionLv x 40)%",
                  "sp-cost": "42"
                }
              },
              {
                "level": 5,
                "values": {
                  "effect": "ATK 3300+(Kunai - RefractionLv x 50)%",
                  "sp-cost": "44"
                }
              },
              {
                "level": 6,
                "values": {
                  "effect": "ATK 3900+(Kunai - RefractionLv x 60)%",
                  "sp-cost": "46"
                }
              },
              {
                "level": 7,
                "values": {
                  "effect": "ATK 4500+(Kunai - RefractionLv x 70)%",
                  "sp-cost": "48"
                }
              },
              {
                "level": 8,
                "values": {
                  "effect": "ATK 5100+(Kunai - RefractionLv x 80)%",
                  "sp-cost": "50"
                }
              },
              {
                "level": 9,
                "values": {
                  "effect": "ATK 5700+(Kunai - RefractionLv x 90)%",
                  "sp-cost": "52"
                }
              },
              {
                "level": 10,
                "values": {
                  "effect": "ATK 6300+(Kunai - RefractionLv x 100)%",
                  "sp-cost": "54"
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
          "skillName": "Kunai - Distortion",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/shiranui/rebalance_2.md",
          "section": "13.6",
          "notes": [
            "Increases SP consumption from 46 to 54 based on level 10.",
            "Increases AP recovery rate from 1 to 2.",
            "Increases damage from 4000%Atk to 6300%Atk based on level 10.",
            "Increases factor weight of Kunai - Refraction skill level in skill formula from 7 to 10."
          ],
          "specRows": [
            {
              "label": "SP Cost",
              "before": "46",
              "after": "54",
              "scope": "Lv 10",
              "source": "Increases SP consumption from 46 to 54 based on level 10."
            },
            {
              "label": "AP Generated",
              "before": "1",
              "after": "2",
              "scope": "",
              "source": "Increases AP recovery rate from 1 to 2."
            },
            {
              "label": "Damage",
              "before": "4000%Atk",
              "after": "6300%Atk",
              "scope": "Lv 10",
              "source": "Increases damage from 4000%Atk to 6300%Atk based on level 10."
            },
            {
              "label": "Factor Weight Of Kunai - Refraction Skill Level In Skill Formula",
              "before": "7",
              "after": "10",
              "scope": "",
              "source": "Increases factor weight of Kunai - Refraction skill level in skill formula from 7 to 10."
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
      "id": 5480,
      "imageFile": "5480.png",
      "name": "Shadow Hunting",
      "maxLevel": 10,
      "prerequisiteText": "Mirage 1",
      "group": "Active",
      "type": "Melee Physical",
      "target": "1 Cell Ground Target",
      "recoversAp": "",
      "consumesAp": "2",
      "description": "Swing the shadow sword at the location, inflicting melee physical damage to targets within a 5x5 range and applying a nightmare effect for 5 seconds.\nDamage is additionally increased depending on Shadow Flash skill level, caster's base level, and POW.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK 1500+(Shadow Flash Lv x5)%"
        },
        {
          "level": 2,
          "text": "ATK 2400+(Shadow Flash Lv x10)%"
        },
        {
          "level": 3,
          "text": "ATK 3300+(Shadow Flash Lv x15)%"
        },
        {
          "level": 4,
          "text": "ATK 4200+(Shadow Flash Lv x20)%"
        },
        {
          "level": 5,
          "text": "ATK 5100+(Shadow Flash Lv x25)%"
        },
        {
          "level": 6,
          "text": "ATK 6000+(Shadow Flash Lv x30)%"
        },
        {
          "level": 7,
          "text": "ATK 6900+(Shadow Flash Lv x35)%"
        },
        {
          "level": 8,
          "text": "ATK 7800+(Shadow Flash Lv x40)%"
        },
        {
          "level": 9,
          "text": "ATK 8700+(Shadow Flash Lv x45)%"
        },
        {
          "level": 10,
          "text": "ATK 9600+(Shadow Flash Lv x50)%"
        }
      ],
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "33"
            },
            {
              "level": 2,
              "value": "36"
            },
            {
              "level": 3,
              "value": "39"
            },
            {
              "level": 4,
              "value": "42"
            },
            {
              "level": 5,
              "value": "45"
            },
            {
              "level": 6,
              "value": "48"
            },
            {
              "level": 7,
              "value": "51"
            },
            {
              "level": 8,
              "value": "54"
            },
            {
              "level": 9,
              "value": "57"
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
      "iconUrl": "assets/divine-pride/skills/5480.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5480",
      "tree": {
        "idx": 11,
        "row": 1,
        "col": 2,
        "columns": 9,
        "requirements": [
          {
            "id": 5479,
            "level": 1,
            "name": "Mirage",
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
            "value": "1 Cell Ground Target"
          },
          {
            "label": "AP Consumed",
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
                  "effect": "ATK 1500+(Shadow Flash Lv x 5)%",
                  "sp-cost": "33"
                }
              },
              {
                "level": 2,
                "values": {
                  "effect": "ATK 2400+(Shadow Flash Lv x 10)%",
                  "sp-cost": "36"
                }
              },
              {
                "level": 3,
                "values": {
                  "effect": "ATK 3300+(Shadow Flash Lv x 15)%",
                  "sp-cost": "39"
                }
              },
              {
                "level": 4,
                "values": {
                  "effect": "ATK 4200+(Shadow Flash Lv x 20)%",
                  "sp-cost": "42"
                }
              },
              {
                "level": 5,
                "values": {
                  "effect": "ATK 5100+(Shadow Flash Lv x 25)%",
                  "sp-cost": "45"
                }
              },
              {
                "level": 6,
                "values": {
                  "effect": "ATK 6000+(Shadow Flash Lv x 30)%",
                  "sp-cost": "48"
                }
              },
              {
                "level": 7,
                "values": {
                  "effect": "ATK 6900+(Shadow Flash Lv x 35)%",
                  "sp-cost": "51"
                }
              },
              {
                "level": 8,
                "values": {
                  "effect": "ATK 7800+(Shadow Flash Lv x 40)%",
                  "sp-cost": "54"
                }
              },
              {
                "level": 9,
                "values": {
                  "effect": "ATK 8700+(Shadow Flash Lv x 45)%",
                  "sp-cost": "57"
                }
              },
              {
                "level": 10,
                "values": {
                  "effect": "ATK 9600+(Shadow Flash Lv x 50)%",
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
          "skillName": "Shadow Hunting",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/shiranui/rebalance_2.md",
          "section": "13.1",
          "notes": [
            "Increases SP consumption from 48 to 60 based on level 10.",
            "Increases AP recovery rate from 1 to 2."
          ],
          "specRows": [
            {
              "label": "SP Cost",
              "before": "48",
              "after": "60",
              "scope": "Lv 10",
              "source": "Increases SP consumption from 48 to 60 based on level 10."
            },
            {
              "label": "AP Generated",
              "before": "1",
              "after": "2",
              "scope": "",
              "source": "Increases AP recovery rate from 1 to 2."
            }
          ]
        },
        {
          "skillName": "Shadow Hunting",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/shiranui/rebalance_3.md",
          "section": "13.1",
          "notes": [
            "Increases base damage from 4500%Atk to 9600%Atk based on level 10."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "4500%Atk",
              "after": "9600%Atk",
              "scope": "Lv 10",
              "source": "Increases base damage from 4500%Atk to 9600%Atk based on level 10."
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
      "id": 5499,
      "imageFile": "5499.png",
      "name": "Four Colors Charm",
      "maxLevel": 1,
      "prerequisiteText": "Release Ninja Spell 1, Mirage 1",
      "group": "Active",
      "type": "Buff",
      "target": "Instant Casting",
      "recoversAp": "",
      "consumesAp": "20",
      "description": "Can only be used when 10 spirits of the same property are summoned.\nThe charm that strengthens the skills linked to the property of the summoned spirit.\nIncreases Red Flame Cannon / Thundering Cannon / Cold Blooded cannon / Golden Dragon cannon damage.\nThe buffs from different property can be overlapped.\n[Fire Charm (spirit of fire)]\n: [Four Colors Charm: Fire] - Red Flame Cannon Damage +8500%\n[Ice Charm (spirit of water)]\n: [Four Colors Charm: Water] - Cold Blooded cannon damage +7000%\n[Wind Charm (spirit of the wind)]\n: [Four Colors Charm: Wind] - Thundering Cannon damage +8500%\n[Earth Charm (spirit of the earth)]\n: [Four Colors Charm: Earth] - Golden Dragon Cannon damage +5500%",
      "levelDetails": [
        {
          "level": 1,
          "text": "Duration: 300 seconds."
        }
      ],
      "levelExtras": [],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5499.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5499",
      "tree": {
        "idx": 12,
        "row": 1,
        "col": 3,
        "columns": 9,
        "requirements": [
          {
            "id": 3019,
            "level": 1,
            "name": "Release Ninja Spell",
            "visible": false
          },
          {
            "id": 5479,
            "level": 1,
            "name": "Mirage",
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
            "value": "Instant Casting"
          },
          {
            "label": "AP Consumed",
            "value": "20"
          }
        ],
        "levelTables": [
          {
            "title": "Level Scaling",
            "columns": [
              {
                "id": "duration",
                "label": "Duration"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "duration": "300 seconds"
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
      "id": 5489,
      "imageFile": "5489.png",
      "name": "Cold Blooded Cannon",
      "maxLevel": 10,
      "prerequisiteText": "Basic Skill",
      "group": "Active",
      "type": "Magic",
      "target": "1 Cell Ground Target",
      "recoversAp": "",
      "consumesAp": "",
      "description": "Throws a haze of ice and snow and summons cold-blooded spheres that explode in the area, inflicting water magic damage to targets within the range.\nDeals additional damage depends on level of Darkening Cannon user learned, user's base level and SPL.\nConsumes 1 Haze of Icy Snow.",
      "levelDetails": [
        {
          "level": 1,
          "text": "MATK 1200+(Darkening Cannon Lv x40)%\nRange : 5x5cell"
        },
        {
          "level": 2,
          "text": "MATK 2050+(Darkening Cannon Lv x80)%\nRange : 5x5cell"
        },
        {
          "level": 3,
          "text": "MATK 2900+(Darkening Cannon Lv x120)%\nRange : 5x5cell"
        },
        {
          "level": 4,
          "text": "MATK 3750+(Darkening Cannon Lv x160)%\nRange : 5x5cell"
        },
        {
          "level": 5,
          "text": "MATK 4600+(Darkening Cannon Lv x200)%\nRange : 5x5cell"
        },
        {
          "level": 6,
          "text": "MATK 5450+(Darkening Cannon Lv x240)%\nRange : 7x7cell"
        },
        {
          "level": 7,
          "text": "MATK 6300+(Darkening Cannon Lv x280)%\nRange : 7x7cell"
        },
        {
          "level": 8,
          "text": "MATK 7150+(Darkening Cannon Lv x320)%\nRange : 7x7cell"
        },
        {
          "level": 9,
          "text": "MATK 8000+(Darkening Cannon Lv x360)%\nRange : 7x7cell"
        },
        {
          "level": 10,
          "text": "MATK 8850+(Darkening Cannon Lv x400)%\nRange : 9x9cell"
        }
      ],
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "58"
            },
            {
              "level": 2,
              "value": "60"
            },
            {
              "level": 3,
              "value": "62"
            },
            {
              "level": 4,
              "value": "64"
            },
            {
              "level": 5,
              "value": "66"
            },
            {
              "level": 6,
              "value": "68"
            },
            {
              "level": 7,
              "value": "70"
            },
            {
              "level": 8,
              "value": "72"
            },
            {
              "level": 9,
              "value": "74"
            },
            {
              "level": 10,
              "value": "76"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5489.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5489",
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
            "value": "Active Skill"
          },
          {
            "label": "Levels",
            "value": "10"
          },
          {
            "label": "Target",
            "value": "1 Cell Ground Target"
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
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "effect": "MATK 1200+(Darkening Cannon Lv x 40)%",
                  "area-of-effect": "5x5",
                  "sp-cost": "58"
                }
              },
              {
                "level": 2,
                "values": {
                  "effect": "MATK 2050+(Darkening Cannon Lv x 80)%",
                  "area-of-effect": "5x5",
                  "sp-cost": "60"
                }
              },
              {
                "level": 3,
                "values": {
                  "effect": "MATK 2900+(Darkening Cannon Lv x 120)%",
                  "area-of-effect": "5x5",
                  "sp-cost": "62"
                }
              },
              {
                "level": 4,
                "values": {
                  "effect": "MATK 3750+(Darkening Cannon Lv x 160)%",
                  "area-of-effect": "5x5",
                  "sp-cost": "64"
                }
              },
              {
                "level": 5,
                "values": {
                  "effect": "MATK 4600+(Darkening Cannon Lv x 200)%",
                  "area-of-effect": "5x5",
                  "sp-cost": "66"
                }
              },
              {
                "level": 6,
                "values": {
                  "effect": "MATK 5450+(Darkening Cannon Lv x 240)%",
                  "area-of-effect": "7x7",
                  "sp-cost": "68"
                }
              },
              {
                "level": 7,
                "values": {
                  "effect": "MATK 6300+(Darkening Cannon Lv x 280)%",
                  "area-of-effect": "7x7",
                  "sp-cost": "70"
                }
              },
              {
                "level": 8,
                "values": {
                  "effect": "MATK 7150+(Darkening Cannon Lv x 320)%",
                  "area-of-effect": "7x7",
                  "sp-cost": "72"
                }
              },
              {
                "level": 9,
                "values": {
                  "effect": "MATK 8000+(Darkening Cannon Lv x 360)%",
                  "area-of-effect": "7x7",
                  "sp-cost": "74"
                }
              },
              {
                "level": 10,
                "values": {
                  "effect": "MATK 8850+(Darkening Cannon Lv x 400)%",
                  "area-of-effect": "9x9",
                  "sp-cost": "76"
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
          "skillName": "Cold Blooded Cannon",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/shiranui/rebalance_2.md",
          "section": "13.10",
          "notes": [
            "Reduces fixed casting time from 1.5 seconds to 1 seconds.",
            "Removes 0.5 seconds delay after skill.",
            "Increases SP consumption from 61 to 88 based on level 10.",
            "Increases damage from 3500%Matk to 5750%Matk based on level 10.",
            "Increases factor weight of Darkening Cannon skill level in skill formula from 25 to 40."
          ],
          "specRows": [
            {
              "label": "Fixed Casting Time",
              "before": "1.5 seconds",
              "after": "1 seconds",
              "scope": "",
              "source": "Reduces fixed casting time from 1.5 seconds to 1 seconds."
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
              "before": "61",
              "after": "88",
              "scope": "Lv 10",
              "source": "Increases SP consumption from 61 to 88 based on level 10."
            },
            {
              "label": "Damage",
              "before": "3500%Matk",
              "after": "5750%Matk",
              "scope": "Lv 10",
              "source": "Increases damage from 3500%Matk to 5750%Matk based on level 10."
            },
            {
              "label": "Factor Weight Of Darkening Cannon Skill Level In Skill Formula",
              "before": "25",
              "after": "40",
              "scope": "",
              "source": "Increases factor weight of Darkening Cannon skill level in skill formula from 25 to 40."
            }
          ]
        },
        {
          "skillName": "Cold Blooded Cannon",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/shiranui/rebalance_3.md",
          "section": "13.7",
          "notes": [
            "Reduces SP consumption from 92 to 76 based on level 10.",
            "Increases base damage from 5750%Matk to 8850%Matk based on level 10."
          ],
          "specRows": [
            {
              "label": "SP Cost",
              "before": "92",
              "after": "76",
              "scope": "Lv 10",
              "source": "Reduces SP consumption from 92 to 76 based on level 10."
            },
            {
              "label": "Damage",
              "before": "5750%Matk",
              "after": "8850%Matk",
              "scope": "Lv 10",
              "source": "Increases base damage from 5750%Matk to 8850%Matk based on level 10."
            }
          ]
        },
        {
          "skillName": "Cold Blooded Cannon",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/shiranui/rebalance_4.md",
          "section": "14.7",
          "notes": [
            "Increases base damage from 8850+(Darkening Cannon skill level x 400)%Matk to 9950+(Darkening Cannon skill level x 400)%Matk based on level 10."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "8850+(Darkening Cannon skill level x 400)%Matk",
              "after": "9950+(Darkening Cannon skill level x 400)%Matk",
              "scope": "Lv 10",
              "source": "Increases base damage from 8850+(Darkening Cannon skill level x 400)%Matk to 9950+(Darkening Cannon skill level x 400)%Matk based on level 10."
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
      "id": 5476,
      "imageFile": "5476.png",
      "name": "Melt Away",
      "maxLevel": 5,
      "prerequisiteText": "Mirage 1",
      "group": "Active",
      "type": "Magic",
      "target": "1 cell ground target",
      "recoversAp": "",
      "consumesAp": "",
      "description": "Melts your own shadow and scatters it forward, inflicting shadow property magic damage to targets within the range.\nAs soon as you use the skill, you move backwards 3 cells and enter shadow cloaking for 2 seconds.\nDamage is additionally increased depending on the caster's base level and CON.",
      "levelDetails": [
        {
          "level": 1,
          "text": "MATK 700%"
        },
        {
          "level": 2,
          "text": "MATK 1400%"
        },
        {
          "level": 3,
          "text": "MATK 2100%"
        },
        {
          "level": 4,
          "text": "MATK 2800%"
        },
        {
          "level": 5,
          "text": "MATK 3500%"
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
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5476.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5476",
      "tree": {
        "idx": 14,
        "row": 1,
        "col": 5,
        "columns": 9,
        "requirements": [
          {
            "id": 5479,
            "level": 1,
            "name": "Mirage",
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
            "value": "1 cell ground target"
          }
        ],
        "levelTables": [
          {
            "title": "Level Scaling",
            "columns": [
              {
                "id": "base-damage-matk",
                "label": "Base Damage (MATK)"
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
                  "base-damage-matk": "700%",
                  "sp-cost": "35"
                }
              },
              {
                "level": 2,
                "values": {
                  "base-damage-matk": "1400%",
                  "sp-cost": "35"
                }
              },
              {
                "level": 3,
                "values": {
                  "base-damage-matk": "2100%",
                  "sp-cost": "35"
                }
              },
              {
                "level": 4,
                "values": {
                  "base-damage-matk": "2800%",
                  "sp-cost": "35"
                }
              },
              {
                "level": 5,
                "values": {
                  "base-damage-matk": "3500%",
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
      "id": 5486,
      "imageFile": "5486.png",
      "name": "Kunai - Rotation",
      "maxLevel": 5,
      "prerequisiteText": "basic skill",
      "group": "",
      "type": "Ranged physical",
      "target": "Instant cast",
      "recoversAp": "",
      "consumesAp": "",
      "description": "Scatter kunai around yourself, dealing Ranged physical damage every 0.5 seconds for 2 seconds to targets within range, and putting yourself in a shadowy state. Additionally, install a [Distortion Zone] at your location for 5 seconds.\nDeals additional damage depends on level of Kunai - Distortion user learned, user's base level and POW.\nThe attack attribute depends on the attribute of the equipped kunai, and consumes 5 equipped kunai.",
      "levelDetails": [
        {
          "level": 1,
          "text": "Per hit ATK 1500+(Kunai DistortionLv x70)%\nrange : 5x5Cell"
        },
        {
          "level": 2,
          "text": "Per hit ATK 2200+(Kunai DistortionLv x140)%\nrange : 5x5Cell"
        },
        {
          "level": 3,
          "text": "Per hit ATK 2900+(Kunai DistortionLv x210)%\nrange : 7x7Cell"
        },
        {
          "level": 4,
          "text": "Per hit ATK 3600+(Kunai DistortionLv x280)%\nrange : 7x7Cell"
        },
        {
          "level": 5,
          "text": "Per hit ATK 4300+(Kunai DistortionLv x350)%\nrange : 9x9Cell"
        }
      ],
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "44"
            },
            {
              "level": 2,
              "value": "52"
            },
            {
              "level": 3,
              "value": "60"
            },
            {
              "level": 4,
              "value": "68"
            },
            {
              "level": 5,
              "value": "76"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5486.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5486",
      "tree": {
        "idx": 16,
        "row": 1,
        "col": 7,
        "columns": 9,
        "requirements": [
          {
            "id": 5485,
            "level": 3,
            "name": "Kunai - Distortion",
            "visible": true
          }
        ]
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Ranged physical"
          },
          {
            "label": "Levels",
            "value": "5"
          },
          {
            "label": "Target",
            "value": "Instant cast"
          },
          {
            "label": "Pulse",
            "value": "0.5 seconds"
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
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "effect": "Per hit ATK 1500+(Kunai DistortionLv x 70)%",
                  "area-of-effect": "5x5",
                  "sp-cost": "44"
                }
              },
              {
                "level": 2,
                "values": {
                  "effect": "Per hit ATK 2200+(Kunai DistortionLv x 140)%",
                  "area-of-effect": "5x5",
                  "sp-cost": "52"
                }
              },
              {
                "level": 3,
                "values": {
                  "effect": "Per hit ATK 2900+(Kunai DistortionLv x 210)%",
                  "area-of-effect": "7x7",
                  "sp-cost": "60"
                }
              },
              {
                "level": 4,
                "values": {
                  "effect": "Per hit ATK 3600+(Kunai DistortionLv x 280)%",
                  "area-of-effect": "7x7",
                  "sp-cost": "68"
                }
              },
              {
                "level": 5,
                "values": {
                  "effect": "Per hit ATK 4300+(Kunai DistortionLv x 350)%",
                  "area-of-effect": "9x9",
                  "sp-cost": "76"
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
          "skillName": "Kunai - Rotation",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/shiranui/rebalance_2.md",
          "section": "13.7",
          "notes": [
            "Increases SP consumption from 55 to 76 based on level 5.",
            "Increases damage from 3300%Atk to 4300%Atk based on level 5.",
            "Increases factor weight of Kunai - Distortion skill level in skill formula from 50 to 70."
          ],
          "specRows": [
            {
              "label": "SP Cost",
              "before": "55",
              "after": "76",
              "scope": "Lv 5",
              "source": "Increases SP consumption from 55 to 76 based on level 5."
            },
            {
              "label": "Damage",
              "before": "3300%Atk",
              "after": "4300%Atk",
              "scope": "Lv 5",
              "source": "Increases damage from 3300%Atk to 4300%Atk based on level 5."
            },
            {
              "label": "Factor Weight Of Kunai - Distortion Skill Level In Skill Formula",
              "before": "50",
              "after": "70",
              "scope": "",
              "source": "Increases factor weight of Kunai - Distortion skill level in skill formula from 50 to 70."
            }
          ]
        },
        {
          "skillName": "Kunai - Rotation",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/shiranui/rebalance_4.md",
          "section": "14.4",
          "notes": [
            "Increases base damage from 4300+(Kunai - Distortion skill level x 350)%Atk to 50506200+(Kunai - Distortion skill level x 350500)%Atk based on level 5."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "4300+(Kunai - Distortion skill level x 350)%Atk",
              "after": "50506200+(Kunai - Distortion skill level x 350500)%Atk",
              "scope": "Lv 5",
              "source": "Increases base damage from 4300+(Kunai - Distortion skill level x 350)%Atk to 50506200+(Kunai - Distortion skill level x 350500)%Atk based on level 5."
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
      "id": 5483,
      "imageFile": "5483.png",
      "name": "Huuma Shuriken - Grasp",
      "maxLevel": 10,
      "prerequisiteText": "Kunai - Distortion 3",
      "group": "Active",
      "type": "Range Physical",
      "target": "1 Cell Ground Target",
      "recoversAp": "",
      "consumesAp": "3",
      "description": "Throws a Huuma Shuriken to install a powerful [Hidden Weapon Zone] at a 1 Cell Ground Target, dealing Range Physical damage every 0.25 seconds to enemies within the surrounding range for 5 seconds and applying the Nightmare effect for 5 seconds.\nUp to two [Hidden Weapon Zone] can be installed.\nDeals additional damage depends on level of Huuma Shuriken - Construct user learned, user's base level and POW. Attack properties depend on the properties of the equipped kunai.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK per hit 1200+(Huuma Shuriken - Construct Lv x5)%\nRange: 5x5"
        },
        {
          "level": 2,
          "text": "ATK per hit 1550+(Huuma Shuriken - Construct Lv x10)%\nRange: 5x5"
        },
        {
          "level": 3,
          "text": "ATK per hit 1900+(Huuma Shuriken - Construct Lv x15)%\nRange: 5x5"
        },
        {
          "level": 4,
          "text": "ATK per hit 2250+(Huuma Shuriken - Construct Lv x20)%\nRange: 5x5"
        },
        {
          "level": 5,
          "text": "ATK per hit 2600+(Huuma Shuriken - Construct Lv x25)%\nRange: 7x7"
        },
        {
          "level": 6,
          "text": "ATK per hit 2950+(Huuma Shuriken - Construct Lv x30)%\nRange: 7x7"
        },
        {
          "level": 7,
          "text": "ATK per hit 3300+(Huuma Shuriken - Construct Lv x35)%\nRange: 7x7"
        },
        {
          "level": 8,
          "text": "ATK per hit 3650+(Huuma Shuriken - Construct Lv x40)%\nRange: 7x7"
        },
        {
          "level": 9,
          "text": "ATK per hit 4000+(Huuma Shuriken - Construct Lv x45)%\nRange: 9x9"
        },
        {
          "level": 10,
          "text": "ATK per hit 4350+(Huuma Shuriken - Construct Lv x50)%\nRange: 9x9"
        }
      ],
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "48"
            },
            {
              "level": 2,
              "value": "52"
            },
            {
              "level": 3,
              "value": "56"
            },
            {
              "level": 4,
              "value": "60"
            },
            {
              "level": 5,
              "value": "64"
            },
            {
              "level": 6,
              "value": "68"
            },
            {
              "level": 7,
              "value": "72"
            },
            {
              "level": 8,
              "value": "76"
            },
            {
              "level": 9,
              "value": "80"
            },
            {
              "level": 10,
              "value": "84"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5483.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5483",
      "tree": {
        "idx": 17,
        "row": 1,
        "col": 8,
        "columns": 9,
        "requirements": [
          {
            "id": 5485,
            "level": 3,
            "name": "Kunai - Distortion",
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
            "value": "1 Cell Ground Target"
          },
          {
            "label": "AP Consumed",
            "value": "3"
          },
          {
            "label": "Pulse",
            "value": "0.25 seconds"
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
                  "effect": "ATK per hit 1200+(Huuma Shuriken - Construct Lv x 5)%\nRange: 5 x 5",
                  "sp-cost": "48"
                }
              },
              {
                "level": 2,
                "values": {
                  "effect": "ATK per hit 1550+(Huuma Shuriken - Construct Lv x 10)%\nRange: 5 x 5",
                  "sp-cost": "52"
                }
              },
              {
                "level": 3,
                "values": {
                  "effect": "ATK per hit 1900+(Huuma Shuriken - Construct Lv x 15)%\nRange: 5 x 5",
                  "sp-cost": "56"
                }
              },
              {
                "level": 4,
                "values": {
                  "effect": "ATK per hit 2250+(Huuma Shuriken - Construct Lv x 20)%\nRange: 5 x 5",
                  "sp-cost": "60"
                }
              },
              {
                "level": 5,
                "values": {
                  "effect": "ATK per hit 2600+(Huuma Shuriken - Construct Lv x 25)%\nRange: 7 x 7",
                  "sp-cost": "64"
                }
              },
              {
                "level": 6,
                "values": {
                  "effect": "ATK per hit 2950+(Huuma Shuriken - Construct Lv x 30)%\nRange: 7 x 7",
                  "sp-cost": "68"
                }
              },
              {
                "level": 7,
                "values": {
                  "effect": "ATK per hit 3300+(Huuma Shuriken - Construct Lv x 35)%\nRange: 7 x 7",
                  "sp-cost": "72"
                }
              },
              {
                "level": 8,
                "values": {
                  "effect": "ATK per hit 3650+(Huuma Shuriken - Construct Lv x 40)%\nRange: 7 x 7",
                  "sp-cost": "76"
                }
              },
              {
                "level": 9,
                "values": {
                  "effect": "ATK per hit 4000+(Huuma Shuriken - Construct Lv x 45)%\nRange: 9 x 9",
                  "sp-cost": "80"
                }
              },
              {
                "level": 10,
                "values": {
                  "effect": "ATK per hit 4350+(Huuma Shuriken - Construct Lv x 50)%\nRange: 9 x 9",
                  "sp-cost": "84"
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
          "skillName": "Huuma Shuriken - Grasp",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/shiranui/rebalance_2.md",
          "section": "13.4",
          "notes": [
            "Removes 0.5 seconds delay after skill.",
            "Increases SP consumption from 56 to 84 based on level 10.",
            "Increases AP recovery rate from 2 to 3."
          ],
          "specRows": [
            {
              "label": "Cast Delay",
              "before": "0.5 seconds delay",
              "after": "Removed",
              "scope": "",
              "source": "Removes 0.5 seconds delay after skill."
            },
            {
              "label": "SP Cost",
              "before": "56",
              "after": "84",
              "scope": "Lv 10",
              "source": "Increases SP consumption from 56 to 84 based on level 10."
            },
            {
              "label": "AP Generated",
              "before": "2",
              "after": "3",
              "scope": "",
              "source": "Increases AP recovery rate from 2 to 3."
            }
          ]
        },
        {
          "skillName": "Huuma Shuriken - Grasp",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/shiranui/rebalance_3.md",
          "section": "13.4",
          "notes": [
            "Increases base damage from 2700%Atk to 4350%Atk based on level 10."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "2700%Atk",
              "after": "4350%Atk",
              "scope": "Lv 10",
              "source": "Increases base damage from 2700%Atk to 4350%Atk based on level 10."
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
      "id": 5481,
      "imageFile": "5481.png",
      "name": "Shadow Dance",
      "maxLevel": 10,
      "prerequisiteText": "Shadow Hunting 3",
      "group": "Active",
      "type": "Melee Physical",
      "target": "Instant Cast",
      "recoversAp": "",
      "consumesAp": "2",
      "description": "Swings a shadow and inflicts melee physical damage to enemies within the surrounding range.\nDamage increases additionally depending on Shadow Hunting skill level, caster's base level, and POW.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK 1300+(Shadow HuntingLv x50)%\nRange: 5x5"
        },
        {
          "level": 2,
          "text": "ATK 2050+(Shadow HuntingLv x100)%\nRange: 5x5"
        },
        {
          "level": 3,
          "text": "ATK 2800+(Shadow HuntingLv x150)%\nRange: 5x5"
        },
        {
          "level": 4,
          "text": "ATK 3550+(Shadow HuntingLv x200)%\nRange: 5x5"
        },
        {
          "level": 5,
          "text": "ATK 4300+(Shadow HuntingLv x250)%\nRange: 5x5"
        },
        {
          "level": 6,
          "text": "ATK 5050+(Shadow HuntingLv x300)%\nRange: 7x7"
        },
        {
          "level": 7,
          "text": "ATK 5800+(Shadow HuntingLv x350)%\nRange: 7x7"
        },
        {
          "level": 8,
          "text": "ATK 6550+(Shadow HuntingLv x400)%\nRange: 7x7"
        },
        {
          "level": 9,
          "text": "ATK 7300+(Shadow HuntingLv x450)%\nRange: 7x7"
        },
        {
          "level": 10,
          "text": "ATK 8050+(Shadow HuntingLv x500)%\nRange: 7x7"
        }
      ],
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
              "value": "42"
            },
            {
              "level": 3,
              "value": "47"
            },
            {
              "level": 4,
              "value": "52"
            },
            {
              "level": 5,
              "value": "57"
            },
            {
              "level": 6,
              "value": "62"
            },
            {
              "level": 7,
              "value": "67"
            },
            {
              "level": 8,
              "value": "72"
            },
            {
              "level": 9,
              "value": "77"
            },
            {
              "level": 10,
              "value": "82"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5481.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5481",
      "tree": {
        "idx": 18,
        "row": 2,
        "col": 0,
        "columns": 9,
        "requirements": [
          {
            "id": 5480,
            "level": 3,
            "name": "Shadow Hunting",
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
            "value": "Instant Cast"
          },
          {
            "label": "AP Consumed",
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
                  "effect": "ATK 1300+(Shadow HuntingLv x 50)%\nRange: 5 x 5",
                  "sp-cost": "37"
                }
              },
              {
                "level": 2,
                "values": {
                  "effect": "ATK 2050+(Shadow HuntingLv x 100)%\nRange: 5 x 5",
                  "sp-cost": "42"
                }
              },
              {
                "level": 3,
                "values": {
                  "effect": "ATK 2800+(Shadow HuntingLv x 150)%\nRange: 5 x 5",
                  "sp-cost": "47"
                }
              },
              {
                "level": 4,
                "values": {
                  "effect": "ATK 3550+(Shadow HuntingLv x 200)%\nRange: 5 x 5",
                  "sp-cost": "52"
                }
              },
              {
                "level": 5,
                "values": {
                  "effect": "ATK 4300+(Shadow HuntingLv x 250)%\nRange: 5 x 5",
                  "sp-cost": "57"
                }
              },
              {
                "level": 6,
                "values": {
                  "effect": "ATK 5050+(Shadow HuntingLv x 300)%\nRange: 7 x 7",
                  "sp-cost": "62"
                }
              },
              {
                "level": 7,
                "values": {
                  "effect": "ATK 5800+(Shadow HuntingLv x 350)%\nRange: 7 x 7",
                  "sp-cost": "67"
                }
              },
              {
                "level": 8,
                "values": {
                  "effect": "ATK 6550+(Shadow HuntingLv x 400)%\nRange: 7 x 7",
                  "sp-cost": "72"
                }
              },
              {
                "level": 9,
                "values": {
                  "effect": "ATK 7300+(Shadow HuntingLv x 450)%\nRange: 7 x 7",
                  "sp-cost": "77"
                }
              },
              {
                "level": 10,
                "values": {
                  "effect": "ATK 8050+(Shadow HuntingLv x 500)%\nRange: 7 x 7",
                  "sp-cost": "82"
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
          "skillName": "Shadow Dance",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/shiranui/rebalance_2.md",
          "section": "13.2",
          "notes": [
            "Removes variable casting time.",
            "Reduces cooldown from 1 second to 0.5 seconds.",
            "Reduces delay after skill from 0.5 seconds to 0.25 seconds.",
            "Increases SP consumption from 52 to 65 based on level 10.",
            "Increases AP recovery rate from 1 to 2.",
            "Reduces damage from 6500%Atk to 5900%Atk based on level 10."
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
              "before": "1 second",
              "after": "0.5 seconds",
              "scope": "",
              "source": "Reduces cooldown from 1 second to 0.5 seconds."
            },
            {
              "label": "Cast Delay",
              "before": "0.5 seconds",
              "after": "0.25 seconds",
              "scope": "",
              "source": "Reduces delay after skill from 0.5 seconds to 0.25 seconds."
            },
            {
              "label": "SP Cost",
              "before": "52",
              "after": "65",
              "scope": "Lv 10",
              "source": "Increases SP consumption from 52 to 65 based on level 10."
            },
            {
              "label": "AP Generated",
              "before": "1",
              "after": "2",
              "scope": "",
              "source": "Increases AP recovery rate from 1 to 2."
            },
            {
              "label": "Damage",
              "before": "6500%Atk",
              "after": "5900%Atk",
              "scope": "Lv 10",
              "source": "Reduces damage from 6500%Atk to 5900%Atk based on level 10."
            }
          ]
        },
        {
          "skillName": "Shadow Dance",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/shiranui/rebalance_3.md",
          "section": "13.2",
          "notes": [
            "Reduces skill cooldown from 0.5 seconds to 0.4 seconds.",
            "Increases SP consumption from 65 to 82 based on level 10.",
            "Reduces area of effect from 9 x 9 cells to 7 x 7 cells based on level 10.",
            "Increases base damage from 5900%Atk to 8050%Atk based on level 10."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "0.5 seconds",
              "after": "0.4 seconds",
              "scope": "",
              "source": "Reduces skill cooldown from 0.5 seconds to 0.4 seconds."
            },
            {
              "label": "SP Cost",
              "before": "65",
              "after": "82",
              "scope": "Lv 10",
              "source": "Increases SP consumption from 65 to 82 based on level 10."
            },
            {
              "label": "Area of Effect",
              "before": "9 x 9 cells",
              "after": "7 x 7 cells",
              "scope": "Lv 10",
              "source": "Reduces area of effect from 9 x 9 cells to 7 x 7 cells based on level 10."
            },
            {
              "label": "Damage",
              "before": "5900%Atk",
              "after": "8050%Atk",
              "scope": "Lv 10",
              "source": "Increases base damage from 5900%Atk to 8050%Atk based on level 10."
            }
          ]
        },
        {
          "skillName": "Shadow Dance",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/shiranui/rebalance_4.md",
          "section": "14.1",
          "notes": [
            "Increases base damage from 8050+(Shadow Hunting skill level x 500)%Atk to 9750+(Shadow Hunting skill level x 500700)%Atk based on level 10."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "8050+(Shadow Hunting skill level x 500)%Atk",
              "after": "9750+(Shadow Hunting skill level x 500700)%Atk",
              "scope": "Lv 10",
              "source": "Increases base damage from 8050+(Shadow Hunting skill level x 500)%Atk to 9750+(Shadow Hunting skill level x 500700)%Atk based on level 10."
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
      "id": 5490,
      "imageFile": "5490.png",
      "name": "Thundering Cannon",
      "maxLevel": 10,
      "prerequisiteText": "Basic Skill",
      "group": "Active",
      "type": "Magic",
      "target": "Single Target",
      "recoversAp": "",
      "consumesAp": "",
      "description": "Throws Haze of North Wind on the ground to summon the powerful wind, inflicts wind property magical damage to the target and surrounding enemies around the target.\nDeals additional damage depends on level of Darkening Cannon user learned, user's base level and SPL.\nConsumes 1 Haze of North Wind.",
      "levelDetails": [
        {
          "level": 1,
          "text": "MATK 1450+(Darkening Cannon Lv x70)%/Range: 5x5"
        },
        {
          "level": 2,
          "text": "MATK 2400+(Darkening Cannon Lv x140)%/Range: 5x5"
        },
        {
          "level": 3,
          "text": "MATK 3350+(Darkening Cannon Lv x210)%/Range: 5x5"
        },
        {
          "level": 4,
          "text": "MATK 4300+(Darkening Cannon Lv x280)%/Range: 5x5"
        },
        {
          "level": 5,
          "text": "MATK 5250+(Darkening Cannon Lv x350)%/Range: 5x5"
        },
        {
          "level": 6,
          "text": "MATK 6200+(Darkening Cannon Lv x420)%/Range: 7x7"
        },
        {
          "level": 7,
          "text": "MATK 7150+(Darkening Cannon Lv x490)%/Range: 7x7"
        },
        {
          "level": 8,
          "text": "MATK 8100+(Darkening Cannon Lv x560)%/Range: 7x7"
        },
        {
          "level": 9,
          "text": "MATK 9050+(Darkening Cannon Lv x630)%/Range: 7x7"
        },
        {
          "level": 10,
          "text": "MATK 10000+(Darkening Cannon Lv x700)%/Range: 7x7"
        }
      ],
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "53"
            },
            {
              "level": 2,
              "value": "56"
            },
            {
              "level": 3,
              "value": "59"
            },
            {
              "level": 4,
              "value": "62"
            },
            {
              "level": 5,
              "value": "65"
            },
            {
              "level": 6,
              "value": "68"
            },
            {
              "level": 7,
              "value": "71"
            },
            {
              "level": 8,
              "value": "74"
            },
            {
              "level": 9,
              "value": "77"
            },
            {
              "level": 10,
              "value": "80"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5490.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5490",
      "tree": {
        "idx": 20,
        "row": 2,
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
            "value": "Single Target"
          },
          {
            "label": "Property",
            "value": "wind property magical damage"
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
                  "effect": "MATK 1450+(Darkening Cannon Lv x 70)%/Range: 5 x 5",
                  "sp-cost": "53"
                }
              },
              {
                "level": 2,
                "values": {
                  "effect": "MATK 2400+(Darkening Cannon Lv x 140)%/Range: 5 x 5",
                  "sp-cost": "56"
                }
              },
              {
                "level": 3,
                "values": {
                  "effect": "MATK 3350+(Darkening Cannon Lv x 210)%/Range: 5 x 5",
                  "sp-cost": "59"
                }
              },
              {
                "level": 4,
                "values": {
                  "effect": "MATK 4300+(Darkening Cannon Lv x 280)%/Range: 5 x 5",
                  "sp-cost": "62"
                }
              },
              {
                "level": 5,
                "values": {
                  "effect": "MATK 5250+(Darkening Cannon Lv x 350)%/Range: 5 x 5",
                  "sp-cost": "65"
                }
              },
              {
                "level": 6,
                "values": {
                  "effect": "MATK 6200+(Darkening Cannon Lv x 420)%/Range: 7 x 7",
                  "sp-cost": "68"
                }
              },
              {
                "level": 7,
                "values": {
                  "effect": "MATK 7150+(Darkening Cannon Lv x 490)%/Range: 7 x 7",
                  "sp-cost": "71"
                }
              },
              {
                "level": 8,
                "values": {
                  "effect": "MATK 8100+(Darkening Cannon Lv x 560)%/Range: 7 x 7",
                  "sp-cost": "74"
                }
              },
              {
                "level": 9,
                "values": {
                  "effect": "MATK 9050+(Darkening Cannon Lv x 630)%/Range: 7 x 7",
                  "sp-cost": "77"
                }
              },
              {
                "level": 10,
                "values": {
                  "effect": "MATK 10000+(Darkening Cannon Lv x 700)%/Range: 7 x 7",
                  "sp-cost": "80"
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
          "skillName": "Thundering Cannon",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/shiranui/rebalance_2.md",
          "section": "13.11",
          "notes": [
            "Reduces fixed casting time from 1.5 seconds to 1 seconds.",
            "Reduces cooldown from 1 second to 0.7 seconds.",
            "Removes 0.5 seconds delay after skill.",
            "Increases SP consumption from 62 to 92 based on level 10.",
            "Increases damage from 6500%Matk to 13600%Matk based on level 10.",
            "Increases factor weight of Darkening Cannon skill level in skill formula from 50 to 70."
          ],
          "specRows": [
            {
              "label": "Fixed Casting Time",
              "before": "1.5 seconds",
              "after": "1 seconds",
              "scope": "",
              "source": "Reduces fixed casting time from 1.5 seconds to 1 seconds."
            },
            {
              "label": "Cooldown",
              "before": "1 second",
              "after": "0.7 seconds",
              "scope": "",
              "source": "Reduces cooldown from 1 second to 0.7 seconds."
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
              "before": "62",
              "after": "92",
              "scope": "Lv 10",
              "source": "Increases SP consumption from 62 to 92 based on level 10."
            },
            {
              "label": "Damage",
              "before": "6500%Matk",
              "after": "13600%Matk",
              "scope": "Lv 10",
              "source": "Increases damage from 6500%Matk to 13600%Matk based on level 10."
            },
            {
              "label": "Factor Weight Of Darkening Cannon Skill Level In Skill Formula",
              "before": "50",
              "after": "70",
              "scope": "",
              "source": "Increases factor weight of Darkening Cannon skill level in skill formula from 50 to 70."
            }
          ]
        },
        {
          "skillName": "Thundering Cannon",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/shiranui/rebalance_3.md",
          "section": "13.8",
          "notes": [
            "Reworks skill to become target skill and also deal damage to surrounding enemies around the target.",
            "Area of effect is 7 x 7 cells based on level 10.",
            "Increases cast range from 1 cell to 9 cells.",
            "Reduces SP consumption from 92 to 80 based on level 10.",
            "Reduces base damage from 13600%Matk to 10000%Matk based on level 10."
          ],
          "specRows": [
            {
              "label": "Cast Range",
              "before": "1 cells",
              "after": "9 cells",
              "scope": "",
              "source": "Increases cast range from 1 cell to 9 cells."
            },
            {
              "label": "SP Cost",
              "before": "92",
              "after": "80",
              "scope": "Lv 10",
              "source": "Reduces SP consumption from 92 to 80 based on level 10."
            },
            {
              "label": "Damage",
              "before": "13600%Matk",
              "after": "10000%Matk",
              "scope": "Lv 10",
              "source": "Reduces base damage from 13600%Matk to 10000%Matk based on level 10."
            }
          ]
        },
        {
          "skillName": "Thundering Cannon",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/shiranui/rebalance_4.md",
          "section": "14.8",
          "notes": [
            "Increases base damage from 10000+(Darkening Cannon skill level x 700)%Matk to 11600+(Darkening Cannon skill level x 700)%Matk based on level 10."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "10000+(Darkening Cannon skill level x 700)%Matk",
              "after": "11600+(Darkening Cannon skill level x 700)%Matk",
              "scope": "Lv 10",
              "source": "Increases base damage from 10000+(Darkening Cannon skill level x 700)%Matk to 11600+(Darkening Cannon skill level x 700)%Matk based on level 10."
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
      "id": 5478,
      "imageFile": "5478.png",
      "name": "Nightmare Erasion",
      "maxLevel": 1,
      "prerequisiteText": "Basic Skill",
      "group": "Active",
      "type": "Supportive",
      "target": "Self",
      "recoversAp": "",
      "consumesAp": "",
      "description": "Removes the nightmare effect granted to targets within a 15x15 range around you.",
      "levelDetails": [],
      "fixedCastTime": "0.2 seconds",
      "variableCastTime": "1 second",
      "castDelay": "0.25 seconds",
      "cooldown": "15 seconds",
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
      "iconUrl": "assets/divine-pride/skills/5478.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5478",
      "tree": {
        "idx": 21,
        "row": 2,
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
            "value": "1"
          },
          {
            "label": "Fixed Cast Time",
            "value": "0.2 seconds"
          },
          {
            "label": "Variable Cast Time",
            "value": "1 second"
          },
          {
            "label": "Cast Delay",
            "value": "0.25 seconds"
          },
          {
            "label": "Cooldown",
            "value": "15 seconds"
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
      "id": 5487,
      "imageFile": "5487.png",
      "name": "Kunai - Refraction",
      "maxLevel": 10,
      "prerequisiteText": "basic skill",
      "group": "",
      "type": "Ranged physical",
      "target": "Instant cast",
      "recoversAp": "",
      "consumesAp": "",
      "description": "It explodes all [Distortion Zones] installed within a 15x15 range around you, inflicting Ranged physical damage to enemies within a 5x5 Cell range every 0.25 seconds for 2 seconds.\nDamage is additionally increased depending on Kunai-Rotation skill level, caster's base level, and POW.\nThe attack attribute depends on the attribute of the equipped kunai.",
      "levelDetails": [
        {
          "level": 1,
          "text": "Per hit ATK 560+(Kunai RotationLv x10)%"
        },
        {
          "level": 2,
          "text": "Per hit ATK 920+(Kunai RotationLv x20)%"
        },
        {
          "level": 3,
          "text": "Per hit ATK 1280+(Kunai RotationLv x30)%"
        },
        {
          "level": 4,
          "text": "Per hit ATK 1640+(Kunai RotationLv x40)%"
        },
        {
          "level": 5,
          "text": "Per hit ATK 2000+(Kunai RotationLv x50)%"
        },
        {
          "level": 6,
          "text": "Per hit ATK 2360+(Kunai RotationLv x60)%"
        },
        {
          "level": 7,
          "text": "Per hit ATK 2720+(Kunai RotationLv x70)%"
        },
        {
          "level": 8,
          "text": "Per hit ATK 3080+(Kunai RotationLv x80)%"
        },
        {
          "level": 9,
          "text": "Per hit ATK 3440+(Kunai RotationLv x90)%"
        },
        {
          "level": 10,
          "text": "Per hit ATK 3800+(Kunai RotationLv x100)%"
        }
      ],
      "fixedCastTime": "0.5 seconds",
      "variableCastTime": "1.5 seconds",
      "castDelay": "0.5 seconds",
      "cooldown": "2 seconds",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "49"
            },
            {
              "level": 2,
              "value": "52"
            },
            {
              "level": 3,
              "value": "55"
            },
            {
              "level": 4,
              "value": "58"
            },
            {
              "level": 5,
              "value": "61"
            },
            {
              "level": 6,
              "value": "64"
            },
            {
              "level": 7,
              "value": "67"
            },
            {
              "level": 8,
              "value": "70"
            },
            {
              "level": 9,
              "value": "73"
            },
            {
              "level": 10,
              "value": "76"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5487.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5487",
      "tree": {
        "idx": 23,
        "row": 2,
        "col": 5,
        "columns": 9,
        "requirements": [
          {
            "id": 5486,
            "level": 5,
            "name": "Kunai - Rotation",
            "visible": true
          }
        ]
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Ranged physical"
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
            "value": "1.5 seconds"
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
            "label": "Target",
            "value": "Instant cast"
          },
          {
            "label": "Pulse",
            "value": "0.25 seconds"
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
                  "effect": "Per hit ATK 560+(Kunai RotationLv x 10)%",
                  "sp-cost": "49"
                }
              },
              {
                "level": 2,
                "values": {
                  "effect": "Per hit ATK 920+(Kunai RotationLv x 20)%",
                  "sp-cost": "52"
                }
              },
              {
                "level": 3,
                "values": {
                  "effect": "Per hit ATK 1280+(Kunai RotationLv x 30)%",
                  "sp-cost": "55"
                }
              },
              {
                "level": 4,
                "values": {
                  "effect": "Per hit ATK 1640+(Kunai RotationLv x 40)%",
                  "sp-cost": "58"
                }
              },
              {
                "level": 5,
                "values": {
                  "effect": "Per hit ATK 2000+(Kunai RotationLv x 50)%",
                  "sp-cost": "61"
                }
              },
              {
                "level": 6,
                "values": {
                  "effect": "Per hit ATK 2360+(Kunai RotationLv x 60)%",
                  "sp-cost": "64"
                }
              },
              {
                "level": 7,
                "values": {
                  "effect": "Per hit ATK 2720+(Kunai RotationLv x 70)%",
                  "sp-cost": "67"
                }
              },
              {
                "level": 8,
                "values": {
                  "effect": "Per hit ATK 3080+(Kunai RotationLv x 80)%",
                  "sp-cost": "70"
                }
              },
              {
                "level": 9,
                "values": {
                  "effect": "Per hit ATK 3440+(Kunai RotationLv x 90)%",
                  "sp-cost": "73"
                }
              },
              {
                "level": 10,
                "values": {
                  "effect": "Per hit ATK 3800+(Kunai RotationLv x 100)%",
                  "sp-cost": "76"
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
          "skillName": "Kunai - Refraction",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/shiranui/rebalance_2.md",
          "section": "13.8",
          "notes": [
            "Increases SP consumption from 50 to 76 based on level 10.",
            "Increases factor weight of Kunai - Rotation skill level in skill formula from 5 to 10."
          ],
          "specRows": [
            {
              "label": "SP Cost",
              "before": "50",
              "after": "76",
              "scope": "Lv 10",
              "source": "Increases SP consumption from 50 to 76 based on level 10."
            },
            {
              "label": "Factor Weight Of Kunai - Rotation Skill Level In Skill Formula",
              "before": "5",
              "after": "10",
              "scope": "",
              "source": "Increases factor weight of Kunai - Rotation skill level in skill formula from 5 to 10."
            }
          ]
        },
        {
          "skillName": "Kunai - Refraction",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/shiranui/rebalance_4.md",
          "section": "14.5",
          "notes": [
            "Increases base damage from 3800+(Kunai - Rotation skill level x 100)%Atk to 4450+(Kunai - Rotation skill level x 100)%Atk based on level 10."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "3800+(Kunai - Rotation skill level x 100)%Atk",
              "after": "4450+(Kunai - Rotation skill level x 100)%Atk",
              "scope": "Lv 10",
              "source": "Increases base damage from 3800+(Kunai - Rotation skill level x 100)%Atk to 4450+(Kunai - Rotation skill level x 100)%Atk based on level 10."
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
      "id": 5484,
      "imageFile": "5484.png",
      "name": "Huuma Shuriken - Construct",
      "maxLevel": 10,
      "prerequisiteText": "Huuma Shuriken - Grasp 5",
      "group": "Active",
      "type": "Range Physical",
      "target": "1 Cell Ground Target",
      "recoversAp": "",
      "consumesAp": "",
      "description": "Throws a H.Shuriken imbued with powerful energy, dealing Range Physical damage to enemies within a 9x9 range around the targeted cell.\nIf a [Hidden Weapon Zone] exists within the effect range, it will explode, dealing additional Range Physical damage in a 9x9 range centered on that location.\nDeals additional damage depends on level of H.S. - Grasp learned, base level and POW. Attack properties depend on the properties of the equipped kunai.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK 1800+(H.S. - Grasp Lv x30)%\nATK(Explosion) 2100+(H.S. - Grasp Lv x30)%"
        },
        {
          "level": 2,
          "text": "ATK 3000+(H.S. - Grasp Lv x60)%\nATK(Explosion) 3600+(H.S. - Grasp Lv x60)%"
        },
        {
          "level": 3,
          "text": "ATK 4200+(H.S. - Grasp Lv x90)%\nATK(Explosion) 5100+(H.S. - Grasp Lv x90)%"
        },
        {
          "level": 4,
          "text": "ATK 5400+(H.S. - Grasp Lv x120)%\nATK(Explosion) 6600+(H.S. - Grasp Lv x120)%"
        },
        {
          "level": 5,
          "text": "ATK 6600+(H.S. - Grasp Lv x150)%\nATK(Explosion) 8100+(H.S. - Grasp Lv x150)%"
        },
        {
          "level": 6,
          "text": "ATK 7800+(H.S. - Grasp Lv x180)%\nATK(Explosion) 9600+(H.S. - Grasp Lv x180)%"
        },
        {
          "level": 7,
          "text": "ATK 9000+(H.S. - Grasp Lv x210)%\nATK(Explosion) 11100+(H.S. - Grasp Lv x210)%"
        },
        {
          "level": 8,
          "text": "ATK 10200+(H.S. - Grasp Lv x240)%\nATK(Explosion) 12600+(H.S. - Grasp Lv x240)%"
        },
        {
          "level": 9,
          "text": "ATK 11400+(H.S. - Grasp Lv x270)%\nATK(Explosion) 14100+(H.S. - Grasp Lv x270)%"
        },
        {
          "level": 10,
          "text": "ATK 12600+(H.S. - Grasp Lv x300)%\nATK(Explosion) 15600+(H.S. - Grasp Lv x300)%"
        }
      ],
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
            },
            {
              "level": 6,
              "value": "49"
            },
            {
              "level": 7,
              "value": "53"
            },
            {
              "level": 8,
              "value": "57"
            },
            {
              "level": 9,
              "value": "61"
            },
            {
              "level": 10,
              "value": "65"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5484.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5484",
      "tree": {
        "idx": 24,
        "row": 2,
        "col": 6,
        "columns": 9,
        "requirements": [
          {
            "id": 5483,
            "level": 5,
            "name": "Huuma Shuriken - Grasp",
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
            "value": "1 Cell Ground Target"
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
                  "effect": "ATK 1800+(H.S. - Grasp Lv x 30)%\nATK(E x plosion) 2100+(H.S. - Grasp Lv x 30)%",
                  "sp-cost": "29"
                }
              },
              {
                "level": 2,
                "values": {
                  "effect": "ATK 3000+(H.S. - Grasp Lv x 60)%\nATK(E x plosion) 3600+(H.S. - Grasp Lv x 60)%",
                  "sp-cost": "33"
                }
              },
              {
                "level": 3,
                "values": {
                  "effect": "ATK 4200+(H.S. - Grasp Lv x 90)%\nATK(E x plosion) 5100+(H.S. - Grasp Lv x 90)%",
                  "sp-cost": "37"
                }
              },
              {
                "level": 4,
                "values": {
                  "effect": "ATK 5400+(H.S. - Grasp Lv x 120)%\nATK(E x plosion) 6600+(H.S. - Grasp Lv x 120)%",
                  "sp-cost": "41"
                }
              },
              {
                "level": 5,
                "values": {
                  "effect": "ATK 6600+(H.S. - Grasp Lv x 150)%\nATK(E x plosion) 8100+(H.S. - Grasp Lv x 150)%",
                  "sp-cost": "45"
                }
              },
              {
                "level": 6,
                "values": {
                  "effect": "ATK 7800+(H.S. - Grasp Lv x 180)%\nATK(E x plosion) 9600+(H.S. - Grasp Lv x 180)%",
                  "sp-cost": "49"
                }
              },
              {
                "level": 7,
                "values": {
                  "effect": "ATK 9000+(H.S. - Grasp Lv x 210)%\nATK(E x plosion) 11100+(H.S. - Grasp Lv x 210)%",
                  "sp-cost": "53"
                }
              },
              {
                "level": 8,
                "values": {
                  "effect": "ATK 10200+(H.S. - Grasp Lv x 240)%\nATK(E x plosion) 12600+(H.S. - Grasp Lv x 240)%",
                  "sp-cost": "57"
                }
              },
              {
                "level": 9,
                "values": {
                  "effect": "ATK 11400+(H.S. - Grasp Lv x 270)%\nATK(E x plosion) 14100+(H.S. - Grasp Lv x 270)%",
                  "sp-cost": "61"
                }
              },
              {
                "level": 10,
                "values": {
                  "effect": "ATK 12600+(H.S. - Grasp Lv x 300)%\nATK(E x plosion) 15600+(H.S. - Grasp Lv x 300)%",
                  "sp-cost": "65"
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
          "skillName": "Huuma Shuriken - Construct",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/shiranui/rebalance_2.md",
          "section": "13.5",
          "notes": [
            "Increases SP consumption from 64 to 65 based on level 10."
          ],
          "specRows": [
            {
              "label": "SP Cost",
              "before": "64",
              "after": "65",
              "scope": "Lv 10",
              "source": "Increases SP consumption from 64 to 65 based on level 10."
            }
          ]
        },
        {
          "skillName": "Huuma Shuriken - Construct",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/shiranui/rebalance_3.md",
          "section": "13.5",
          "notes": [
            "Reworks skill to become ground skill and deal damage to all enemies within 9 x 9 cells around the target cell.",
            "Increases cast range from 1 cell to 9 cells.",
            "Increases base damage from 4600%/6800%(Memorization Zone)Atk to 12600%/15600%(Memorization Zone)Atk based on level 10."
          ],
          "specRows": [
            {
              "label": "Cast Range",
              "before": "1 cells",
              "after": "9 cells",
              "scope": "",
              "source": "Increases cast range from 1 cell to 9 cells."
            },
            {
              "label": "Damage",
              "before": "4600%/6800%(Memorization Zone)Atk",
              "after": "12600%/15600%(Memorization Zone)Atk",
              "scope": "Lv 10",
              "source": "Increases base damage from 4600%/6800%(Memorization Zone)Atk to 12600%/15600%(Memorization Zone)Atk based on level 10."
            }
          ]
        },
        {
          "skillName": "Huuma Shuriken - Construct",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/shiranui/rebalance_4.md",
          "section": "14.3",
          "notes": [
            "Increases base damage from 12600+(Huuma Shuriken - Grasp level x 300)%/15600+(Huuma Shuriken - Grasp level x 300)%(explosion)Atk to 1590018400+(Huuma Shuriken - Grasp level x 5001000)%/18400+(Huuma Shuriken - Grasp level x 5001000)%(explosion)Atk based on level 10.",
            "Reduces skill cooldown from 1 second to 0.7 seconds."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "12600+(Huuma Shuriken - Grasp level x 300)%/15600+(Huuma Shuriken - Grasp level x 300)%(e x plosion)Atk",
              "after": "1590018400+(Huuma Shuriken - Grasp level x 5001000)%/18400+(Huuma Shuriken - Grasp level x 5001000)%(e x plosion)Atk",
              "scope": "Lv 10",
              "source": "Increases base damage from 12600+(Huuma Shuriken - Grasp level x 300)%/15600+(Huuma Shuriken - Grasp level x 300)%(explosion)Atk to 1590018400+(Huuma Shuriken - Grasp level x 5001000)%/18400+(Huuma Shuriken - Grasp level x 5001000)%(explosion)Atk based on level 10."
            },
            {
              "label": "Cooldown",
              "before": "1 second",
              "after": "0.7 seconds",
              "scope": "",
              "source": "Reduces skill cooldown from 1 second to 0.7 seconds."
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
      "id": 5482,
      "imageFile": "5482.png",
      "name": "Shadow Flash",
      "maxLevel": 10,
      "prerequisiteText": "Shadow Dance 5",
      "group": "Active",
      "type": "Melee Physical",
      "target": "Single Target",
      "recoversAp": "",
      "consumesAp": "",
      "description": "Fires a powerful shadow sword slash toward the target, dealing Melee Physical damage to all targets within range around the target.\nDamage is additionally increased depending on Shadow Dance skill level, caster's base level, and POW.\nCritical damage is applied based on the user's critical rate,\nThe effectiveness of critical modifier is applied by half.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK 2250+(Shadow DanceLv x50)%\nRange: 5x5"
        },
        {
          "level": 2,
          "text": "ATK 3000+(Shadow DanceLv x100)%\nRange: 5x5"
        },
        {
          "level": 3,
          "text": "ATK 3750+(Shadow DanceLv x150)%\nRange: 5x5"
        },
        {
          "level": 4,
          "text": "ATK 4500+(Shadow DanceLv x200)%\nRange: 5x5"
        },
        {
          "level": 5,
          "text": "ATK 5250+(Shadow DanceLv x250)%\nRange: 5x5"
        },
        {
          "level": 6,
          "text": "ATK 6000+(Shadow DanceLv x300)%\nRange: 7x7"
        },
        {
          "level": 7,
          "text": "ATK 6750+(Shadow DanceLv x350)%\nRange: 7x7"
        },
        {
          "level": 8,
          "text": "ATK 7500+(Shadow DanceLv x400)%\nRange: 7x7"
        },
        {
          "level": 9,
          "text": "ATK 8250+(Shadow DanceLv x450)%\nRange: 7x7"
        },
        {
          "level": 10,
          "text": "ATK 9000+(Shadow DanceLv x500)%\nRange: 7x7"
        }
      ],
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
              "value": "39"
            },
            {
              "level": 3,
              "value": "42"
            },
            {
              "level": 4,
              "value": "45"
            },
            {
              "level": 5,
              "value": "48"
            },
            {
              "level": 6,
              "value": "51"
            },
            {
              "level": 7,
              "value": "54"
            },
            {
              "level": 8,
              "value": "57"
            },
            {
              "level": 9,
              "value": "60"
            },
            {
              "level": 10,
              "value": "63"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5482.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5482",
      "tree": {
        "idx": 25,
        "row": 2,
        "col": 7,
        "columns": 9,
        "requirements": [
          {
            "id": 5481,
            "level": 5,
            "name": "Shadow Dance",
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
            "value": "Single Target"
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
                  "effect": "ATK 2250+(Shadow DanceLv x 50)%\nRange: 5 x 5",
                  "sp-cost": "36"
                }
              },
              {
                "level": 2,
                "values": {
                  "effect": "ATK 3000+(Shadow DanceLv x 100)%\nRange: 5 x 5",
                  "sp-cost": "39"
                }
              },
              {
                "level": 3,
                "values": {
                  "effect": "ATK 3750+(Shadow DanceLv x 150)%\nRange: 5 x 5",
                  "sp-cost": "42"
                }
              },
              {
                "level": 4,
                "values": {
                  "effect": "ATK 4500+(Shadow DanceLv x 200)%\nRange: 5 x 5",
                  "sp-cost": "45"
                }
              },
              {
                "level": 5,
                "values": {
                  "effect": "ATK 5250+(Shadow DanceLv x 250)%\nRange: 5 x 5",
                  "sp-cost": "48"
                }
              },
              {
                "level": 6,
                "values": {
                  "effect": "ATK 6000+(Shadow DanceLv x 300)%\nRange: 7 x 7",
                  "sp-cost": "51"
                }
              },
              {
                "level": 7,
                "values": {
                  "effect": "ATK 6750+(Shadow DanceLv x 350)%\nRange: 7 x 7",
                  "sp-cost": "54"
                }
              },
              {
                "level": 8,
                "values": {
                  "effect": "ATK 7500+(Shadow DanceLv x 400)%\nRange: 7 x 7",
                  "sp-cost": "57"
                }
              },
              {
                "level": 9,
                "values": {
                  "effect": "ATK 8250+(Shadow DanceLv x 450)%\nRange: 7 x 7",
                  "sp-cost": "60"
                }
              },
              {
                "level": 10,
                "values": {
                  "effect": "ATK 9000+(Shadow DanceLv x 500)%\nRange: 7 x 7",
                  "sp-cost": "63"
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
          "skillName": "Shadow Flash",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/shiranui/rebalance_2.md",
          "section": "13.3",
          "notes": [
            "Removes 0.5 seconds fixed casting time.",
            "Removes 1 second variable casting time.",
            "Reduces cooldown from 1 second to 0.5 seconds.",
            "Reduces damage from 9700%Atk to 8600%Atk based on level 10."
          ],
          "specRows": [
            {
              "label": "0.5 Seconds Fixed Casting Time",
              "before": "0.5 seconds fi x ed casting time",
              "after": "Removed",
              "scope": "",
              "source": "Removes 0.5 seconds fixed casting time."
            },
            {
              "label": "1 Second Variable Casting Time",
              "before": "1 second variable casting time",
              "after": "Removed",
              "scope": "",
              "source": "Removes 1 second variable casting time."
            },
            {
              "label": "Cooldown",
              "before": "1 second",
              "after": "0.5 seconds",
              "scope": "",
              "source": "Reduces cooldown from 1 second to 0.5 seconds."
            },
            {
              "label": "Damage",
              "before": "9700%Atk",
              "after": "8600%Atk",
              "scope": "Lv 10",
              "source": "Reduces damage from 9700%Atk to 8600%Atk based on level 10."
            }
          ]
        },
        {
          "skillName": "Shadow Flash",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/shiranui/rebalance_3.md",
          "section": "13.3",
          "notes": [
            "Reworks skill to become target skill and also deal damage to surrounding enemies around the target.",
            "Area of effect is 7 x 7 cells based on level 10.",
            "Applies critical damage, the critical chance is the user's Cri.",
            "No longer be cast by clones from Mirage.",
            "Increases cast range from 1 cell to 2 cells.",
            "Increases base damage from 8600%Atk to 9000%Atk based on level 10.",
            "Reduces factor weight of Shadow Dance skill level in skill formula from 1000 to 500 based on level 10."
          ],
          "specRows": [
            {
              "label": "Cast Range",
              "before": "1 cells",
              "after": "2 cells",
              "scope": "",
              "source": "Increases cast range from 1 cell to 2 cells."
            },
            {
              "label": "Damage",
              "before": "8600%Atk",
              "after": "9000%Atk",
              "scope": "Lv 10",
              "source": "Increases base damage from 8600%Atk to 9000%Atk based on level 10."
            },
            {
              "label": "Factor Weight Of Shadow Dance Skill Level In Skill Formula",
              "before": "1000",
              "after": "500",
              "scope": "Lv 10",
              "source": "Reduces factor weight of Shadow Dance skill level in skill formula from 1000 to 500 based on level 10."
            }
          ]
        },
        {
          "skillName": "Shadow Flash",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/shiranui/rebalance_4.md",
          "section": "14.2",
          "notes": [
            "Increases base damage from 9000+(Shadow Dance skill level x 500)%Atk to 11000+(Shadow Dance skill level x 10001500)%Atk based on level 10."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "9000+(Shadow Dance skill level x 500)%Atk",
              "after": "11000+(Shadow Dance skill level x 10001500)%Atk",
              "scope": "Lv 10",
              "source": "Increases base damage from 9000+(Shadow Dance skill level x 500)%Atk to 11000+(Shadow Dance skill level x 10001500)%Atk based on level 10."
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
      "id": 5491,
      "imageFile": "5491.png",
      "name": "Golden Dragon Cannon",
      "maxLevel": 10,
      "prerequisiteText": "Basic Skill",
      "group": "Active",
      "type": "Magic",
      "target": "Single Target",
      "recoversAp": "",
      "consumesAp": "",
      "description": "Blows a haze of earth and inflicts earth magic damage to surrounding enemies.\nDeals additional damage depends on level of Darkening Cannon user learned, user's base level and SPL.\nConsumes 1 Haze of The Earth.",
      "levelDetails": [
        {
          "level": 1,
          "text": "MATK 1400+(Darkening Cannon Lv x15)%/Range: 3x3"
        },
        {
          "level": 2,
          "text": "MATK 2350+(Darkening Cannon Lv x30)%/Range: 3x3"
        },
        {
          "level": 3,
          "text": "MATK 3300+(Darkening Cannon Lv x45)%/Range: 3x3"
        },
        {
          "level": 4,
          "text": "MATK 4250+(Darkening Cannon Lv x60)%/Range: 3x3"
        },
        {
          "level": 5,
          "text": "MATK 5200+(Darkening Cannon Lv x75)%/Range: 3x3"
        },
        {
          "level": 6,
          "text": "MATK 6150+(Darkening Cannon Lv x90)%/Range: 5x5"
        },
        {
          "level": 7,
          "text": "MATK 7100+(Darkening Cannon Lv x105)%/Range: 5x5"
        },
        {
          "level": 8,
          "text": "MATK 8050+(Darkening Cannon Lv x120)%/Range: 5x5"
        },
        {
          "level": 9,
          "text": "MATK 9000+(Darkening Cannon Lv x135)%/Range: 5x5"
        },
        {
          "level": 10,
          "text": "MATK 9950+(Darkening Cannon Lv x150)%/Range: 5x5"
        }
      ],
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
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5491.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5491",
      "tree": {
        "idx": 27,
        "row": 3,
        "col": 0,
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
            "value": "Single Target"
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
                  "effect": "MATK 1400+(Darkening Cannon Lv x 15)%/Range: 3 x 3",
                  "sp-cost": "47"
                }
              },
              {
                "level": 2,
                "values": {
                  "effect": "MATK 2350+(Darkening Cannon Lv x 30)%/Range: 3 x 3",
                  "sp-cost": "49"
                }
              },
              {
                "level": 3,
                "values": {
                  "effect": "MATK 3300+(Darkening Cannon Lv x 45)%/Range: 3 x 3",
                  "sp-cost": "51"
                }
              },
              {
                "level": 4,
                "values": {
                  "effect": "MATK 4250+(Darkening Cannon Lv x 60)%/Range: 3 x 3",
                  "sp-cost": "53"
                }
              },
              {
                "level": 5,
                "values": {
                  "effect": "MATK 5200+(Darkening Cannon Lv x 75)%/Range: 3 x 3",
                  "sp-cost": "55"
                }
              },
              {
                "level": 6,
                "values": {
                  "effect": "MATK 6150+(Darkening Cannon Lv x 90)%/Range: 5 x 5",
                  "sp-cost": "57"
                }
              },
              {
                "level": 7,
                "values": {
                  "effect": "MATK 7100+(Darkening Cannon Lv x 105)%/Range: 5 x 5",
                  "sp-cost": "59"
                }
              },
              {
                "level": 8,
                "values": {
                  "effect": "MATK 8050+(Darkening Cannon Lv x 120)%/Range: 5 x 5",
                  "sp-cost": "61"
                }
              },
              {
                "level": 9,
                "values": {
                  "effect": "MATK 9000+(Darkening Cannon Lv x 135)%/Range: 5 x 5",
                  "sp-cost": "63"
                }
              },
              {
                "level": 10,
                "values": {
                  "effect": "MATK 9950+(Darkening Cannon Lv x 150)%/Range: 5 x 5",
                  "sp-cost": "65"
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
          "skillName": "Golden Dragon Cannon",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/shiranui/rebalance_2.md",
          "section": "13.12",
          "notes": [
            "Reduces fixed casting time from 1.5 seconds to 1 seconds.",
            "Removes 0.5 seconds delay after skill.",
            "Increases SP consumption from 48 to 88 based on level 10.",
            "Increases damage from 2350%Matk to 4300%Matk based on level 10.",
            "Increases factor weight of Darkening Cannon skill level in skill formula from 7 to 15."
          ],
          "specRows": [
            {
              "label": "Fixed Casting Time",
              "before": "1.5 seconds",
              "after": "1 seconds",
              "scope": "",
              "source": "Reduces fixed casting time from 1.5 seconds to 1 seconds."
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
              "before": "48",
              "after": "88",
              "scope": "Lv 10",
              "source": "Increases SP consumption from 48 to 88 based on level 10."
            },
            {
              "label": "Damage",
              "before": "2350%Matk",
              "after": "4300%Matk",
              "scope": "Lv 10",
              "source": "Increases damage from 2350%Matk to 4300%Matk based on level 10."
            },
            {
              "label": "Factor Weight Of Darkening Cannon Skill Level In Skill Formula",
              "before": "7",
              "after": "15",
              "scope": "",
              "source": "Increases factor weight of Darkening Cannon skill level in skill formula from 7 to 15."
            }
          ]
        },
        {
          "skillName": "Golden Dragon Cannon",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/shiranui/rebalance_3.md",
          "section": "13.9",
          "notes": [
            "Reworks skill to become target skill and also deal damage to surrounding enemies around the target.",
            "Area of effect is 5 x 5 cells based on level 10.",
            "Reduces cast range from 13 cell to 9 cells.",
            "Reduces SP consumption from 88 to 65 based on level 10.",
            "Increases base damage from 4300%Matk to 9950%Matk based on level 10."
          ],
          "specRows": [
            {
              "label": "Cast Range",
              "before": "13 cells",
              "after": "9 cells",
              "scope": "",
              "source": "Reduces cast range from 13 cell to 9 cells."
            },
            {
              "label": "SP Cost",
              "before": "88",
              "after": "65",
              "scope": "Lv 10",
              "source": "Reduces SP consumption from 88 to 65 based on level 10."
            },
            {
              "label": "Damage",
              "before": "4300%Matk",
              "after": "9950%Matk",
              "scope": "Lv 10",
              "source": "Increases base damage from 4300%Matk to 9950%Matk based on level 10."
            }
          ]
        },
        {
          "skillName": "Golden Dragon Cannon",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/shiranui/rebalance_4.md",
          "section": "14.9",
          "notes": [
            "Increases base damage from 9950+(Darkening Cannon skill level x 150)%Matk to 15800+(Darkening Cannon skill level x 150)%Matk based on level 10."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "9950+(Darkening Cannon skill level x 150)%Matk",
              "after": "15800+(Darkening Cannon skill level x 150)%Matk",
              "scope": "Lv 10",
              "source": "Increases base damage from 9950+(Darkening Cannon skill level x 150)%Matk to 15800+(Darkening Cannon skill level x 150)%Matk based on level 10."
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
      "id": 5494,
      "imageFile": "5494.png",
      "name": "Kunai - Nightmare",
      "maxLevel": 1,
      "prerequisiteText": "basic skill",
      "group": "",
      "type": "Ranged physical",
      "target": "Instant cast",
      "recoversAp": "",
      "consumesAp": "20",
      "description": "Disperses numerous hidden weapons to all enemies within a 13x13 cell range, inflicting powerful long range physical damage.\nDeals 1.5x damage to targets affected by the nightmare effect (the nightmare effect is removed).\nDamage increases additionally based on the caster's base level and POW.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK 18000%"
        }
      ],
      "fixedCastTime": "0.5 seconds",
      "variableCastTime": "2 seconds",
      "castDelay": "0.5 seconds",
      "cooldown": "1 second",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "70"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5494.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5494",
      "tree": {
        "idx": 30,
        "row": 3,
        "col": 3,
        "columns": 9,
        "requirements": [
          {
            "id": 5479,
            "level": 1,
            "name": "Mirage",
            "visible": true
          },
          {
            "id": 5485,
            "level": 5,
            "name": "Kunai - Distortion",
            "visible": true
          },
          {
            "id": 5486,
            "level": 5,
            "name": "Kunai - Rotation",
            "visible": true
          },
          {
            "id": 5487,
            "level": 5,
            "name": "Kunai - Refraction",
            "visible": true
          }
        ]
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Ranged physical"
          },
          {
            "label": "Levels",
            "value": "1"
          },
          {
            "label": "Fixed Cast Time",
            "value": "0.5 seconds"
          },
          {
            "label": "Variable Cast Time",
            "value": "2 seconds"
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
            "value": "Instant cast"
          },
          {
            "label": "AP Consumed",
            "value": "20"
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
                  "base-damage-atk": "18000%",
                  "sp-cost": "70"
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
          "skillName": "Kunai - Nightmare",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/shiranui/rebalance_2.md",
          "section": "13.15",
          "notes": [
            "Reduces cooldown from 5 seconds to 1 second.",
            "Reduces AP consumption from 30 to 20.",
            "Increases damage from 15000%Atk to 18000%Atk."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "5 seconds",
              "after": "1 second",
              "scope": "",
              "source": "Reduces cooldown from 5 seconds to 1 second."
            },
            {
              "label": "AP Consumed",
              "before": "30",
              "after": "20",
              "scope": "",
              "source": "Reduces AP consumption from 30 to 20."
            },
            {
              "label": "Damage",
              "before": "15000%Atk",
              "after": "18000%Atk",
              "scope": "",
              "source": "Increases damage from 15000%Atk to 18000%Atk."
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
      "id": 5493,
      "imageFile": "5493.png",
      "name": "Shadow - Nightmare",
      "maxLevel": 1,
      "prerequisiteText": "basic skill",
      "group": "",
      "type": "Melee Physics",
      "target": "Instant cast",
      "recoversAp": "",
      "consumesAp": "20",
      "description": "Inflicts powerful Melee Physics damage to all enemies within a 13x13Cell range by casting shadows on them.\nDeals 1.5x damage to targets affected by the nightmare effect (the nightmare effect is removed).\nDamage increases additionally based on the caster's base level and POW.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK 18000%"
        }
      ],
      "fixedCastTime": "0.5 seconds",
      "variableCastTime": "2 seconds",
      "castDelay": "0.5 seconds",
      "cooldown": "1 second",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "70"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5493.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5493",
      "tree": {
        "idx": 32,
        "row": 3,
        "col": 5,
        "columns": 9,
        "requirements": [
          {
            "id": 5479,
            "level": 1,
            "name": "Mirage",
            "visible": true
          },
          {
            "id": 5482,
            "level": 7,
            "name": "Shadow Flash",
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
            "value": "1"
          },
          {
            "label": "Fixed Cast Time",
            "value": "0.5 seconds"
          },
          {
            "label": "Variable Cast Time",
            "value": "2 seconds"
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
            "value": "Instant cast"
          },
          {
            "label": "AP Consumed",
            "value": "20"
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
                  "base-damage-atk": "18000%",
                  "sp-cost": "70"
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
          "skillName": "Shadow - Nightmare",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/shiranui/rebalance_2.md",
          "section": "13.14",
          "notes": [
            "Reduces cooldown from 5 seconds to 1 second.",
            "Reduces AP consumption from 30 to 20.",
            "Increases damage from 15000%Atk to 18000%Atk."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "5 seconds",
              "after": "1 second",
              "scope": "",
              "source": "Reduces cooldown from 5 seconds to 1 second."
            },
            {
              "label": "AP Consumed",
              "before": "30",
              "after": "20",
              "scope": "",
              "source": "Reduces AP consumption from 30 to 20."
            },
            {
              "label": "Damage",
              "before": "15000%Atk",
              "after": "18000%Atk",
              "scope": "",
              "source": "Increases damage from 15000%Atk to 18000%Atk."
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
      "id": 5492,
      "imageFile": "5492.png",
      "name": "Darkening Cannon",
      "maxLevel": 10,
      "prerequisiteText": "basic skill",
      "group": "",
      "type": "Magic",
      "target": "Instant cast",
      "recoversAp": "2",
      "consumesAp": "",
      "description": "Connects his own shadow to a pitch-black haze and swings it around, dealing dark attribute Magic damage to all enemies within a surrounding range and inflicting the Nightmare effect for 5 seconds.\nDamage increases further based on the caster's base level and SPL.\nConsumes 1 Haze of Pitch Darkness.",
      "levelDetails": [
        {
          "level": 1,
          "text": "MATK 1400% /range : 5x5Cell"
        },
        {
          "level": 2,
          "text": "MATK 2350% /range : 5x5Cell"
        },
        {
          "level": 3,
          "text": "MATK 3300% /range : 5x5Cell"
        },
        {
          "level": 4,
          "text": "MATK 4250% /range : 5x5Cell"
        },
        {
          "level": 5,
          "text": "MATK 5200% /range : 5x5Cell"
        },
        {
          "level": 6,
          "text": "MATK 6150% /range : 7x7Cell"
        },
        {
          "level": 7,
          "text": "MATK 7100% /range : 7x7Cell"
        },
        {
          "level": 8,
          "text": "MATK 8050% /range : 7x7Cell"
        },
        {
          "level": 9,
          "text": "MATK 9000% /range : 7x7Cell"
        },
        {
          "level": 10,
          "text": "MATK 9950% /range : 7x7Cell"
        }
      ],
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
              "value": "46"
            },
            {
              "level": 3,
              "value": "52"
            },
            {
              "level": 4,
              "value": "58"
            },
            {
              "level": 5,
              "value": "64"
            },
            {
              "level": 6,
              "value": "70"
            },
            {
              "level": 7,
              "value": "76"
            },
            {
              "level": 8,
              "value": "82"
            },
            {
              "level": 9,
              "value": "88"
            },
            {
              "level": 10,
              "value": "94"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5492.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5492",
      "tree": {
        "idx": 34,
        "row": 3,
        "col": 7,
        "columns": 9,
        "requirements": []
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Magic"
          },
          {
            "label": "Levels",
            "value": "10"
          },
          {
            "label": "Target",
            "value": "Instant cast"
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
                "id": "base-damage-matk",
                "label": "Base Damage (MATK)"
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
                  "area-of-effect": "5x5",
                  "base-damage-matk": "1400%",
                  "sp-cost": "40"
                }
              },
              {
                "level": 2,
                "values": {
                  "area-of-effect": "5x5",
                  "base-damage-matk": "2350%",
                  "sp-cost": "46"
                }
              },
              {
                "level": 3,
                "values": {
                  "area-of-effect": "5x5",
                  "base-damage-matk": "3300%",
                  "sp-cost": "52"
                }
              },
              {
                "level": 4,
                "values": {
                  "area-of-effect": "5x5",
                  "base-damage-matk": "4250%",
                  "sp-cost": "58"
                }
              },
              {
                "level": 5,
                "values": {
                  "area-of-effect": "5x5",
                  "base-damage-matk": "5200%",
                  "sp-cost": "64"
                }
              },
              {
                "level": 6,
                "values": {
                  "area-of-effect": "7x7",
                  "base-damage-matk": "6150%",
                  "sp-cost": "70"
                }
              },
              {
                "level": 7,
                "values": {
                  "area-of-effect": "7x7",
                  "base-damage-matk": "7100%",
                  "sp-cost": "76"
                }
              },
              {
                "level": 8,
                "values": {
                  "area-of-effect": "7x7",
                  "base-damage-matk": "8050%",
                  "sp-cost": "82"
                }
              },
              {
                "level": 9,
                "values": {
                  "area-of-effect": "7x7",
                  "base-damage-matk": "9000%",
                  "sp-cost": "88"
                }
              },
              {
                "level": 10,
                "values": {
                  "area-of-effect": "7x7",
                  "base-damage-matk": "9950%",
                  "sp-cost": "94"
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
          "skillName": "Darkening Cannon",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/shiranui/rebalance_2.md",
          "section": "13.13",
          "notes": [
            "Reduces fixed casting time from 1.5 seconds to 1 seconds.",
            "Removes 0.5 seconds delay after skill.",
            "Increases SP consumption from 58 to 94 based on level 10.",
            "Increases damage from 5400%Matk to 9950%Matk based on level 10."
          ],
          "specRows": [
            {
              "label": "Fixed Casting Time",
              "before": "1.5 seconds",
              "after": "1 seconds",
              "scope": "",
              "source": "Reduces fixed casting time from 1.5 seconds to 1 seconds."
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
              "before": "58",
              "after": "94",
              "scope": "Lv 10",
              "source": "Increases SP consumption from 58 to 94 based on level 10."
            },
            {
              "label": "Damage",
              "before": "5400%Matk",
              "after": "9950%Matk",
              "scope": "Lv 10",
              "source": "Increases damage from 5400%Matk to 9950%Matk based on level 10."
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
      "id": 5495,
      "imageFile": "5495.png",
      "name": "Dark Dragon - Nightmare",
      "maxLevel": 1,
      "prerequisiteText": "basic skill",
      "group": "",
      "type": "Magic",
      "target": "Instant cast",
      "recoversAp": "",
      "consumesAp": "20",
      "description": "Summons a shadow dragon in an 11x11 cell range around you, dealing powerful dark attribute Magic damage.\nDeals additional fire attribute Magic damage of the same power to targets affected by the Nightmare effect (the Nightmare effect is removed).\nDamage increases further based on the caster's base level and SPL.",
      "levelDetails": [
        {
          "level": 1,
          "text": "MATK 15500%"
        }
      ],
      "fixedCastTime": "1 second",
      "variableCastTime": "2 seconds",
      "castDelay": "0.5 seconds",
      "cooldown": "1 second",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "120"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5495.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5495",
      "tree": {
        "idx": 41,
        "row": 4,
        "col": 5,
        "columns": 9,
        "requirements": [
          {
            "id": 5479,
            "level": 1,
            "name": "Mirage",
            "visible": true
          },
          {
            "id": 5488,
            "level": 5,
            "name": "Red Flame Cannon",
            "visible": true
          },
          {
            "id": 5489,
            "level": 5,
            "name": "Cold Blooded Cannon",
            "visible": true
          },
          {
            "id": 5490,
            "level": 5,
            "name": "Thundering Cannon",
            "visible": true
          },
          {
            "id": 5491,
            "level": 5,
            "name": "Golden Dragon Cannon",
            "visible": true
          },
          {
            "id": 5492,
            "level": 5,
            "name": "Darkening Cannon",
            "visible": true
          }
        ]
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Magic"
          },
          {
            "label": "Levels",
            "value": "1"
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
            "value": "0.5 seconds"
          },
          {
            "label": "Cooldown",
            "value": "1 second"
          },
          {
            "label": "Target",
            "value": "Instant cast"
          },
          {
            "label": "AP Consumed",
            "value": "20"
          }
        ],
        "levelTables": [
          {
            "title": "Level Scaling",
            "columns": [
              {
                "id": "base-damage-matk",
                "label": "Base Damage (MATK)"
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
                  "base-damage-matk": "15500%",
                  "sp-cost": "120"
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
          "skillName": "Dark Dragon - Nightmare",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/shiranui/rebalance_2.md",
          "section": "13.16",
          "notes": [
            "Reduces fixed casting time from 1.5 seconds to 1 seconds.",
            "Reduces cooldown from 5 seconds to 1 second.",
            "Reduces AP consumption from 30 to 20.",
            "Increases damage from 12000%Matk to 15500%Matk."
          ],
          "specRows": [
            {
              "label": "Fixed Casting Time",
              "before": "1.5 seconds",
              "after": "1 seconds",
              "scope": "",
              "source": "Reduces fixed casting time from 1.5 seconds to 1 seconds."
            },
            {
              "label": "Cooldown",
              "before": "5 seconds",
              "after": "1 second",
              "scope": "",
              "source": "Reduces cooldown from 5 seconds to 1 second."
            },
            {
              "label": "AP Consumed",
              "before": "30",
              "after": "20",
              "scope": "",
              "source": "Reduces AP consumption from 30 to 20."
            },
            {
              "label": "Damage",
              "before": "12000%Matk",
              "after": "15500%Matk",
              "scope": "",
              "source": "Increases damage from 12000%Matk to 15500%Matk."
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

export default shiranuiData;
