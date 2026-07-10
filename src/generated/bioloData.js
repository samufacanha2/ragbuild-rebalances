export const bioloData = {
  "generatedAt": "2026-07-10T15:02:10.807Z",
  "classId": 4259,
  "classSlug": "biolo",
  "className": "Biolo",
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
    "changedSkills": 5,
    "noteCount": 10,
    "addedSkills": 0,
    "versions": 4
  },
  "tree": {
    "columns": 9,
    "rows": 3,
    "skillTreeUrl": "https://www.divine-pride.net/tools/skilltree/4259",
    "jobIconUrl": "assets/divine-pride/jobs/4259.png"
  },
  "sources": {
    "rebalances": [
      "rebalances/biolo/rebalance_1.md",
      "rebalances/biolo/rebalance_2.md",
      "rebalances/biolo/rebalance_3.md",
      "rebalances/biolo/rebalance_4.md"
    ],
    "rebalanceManifest": "rebalances/manifest.json",
    "divinePrideApiDocs": "https://www.divine-pride.net/api",
    "divinePrideSkillTree": "https://www.divine-pride.net/tools/skilltree/4259",
    "browiki": "https://browiki.org",
    "irowiki": "https://irowiki.org/wiki/"
  },
  "rebalanceVersions": [
    {
      "id": "rebalance-1",
      "label": "Rebalance 1",
      "file": "rebalances/biolo/rebalance_1.md",
      "heading": "4. Biolo",
      "className": "Biolo",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=9805",
      "scope": "main",
      "appliesTo": "Main classes only",
      "maxJobLevel": 50,
      "pointLimit": 49,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "4.1",
          "name": "Bionic Mastery",
          "notes": [
            "Increases Atk bonus from 2000 to 6000 based on level 10.",
            "Increases MaxHP bonus from 20000 to 400000 based on level 10."
          ]
        },
        {
          "section": "4.2",
          "name": "Wooden Warrior / Wooden Fairy / Creeper",
          "notes": [
            "Reduces fixed casting time from 4 seconds to 1 second based on level 5.",
            "Adds variable casting time by 1 second based on level 5."
          ]
        },
        {
          "section": "4.3",
          "name": "Hell Tree",
          "notes": [
            "Reduces fixed casting time from 4 seconds to 1 second based on level 5.",
            "Adds variable casting time by 1 second based on level 5.",
            "Reduces AP consumption from 100 to 60 based on level 5."
          ]
        },
        {
          "section": "4.4",
          "name": "Acidified Zone (Water/Wind/Earth/Fire)",
          "notes": [
            "Reduces cooldown from 2 seconds to 1 second based on level 5.",
            "Increases damage from 1250%Atk to 2000%Atk based on level 5.",
            "Changes damage logic from 3 split hits to 5 cumulative hits."
          ]
        }
      ]
    },
    {
      "id": "rebalance-2",
      "label": "Rebalance 2",
      "file": "rebalances/biolo/rebalance_2.md",
      "heading": "4. Biolo",
      "className": "Biolo",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=11126",
      "scope": "main-and-expanded",
      "appliesTo": "Main and expanded classes",
      "maxJobLevel": 50,
      "pointLimit": 49,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "4.1",
          "name": "Bionic Pharmacy",
          "notes": [
            "The crafting materials of Icycle/Earth/Gale/Flame Acid Bottle have been changed, reduces amount of Bottle Grenade and Acid Bottle used from 5 each to 1 each, changes materials from elemental ore to elemental point."
          ]
        },
        {
          "section": "4.2",
          "name": "Acidified Zone (Water)/(Fire)/(Wind)/(Ground)",
          "notes": [
            "Reduces cooldown from 1 second to 0.5 seconds.",
            "Reduces delay after skill from 0.5 seconds to 0.15 seconds.",
            "Reduces SP consumption from 88 to 63 based on level 5.",
            "Increases number of hit from 5 hits to 7 hits."
          ]
        },
        {
          "section": "4.3",
          "name": "Full Shadow Protection",
          "notes": [
            "Increases duration from 60 seconds to 180 seconds base on level 4."
          ]
        },
        {
          "section": "4.4",
          "name": "Research Report",
          "notes": [
            "Reduces fixed casting time from 1 second to 0.5 seconds.",
            "Reduces cooldown from 120 seconds to 60 seconds.",
            "Increases duration from 60 seconds to 150 seconds."
          ]
        }
      ]
    },
    {
      "id": "rebalance-3",
      "label": "Rebalance 3",
      "file": "rebalances/biolo/rebalance_3.md",
      "heading": "8. Biolo",
      "className": "Biolo",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=12421",
      "scope": "main-and-expanded",
      "appliesTo": "Main and expanded classes",
      "maxJobLevel": 55,
      "pointLimit": 54,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "9.1",
          "name": "Mayhemic Thorns",
          "notes": [
            "reduces number of hit while under Research Report buff from 5 hits to 4 hits.",
            "Increases base damage from 2700%/3250%(Research Report)Atk to 3200%/3350%(Research Report)Atk based on level 10."
          ]
        },
        {
          "section": "8.2",
          "name": "Explosive Powder",
          "notes": [
            "Increases SP consumption from 74 to 97 based on level 5.",
            "Increases base damage from 2650%/3150%(Research Report)Atk to 3150%/3650%(Research Report)Atk based on level 5."
          ]
        }
      ]
    },
    {
      "id": "rebalance-4",
      "label": "Rebalance 4",
      "file": "rebalances/biolo/rebalance_4.md",
      "heading": "8. Biolo",
      "className": "Biolo",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=13917",
      "scope": "main-and-expanded",
      "appliesTo": "Main and expanded classes",
      "maxJobLevel": 55,
      "pointLimit": 54,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "8.1",
          "name": "Explosive Powder",
          "notes": [
            "Increases base damage from 3150%/3650%(Research Report)Atk to 3750%/4250%(Research Report)Atk per hit based on level 5."
          ]
        }
      ]
    }
  ],
  "addedSkills": [],
  "skillTabs": [
    {
      "id": "current",
      "label": "Biolo",
      "pointLimit": 59,
      "tree": {
        "columns": 9,
        "rows": 3
      },
      "skills": [
        {
          "id": 5336,
          "imageFile": "5336.png",
          "name": "Bionic Pharmacy",
          "maxLevel": 5,
          "prerequisiteText": "Special Pharmacy Lv. 5",
          "group": "Active/Crafting",
          "type": "Crafting",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Bionic_Pharmacy",
          "description": "Create a chemical at the cost of 30 SP.\nConsumes 1 Beaker along with other ingredients, depending on the chemical you create.\nIcicle Acid Bottle: 1 Bottle Grenade, 1 Acid Bottle, and 2 Indigo Points\nEarth Acid Bottle: 1 Bottle Grenade, 1 Acid Bottle, and 2 Lime Green Points\nGale Acid Bottle: 1 Bottle Grenade, 1 Acid Bottle, and 2 Yellow Wish Points\nFlame Acid Bottle: 1 Bottle Grenade, 1 Acid Bottle, and 2 Scarlet Points\nAdvanced Glistening Coat: 10 Glistening Coats and 5 Empty Bottles\nAdvanced Plant Bottle: 10 Plant Bottles, 5 Mandragora Pots, 2 Thorn Plant Seeds, and 2 Bloodsuck Plant Seeds\nEye Cleaner (Sightless Remover): 10 Empty Bottles, 5 Holy Waters, 3 White Herbs, and 3 Green Herbs\nEar Cleaner (Quiet Remover): 10 Empty Bottles, 5 Holy Waters, 2 Blue Herbs, and 3 Green Herbs\nEnergy Tonic (Lethargy Remover): 10 Empty Bottles, 5 Holy Waters, 2 Yggdrasilberries, 3 Royal Jellies\nMini Extinguisher (Arson Remover): 10 Empty Bottles, 5 Holy Waters, 5 Crystal Blues, and 3 Irons\nLucky Water (Misfortune Remover): 10 Empty Bottles, 5 Holy Waters, 10 Clovers, and 3 Green Herbs\nStrong Antidote (Strong Poison Remover): 10 Empty Bottles, 5 Holy Waters, 3 Poison Bottles, and 10 Green Herbs\nHigh Calorie Chocolate (Depression Remover): Empty Bottle 10, Cacao 3, Royal Jelly 3, Yggdrasil Seed 5\nRefined Holy Water (Holy Fire Remover): 10 Empty Bottles, 10 Holy Waters, and 3 Royal Jellies",
          "levelDetails": [
            {
              "level": 1,
              "text": "Max Crafting Count: 11"
            },
            {
              "level": 2,
              "text": "Max Crafting Count: 12"
            },
            {
              "level": 3,
              "text": "Max Crafting Count: 13"
            },
            {
              "level": 4,
              "text": "Max Crafting Count: 14"
            },
            {
              "level": 5,
              "text": "Max Crafting Count: 15"
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
          "translations": {
            "pt-BR": {
              "name": " Bionic Pharmacy ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Bionic_Pharmacy"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/5336.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5336",
          "tree": {
            "idx": 0,
            "row": 0,
            "col": 0,
            "columns": 9,
            "requirements": [
              {
                "id": 2497,
                "level": 5,
                "name": "Special Pharmacy",
                "visible": false
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active/Crafting Skill"
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
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Ma x Crafting Count: 11",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Ma x Crafting Count: 12",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Ma x Crafting Count: 13",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Ma x Crafting Count: 14",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Ma x Crafting Count: 15",
                      "sp-cost": "30"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [
            {
              "skillName": "Bionic Pharmacy",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/biolo/rebalance_2.md",
              "section": "4.1",
              "notes": [
                "The crafting materials of Icycle/Earth/Gale/Flame Acid Bottle have been changed, reduces amount of Bottle Grenade and Acid Bottle used from 5 each to 1 each, changes materials from elemental ore to elemental point."
              ],
              "specRows": []
            }
          ],
          "api": {
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 5337,
          "imageFile": "5337.png",
          "name": "Bionics Mastery",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Bionics_Mastery",
          "description": "Improve Plant minion stats.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK +600/MHP +40000/MSP +20/DEF+20/MDEF +4/FLEE +10"
            },
            {
              "level": 2,
              "text": "ATK +1200/MHP +80000/MSP +40/DEF+40/MDEF +8/FLEE +20"
            },
            {
              "level": 3,
              "text": "ATK +1800/MHP +120000/MSP +60/DEF+60/MDEF +12/FLEE +30"
            },
            {
              "level": 4,
              "text": "ATK +2400/MHP +160000/MSP +80/DEF+80/MDEF +16/FLEE +40"
            },
            {
              "level": 5,
              "text": "ATK +3000/MHP +200000/MSP +100/DEF+100/MDEF +20/FLEE +50"
            },
            {
              "level": 6,
              "text": "ATK +3600/MHP +240000/MSP +120/DEF+120/MDEF +24/FLEE +60"
            },
            {
              "level": 7,
              "text": "ATK +4200/MHP +280000/MSP +140/DEF+140/MDEF +28/FLEE +70"
            },
            {
              "level": 8,
              "text": "ATK +4800/MHP +320000/MSP +160/DEF+160/MDEF +32/FLEE +80"
            },
            {
              "level": 9,
              "text": "ATK +5400/MHP +360000/MSP +180/DEF+180/MDEF +36/FLEE +90"
            },
            {
              "level": 10,
              "text": "ATK +6000/MHP +400000/MSP +200/DEF+200/MDEF +40/FLEE +100"
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
          "translations": {
            "pt-BR": {
              "name": " Bionics Mastery ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Bionics_Mastery"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/5337.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5337",
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
                    "id": "mhp",
                    "label": "MHP"
                  },
                  {
                    "id": "msp",
                    "label": "MSP"
                  },
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  },
                  {
                    "id": "atk",
                    "label": "Atk"
                  },
                  {
                    "id": "def",
                    "label": "Def"
                  },
                  {
                    "id": "flee",
                    "label": "Flee"
                  },
                  {
                    "id": "mdef",
                    "label": "Mdef"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "atk": "+600",
                      "mhp": "+40000",
                      "msp": "+20",
                      "def": "+20",
                      "mdef": "+4",
                      "flee": "+10",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "atk": "+1200",
                      "mhp": "+80000",
                      "msp": "+40",
                      "def": "+40",
                      "mdef": "+8",
                      "flee": "+20",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "atk": "+1800",
                      "mhp": "+120000",
                      "msp": "+60",
                      "def": "+60",
                      "mdef": "+12",
                      "flee": "+30",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "atk": "+2400",
                      "mhp": "+160000",
                      "msp": "+80",
                      "def": "+80",
                      "mdef": "+16",
                      "flee": "+40",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "atk": "+3000",
                      "mhp": "+200000",
                      "msp": "+100",
                      "def": "+100",
                      "mdef": "+20",
                      "flee": "+50",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "atk": "+3600",
                      "mhp": "+240000",
                      "msp": "+120",
                      "def": "+120",
                      "mdef": "+24",
                      "flee": "+60",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "atk": "+4200",
                      "mhp": "+280000",
                      "msp": "+140",
                      "def": "+140",
                      "mdef": "+28",
                      "flee": "+70",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "atk": "+4800",
                      "mhp": "+320000",
                      "msp": "+160",
                      "def": "+160",
                      "mdef": "+32",
                      "flee": "+80",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "atk": "+5400",
                      "mhp": "+360000",
                      "msp": "+180",
                      "def": "+180",
                      "mdef": "+36",
                      "flee": "+90",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "atk": "+6000",
                      "mhp": "+400000",
                      "msp": "+200",
                      "def": "+200",
                      "mdef": "+40",
                      "flee": "+100",
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
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 5338,
          "imageFile": "5338.png",
          "name": "Group Protection",
          "maxLevel": 5,
          "prerequisiteText": "Bionic Pharmacy Lv. 5",
          "group": "Active",
          "type": "Buff",
          "target": "You and party members",
          "recoversAp": "20",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Group_Protection",
          "description": "Coat equipment for you and your party members.\nConsumes 3 Advanced Glistening Coats.",
          "levelDetails": [],
          "fixedCastTime": "1 second",
          "variableCastTime": "1 second",
          "castDelay": "0.5 seconds",
          "cooldown": "10 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "220"
                },
                {
                  "level": 2,
                  "value": "260"
                },
                {
                  "level": 3,
                  "value": "300"
                },
                {
                  "level": 4,
                  "value": "340"
                },
                {
                  "level": 5,
                  "value": "380"
                }
              ]
            }
          ],
          "spCost": "180 + (Skill Level × 40)",
          "duration": "30 + (Skill Level × 30) seconds",
          "areaOfEffect": "15 x 15~31 x 31",
          "translations": {
            "pt-BR": {
              "name": " Group Protection ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Group_Protection"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/5338.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5338",
          "tree": {
            "idx": 7,
            "row": 0,
            "col": 7,
            "columns": 9,
            "requirements": [
              {
                "id": 5336,
                "level": 5,
                "name": "Bionic Pharmacy",
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
                "value": "180 + (Skill Level × 40)"
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
                "value": "10 seconds"
              },
              {
                "label": "Target",
                "value": "You and party members"
              },
              {
                "label": "Area of Effect",
                "value": "15 x 15~31 x 31"
              },
              {
                "label": "Duration",
                "value": "30 + (Skill Level × 30) seconds"
              },
              {
                "label": "AP Generated",
                "value": "20"
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
                      "sp-cost": "220"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "260"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "300"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "340"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "380"
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
          "id": 6005,
          "imageFile": "6005.png",
          "name": "Explosive Powder",
          "maxLevel": 5,
          "prerequisiteText": "Bionic Mastery level 3",
          "group": "Active",
          "type": "Melee Physical",
          "target": "Instant Cast",
          "recoversAp": "2",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Explosive_Powder",
          "description": "Scatters the volatile explosive powder, deals melee physical damage to surrounding enemies around the user for 3 hits.\nDeals higher damage for 5 hits when using under Research Report buff.\nDamage is additionally increased depending on the user's base level and POW.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK Per Hit 950%/1050%(Research Report)\nArea of Effect: 7x7Cells"
            },
            {
              "level": 2,
              "text": "ATK Per Hit 1500%/1700%(Research Report)\nArea of Effect: 7x7Cells"
            },
            {
              "level": 3,
              "text": "ATK Per Hit 2050%/2350%(Research Report)\nArea of Effect: 7x7Cells"
            },
            {
              "level": 4,
              "text": "ATK Per Hit 2600%/3000%(Research Report)\nArea of Effect: 7x7Cells"
            },
            {
              "level": 5,
              "text": "ATK Per Hit 3150%/3650%(Research Report)\nArea of Effect: 7x7Cells"
            }
          ],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "69"
                },
                {
                  "level": 2,
                  "value": "76"
                },
                {
                  "level": 3,
                  "value": "83"
                },
                {
                  "level": 4,
                  "value": "90"
                },
                {
                  "level": 5,
                  "value": "97"
                }
              ]
            }
          ],
          "spCost": "69 ~ 97?",
          "areaOfEffect": "7 x 7",
          "translations": {
            "pt-BR": {
              "name": " Explosive Powder ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Explosive_Powder"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/6005.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6005",
          "tree": {
            "idx": 8,
            "row": 0,
            "col": 8,
            "columns": 9,
            "requirements": [
              {
                "id": 5337,
                "level": 3,
                "name": "Bionics Mastery",
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
                "value": "69 ~ 97?"
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
                      "sp-cost": "69"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "76"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "83"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "90"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "97"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [
            {
              "skillName": "Explosive Powder",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/biolo/rebalance_3.md",
              "section": "8.2",
              "notes": [
                "Increases SP consumption from 74 to 97 based on level 5.",
                "Increases base damage from 2650%/3150%(Research Report)Atk to 3150%/3650%(Research Report)Atk based on level 5."
              ],
              "specRows": [
                {
                  "label": "SP Cost",
                  "before": "74",
                  "after": "97",
                  "scope": "Lv 5",
                  "source": "Increases SP consumption from 74 to 97 based on level 5."
                },
                {
                  "label": "Damage",
                  "before": "2650%/3150%(Research Report)Atk",
                  "after": "3150%/3650%(Research Report)Atk",
                  "scope": "Lv 5",
                  "source": "Increases base damage from 2650%/3150%(Research Report)Atk to 3150%/3650%(Research Report)Atk based on level 5."
                }
              ]
            },
            {
              "skillName": "Explosive Powder",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/biolo/rebalance_4.md",
              "section": "8.1",
              "notes": [
                "Increases base damage from 3150%/3650%(Research Report)Atk to 3750%/4250%(Research Report)Atk per hit based on level 5."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "3150%/3650%(Research Report)Atk",
                  "after": "3750%/4250%(Research Report)Atk per hit",
                  "scope": "Lv 5",
                  "source": "Increases base damage from 3150%/3650%(Research Report)Atk to 3750%/4250%(Research Report)Atk per hit based on level 5."
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
          "id": 5341,
          "imageFile": "5341.png",
          "name": "Acidified Zone (Earth)",
          "maxLevel": 5,
          "prerequisiteText": "Bionics Mastery Lv. 3 and Bionic Pharmacy Lv. 5",
          "group": "Active",
          "type": "Ranged Physical",
          "target": "1 Target",
          "recoversAp": "4(1~3Lv), 5(4~5Lv)",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Consume 2 Earth Acid Bottles, dealing 7 hits of Earth Ranged Physical damage to the target and surrounding area.\nAdditional Damage increase based on the caster's base level and POW.\nIf the attack target is a player, there is a very low chance to create acidic AoE zone 1 cell on the target's location.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK per hit 400%/Effective range: : 3 X 3 cells"
            },
            {
              "level": 2,
              "text": "ATK per hit 800%/Effective range: : 3 X 3 cells"
            },
            {
              "level": 3,
              "text": "ATK per hit 1200%/Effective range: : 5 X 5 cells"
            },
            {
              "level": 4,
              "text": "ATK per hit 1600%/Effective range: : 5 X 5 cells"
            },
            {
              "level": 5,
              "text": "ATK per hit 2000%/Effective range: : 7 X 7 cells"
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "castDelay": "0.15 seconds",
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
                }
              ]
            }
          ],
          "translations": {
            "pt-BR": {
              "name": " Acidified Zone (Earth) ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Acidified_Zone_(Earth)"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/5341.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5341",
          "tree": {
            "idx": 9,
            "row": 1,
            "col": 0,
            "columns": 9,
            "requirements": [
              {
                "id": 5336,
                "level": 5,
                "name": "Bionic Pharmacy",
                "visible": true
              },
              {
                "id": 5337,
                "level": 3,
                "name": "Bionics Mastery",
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
                "label": "Cast Delay",
                "value": "0.15 seconds"
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
                "label": "AP Generated",
                "value": "4(1~3Lv), 5(4~5Lv)"
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
          "id": 5342,
          "imageFile": "5342.png",
          "name": "Acidified Zone (Wind)",
          "maxLevel": 5,
          "prerequisiteText": "Bionics Mastery Lv. 3 and Bionic Pharmacy Lv. 5",
          "group": "Active",
          "type": "Ranged Physical",
          "target": "1 Target",
          "recoversAp": "4(1~3Lv), 5(4~5Lv)",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Consume 2 Gale Acid Bottles, dealing 7 hits of Wind Ranged Physical damage to the target and surrounding area.\nAdditional Damage increase based on the caster's base level and POW.\nIf the attack target is a player, there is a very low chance to create acidic AoE zone 1 cell on the target's location.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK per hit 400%/Effective range: : 3 X 3 cells"
            },
            {
              "level": 2,
              "text": "ATK per hit 800%/Effective range: : 3 X 3 cells"
            },
            {
              "level": 3,
              "text": "ATK per hit 1200%/Effective range: : 5 X 5 cells"
            },
            {
              "level": 4,
              "text": "ATK per hit 1600%/Effective range: : 5 X 5 cells"
            },
            {
              "level": 5,
              "text": "ATK per hit 2000%/Effective range: : 7 X 7 cells"
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "castDelay": "0.15 seconds",
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
                }
              ]
            }
          ],
          "translations": {
            "pt-BR": {
              "name": " Acidified Zone (Wind) ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Acidified_Zone_(Wind)"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/5342.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5342",
          "tree": {
            "idx": 10,
            "row": 1,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 5336,
                "level": 5,
                "name": "Bionic Pharmacy",
                "visible": true
              },
              {
                "id": 5337,
                "level": 3,
                "name": "Bionics Mastery",
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
                "label": "Cast Delay",
                "value": "0.15 seconds"
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
                "label": "AP Generated",
                "value": "4(1~3Lv), 5(4~5Lv)"
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
          "id": 5346,
          "imageFile": "5346.png",
          "name": "Create Creeper",
          "maxLevel": 5,
          "prerequisiteText": "Bionics Mastery Lv. 5",
          "group": "Active",
          "type": "Summon",
          "target": "Self",
          "recoversAp": "10",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Create_Creeper",
          "description": "Summon a tough vine monster.\nUp to 1 creeper can be summoned at the same time.\nConsumes 1 Advanced Plant Bottle.",
          "levelDetails": [],
          "fixedCastTime": "1 second",
          "variableCastTime": "1 second",
          "castDelay": "0 seconds",
          "cooldown": "15 seconds",
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
                  "value": "96"
                },
                {
                  "level": 3,
                  "value": "112"
                },
                {
                  "level": 4,
                  "value": "128"
                },
                {
                  "level": 5,
                  "value": "144"
                }
              ]
            }
          ],
          "spCost": "64 + (Skill Level × 16)",
          "duration": "60 + (Skill Level × 60) seconds",
          "translations": {
            "pt-BR": {
              "name": " Create Creeper ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Create_Creeper"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/5346.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5346",
          "tree": {
            "idx": 12,
            "row": 1,
            "col": 3,
            "columns": 9,
            "requirements": [
              {
                "id": 5337,
                "level": 5,
                "name": "Bionics Mastery",
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
                "value": "64 + (Skill Level × 16)"
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
                "value": "15 seconds"
              },
              {
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "Duration",
                "value": "60 + (Skill Level × 60) seconds"
              },
              {
                "label": "AP Generated",
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
                      "sp-cost": "80"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "96"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "112"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "128"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "144"
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
          "id": 5339,
          "imageFile": "5339.png",
          "name": "Full Shadow Protection",
          "maxLevel": 4,
          "prerequisiteText": "Bionic Pharmacy Lv. 5",
          "group": "Active",
          "type": "Buff",
          "target": "You and Allies",
          "recoversAp": "2(1~2Lv), 3(3~4Lv)",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Full_Shadow_Protection",
          "description": "Coat the Shadow Equipment of 1 target to protect it from being stripped.\nConsumes 1 Advanced Glistening Coat.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Effect Duration : 90 seconds"
            },
            {
              "level": 2,
              "text": "Effect Duration : 120 seconds"
            },
            {
              "level": 3,
              "text": "Effect Duration : 150 seconds"
            },
            {
              "level": 4,
              "text": "Effect Duration : 180 seconds"
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
                  "value": "120"
                },
                {
                  "level": 2,
                  "value": "130"
                },
                {
                  "level": 3,
                  "value": "140"
                },
                {
                  "level": 4,
                  "value": "150"
                }
              ]
            }
          ],
          "spCost": "110 + (Skill Level x 10)",
          "duration": "30 + (Skill Level × 10) seconds",
          "translations": {
            "pt-BR": {
              "name": " Full Shadow Protection ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Full_Shadow_Protection"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/5339.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5339",
          "tree": {
            "idx": 14,
            "row": 1,
            "col": 5,
            "columns": 9,
            "requirements": [
              {
                "id": 5336,
                "level": 5,
                "name": "Bionic Pharmacy",
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
              },
              {
                "label": "SP Cost",
                "value": "110 + (Skill Level x 10)"
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
                "value": "You and Allies"
              },
              {
                "label": "Duration",
                "value": "30 + (Skill Level × 10) seconds"
              },
              {
                "label": "AP Generated",
                "value": "2(1~2Lv), 3(3~4Lv)"
              }
            ],
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
                      "effect": "Effect Duration : 90 seconds",
                      "sp-cost": "120"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Effect Duration : 120 seconds",
                      "sp-cost": "130"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Effect Duration : 150 seconds",
                      "sp-cost": "140"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Effect Duration : 180 seconds",
                      "sp-cost": "150"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [
            {
              "skillName": "Full Shadow Protection",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/biolo/rebalance_2.md",
              "section": "4.3",
              "notes": [
                "Increases duration from 60 seconds to 180 seconds base on level 4."
              ],
              "specRows": [
                {
                  "label": "Duration",
                  "before": "60 seconds",
                  "after": "180 seconds base on level 4",
                  "scope": "",
                  "source": "Increases duration from 60 seconds to 180 seconds base on level 4."
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
          "id": 6006,
          "imageFile": "6006.png",
          "name": "Mayhemic Thorns",
          "maxLevel": 10,
          "prerequisiteText": "Bionic Mastery level 5, Explosive Powder level 3",
          "group": "Active",
          "type": "Ranged Physical",
          "target": "Single Target",
          "recoversAp": "2",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Mayhemic_Thorns",
          "description": "Summons the giant thorn plant to the target and stike the surrounding area, deals long ranged physical damage to target and surrounding enemies around the target with the range for 3 hits.\nDeals higher damage for 4 hits when using under Research Report buff.\nDamage is additionally increased according to the user's base level and POW, and critical damage is applied according to the user's critical probability.\nIn the case of critical damage, half of the total critical damage increase options are applied.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK Per Hit 500%/650%(Research Report)\nArea of Effect: 7x7Cells"
            },
            {
              "level": 2,
              "text": "ATK Per Hit 800%/950%(Research Report)\nArea of Effect: 7x7Cells"
            },
            {
              "level": 3,
              "text": "ATK Per Hit 1100%/1250%(Research Report)\nArea of Effect: 7x7Cells"
            },
            {
              "level": 4,
              "text": "ATK Per Hit 1400%/1550%(Research Report)\nArea of Effect: 7x7Cells"
            },
            {
              "level": 5,
              "text": "ATK Per Hit 1700%/1850%(Research Report)\nArea of Effect: 7x7Cells"
            },
            {
              "level": 6,
              "text": "ATK Per Hit 2000%/2150%(Research Report)\nArea of Effect: 9x9Cells"
            },
            {
              "level": 7,
              "text": "ATK Per Hit 2300%/2450%(Research Report)\nArea of Effect: 9x9Cells"
            },
            {
              "level": 8,
              "text": "ATK Per Hit 2600%/2750%(Research Report)\nArea of Effect: 9x9Cells"
            },
            {
              "level": 9,
              "text": "ATK Per Hit 2900%/3050%(Research Report)\nArea of Effect: 9x9Cells"
            },
            {
              "level": 10,
              "text": "ATK Per Hit 3200%/3350%(Research Report)\nArea of Effect: 9x9Cells"
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "1 second",
          "castDelay": "0.15 seconds",
          "cooldown": "0.7 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "68"
                },
                {
                  "level": 2,
                  "value": "70"
                },
                {
                  "level": 3,
                  "value": "72"
                },
                {
                  "level": 4,
                  "value": "74"
                },
                {
                  "level": 5,
                  "value": "76"
                },
                {
                  "level": 6,
                  "value": "78"
                },
                {
                  "level": 7,
                  "value": "80"
                },
                {
                  "level": 8,
                  "value": "82"
                },
                {
                  "level": 9,
                  "value": "84"
                },
                {
                  "level": 10,
                  "value": "86"
                }
              ]
            }
          ],
          "spCost": "68 ~ 86",
          "translations": {
            "pt-BR": {
              "name": " Mayhemic Thorns ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Mayhemic_Thorns"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/6006.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6006",
          "tree": {
            "idx": 15,
            "row": 1,
            "col": 6,
            "columns": 9,
            "requirements": [
              {
                "id": 5337,
                "level": 5,
                "name": "Bionics Mastery",
                "visible": true
              },
              {
                "id": 6005,
                "level": 3,
                "name": "Explosive Powder",
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
                "value": "68 ~ 86"
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
                "value": "0.15 seconds"
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
                      "sp-cost": "68"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "70"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "72"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "74"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "76"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "area-of-effect": "9x9",
                      "sp-cost": "78"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "area-of-effect": "9x9",
                      "sp-cost": "80"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "area-of-effect": "9x9",
                      "sp-cost": "82"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "area-of-effect": "9x9",
                      "sp-cost": "84"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "area-of-effect": "9x9",
                      "sp-cost": "86"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [
            {
              "skillName": "Mayhemic Thorns",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/biolo/rebalance_3.md",
              "section": "9.1",
              "notes": [
                "reduces number of hit while under Research Report buff from 5 hits to 4 hits.",
                "Increases base damage from 2700%/3250%(Research Report)Atk to 3200%/3350%(Research Report)Atk based on level 10."
              ],
              "specRows": [
                {
                  "label": "Number Of Hit While Under Research Report Buff",
                  "before": "5 hits",
                  "after": "4 hits",
                  "scope": "",
                  "source": "reduces number of hit while under Research Report buff from 5 hits to 4 hits."
                },
                {
                  "label": "Damage",
                  "before": "2700%/3250%(Research Report)Atk",
                  "after": "3200%/3350%(Research Report)Atk",
                  "scope": "Lv 10",
                  "source": "Increases base damage from 2700%/3250%(Research Report)Atk to 3200%/3350%(Research Report)Atk based on level 10."
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
          "id": 5343,
          "imageFile": "5343.png",
          "name": "Acidified Zone (Fire)",
          "maxLevel": 5,
          "prerequisiteText": "Acidified Zone (Earth) Lv. 1",
          "group": "Active",
          "type": "Ranged Physical",
          "target": "1 Target",
          "recoversAp": "4(1~3Lv), 5(4~5Lv)",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Consume 2 Flame Acid Bottles, dealing 7 hits of Fire Ranged Physical damage to the target and surrounding area.\nAdditional Damage increase based on the caster's base level and POW.\nIf the attack target is a player, there is a very low chance to create acidic AoE zone 1 cell on the target's location.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK per hit 400%/Effective range: : 3 X 3 cells"
            },
            {
              "level": 2,
              "text": "ATK per hit 800%/Effective range: : 3 X 3 cells"
            },
            {
              "level": 3,
              "text": "ATK per hit 1200%/Effective range: : 5 X 5 cells"
            },
            {
              "level": 4,
              "text": "ATK per hit 1600%/Effective range: : 5 X 5 cells"
            },
            {
              "level": 5,
              "text": "ATK per hit 2000%/Effective range: : 7 X 7 cells"
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "castDelay": "0.15 seconds",
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
                }
              ]
            }
          ],
          "translations": {
            "pt-BR": {
              "name": " Acidified Zone (Fire) ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Acidified_Zone_(Fire)"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/5343.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5343",
          "tree": {
            "idx": 16,
            "row": 1,
            "col": 7,
            "columns": 9,
            "requirements": [
              {
                "id": 5341,
                "level": 1,
                "name": "Acidified Zone (Earth)",
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
                "label": "Cast Delay",
                "value": "0.15 seconds"
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
                "label": "AP Generated",
                "value": "4(1~3Lv), 5(4~5Lv)"
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
          "id": 5340,
          "imageFile": "5340.png",
          "name": "Acidified Zone (Water)",
          "maxLevel": 5,
          "prerequisiteText": "Acidified Zone (Wind) Lv. 1",
          "group": "Active",
          "type": "Ranged Physical",
          "target": "1 Target",
          "recoversAp": "4(1~3Lv), 5(4~5Lv)",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Consume 2 Icicle Acid Bottles, dealing 7 hits of Water Ranged Physical damage to the target and surrounding area.\nAdditional Damage increase based on the caster's base level and POW.\nIf the attack target is a player, there is a very low chance to create acidic AoE zone 1 cell on the target's location.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK per hit 400%/Effective range: : 3 X 3 cells"
            },
            {
              "level": 2,
              "text": "ATK per hit 800%/Effective range: : 3 X 3 cells"
            },
            {
              "level": 3,
              "text": "ATK per hit 1200%/Effective range: : 5 X 5 cells"
            },
            {
              "level": 4,
              "text": "ATK per hit 1600%/Effective range: : 5 X 5 cells"
            },
            {
              "level": 5,
              "text": "ATK per hit 2000%/Effective range: : 7 X 7 cells"
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "castDelay": "0.15 seconds",
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
                }
              ]
            }
          ],
          "translations": {
            "pt-BR": {
              "name": " Acidified Zone (Water) ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Acidified_Zone_(Water)"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/5340.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5340",
          "tree": {
            "idx": 17,
            "row": 1,
            "col": 8,
            "columns": 9,
            "requirements": [
              {
                "id": 5342,
                "level": 1,
                "name": "Acidified Zone (Wind)",
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
                "label": "Cast Delay",
                "value": "0.15 seconds"
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
                "label": "AP Generated",
                "value": "4(1~3Lv), 5(4~5Lv)"
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
          "id": 5344,
          "imageFile": "5344.png",
          "name": "Create Wooden Warrior",
          "maxLevel": 5,
          "prerequisiteText": "Create Creeper Lv. 3",
          "group": "Active",
          "type": "Summon",
          "target": "Self",
          "recoversAp": "20",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Create_Wooden_Warrior",
          "description": "Summon a wooden warrior.\nUp to 1 wooden warrior can be summoned.\nThis warrior increases Cart Tornado and Cart Cannon damage for its duration.\nConsumes 2 Advanced Plant Bottles.",
          "levelDetails": [],
          "fixedCastTime": "1 second",
          "variableCastTime": "1 second",
          "castDelay": "0 seconds",
          "cooldown": "30 seconds",
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
            }
          ],
          "spCost": "80 + (Skill Level × 20)",
          "duration": "60 + (Skill Level × 60) seconds",
          "translations": {
            "pt-BR": {
              "name": " Create Wooden Warrior ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Create_Wooden_Warrior"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/5344.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5344",
          "tree": {
            "idx": 18,
            "row": 2,
            "col": 0,
            "columns": 9,
            "requirements": [
              {
                "id": 5346,
                "level": 3,
                "name": "Create Creeper",
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
                "value": "80 + (Skill Level × 20)"
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
                "value": "30 seconds"
              },
              {
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "Duration",
                "value": "60 + (Skill Level × 60) seconds"
              },
              {
                "label": "AP Generated",
                "value": "20"
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
                      "sp-cost": "120"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "140"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "160"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "180"
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
          "id": 5345,
          "imageFile": "5345.png",
          "name": "Create Wooden Fairy",
          "maxLevel": 5,
          "prerequisiteText": "Create Creeper Lv. 3",
          "group": "Active",
          "type": "Summon",
          "target": "Self",
          "recoversAp": "20",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Create_Wooden_Fairy",
          "description": "Summon a wooden fairy.\nUp to 1 wooden fairy can be summoned.\nThis fairy increases Spore Explosion damage for its duration.\nConsumes 2 Advanced Plant Bottles.",
          "levelDetails": [],
          "fixedCastTime": "1 second",
          "variableCastTime": "1 second",
          "castDelay": "0 seconds",
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
                  "value": "155"
                },
                {
                  "level": 3,
                  "value": "180"
                },
                {
                  "level": 4,
                  "value": "205"
                },
                {
                  "level": 5,
                  "value": "230"
                }
              ]
            }
          ],
          "spCost": "Lv. 1 : 120 Lv. 2 onwards : 130 + (Skill Level × 25)",
          "duration": "60 + (Skill Level × 60) seconds",
          "translations": {
            "pt-BR": {
              "name": " Create Wooden Fairy ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Create_Wooden_Fairy"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/5345.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5345",
          "tree": {
            "idx": 19,
            "row": 2,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 5346,
                "level": 3,
                "name": "Create Creeper",
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
                "value": "Lv. 1 : 120 Lv. 2 onwards : 130 + (Skill Level × 25)"
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
                "value": "30 seconds"
              },
              {
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "Duration",
                "value": "60 + (Skill Level × 60) seconds"
              },
              {
                "label": "AP Generated",
                "value": "20"
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
                      "sp-cost": "155"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "180"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "205"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "230"
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
          "id": 6509,
          "imageFile": "6509.png",
          "name": "Mystery Powder",
          "maxLevel": 5,
          "prerequisiteText": "Explosive Powder 5",
          "group": "Active",
          "type": "Melee physical",
          "target": "Single target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Scatters very small fine powder to the target, deals melee physical damage to the target and surrounding enemies around the target.\nAdditionally, grants Mystery Powder buff to the user, allowing them to use Dust Explosion for 60 seconds.\nDeals additional damage depends on user's base level and POW.",
          "levelDetails": [
            {
              "level": 1,
              "text": "5500% Atk / area of effect : 5 x 5 cells."
            },
            {
              "level": 2,
              "text": "9500% Atk / area of effect : 5 x 5 cells."
            },
            {
              "level": 3,
              "text": "13500% Atk / area of effect : 5 x 5 cells."
            },
            {
              "level": 4,
              "text": "17500% Atk / area of effect : 7 x 7 cells."
            },
            {
              "level": 5,
              "text": "21500% Atk / area of effect : 7 x 7 cells."
            }
          ],
          "levelExtras": [],
          "translations": {
            "pt-BR": {
              "name": " Mystery Powder ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Mystery_Powder"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/6509.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6509",
          "tree": {
            "idx": 22,
            "row": 2,
            "col": 4,
            "columns": 9,
            "requirements": [
              {
                "id": 6005,
                "level": 5,
                "name": "Explosive Powder",
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
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 6510,
          "imageFile": "6510.png",
          "name": "Dust Explosion",
          "maxLevel": 5,
          "prerequisiteText": "Mystery Powder 3",
          "group": "Active",
          "type": "melee physical",
          "target": "Single target",
          "recoversAp": "2",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Can only be used when Mystery Powder buff is active.\nCauses a dust explosion to the target, deals melee physical damage to the target and surrounding enemies around the target for 5 hits.\nIf Research Report buff is active, the skill will deal more damage.\nDeals additional damage depends on user's base level and POW.",
          "levelDetails": [
            {
              "level": 1,
              "text": "1050% Atk / 1250% Atk (Research Report) per hit / area of effect: 5 x 5 cells."
            },
            {
              "level": 2,
              "text": "1650% Atk / 2050% Atk (Research Report) per hit / area of effect: 5 x 5 cells."
            },
            {
              "level": 3,
              "text": "2250% Atk / 2850% Atk (Research Report) per hit / area of effect: 5 x 5 cells."
            },
            {
              "level": 4,
              "text": "2850% Atk / 3650% Atk (Research Report) per hit / area of effect: 7 x 7 cells."
            },
            {
              "level": 5,
              "text": "3450% Atk / 4450% Atk (Research Report) per hit / area of effect: 7 x 7 cells."
            }
          ],
          "levelExtras": [],
          "translations": {
            "pt-BR": {
              "name": " Dust Explosion ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Dust_Explosion"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/6510.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6510",
          "tree": {
            "idx": 23,
            "row": 2,
            "col": 5,
            "columns": 9,
            "requirements": [
              {
                "id": 6509,
                "level": 3,
                "name": "Mystery Powder",
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
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 5347,
          "imageFile": "5347.png",
          "name": "Research Report",
          "maxLevel": 1,
          "prerequisiteText": "Acidified Zone (Fire) Lv. 3 and Acidified Zone (Water) Lv. 3",
          "group": "Active(AP)",
          "type": "Buff",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "100",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Research_Report",
          "description": "Report the findings of your study.\nIncreases the damage of the Acidified Zone skills for 150 seconds and reduces the cost of bottles to use the skill from 2 to 1.\nIn addition, the Acidified Zone skills increases the damage dealt to Formless and Plant monsters.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Increase Acidified Zone Damage\n/ Acidified Zone skills deal Additional damage to Formless and Plant enemies\n/ Reduced Acid Bottle Cost by 1 when casting Acidified Zone"
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "2 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "60 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "60"
                }
              ]
            }
          ],
          "spCost": "60",
          "duration": "150 seconds",
          "translations": {
            "pt-BR": {
              "name": " Research Report ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Research_Report"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/5347.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5347",
          "tree": {
            "idx": 24,
            "row": 2,
            "col": 6,
            "columns": 9,
            "requirements": [
              {
                "id": 5340,
                "level": 3,
                "name": "Acidified Zone (Water)",
                "visible": true
              },
              {
                "id": 5343,
                "level": 3,
                "name": "Acidified Zone (Fire)",
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
                "value": "1"
              },
              {
                "label": "SP Cost",
                "value": "60"
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
                "value": "60 seconds"
              },
              {
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "Duration",
                "value": "150 seconds"
              },
              {
                "label": "AP Consumed",
                "value": "100"
              }
            ],
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
                      "effect": "Increase Acidified Zone Damage\nAcidified Zone skills deal Additional damage to Formless and Plant enemies\nReduced Acid Bottle Cost by 1 when casting Acidified Zone",
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
              "skillName": "Research Report",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/biolo/rebalance_2.md",
              "section": "4.4",
              "notes": [
                "Reduces fixed casting time from 1 second to 0.5 seconds.",
                "Reduces cooldown from 120 seconds to 60 seconds.",
                "Increases duration from 60 seconds to 150 seconds."
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
                  "label": "Cooldown",
                  "before": "120 seconds",
                  "after": "60 seconds",
                  "scope": "",
                  "source": "Reduces cooldown from 120 seconds to 60 seconds."
                },
                {
                  "label": "Duration",
                  "before": "60 seconds",
                  "after": "150 seconds",
                  "scope": "",
                  "source": "Increases duration from 60 seconds to 150 seconds."
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
          "id": 5348,
          "imageFile": "5348.png",
          "name": "Create Hell Tree",
          "maxLevel": 5,
          "prerequisiteText": "Create Wooden Fairy Lv. 3 and Create Wooden Warrior Lv. 3",
          "group": "Active (AP)",
          "type": "Summon",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "110 - (Skill Level × 10)",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Create_Hell_Tree",
          "description": "Summon a hellish tree.\nUp to 1 hellish tree can be summoned at the same time.\nConsumes 3 Advanced Plant Bottles.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Duration : 60 sec"
            },
            {
              "level": 2,
              "text": "Duration : 90 sec"
            },
            {
              "level": 3,
              "text": "Duration : 120 sec"
            },
            {
              "level": 4,
              "text": "Duration : 150 sec"
            },
            {
              "level": 5,
              "text": "Duration : 180 sec"
            }
          ],
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
          "duration": "[30 + (Skill Level × 30)] seconds",
          "translations": {
            "pt-BR": {
              "name": " Create Hell Tree ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Create_Hell_Tree"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/5348.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5348",
          "tree": {
            "idx": 25,
            "row": 2,
            "col": 7,
            "columns": 9,
            "requirements": [
              {
                "id": 5344,
                "level": 3,
                "name": "Create Wooden Warrior",
                "visible": true
              },
              {
                "id": 5345,
                "level": 3,
                "name": "Create Wooden Fairy",
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
                "label": "SP Cost",
                "value": "100"
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
                "label": "AP Consumed",
                "value": "110 - (Skill Level × 10)"
              }
            ],
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
                      "duration": "60 seconds",
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "90 seconds",
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "120 seconds",
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "150 seconds",
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "180 seconds",
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
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        }
      ]
    },
    {
      "id": "previous-1",
      "label": "Genetic",
      "pointLimit": 69,
      "tree": {
        "columns": 9,
        "rows": 5
      },
      "skills": [
        {
          "id": 2494,
          "imageFile": "2494.png",
          "name": "Change Material",
          "maxLevel": 1,
          "prerequisiteText": "Genetic Basic",
          "group": "Active",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Change_Material",
          "description": "Learn the ability to create new items by combining various items. Items can't be made by combining random items. You have to combine the correct items with exact quantities. To get more details about combining items, please travel around Rune Midgard.",
          "levelDetails": [],
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
                }
              ]
            }
          ],
          "spCost": "10",
          "translations": {
            "pt-BR": {
              "name": " Change Material ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Change_Material"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/2494.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2494",
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
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2474,
          "imageFile": "2474.png",
          "name": "Sword Mastery",
          "maxLevel": 5,
          "prerequisiteText": "Genetic Basic",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Sword_Mastery",
          "description": "Increase ATK and Accuracy rate of One Handed Sword or Dagger Class Weapons.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK +10 / Accuracy Rate +3"
            },
            {
              "level": 2,
              "text": "ATK +20 / Accuracy Rate +6"
            },
            {
              "level": 3,
              "text": "ATK +30 / Accuracy Rate +9"
            },
            {
              "level": 4,
              "text": "ATK +40 / Accuracy Rate +12"
            },
            {
              "level": 5,
              "text": "ATK +50 / Accuracy Rate +15"
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
            }
          ],
          "translations": {
            "pt-BR": {
              "name": " Sword Mastery ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Sword_Mastery"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/2474.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2474",
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
                    "id": "accuracy-rate",
                    "label": "Accuracy Rate"
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
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "atk": "+10",
                      "accuracy-rate": "+3",
                      "sp-cost": "0",
                      "data-1": "10",
                      "data-2": "3"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "atk": "+20",
                      "accuracy-rate": "+6",
                      "sp-cost": "0",
                      "data-1": "20",
                      "data-2": "6"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "atk": "+30",
                      "accuracy-rate": "+9",
                      "sp-cost": "0",
                      "data-1": "30",
                      "data-2": "9"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "atk": "+40",
                      "accuracy-rate": "+12",
                      "sp-cost": "0",
                      "data-1": "40",
                      "data-2": "12"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "atk": "+50",
                      "accuracy-rate": "+15",
                      "sp-cost": "0",
                      "data-1": "50",
                      "data-2": "15"
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
          "id": 2497,
          "imageFile": "2497.png",
          "name": "Special Pharmacy",
          "maxLevel": 10,
          "prerequisiteText": "Geneticist Basic",
          "group": "Active",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Special_Pharmacy",
          "description": "Geneticist can create more potions or liquid medicine. The number of liquid medicine that can be created increases based on the Geneticist's INT and skill level learned. To make liquid medicine, you need a specific Potion Making Manual.",
          "levelDetails": [],
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
                  "value": "8"
                },
                {
                  "level": 4,
                  "value": "9"
                },
                {
                  "level": 5,
                  "value": "9"
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
                  "value": "11"
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
              "label": "Data 2",
              "values": [
                {
                  "level": 1,
                  "value": "600"
                },
                {
                  "level": 2,
                  "value": "580"
                },
                {
                  "level": 3,
                  "value": "560"
                },
                {
                  "level": 4,
                  "value": "540"
                },
                {
                  "level": 5,
                  "value": "520"
                },
                {
                  "level": 6,
                  "value": "500"
                },
                {
                  "level": 7,
                  "value": "480"
                },
                {
                  "level": 8,
                  "value": "460"
                },
                {
                  "level": 9,
                  "value": "440"
                },
                {
                  "level": 10,
                  "value": "420"
                }
              ]
            }
          ],
          "spCost": "12",
          "translations": {
            "pt-BR": {
              "name": " Special Pharmacy ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Special_Pharmacy"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/2497.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2497",
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
                      "data-1": "7",
                      "data-2": "600"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "12",
                      "data-1": "8",
                      "data-2": "580"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "12",
                      "data-1": "8",
                      "data-2": "560"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "12",
                      "data-1": "9",
                      "data-2": "540"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "12",
                      "data-1": "9",
                      "data-2": "520"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "12",
                      "data-1": "10",
                      "data-2": "500"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "12",
                      "data-1": "10",
                      "data-2": "480"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "12",
                      "data-1": "11",
                      "data-2": "460"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "12",
                      "data-1": "11",
                      "data-2": "440"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "sp-cost": "12",
                      "data-1": "12",
                      "data-2": "420"
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
          "id": 2475,
          "imageFile": "2475.png",
          "name": "Cart Remodeling",
          "maxLevel": 5,
          "prerequisiteText": "Genetic Basic",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Cart_Remodeling",
          "description": "Increase Accuracy rate of Cart Revolution, Cart Tornado and Cart Cannon by remodeling the cart. Extend Maximum loading space of the cart.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Cart Weight +500 / Cart skill HIT bonus +4"
            },
            {
              "level": 2,
              "text": "Cart Weight +1000 / Cart skill HIT bonus +8"
            },
            {
              "level": 3,
              "text": "Cart Weight +1500 / Cart skill HIT bonus +12"
            },
            {
              "level": 4,
              "text": "Cart Weight +2000 / Cart skill HIT bonus +16"
            },
            {
              "level": 5,
              "text": "Cart Weight +2500 / Cart skill HIT bonus +20"
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
                  "value": "8"
                },
                {
                  "level": 3,
                  "value": "12"
                },
                {
                  "level": 4,
                  "value": "16"
                },
                {
                  "level": 5,
                  "value": "20"
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
                },
                {
                  "level": 4,
                  "value": "20000"
                },
                {
                  "level": 5,
                  "value": "25000"
                }
              ]
            }
          ],
          "translations": {
            "pt-BR": {
              "name": " Cart Remodeling ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Cart_Remodeling"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/2475.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2475",
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
                    "id": "cart-skill-hit-bonus",
                    "label": "Cart Skill Hit Bonus"
                  },
                  {
                    "id": "cart-weight",
                    "label": "Cart Weight"
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
                      "cart-weight": "+500",
                      "cart-skill-hit-bonus": "+4",
                      "sp-cost": "0",
                      "data-1": "4",
                      "data-2": "5000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "cart-weight": "+1000",
                      "cart-skill-hit-bonus": "+8",
                      "sp-cost": "0",
                      "data-1": "8",
                      "data-2": "10000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "cart-weight": "+1500",
                      "cart-skill-hit-bonus": "+12",
                      "sp-cost": "0",
                      "data-1": "12",
                      "data-2": "15000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "cart-weight": "+2000",
                      "cart-skill-hit-bonus": "+16",
                      "sp-cost": "0",
                      "data-1": "16",
                      "data-2": "20000"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "cart-weight": "+2500",
                      "cart-skill-hit-bonus": "+20",
                      "sp-cost": "0",
                      "data-1": "20",
                      "data-2": "25000"
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
          "id": 2495,
          "imageFile": "2495.png",
          "name": "Mixed Cooking",
          "maxLevel": 2,
          "prerequisiteText": "Special Pharmacy 1",
          "group": "Active",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Mixed_Cooking",
          "description": "Cook delicious dishes by mixing various ingredients. You can make 10 dishes at once with level 2 Mixed Cooking. Need a 'Cook Recipe (Cook Book)' to make specific food.",
          "levelDetails": [
            {
              "level": 1,
              "text": "5 SP / Create 1 Food Item"
            },
            {
              "level": 2,
              "text": "40 SP / Create 10 Food Items"
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
                  "value": "40"
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
                  "value": "10"
                }
              ]
            }
          ],
          "spCost": "5/40",
          "translations": {
            "pt-BR": {
              "name": " Mixed Cooking ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Mixed_Cooking"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/2495.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2495",
          "tree": {
            "idx": 8,
            "row": 0,
            "col": 8,
            "columns": 9,
            "requirements": [
              {
                "id": 2497,
                "level": 1,
                "name": "Special Pharmacy",
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
                "value": "5/40"
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
                    "id": "data-1",
                    "label": "Data 1"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "5 SP / Create 1 Food Item",
                      "sp-cost": "5",
                      "data-1": "1"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "40 SP / Create 10 Food Items",
                      "sp-cost": "40",
                      "data-1": "10"
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
          "id": 2479,
          "imageFile": "2479.png",
          "name": "Thorn Trap",
          "maxLevel": 5,
          "prerequisiteText": "Special Pharmacy 2",
          "group": "Special / Damage",
          "type": "",
          "target": "Ground",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Thorn_Trap",
          "description": "Set Thorn Trap on the ground in a 1 cell range and trap enemies on it. Target receives damage continuously while trapped on the ground. If the trapped target gets fire attack, it burns the thorn trap and the target can be released. Consumes 1 Thorny Plant Seed.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Skill Duration 10 sec."
            },
            {
              "level": 2,
              "text": "Skill Duration 12 sec."
            },
            {
              "level": 3,
              "text": "Skill Duration 14 sec."
            },
            {
              "level": 4,
              "text": "Skill Duration 16 sec."
            },
            {
              "level": 5,
              "text": "Skill Duration 18 sec."
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "1.5 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "0 seconds",
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
                  "value": "26"
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
                  "value": "38"
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
              "label": "Data 1",
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
            },
            {
              "label": "Data 2",
              "values": [
                {
                  "level": 1,
                  "value": "300"
                },
                {
                  "level": 2,
                  "value": "500"
                },
                {
                  "level": 3,
                  "value": "700"
                },
                {
                  "level": 4,
                  "value": "900"
                },
                {
                  "level": 5,
                  "value": "1100"
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
          "spCost": "?",
          "duration": "[8 + (Skill Level × 2)] seconds",
          "castRange": "9 cells",
          "areaOfEffect": "3 x 3",
          "translations": {
            "pt-BR": {
              "name": " Thorn Trap ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Thorn_Trap"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/2479.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2479",
          "tree": {
            "idx": 9,
            "row": 1,
            "col": 0,
            "columns": 9,
            "requirements": [
              {
                "id": 2497,
                "level": 2,
                "name": "Special Pharmacy",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Special / Damage Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "?"
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
                "value": "0 seconds"
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
                "value": "[8 + (Skill Level × 2)] seconds"
              }
            ],
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
                    "id": "range",
                    "label": "Range"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Skill Duration 10 sec",
                      "sp-cost": "22",
                      "range": "9 cells",
                      "data-1": "10000",
                      "data-2": "300",
                      "data-3": "3"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Skill Duration 12 sec",
                      "sp-cost": "26",
                      "range": "9 cells",
                      "data-1": "12000",
                      "data-2": "500",
                      "data-3": "3"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Skill Duration 14 sec",
                      "sp-cost": "30",
                      "range": "9 cells",
                      "data-1": "14000",
                      "data-2": "700",
                      "data-3": "3"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Skill Duration 16 sec",
                      "sp-cost": "34",
                      "range": "9 cells",
                      "data-1": "16000",
                      "data-2": "900",
                      "data-3": "3"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Skill Duration 18 sec",
                      "sp-cost": "38",
                      "range": "9 cells",
                      "data-1": "18000",
                      "data-2": "1100",
                      "data-3": "3"
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
          "id": 2480,
          "imageFile": "2480.png",
          "name": "Blood Sucker",
          "maxLevel": 5,
          "prerequisiteText": "Special Pharmacy 3",
          "group": "Active / Buff",
          "type": "",
          "target": "Player",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Blood_Sucker",
          "description": "Gives the party member a chance to drain HP when dealing physical attack.\nDrain amount and chance increases based on skill level.\nConsumes 5 Blood Sucker Plant Seeds when used.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Chance 1%/Drain amount 1%/Duration 40 sec"
            },
            {
              "level": 2,
              "text": "Chance 3%/Drain amount 2%/Duration 100 sec"
            },
            {
              "level": 3,
              "text": "Chance 5%/Drain amount 3%/Duration 160 sec"
            },
            {
              "level": 4,
              "text": "Chance 7%/Drain amount 4%/Duration 220 sec"
            },
            {
              "level": 5,
              "text": "Chance 9%/Drain amount 5%/Duration 280 sec"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "3 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "1 second",
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
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "20000"
                },
                {
                  "level": 2,
                  "value": "22000"
                },
                {
                  "level": 3,
                  "value": "24000"
                },
                {
                  "level": 4,
                  "value": "26000"
                },
                {
                  "level": 5,
                  "value": "28000"
                }
              ]
            },
            {
              "label": "Data 2",
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
              "label": "Data 3",
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
          "spCost": "45 + (Skill Level x 5)",
          "duration": "[-20 + (Skill Level × 60)] seconds",
          "castRange": "11 cells",
          "translations": {
            "pt-BR": {
              "name": " Blood Sucker ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Blood_Sucker"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/2480.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2480",
          "tree": {
            "idx": 10,
            "row": 1,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 2497,
                "level": 3,
                "name": "Special Pharmacy",
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
                "value": "45 + (Skill Level x 5)"
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
                "value": "0.5 seconds"
              },
              {
                "label": "Cooldown",
                "value": "1 second"
              },
              {
                "label": "Cast Range",
                "value": "11 cells"
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
                      "duration": "40 seconds",
                      "effect": "Chance 1% / Drain amount 1%",
                      "sp-cost": "50",
                      "range": "11 cells",
                      "data-1": "20000",
                      "data-2": "300",
                      "data-3": "10"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "100 seconds",
                      "effect": "Chance 3% / Drain amount 2%",
                      "sp-cost": "55",
                      "range": "11 cells",
                      "data-1": "22000",
                      "data-2": "400",
                      "data-3": "15"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "160 seconds",
                      "effect": "Chance 5% / Drain amount 3%",
                      "sp-cost": "60",
                      "range": "11 cells",
                      "data-1": "24000",
                      "data-2": "500",
                      "data-3": "20"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "220 seconds",
                      "effect": "Chance 7% / Drain amount 4%",
                      "sp-cost": "65",
                      "range": "11 cells",
                      "data-1": "26000",
                      "data-2": "600",
                      "data-3": "25"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "280 seconds",
                      "effect": "Chance 9% / Drain amount 5%",
                      "sp-cost": "70",
                      "range": "11 cells",
                      "data-1": "28000",
                      "data-2": "700",
                      "data-3": "30"
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
          "id": 2481,
          "imageFile": "2481.png",
          "name": "Spore Explosion",
          "maxLevel": 10,
          "prerequisiteText": "Special Pharmacy 4",
          "group": "Active / Damage",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Spore_Explosion",
          "description": "Throws an expolosive spore, deals ranged physical damage to a target and enemies in AoE.\nDamage increases based on BaseLv and INT.\nAdditionally, it gives the target within the Area of Effect receive increased long-distance physical damage for 5 seconds.\n(Normal enemy : increase 10% / Boss monsters : increase 5%)\nConsumes 1 Bomb Mushroom Spore when used.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 600%/ Area of Effect: 3x3Cell"
            },
            {
              "level": 2,
              "text": "ATK 800%/ Area of Effect: 3x3Cell"
            },
            {
              "level": 3,
              "text": "ATK 1000%/ Area of Effect: 5x5Cell"
            },
            {
              "level": 4,
              "text": "ATK 1200%/ Area of Effect: 5x5Cell"
            },
            {
              "level": 5,
              "text": "ATK 1400%/ Area of Effect: 7x7Cell"
            },
            {
              "level": 6,
              "text": "ATK 1600%/ Area of Effect: 7x7Cell"
            },
            {
              "level": 7,
              "text": "ATK 1800%/ Area of Effect: 9x9Cell"
            },
            {
              "level": 8,
              "text": "ATK 2000%/ Area of Effect: 9x9Cell"
            },
            {
              "level": 9,
              "text": "ATK 2200%/ Area of Effect:11x11Cell"
            },
            {
              "level": 10,
              "text": "ATK 2400%/ Area of Effect:11x11Cell"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "1.5 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "5 seconds",
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
                  "value": "2000"
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
                  "value": "2000"
                },
                {
                  "level": 5,
                  "value": "2000"
                },
                {
                  "level": 6,
                  "value": "2000"
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
                  "value": "2000"
                },
                {
                  "level": 10,
                  "value": "2000"
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
                  "value": "2"
                },
                {
                  "level": 4,
                  "value": "2"
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
                  "value": "4"
                },
                {
                  "level": 8,
                  "value": "4"
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
          "spCost": "44 + (Skill Level x 4)",
          "castRange": "11 cells",
          "areaOfEffect": "3 x 3 ~ 11 x 11",
          "translations": {
            "pt-BR": {
              "name": " Spore Explosion ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Spore_Explosion"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/2481.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2481",
          "tree": {
            "idx": 11,
            "row": 1,
            "col": 2,
            "columns": 9,
            "requirements": [
              {
                "id": 2497,
                "level": 4,
                "name": "Special Pharmacy",
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
                "value": "44 + (Skill Level x 4)"
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
                "value": "5 seconds"
              },
              {
                "label": "Cast Range",
                "value": "11 cells"
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
                    "id": "area-of-effect",
                    "label": "Area of Effect"
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
                      "area-of-effect": "3x3",
                      "sp-cost": "48",
                      "range": "11 cells",
                      "data-1": "2000",
                      "data-3": "1"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "3x3",
                      "sp-cost": "52",
                      "range": "11 cells",
                      "data-1": "2000",
                      "data-3": "1"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "5x5",
                      "sp-cost": "56",
                      "range": "11 cells",
                      "data-1": "2000",
                      "data-3": "2"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "5x5",
                      "sp-cost": "60",
                      "range": "11 cells",
                      "data-1": "2000",
                      "data-3": "2"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "64",
                      "range": "11 cells",
                      "data-1": "2000",
                      "data-3": "3"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "68",
                      "range": "11 cells",
                      "data-1": "2000",
                      "data-3": "3"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "area-of-effect": "9x9",
                      "sp-cost": "72",
                      "range": "11 cells",
                      "data-1": "2000",
                      "data-3": "4"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "area-of-effect": "9x9",
                      "sp-cost": "76",
                      "range": "11 cells",
                      "data-1": "2000",
                      "data-3": "4"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "area-of-effect": "11x11",
                      "sp-cost": "80",
                      "range": "11 cells",
                      "data-1": "2000",
                      "data-3": "5"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "area-of-effect": "11x11",
                      "sp-cost": "84",
                      "range": "11 cells",
                      "data-1": "2000",
                      "data-3": "5"
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
          "id": 2476,
          "imageFile": "2476.png",
          "name": "Cart Tornado",
          "maxLevel": 10,
          "prerequisiteText": "Cart Remodeling 1",
          "group": "Active / Damage",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Cart_Tornado",
          "description": "Spins the pushcart like a tornado to inflict physical damage to all enemies in 2 cells around the user. Cannot be used without cart.\nDamage increases based on STR, weight of the cart, skill level of Cart Remodeling.",
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
          "spCost": "30",
          "areaOfEffect": "5 x 5",
          "translations": {
            "pt-BR": {
              "name": " Cart Tornado ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Cart_Tornado"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/2476.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2476",
          "tree": {
            "idx": 12,
            "row": 1,
            "col": 3,
            "columns": 9,
            "requirements": [
              {
                "id": 2475,
                "level": 1,
                "name": "Cart Remodeling",
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
                    "id": "data-2",
                    "label": "Data 2"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "30",
                      "data-2": "2"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "30",
                      "data-2": "2"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "30",
                      "data-2": "2"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "30",
                      "data-2": "2"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "30",
                      "data-2": "2"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "30",
                      "data-2": "2"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "30",
                      "data-2": "2"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "30",
                      "data-2": "2"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "30",
                      "data-2": "2"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "sp-cost": "30",
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
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2482,
          "imageFile": "2482.png",
          "name": "Thorn Wall",
          "maxLevel": 5,
          "prerequisiteText": "Thorn Trap 3",
          "group": "Special / Wall",
          "type": "",
          "target": "Self or Player",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Thorn_Wall",
          "description": "Build a thorn wall around 1 target to deal damage and pushes it back. It can be destroyed by attacks and damages. If the Thorn Wall gets fire property damage, it burns out and turns into Fire Wall. Only 1 Thorn Wall can be cast and consumes 1 Thorn Plant Seed.",
          "levelDetails": [
            {
              "level": 1,
              "text": "40 SP / Skill Duration 10 sec."
            },
            {
              "level": 2,
              "text": "50 SP / Skill Duration 11 sec."
            },
            {
              "level": 3,
              "text": "60 SP / Skill Duration 12 sec."
            },
            {
              "level": 4,
              "text": "70 SP / Skill Duration 13 sec."
            },
            {
              "level": 5,
              "text": "80 SP / Skill Duration 14 sec."
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "1.5 seconds",
          "castDelay": "0.5 seconds",
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
                  "value": "11000"
                },
                {
                  "level": 3,
                  "value": "12000"
                },
                {
                  "level": 4,
                  "value": "13000"
                },
                {
                  "level": 5,
                  "value": "14000"
                }
              ]
            },
            {
              "label": "Data 2",
              "values": [
                {
                  "level": 1,
                  "value": "4000"
                },
                {
                  "level": 2,
                  "value": "6000"
                },
                {
                  "level": 3,
                  "value": "8000"
                },
                {
                  "level": 4,
                  "value": "10000"
                },
                {
                  "level": 5,
                  "value": "12000"
                }
              ]
            }
          ],
          "spCost": "30 + (Skill Level × 10)",
          "duration": "[9 + (Skill Level)] seconds;Until is destroyed",
          "castRange": "11 cells",
          "areaOfEffect": "5 x 5",
          "translations": {
            "pt-BR": {
              "name": " Thorn Wall ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Thorn_Wall"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/2482.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2482",
          "tree": {
            "idx": 16,
            "row": 1,
            "col": 7,
            "columns": 9,
            "requirements": [
              {
                "id": 2479,
                "level": 3,
                "name": "Thorn Trap",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Special / Wall Skill"
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
                "value": "1.5 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.5 seconds"
              },
              {
                "label": "Cooldown",
                "value": "5 seconds"
              },
              {
                "label": "Cast Range",
                "value": "11 cells"
              },
              {
                "label": "Target",
                "value": "Self or Player"
              },
              {
                "label": "Area of Effect",
                "value": "5 x 5"
              },
              {
                "label": "Duration",
                "value": "[9 + (Skill Level)] seconds;Until is destroyed"
              }
            ],
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
                      "effect": "40 SP / Skill Duration 10 sec",
                      "sp-cost": "40",
                      "range": "11 cells",
                      "data-1": "10000",
                      "data-2": "4000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "50 SP / Skill Duration 11 sec",
                      "sp-cost": "50",
                      "range": "11 cells",
                      "data-1": "11000",
                      "data-2": "6000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "60 SP / Skill Duration 12 sec",
                      "sp-cost": "60",
                      "range": "11 cells",
                      "data-1": "12000",
                      "data-2": "8000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "70 SP / Skill Duration 13 sec",
                      "sp-cost": "70",
                      "range": "11 cells",
                      "data-1": "13000",
                      "data-2": "10000"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "80 SP / Skill Duration 14 sec",
                      "sp-cost": "80",
                      "range": "11 cells",
                      "data-1": "14000",
                      "data-2": "12000"
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
          "id": 2490,
          "imageFile": "2490.png",
          "name": "Hell Plant",
          "maxLevel": 5,
          "prerequisiteText": "Blood Sucker 3",
          "group": "Active / Damage",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Hell_Plant",
          "description": "Attach cannibals summoned from hell to his body, bite and damage when Target approaches the 5x5 Cell Area around a target. Damage is further increased based on the BaseLv, INT and the skill level of Biocannabis.\nConsumes 1 MenEater Plant Bottle.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 100% / Duration 60 sec"
            },
            {
              "level": 2,
              "text": "ATK 200% / Duration 90 sec"
            },
            {
              "level": 3,
              "text": "ATK 300% / Duration 120 sec"
            },
            {
              "level": 4,
              "text": "ATK 400% / Duration 150 sec"
            },
            {
              "level": 5,
              "text": "ATK 500% / Duration 180 sec"
            }
          ],
          "fixedCastTime": "0 seconds",
          "castDelay": "0.5 seconds",
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
            }
          ],
          "spCost": "45 + (Skill Level × 5)",
          "duration": "[60 × Skill Level] seconds",
          "areaOfEffect": "5 x 5",
          "translations": {
            "pt-BR": {
              "name": " Hell Plant ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Hell_Plant"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/2490.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2490",
          "tree": {
            "idx": 17,
            "row": 1,
            "col": 8,
            "columns": 9,
            "requirements": [
              {
                "id": 2480,
                "level": 3,
                "name": "Blood Sucker",
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
                "value": "45 + (Skill Level × 5)"
              },
              {
                "label": "Fixed Cast Time",
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
              }
            ],
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
                    "id": "range",
                    "label": "Range"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "duration": "60 seconds",
                      "sp-cost": "40",
                      "range": "9 cells",
                      "data-1": "2",
                      "data-2": "10",
                      "data-3": "30"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "90 seconds",
                      "sp-cost": "45",
                      "range": "9 cells",
                      "data-1": "3",
                      "data-2": "15",
                      "data-3": "40"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "120 seconds",
                      "sp-cost": "50",
                      "range": "9 cells",
                      "data-1": "4",
                      "data-2": "20",
                      "data-3": "50"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "150 seconds",
                      "sp-cost": "55",
                      "range": "9 cells",
                      "data-1": "5",
                      "data-2": "25",
                      "data-3": "60"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "180 seconds",
                      "sp-cost": "60",
                      "range": "9 cells",
                      "data-1": "6",
                      "data-2": "30",
                      "data-3": "70"
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
          "id": 2485,
          "imageFile": "2485.png",
          "name": "Demonic Fire",
          "maxLevel": 5,
          "prerequisiteText": "Spore Explosion 3",
          "group": "Active / Damage",
          "type": "",
          "target": "Ground",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Demonic_Fire",
          "description": "Throw a fire bottle on the ground and set flames. All targets within the skill range keep receiving damages and also get [Ignition] status. Consume 1 Fire Bottle.",
          "levelDetails": [
            {
              "level": 1,
              "text": "24 SP / Fire Matk 130 % / Duration 10 sec. / Ignition Chance 8%"
            },
            {
              "level": 2,
              "text": "28 SP / Fire Matk 150 % / Duration 12 sec. / Ignition Chance 12%"
            },
            {
              "level": 3,
              "text": "32 SP / Fire Matk 170 % / Duration 14 sec. / Ignition Chance 16%"
            },
            {
              "level": 4,
              "text": "36 SP / Fire Matk 190 % / Duration 16 sec. / Ignition Chance 20%"
            },
            {
              "level": 5,
              "text": "40 SP / Fire Matk 210 % / Duration 18 sec. / Ignition Chance 24%"
            }
          ],
          "fixedCastTime": "0 seconds",
          "castDelay": "0.5 seconds",
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
              "label": "Data 1",
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
            },
            {
              "label": "Data 2",
              "values": [
                {
                  "level": 1,
                  "value": "130"
                },
                {
                  "level": 2,
                  "value": "150"
                },
                {
                  "level": 3,
                  "value": "170"
                },
                {
                  "level": 4,
                  "value": "190"
                },
                {
                  "level": 5,
                  "value": "210"
                }
              ]
            },
            {
              "label": "Data 3",
              "values": [
                {
                  "level": 1,
                  "value": "8"
                },
                {
                  "level": 2,
                  "value": "12"
                },
                {
                  "level": 3,
                  "value": "16"
                },
                {
                  "level": 4,
                  "value": "20"
                },
                {
                  "level": 5,
                  "value": "24"
                }
              ]
            }
          ],
          "spCost": "20 + (Skill Level × 4)",
          "duration": "[8 + (Skill Level × 2)] seconds",
          "castRange": "Magic",
          "areaOfEffect": "5 x 5",
          "translations": {
            "pt-BR": {
              "name": " Demonic Fire ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Demonic_Fire"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/2485.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2485",
          "tree": {
            "idx": 18,
            "row": 2,
            "col": 0,
            "columns": 9,
            "requirements": [
              {
                "id": 2481,
                "level": 3,
                "name": "Spore Explosion",
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
                "value": "20 + (Skill Level × 4)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.5 seconds"
              },
              {
                "label": "Cooldown",
                "value": "5 seconds"
              },
              {
                "label": "Cast Range",
                "value": "Magic"
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
                "value": "[8 + (Skill Level × 2)] seconds"
              }
            ],
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
                    "id": "range",
                    "label": "Range"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "24 SP / Duration 10 sec. / Ignition Chance 8%",
                      "sp-cost": "24",
                      "range": "9 cells",
                      "data-1": "10000",
                      "data-2": "130",
                      "data-3": "8"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "28 SP / Duration 12 sec. / Ignition Chance 12%",
                      "sp-cost": "28",
                      "range": "9 cells",
                      "data-1": "12000",
                      "data-2": "150",
                      "data-3": "12"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "32 SP / Duration 14 sec. / Ignition Chance 16%",
                      "sp-cost": "32",
                      "range": "9 cells",
                      "data-1": "14000",
                      "data-2": "170",
                      "data-3": "16"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "36 SP / Duration 16 sec. / Ignition Chance 20%",
                      "sp-cost": "36",
                      "range": "9 cells",
                      "data-1": "16000",
                      "data-2": "190",
                      "data-3": "20"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "40 SP / Duration 18 sec. / Ignition Chance 24%",
                      "sp-cost": "40",
                      "range": "9 cells",
                      "data-1": "18000",
                      "data-2": "210",
                      "data-3": "24"
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
          "id": 2477,
          "imageFile": "2477.png",
          "name": "Cart Cannon",
          "maxLevel": 5,
          "prerequisiteText": "Cart Remodeling 2",
          "group": "Active / Damage",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "1 Cannon Ball",
          "irowikiUrl": "https://irowiki.org/wiki/Cart_Cannon",
          "description": "Deals special ranged physical damage to a target and enemies around it.\nCannot be used without a cart. Damage increases based on skill level of Cart Remodeling.\nDamage increases based on BaseLv and INT.\nConsumes 1 Cannon Ball when used.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK (250+Cart Remodeling sLv x20)%"
            },
            {
              "level": 2,
              "text": "ATK (500+Cart Remodeling sLv x40)%"
            },
            {
              "level": 3,
              "text": "ATK (750+Cart Remodeling sLv x60)%"
            },
            {
              "level": 4,
              "text": "ATK (1000+Cart Remodeling sLv x80)%"
            },
            {
              "level": 5,
              "text": "ATK (1250+Cart Remodeling sLv x100)%"
            }
          ],
          "fixedCastTime": "0 seconds",
          "castDelay": "0.5 seconds",
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
                  "value": "42"
                },
                {
                  "level": 3,
                  "value": "46"
                },
                {
                  "level": 4,
                  "value": "48"
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
            }
          ],
          "spCost": "40 ~ 50",
          "variableCastTime": "0.5 + (Skill Level × 0.5) seconds",
          "castRange": "(7 + Skill Level) cells",
          "areaOfEffect": "3 x 3 ~ 7 x 7",
          "translations": {
            "pt-BR": {
              "name": " Cart Cannon ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Cart_Cannon"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/2477.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2477",
          "tree": {
            "idx": 19,
            "row": 2,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 2475,
                "level": 2,
                "name": "Cart Remodeling",
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
                "value": "40 ~ 50"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "0.5 + (Skill Level × 0.5) seconds"
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
                "value": "(7 + Skill Level) cells"
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
                "label": "Ammunition",
                "value": "1 Cannon Ball"
              }
            ],
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
                      "range": "7 cells",
                      "data-1": "1"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "42",
                      "range": "8 cells",
                      "data-1": "1"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "46",
                      "range": "9 cells",
                      "data-1": "2"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "48",
                      "range": "10 cells",
                      "data-1": "2"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "50",
                      "range": "11 cells",
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
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2483,
          "imageFile": "2483.png",
          "name": "Crazy Vines",
          "maxLevel": 10,
          "prerequisiteText": "Wall of Thorns 3",
          "group": "Active / Damage",
          "type": "",
          "target": "Ground",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Crazy_Vines",
          "description": "Consuming one Seed of Thorns, summoning and dropping a huge block of plants, inflicting ranged physical damage on all targets in the area. It eliminates traps and effects laid on the ground.\nAs the skill level increases, the number of plant lumps summoned increases, and the damage is further increased based on BaseLv.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 800% / 5"
            },
            {
              "level": 2,
              "text": "ATK 900% / 6"
            },
            {
              "level": 3,
              "text": "ATK1000% / 6"
            },
            {
              "level": 4,
              "text": "ATK1100% / 7"
            },
            {
              "level": 5,
              "text": "ATK1200% / 7"
            },
            {
              "level": 6,
              "text": "ATK1300% / 8"
            },
            {
              "level": 7,
              "text": "ATK1400% / 8"
            },
            {
              "level": 8,
              "text": "ATK1500% / 9"
            },
            {
              "level": 9,
              "text": "ATK1600% / 9"
            },
            {
              "level": 10,
              "text": "ATK1700% /10"
            }
          ],
          "fixedCastTime": "0 seconds",
          "castDelay": "0.5 seconds",
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
                  "value": "4"
                },
                {
                  "level": 6,
                  "value": "4"
                },
                {
                  "level": 7,
                  "value": "4"
                },
                {
                  "level": 8,
                  "value": "4"
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
                  "value": "4"
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
                  "value": "5"
                },
                {
                  "level": 6,
                  "value": "6"
                },
                {
                  "level": 7,
                  "value": "6"
                },
                {
                  "level": 8,
                  "value": "7"
                },
                {
                  "level": 9,
                  "value": "7"
                },
                {
                  "level": 10,
                  "value": "8"
                }
              ]
            }
          ],
          "spCost": "20 + (Skill Level × 4)",
          "variableCastTime": "[2.5 + (Skill Level × 0.5)] seconds",
          "areaOfEffect": "9 x 9 cells",
          "translations": {
            "pt-BR": {
              "name": " Crazy Vines ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Crazy_Vines"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/2483.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2483",
          "tree": {
            "idx": 23,
            "row": 2,
            "col": 5,
            "columns": 9,
            "requirements": [
              {
                "id": 2482,
                "level": 3,
                "name": "Thorn Wall",
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
                "value": "20 + (Skill Level × 4)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "[2.5 + (Skill Level × 0.5)] seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.5 seconds"
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
                "value": "9 x 9 cells"
              }
            ],
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
                      "sp-cost": "24",
                      "range": "11 cells",
                      "data-1": "4",
                      "data-2": "3"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "28",
                      "range": "11 cells",
                      "data-1": "4",
                      "data-2": "4"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "ATK1000% / 6",
                      "sp-cost": "32",
                      "range": "11 cells",
                      "data-1": "4",
                      "data-2": "4"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "ATK1100% / 7",
                      "sp-cost": "36",
                      "range": "11 cells",
                      "data-1": "4",
                      "data-2": "5"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "ATK1200% / 7",
                      "sp-cost": "40",
                      "range": "11 cells",
                      "data-1": "4",
                      "data-2": "5"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "ATK1300% / 8",
                      "sp-cost": "44",
                      "range": "11 cells",
                      "data-1": "4",
                      "data-2": "6"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "ATK1400% / 8",
                      "sp-cost": "48",
                      "range": "11 cells",
                      "data-1": "4",
                      "data-2": "6"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "ATK1500% / 9",
                      "sp-cost": "52",
                      "range": "11 cells",
                      "data-1": "4",
                      "data-2": "7"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "ATK1600% / 9",
                      "sp-cost": "56",
                      "range": "11 cells",
                      "data-1": "4",
                      "data-2": "7"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "ATK1700% / 10",
                      "sp-cost": "60",
                      "range": "11 cells",
                      "data-1": "4",
                      "data-2": "8"
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
          "id": 2492,
          "imageFile": "2492.png",
          "name": "Mandragora Howl",
          "maxLevel": 5,
          "prerequisiteText": "Hell Plant 3",
          "group": "Active / Special / Damage",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Mandragora_Howl",
          "description": "Pull out a noisy MANDRAGORA from its pot and let it howl at surrounding enemies. Decrease all targets' INT and SP. Increase all skill's casting delay. Decrease success rate of the skill depending on target's VIT and LUK.",
          "levelDetails": [
            {
              "level": 1,
              "text": "11x11 AoE / INT -4 / SP 30% Decrease / 30% SP"
            },
            {
              "level": 2,
              "text": "13x13 AoE / INT -8 / SP 35% Decrease / 35% SP"
            },
            {
              "level": 3,
              "text": "13x13 AoE / INT -12 / SP 40% Decrease / 40% SP"
            },
            {
              "level": 4,
              "text": "15x15 AoE / INT -16 / SP 45% Decrease / 45% SP"
            },
            {
              "level": 5,
              "text": "15x15 AoE / INT -20 / SP 50% Decrease / 50% SP"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "1 second",
          "castDelay": "0.5 seconds",
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
            },
            {
              "label": "Data 3",
              "values": [
                {
                  "level": 1,
                  "value": "4"
                },
                {
                  "level": 2,
                  "value": "8"
                },
                {
                  "level": 3,
                  "value": "12"
                },
                {
                  "level": 4,
                  "value": "16"
                },
                {
                  "level": 5,
                  "value": "20"
                }
              ]
            },
            {
              "label": "Data 4",
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
                  "value": "6"
                },
                {
                  "level": 4,
                  "value": "7"
                },
                {
                  "level": 5,
                  "value": "7"
                }
              ]
            }
          ],
          "spCost": "?",
          "duration": "[5 × (Skill Level + 1)] seconds",
          "areaOfEffect": "11 x 11 ~ 15 x 15",
          "translations": {
            "pt-BR": {
              "name": " Mandragora Howl ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Mandragora_Howl"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/2492.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2492",
          "tree": {
            "idx": 24,
            "row": 2,
            "col": 6,
            "columns": 9,
            "requirements": [
              {
                "id": 2490,
                "level": 3,
                "name": "Hell Plant",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Special / Damage Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "?"
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
                "value": "10 seconds"
              },
              {
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "Area of Effect",
                "value": "11 x 11 ~ 15 x 15"
              },
              {
                "label": "Duration",
                "value": "[5 × (Skill Level + 1)] seconds"
              }
            ],
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
                    "id": "11x11-aoe-int",
                    "label": "11x11 Aoe / Int"
                  },
                  {
                    "id": "13x13-aoe-int",
                    "label": "13x13 Aoe / Int"
                  },
                  {
                    "id": "15x15-aoe-int",
                    "label": "15x15 Aoe / Int"
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
                      "11x11-aoe-int": "-4",
                      "effect": "SP 30% Decrease / 30% SP",
                      "sp-cost": "40",
                      "data-1": "35",
                      "data-2": "30",
                      "data-3": "4",
                      "data-4": "5"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "13x13-aoe-int": "-8",
                      "effect": "SP 35% Decrease / 35% SP",
                      "sp-cost": "45",
                      "data-1": "45",
                      "data-2": "35",
                      "data-3": "8",
                      "data-4": "6"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "13x13-aoe-int": "-12",
                      "effect": "SP 40% Decrease / 40% SP",
                      "sp-cost": "50",
                      "data-1": "55",
                      "data-2": "40",
                      "data-3": "12",
                      "data-4": "6"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "15x15-aoe-int": "-16",
                      "effect": "SP 45% Decrease / 45% SP",
                      "sp-cost": "55",
                      "data-1": "65",
                      "data-2": "45",
                      "data-3": "16",
                      "data-4": "7"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "15x15-aoe-int": "-20",
                      "effect": "SP 50% Decrease / 50% SP",
                      "sp-cost": "60",
                      "data-1": "75",
                      "data-2": "50",
                      "data-3": "20",
                      "data-4": "7"
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
          "id": 2486,
          "imageFile": "2486.png",
          "name": "Fire Expansion",
          "maxLevel": 5,
          "prerequisiteText": "Demonic Fire 3",
          "group": "Active / Special / Damage",
          "type": "",
          "target": "Ground",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Fire_Expansion",
          "description": "When Demonic Fire and Fire Expansion are cast in the same range, it gives several effects depending on the items consumed.",
          "levelDetails": [
            {
              "level": 1,
              "text": "30 SP / Consume Oil Bottle / Increase Demonic Fire Damage by 50% / Add 10 sec. Duration"
            },
            {
              "level": 2,
              "text": "35 SP / Consume Explosive Powder/ Increase Demonic Fire Damage depending on caster's INT / Cancel Demonic Fire"
            },
            {
              "level": 3,
              "text": "40 SP / Consume Smoke Powder / Demonic Fire turns into Smoke bullet / Decrease long distance and melee damage / Add Flee Rate"
            },
            {
              "level": 4,
              "text": "45 SP / Consume Tear Gas / Demonic Fire turns into Tear Gas / Decrease HP, Accuracy rate, Flee Rate"
            },
            {
              "level": 5,
              "text": "50 SP / Consume Acid Bottle / Demonic Fire turns into Acid Bomb / Activated in highest level among acquired skill."
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
            }
          ],
          "spCost": "25 + (Skill Level × 5)",
          "duration": "See Table",
          "castRange": "Magic",
          "areaOfEffect": "5 x 5",
          "translations": {
            "pt-BR": {
              "name": " Fire Expansion ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Fire_Expansion"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/2486.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2486",
          "tree": {
            "idx": 25,
            "row": 2,
            "col": 7,
            "columns": 9,
            "requirements": [
              {
                "id": 2485,
                "level": 3,
                "name": "Demonic Fire",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Special / Damage Skill"
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
                "value": "2 seconds"
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
                "value": "Magic"
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
                "value": "See Table"
              }
            ],
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
                      "effect": "30 SP / Consume Oil Bottle / Increase Demonic Fire Damage by 50% / Add 10 sec. Duration",
                      "sp-cost": "30",
                      "range": "9 cells"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "35 SP / Consume E x plosive Powder / Increase Demonic Fire Damage depending on caster's INT / Cancel Demonic Fire",
                      "sp-cost": "35",
                      "range": "9 cells"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "40 SP / Consume Smoke Powder / Demonic Fire turns into Smoke bullet / Decrease long distance and melee damage / Add Flee Rate",
                      "sp-cost": "40",
                      "range": "9 cells"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "45 SP / Consume Tear Gas / Demonic Fire turns into Tear Gas / Decrease HP, Accuracy rate, Flee Rate",
                      "sp-cost": "45",
                      "range": "9 cells"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "50 SP / Consume Acid Bottle / Demonic Fire turns into Acid Bomb / Activated in highest level among acquired skill",
                      "sp-cost": "50",
                      "range": "9 cells"
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
          "id": 2478,
          "imageFile": "2478.png",
          "name": "Geneticist Cart Boost",
          "maxLevel": 5,
          "prerequisiteText": "Cart Remodeling 3",
          "group": "Buff (To yourself)",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Geneticist_Cart_Boost",
          "description": "Increase caster's movement speed and ATK for 90 seconds. Must have a cart in order to cast.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Movement Speed 50% increase / ATK 10 increase"
            },
            {
              "level": 2,
              "text": "Movement Speed 50% increase / ATK 20 increase"
            },
            {
              "level": 3,
              "text": "Movement Speed 75% increase / ATK 30 increase"
            },
            {
              "level": 4,
              "text": "Movement Speed 75% increase / ATK 40 increase"
            },
            {
              "level": 5,
              "text": "Movement Speed 100% increase / ATK 50 increase"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "1.5 seconds",
          "castDelay": "0.5 seconds",
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
              "label": "Data 1",
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
                  "value": "75"
                },
                {
                  "level": 4,
                  "value": "75"
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
                  "value": "90000"
                },
                {
                  "level": 2,
                  "value": "90000"
                },
                {
                  "level": 3,
                  "value": "90000"
                },
                {
                  "level": 4,
                  "value": "90000"
                },
                {
                  "level": 5,
                  "value": "90000"
                }
              ]
            }
          ],
          "spCost": "16 + (Skill Level x 4)",
          "duration": "90 seconds",
          "translations": {
            "pt-BR": {
              "name": " Geneticist Cart Boost ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Geneticist_Cart_Boost"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/2478.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2478",
          "tree": {
            "idx": 26,
            "row": 2,
            "col": 8,
            "columns": 9,
            "requirements": [
              {
                "id": 2475,
                "level": 3,
                "name": "Cart Remodeling",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Buff (To yourself) Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "16 + (Skill Level x 4)"
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
                "value": "0 seconds"
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
                      "effect": "Movement Speed 50% increase / ATK 10 increase",
                      "sp-cost": "20",
                      "data-1": "50",
                      "data-2": "10",
                      "data-3": "90000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Movement Speed 50% increase / ATK 20 increase",
                      "sp-cost": "24",
                      "data-1": "50",
                      "data-2": "20",
                      "data-3": "90000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Movement Speed 75% increase / ATK 30 increase",
                      "sp-cost": "28",
                      "data-1": "75",
                      "data-2": "30",
                      "data-3": "90000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Movement Speed 75% increase / ATK 40 increase",
                      "sp-cost": "32",
                      "data-1": "75",
                      "data-2": "40",
                      "data-3": "90000"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Movement Speed 100% increase / ATK 50 increase",
                      "sp-cost": "36",
                      "data-1": "100",
                      "data-2": "50",
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
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 5003,
          "imageFile": "5003.png",
          "name": "Hallucination Drug",
          "maxLevel": 5,
          "prerequisiteText": "Special Pharmacy 1",
          "group": "",
          "type": "Special / Debuff",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Hallucination_Drug",
          "description": "Throw a concentrated alcohol mix\nto cause hallucinations and decreased accuracy\nwith a high probability. Consumes 1 alcohol.",
          "levelDetails": [
            {
              "level": 1,
              "text": "100% damage / 9 x 9 splash"
            },
            {
              "level": 2,
              "text": "100% damage / 11 x 11 splash"
            },
            {
              "level": 3,
              "text": "100% damage / 13 x 13 splash"
            },
            {
              "level": 4,
              "text": "100% damage / 15 x 15 splash"
            },
            {
              "level": 5,
              "text": "100% damage / Full screen splash."
            }
          ],
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
                  "value": "18"
                }
              ]
            },
            {
              "label": "Data 2",
              "values": [
                {
                  "level": 1,
                  "value": "900"
                },
                {
                  "level": 2,
                  "value": "800"
                },
                {
                  "level": 3,
                  "value": "700"
                },
                {
                  "level": 4,
                  "value": "650"
                },
                {
                  "level": 5,
                  "value": "500"
                }
              ]
            }
          ],
          "spCost": "50 + (Skill Level × 10)",
          "fixedCastTime": "Level 1~4 = 1 second Level 5 = 0 seconds",
          "cooldown": "(6 − Skill Level) seconds",
          "castRange": "Melee",
          "areaOfEffect": "9 x 9 ~ 29 x 29",
          "translations": {
            "pt-BR": {
              "name": " Hallucination Drug ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Hallucination_Drug"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/5003.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5003",
          "tree": {
            "idx": 30,
            "row": 3,
            "col": 3,
            "columns": 9,
            "requirements": [
              {
                "id": 2497,
                "level": 1,
                "name": "Special Pharmacy",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Special / Debuff"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "50 + (Skill Level × 10)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "Level 1~4 = 1 second Level 5 = 0 seconds"
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
                "value": "(6 − Skill Level) seconds"
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
                "label": "Area of Effect",
                "value": "9 x 9 ~ 29 x 29"
              }
            ],
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
                      "effect": "100% damage / 9 x 9 splash",
                      "sp-cost": "60",
                      "data-1": "4",
                      "data-2": "900"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "100% damage / 11 x 11 splash",
                      "sp-cost": "70",
                      "data-1": "5",
                      "data-2": "800"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "100% damage / 13 x 13 splash",
                      "sp-cost": "80",
                      "data-1": "6",
                      "data-2": "700"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "100% damage / 15 x 15 splash",
                      "sp-cost": "90",
                      "data-1": "7",
                      "data-2": "650"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "100% damage / Full screen splash",
                      "sp-cost": "100",
                      "data-1": "18",
                      "data-2": "500"
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
          "translations": {
            "pt-BR": {
              "name": " Full Throttle ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Full_Throttle"
            }
          },
          "apiStatus": "translated",
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
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        }
      ]
    },
    {
      "id": "previous-2",
      "label": "Creator",
      "pointLimit": 69,
      "tree": {
        "columns": 9,
        "rows": 4
      },
      "skills": [
        {
          "id": 227,
          "imageFile": "227.png",
          "name": "Learning Potion",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Learning_Potion",
          "description": "Enhances the success rate for brewing. This skill also increases the effectiveness of healing potions.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Increase Potion Efficiency 5%"
            },
            {
              "level": 2,
              "text": "Increase Potion Efficiency 10%"
            },
            {
              "level": 3,
              "text": "Increase Potion Efficiency 15%"
            },
            {
              "level": 4,
              "text": "Increase Potion Efficiency 20%"
            },
            {
              "level": 5,
              "text": "Increase Potion Efficiency 25%"
            },
            {
              "level": 6,
              "text": "Increase Potion Efficiency 30%"
            },
            {
              "level": 7,
              "text": "Increase Potion Efficiency 35%"
            },
            {
              "level": 8,
              "text": "Increase Potion Efficiency 40%"
            },
            {
              "level": 9,
              "text": "Increase Potion Efficiency 45%"
            },
            {
              "level": 10,
              "text": "Increase Potion Efficiency 50%"
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
          "translations": {
            "pt-BR": {
              "name": " Learning Potion ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Learning_Potion"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/227.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/227",
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
                      "effect": "Increase Potion Efficiency 5%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Increase Potion Efficiency 10%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Increase Potion Efficiency 15%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Increase Potion Efficiency 20%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Increase Potion Efficiency 25%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "Increase Potion Efficiency 30%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "Increase Potion Efficiency 35%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "Increase Potion Efficiency 40%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "Increase Potion Efficiency 45%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "Increase Potion Efficiency 50%",
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
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 233,
          "imageFile": "233.png",
          "name": "Marine Sphere",
          "maxLevel": 5,
          "prerequisiteText": "Pharmacy 2",
          "group": "Active",
          "type": "1 cell on ground",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Summons a Marine Sphere on a targeted location, which will cast Self Destruction upon receiving damage. Each cast consumes a Marine Sphere Bottle.\nWhen the Marine Spear is attacked, it moves in the opposite direction of the attacked target and casts a self-destructing skill.\nA Maximum of three Marine Spheres can be summoned before the first one expires, In PvP environment, an exploding Marine Sphere will damage allies, enemies, and the user itself.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Mine Sphere HP: 2400"
            },
            {
              "level": 2,
              "text": "Mine Sphere HP: 2800"
            },
            {
              "level": 3,
              "text": "Mine Sphere HP: 3200"
            },
            {
              "level": 4,
              "text": "Mine Sphere HP: 3600"
            },
            {
              "level": 5,
              "text": "Mine Sphere HP: 4000"
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
          "translations": {
            "pt-BR": {
              "name": " Marine Sphere ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Marine_Sphere"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/233.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/233",
          "tree": {
            "idx": 1,
            "row": 0,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 228,
                "level": 2,
                "name": "Prepare Potion",
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
                      "effect": "Mine Sphere HP: 2400",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Mine Sphere HP: 2800",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Mine Sphere HP: 3200",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Mine Sphere HP: 3600",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Mine Sphere HP: 4000",
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
          "id": 226,
          "imageFile": "226.png",
          "name": "Axe Mastery",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Axe_Mastery",
          "description": "Enhances attack (Weapon Mastery) with Axe and Sword class weapons.",
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
          "translations": {
            "pt-BR": {
              "name": " Axe Mastery ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Axe_Mastery"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/226.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/226",
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
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 237,
          "imageFile": "237.png",
          "name": "Chemical Protection(Helm) (Chemical Protection Helm)",
          "maxLevel": 5,
          "prerequisiteText": "Pharmacy 2",
          "group": "Active",
          "type": "Supportive",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Protect the equipped headgear of a single target from damage and removal temporarily. Each cast consumes a Glistening Coat.\nAs skill levels increase, duration becomes longer.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Duration: 120sec"
            },
            {
              "level": 2,
              "text": "Duration: 240sec"
            },
            {
              "level": 3,
              "text": "Duration: 360sec"
            },
            {
              "level": 4,
              "text": "Duration: 480sec"
            },
            {
              "level": 5,
              "text": "Duration: 600sec"
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
                }
              ]
            }
          ],
          "translations": {
            "pt-BR": {
              "name": " Chemical Protection(Helm) (Chemical Protection Helm) ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Chemical_Protection(Helm)_(Chemical_Protection_Helm)"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/237.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/237",
          "tree": {
            "idx": 3,
            "row": 0,
            "col": 3,
            "columns": 9,
            "requirements": [
              {
                "id": 228,
                "level": 2,
                "name": "Prepare Potion",
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
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "duration": "120 seconds",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "240 seconds",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "360 seconds",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "480 seconds",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "600 seconds",
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
          "id": 238,
          "imageFile": "238.png",
          "name": "Bioethics",
          "maxLevel": 1,
          "prerequisiteText": "Quest complete",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Bioethics",
          "description": "A skill that is fundamental in enabling the creation of Homunculi.",
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
          "translations": {
            "pt-BR": {
              "name": " Bioethics ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Bioethics"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/238.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/238",
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
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 496,
          "imageFile": "496.png",
          "name": "Spiritual Potion Creation",
          "maxLevel": 1,
          "prerequisiteText": "Prepare Potion 10,",
          "group": "Supportive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Consume 200 SP in order to make\n200 attempts to create a White Potion every\n0.005 seconds. This skill has the same success\nrate as the Prepare Potion skill and has a\n3 second cast time that is unaffected by DEX.\nEach cast requires enough materials to craft\n200 White Potions.",
          "levelDetails": [],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "200"
                }
              ]
            }
          ],
          "translations": {
            "pt-BR": {
              "name": " Spiritual Potion Creation ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Spiritual_Potion_Creation"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/496.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/496",
          "tree": {
            "idx": 6,
            "row": 0,
            "col": 6,
            "columns": 9,
            "requirements": [
              {
                "id": 228,
                "level": 10,
                "name": "Prepare Potion",
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
                "label": "Pulse",
                "value": "0.005 seconds"
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
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 228,
          "imageFile": "228.png",
          "name": "Pharmacy",
          "maxLevel": 10,
          "prerequisiteText": "Learning Potion 5",
          "group": "Active",
          "type": "Creation",
          "target": "Immediately",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Pharmacy",
          "description": "Brews an item, available from the Creation Guides the user is carrying. Each cast consumes a Medicine Bowl.",
          "levelDetails": [],
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
          "spCost": "5",
          "translations": {
            "pt-BR": {
              "name": " Pharmacy ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Pharmacy"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/228.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/228",
          "tree": {
            "idx": 7,
            "row": 0,
            "col": 7,
            "columns": 9,
            "requirements": [
              {
                "id": 227,
                "level": 5,
                "name": "Potion Research",
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
                "value": "5"
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
                      "sp-cost": "5"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "5"
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
                      "sp-cost": "5"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "5"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "5"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "5"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "5"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "5"
                    }
                  },
                  {
                    "level": 10,
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
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 231,
          "imageFile": "231.png",
          "name": "Potion Pitcher",
          "maxLevel": 5,
          "prerequisiteText": "Pharmacy 3",
          "group": "Active",
          "type": "Recovery",
          "target": "Target 1",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Potion_Pitcher",
          "description": "Throws a potion and recovers party member/guild member/ humunculus.\nThe effectiveness of the thrown potion increases based on the skill level, and when the skill level rises, the number of potions you can throw increases.\nCan throw normal potions, ranking effect does not apply.\nHP recovery hugely increases when used on Homunculus.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Can use red potion"
            },
            {
              "level": 2,
              "text": "Can use orange potion"
            },
            {
              "level": 3,
              "text": "Can use yellow potion"
            },
            {
              "level": 4,
              "text": "Can use white potion"
            },
            {
              "level": 5,
              "text": "Can use blue potion"
            }
          ],
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
          "spCost": "1",
          "castDelay": "0.5 seconds",
          "castRange": "9 cells",
          "translations": {
            "pt-BR": {
              "name": " Potion Pitcher ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Potion_Pitcher"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/231.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/231",
          "tree": {
            "idx": 8,
            "row": 0,
            "col": 8,
            "columns": 9,
            "requirements": [
              {
                "id": 228,
                "level": 3,
                "name": "Prepare Potion",
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
                "value": "1"
              },
              {
                "label": "Cast Delay",
                "value": "0.5 seconds"
              },
              {
                "label": "Cast Range",
                "value": "9 cells"
              },
              {
                "label": "Target",
                "value": "Target 1"
              }
            ],
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
                      "effect": "Can use red potion",
                      "sp-cost": "1"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Can use orange potion",
                      "sp-cost": "1"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Can use yellow potion",
                      "sp-cost": "1"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Can use white potion",
                      "sp-cost": "1"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Can use blue potion",
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
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 478,
          "imageFile": "478.png",
          "name": "Aid Condensed Potion",
          "maxLevel": 10,
          "prerequisiteText": "Aid Potion 5",
          "group": "Active",
          "type": "1 cell on ground",
          "target": "Ground",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Aid_Condensed_Potion",
          "description": "Consume one Condensed Potion to\nheal all Party Members within a 7*7 cell area\naround the targeted spot.\nOnly normal type Condensed Potion can be consumed.\nThis skill doesn't get affected by ranker effect.\nPotion Efficiency & Required Condensed Potion",
          "levelDetails": [
            {
              "level": 1,
              "text": "110%, [Red]"
            },
            {
              "level": 2,
              "text": "120%, [Red]"
            },
            {
              "level": 3,
              "text": "130%, [Red]"
            },
            {
              "level": 4,
              "text": "140%, [Red]"
            },
            {
              "level": 5,
              "text": "150%, [Red]"
            },
            {
              "level": 6,
              "text": "160%, [Yellow]"
            },
            {
              "level": 7,
              "text": "170%, [Yellow]"
            },
            {
              "level": 8,
              "text": "180%, [Yellow]"
            },
            {
              "level": 9,
              "text": "190%, [Yellow]"
            },
            {
              "level": 10,
              "text": "200%, [White]"
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
          "castDelay": "1 second",
          "castRange": "? cells",
          "areaOfEffect": "7 x 7",
          "translations": {
            "pt-BR": {
              "name": " Aid Condensed Potion ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Aid_Condensed_Potion"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/478.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/478",
          "tree": {
            "idx": 9,
            "row": 1,
            "col": 0,
            "columns": 9,
            "requirements": [
              {
                "id": 231,
                "level": 5,
                "name": "Aid Potion",
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
                "label": "Cast Delay",
                "value": "1 second"
              },
              {
                "label": "Cast Range",
                "value": "? cells"
              },
              {
                "label": "Target",
                "value": "Ground"
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
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "110%, [Red]",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "120%, [Red]",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "130%, [Red]",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "140%, [Red]",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "150%, [Red]",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "160%, [Yellow]",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "170%, [Yellow]",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "180%, [Yellow]",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "190%, [Yellow]",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "200%, [White]",
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
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 235,
          "imageFile": "235.png",
          "name": "Chemical Protection(Shield) (Chemical Protection Shield)",
          "maxLevel": 5,
          "prerequisiteText": "Chemical Protection Helm 3",
          "group": "Active",
          "type": "Supportive",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Protect the equipped shield of a single target from damage and removal temporarily. Each cast consumes a Glistening Coat.\nAs skill levels increase, duration becomes longer.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Duration: 120sec"
            },
            {
              "level": 2,
              "text": "Duration: 240sec"
            },
            {
              "level": 3,
              "text": "Duration: 360sec"
            },
            {
              "level": 4,
              "text": "Duration: 480sec"
            },
            {
              "level": 5,
              "text": "Duration: 600sec"
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
          "translations": {
            "pt-BR": {
              "name": " Chemical Protection(Shield) (Chemical Protection Shield) ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Chemical_Protection(Shield)_(Chemical_Protection_Shield)"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/235.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/235",
          "tree": {
            "idx": 10,
            "row": 1,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 237,
                "level": 3,
                "name": "Biochemical Helm",
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
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "duration": "120 seconds",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "240 seconds",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "360 seconds",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "480 seconds",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "600 seconds",
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
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 244,
          "imageFile": "244.png",
          "name": "Rest",
          "maxLevel": 1,
          "prerequisiteText": "Bioethics 1",
          "group": "Active",
          "type": "Assist",
          "target": "Instant Cast",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Rest",
          "description": "Puts homunculus in rest.\nThis skill is only usable if Homunculus has at least 80% of it's MaxHP.\nRested Homunculus can be restored with the Call.",
          "levelDetails": [],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0 seconds",
          "cooldown": "20 seconds",
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
          "spCost": "50",
          "translations": {
            "pt-BR": {
              "name": " Rest ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Rest"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/244.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/244",
          "tree": {
            "idx": 11,
            "row": 1,
            "col": 2,
            "columns": 9,
            "requirements": [
              {
                "id": 238,
                "level": 1,
                "name": "Bioethics",
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
                "value": "0 seconds"
              },
              {
                "label": "Cooldown",
                "value": "20 seconds"
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
          "balanceNotes": [],
          "api": {
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 446,
          "imageFile": "446.png",
          "name": "Aid Berserk Potion",
          "maxLevel": 1,
          "prerequisiteText": "Spirit State",
          "group": "Supportive",
          "type": "",
          "target": "Player",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Aid_Berserk_Potion",
          "description": "Force the imbibing of Berserk\nPotions upon any job class. However, the\nduration of the increase in Attack Speed from\nthis skill lasts only half as long as the\nBerserk Potion item.\nEach cast requires 2 Berserk Potions.",
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
          "fixedCastTime": "1 second",
          "duration": "15 minutes",
          "castRange": "9 cells",
          "translations": {
            "pt-BR": {
              "name": " Aid Berserk Potion ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Aid_Berserk_Potion"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/446.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/446",
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
                "label": "SP Cost",
                "value": "10"
              },
              {
                "label": "Fixed Cast Time",
                "value": "1 second"
              },
              {
                "label": "Cast Range",
                "value": "9 cells"
              },
              {
                "label": "Target",
                "value": "Player"
              },
              {
                "label": "Duration",
                "value": "15 minutes"
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
          "id": 497,
          "imageFile": "497.png",
          "name": "Spiritual Potion Creation",
          "maxLevel": 1,
          "prerequisiteText": "Prepare Potion 10,",
          "group": "Supportive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "This skill is only enabled through\nthe power of the Super Novice Guardian Angel.\nConsume 200 SP in order to make 200 attempts to\ncreate a White Potion every 0.005 seconds. This\nskill can earn Alchemist Ranking Points and has\nthe same success rate as the Prepare Potion\nskill, as well as a 3 second cast time that\nis unaffected by DEX. Each cast requires enough\nmaterials to craft 200 White Potions.",
          "levelDetails": [],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "200"
                }
              ]
            }
          ],
          "translations": {
            "pt-BR": {
              "name": " Spiritual Potion Creation ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Spiritual_Potion_Creation"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/497.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/497",
          "tree": {
            "idx": 13,
            "row": 1,
            "col": 4,
            "columns": 9,
            "requirements": [
              {
                "id": 228,
                "level": 10,
                "name": "Prepare Potion",
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
                "label": "Pulse",
                "value": "0.005 seconds"
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
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 229,
          "imageFile": "229.png",
          "name": "Demonstration",
          "maxLevel": 5,
          "prerequisiteText": "Pharmacy 4",
          "group": "Active",
          "type": "1 cell on ground",
          "target": "Ground",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Demonstration",
          "description": "Throws a bottle of flammable liquid at a targeted location that will inflict Fire property hybrid damage every half a second to all enemies within its area of effect.\nIt has a chance of breaking enemies' equipped weapon.\nDamage per attack is increased according to skill level of the learning potion.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Duration: 40sec, Destruction Chance : 3%"
            },
            {
              "level": 2,
              "text": "Duration: 45sec, Destruction Chance : 6%"
            },
            {
              "level": 3,
              "text": "Duration: 50sec, Destruction Chance : 9%"
            },
            {
              "level": 4,
              "text": "Duration: 55sec, Destruction Chance :12%"
            },
            {
              "level": 5,
              "text": "Duration: 60sec, Destruction Chance :15%"
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
          "spCost": "10",
          "fixedCastTime": "0.2 seconds",
          "variableCastTime": "0.8 seconds",
          "castDelay": "0.5 seconds",
          "duration": "35 + (Skill Level × 5) seconds",
          "castRange": "9 cells",
          "areaOfEffect": "3 x 3",
          "translations": {
            "pt-BR": {
              "name": " Demonstration ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Demonstration"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/229.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/229",
          "tree": {
            "idx": 15,
            "row": 1,
            "col": 6,
            "columns": 9,
            "requirements": [
              {
                "id": 228,
                "level": 4,
                "name": "Prepare Potion",
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
              }
            ],
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
                      "duration": "40 seconds",
                      "effect": ", Destruction Chance : 3%",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "45 seconds",
                      "effect": ", Destruction Chance : 6%",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "50 seconds",
                      "effect": ", Destruction Chance : 9%",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "55 seconds",
                      "effect": ", Destruction Chance :12%",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "60 seconds",
                      "effect": ", Destruction Chance :15%",
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
          "id": 236,
          "imageFile": "236.png",
          "name": "Chemical Protection(Armor) (Chemical Protection Armor)",
          "maxLevel": 5,
          "prerequisiteText": "Chemical Protection Shield 3",
          "group": "Active",
          "type": "Supportive",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Protect the equipped armor of a single target from damage and removal temporarily. Each cast consumes a Glistening Coat.\nAs skill levels increase, duration becomes longer.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Duration: 120sec"
            },
            {
              "level": 2,
              "text": "Duration: 240sec"
            },
            {
              "level": 3,
              "text": "Duration: 360sec"
            },
            {
              "level": 4,
              "text": "Duration: 480sec"
            },
            {
              "level": 5,
              "text": "Duration: 600sec"
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
          "translations": {
            "pt-BR": {
              "name": " Chemical Protection(Armor) (Chemical Protection Armor) ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Chemical_Protection(Armor)_(Chemical_Protection_Armor)"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/236.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/236",
          "tree": {
            "idx": 17,
            "row": 1,
            "col": 8,
            "columns": 9,
            "requirements": [
              {
                "id": 235,
                "level": 3,
                "name": "Synthesized Shield",
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
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "duration": "120 seconds",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "240 seconds",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "360 seconds",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "480 seconds",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "600 seconds",
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
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 243,
          "imageFile": "243.png",
          "name": "Call Homunculus",
          "maxLevel": 1,
          "prerequisiteText": "Rest 1",
          "group": "Active",
          "type": "Assist",
          "target": "Instant Cast",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Call_Homunculus",
          "description": "Calls out an existing homunculus that is in resting with the Vaporize skill or creates a new homunculus with an embryo.",
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
          "translations": {
            "pt-BR": {
              "name": " Call Homunculus ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Call_Homunculus"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/243.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/243",
          "tree": {
            "idx": 18,
            "row": 2,
            "col": 0,
            "columns": 9,
            "requirements": [
              {
                "id": 244,
                "level": 1,
                "name": "Vaporize",
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
                "label": "Target",
                "value": "Instant Cast"
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
          "id": 498,
          "imageFile": "498.png",
          "name": "Spiritual Potion Creation",
          "maxLevel": 1,
          "prerequisiteText": "Prepare Potion 10,",
          "group": "Supportive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "This skill is only enabled through\nthe power of the Taekwon-Do Guardian Angel.\nConsume 200 SP in order to create 100 Alcohol,\n50 Acid Bottle and 50 Bottle Grenade. Each cast\nrequires 50 Fabric, 50 Empty Bottle and enough\nmaterials to craft the produced items.",
          "levelDetails": [],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "200"
                }
              ]
            }
          ],
          "translations": {
            "pt-BR": {
              "name": " Spiritual Potion Creation ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Spiritual_Potion_Creation"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/498.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/498",
          "tree": {
            "idx": 20,
            "row": 2,
            "col": 2,
            "columns": 9,
            "requirements": [
              {
                "id": 228,
                "level": 10,
                "name": "Prepare Potion",
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
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 230,
          "imageFile": "230.png",
          "name": "Acid Terror",
          "maxLevel": 5,
          "prerequisiteText": "Pharmacy 5",
          "group": "Active",
          "type": "Ranged Physical Attack",
          "target": "1 Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Acid_Terror",
          "description": "Throws a bottle of corrosive acid at a single target that will inflict hybrid damage. It has a chance of leaving the target [Abnormal Status: bleeding] or breaking its equipped armor\nAs skill levels increase, chances of damaging armor or causing bleeding increase.\nDamage is increased according to skill level of the learning potion. The chance of bleeding is reduced by the target's resistance to abnormal status.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 200%, Destruction Chance: 5%, Bleeding chance: 3%"
            },
            {
              "level": 2,
              "text": "ATK 400%, Destruction Chance:15%, Bleeding chance: 6%"
            },
            {
              "level": 3,
              "text": "ATK 600%, Destruction Chance:25%, Bleeding chance: 9%"
            },
            {
              "level": 4,
              "text": "ATK 800%, Destruction Chance:35%, Bleeding chance:12%"
            },
            {
              "level": 5,
              "text": "ATK 1000%, Destruction Chance:45%, Bleeding chance:15%"
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
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "0.5 seconds",
          "castDelay": "0.5 seconds",
          "castRange": "9 cells",
          "translations": {
            "pt-BR": {
              "name": " Acid Terror ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Acid_Terror"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/230.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/230",
          "tree": {
            "idx": 22,
            "row": 2,
            "col": 4,
            "columns": 9,
            "requirements": [
              {
                "id": 228,
                "level": 5,
                "name": "Prepare Potion",
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
                "value": "9 cells"
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
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 490,
          "imageFile": "490.png",
          "name": "Acid Bomb",
          "maxLevel": 10,
          "prerequisiteText": "Demonstration 5, Acid Terror 5",
          "group": "Active",
          "type": "Ranged Physical",
          "target": "Target 1",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Acid_Bomb",
          "description": "Ranged Physical Damage to a target, consumes 1 Fire and Acid Bottle.\nDamage increases based on BaseLv, INT, and target's VIT.\nDeals half of the damage to players\nand adds a chance to break target's weapon and armors based on skill level.",
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
          "fixedCastTime": "1 second",
          "variableCastTime": "0 seconds",
          "castDelay": "1 second",
          "cooldown": "0.15 seconds",
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
          "spCost": "50",
          "castRange": "9 cells",
          "translations": {
            "pt-BR": {
              "name": " Acid Bomb ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Acid_Bomb"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/490.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/490",
          "tree": {
            "idx": 23,
            "row": 2,
            "col": 5,
            "columns": 9,
            "requirements": [
              {
                "id": 229,
                "level": 5,
                "name": "Bomb",
                "visible": true
              },
              {
                "id": 230,
                "level": 5,
                "name": "Acid Terror",
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
                "value": "50"
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
                "value": "0.15 seconds"
              },
              {
                "label": "Cast Range",
                "value": "9 cells"
              },
              {
                "label": "Target",
                "value": "Target 1"
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
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 10,
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
          "id": 234,
          "imageFile": "234.png",
          "name": "Chemical Protection(Weapon) (Chemical Protection Weapon)",
          "maxLevel": 5,
          "prerequisiteText": "Chemical Protection Armor 3",
          "group": "Active",
          "type": "Supportive",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Protects the equipped weapon of a single target from damage and removal temporarily. Each cast consumes a Glistening Coat.\nAs skill levels increase, duration becomes longer.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Duration: 120sec"
            },
            {
              "level": 2,
              "text": "Duration: 240sec"
            },
            {
              "level": 3,
              "text": "Duration: 360sec"
            },
            {
              "level": 4,
              "text": "Duration: 480sec"
            },
            {
              "level": 5,
              "text": "Duration: 600sec"
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
          "translations": {
            "pt-BR": {
              "name": " Chemical Protection(Weapon) (Chemical Protection Weapon) ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Chemical_Protection(Weapon)_(Chemical_Protection_Weapon)"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/234.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/234",
          "tree": {
            "idx": 24,
            "row": 2,
            "col": 6,
            "columns": 9,
            "requirements": [
              {
                "id": 236,
                "level": 3,
                "name": "Synthetic Armor",
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
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "duration": "120 seconds",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "240 seconds",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "360 seconds",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "480 seconds",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "600 seconds",
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
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 247,
          "imageFile": "247.png",
          "name": "Resurrect Homunculus",
          "maxLevel": 5,
          "prerequisiteText": "Call Homunculus 1",
          "group": "Active",
          "type": "Recovery",
          "target": "Instant Cast",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Resurrect_Homunculus",
          "description": "Restores Homunculus from rested status or resurrects a dead homunculus.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Resurrects with HP 20%"
            },
            {
              "level": 2,
              "text": "Resurrects with HP 40%"
            },
            {
              "level": 3,
              "text": "Resurrects with HP 60%"
            },
            {
              "level": 4,
              "text": "Resurrects with HP 80%"
            },
            {
              "level": 5,
              "text": "Resurrects with HP100%"
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "2 seconds",
          "castDelay": "0 seconds",
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
                  "value": "68"
                },
                {
                  "level": 3,
                  "value": "62"
                },
                {
                  "level": 4,
                  "value": "56"
                },
                {
                  "level": 5,
                  "value": "50"
                }
              ]
            }
          ],
          "spCost": "80 - (SkillLevel x 6)",
          "cooldown": "170 - (SkillLevel x 30) seconds",
          "translations": {
            "pt-BR": {
              "name": " Resurrect Homunculus ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Resurrect_Homunculus"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/247.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/247",
          "tree": {
            "idx": 25,
            "row": 2,
            "col": 7,
            "columns": 9,
            "requirements": [
              {
                "id": 243,
                "level": 1,
                "name": "Call Homunculus",
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
                "value": "80 - (SkillLevel x 6)"
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
                "value": "0 seconds"
              },
              {
                "label": "Cooldown",
                "value": "170 - (SkillLevel x 30) seconds"
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
                      "effect": "Resurrects with HP 20%",
                      "sp-cost": "74"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Resurrects with HP 40%",
                      "sp-cost": "68"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Resurrects with HP 60%",
                      "sp-cost": "62"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Resurrects with HP 80%",
                      "sp-cost": "56"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Resurrects with HP100%",
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
          "id": 232,
          "imageFile": "232.png",
          "name": "Bio Cannibalize",
          "maxLevel": 5,
          "prerequisiteText": "Pharmacy 6",
          "group": "Active",
          "type": "1 cell on ground",
          "target": "Ground",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Bio_Cannibalize",
          "description": "Summons a plant monster on a targeted location. Each cast consumes a Plant Bottle.\nInstalled monsters automatically disappear after a certain period of time\nMonster MaxHP depends on skill level.\nDifferent monsters are installed for each skill level, and only one type of monster can be installed..\nThe lower the skill level, the more monsters can be installed. At level 5, only one monster can be installed.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Maximum installations: 5monsters, Installed Monster: Mandragora"
            },
            {
              "level": 2,
              "text": "Maximum installations: 4monsters, Installed Monster: Hydra"
            },
            {
              "level": 3,
              "text": "Maximum installations: 3monsters, Installed Monster: Flora"
            },
            {
              "level": 4,
              "text": "Maximum installations: 2monsters, Installed Monster: Parasite"
            },
            {
              "level": 5,
              "text": "Maximum installations: 1monsters, Installed Monster: Geographer"
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
                }
              ]
            }
          ],
          "spCost": "20",
          "fixedCastTime": "0.4 seconds",
          "variableCastTime": "1.6 seconds",
          "castDelay": "0.5 seconds",
          "duration": "(6 − Skill Level) minutes; Until is killed",
          "castRange": "4 cells",
          "translations": {
            "pt-BR": {
              "name": " Bio Cannibalize ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Bio_Cannibalize"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/232.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/232",
          "tree": {
            "idx": 29,
            "row": 3,
            "col": 2,
            "columns": 9,
            "requirements": [
              {
                "id": 228,
                "level": 6,
                "name": "Prepare Potion",
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
                "value": "20"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0.4 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "1.6 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.5 seconds"
              },
              {
                "label": "Cast Range",
                "value": "4 cells"
              },
              {
                "label": "Target",
                "value": "Ground"
              },
              {
                "label": "Duration",
                "value": "(6 − Skill Level) minutes; Until is killed"
              }
            ],
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
                      "effect": "Ma x imum installations: 5monsters, Installed Monster: Mandragora",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Ma x imum installations: 4monsters, Installed Monster: Hydra",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Ma x imum installations: 3monsters, Installed Monster: Flora",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Ma x imum installations: 2monsters, Installed Monster: Parasite",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Ma x imum installations: 1monsters, Installed Monster: Geographer",
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
          "id": 479,
          "imageFile": "479.png",
          "name": "Full Chemical Protection",
          "maxLevel": 5,
          "prerequisiteText": "Chemical Protection(Helm, Shield, Armor, and Weapon) 5",
          "group": "Active",
          "type": "Supportive",
          "target": "Self or Ally",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Full_Chemical_Protection",
          "description": "Protect the targeted character with\nall four kinds of chemical protection.\nEach cast requires 1 Glistening Coat.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Duration 120 sec"
            },
            {
              "level": 2,
              "text": "Duration 240 sec"
            },
            {
              "level": 3,
              "text": "Duration 360 sec"
            },
            {
              "level": 4,
              "text": "Duration 480 sec"
            },
            {
              "level": 5,
              "text": "Duration 600 sec"
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
          "spCost": "40",
          "fixedCastTime": "1 second",
          "castDelay": "ASPD",
          "duration": "(Skill Level × 2) minutes",
          "castRange": "1 cells",
          "translations": {
            "pt-BR": {
              "name": " Full Chemical Protection ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Full_Chemical_Protection"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/479.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/479",
          "tree": {
            "idx": 31,
            "row": 3,
            "col": 4,
            "columns": 9,
            "requirements": [
              {
                "id": 234,
                "level": 5,
                "name": "Alchemical Weapon",
                "visible": true
              },
              {
                "id": 235,
                "level": 5,
                "name": "Synthesized Shield",
                "visible": true
              },
              {
                "id": 236,
                "level": 5,
                "name": "Synthetic Armor",
                "visible": true
              },
              {
                "id": 237,
                "level": 5,
                "name": "Biochemical Helm",
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
                "value": "40"
              },
              {
                "label": "Fixed Cast Time",
                "value": "1 second"
              },
              {
                "label": "Cast Delay",
                "value": "ASPD"
              },
              {
                "label": "Cast Range",
                "value": "1 cells"
              },
              {
                "label": "Target",
                "value": "Self or Ally"
              }
            ],
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
                      "duration": "120 seconds",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "240 seconds",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "360 seconds",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "480 seconds",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "600 seconds",
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
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        }
      ]
    },
    {
      "id": "previous-3",
      "label": "Merchant",
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
          "translations": {
            "pt-BR": {
              "name": " Basic Skill ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Basic_Skill"
            }
          },
          "apiStatus": "translated",
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
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 36,
          "imageFile": "36.png",
          "name": "Enlarge Weight limit",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Enhances Weight Limit.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Weight limit + 200"
            },
            {
              "level": 2,
              "text": "Weight limit + 400"
            },
            {
              "level": 3,
              "text": "Weight limit + 600"
            },
            {
              "level": 4,
              "text": "Weight limit + 800"
            },
            {
              "level": 5,
              "text": "Weight limit +1000"
            },
            {
              "level": 6,
              "text": "Weight limit +1200"
            },
            {
              "level": 7,
              "text": "Weight limit +1400"
            },
            {
              "level": 8,
              "text": "Weight limit +1600"
            },
            {
              "level": 9,
              "text": "Weight limit +1800"
            },
            {
              "level": 10,
              "text": "Weight limit +2000"
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
          "translations": {
            "pt-BR": {
              "name": " Enlarge Weight limit ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Enlarge_Weight_limit"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/36.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/36",
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
                    "id": "weight-limit",
                    "label": "Weight Limit"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "weight-limit": "+ 200",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "weight-limit": "+ 400",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "weight-limit": "+ 600",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "weight-limit": "+ 800",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "weight-limit": "+1000",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "weight-limit": "+1200",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "weight-limit": "+1400",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "weight-limit": "+1600",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "weight-limit": "+1800",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "weight-limit": "+2000",
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
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 42,
          "imageFile": "42.png",
          "name": "Mammonite",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "Physical Attack",
          "target": "1 Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Mammonite",
          "description": "Consumes SP5 and strike a single target with a strong blow, inflicting high physical damage.\nEach use consumes some Zeny.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Damage (ATK) 150%, Zeny Cost : 100Z"
            },
            {
              "level": 2,
              "text": "Damage (ATK) 200%, Zeny Cost : 200Z"
            },
            {
              "level": 3,
              "text": "Damage (ATK) 250%, Zeny Cost : 300Z"
            },
            {
              "level": 4,
              "text": "Damage (ATK) 300%, Zeny Cost : 400Z"
            },
            {
              "level": 5,
              "text": "Damage (ATK) 350%, Zeny Cost : 500Z"
            },
            {
              "level": 6,
              "text": "Damage (ATK) 400%, Zeny Cost : 600Z"
            },
            {
              "level": 7,
              "text": "Damage (ATK) 450%, Zeny Cost : 700Z"
            },
            {
              "level": 8,
              "text": "Damage (ATK) 500%, Zeny Cost : 800Z"
            },
            {
              "level": 9,
              "text": "Damage (ATK) 550%, Zeny Cost : 900Z"
            },
            {
              "level": 10,
              "text": "Damage (ATK) 600%, Zeny Cost :1000Z"
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
          "spCost": "5",
          "castDelay": "ASPD",
          "castRange": "Melee",
          "translations": {
            "pt-BR": {
              "name": " Mammonite ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Mammonite"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/42.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/42",
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
                "label": "SP Cost",
                "value": "5"
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
                      "sp-cost": "5"
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
                      "sp-cost": "5"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "5"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "5"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "5"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "5"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "5"
                    }
                  },
                  {
                    "level": 10,
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
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 40,
          "imageFile": "40.png",
          "name": "Item Appraisal",
          "maxLevel": 1,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "Supportive",
          "target": "Caster Only",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Item_Appraisal",
          "description": "Identifies unknown items using SP10.",
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
          "translations": {
            "pt-BR": {
              "name": " Item Appraisal ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Item_Appraisal"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/40.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/40",
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
                "value": "1"
              },
              {
                "label": "SP Cost",
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
          "id": 155,
          "imageFile": "155.png",
          "name": "Crazy Uproar",
          "maxLevel": 1,
          "prerequisiteText": "Finish Quest",
          "group": "Supportive",
          "type": "",
          "target": "Caster",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Crazy_Uproar",
          "description": "Scream with battle vigor to add\n+4 STR for 5 minutes.",
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
          "spCost": "8",
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "1 second",
          "cooldown": "30 seconds",
          "duration": "5 minutes",
          "translations": {
            "pt-BR": {
              "name": " Crazy Uproar ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Crazy_Uproar"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/155.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/155",
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
                "value": "Supportive Skill"
              },
              {
                "label": "Levels",
                "value": "1"
              },
              {
                "label": "SP Cost",
                "value": "8"
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
                "label": "Cooldown",
                "value": "30 seconds"
              },
              {
                "label": "Target",
                "value": "Caster"
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
          "balanceNotes": [],
          "api": {
            "status": "translated",
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
          "translations": {
            "pt-BR": {
              "name": " First Aid ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/First_Aid"
            }
          },
          "apiStatus": "translated",
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
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 37,
          "imageFile": "37.png",
          "name": "Discount",
          "maxLevel": 10,
          "prerequisiteText": "Enlarge Weight limit 3",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Discount",
          "description": "Allows to purchase items from NPC shops at lower prices.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Discount Rate 7%"
            },
            {
              "level": 2,
              "text": "Discount Rate 9%"
            },
            {
              "level": 3,
              "text": "Discount Rate 11%"
            },
            {
              "level": 4,
              "text": "Discount Rate 13%"
            },
            {
              "level": 5,
              "text": "Discount Rate 15%"
            },
            {
              "level": 6,
              "text": "Discount Rate 17%"
            },
            {
              "level": 7,
              "text": "Discount Rate 19%"
            },
            {
              "level": 8,
              "text": "Discount Rate 21%"
            },
            {
              "level": 9,
              "text": "Discount Rate 23%"
            },
            {
              "level": 10,
              "text": "Discount Rate 24%"
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
          "translations": {
            "pt-BR": {
              "name": " Discount ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Discount"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/37.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/37",
          "tree": {
            "idx": 8,
            "row": 0,
            "col": 8,
            "columns": 9,
            "requirements": [
              {
                "id": 36,
                "level": 3,
                "name": "Enlarge Weight Limit",
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
                    "id": "effect",
                    "label": "Effect"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Discount Rate 7%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Discount Rate 9%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Discount Rate 11%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Discount Rate 13%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Discount Rate 15%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "Discount Rate 17%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "Discount Rate 19%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "Discount Rate 21%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "Discount Rate 23%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "Discount Rate 24%",
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
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 39,
          "imageFile": "39.png",
          "name": "Push Cart(Pushcart)",
          "maxLevel": 10,
          "prerequisiteText": "Enlarge Weight limit 5",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Able to use pushcart that carries a lot of items.\nEnables to rent a Pushcart from most Kafra employees, using [Alt-W]key.\ncan't use the items in pushcart directly.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Mov. Speed: 45%"
            },
            {
              "level": 2,
              "text": "Mov. Speed: 40%"
            },
            {
              "level": 3,
              "text": "Mov. Speed: 35%"
            },
            {
              "level": 4,
              "text": "Mov. Speed: 30%"
            },
            {
              "level": 5,
              "text": "Mov. Speed: 25%"
            },
            {
              "level": 6,
              "text": "Mov. Speed: 20%"
            },
            {
              "level": 7,
              "text": "Mov. Speed: 15%"
            },
            {
              "level": 8,
              "text": "Mov. Speed: 10%"
            },
            {
              "level": 9,
              "text": "Mov. Speed: 5%"
            },
            {
              "level": 10,
              "text": "Mov. Speed: none"
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
          "translations": {
            "pt-BR": {
              "name": " Push Cart(Pushcart) ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Push_Cart(Pushcart)"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/39.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/39",
          "tree": {
            "idx": 9,
            "row": 1,
            "col": 0,
            "columns": 9,
            "requirements": [
              {
                "id": 36,
                "level": 5,
                "name": "Enlarge Weight Limit",
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
                    "id": "effect",
                    "label": "Effect"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Mov. Speed: 45%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Mov. Speed: 40%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Mov. Speed: 35%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Mov. Speed: 30%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Mov. Speed: 25%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "Mov. Speed: 20%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "Mov. Speed: 15%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "Mov. Speed: 10%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "Mov. Speed: 5%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "Mov. Speed: none",
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
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 154,
          "imageFile": "154.png",
          "name": "Change Cart",
          "maxLevel": 1,
          "prerequisiteText": "Finish Quest",
          "group": "Supportive",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Change_Cart",
          "description": "Change Pushcart appearance.\nThere are five different Pushcart styles that\nare chosen according to the character's\nBase Level.",
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
          "spCost": "40",
          "translations": {
            "pt-BR": {
              "name": " Change Cart ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Change_Cart"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/154.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/154",
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
                "label": "SP Cost",
                "value": "40"
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
          "id": 2544,
          "imageFile": "2544.png",
          "name": "Cart Decoration",
          "maxLevel": 1,
          "prerequisiteText": "Finish Quest",
          "group": "Supportive",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Cart_Decoration",
          "description": "Change Pushcart appearance.",
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
            },
            {
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "658188"
                }
              ]
            }
          ],
          "spCost": "40",
          "translations": {
            "pt-BR": {
              "name": " Cart Decoration ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Cart_Decoration"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/2544.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2544",
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
              },
              {
                "label": "SP Cost",
                "value": "40"
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
                    "id": "data-1",
                    "label": "Data 1"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "40",
                      "data-1": "658188"
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
          "translations": {
            "pt-BR": {
              "name": " Play Dead ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Play_Dead"
            }
          },
          "apiStatus": "translated",
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
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 38,
          "imageFile": "38.png",
          "name": "Overcharge",
          "maxLevel": 10,
          "prerequisiteText": "Discount 3",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Overcharge",
          "description": "Allows to sell items to NPC shops at higher prices..",
          "levelDetails": [
            {
              "level": 1,
              "text": "Overcharge Rate 7%"
            },
            {
              "level": 2,
              "text": "Overcharge Rate 9%"
            },
            {
              "level": 3,
              "text": "Overcharge Rate 11%"
            },
            {
              "level": 4,
              "text": "Overcharge Rate 13%"
            },
            {
              "level": 5,
              "text": "Overcharge Rate 15%"
            },
            {
              "level": 6,
              "text": "Overcharge Rate 17%"
            },
            {
              "level": 7,
              "text": "Overcharge Rate 19%"
            },
            {
              "level": 8,
              "text": "Overcharge Rate 21%"
            },
            {
              "level": 9,
              "text": "Overcharge Rate 23%"
            },
            {
              "level": 10,
              "text": "Overcharge Rate 24%"
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
          "translations": {
            "pt-BR": {
              "name": " Overcharge ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Overcharge"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/38.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/38",
          "tree": {
            "idx": 15,
            "row": 1,
            "col": 6,
            "columns": 9,
            "requirements": [
              {
                "id": 37,
                "level": 3,
                "name": "Discount",
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
                    "id": "effect",
                    "label": "Effect"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Overcharge Rate 7%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Overcharge Rate 9%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Overcharge Rate 11%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Overcharge Rate 13%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Overcharge Rate 15%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "Overcharge Rate 17%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "Overcharge Rate 19%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "Overcharge Rate 21%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "Overcharge Rate 23%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "Overcharge Rate 24%",
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
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 41,
          "imageFile": "41.png",
          "name": "Vending",
          "maxLevel": 10,
          "prerequisiteText": "Push Cart 3",
          "group": "Active",
          "type": "Supportive",
          "target": "Caster Only",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Vending",
          "description": "Requires the user to have a pushcart equipped. Consumes SP 30 and opens a custom shop from which items can be sold to other players.\nOnly items stored in the Pushcart can be sold, The number of items available for sale increases with each level.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Item Stacks: 3items"
            },
            {
              "level": 2,
              "text": "Item Stacks: 4items"
            },
            {
              "level": 3,
              "text": "Items Stacks: 5items"
            },
            {
              "level": 4,
              "text": "Items Stacks: 6items"
            },
            {
              "level": 5,
              "text": "Items Stacks: 7items"
            },
            {
              "level": 6,
              "text": "Items Stacks: 8items"
            },
            {
              "level": 7,
              "text": "Items Stacks: 9items"
            },
            {
              "level": 8,
              "text": "Items Stacks:10items"
            },
            {
              "level": 9,
              "text": "Items Stacks:11items"
            },
            {
              "level": 10,
              "text": "Items Stacks:12items"
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
          "translations": {
            "pt-BR": {
              "name": " Vending ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Vending"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/41.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/41",
          "tree": {
            "idx": 16,
            "row": 1,
            "col": 7,
            "columns": 9,
            "requirements": [
              {
                "id": 39,
                "level": 3,
                "name": "Pushcart",
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
                      "effect": "Item Stacks: 3items",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Item Stacks: 4items",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Items Stacks: 5items",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Items Stacks: 6items",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Items Stacks: 7items",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "Items Stacks: 8items",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "Items Stacks: 9items",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "Items Stacks:10items",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "Items Stacks:11items",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "Items Stacks:12items",
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
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 153,
          "imageFile": "153.png",
          "name": "Cart Revolution",
          "maxLevel": 1,
          "prerequisiteText": "Finish Quest",
          "group": "Attack",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Cart_Revolution",
          "description": "A splashed damage attack in which\na Pushcart is smashed into a target.\nInflicts 150% of the damage of a normal attack\nin addition to extra damage from the weight of\nitems in Pushcart.",
          "levelDetails": [],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "12"
                }
              ]
            }
          ],
          "spCost": "12",
          "castDelay": "ASPD",
          "castRange": "Melee",
          "areaOfEffect": "3 x 3",
          "translations": {
            "pt-BR": {
              "name": " Cart Revolution ",
              "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Cart_Revolution"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/153.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/153",
          "tree": {
            "idx": 19,
            "row": 2,
            "col": 1,
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
                "value": "Enemy"
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
            "status": "translated",
            "entries": [],
            "selectedEntry": null
          }
        }
      ]
    }
  ],
  "skills": [
    {
      "id": 5336,
      "imageFile": "5336.png",
      "name": "Bionic Pharmacy",
      "maxLevel": 5,
      "prerequisiteText": "Special Pharmacy Lv. 5",
      "group": "Active/Crafting",
      "type": "Crafting",
      "target": "Self",
      "recoversAp": "",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Bionic_Pharmacy",
      "description": "Create a chemical at the cost of 30 SP.\nConsumes 1 Beaker along with other ingredients, depending on the chemical you create.\nIcicle Acid Bottle: 1 Bottle Grenade, 1 Acid Bottle, and 2 Indigo Points\nEarth Acid Bottle: 1 Bottle Grenade, 1 Acid Bottle, and 2 Lime Green Points\nGale Acid Bottle: 1 Bottle Grenade, 1 Acid Bottle, and 2 Yellow Wish Points\nFlame Acid Bottle: 1 Bottle Grenade, 1 Acid Bottle, and 2 Scarlet Points\nAdvanced Glistening Coat: 10 Glistening Coats and 5 Empty Bottles\nAdvanced Plant Bottle: 10 Plant Bottles, 5 Mandragora Pots, 2 Thorn Plant Seeds, and 2 Bloodsuck Plant Seeds\nEye Cleaner (Sightless Remover): 10 Empty Bottles, 5 Holy Waters, 3 White Herbs, and 3 Green Herbs\nEar Cleaner (Quiet Remover): 10 Empty Bottles, 5 Holy Waters, 2 Blue Herbs, and 3 Green Herbs\nEnergy Tonic (Lethargy Remover): 10 Empty Bottles, 5 Holy Waters, 2 Yggdrasilberries, 3 Royal Jellies\nMini Extinguisher (Arson Remover): 10 Empty Bottles, 5 Holy Waters, 5 Crystal Blues, and 3 Irons\nLucky Water (Misfortune Remover): 10 Empty Bottles, 5 Holy Waters, 10 Clovers, and 3 Green Herbs\nStrong Antidote (Strong Poison Remover): 10 Empty Bottles, 5 Holy Waters, 3 Poison Bottles, and 10 Green Herbs\nHigh Calorie Chocolate (Depression Remover): Empty Bottle 10, Cacao 3, Royal Jelly 3, Yggdrasil Seed 5\nRefined Holy Water (Holy Fire Remover): 10 Empty Bottles, 10 Holy Waters, and 3 Royal Jellies",
      "levelDetails": [
        {
          "level": 1,
          "text": "Max Crafting Count: 11"
        },
        {
          "level": 2,
          "text": "Max Crafting Count: 12"
        },
        {
          "level": 3,
          "text": "Max Crafting Count: 13"
        },
        {
          "level": 4,
          "text": "Max Crafting Count: 14"
        },
        {
          "level": 5,
          "text": "Max Crafting Count: 15"
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
      "translations": {
        "pt-BR": {
          "name": " Bionic Pharmacy ",
          "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
          "source": "bROWiki",
          "sourceUrl": "https://browiki.org/wiki/Bionic_Pharmacy"
        }
      },
      "apiStatus": "translated",
      "iconUrl": "assets/divine-pride/skills/5336.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5336",
      "tree": {
        "idx": 0,
        "row": 0,
        "col": 0,
        "columns": 9,
        "requirements": [
          {
            "id": 2497,
            "level": 5,
            "name": "Special Pharmacy",
            "visible": false
          }
        ]
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Active/Crafting Skill"
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
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "effect": "Ma x Crafting Count: 11",
                  "sp-cost": "30"
                }
              },
              {
                "level": 2,
                "values": {
                  "effect": "Ma x Crafting Count: 12",
                  "sp-cost": "30"
                }
              },
              {
                "level": 3,
                "values": {
                  "effect": "Ma x Crafting Count: 13",
                  "sp-cost": "30"
                }
              },
              {
                "level": 4,
                "values": {
                  "effect": "Ma x Crafting Count: 14",
                  "sp-cost": "30"
                }
              },
              {
                "level": 5,
                "values": {
                  "effect": "Ma x Crafting Count: 15",
                  "sp-cost": "30"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "balanceNotes": [
        {
          "skillName": "Bionic Pharmacy",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/biolo/rebalance_2.md",
          "section": "4.1",
          "notes": [
            "The crafting materials of Icycle/Earth/Gale/Flame Acid Bottle have been changed, reduces amount of Bottle Grenade and Acid Bottle used from 5 each to 1 each, changes materials from elemental ore to elemental point."
          ],
          "specRows": []
        }
      ],
      "api": {
        "status": "translated",
        "entries": [],
        "selectedEntry": null
      }
    },
    {
      "id": 5337,
      "imageFile": "5337.png",
      "name": "Bionics Mastery",
      "maxLevel": 10,
      "prerequisiteText": "basic skill",
      "group": "Passive",
      "type": "",
      "target": "",
      "recoversAp": "",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Bionics_Mastery",
      "description": "Improve Plant minion stats.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK +600/MHP +40000/MSP +20/DEF+20/MDEF +4/FLEE +10"
        },
        {
          "level": 2,
          "text": "ATK +1200/MHP +80000/MSP +40/DEF+40/MDEF +8/FLEE +20"
        },
        {
          "level": 3,
          "text": "ATK +1800/MHP +120000/MSP +60/DEF+60/MDEF +12/FLEE +30"
        },
        {
          "level": 4,
          "text": "ATK +2400/MHP +160000/MSP +80/DEF+80/MDEF +16/FLEE +40"
        },
        {
          "level": 5,
          "text": "ATK +3000/MHP +200000/MSP +100/DEF+100/MDEF +20/FLEE +50"
        },
        {
          "level": 6,
          "text": "ATK +3600/MHP +240000/MSP +120/DEF+120/MDEF +24/FLEE +60"
        },
        {
          "level": 7,
          "text": "ATK +4200/MHP +280000/MSP +140/DEF+140/MDEF +28/FLEE +70"
        },
        {
          "level": 8,
          "text": "ATK +4800/MHP +320000/MSP +160/DEF+160/MDEF +32/FLEE +80"
        },
        {
          "level": 9,
          "text": "ATK +5400/MHP +360000/MSP +180/DEF+180/MDEF +36/FLEE +90"
        },
        {
          "level": 10,
          "text": "ATK +6000/MHP +400000/MSP +200/DEF+200/MDEF +40/FLEE +100"
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
      "translations": {
        "pt-BR": {
          "name": " Bionics Mastery ",
          "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
          "source": "bROWiki",
          "sourceUrl": "https://browiki.org/wiki/Bionics_Mastery"
        }
      },
      "apiStatus": "translated",
      "iconUrl": "assets/divine-pride/skills/5337.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5337",
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
                "id": "mhp",
                "label": "MHP"
              },
              {
                "id": "msp",
                "label": "MSP"
              },
              {
                "id": "sp-cost",
                "label": "SP Cost"
              },
              {
                "id": "atk",
                "label": "Atk"
              },
              {
                "id": "def",
                "label": "Def"
              },
              {
                "id": "flee",
                "label": "Flee"
              },
              {
                "id": "mdef",
                "label": "Mdef"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "atk": "+600",
                  "mhp": "+40000",
                  "msp": "+20",
                  "def": "+20",
                  "mdef": "+4",
                  "flee": "+10",
                  "sp-cost": "0"
                }
              },
              {
                "level": 2,
                "values": {
                  "atk": "+1200",
                  "mhp": "+80000",
                  "msp": "+40",
                  "def": "+40",
                  "mdef": "+8",
                  "flee": "+20",
                  "sp-cost": "0"
                }
              },
              {
                "level": 3,
                "values": {
                  "atk": "+1800",
                  "mhp": "+120000",
                  "msp": "+60",
                  "def": "+60",
                  "mdef": "+12",
                  "flee": "+30",
                  "sp-cost": "0"
                }
              },
              {
                "level": 4,
                "values": {
                  "atk": "+2400",
                  "mhp": "+160000",
                  "msp": "+80",
                  "def": "+80",
                  "mdef": "+16",
                  "flee": "+40",
                  "sp-cost": "0"
                }
              },
              {
                "level": 5,
                "values": {
                  "atk": "+3000",
                  "mhp": "+200000",
                  "msp": "+100",
                  "def": "+100",
                  "mdef": "+20",
                  "flee": "+50",
                  "sp-cost": "0"
                }
              },
              {
                "level": 6,
                "values": {
                  "atk": "+3600",
                  "mhp": "+240000",
                  "msp": "+120",
                  "def": "+120",
                  "mdef": "+24",
                  "flee": "+60",
                  "sp-cost": "0"
                }
              },
              {
                "level": 7,
                "values": {
                  "atk": "+4200",
                  "mhp": "+280000",
                  "msp": "+140",
                  "def": "+140",
                  "mdef": "+28",
                  "flee": "+70",
                  "sp-cost": "0"
                }
              },
              {
                "level": 8,
                "values": {
                  "atk": "+4800",
                  "mhp": "+320000",
                  "msp": "+160",
                  "def": "+160",
                  "mdef": "+32",
                  "flee": "+80",
                  "sp-cost": "0"
                }
              },
              {
                "level": 9,
                "values": {
                  "atk": "+5400",
                  "mhp": "+360000",
                  "msp": "+180",
                  "def": "+180",
                  "mdef": "+36",
                  "flee": "+90",
                  "sp-cost": "0"
                }
              },
              {
                "level": 10,
                "values": {
                  "atk": "+6000",
                  "mhp": "+400000",
                  "msp": "+200",
                  "def": "+200",
                  "mdef": "+40",
                  "flee": "+100",
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
        "status": "translated",
        "entries": [],
        "selectedEntry": null
      }
    },
    {
      "id": 5338,
      "imageFile": "5338.png",
      "name": "Group Protection",
      "maxLevel": 5,
      "prerequisiteText": "Bionic Pharmacy Lv. 5",
      "group": "Active",
      "type": "Buff",
      "target": "You and party members",
      "recoversAp": "20",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Group_Protection",
      "description": "Coat equipment for you and your party members.\nConsumes 3 Advanced Glistening Coats.",
      "levelDetails": [],
      "fixedCastTime": "1 second",
      "variableCastTime": "1 second",
      "castDelay": "0.5 seconds",
      "cooldown": "10 seconds",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "220"
            },
            {
              "level": 2,
              "value": "260"
            },
            {
              "level": 3,
              "value": "300"
            },
            {
              "level": 4,
              "value": "340"
            },
            {
              "level": 5,
              "value": "380"
            }
          ]
        }
      ],
      "spCost": "180 + (Skill Level × 40)",
      "duration": "30 + (Skill Level × 30) seconds",
      "areaOfEffect": "15 x 15~31 x 31",
      "translations": {
        "pt-BR": {
          "name": " Group Protection ",
          "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
          "source": "bROWiki",
          "sourceUrl": "https://browiki.org/wiki/Group_Protection"
        }
      },
      "apiStatus": "translated",
      "iconUrl": "assets/divine-pride/skills/5338.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5338",
      "tree": {
        "idx": 7,
        "row": 0,
        "col": 7,
        "columns": 9,
        "requirements": [
          {
            "id": 5336,
            "level": 5,
            "name": "Bionic Pharmacy",
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
            "value": "180 + (Skill Level × 40)"
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
            "value": "10 seconds"
          },
          {
            "label": "Target",
            "value": "You and party members"
          },
          {
            "label": "Area of Effect",
            "value": "15 x 15~31 x 31"
          },
          {
            "label": "Duration",
            "value": "30 + (Skill Level × 30) seconds"
          },
          {
            "label": "AP Generated",
            "value": "20"
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
                  "sp-cost": "220"
                }
              },
              {
                "level": 2,
                "values": {
                  "sp-cost": "260"
                }
              },
              {
                "level": 3,
                "values": {
                  "sp-cost": "300"
                }
              },
              {
                "level": 4,
                "values": {
                  "sp-cost": "340"
                }
              },
              {
                "level": 5,
                "values": {
                  "sp-cost": "380"
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
      "id": 6005,
      "imageFile": "6005.png",
      "name": "Explosive Powder",
      "maxLevel": 5,
      "prerequisiteText": "Bionic Mastery level 3",
      "group": "Active",
      "type": "Melee Physical",
      "target": "Instant Cast",
      "recoversAp": "2",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Explosive_Powder",
      "description": "Scatters the volatile explosive powder, deals melee physical damage to surrounding enemies around the user for 3 hits.\nDeals higher damage for 5 hits when using under Research Report buff.\nDamage is additionally increased depending on the user's base level and POW.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK Per Hit 950%/1050%(Research Report)\nArea of Effect: 7x7Cells"
        },
        {
          "level": 2,
          "text": "ATK Per Hit 1500%/1700%(Research Report)\nArea of Effect: 7x7Cells"
        },
        {
          "level": 3,
          "text": "ATK Per Hit 2050%/2350%(Research Report)\nArea of Effect: 7x7Cells"
        },
        {
          "level": 4,
          "text": "ATK Per Hit 2600%/3000%(Research Report)\nArea of Effect: 7x7Cells"
        },
        {
          "level": 5,
          "text": "ATK Per Hit 3150%/3650%(Research Report)\nArea of Effect: 7x7Cells"
        }
      ],
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "69"
            },
            {
              "level": 2,
              "value": "76"
            },
            {
              "level": 3,
              "value": "83"
            },
            {
              "level": 4,
              "value": "90"
            },
            {
              "level": 5,
              "value": "97"
            }
          ]
        }
      ],
      "spCost": "69 ~ 97?",
      "areaOfEffect": "7 x 7",
      "translations": {
        "pt-BR": {
          "name": " Explosive Powder ",
          "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
          "source": "bROWiki",
          "sourceUrl": "https://browiki.org/wiki/Explosive_Powder"
        }
      },
      "apiStatus": "translated",
      "iconUrl": "assets/divine-pride/skills/6005.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6005",
      "tree": {
        "idx": 8,
        "row": 0,
        "col": 8,
        "columns": 9,
        "requirements": [
          {
            "id": 5337,
            "level": 3,
            "name": "Bionics Mastery",
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
            "value": "69 ~ 97?"
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
                  "sp-cost": "69"
                }
              },
              {
                "level": 2,
                "values": {
                  "area-of-effect": "7x7",
                  "sp-cost": "76"
                }
              },
              {
                "level": 3,
                "values": {
                  "area-of-effect": "7x7",
                  "sp-cost": "83"
                }
              },
              {
                "level": 4,
                "values": {
                  "area-of-effect": "7x7",
                  "sp-cost": "90"
                }
              },
              {
                "level": 5,
                "values": {
                  "area-of-effect": "7x7",
                  "sp-cost": "97"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "balanceNotes": [
        {
          "skillName": "Explosive Powder",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/biolo/rebalance_3.md",
          "section": "8.2",
          "notes": [
            "Increases SP consumption from 74 to 97 based on level 5.",
            "Increases base damage from 2650%/3150%(Research Report)Atk to 3150%/3650%(Research Report)Atk based on level 5."
          ],
          "specRows": [
            {
              "label": "SP Cost",
              "before": "74",
              "after": "97",
              "scope": "Lv 5",
              "source": "Increases SP consumption from 74 to 97 based on level 5."
            },
            {
              "label": "Damage",
              "before": "2650%/3150%(Research Report)Atk",
              "after": "3150%/3650%(Research Report)Atk",
              "scope": "Lv 5",
              "source": "Increases base damage from 2650%/3150%(Research Report)Atk to 3150%/3650%(Research Report)Atk based on level 5."
            }
          ]
        },
        {
          "skillName": "Explosive Powder",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/biolo/rebalance_4.md",
          "section": "8.1",
          "notes": [
            "Increases base damage from 3150%/3650%(Research Report)Atk to 3750%/4250%(Research Report)Atk per hit based on level 5."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "3150%/3650%(Research Report)Atk",
              "after": "3750%/4250%(Research Report)Atk per hit",
              "scope": "Lv 5",
              "source": "Increases base damage from 3150%/3650%(Research Report)Atk to 3750%/4250%(Research Report)Atk per hit based on level 5."
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
      "id": 5341,
      "imageFile": "5341.png",
      "name": "Acidified Zone (Earth)",
      "maxLevel": 5,
      "prerequisiteText": "Bionics Mastery Lv. 3 and Bionic Pharmacy Lv. 5",
      "group": "Active",
      "type": "Ranged Physical",
      "target": "1 Target",
      "recoversAp": "4(1~3Lv), 5(4~5Lv)",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "",
      "description": "Consume 2 Earth Acid Bottles, dealing 7 hits of Earth Ranged Physical damage to the target and surrounding area.\nAdditional Damage increase based on the caster's base level and POW.\nIf the attack target is a player, there is a very low chance to create acidic AoE zone 1 cell on the target's location.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK per hit 400%/Effective range: : 3 X 3 cells"
        },
        {
          "level": 2,
          "text": "ATK per hit 800%/Effective range: : 3 X 3 cells"
        },
        {
          "level": 3,
          "text": "ATK per hit 1200%/Effective range: : 5 X 5 cells"
        },
        {
          "level": 4,
          "text": "ATK per hit 1600%/Effective range: : 5 X 5 cells"
        },
        {
          "level": 5,
          "text": "ATK per hit 2000%/Effective range: : 7 X 7 cells"
        }
      ],
      "fixedCastTime": "0.5 seconds",
      "castDelay": "0.15 seconds",
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
            }
          ]
        }
      ],
      "translations": {
        "pt-BR": {
          "name": " Acidified Zone (Earth) ",
          "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
          "source": "bROWiki",
          "sourceUrl": "https://browiki.org/wiki/Acidified_Zone_(Earth)"
        }
      },
      "apiStatus": "translated",
      "iconUrl": "assets/divine-pride/skills/5341.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5341",
      "tree": {
        "idx": 9,
        "row": 1,
        "col": 0,
        "columns": 9,
        "requirements": [
          {
            "id": 5336,
            "level": 5,
            "name": "Bionic Pharmacy",
            "visible": true
          },
          {
            "id": 5337,
            "level": 3,
            "name": "Bionics Mastery",
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
            "label": "Cast Delay",
            "value": "0.15 seconds"
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
            "label": "AP Generated",
            "value": "4(1~3Lv), 5(4~5Lv)"
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
      "id": 5342,
      "imageFile": "5342.png",
      "name": "Acidified Zone (Wind)",
      "maxLevel": 5,
      "prerequisiteText": "Bionics Mastery Lv. 3 and Bionic Pharmacy Lv. 5",
      "group": "Active",
      "type": "Ranged Physical",
      "target": "1 Target",
      "recoversAp": "4(1~3Lv), 5(4~5Lv)",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "",
      "description": "Consume 2 Gale Acid Bottles, dealing 7 hits of Wind Ranged Physical damage to the target and surrounding area.\nAdditional Damage increase based on the caster's base level and POW.\nIf the attack target is a player, there is a very low chance to create acidic AoE zone 1 cell on the target's location.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK per hit 400%/Effective range: : 3 X 3 cells"
        },
        {
          "level": 2,
          "text": "ATK per hit 800%/Effective range: : 3 X 3 cells"
        },
        {
          "level": 3,
          "text": "ATK per hit 1200%/Effective range: : 5 X 5 cells"
        },
        {
          "level": 4,
          "text": "ATK per hit 1600%/Effective range: : 5 X 5 cells"
        },
        {
          "level": 5,
          "text": "ATK per hit 2000%/Effective range: : 7 X 7 cells"
        }
      ],
      "fixedCastTime": "0.5 seconds",
      "castDelay": "0.15 seconds",
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
            }
          ]
        }
      ],
      "translations": {
        "pt-BR": {
          "name": " Acidified Zone (Wind) ",
          "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
          "source": "bROWiki",
          "sourceUrl": "https://browiki.org/wiki/Acidified_Zone_(Wind)"
        }
      },
      "apiStatus": "translated",
      "iconUrl": "assets/divine-pride/skills/5342.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5342",
      "tree": {
        "idx": 10,
        "row": 1,
        "col": 1,
        "columns": 9,
        "requirements": [
          {
            "id": 5336,
            "level": 5,
            "name": "Bionic Pharmacy",
            "visible": true
          },
          {
            "id": 5337,
            "level": 3,
            "name": "Bionics Mastery",
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
            "label": "Cast Delay",
            "value": "0.15 seconds"
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
            "label": "AP Generated",
            "value": "4(1~3Lv), 5(4~5Lv)"
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
      "id": 5346,
      "imageFile": "5346.png",
      "name": "Create Creeper",
      "maxLevel": 5,
      "prerequisiteText": "Bionics Mastery Lv. 5",
      "group": "Active",
      "type": "Summon",
      "target": "Self",
      "recoversAp": "10",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Create_Creeper",
      "description": "Summon a tough vine monster.\nUp to 1 creeper can be summoned at the same time.\nConsumes 1 Advanced Plant Bottle.",
      "levelDetails": [],
      "fixedCastTime": "1 second",
      "variableCastTime": "1 second",
      "castDelay": "0 seconds",
      "cooldown": "15 seconds",
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
              "value": "96"
            },
            {
              "level": 3,
              "value": "112"
            },
            {
              "level": 4,
              "value": "128"
            },
            {
              "level": 5,
              "value": "144"
            }
          ]
        }
      ],
      "spCost": "64 + (Skill Level × 16)",
      "duration": "60 + (Skill Level × 60) seconds",
      "translations": {
        "pt-BR": {
          "name": " Create Creeper ",
          "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
          "source": "bROWiki",
          "sourceUrl": "https://browiki.org/wiki/Create_Creeper"
        }
      },
      "apiStatus": "translated",
      "iconUrl": "assets/divine-pride/skills/5346.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5346",
      "tree": {
        "idx": 12,
        "row": 1,
        "col": 3,
        "columns": 9,
        "requirements": [
          {
            "id": 5337,
            "level": 5,
            "name": "Bionics Mastery",
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
            "value": "64 + (Skill Level × 16)"
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
            "value": "15 seconds"
          },
          {
            "label": "Target",
            "value": "Self"
          },
          {
            "label": "Duration",
            "value": "60 + (Skill Level × 60) seconds"
          },
          {
            "label": "AP Generated",
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
                  "sp-cost": "80"
                }
              },
              {
                "level": 2,
                "values": {
                  "sp-cost": "96"
                }
              },
              {
                "level": 3,
                "values": {
                  "sp-cost": "112"
                }
              },
              {
                "level": 4,
                "values": {
                  "sp-cost": "128"
                }
              },
              {
                "level": 5,
                "values": {
                  "sp-cost": "144"
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
      "id": 5339,
      "imageFile": "5339.png",
      "name": "Full Shadow Protection",
      "maxLevel": 4,
      "prerequisiteText": "Bionic Pharmacy Lv. 5",
      "group": "Active",
      "type": "Buff",
      "target": "You and Allies",
      "recoversAp": "2(1~2Lv), 3(3~4Lv)",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Full_Shadow_Protection",
      "description": "Coat the Shadow Equipment of 1 target to protect it from being stripped.\nConsumes 1 Advanced Glistening Coat.",
      "levelDetails": [
        {
          "level": 1,
          "text": "Effect Duration : 90 seconds"
        },
        {
          "level": 2,
          "text": "Effect Duration : 120 seconds"
        },
        {
          "level": 3,
          "text": "Effect Duration : 150 seconds"
        },
        {
          "level": 4,
          "text": "Effect Duration : 180 seconds"
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
              "value": "120"
            },
            {
              "level": 2,
              "value": "130"
            },
            {
              "level": 3,
              "value": "140"
            },
            {
              "level": 4,
              "value": "150"
            }
          ]
        }
      ],
      "spCost": "110 + (Skill Level x 10)",
      "duration": "30 + (Skill Level × 10) seconds",
      "translations": {
        "pt-BR": {
          "name": " Full Shadow Protection ",
          "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
          "source": "bROWiki",
          "sourceUrl": "https://browiki.org/wiki/Full_Shadow_Protection"
        }
      },
      "apiStatus": "translated",
      "iconUrl": "assets/divine-pride/skills/5339.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5339",
      "tree": {
        "idx": 14,
        "row": 1,
        "col": 5,
        "columns": 9,
        "requirements": [
          {
            "id": 5336,
            "level": 5,
            "name": "Bionic Pharmacy",
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
          },
          {
            "label": "SP Cost",
            "value": "110 + (Skill Level x 10)"
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
            "value": "You and Allies"
          },
          {
            "label": "Duration",
            "value": "30 + (Skill Level × 10) seconds"
          },
          {
            "label": "AP Generated",
            "value": "2(1~2Lv), 3(3~4Lv)"
          }
        ],
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
                  "effect": "Effect Duration : 90 seconds",
                  "sp-cost": "120"
                }
              },
              {
                "level": 2,
                "values": {
                  "effect": "Effect Duration : 120 seconds",
                  "sp-cost": "130"
                }
              },
              {
                "level": 3,
                "values": {
                  "effect": "Effect Duration : 150 seconds",
                  "sp-cost": "140"
                }
              },
              {
                "level": 4,
                "values": {
                  "effect": "Effect Duration : 180 seconds",
                  "sp-cost": "150"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "balanceNotes": [
        {
          "skillName": "Full Shadow Protection",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/biolo/rebalance_2.md",
          "section": "4.3",
          "notes": [
            "Increases duration from 60 seconds to 180 seconds base on level 4."
          ],
          "specRows": [
            {
              "label": "Duration",
              "before": "60 seconds",
              "after": "180 seconds base on level 4",
              "scope": "",
              "source": "Increases duration from 60 seconds to 180 seconds base on level 4."
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
      "id": 6006,
      "imageFile": "6006.png",
      "name": "Mayhemic Thorns",
      "maxLevel": 10,
      "prerequisiteText": "Bionic Mastery level 5, Explosive Powder level 3",
      "group": "Active",
      "type": "Ranged Physical",
      "target": "Single Target",
      "recoversAp": "2",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Mayhemic_Thorns",
      "description": "Summons the giant thorn plant to the target and stike the surrounding area, deals long ranged physical damage to target and surrounding enemies around the target with the range for 3 hits.\nDeals higher damage for 4 hits when using under Research Report buff.\nDamage is additionally increased according to the user's base level and POW, and critical damage is applied according to the user's critical probability.\nIn the case of critical damage, half of the total critical damage increase options are applied.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK Per Hit 500%/650%(Research Report)\nArea of Effect: 7x7Cells"
        },
        {
          "level": 2,
          "text": "ATK Per Hit 800%/950%(Research Report)\nArea of Effect: 7x7Cells"
        },
        {
          "level": 3,
          "text": "ATK Per Hit 1100%/1250%(Research Report)\nArea of Effect: 7x7Cells"
        },
        {
          "level": 4,
          "text": "ATK Per Hit 1400%/1550%(Research Report)\nArea of Effect: 7x7Cells"
        },
        {
          "level": 5,
          "text": "ATK Per Hit 1700%/1850%(Research Report)\nArea of Effect: 7x7Cells"
        },
        {
          "level": 6,
          "text": "ATK Per Hit 2000%/2150%(Research Report)\nArea of Effect: 9x9Cells"
        },
        {
          "level": 7,
          "text": "ATK Per Hit 2300%/2450%(Research Report)\nArea of Effect: 9x9Cells"
        },
        {
          "level": 8,
          "text": "ATK Per Hit 2600%/2750%(Research Report)\nArea of Effect: 9x9Cells"
        },
        {
          "level": 9,
          "text": "ATK Per Hit 2900%/3050%(Research Report)\nArea of Effect: 9x9Cells"
        },
        {
          "level": 10,
          "text": "ATK Per Hit 3200%/3350%(Research Report)\nArea of Effect: 9x9Cells"
        }
      ],
      "fixedCastTime": "0.5 seconds",
      "variableCastTime": "1 second",
      "castDelay": "0.15 seconds",
      "cooldown": "0.7 seconds",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "68"
            },
            {
              "level": 2,
              "value": "70"
            },
            {
              "level": 3,
              "value": "72"
            },
            {
              "level": 4,
              "value": "74"
            },
            {
              "level": 5,
              "value": "76"
            },
            {
              "level": 6,
              "value": "78"
            },
            {
              "level": 7,
              "value": "80"
            },
            {
              "level": 8,
              "value": "82"
            },
            {
              "level": 9,
              "value": "84"
            },
            {
              "level": 10,
              "value": "86"
            }
          ]
        }
      ],
      "spCost": "68 ~ 86",
      "translations": {
        "pt-BR": {
          "name": " Mayhemic Thorns ",
          "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
          "source": "bROWiki",
          "sourceUrl": "https://browiki.org/wiki/Mayhemic_Thorns"
        }
      },
      "apiStatus": "translated",
      "iconUrl": "assets/divine-pride/skills/6006.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6006",
      "tree": {
        "idx": 15,
        "row": 1,
        "col": 6,
        "columns": 9,
        "requirements": [
          {
            "id": 5337,
            "level": 5,
            "name": "Bionics Mastery",
            "visible": true
          },
          {
            "id": 6005,
            "level": 3,
            "name": "Explosive Powder",
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
            "value": "68 ~ 86"
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
            "value": "0.15 seconds"
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
                  "sp-cost": "68"
                }
              },
              {
                "level": 2,
                "values": {
                  "area-of-effect": "7x7",
                  "sp-cost": "70"
                }
              },
              {
                "level": 3,
                "values": {
                  "area-of-effect": "7x7",
                  "sp-cost": "72"
                }
              },
              {
                "level": 4,
                "values": {
                  "area-of-effect": "7x7",
                  "sp-cost": "74"
                }
              },
              {
                "level": 5,
                "values": {
                  "area-of-effect": "7x7",
                  "sp-cost": "76"
                }
              },
              {
                "level": 6,
                "values": {
                  "area-of-effect": "9x9",
                  "sp-cost": "78"
                }
              },
              {
                "level": 7,
                "values": {
                  "area-of-effect": "9x9",
                  "sp-cost": "80"
                }
              },
              {
                "level": 8,
                "values": {
                  "area-of-effect": "9x9",
                  "sp-cost": "82"
                }
              },
              {
                "level": 9,
                "values": {
                  "area-of-effect": "9x9",
                  "sp-cost": "84"
                }
              },
              {
                "level": 10,
                "values": {
                  "area-of-effect": "9x9",
                  "sp-cost": "86"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "balanceNotes": [
        {
          "skillName": "Mayhemic Thorns",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/biolo/rebalance_3.md",
          "section": "9.1",
          "notes": [
            "reduces number of hit while under Research Report buff from 5 hits to 4 hits.",
            "Increases base damage from 2700%/3250%(Research Report)Atk to 3200%/3350%(Research Report)Atk based on level 10."
          ],
          "specRows": [
            {
              "label": "Number Of Hit While Under Research Report Buff",
              "before": "5 hits",
              "after": "4 hits",
              "scope": "",
              "source": "reduces number of hit while under Research Report buff from 5 hits to 4 hits."
            },
            {
              "label": "Damage",
              "before": "2700%/3250%(Research Report)Atk",
              "after": "3200%/3350%(Research Report)Atk",
              "scope": "Lv 10",
              "source": "Increases base damage from 2700%/3250%(Research Report)Atk to 3200%/3350%(Research Report)Atk based on level 10."
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
      "id": 5343,
      "imageFile": "5343.png",
      "name": "Acidified Zone (Fire)",
      "maxLevel": 5,
      "prerequisiteText": "Acidified Zone (Earth) Lv. 1",
      "group": "Active",
      "type": "Ranged Physical",
      "target": "1 Target",
      "recoversAp": "4(1~3Lv), 5(4~5Lv)",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "",
      "description": "Consume 2 Flame Acid Bottles, dealing 7 hits of Fire Ranged Physical damage to the target and surrounding area.\nAdditional Damage increase based on the caster's base level and POW.\nIf the attack target is a player, there is a very low chance to create acidic AoE zone 1 cell on the target's location.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK per hit 400%/Effective range: : 3 X 3 cells"
        },
        {
          "level": 2,
          "text": "ATK per hit 800%/Effective range: : 3 X 3 cells"
        },
        {
          "level": 3,
          "text": "ATK per hit 1200%/Effective range: : 5 X 5 cells"
        },
        {
          "level": 4,
          "text": "ATK per hit 1600%/Effective range: : 5 X 5 cells"
        },
        {
          "level": 5,
          "text": "ATK per hit 2000%/Effective range: : 7 X 7 cells"
        }
      ],
      "fixedCastTime": "0.5 seconds",
      "castDelay": "0.15 seconds",
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
            }
          ]
        }
      ],
      "translations": {
        "pt-BR": {
          "name": " Acidified Zone (Fire) ",
          "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
          "source": "bROWiki",
          "sourceUrl": "https://browiki.org/wiki/Acidified_Zone_(Fire)"
        }
      },
      "apiStatus": "translated",
      "iconUrl": "assets/divine-pride/skills/5343.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5343",
      "tree": {
        "idx": 16,
        "row": 1,
        "col": 7,
        "columns": 9,
        "requirements": [
          {
            "id": 5341,
            "level": 1,
            "name": "Acidified Zone (Earth)",
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
            "label": "Cast Delay",
            "value": "0.15 seconds"
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
            "label": "AP Generated",
            "value": "4(1~3Lv), 5(4~5Lv)"
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
      "id": 5340,
      "imageFile": "5340.png",
      "name": "Acidified Zone (Water)",
      "maxLevel": 5,
      "prerequisiteText": "Acidified Zone (Wind) Lv. 1",
      "group": "Active",
      "type": "Ranged Physical",
      "target": "1 Target",
      "recoversAp": "4(1~3Lv), 5(4~5Lv)",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "",
      "description": "Consume 2 Icicle Acid Bottles, dealing 7 hits of Water Ranged Physical damage to the target and surrounding area.\nAdditional Damage increase based on the caster's base level and POW.\nIf the attack target is a player, there is a very low chance to create acidic AoE zone 1 cell on the target's location.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK per hit 400%/Effective range: : 3 X 3 cells"
        },
        {
          "level": 2,
          "text": "ATK per hit 800%/Effective range: : 3 X 3 cells"
        },
        {
          "level": 3,
          "text": "ATK per hit 1200%/Effective range: : 5 X 5 cells"
        },
        {
          "level": 4,
          "text": "ATK per hit 1600%/Effective range: : 5 X 5 cells"
        },
        {
          "level": 5,
          "text": "ATK per hit 2000%/Effective range: : 7 X 7 cells"
        }
      ],
      "fixedCastTime": "0.5 seconds",
      "castDelay": "0.15 seconds",
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
            }
          ]
        }
      ],
      "translations": {
        "pt-BR": {
          "name": " Acidified Zone (Water) ",
          "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
          "source": "bROWiki",
          "sourceUrl": "https://browiki.org/wiki/Acidified_Zone_(Water)"
        }
      },
      "apiStatus": "translated",
      "iconUrl": "assets/divine-pride/skills/5340.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5340",
      "tree": {
        "idx": 17,
        "row": 1,
        "col": 8,
        "columns": 9,
        "requirements": [
          {
            "id": 5342,
            "level": 1,
            "name": "Acidified Zone (Wind)",
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
            "label": "Cast Delay",
            "value": "0.15 seconds"
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
            "label": "AP Generated",
            "value": "4(1~3Lv), 5(4~5Lv)"
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
      "id": 5344,
      "imageFile": "5344.png",
      "name": "Create Wooden Warrior",
      "maxLevel": 5,
      "prerequisiteText": "Create Creeper Lv. 3",
      "group": "Active",
      "type": "Summon",
      "target": "Self",
      "recoversAp": "20",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Create_Wooden_Warrior",
      "description": "Summon a wooden warrior.\nUp to 1 wooden warrior can be summoned.\nThis warrior increases Cart Tornado and Cart Cannon damage for its duration.\nConsumes 2 Advanced Plant Bottles.",
      "levelDetails": [],
      "fixedCastTime": "1 second",
      "variableCastTime": "1 second",
      "castDelay": "0 seconds",
      "cooldown": "30 seconds",
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
        }
      ],
      "spCost": "80 + (Skill Level × 20)",
      "duration": "60 + (Skill Level × 60) seconds",
      "translations": {
        "pt-BR": {
          "name": " Create Wooden Warrior ",
          "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
          "source": "bROWiki",
          "sourceUrl": "https://browiki.org/wiki/Create_Wooden_Warrior"
        }
      },
      "apiStatus": "translated",
      "iconUrl": "assets/divine-pride/skills/5344.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5344",
      "tree": {
        "idx": 18,
        "row": 2,
        "col": 0,
        "columns": 9,
        "requirements": [
          {
            "id": 5346,
            "level": 3,
            "name": "Create Creeper",
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
            "value": "80 + (Skill Level × 20)"
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
            "value": "30 seconds"
          },
          {
            "label": "Target",
            "value": "Self"
          },
          {
            "label": "Duration",
            "value": "60 + (Skill Level × 60) seconds"
          },
          {
            "label": "AP Generated",
            "value": "20"
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
                  "sp-cost": "120"
                }
              },
              {
                "level": 3,
                "values": {
                  "sp-cost": "140"
                }
              },
              {
                "level": 4,
                "values": {
                  "sp-cost": "160"
                }
              },
              {
                "level": 5,
                "values": {
                  "sp-cost": "180"
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
      "id": 5345,
      "imageFile": "5345.png",
      "name": "Create Wooden Fairy",
      "maxLevel": 5,
      "prerequisiteText": "Create Creeper Lv. 3",
      "group": "Active",
      "type": "Summon",
      "target": "Self",
      "recoversAp": "20",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Create_Wooden_Fairy",
      "description": "Summon a wooden fairy.\nUp to 1 wooden fairy can be summoned.\nThis fairy increases Spore Explosion damage for its duration.\nConsumes 2 Advanced Plant Bottles.",
      "levelDetails": [],
      "fixedCastTime": "1 second",
      "variableCastTime": "1 second",
      "castDelay": "0 seconds",
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
              "value": "155"
            },
            {
              "level": 3,
              "value": "180"
            },
            {
              "level": 4,
              "value": "205"
            },
            {
              "level": 5,
              "value": "230"
            }
          ]
        }
      ],
      "spCost": "Lv. 1 : 120 Lv. 2 onwards : 130 + (Skill Level × 25)",
      "duration": "60 + (Skill Level × 60) seconds",
      "translations": {
        "pt-BR": {
          "name": " Create Wooden Fairy ",
          "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
          "source": "bROWiki",
          "sourceUrl": "https://browiki.org/wiki/Create_Wooden_Fairy"
        }
      },
      "apiStatus": "translated",
      "iconUrl": "assets/divine-pride/skills/5345.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5345",
      "tree": {
        "idx": 19,
        "row": 2,
        "col": 1,
        "columns": 9,
        "requirements": [
          {
            "id": 5346,
            "level": 3,
            "name": "Create Creeper",
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
            "value": "Lv. 1 : 120 Lv. 2 onwards : 130 + (Skill Level × 25)"
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
            "value": "30 seconds"
          },
          {
            "label": "Target",
            "value": "Self"
          },
          {
            "label": "Duration",
            "value": "60 + (Skill Level × 60) seconds"
          },
          {
            "label": "AP Generated",
            "value": "20"
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
                  "sp-cost": "155"
                }
              },
              {
                "level": 3,
                "values": {
                  "sp-cost": "180"
                }
              },
              {
                "level": 4,
                "values": {
                  "sp-cost": "205"
                }
              },
              {
                "level": 5,
                "values": {
                  "sp-cost": "230"
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
      "id": 6509,
      "imageFile": "6509.png",
      "name": "Mystery Powder",
      "maxLevel": 5,
      "prerequisiteText": "Explosive Powder 5",
      "group": "Active",
      "type": "Melee physical",
      "target": "Single target",
      "recoversAp": "",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "",
      "description": "Scatters very small fine powder to the target, deals melee physical damage to the target and surrounding enemies around the target.\nAdditionally, grants Mystery Powder buff to the user, allowing them to use Dust Explosion for 60 seconds.\nDeals additional damage depends on user's base level and POW.",
      "levelDetails": [
        {
          "level": 1,
          "text": "5500% Atk / area of effect : 5 x 5 cells."
        },
        {
          "level": 2,
          "text": "9500% Atk / area of effect : 5 x 5 cells."
        },
        {
          "level": 3,
          "text": "13500% Atk / area of effect : 5 x 5 cells."
        },
        {
          "level": 4,
          "text": "17500% Atk / area of effect : 7 x 7 cells."
        },
        {
          "level": 5,
          "text": "21500% Atk / area of effect : 7 x 7 cells."
        }
      ],
      "levelExtras": [],
      "translations": {
        "pt-BR": {
          "name": " Mystery Powder ",
          "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
          "source": "bROWiki",
          "sourceUrl": "https://browiki.org/wiki/Mystery_Powder"
        }
      },
      "apiStatus": "translated",
      "iconUrl": "assets/divine-pride/skills/6509.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6509",
      "tree": {
        "idx": 22,
        "row": 2,
        "col": 4,
        "columns": 9,
        "requirements": [
          {
            "id": 6005,
            "level": 5,
            "name": "Explosive Powder",
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
        "status": "translated",
        "entries": [],
        "selectedEntry": null
      }
    },
    {
      "id": 6510,
      "imageFile": "6510.png",
      "name": "Dust Explosion",
      "maxLevel": 5,
      "prerequisiteText": "Mystery Powder 3",
      "group": "Active",
      "type": "melee physical",
      "target": "Single target",
      "recoversAp": "2",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "",
      "description": "Can only be used when Mystery Powder buff is active.\nCauses a dust explosion to the target, deals melee physical damage to the target and surrounding enemies around the target for 5 hits.\nIf Research Report buff is active, the skill will deal more damage.\nDeals additional damage depends on user's base level and POW.",
      "levelDetails": [
        {
          "level": 1,
          "text": "1050% Atk / 1250% Atk (Research Report) per hit / area of effect: 5 x 5 cells."
        },
        {
          "level": 2,
          "text": "1650% Atk / 2050% Atk (Research Report) per hit / area of effect: 5 x 5 cells."
        },
        {
          "level": 3,
          "text": "2250% Atk / 2850% Atk (Research Report) per hit / area of effect: 5 x 5 cells."
        },
        {
          "level": 4,
          "text": "2850% Atk / 3650% Atk (Research Report) per hit / area of effect: 7 x 7 cells."
        },
        {
          "level": 5,
          "text": "3450% Atk / 4450% Atk (Research Report) per hit / area of effect: 7 x 7 cells."
        }
      ],
      "levelExtras": [],
      "translations": {
        "pt-BR": {
          "name": " Dust Explosion ",
          "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
          "source": "bROWiki",
          "sourceUrl": "https://browiki.org/wiki/Dust_Explosion"
        }
      },
      "apiStatus": "translated",
      "iconUrl": "assets/divine-pride/skills/6510.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6510",
      "tree": {
        "idx": 23,
        "row": 2,
        "col": 5,
        "columns": 9,
        "requirements": [
          {
            "id": 6509,
            "level": 3,
            "name": "Mystery Powder",
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
        "status": "translated",
        "entries": [],
        "selectedEntry": null
      }
    },
    {
      "id": 5347,
      "imageFile": "5347.png",
      "name": "Research Report",
      "maxLevel": 1,
      "prerequisiteText": "Acidified Zone (Fire) Lv. 3 and Acidified Zone (Water) Lv. 3",
      "group": "Active(AP)",
      "type": "Buff",
      "target": "Self",
      "recoversAp": "",
      "consumesAp": "100",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Research_Report",
      "description": "Report the findings of your study.\nIncreases the damage of the Acidified Zone skills for 150 seconds and reduces the cost of bottles to use the skill from 2 to 1.\nIn addition, the Acidified Zone skills increases the damage dealt to Formless and Plant monsters.",
      "levelDetails": [
        {
          "level": 1,
          "text": "Increase Acidified Zone Damage\n/ Acidified Zone skills deal Additional damage to Formless and Plant enemies\n/ Reduced Acid Bottle Cost by 1 when casting Acidified Zone"
        }
      ],
      "fixedCastTime": "0.5 seconds",
      "variableCastTime": "2 seconds",
      "castDelay": "0.5 seconds",
      "cooldown": "60 seconds",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "60"
            }
          ]
        }
      ],
      "spCost": "60",
      "duration": "150 seconds",
      "translations": {
        "pt-BR": {
          "name": " Research Report ",
          "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
          "source": "bROWiki",
          "sourceUrl": "https://browiki.org/wiki/Research_Report"
        }
      },
      "apiStatus": "translated",
      "iconUrl": "assets/divine-pride/skills/5347.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5347",
      "tree": {
        "idx": 24,
        "row": 2,
        "col": 6,
        "columns": 9,
        "requirements": [
          {
            "id": 5340,
            "level": 3,
            "name": "Acidified Zone (Water)",
            "visible": true
          },
          {
            "id": 5343,
            "level": 3,
            "name": "Acidified Zone (Fire)",
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
            "value": "1"
          },
          {
            "label": "SP Cost",
            "value": "60"
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
            "value": "60 seconds"
          },
          {
            "label": "Target",
            "value": "Self"
          },
          {
            "label": "Duration",
            "value": "150 seconds"
          },
          {
            "label": "AP Consumed",
            "value": "100"
          }
        ],
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
                  "effect": "Increase Acidified Zone Damage\nAcidified Zone skills deal Additional damage to Formless and Plant enemies\nReduced Acid Bottle Cost by 1 when casting Acidified Zone",
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
          "skillName": "Research Report",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/biolo/rebalance_2.md",
          "section": "4.4",
          "notes": [
            "Reduces fixed casting time from 1 second to 0.5 seconds.",
            "Reduces cooldown from 120 seconds to 60 seconds.",
            "Increases duration from 60 seconds to 150 seconds."
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
              "label": "Cooldown",
              "before": "120 seconds",
              "after": "60 seconds",
              "scope": "",
              "source": "Reduces cooldown from 120 seconds to 60 seconds."
            },
            {
              "label": "Duration",
              "before": "60 seconds",
              "after": "150 seconds",
              "scope": "",
              "source": "Increases duration from 60 seconds to 150 seconds."
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
      "id": 5348,
      "imageFile": "5348.png",
      "name": "Create Hell Tree",
      "maxLevel": 5,
      "prerequisiteText": "Create Wooden Fairy Lv. 3 and Create Wooden Warrior Lv. 3",
      "group": "Active (AP)",
      "type": "Summon",
      "target": "Self",
      "recoversAp": "",
      "consumesAp": "110 - (Skill Level × 10)",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Create_Hell_Tree",
      "description": "Summon a hellish tree.\nUp to 1 hellish tree can be summoned at the same time.\nConsumes 3 Advanced Plant Bottles.",
      "levelDetails": [
        {
          "level": 1,
          "text": "Duration : 60 sec"
        },
        {
          "level": 2,
          "text": "Duration : 90 sec"
        },
        {
          "level": 3,
          "text": "Duration : 120 sec"
        },
        {
          "level": 4,
          "text": "Duration : 150 sec"
        },
        {
          "level": 5,
          "text": "Duration : 180 sec"
        }
      ],
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
      "duration": "[30 + (Skill Level × 30)] seconds",
      "translations": {
        "pt-BR": {
          "name": " Create Hell Tree ",
          "description": "No momento, não há conteúdo nesta página Você pode pesquisar pelo título desta página em outras páginas, ou buscar por registros relacionados . Note que, no entanto, você não tem permissão para criar esta página.",
          "source": "bROWiki",
          "sourceUrl": "https://browiki.org/wiki/Create_Hell_Tree"
        }
      },
      "apiStatus": "translated",
      "iconUrl": "assets/divine-pride/skills/5348.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5348",
      "tree": {
        "idx": 25,
        "row": 2,
        "col": 7,
        "columns": 9,
        "requirements": [
          {
            "id": 5344,
            "level": 3,
            "name": "Create Wooden Warrior",
            "visible": true
          },
          {
            "id": 5345,
            "level": 3,
            "name": "Create Wooden Fairy",
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
            "label": "SP Cost",
            "value": "100"
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
            "label": "AP Consumed",
            "value": "110 - (Skill Level × 10)"
          }
        ],
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
                  "duration": "60 seconds",
                  "sp-cost": "100"
                }
              },
              {
                "level": 2,
                "values": {
                  "duration": "90 seconds",
                  "sp-cost": "100"
                }
              },
              {
                "level": 3,
                "values": {
                  "duration": "120 seconds",
                  "sp-cost": "100"
                }
              },
              {
                "level": 4,
                "values": {
                  "duration": "150 seconds",
                  "sp-cost": "100"
                }
              },
              {
                "level": 5,
                "values": {
                  "duration": "180 seconds",
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
        "status": "translated",
        "entries": [],
        "selectedEntry": null
      }
    }
  ]
};

export default bioloData;
