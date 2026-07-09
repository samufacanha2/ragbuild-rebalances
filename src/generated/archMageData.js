export const archMageData = {
  "generatedAt": "2026-07-09T03:37:44.992Z",
  "classId": 4255,
  "classSlug": "arch-mage",
  "className": "Arch Mage",
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
    "changedSkills": 18,
    "noteCount": 119,
    "addedSkills": 1,
    "versions": 5
  },
  "tree": {
    "columns": 9,
    "rows": 3,
    "skillTreeUrl": "https://www.divine-pride.net/tools/skilltree/4255",
    "jobIconUrl": "assets/divine-pride/jobs/4255.png"
  },
  "sources": {
    "rebalances": [
      "rebalances/arch-mage/rebalance_1.md",
      "rebalances/arch-mage/rebalance_2.md",
      "rebalances/arch-mage/rebalance_3.md",
      "rebalances/arch-mage/rebalance_4.md",
      "rebalances/arch-mage/rebalance_5.md"
    ],
    "rebalanceManifest": "rebalances/manifest.json",
    "divinePrideApiDocs": "https://www.divine-pride.net/api",
    "divinePrideSkillTree": "https://www.divine-pride.net/tools/skilltree/4255",
    "browiki": "https://browiki.org"
  },
  "rebalanceVersions": [
    {
      "id": "rebalance-1",
      "label": "Rebalance 1",
      "file": "rebalances/arch-mage/rebalance_1.md",
      "heading": "7. Arch Mage",
      "className": "Arch Mage",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=9805",
      "scope": "main",
      "appliesTo": "Main classes only",
      "maxJobLevel": 50,
      "pointLimit": 49,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "7.1",
          "name": "Two Hand Staff Mastery",
          "notes": [
            "Changes bonus from Matk + 10% to S.Matk + 20 based on level 10."
          ]
        },
        {
          "section": "7.2",
          "name": "Crimson Arrow",
          "notes": [
            "Reduces cooldown from 4 seconds to 0.3 seconds based on level 5.",
            "Reduces delay after skill from 1 second to 0.5 seconds based on level 5.",
            "Reduces AP recovery rate from 4 to 1.",
            "Increases damage of the secondary attack that deal damage to the target and surrounding enemies around the target from 2000%Matk to 3000%Matk based on level 5.",
            "If using the skill while under Climax buff, the secondary attack damage will be doubled.",
            "Increases area of effect of the secondary attack from 5x5 cells to 7x7 cells based on level 5."
          ]
        },
        {
          "section": "7.3",
          "name": "Frozen Slash",
          "notes": [
            "Reduces cooldown from 4 seconds to 0.3 seconds based on level 5.",
            "Reduces delay after skill from 1 second to 0.5 seconds based on level 5.",
            "Reduces AP recovery rate from 4 to 1.",
            "Increases area of effect from 9x9 cells to 13x13 cells based on level 5.",
            "Reduces damage from 3750%Matk to 3000%Matk based on level 5.",
            "Increases damage while under Climax buff to 4250%Matk."
          ]
        },
        {
          "section": "7.4",
          "name": "Storm Cannon",
          "notes": [
            "Reduces cooldown from 4 seconds to 0.3 seconds based on level 5.",
            "Reduces delay after skill from 1 second to 0.5 seconds based on level 5.",
            "Reduces AP recovery rate from 4 to 1.",
            "Increases damage while under Climax buff to 4250%Matk."
          ]
        },
        {
          "section": "7.3",
          "name": "Rock Down",
          "notes": [
            "Reduces cooldown from 4 seconds to 0.3 seconds based on level 5.",
            "Reduces delay after skill from 1 second to 0.5 seconds based on level 5.",
            "Reduces AP recovery rate from 4 to 1.",
            "Reduces damage from 3750%Matk to 3000%Matk based on level 5.",
            "Increases damage while under Climax buff to 4250%Matk.",
            "Increases area of effect from 3x3 cells to 7x7 cells based on level 5."
          ]
        },
        {
          "section": "7.4",
          "name": "Mystery Illusion",
          "notes": [
            "Increases damage from 1250%Matk to 2500%Matk based on level 5.",
            "Recovers 4 AP upon casting."
          ]
        },
        {
          "section": "7.5",
          "name": "Climax",
          "notes": [
            "Reduces AP consumption from 200 to 150."
          ]
        }
      ]
    },
    {
      "id": "rebalance-2",
      "label": "Rebalance 2",
      "file": "rebalances/arch-mage/rebalance_2.md",
      "heading": "7. Arch Mage",
      "className": "Arch Mage",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=11126",
      "scope": "main-and-expanded",
      "appliesTo": "Main and expanded classes",
      "maxJobLevel": 50,
      "pointLimit": 49,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "7.1",
          "name": "Floral Flare Road",
          "notes": [
            "Reduces delay after skill from 0.5 seconds to 0.25 seconds.",
            "Increases SP consumption from 70 to 94 based on level 5.",
            "Increases damage from 1000%Matk to 3750%Matk per hit based on level 5."
          ]
        },
        {
          "section": "7.2",
          "name": "Rain of Crystal",
          "notes": [
            "Reduces delay after skill from 0.5 seconds to 0.25 seconds.",
            "Increases SP consumption from 80 to 100 based on level 5.",
            "Increases damage from 750%Matk to 3980%Matk per hit based on level 5."
          ]
        },
        {
          "section": "7.3",
          "name": "Tornado Storm",
          "notes": [
            "Reduces delay after skill from 0.5 seconds to 0.25 seconds.",
            "Increases SP consumption from 75 to 94 based on level 5.",
            "Increases damage from 450%Matk to 3900%Matk per hit based on level 5."
          ]
        },
        {
          "section": "7.4",
          "name": "Stratum Tremor",
          "notes": [
            "Reduces delay after skill from 0.5 seconds to 0.25 seconds.",
            "Increases SP consumption from 75 to 94 based on level 5.",
            "Increases damage from 1250%Matk to 3750%Matk per hit based on level 5."
          ]
        },
        {
          "section": "7.5",
          "name": "Crimson Arrow",
          "notes": [
            "Reduces SP consumption from 105 to 94 based on level 5.",
            "Increases AP recovery rate from 1 to 2."
          ]
        },
        {
          "section": "7.6",
          "name": "Frozen Slash",
          "notes": [
            "Increases cooldown from 0.3 seconds to 0.45 seconds.",
            "Increases SP consumption from 85 to 96 based on level 5.",
            "Increases AP recovery rate from 1 to 2.",
            "Increases damage from 3000%/4250%(Climax)Matk to 4750%/6650%(Climax)Matk based on level 5."
          ]
        },
        {
          "section": "7.7",
          "name": "Storm Cannon",
          "notes": [
            "Reduces SP consumption from 100 to 94 based on level 5.",
            "Increases AP recovery rate from 1 to 2.",
            "Increases damage from 3000%/4250%(Climax)Matk to 4750%/6250%(Climax)Matk based on level 5."
          ]
        },
        {
          "section": "7.8",
          "name": "Rock Down",
          "notes": [
            "Increases SP consumption from 85 to 92 based on level 5.",
            "Increases AP recovery rate from 1 to 2.",
            "Increases damage from 3000%/4250%(Climax)Matk to 4750%/6250%(Climax)Matk based on level 5."
          ]
        },
        {
          "section": "7.9",
          "name": "All Bloom",
          "notes": [
            "Reduces delay after skill from 1 second to 0.5 seconds.",
            "Increases SP consumption from 100 to 126 based on level 5.",
            "Increases damage from 500%Matk to 6200%Matk per hit based on level 5.",
            "No longer reduce skill damage on Climax level 2.",
            "Increases bonus damage on Climax level 3 from 100% to 300%.",
            "Increases damage of additional explosion on Climax level 5."
          ]
        },
        {
          "section": "7.10",
          "name": "Crystal Impact",
          "notes": [
            "Reduces cooldown from 6 seconds to 2 seconds.",
            "Reduces delay after skill from 1 second to 0.5 seconds.",
            "Increases SP consumption from 120 to 132 based on level 5.",
            "Increases damage from 4000%/4000%(secondary)Matk to 6750%/6750%(secondary)Matk based on level 5."
          ]
        },
        {
          "section": "7.11",
          "name": "Destructive Hurricane",
          "notes": [
            "Reduces cooldown from 6 seconds to 2 seconds.",
            "Reduces delay after skill from 1 second to 0.5 seconds.",
            "Increases SP consumption from 120 to 132 based on level 5.",
            "Increases damage from 8000%Matk to 14250%Matk based on level 5.",
            "Increases damage of additional hit on Climax level 1.",
            "Increases bonus damage on Climax level 3 from 100% to 200%.",
            "Reduces bonus damage on Climax level 5 from 70% to 50%."
          ]
        },
        {
          "section": "7.12",
          "name": "Violent Quake",
          "notes": [
            "Reduces delay after skill from 1 second to 0.5 seconds.",
            "Increases SP consumption from 100 to 126 based on level 5.",
            "Increases damage from 600%Matk to 6200%Matk per hit based on level 5.",
            "Increases bonus damage on Climax level 3 from 100% to 200%."
          ]
        },
        {
          "section": "7.13",
          "name": "Deadly Projection",
          "notes": [
            "Reduces SP consumption from 120 to 90 based on level 5.",
            "Increases damage from 3600%Matk to 14000%Matk based on level 5."
          ]
        },
        {
          "section": "7.14",
          "name": "Mystery Illusion",
          "notes": [
            "Reduces delay after skill from 1 second to 0.5 seconds.",
            "Reduces SP consumption from 120 to 110 based on level 5.",
            "Increases AP recovery rate from 4 to 5.",
            "Increases damage from 2500%Matk to 4750%Matk per hit based on level 5."
          ]
        },
        {
          "section": "7.15",
          "name": "Soul Vulcan Strike",
          "notes": [
            "Reduces SP consumption from 120 to 110 based on level 5.",
            "Increases damage from 900%Matk to 1250%Matk per hit based on level 5."
          ]
        },
        {
          "section": "7.16",
          "name": "Astral Strike",
          "notes": [
            "Reduces cooldown from 60 second to 6 seconds.",
            "Reduces SP consumption from 150 to 130.",
            "Reduces AP consumption from 150 to 25.",
            "Increases initial damage from 5000%/11000%(undead and dragon race)Matk to 18000%/21400%(undead and dragon race)Matk based on level 10.",
            "Increases over time damage from 2000%Matk to 6500%Matk per hit based on level 10.",
            "Reduces skill duration from 15 seconds to 6 seconds."
          ]
        }
      ]
    },
    {
      "id": "rebalance-3",
      "label": "Rebalance 3",
      "file": "rebalances/arch-mage/rebalance_3.md",
      "heading": "4. Arch Mage",
      "className": "Arch Mage",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=12421",
      "scope": "main-and-expanded",
      "appliesTo": "Main and expanded classes",
      "maxJobLevel": 55,
      "pointLimit": 54,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "4.1",
          "name": "Rain of Crystal",
          "notes": [
            "Reduces area of effect from 19 x 19 cells to 13 x 13 cells based on level 5.",
            "Increases SP consumption from 100 to 125 based on level 5."
          ]
        },
        {
          "section": "4.2",
          "name": "Crimson Arrow",
          "notes": [
            "Reduces SP consumption from 94 to 90 based on level 5.",
            "Increases base damage of linear damage from 1500%Matk to 1750%Matk based on level 5.",
            "Increases base damage of explosion damage from 3000%Matk to 3500%Matk based on level 5."
          ]
        },
        {
          "section": "4.3",
          "name": "Storm Cannon",
          "notes": [
            "Reduces SP consumption from 94 to 88 based on level 5.",
            "Increases base damage from 4750%/6250%Matk to 6000%/7500%Matk based on level 5."
          ]
        },
        {
          "section": "4.4",
          "name": "Rock Down",
          "notes": [
            "Reduces SP consumption from 94 to 88 based on level 5.",
            "Increases base damage from 4750%/6250%Matk to 6000%/7500%Matk based on level 5."
          ]
        },
        {
          "section": "4.4",
          "name": "Frozen Slash",
          "notes": [
            "Increases SP consumption from 96 to 115 based on level 5.",
            "Increases base damage from 4750%/6650%Matk to 4900%/6800%Matk based on level 5."
          ]
        },
        {
          "section": "4.5",
          "name": "Destructive Hurricane",
          "notes": [
            "Increases skill cooldown from 2 seconds to 2.5 seconds.",
            "Increases base damage from 14250%Matk to 14850%Matk based on level 5.",
            "Reduces damage bonus from Climax level 3 from 200% to 150%.",
            "Changes damage modifier from Climax level 5 from 50% increasing to 20% reducing.",
            "Increases SP consumption from 132 to 186 based on level 5."
          ]
        },
        {
          "section": "4.5",
          "name": "Crystal Impact",
          "notes": [
            "Reduces area of effect from 15 x 15 cells to 13 x 13 cells based on level 5.",
            "Reduces area of effect bonus from Climax level 5 from entire screen to 15 x 15 cells.",
            "Increases SP consumption from 132 to 186 based on level 5."
          ]
        }
      ]
    },
    {
      "id": "rebalance-4",
      "label": "Rebalance 4",
      "file": "rebalances/arch-mage/rebalance_4.md",
      "heading": "4. Arch Mage",
      "className": "Arch Mage",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=13917",
      "scope": "main-and-expanded",
      "appliesTo": "Main and expanded classes",
      "maxJobLevel": 55,
      "pointLimit": 54,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "4.1",
          "name": "Climax",
          "notes": [
            "Reduces AP consumption from 150 to 125.",
            "Reduces skill cooldown from 300 seconds to 60 seconds."
          ]
        },
        {
          "section": "4.2",
          "name": "Floral Flare Road",
          "notes": [
            "Increases global cooldown from 0.25 seconds to 0.75 seconds based on level 5."
          ]
        },
        {
          "section": "4.3",
          "name": "Tornado Storm",
          "notes": [
            "Increases global cooldown from 0.25 seconds to 0.75 seconds based on level 5."
          ]
        },
        {
          "section": "4.4",
          "name": "Stratum Tremor",
          "notes": [
            "Increases global cooldown from 0.25 seconds to 0.75 seconds based on level 5."
          ]
        },
        {
          "section": "4.5",
          "name": "Rain of Crystal",
          "notes": [
            "Increases global cooldown from 0.25 seconds to 0.75 seconds based on level 5."
          ]
        },
        {
          "section": "4.6",
          "name": "Crimson Arrow",
          "notes": [
            "Increases base damage from 1750%/3500%Matk to 2000%/3750%Matk based on level 5."
          ]
        },
        {
          "section": "4.7",
          "name": "Storm Cannon",
          "notes": [
            "Increases base damage from 6000%/7500%(Climax)Matk to 7750%/9250%(Climax)Matk based on level 5."
          ]
        },
        {
          "section": "4.8",
          "name": "Rock Down",
          "notes": [
            "Increases base damage from 6000%/7500%(Climax)Matk to 7750%/9250%(Climax)Matk based on level 5."
          ]
        },
        {
          "section": "4.9",
          "name": "Frozen Slash",
          "notes": [
            "Increases base damage from 4900%/6800%(Climax)Matk to 5200%/7100%(Climax)Matk based on level 5."
          ]
        },
        {
          "section": "4.10",
          "name": "Mystery Illusion",
          "notes": [
            "Increases global cooldown from 0.5 seconds to 0.75 seconds based on level 5."
          ]
        },
        {
          "section": "4.11",
          "name": "All Bloom",
          "notes": [
            "Increases global cooldown from 0.5 seconds to 1 second based on level 5."
          ]
        },
        {
          "section": "4.11",
          "name": "Violent Quake",
          "notes": [
            "Increases global cooldown from 0.5 seconds to 1 second based on level 5."
          ]
        },
        {
          "section": "4.12",
          "name": "Soul Vulcan Strike",
          "notes": [
            "Increases base damage from 1250%Matk to 1500%Matk per hit based on level 5."
          ]
        },
        {
          "section": "4.13",
          "name": "Astral Strike",
          "notes": [
            "Increases global cooldown from 0.5 seconds to 1 second based on level 10."
          ]
        }
      ]
    },
    {
      "id": "rebalance-5",
      "label": "Rebalance 5",
      "file": "rebalances/arch-mage/rebalance_5.md",
      "heading": "4. Arch Mage",
      "className": "Arch Mage",
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
      "file": "rebalances/arch-mage/added_skills.md",
      "skills": [
        "Energy Conversion"
      ]
    }
  ],
  "skillTabs": [
    {
      "id": "current",
      "label": "Arch Mage",
      "pointLimit": 59,
      "tree": {
        "columns": 9,
        "rows": 3
      },
      "skills": [
        {
          "id": 5228,
          "imageFile": "5228.png",
          "name": "Two-handed Staff Mastery",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Two-handed Staves increase your MATK.",
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
          "iconUrl": "assets/divine-pride/skills/5228.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5228",
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
          "id": 5229,
          "imageFile": "5229.png",
          "name": "Floral Flare Road",
          "maxLevel": 5,
          "prerequisiteText": "Crimson Rock Lv. 3",
          "group": "Active",
          "type": "Magical",
          "target": "1 Ground cell",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Temporarily summon blazing flower petals from the ground in your facing direction, inflicting Fire Magic damage within range.\nIt additionally increases damage, depending on your Base Level and SPL.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 790%, Effective range: 3x3 cells"
            },
            {
              "level": 2,
              "text": "MATK 1530%, Effective range: 5x5 cells"
            },
            {
              "level": 3,
              "text": "MATK 2270%, Effective range: 7x7 cells"
            },
            {
              "level": 4,
              "text": "MATK 3010%, Effective range: 9x9 cells"
            },
            {
              "level": 5,
              "text": "MATK 3750%, Effective range: 11x11 cells"
            }
          ],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "3 seconds",
          "castDelay": "0.75 seconds",
          "cooldown": "5 seconds",
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
                  "value": "76"
                },
                {
                  "level": 3,
                  "value": "82"
                },
                {
                  "level": 4,
                  "value": "88"
                },
                {
                  "level": 5,
                  "value": "94"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5229.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5229",
          "tree": {
            "idx": 3,
            "row": 0,
            "col": 3,
            "columns": 9,
            "requirements": [
              {
                "id": 2211,
                "level": 3,
                "name": "Crimson Rock",
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
                "value": "0.75 seconds"
              },
              {
                "label": "Cooldown",
                "value": "5 seconds"
              },
              {
                "label": "Target",
                "value": "1 Ground cell"
              },
              {
                "label": "Area of Effect",
                "value": "Lv 1: 3 x 3 cells / Lv 2: 5 x 5 cells / Lv 3: 7 x 7 cells / Lv 4: 9 x 9 cells / Lv 5: 11 x 11 cells"
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
                      "base-damage-matk": "790%",
                      "sp-cost": "70"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-matk": "1530%",
                      "sp-cost": "76"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-matk": "2270%",
                      "sp-cost": "82"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-matk": "3010%",
                      "sp-cost": "88"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-matk": "3750%",
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
              "skillName": "Floral Flare Road",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/arch-mage/rebalance_2.md",
              "section": "7.1",
              "notes": [
                "Reduces delay after skill from 0.5 seconds to 0.25 seconds.",
                "Increases SP consumption from 70 to 94 based on level 5.",
                "Increases damage from 1000%Matk to 3750%Matk per hit based on level 5."
              ],
              "specRows": [
                {
                  "label": "Cast Delay",
                  "before": "0.5 seconds",
                  "after": "0.25 seconds",
                  "scope": "",
                  "source": "Reduces delay after skill from 0.5 seconds to 0.25 seconds."
                },
                {
                  "label": "SP Cost",
                  "before": "70",
                  "after": "94",
                  "scope": "Lv 5",
                  "source": "Increases SP consumption from 70 to 94 based on level 5."
                },
                {
                  "label": "Damage",
                  "before": "1000%Matk",
                  "after": "3750%Matk per hit",
                  "scope": "Lv 5",
                  "source": "Increases damage from 1000%Matk to 3750%Matk per hit based on level 5."
                }
              ]
            },
            {
              "skillName": "Floral Flare Road",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/arch-mage/rebalance_4.md",
              "section": "4.2",
              "notes": [
                "Increases global cooldown from 0.25 seconds to 0.75 seconds based on level 5."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "0.25 seconds",
                  "after": "0.75 seconds",
                  "scope": "Lv 5",
                  "source": "Increases global cooldown from 0.25 seconds to 0.75 seconds based on level 5."
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
          "id": 5216,
          "imageFile": "5216.png",
          "name": "Rain Of Crystal",
          "maxLevel": 5,
          "prerequisiteText": "Frost Misty 3",
          "group": "Active",
          "type": "Magic",
          "target": "Instant Cast",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Causes a rain of ice picks to fall around you, dealing water-based magic damage to targets in an area.\nDamage is additionally increased depending on the user's base level and SPL..",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 940%/Area of Effect 9x9 Cells"
            },
            {
              "level": 2,
              "text": "MATK 1700%/Area of Effect 9x9 Cells"
            },
            {
              "level": 3,
              "text": "MATK 2460%/Area of Effect 11x11 Cells"
            },
            {
              "level": 4,
              "text": "MATK 3220%/Area of Effect 11x11 Cells"
            },
            {
              "level": 5,
              "text": "MATK 3980%/Area of Effect 13x13 Cells"
            }
          ],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "3 seconds",
          "castDelay": "0.75 seconds",
          "cooldown": "5 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "85"
                },
                {
                  "level": 2,
                  "value": "95"
                },
                {
                  "level": 3,
                  "value": "105"
                },
                {
                  "level": 4,
                  "value": "115"
                },
                {
                  "level": 5,
                  "value": "125"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5216.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5216",
          "tree": {
            "idx": 4,
            "row": 0,
            "col": 4,
            "columns": 9,
            "requirements": [
              {
                "id": 2203,
                "level": 3,
                "name": "Frost Misty",
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
                "value": "0.75 seconds"
              },
              {
                "label": "Cooldown",
                "value": "5 seconds"
              },
              {
                "label": "Target",
                "value": "Instant Cast"
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
                      "area-of-effect": "9x9",
                      "base-damage-matk": "940%",
                      "sp-cost": "85"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "9x9",
                      "base-damage-matk": "1700%",
                      "sp-cost": "95"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "11x11",
                      "base-damage-matk": "2460%",
                      "sp-cost": "105"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "11x11",
                      "base-damage-matk": "3220%",
                      "sp-cost": "115"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "13x13",
                      "base-damage-matk": "3980%",
                      "sp-cost": "125"
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
              "skillName": "Rain of Crystal",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/arch-mage/rebalance_2.md",
              "section": "7.2",
              "notes": [
                "Reduces delay after skill from 0.5 seconds to 0.25 seconds.",
                "Increases SP consumption from 80 to 100 based on level 5.",
                "Increases damage from 750%Matk to 3980%Matk per hit based on level 5."
              ],
              "specRows": [
                {
                  "label": "Cast Delay",
                  "before": "0.5 seconds",
                  "after": "0.25 seconds",
                  "scope": "",
                  "source": "Reduces delay after skill from 0.5 seconds to 0.25 seconds."
                },
                {
                  "label": "SP Cost",
                  "before": "80",
                  "after": "100",
                  "scope": "Lv 5",
                  "source": "Increases SP consumption from 80 to 100 based on level 5."
                },
                {
                  "label": "Damage",
                  "before": "750%Matk",
                  "after": "3980%Matk per hit",
                  "scope": "Lv 5",
                  "source": "Increases damage from 750%Matk to 3980%Matk per hit based on level 5."
                }
              ]
            },
            {
              "skillName": "Rain of Crystal",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/arch-mage/rebalance_3.md",
              "section": "4.1",
              "notes": [
                "Reduces area of effect from 19 x 19 cells to 13 x 13 cells based on level 5.",
                "Increases SP consumption from 100 to 125 based on level 5."
              ],
              "specRows": [
                {
                  "label": "Area of Effect",
                  "before": "19 x 19 cells",
                  "after": "13 x 13 cells",
                  "scope": "Lv 5",
                  "source": "Reduces area of effect from 19 x 19 cells to 13 x 13 cells based on level 5."
                },
                {
                  "label": "SP Cost",
                  "before": "100",
                  "after": "125",
                  "scope": "Lv 5",
                  "source": "Increases SP consumption from 100 to 125 based on level 5."
                }
              ]
            },
            {
              "skillName": "Rain of Crystal",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/arch-mage/rebalance_4.md",
              "section": "4.5",
              "notes": [
                "Increases global cooldown from 0.25 seconds to 0.75 seconds based on level 5."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "0.25 seconds",
                  "after": "0.75 seconds",
                  "scope": "Lv 5",
                  "source": "Increases global cooldown from 0.25 seconds to 0.75 seconds based on level 5."
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
          "id": 5227,
          "imageFile": "5227.png",
          "name": "Tornado Storm",
          "maxLevel": 5,
          "prerequisiteText": "Chain Lightning Lv. 3",
          "group": "Active",
          "type": "Magical",
          "target": "1 Ground cell",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Summon a lightning-charged tornado on the selected spot, inflicting Wind Magic damage on targets within range.\nIt additionally increases damage, depending on your Base Level and SPL.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 860%/Effective range: 5x5 cells"
            },
            {
              "level": 2,
              "text": "MATK 1620%/Effective range: 5x5 cells"
            },
            {
              "level": 3,
              "text": "MATK 2380%/Effective range: 7x7 cells"
            },
            {
              "level": 4,
              "text": "MATK 3140%/Effective range: 7x7 cells"
            },
            {
              "level": 5,
              "text": "MATK 3900%/Effective range: 9x9 cells"
            }
          ],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "3 seconds",
          "castDelay": "0.75 seconds",
          "cooldown": "5 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "78"
                },
                {
                  "level": 2,
                  "value": "82"
                },
                {
                  "level": 3,
                  "value": "86"
                },
                {
                  "level": 4,
                  "value": "90"
                },
                {
                  "level": 5,
                  "value": "94"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5227.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5227",
          "tree": {
            "idx": 5,
            "row": 0,
            "col": 5,
            "columns": 9,
            "requirements": [
              {
                "id": 2214,
                "level": 3,
                "name": "Chain Lightning",
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
                "value": "0.75 seconds"
              },
              {
                "label": "Cooldown",
                "value": "5 seconds"
              },
              {
                "label": "Target",
                "value": "1 Ground cell"
              },
              {
                "label": "Area of Effect",
                "value": "Lv 1: 5 x 5 cells / Lv 2: 5 x 5 cells / Lv 3: 7 x 7 cells / Lv 4: 7 x 7 cells / Lv 5: 9 x 9 cells"
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
                      "base-damage-matk": "860%",
                      "sp-cost": "78"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-matk": "1620%",
                      "sp-cost": "82"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-matk": "2380%",
                      "sp-cost": "86"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-matk": "3140%",
                      "sp-cost": "90"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-matk": "3900%",
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
              "skillName": "Tornado Storm",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/arch-mage/rebalance_2.md",
              "section": "7.3",
              "notes": [
                "Reduces delay after skill from 0.5 seconds to 0.25 seconds.",
                "Increases SP consumption from 75 to 94 based on level 5.",
                "Increases damage from 450%Matk to 3900%Matk per hit based on level 5."
              ],
              "specRows": [
                {
                  "label": "Cast Delay",
                  "before": "0.5 seconds",
                  "after": "0.25 seconds",
                  "scope": "",
                  "source": "Reduces delay after skill from 0.5 seconds to 0.25 seconds."
                },
                {
                  "label": "SP Cost",
                  "before": "75",
                  "after": "94",
                  "scope": "Lv 5",
                  "source": "Increases SP consumption from 75 to 94 based on level 5."
                },
                {
                  "label": "Damage",
                  "before": "450%Matk",
                  "after": "3900%Matk per hit",
                  "scope": "Lv 5",
                  "source": "Increases damage from 450%Matk to 3900%Matk per hit based on level 5."
                }
              ]
            },
            {
              "skillName": "Tornado Storm",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/arch-mage/rebalance_4.md",
              "section": "4.3",
              "notes": [
                "Increases global cooldown from 0.25 seconds to 0.75 seconds based on level 5."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "0.25 seconds",
                  "after": "0.75 seconds",
                  "scope": "Lv 5",
                  "source": "Increases global cooldown from 0.25 seconds to 0.75 seconds based on level 5."
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
          "id": 5221,
          "imageFile": "5221.png",
          "name": "Strantum Tremor",
          "maxLevel": 5,
          "prerequisiteText": "Sienna Execrate Lv. 3",
          "group": "Active",
          "type": "Magical",
          "target": "1 Ground cell",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Shake the ground, inflicting Earth Magic damage on targets within range.\nIt additionally increases damage, depending on your Base Level and SPL.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 830%/Effective range: 5x5 cells"
            },
            {
              "level": 2,
              "text": "MATK 1560%/Effective range: 5x5 cells"
            },
            {
              "level": 3,
              "text": "MATK 2290%/Effective range: 7x7 cells"
            },
            {
              "level": 4,
              "text": "MATK 3020%/Effective range: 7x7 cells"
            },
            {
              "level": 5,
              "text": "MATK 3750%/Effective range: 9x9 cells"
            }
          ],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "3 seconds",
          "castDelay": "0.75 seconds",
          "cooldown": "4 seconds",
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
                  "value": "79"
                },
                {
                  "level": 3,
                  "value": "84"
                },
                {
                  "level": 4,
                  "value": "89"
                },
                {
                  "level": 5,
                  "value": "94"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5221.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5221",
          "tree": {
            "idx": 6,
            "row": 0,
            "col": 6,
            "columns": 9,
            "requirements": [
              {
                "id": 2207,
                "level": 3,
                "name": "Sienna Execrate",
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
                "value": "0.75 seconds"
              },
              {
                "label": "Cooldown",
                "value": "4 seconds"
              },
              {
                "label": "Target",
                "value": "1 Ground cell"
              },
              {
                "label": "Area of Effect",
                "value": "Lv 1: 5 x 5 cells / Lv 2: 5 x 5 cells / Lv 3: 7 x 7 cells / Lv 4: 7 x 7 cells / Lv 5: 9 x 9 cells"
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
                      "base-damage-matk": "830%",
                      "sp-cost": "74"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-matk": "1560%",
                      "sp-cost": "79"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-matk": "2290%",
                      "sp-cost": "84"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-matk": "3020%",
                      "sp-cost": "89"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-matk": "3750%",
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
              "skillName": "Stratum Tremor",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/arch-mage/rebalance_2.md",
              "section": "7.4",
              "notes": [
                "Reduces delay after skill from 0.5 seconds to 0.25 seconds.",
                "Increases SP consumption from 75 to 94 based on level 5.",
                "Increases damage from 1250%Matk to 3750%Matk per hit based on level 5."
              ],
              "specRows": [
                {
                  "label": "Cast Delay",
                  "before": "0.5 seconds",
                  "after": "0.25 seconds",
                  "scope": "",
                  "source": "Reduces delay after skill from 0.5 seconds to 0.25 seconds."
                },
                {
                  "label": "SP Cost",
                  "before": "75",
                  "after": "94",
                  "scope": "Lv 5",
                  "source": "Increases SP consumption from 75 to 94 based on level 5."
                },
                {
                  "label": "Damage",
                  "before": "1250%Matk",
                  "after": "3750%Matk per hit",
                  "scope": "Lv 5",
                  "source": "Increases damage from 1250%Matk to 3750%Matk per hit based on level 5."
                }
              ]
            },
            {
              "skillName": "Stratum Tremor",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/arch-mage/rebalance_4.md",
              "section": "4.4",
              "notes": [
                "Increases global cooldown from 0.25 seconds to 0.75 seconds based on level 5."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "0.25 seconds",
                  "after": "0.75 seconds",
                  "scope": "Lv 5",
                  "source": "Increases global cooldown from 0.25 seconds to 0.75 seconds based on level 5."
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
          "id": 5220,
          "imageFile": "5220.png",
          "name": "Soul Vulcan Strike",
          "maxLevel": 5,
          "prerequisiteText": "Soul Expansion Lv. 5 and Two-handed Staff Mastery Lv. 3",
          "group": "Active",
          "type": "Magical",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Repeatedly cast a powerful Soul Strike at a target and others around it.\nIt additionally increases damage, depending on your Base Level and SPL.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 250%/Attack 3 times/Effective range: 3x3 cells"
            },
            {
              "level": 2,
              "text": "MATK 500%/Attack 4 times/Effective range: 5x5 cells"
            },
            {
              "level": 3,
              "text": "MATK 750%/Attack 5 times/Effective range: 7x7 cells"
            },
            {
              "level": 4,
              "text": "MATK 1000%/Attack 6 times/Effective range: 9x9 cells"
            },
            {
              "level": 5,
              "text": "MATK 1250%/Attack 7 times/Effective range: 11x11 cells"
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "3 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "0.7 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "90"
                },
                {
                  "level": 2,
                  "value": "95"
                },
                {
                  "level": 3,
                  "value": "100"
                },
                {
                  "level": 4,
                  "value": "105"
                },
                {
                  "level": 5,
                  "value": "110"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5220.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5220",
          "tree": {
            "idx": 7,
            "row": 0,
            "col": 7,
            "columns": 9,
            "requirements": [
              {
                "id": 2202,
                "level": 5,
                "name": "Soul Expansion",
                "visible": false
              },
              {
                "id": 5228,
                "level": 3,
                "name": "Two-handed Staff Mastery",
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
                "value": "3 seconds"
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
                "value": "1 Target"
              },
              {
                "label": "Area of Effect",
                "value": "Lv 1: 3 x 3 cells / Lv 2: 5 x 5 cells / Lv 3: 7 x 7 cells / Lv 4: 9 x 9 cells / Lv 5: 11 x 11 cells"
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
                      "base-damage-matk": "250%",
                      "sp-cost": "90"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-matk": "500%",
                      "sp-cost": "95"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-matk": "750%",
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-matk": "1000%",
                      "sp-cost": "105"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-matk": "1250%",
                      "sp-cost": "110"
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
              "skillName": "Soul Vulcan Strike",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/arch-mage/rebalance_2.md",
              "section": "7.15",
              "notes": [
                "Reduces SP consumption from 120 to 110 based on level 5.",
                "Increases damage from 900%Matk to 1250%Matk per hit based on level 5."
              ],
              "specRows": [
                {
                  "label": "SP Cost",
                  "before": "120",
                  "after": "110",
                  "scope": "Lv 5",
                  "source": "Reduces SP consumption from 120 to 110 based on level 5."
                },
                {
                  "label": "Damage",
                  "before": "900%Matk",
                  "after": "1250%Matk per hit",
                  "scope": "Lv 5",
                  "source": "Increases damage from 900%Matk to 1250%Matk per hit based on level 5."
                }
              ]
            },
            {
              "skillName": "Soul Vulcan Strike",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/arch-mage/rebalance_4.md",
              "section": "4.12",
              "notes": [
                "Increases base damage from 1250%Matk to 1500%Matk per hit based on level 5."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "1250%Matk",
                  "after": "1500%Matk per hit",
                  "scope": "Lv 5",
                  "source": "Increases base damage from 1250%Matk to 1500%Matk per hit based on level 5."
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
          "id": 5232,
          "imageFile": "5232.png",
          "name": "Climax",
          "maxLevel": 5,
          "prerequisiteText": "Tetra Vortex Lv. 5 and Two-handed Staff Mastery Lv. 3",
          "group": "Active (AP)",
          "type": "Magic",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Create special effects with certain magic you use for 300 seconds.\nDifferent effects are added, depending on the skill level.",
          "levelDetails": [],
          "variableCastTime": "0 seconds",
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
          "iconUrl": "assets/divine-pride/skills/5232.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5232",
          "tree": {
            "idx": 9,
            "row": 1,
            "col": 0,
            "columns": 9,
            "requirements": [
              {
                "id": 2217,
                "level": 5,
                "name": "Tetra Vortex",
                "visible": false
              },
              {
                "id": 5228,
                "level": 3,
                "name": "Two-handed Staff Mastery",
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
                "value": "5"
              },
              {
                "label": "Variable Cast Time",
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
          "irowikiUrl": "",
          "balanceNotes": [
            {
              "skillName": "Climax",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/arch-mage/rebalance_1.md",
              "section": "7.5",
              "notes": [
                "Reduces AP consumption from 200 to 150."
              ],
              "specRows": [
                {
                  "label": "AP Consumed",
                  "before": "200",
                  "after": "150",
                  "scope": "",
                  "source": "Reduces AP consumption from 200 to 150."
                }
              ]
            },
            {
              "skillName": "Climax",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/arch-mage/rebalance_4.md",
              "section": "4.1",
              "notes": [
                "Reduces AP consumption from 150 to 125.",
                "Reduces skill cooldown from 300 seconds to 60 seconds."
              ],
              "specRows": [
                {
                  "label": "AP Consumed",
                  "before": "150",
                  "after": "125",
                  "scope": "",
                  "source": "Reduces AP consumption from 150 to 125."
                },
                {
                  "label": "Cooldown",
                  "before": "300 seconds",
                  "after": "60 seconds",
                  "scope": "",
                  "source": "Reduces skill cooldown from 300 seconds to 60 seconds."
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
          "id": 5235,
          "imageFile": "5235.png",
          "name": "Crimson Arrow",
          "maxLevel": 5,
          "prerequisiteText": "Floral Flare Road 1",
          "group": "Active",
          "type": "Magic",
          "target": "Single Target",
          "recoversAp": "2",
          "consumesAp": "",
          "description": "Shoots a flame arrow at the target, inflicting fire attribute magic damage in a straight line from the caster to the target, and the flame arrow hitting the target explodes, inflicting fire attribute magic damage to surrounding targets.\nDamage is additionally increased depending on the user's base level and SPL.\nIf there is a climax effect, the fire attribute magic damage from the explosion of the flame arrow is divided into two attacks, but is applied as two attacks (regardless of the climax level).",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 350%(Straight Line)/700%(Explosion/Area of Effect 5x5 Cells)"
            },
            {
              "level": 2,
              "text": "MATK 700%(Straight Line)/1400%(Explosion/Area of Effect 5x5 Cells)"
            },
            {
              "level": 3,
              "text": "MATK 1050%(Straight Line)/2100%(Explosion/Area of Effect 5x5 Cells)"
            },
            {
              "level": 4,
              "text": "MATK 1400%(Straight Line)/2800%(Explosion/Area of Effect 7x7 Cells)"
            },
            {
              "level": 5,
              "text": "MATK 1750%(Straight Line)/3500%(Explosion/Area of Effect 7x7 Cells)"
            }
          ],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "4 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "0.3 seconds",
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
          "iconUrl": "assets/divine-pride/skills/5235.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5235",
          "tree": {
            "idx": 10,
            "row": 1,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 5229,
                "level": 1,
                "name": "Floral Flare Road",
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
                "value": "4 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.5 seconds"
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
                      "base-damage-matk": "350%",
                      "sp-cost": "74"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk": "700%",
                      "sp-cost": "78"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk": "1050%",
                      "sp-cost": "82"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk": "1400%",
                      "sp-cost": "86"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk": "1750%",
                      "sp-cost": "90"
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
              "skillName": "Crimson Arrow",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/arch-mage/rebalance_1.md",
              "section": "7.2",
              "notes": [
                "Reduces cooldown from 4 seconds to 0.3 seconds based on level 5.",
                "Reduces delay after skill from 1 second to 0.5 seconds based on level 5.",
                "Reduces AP recovery rate from 4 to 1.",
                "Increases damage of the secondary attack that deal damage to the target and surrounding enemies around the target from 2000%Matk to 3000%Matk based on level 5.",
                "If using the skill while under Climax buff, the secondary attack damage will be doubled.",
                "Increases area of effect of the secondary attack from 5x5 cells to 7x7 cells based on level 5."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "4 seconds",
                  "after": "0.3 seconds",
                  "scope": "Lv 5",
                  "source": "Reduces cooldown from 4 seconds to 0.3 seconds based on level 5."
                },
                {
                  "label": "Cast Delay",
                  "before": "1 second",
                  "after": "0.5 seconds",
                  "scope": "Lv 5",
                  "source": "Reduces delay after skill from 1 second to 0.5 seconds based on level 5."
                },
                {
                  "label": "AP Generated",
                  "before": "4",
                  "after": "1",
                  "scope": "",
                  "source": "Reduces AP recovery rate from 4 to 1."
                },
                {
                  "label": "Damage Of The Secondary Attack That Deal Damage To The Target And Surrounding Enemies Around The Target",
                  "before": "2000%Matk",
                  "after": "3000%Matk",
                  "scope": "Lv 5",
                  "source": "Increases damage of the secondary attack that deal damage to the target and surrounding enemies around the target from 2000%Matk to 3000%Matk based on level 5."
                },
                {
                  "label": "Area of Effect",
                  "before": "5 x 5 cells",
                  "after": "7 x 7 cells",
                  "scope": "Lv 5",
                  "source": "Increases area of effect of the secondary attack from 5x5 cells to 7x7 cells based on level 5."
                }
              ]
            },
            {
              "skillName": "Crimson Arrow",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/arch-mage/rebalance_2.md",
              "section": "7.5",
              "notes": [
                "Reduces SP consumption from 105 to 94 based on level 5.",
                "Increases AP recovery rate from 1 to 2."
              ],
              "specRows": [
                {
                  "label": "SP Cost",
                  "before": "105",
                  "after": "94",
                  "scope": "Lv 5",
                  "source": "Reduces SP consumption from 105 to 94 based on level 5."
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
              "skillName": "Crimson Arrow",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/arch-mage/rebalance_3.md",
              "section": "4.2",
              "notes": [
                "Reduces SP consumption from 94 to 90 based on level 5.",
                "Increases base damage of linear damage from 1500%Matk to 1750%Matk based on level 5.",
                "Increases base damage of explosion damage from 3000%Matk to 3500%Matk based on level 5."
              ],
              "specRows": [
                {
                  "label": "SP Cost",
                  "before": "94",
                  "after": "90",
                  "scope": "Lv 5",
                  "source": "Reduces SP consumption from 94 to 90 based on level 5."
                },
                {
                  "label": "Damage",
                  "before": "1500%Matk",
                  "after": "1750%Matk",
                  "scope": "Lv 5",
                  "source": "Increases base damage of linear damage from 1500%Matk to 1750%Matk based on level 5."
                },
                {
                  "label": "Damage",
                  "before": "3000%Matk",
                  "after": "3500%Matk",
                  "scope": "Lv 5",
                  "source": "Increases base damage of explosion damage from 3000%Matk to 3500%Matk based on level 5."
                }
              ]
            },
            {
              "skillName": "Crimson Arrow",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/arch-mage/rebalance_4.md",
              "section": "4.6",
              "notes": [
                "Increases base damage from 1750%/3500%Matk to 2000%/3750%Matk based on level 5."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "1750%/3500%Matk",
                  "after": "2000%/3750%Matk",
                  "scope": "Lv 5",
                  "source": "Increases base damage from 1750%/3500%Matk to 2000%/3750%Matk based on level 5."
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
          "id": 5237,
          "imageFile": "5237.png",
          "name": "Frozen Slash",
          "maxLevel": 5,
          "prerequisiteText": "Rain of Crystal 1",
          "group": "Active",
          "type": "Magic",
          "target": "Instant Cast",
          "recoversAp": "2",
          "consumesAp": "",
          "description": "Inflicts water magic damage to targets within the range around the caster with sharp ice.\nDamage is additionally increased depending on the user's base level and SPL.\nIf a climax effect active, greater damage is inflicted (regardless of the climax level).",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 1300%/1800%(Climax)/Area of Effect 9x9 Cells"
            },
            {
              "level": 2,
              "text": "MATK 2200%/3050%(Climax)/Area of Effect 9x9 Cells"
            },
            {
              "level": 3,
              "text": "MATK 3100%/4300%(Climax)/Area of Effect 11x11 Cells"
            },
            {
              "level": 4,
              "text": "MATK 4000%/5550%(Climax)/Area of Effect 11x11 Cells"
            },
            {
              "level": 5,
              "text": "MATK 4900%/6800%(Climax)/Area of Effect 13x13 Cells"
            }
          ],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "4 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "0.45 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "103"
                },
                {
                  "level": 2,
                  "value": "106"
                },
                {
                  "level": 3,
                  "value": "109"
                },
                {
                  "level": 4,
                  "value": "112"
                },
                {
                  "level": 5,
                  "value": "115"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5237.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5237",
          "tree": {
            "idx": 11,
            "row": 1,
            "col": 2,
            "columns": 9,
            "requirements": [
              {
                "id": 5216,
                "level": 1,
                "name": "Crystal Rain",
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
                "value": "4 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.5 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0.45 seconds"
              },
              {
                "label": "Target",
                "value": "Instant Cast"
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
                      "area-of-effect": "9x9",
                      "base-damage-matk": "1300%",
                      "sp-cost": "103"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "9x9",
                      "base-damage-matk": "2200%",
                      "sp-cost": "106"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "11x11",
                      "base-damage-matk": "3100%",
                      "sp-cost": "109"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "11x11",
                      "base-damage-matk": "4000%",
                      "sp-cost": "112"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "13x13",
                      "base-damage-matk": "4900%",
                      "sp-cost": "115"
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
              "skillName": "Frozen Slash",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/arch-mage/rebalance_1.md",
              "section": "7.3",
              "notes": [
                "Reduces cooldown from 4 seconds to 0.3 seconds based on level 5.",
                "Reduces delay after skill from 1 second to 0.5 seconds based on level 5.",
                "Reduces AP recovery rate from 4 to 1.",
                "Increases area of effect from 9x9 cells to 13x13 cells based on level 5.",
                "Reduces damage from 3750%Matk to 3000%Matk based on level 5.",
                "Increases damage while under Climax buff to 4250%Matk."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "4 seconds",
                  "after": "0.3 seconds",
                  "scope": "Lv 5",
                  "source": "Reduces cooldown from 4 seconds to 0.3 seconds based on level 5."
                },
                {
                  "label": "Cast Delay",
                  "before": "1 second",
                  "after": "0.5 seconds",
                  "scope": "Lv 5",
                  "source": "Reduces delay after skill from 1 second to 0.5 seconds based on level 5."
                },
                {
                  "label": "AP Generated",
                  "before": "4",
                  "after": "1",
                  "scope": "",
                  "source": "Reduces AP recovery rate from 4 to 1."
                },
                {
                  "label": "Area of Effect",
                  "before": "9 x 9 cells",
                  "after": "13 x 13 cells",
                  "scope": "Lv 5",
                  "source": "Increases area of effect from 9x9 cells to 13x13 cells based on level 5."
                },
                {
                  "label": "Damage",
                  "before": "3750%Matk",
                  "after": "3000%Matk",
                  "scope": "Lv 5",
                  "source": "Reduces damage from 3750%Matk to 3000%Matk based on level 5."
                }
              ]
            },
            {
              "skillName": "Frozen Slash",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/arch-mage/rebalance_2.md",
              "section": "7.6",
              "notes": [
                "Increases cooldown from 0.3 seconds to 0.45 seconds.",
                "Increases SP consumption from 85 to 96 based on level 5.",
                "Increases AP recovery rate from 1 to 2.",
                "Increases damage from 3000%/4250%(Climax)Matk to 4750%/6650%(Climax)Matk based on level 5."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "0.3 seconds",
                  "after": "0.45 seconds",
                  "scope": "",
                  "source": "Increases cooldown from 0.3 seconds to 0.45 seconds."
                },
                {
                  "label": "SP Cost",
                  "before": "85",
                  "after": "96",
                  "scope": "Lv 5",
                  "source": "Increases SP consumption from 85 to 96 based on level 5."
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
                  "before": "3000%/4250%(Clima x )Matk",
                  "after": "4750%/6650%(Clima x )Matk",
                  "scope": "Lv 5",
                  "source": "Increases damage from 3000%/4250%(Climax)Matk to 4750%/6650%(Climax)Matk based on level 5."
                }
              ]
            },
            {
              "skillName": "Frozen Slash",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/arch-mage/rebalance_3.md",
              "section": "4.4",
              "notes": [
                "Increases SP consumption from 96 to 115 based on level 5.",
                "Increases base damage from 4750%/6650%Matk to 4900%/6800%Matk based on level 5."
              ],
              "specRows": [
                {
                  "label": "SP Cost",
                  "before": "96",
                  "after": "115",
                  "scope": "Lv 5",
                  "source": "Increases SP consumption from 96 to 115 based on level 5."
                },
                {
                  "label": "Damage",
                  "before": "4750%/6650%Matk",
                  "after": "4900%/6800%Matk",
                  "scope": "Lv 5",
                  "source": "Increases base damage from 4750%/6650%Matk to 4900%/6800%Matk based on level 5."
                }
              ]
            },
            {
              "skillName": "Frozen Slash",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/arch-mage/rebalance_4.md",
              "section": "4.9",
              "notes": [
                "Increases base damage from 4900%/6800%(Climax)Matk to 5200%/7100%(Climax)Matk based on level 5."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "4900%/6800%(Clima x )Matk",
                  "after": "5200%/7100%(Clima x )Matk",
                  "scope": "Lv 5",
                  "source": "Increases base damage from 4900%/6800%(Climax)Matk to 5200%/7100%(Climax)Matk based on level 5."
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
          "id": 5234,
          "imageFile": "5234.png",
          "name": "Storm Cannon",
          "maxLevel": 5,
          "prerequisiteText": "Tornado Storm 1",
          "group": "Active",
          "type": "Magic",
          "target": "Single Target",
          "recoversAp": "2",
          "consumesAp": "",
          "description": "Shoots a vortex of wind in a straight line to the target, inflicting wind attribute magic damage to the target within the range.\nDamage is additionally increased depending on the user's base level and SPL.\nIf a climax effect active, greater damage is inflicted (regardless of the climax level).",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 1200%/1500%(Climax)"
            },
            {
              "level": 2,
              "text": "MATK 2400%/3000%(Climax)"
            },
            {
              "level": 3,
              "text": "MATK 3600%/4500%(Climax)"
            },
            {
              "level": 4,
              "text": "MATK 4800%/6000%(Climax)"
            },
            {
              "level": 5,
              "text": "MATK 6000%/7500%(Climax)"
            }
          ],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "4 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "0.3 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "76"
                },
                {
                  "level": 2,
                  "value": "79"
                },
                {
                  "level": 3,
                  "value": "82"
                },
                {
                  "level": 4,
                  "value": "85"
                },
                {
                  "level": 5,
                  "value": "88"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5234.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5234",
          "tree": {
            "idx": 12,
            "row": 1,
            "col": 3,
            "columns": 9,
            "requirements": [
              {
                "id": 5227,
                "level": 1,
                "name": "Tornado Storm",
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
                "value": "4 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.5 seconds"
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
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "base-damage-matk": "1200%",
                      "sp-cost": "76"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-matk": "2400%",
                      "sp-cost": "79"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-matk": "3600%",
                      "sp-cost": "82"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-matk": "4800%",
                      "sp-cost": "85"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-matk": "6000%",
                      "sp-cost": "88"
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
              "skillName": "Storm Cannon",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/arch-mage/rebalance_1.md",
              "section": "7.4",
              "notes": [
                "Reduces cooldown from 4 seconds to 0.3 seconds based on level 5.",
                "Reduces delay after skill from 1 second to 0.5 seconds based on level 5.",
                "Reduces AP recovery rate from 4 to 1.",
                "Increases damage while under Climax buff to 4250%Matk."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "4 seconds",
                  "after": "0.3 seconds",
                  "scope": "Lv 5",
                  "source": "Reduces cooldown from 4 seconds to 0.3 seconds based on level 5."
                },
                {
                  "label": "Cast Delay",
                  "before": "1 second",
                  "after": "0.5 seconds",
                  "scope": "Lv 5",
                  "source": "Reduces delay after skill from 1 second to 0.5 seconds based on level 5."
                },
                {
                  "label": "AP Generated",
                  "before": "4",
                  "after": "1",
                  "scope": "",
                  "source": "Reduces AP recovery rate from 4 to 1."
                }
              ]
            },
            {
              "skillName": "Storm Cannon",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/arch-mage/rebalance_2.md",
              "section": "7.7",
              "notes": [
                "Reduces SP consumption from 100 to 94 based on level 5.",
                "Increases AP recovery rate from 1 to 2.",
                "Increases damage from 3000%/4250%(Climax)Matk to 4750%/6250%(Climax)Matk based on level 5."
              ],
              "specRows": [
                {
                  "label": "SP Cost",
                  "before": "100",
                  "after": "94",
                  "scope": "Lv 5",
                  "source": "Reduces SP consumption from 100 to 94 based on level 5."
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
                  "before": "3000%/4250%(Clima x )Matk",
                  "after": "4750%/6250%(Clima x )Matk",
                  "scope": "Lv 5",
                  "source": "Increases damage from 3000%/4250%(Climax)Matk to 4750%/6250%(Climax)Matk based on level 5."
                }
              ]
            },
            {
              "skillName": "Storm Cannon",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/arch-mage/rebalance_3.md",
              "section": "4.3",
              "notes": [
                "Reduces SP consumption from 94 to 88 based on level 5.",
                "Increases base damage from 4750%/6250%Matk to 6000%/7500%Matk based on level 5."
              ],
              "specRows": [
                {
                  "label": "SP Cost",
                  "before": "94",
                  "after": "88",
                  "scope": "Lv 5",
                  "source": "Reduces SP consumption from 94 to 88 based on level 5."
                },
                {
                  "label": "Damage",
                  "before": "4750%/6250%Matk",
                  "after": "6000%/7500%Matk",
                  "scope": "Lv 5",
                  "source": "Increases base damage from 4750%/6250%Matk to 6000%/7500%Matk based on level 5."
                }
              ]
            },
            {
              "skillName": "Storm Cannon",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/arch-mage/rebalance_4.md",
              "section": "4.7",
              "notes": [
                "Increases base damage from 6000%/7500%(Climax)Matk to 7750%/9250%(Climax)Matk based on level 5."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "6000%/7500%(Clima x )Matk",
                  "after": "7750%/9250%(Clima x )Matk",
                  "scope": "Lv 5",
                  "source": "Increases base damage from 6000%/7500%(Climax)Matk to 7750%/9250%(Climax)Matk based on level 5."
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
          "id": 5233,
          "imageFile": "5233.png",
          "name": "Rock Down",
          "maxLevel": 5,
          "prerequisiteText": "Stratum Tremor 1",
          "group": "Active",
          "type": "Magic",
          "target": "Single Target",
          "recoversAp": "2",
          "consumesAp": "",
          "description": "Drops a large rock on the target and Inflict Earth magical damage to the target and surrounding enemies.\nDamage is additionally increased depending on the user's base level and SPL.\nIf a climax effect active, greater damage is inflicted (regardless of the climax level).",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 1200%/1500%(Climax)/Area of Effect 5x5 Cells"
            },
            {
              "level": 2,
              "text": "MATK 2400%/3000%(Climax)/Area of Effect 5x5 Cells"
            },
            {
              "level": 3,
              "text": "MATK 3600%/4500%(Climax)/Area of Effect 5x5 Cells"
            },
            {
              "level": 4,
              "text": "MATK 4800%/6000%(Climax)/Area of Effect 7x7 Cells"
            },
            {
              "level": 5,
              "text": "MATK 6000%/7500%(Climax)/Area of Effect 7x7 Cells"
            }
          ],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "4 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "0.3 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "72"
                },
                {
                  "level": 2,
                  "value": "76"
                },
                {
                  "level": 3,
                  "value": "80"
                },
                {
                  "level": 4,
                  "value": "84"
                },
                {
                  "level": 5,
                  "value": "88"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5233.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5233",
          "tree": {
            "idx": 13,
            "row": 1,
            "col": 4,
            "columns": 9,
            "requirements": [
              {
                "id": 5221,
                "level": 1,
                "name": "Stratum Tremor",
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
                "value": "4 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.5 seconds"
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
                      "base-damage-matk": "1200%",
                      "sp-cost": "72"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk": "2400%",
                      "sp-cost": "76"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk": "3600%",
                      "sp-cost": "80"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk": "4800%",
                      "sp-cost": "84"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk": "6000%",
                      "sp-cost": "88"
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
              "skillName": "Rock Down",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/arch-mage/rebalance_1.md",
              "section": "7.3",
              "notes": [
                "Reduces cooldown from 4 seconds to 0.3 seconds based on level 5.",
                "Reduces delay after skill from 1 second to 0.5 seconds based on level 5.",
                "Reduces AP recovery rate from 4 to 1.",
                "Reduces damage from 3750%Matk to 3000%Matk based on level 5.",
                "Increases damage while under Climax buff to 4250%Matk.",
                "Increases area of effect from 3x3 cells to 7x7 cells based on level 5."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "4 seconds",
                  "after": "0.3 seconds",
                  "scope": "Lv 5",
                  "source": "Reduces cooldown from 4 seconds to 0.3 seconds based on level 5."
                },
                {
                  "label": "Cast Delay",
                  "before": "1 second",
                  "after": "0.5 seconds",
                  "scope": "Lv 5",
                  "source": "Reduces delay after skill from 1 second to 0.5 seconds based on level 5."
                },
                {
                  "label": "AP Generated",
                  "before": "4",
                  "after": "1",
                  "scope": "",
                  "source": "Reduces AP recovery rate from 4 to 1."
                },
                {
                  "label": "Damage",
                  "before": "3750%Matk",
                  "after": "3000%Matk",
                  "scope": "Lv 5",
                  "source": "Reduces damage from 3750%Matk to 3000%Matk based on level 5."
                },
                {
                  "label": "Area of Effect",
                  "before": "3 x 3 cells",
                  "after": "7 x 7 cells",
                  "scope": "Lv 5",
                  "source": "Increases area of effect from 3x3 cells to 7x7 cells based on level 5."
                }
              ]
            },
            {
              "skillName": "Rock Down",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/arch-mage/rebalance_2.md",
              "section": "7.8",
              "notes": [
                "Increases SP consumption from 85 to 92 based on level 5.",
                "Increases AP recovery rate from 1 to 2.",
                "Increases damage from 3000%/4250%(Climax)Matk to 4750%/6250%(Climax)Matk based on level 5."
              ],
              "specRows": [
                {
                  "label": "SP Cost",
                  "before": "85",
                  "after": "92",
                  "scope": "Lv 5",
                  "source": "Increases SP consumption from 85 to 92 based on level 5."
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
                  "before": "3000%/4250%(Clima x )Matk",
                  "after": "4750%/6250%(Clima x )Matk",
                  "scope": "Lv 5",
                  "source": "Increases damage from 3000%/4250%(Climax)Matk to 4750%/6250%(Climax)Matk based on level 5."
                }
              ]
            },
            {
              "skillName": "Rock Down",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/arch-mage/rebalance_3.md",
              "section": "4.4",
              "notes": [
                "Reduces SP consumption from 94 to 88 based on level 5.",
                "Increases base damage from 4750%/6250%Matk to 6000%/7500%Matk based on level 5."
              ],
              "specRows": [
                {
                  "label": "SP Cost",
                  "before": "94",
                  "after": "88",
                  "scope": "Lv 5",
                  "source": "Reduces SP consumption from 94 to 88 based on level 5."
                },
                {
                  "label": "Damage",
                  "before": "4750%/6250%Matk",
                  "after": "6000%/7500%Matk",
                  "scope": "Lv 5",
                  "source": "Increases base damage from 4750%/6250%Matk to 6000%/7500%Matk based on level 5."
                }
              ]
            },
            {
              "skillName": "Rock Down",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/arch-mage/rebalance_4.md",
              "section": "4.8",
              "notes": [
                "Increases base damage from 6000%/7500%(Climax)Matk to 7750%/9250%(Climax)Matk based on level 5."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "6000%/7500%(Clima x )Matk",
                  "after": "7750%/9250%(Clima x )Matk",
                  "scope": "Lv 5",
                  "source": "Increases base damage from 6000%/7500%(Climax)Matk to 7750%/9250%(Climax)Matk based on level 5."
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
          "id": 5217,
          "imageFile": "5217.png",
          "name": "Mystery Illusion",
          "maxLevel": 5,
          "prerequisiteText": "Hell Inferno Lv. 3 and Soul Vulcan Strike Lv. 3",
          "group": "Active",
          "type": "Magical",
          "target": "1 Ground cell",
          "recoversAp": "5",
          "consumesAp": "",
          "description": "Cast mysterious magic on the selected ground spot.\nThis magic inflicts Shadow Magic damage on targets within range for its duration.\nIt additionally increases damage, depending on your Base Level and SPL.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 950%/Effective range: 9x9 cells"
            },
            {
              "level": 2,
              "text": "MATK 1900%/Effective range: 9x9 cells"
            },
            {
              "level": 3,
              "text": "MATK 2850%/Effective range: 11x11 cells"
            },
            {
              "level": 4,
              "text": "MATK 3800%/Effective range: 11x11 cells"
            },
            {
              "level": 5,
              "text": "MATK 4750%/Effective range: 13x13 cells"
            }
          ],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "4 seconds",
          "castDelay": "0.75 seconds",
          "cooldown": "4 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "78"
                },
                {
                  "level": 2,
                  "value": "86"
                },
                {
                  "level": 3,
                  "value": "94"
                },
                {
                  "level": 4,
                  "value": "102"
                },
                {
                  "level": 5,
                  "value": "110"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5217.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5217",
          "tree": {
            "idx": 14,
            "row": 1,
            "col": 5,
            "columns": 9,
            "requirements": [
              {
                "id": 2212,
                "level": 3,
                "name": "Hell Inferno",
                "visible": false
              },
              {
                "id": 5220,
                "level": 3,
                "name": "Soul Vulcan Strike",
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
                "value": "4 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.75 seconds"
              },
              {
                "label": "Cooldown",
                "value": "4 seconds"
              },
              {
                "label": "Target",
                "value": "1 Ground cell"
              },
              {
                "label": "Area of Effect",
                "value": "Lv 1: 9 x 9 cells / Lv 2: 9 x 9 cells / Lv 3: 11 x 11 cells / Lv 4: 11 x 11 cells / Lv 5: 13 x 13 cells"
              },
              {
                "label": "AP Generated",
                "value": "5"
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
                      "base-damage-matk": "950%",
                      "sp-cost": "78"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-matk": "1900%",
                      "sp-cost": "86"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-matk": "2850%",
                      "sp-cost": "94"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-matk": "3800%",
                      "sp-cost": "102"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-matk": "4750%",
                      "sp-cost": "110"
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
              "skillName": "Mystery Illusion",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/arch-mage/rebalance_1.md",
              "section": "7.4",
              "notes": [
                "Increases damage from 1250%Matk to 2500%Matk based on level 5.",
                "Recovers 4 AP upon casting."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "1250%Matk",
                  "after": "2500%Matk",
                  "scope": "Lv 5",
                  "source": "Increases damage from 1250%Matk to 2500%Matk based on level 5."
                }
              ]
            },
            {
              "skillName": "Mystery Illusion",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/arch-mage/rebalance_2.md",
              "section": "7.14",
              "notes": [
                "Reduces delay after skill from 1 second to 0.5 seconds.",
                "Reduces SP consumption from 120 to 110 based on level 5.",
                "Increases AP recovery rate from 4 to 5.",
                "Increases damage from 2500%Matk to 4750%Matk per hit based on level 5."
              ],
              "specRows": [
                {
                  "label": "Cast Delay",
                  "before": "1 second",
                  "after": "0.5 seconds",
                  "scope": "",
                  "source": "Reduces delay after skill from 1 second to 0.5 seconds."
                },
                {
                  "label": "SP Cost",
                  "before": "120",
                  "after": "110",
                  "scope": "Lv 5",
                  "source": "Reduces SP consumption from 120 to 110 based on level 5."
                },
                {
                  "label": "AP Generated",
                  "before": "4",
                  "after": "5",
                  "scope": "",
                  "source": "Increases AP recovery rate from 4 to 5."
                },
                {
                  "label": "Damage",
                  "before": "2500%Matk",
                  "after": "4750%Matk per hit",
                  "scope": "Lv 5",
                  "source": "Increases damage from 2500%Matk to 4750%Matk per hit based on level 5."
                }
              ]
            },
            {
              "skillName": "Mystery Illusion",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/arch-mage/rebalance_4.md",
              "section": "4.10",
              "notes": [
                "Increases global cooldown from 0.5 seconds to 0.75 seconds based on level 5."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "0.5 seconds",
                  "after": "0.75 seconds",
                  "scope": "Lv 5",
                  "source": "Increases global cooldown from 0.5 seconds to 0.75 seconds based on level 5."
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
          "id": 5214,
          "imageFile": "5214.png",
          "name": "Deadly Projection",
          "maxLevel": 5,
          "prerequisiteText": "Mystery Illusion Lv. 3",
          "group": "Active",
          "type": "Magical",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Sends a projection that causes the target's body to rot.\nNegates the target's Magical immunity for a period of time and deals Undead Magical damage.\nIt additionally increases damage, depending on your Base Level and SPL.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 2800%/Debuff Duration : 4 seconds"
            },
            {
              "level": 2,
              "text": "MATK 5600%/Debuff Duration : 5 seconds"
            },
            {
              "level": 3,
              "text": "MATK 8400%/Debuff Duration : 6 seconds"
            },
            {
              "level": 4,
              "text": "MATK 11200%/Debuff Duration : 7 seconds"
            },
            {
              "level": 5,
              "text": "MATK 14000%/Debuff Duration : 8 seconds"
            }
          ],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "3 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "2 seconds",
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
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5214.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5214",
          "tree": {
            "idx": 15,
            "row": 1,
            "col": 6,
            "columns": 9,
            "requirements": [
              {
                "id": 5217,
                "level": 3,
                "name": "Mystery Illusion",
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
                "value": "0.5 seconds"
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
                "label": "Duration",
                "value": "Lv 1: 4 seconds / Lv 2: 5 seconds / Lv 3: 6 seconds / Lv 4: 7 seconds / Lv 5: 8 seconds"
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
                      "base-damage-matk": "2800%",
                      "sp-cost": "70"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-matk": "5600%",
                      "sp-cost": "75"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-matk": "8400%",
                      "sp-cost": "80"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-matk": "11200%",
                      "sp-cost": "85"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-matk": "14000%",
                      "sp-cost": "90"
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
              "skillName": "Deadly Projection",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/arch-mage/rebalance_2.md",
              "section": "7.13",
              "notes": [
                "Reduces SP consumption from 120 to 90 based on level 5.",
                "Increases damage from 3600%Matk to 14000%Matk based on level 5."
              ],
              "specRows": [
                {
                  "label": "SP Cost",
                  "before": "120",
                  "after": "90",
                  "scope": "Lv 5",
                  "source": "Reduces SP consumption from 120 to 90 based on level 5."
                },
                {
                  "label": "Damage",
                  "before": "3600%Matk",
                  "after": "14000%Matk",
                  "scope": "Lv 5",
                  "source": "Increases damage from 3600%Matk to 14000%Matk based on level 5."
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
          "id": 5222,
          "imageFile": "5222.png",
          "name": "All Bloom",
          "maxLevel": 5,
          "prerequisiteText": "Floral Flare Road Lv. 3",
          "group": "Active",
          "type": "Magical",
          "target": "1 Ground cell",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Create a flower garden on the ground. Blazing flower petals randomly appear and explode.\ninflicting Fire Magic damage on targets in 7x7 cells around them.\nThis skill additionally increases damage, depending on your Base Level and SPL.\nClimax mode changes its effect, depending on its stage.\nClimax (Stage 1)\nFlower petals appear chance doubled.\nClimax (Stage 2)\nDecreases damage, but summons 2 flower petals at a time.\nClimax (Stage 3)\nAll Bloom damage +300% Increase.\nClimax (Stage 4)\nNo Petals are generated, and targets in skill range have 100% reduced Fire Resistance for 30 seconds.\nClimax (Stage 5)\nAdditional Fire Magic damage at 85,000% of MATK after all the flower petals explode.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 1400%/Petals : 4/Skill range 7x7 cells"
            },
            {
              "level": 2,
              "text": "MATK 2600%/Petals : 8/Skill range 7x7 cells"
            },
            {
              "level": 3,
              "text": "MATK 3800%/Petals : 12/Skill range 9x9 cells"
            },
            {
              "level": 4,
              "text": "MATK 5000%/Petals : 16/Skill range 9x9 cells"
            },
            {
              "level": 5,
              "text": "MATK 6200%/Petals : 20/Skill range 9x9 cells"
            }
          ],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "4 seconds",
          "castDelay": "1 second",
          "cooldown": "6 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "94"
                },
                {
                  "level": 2,
                  "value": "102"
                },
                {
                  "level": 3,
                  "value": "110"
                },
                {
                  "level": 4,
                  "value": "118"
                },
                {
                  "level": 5,
                  "value": "126"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5222.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5222",
          "tree": {
            "idx": 17,
            "row": 1,
            "col": 8,
            "columns": 9,
            "requirements": [
              {
                "id": 5229,
                "level": 3,
                "name": "Floral Flare Road",
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
                "value": "4 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "1 second"
              },
              {
                "label": "Cooldown",
                "value": "6 seconds"
              },
              {
                "label": "Target",
                "value": "1 Ground cell"
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
                      "base-damage-matk": "1400%",
                      "sp-cost": "94"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-matk": "2600%",
                      "sp-cost": "102"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-matk": "3800%",
                      "sp-cost": "110"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-matk": "5000%",
                      "sp-cost": "118"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-matk": "6200%",
                      "sp-cost": "126"
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
              "skillName": "All Bloom",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/arch-mage/rebalance_2.md",
              "section": "7.9",
              "notes": [
                "Reduces delay after skill from 1 second to 0.5 seconds.",
                "Increases SP consumption from 100 to 126 based on level 5.",
                "Increases damage from 500%Matk to 6200%Matk per hit based on level 5.",
                "No longer reduce skill damage on Climax level 2.",
                "Increases bonus damage on Climax level 3 from 100% to 300%.",
                "Increases damage of additional explosion on Climax level 5."
              ],
              "specRows": [
                {
                  "label": "Cast Delay",
                  "before": "1 second",
                  "after": "0.5 seconds",
                  "scope": "",
                  "source": "Reduces delay after skill from 1 second to 0.5 seconds."
                },
                {
                  "label": "SP Cost",
                  "before": "100",
                  "after": "126",
                  "scope": "Lv 5",
                  "source": "Increases SP consumption from 100 to 126 based on level 5."
                },
                {
                  "label": "Damage",
                  "before": "500%Matk",
                  "after": "6200%Matk per hit",
                  "scope": "Lv 5",
                  "source": "Increases damage from 500%Matk to 6200%Matk per hit based on level 5."
                },
                {
                  "label": "Bonus Damage On Climax Level 3",
                  "before": "100%",
                  "after": "300%",
                  "scope": "",
                  "source": "Increases bonus damage on Climax level 3 from 100% to 300%."
                }
              ]
            },
            {
              "skillName": "All Bloom",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/arch-mage/rebalance_4.md",
              "section": "4.11",
              "notes": [
                "Increases global cooldown from 0.5 seconds to 1 second based on level 5."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "0.5 seconds",
                  "after": "1 second",
                  "scope": "Lv 5",
                  "source": "Increases global cooldown from 0.5 seconds to 1 second based on level 5."
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
          "id": 5225,
          "imageFile": "5225.png",
          "name": "Crystal Impact",
          "maxLevel": 5,
          "prerequisiteText": "Rain of Crystal 3",
          "group": "Active",
          "type": "Magic",
          "target": "Instant Cast",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Creates a powerful water elemental wave in the surrounding area starting from the ground beneath one's feet, inflicting water elemental magic damage to targets within the range.\nTargets damaged by this wave will receive additional water magic damage after a certain period of time.\nDamage is additionally increased depending on the user's base level and SPL.\nIn the climax state, the effect changes depending on the level.\nClimax (Stage 1)\nApply a buff to caster and surrounding party member For 900 sec, DEF+ 300, MDEF+ 100, increase Water magic damage and resistance to Water by 30%.\nClimax (Stage 2)\nDamage dealt by Ice Waves increased to 2x.\nClimax (Stage 3)\nIce wave damage increases by 50%.\nClimax (Stage 4)\nReduce the damage of the ice wave, but increase delayed damage by 150%\nClimax (Stage 5)\nIncrease Ice Wave's area of effect to 15x15 cells, delayed damage now deal damage to 5x5 area surrounding the target.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 1550%/Area of Effect 9x9 Cells"
            },
            {
              "level": 2,
              "text": "MATK 2850%/Area of Effect 9x9 Cells"
            },
            {
              "level": 3,
              "text": "MATK 4150%/Area of Effect 11x11 Cells"
            },
            {
              "level": 4,
              "text": "MATK 5450%/Area of Effect 11x11 Cells"
            },
            {
              "level": 5,
              "text": "MATK 6750%/Area of Effect 13x13 Cells"
            }
          ],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "4 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "2 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "170"
                },
                {
                  "level": 2,
                  "value": "174"
                },
                {
                  "level": 3,
                  "value": "178"
                },
                {
                  "level": 4,
                  "value": "182"
                },
                {
                  "level": 5,
                  "value": "186"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5225.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5225",
          "tree": {
            "idx": 18,
            "row": 2,
            "col": 0,
            "columns": 9,
            "requirements": [
              {
                "id": 5216,
                "level": 3,
                "name": "Crystal Rain",
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
                "value": "4 seconds"
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
                "value": "Instant Cast"
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
                      "area-of-effect": "9x9",
                      "base-damage-matk": "1550%",
                      "sp-cost": "170"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "9x9",
                      "base-damage-matk": "2850%",
                      "sp-cost": "174"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "11x11",
                      "base-damage-matk": "4150%",
                      "sp-cost": "178"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "11x11",
                      "base-damage-matk": "5450%",
                      "sp-cost": "182"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "13x13",
                      "base-damage-matk": "6750%",
                      "sp-cost": "186"
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
              "skillName": "Crystal Impact",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/arch-mage/rebalance_2.md",
              "section": "7.10",
              "notes": [
                "Reduces cooldown from 6 seconds to 2 seconds.",
                "Reduces delay after skill from 1 second to 0.5 seconds.",
                "Increases SP consumption from 120 to 132 based on level 5.",
                "Increases damage from 4000%/4000%(secondary)Matk to 6750%/6750%(secondary)Matk based on level 5."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "6 seconds",
                  "after": "2 seconds",
                  "scope": "",
                  "source": "Reduces cooldown from 6 seconds to 2 seconds."
                },
                {
                  "label": "Cast Delay",
                  "before": "1 second",
                  "after": "0.5 seconds",
                  "scope": "",
                  "source": "Reduces delay after skill from 1 second to 0.5 seconds."
                },
                {
                  "label": "SP Cost",
                  "before": "120",
                  "after": "132",
                  "scope": "Lv 5",
                  "source": "Increases SP consumption from 120 to 132 based on level 5."
                },
                {
                  "label": "Damage",
                  "before": "4000%/4000%(secondary)Matk",
                  "after": "6750%/6750%(secondary)Matk",
                  "scope": "Lv 5",
                  "source": "Increases damage from 4000%/4000%(secondary)Matk to 6750%/6750%(secondary)Matk based on level 5."
                }
              ]
            },
            {
              "skillName": "Crystal Impact",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/arch-mage/rebalance_3.md",
              "section": "4.5",
              "notes": [
                "Reduces area of effect from 15 x 15 cells to 13 x 13 cells based on level 5.",
                "Reduces area of effect bonus from Climax level 5 from entire screen to 15 x 15 cells.",
                "Increases SP consumption from 132 to 186 based on level 5."
              ],
              "specRows": [
                {
                  "label": "Area of Effect",
                  "before": "15 x 15 cells",
                  "after": "13 x 13 cells",
                  "scope": "Lv 5",
                  "source": "Reduces area of effect from 15 x 15 cells to 13 x 13 cells based on level 5."
                },
                {
                  "label": "Area of Effect",
                  "before": "Clima x level 5 from entire screen",
                  "after": "15 x 15 cells",
                  "scope": "",
                  "source": "Reduces area of effect bonus from Climax level 5 from entire screen to 15 x 15 cells."
                },
                {
                  "label": "SP Cost",
                  "before": "132",
                  "after": "186",
                  "scope": "Lv 5",
                  "source": "Increases SP consumption from 132 to 186 based on level 5."
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
          "id": 5215,
          "imageFile": "5215.png",
          "name": "Destructive Hurricane",
          "maxLevel": 5,
          "prerequisiteText": "Tornado Storm 3",
          "group": "Active",
          "type": "Magic",
          "target": "Instant Cast",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Creates a strong wind around you, inflicting wind attribute magic damage to targets within the range.\nDamage is additionally increased depending on the user's base level and SPL.\nIn the climax state, the effect changes depending on the level.\nClimax (Stage 1)\nMATK 12500% Additional damage from wind attribute magic.\nClimax (Stage 2)\nAdd 2 cells knockback effect.\nClimax (Stage 3)\nDestructive Hurricane Damage 150% increase.\nClimax (Stage 4)\nSkill no longer does damage but triggers a buff. For 900 sec, MATK+ 100 and increase Wind property magic damage by 30%\nClimax (Stage 5)\nArea of Effect change to 19x19, Reduced Destructive Hurricane Damage by 20% .",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 3450%/Area of Effect 7x7 Cells"
            },
            {
              "level": 2,
              "text": "MATK 6300%/Area of Effect 7x7 Cells"
            },
            {
              "level": 3,
              "text": "MATK 9150%/Area of Effect 9x9 Cells"
            },
            {
              "level": 4,
              "text": "MATK 12000%/Area of Effect 9x9 Cells"
            },
            {
              "level": 5,
              "text": "MATK 14850%/Area of Effect 11x11 Cells"
            }
          ],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "4 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "2.5 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "170"
                },
                {
                  "level": 2,
                  "value": "174"
                },
                {
                  "level": 3,
                  "value": "178"
                },
                {
                  "level": 4,
                  "value": "182"
                },
                {
                  "level": 5,
                  "value": "186"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5215.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5215",
          "tree": {
            "idx": 19,
            "row": 2,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 5227,
                "level": 3,
                "name": "Tornado Storm",
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
                "value": "4 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.5 seconds"
              },
              {
                "label": "Cooldown",
                "value": "2.5 seconds"
              },
              {
                "label": "Target",
                "value": "Instant Cast"
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
                      "area-of-effect": "7x7",
                      "base-damage-matk": "3450%",
                      "sp-cost": "170"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk": "6300%",
                      "sp-cost": "174"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "9x9",
                      "base-damage-matk": "9150%",
                      "sp-cost": "178"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "9x9",
                      "base-damage-matk": "12000%",
                      "sp-cost": "182"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "11x11",
                      "base-damage-matk": "14850%",
                      "sp-cost": "186"
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
              "skillName": "Destructive Hurricane",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/arch-mage/rebalance_2.md",
              "section": "7.11",
              "notes": [
                "Reduces cooldown from 6 seconds to 2 seconds.",
                "Reduces delay after skill from 1 second to 0.5 seconds.",
                "Increases SP consumption from 120 to 132 based on level 5.",
                "Increases damage from 8000%Matk to 14250%Matk based on level 5.",
                "Increases damage of additional hit on Climax level 1.",
                "Increases bonus damage on Climax level 3 from 100% to 200%.",
                "Reduces bonus damage on Climax level 5 from 70% to 50%."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "6 seconds",
                  "after": "2 seconds",
                  "scope": "",
                  "source": "Reduces cooldown from 6 seconds to 2 seconds."
                },
                {
                  "label": "Cast Delay",
                  "before": "1 second",
                  "after": "0.5 seconds",
                  "scope": "",
                  "source": "Reduces delay after skill from 1 second to 0.5 seconds."
                },
                {
                  "label": "SP Cost",
                  "before": "120",
                  "after": "132",
                  "scope": "Lv 5",
                  "source": "Increases SP consumption from 120 to 132 based on level 5."
                },
                {
                  "label": "Damage",
                  "before": "8000%Matk",
                  "after": "14250%Matk",
                  "scope": "Lv 5",
                  "source": "Increases damage from 8000%Matk to 14250%Matk based on level 5."
                },
                {
                  "label": "Bonus Damage On Climax Level 3",
                  "before": "100%",
                  "after": "200%",
                  "scope": "",
                  "source": "Increases bonus damage on Climax level 3 from 100% to 200%."
                },
                {
                  "label": "Bonus Damage On Climax Level 5",
                  "before": "70%",
                  "after": "50%",
                  "scope": "",
                  "source": "Reduces bonus damage on Climax level 5 from 70% to 50%."
                }
              ]
            },
            {
              "skillName": "Destructive Hurricane",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/arch-mage/rebalance_3.md",
              "section": "4.5",
              "notes": [
                "Increases skill cooldown from 2 seconds to 2.5 seconds.",
                "Increases base damage from 14250%Matk to 14850%Matk based on level 5.",
                "Reduces damage bonus from Climax level 3 from 200% to 150%.",
                "Changes damage modifier from Climax level 5 from 50% increasing to 20% reducing.",
                "Increases SP consumption from 132 to 186 based on level 5."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "2 seconds",
                  "after": "2.5 seconds",
                  "scope": "",
                  "source": "Increases skill cooldown from 2 seconds to 2.5 seconds."
                },
                {
                  "label": "Damage",
                  "before": "14250%Matk",
                  "after": "14850%Matk",
                  "scope": "Lv 5",
                  "source": "Increases base damage from 14250%Matk to 14850%Matk based on level 5."
                },
                {
                  "label": "Damage Bonus",
                  "before": "Clima x level 3 from 200%",
                  "after": "150%",
                  "scope": "",
                  "source": "Reduces damage bonus from Climax level 3 from 200% to 150%."
                },
                {
                  "label": "Damage Modifier",
                  "before": "Clima x level 5 from 50% increasing",
                  "after": "20% reducing",
                  "scope": "",
                  "source": "Changes damage modifier from Climax level 5 from 50% increasing to 20% reducing."
                },
                {
                  "label": "SP Cost",
                  "before": "132",
                  "after": "186",
                  "scope": "Lv 5",
                  "source": "Increases SP consumption from 132 to 186 based on level 5."
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
          "id": 5218,
          "imageFile": "5218.png",
          "name": "Violent Quake",
          "maxLevel": 5,
          "prerequisiteText": "Stratum Tremor Lv. 3",
          "group": "Active",
          "type": "Magical",
          "target": "1 Ground cell",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Temporarily shake the ground and shoot rocks out of it, randomly attacking targets within range.\nRocks inflict Earth Magic damage on their target and others in 7 x7 cells around it.\nThis skill additionally increases damage, depending on your Base Level and SPL.\nClimax mode changes its effect, depending on its stage.\nClimax (Stage 1)\nDecreases damage, but summons 2 rocks at a time.\nClimax (Stage 2)\nRocks attack 9x9 cells.\nClimax (Stage 3)\nViolent Quake damage +200%.\nClimax (Stage 4)\nInstead of summoning rocks, adds Earth Resistance -100% to targets within range for 30 seconds.\nClimax (Stage 5)\nEffective range set to 7x7 cells.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 1400%/Rocks: 4/Skill Range 7x7 cells"
            },
            {
              "level": 2,
              "text": "MATK 2600%/Rocks: 8/Skill Range 7x7 cells"
            },
            {
              "level": 3,
              "text": "MATK 3800%/Rocks: 12/Skill Range 9x9 cells"
            },
            {
              "level": 4,
              "text": "MATK 5000%/Rocks: 16/Skill Range 9x9 cells"
            },
            {
              "level": 5,
              "text": "MATK 6200%/Rocks: 20/Skill Range 9x9 cells"
            }
          ],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "4 seconds",
          "castDelay": "1 second",
          "cooldown": "6 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "110"
                },
                {
                  "level": 2,
                  "value": "114"
                },
                {
                  "level": 3,
                  "value": "118"
                },
                {
                  "level": 4,
                  "value": "122"
                },
                {
                  "level": 5,
                  "value": "126"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5218.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5218",
          "tree": {
            "idx": 20,
            "row": 2,
            "col": 2,
            "columns": 9,
            "requirements": [
              {
                "id": 5221,
                "level": 3,
                "name": "Stratum Tremor",
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
                "value": "4 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "1 second"
              },
              {
                "label": "Cooldown",
                "value": "6 seconds"
              },
              {
                "label": "Target",
                "value": "1 Ground cell"
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
                      "base-damage-matk": "1400%",
                      "sp-cost": "110"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-matk": "2600%",
                      "sp-cost": "114"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-matk": "3800%",
                      "sp-cost": "118"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-matk": "5000%",
                      "sp-cost": "122"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-matk": "6200%",
                      "sp-cost": "126"
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
              "skillName": "Violent Quake",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/arch-mage/rebalance_2.md",
              "section": "7.12",
              "notes": [
                "Reduces delay after skill from 1 second to 0.5 seconds.",
                "Increases SP consumption from 100 to 126 based on level 5.",
                "Increases damage from 600%Matk to 6200%Matk per hit based on level 5.",
                "Increases bonus damage on Climax level 3 from 100% to 200%."
              ],
              "specRows": [
                {
                  "label": "Cast Delay",
                  "before": "1 second",
                  "after": "0.5 seconds",
                  "scope": "",
                  "source": "Reduces delay after skill from 1 second to 0.5 seconds."
                },
                {
                  "label": "SP Cost",
                  "before": "100",
                  "after": "126",
                  "scope": "Lv 5",
                  "source": "Increases SP consumption from 100 to 126 based on level 5."
                },
                {
                  "label": "Damage",
                  "before": "600%Matk",
                  "after": "6200%Matk per hit",
                  "scope": "Lv 5",
                  "source": "Increases damage from 600%Matk to 6200%Matk per hit based on level 5."
                },
                {
                  "label": "Bonus Damage On Climax Level 3",
                  "before": "100%",
                  "after": "200%",
                  "scope": "",
                  "source": "Increases bonus damage on Climax level 3 from 100% to 200%."
                }
              ]
            },
            {
              "skillName": "Violent Quake",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/arch-mage/rebalance_4.md",
              "section": "4.11",
              "notes": [
                "Increases global cooldown from 0.5 seconds to 1 second based on level 5."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "0.5 seconds",
                  "after": "1 second",
                  "scope": "Lv 5",
                  "source": "Increases global cooldown from 0.5 seconds to 1 second based on level 5."
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
          "id": 5230,
          "imageFile": "5230.png",
          "name": "Astral Strike",
          "maxLevel": 10,
          "prerequisiteText": "Comet Lv. 5, Mystery Illusion Lv. 3, and Deadly Projection Lv. 3",
          "group": "Active(AP)",
          "type": "Magical",
          "target": "1 Ground cell",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Drops a powerful meteorite on the ground, dealing Neutral Magical damage to targets in range and dealing multiple additional Neutral Magical damage over 6 seconds.\nThe meteor inflicts more damage on Undead and Dragon monsters.\nIt additionally increases damage, depending on your Base Level and SPL.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 2100%/ 2500% to Undead/Dragon enemies\nAdditional MATK 650%/Effective range: 5x5 cells"
            },
            {
              "level": 2,
              "text": "MATK 3900%/ 4600% to Undead/Dragon enemies\nAdditional MATK 1300%/Effective range: 5x5 cells"
            },
            {
              "level": 3,
              "text": "MATK 5700%/ 6700% to Undead/Dragon enemies\nAdditional MATK 1950%/Effective range: 5x5 cells"
            },
            {
              "level": 4,
              "text": "MATK 7500%/ 8800% to Undead/Dragon enemies\nAdditional MATK 2600%/Effective range: 7x7 cells"
            },
            {
              "level": 5,
              "text": "MATK 9300%/ 10900% to Undead/Dragon enemies\nAdditional MATK 3250%/Effective range: 7x7 cells"
            },
            {
              "level": 6,
              "text": "MATK 11100%/ 13000% to Undead/Dragon enemies\nAdditional MATK 3900%/Effective range: 7x7 cells"
            },
            {
              "level": 7,
              "text": "MATK 12900%/ 15100% to Undead/Dragon enemies\nAdditional MATK 4550%/Effective range: 9x9 cells"
            },
            {
              "level": 8,
              "text": "MATK 14700%/ 17200% to Undead/Dragon enemies\nAdditional MATK 5200%/Effective range: 9x9 cells"
            },
            {
              "level": 9,
              "text": "MATK 16500%/ 19300% to Undead/Dragon enemies\nAdditional MATK 5850%/Effective range: 9x9 cells"
            },
            {
              "level": 10,
              "text": "MATK 18300%/ 21400% to Undead/Dragon enemies\nAdditional MATK 6500%/Effective range: 11x11 cells"
            }
          ],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "4 seconds",
          "castDelay": "1 second",
          "cooldown": "6 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "130"
                },
                {
                  "level": 2,
                  "value": "130"
                },
                {
                  "level": 3,
                  "value": "130"
                },
                {
                  "level": 4,
                  "value": "130"
                },
                {
                  "level": 5,
                  "value": "130"
                },
                {
                  "level": 6,
                  "value": "130"
                },
                {
                  "level": 7,
                  "value": "130"
                },
                {
                  "level": 8,
                  "value": "130"
                },
                {
                  "level": 9,
                  "value": "130"
                },
                {
                  "level": 10,
                  "value": "130"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5230.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5230",
          "tree": {
            "idx": 22,
            "row": 2,
            "col": 4,
            "columns": 9,
            "requirements": [
              {
                "id": 2213,
                "level": 5,
                "name": "Comet",
                "visible": false
              },
              {
                "id": 5214,
                "level": 3,
                "name": "Deadly Projection",
                "visible": true
              },
              {
                "id": 5217,
                "level": 3,
                "name": "Mystery Illusion",
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
                "value": "1 second"
              },
              {
                "label": "Cooldown",
                "value": "6 seconds"
              },
              {
                "label": "Target",
                "value": "1 Ground cell"
              },
              {
                "label": "Area of Effect",
                "value": "Lv 1: 5 x 5 cells / Lv 2: 5 x 5 cells / Lv 3: 5 x 5 cells / Lv 4: 7 x 7 cells / Lv 5: 7 x 7 cells / Lv 6: 7 x 7 cells / Lv 7: 9 x 9 cells / Lv 8: 9 x 9 cells / Lv 9: 9 x 9 cells / Lv 10: 11 x 11 cells"
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
                      "base-damage-matk": "2100%\n650%",
                      "sp-cost": "130"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-matk": "3900%\n1300%",
                      "sp-cost": "130"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-matk": "5700%\n1950%",
                      "sp-cost": "130"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-matk": "7500%\n2600%",
                      "sp-cost": "130"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-matk": "9300%\n3250%",
                      "sp-cost": "130"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "base-damage-matk": "11100%\n3900%",
                      "sp-cost": "130"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "base-damage-matk": "12900%\n4550%",
                      "sp-cost": "130"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "base-damage-matk": "14700%\n5200%",
                      "sp-cost": "130"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "base-damage-matk": "16500%\n5850%",
                      "sp-cost": "130"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "base-damage-matk": "18300%\n6500%",
                      "sp-cost": "130"
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
              "skillName": "Astral Strike",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/arch-mage/rebalance_2.md",
              "section": "7.16",
              "notes": [
                "Reduces cooldown from 60 second to 6 seconds.",
                "Reduces SP consumption from 150 to 130.",
                "Reduces AP consumption from 150 to 25.",
                "Increases initial damage from 5000%/11000%(undead and dragon race)Matk to 18000%/21400%(undead and dragon race)Matk based on level 10.",
                "Increases over time damage from 2000%Matk to 6500%Matk per hit based on level 10.",
                "Reduces skill duration from 15 seconds to 6 seconds."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "60 second",
                  "after": "6 seconds",
                  "scope": "",
                  "source": "Reduces cooldown from 60 second to 6 seconds."
                },
                {
                  "label": "SP Cost",
                  "before": "150",
                  "after": "130",
                  "scope": "",
                  "source": "Reduces SP consumption from 150 to 130."
                },
                {
                  "label": "AP Consumed",
                  "before": "150",
                  "after": "25",
                  "scope": "",
                  "source": "Reduces AP consumption from 150 to 25."
                },
                {
                  "label": "Initial Damage",
                  "before": "5000%/11000%(undead and dragon race)Matk",
                  "after": "18000%/21400%(undead and dragon race)Matk",
                  "scope": "Lv 10",
                  "source": "Increases initial damage from 5000%/11000%(undead and dragon race)Matk to 18000%/21400%(undead and dragon race)Matk based on level 10."
                },
                {
                  "label": "Over Time Damage",
                  "before": "2000%Matk",
                  "after": "6500%Matk per hit",
                  "scope": "Lv 10",
                  "source": "Increases over time damage from 2000%Matk to 6500%Matk per hit based on level 10."
                },
                {
                  "label": "Skill Duration",
                  "before": "15 seconds",
                  "after": "6 seconds",
                  "scope": "",
                  "source": "Reduces skill duration from 15 seconds to 6 seconds."
                }
              ]
            },
            {
              "skillName": "Astral Strike",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/arch-mage/rebalance_4.md",
              "section": "4.13",
              "notes": [
                "Increases global cooldown from 0.5 seconds to 1 second based on level 10."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "0.5 seconds",
                  "after": "1 second",
                  "scope": "Lv 10",
                  "source": "Increases global cooldown from 0.5 seconds to 1 second based on level 10."
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
          "id": 6516,
          "imageFile": "6516.png",
          "name": "Energy Conversion",
          "maxLevel": 5,
          "prerequisiteText": "Recognized Spell level 2, Climax level 1",
          "group": "Active(AP)",
          "type": "Recovery",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "22 ~ 10",
          "description": "Converts some of the user's AP into SP through energy exchange.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Consumes 22 AP / Recovers 40 SP."
            },
            {
              "level": 2,
              "text": "Consumes 19 AP / Recovers 120 SP."
            },
            {
              "level": 3,
              "text": "Consumes 16 AP / Recovers 240 SP."
            },
            {
              "level": 4,
              "text": "Consumes 13 AP / Recovers 400 SP."
            },
            {
              "level": 5,
              "text": "Consumes 10 AP / Recovers 600 SP."
            }
          ],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "1 second",
          "castDelay": "0.5 seconds",
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6516.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6516",
          "tree": {
            "idx": 23,
            "row": 2,
            "col": 5,
            "columns": 9,
            "requirements": [
              {
                "id": 2206,
                "level": 2,
                "name": "Recognized Spell",
                "visible": false
              },
              {
                "id": 5232,
                "level": 1,
                "name": "Climax",
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
                "value": "5"
              },
              {
                "label": "Fixed Cast Time",
                "value": "1.5 seconds"
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
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "AP Consumed",
                "value": "22 ~ 10"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "effect",
                    "label": "Effect"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Consumes 22 AP / Recovers 40 SP"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Consumes 19 AP / Recovers 120 SP"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Consumes 16 AP / Recovers 240 SP"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Consumes 13 AP / Recovers 400 SP"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Consumes 10 AP / Recovers 600 SP"
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
              "skillName": "Energy Conversion",
              "versionId": "rebalance-5",
              "versionLabel": "Rebalance 5",
              "file": "rebalances/arch-mage/added_skills.md",
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
      "label": "Warlock",
      "pointLimit": 69,
      "tree": {
        "columns": 9,
        "rows": 5
      },
      "skills": [
        {
          "id": 2205,
          "imageFile": "2205.png",
          "name": "Marsh Of Abyss",
          "maxLevel": 5,
          "prerequisiteText": "Quagmire 1",
          "group": "Debuff",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Curses a target, slowing its movement speed, AGI and DEX.",
          "levelDetails": [
            {
              "level": 1,
              "text": "40 SP / Movement -10%\nAGI/DEX: -6% Monster / -3% Player"
            },
            {
              "level": 2,
              "text": "42 SP / Movement -20%\nAGI/DEX: -12% Monster / -6% Player"
            },
            {
              "level": 3,
              "text": "44 SP / Movement -30%\nAGI/DEX: -18% Monster / -9% Player"
            },
            {
              "level": 4,
              "text": "46 SP / Movement -40%\nAGI/DEX: -24% Monster / -12% Player"
            },
            {
              "level": 5,
              "text": "48 SP / Movement -50%\nAGI/DEX: -30% Monster / -15% Player"
            }
          ],
          "fixedCastTime": "0.5 seconds",
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
                  "value": "42"
                },
                {
                  "level": 3,
                  "value": "44"
                },
                {
                  "level": 4,
                  "value": "46"
                },
                {
                  "level": 5,
                  "value": "48"
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
                  "value": "50"
                },
                {
                  "level": 2,
                  "value": "60"
                },
                {
                  "level": 3,
                  "value": "70"
                },
                {
                  "level": 4,
                  "value": "80"
                },
                {
                  "level": 5,
                  "value": "90"
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
                  "value": "6"
                },
                {
                  "level": 3,
                  "value": "9"
                },
                {
                  "level": 4,
                  "value": "12"
                },
                {
                  "level": 5,
                  "value": "15"
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
                  "value": "12"
                },
                {
                  "level": 3,
                  "value": "18"
                },
                {
                  "level": 4,
                  "value": "24"
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
          "iconUrl": "assets/divine-pride/skills/2205.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2205",
          "tree": {
            "idx": 0,
            "row": 0,
            "col": 0,
            "columns": 9,
            "requirements": [
              {
                "id": 92,
                "level": 1,
                "name": "Quagmire",
                "visible": false
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Debuff Skill"
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
                    "id": "40-sp-movement",
                    "label": "40 Sp / Movement"
                  },
                  {
                    "id": "42-sp-movement",
                    "label": "42 Sp / Movement"
                  },
                  {
                    "id": "44-sp-movement",
                    "label": "44 Sp / Movement"
                  },
                  {
                    "id": "46-sp-movement",
                    "label": "46 Sp / Movement"
                  },
                  {
                    "id": "48-sp-movement",
                    "label": "48 Sp / Movement"
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
                      "40-sp-movement": "-10%",
                      "effect": "AGI/DE x : -6% Monster / -3% Player",
                      "sp-cost": "40",
                      "range": "11 cells",
                      "data-1": "50",
                      "data-2": "3",
                      "data-3": "6"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "42-sp-movement": "-20%",
                      "effect": "AGI/DE x : -12% Monster / -6% Player",
                      "sp-cost": "42",
                      "range": "11 cells",
                      "data-1": "60",
                      "data-2": "6",
                      "data-3": "12"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "44-sp-movement": "-30%",
                      "effect": "AGI/DE x : -18% Monster / -9% Player",
                      "sp-cost": "44",
                      "range": "11 cells",
                      "data-1": "70",
                      "data-2": "9",
                      "data-3": "18"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "46-sp-movement": "-40%",
                      "effect": "AGI/DE x : -24% Monster / -12% Player",
                      "sp-cost": "46",
                      "range": "11 cells",
                      "data-1": "80",
                      "data-2": "12",
                      "data-3": "24"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "48-sp-movement": "-50%",
                      "effect": "AGI/DE x : -30% Monster / -15% Player",
                      "sp-cost": "48",
                      "range": "11 cells",
                      "data-1": "90",
                      "data-2": "15",
                      "data-3": "30"
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
          "id": 2208,
          "imageFile": "2208.png",
          "name": "Radius",
          "maxLevel": 3,
          "prerequisiteText": "Warlock Basic Skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Increases the range of\nWarlock magic skills and decreases their\nfixed casting time. Base level, caster INT and\nskill level increase the reduction of cast.",
          "levelDetails": [
            {
              "level": 1,
              "text": "80 SP / Casting Range +1 Cell\nDecrease fixed casting speed by 5%"
            },
            {
              "level": 2,
              "text": "100 SP / Casting Range +2 Cells\nDecrease fixed casting speed by 10%"
            },
            {
              "level": 3,
              "text": "120 SP / Casting Range +3 Cells\nDecrease fixed casting speed by 15%"
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
                }
              ]
            }
          ],
          "translations": {
            "pt-BR": {
              "name": " Radius ",
              "description": "Intensifica seus poderes mágicos.\nReduz a conjuração fixa das habilidades.\nMagias de Arcanos possuem maior alcance .",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Radius"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/2208.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2208",
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
                      "effect": "80 SP / Casting Range +1 cells\nDecrease fi x ed casting speed by 5%",
                      "sp-cost": "0",
                      "data-1": "1",
                      "data-2": "10"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "100 SP / Casting Range +2 cells\nDecrease fi x ed casting speed by 10%",
                      "sp-cost": "0",
                      "data-1": "2",
                      "data-2": "15"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "120 SP / Casting Range +3 cells\nDecrease fi x ed casting speed by 15%",
                      "sp-cost": "0",
                      "data-1": "3",
                      "data-2": "20"
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
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2230,
          "imageFile": "2230.png",
          "name": "Release",
          "maxLevel": 2,
          "prerequisiteText": "Warlock Base Skill",
          "group": "Active / Special",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Release spells memorized with Reading Spell Book. Releases summoned orbs from Summon skill (Fire Ball, Water Ball, Lightning Ball, Stone) and inflicts Magic Damage to a single target one or multiple times.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Release memorized spell."
            },
            {
              "level": 2,
              "text": "Release all Summoned balls at the target."
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
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2230.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2230",
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
                "value": "Active / Special Skill"
              },
              {
                "label": "Levels",
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
                      "effect": "Release memorized spell",
                      "sp-cost": "10",
                      "range": "11 cells"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Release all Summoned balls at the target",
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
          "id": 2222,
          "imageFile": "2222.png",
          "name": "Summon Fire Ball",
          "maxLevel": 2,
          "prerequisiteText": "Meteor Storm 1",
          "group": "Active / Damage",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Summon Maximum 5 Fireballs around the caster. Continuously consumes SP while fireball is active.\nWhen level 2, removes all active Summon Balls, and summons 5 Fireballs.\nWhen released, each fireball inflicts fire property magic damage, and damage increases based on caster's BaseLv.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Summons 1 Fireball / Duration: 280 sec"
            },
            {
              "level": 2,
              "text": "Summons 5 Fireballs / Duration: 280 sec"
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
                  "value": "10"
                },
                {
                  "level": 2,
                  "value": "50"
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
                  "value": "120000"
                },
                {
                  "level": 2,
                  "value": "160000"
                },
                {
                  "level": 3,
                  "value": "200000"
                },
                {
                  "level": 4,
                  "value": "240000"
                },
                {
                  "level": 5,
                  "value": "280000"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2222.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2222",
          "tree": {
            "idx": 3,
            "row": 0,
            "col": 3,
            "columns": 9,
            "requirements": [
              {
                "id": 83,
                "level": 1,
                "name": "Meteor Storm",
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
                "value": "2"
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
                      "effect": "Summons 1 Fireball / Duration: 280 sec",
                      "sp-cost": "10",
                      "data-1": "1",
                      "data-2": "120000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Summons 5 Fireballs / Duration: 280 sec",
                      "sp-cost": "50",
                      "data-1": "1",
                      "data-2": "160000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "data-1": "1",
                      "data-2": "200000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "data-1": "1",
                      "data-2": "240000"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "data-1": "1",
                      "data-2": "280000"
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
          "id": 2224,
          "imageFile": "2224.png",
          "name": "Summon Water Ball",
          "maxLevel": 2,
          "prerequisiteText": "Storm Gust 1",
          "group": "Active / Damage",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Summon Maximum 5 Waterballs around the caster. Continuously consumes SP while fireball is active.\nWhen level 2, removes all active Summon Balls, and summons 5 Waterballs.\nWhen released, each waterball inflicts water property magic damage, and damage increases based on caster's BaseLv.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Summons 1 Waterball / Duration: 280 sec"
            },
            {
              "level": 2,
              "text": "Summons 5 Waterballs / Duration: 280 sec"
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
                  "value": "10"
                },
                {
                  "level": 2,
                  "value": "50"
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
                  "value": "120000"
                },
                {
                  "level": 2,
                  "value": "160000"
                },
                {
                  "level": 3,
                  "value": "200000"
                },
                {
                  "level": 4,
                  "value": "240000"
                },
                {
                  "level": 5,
                  "value": "280000"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2224.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2224",
          "tree": {
            "idx": 4,
            "row": 0,
            "col": 4,
            "columns": 9,
            "requirements": [
              {
                "id": 89,
                "level": 1,
                "name": "Storm Gust",
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
                "value": "2"
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
                      "effect": "Summons 1 Waterball / Duration: 280 sec",
                      "sp-cost": "10",
                      "data-1": "1",
                      "data-2": "120000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Summons 5 Waterballs / Duration: 280 sec",
                      "sp-cost": "50",
                      "data-1": "1",
                      "data-2": "160000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "data-1": "1",
                      "data-2": "200000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "data-1": "1",
                      "data-2": "240000"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "data-1": "1",
                      "data-2": "280000"
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
          "id": 2223,
          "imageFile": "2223.png",
          "name": "Summon Lightning Ball",
          "maxLevel": 2,
          "prerequisiteText": "Lord of Vermilion 1",
          "group": "Active / Damage",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Summon Maximum 5 Lightningballs around the caster. Continuously consumes SP while fireball is active.\nWhen level 2, removes all active Summon Balls, and summons 5 Lightningballs.\nWhen released, each lightningball inflicts wind property magic damage, and damage increases based on caster's BaseLv.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Summons 1 Lightningball / Duration: 280 sec"
            },
            {
              "level": 2,
              "text": "Summons 5 Lightningballs / Duration: 280 sec"
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
                  "value": "10"
                },
                {
                  "level": 2,
                  "value": "50"
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
                  "value": "120000"
                },
                {
                  "level": 2,
                  "value": "160000"
                },
                {
                  "level": 3,
                  "value": "200000"
                },
                {
                  "level": 4,
                  "value": "240000"
                },
                {
                  "level": 5,
                  "value": "280000"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2223.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2223",
          "tree": {
            "idx": 5,
            "row": 0,
            "col": 5,
            "columns": 9,
            "requirements": [
              {
                "id": 85,
                "level": 1,
                "name": "Lord of Vermilion",
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
                "value": "2"
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
                      "effect": "Summons 1 Lightningball / Duration: 280 sec",
                      "sp-cost": "10",
                      "data-1": "1",
                      "data-2": "120000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Summons 5 Lightningballs / Duration: 280 sec",
                      "sp-cost": "50",
                      "data-1": "1",
                      "data-2": "160000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "data-1": "1",
                      "data-2": "200000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "data-1": "1",
                      "data-2": "240000"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "data-1": "1",
                      "data-2": "280000"
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
          "id": 2229,
          "imageFile": "2229.png",
          "name": "Summon Stone",
          "maxLevel": 2,
          "prerequisiteText": "Heaven's Drive 1",
          "group": "Active / Damage",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Summon Maximum 5 Stoneballs around the caster. Continuously consumes SP while fireball is active.\nWhen level 2, removes all active Summon Balls, and summons 5 Stoneballs.\nWhen released, each stoneball inflicts earth property magic damage, and damage increases based on caster's BaseLv.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Summons 1 Stoneball / Duration: 280 sec"
            },
            {
              "level": 2,
              "text": "Summons 5 Stoneballs / Duration: 280 sec"
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
                  "value": "10"
                },
                {
                  "level": 2,
                  "value": "50"
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
                  "value": "120000"
                },
                {
                  "level": 2,
                  "value": "160000"
                },
                {
                  "level": 3,
                  "value": "200000"
                },
                {
                  "level": 4,
                  "value": "240000"
                },
                {
                  "level": 5,
                  "value": "280000"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2229.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2229",
          "tree": {
            "idx": 6,
            "row": 0,
            "col": 6,
            "columns": 9,
            "requirements": [
              {
                "id": 91,
                "level": 1,
                "name": "Heaven's Drive",
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
                "value": "2"
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
                      "effect": "Summons 1 Stoneball / Duration: 280 sec",
                      "sp-cost": "10",
                      "data-1": "1",
                      "data-2": "120000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Summons 5 Stoneballs / Duration: 280 sec",
                      "sp-cost": "50",
                      "data-1": "1",
                      "data-2": "160000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "data-1": "1",
                      "data-2": "200000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "data-1": "1",
                      "data-2": "240000"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "data-1": "1",
                      "data-2": "280000"
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
          "id": 2232,
          "imageFile": "2232.png",
          "name": "Freezing Spell",
          "maxLevel": 10,
          "prerequisiteText": "Warlock Base Skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Raises the amount of Mind Slots available for Reading Spell Book. Number of spells increases based on level and INT. When spells are sealed up, slowly drains SP depending on the number of spells..",
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
                },
                {
                  "level": 6,
                  "value": "20"
                },
                {
                  "level": 7,
                  "value": "16"
                },
                {
                  "level": 8,
                  "value": "12"
                },
                {
                  "level": 9,
                  "value": "8"
                },
                {
                  "level": 10,
                  "value": "4"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2232.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2232",
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
                    "id": "data-2",
                    "label": "Data 2"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "0",
                      "data-2": "40"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "0",
                      "data-2": "36"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "0",
                      "data-2": "32"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "0",
                      "data-2": "28"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "0",
                      "data-2": "24"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "0",
                      "data-2": "20"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "0",
                      "data-2": "16"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "0",
                      "data-2": "12"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "0",
                      "data-2": "8"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "sp-cost": "0",
                      "data-2": "4"
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
          "id": 2210,
          "imageFile": "2210.png",
          "name": "Drain Life",
          "maxLevel": 5,
          "prerequisiteText": "Radius 1",
          "group": "Damage / Recover",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Strikes a single target with\nmagical damage, and absorb some of that\ndamage as HP. Damage and HP recovered is\ninfluenced by the caster's INT and base level.\nThe success rate varies according to the\nskill level.",
          "levelDetails": [
            {
              "level": 1,
              "text": "20 SP / Absorb 10% of Damage\nAbsorb Success Rate 75%"
            },
            {
              "level": 2,
              "text": "24 SP / Absorb 15% of Damage\nAbsorb Success Rate 80%"
            },
            {
              "level": 3,
              "text": "28 SP / Absorb 20% of Damage\nAbsorb Success Rate 85%"
            },
            {
              "level": 4,
              "text": "32 SP / Absorb 25% of Damage\nAbsorb Success Rate 90%"
            },
            {
              "level": 5,
              "text": "36 SP / Absorb 30% of Damage\nAbsorb Success Rate 95%"
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "4 seconds",
          "castDelay": "0 seconds",
          "cooldown": "2 seconds",
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
              "label": "Atk %",
              "values": [
                {
                  "level": 1,
                  "value": "600"
                },
                {
                  "level": 2,
                  "value": "700"
                },
                {
                  "level": 3,
                  "value": "800"
                },
                {
                  "level": 4,
                  "value": "900"
                },
                {
                  "level": 5,
                  "value": "1000"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2210.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2210",
          "tree": {
            "idx": 8,
            "row": 0,
            "col": 8,
            "columns": 9,
            "requirements": [
              {
                "id": 2208,
                "level": 1,
                "name": "Radius",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Damage / Recover Skill"
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
                "value": "4 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0 seconds"
              },
              {
                "label": "Cooldown",
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
                    "id": "effect",
                    "label": "Effect"
                  },
                  {
                    "id": "atk",
                    "label": "Atk %"
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
                      "effect": "20 SP / Absorb 10% of Damage\nAbsorb Success Rate 75%",
                      "sp-cost": "20",
                      "range": "11 cells",
                      "atk": "600"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "24 SP / Absorb 15% of Damage\nAbsorb Success Rate 80%",
                      "sp-cost": "24",
                      "range": "11 cells",
                      "atk": "700"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "28 SP / Absorb 20% of Damage\nAbsorb Success Rate 85%",
                      "sp-cost": "28",
                      "range": "11 cells",
                      "atk": "800"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "32 SP / Absorb 25% of Damage\nAbsorb Success Rate 90%",
                      "sp-cost": "32",
                      "range": "11 cells",
                      "atk": "900"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "36 SP / Absorb 30% of Damage\nAbsorb Success Rate 95%",
                      "sp-cost": "36",
                      "range": "11 cells",
                      "atk": "1000"
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
          "id": 2231,
          "imageFile": "2231.png",
          "name": "Reading Spellbook",
          "maxLevel": 1,
          "prerequisiteText": "Warlock Base Skill",
          "group": "Passive / Special",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Reads a spell inscribed in the selected Spell Book and seals it up. This skill can be used in conjunction with the Release skill in order to let out the sealed spells.",
          "levelDetails": [],
          "fixedCastTime": "1 second",
          "variableCastTime": "5 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "0 seconds",
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
          "iconUrl": "assets/divine-pride/skills/2231.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2231",
          "tree": {
            "idx": 9,
            "row": 1,
            "col": 0,
            "columns": 9,
            "requirements": []
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Passive / Special Skill"
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
                "value": "5 seconds"
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
          "id": 2211,
          "imageFile": "2211.png",
          "name": "Crimson Rock",
          "maxLevel": 5,
          "prerequisiteText": "Summon Fire Ball 1",
          "group": "Active / Damage",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Summons a meteor, inflicts Fire property Magic Damage to all enemies around the target.\nAll enemies inflicted by damage will get knocked back.\nDamage increases based on caster's BaseLv.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 1300%"
            },
            {
              "level": 2,
              "text": "MATK 1900%"
            },
            {
              "level": 3,
              "text": "MATK 2500%"
            },
            {
              "level": 4,
              "text": "MATK 3100%"
            },
            {
              "level": 5,
              "text": "MATK 3700%"
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "5 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "5 seconds",
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
              "label": "Atk %",
              "values": [
                {
                  "level": 1,
                  "value": "1600"
                },
                {
                  "level": 2,
                  "value": "1900"
                },
                {
                  "level": 3,
                  "value": "2200"
                },
                {
                  "level": 4,
                  "value": "2500"
                },
                {
                  "level": 5,
                  "value": "2800"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2211.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2211",
          "tree": {
            "idx": 10,
            "row": 1,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 2222,
                "level": 1,
                "name": "Summon Fire Ball",
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
                "value": "1 second"
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
                "value": "5 seconds"
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
                    "id": "atk",
                    "label": "Atk %"
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
                      "base-damage-matk": "1300%",
                      "sp-cost": "60",
                      "range": "11 cells",
                      "atk": "1600"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-matk": "1900%",
                      "sp-cost": "70",
                      "range": "11 cells",
                      "atk": "1900"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-matk": "2500%",
                      "sp-cost": "80",
                      "range": "11 cells",
                      "atk": "2200"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-matk": "3100%",
                      "sp-cost": "90",
                      "range": "11 cells",
                      "atk": "2500"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-matk": "3700%",
                      "sp-cost": "100",
                      "range": "11 cells",
                      "atk": "2800"
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
          "id": 2203,
          "imageFile": "2203.png",
          "name": "Frost Misty",
          "maxLevel": 5,
          "prerequisiteText": "Summon Water Ball 1",
          "group": "Damage / Status Effect",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Releases freezing mist around an area, dealing damage and inflicting Freezing status on all enemies. Enemies on Freezing status will have reduced movement speed, attack speed, and armor, and increased fixed cast time and damage received from Jack Frost.\nDamage increases based on caster's BaseLv.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Chance of Freezing 30%/MATK 300%/attacks 1 time"
            },
            {
              "level": 2,
              "text": "Chance of Freezing 35%/MATK 400%/attacks 2 times"
            },
            {
              "level": 3,
              "text": "Chance of Freezing 40%/MATK 500%/attacks 3 times"
            },
            {
              "level": 4,
              "text": "Chance of Freezing 45%/MATK 600%/attacks 4 times"
            },
            {
              "level": 5,
              "text": "Chance of Freezing 50%/MATK 700%/attacks 5 times"
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "castDelay": "1 second",
          "cooldown": "8 seconds",
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
              "label": "Atk %",
              "values": [
                {
                  "level": 1,
                  "value": "300"
                },
                {
                  "level": 2,
                  "value": "400"
                },
                {
                  "level": 3,
                  "value": "500"
                },
                {
                  "level": 4,
                  "value": "600"
                },
                {
                  "level": 5,
                  "value": "700"
                }
              ]
            },
            {
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "9"
                },
                {
                  "level": 2,
                  "value": "9"
                },
                {
                  "level": 3,
                  "value": "9"
                },
                {
                  "level": 4,
                  "value": "9"
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
          "iconUrl": "assets/divine-pride/skills/2203.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2203",
          "tree": {
            "idx": 11,
            "row": 1,
            "col": 2,
            "columns": 9,
            "requirements": [
              {
                "id": 2224,
                "level": 1,
                "name": "Summon Water Ball",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Damage / Status Effect Skill"
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
                "label": "Cast Delay",
                "value": "1 second"
              },
              {
                "label": "Cooldown",
                "value": "8 seconds"
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
                    "id": "atk",
                    "label": "Atk %"
                  },
                  {
                    "id": "data-1",
                    "label": "Data 1"
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
                      "base-damage-matk": "300%",
                      "sp-cost": "40",
                      "range": "11 cells",
                      "atk": "300",
                      "data-1": "9",
                      "data-3": "3"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-matk": "400%",
                      "sp-cost": "48",
                      "range": "11 cells",
                      "atk": "400",
                      "data-1": "9",
                      "data-3": "4"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-matk": "500%",
                      "sp-cost": "56",
                      "range": "11 cells",
                      "atk": "500",
                      "data-1": "9",
                      "data-3": "5"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-matk": "600%",
                      "sp-cost": "64",
                      "range": "11 cells",
                      "atk": "600",
                      "data-1": "9",
                      "data-3": "6"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-matk": "700%",
                      "sp-cost": "72",
                      "range": "11 cells",
                      "atk": "700",
                      "data-1": "9",
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
          "id": 2214,
          "imageFile": "2214.png",
          "name": "Chain Lightning",
          "maxLevel": 5,
          "prerequisiteText": "Summon Ball Lightning 1",
          "group": "Active / Damage",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Summons lightning to deal multiple (Wind Element) damage to a target and enemies around it.",
          "levelDetails": [
            {
              "level": 1,
              "text": "80 SP /5 Attacks"
            },
            {
              "level": 2,
              "text": "90 SP /6 Attacks"
            },
            {
              "level": 3,
              "text": "100 SP /7 Attacks"
            },
            {
              "level": 4,
              "text": "110 SP /8 Attacks"
            },
            {
              "level": 5,
              "text": "120 SP /9 Attacks"
            }
          ],
          "fixedCastTime": "1 second",
          "castDelay": "3 seconds",
          "cooldown": "0 seconds",
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
              "label": "Atk %",
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2214.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2214",
          "tree": {
            "idx": 12,
            "row": 1,
            "col": 3,
            "columns": 9,
            "requirements": [
              {
                "id": 2223,
                "level": 1,
                "name": "Summon Lightning Ball",
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
                "value": "1 second"
              },
              {
                "label": "Cast Delay",
                "value": "3 seconds"
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
                      "effect": "80 SP /5 Attacks",
                      "sp-cost": "80",
                      "range": "11 cells",
                      "atk": "0",
                      "data-1": "5"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "90 SP /6 Attacks",
                      "sp-cost": "90",
                      "range": "11 cells",
                      "atk": "0",
                      "data-1": "6"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "100 SP /7 Attacks",
                      "sp-cost": "100",
                      "range": "11 cells",
                      "atk": "0",
                      "data-1": "7"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "110 SP /8 Attacks",
                      "sp-cost": "110",
                      "range": "11 cells",
                      "atk": "0",
                      "data-1": "8"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "120 SP /9 Attacks",
                      "sp-cost": "120",
                      "range": "11 cells",
                      "atk": "0",
                      "data-1": "9"
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
          "id": 2207,
          "imageFile": "2207.png",
          "name": "Sienna Execrate",
          "maxLevel": 5,
          "prerequisiteText": "Summon Stone 1",
          "group": "Curse",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "All targets in range will be Petrified at a certain chance.",
          "levelDetails": [
            {
              "level": 1,
              "text": "32 SP / 50% Success Rate\n3x3 cells / 6 sec. duration"
            },
            {
              "level": 2,
              "text": "34 SP / 55% Success Rate\n5x5 cells / 9 sec. duration"
            },
            {
              "level": 3,
              "text": "36 SP / 60% Success Rate\n5x5 cells / 12 sec. duration"
            },
            {
              "level": 4,
              "text": "38 SP / 65% Success Rate\n7x7 cells / 15 sec. duration"
            },
            {
              "level": 5,
              "text": "40 SP / 70% Success Rate\n7x7 cells / 18 sec. duration"
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
                  "value": "32"
                },
                {
                  "level": 2,
                  "value": "34"
                },
                {
                  "level": 3,
                  "value": "36"
                },
                {
                  "level": 4,
                  "value": "38"
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
                  "value": "1"
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
                  "value": "3"
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
                  "value": "10000"
                },
                {
                  "level": 2,
                  "value": "12000"
                },
                {
                  "level": 3,
                  "value": "14000"
                },
                {
                  "level": 4,
                  "value": "16000"
                },
                {
                  "level": 5,
                  "value": "18000"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2207.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2207",
          "tree": {
            "idx": 13,
            "row": 1,
            "col": 4,
            "columns": 9,
            "requirements": [
              {
                "id": 2229,
                "level": 1,
                "name": "Summon Stone",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Curse Skill"
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
                "value": "2 seconds"
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
                    "id": "data-1",
                    "label": "Data 1"
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
                      "effect": "32 SP / 50% Success Rate\n3 x 3 cells / 6 sec. duration",
                      "sp-cost": "32",
                      "range": "7 cells",
                      "data-1": "1",
                      "data-3": "10000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "34 SP / 55% Success Rate\n5 x 5 cells / 9 sec. duration",
                      "sp-cost": "34",
                      "range": "7 cells",
                      "data-1": "2",
                      "data-3": "12000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "36 SP / 60% Success Rate\n5 x 5 cells / 12 sec. duration",
                      "sp-cost": "36",
                      "range": "7 cells",
                      "data-1": "2",
                      "data-3": "14000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "38 SP / 65% Success Rate\n7 x 7 cells / 15 sec. duration",
                      "sp-cost": "38",
                      "range": "7 cells",
                      "data-1": "3",
                      "data-3": "16000"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "40 SP / 70% Success Rate\n7 x 7 cells / 18 sec. duration",
                      "sp-cost": "40",
                      "range": "7 cells",
                      "data-1": "3",
                      "data-3": "18000"
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
          "id": 2202,
          "imageFile": "2202.png",
          "name": "Soul Expansion",
          "maxLevel": 5,
          "prerequisiteText": "Drain Life 1",
          "group": "Active / Damage",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Deals Ghost magic damage to a target and enemies in AoE. Deals twice damage when target is in White Imprison.\nDamage increases based on BaseLv and INT.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 1200%"
            },
            {
              "level": 2,
              "text": "MATK 1400%"
            },
            {
              "level": 3,
              "text": "MATK 1600%"
            },
            {
              "level": 4,
              "text": "MATK 1800%"
            },
            {
              "level": 5,
              "text": "MATK 2000%"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "2 seconds",
          "castDelay": "0.5 seconds",
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
              "label": "Atk %",
              "values": [
                {
                  "level": 1,
                  "value": "500"
                },
                {
                  "level": 2,
                  "value": "600"
                },
                {
                  "level": 3,
                  "value": "700"
                },
                {
                  "level": 4,
                  "value": "800"
                },
                {
                  "level": 5,
                  "value": "900"
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
                  "value": "2"
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
          "iconUrl": "assets/divine-pride/skills/2202.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2202",
          "tree": {
            "idx": 14,
            "row": 1,
            "col": 5,
            "columns": 9,
            "requirements": [
              {
                "id": 2210,
                "level": 1,
                "name": "Drain Life",
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
                "value": "2 seconds"
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
                    "id": "base-damage-matk",
                    "label": "Base Damage (MATK)"
                  },
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
                    "id": "range",
                    "label": "Range"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "base-damage-matk": "1200%",
                      "sp-cost": "30",
                      "range": "11 cells",
                      "atk": "500",
                      "data-1": "1"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-matk": "1400%",
                      "sp-cost": "35",
                      "range": "11 cells",
                      "atk": "600",
                      "data-1": "1"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-matk": "1600%",
                      "sp-cost": "40",
                      "range": "11 cells",
                      "atk": "700",
                      "data-1": "1"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-matk": "1800%",
                      "sp-cost": "45",
                      "range": "11 cells",
                      "atk": "800",
                      "data-1": "2"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-matk": "2000%",
                      "sp-cost": "50",
                      "range": "11 cells",
                      "atk": "900",
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
          "id": 2209,
          "imageFile": "2209.png",
          "name": "Stasis",
          "maxLevel": 5,
          "prerequisiteText": "Drain Life 1",
          "group": "Curse",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Stops the air\naround the Caster, preventing any spells\nfrom being cast.",
          "levelDetails": [
            {
              "level": 1,
              "text": "50 SP / 10sec. duration / 19x19 AoE"
            },
            {
              "level": 2,
              "text": "60 SP / 15sec. duration / 21x21 AoE"
            },
            {
              "level": 3,
              "text": "70 SP / 20sec. duration / 23x23 AoE"
            },
            {
              "level": 4,
              "text": "80 SP / 25sec. duration / 25x25 AoE"
            },
            {
              "level": 5,
              "text": "90 SP / 30sec. duration / 27x27 AoE"
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "3 seconds",
          "castDelay": "2 seconds",
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
                  "value": "60"
                },
                {
                  "level": 3,
                  "value": "70"
                },
                {
                  "level": 4,
                  "value": "80"
                },
                {
                  "level": 5,
                  "value": "90"
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
                }
              ]
            },
            {
              "label": "Data 2",
              "values": [
                {
                  "level": 1,
                  "value": "9"
                },
                {
                  "level": 2,
                  "value": "10"
                },
                {
                  "level": 3,
                  "value": "11"
                },
                {
                  "level": 4,
                  "value": "12"
                },
                {
                  "level": 5,
                  "value": "13"
                }
              ]
            }
          ],
          "translations": {
            "pt-BR": {
              "name": " Stasis ",
              "description": "Distorce o ar à sua volta.\nImpede que você, oponentes e aliados conjurem habilidades .\nDuração = {[5 + (Nv. da habilidade × 10)] - [(VIT do alvo + DES do alvo) ÷20]} segundos",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Stasis"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/2209.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2209",
          "tree": {
            "idx": 15,
            "row": 1,
            "col": 6,
            "columns": 9,
            "requirements": [
              {
                "id": 2210,
                "level": 1,
                "name": "Drain Life",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Curse Skill"
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
                "value": "3 seconds"
              },
              {
                "label": "Cast Delay",
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
                      "effect": "50 SP / 10sec. duration / 19 x 19 AoE",
                      "sp-cost": "50",
                      "range": "11 cells",
                      "data-1": "10000",
                      "data-2": "9"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "60 SP / 15sec. duration / 21 x 21 AoE",
                      "sp-cost": "60",
                      "range": "11 cells",
                      "data-1": "20000",
                      "data-2": "10"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "70 SP / 20sec. duration / 23 x 23 AoE",
                      "sp-cost": "70",
                      "range": "11 cells",
                      "data-1": "30000",
                      "data-2": "11"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "80 SP / 25sec. duration / 25 x 25 AoE",
                      "sp-cost": "80",
                      "range": "11 cells",
                      "data-1": "40000",
                      "data-2": "12"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "90 SP / 30sec. duration / 27 x 27 AoE",
                      "sp-cost": "90",
                      "range": "11 cells",
                      "data-1": "50000",
                      "data-2": "13"
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
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2212,
          "imageFile": "2212.png",
          "name": "Hell Inferno",
          "maxLevel": 5,
          "prerequisiteText": "Crimson Rock 2",
          "group": "Active / Damage",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Inflicts Fire and Shadow property Magic Damage to all enemies around the target.\nDamage increases based on caster's BaseLv.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK(Fire/Shadow) 400%/1000%/Area 3x3"
            },
            {
              "level": 2,
              "text": "MATK(Fire/Shadow) 800%/1200%/Area 3x3"
            },
            {
              "level": 3,
              "text": "MATK(Fire/Shadow) 1200%/1800%/Area 3x3"
            },
            {
              "level": 4,
              "text": "MATK(Fire/Shadow) 1600%/2400%/Area 5x5"
            },
            {
              "level": 5,
              "text": "MATK(Fire/Shadow) 2000%/3000%/Area 5x5"
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "3 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "3 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "64"
                },
                {
                  "level": 2,
                  "value": "70"
                },
                {
                  "level": 3,
                  "value": "76"
                },
                {
                  "level": 4,
                  "value": "82"
                },
                {
                  "level": 5,
                  "value": "88"
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
                  "value": "600"
                },
                {
                  "level": 2,
                  "value": "650"
                },
                {
                  "level": 3,
                  "value": "700"
                },
                {
                  "level": 4,
                  "value": "750"
                },
                {
                  "level": 5,
                  "value": "800"
                }
              ]
            },
            {
              "label": "Data 2",
              "values": [
                {
                  "level": 1,
                  "value": "20000"
                },
                {
                  "level": 2,
                  "value": "30000"
                },
                {
                  "level": 3,
                  "value": "40000"
                },
                {
                  "level": 4,
                  "value": "50000"
                },
                {
                  "level": 5,
                  "value": "60000"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2212.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2212",
          "tree": {
            "idx": 17,
            "row": 1,
            "col": 8,
            "columns": 9,
            "requirements": [
              {
                "id": 2211,
                "level": 2,
                "name": "Crimson Rock",
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
                "value": "1 second"
              },
              {
                "label": "Variable Cast Time",
                "value": "3 seconds"
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
                      "effect": "MATK(Fire/Shadow) 400%/1000%/Area 3 x 3",
                      "sp-cost": "64",
                      "range": "11 cells",
                      "data-1": "600",
                      "data-2": "20000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "MATK(Fire/Shadow) 800%/1200%/Area 3 x 3",
                      "sp-cost": "70",
                      "range": "11 cells",
                      "data-1": "650",
                      "data-2": "30000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "MATK(Fire/Shadow) 1200%/1800%/Area 3 x 3",
                      "sp-cost": "76",
                      "range": "11 cells",
                      "data-1": "700",
                      "data-2": "40000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "MATK(Fire/Shadow) 1600%/2400%/Area 5 x 5",
                      "sp-cost": "82",
                      "range": "11 cells",
                      "data-1": "750",
                      "data-2": "50000"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "MATK(Fire/Shadow) 2000%/3000%/Area 5 x 5",
                      "sp-cost": "88",
                      "range": "11 cells",
                      "data-1": "800",
                      "data-2": "60000"
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
          "id": 2204,
          "imageFile": "2204.png",
          "name": "Jack Frost",
          "maxLevel": 5,
          "prerequisiteText": "Frost Misty 2",
          "group": "Active / Damage",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Inflicts Water property magic damage to all anemies around the target. Deals more damage to Frozen status.\nDamage increases based on caster's BaseLv.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 1300%/Frozen Status MATK 1800%"
            },
            {
              "level": 2,
              "text": "MATK 1600%/Frozen Status MATK 2400%"
            },
            {
              "level": 3,
              "text": "MATK 1900%/Frozen Status MATK 3000%"
            },
            {
              "level": 4,
              "text": "MATK 2200%/Frozen Status MATK 3600%"
            },
            {
              "level": 5,
              "text": "MATK 2500%/Frozen Status MATK 4200%"
            }
          ],
          "fixedCastTime": "1 second",
          "castDelay": "0.5 seconds",
          "cooldown": "4 seconds",
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
                  "value": "60"
                },
                {
                  "level": 3,
                  "value": "70"
                },
                {
                  "level": 4,
                  "value": "80"
                },
                {
                  "level": 5,
                  "value": "90"
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
              "label": "Atk %",
              "values": [
                {
                  "level": 1,
                  "value": "1300"
                },
                {
                  "level": 2,
                  "value": "1600"
                },
                {
                  "level": 3,
                  "value": "1900"
                },
                {
                  "level": 4,
                  "value": "2200"
                },
                {
                  "level": 5,
                  "value": "2500"
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
          "iconUrl": "assets/divine-pride/skills/2204.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2204",
          "tree": {
            "idx": 18,
            "row": 2,
            "col": 0,
            "columns": 9,
            "requirements": [
              {
                "id": 2203,
                "level": 2,
                "name": "Frost Misty",
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
                "value": "1 second"
              },
              {
                "label": "Cast Delay",
                "value": "0.5 seconds"
              },
              {
                "label": "Cooldown",
                "value": "4 seconds"
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
                      "base-damage-matk": "1300%",
                      "sp-cost": "50",
                      "range": "11 cells",
                      "atk": "1300",
                      "data-1": "5",
                      "data-2": "10000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-matk": "1600%",
                      "sp-cost": "60",
                      "range": "11 cells",
                      "atk": "1600",
                      "data-1": "6",
                      "data-2": "15000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-matk": "1900%",
                      "sp-cost": "70",
                      "range": "11 cells",
                      "atk": "1900",
                      "data-1": "7",
                      "data-2": "20000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-matk": "2200%",
                      "sp-cost": "80",
                      "range": "11 cells",
                      "atk": "2200",
                      "data-1": "8",
                      "data-2": "25000"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-matk": "2500%",
                      "sp-cost": "90",
                      "range": "11 cells",
                      "atk": "2500",
                      "data-1": "9",
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
        },
        {
          "id": 2216,
          "imageFile": "2216.png",
          "name": "Earth Strain",
          "maxLevel": 5,
          "prerequisiteText": "Sienna Execrate 2",
          "group": "Active / Damage",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Uplift the land and attack enemies within range.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 1600%"
            },
            {
              "level": 2,
              "text": "MATK 2200%"
            },
            {
              "level": 3,
              "text": "MATK 2800%"
            },
            {
              "level": 4,
              "text": "MATK 3400%"
            },
            {
              "level": 5,
              "text": "MATK 4000%"
            }
          ],
          "fixedCastTime": "1 second",
          "castDelay": "0.5 seconds",
          "cooldown": "7 seconds",
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
                  "value": "78"
                },
                {
                  "level": 3,
                  "value": "86"
                },
                {
                  "level": 4,
                  "value": "94"
                },
                {
                  "level": 5,
                  "value": "102"
                }
              ]
            },
            {
              "label": "Range",
              "values": [
                {
                  "level": 1,
                  "value": "6 cells"
                },
                {
                  "level": 2,
                  "value": "6 cells"
                },
                {
                  "level": 3,
                  "value": "6 cells"
                },
                {
                  "level": 4,
                  "value": "6 cells"
                },
                {
                  "level": 5,
                  "value": "6 cells"
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
                  "value": "14"
                },
                {
                  "level": 3,
                  "value": "24"
                },
                {
                  "level": 4,
                  "value": "36"
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2216.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2216",
          "tree": {
            "idx": 20,
            "row": 2,
            "col": 2,
            "columns": 9,
            "requirements": [
              {
                "id": 2207,
                "level": 2,
                "name": "Sienna Execrate",
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
                "value": "1 second"
              },
              {
                "label": "Cast Delay",
                "value": "0.5 seconds"
              },
              {
                "label": "Cooldown",
                "value": "7 seconds"
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
                      "base-damage-matk": "1600%",
                      "sp-cost": "70",
                      "range": "6 cells",
                      "data-1": "5",
                      "data-2": "6",
                      "data-3": "6"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-matk": "2200%",
                      "sp-cost": "78",
                      "range": "6 cells",
                      "data-1": "6",
                      "data-2": "14",
                      "data-3": "7"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-matk": "2800%",
                      "sp-cost": "86",
                      "range": "6 cells",
                      "data-1": "7",
                      "data-2": "24",
                      "data-3": "8"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-matk": "3400%",
                      "sp-cost": "94",
                      "range": "6 cells",
                      "data-1": "8",
                      "data-2": "36",
                      "data-3": "9"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-matk": "4000%",
                      "sp-cost": "102",
                      "range": "6 cells",
                      "data-1": "9",
                      "data-2": "50",
                      "data-3": "10"
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
          "id": 2201,
          "imageFile": "2201.png",
          "name": "White Imprison",
          "maxLevel": 5,
          "prerequisiteText": "Soul Expansion 3",
          "group": "Curse",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Locks a target in a transparent\nbox that prevents damage except from Ghost\nproperty damage. Can cast on oneself lasting\nfor 5 sec. When the duration is finished, the\ncaster loses HP of Skill Level x400. Success\nRate increases according to the caster's Job\nLevel. Not effective on Boss monsters.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Success Rate 50% / 10 sec. duration"
            },
            {
              "level": 2,
              "text": "Success Rate 60% / 12 sec. duration"
            },
            {
              "level": 3,
              "text": "Success Rate 70% / 14 sec. duration"
            },
            {
              "level": 4,
              "text": "Success Rate 80% / 16 sec. duration"
            },
            {
              "level": 5,
              "text": "Success Rate 90% / 18 sec. duration"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0 seconds",
          "cooldown": "4 seconds",
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
              "label": "Data 2",
              "values": [
                {
                  "level": 1,
                  "value": "10000"
                },
                {
                  "level": 2,
                  "value": "12000"
                },
                {
                  "level": 3,
                  "value": "14000"
                },
                {
                  "level": 4,
                  "value": "16000"
                },
                {
                  "level": 5,
                  "value": "18000"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2201.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2201",
          "tree": {
            "idx": 21,
            "row": 2,
            "col": 3,
            "columns": 9,
            "requirements": [
              {
                "id": 2202,
                "level": 3,
                "name": "Soul Expansion",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Curse Skill"
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
                "value": "4 seconds"
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
                      "effect": "Success Rate 50% / 10 sec. duration",
                      "sp-cost": "50",
                      "range": "11 cells",
                      "data-2": "10000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Success Rate 60% / 12 sec. duration",
                      "sp-cost": "55",
                      "range": "11 cells",
                      "data-2": "12000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Success Rate 70% / 14 sec. duration",
                      "sp-cost": "60",
                      "range": "11 cells",
                      "data-2": "14000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Success Rate 80% / 16 sec. duration",
                      "sp-cost": "65",
                      "range": "11 cells",
                      "data-2": "16000"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Success Rate 90% / 18 sec. duration",
                      "sp-cost": "70",
                      "range": "11 cells",
                      "data-2": "18000"
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
          "id": 2213,
          "imageFile": "2213.png",
          "name": "Comet",
          "maxLevel": 5,
          "prerequisiteText": "Hell Inferno 3",
          "group": "Damage / Special",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Inflicts Neutral property Magic Damage to all enemies in a 13x13 area around the targeted location, leaving them magic poisoned that reduces resistance to all property by 50%.\nDamage increases based on BaseLv.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 3200%"
            },
            {
              "level": 2,
              "text": "MATK 3900%"
            },
            {
              "level": 3,
              "text": "MATK 4600%"
            },
            {
              "level": 4,
              "text": "MATK 5300%"
            },
            {
              "level": 5,
              "text": "MATK 6000%"
            }
          ],
          "fixedCastTime": "2 seconds",
          "castDelay": "1.5 seconds",
          "cooldown": "20 seconds",
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
                  "value": "90"
                },
                {
                  "level": 3,
                  "value": "110"
                },
                {
                  "level": 4,
                  "value": "130"
                },
                {
                  "level": 5,
                  "value": "150"
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
              "label": "Atk %",
              "values": [
                {
                  "level": 1,
                  "value": "3000"
                },
                {
                  "level": 2,
                  "value": "3500"
                },
                {
                  "level": 3,
                  "value": "4000"
                },
                {
                  "level": 4,
                  "value": "4500"
                },
                {
                  "level": 5,
                  "value": "5000"
                }
              ]
            },
            {
              "label": "Data 2",
              "values": [
                {
                  "level": 1,
                  "value": "2000"
                },
                {
                  "level": 2,
                  "value": "2400"
                },
                {
                  "level": 3,
                  "value": "2800"
                },
                {
                  "level": 4,
                  "value": "3200"
                },
                {
                  "level": 5,
                  "value": "3600"
                }
              ]
            },
            {
              "label": "Data 3",
              "values": [
                {
                  "level": 1,
                  "value": "1500"
                },
                {
                  "level": 2,
                  "value": "1800"
                },
                {
                  "level": 3,
                  "value": "2100"
                },
                {
                  "level": 4,
                  "value": "2400"
                },
                {
                  "level": 5,
                  "value": "2700"
                }
              ]
            },
            {
              "label": "Data 4",
              "values": [
                {
                  "level": 1,
                  "value": "1000"
                },
                {
                  "level": 2,
                  "value": "1200"
                },
                {
                  "level": 3,
                  "value": "1400"
                },
                {
                  "level": 4,
                  "value": "1600"
                },
                {
                  "level": 5,
                  "value": "1800"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2213.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2213",
          "tree": {
            "idx": 25,
            "row": 2,
            "col": 7,
            "columns": 9,
            "requirements": [
              {
                "id": 2212,
                "level": 3,
                "name": "Hell Inferno",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Damage / Special Skill"
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
                "label": "Cast Delay",
                "value": "1.5 seconds"
              },
              {
                "label": "Cooldown",
                "value": "20 seconds"
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
                    "id": "atk",
                    "label": "Atk %"
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
                      "base-damage-matk": "3200%",
                      "sp-cost": "70",
                      "range": "11 cells",
                      "atk": "3000",
                      "data-2": "2000",
                      "data-3": "1500",
                      "data-4": "1000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-matk": "3900%",
                      "sp-cost": "90",
                      "range": "11 cells",
                      "atk": "3500",
                      "data-2": "2400",
                      "data-3": "1800",
                      "data-4": "1200"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-matk": "4600%",
                      "sp-cost": "110",
                      "range": "11 cells",
                      "atk": "4000",
                      "data-2": "2800",
                      "data-3": "2100",
                      "data-4": "1400"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-matk": "5300%",
                      "sp-cost": "130",
                      "range": "11 cells",
                      "atk": "4500",
                      "data-2": "3200",
                      "data-3": "2400",
                      "data-4": "1600"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-matk": "6000%",
                      "sp-cost": "150",
                      "range": "11 cells",
                      "atk": "5000",
                      "data-2": "3600",
                      "data-3": "2700",
                      "data-4": "1800"
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
          "id": 5012,
          "imageFile": "5012.png",
          "name": "Intensification",
          "maxLevel": 5,
          "prerequisiteText": "Soul Expansion 5",
          "group": "",
          "type": "Active / Buff",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Ghost magic enters caster's circulatory system, increasing Ghost-type magic damage and reducing cast time and mana cost of spells.\nThis skill cannot be removed by clearance or dispel.",
          "levelDetails": [
            {
              "level": 1,
              "text": "1 Minute / Ghost-Spell Magic Damage +40% / -10% Variable Cast Time on all skills / -10% Ghost-Spell SP Cost"
            },
            {
              "level": 2,
              "text": "1 Minute / Ghost-Spell Magic Damage +80% / -20% Variable Cast Time on all skills / -20% Ghost-Spell SP Cost"
            },
            {
              "level": 3,
              "text": "1 Minute / Ghost-Spell Magic Damage +120% / -30% Variable Cast Time on all skills / -30% Ghost-Spell SP Cost"
            },
            {
              "level": 4,
              "text": "1 Minute / Ghost-Spell Magic Damage +160% / -40% Variable Cast Time on all skills / -40% Ghost-Spell SP Cost"
            },
            {
              "level": 5,
              "text": "1 Minute / Ghost-Spell Magic Damage +200% / -50% Variable Cast Time on all skills / -50% Ghost-Spell SP Cost"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0.5 seconds",
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
                  "value": "150"
                },
                {
                  "level": 3,
                  "value": "200"
                },
                {
                  "level": 4,
                  "value": "250"
                },
                {
                  "level": 5,
                  "value": "300"
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
                  "value": "60000"
                },
                {
                  "level": 3,
                  "value": "60000"
                },
                {
                  "level": 4,
                  "value": "60000"
                },
                {
                  "level": 5,
                  "value": "60000"
                }
              ]
            },
            {
              "label": "Data 2",
              "values": [
                {
                  "level": 1,
                  "value": "140"
                },
                {
                  "level": 2,
                  "value": "180"
                },
                {
                  "level": 3,
                  "value": "220"
                },
                {
                  "level": 4,
                  "value": "260"
                },
                {
                  "level": 5,
                  "value": "300"
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
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5012.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5012",
          "tree": {
            "idx": 28,
            "row": 3,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 2202,
                "level": 5,
                "name": "Soul Expansion",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Buff"
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
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "1 Minute / Ghost-Spell Magic Damage +40% / -10% Variable Cast Time on all skills / -10% Ghost-Spell SP Cost",
                      "sp-cost": "100",
                      "data-1": "60000",
                      "data-2": "140",
                      "data-3": "10",
                      "data-4": "10"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "1 Minute / Ghost-Spell Magic Damage +80% / -20% Variable Cast Time on all skills / -20% Ghost-Spell SP Cost",
                      "sp-cost": "150",
                      "data-1": "60000",
                      "data-2": "180",
                      "data-3": "20",
                      "data-4": "20"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "1 Minute / Ghost-Spell Magic Damage +120% / -30% Variable Cast Time on all skills / -30% Ghost-Spell SP Cost",
                      "sp-cost": "200",
                      "data-1": "60000",
                      "data-2": "220",
                      "data-3": "30",
                      "data-4": "30"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "1 Minute / Ghost-Spell Magic Damage +160% / -40% Variable Cast Time on all skills / -40% Ghost-Spell SP Cost",
                      "sp-cost": "250",
                      "data-1": "60000",
                      "data-2": "260",
                      "data-3": "40",
                      "data-4": "40"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "1 Minute / Ghost-Spell Magic Damage +200% / -50% Variable Cast Time on all skills / -50% Ghost-Spell SP Cost",
                      "sp-cost": "300",
                      "data-1": "60000",
                      "data-2": "300",
                      "data-3": "50",
                      "data-4": "50"
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
          "id": 2206,
          "imageFile": "2206.png",
          "name": "Recognized Spell",
          "maxLevel": 5,
          "prerequisiteText": "Release 2 , Stasis 1, White Imprison 1",
          "group": "Buff(Self)",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Maximizes one's own magical potential, dealing Maximum damage with magical attacks for the skill duration.",
          "levelDetails": [
            {
              "level": 1,
              "text": "100 SP / 60 sec. duration"
            },
            {
              "level": 2,
              "text": "120 SP / 90 sec. duration"
            },
            {
              "level": 3,
              "text": "140 SP / 110 sec. duration"
            },
            {
              "level": 4,
              "text": "160 SP / 140 sec. duration"
            },
            {
              "level": 5,
              "text": "180 SP / 170 sec. duration"
            }
          ],
          "fixedCastTime": "1 second",
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
                  "value": "120"
                },
                {
                  "level": 3,
                  "value": "140"
                },
                {
                  "level": 4,
                  "value": "160"
                },
                {
                  "level": 5,
                  "value": "180"
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
                  "value": "60000"
                },
                {
                  "level": 2,
                  "value": "90000"
                },
                {
                  "level": 3,
                  "value": "120000"
                },
                {
                  "level": 4,
                  "value": "150000"
                },
                {
                  "level": 5,
                  "value": "180000"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2206.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2206",
          "tree": {
            "idx": 30,
            "row": 3,
            "col": 3,
            "columns": 9,
            "requirements": [
              {
                "id": 2201,
                "level": 1,
                "name": "White Imprison",
                "visible": true
              },
              {
                "id": 2209,
                "level": 1,
                "name": "Stasis",
                "visible": true
              },
              {
                "id": 2230,
                "level": 2,
                "name": "Release",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Buff(Self) Skill"
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
                      "effect": "100 SP / 60 sec. duration",
                      "sp-cost": "100",
                      "range": "11 cells",
                      "data-1": "60000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "120 SP / 90 sec. duration",
                      "sp-cost": "120",
                      "range": "11 cells",
                      "data-1": "90000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "140 SP / 110 sec. duration",
                      "sp-cost": "140",
                      "range": "11 cells",
                      "data-1": "120000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "160 SP / 140 sec. duration",
                      "sp-cost": "160",
                      "range": "11 cells",
                      "data-1": "150000"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "180 SP / 170 sec. duration",
                      "sp-cost": "180",
                      "range": "11 cells",
                      "data-1": "180000"
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
          "id": 2217,
          "imageFile": "2217.png",
          "name": "Tetra Vortex",
          "maxLevel": 10,
          "prerequisiteText": "Jack Frost 5, Chain Lightning 5, Earth Strain 5, Hell Inferno 5",
          "group": "Damage / Debuff",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Summons 4 property ethers, deals fire, water, earth, wind magic property damage.\nRequires at least 4 of Fireball, Lightningball, Waterball, Stoneball summoned.\nDamage property depends on the Summoned skill (Fire Ball, Water Ball, Lightning Ball, Stone) used. Requires at least 4 spheres to use.\nWhen skill level is 6 or higher, deals damage to a target and enemies in AOE around it.\nAdds a high chance to Blaze, Freeze, Stun, or Bleed when damaging.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 1200%x4 /1 Target"
            },
            {
              "level": 2,
              "text": "MATK 1600%x4 /1 Target"
            },
            {
              "level": 3,
              "text": "MATK 2000%x4 /1 Target"
            },
            {
              "level": 4,
              "text": "MATK 2400%x4 /1 Target"
            },
            {
              "level": 5,
              "text": "MATK 2800%x4 /1 Target"
            },
            {
              "level": 6,
              "text": "MATK 3200%x4 /Targets around 3x3"
            },
            {
              "level": 7,
              "text": "MATK 3600%x4 /Targets around 3x3"
            },
            {
              "level": 8,
              "text": "MATK 4000%x4 /Targets around 3x3"
            },
            {
              "level": 9,
              "text": "MATK 4400%x4 /Targets around 3x3"
            },
            {
              "level": 10,
              "text": "MATK 4800%x4 /Targets around 7x7"
            }
          ],
          "fixedCastTime": "1 second",
          "castDelay": "0 seconds",
          "cooldown": "15 seconds",
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
                  "value": "150"
                },
                {
                  "level": 3,
                  "value": "180"
                },
                {
                  "level": 4,
                  "value": "210"
                },
                {
                  "level": 5,
                  "value": "240"
                },
                {
                  "level": 6,
                  "value": "200"
                },
                {
                  "level": 7,
                  "value": "240"
                },
                {
                  "level": 8,
                  "value": "280"
                },
                {
                  "level": 9,
                  "value": "320"
                },
                {
                  "level": 10,
                  "value": "360"
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
              "label": "Atk %",
              "values": [
                {
                  "level": 1,
                  "value": "1000"
                },
                {
                  "level": 2,
                  "value": "1500"
                },
                {
                  "level": 3,
                  "value": "2000"
                },
                {
                  "level": 4,
                  "value": "2500"
                },
                {
                  "level": 5,
                  "value": "3000"
                },
                {
                  "level": 6,
                  "value": "3200"
                },
                {
                  "level": 7,
                  "value": "3400"
                },
                {
                  "level": 8,
                  "value": "3600"
                },
                {
                  "level": 9,
                  "value": "3800"
                },
                {
                  "level": 10,
                  "value": "4000"
                }
              ]
            }
          ],
          "translations": {
            "pt-BR": {
              "name": " Tetra Vortex ",
              "description": "Combina o poder dos 4 Elementos.\nConsome todas as Esferas Elementais para causar 4 golpes no alvo.\nCausa dano mágico com propriedade igual à da Esfera lançada.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Tetra_Vortex"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/2217.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2217",
          "tree": {
            "idx": 32,
            "row": 3,
            "col": 5,
            "columns": 9,
            "requirements": [
              {
                "id": 2204,
                "level": 5,
                "name": "Jack Frost",
                "visible": true
              },
              {
                "id": 2212,
                "level": 5,
                "name": "Hell Inferno",
                "visible": true
              },
              {
                "id": 2214,
                "level": 5,
                "name": "Chain Lightning",
                "visible": true
              },
              {
                "id": 2216,
                "level": 5,
                "name": "Earth Strain",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Damage / Debuff Skill"
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
                "label": "Cast Delay",
                "value": "0 seconds"
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
                    "id": "base-damage-matk",
                    "label": "Base Damage (MATK)"
                  },
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  },
                  {
                    "id": "atk",
                    "label": "Atk %"
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
                      "base-damage-matk": "1200%",
                      "sp-cost": "120",
                      "range": "11 cells",
                      "atk": "1000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-matk": "1600%",
                      "sp-cost": "150",
                      "range": "11 cells",
                      "atk": "1500"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-matk": "2000%",
                      "sp-cost": "180",
                      "range": "11 cells",
                      "atk": "2000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-matk": "2400%",
                      "sp-cost": "210",
                      "range": "11 cells",
                      "atk": "2500"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-matk": "2800%",
                      "sp-cost": "240",
                      "range": "11 cells",
                      "atk": "3000"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "base-damage-matk": "3200%",
                      "sp-cost": "200",
                      "range": "11 cells",
                      "atk": "3200"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "base-damage-matk": "3600%",
                      "sp-cost": "240",
                      "range": "11 cells",
                      "atk": "3400"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "base-damage-matk": "4000%",
                      "sp-cost": "280",
                      "range": "11 cells",
                      "atk": "3600"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "base-damage-matk": "4400%",
                      "sp-cost": "320",
                      "range": "11 cells",
                      "atk": "3800"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "base-damage-matk": "4800%",
                      "sp-cost": "360",
                      "range": "11 cells",
                      "atk": "4000"
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
            "status": "translated",
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
      "label": "High Wizard",
      "pointLimit": 69,
      "tree": {
        "columns": 9,
        "rows": 3
      },
      "skills": [
        {
          "id": 93,
          "imageFile": "93.png",
          "name": "Monster Property",
          "maxLevel": 1,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "Supportive",
          "target": "1 Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Analyzes a single target, revealing information.If the user is in a party, all party members can see the target's information.",
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
          "iconUrl": "assets/divine-pride/skills/93.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/93",
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
          "id": 87,
          "imageFile": "87.png",
          "name": "Icewall",
          "maxLevel": 10,
          "prerequisiteText": "Stone Curse 1, Frost Diver 1",
          "group": "Active",
          "type": "1 cell on ground",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Creates a wall of ice in a targeted location to impede movement.\ncan't go through this ice wall, but can do long-range attacks such as arrow attacks.\nDepending on the skill level, durability exists, and when installed, durability is reduced by 50 per second\nWhen the durability reaches zero, it disappears.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Durability: 400"
            },
            {
              "level": 2,
              "text": "Durability: 600"
            },
            {
              "level": 3,
              "text": "Durability: 800"
            },
            {
              "level": 4,
              "text": "Durability:1000"
            },
            {
              "level": 5,
              "text": "Durability:1200"
            },
            {
              "level": 6,
              "text": "Durability:1400"
            },
            {
              "level": 7,
              "text": "Durability:1600"
            },
            {
              "level": 8,
              "text": "Durability:1800"
            },
            {
              "level": 9,
              "text": "Durability:2000"
            },
            {
              "level": 10,
              "text": "Durability:2200"
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
          "iconUrl": "assets/divine-pride/skills/87.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/87",
          "tree": {
            "idx": 1,
            "row": 0,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 15,
                "level": 1,
                "name": "Frost Driver",
                "visible": false
              },
              {
                "id": 16,
                "level": 1,
                "name": "Stone Curse",
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
                      "effect": "Durability: 400",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Durability: 600",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Durability: 800",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Durability:1000",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Durability:1200",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "Durability:1400",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "Durability:1600",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "Durability:1800",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "Durability:2000",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "Durability:2200",
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
          "id": 84,
          "imageFile": "84.png",
          "name": "Jupitel Thunder",
          "maxLevel": 10,
          "prerequisiteText": "Napalm Beat 1, Lightning Bolt 1",
          "group": "Active",
          "type": "Magic",
          "target": "1 Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Fires a ball of crackling lightning at a single target that inflicts 100% Wind property magic damage each shock and pushes it backwards.\nSkill level increases the number of hits inflicted.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Hits Inflicted: 3times"
            },
            {
              "level": 2,
              "text": "Hits Inflicted: 4times"
            },
            {
              "level": 3,
              "text": "Hits Inflicted: 5times"
            },
            {
              "level": 4,
              "text": "Hits Inflicted: 6times"
            },
            {
              "level": 5,
              "text": "Hits Inflicted: 7times"
            },
            {
              "level": 6,
              "text": "Hits Inflicted: 8times"
            },
            {
              "level": 7,
              "text": "Hits Inflicted: 9times"
            },
            {
              "level": 8,
              "text": "Hits Inflicted:10times"
            },
            {
              "level": 9,
              "text": "Hits Inflicted:11times"
            },
            {
              "level": 10,
              "text": "Hits Inflicted:12times"
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "castDelay": "0 seconds",
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
                  "value": "23"
                },
                {
                  "level": 3,
                  "value": "26"
                },
                {
                  "level": 4,
                  "value": "29"
                },
                {
                  "level": 5,
                  "value": "32"
                },
                {
                  "level": 6,
                  "value": "35"
                },
                {
                  "level": 7,
                  "value": "38"
                },
                {
                  "level": 8,
                  "value": "41"
                },
                {
                  "level": 9,
                  "value": "44"
                },
                {
                  "level": 10,
                  "value": "47"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/84.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/84",
          "tree": {
            "idx": 2,
            "row": 0,
            "col": 2,
            "columns": 9,
            "requirements": [
              {
                "id": 11,
                "level": 1,
                "name": "Napalm Beat",
                "visible": false
              },
              {
                "id": 20,
                "level": 1,
                "name": "Lightning Bolt",
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
                "label": "Fixed Cast Time",
                "value": "0.5 seconds"
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
                      "effect": "Hits Inflicted: 3times",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Hits Inflicted: 4times",
                      "sp-cost": "23"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Hits Inflicted: 5times",
                      "sp-cost": "26"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Hits Inflicted: 6times",
                      "sp-cost": "29"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Hits Inflicted: 7times",
                      "sp-cost": "32"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "Hits Inflicted: 8times",
                      "sp-cost": "35"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "Hits Inflicted: 9times",
                      "sp-cost": "38"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "Hits Inflicted:10times",
                      "sp-cost": "41"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "Hits Inflicted:11times",
                      "sp-cost": "44"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "Hits Inflicted:12times",
                      "sp-cost": "47"
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
          "id": 90,
          "imageFile": "90.png",
          "name": "Earth Spike",
          "maxLevel": 5,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "Magic",
          "target": "1 Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Commands the ground beneath a single target to rise into spikes, where each spike will inflict 200% Earth property magic damage.\nThe number of consecutive hits increases with skill level.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 1time"
            },
            {
              "level": 2,
              "text": "ATK 2time"
            },
            {
              "level": 3,
              "text": "ATK 3time"
            },
            {
              "level": 4,
              "text": "ATK 4time"
            },
            {
              "level": 5,
              "text": "ATK 5time"
            }
          ],
          "castDelay": "1.4 seconds",
          "cooldown": "0 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
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
          "iconUrl": "assets/divine-pride/skills/90.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/90",
          "tree": {
            "idx": 3,
            "row": 0,
            "col": 3,
            "columns": 9,
            "requirements": [
              {
                "id": 16,
                "level": 1,
                "name": "Stone Curse",
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
                "value": "5"
              },
              {
                "label": "Cast Delay",
                "value": "1.4 seconds"
              },
              {
                "label": "Cooldown",
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
                      "effect": "ATK 1time",
                      "sp-cost": "14"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "ATK 2time",
                      "sp-cost": "18"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "ATK 3time",
                      "sp-cost": "22"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "ATK 4time",
                      "sp-cost": "26"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "ATK 5time",
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
          "id": 81,
          "imageFile": "81.png",
          "name": "Sightrasher",
          "maxLevel": 10,
          "prerequisiteText": "Sight 1, Lightning Bolt 1",
          "group": "Active",
          "type": "Magic",
          "target": "Immediately",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Projects the fireball summoned from the Sight skill in 8 directions around the caster to inflict Fire property magic damage to all enemies around the caster and push them 2 cells backwards.\nAfter use, the fireball summoned to the Sight disappear..",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 120%"
            },
            {
              "level": 2,
              "text": "MATK 140%"
            },
            {
              "level": 3,
              "text": "MATK 160%"
            },
            {
              "level": 4,
              "text": "MATK 180%"
            },
            {
              "level": 5,
              "text": "MATK 200%"
            },
            {
              "level": 6,
              "text": "MATK 220%"
            },
            {
              "level": 7,
              "text": "MATK 240%"
            },
            {
              "level": 8,
              "text": "MATK 260%"
            },
            {
              "level": 9,
              "text": "MATK 280%"
            },
            {
              "level": 10,
              "text": "MATK 300%"
            }
          ],
          "fixedCastTime": "0.08 seconds",
          "variableCastTime": "0.32 seconds",
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
                  "value": "37"
                },
                {
                  "level": 3,
                  "value": "39"
                },
                {
                  "level": 4,
                  "value": "41"
                },
                {
                  "level": 5,
                  "value": "43"
                },
                {
                  "level": 6,
                  "value": "45"
                },
                {
                  "level": 7,
                  "value": "47"
                },
                {
                  "level": 8,
                  "value": "49"
                },
                {
                  "level": 9,
                  "value": "51"
                },
                {
                  "level": 10,
                  "value": "53"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/81.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/81",
          "tree": {
            "idx": 4,
            "row": 0,
            "col": 4,
            "columns": 9,
            "requirements": [
              {
                "id": 10,
                "level": 1,
                "name": "Sight",
                "visible": false
              },
              {
                "id": 20,
                "level": 1,
                "name": "Lightning Bolt",
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
                "label": "Fixed Cast Time",
                "value": "0.08 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "0.32 seconds"
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
                      "base-damage-matk": "120%",
                      "sp-cost": "35"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-matk": "140%",
                      "sp-cost": "37"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-matk": "160%",
                      "sp-cost": "39"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-matk": "180%",
                      "sp-cost": "41"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-matk": "200%",
                      "sp-cost": "43"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "base-damage-matk": "220%",
                      "sp-cost": "45"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "base-damage-matk": "240%",
                      "sp-cost": "47"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "base-damage-matk": "260%",
                      "sp-cost": "49"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "base-damage-matk": "280%",
                      "sp-cost": "51"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "base-damage-matk": "300%",
                      "sp-cost": "53"
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
          "id": 80,
          "imageFile": "80.png",
          "name": "Fire Pillar",
          "maxLevel": 10,
          "prerequisiteText": "Fire Wall 1",
          "group": "Active",
          "type": "1 cell on ground",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Summons a pillar of flame on a targeted location that flares when triggered, inflicting piercing Fire property magic damage each hit to all enemies within its area of effect.\nIt will vanish itself if they were not used for 30s.\nUp to 5 can be installed, each cast consumes a Blue Gemstone if Level 6 or higher is cast.\nIt can't be installed if there are enemies or allies in 3*3 cells.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Hits Inflicted: 3times, Effective Range: 3X3cell"
            },
            {
              "level": 2,
              "text": "Hits Inflicted: 4times, Effective Range: 3X3cell"
            },
            {
              "level": 3,
              "text": "Hits Inflicted: 5times, Effective Range: 3X3cell"
            },
            {
              "level": 4,
              "text": "Hits Inflicted: 6times, Effective Range: 3X3cell"
            },
            {
              "level": 5,
              "text": "Hits Inflicted: 7times, Effective Range: 3X3cell"
            },
            {
              "level": 6,
              "text": "Hits Inflicted: 8times, Effective Range: 7X7cell"
            },
            {
              "level": 7,
              "text": "Hits Inflicted: 9times, Effective Range: 7X7cell"
            },
            {
              "level": 8,
              "text": "Hits Inflicted:10times, Effective Range: 7X7cell"
            },
            {
              "level": 9,
              "text": "Hits Inflicted:11times, Effective Range: 7X7cell"
            },
            {
              "level": 10,
              "text": "Hits Inflicted:12times, Effective Range: 7X7cell"
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
                  "value": "75"
                },
                {
                  "level": 2,
                  "value": "75"
                },
                {
                  "level": 3,
                  "value": "75"
                },
                {
                  "level": 4,
                  "value": "75"
                },
                {
                  "level": 5,
                  "value": "75"
                },
                {
                  "level": 6,
                  "value": "75"
                },
                {
                  "level": 7,
                  "value": "75"
                },
                {
                  "level": 8,
                  "value": "75"
                },
                {
                  "level": 9,
                  "value": "75"
                },
                {
                  "level": 10,
                  "value": "75"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/80.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/80",
          "tree": {
            "idx": 5,
            "row": 0,
            "col": 5,
            "columns": 9,
            "requirements": [
              {
                "id": 18,
                "level": 1,
                "name": "Fire Wall",
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
                "label": "Cast Delay",
                "value": "1 second"
              },
              {
                "label": "Cooldown",
                "value": "0.5 seconds"
              },
              {
                "label": "Area of Effect",
                "value": "Lv 1: 3 x 3 cells / Lv 2: 3 x 3 cells / Lv 3: 3 x 3 cells / Lv 4: 3 x 3 cells / Lv 5: 3 x 3 cells / Lv 6: 7 x 7 cells / Lv 7: 7 x 7 cells / Lv 8: 7 x 7 cells / Lv 9: 7 x 7 cells / Lv 10: 7 x 7 cells"
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
                      "effect": "Hits Inflicted: 3times, Effective Range: 3 x 3 cells",
                      "sp-cost": "75"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Hits Inflicted: 4times, Effective Range: 3 x 3 cells",
                      "sp-cost": "75"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Hits Inflicted: 5times, Effective Range: 3 x 3 cells",
                      "sp-cost": "75"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Hits Inflicted: 6times, Effective Range: 3 x 3 cells",
                      "sp-cost": "75"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Hits Inflicted: 7times, Effective Range: 3 x 3 cells",
                      "sp-cost": "75"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "Hits Inflicted: 8times, Effective Range: 7 x 7 cells",
                      "sp-cost": "75"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "Hits Inflicted: 9times, Effective Range: 7 x 7 cells",
                      "sp-cost": "75"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "Hits Inflicted:10times, Effective Range: 7 x 7 cells",
                      "sp-cost": "75"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "Hits Inflicted:11times, Effective Range: 7 x 7 cells",
                      "sp-cost": "75"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "Hits Inflicted:12times, Effective Range: 7 x 7 cells",
                      "sp-cost": "75"
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
          "id": 1006,
          "imageFile": "1006.png",
          "name": "Sight Blaster",
          "maxLevel": 1,
          "prerequisiteText": "Quest complete",
          "group": "Active",
          "type": "Magic",
          "target": "Caster Only",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Summons Sight's flame that roams around and protects you for 15 min. at the cost of 80 SP.\nIf an enemy steps into 3 x3 range around you, inflicts Fire damage of 600% of MATK and knocks them back by 3 cells.\nThe flame vanishes after inflicting damage.",
          "levelDetails": [],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "80"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/1006.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/1006",
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
                      "sp-cost": "80"
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
          "id": 483,
          "imageFile": "483.png",
          "name": "Ganbantein",
          "maxLevel": 1,
          "prerequisiteText": "Sense 1, Icewall 1",
          "group": "",
          "type": "",
          "target": "Ground",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Enable the chance of canceling any\nground targeting magic spell cast on a 3*3 cell\narea around the targeted spot. This skill will\ncancel Magnetic Earth on areas that have been\nenchanted by that skill. This skill is\nunaffected by items or skills that remove\nGemstone requirements. Each cast requires\n1 Blue Gemstone and Yellow Gemstone.\n5 second Cast Delay.",
          "levelDetails": [],
          "variableCastTime": "0 seconds",
          "cooldown": "2.5 seconds",
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
          "translations": {
            "pt-BR": {
              "name": " Ganbantein ",
              "description": "Conjura uma magia em latim.\nTem 80% de chance de anular total ou parcialmente as habilidades de solo na área selecionada.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Ganbantein"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/483.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/483",
          "tree": {
            "idx": 7,
            "row": 0,
            "col": 7,
            "columns": 9,
            "requirements": [
              {
                "id": 87,
                "level": 1,
                "name": "Ice Wall",
                "visible": true
              },
              {
                "id": 93,
                "level": 1,
                "name": "Sense",
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
                "label": "Variable Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Cooldown",
                "value": "2.5 seconds"
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
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 88,
          "imageFile": "88.png",
          "name": "Frost Nova",
          "maxLevel": 10,
          "prerequisiteText": "Frost Diver 1, Icewall 1",
          "group": "Active",
          "type": "Magic",
          "target": "Caster Only",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Raises ice spikes around the user that will inflict Water property magic damage to all enemies around the user. It has a chance of leaving enemies frozen.\nThe chance of effect and cast time increases upon skill level.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Cast Time: 1.5sec, Chance of frozen: 38%"
            },
            {
              "level": 2,
              "text": "Cast Time: 3.0sec, Chance of frozen: 43%"
            },
            {
              "level": 3,
              "text": "Cast Time: 4.5sec, Chance of frozen: 48%"
            },
            {
              "level": 4,
              "text": "Cast Time: 6.0sec, Chance of frozen: 53%"
            },
            {
              "level": 5,
              "text": "Cast Time: 7.5sec, Chance of frozen: 58%"
            },
            {
              "level": 6,
              "text": "Cast Time: 9.0sec, Chance of frozen: 63%"
            },
            {
              "level": 7,
              "text": "Cast Time:10.5sec, Chance of frozen: 68%"
            },
            {
              "level": 8,
              "text": "Cast Time:12.0sec, Chance of frozen: 73%"
            },
            {
              "level": 9,
              "text": "Cast Time:13.5sec, Chance of frozen: 78%"
            },
            {
              "level": 10,
              "text": "Cast Time:15.0sec, Chance of frozen: 83%"
            }
          ],
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
                  "value": "43"
                },
                {
                  "level": 3,
                  "value": "41"
                },
                {
                  "level": 4,
                  "value": "39"
                },
                {
                  "level": 5,
                  "value": "37"
                },
                {
                  "level": 6,
                  "value": "35"
                },
                {
                  "level": 7,
                  "value": "33"
                },
                {
                  "level": 8,
                  "value": "31"
                },
                {
                  "level": 9,
                  "value": "29"
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
          "iconUrl": "assets/divine-pride/skills/88.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/88",
          "tree": {
            "idx": 8,
            "row": 0,
            "col": 8,
            "columns": 9,
            "requirements": [
              {
                "id": 87,
                "level": 1,
                "name": "Ice Wall",
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
                      "effect": "Cast Time: 1.5sec, Chance of frozen: 38%",
                      "sp-cost": "45"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Cast Time: 3.0sec, Chance of frozen: 43%",
                      "sp-cost": "43"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Cast Time: 4.5sec, Chance of frozen: 48%",
                      "sp-cost": "41"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Cast Time: 6.0sec, Chance of frozen: 53%",
                      "sp-cost": "39"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Cast Time: 7.5sec, Chance of frozen: 58%",
                      "sp-cost": "37"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "Cast Time: 9.0sec, Chance of frozen: 63%",
                      "sp-cost": "35"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "Cast Time:10.5sec, Chance of frozen: 68%",
                      "sp-cost": "33"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "Cast Time:12.0sec, Chance of frozen: 73%",
                      "sp-cost": "31"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "Cast Time:13.5sec, Chance of frozen: 78%",
                      "sp-cost": "29"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "Cast Time:15.0sec, Chance of frozen: 83%",
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
          "id": 85,
          "imageFile": "85.png",
          "name": "Lord of Vermilion",
          "maxLevel": 10,
          "prerequisiteText": "Thunder Storm 1, Jupitel Thunder 5",
          "group": "Active",
          "type": "1 cell on ground",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Calls forth destructive bolts from the skies upon a targeted location that will inflict Wind property magic damage every second to all enemies within its area of effect. It has a chance of leaving enemies blind.\nThe chance of effect is reduced by the target's resistance to abnormal status.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 500%, Blind Chance:15%"
            },
            {
              "level": 2,
              "text": "MATK 600%, Blind Chance:20%"
            },
            {
              "level": 3,
              "text": "MATK 700%, Blind Chance:25%"
            },
            {
              "level": 4,
              "text": "MATK 800%, Blind Chance:30%"
            },
            {
              "level": 5,
              "text": "MATK 900%, Blind Chance:35%"
            },
            {
              "level": 6,
              "text": "MATK 1000%, Blind Chance:40%"
            },
            {
              "level": 7,
              "text": "MATK 1100%, Blind Chance:45%"
            },
            {
              "level": 8,
              "text": "MATK 1200%, Blind Chance:50%"
            },
            {
              "level": 9,
              "text": "MATK 1300%, Blind Chance:55%"
            },
            {
              "level": 10,
              "text": "MATK 1400%, Blind Chance:60%"
            }
          ],
          "fixedCastTime": "1.5 seconds",
          "castDelay": "1 second",
          "cooldown": "5 seconds",
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
                },
                {
                  "level": 6,
                  "value": "80"
                },
                {
                  "level": 7,
                  "value": "84"
                },
                {
                  "level": 8,
                  "value": "88"
                },
                {
                  "level": 9,
                  "value": "92"
                },
                {
                  "level": 10,
                  "value": "96"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/85.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/85",
          "tree": {
            "idx": 9,
            "row": 1,
            "col": 0,
            "columns": 9,
            "requirements": [
              {
                "id": 21,
                "level": 1,
                "name": "Thunder Storm",
                "visible": false
              },
              {
                "id": 84,
                "level": 5,
                "name": "Jupitel Thunder",
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
                "value": "1.5 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "1 second"
              },
              {
                "label": "Cooldown",
                "value": "5 seconds"
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
                      "base-damage-matk": "500%",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-matk": "600%",
                      "sp-cost": "64"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-matk": "700%",
                      "sp-cost": "68"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-matk": "800%",
                      "sp-cost": "72"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-matk": "900%",
                      "sp-cost": "76"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "base-damage-matk": "1000%",
                      "sp-cost": "80"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "base-damage-matk": "1100%",
                      "sp-cost": "84"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "base-damage-matk": "1200%",
                      "sp-cost": "88"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "base-damage-matk": "1300%",
                      "sp-cost": "92"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "base-damage-matk": "1400%",
                      "sp-cost": "96"
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
          "id": 91,
          "imageFile": "91.png",
          "name": "Heaven's Drive",
          "maxLevel": 5,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "1 cell on ground",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Commands the ground in a targeted location to rise into spikes, where each series of spikes will inflict Earth property magic damage to all enemies within its area of effect.\nThis skill is capable of hitting hidden enemies.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 125%"
            },
            {
              "level": 2,
              "text": "MATK 250%"
            },
            {
              "level": 3,
              "text": "MATK 375%"
            },
            {
              "level": 4,
              "text": "MATK 500%"
            },
            {
              "level": 5,
              "text": "MATK 625%"
            }
          ],
          "fixedCastTime": "0.8 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "1 second",
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
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/91.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/91",
          "tree": {
            "idx": 10,
            "row": 1,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 90,
                "level": 3,
                "name": "Earth Spike",
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
                "value": "0.8 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.5 seconds"
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
                      "base-damage-matk": "125%",
                      "sp-cost": "28"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-matk": "250%",
                      "sp-cost": "32"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-matk": "375%",
                      "sp-cost": "36"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-matk": "500%",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-matk": "625%",
                      "sp-cost": "44"
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
          "id": 83,
          "imageFile": "83.png",
          "name": "Meteor Storm",
          "maxLevel": 10,
          "prerequisiteText": "Thunder Storm 1, Sightrasher 2",
          "group": "Active",
          "type": "1 cell on ground",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Each meteor will inflict 125% Fire property magic damage each hit to all enemies, and it has a chance of leaving enemies [Abnormal Status : Stun].\nEach meteor has a 7*7 area. Skill level affects hits per meteor and the number of meteors.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Meteors:2, Hits per Meteor:1time, Stun Chance: 3%"
            },
            {
              "level": 2,
              "text": "Meteors:3, Hits per Meteor:1time, Stun Chance: 6%"
            },
            {
              "level": 3,
              "text": "Meteors:3, Hits per Meteor:2times, Stun Chance: 9%"
            },
            {
              "level": 4,
              "text": "Meteors:4, Hits per Meteor:2times, Stun Chance:12%"
            },
            {
              "level": 5,
              "text": "Meteors:4, Hits per Meteor:3times, Stun Chance:15%"
            },
            {
              "level": 6,
              "text": "Meteors:5, Hits per Meteor:3times, Stun Chance:18%"
            },
            {
              "level": 7,
              "text": "Meteors:5, Hits per Meteor:4times, Stun Chance:21%"
            },
            {
              "level": 8,
              "text": "Meteors:6, Hits per Meteor:4times, Stun Chance:24%"
            },
            {
              "level": 9,
              "text": "Meteors:6, Hits per Meteor:5times, Stun Chance:27%"
            },
            {
              "level": 10,
              "text": "Meteors:7, Hits per Meteor:5times, Stun Chance:30%"
            }
          ],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "6.3 seconds",
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
                  "value": "30"
                },
                {
                  "level": 4,
                  "value": "34"
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
                  "value": "50"
                },
                {
                  "level": 8,
                  "value": "54"
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/83.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/83",
          "tree": {
            "idx": 11,
            "row": 1,
            "col": 2,
            "columns": 9,
            "requirements": [
              {
                "id": 21,
                "level": 1,
                "name": "Thunder Storm",
                "visible": false
              },
              {
                "id": 81,
                "level": 2,
                "name": "Sightrasher",
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
                "value": "1.5 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "6.3 seconds"
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
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Meteors:2, Hits per Meteor:1time, Stun Chance: 3%",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Meteors:3, Hits per Meteor:1time, Stun Chance: 6%",
                      "sp-cost": "24"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Meteors:3, Hits per Meteor:2times, Stun Chance: 9%",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Meteors:4, Hits per Meteor:2times, Stun Chance:12%",
                      "sp-cost": "34"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Meteors:4, Hits per Meteor:3times, Stun Chance:15%",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "Meteors:5, Hits per Meteor:3times, Stun Chance:18%",
                      "sp-cost": "44"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "Meteors:5, Hits per Meteor:4times, Stun Chance:21%",
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "Meteors:6, Hits per Meteor:4times, Stun Chance:24%",
                      "sp-cost": "54"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "Meteors:6, Hits per Meteor:5times, Stun Chance:27%",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "Meteors:7, Hits per Meteor:5times, Stun Chance:30%",
                      "sp-cost": "64"
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
          "id": 365,
          "imageFile": "365.png",
          "name": "Stave Crasher (Magic Crasher)",
          "maxLevel": 1,
          "prerequisiteText": "Improved SP Recovery 1",
          "group": "Active",
          "type": "Ranged Physical Attack",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Combines attack and magic to strike a single target from distance and inflict ranged physical damage.",
          "levelDetails": [],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "8"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/365.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/365",
          "tree": {
            "idx": 12,
            "row": 1,
            "col": 3,
            "columns": 9,
            "requirements": [
              {
                "id": 9,
                "level": 1,
                "name": "Increase SP Recovery",
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
          "id": 364,
          "imageFile": "364.png",
          "name": "Soul Drain",
          "maxLevel": 10,
          "prerequisiteText": "SP Recovery 5, Soul Strike 7",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Enhances Max HSP, allows to absorb SP based on monster's level when they're killed with single target spells.\n(The effect is determined based on the skill used just before the effect of the soul drain is activated)",
          "levelDetails": [
            {
              "level": 1,
              "text": "MaxSP +2%"
            },
            {
              "level": 2,
              "text": "MaxSP +4%"
            },
            {
              "level": 3,
              "text": "MaxSP +6%"
            },
            {
              "level": 4,
              "text": "MaxSP +8%"
            },
            {
              "level": 5,
              "text": "MaxSP +10%"
            },
            {
              "level": 6,
              "text": "MaxSP +12%"
            },
            {
              "level": 7,
              "text": "MaxSP +14%"
            },
            {
              "level": 8,
              "text": "MaxSP +16%"
            },
            {
              "level": 9,
              "text": "MaxSP +18%"
            },
            {
              "level": 10,
              "text": "MaxSP +20%"
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
          "iconUrl": "assets/divine-pride/skills/364.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/364",
          "tree": {
            "idx": 13,
            "row": 1,
            "col": 4,
            "columns": 9,
            "requirements": [
              {
                "id": 9,
                "level": 5,
                "name": "Increase SP Recovery",
                "visible": false
              },
              {
                "id": 13,
                "level": 7,
                "name": "Soul Strike",
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
                    "id": "maxsp",
                    "label": "Maxsp"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "maxsp": "+2%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "maxsp": "+4%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "maxsp": "+6%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "maxsp": "+8%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "maxsp": "+10%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "maxsp": "+12%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "maxsp": "+14%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "maxsp": "+16%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "maxsp": "+18%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "maxsp": "+20%",
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
          "id": 86,
          "imageFile": "86.png",
          "name": "Waterball",
          "maxLevel": 5,
          "prerequisiteText": "Cold Bolt 1, Lightning Bolt 1",
          "group": "Active",
          "type": "Magic",
          "target": "1 Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Requires to be in shallow water.\nInflicts Water property Magic Damage to a single target multiple times in rapid succession.\nThe range increases upon skill level, and can also be used above skill effects such as Deluge.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 130% per 1time, Range: 1X1"
            },
            {
              "level": 2,
              "text": "MATK 160% per 1time, Range: 3X3"
            },
            {
              "level": 3,
              "text": "MATK 190% per 1time, Range: 3X3"
            },
            {
              "level": 4,
              "text": "MATK 220% per 1time, Range: 5X5"
            },
            {
              "level": 5,
              "text": "MATK 250% per 1time, Range: 5X5"
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
                  "value": "20"
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
                  "value": "25"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/86.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/86",
          "tree": {
            "idx": 15,
            "row": 1,
            "col": 6,
            "columns": 9,
            "requirements": [
              {
                "id": 14,
                "level": 1,
                "name": "Cold Bolt",
                "visible": false
              },
              {
                "id": 20,
                "level": 1,
                "name": "Lightning Bolt",
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
                      "base-damage-matk": "130%",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-matk": "160%",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-matk": "190%",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-matk": "220%",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-matk": "250%",
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
          "id": 92,
          "imageFile": "92.png",
          "name": "Quagmire",
          "maxLevel": 5,
          "prerequisiteText": "Heaven's Drive 1",
          "group": "Active",
          "type": "1 cell on ground",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Turns a targeted location into a marshland that reduces Movement Speed, AGI and DEX of all enemies within its area of effect.\nThis skill cannot reduce the affected stats of monsters by more than 50%, and those of players by more than 25%.\nAlso removes certain skill effects, such as Increase AGI, Twohand Quicken, Wind Walker and Adrenaline Rush.\nA Maximum of three quagmires can be placed before the first one expires.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Duration: 5sec, AGI/DEXReduction: 10%"
            },
            {
              "level": 2,
              "text": "Duration:10sec, AGI/DEXReduction: 20%"
            },
            {
              "level": 3,
              "text": "Duration:15sec, AGI/DEXReduction: 30%"
            },
            {
              "level": 4,
              "text": "Duration:20sec, AGI/DEXReduction: 40%"
            },
            {
              "level": 5,
              "text": "Duration:25sec, AGI/DEXReduction: 50%"
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
                  "value": "10"
                },
                {
                  "level": 3,
                  "value": "15"
                },
                {
                  "level": 4,
                  "value": "20"
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
          "iconUrl": "assets/divine-pride/skills/92.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/92",
          "tree": {
            "idx": 17,
            "row": 1,
            "col": 8,
            "columns": 9,
            "requirements": [
              {
                "id": 91,
                "level": 1,
                "name": "Heaven's Drive",
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
                      "effect": "Duration: 5sec, AGI/DE x Reduction: 10%",
                      "sp-cost": "5"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Duration:10sec, AGI/DE x Reduction: 20%",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Duration:15sec, AGI/DE x Reduction: 30%",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Duration:20sec, AGI/DE x Reduction: 40%",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Duration:25sec, AGI/DE x Reduction: 50%",
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
          "id": 400,
          "imageFile": "400.png",
          "name": "Napalm Vulcan",
          "maxLevel": 5,
          "prerequisiteText": "Napalm Beat 5",
          "group": "Aggressive",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Deliver multiple psychokinetic\nblows at an enemy with a low chance of causing\nan abnormal status. This skill's level affects\nthe number of strikes from Napalm Vulcan.",
          "levelDetails": [],
          "fixedCastTime": "0.2 seconds",
          "variableCastTime": "0.8 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "1 second",
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
          "iconUrl": "assets/divine-pride/skills/400.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/400",
          "tree": {
            "idx": 19,
            "row": 2,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 11,
                "level": 5,
                "name": "Napalm Beat",
                "visible": false
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
                "value": "5"
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
                "label": "Cooldown",
                "value": "1 second"
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
          "id": 366,
          "imageFile": "366.png",
          "name": "Mystical Amplification",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "Buff",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Increases base MATK for 60 sec.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK + 5%"
            },
            {
              "level": 2,
              "text": "MATK +10%"
            },
            {
              "level": 3,
              "text": "MATK +15%"
            },
            {
              "level": 4,
              "text": "MATK +20%"
            },
            {
              "level": 5,
              "text": "MATK +25%"
            },
            {
              "level": 6,
              "text": "MATK +30%"
            },
            {
              "level": 7,
              "text": "MATK +35%"
            },
            {
              "level": 8,
              "text": "MATK +40%"
            },
            {
              "level": 9,
              "text": "MATK +45%"
            },
            {
              "level": 10,
              "text": "MATK +50%"
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/366.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/366",
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
                    "id": "matk",
                    "label": "Matk"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "matk": "+ 5%",
                      "sp-cost": "35"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "matk": "+10%",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "matk": "+15%",
                      "sp-cost": "45"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "matk": "+20%",
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "matk": "+25%",
                      "sp-cost": "55"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "matk": "+30%",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "matk": "+35%",
                      "sp-cost": "65"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "matk": "+40%",
                      "sp-cost": "70"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "matk": "+45%",
                      "sp-cost": "75"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "matk": "+50%",
                      "sp-cost": "80"
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
          "id": 89,
          "imageFile": "89.png",
          "name": "Storm Gust",
          "maxLevel": 10,
          "prerequisiteText": "Frost Diver 1, Jupitel 3",
          "group": "Active",
          "type": "1 cell on ground",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Summons a vicious blizzard upon a targeted location that will inflict Water property magic damage every half a second to all enemies within its area of effect.\nIt lasts for 4.5s, hits every 0.45s and push them 2 cells.\nIt has a chance of leaving enemies frozen,and frozen enemies will not take further damage from this skill.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 120% per 1time"
            },
            {
              "level": 2,
              "text": "MATK 170% per 1time"
            },
            {
              "level": 3,
              "text": "MATK 220% per 1time"
            },
            {
              "level": 4,
              "text": "MATK 270% per 1time"
            },
            {
              "level": 5,
              "text": "MATK 320% per 1time"
            },
            {
              "level": 6,
              "text": "MATK 370% per 1time"
            },
            {
              "level": 7,
              "text": "MATK 420% per 1time"
            },
            {
              "level": 8,
              "text": "MATK 470% per 1time"
            },
            {
              "level": 9,
              "text": "MATK 520% per 1time"
            },
            {
              "level": 10,
              "text": "MATK 570% per 1time"
            }
          ],
          "fixedCastTime": "1.5 seconds",
          "castDelay": "1 second",
          "cooldown": "6 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "78"
                },
                {
                  "level": 2,
                  "value": "78"
                },
                {
                  "level": 3,
                  "value": "78"
                },
                {
                  "level": 4,
                  "value": "78"
                },
                {
                  "level": 5,
                  "value": "78"
                },
                {
                  "level": 6,
                  "value": "78"
                },
                {
                  "level": 7,
                  "value": "78"
                },
                {
                  "level": 8,
                  "value": "78"
                },
                {
                  "level": 9,
                  "value": "78"
                },
                {
                  "level": 10,
                  "value": "78"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/89.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/89",
          "tree": {
            "idx": 22,
            "row": 2,
            "col": 4,
            "columns": 9,
            "requirements": [
              {
                "id": 15,
                "level": 1,
                "name": "Frost Driver",
                "visible": false
              },
              {
                "id": 84,
                "level": 3,
                "name": "Jupitel Thunder",
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
                "value": "1.5 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "1 second"
              },
              {
                "label": "Cooldown",
                "value": "6 seconds"
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
                      "base-damage-matk": "120%",
                      "sp-cost": "78"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-matk": "170%",
                      "sp-cost": "78"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-matk": "220%",
                      "sp-cost": "78"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-matk": "270%",
                      "sp-cost": "78"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-matk": "320%",
                      "sp-cost": "78"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "base-damage-matk": "370%",
                      "sp-cost": "78"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "base-damage-matk": "420%",
                      "sp-cost": "78"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "base-damage-matk": "470%",
                      "sp-cost": "78"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "base-damage-matk": "520%",
                      "sp-cost": "78"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "base-damage-matk": "570%",
                      "sp-cost": "78"
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
          "id": 484,
          "imageFile": "484.png",
          "name": "Gravitational Field",
          "maxLevel": 5,
          "prerequisiteText": "Quagmire 1,",
          "group": "",
          "type": "",
          "target": "Ground",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Increase the gravity in a 5*5 cell\narea around a targeted spot which will decrease\nthe Movement and ASPD of enemies within\nrange, as well as cause continuous damage that\nwill pierce Defense. This skill's effect on\nMovement and ASPD does not apply to\nBoss monsters.",
          "levelDetails": [
            {
              "level": 1,
              "text": "5 Sec Duration Enemy Speed -5%\n400 Damage/Sec"
            },
            {
              "level": 2,
              "text": "6 Sec Duration Enemy Speed -10%\n600 Damage/Sec"
            },
            {
              "level": 3,
              "text": "7 Sec Duration Enemy Speed -15%\n800 Damage/Sec"
            },
            {
              "level": 4,
              "text": "8 Sec Duration Enemy Speed -20%\n1,000 Damage/Sec"
            },
            {
              "level": 5,
              "text": "9 Sec Duration Enemy Speed -25%\n1,200 Damage/Sec"
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "5 seconds",
          "castDelay": "1 second",
          "cooldown": "5 seconds",
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
          "iconUrl": "assets/divine-pride/skills/484.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/484",
          "tree": {
            "idx": 24,
            "row": 2,
            "col": 6,
            "columns": 9,
            "requirements": [
              {
                "id": 92,
                "level": 1,
                "name": "Quagmire",
                "visible": true
              },
              {
                "id": 365,
                "level": 1,
                "name": "Stave Crasher",
                "visible": true
              },
              {
                "id": 366,
                "level": 10,
                "name": "Mystical Amplification",
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
                "value": "1 second"
              },
              {
                "label": "Variable Cast Time",
                "value": "5 seconds"
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
                  },
                  {
                    "id": "effect",
                    "label": "Effect"
                  },
                  {
                    "id": "5-sec-duration-enemy-speed",
                    "label": "5 Sec Duration Enemy Speed"
                  },
                  {
                    "id": "6-sec-duration-enemy-speed",
                    "label": "6 Sec Duration Enemy Speed"
                  },
                  {
                    "id": "7-sec-duration-enemy-speed",
                    "label": "7 Sec Duration Enemy Speed"
                  },
                  {
                    "id": "8-sec-duration-enemy-speed",
                    "label": "8 Sec Duration Enemy Speed"
                  },
                  {
                    "id": "9-sec-duration-enemy-speed",
                    "label": "9 Sec Duration Enemy Speed"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "5-sec-duration-enemy-speed": "-5%",
                      "effect": "400 Damage/Sec",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "6-sec-duration-enemy-speed": "-10%",
                      "effect": "600 Damage/Sec",
                      "sp-cost": "70"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "7-sec-duration-enemy-speed": "-15%",
                      "effect": "800 Damage/Sec",
                      "sp-cost": "80"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "8-sec-duration-enemy-speed": "-20%",
                      "effect": "1,000 Damage/Sec",
                      "sp-cost": "90"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "9-sec-duration-enemy-speed": "-25%",
                      "effect": "1,200 Damage/Sec",
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
    },
    {
      "id": "previous-3",
      "label": "Magician",
      "pointLimit": 49,
      "tree": {
        "columns": 9,
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
          "id": 16,
          "imageFile": "16.png",
          "name": "Stone Curse",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "Magic, debuff",
          "target": "1 Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Attempt to [Abnormal Status : petrify] a single target. Each cast consumes a Red Gemstone.\nAt Levels 6 to 10, only successful casts consume the Red Gemstone.\nThe Duration is affected by target's Level, LUK and magic defense.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Consumption: In use, Petrifaction Chance: 24%"
            },
            {
              "level": 2,
              "text": "Consumption: In use, Petrifaction Chance: 28%"
            },
            {
              "level": 3,
              "text": "Consumption: In use, Petrifaction Chance: 32%"
            },
            {
              "level": 4,
              "text": "Consumption: In use, Petrifaction Chance: 36%"
            },
            {
              "level": 5,
              "text": "Consumption: In use, Petrifaction Chance: 40%"
            },
            {
              "level": 7,
              "text": "Consumption: On Success, Petrifaction Chance: 48%"
            },
            {
              "level": 8,
              "text": "Consumption: On Success, Petrifaction Chance: 52%"
            },
            {
              "level": 9,
              "text": "Consumption: On Success, Petrifaction Chance: 56%"
            },
            {
              "level": 10,
              "text": "Consumption: On Success, Petrifaction Chance: 60%"
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
                  "value": "24"
                },
                {
                  "level": 3,
                  "value": "23"
                },
                {
                  "level": 4,
                  "value": "22"
                },
                {
                  "level": 5,
                  "value": "21"
                },
                {
                  "level": 6,
                  "value": "20"
                },
                {
                  "level": 7,
                  "value": "19"
                },
                {
                  "level": 8,
                  "value": "18"
                },
                {
                  "level": 9,
                  "value": "17"
                },
                {
                  "level": 10,
                  "value": "16"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/16.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/16",
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
                      "effect": "Consumption: In use, Petrifaction Chance: 24%",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Consumption: In use, Petrifaction Chance: 28%",
                      "sp-cost": "24"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Consumption: In use, Petrifaction Chance: 32%",
                      "sp-cost": "23"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Consumption: In use, Petrifaction Chance: 36%",
                      "sp-cost": "22"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Consumption: In use, Petrifaction Chance: 40%",
                      "sp-cost": "21"
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
                      "effect": "Consumption: On Success, Petrifaction Chance: 48%",
                      "sp-cost": "19"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "Consumption: On Success, Petrifaction Chance: 52%",
                      "sp-cost": "18"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "Consumption: On Success, Petrifaction Chance: 56%",
                      "sp-cost": "17"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "Consumption: On Success, Petrifaction Chance: 60%",
                      "sp-cost": "16"
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
          "id": 14,
          "imageFile": "14.png",
          "name": "Cold Bolt",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "Magic",
          "target": "1 Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Summon bolts of frigid ice to\nstrike at an enemy. Barring changes in damage\ndue to elemental properties, each bolt inflicts\nan amount of damage equal to the caster's Matk.\nDescription : Attack enemies with bolts of frigid ice\nInflict 100% Water property magic damage.",
          "levelDetails": [
            {
              "level": 1,
              "text": "1 Bolt, SP Consumption:12"
            },
            {
              "level": 2,
              "text": "2 Bolt, SP Consumption:14"
            },
            {
              "level": 3,
              "text": "3 Bolt, SP Consumption:16"
            },
            {
              "level": 4,
              "text": "4 Bolt, SP Consumption:18"
            },
            {
              "level": 5,
              "text": "5 Bolt, SP Consumption:20"
            },
            {
              "level": 6,
              "text": "6 Bolt, SP Consumption:22"
            },
            {
              "level": 7,
              "text": "7 Bolt, SP Consumption:24"
            },
            {
              "level": 8,
              "text": "8 Bolt, SP Consumption:26"
            },
            {
              "level": 9,
              "text": "9 Bolt, SP Consumption:28"
            },
            {
              "level": 10,
              "text": "10 Bolt, SP Consumption:30"
            }
          ],
          "castDelay": "1.4 seconds",
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
          "iconUrl": "assets/divine-pride/skills/14.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/14",
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
                "label": "Cast Delay",
                "value": "1.4 seconds"
              },
              {
                "label": "Cooldown",
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
                      "effect": "1 Bolt, SP Consumption:12",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "2 Bolt, SP Consumption:14",
                      "sp-cost": "14"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "3 Bolt, SP Consumption:16",
                      "sp-cost": "16"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "4 Bolt, SP Consumption:18",
                      "sp-cost": "18"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "5 Bolt, SP Consumption:20",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "6 Bolt, SP Consumption:22",
                      "sp-cost": "22"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "7 Bolt, SP Consumption:24",
                      "sp-cost": "24"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "8 Bolt, SP Consumption:26",
                      "sp-cost": "26"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "9 Bolt, SP Consumption:28",
                      "sp-cost": "28"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "10 Bolt, SP Consumption:30",
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
          "id": 20,
          "imageFile": "20.png",
          "name": "Lightening Bolt",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "Magic",
          "target": "1 Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Drop lightning to give the enemy a 100% wind property magic damage.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Attack 1time, SP Consumption:12"
            },
            {
              "level": 2,
              "text": "Attack 2times, SP Consumption:14"
            },
            {
              "level": 3,
              "text": "Attack 3times, SP Consumption:16"
            },
            {
              "level": 4,
              "text": "Attack 4times, SP Consumption:18"
            },
            {
              "level": 5,
              "text": "Attack 5times, SP Consumption:20"
            },
            {
              "level": 6,
              "text": "Attack 6times, SP Consumption:22"
            },
            {
              "level": 7,
              "text": "Attack 7times, SP Consumption:24"
            },
            {
              "level": 8,
              "text": "Attack 8times, SP Consumption:26"
            },
            {
              "level": 9,
              "text": "Attack 9times, SP Consumption:28"
            },
            {
              "level": 10,
              "text": "Attack 10times, SP Consumption:30"
            }
          ],
          "castDelay": "1.4 seconds",
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
          "iconUrl": "assets/divine-pride/skills/20.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/20",
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
                "label": "Cast Delay",
                "value": "1.4 seconds"
              },
              {
                "label": "Cooldown",
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
                      "effect": "Attack 1time, SP Consumption:12",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Attack 2times, SP Consumption:14",
                      "sp-cost": "14"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Attack 3times, SP Consumption:16",
                      "sp-cost": "16"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Attack 4times, SP Consumption:18",
                      "sp-cost": "18"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Attack 5times, SP Consumption:20",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "Attack 6times, SP Consumption:22",
                      "sp-cost": "22"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "Attack 7times, SP Consumption:24",
                      "sp-cost": "24"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "Attack 8times, SP Consumption:26",
                      "sp-cost": "26"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "Attack 9times, SP Consumption:28",
                      "sp-cost": "28"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "Attack 10times, SP Consumption:30",
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
          "id": 11,
          "imageFile": "11.png",
          "name": "Napalm beat",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "Special Attack(Magic)",
          "target": "1 Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Attack an enemy from a distance\nthrough the use of psychokinetic energy.\nDescription : Strikes at a single target with psychokinetic energy to inflict Ghost property magic damage to all enemies within the area of effect.\nThe more targets, the more scattered the damage.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 80%, SP Consumption: 9"
            },
            {
              "level": 2,
              "text": "MATK 90%, SP Consumption: 9"
            },
            {
              "level": 3,
              "text": "MATK 100%, SP Consumption: 9"
            },
            {
              "level": 4,
              "text": "MATK 110%, SP Consumption:12"
            },
            {
              "level": 5,
              "text": "MATK 120%, SP Consumption:12"
            },
            {
              "level": 6,
              "text": "MATK 130%, SP Consumption:12"
            },
            {
              "level": 7,
              "text": "MATK 140%, SP Consumption:15"
            },
            {
              "level": 8,
              "text": "MATK 150%, SP Consumption:15"
            },
            {
              "level": 9,
              "text": "MATK 160%, SP Consumption:15"
            },
            {
              "level": 10,
              "text": "MATK 170%, SP Consumption:18"
            }
          ],
          "fixedCastTime": "0.1 seconds",
          "variableCastTime": "0.4 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "0 seconds",
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
                  "value": "9"
                },
                {
                  "level": 3,
                  "value": "9"
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
                  "value": "18"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/11.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/11",
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
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "10"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0.1 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "0.4 seconds"
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
                "value": "1 Enemy"
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
                      "base-damage-matk": "80%",
                      "sp-cost": "9"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-matk": "90%",
                      "sp-cost": "9"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-matk": "100%",
                      "sp-cost": "9"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-matk": "110%",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-matk": "120%",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "base-damage-matk": "130%",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "base-damage-matk": "140%",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "base-damage-matk": "150%",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "base-damage-matk": "160%",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "base-damage-matk": "170%",
                      "sp-cost": "18"
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
          "id": 19,
          "imageFile": "19.png",
          "name": "Firebolt",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "Magic",
          "target": "1 Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Attack enemies with fire bolt\ninflict 100% Fire property magic damage.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Attack 1time, SP Consumption:12"
            },
            {
              "level": 2,
              "text": "Attack 2times, SP Consumption:14"
            },
            {
              "level": 3,
              "text": "Attack 3times, SP Consumption:16"
            },
            {
              "level": 4,
              "text": "Attack 4times, SP Consumption:18"
            },
            {
              "level": 5,
              "text": "Attack 5times, SP Consumption:20"
            },
            {
              "level": 6,
              "text": "Attack 6times, SP Consumption:22"
            },
            {
              "level": 7,
              "text": "Attack 7times, SP Consumption:24"
            },
            {
              "level": 8,
              "text": "Attack 8times, SP Consumption:26"
            },
            {
              "level": 9,
              "text": "Attack 9times, SP Consumption:28"
            },
            {
              "level": 10,
              "text": "Attack 10times, SP Consumption:30"
            }
          ],
          "castDelay": "1.4 seconds",
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
          "iconUrl": "assets/divine-pride/skills/19.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/19",
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
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "10"
              },
              {
                "label": "Cast Delay",
                "value": "1.4 seconds"
              },
              {
                "label": "Cooldown",
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
                      "effect": "Attack 1time, SP Consumption:12",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Attack 2times, SP Consumption:14",
                      "sp-cost": "14"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Attack 3times, SP Consumption:16",
                      "sp-cost": "16"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Attack 4times, SP Consumption:18",
                      "sp-cost": "18"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Attack 5times, SP Consumption:20",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "Attack 6times, SP Consumption:22",
                      "sp-cost": "22"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "Attack 7times, SP Consumption:24",
                      "sp-cost": "24"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "Attack 8times, SP Consumption:26",
                      "sp-cost": "26"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "Attack 9times, SP Consumption:28",
                      "sp-cost": "28"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "Attack 10times, SP Consumption:30",
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
          "id": 10,
          "imageFile": "10.png",
          "name": "Sight",
          "maxLevel": 1,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "Supportive",
          "target": "Immediately",
          "recoversAp": "",
          "consumesAp": "",
          "description": "7Summon a fire ball that will detect\nall hidden enemies in 7x7 cells as of the caster by consuming SP 10.",
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
          "iconUrl": "assets/divine-pride/skills/10.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/10",
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
          "id": 9,
          "imageFile": "9.png",
          "name": "Increase SP Recovery",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Enhance natural SP Recovery.\nMaxSP affects how much SP restoration is\nincreased by this skill. Increases the efficiency\nof SP recovering items for 2% per skill level.\nDescription : Additional SP every 10 seconds while the character is not moving.\nNo SP is restored if normal SP/HP regeneration is not permitted or the character is moving.",
          "levelDetails": [
            {
              "level": 1,
              "text": "(3 + 0.2% of MaxSP)/10 sec"
            },
            {
              "level": 2,
              "text": "(6 + 0.4% of MaxSP)/10 sec"
            },
            {
              "level": 3,
              "text": "(9 + 0.6% of MaxSP)/10 sec"
            },
            {
              "level": 4,
              "text": "(12 + 0.8% of MaxSP)/10 sec"
            },
            {
              "level": 5,
              "text": "(15 + 1.0% of MaxSP)/10 sec"
            },
            {
              "level": 6,
              "text": "(18 + 1.2% of MaxSP)/10 sec"
            },
            {
              "level": 7,
              "text": "(21 + 1.4% of MaxSP)/10 sec"
            },
            {
              "level": 8,
              "text": "(24 + 1.6% of MaxSP)/10 sec"
            },
            {
              "level": 9,
              "text": "(27 + 1.8% of MaxSP)/10 sec"
            },
            {
              "level": 10,
              "text": "(30 + 2.0% of MaxSP)/10 sec"
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
          "iconUrl": "assets/divine-pride/skills/9.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/9",
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
                    "id": "effect",
                    "label": "Effect"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "(3 + 0.2% of Ma x SP)/10 sec",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "(6 + 0.4% of Ma x SP)/10 sec",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "(9 + 0.6% of Ma x SP)/10 sec",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "(12 + 0.8% of Ma x SP)/10 sec",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "(15 + 1.0% of Ma x SP)/10 sec",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "(18 + 1.2% of Ma x SP)/10 sec",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "(21 + 1.4% of Ma x SP)/10 sec",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "(24 + 1.6% of Ma x SP)/10 sec",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "(27 + 1.8% of Ma x SP)/10 sec",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "(30 + 2.0% of Ma x SP)/10 sec",
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
          "id": 15,
          "imageFile": "15.png",
          "name": "Frost diver",
          "maxLevel": 10,
          "prerequisiteText": "Cold Bolt 5",
          "group": "Active",
          "type": "Magic, Debuff",
          "target": "1 Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Inflicts water damage and has\na chance of freezing it's target.\nDescription : inflict Water property magic damage, It has a chance of leaving the target [Abnormal Status : Frozen].\nThe Chance and Duration are affected by target's magic defense and LUK.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 110%, Chance of freezing: 38%"
            },
            {
              "level": 2,
              "text": "MATK 120%, Chance of freezing: 41%"
            },
            {
              "level": 3,
              "text": "MATK 130%, Chance of freezing: 44%"
            },
            {
              "level": 4,
              "text": "MATK 140%, Chance of freezing: 47%"
            },
            {
              "level": 5,
              "text": "MATK 150%, Chance of freezing: 50%"
            },
            {
              "level": 6,
              "text": "MATK 160%, Chance of freezing: 53%"
            },
            {
              "level": 7,
              "text": "MATK 170%, Chance of freezing: 56%"
            },
            {
              "level": 8,
              "text": "MATK 180%, Chance of freezing: 59%"
            },
            {
              "level": 9,
              "text": "MATK 190%, Chance of freezing: 62%"
            },
            {
              "level": 10,
              "text": "MATK 200%, Chance of freezing: 65%"
            }
          ],
          "fixedCastTime": "0.16 seconds",
          "variableCastTime": "0.64 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "0 seconds",
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
                  "value": "24"
                },
                {
                  "level": 3,
                  "value": "23"
                },
                {
                  "level": 4,
                  "value": "22"
                },
                {
                  "level": 5,
                  "value": "21"
                },
                {
                  "level": 6,
                  "value": "20"
                },
                {
                  "level": 7,
                  "value": "19"
                },
                {
                  "level": 8,
                  "value": "18"
                },
                {
                  "level": 9,
                  "value": "17"
                },
                {
                  "level": 10,
                  "value": "16"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/15.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/15",
          "tree": {
            "idx": 9,
            "row": 1,
            "col": 0,
            "columns": 9,
            "requirements": [
              {
                "id": 14,
                "level": 5,
                "name": "Cold Bolt",
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
                "value": "0.16 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "0.64 seconds"
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
                "value": "1 Enemy"
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
                      "base-damage-matk": "110%",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-matk": "120%",
                      "sp-cost": "24"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-matk": "130%",
                      "sp-cost": "23"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-matk": "140%",
                      "sp-cost": "22"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-matk": "150%",
                      "sp-cost": "21"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "base-damage-matk": "160%",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "base-damage-matk": "170%",
                      "sp-cost": "19"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "base-damage-matk": "180%",
                      "sp-cost": "18"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "base-damage-matk": "190%",
                      "sp-cost": "17"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "base-damage-matk": "200%",
                      "sp-cost": "16"
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
          "id": 21,
          "imageFile": "21.png",
          "name": "Thunder storm",
          "maxLevel": 10,
          "prerequisiteText": "Lightning Bolt 4",
          "group": "Active",
          "type": "1 cell on ground",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Each bolt will inflict 100% Wind property magic damage to 5*5cell.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Attack 1time, SP Consumption:29"
            },
            {
              "level": 2,
              "text": "Attack 2times, SP Consumption:34"
            },
            {
              "level": 3,
              "text": "Attack 3times, SP Consumption:39"
            },
            {
              "level": 4,
              "text": "Attack 4times, SP Consumption:44"
            },
            {
              "level": 5,
              "text": "Attack 5times, SP Consumption:49"
            },
            {
              "level": 6,
              "text": "Attack 6times, SP Consumption:54"
            },
            {
              "level": 7,
              "text": "Attack 7times, SP Consumption:59"
            },
            {
              "level": 8,
              "text": "Attack 8times, SP Consumption:64"
            },
            {
              "level": 9,
              "text": "Attack 9times, SP Consumption:69"
            },
            {
              "level": 10,
              "text": "Attack 10times, SP Consumption:74"
            }
          ],
          "fixedCastTime": "1.5 seconds",
          "castDelay": "2 seconds",
          "cooldown": "0 seconds",
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
                  "value": "34"
                },
                {
                  "level": 3,
                  "value": "39"
                },
                {
                  "level": 4,
                  "value": "44"
                },
                {
                  "level": 5,
                  "value": "49"
                },
                {
                  "level": 6,
                  "value": "54"
                },
                {
                  "level": 7,
                  "value": "59"
                },
                {
                  "level": 8,
                  "value": "64"
                },
                {
                  "level": 9,
                  "value": "69"
                },
                {
                  "level": 10,
                  "value": "74"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/21.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/21",
          "tree": {
            "idx": 10,
            "row": 1,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 20,
                "level": 4,
                "name": "Lightning Bolt",
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
                "value": "1.5 seconds"
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
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Attack 1time, SP Consumption:29",
                      "sp-cost": "29"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Attack 2times, SP Consumption:34",
                      "sp-cost": "34"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Attack 3times, SP Consumption:39",
                      "sp-cost": "39"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Attack 4times, SP Consumption:44",
                      "sp-cost": "44"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Attack 5times, SP Consumption:49",
                      "sp-cost": "49"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "Attack 6times, SP Consumption:54",
                      "sp-cost": "54"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "Attack 7times, SP Consumption:59",
                      "sp-cost": "59"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "Attack 8times, SP Consumption:64",
                      "sp-cost": "64"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "Attack 9times, SP Consumption:69",
                      "sp-cost": "69"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "Attack 10times, SP Consumption:74",
                      "sp-cost": "74"
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
          "id": 13,
          "imageFile": "13.png",
          "name": "Soul Strike",
          "maxLevel": 10,
          "prerequisiteText": "Napalm Beat 4",
          "group": "Active",
          "type": "Magic",
          "target": "1 Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Summon holy ghosts to inflict\nGhost property attacks on a target. At level 10,\nthese ghosts will inflict 5 consecutive strikes.\nThis skill has a 0.5 second Cast Delay.\nDescription : Summoning the Ancient Holy Spirit and attacking the enemy directly\nInflict 100% Ghost property magic damage.\nThis skill inflicts additional damage against Undead property entities.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 1time, + 5% dmg to Undead, SP Consumption:18"
            },
            {
              "level": 2,
              "text": "ATK 1time, +10% dmg to Undead, SP Consumption:14"
            },
            {
              "level": 3,
              "text": "ATK 2times, +15% dmg to Undead, SP Consumption:24"
            },
            {
              "level": 4,
              "text": "ATK 2times, +20% dmg to Undead, SP Consumption:20"
            },
            {
              "level": 5,
              "text": "ATK 3times, +25% dmg to Undead, SP Consumption:30"
            },
            {
              "level": 6,
              "text": "ATK 3times, +30% dmg to Undead, SP Consumption:26"
            },
            {
              "level": 7,
              "text": "ATK 4times, +35% dmg to Undead, SP Consumption:36"
            },
            {
              "level": 8,
              "text": "ATK 4times, +40% dmg to Undead, SP Consumption:32"
            },
            {
              "level": 9,
              "text": "ATK 5times, +45% dmg to Undead, SP Consumption:42"
            },
            {
              "level": 10,
              "text": "ATK 5times, +50% dmg to Undead, SP Consumption:38"
            }
          ],
          "fixedCastTime": "0.1 seconds",
          "variableCastTime": "0.4 seconds",
          "castDelay": "1.4 seconds",
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
                  "value": "14"
                },
                {
                  "level": 3,
                  "value": "24"
                },
                {
                  "level": 4,
                  "value": "20"
                },
                {
                  "level": 5,
                  "value": "30"
                },
                {
                  "level": 6,
                  "value": "26"
                },
                {
                  "level": 7,
                  "value": "36"
                },
                {
                  "level": 8,
                  "value": "32"
                },
                {
                  "level": 9,
                  "value": "42"
                },
                {
                  "level": 10,
                  "value": "38"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/13.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/13",
          "tree": {
            "idx": 11,
            "row": 1,
            "col": 2,
            "columns": 9,
            "requirements": [
              {
                "id": 11,
                "level": 4,
                "name": "Napalm Beat",
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
                "value": "0.1 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "0.4 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "1.4 seconds"
              },
              {
                "label": "Cooldown",
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
                      "effect": "ATK 1time, + 5% dmg to Undead, SP Consumption:18",
                      "sp-cost": "18"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "ATK 1time, +10% dmg to Undead, SP Consumption:14",
                      "sp-cost": "14"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "ATK 2times, +15% dmg to Undead, SP Consumption:24",
                      "sp-cost": "24"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "ATK 2times, +20% dmg to Undead, SP Consumption:20",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "ATK 3times, +25% dmg to Undead, SP Consumption:30",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "ATK 3times, +30% dmg to Undead, SP Consumption:26",
                      "sp-cost": "26"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "ATK 4times, +35% dmg to Undead, SP Consumption:36",
                      "sp-cost": "36"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "ATK 4times, +40% dmg to Undead, SP Consumption:32",
                      "sp-cost": "32"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "ATK 5times, +45% dmg to Undead, SP Consumption:42",
                      "sp-cost": "42"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "ATK 5times, +50% dmg to Undead, SP Consumption:38",
                      "sp-cost": "38"
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
          "id": 17,
          "imageFile": "17.png",
          "name": "Fireball",
          "maxLevel": 10,
          "prerequisiteText": "Firebolt 4",
          "group": "Active",
          "type": "Magic",
          "target": "1 Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Shoots a fire ball to inflict Fire property magic damage to all enemies within its area of effect. Damage to Center(3X3cell) and Edge(5X5cell) is different.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Center: MATK 160%, Edge: MATK 120%"
            },
            {
              "level": 2,
              "text": "Center: MATK 180%, Edge: MATK 135%"
            },
            {
              "level": 3,
              "text": "Center: MATK 200%, Edge: MATK 150%"
            },
            {
              "level": 4,
              "text": "Center: MATK 220%, Edge: MATK 165%"
            },
            {
              "level": 5,
              "text": "Center: MATK 240%, Edge: MATK 180%"
            },
            {
              "level": 6,
              "text": "Center: MATK 260%, Edge: MATK 195%"
            },
            {
              "level": 7,
              "text": "Center: MATK 280%, Edge: MATK 210%"
            },
            {
              "level": 8,
              "text": "Center: MATK 300%, Edge: MATK 225%"
            },
            {
              "level": 9,
              "text": "Center: MATK 320%, Edge: MATK 240%"
            },
            {
              "level": 10,
              "text": "Center: MATK 340%, Edge: MATK 255%"
            }
          ],
          "fixedCastTime": "0.2 seconds",
          "variableCastTime": "0.8 seconds",
          "castDelay": "0.7 seconds",
          "cooldown": "0 seconds",
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
          "iconUrl": "assets/divine-pride/skills/17.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/17",
          "tree": {
            "idx": 12,
            "row": 1,
            "col": 3,
            "columns": 9,
            "requirements": [
              {
                "id": 19,
                "level": 4,
                "name": "Fire Bolt",
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
                "value": "0.7 seconds"
              },
              {
                "label": "Cooldown",
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
                      "base-damage-matk": "160%",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-matk": "180%",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-matk": "200%",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-matk": "220%",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-matk": "240%",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "base-damage-matk": "260%",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "base-damage-matk": "280%",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "base-damage-matk": "300%",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "base-damage-matk": "320%",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "base-damage-matk": "340%",
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
          "id": 157,
          "imageFile": "157.png",
          "name": "Energy Coat",
          "maxLevel": 1,
          "prerequisiteText": "Finish Quest",
          "group": "Supportive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Create a barrier of spiritual\nenergy that will buffer attacks at the caster.\nThe caster's remaining SP affects the amount\nof damage reduced by the barrier.\nMore SP is drained as attacks buffered\nby the barrier accumulate.",
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/157.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/157",
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
          "id": 12,
          "imageFile": "12.png",
          "name": "Safety wall",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "Magic, Supportive",
          "target": "cell on ground",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Create a magic barrier on\na targeted spot that will block short range melee\nattacks for the duration of the Safety Wall.\nEach cast requires 1 Blue Gemstone.\nDescription : Creates a wall on a targeted location that blocks every form of close range physical damage until its durability wears off or expires. Each cast consumes a Blue Gemstone.\nINT, Base Level, MaxSP affects durability of defence\nOnly the first time can prevent damage beyond the total durability.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Durability: 300, Number of Defence: 2times"
            },
            {
              "level": 2,
              "text": "Durability: 600, Number of Defence: 3times"
            },
            {
              "level": 3,
              "text": "Durability: 900, Number of Defence: 4times"
            },
            {
              "level": 4,
              "text": "Durability:1200, Number of Defence: 5times"
            },
            {
              "level": 5,
              "text": "Durability:1500, Number of Defence: 6times"
            },
            {
              "level": 6,
              "text": "Durability:1800, Number of Defence: 7times"
            },
            {
              "level": 7,
              "text": "Durability:2100, Number of Defence: 8times"
            },
            {
              "level": 8,
              "text": "Durability:2400, Number of Defence: 9times"
            },
            {
              "level": 9,
              "text": "Durability:2700, Number of Defence:10times"
            },
            {
              "level": 10,
              "text": "Durability:3000, Number of Defence:11times"
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
                  "value": "40"
                },
                {
                  "level": 8,
                  "value": "40"
                },
                {
                  "level": 9,
                  "value": "40"
                },
                {
                  "level": 10,
                  "value": "40"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/12.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/12",
          "tree": {
            "idx": 18,
            "row": 2,
            "col": 0,
            "columns": 9,
            "requirements": [
              {
                "id": 11,
                "level": 7,
                "name": "Napalm Beat",
                "visible": true
              },
              {
                "id": 13,
                "level": 5,
                "name": "Soul Strike",
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
                "value": "cell on ground"
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
                      "effect": "Durability: 300, Number of Defence: 2times",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Durability: 600, Number of Defence: 3times",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Durability: 900, Number of Defence: 4times",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Durability:1200, Number of Defence: 5times",
                      "sp-cost": "35"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Durability:1500, Number of Defence: 6times",
                      "sp-cost": "35"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "Durability:1800, Number of Defence: 7times",
                      "sp-cost": "35"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "Durability:2100, Number of Defence: 8times",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "Durability:2400, Number of Defence: 9times",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "Durability:2700, Number of Defence:10times",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "Durability:3000, Number of Defence:11times",
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
          "id": 18,
          "imageFile": "18.png",
          "name": "Firewall",
          "maxLevel": 10,
          "prerequisiteText": "Sight 1, Fireball 5",
          "group": "Active",
          "type": "1 cell on ground",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Each cast consumes SP40, Creates a wall of flame on a targeted location that will inflict 50% Fire property magic damage and push enemies two cells backwards upon contact.\nUp to three can be installed.",
          "levelDetails": [
            {
              "level": 1,
              "text": "per wall: Attack 3times, Duration: 5sec"
            },
            {
              "level": 2,
              "text": "per wall: Attack 4times, Duration: 6sec"
            },
            {
              "level": 3,
              "text": "per wall: Attack 5times, Duration: 7sec"
            },
            {
              "level": 4,
              "text": "per wall: Attack 6times, Duration: 8sec"
            },
            {
              "level": 5,
              "text": "per wall: Attack 7times, Duration: 9sec"
            },
            {
              "level": 6,
              "text": "per wall: Attack 8times, Duration:10sec"
            },
            {
              "level": 7,
              "text": "per wall: Attack 9times, Duration:11sec"
            },
            {
              "level": 8,
              "text": "per wall:Attack 10times, Duration:12sec"
            },
            {
              "level": 9,
              "text": "per wall:Attack 11times, Duration:13sec"
            },
            {
              "level": 10,
              "text": "per wall:Attack 12times, Duration:14sec"
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
                },
                {
                  "level": 6,
                  "value": "40"
                },
                {
                  "level": 7,
                  "value": "40"
                },
                {
                  "level": 8,
                  "value": "40"
                },
                {
                  "level": 9,
                  "value": "40"
                },
                {
                  "level": 10,
                  "value": "40"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/18.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/18",
          "tree": {
            "idx": 19,
            "row": 2,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 10,
                "level": 1,
                "name": "Sight",
                "visible": true
              },
              {
                "id": 17,
                "level": 5,
                "name": "Fire Ball",
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
                      "effect": "per wall: Attack 3times, Duration: 5sec",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "per wall: Attack 4times, Duration: 6sec",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "per wall: Attack 5times, Duration: 7sec",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "per wall: Attack 6times, Duration: 8sec",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "per wall: Attack 7times, Duration: 9sec",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "per wall: Attack 8times, Duration:10sec",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "per wall: Attack 9times, Duration:11sec",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "per wall:Attack 10times, Duration:12sec",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "per wall:Attack 11times, Duration:13sec",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "per wall:Attack 12times, Duration:14sec",
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
        }
      ]
    }
  ],
  "skills": [
    {
      "id": 5228,
      "imageFile": "5228.png",
      "name": "Two-handed Staff Mastery",
      "maxLevel": 10,
      "prerequisiteText": "basic skill",
      "group": "Passive",
      "type": "",
      "target": "",
      "recoversAp": "",
      "consumesAp": "",
      "description": "Two-handed Staves increase your MATK.",
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
      "iconUrl": "assets/divine-pride/skills/5228.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5228",
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
      "id": 5229,
      "imageFile": "5229.png",
      "name": "Floral Flare Road",
      "maxLevel": 5,
      "prerequisiteText": "Crimson Rock Lv. 3",
      "group": "Active",
      "type": "Magical",
      "target": "1 Ground cell",
      "recoversAp": "",
      "consumesAp": "",
      "description": "Temporarily summon blazing flower petals from the ground in your facing direction, inflicting Fire Magic damage within range.\nIt additionally increases damage, depending on your Base Level and SPL.",
      "levelDetails": [
        {
          "level": 1,
          "text": "MATK 790%, Effective range: 3x3 cells"
        },
        {
          "level": 2,
          "text": "MATK 1530%, Effective range: 5x5 cells"
        },
        {
          "level": 3,
          "text": "MATK 2270%, Effective range: 7x7 cells"
        },
        {
          "level": 4,
          "text": "MATK 3010%, Effective range: 9x9 cells"
        },
        {
          "level": 5,
          "text": "MATK 3750%, Effective range: 11x11 cells"
        }
      ],
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "3 seconds",
      "castDelay": "0.75 seconds",
      "cooldown": "5 seconds",
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
              "value": "76"
            },
            {
              "level": 3,
              "value": "82"
            },
            {
              "level": 4,
              "value": "88"
            },
            {
              "level": 5,
              "value": "94"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5229.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5229",
      "tree": {
        "idx": 3,
        "row": 0,
        "col": 3,
        "columns": 9,
        "requirements": [
          {
            "id": 2211,
            "level": 3,
            "name": "Crimson Rock",
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
            "value": "0.75 seconds"
          },
          {
            "label": "Cooldown",
            "value": "5 seconds"
          },
          {
            "label": "Target",
            "value": "1 Ground cell"
          },
          {
            "label": "Area of Effect",
            "value": "Lv 1: 3 x 3 cells / Lv 2: 5 x 5 cells / Lv 3: 7 x 7 cells / Lv 4: 9 x 9 cells / Lv 5: 11 x 11 cells"
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
                  "base-damage-matk": "790%",
                  "sp-cost": "70"
                }
              },
              {
                "level": 2,
                "values": {
                  "base-damage-matk": "1530%",
                  "sp-cost": "76"
                }
              },
              {
                "level": 3,
                "values": {
                  "base-damage-matk": "2270%",
                  "sp-cost": "82"
                }
              },
              {
                "level": 4,
                "values": {
                  "base-damage-matk": "3010%",
                  "sp-cost": "88"
                }
              },
              {
                "level": 5,
                "values": {
                  "base-damage-matk": "3750%",
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
          "skillName": "Floral Flare Road",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/arch-mage/rebalance_2.md",
          "section": "7.1",
          "notes": [
            "Reduces delay after skill from 0.5 seconds to 0.25 seconds.",
            "Increases SP consumption from 70 to 94 based on level 5.",
            "Increases damage from 1000%Matk to 3750%Matk per hit based on level 5."
          ],
          "specRows": [
            {
              "label": "Cast Delay",
              "before": "0.5 seconds",
              "after": "0.25 seconds",
              "scope": "",
              "source": "Reduces delay after skill from 0.5 seconds to 0.25 seconds."
            },
            {
              "label": "SP Cost",
              "before": "70",
              "after": "94",
              "scope": "Lv 5",
              "source": "Increases SP consumption from 70 to 94 based on level 5."
            },
            {
              "label": "Damage",
              "before": "1000%Matk",
              "after": "3750%Matk per hit",
              "scope": "Lv 5",
              "source": "Increases damage from 1000%Matk to 3750%Matk per hit based on level 5."
            }
          ]
        },
        {
          "skillName": "Floral Flare Road",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/arch-mage/rebalance_4.md",
          "section": "4.2",
          "notes": [
            "Increases global cooldown from 0.25 seconds to 0.75 seconds based on level 5."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "0.25 seconds",
              "after": "0.75 seconds",
              "scope": "Lv 5",
              "source": "Increases global cooldown from 0.25 seconds to 0.75 seconds based on level 5."
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
      "id": 5216,
      "imageFile": "5216.png",
      "name": "Rain Of Crystal",
      "maxLevel": 5,
      "prerequisiteText": "Frost Misty 3",
      "group": "Active",
      "type": "Magic",
      "target": "Instant Cast",
      "recoversAp": "",
      "consumesAp": "",
      "description": "Causes a rain of ice picks to fall around you, dealing water-based magic damage to targets in an area.\nDamage is additionally increased depending on the user's base level and SPL..",
      "levelDetails": [
        {
          "level": 1,
          "text": "MATK 940%/Area of Effect 9x9 Cells"
        },
        {
          "level": 2,
          "text": "MATK 1700%/Area of Effect 9x9 Cells"
        },
        {
          "level": 3,
          "text": "MATK 2460%/Area of Effect 11x11 Cells"
        },
        {
          "level": 4,
          "text": "MATK 3220%/Area of Effect 11x11 Cells"
        },
        {
          "level": 5,
          "text": "MATK 3980%/Area of Effect 13x13 Cells"
        }
      ],
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "3 seconds",
      "castDelay": "0.75 seconds",
      "cooldown": "5 seconds",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "85"
            },
            {
              "level": 2,
              "value": "95"
            },
            {
              "level": 3,
              "value": "105"
            },
            {
              "level": 4,
              "value": "115"
            },
            {
              "level": 5,
              "value": "125"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5216.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5216",
      "tree": {
        "idx": 4,
        "row": 0,
        "col": 4,
        "columns": 9,
        "requirements": [
          {
            "id": 2203,
            "level": 3,
            "name": "Frost Misty",
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
            "value": "0.75 seconds"
          },
          {
            "label": "Cooldown",
            "value": "5 seconds"
          },
          {
            "label": "Target",
            "value": "Instant Cast"
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
                  "area-of-effect": "9x9",
                  "base-damage-matk": "940%",
                  "sp-cost": "85"
                }
              },
              {
                "level": 2,
                "values": {
                  "area-of-effect": "9x9",
                  "base-damage-matk": "1700%",
                  "sp-cost": "95"
                }
              },
              {
                "level": 3,
                "values": {
                  "area-of-effect": "11x11",
                  "base-damage-matk": "2460%",
                  "sp-cost": "105"
                }
              },
              {
                "level": 4,
                "values": {
                  "area-of-effect": "11x11",
                  "base-damage-matk": "3220%",
                  "sp-cost": "115"
                }
              },
              {
                "level": 5,
                "values": {
                  "area-of-effect": "13x13",
                  "base-damage-matk": "3980%",
                  "sp-cost": "125"
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
          "skillName": "Rain of Crystal",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/arch-mage/rebalance_2.md",
          "section": "7.2",
          "notes": [
            "Reduces delay after skill from 0.5 seconds to 0.25 seconds.",
            "Increases SP consumption from 80 to 100 based on level 5.",
            "Increases damage from 750%Matk to 3980%Matk per hit based on level 5."
          ],
          "specRows": [
            {
              "label": "Cast Delay",
              "before": "0.5 seconds",
              "after": "0.25 seconds",
              "scope": "",
              "source": "Reduces delay after skill from 0.5 seconds to 0.25 seconds."
            },
            {
              "label": "SP Cost",
              "before": "80",
              "after": "100",
              "scope": "Lv 5",
              "source": "Increases SP consumption from 80 to 100 based on level 5."
            },
            {
              "label": "Damage",
              "before": "750%Matk",
              "after": "3980%Matk per hit",
              "scope": "Lv 5",
              "source": "Increases damage from 750%Matk to 3980%Matk per hit based on level 5."
            }
          ]
        },
        {
          "skillName": "Rain of Crystal",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/arch-mage/rebalance_3.md",
          "section": "4.1",
          "notes": [
            "Reduces area of effect from 19 x 19 cells to 13 x 13 cells based on level 5.",
            "Increases SP consumption from 100 to 125 based on level 5."
          ],
          "specRows": [
            {
              "label": "Area of Effect",
              "before": "19 x 19 cells",
              "after": "13 x 13 cells",
              "scope": "Lv 5",
              "source": "Reduces area of effect from 19 x 19 cells to 13 x 13 cells based on level 5."
            },
            {
              "label": "SP Cost",
              "before": "100",
              "after": "125",
              "scope": "Lv 5",
              "source": "Increases SP consumption from 100 to 125 based on level 5."
            }
          ]
        },
        {
          "skillName": "Rain of Crystal",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/arch-mage/rebalance_4.md",
          "section": "4.5",
          "notes": [
            "Increases global cooldown from 0.25 seconds to 0.75 seconds based on level 5."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "0.25 seconds",
              "after": "0.75 seconds",
              "scope": "Lv 5",
              "source": "Increases global cooldown from 0.25 seconds to 0.75 seconds based on level 5."
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
      "id": 5227,
      "imageFile": "5227.png",
      "name": "Tornado Storm",
      "maxLevel": 5,
      "prerequisiteText": "Chain Lightning Lv. 3",
      "group": "Active",
      "type": "Magical",
      "target": "1 Ground cell",
      "recoversAp": "",
      "consumesAp": "",
      "description": "Summon a lightning-charged tornado on the selected spot, inflicting Wind Magic damage on targets within range.\nIt additionally increases damage, depending on your Base Level and SPL.",
      "levelDetails": [
        {
          "level": 1,
          "text": "MATK 860%/Effective range: 5x5 cells"
        },
        {
          "level": 2,
          "text": "MATK 1620%/Effective range: 5x5 cells"
        },
        {
          "level": 3,
          "text": "MATK 2380%/Effective range: 7x7 cells"
        },
        {
          "level": 4,
          "text": "MATK 3140%/Effective range: 7x7 cells"
        },
        {
          "level": 5,
          "text": "MATK 3900%/Effective range: 9x9 cells"
        }
      ],
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "3 seconds",
      "castDelay": "0.75 seconds",
      "cooldown": "5 seconds",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "78"
            },
            {
              "level": 2,
              "value": "82"
            },
            {
              "level": 3,
              "value": "86"
            },
            {
              "level": 4,
              "value": "90"
            },
            {
              "level": 5,
              "value": "94"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5227.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5227",
      "tree": {
        "idx": 5,
        "row": 0,
        "col": 5,
        "columns": 9,
        "requirements": [
          {
            "id": 2214,
            "level": 3,
            "name": "Chain Lightning",
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
            "value": "0.75 seconds"
          },
          {
            "label": "Cooldown",
            "value": "5 seconds"
          },
          {
            "label": "Target",
            "value": "1 Ground cell"
          },
          {
            "label": "Area of Effect",
            "value": "Lv 1: 5 x 5 cells / Lv 2: 5 x 5 cells / Lv 3: 7 x 7 cells / Lv 4: 7 x 7 cells / Lv 5: 9 x 9 cells"
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
                  "base-damage-matk": "860%",
                  "sp-cost": "78"
                }
              },
              {
                "level": 2,
                "values": {
                  "base-damage-matk": "1620%",
                  "sp-cost": "82"
                }
              },
              {
                "level": 3,
                "values": {
                  "base-damage-matk": "2380%",
                  "sp-cost": "86"
                }
              },
              {
                "level": 4,
                "values": {
                  "base-damage-matk": "3140%",
                  "sp-cost": "90"
                }
              },
              {
                "level": 5,
                "values": {
                  "base-damage-matk": "3900%",
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
          "skillName": "Tornado Storm",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/arch-mage/rebalance_2.md",
          "section": "7.3",
          "notes": [
            "Reduces delay after skill from 0.5 seconds to 0.25 seconds.",
            "Increases SP consumption from 75 to 94 based on level 5.",
            "Increases damage from 450%Matk to 3900%Matk per hit based on level 5."
          ],
          "specRows": [
            {
              "label": "Cast Delay",
              "before": "0.5 seconds",
              "after": "0.25 seconds",
              "scope": "",
              "source": "Reduces delay after skill from 0.5 seconds to 0.25 seconds."
            },
            {
              "label": "SP Cost",
              "before": "75",
              "after": "94",
              "scope": "Lv 5",
              "source": "Increases SP consumption from 75 to 94 based on level 5."
            },
            {
              "label": "Damage",
              "before": "450%Matk",
              "after": "3900%Matk per hit",
              "scope": "Lv 5",
              "source": "Increases damage from 450%Matk to 3900%Matk per hit based on level 5."
            }
          ]
        },
        {
          "skillName": "Tornado Storm",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/arch-mage/rebalance_4.md",
          "section": "4.3",
          "notes": [
            "Increases global cooldown from 0.25 seconds to 0.75 seconds based on level 5."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "0.25 seconds",
              "after": "0.75 seconds",
              "scope": "Lv 5",
              "source": "Increases global cooldown from 0.25 seconds to 0.75 seconds based on level 5."
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
      "id": 5221,
      "imageFile": "5221.png",
      "name": "Strantum Tremor",
      "maxLevel": 5,
      "prerequisiteText": "Sienna Execrate Lv. 3",
      "group": "Active",
      "type": "Magical",
      "target": "1 Ground cell",
      "recoversAp": "",
      "consumesAp": "",
      "description": "Shake the ground, inflicting Earth Magic damage on targets within range.\nIt additionally increases damage, depending on your Base Level and SPL.",
      "levelDetails": [
        {
          "level": 1,
          "text": "MATK 830%/Effective range: 5x5 cells"
        },
        {
          "level": 2,
          "text": "MATK 1560%/Effective range: 5x5 cells"
        },
        {
          "level": 3,
          "text": "MATK 2290%/Effective range: 7x7 cells"
        },
        {
          "level": 4,
          "text": "MATK 3020%/Effective range: 7x7 cells"
        },
        {
          "level": 5,
          "text": "MATK 3750%/Effective range: 9x9 cells"
        }
      ],
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "3 seconds",
      "castDelay": "0.75 seconds",
      "cooldown": "4 seconds",
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
              "value": "79"
            },
            {
              "level": 3,
              "value": "84"
            },
            {
              "level": 4,
              "value": "89"
            },
            {
              "level": 5,
              "value": "94"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5221.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5221",
      "tree": {
        "idx": 6,
        "row": 0,
        "col": 6,
        "columns": 9,
        "requirements": [
          {
            "id": 2207,
            "level": 3,
            "name": "Sienna Execrate",
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
            "value": "0.75 seconds"
          },
          {
            "label": "Cooldown",
            "value": "4 seconds"
          },
          {
            "label": "Target",
            "value": "1 Ground cell"
          },
          {
            "label": "Area of Effect",
            "value": "Lv 1: 5 x 5 cells / Lv 2: 5 x 5 cells / Lv 3: 7 x 7 cells / Lv 4: 7 x 7 cells / Lv 5: 9 x 9 cells"
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
                  "base-damage-matk": "830%",
                  "sp-cost": "74"
                }
              },
              {
                "level": 2,
                "values": {
                  "base-damage-matk": "1560%",
                  "sp-cost": "79"
                }
              },
              {
                "level": 3,
                "values": {
                  "base-damage-matk": "2290%",
                  "sp-cost": "84"
                }
              },
              {
                "level": 4,
                "values": {
                  "base-damage-matk": "3020%",
                  "sp-cost": "89"
                }
              },
              {
                "level": 5,
                "values": {
                  "base-damage-matk": "3750%",
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
          "skillName": "Stratum Tremor",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/arch-mage/rebalance_2.md",
          "section": "7.4",
          "notes": [
            "Reduces delay after skill from 0.5 seconds to 0.25 seconds.",
            "Increases SP consumption from 75 to 94 based on level 5.",
            "Increases damage from 1250%Matk to 3750%Matk per hit based on level 5."
          ],
          "specRows": [
            {
              "label": "Cast Delay",
              "before": "0.5 seconds",
              "after": "0.25 seconds",
              "scope": "",
              "source": "Reduces delay after skill from 0.5 seconds to 0.25 seconds."
            },
            {
              "label": "SP Cost",
              "before": "75",
              "after": "94",
              "scope": "Lv 5",
              "source": "Increases SP consumption from 75 to 94 based on level 5."
            },
            {
              "label": "Damage",
              "before": "1250%Matk",
              "after": "3750%Matk per hit",
              "scope": "Lv 5",
              "source": "Increases damage from 1250%Matk to 3750%Matk per hit based on level 5."
            }
          ]
        },
        {
          "skillName": "Stratum Tremor",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/arch-mage/rebalance_4.md",
          "section": "4.4",
          "notes": [
            "Increases global cooldown from 0.25 seconds to 0.75 seconds based on level 5."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "0.25 seconds",
              "after": "0.75 seconds",
              "scope": "Lv 5",
              "source": "Increases global cooldown from 0.25 seconds to 0.75 seconds based on level 5."
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
      "id": 5220,
      "imageFile": "5220.png",
      "name": "Soul Vulcan Strike",
      "maxLevel": 5,
      "prerequisiteText": "Soul Expansion Lv. 5 and Two-handed Staff Mastery Lv. 3",
      "group": "Active",
      "type": "Magical",
      "target": "1 Target",
      "recoversAp": "",
      "consumesAp": "",
      "description": "Repeatedly cast a powerful Soul Strike at a target and others around it.\nIt additionally increases damage, depending on your Base Level and SPL.",
      "levelDetails": [
        {
          "level": 1,
          "text": "MATK 250%/Attack 3 times/Effective range: 3x3 cells"
        },
        {
          "level": 2,
          "text": "MATK 500%/Attack 4 times/Effective range: 5x5 cells"
        },
        {
          "level": 3,
          "text": "MATK 750%/Attack 5 times/Effective range: 7x7 cells"
        },
        {
          "level": 4,
          "text": "MATK 1000%/Attack 6 times/Effective range: 9x9 cells"
        },
        {
          "level": 5,
          "text": "MATK 1250%/Attack 7 times/Effective range: 11x11 cells"
        }
      ],
      "fixedCastTime": "1 second",
      "variableCastTime": "3 seconds",
      "castDelay": "0.5 seconds",
      "cooldown": "0.7 seconds",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "90"
            },
            {
              "level": 2,
              "value": "95"
            },
            {
              "level": 3,
              "value": "100"
            },
            {
              "level": 4,
              "value": "105"
            },
            {
              "level": 5,
              "value": "110"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5220.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5220",
      "tree": {
        "idx": 7,
        "row": 0,
        "col": 7,
        "columns": 9,
        "requirements": [
          {
            "id": 2202,
            "level": 5,
            "name": "Soul Expansion",
            "visible": false
          },
          {
            "id": 5228,
            "level": 3,
            "name": "Two-handed Staff Mastery",
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
            "value": "3 seconds"
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
            "value": "1 Target"
          },
          {
            "label": "Area of Effect",
            "value": "Lv 1: 3 x 3 cells / Lv 2: 5 x 5 cells / Lv 3: 7 x 7 cells / Lv 4: 9 x 9 cells / Lv 5: 11 x 11 cells"
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
                  "base-damage-matk": "250%",
                  "sp-cost": "90"
                }
              },
              {
                "level": 2,
                "values": {
                  "base-damage-matk": "500%",
                  "sp-cost": "95"
                }
              },
              {
                "level": 3,
                "values": {
                  "base-damage-matk": "750%",
                  "sp-cost": "100"
                }
              },
              {
                "level": 4,
                "values": {
                  "base-damage-matk": "1000%",
                  "sp-cost": "105"
                }
              },
              {
                "level": 5,
                "values": {
                  "base-damage-matk": "1250%",
                  "sp-cost": "110"
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
          "skillName": "Soul Vulcan Strike",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/arch-mage/rebalance_2.md",
          "section": "7.15",
          "notes": [
            "Reduces SP consumption from 120 to 110 based on level 5.",
            "Increases damage from 900%Matk to 1250%Matk per hit based on level 5."
          ],
          "specRows": [
            {
              "label": "SP Cost",
              "before": "120",
              "after": "110",
              "scope": "Lv 5",
              "source": "Reduces SP consumption from 120 to 110 based on level 5."
            },
            {
              "label": "Damage",
              "before": "900%Matk",
              "after": "1250%Matk per hit",
              "scope": "Lv 5",
              "source": "Increases damage from 900%Matk to 1250%Matk per hit based on level 5."
            }
          ]
        },
        {
          "skillName": "Soul Vulcan Strike",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/arch-mage/rebalance_4.md",
          "section": "4.12",
          "notes": [
            "Increases base damage from 1250%Matk to 1500%Matk per hit based on level 5."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "1250%Matk",
              "after": "1500%Matk per hit",
              "scope": "Lv 5",
              "source": "Increases base damage from 1250%Matk to 1500%Matk per hit based on level 5."
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
      "id": 5232,
      "imageFile": "5232.png",
      "name": "Climax",
      "maxLevel": 5,
      "prerequisiteText": "Tetra Vortex Lv. 5 and Two-handed Staff Mastery Lv. 3",
      "group": "Active (AP)",
      "type": "Magic",
      "target": "Self",
      "recoversAp": "",
      "consumesAp": "",
      "description": "Create special effects with certain magic you use for 300 seconds.\nDifferent effects are added, depending on the skill level.",
      "levelDetails": [],
      "variableCastTime": "0 seconds",
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
      "iconUrl": "assets/divine-pride/skills/5232.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5232",
      "tree": {
        "idx": 9,
        "row": 1,
        "col": 0,
        "columns": 9,
        "requirements": [
          {
            "id": 2217,
            "level": 5,
            "name": "Tetra Vortex",
            "visible": false
          },
          {
            "id": 5228,
            "level": 3,
            "name": "Two-handed Staff Mastery",
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
            "value": "5"
          },
          {
            "label": "Variable Cast Time",
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
      "irowikiUrl": "",
      "balanceNotes": [
        {
          "skillName": "Climax",
          "versionId": "rebalance-1",
          "versionLabel": "Rebalance 1",
          "file": "rebalances/arch-mage/rebalance_1.md",
          "section": "7.5",
          "notes": [
            "Reduces AP consumption from 200 to 150."
          ],
          "specRows": [
            {
              "label": "AP Consumed",
              "before": "200",
              "after": "150",
              "scope": "",
              "source": "Reduces AP consumption from 200 to 150."
            }
          ]
        },
        {
          "skillName": "Climax",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/arch-mage/rebalance_4.md",
          "section": "4.1",
          "notes": [
            "Reduces AP consumption from 150 to 125.",
            "Reduces skill cooldown from 300 seconds to 60 seconds."
          ],
          "specRows": [
            {
              "label": "AP Consumed",
              "before": "150",
              "after": "125",
              "scope": "",
              "source": "Reduces AP consumption from 150 to 125."
            },
            {
              "label": "Cooldown",
              "before": "300 seconds",
              "after": "60 seconds",
              "scope": "",
              "source": "Reduces skill cooldown from 300 seconds to 60 seconds."
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
      "id": 5235,
      "imageFile": "5235.png",
      "name": "Crimson Arrow",
      "maxLevel": 5,
      "prerequisiteText": "Floral Flare Road 1",
      "group": "Active",
      "type": "Magic",
      "target": "Single Target",
      "recoversAp": "2",
      "consumesAp": "",
      "description": "Shoots a flame arrow at the target, inflicting fire attribute magic damage in a straight line from the caster to the target, and the flame arrow hitting the target explodes, inflicting fire attribute magic damage to surrounding targets.\nDamage is additionally increased depending on the user's base level and SPL.\nIf there is a climax effect, the fire attribute magic damage from the explosion of the flame arrow is divided into two attacks, but is applied as two attacks (regardless of the climax level).",
      "levelDetails": [
        {
          "level": 1,
          "text": "MATK 350%(Straight Line)/700%(Explosion/Area of Effect 5x5 Cells)"
        },
        {
          "level": 2,
          "text": "MATK 700%(Straight Line)/1400%(Explosion/Area of Effect 5x5 Cells)"
        },
        {
          "level": 3,
          "text": "MATK 1050%(Straight Line)/2100%(Explosion/Area of Effect 5x5 Cells)"
        },
        {
          "level": 4,
          "text": "MATK 1400%(Straight Line)/2800%(Explosion/Area of Effect 7x7 Cells)"
        },
        {
          "level": 5,
          "text": "MATK 1750%(Straight Line)/3500%(Explosion/Area of Effect 7x7 Cells)"
        }
      ],
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "4 seconds",
      "castDelay": "0.5 seconds",
      "cooldown": "0.3 seconds",
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
      "iconUrl": "assets/divine-pride/skills/5235.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5235",
      "tree": {
        "idx": 10,
        "row": 1,
        "col": 1,
        "columns": 9,
        "requirements": [
          {
            "id": 5229,
            "level": 1,
            "name": "Floral Flare Road",
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
            "value": "4 seconds"
          },
          {
            "label": "Cast Delay",
            "value": "0.5 seconds"
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
                  "base-damage-matk": "350%",
                  "sp-cost": "74"
                }
              },
              {
                "level": 2,
                "values": {
                  "area-of-effect": "5x5",
                  "base-damage-matk": "700%",
                  "sp-cost": "78"
                }
              },
              {
                "level": 3,
                "values": {
                  "area-of-effect": "5x5",
                  "base-damage-matk": "1050%",
                  "sp-cost": "82"
                }
              },
              {
                "level": 4,
                "values": {
                  "area-of-effect": "7x7",
                  "base-damage-matk": "1400%",
                  "sp-cost": "86"
                }
              },
              {
                "level": 5,
                "values": {
                  "area-of-effect": "7x7",
                  "base-damage-matk": "1750%",
                  "sp-cost": "90"
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
          "skillName": "Crimson Arrow",
          "versionId": "rebalance-1",
          "versionLabel": "Rebalance 1",
          "file": "rebalances/arch-mage/rebalance_1.md",
          "section": "7.2",
          "notes": [
            "Reduces cooldown from 4 seconds to 0.3 seconds based on level 5.",
            "Reduces delay after skill from 1 second to 0.5 seconds based on level 5.",
            "Reduces AP recovery rate from 4 to 1.",
            "Increases damage of the secondary attack that deal damage to the target and surrounding enemies around the target from 2000%Matk to 3000%Matk based on level 5.",
            "If using the skill while under Climax buff, the secondary attack damage will be doubled.",
            "Increases area of effect of the secondary attack from 5x5 cells to 7x7 cells based on level 5."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "4 seconds",
              "after": "0.3 seconds",
              "scope": "Lv 5",
              "source": "Reduces cooldown from 4 seconds to 0.3 seconds based on level 5."
            },
            {
              "label": "Cast Delay",
              "before": "1 second",
              "after": "0.5 seconds",
              "scope": "Lv 5",
              "source": "Reduces delay after skill from 1 second to 0.5 seconds based on level 5."
            },
            {
              "label": "AP Generated",
              "before": "4",
              "after": "1",
              "scope": "",
              "source": "Reduces AP recovery rate from 4 to 1."
            },
            {
              "label": "Damage Of The Secondary Attack That Deal Damage To The Target And Surrounding Enemies Around The Target",
              "before": "2000%Matk",
              "after": "3000%Matk",
              "scope": "Lv 5",
              "source": "Increases damage of the secondary attack that deal damage to the target and surrounding enemies around the target from 2000%Matk to 3000%Matk based on level 5."
            },
            {
              "label": "Area of Effect",
              "before": "5 x 5 cells",
              "after": "7 x 7 cells",
              "scope": "Lv 5",
              "source": "Increases area of effect of the secondary attack from 5x5 cells to 7x7 cells based on level 5."
            }
          ]
        },
        {
          "skillName": "Crimson Arrow",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/arch-mage/rebalance_2.md",
          "section": "7.5",
          "notes": [
            "Reduces SP consumption from 105 to 94 based on level 5.",
            "Increases AP recovery rate from 1 to 2."
          ],
          "specRows": [
            {
              "label": "SP Cost",
              "before": "105",
              "after": "94",
              "scope": "Lv 5",
              "source": "Reduces SP consumption from 105 to 94 based on level 5."
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
          "skillName": "Crimson Arrow",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/arch-mage/rebalance_3.md",
          "section": "4.2",
          "notes": [
            "Reduces SP consumption from 94 to 90 based on level 5.",
            "Increases base damage of linear damage from 1500%Matk to 1750%Matk based on level 5.",
            "Increases base damage of explosion damage from 3000%Matk to 3500%Matk based on level 5."
          ],
          "specRows": [
            {
              "label": "SP Cost",
              "before": "94",
              "after": "90",
              "scope": "Lv 5",
              "source": "Reduces SP consumption from 94 to 90 based on level 5."
            },
            {
              "label": "Damage",
              "before": "1500%Matk",
              "after": "1750%Matk",
              "scope": "Lv 5",
              "source": "Increases base damage of linear damage from 1500%Matk to 1750%Matk based on level 5."
            },
            {
              "label": "Damage",
              "before": "3000%Matk",
              "after": "3500%Matk",
              "scope": "Lv 5",
              "source": "Increases base damage of explosion damage from 3000%Matk to 3500%Matk based on level 5."
            }
          ]
        },
        {
          "skillName": "Crimson Arrow",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/arch-mage/rebalance_4.md",
          "section": "4.6",
          "notes": [
            "Increases base damage from 1750%/3500%Matk to 2000%/3750%Matk based on level 5."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "1750%/3500%Matk",
              "after": "2000%/3750%Matk",
              "scope": "Lv 5",
              "source": "Increases base damage from 1750%/3500%Matk to 2000%/3750%Matk based on level 5."
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
      "id": 5237,
      "imageFile": "5237.png",
      "name": "Frozen Slash",
      "maxLevel": 5,
      "prerequisiteText": "Rain of Crystal 1",
      "group": "Active",
      "type": "Magic",
      "target": "Instant Cast",
      "recoversAp": "2",
      "consumesAp": "",
      "description": "Inflicts water magic damage to targets within the range around the caster with sharp ice.\nDamage is additionally increased depending on the user's base level and SPL.\nIf a climax effect active, greater damage is inflicted (regardless of the climax level).",
      "levelDetails": [
        {
          "level": 1,
          "text": "MATK 1300%/1800%(Climax)/Area of Effect 9x9 Cells"
        },
        {
          "level": 2,
          "text": "MATK 2200%/3050%(Climax)/Area of Effect 9x9 Cells"
        },
        {
          "level": 3,
          "text": "MATK 3100%/4300%(Climax)/Area of Effect 11x11 Cells"
        },
        {
          "level": 4,
          "text": "MATK 4000%/5550%(Climax)/Area of Effect 11x11 Cells"
        },
        {
          "level": 5,
          "text": "MATK 4900%/6800%(Climax)/Area of Effect 13x13 Cells"
        }
      ],
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "4 seconds",
      "castDelay": "0.5 seconds",
      "cooldown": "0.45 seconds",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "103"
            },
            {
              "level": 2,
              "value": "106"
            },
            {
              "level": 3,
              "value": "109"
            },
            {
              "level": 4,
              "value": "112"
            },
            {
              "level": 5,
              "value": "115"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5237.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5237",
      "tree": {
        "idx": 11,
        "row": 1,
        "col": 2,
        "columns": 9,
        "requirements": [
          {
            "id": 5216,
            "level": 1,
            "name": "Crystal Rain",
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
            "value": "4 seconds"
          },
          {
            "label": "Cast Delay",
            "value": "0.5 seconds"
          },
          {
            "label": "Cooldown",
            "value": "0.45 seconds"
          },
          {
            "label": "Target",
            "value": "Instant Cast"
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
                  "area-of-effect": "9x9",
                  "base-damage-matk": "1300%",
                  "sp-cost": "103"
                }
              },
              {
                "level": 2,
                "values": {
                  "area-of-effect": "9x9",
                  "base-damage-matk": "2200%",
                  "sp-cost": "106"
                }
              },
              {
                "level": 3,
                "values": {
                  "area-of-effect": "11x11",
                  "base-damage-matk": "3100%",
                  "sp-cost": "109"
                }
              },
              {
                "level": 4,
                "values": {
                  "area-of-effect": "11x11",
                  "base-damage-matk": "4000%",
                  "sp-cost": "112"
                }
              },
              {
                "level": 5,
                "values": {
                  "area-of-effect": "13x13",
                  "base-damage-matk": "4900%",
                  "sp-cost": "115"
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
          "skillName": "Frozen Slash",
          "versionId": "rebalance-1",
          "versionLabel": "Rebalance 1",
          "file": "rebalances/arch-mage/rebalance_1.md",
          "section": "7.3",
          "notes": [
            "Reduces cooldown from 4 seconds to 0.3 seconds based on level 5.",
            "Reduces delay after skill from 1 second to 0.5 seconds based on level 5.",
            "Reduces AP recovery rate from 4 to 1.",
            "Increases area of effect from 9x9 cells to 13x13 cells based on level 5.",
            "Reduces damage from 3750%Matk to 3000%Matk based on level 5.",
            "Increases damage while under Climax buff to 4250%Matk."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "4 seconds",
              "after": "0.3 seconds",
              "scope": "Lv 5",
              "source": "Reduces cooldown from 4 seconds to 0.3 seconds based on level 5."
            },
            {
              "label": "Cast Delay",
              "before": "1 second",
              "after": "0.5 seconds",
              "scope": "Lv 5",
              "source": "Reduces delay after skill from 1 second to 0.5 seconds based on level 5."
            },
            {
              "label": "AP Generated",
              "before": "4",
              "after": "1",
              "scope": "",
              "source": "Reduces AP recovery rate from 4 to 1."
            },
            {
              "label": "Area of Effect",
              "before": "9 x 9 cells",
              "after": "13 x 13 cells",
              "scope": "Lv 5",
              "source": "Increases area of effect from 9x9 cells to 13x13 cells based on level 5."
            },
            {
              "label": "Damage",
              "before": "3750%Matk",
              "after": "3000%Matk",
              "scope": "Lv 5",
              "source": "Reduces damage from 3750%Matk to 3000%Matk based on level 5."
            }
          ]
        },
        {
          "skillName": "Frozen Slash",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/arch-mage/rebalance_2.md",
          "section": "7.6",
          "notes": [
            "Increases cooldown from 0.3 seconds to 0.45 seconds.",
            "Increases SP consumption from 85 to 96 based on level 5.",
            "Increases AP recovery rate from 1 to 2.",
            "Increases damage from 3000%/4250%(Climax)Matk to 4750%/6650%(Climax)Matk based on level 5."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "0.3 seconds",
              "after": "0.45 seconds",
              "scope": "",
              "source": "Increases cooldown from 0.3 seconds to 0.45 seconds."
            },
            {
              "label": "SP Cost",
              "before": "85",
              "after": "96",
              "scope": "Lv 5",
              "source": "Increases SP consumption from 85 to 96 based on level 5."
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
              "before": "3000%/4250%(Clima x )Matk",
              "after": "4750%/6650%(Clima x )Matk",
              "scope": "Lv 5",
              "source": "Increases damage from 3000%/4250%(Climax)Matk to 4750%/6650%(Climax)Matk based on level 5."
            }
          ]
        },
        {
          "skillName": "Frozen Slash",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/arch-mage/rebalance_3.md",
          "section": "4.4",
          "notes": [
            "Increases SP consumption from 96 to 115 based on level 5.",
            "Increases base damage from 4750%/6650%Matk to 4900%/6800%Matk based on level 5."
          ],
          "specRows": [
            {
              "label": "SP Cost",
              "before": "96",
              "after": "115",
              "scope": "Lv 5",
              "source": "Increases SP consumption from 96 to 115 based on level 5."
            },
            {
              "label": "Damage",
              "before": "4750%/6650%Matk",
              "after": "4900%/6800%Matk",
              "scope": "Lv 5",
              "source": "Increases base damage from 4750%/6650%Matk to 4900%/6800%Matk based on level 5."
            }
          ]
        },
        {
          "skillName": "Frozen Slash",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/arch-mage/rebalance_4.md",
          "section": "4.9",
          "notes": [
            "Increases base damage from 4900%/6800%(Climax)Matk to 5200%/7100%(Climax)Matk based on level 5."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "4900%/6800%(Clima x )Matk",
              "after": "5200%/7100%(Clima x )Matk",
              "scope": "Lv 5",
              "source": "Increases base damage from 4900%/6800%(Climax)Matk to 5200%/7100%(Climax)Matk based on level 5."
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
      "id": 5234,
      "imageFile": "5234.png",
      "name": "Storm Cannon",
      "maxLevel": 5,
      "prerequisiteText": "Tornado Storm 1",
      "group": "Active",
      "type": "Magic",
      "target": "Single Target",
      "recoversAp": "2",
      "consumesAp": "",
      "description": "Shoots a vortex of wind in a straight line to the target, inflicting wind attribute magic damage to the target within the range.\nDamage is additionally increased depending on the user's base level and SPL.\nIf a climax effect active, greater damage is inflicted (regardless of the climax level).",
      "levelDetails": [
        {
          "level": 1,
          "text": "MATK 1200%/1500%(Climax)"
        },
        {
          "level": 2,
          "text": "MATK 2400%/3000%(Climax)"
        },
        {
          "level": 3,
          "text": "MATK 3600%/4500%(Climax)"
        },
        {
          "level": 4,
          "text": "MATK 4800%/6000%(Climax)"
        },
        {
          "level": 5,
          "text": "MATK 6000%/7500%(Climax)"
        }
      ],
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "4 seconds",
      "castDelay": "0.5 seconds",
      "cooldown": "0.3 seconds",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "76"
            },
            {
              "level": 2,
              "value": "79"
            },
            {
              "level": 3,
              "value": "82"
            },
            {
              "level": 4,
              "value": "85"
            },
            {
              "level": 5,
              "value": "88"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5234.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5234",
      "tree": {
        "idx": 12,
        "row": 1,
        "col": 3,
        "columns": 9,
        "requirements": [
          {
            "id": 5227,
            "level": 1,
            "name": "Tornado Storm",
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
            "value": "4 seconds"
          },
          {
            "label": "Cast Delay",
            "value": "0.5 seconds"
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
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "base-damage-matk": "1200%",
                  "sp-cost": "76"
                }
              },
              {
                "level": 2,
                "values": {
                  "base-damage-matk": "2400%",
                  "sp-cost": "79"
                }
              },
              {
                "level": 3,
                "values": {
                  "base-damage-matk": "3600%",
                  "sp-cost": "82"
                }
              },
              {
                "level": 4,
                "values": {
                  "base-damage-matk": "4800%",
                  "sp-cost": "85"
                }
              },
              {
                "level": 5,
                "values": {
                  "base-damage-matk": "6000%",
                  "sp-cost": "88"
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
          "skillName": "Storm Cannon",
          "versionId": "rebalance-1",
          "versionLabel": "Rebalance 1",
          "file": "rebalances/arch-mage/rebalance_1.md",
          "section": "7.4",
          "notes": [
            "Reduces cooldown from 4 seconds to 0.3 seconds based on level 5.",
            "Reduces delay after skill from 1 second to 0.5 seconds based on level 5.",
            "Reduces AP recovery rate from 4 to 1.",
            "Increases damage while under Climax buff to 4250%Matk."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "4 seconds",
              "after": "0.3 seconds",
              "scope": "Lv 5",
              "source": "Reduces cooldown from 4 seconds to 0.3 seconds based on level 5."
            },
            {
              "label": "Cast Delay",
              "before": "1 second",
              "after": "0.5 seconds",
              "scope": "Lv 5",
              "source": "Reduces delay after skill from 1 second to 0.5 seconds based on level 5."
            },
            {
              "label": "AP Generated",
              "before": "4",
              "after": "1",
              "scope": "",
              "source": "Reduces AP recovery rate from 4 to 1."
            }
          ]
        },
        {
          "skillName": "Storm Cannon",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/arch-mage/rebalance_2.md",
          "section": "7.7",
          "notes": [
            "Reduces SP consumption from 100 to 94 based on level 5.",
            "Increases AP recovery rate from 1 to 2.",
            "Increases damage from 3000%/4250%(Climax)Matk to 4750%/6250%(Climax)Matk based on level 5."
          ],
          "specRows": [
            {
              "label": "SP Cost",
              "before": "100",
              "after": "94",
              "scope": "Lv 5",
              "source": "Reduces SP consumption from 100 to 94 based on level 5."
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
              "before": "3000%/4250%(Clima x )Matk",
              "after": "4750%/6250%(Clima x )Matk",
              "scope": "Lv 5",
              "source": "Increases damage from 3000%/4250%(Climax)Matk to 4750%/6250%(Climax)Matk based on level 5."
            }
          ]
        },
        {
          "skillName": "Storm Cannon",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/arch-mage/rebalance_3.md",
          "section": "4.3",
          "notes": [
            "Reduces SP consumption from 94 to 88 based on level 5.",
            "Increases base damage from 4750%/6250%Matk to 6000%/7500%Matk based on level 5."
          ],
          "specRows": [
            {
              "label": "SP Cost",
              "before": "94",
              "after": "88",
              "scope": "Lv 5",
              "source": "Reduces SP consumption from 94 to 88 based on level 5."
            },
            {
              "label": "Damage",
              "before": "4750%/6250%Matk",
              "after": "6000%/7500%Matk",
              "scope": "Lv 5",
              "source": "Increases base damage from 4750%/6250%Matk to 6000%/7500%Matk based on level 5."
            }
          ]
        },
        {
          "skillName": "Storm Cannon",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/arch-mage/rebalance_4.md",
          "section": "4.7",
          "notes": [
            "Increases base damage from 6000%/7500%(Climax)Matk to 7750%/9250%(Climax)Matk based on level 5."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "6000%/7500%(Clima x )Matk",
              "after": "7750%/9250%(Clima x )Matk",
              "scope": "Lv 5",
              "source": "Increases base damage from 6000%/7500%(Climax)Matk to 7750%/9250%(Climax)Matk based on level 5."
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
      "id": 5233,
      "imageFile": "5233.png",
      "name": "Rock Down",
      "maxLevel": 5,
      "prerequisiteText": "Stratum Tremor 1",
      "group": "Active",
      "type": "Magic",
      "target": "Single Target",
      "recoversAp": "2",
      "consumesAp": "",
      "description": "Drops a large rock on the target and Inflict Earth magical damage to the target and surrounding enemies.\nDamage is additionally increased depending on the user's base level and SPL.\nIf a climax effect active, greater damage is inflicted (regardless of the climax level).",
      "levelDetails": [
        {
          "level": 1,
          "text": "MATK 1200%/1500%(Climax)/Area of Effect 5x5 Cells"
        },
        {
          "level": 2,
          "text": "MATK 2400%/3000%(Climax)/Area of Effect 5x5 Cells"
        },
        {
          "level": 3,
          "text": "MATK 3600%/4500%(Climax)/Area of Effect 5x5 Cells"
        },
        {
          "level": 4,
          "text": "MATK 4800%/6000%(Climax)/Area of Effect 7x7 Cells"
        },
        {
          "level": 5,
          "text": "MATK 6000%/7500%(Climax)/Area of Effect 7x7 Cells"
        }
      ],
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "4 seconds",
      "castDelay": "0.5 seconds",
      "cooldown": "0.3 seconds",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "72"
            },
            {
              "level": 2,
              "value": "76"
            },
            {
              "level": 3,
              "value": "80"
            },
            {
              "level": 4,
              "value": "84"
            },
            {
              "level": 5,
              "value": "88"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5233.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5233",
      "tree": {
        "idx": 13,
        "row": 1,
        "col": 4,
        "columns": 9,
        "requirements": [
          {
            "id": 5221,
            "level": 1,
            "name": "Stratum Tremor",
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
            "value": "4 seconds"
          },
          {
            "label": "Cast Delay",
            "value": "0.5 seconds"
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
                  "base-damage-matk": "1200%",
                  "sp-cost": "72"
                }
              },
              {
                "level": 2,
                "values": {
                  "area-of-effect": "5x5",
                  "base-damage-matk": "2400%",
                  "sp-cost": "76"
                }
              },
              {
                "level": 3,
                "values": {
                  "area-of-effect": "5x5",
                  "base-damage-matk": "3600%",
                  "sp-cost": "80"
                }
              },
              {
                "level": 4,
                "values": {
                  "area-of-effect": "7x7",
                  "base-damage-matk": "4800%",
                  "sp-cost": "84"
                }
              },
              {
                "level": 5,
                "values": {
                  "area-of-effect": "7x7",
                  "base-damage-matk": "6000%",
                  "sp-cost": "88"
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
          "skillName": "Rock Down",
          "versionId": "rebalance-1",
          "versionLabel": "Rebalance 1",
          "file": "rebalances/arch-mage/rebalance_1.md",
          "section": "7.3",
          "notes": [
            "Reduces cooldown from 4 seconds to 0.3 seconds based on level 5.",
            "Reduces delay after skill from 1 second to 0.5 seconds based on level 5.",
            "Reduces AP recovery rate from 4 to 1.",
            "Reduces damage from 3750%Matk to 3000%Matk based on level 5.",
            "Increases damage while under Climax buff to 4250%Matk.",
            "Increases area of effect from 3x3 cells to 7x7 cells based on level 5."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "4 seconds",
              "after": "0.3 seconds",
              "scope": "Lv 5",
              "source": "Reduces cooldown from 4 seconds to 0.3 seconds based on level 5."
            },
            {
              "label": "Cast Delay",
              "before": "1 second",
              "after": "0.5 seconds",
              "scope": "Lv 5",
              "source": "Reduces delay after skill from 1 second to 0.5 seconds based on level 5."
            },
            {
              "label": "AP Generated",
              "before": "4",
              "after": "1",
              "scope": "",
              "source": "Reduces AP recovery rate from 4 to 1."
            },
            {
              "label": "Damage",
              "before": "3750%Matk",
              "after": "3000%Matk",
              "scope": "Lv 5",
              "source": "Reduces damage from 3750%Matk to 3000%Matk based on level 5."
            },
            {
              "label": "Area of Effect",
              "before": "3 x 3 cells",
              "after": "7 x 7 cells",
              "scope": "Lv 5",
              "source": "Increases area of effect from 3x3 cells to 7x7 cells based on level 5."
            }
          ]
        },
        {
          "skillName": "Rock Down",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/arch-mage/rebalance_2.md",
          "section": "7.8",
          "notes": [
            "Increases SP consumption from 85 to 92 based on level 5.",
            "Increases AP recovery rate from 1 to 2.",
            "Increases damage from 3000%/4250%(Climax)Matk to 4750%/6250%(Climax)Matk based on level 5."
          ],
          "specRows": [
            {
              "label": "SP Cost",
              "before": "85",
              "after": "92",
              "scope": "Lv 5",
              "source": "Increases SP consumption from 85 to 92 based on level 5."
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
              "before": "3000%/4250%(Clima x )Matk",
              "after": "4750%/6250%(Clima x )Matk",
              "scope": "Lv 5",
              "source": "Increases damage from 3000%/4250%(Climax)Matk to 4750%/6250%(Climax)Matk based on level 5."
            }
          ]
        },
        {
          "skillName": "Rock Down",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/arch-mage/rebalance_3.md",
          "section": "4.4",
          "notes": [
            "Reduces SP consumption from 94 to 88 based on level 5.",
            "Increases base damage from 4750%/6250%Matk to 6000%/7500%Matk based on level 5."
          ],
          "specRows": [
            {
              "label": "SP Cost",
              "before": "94",
              "after": "88",
              "scope": "Lv 5",
              "source": "Reduces SP consumption from 94 to 88 based on level 5."
            },
            {
              "label": "Damage",
              "before": "4750%/6250%Matk",
              "after": "6000%/7500%Matk",
              "scope": "Lv 5",
              "source": "Increases base damage from 4750%/6250%Matk to 6000%/7500%Matk based on level 5."
            }
          ]
        },
        {
          "skillName": "Rock Down",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/arch-mage/rebalance_4.md",
          "section": "4.8",
          "notes": [
            "Increases base damage from 6000%/7500%(Climax)Matk to 7750%/9250%(Climax)Matk based on level 5."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "6000%/7500%(Clima x )Matk",
              "after": "7750%/9250%(Clima x )Matk",
              "scope": "Lv 5",
              "source": "Increases base damage from 6000%/7500%(Climax)Matk to 7750%/9250%(Climax)Matk based on level 5."
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
      "id": 5217,
      "imageFile": "5217.png",
      "name": "Mystery Illusion",
      "maxLevel": 5,
      "prerequisiteText": "Hell Inferno Lv. 3 and Soul Vulcan Strike Lv. 3",
      "group": "Active",
      "type": "Magical",
      "target": "1 Ground cell",
      "recoversAp": "5",
      "consumesAp": "",
      "description": "Cast mysterious magic on the selected ground spot.\nThis magic inflicts Shadow Magic damage on targets within range for its duration.\nIt additionally increases damage, depending on your Base Level and SPL.",
      "levelDetails": [
        {
          "level": 1,
          "text": "MATK 950%/Effective range: 9x9 cells"
        },
        {
          "level": 2,
          "text": "MATK 1900%/Effective range: 9x9 cells"
        },
        {
          "level": 3,
          "text": "MATK 2850%/Effective range: 11x11 cells"
        },
        {
          "level": 4,
          "text": "MATK 3800%/Effective range: 11x11 cells"
        },
        {
          "level": 5,
          "text": "MATK 4750%/Effective range: 13x13 cells"
        }
      ],
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "4 seconds",
      "castDelay": "0.75 seconds",
      "cooldown": "4 seconds",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "78"
            },
            {
              "level": 2,
              "value": "86"
            },
            {
              "level": 3,
              "value": "94"
            },
            {
              "level": 4,
              "value": "102"
            },
            {
              "level": 5,
              "value": "110"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5217.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5217",
      "tree": {
        "idx": 14,
        "row": 1,
        "col": 5,
        "columns": 9,
        "requirements": [
          {
            "id": 2212,
            "level": 3,
            "name": "Hell Inferno",
            "visible": false
          },
          {
            "id": 5220,
            "level": 3,
            "name": "Soul Vulcan Strike",
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
            "value": "4 seconds"
          },
          {
            "label": "Cast Delay",
            "value": "0.75 seconds"
          },
          {
            "label": "Cooldown",
            "value": "4 seconds"
          },
          {
            "label": "Target",
            "value": "1 Ground cell"
          },
          {
            "label": "Area of Effect",
            "value": "Lv 1: 9 x 9 cells / Lv 2: 9 x 9 cells / Lv 3: 11 x 11 cells / Lv 4: 11 x 11 cells / Lv 5: 13 x 13 cells"
          },
          {
            "label": "AP Generated",
            "value": "5"
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
                  "base-damage-matk": "950%",
                  "sp-cost": "78"
                }
              },
              {
                "level": 2,
                "values": {
                  "base-damage-matk": "1900%",
                  "sp-cost": "86"
                }
              },
              {
                "level": 3,
                "values": {
                  "base-damage-matk": "2850%",
                  "sp-cost": "94"
                }
              },
              {
                "level": 4,
                "values": {
                  "base-damage-matk": "3800%",
                  "sp-cost": "102"
                }
              },
              {
                "level": 5,
                "values": {
                  "base-damage-matk": "4750%",
                  "sp-cost": "110"
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
          "skillName": "Mystery Illusion",
          "versionId": "rebalance-1",
          "versionLabel": "Rebalance 1",
          "file": "rebalances/arch-mage/rebalance_1.md",
          "section": "7.4",
          "notes": [
            "Increases damage from 1250%Matk to 2500%Matk based on level 5.",
            "Recovers 4 AP upon casting."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "1250%Matk",
              "after": "2500%Matk",
              "scope": "Lv 5",
              "source": "Increases damage from 1250%Matk to 2500%Matk based on level 5."
            }
          ]
        },
        {
          "skillName": "Mystery Illusion",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/arch-mage/rebalance_2.md",
          "section": "7.14",
          "notes": [
            "Reduces delay after skill from 1 second to 0.5 seconds.",
            "Reduces SP consumption from 120 to 110 based on level 5.",
            "Increases AP recovery rate from 4 to 5.",
            "Increases damage from 2500%Matk to 4750%Matk per hit based on level 5."
          ],
          "specRows": [
            {
              "label": "Cast Delay",
              "before": "1 second",
              "after": "0.5 seconds",
              "scope": "",
              "source": "Reduces delay after skill from 1 second to 0.5 seconds."
            },
            {
              "label": "SP Cost",
              "before": "120",
              "after": "110",
              "scope": "Lv 5",
              "source": "Reduces SP consumption from 120 to 110 based on level 5."
            },
            {
              "label": "AP Generated",
              "before": "4",
              "after": "5",
              "scope": "",
              "source": "Increases AP recovery rate from 4 to 5."
            },
            {
              "label": "Damage",
              "before": "2500%Matk",
              "after": "4750%Matk per hit",
              "scope": "Lv 5",
              "source": "Increases damage from 2500%Matk to 4750%Matk per hit based on level 5."
            }
          ]
        },
        {
          "skillName": "Mystery Illusion",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/arch-mage/rebalance_4.md",
          "section": "4.10",
          "notes": [
            "Increases global cooldown from 0.5 seconds to 0.75 seconds based on level 5."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "0.5 seconds",
              "after": "0.75 seconds",
              "scope": "Lv 5",
              "source": "Increases global cooldown from 0.5 seconds to 0.75 seconds based on level 5."
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
      "id": 5214,
      "imageFile": "5214.png",
      "name": "Deadly Projection",
      "maxLevel": 5,
      "prerequisiteText": "Mystery Illusion Lv. 3",
      "group": "Active",
      "type": "Magical",
      "target": "1 Target",
      "recoversAp": "",
      "consumesAp": "",
      "description": "Sends a projection that causes the target's body to rot.\nNegates the target's Magical immunity for a period of time and deals Undead Magical damage.\nIt additionally increases damage, depending on your Base Level and SPL.",
      "levelDetails": [
        {
          "level": 1,
          "text": "MATK 2800%/Debuff Duration : 4 seconds"
        },
        {
          "level": 2,
          "text": "MATK 5600%/Debuff Duration : 5 seconds"
        },
        {
          "level": 3,
          "text": "MATK 8400%/Debuff Duration : 6 seconds"
        },
        {
          "level": 4,
          "text": "MATK 11200%/Debuff Duration : 7 seconds"
        },
        {
          "level": 5,
          "text": "MATK 14000%/Debuff Duration : 8 seconds"
        }
      ],
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "3 seconds",
      "castDelay": "0.5 seconds",
      "cooldown": "2 seconds",
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
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5214.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5214",
      "tree": {
        "idx": 15,
        "row": 1,
        "col": 6,
        "columns": 9,
        "requirements": [
          {
            "id": 5217,
            "level": 3,
            "name": "Mystery Illusion",
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
            "value": "0.5 seconds"
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
            "label": "Duration",
            "value": "Lv 1: 4 seconds / Lv 2: 5 seconds / Lv 3: 6 seconds / Lv 4: 7 seconds / Lv 5: 8 seconds"
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
                  "base-damage-matk": "2800%",
                  "sp-cost": "70"
                }
              },
              {
                "level": 2,
                "values": {
                  "base-damage-matk": "5600%",
                  "sp-cost": "75"
                }
              },
              {
                "level": 3,
                "values": {
                  "base-damage-matk": "8400%",
                  "sp-cost": "80"
                }
              },
              {
                "level": 4,
                "values": {
                  "base-damage-matk": "11200%",
                  "sp-cost": "85"
                }
              },
              {
                "level": 5,
                "values": {
                  "base-damage-matk": "14000%",
                  "sp-cost": "90"
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
          "skillName": "Deadly Projection",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/arch-mage/rebalance_2.md",
          "section": "7.13",
          "notes": [
            "Reduces SP consumption from 120 to 90 based on level 5.",
            "Increases damage from 3600%Matk to 14000%Matk based on level 5."
          ],
          "specRows": [
            {
              "label": "SP Cost",
              "before": "120",
              "after": "90",
              "scope": "Lv 5",
              "source": "Reduces SP consumption from 120 to 90 based on level 5."
            },
            {
              "label": "Damage",
              "before": "3600%Matk",
              "after": "14000%Matk",
              "scope": "Lv 5",
              "source": "Increases damage from 3600%Matk to 14000%Matk based on level 5."
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
      "id": 5222,
      "imageFile": "5222.png",
      "name": "All Bloom",
      "maxLevel": 5,
      "prerequisiteText": "Floral Flare Road Lv. 3",
      "group": "Active",
      "type": "Magical",
      "target": "1 Ground cell",
      "recoversAp": "",
      "consumesAp": "",
      "description": "Create a flower garden on the ground. Blazing flower petals randomly appear and explode.\ninflicting Fire Magic damage on targets in 7x7 cells around them.\nThis skill additionally increases damage, depending on your Base Level and SPL.\nClimax mode changes its effect, depending on its stage.\nClimax (Stage 1)\nFlower petals appear chance doubled.\nClimax (Stage 2)\nDecreases damage, but summons 2 flower petals at a time.\nClimax (Stage 3)\nAll Bloom damage +300% Increase.\nClimax (Stage 4)\nNo Petals are generated, and targets in skill range have 100% reduced Fire Resistance for 30 seconds.\nClimax (Stage 5)\nAdditional Fire Magic damage at 85,000% of MATK after all the flower petals explode.",
      "levelDetails": [
        {
          "level": 1,
          "text": "MATK 1400%/Petals : 4/Skill range 7x7 cells"
        },
        {
          "level": 2,
          "text": "MATK 2600%/Petals : 8/Skill range 7x7 cells"
        },
        {
          "level": 3,
          "text": "MATK 3800%/Petals : 12/Skill range 9x9 cells"
        },
        {
          "level": 4,
          "text": "MATK 5000%/Petals : 16/Skill range 9x9 cells"
        },
        {
          "level": 5,
          "text": "MATK 6200%/Petals : 20/Skill range 9x9 cells"
        }
      ],
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "4 seconds",
      "castDelay": "1 second",
      "cooldown": "6 seconds",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "94"
            },
            {
              "level": 2,
              "value": "102"
            },
            {
              "level": 3,
              "value": "110"
            },
            {
              "level": 4,
              "value": "118"
            },
            {
              "level": 5,
              "value": "126"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5222.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5222",
      "tree": {
        "idx": 17,
        "row": 1,
        "col": 8,
        "columns": 9,
        "requirements": [
          {
            "id": 5229,
            "level": 3,
            "name": "Floral Flare Road",
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
            "value": "4 seconds"
          },
          {
            "label": "Cast Delay",
            "value": "1 second"
          },
          {
            "label": "Cooldown",
            "value": "6 seconds"
          },
          {
            "label": "Target",
            "value": "1 Ground cell"
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
                  "base-damage-matk": "1400%",
                  "sp-cost": "94"
                }
              },
              {
                "level": 2,
                "values": {
                  "base-damage-matk": "2600%",
                  "sp-cost": "102"
                }
              },
              {
                "level": 3,
                "values": {
                  "base-damage-matk": "3800%",
                  "sp-cost": "110"
                }
              },
              {
                "level": 4,
                "values": {
                  "base-damage-matk": "5000%",
                  "sp-cost": "118"
                }
              },
              {
                "level": 5,
                "values": {
                  "base-damage-matk": "6200%",
                  "sp-cost": "126"
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
          "skillName": "All Bloom",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/arch-mage/rebalance_2.md",
          "section": "7.9",
          "notes": [
            "Reduces delay after skill from 1 second to 0.5 seconds.",
            "Increases SP consumption from 100 to 126 based on level 5.",
            "Increases damage from 500%Matk to 6200%Matk per hit based on level 5.",
            "No longer reduce skill damage on Climax level 2.",
            "Increases bonus damage on Climax level 3 from 100% to 300%.",
            "Increases damage of additional explosion on Climax level 5."
          ],
          "specRows": [
            {
              "label": "Cast Delay",
              "before": "1 second",
              "after": "0.5 seconds",
              "scope": "",
              "source": "Reduces delay after skill from 1 second to 0.5 seconds."
            },
            {
              "label": "SP Cost",
              "before": "100",
              "after": "126",
              "scope": "Lv 5",
              "source": "Increases SP consumption from 100 to 126 based on level 5."
            },
            {
              "label": "Damage",
              "before": "500%Matk",
              "after": "6200%Matk per hit",
              "scope": "Lv 5",
              "source": "Increases damage from 500%Matk to 6200%Matk per hit based on level 5."
            },
            {
              "label": "Bonus Damage On Climax Level 3",
              "before": "100%",
              "after": "300%",
              "scope": "",
              "source": "Increases bonus damage on Climax level 3 from 100% to 300%."
            }
          ]
        },
        {
          "skillName": "All Bloom",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/arch-mage/rebalance_4.md",
          "section": "4.11",
          "notes": [
            "Increases global cooldown from 0.5 seconds to 1 second based on level 5."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "0.5 seconds",
              "after": "1 second",
              "scope": "Lv 5",
              "source": "Increases global cooldown from 0.5 seconds to 1 second based on level 5."
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
      "id": 5225,
      "imageFile": "5225.png",
      "name": "Crystal Impact",
      "maxLevel": 5,
      "prerequisiteText": "Rain of Crystal 3",
      "group": "Active",
      "type": "Magic",
      "target": "Instant Cast",
      "recoversAp": "",
      "consumesAp": "",
      "description": "Creates a powerful water elemental wave in the surrounding area starting from the ground beneath one's feet, inflicting water elemental magic damage to targets within the range.\nTargets damaged by this wave will receive additional water magic damage after a certain period of time.\nDamage is additionally increased depending on the user's base level and SPL.\nIn the climax state, the effect changes depending on the level.\nClimax (Stage 1)\nApply a buff to caster and surrounding party member For 900 sec, DEF+ 300, MDEF+ 100, increase Water magic damage and resistance to Water by 30%.\nClimax (Stage 2)\nDamage dealt by Ice Waves increased to 2x.\nClimax (Stage 3)\nIce wave damage increases by 50%.\nClimax (Stage 4)\nReduce the damage of the ice wave, but increase delayed damage by 150%\nClimax (Stage 5)\nIncrease Ice Wave's area of effect to 15x15 cells, delayed damage now deal damage to 5x5 area surrounding the target.",
      "levelDetails": [
        {
          "level": 1,
          "text": "MATK 1550%/Area of Effect 9x9 Cells"
        },
        {
          "level": 2,
          "text": "MATK 2850%/Area of Effect 9x9 Cells"
        },
        {
          "level": 3,
          "text": "MATK 4150%/Area of Effect 11x11 Cells"
        },
        {
          "level": 4,
          "text": "MATK 5450%/Area of Effect 11x11 Cells"
        },
        {
          "level": 5,
          "text": "MATK 6750%/Area of Effect 13x13 Cells"
        }
      ],
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "4 seconds",
      "castDelay": "0.5 seconds",
      "cooldown": "2 seconds",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "170"
            },
            {
              "level": 2,
              "value": "174"
            },
            {
              "level": 3,
              "value": "178"
            },
            {
              "level": 4,
              "value": "182"
            },
            {
              "level": 5,
              "value": "186"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5225.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5225",
      "tree": {
        "idx": 18,
        "row": 2,
        "col": 0,
        "columns": 9,
        "requirements": [
          {
            "id": 5216,
            "level": 3,
            "name": "Crystal Rain",
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
            "value": "4 seconds"
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
            "value": "Instant Cast"
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
                  "area-of-effect": "9x9",
                  "base-damage-matk": "1550%",
                  "sp-cost": "170"
                }
              },
              {
                "level": 2,
                "values": {
                  "area-of-effect": "9x9",
                  "base-damage-matk": "2850%",
                  "sp-cost": "174"
                }
              },
              {
                "level": 3,
                "values": {
                  "area-of-effect": "11x11",
                  "base-damage-matk": "4150%",
                  "sp-cost": "178"
                }
              },
              {
                "level": 4,
                "values": {
                  "area-of-effect": "11x11",
                  "base-damage-matk": "5450%",
                  "sp-cost": "182"
                }
              },
              {
                "level": 5,
                "values": {
                  "area-of-effect": "13x13",
                  "base-damage-matk": "6750%",
                  "sp-cost": "186"
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
          "skillName": "Crystal Impact",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/arch-mage/rebalance_2.md",
          "section": "7.10",
          "notes": [
            "Reduces cooldown from 6 seconds to 2 seconds.",
            "Reduces delay after skill from 1 second to 0.5 seconds.",
            "Increases SP consumption from 120 to 132 based on level 5.",
            "Increases damage from 4000%/4000%(secondary)Matk to 6750%/6750%(secondary)Matk based on level 5."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "6 seconds",
              "after": "2 seconds",
              "scope": "",
              "source": "Reduces cooldown from 6 seconds to 2 seconds."
            },
            {
              "label": "Cast Delay",
              "before": "1 second",
              "after": "0.5 seconds",
              "scope": "",
              "source": "Reduces delay after skill from 1 second to 0.5 seconds."
            },
            {
              "label": "SP Cost",
              "before": "120",
              "after": "132",
              "scope": "Lv 5",
              "source": "Increases SP consumption from 120 to 132 based on level 5."
            },
            {
              "label": "Damage",
              "before": "4000%/4000%(secondary)Matk",
              "after": "6750%/6750%(secondary)Matk",
              "scope": "Lv 5",
              "source": "Increases damage from 4000%/4000%(secondary)Matk to 6750%/6750%(secondary)Matk based on level 5."
            }
          ]
        },
        {
          "skillName": "Crystal Impact",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/arch-mage/rebalance_3.md",
          "section": "4.5",
          "notes": [
            "Reduces area of effect from 15 x 15 cells to 13 x 13 cells based on level 5.",
            "Reduces area of effect bonus from Climax level 5 from entire screen to 15 x 15 cells.",
            "Increases SP consumption from 132 to 186 based on level 5."
          ],
          "specRows": [
            {
              "label": "Area of Effect",
              "before": "15 x 15 cells",
              "after": "13 x 13 cells",
              "scope": "Lv 5",
              "source": "Reduces area of effect from 15 x 15 cells to 13 x 13 cells based on level 5."
            },
            {
              "label": "Area of Effect",
              "before": "Clima x level 5 from entire screen",
              "after": "15 x 15 cells",
              "scope": "",
              "source": "Reduces area of effect bonus from Climax level 5 from entire screen to 15 x 15 cells."
            },
            {
              "label": "SP Cost",
              "before": "132",
              "after": "186",
              "scope": "Lv 5",
              "source": "Increases SP consumption from 132 to 186 based on level 5."
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
      "id": 5215,
      "imageFile": "5215.png",
      "name": "Destructive Hurricane",
      "maxLevel": 5,
      "prerequisiteText": "Tornado Storm 3",
      "group": "Active",
      "type": "Magic",
      "target": "Instant Cast",
      "recoversAp": "",
      "consumesAp": "",
      "description": "Creates a strong wind around you, inflicting wind attribute magic damage to targets within the range.\nDamage is additionally increased depending on the user's base level and SPL.\nIn the climax state, the effect changes depending on the level.\nClimax (Stage 1)\nMATK 12500% Additional damage from wind attribute magic.\nClimax (Stage 2)\nAdd 2 cells knockback effect.\nClimax (Stage 3)\nDestructive Hurricane Damage 150% increase.\nClimax (Stage 4)\nSkill no longer does damage but triggers a buff. For 900 sec, MATK+ 100 and increase Wind property magic damage by 30%\nClimax (Stage 5)\nArea of Effect change to 19x19, Reduced Destructive Hurricane Damage by 20% .",
      "levelDetails": [
        {
          "level": 1,
          "text": "MATK 3450%/Area of Effect 7x7 Cells"
        },
        {
          "level": 2,
          "text": "MATK 6300%/Area of Effect 7x7 Cells"
        },
        {
          "level": 3,
          "text": "MATK 9150%/Area of Effect 9x9 Cells"
        },
        {
          "level": 4,
          "text": "MATK 12000%/Area of Effect 9x9 Cells"
        },
        {
          "level": 5,
          "text": "MATK 14850%/Area of Effect 11x11 Cells"
        }
      ],
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "4 seconds",
      "castDelay": "0.5 seconds",
      "cooldown": "2.5 seconds",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "170"
            },
            {
              "level": 2,
              "value": "174"
            },
            {
              "level": 3,
              "value": "178"
            },
            {
              "level": 4,
              "value": "182"
            },
            {
              "level": 5,
              "value": "186"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5215.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5215",
      "tree": {
        "idx": 19,
        "row": 2,
        "col": 1,
        "columns": 9,
        "requirements": [
          {
            "id": 5227,
            "level": 3,
            "name": "Tornado Storm",
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
            "value": "4 seconds"
          },
          {
            "label": "Cast Delay",
            "value": "0.5 seconds"
          },
          {
            "label": "Cooldown",
            "value": "2.5 seconds"
          },
          {
            "label": "Target",
            "value": "Instant Cast"
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
                  "area-of-effect": "7x7",
                  "base-damage-matk": "3450%",
                  "sp-cost": "170"
                }
              },
              {
                "level": 2,
                "values": {
                  "area-of-effect": "7x7",
                  "base-damage-matk": "6300%",
                  "sp-cost": "174"
                }
              },
              {
                "level": 3,
                "values": {
                  "area-of-effect": "9x9",
                  "base-damage-matk": "9150%",
                  "sp-cost": "178"
                }
              },
              {
                "level": 4,
                "values": {
                  "area-of-effect": "9x9",
                  "base-damage-matk": "12000%",
                  "sp-cost": "182"
                }
              },
              {
                "level": 5,
                "values": {
                  "area-of-effect": "11x11",
                  "base-damage-matk": "14850%",
                  "sp-cost": "186"
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
          "skillName": "Destructive Hurricane",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/arch-mage/rebalance_2.md",
          "section": "7.11",
          "notes": [
            "Reduces cooldown from 6 seconds to 2 seconds.",
            "Reduces delay after skill from 1 second to 0.5 seconds.",
            "Increases SP consumption from 120 to 132 based on level 5.",
            "Increases damage from 8000%Matk to 14250%Matk based on level 5.",
            "Increases damage of additional hit on Climax level 1.",
            "Increases bonus damage on Climax level 3 from 100% to 200%.",
            "Reduces bonus damage on Climax level 5 from 70% to 50%."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "6 seconds",
              "after": "2 seconds",
              "scope": "",
              "source": "Reduces cooldown from 6 seconds to 2 seconds."
            },
            {
              "label": "Cast Delay",
              "before": "1 second",
              "after": "0.5 seconds",
              "scope": "",
              "source": "Reduces delay after skill from 1 second to 0.5 seconds."
            },
            {
              "label": "SP Cost",
              "before": "120",
              "after": "132",
              "scope": "Lv 5",
              "source": "Increases SP consumption from 120 to 132 based on level 5."
            },
            {
              "label": "Damage",
              "before": "8000%Matk",
              "after": "14250%Matk",
              "scope": "Lv 5",
              "source": "Increases damage from 8000%Matk to 14250%Matk based on level 5."
            },
            {
              "label": "Bonus Damage On Climax Level 3",
              "before": "100%",
              "after": "200%",
              "scope": "",
              "source": "Increases bonus damage on Climax level 3 from 100% to 200%."
            },
            {
              "label": "Bonus Damage On Climax Level 5",
              "before": "70%",
              "after": "50%",
              "scope": "",
              "source": "Reduces bonus damage on Climax level 5 from 70% to 50%."
            }
          ]
        },
        {
          "skillName": "Destructive Hurricane",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/arch-mage/rebalance_3.md",
          "section": "4.5",
          "notes": [
            "Increases skill cooldown from 2 seconds to 2.5 seconds.",
            "Increases base damage from 14250%Matk to 14850%Matk based on level 5.",
            "Reduces damage bonus from Climax level 3 from 200% to 150%.",
            "Changes damage modifier from Climax level 5 from 50% increasing to 20% reducing.",
            "Increases SP consumption from 132 to 186 based on level 5."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "2 seconds",
              "after": "2.5 seconds",
              "scope": "",
              "source": "Increases skill cooldown from 2 seconds to 2.5 seconds."
            },
            {
              "label": "Damage",
              "before": "14250%Matk",
              "after": "14850%Matk",
              "scope": "Lv 5",
              "source": "Increases base damage from 14250%Matk to 14850%Matk based on level 5."
            },
            {
              "label": "Damage Bonus",
              "before": "Clima x level 3 from 200%",
              "after": "150%",
              "scope": "",
              "source": "Reduces damage bonus from Climax level 3 from 200% to 150%."
            },
            {
              "label": "Damage Modifier",
              "before": "Clima x level 5 from 50% increasing",
              "after": "20% reducing",
              "scope": "",
              "source": "Changes damage modifier from Climax level 5 from 50% increasing to 20% reducing."
            },
            {
              "label": "SP Cost",
              "before": "132",
              "after": "186",
              "scope": "Lv 5",
              "source": "Increases SP consumption from 132 to 186 based on level 5."
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
      "id": 5218,
      "imageFile": "5218.png",
      "name": "Violent Quake",
      "maxLevel": 5,
      "prerequisiteText": "Stratum Tremor Lv. 3",
      "group": "Active",
      "type": "Magical",
      "target": "1 Ground cell",
      "recoversAp": "",
      "consumesAp": "",
      "description": "Temporarily shake the ground and shoot rocks out of it, randomly attacking targets within range.\nRocks inflict Earth Magic damage on their target and others in 7 x7 cells around it.\nThis skill additionally increases damage, depending on your Base Level and SPL.\nClimax mode changes its effect, depending on its stage.\nClimax (Stage 1)\nDecreases damage, but summons 2 rocks at a time.\nClimax (Stage 2)\nRocks attack 9x9 cells.\nClimax (Stage 3)\nViolent Quake damage +200%.\nClimax (Stage 4)\nInstead of summoning rocks, adds Earth Resistance -100% to targets within range for 30 seconds.\nClimax (Stage 5)\nEffective range set to 7x7 cells.",
      "levelDetails": [
        {
          "level": 1,
          "text": "MATK 1400%/Rocks: 4/Skill Range 7x7 cells"
        },
        {
          "level": 2,
          "text": "MATK 2600%/Rocks: 8/Skill Range 7x7 cells"
        },
        {
          "level": 3,
          "text": "MATK 3800%/Rocks: 12/Skill Range 9x9 cells"
        },
        {
          "level": 4,
          "text": "MATK 5000%/Rocks: 16/Skill Range 9x9 cells"
        },
        {
          "level": 5,
          "text": "MATK 6200%/Rocks: 20/Skill Range 9x9 cells"
        }
      ],
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "4 seconds",
      "castDelay": "1 second",
      "cooldown": "6 seconds",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "110"
            },
            {
              "level": 2,
              "value": "114"
            },
            {
              "level": 3,
              "value": "118"
            },
            {
              "level": 4,
              "value": "122"
            },
            {
              "level": 5,
              "value": "126"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5218.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5218",
      "tree": {
        "idx": 20,
        "row": 2,
        "col": 2,
        "columns": 9,
        "requirements": [
          {
            "id": 5221,
            "level": 3,
            "name": "Stratum Tremor",
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
            "value": "4 seconds"
          },
          {
            "label": "Cast Delay",
            "value": "1 second"
          },
          {
            "label": "Cooldown",
            "value": "6 seconds"
          },
          {
            "label": "Target",
            "value": "1 Ground cell"
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
                  "base-damage-matk": "1400%",
                  "sp-cost": "110"
                }
              },
              {
                "level": 2,
                "values": {
                  "base-damage-matk": "2600%",
                  "sp-cost": "114"
                }
              },
              {
                "level": 3,
                "values": {
                  "base-damage-matk": "3800%",
                  "sp-cost": "118"
                }
              },
              {
                "level": 4,
                "values": {
                  "base-damage-matk": "5000%",
                  "sp-cost": "122"
                }
              },
              {
                "level": 5,
                "values": {
                  "base-damage-matk": "6200%",
                  "sp-cost": "126"
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
          "skillName": "Violent Quake",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/arch-mage/rebalance_2.md",
          "section": "7.12",
          "notes": [
            "Reduces delay after skill from 1 second to 0.5 seconds.",
            "Increases SP consumption from 100 to 126 based on level 5.",
            "Increases damage from 600%Matk to 6200%Matk per hit based on level 5.",
            "Increases bonus damage on Climax level 3 from 100% to 200%."
          ],
          "specRows": [
            {
              "label": "Cast Delay",
              "before": "1 second",
              "after": "0.5 seconds",
              "scope": "",
              "source": "Reduces delay after skill from 1 second to 0.5 seconds."
            },
            {
              "label": "SP Cost",
              "before": "100",
              "after": "126",
              "scope": "Lv 5",
              "source": "Increases SP consumption from 100 to 126 based on level 5."
            },
            {
              "label": "Damage",
              "before": "600%Matk",
              "after": "6200%Matk per hit",
              "scope": "Lv 5",
              "source": "Increases damage from 600%Matk to 6200%Matk per hit based on level 5."
            },
            {
              "label": "Bonus Damage On Climax Level 3",
              "before": "100%",
              "after": "200%",
              "scope": "",
              "source": "Increases bonus damage on Climax level 3 from 100% to 200%."
            }
          ]
        },
        {
          "skillName": "Violent Quake",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/arch-mage/rebalance_4.md",
          "section": "4.11",
          "notes": [
            "Increases global cooldown from 0.5 seconds to 1 second based on level 5."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "0.5 seconds",
              "after": "1 second",
              "scope": "Lv 5",
              "source": "Increases global cooldown from 0.5 seconds to 1 second based on level 5."
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
      "id": 5230,
      "imageFile": "5230.png",
      "name": "Astral Strike",
      "maxLevel": 10,
      "prerequisiteText": "Comet Lv. 5, Mystery Illusion Lv. 3, and Deadly Projection Lv. 3",
      "group": "Active(AP)",
      "type": "Magical",
      "target": "1 Ground cell",
      "recoversAp": "",
      "consumesAp": "",
      "description": "Drops a powerful meteorite on the ground, dealing Neutral Magical damage to targets in range and dealing multiple additional Neutral Magical damage over 6 seconds.\nThe meteor inflicts more damage on Undead and Dragon monsters.\nIt additionally increases damage, depending on your Base Level and SPL.",
      "levelDetails": [
        {
          "level": 1,
          "text": "MATK 2100%/ 2500% to Undead/Dragon enemies\nAdditional MATK 650%/Effective range: 5x5 cells"
        },
        {
          "level": 2,
          "text": "MATK 3900%/ 4600% to Undead/Dragon enemies\nAdditional MATK 1300%/Effective range: 5x5 cells"
        },
        {
          "level": 3,
          "text": "MATK 5700%/ 6700% to Undead/Dragon enemies\nAdditional MATK 1950%/Effective range: 5x5 cells"
        },
        {
          "level": 4,
          "text": "MATK 7500%/ 8800% to Undead/Dragon enemies\nAdditional MATK 2600%/Effective range: 7x7 cells"
        },
        {
          "level": 5,
          "text": "MATK 9300%/ 10900% to Undead/Dragon enemies\nAdditional MATK 3250%/Effective range: 7x7 cells"
        },
        {
          "level": 6,
          "text": "MATK 11100%/ 13000% to Undead/Dragon enemies\nAdditional MATK 3900%/Effective range: 7x7 cells"
        },
        {
          "level": 7,
          "text": "MATK 12900%/ 15100% to Undead/Dragon enemies\nAdditional MATK 4550%/Effective range: 9x9 cells"
        },
        {
          "level": 8,
          "text": "MATK 14700%/ 17200% to Undead/Dragon enemies\nAdditional MATK 5200%/Effective range: 9x9 cells"
        },
        {
          "level": 9,
          "text": "MATK 16500%/ 19300% to Undead/Dragon enemies\nAdditional MATK 5850%/Effective range: 9x9 cells"
        },
        {
          "level": 10,
          "text": "MATK 18300%/ 21400% to Undead/Dragon enemies\nAdditional MATK 6500%/Effective range: 11x11 cells"
        }
      ],
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "4 seconds",
      "castDelay": "1 second",
      "cooldown": "6 seconds",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "130"
            },
            {
              "level": 2,
              "value": "130"
            },
            {
              "level": 3,
              "value": "130"
            },
            {
              "level": 4,
              "value": "130"
            },
            {
              "level": 5,
              "value": "130"
            },
            {
              "level": 6,
              "value": "130"
            },
            {
              "level": 7,
              "value": "130"
            },
            {
              "level": 8,
              "value": "130"
            },
            {
              "level": 9,
              "value": "130"
            },
            {
              "level": 10,
              "value": "130"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5230.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5230",
      "tree": {
        "idx": 22,
        "row": 2,
        "col": 4,
        "columns": 9,
        "requirements": [
          {
            "id": 2213,
            "level": 5,
            "name": "Comet",
            "visible": false
          },
          {
            "id": 5214,
            "level": 3,
            "name": "Deadly Projection",
            "visible": true
          },
          {
            "id": 5217,
            "level": 3,
            "name": "Mystery Illusion",
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
            "value": "1 second"
          },
          {
            "label": "Cooldown",
            "value": "6 seconds"
          },
          {
            "label": "Target",
            "value": "1 Ground cell"
          },
          {
            "label": "Area of Effect",
            "value": "Lv 1: 5 x 5 cells / Lv 2: 5 x 5 cells / Lv 3: 5 x 5 cells / Lv 4: 7 x 7 cells / Lv 5: 7 x 7 cells / Lv 6: 7 x 7 cells / Lv 7: 9 x 9 cells / Lv 8: 9 x 9 cells / Lv 9: 9 x 9 cells / Lv 10: 11 x 11 cells"
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
                  "base-damage-matk": "2100%\n650%",
                  "sp-cost": "130"
                }
              },
              {
                "level": 2,
                "values": {
                  "base-damage-matk": "3900%\n1300%",
                  "sp-cost": "130"
                }
              },
              {
                "level": 3,
                "values": {
                  "base-damage-matk": "5700%\n1950%",
                  "sp-cost": "130"
                }
              },
              {
                "level": 4,
                "values": {
                  "base-damage-matk": "7500%\n2600%",
                  "sp-cost": "130"
                }
              },
              {
                "level": 5,
                "values": {
                  "base-damage-matk": "9300%\n3250%",
                  "sp-cost": "130"
                }
              },
              {
                "level": 6,
                "values": {
                  "base-damage-matk": "11100%\n3900%",
                  "sp-cost": "130"
                }
              },
              {
                "level": 7,
                "values": {
                  "base-damage-matk": "12900%\n4550%",
                  "sp-cost": "130"
                }
              },
              {
                "level": 8,
                "values": {
                  "base-damage-matk": "14700%\n5200%",
                  "sp-cost": "130"
                }
              },
              {
                "level": 9,
                "values": {
                  "base-damage-matk": "16500%\n5850%",
                  "sp-cost": "130"
                }
              },
              {
                "level": 10,
                "values": {
                  "base-damage-matk": "18300%\n6500%",
                  "sp-cost": "130"
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
          "skillName": "Astral Strike",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/arch-mage/rebalance_2.md",
          "section": "7.16",
          "notes": [
            "Reduces cooldown from 60 second to 6 seconds.",
            "Reduces SP consumption from 150 to 130.",
            "Reduces AP consumption from 150 to 25.",
            "Increases initial damage from 5000%/11000%(undead and dragon race)Matk to 18000%/21400%(undead and dragon race)Matk based on level 10.",
            "Increases over time damage from 2000%Matk to 6500%Matk per hit based on level 10.",
            "Reduces skill duration from 15 seconds to 6 seconds."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "60 second",
              "after": "6 seconds",
              "scope": "",
              "source": "Reduces cooldown from 60 second to 6 seconds."
            },
            {
              "label": "SP Cost",
              "before": "150",
              "after": "130",
              "scope": "",
              "source": "Reduces SP consumption from 150 to 130."
            },
            {
              "label": "AP Consumed",
              "before": "150",
              "after": "25",
              "scope": "",
              "source": "Reduces AP consumption from 150 to 25."
            },
            {
              "label": "Initial Damage",
              "before": "5000%/11000%(undead and dragon race)Matk",
              "after": "18000%/21400%(undead and dragon race)Matk",
              "scope": "Lv 10",
              "source": "Increases initial damage from 5000%/11000%(undead and dragon race)Matk to 18000%/21400%(undead and dragon race)Matk based on level 10."
            },
            {
              "label": "Over Time Damage",
              "before": "2000%Matk",
              "after": "6500%Matk per hit",
              "scope": "Lv 10",
              "source": "Increases over time damage from 2000%Matk to 6500%Matk per hit based on level 10."
            },
            {
              "label": "Skill Duration",
              "before": "15 seconds",
              "after": "6 seconds",
              "scope": "",
              "source": "Reduces skill duration from 15 seconds to 6 seconds."
            }
          ]
        },
        {
          "skillName": "Astral Strike",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/arch-mage/rebalance_4.md",
          "section": "4.13",
          "notes": [
            "Increases global cooldown from 0.5 seconds to 1 second based on level 10."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "0.5 seconds",
              "after": "1 second",
              "scope": "Lv 10",
              "source": "Increases global cooldown from 0.5 seconds to 1 second based on level 10."
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
      "id": 6516,
      "imageFile": "6516.png",
      "name": "Energy Conversion",
      "maxLevel": 5,
      "prerequisiteText": "Recognized Spell level 2, Climax level 1",
      "group": "Active(AP)",
      "type": "Recovery",
      "target": "Self",
      "recoversAp": "",
      "consumesAp": "22 ~ 10",
      "description": "Converts some of the user's AP into SP through energy exchange.",
      "levelDetails": [
        {
          "level": 1,
          "text": "Consumes 22 AP / Recovers 40 SP."
        },
        {
          "level": 2,
          "text": "Consumes 19 AP / Recovers 120 SP."
        },
        {
          "level": 3,
          "text": "Consumes 16 AP / Recovers 240 SP."
        },
        {
          "level": 4,
          "text": "Consumes 13 AP / Recovers 400 SP."
        },
        {
          "level": 5,
          "text": "Consumes 10 AP / Recovers 600 SP."
        }
      ],
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "1 second",
      "castDelay": "0.5 seconds",
      "levelExtras": [],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/6516.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6516",
      "tree": {
        "idx": 23,
        "row": 2,
        "col": 5,
        "columns": 9,
        "requirements": [
          {
            "id": 2206,
            "level": 2,
            "name": "Recognized Spell",
            "visible": false
          },
          {
            "id": 5232,
            "level": 1,
            "name": "Climax",
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
            "value": "5"
          },
          {
            "label": "Fixed Cast Time",
            "value": "1.5 seconds"
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
            "label": "Target",
            "value": "Self"
          },
          {
            "label": "AP Consumed",
            "value": "22 ~ 10"
          }
        ],
        "levelTables": [
          {
            "title": "Level Scaling",
            "columns": [
              {
                "id": "effect",
                "label": "Effect"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "effect": "Consumes 22 AP / Recovers 40 SP"
                }
              },
              {
                "level": 2,
                "values": {
                  "effect": "Consumes 19 AP / Recovers 120 SP"
                }
              },
              {
                "level": 3,
                "values": {
                  "effect": "Consumes 16 AP / Recovers 240 SP"
                }
              },
              {
                "level": 4,
                "values": {
                  "effect": "Consumes 13 AP / Recovers 400 SP"
                }
              },
              {
                "level": 5,
                "values": {
                  "effect": "Consumes 10 AP / Recovers 600 SP"
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
          "skillName": "Energy Conversion",
          "versionId": "rebalance-5",
          "versionLabel": "Rebalance 5",
          "file": "rebalances/arch-mage/added_skills.md",
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

export default archMageData;
