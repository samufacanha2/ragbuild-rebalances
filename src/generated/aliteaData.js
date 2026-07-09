export const aliteaData = {
  "generatedAt": "2026-07-08T21:17:19.328Z",
  "classId": 4355,
  "classSlug": "alitea",
  "className": "Alitea",
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
    "changedSkills": 0,
    "noteCount": 0,
    "addedSkills": 0,
    "versions": 0
  },
  "tree": {
    "columns": 9,
    "rows": 4,
    "skillTreeUrl": "https://www.divine-pride.net/tools/skilltree/4355",
    "jobIconUrl": "assets/divine-pride/jobs/4355.png"
  },
  "sources": {
    "rebalances": [],
    "rebalanceManifest": "rebalances/manifest.json",
    "divinePrideApiDocs": "https://www.divine-pride.net/api",
    "divinePrideSkillTree": "https://www.divine-pride.net/tools/skilltree/4355",
    "browiki": "https://browiki.org"
  },
  "rebalanceVersions": [],
  "addedSkills": [],
  "skillTabs": [
    {
      "id": "current",
      "label": "Alitea",
      "pointLimit": 59,
      "tree": {
        "columns": 9,
        "rows": 4
      },
      "skills": [
        {
          "id": 6583,
          "imageFile": "6583.png",
          "name": "Flip Flap",
          "maxLevel": 5,
          "prerequisiteText": "Sixth Sense 1",
          "group": "Active",
          "type": "Buff",
          "target": "Instant Casting",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Can only be used while in [Wereraptor] state.\nReorganizes the user's formation with a powerful flap, increasing long ranged physical damage and critical hit chance for the duration.",
          "levelDetails": [
            {
              "level": 1,
              "text": ": Increases long ranged physical damage by 6% / CRI + 3 / duration : 60 seconds."
            },
            {
              "level": 2,
              "text": ": Increases long ranged physical damage by 12% / CRI + 6 / duration : 120 seconds."
            },
            {
              "level": 3,
              "text": ": Increases long ranged physical damage by 18% / CRI + 9 / duration : 180 seconds."
            },
            {
              "level": 4,
              "text": ": Increases long ranged physical damage by 24% / CRI + 12 / duration : 240 seconds."
            },
            {
              "level": 5,
              "text": ": Increases long ranged physical damage by 30% / CRI + 15 / duration : 300 seconds."
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6583.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6583",
          "tree": {
            "idx": 1,
            "row": 0,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 6575,
                "level": 1,
                "name": "Sixth Sense",
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
                "value": "Instant Casting"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "duration",
                    "label": "Duration"
                  },
                  {
                    "id": "increases-long-ranged-physical-damage-by-12-cri",
                    "label": ": Increases Long Ranged Physical Damage By 12% / Cri"
                  },
                  {
                    "id": "increases-long-ranged-physical-damage-by-18-cri",
                    "label": ": Increases Long Ranged Physical Damage By 18% / Cri"
                  },
                  {
                    "id": "increases-long-ranged-physical-damage-by-24-cri",
                    "label": ": Increases Long Ranged Physical Damage By 24% / Cri"
                  },
                  {
                    "id": "increases-long-ranged-physical-damage-by-30-cri",
                    "label": ": Increases Long Ranged Physical Damage By 30% / Cri"
                  },
                  {
                    "id": "increases-long-ranged-physical-damage-by-6-cri",
                    "label": ": Increases Long Ranged Physical Damage By 6% / Cri"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "duration": "60 seconds",
                      "increases-long-ranged-physical-damage-by-6-cri": "+ 3"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "120 seconds",
                      "increases-long-ranged-physical-damage-by-12-cri": "+ 6"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "180 seconds",
                      "increases-long-ranged-physical-damage-by-18-cri": "+ 9"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "240 seconds",
                      "increases-long-ranged-physical-damage-by-24-cri": "+ 12"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "300 seconds",
                      "increases-long-ranged-physical-damage-by-30-cri": "+ 15"
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
          "id": 6592,
          "imageFile": "6592.png",
          "name": "Glacial Monolith",
          "maxLevel": 1,
          "prerequisiteText": "Ice Pillar 5",
          "group": "Active",
          "type": "Magic",
          "target": "Instant Casting",
          "recoversAp": "2",
          "consumesAp": "",
          "description": "Summons the monolith at the target location, dealing water property magical damage and granting Glacial Monolith effect to a 15 x 15 cells area around the designated point.\nWhile the monolith is present, using certain skills within its range triggers Glacial Nova skill, dealing water property magical damage to enemies around the monolith.\nIf under Truth of Ice state, deals additional damage depending on the user's base level and SPL.\nCast range: 7 cells.\nGlacial Nova\nThis skill activates when Glacial skills are used near the Glacial Monolith.\nDeals water property magical damage to the enemies near the Glacial Monolith.",
          "levelDetails": [
            {
              "level": 1,
              "text": "7100% MATK / area of effect : 3 x 3 cells / duration : 10 seconds."
            },
            {
              "level": 2,
              "text": "7400% MATK / area of effect : 3 x 3 cells / duration : 10.5 seconds."
            },
            {
              "level": 3,
              "text": "7700% MATK / area of effect : 3 x 3 cells / duration : 11 seconds."
            },
            {
              "level": 4,
              "text": "8000% MATK / area of effect : 3 x 3 cells / duration : 11.5 seconds."
            },
            {
              "level": 5,
              "text": "8300% MATK / area of effect : 3 x 3 cells / duration : 12 seconds."
            },
            {
              "level": 6,
              "text": "8600% MATK / area of effect : 3 x 3 cells / duration : 12.5 seconds."
            },
            {
              "level": 7,
              "text": "8900% MATK / area of effect : 5 x 5 cells / duration : 13 seconds."
            },
            {
              "level": 8,
              "text": "9200% MATK / area of effect : 5 x 5 cells / duration : 13.5 seconds."
            },
            {
              "level": 9,
              "text": "9500% MATK / area of effect : 5 x 5 cells / duration : 14 seconds."
            },
            {
              "level": 10,
              "text": "9800% MATK / area of effect : 5 x 5 cells / duration : 15 seconds."
            },
            {
              "level": 1,
              "text": "15000% MATK / area of effect : 9 x 9 cells."
            }
          ],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "1.2 seconds",
          "castDelay": "0.2 seconds",
          "cooldown": "3 seconds",
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6592.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6592",
          "tree": {
            "idx": 4,
            "row": 0,
            "col": 4,
            "columns": 9,
            "requirements": [
              {
                "id": 6561,
                "level": 5,
                "name": "Ice Pillar",
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
                "label": "Fixed Cast Time",
                "value": "1.5 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "1.2 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.2 seconds"
              },
              {
                "label": "Cooldown",
                "value": "3 seconds"
              },
              {
                "label": "Target",
                "value": "Instant Casting"
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
                      "area-of-effect": "9x9",
                      "base-damage-matk": "15000%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "3x3",
                      "duration": "10.5 seconds",
                      "base-damage-matk": "7400%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "3x3",
                      "duration": "11 seconds",
                      "base-damage-matk": "7700%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "3x3",
                      "duration": "11.5 seconds",
                      "base-damage-matk": "8000%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "3x3",
                      "duration": "12 seconds",
                      "base-damage-matk": "8300%"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "area-of-effect": "3x3",
                      "duration": "12.5 seconds",
                      "base-damage-matk": "8600%"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "area-of-effect": "5x5",
                      "duration": "13 seconds",
                      "base-damage-matk": "8900%"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "area-of-effect": "5x5",
                      "duration": "13.5 seconds",
                      "base-damage-matk": "9200%"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "area-of-effect": "5x5",
                      "duration": "14 seconds",
                      "base-damage-matk": "9500%"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "area-of-effect": "5x5",
                      "duration": "15 seconds",
                      "base-damage-matk": "9800%"
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
          "id": 6599,
          "imageFile": "6599.png",
          "name": "Roaring Charge",
          "maxLevel": 5,
          "prerequisiteText": "Thundering Focus 5",
          "group": "Active",
          "type": "Magic",
          "target": "Instant Casting",
          "recoversAp": "1~5, +5 (enhanced)",
          "consumesAp": "",
          "description": "Calls down lightning on the user, dealing wind property magical damage to enemies within a surrounding area for 2 hits and gaining multiple stacks of Charge effect.\nIf the skill is used while Overcharged, an enhanced version is used, increasing the number of hit to 3 hits and recovering an additional 5 AP.\nIf under Truth of Wind state, deals additional damage depending on the user's base level and SPL.",
          "levelDetails": [
            {
              "level": 1,
              "text": "8000% MATK / 11500% MATK (enhanced) per hit / area of effect : 5 x 5 cells."
            },
            {
              "level": 2,
              "text": "8400% MATK / 12000% MATK (enhanced) per hit / area of effect : 5 x 5 cells."
            },
            {
              "level": 3,
              "text": "8800% MATK / 12500% MATK (enhanced) per hit / area of effect : 5 x 5 cells."
            },
            {
              "level": 4,
              "text": "9200% MATK / 13000% MATK (enhanced) per hit / area of effect : 5 x 5 cells."
            },
            {
              "level": 5,
              "text": "9600% MATK / 13500% MATK (enhanced) per hit / area of effect : 5 x 5 cells."
            }
          ],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "1.4 seconds",
          "castDelay": "0.4 seconds",
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6599.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6599",
          "tree": {
            "idx": 5,
            "row": 0,
            "col": 5,
            "columns": 9,
            "requirements": [
              {
                "id": 6563,
                "level": 5,
                "name": "Thundering Focus",
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
                "value": "1.4 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.4 seconds"
              },
              {
                "label": "Target",
                "value": "Instant Casting"
              },
              {
                "label": "AP Generated",
                "value": "1~5, +5 (enhanced)"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "base-damage-matk-per-hit",
                    "label": "Base Damage (MATK per Hit)"
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
                      "base-damage-matk-per-hit": "8000%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk-per-hit": "8400%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk-per-hit": "8800%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk-per-hit": "9200%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk-per-hit": "9600%"
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
          "id": 6603,
          "imageFile": "6603.png",
          "name": "Terra Harvest",
          "maxLevel": 10,
          "prerequisiteText": "Earth Bud 5",
          "group": "Active",
          "type": "Magic",
          "target": "Single target",
          "recoversAp": "2",
          "consumesAp": "",
          "description": "Blooms the target with earth flower, dealing earth property magical damage to enemies within a range and gaining 2 stacks of Growth effect.\nIf the skill is used while Growth effect is complete, Ground Bloom skill will be activated.\nIf under Truth of Earth state, deals additional damage depending on the user's base level and SPL.\nCast range: 7 cells.",
          "levelDetails": [
            {
              "level": 1,
              "text": "18000% MATK / area of effect : 5 x 5 cells."
            },
            {
              "level": 2,
              "text": "18500% MATK / area of effect : 5 x 5 cells."
            },
            {
              "level": 3,
              "text": "19000% MATK / area of effect : 5 x 5 cells."
            },
            {
              "level": 4,
              "text": "19500% MATK / area of effect : 5 x 5 cells."
            },
            {
              "level": 5,
              "text": "20000% MATK / area of effect : 5 x 5 cells."
            },
            {
              "level": 6,
              "text": "20500% MATK / area of effect : 5 x 5 cells."
            },
            {
              "level": 7,
              "text": "21000% MATK / area of effect : 5 x 5 cells."
            },
            {
              "level": 8,
              "text": "21500% MATK / area of effect : 5 x 5 cells."
            },
            {
              "level": 9,
              "text": "22000% MATK / area of effect : 5 x 5 cells."
            },
            {
              "level": 10,
              "text": "22500% MATK / area of effect : 5 x 5 cells."
            }
          ],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "0.5 seconds",
          "castDelay": "0.2 seconds",
          "cooldown": "0.5 seconds",
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6603.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6603",
          "tree": {
            "idx": 6,
            "row": 0,
            "col": 6,
            "columns": 9,
            "requirements": [
              {
                "id": 6571,
                "level": 5,
                "name": "Earth Bud",
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
                "value": "1.5 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "0.5 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.2 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0.5 seconds"
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
                    "id": "base-damage-matk",
                    "label": "Base Damage (MATK)"
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
                      "base-damage-matk": "18000%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk": "18500%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk": "19000%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk": "19500%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk": "20000%"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk": "20500%"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk": "21000%"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk": "21500%"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk": "22000%"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk": "22500%"
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
          "id": 6578,
          "imageFile": "6578.png",
          "name": "Primal Claw",
          "maxLevel": 5,
          "prerequisiteText": "Sixth Sense 3",
          "group": "Active",
          "type": "Melee physical",
          "target": "Single Target",
          "recoversAp": "1",
          "consumesAp": "",
          "description": "an only be used while in [Werewolf] state.\nThe first claw, imbued with primal rage, opens the path to hunting.\nInstantly dashes to the enemy within 5 cells range, dealing melee physical damage to all enemies within surrounding range.\nAfter using Primal Claw, Feral Claw can be used for 5 seconds.\nDeals additional damage depending on the user's base level and POW.\nIf in Madness state, the effect is enhanced according to the level.\nMadness (level 1)\nPrimal Claw ATK + 800%.\nMadness (level 2)\nChanges area of effect to 7 x 7 cells.\nMadness (level 3)\nApplies critical damage, the critical chance is the user's CRI (however, the effectiveness of critical modifier is applied by half).",
          "levelDetails": [
            {
              "level": 1,
              "text": "1100% ATK / 1900% ATK (Madness level 1) / area of effect : 5 x 5 cells / 7 x 7 cells (Madness level 2)."
            },
            {
              "level": 2,
              "text": "2050% ATK / 2850% ATK (Madness level 1) / area of effect : 5 x 5 cells / 7 x 7 cells (Madness level 2)."
            },
            {
              "level": 3,
              "text": "3000% ATK / 3800% ATK (Madness level 1) / area of effect : 5 x 5 cells / 7 x 7 cells (Madness level 2)."
            },
            {
              "level": 4,
              "text": "3950% ATK / 4750% ATK (Madness level 1) / area of effect : 5 x 5 cells / 7 x 7 cells (Madness level 2)."
            },
            {
              "level": 5,
              "text": "4900% ATK / 5700% ATK (Madness level 1) / area of effect : 5 x 5 cells / 7 x 7 cells (Madness level 2)."
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6578.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6578",
          "tree": {
            "idx": 7,
            "row": 0,
            "col": 7,
            "columns": 9,
            "requirements": [
              {
                "id": 6575,
                "level": 3,
                "name": "Sixth Sense",
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
                    "id": "base-damage-atk",
                    "label": "Base Damage (ATK)"
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
                      "base-damage-atk": "1100%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk": "2050%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk": "3000%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk": "3950%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk": "4900%"
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
          "id": 6586,
          "imageFile": "6586.png",
          "name": "Pinion Shot",
          "maxLevel": 10,
          "prerequisiteText": "Sixth Sense 3",
          "group": "Active",
          "type": "Ranged Physical",
          "target": "Single target",
          "recoversAp": "2",
          "consumesAp": "",
          "description": "Can only be used while in [Wereraptor] state.\nSwiftly subdues the prey with sharp feather.\nDeals long ranged physical damage to the target enemy.\nWhen the skill is used, gains 1 stack of [Gale Charge] state and can be accumulated up to 5 stacks.\nWhen using the skill after gaining maximum stack, grants [Gale Acceleration] to the party members within a 9 x 9 cells area around the user.\n[Gale Acceleration]: Increases melee and long ranged physical damage by 15% / Increases all property magical damage by 15%.\nDeals additional damage depending on the user's base level and CON.\nThe skill's effect is enhanced during Apex Phase.\nApex Phase\nIncreases Pinion Shot damage by 30%.\nApplies critical damage, the critical chance is the user's CRI (however, the effectiveness of critical modifier is applied by half).",
          "levelDetails": [
            {
              "level": 1,
              "text": "Atk 2450%"
            },
            {
              "level": 2,
              "text": "Atk 4900%"
            },
            {
              "level": 3,
              "text": "Atk 7350%"
            },
            {
              "level": 4,
              "text": "Atk 9800%"
            },
            {
              "level": 5,
              "text": "Atk 12250%"
            },
            {
              "level": 6,
              "text": "Atk 14700%"
            },
            {
              "level": 7,
              "text": "Atk 17150%"
            },
            {
              "level": 8,
              "text": "Atk 19600%"
            },
            {
              "level": 9,
              "text": "Atk 22050%"
            },
            {
              "level": 10,
              "text": "Atk 24500%"
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "1 second",
          "castDelay": "0.5 seconds",
          "cooldown": "0.35 seconds",
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6586.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6586",
          "tree": {
            "idx": 8,
            "row": 0,
            "col": 8,
            "columns": 9,
            "requirements": [
              {
                "id": 6575,
                "level": 3,
                "name": "Sixth Sense",
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
                "value": "0.35 seconds"
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
                    "id": "base-damage-atk",
                    "label": "Base Damage (ATK)"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "base-damage-atk": "2450%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-atk": "4900%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-atk": "7350%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-atk": "9800%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-atk": "12250%"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "base-damage-atk": "14700%"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "base-damage-atk": "17150%"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "base-damage-atk": "19600%"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "base-damage-atk": "22050%"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "base-damage-atk": "24500%"
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
          "id": 6577,
          "imageFile": "6577.png",
          "name": "Alpha Phase",
          "maxLevel": 5,
          "prerequisiteText": "Pulse of Madness 3",
          "group": "Active(AP)",
          "type": "Buff",
          "target": "Instant Casting",
          "recoversAp": "",
          "consumesAp": "130",
          "description": "Can only be used while in [Werewolf] state.\nThe seething instinct of alpha dominates the user's entire body.\nDuring the duration, the user can use the maximum effect of Madness level 3.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Duration 60 seconds."
            },
            {
              "level": 2,
              "text": "Duration 120 seconds."
            },
            {
              "level": 3,
              "text": "Duration 180 seconds."
            },
            {
              "level": 4,
              "text": "Duration 240 seconds."
            },
            {
              "level": 5,
              "text": "Duration 300 seconds."
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6577.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6577",
          "tree": {
            "idx": 9,
            "row": 1,
            "col": 0,
            "columns": 9,
            "requirements": [
              {
                "id": 6576,
                "level": 3,
                "name": "Pulse of Madness",
                "visible": false
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
                "label": "Target",
                "value": "Instant Casting"
              },
              {
                "label": "AP Consumed",
                "value": "130"
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
                      "duration": "60 seconds"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "120 seconds"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "180 seconds"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "240 seconds"
                    }
                  },
                  {
                    "level": 5,
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
          "id": 6594,
          "imageFile": "6594.png",
          "name": "Glacial Shard",
          "maxLevel": 10,
          "prerequisiteText": "Glacial Monolith 3",
          "group": "Active",
          "type": "Magic",
          "target": "Single target",
          "recoversAp": "2",
          "consumesAp": "",
          "description": "Creates a glacier and shatters it, dealing water property magical damage to the target and surrounding enemies for 3 hits.\nIf under Truth of Ice state, deals additional damage depending on the user's base level and SPL.\nCast range: 7 cells.",
          "levelDetails": [
            {
              "level": 1,
              "text": "5500% MATK per hit / area of effect : diamond shape (3 cells radius)."
            },
            {
              "level": 2,
              "text": "5800% MATK per hit / area of effect : diamond shape (3 cells radius)."
            },
            {
              "level": 3,
              "text": "6100% MATK per hit / area of effect : diamond shape (3 cells radius)."
            },
            {
              "level": 4,
              "text": "6400% MATK per hit / area of effect : diamond shape (3 cells radius)."
            },
            {
              "level": 5,
              "text": "6700% MATK per hit / area of effect : diamond shape (3 cells radius)."
            },
            {
              "level": 6,
              "text": "7000% MATK per hit / area of effect : diamond shape (3 cells radius)."
            },
            {
              "level": 7,
              "text": "7300% MATK per hit / area of effect : diamond shape (3 cells radius)."
            },
            {
              "level": 8,
              "text": "7600% MATK per hit / area of effect : diamond shape (3 cells radius)."
            },
            {
              "level": 9,
              "text": "7900% MATK per hit / area of effect : diamond shape (3 cells radius)."
            },
            {
              "level": 10,
              "text": "8200% MATK per hit / area of effect : diamond shape (3 cells radius)."
            }
          ],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "1 second",
          "castDelay": "0.2 seconds",
          "cooldown": "0.5 seconds",
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6594.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6594",
          "tree": {
            "idx": 11,
            "row": 1,
            "col": 2,
            "columns": 9,
            "requirements": [
              {
                "id": 6592,
                "level": 3,
                "name": "Glacial Monolith",
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
                "value": "1 second"
              },
              {
                "label": "Cast Delay",
                "value": "0.2 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0.5 seconds"
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
                    "id": "base-damage-matk-per-hit",
                    "label": "Base Damage (MATK per Hit)"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "base-damage-matk-per-hit": "5500%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-matk-per-hit": "5800%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-matk-per-hit": "6100%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-matk-per-hit": "6400%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-matk-per-hit": "6700%"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "base-damage-matk-per-hit": "7000%"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "base-damage-matk-per-hit": "7300%"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "base-damage-matk-per-hit": "7600%"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "base-damage-matk-per-hit": "7900%"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "base-damage-matk-per-hit": "8200%"
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
          "id": 6597,
          "imageFile": "6597.png",
          "name": "Roaring Piercer",
          "maxLevel": 10,
          "prerequisiteText": "Roaring Charge 3",
          "group": "Active",
          "type": "Magic",
          "target": "Single target",
          "recoversAp": "2",
          "consumesAp": "",
          "description": "Throws a sharp spear of lightning at the designated target, dealing wind property magical damage to the target and enemies within the surrounding area for 2 hits and gaining 1 stacks of Charge effect.\nIf the skill is used while Overcharged, an enhanced version is used, increasing the number of hit to 3 hits.\nIf under Truth of Wind state, deals additional damage depending on the user's base level and INT.\nCast range: 8 cells.",
          "levelDetails": [
            {
              "level": 1,
              "text": "7050% MATK / 11250% MATK (enhanced) per hit / area of effect : 5 x 9 cells."
            },
            {
              "level": 2,
              "text": "7750% MATK / 12000% MATK (enhanced) per hit / area of effect : 5 x 9 cells."
            },
            {
              "level": 3,
              "text": "8450% MATK / 12750% MATK (enhanced) per hit / area of effect : 5 x 9 cells."
            },
            {
              "level": 4,
              "text": "9150% MATK / 13500% MATK (enhanced) per hit / area of effect : 5 x 9 cells."
            },
            {
              "level": 5,
              "text": "9850% MATK / 14250% MATK (enhanced) per hit / area of effect : 5 x 9 cells."
            },
            {
              "level": 6,
              "text": "10550% MATK / 15000% MATK (enhanced) per hit / area of effect : 5 x 9 cells."
            },
            {
              "level": 7,
              "text": "11250% MATK / 15750% MATK (enhanced) per hit / area of effect : 5 x 9 cells."
            },
            {
              "level": 8,
              "text": "11950% MATK / 16500% MATK (enhanced) per hit / area of effect : 5 x 9 cells."
            },
            {
              "level": 9,
              "text": "12650% MATK / 17250% MATK (enhanced) per hit / area of effect : 5 x 9 cells."
            },
            {
              "level": 10,
              "text": "13350% MATK / 18000% MATK (enhanced) per hit / area of effect : 5 x 9 cells."
            }
          ],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "1.3 seconds",
          "castDelay": "0.4 seconds",
          "cooldown": "0.5 seconds",
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6597.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6597",
          "tree": {
            "idx": 12,
            "row": 1,
            "col": 3,
            "columns": 9,
            "requirements": [
              {
                "id": 6599,
                "level": 3,
                "name": "Roaring Charge",
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
                "value": "1.3 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.4 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0.5 seconds"
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
                    "id": "base-damage-matk-per-hit",
                    "label": "Base Damage (MATK per Hit)"
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
                      "area-of-effect": "5x9",
                      "base-damage-matk-per-hit": "7050%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "5x9",
                      "base-damage-matk-per-hit": "7750%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "5x9",
                      "base-damage-matk-per-hit": "8450%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "5x9",
                      "base-damage-matk-per-hit": "9150%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "5x9",
                      "base-damage-matk-per-hit": "9850%"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "area-of-effect": "5x9",
                      "base-damage-matk-per-hit": "10550%"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "area-of-effect": "5x9",
                      "base-damage-matk-per-hit": "11250%"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "area-of-effect": "5x9",
                      "base-damage-matk-per-hit": "11950%"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "area-of-effect": "5x9",
                      "base-damage-matk-per-hit": "12650%"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "area-of-effect": "5x9",
                      "base-damage-matk-per-hit": "13350%"
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
          "id": 6602,
          "imageFile": "6602.png",
          "name": "Terra Wave",
          "maxLevel": 10,
          "prerequisiteText": "Terra Harvest 5",
          "group": "Active",
          "type": "Magic",
          "target": "1 cell ground target",
          "recoversAp": "3",
          "consumesAp": "",
          "description": "Sends an earth wave to the designated ground target, dealing earth property magical damage to enemies within 3 x 12 area of effect and gaining 2 stacks of Growth effect.\nCancels a certain ground-targeting spell placed within the area of effect.\nIf there are immobile cells around the designated location, the effect will not activate.\nIf the skill is used while Growth effect is complete, Ground Bloom skill will be activated.\nIf under Truth of Earth state, deals additional damage depending on the user's base level and SPL.\nCast range: 2 cells.",
          "levelDetails": [
            {
              "level": 1,
              "text": "12000% MATK / area of effect : 3 x 12 cells."
            },
            {
              "level": 2,
              "text": "12300% MATK / area of effect : 3 x 12 cells."
            },
            {
              "level": 3,
              "text": "12600% MATK / area of effect : 3 x 12 cells."
            },
            {
              "level": 4,
              "text": "12900% MATK / area of effect : 3 x 12 cells."
            },
            {
              "level": 5,
              "text": "13200% MATK / area of effect : 3 x 12 cells."
            },
            {
              "level": 6,
              "text": "13500% MATK / area of effect : 3 x 12 cells."
            },
            {
              "level": 7,
              "text": "13800% MATK / area of effect : 3 x 12 cells."
            },
            {
              "level": 8,
              "text": "14100% MATK / area of effect : 3 x 12 cells."
            },
            {
              "level": 9,
              "text": "14400% MATK / area of effect : 3 x 12 cells."
            },
            {
              "level": 10,
              "text": "14700% MATK / area of effect : 3 x 12 cells."
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6602.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6602",
          "tree": {
            "idx": 13,
            "row": 1,
            "col": 4,
            "columns": 9,
            "requirements": [
              {
                "id": 6603,
                "level": 5,
                "name": "Terra Harvest",
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
                "value": "1 cell ground target"
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
                    "id": "base-damage-matk",
                    "label": "Base Damage (MATK)"
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
                      "area-of-effect": "3x12",
                      "base-damage-matk": "12000%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "3x12",
                      "base-damage-matk": "12300%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "3x12",
                      "base-damage-matk": "12600%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "3x12",
                      "base-damage-matk": "12900%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "3x12",
                      "base-damage-matk": "13200%"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "area-of-effect": "3x12",
                      "base-damage-matk": "13500%"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "area-of-effect": "3x12",
                      "base-damage-matk": "13800%"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "area-of-effect": "3x12",
                      "base-damage-matk": "14100%"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "area-of-effect": "3x12",
                      "base-damage-matk": "14400%"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "area-of-effect": "3x12",
                      "base-damage-matk": "14700%"
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
          "id": 6579,
          "imageFile": "6579.png",
          "name": "Feral Claw",
          "maxLevel": 5,
          "prerequisiteText": "Primal Claw 3",
          "group": "Active",
          "type": "Melee physical",
          "target": "Instant Casting",
          "recoversAp": "1",
          "consumesAp": "",
          "description": "Can only be used while in [Werewolf] state.\nCan be used within 5 seconds after using [Primal Claw].\nRampaging wild claw continuously strike the prey.\nDeals melee physical damage to all enemies within range around the user.\nAfter using Feral Claw, Alpha Claw can be used for 5 seconds.\nDeals additional damage depending on the user's base level and POW.\nIf in Madness state, the effect is enhanced according to the level.\nMadness (level 1)\nFeral Claw ATK + 800%.\nMadness (level 2)\nChanges area of effect to 9 x 9 cells.\nMadness (level 3)\nApplies critical damage, the critical chance is the user's CRI (however, the effectiveness of critical modifier is applied by half).",
          "levelDetails": [
            {
              "level": 1,
              "text": "1600% ATK / 2400% ATK (Madness level 1) / area of effect : 7 x 7 cells / 9 x 9 cells (Madness level 2)."
            },
            {
              "level": 2,
              "text": "2750% ATK / 3550% ATK (Madness level 1) / area of effect : 7 x 7 cells / 9 x 9 cells (Madness level 2)."
            },
            {
              "level": 3,
              "text": "3900% ATK / 4700% ATK (Madness level 1) / area of effect : 7 x 7 cells / 9 x 9 cells (Madness level 2)."
            },
            {
              "level": 4,
              "text": "5050% ATK / 5850% ATK (Madness level 1) / area of effect : 7 x 7 cells / 9 x 9 cells (Madness level 2)."
            },
            {
              "level": 5,
              "text": "6200% ATK / 7000% ATK (Madness level 1) / area of effect : 7 x 7 cells / 9 x 9 cells (Madness level 2)."
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6579.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6579",
          "tree": {
            "idx": 14,
            "row": 1,
            "col": 5,
            "columns": 9,
            "requirements": [
              {
                "id": 6578,
                "level": 3,
                "name": "Primal Claw",
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
                "value": "Instant Casting"
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
                    "id": "base-damage-atk",
                    "label": "Base Damage (ATK)"
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
                      "base-damage-atk": "1600%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-atk": "2750%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-atk": "3900%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-atk": "5050%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-atk": "6200%"
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
          "id": 6588,
          "imageFile": "6588.png",
          "name": "Quill Spear",
          "maxLevel": 10,
          "prerequisiteText": "Pinion Shot 3",
          "group": "Active",
          "type": "Ranged Physical",
          "target": "Single target",
          "recoversAp": "3",
          "consumesAp": "",
          "description": "Can only be used while in [Wereraptor] state.\nA wind-infused spear pierces the prey, dealing long ranged physical damage to the target and all enemies within a 3x7 cells around the target.\nDeals additional damage depending on the user's base level and CON.\nThe skill's effect is enhanced during Apex Phase.\nApex Phase\nIncreases Quill Spear damage by 30%.\nApplies critical damage, the critical chance is the user's CRI (however, the effectiveness of critical modifier is applied by half).\nChangess area of effect to 5 x 7 cells.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Atk 2050%"
            },
            {
              "level": 2,
              "text": "Atk 4100%"
            },
            {
              "level": 3,
              "text": "Atk 6150%"
            },
            {
              "level": 4,
              "text": "Atk 8200%"
            },
            {
              "level": 5,
              "text": "Atk 10250%"
            },
            {
              "level": 6,
              "text": "Atk 12300%"
            },
            {
              "level": 7,
              "text": "Atk 14350%"
            },
            {
              "level": 8,
              "text": "Atk 16400%"
            },
            {
              "level": 9,
              "text": "Atk 18450%"
            },
            {
              "level": 10,
              "text": "Atk 20500%"
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "1 second",
          "castDelay": "0.35 seconds",
          "cooldown": "0.7 seconds",
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6588.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6588",
          "tree": {
            "idx": 15,
            "row": 1,
            "col": 6,
            "columns": 9,
            "requirements": [
              {
                "id": 6586,
                "level": 3,
                "name": "Pinion Shot",
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
                "value": "0.35 seconds"
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
                "value": "3"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "base-damage-atk",
                    "label": "Base Damage (ATK)"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "base-damage-atk": "2050%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-atk": "4100%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-atk": "6150%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-atk": "8200%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-atk": "10250%"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "base-damage-atk": "12300%"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "base-damage-atk": "14350%"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "base-damage-atk": "16400%"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "base-damage-atk": "18450%"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "base-damage-atk": "20500%"
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
          "id": 6585,
          "imageFile": "6585.png",
          "name": "Apex Phase",
          "maxLevel": 5,
          "prerequisiteText": "Flip Flap 3",
          "group": "Active(AP)",
          "type": "Buff",
          "target": "Instant Casting",
          "recoversAp": "",
          "consumesAp": "130",
          "description": "Can only be used while in [Wereraptor] state.\nThe instinct of sky predator envelop the user's wings.\nThis state grants buffs to Raptor attack-type skills for the duration.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Duration 60 seconds."
            },
            {
              "level": 2,
              "text": "Duration 120 seconds."
            },
            {
              "level": 3,
              "text": "Duration 180 seconds."
            },
            {
              "level": 4,
              "text": "Duration 240 seconds."
            },
            {
              "level": 5,
              "text": "Duration 300 seconds."
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6585.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6585",
          "tree": {
            "idx": 16,
            "row": 1,
            "col": 7,
            "columns": 9,
            "requirements": [
              {
                "id": 6583,
                "level": 3,
                "name": "Flip Flap",
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
                "label": "Target",
                "value": "Instant Casting"
              },
              {
                "label": "AP Consumed",
                "value": "130"
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
                      "duration": "60 seconds"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "120 seconds"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "180 seconds"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "240 seconds"
                    }
                  },
                  {
                    "level": 5,
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
          "id": 6595,
          "imageFile": "6595.png",
          "name": "Glacial Stomp",
          "maxLevel": 5,
          "prerequisiteText": "Glacial Shard 5",
          "group": "Active",
          "type": "Magic",
          "target": "Instant Casting",
          "recoversAp": "3",
          "consumesAp": "",
          "description": "Teleports to the Glacial Monolith, dealing water property magical damage to nearby enemies for 2 hits.\nThe skill cannot be used outside the Glacial Monolith's range.\nIf under Truth of Ice state, deals additional damage depending on the user's base level and SPL.",
          "levelDetails": [
            {
              "level": 1,
              "text": "6400% MATK per hit / area of effect : 7 x 7 cells."
            },
            {
              "level": 2,
              "text": "6900% MATK per hit / area of effect : 7 x 7 cells."
            },
            {
              "level": 3,
              "text": "7400% MATK per hit / area of effect : 7 x 7 cells."
            },
            {
              "level": 4,
              "text": "7900% MATK per hit / area of effect : 7 x 7 cells."
            },
            {
              "level": 5,
              "text": "8400% MATK per hit / area of effect : 7 x 7 cells."
            }
          ],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "0.3 seconds",
          "castDelay": "0.2 seconds",
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6595.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6595",
          "tree": {
            "idx": 18,
            "row": 2,
            "col": 0,
            "columns": 9,
            "requirements": [
              {
                "id": 6594,
                "level": 5,
                "name": "Glacial Shard",
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
                "value": "0.3 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.2 seconds"
              },
              {
                "label": "Target",
                "value": "Instant Casting"
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
                    "id": "base-damage-matk-per-hit",
                    "label": "Base Damage (MATK per Hit)"
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
                      "base-damage-matk-per-hit": "6400%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk-per-hit": "6900%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk-per-hit": "7400%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk-per-hit": "7900%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk-per-hit": "8400%"
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
          "id": 6601,
          "imageFile": "6601.png",
          "name": "Furious Storm",
          "maxLevel": 5,
          "prerequisiteText": "Thundering Call 5, Roaring Charge 5, Roaring Piercer 5",
          "group": "Active(AP)",
          "type": "Magic",
          "target": "Instant Casting",
          "recoversAp": "",
          "consumesAp": "20~15",
          "description": "Summons a lightning storm to deal wind property magical damage to the enemies within its special range.\nDeals additional damage depending on the user's base level and SPL.\n*Activates while holding down the skill shortcut key.",
          "levelDetails": [
            {
              "level": 1,
              "text": "7800% MATK / area of effect : diamond shape (5 cells radius) / Consumes AP : 20 AP every 0.25 seconds."
            },
            {
              "level": 2,
              "text": "8200% MATK / area of effect : diamond shape (5 cells radius) / Consumes AP : 19 AP every 0.25 seconds."
            },
            {
              "level": 3,
              "text": "8600% MATK / area of effect : diamond shape (5 cells radius) / Consumes AP : 18 AP every 0.25 seconds."
            },
            {
              "level": 4,
              "text": "9000% MATK / area of effect : diamond shape (6 cells radius) / Consumes AP : 17 AP every 0.25 seconds."
            },
            {
              "level": 5,
              "text": "9400% MATK / area of effect : diamond shape (6 cells radius) / Consumes AP : 15 AP every 0.25 seconds."
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6601.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6601",
          "tree": {
            "idx": 19,
            "row": 2,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 6567,
                "level": 5,
                "name": "Thundering Call",
                "visible": false
              },
              {
                "id": 6597,
                "level": 5,
                "name": "Roaring Piercer",
                "visible": true
              },
              {
                "id": 6599,
                "level": 5,
                "name": "Roaring Charge",
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
                "label": "Target",
                "value": "Instant Casting"
              },
              {
                "label": "AP Consumed",
                "value": "20~15"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "base-damage-matk",
                    "label": "Base Damage (MATK)"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "base-damage-matk": "7800%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-matk": "8200%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-matk": "8600%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-matk": "9000%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-matk": "9400%"
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
          "id": 6604,
          "imageFile": "6604.png",
          "name": "Solid Stomp",
          "maxLevel": 5,
          "prerequisiteText": "Terra Harvest 5, Terra Wave 5",
          "group": "Active(AP)",
          "type": "Magic",
          "target": "Instant Casting",
          "recoversAp": "",
          "consumesAp": "20/19/18/17/15",
          "description": "Sends a powerful shockwave through the ground, dealing earth property magical damage to nearby enemies and gaining 4 stacks of Growth effect.\nRecovers certain percentage of MaxHP to the user, and grants a buff to the user that reduces melee / long ranged physical damage taken by certain percentage and increases earth property magical damage by 15% for 10 seconds.\nDeals additional damage depending on the user's base level and SPL.",
          "levelDetails": [
            {
              "level": 1,
              "text": "10400% MATK / reduces melee / long ranged physical damage taken by 3% / recovers 1% of MaxHP / area of effect : 9 x 9 cells."
            },
            {
              "level": 2,
              "text": "11200% MATK / reduces melee / long ranged physical damage taken by 6% / recovers 2% of MaxHP / area of effect : 9 x 9 cells."
            },
            {
              "level": 3,
              "text": "12000% MATK / reduces melee / long ranged physical damage taken by 9% / recovers 3% of MaxHP / area of effect : 9 x 9 cells."
            },
            {
              "level": 4,
              "text": "12800% MATK / reduces melee / long ranged physical damage taken by 12% / recovers 4% of MaxHP / area of effect : 9 x 9 cells."
            },
            {
              "level": 5,
              "text": "13600% MATK / reduces melee / long ranged physical damage taken by 15% / recovers 5% of MaxHP / area of effect : 9 x 9 cells."
            }
          ],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "0.3 seconds",
          "castDelay": "0.2 seconds",
          "cooldown": "5 seconds",
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6604.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6604",
          "tree": {
            "idx": 20,
            "row": 2,
            "col": 2,
            "columns": 9,
            "requirements": [
              {
                "id": 6602,
                "level": 5,
                "name": "Terra Wave",
                "visible": true
              },
              {
                "id": 6603,
                "level": 5,
                "name": "Terra Harvest",
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
                "value": "0.3 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.2 seconds"
              },
              {
                "label": "Cooldown",
                "value": "5 seconds"
              },
              {
                "label": "Target",
                "value": "Instant Casting"
              },
              {
                "label": "AP Consumed",
                "value": "20/19/18/17/15"
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
                    "id": "area-of-effect",
                    "label": "Area of Effect"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "area-of-effect": "9x9",
                      "base-damage-matk": "10400%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "9x9",
                      "base-damage-matk": "11200%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "9x9",
                      "base-damage-matk": "12000%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "9x9",
                      "base-damage-matk": "12800%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "9x9",
                      "base-damage-matk": "13600%"
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
          "id": 6580,
          "imageFile": "6580.png",
          "name": "Alpha Claw",
          "maxLevel": 5,
          "prerequisiteText": "Feral Claw 3",
          "group": "Active",
          "type": "Melee physical",
          "target": "Instant Casting",
          "recoversAp": "3",
          "consumesAp": "",
          "description": "Can only be used while in [Werewolf] state.\nCan be used within 5 seconds after using [Feral Claw].\nThe alpha's final claw suffocates the prey.\nDeals melee physical damage to all enemies within range around the user for 2 hits.\nDeals additional damage depending on the user's base level and POW.\nIf in Madness state, the effect is enhanced according to the level.\nMadness (level 1)\nAlpha Claw ATK + 800%.\nMadness (level 2)\nChanges area of effect to 9 x 9 cells.\nMadness (level 3)\nApplies critical damage, the critical chance is the user's CRI (however, the effectiveness of critical modifier is applied by half).",
          "levelDetails": [
            {
              "level": 1,
              "text": "2200% ATK / 3000% ATK (Madness level 1) per hit / area of effect : 7 x 7 cells / 9 x 9 cells (Madness level 2)."
            },
            {
              "level": 2,
              "text": "3600% ATK / 4400% ATK (Madness level 1) per hit / area of effect : 7 x 7 cells / 9 x 9 cells (Madness level 2)."
            },
            {
              "level": 3,
              "text": "5000% ATK / 5800% ATK (Madness level 1) per hit / area of effect : 7 x 7 cells / 9 x 9 cells (Madness level 2)."
            },
            {
              "level": 4,
              "text": "6400% ATK / 7200% ATK (Madness level 1) per hit / area of effect : 7 x 7 cells / 9 x 9 cells (Madness level 2)."
            },
            {
              "level": 5,
              "text": "7800% ATK / 8600% ATK (Madness level 1) per hit / area of effect : 7 x 7 cells / 9 x 9 cells (Madness level 2)."
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6580.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6580",
          "tree": {
            "idx": 21,
            "row": 2,
            "col": 3,
            "columns": 9,
            "requirements": [
              {
                "id": 6579,
                "level": 3,
                "name": "Feral Claw",
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
                "value": "Instant Casting"
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
                    "id": "area-of-effect",
                    "label": "Area of Effect"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-atk-per-hit": "2200%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-atk-per-hit": "3600%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-atk-per-hit": "5000%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-atk-per-hit": "6400%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-atk-per-hit": "7800%"
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
          "id": 6590,
          "imageFile": "6590.png",
          "name": "Tempest Flap",
          "maxLevel": 10,
          "prerequisiteText": "Quill Spear 3",
          "group": "Active(AP)",
          "type": "Ranged Physical",
          "target": "Single target",
          "recoversAp": "",
          "consumesAp": "20",
          "description": "Can only be used while in [Wereraptor] state.\nCreates a storm with a violent flap of wings, dealing long ranged physical damage to the target and all enemies within range.\nDeals additional damage depending on the user's base level and CON.\nThe skill's effect is enhanced during Apex Phase.\nApex Phase\nApplies critical damage, the critical chance is the user's CRI (however, the effectiveness of critical modifier is applied by half).\nIncreases Tempest Flap damage by 30%.\nIncreases number of hit to 3 hits.",
          "levelDetails": [
            {
              "level": 1,
              "text": "1250% ATK per hit."
            },
            {
              "level": 2,
              "text": "2500% ATK per hit."
            },
            {
              "level": 3,
              "text": "3750% ATK per hit."
            },
            {
              "level": 4,
              "text": "5000% ATK per hit."
            },
            {
              "level": 5,
              "text": "6250% ATK per hit."
            },
            {
              "level": 6,
              "text": "7500% ATK per hit."
            },
            {
              "level": 7,
              "text": "8750% ATK per hit."
            },
            {
              "level": 8,
              "text": "10000% ATK per hit."
            },
            {
              "level": 9,
              "text": "11250% ATK per hit."
            },
            {
              "level": 10,
              "text": "12500% ATK per hit."
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6590.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6590",
          "tree": {
            "idx": 22,
            "row": 2,
            "col": 4,
            "columns": 9,
            "requirements": [
              {
                "id": 6588,
                "level": 3,
                "name": "Quill Spear",
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
                "label": "Target",
                "value": "Single target"
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
                    "id": "base-damage-atk-per-hit",
                    "label": "Base Damage (ATK per Hit)"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "base-damage-atk-per-hit": "1250%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-atk-per-hit": "2500%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-atk-per-hit": "3750%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-atk-per-hit": "5000%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-atk-per-hit": "6250%"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "base-damage-atk-per-hit": "7500%"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "base-damage-atk-per-hit": "8750%"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "base-damage-atk-per-hit": "10000%"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "base-damage-atk-per-hit": "11250%"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "base-damage-atk-per-hit": "12500%"
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
          "id": 6596,
          "imageFile": "6596.png",
          "name": "Chilling Blast",
          "maxLevel": 5,
          "prerequisiteText": "Glacial Monolith 5, Glacial Stomp 5",
          "group": "Active(AP)",
          "type": "Magic",
          "target": "Instant Casting",
          "recoversAp": "",
          "consumesAp": "15/14/13/12/10",
          "description": "Emits an extremely cold air around the user, dealing water property magical damage to nearby enemies.\nDeals additional damage depending on the user's base level and SPL.",
          "levelDetails": [
            {
              "level": 1,
              "text": "8400% MATK / area of effect : 9 x 9 cells."
            },
            {
              "level": 2,
              "text": "9900% MATK / area of effect : 9 x 9 cells."
            },
            {
              "level": 3,
              "text": "11400% MATK / area of effect : 9 x 9 cells."
            },
            {
              "level": 4,
              "text": "12900% MATK / area of effect : 11 x 11 cells."
            },
            {
              "level": 5,
              "text": "14400% MATK / area of effect : 11 x 11 cells."
            }
          ],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "1.5 seconds",
          "castDelay": "0.2 seconds",
          "cooldown": "0.3 seconds",
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6596.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6596",
          "tree": {
            "idx": 25,
            "row": 2,
            "col": 7,
            "columns": 9,
            "requirements": [
              {
                "id": 6592,
                "level": 5,
                "name": "Glacial Monolith",
                "visible": true
              },
              {
                "id": 6595,
                "level": 5,
                "name": "Glacial Stomp",
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
                "value": "1.5 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.2 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0.3 seconds"
              },
              {
                "label": "Target",
                "value": "Instant Casting"
              },
              {
                "label": "AP Consumed",
                "value": "15/14/13/12/10"
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
                    "id": "area-of-effect",
                    "label": "Area of Effect"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "area-of-effect": "9x9",
                      "base-damage-matk": "8400%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "9x9",
                      "base-damage-matk": "9900%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "9x9",
                      "base-damage-matk": "11400%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "11x11",
                      "base-damage-matk": "12900%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "11x11",
                      "base-damage-matk": "14400%"
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
          "id": 6582,
          "imageFile": "6582.png",
          "name": "Frenzy Fang",
          "maxLevel": 5,
          "prerequisiteText": "Alpha Claw 3",
          "group": "Active",
          "type": "Melee physical",
          "target": "Single Target",
          "recoversAp": "1",
          "consumesAp": "",
          "description": "Can only be used while in [Werewolf] state.\nContinuously bites a target with enraged fangs, dealing melee physical damage for 2 hits.\nDeals additional damage depending on the user's base level and POW.\nIf in Madness state, the effect is enhanced according to the level.\nMadness (level 1)\nIncreases number of hit to 3 hits.\nFrenzy Fang ATK + 750%.\nMadness (level 2)\nIncreases number of hit to 5 hits.\nMadness (level 3)\nIncreases number of hit to 7 hits.\nApplies critical damage, the critical chance is the user's CRI (however, the effectiveness of critical modifier is applied by half).",
          "levelDetails": [
            {
              "level": 1,
              "text": "1000% Atk / 1750% Atk (Madness level 1) per hit."
            },
            {
              "level": 2,
              "text": "1250% Atk / 2000% Atk (Madness level 1) per hit."
            },
            {
              "level": 3,
              "text": "1500% Atk / 2250% Atk (Madness level 1) per hit."
            },
            {
              "level": 4,
              "text": "1750% Atk / 2500% Atk (Madness level 1) per hit."
            },
            {
              "level": 5,
              "text": "2000% Atk / 2750% Atk (Madness level 1) per hit."
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6582.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6582",
          "tree": {
            "idx": 28,
            "row": 3,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 6580,
                "level": 3,
                "name": "Alpha Claw",
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
                    "id": "base-damage-atk-per-hit",
                    "label": "Base Damage (ATK per Hit)"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "base-damage-atk-per-hit": "1000%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-atk-per-hit": "1250%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-atk-per-hit": "1500%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-atk-per-hit": "1750%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-atk-per-hit": "2000%"
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
          "id": 6591,
          "imageFile": "6591.png",
          "name": "Aero Sync",
          "maxLevel": 5,
          "prerequisiteText": "Flip Flap 3",
          "group": "Active(AP)",
          "type": "Buff",
          "target": "Single target",
          "recoversAp": "",
          "consumesAp": "30",
          "description": "Can only be used while in [Wereraptor] and [Flip Flap] state.\nRiding the flow of the sky, the user instantly dashes toward a party member within 7 cells range, granting them with the [Flip Flap] effect.\nThe [Flip Flap] effect is granted at the maximum level user learned.\nCannot be used if the user has been granted the [Flip Flap] effect by another player.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Duration 60 seconds."
            },
            {
              "level": 2,
              "text": "Duration 120 seconds."
            },
            {
              "level": 3,
              "text": "Duration 180 seconds."
            },
            {
              "level": 4,
              "text": "Duration 240 seconds."
            },
            {
              "level": 5,
              "text": "Duration 300 seconds."
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6591.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6591",
          "tree": {
            "idx": 29,
            "row": 3,
            "col": 2,
            "columns": 9,
            "requirements": [
              {
                "id": 6583,
                "level": 3,
                "name": "Flip Flap",
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
                "label": "Target",
                "value": "Single target"
              },
              {
                "label": "AP Consumed",
                "value": "30"
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
                      "duration": "60 seconds"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "120 seconds"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "180 seconds"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "240 seconds"
                    }
                  },
                  {
                    "level": 5,
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
          "id": 6606,
          "imageFile": "6606.png",
          "name": "Nature Aid",
          "maxLevel": 5,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Increases S.MATK with the help of nature.",
          "levelDetails": [
            {
              "level": 1,
              "text": "S.Matk + 4"
            },
            {
              "level": 2,
              "text": "S.Matk + 8"
            },
            {
              "level": 3,
              "text": "S.Matk + 12"
            },
            {
              "level": 4,
              "text": "S.Matk + 16"
            },
            {
              "level": 5,
              "text": "S.Matk + 20"
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6606.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6606",
          "tree": {
            "idx": 32,
            "row": 3,
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
                    "id": "s-matk",
                    "label": "S.matk"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "s-matk": "+ 4"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "s-matk": "+ 8"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "s-matk": "+ 12"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "s-matk": "+ 16"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "s-matk": "+ 20"
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
          "id": 6607,
          "imageFile": "6607.png",
          "name": "Nature Harmony",
          "maxLevel": 5,
          "prerequisiteText": "Truth of Ice 1, Truth of Wind 1, Truth of Earth 1",
          "group": "Active(AP)",
          "type": "Buff",
          "target": "Instant Casting",
          "recoversAp": "",
          "consumesAp": "40",
          "description": "Transcends the truth and temporarily becomes one with nature, increasing water, wind and earth property magical damage and increasing damage taken from water, wind and earth property.",
          "levelDetails": [
            {
              "level": 1,
              "text": ": Increases water, wind and earth property magical damage by 30% / increases damage taken from water, wind and earth property by 30% / duration : 30 seconds."
            },
            {
              "level": 2,
              "text": ": Increases water, wind and earth property magical damage by 60% / increases damage taken from water, wind and earth property by 30% / duration : 30 seconds."
            },
            {
              "level": 3,
              "text": ": Increases water, wind and earth property magical damage by 90% / increases damage taken from water, wind and earth property by 30% / duration : 30 seconds."
            },
            {
              "level": 4,
              "text": ": Increases water, wind and earth property magical damage by 120% / increases damage taken from water, wind and earth property by 30% / duration : 30 seconds."
            },
            {
              "level": 5,
              "text": ": Increases water, wind and earth property magical damage by 150% / increases damage taken from water, wind and earth property by 30% / duration : 30 seconds."
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6607.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6607",
          "tree": {
            "idx": 33,
            "row": 3,
            "col": 6,
            "columns": 9,
            "requirements": [
              {
                "id": 6538,
                "level": 1,
                "name": "Truth of Ice",
                "visible": false
              },
              {
                "id": 6541,
                "level": 1,
                "name": "Truth of Wind",
                "visible": false
              },
              {
                "id": 6544,
                "level": 1,
                "name": "Truth of Earth",
                "visible": false
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
                "label": "Target",
                "value": "Instant Casting"
              },
              {
                "label": "AP Consumed",
                "value": "40"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
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
                      "effect": ": Increases water, wind and earth property magical damage by 30% / increases damage taken from water, wind and earth property by 30%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "30 seconds",
                      "effect": ": Increases water, wind and earth property magical damage by 60% / increases damage taken from water, wind and earth property by 30%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "30 seconds",
                      "effect": ": Increases water, wind and earth property magical damage by 90% / increases damage taken from water, wind and earth property by 30%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "30 seconds",
                      "effect": ": Increases water, wind and earth property magical damage by 120% / increases damage taken from water, wind and earth property by 30%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "30 seconds",
                      "effect": ": Increases water, wind and earth property magical damage by 150% / increases damage taken from water, wind and earth property by 30%"
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
          "id": 6605,
          "imageFile": "6605.png",
          "name": "Gravity Hole",
          "maxLevel": 5,
          "prerequisiteText": "Nature Harmony 5",
          "group": "Active(AP)",
          "type": "Magic",
          "target": "Instant Casting",
          "recoversAp": "",
          "consumesAp": "40/38/36/33/30",
          "description": "Distorts the dimension around the user, dealing neutral property magical damage to nearby enemies and pulling only the hit enemies to the user's area, binding them for 1 second.\nDeals additional damage depending on the user's base level and SPL.",
          "levelDetails": [
            {
              "level": 1,
              "text": "5500% MATK / area of effect : 13 x 13 cells / up to 6 targets hit."
            },
            {
              "level": 2,
              "text": "6000% MATK / area of effect : 13 x 13 cells / up to 7 targets hit."
            },
            {
              "level": 3,
              "text": "6500% MATK / area of effect : 13 x 13 cells / up to 8 targets hit."
            },
            {
              "level": 4,
              "text": "7000% MATK / area of effect : 13 x 13 cells / up to 9 targets hit."
            },
            {
              "level": 5,
              "text": "7500% MATK / area of effect : 13 x 13 cells / up to 10 targets hit."
            }
          ],
          "fixedCastTime": "2.5 seconds",
          "variableCastTime": "3 seconds",
          "castDelay": "0.2 seconds",
          "cooldown": "20 seconds",
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6605.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6605",
          "tree": {
            "idx": 34,
            "row": 3,
            "col": 7,
            "columns": 9,
            "requirements": [
              {
                "id": 6607,
                "level": 5,
                "name": "Nature Harmony",
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
                "value": "2.5 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "3 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.2 seconds"
              },
              {
                "label": "Cooldown",
                "value": "20 seconds"
              },
              {
                "label": "Target",
                "value": "Instant Casting"
              },
              {
                "label": "AP Consumed",
                "value": "40/38/36/33/30"
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
                    "id": "area-of-effect",
                    "label": "Area of Effect"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "area-of-effect": "13x13",
                      "base-damage-matk": "5500%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "13x13",
                      "base-damage-matk": "6000%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "13x13",
                      "base-damage-matk": "6500%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "13x13",
                      "base-damage-matk": "7000%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "13x13",
                      "base-damage-matk": "7500%"
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
          "id": 6581,
          "imageFile": "6581.png",
          "name": "Savage Lunge",
          "maxLevel": 10,
          "prerequisiteText": "Alpha Phase 3",
          "group": "Active(AP)",
          "type": "Melee physical",
          "target": "Single Target",
          "recoversAp": "",
          "consumesAp": "15",
          "description": "Can only be used while in [Werewolf] state.\nLunges ferociously at the prey with a loud roar.\nInstantly dashes to the enemy within 7 cells range, dealing melee physical damage.\nDeals additional damage depending on the user's base level and POW.\nIf in Madness state, the effect is enhanced according to the level.\nMadness (level 1)\nIncreases Savage Lunge damage.\nMadness (level 2)\nApplies 7 x 7 cells area of effect around the target.\nMadness (level 3)\nApplies critical damage, the critical chance is the user's CRI (however, the effectiveness of critical modifier is applied by half).",
          "levelDetails": [
            {
              "level": 1,
              "text": "7500% Atk / 9000% Atk (Madness level 1)."
            },
            {
              "level": 2,
              "text": "9000% Atk / 11000% Atk (Madness level 1)."
            },
            {
              "level": 3,
              "text": "10500% Atk / 13000% Atk (Madness level 1)."
            },
            {
              "level": 4,
              "text": "12000% Atk / 15000% Atk (Madness level 1)."
            },
            {
              "level": 5,
              "text": "13500% Atk / 17000% Atk (Madness level 1)."
            },
            {
              "level": 6,
              "text": "15000% Atk / 19000% Atk (Madness level 1)."
            },
            {
              "level": 7,
              "text": "16500% Atk / 21000% Atk (Madness level 1)."
            },
            {
              "level": 8,
              "text": "18000% Atk / 23000% Atk (Madness level 1)."
            },
            {
              "level": 9,
              "text": "19500% Atk / 25000% Atk (Madness level 1)."
            },
            {
              "level": 10,
              "text": "21000% Atk / 27000% Atk (Madness level 1)."
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6581.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6581",
          "tree": {
            "idx": 35,
            "row": 3,
            "col": 8,
            "columns": 9,
            "requirements": [
              {
                "id": 6577,
                "level": 3,
                "name": "Alpha Phase",
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
                "label": "Target",
                "value": "Single Target"
              },
              {
                "label": "AP Consumed",
                "value": "15"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "base-damage-atk",
                    "label": "Base Damage (ATK)"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "base-damage-atk": "7500%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-atk": "9000%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-atk": "10500%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-atk": "12000%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-atk": "13500%"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "base-damage-atk": "15000%"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "base-damage-atk": "16500%"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "base-damage-atk": "18000%"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "base-damage-atk": "19500%"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "base-damage-atk": "21000%"
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
      "id": "previous-1",
      "label": "Previous Class 4",
      "pointLimit": 69,
      "tree": {
        "columns": 9,
        "rows": 1
      },
      "skills": [
        {
          "id": 6576,
          "imageFile": "6576.png",
          "name": "Pulse of Madness",
          "maxLevel": 5,
          "prerequisiteText": "Sixth Sense 1",
          "group": "Active",
          "type": "Buff",
          "target": "Instant Casting",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Can only be used while in [Werewolf] state.\nThe pulse of madness pulses violently, during the skill duration, using Wolf attack-type skills has a chance to gain 1 stack of Madness.\nMadness can be stacked up to 3 times. Wolf attack-type skills are enhanced according to the level of stack, and the effects of each level are accumulative.",
          "levelDetails": [
            {
              "level": 1,
              "text": ": Chance to gain Madness : 20%."
            },
            {
              "level": 2,
              "text": ": Chance to gain Madness : 30%."
            },
            {
              "level": 3,
              "text": ": Chance to gain Madness : 40%."
            },
            {
              "level": 4,
              "text": ": Chance to gain Madness : 50%."
            },
            {
              "level": 5,
              "text": ": Chance to gain Madness : 60%."
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6576.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6576",
          "tree": {
            "idx": 0,
            "row": 0,
            "col": 0,
            "columns": 9,
            "requirements": [
              {
                "id": 6575,
                "level": 1,
                "name": "Sixth Sense",
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
                "value": "Instant Casting"
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
                      "effect": ": Chance to gain Madness : 20%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": ": Chance to gain Madness : 30%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": ": Chance to gain Madness : 40%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": ": Chance to gain Madness : 50%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": ": Chance to gain Madness : 60%"
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
          "id": 6575,
          "imageFile": "6575.png",
          "name": "Sixth Sense",
          "maxLevel": 5,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Maximizes the sixth sense, increasing combat ability.",
          "levelDetails": [
            {
              "level": 1,
              "text": "P.Atk + 2 / CRI + 2"
            },
            {
              "level": 2,
              "text": "P.Atk + 4 / CRI + 4"
            },
            {
              "level": 3,
              "text": "P.Atk + 6 / CRI + 6"
            },
            {
              "level": 4,
              "text": "P.Atk + 8 / CRI + 8"
            },
            {
              "level": 5,
              "text": "P.Atk + 10 / CRI + 10"
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6575.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6575",
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
                "value": "5"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "p-atk-10-cri",
                    "label": "P.atk + 10 / Cri"
                  },
                  {
                    "id": "p-atk-2-cri",
                    "label": "P.atk + 2 / Cri"
                  },
                  {
                    "id": "p-atk-4-cri",
                    "label": "P.atk + 4 / Cri"
                  },
                  {
                    "id": "p-atk-6-cri",
                    "label": "P.atk + 6 / Cri"
                  },
                  {
                    "id": "p-atk-8-cri",
                    "label": "P.atk + 8 / Cri"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "p-atk-2-cri": "+ 2"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "p-atk-4-cri": "+ 4"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "p-atk-6-cri": "+ 6"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "p-atk-8-cri": "+ 8"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "p-atk-10-cri": "+ 10"
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
      "label": "Previous Class 3",
      "pointLimit": 69,
      "tree": {
        "columns": 9,
        "rows": 4
      },
      "skills": [
        {
          "id": 6550,
          "imageFile": "6550.png",
          "name": "Double Slash",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "Melee physical",
          "target": "Single target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Can only be used while in [Werewolf] state.\nDeals melee physical damage to the target and surrounding enemies for 2 hits with powerful cross-cutting strikes.\nDeals additional damage when in [Enrage: Wolf] state.\nDeals additional damage depending on the user's base level and STR.\nCast range: 3 cells.",
          "levelDetails": [
            {
              "level": 1,
              "text": "1200% Atk / 1600% Atk (Enrage) per hit / area of effect: 3 x 3 cells."
            },
            {
              "level": 2,
              "text": "1280% Atk / 1680% Atk (Enrage) per hit / area of effect: 3 x 3 cells."
            },
            {
              "level": 3,
              "text": "1360% Atk / 1760% Atk (Enrage) per hit / area of effect: 3 x 3 cells."
            },
            {
              "level": 4,
              "text": "1440% Atk / 1840% Atk (Enrage) per hit / area of effect: 3 x 3 cells."
            },
            {
              "level": 5,
              "text": "1520% Atk / 1920% Atk (Enrage) per hit / area of effect: 5 x 5 cells."
            },
            {
              "level": 6,
              "text": "1600% Atk / 2000% Atk (Enrage) per hit / area of effect: 5 x 5 cells."
            },
            {
              "level": 7,
              "text": "1680% Atk / 2080% Atk (Enrage) per hit / area of effect: 5 x 5 cells."
            },
            {
              "level": 8,
              "text": "1760% Atk / 2160% Atk (Enrage) per hit / area of effect: 5 x 5 cells."
            },
            {
              "level": 9,
              "text": "1840% Atk / 2240% Atk (Enrage) per hit / area of effect: 7 x 7 cells."
            },
            {
              "level": 10,
              "text": "1920% Atk / 2320% Atk (Enrage) per hit / area of effect: 7 x 7 cells."
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6550.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6550",
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
                "value": "10"
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
                      "area-of-effect": "3x3",
                      "base-damage-atk-per-hit": "1200%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "3x3",
                      "base-damage-atk-per-hit": "1280%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "3x3",
                      "base-damage-atk-per-hit": "1360%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "3x3",
                      "base-damage-atk-per-hit": "1440%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk-per-hit": "1520%"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk-per-hit": "1600%"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk-per-hit": "1680%"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk-per-hit": "1760%"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-atk-per-hit": "1840%"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-atk-per-hit": "1920%"
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
          "id": 6555,
          "imageFile": "6555.png",
          "name": "Sharpen Gust",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "Ranged Physical",
          "target": "Single target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Can only be used while in [Wereraptor] state.\nBlows a sharp gust of wind and feathers at the target, dealing long ranged physical damage to all enemies within the path for 2 hits.\nDeals additional damage when in [Enrage: Raptor] state.\nDeals additional damage depending on the user's base level and DEX.\nCast range: 6 cells.",
          "levelDetails": [
            {
              "level": 1,
              "text": "1000% Atk / 1550% Atk (Enrage) per hit / area of effect: 3 x 7 cells."
            },
            {
              "level": 2,
              "text": "1080% Atk / 1630% Atk (Enrage) per hit / area of effect: 3 x 7 cells."
            },
            {
              "level": 3,
              "text": "1160% Atk / 1710% Atk (Enrage) per hit / area of effect: 3 x 7 cells."
            },
            {
              "level": 4,
              "text": "1240% Atk / 1790% Atk (Enrage) per hit / area of effect: 3 x 7 cells."
            },
            {
              "level": 5,
              "text": "1320% Atk / 1870% Atk (Enrage) per hit / area of effect: 3 x 7 cells."
            },
            {
              "level": 6,
              "text": "1400% Atk / 1950% Atk (Enrage) per hit / area of effect: 3 x 7 cells."
            },
            {
              "level": 7,
              "text": "1480% Atk / 2030% Atk (Enrage) per hit / area of effect: 3 x 7 cells."
            },
            {
              "level": 8,
              "text": "1560% Atk / 2110% Atk (Enrage) per hit / area of effect: 3 x 7 cells."
            },
            {
              "level": 9,
              "text": "1640% Atk / 2190% Atk (Enrage) per hit / area of effect: 3 x 7 cells."
            },
            {
              "level": 10,
              "text": "1720% Atk / 2270% Atk (Enrage) per hit / area of effect: 3 x 7 cells."
            }
          ],
          "fixedCastTime": "0.2 seconds",
          "variableCastTime": "0.3 seconds",
          "castDelay": "0.3 seconds",
          "cooldown": "0.3 seconds",
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6555.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6555",
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
                "label": "Fixed Cast Time",
                "value": "0.2 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "0.3 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.3 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0.3 seconds"
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
                      "area-of-effect": "3x7",
                      "base-damage-atk-per-hit": "1000%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "3x7",
                      "base-damage-atk-per-hit": "1080%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "3x7",
                      "base-damage-atk-per-hit": "1160%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "3x7",
                      "base-damage-atk-per-hit": "1240%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "3x7",
                      "base-damage-atk-per-hit": "1320%"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "area-of-effect": "3x7",
                      "base-damage-atk-per-hit": "1400%"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "area-of-effect": "3x7",
                      "base-damage-atk-per-hit": "1480%"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "area-of-effect": "3x7",
                      "base-damage-atk-per-hit": "1560%"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "area-of-effect": "3x7",
                      "base-damage-atk-per-hit": "1640%"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "area-of-effect": "3x7",
                      "base-damage-atk-per-hit": "1720%"
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
          "id": 6554,
          "imageFile": "6554.png",
          "name": "Wolf Instinct",
          "maxLevel": 10,
          "prerequisiteText": "Claw Wave 3, Iron Howling 3",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Effect only applies when in [Werewolf] state.\nBrings out the user's inner instinct to increase damage to enemies based on their size.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Increases damage to all size enemies (Small: 1%, Medium: 1%, Large: 1%)."
            },
            {
              "level": 2,
              "text": "Increases damage to all size enemies (Small: 2%, Medium: 1%, Large: 1%)."
            },
            {
              "level": 3,
              "text": "Increases damage to all size enemies (Small: 3%, Medium: 3%, Large: 2%)."
            },
            {
              "level": 4,
              "text": "Increases damage to all size enemies (Small: 4%, Medium: 3%, Large: 2%)."
            },
            {
              "level": 5,
              "text": "Increases damage to all size enemies (Small: 5%, Medium: 5%, Large: 3%)."
            },
            {
              "level": 6,
              "text": "Increases damage to all size enemies (Small: 6%, Medium: 5%, Large: 3%)."
            },
            {
              "level": 7,
              "text": "Increases damage to all size enemies (Small: 7%, Medium: 7%, Large: 4%)."
            },
            {
              "level": 8,
              "text": "Increases damage to all size enemies (Small: 8%, Medium: 7%, Large: 4%)."
            },
            {
              "level": 9,
              "text": "Increases damage to all size enemies (Small: 9%, Medium: 8%, Large: 5%)."
            },
            {
              "level": 10,
              "text": "Increases damage to all size enemies (Small: 10%, Medium: 8%, Large: 5%)."
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6554.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6554",
          "tree": {
            "idx": 2,
            "row": 0,
            "col": 2,
            "columns": 9,
            "requirements": [
              {
                "id": 6551,
                "level": 3,
                "name": "Claw Wave",
                "visible": true
              },
              {
                "id": 6553,
                "level": 3,
                "name": "Iron Howling",
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
                    "id": "effect",
                    "label": "Effect"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Increases damage to all size enemies (Small: 1%, Medium: 1%, Large: 1%)"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Increases damage to all size enemies (Small: 2%, Medium: 1%, Large: 1%)"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Increases damage to all size enemies (Small: 3%, Medium: 3%, Large: 2%)"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Increases damage to all size enemies (Small: 4%, Medium: 3%, Large: 2%)"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Increases damage to all size enemies (Small: 5%, Medium: 5%, Large: 3%)"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "Increases damage to all size enemies (Small: 6%, Medium: 5%, Large: 3%)"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "Increases damage to all size enemies (Small: 7%, Medium: 7%, Large: 4%)"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "Increases damage to all size enemies (Small: 8%, Medium: 7%, Large: 4%)"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "Increases damage to all size enemies (Small: 9%, Medium: 8%, Large: 5%)"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "Increases damage to all size enemies (Small: 10%, Medium: 8%, Large: 5%)"
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
          "id": 6561,
          "imageFile": "6561.png",
          "name": "Ice Pillar",
          "maxLevel": 10,
          "prerequisiteText": "Ice Totem 5",
          "group": "Active",
          "type": "Magic",
          "target": "1 cell ground target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Drops a massive ice pillar at the target location, dealing water property magical damage for 2 hits and scattering ice fog.\nThe ice pillar lasts for 7 seconds, scattering ice fog every second to deal water property magical damage to enemies within range and granting the user a water magic buff.\nIf under Truth of Ice state, deals additional damage depending on the user's base level and INT.\nCast range: 7 cells.",
          "levelDetails": [
            {
              "level": 1,
              "text": "720% MATK per hit / 450% MATK (ice fog) / area of effect : 3 x 3 cells / ice fog area of effect : 7 x 7 cells."
            },
            {
              "level": 2,
              "text": "840% MATK per hit / 500% MATK (ice fog) / area of effect : 3 x 3 cells / ice fog area of effect : 7 x 7 cells."
            },
            {
              "level": 3,
              "text": "960% MATK per hit / 550% MATK (ice fog) / area of effect : 3 x 3 cells / ice fog area of effect : 7 x 7 cells."
            },
            {
              "level": 4,
              "text": "1080% MATK per hit / 600% MATK (ice fog) / area of effect : 3 x 3 cells / ice fog area of effect : 7 x 7 cells."
            },
            {
              "level": 5,
              "text": "1200% MATK per hit / 650% MATK (ice fog) / area of effect : 3 x 3 cells / ice fog area of effect : 9 x 9 cells."
            },
            {
              "level": 6,
              "text": "1320% MATK per hit / 700% MATK (ice fog) / area of effect : 3 x 3 cells / ice fog area of effect : 9 x 9 cells."
            },
            {
              "level": 7,
              "text": "1440% MATK per hit / 750% MATK (ice fog) / area of effect : 3 x 3 cells / ice fog area of effect : 9 x 9 cells."
            },
            {
              "level": 8,
              "text": "1560% MATK per hit / 800% MATK (ice fog) / area of effect : 5 x 5 cells / ice fog area of effect : 9 x 9 cells."
            },
            {
              "level": 9,
              "text": "1680% MATK per hit / 850% MATK (ice fog) / area of effect : 5 x 5 cells / ice fog area of effect : 9 x 9 cells."
            },
            {
              "level": 10,
              "text": "1800% MATK per hit / 900% MATK (ice fog) / area of effect : 5 x 5 cells / ice fog area of effect : 9 x 9 cells."
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6561.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6561",
          "tree": {
            "idx": 4,
            "row": 0,
            "col": 4,
            "columns": 9,
            "requirements": [
              {
                "id": 6539,
                "level": 5,
                "name": "Ice Totem",
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
                "value": "1 cell ground target"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "base-damage-matk-per-hit",
                    "label": "Base Damage (MATK per Hit)"
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
                      "base-damage-matk-per-hit": "720%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "3x3",
                      "base-damage-matk-per-hit": "840%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "3x3",
                      "base-damage-matk-per-hit": "960%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "3x3",
                      "base-damage-matk-per-hit": "1080%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "3x3",
                      "base-damage-matk-per-hit": "1200%"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "area-of-effect": "3x3",
                      "base-damage-matk-per-hit": "1320%"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "area-of-effect": "3x3",
                      "base-damage-matk-per-hit": "1440%"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk-per-hit": "1560%"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk-per-hit": "1680%"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk-per-hit": "1800%"
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
          "id": 6563,
          "imageFile": "6563.png",
          "name": "Thundering Focus",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "Magic",
          "target": "Instant Casting",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Releases lightning around the user, dealing wind property magical damage for 2 time and gaining 1 stack of Charge effect.\nIf the skill is used while Overcharged, an enhanced version is used, increasing the number of hit to 3 hits.\nIf under Truth of Wind state, deals additional damage depending on the user's base level and INT.",
          "levelDetails": [
            {
              "level": 1,
              "text": "840% MATK / 1420% MATK (enhanced) per hit / area of effect : 5 x 5 cells."
            },
            {
              "level": 2,
              "text": "910% MATK / 1490% MATK (enhanced) per hit / area of effect : 5 x 5 cells."
            },
            {
              "level": 3,
              "text": "980% MATK / 1560% MATK (enhanced) per hit / area of effect : 5 x 5 cells."
            },
            {
              "level": 4,
              "text": "1050% MATK / 1630% MATK (enhanced) per hit / area of effect : 5 x 5 cells."
            },
            {
              "level": 5,
              "text": "1120% MATK / 1700% MATK (enhanced) per hit / area of effect : 5 x 5 cells."
            },
            {
              "level": 6,
              "text": "1190% MATK / 1770% MATK (enhanced) per hit / area of effect : 5 x 5 cells."
            },
            {
              "level": 7,
              "text": "1260% MATK / 1840% MATK (enhanced) per hit / area of effect : 5 x 5 cells."
            },
            {
              "level": 8,
              "text": "1330% MATK / 1910% MATK (enhanced) per hit / area of effect : 5 x 5 cells."
            },
            {
              "level": 9,
              "text": "1410% MATK / 1980% MATK (enhanced) per hit / area of effect : 7 x 7 cells."
            },
            {
              "level": 10,
              "text": "1470% MATK / 2050% MATK (enhanced) per hit / area of effect : 7 x 7 cells."
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "0.7 seconds",
          "castDelay": "0.4 seconds",
          "cooldown": "0.3 seconds",
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6563.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6563",
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
                "label": "Fixed Cast Time",
                "value": "1 second"
              },
              {
                "label": "Variable Cast Time",
                "value": "0.7 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.4 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0.3 seconds"
              },
              {
                "label": "Target",
                "value": "Instant Casting"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "base-damage-matk-per-hit",
                    "label": "Base Damage (MATK per Hit)"
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
                      "base-damage-matk-per-hit": "840%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk-per-hit": "910%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk-per-hit": "980%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk-per-hit": "1050%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk-per-hit": "1120%"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk-per-hit": "1190%"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk-per-hit": "1260%"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk-per-hit": "1330%"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk-per-hit": "1410%"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk-per-hit": "1470%"
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
          "id": 6571,
          "imageFile": "6571.png",
          "name": "Earth Bud",
          "maxLevel": 5,
          "prerequisiteText": "Around Flower 5",
          "group": "Passive",
          "type": "Magic",
          "target": "Instant Casting",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Effect only applies when not transformed.\nBy awakening the flow of the earth, increasing MaxHP of the user and ability of gaining Growth stack.\nGround Bloom skill is enhanced based on Earth Bud skill level.\nGround Bloom\nThis skill is activated when additional Growth stack is acquired while Growth effect is completed.\nDeals earth property magical damage to enemies within range for 3 hits and recovers a portion of HP.\nIf Ground Bloom is used, the accumulated Growth effect is removed.\nIf under Truth of Earth state, deals additional damage depending on the user's base level and INT.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MaxHP + 2%"
            },
            {
              "level": 2,
              "text": "MaxHP + 4%"
            },
            {
              "level": 3,
              "text": "MaxHP + 6%"
            },
            {
              "level": 4,
              "text": "MaxHP + 8%"
            },
            {
              "level": 5,
              "text": "MaxHP + 10%"
            },
            {
              "level": 1,
              "text": "6000% MATK per hit / recovers 3% of MaxHP / area of effect : 11 x 11 cells."
            },
            {
              "level": 2,
              "text": "8000% MATK per hit / recovers 6% of MaxHP / area of effect : 11 x 11 cells."
            },
            {
              "level": 3,
              "text": "10000% MATK per hit / recovers 9% of MaxHP / area of effect : 11 x 11 cells."
            },
            {
              "level": 4,
              "text": "12000% MATK per hit / recovers 12% of MaxHP / area of effect : 11 x 11 cells."
            },
            {
              "level": 5,
              "text": "14000% MATK per hit / recovers 15% of MaxHP / area of effect : 11 x 11 cells."
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6571.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6571",
          "tree": {
            "idx": 6,
            "row": 0,
            "col": 6,
            "columns": 9,
            "requirements": [
              {
                "id": 6546,
                "level": 5,
                "name": "Around Flower",
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
              },
              {
                "label": "Target",
                "value": "Instant Casting"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "base-damage-matk-per-hit",
                    "label": "Base Damage (MATK per Hit)"
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
                      "area-of-effect": "11x11",
                      "base-damage-matk-per-hit": "6000%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "11x11",
                      "base-damage-matk-per-hit": "8000%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "11x11",
                      "base-damage-matk-per-hit": "10000%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "11x11",
                      "base-damage-matk-per-hit": "12000%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "11x11",
                      "base-damage-matk-per-hit": "14000%"
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
          "id": 6549,
          "imageFile": "6549.png",
          "name": "Nasty Slash",
          "maxLevel": 5,
          "prerequisiteText": "Double Slash 3",
          "group": "Active",
          "type": "Melee physical",
          "target": "Single target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Can only be used while in [Werewolf] state.\nDeals melee physical damage to the target and surrounding enemies for 2 hits with a vicious blow.\nAfter using the skill, the user is moved 5 cells backward.\nDeals additional damage when in [Enrage : Wolf] state.\nDeals additional damage depending on the user's base level and STR.\nCast range: 3 cells.",
          "levelDetails": [
            {
              "level": 1,
              "text": "1150% ATK / 1450% ATK (Enrage) per hit / area of effect : 3 x 3 cells."
            },
            {
              "level": 2,
              "text": "1200% ATK / 1500% ATK (Enrage) per hit / area of effect : 3 x 3 cells."
            },
            {
              "level": 3,
              "text": "1250% ATK / 1550% ATK (Enrage) per hit / area of effect : 3 x 3 cells."
            },
            {
              "level": 4,
              "text": "1300% ATK / 1600% ATK (Enrage) per hit / area of effect : 5 x 5 cells."
            },
            {
              "level": 5,
              "text": "1350% ATK / 1650% ATK (Enrage) per hit / area of effect : 5 x 5 cells."
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6549.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6549",
          "tree": {
            "idx": 7,
            "row": 0,
            "col": 7,
            "columns": 9,
            "requirements": [
              {
                "id": 6550,
                "level": 3,
                "name": "Double Slash",
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
                      "area-of-effect": "3x3",
                      "base-damage-atk-per-hit": "1150%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "3x3",
                      "base-damage-atk-per-hit": "1200%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "3x3",
                      "base-damage-atk-per-hit": "1250%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk-per-hit": "1300%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk-per-hit": "1350%"
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
          "id": 6556,
          "imageFile": "6556.png",
          "name": "Sharpen Hail",
          "maxLevel": 10,
          "prerequisiteText": "Sharpen Gust 5",
          "group": "Active",
          "type": "Ranged Physical",
          "target": "Single target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Can only be used while in [Wereraptor] state.\nCalls down a hail of sharp feathers on the target and all surrounding enemies, dealing long ranged physical damage for 5 hits.\nDeals additional damage when in [Enrage : Raptor] state.\nDeals additional damage depending on the user's base level and DEX.\nCast range: 7 cells.",
          "levelDetails": [
            {
              "level": 1,
              "text": "640% ATK / 940% ATK (Enrage) per hit / area of effect : 5 x 5 cells."
            },
            {
              "level": 2,
              "text": "680% ATK / 980% ATK (Enrage) per hit / area of effect : 5 x 5 cells."
            },
            {
              "level": 3,
              "text": "720% ATK / 1020% ATK (Enrage) per hit / area of effect : 5 x 5 cells."
            },
            {
              "level": 4,
              "text": "760% ATK / 1060% ATK (Enrage) per hit / area of effect : 5 x 5 cells."
            },
            {
              "level": 5,
              "text": "800% ATK / 1100% ATK (Enrage) per hit / area of effect : 7 x 7 cells."
            },
            {
              "level": 6,
              "text": "840% ATK / 1140% ATK (Enrage) per hit / area of effect : 7 x 7 cells."
            },
            {
              "level": 7,
              "text": "880% ATK / 1180% ATK (Enrage) per hit / area of effect : 7 x 7 cells."
            },
            {
              "level": 8,
              "text": "920% ATK / 1220% ATK (Enrage) per hit / area of effect : 9 x 9 cells."
            },
            {
              "level": 9,
              "text": "960% ATK / 1260% ATK (Enrage) per hit / area of effect : 9 x 9 cells."
            },
            {
              "level": 10,
              "text": "1000% ATK / 1300% ATK (Enrage) per hit / area of effect : 9 x 9 cells."
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "1 second",
          "castDelay": "0.3 seconds",
          "cooldown": "3 seconds",
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6556.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6556",
          "tree": {
            "idx": 8,
            "row": 0,
            "col": 8,
            "columns": 9,
            "requirements": [
              {
                "id": 6555,
                "level": 5,
                "name": "Sharpen Gust",
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
                "value": "1 second"
              },
              {
                "label": "Cast Delay",
                "value": "0.3 seconds"
              },
              {
                "label": "Cooldown",
                "value": "3 seconds"
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
                      "base-damage-atk-per-hit": "640%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk-per-hit": "680%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk-per-hit": "720%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk-per-hit": "760%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-atk-per-hit": "800%"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-atk-per-hit": "840%"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-atk-per-hit": "880%"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "area-of-effect": "9x9",
                      "base-damage-atk-per-hit": "920%"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "area-of-effect": "9x9",
                      "base-damage-atk-per-hit": "960%"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "area-of-effect": "9x9",
                      "base-damage-atk-per-hit": "1000%"
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
          "id": 6560,
          "imageFile": "6560.png",
          "name": "Raptorial Instinct",
          "maxLevel": 10,
          "prerequisiteText": "Feather Sprinkle 3, Typhoon Wing 3",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Effect only applies when in [Wereraptor] state.\nBrings out the user's inner instinct to increase damage to enemies based on their size.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Increases damage to all size enemies (Small : 1%, Medium : 1%, Large : 1%)."
            },
            {
              "level": 2,
              "text": "Increases damage to all size enemies (Small : 1%, Medium : 1%, Large : 2%)."
            },
            {
              "level": 3,
              "text": "Increases damage to all size enemies (Small : 2%, Medium : 3%, Large : 3%)."
            },
            {
              "level": 4,
              "text": "Increases damage to all size enemies (Small : 2%, Medium : 3%, Large : 4%)."
            },
            {
              "level": 5,
              "text": "Increases damage to all size enemies (Small : 3%, Medium : 5%, Large : 5%)."
            },
            {
              "level": 6,
              "text": "Increases damage to all size enemies (Small : 3%, Medium : 5%, Large : 6%)."
            },
            {
              "level": 7,
              "text": "Increases damage to all size enemies (Small : 4%, Medium : 7%, Large : 7%)."
            },
            {
              "level": 8,
              "text": "Increases damage to all size enemies (Small : 4%, Medium : 7%, Large : 8%)."
            },
            {
              "level": 9,
              "text": "Increases damage to all size enemies (Small : 5%, Medium : 8%, Large : 9%)."
            },
            {
              "level": 10,
              "text": "Increases damage to all size enemies (Small : 5%, Medium : 8%, Large : 10%)."
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6560.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6560",
          "tree": {
            "idx": 9,
            "row": 1,
            "col": 0,
            "columns": 9,
            "requirements": [
              {
                "id": 6557,
                "level": 3,
                "name": "Typhoon Wing",
                "visible": true
              },
              {
                "id": 6558,
                "level": 3,
                "name": "Feather Sprinkle",
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
                    "id": "effect",
                    "label": "Effect"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Increases damage to all size enemies (Small : 1%, Medium : 1%, Large : 1%)"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Increases damage to all size enemies (Small : 1%, Medium : 1%, Large : 2%)"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Increases damage to all size enemies (Small : 2%, Medium : 3%, Large : 3%)"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Increases damage to all size enemies (Small : 2%, Medium : 3%, Large : 4%)"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Increases damage to all size enemies (Small : 3%, Medium : 5%, Large : 5%)"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "Increases damage to all size enemies (Small : 3%, Medium : 5%, Large : 6%)"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "Increases damage to all size enemies (Small : 4%, Medium : 7%, Large : 7%)"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "Increases damage to all size enemies (Small : 4%, Medium : 7%, Large : 8%)"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "Increases damage to all size enemies (Small : 5%, Medium : 8%, Large : 9%)"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "Increases damage to all size enemies (Small : 5%, Medium : 8%, Large : 10%)"
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
          "id": 6562,
          "imageFile": "6562.png",
          "name": "Ice Splash",
          "maxLevel": 10,
          "prerequisiteText": "Ice Cloud 5",
          "group": "Active",
          "type": "Magic",
          "target": "Single target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Creates a sharp blade of ice from beneath the target, dealing water property magical damage to the target and surrounding enemies for 3 hits.\nIf under Truth of Ice state, deals additional damage depending on the user's base level and INT.\nCast range: 7 cells.",
          "levelDetails": [
            {
              "level": 1,
              "text": "1140% Matk per hit / area of effect: 5 x 5 cells."
            },
            {
              "level": 2,
              "text": "1210% Matk per hit / area of effect: 5 x 5 cells."
            },
            {
              "level": 3,
              "text": "1280% Matk per hit / area of effect: 5 x 5 cells."
            },
            {
              "level": 4,
              "text": "1350% Matk per hit / area of effect: 5 x 5 cells."
            },
            {
              "level": 5,
              "text": "1420% Matk per hit / area of effect: 5 x 5 cells."
            },
            {
              "level": 6,
              "text": "1490% Matk per hit / area of effect: 5 x 5 cells."
            },
            {
              "level": 7,
              "text": "1560% Matk per hit / area of effect: 7 x 7 cells."
            },
            {
              "level": 8,
              "text": "1630% Matk per hit / area of effect: 7 x 7 cells."
            },
            {
              "level": 9,
              "text": "1700% Matk per hit / area of effect: 7 x 7 cells."
            },
            {
              "level": 10,
              "text": "1770% Matk per hit / area of effect: 7 x 7 cells."
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6562.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6562",
          "tree": {
            "idx": 11,
            "row": 1,
            "col": 2,
            "columns": 9,
            "requirements": [
              {
                "id": 6540,
                "level": 5,
                "name": "Ice Cloud",
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
                "value": "Single target"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "base-damage-matk-per-hit",
                    "label": "Base Damage (MATK per Hit)"
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
                      "base-damage-matk-per-hit": "1140%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk-per-hit": "1210%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk-per-hit": "1280%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk-per-hit": "1350%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk-per-hit": "1420%"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk-per-hit": "1490%"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk-per-hit": "1560%"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk-per-hit": "1630%"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk-per-hit": "1700%"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk-per-hit": "1770%"
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
          "id": 6565,
          "imageFile": "6565.png",
          "name": "Thundering Orb",
          "maxLevel": 10,
          "prerequisiteText": "Wind Bomb 5, Thundering Focus 1",
          "group": "Active",
          "type": "Magic",
          "target": "1 cell ground target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Throws a spherical lightning bolt at a target location, dealing wind property magical damage to the target and surrounding enemies for 3 hits and gaining 1 stack of Charge effect.\nIf the skill is used while Overcharged, an enhanced version is used, increasing the number of hit to 4 hits.\nIf under Truth of Wind state, deals additional damage depending on the user's base level and INT.\nCast range: 7 cells.",
          "levelDetails": [
            {
              "level": 1,
              "text": "1400% Matk / 1750% Matk (enhanced) per hit / area of effect: 7 x 7 cells."
            },
            {
              "level": 2,
              "text": "1470% Matk / 1850% Matk (enhanced) per hit / area of effect: 7 x 7 cells."
            },
            {
              "level": 3,
              "text": "1540% Matk / 1950% Matk (enhanced) per hit / area of effect: 7 x 7 cells."
            },
            {
              "level": 4,
              "text": "1610% Matk / 2050% Matk (enhanced) per hit / area of effect: 7 x 7 cells."
            },
            {
              "level": 5,
              "text": "1680% Matk / 2150% Matk (enhanced) per hit / area of effect: 7 x 7 cells."
            },
            {
              "level": 6,
              "text": "1750% Matk / 2250% Matk (enhanced) per hit / area of effect: 7 x 7 cells."
            },
            {
              "level": 7,
              "text": "1820% Matk / 2350% Matk (enhanced) per hit / area of effect: 7 x 7 cells."
            },
            {
              "level": 8,
              "text": "1890% Matk / 2450% Matk (enhanced) per hit / area of effect: 7 x 7 cells."
            },
            {
              "level": 9,
              "text": "1960% Matk / 2550% Matk (enhanced) per hit / area of effect: 7 x 7 cells."
            },
            {
              "level": 10,
              "text": "2030% Matk / 2650% Matk (enhanced) per hit / area of effect: 7 x 7 cells."
            }
          ],
          "fixedCastTime": "1.2 seconds",
          "variableCastTime": "1.2 seconds",
          "castDelay": "0.4 seconds",
          "cooldown": "0.3 seconds",
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6565.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6565",
          "tree": {
            "idx": 12,
            "row": 1,
            "col": 3,
            "columns": 9,
            "requirements": [
              {
                "id": 6543,
                "level": 5,
                "name": "Wind Bomb",
                "visible": false
              },
              {
                "id": 6563,
                "level": 1,
                "name": "Thundering Focus",
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
                "value": "1.2 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "1.2 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.4 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0.3 seconds"
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
                    "id": "base-damage-matk-per-hit",
                    "label": "Base Damage (MATK per Hit)"
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
                      "base-damage-matk-per-hit": "1400%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk-per-hit": "1470%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk-per-hit": "1540%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk-per-hit": "1610%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk-per-hit": "1680%"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk-per-hit": "1750%"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk-per-hit": "1820%"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk-per-hit": "1890%"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk-per-hit": "1960%"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk-per-hit": "2030%"
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
          "id": 6569,
          "imageFile": "6569.png",
          "name": "Earth Drill",
          "maxLevel": 10,
          "prerequisiteText": "Earth Bud 1",
          "group": "Active",
          "type": "Magic",
          "target": "Single target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Causes sharp thorn to sprout from the feet of the target, dealing earth property magical damage and gaining 1 stack of Growth effect.\nIf the skill is used while Growth effect is complete, Ground Bloom skill will be activated.\nIf under Truth of Earth state, deals additional damage depending on the user's base level and INT.\nCast range: 7 cells.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Matk 1510%"
            },
            {
              "level": 2,
              "text": "Matk 1570%"
            },
            {
              "level": 3,
              "text": "Matk 1630%"
            },
            {
              "level": 4,
              "text": "Matk 1690%"
            },
            {
              "level": 5,
              "text": "Matk 1750%"
            },
            {
              "level": 6,
              "text": "Matk 1810%"
            },
            {
              "level": 7,
              "text": "Matk 1870%"
            },
            {
              "level": 8,
              "text": "Matk 1930%"
            },
            {
              "level": 9,
              "text": "Matk 1990%"
            },
            {
              "level": 10,
              "text": "Matk 2050%"
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "1 second",
          "castDelay": "0.2 seconds",
          "cooldown": "0.3 seconds",
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6569.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6569",
          "tree": {
            "idx": 13,
            "row": 1,
            "col": 4,
            "columns": 9,
            "requirements": [
              {
                "id": 6571,
                "level": 1,
                "name": "Earth Bud",
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
                "value": "0.2 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0.3 seconds"
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
                    "id": "base-damage-matk",
                    "label": "Base Damage (MATK)"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "base-damage-matk": "1510%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-matk": "1570%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-matk": "1630%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-matk": "1690%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-matk": "1750%"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "base-damage-matk": "1810%"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "base-damage-matk": "1870%"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "base-damage-matk": "1930%"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "base-damage-matk": "1990%"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "base-damage-matk": "2050%"
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
          "id": 6551,
          "imageFile": "6551.png",
          "name": "Claw Wave",
          "maxLevel": 10,
          "prerequisiteText": "Nasty Slash 3",
          "group": "Active",
          "type": "Melee physical",
          "target": "1 cell ground target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Can only be used while in [Werewolf] state.\nCreates a sharp wave at the target location, dealing melee physical damage to enemies within range for 3 hits.\nDeals additional damage when in [Enrage : Wolf] state.\nDeals additional damage depending on the user's base level and STR.\nCast range: 7 cells.",
          "levelDetails": [
            {
              "level": 1,
              "text": "880% ATK / 1200% ATK (Enrage) per hit / area of effect : 3 x 3 cells."
            },
            {
              "level": 2,
              "text": "950% ATK / 1270% ATK (Enrage) per hit / area of effect : 3 x 3 cells."
            },
            {
              "level": 3,
              "text": "1020% ATK / 1340% ATK (Enrage) per hit / area of effect : 3 x 3 cells."
            },
            {
              "level": 4,
              "text": "1090% ATK / 1410% ATK (Enrage) per hit / area of effect : 3 x 3 cells."
            },
            {
              "level": 5,
              "text": "1160% ATK / 1480% ATK (Enrage) per hit / area of effect : 5 x 5 cells."
            },
            {
              "level": 6,
              "text": "1230% ATK / 1550% ATK (Enrage) per hit / area of effect : 5 x 5 cells."
            },
            {
              "level": 7,
              "text": "1300% ATK / 1620% ATK (Enrage) per hit / area of effect : 5 x 5 cells."
            },
            {
              "level": 8,
              "text": "1370% ATK / 1690% ATK (Enrage) per hit / area of effect : 5 x 5 cells."
            },
            {
              "level": 9,
              "text": "1440% ATK / 1760% ATK (Enrage) per hit / area of effect : 7 x 7 cells."
            },
            {
              "level": 10,
              "text": "1510% ATK / 1830% ATK (Enrage) per hit / area of effect : 7 x 7 cells."
            }
          ],
          "fixedCastTime": "0.1 seconds",
          "variableCastTime": "0.4 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "3 seconds",
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6551.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6551",
          "tree": {
            "idx": 14,
            "row": 1,
            "col": 5,
            "columns": 9,
            "requirements": [
              {
                "id": 6549,
                "level": 3,
                "name": "Nasty Slash",
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
                "value": "0.5 seconds"
              },
              {
                "label": "Cooldown",
                "value": "3 seconds"
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
                      "area-of-effect": "3x3",
                      "base-damage-atk-per-hit": "880%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "3x3",
                      "base-damage-atk-per-hit": "950%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "3x3",
                      "base-damage-atk-per-hit": "1020%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "3x3",
                      "base-damage-atk-per-hit": "1090%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk-per-hit": "1160%"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk-per-hit": "1230%"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk-per-hit": "1300%"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk-per-hit": "1370%"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-atk-per-hit": "1440%"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-atk-per-hit": "1510%"
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
          "id": 6558,
          "imageFile": "6558.png",
          "name": "Feather Sprinkle",
          "maxLevel": 5,
          "prerequisiteText": "Shooting Feather 5, Sharpen Hail 3",
          "group": "Active",
          "type": "Ranged Physical",
          "target": "Instant Casting",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Can only be used while in [Wereraptor] state.\nShoots countless feathers around, dealing long ranged physical damage to all enemies within range for 3 hits.\nDeals additional damage when in [Enrage : Raptor] state.\nDeals additional damage depending on the user's base level and DEX.",
          "levelDetails": [
            {
              "level": 1,
              "text": "1100% ATK / 1490% ATK (Enrage) per hit / area of effect : 5 x 5 cells."
            },
            {
              "level": 2,
              "text": "1190% ATK / 1580% ATK (Enrage) per hit / area of effect : 5 x 5 cells."
            },
            {
              "level": 3,
              "text": "1280% ATK / 1670% ATK (Enrage) per hit / area of effect : 5 x 5 cells."
            },
            {
              "level": 4,
              "text": "1370% ATK / 1760% ATK (Enrage) per hit / area of effect : 7 x 7 cells."
            },
            {
              "level": 5,
              "text": "1460% ATK / 1850% ATK (Enrage) per hit / area of effect : 7 x 7 cells."
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6558.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6558",
          "tree": {
            "idx": 15,
            "row": 1,
            "col": 6,
            "columns": 9,
            "requirements": [
              {
                "id": 6533,
                "level": 5,
                "name": "Shooting Feather",
                "visible": false
              },
              {
                "id": 6556,
                "level": 3,
                "name": "Sharpen Hail",
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
                "value": "Instant Casting"
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
                      "base-damage-atk-per-hit": "1100%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk-per-hit": "1190%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk-per-hit": "1280%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-atk-per-hit": "1370%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-atk-per-hit": "1460%"
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
          "id": 6567,
          "imageFile": "6567.png",
          "name": "Thundering Call",
          "maxLevel": 10,
          "prerequisiteText": "Thundering Focus 5, Thundering Orb 5",
          "group": "Active",
          "type": "Magic",
          "target": "Single target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Calls down a powerful lightning bolt on the target, dealing wind property magical damage to the target and surrounding enemies for 3 hits and gaining 1 stack of Charge effect.\nIf the skill is used while Overcharged, an enhanced version is used.\nIf under Truth of Wind state, deals additional damage depending on the user's base level and INT.\nCast range: 7 cells.",
          "levelDetails": [
            {
              "level": 1,
              "text": "5200% MATK / 9500% MATK (enhanced) per hit / area of effect : 3 x 3 cells."
            },
            {
              "level": 2,
              "text": "5400% MATK / 10000% MATK (enhanced) per hit / area of effect : 3 x 3 cells."
            },
            {
              "level": 3,
              "text": "5600% MATK / 10500% MATK (enhanced) per hit / area of effect : 3 x 3 cells."
            },
            {
              "level": 4,
              "text": "5800% MATK / 11000% MATK (enhanced) per hit / area of effect : 3 x 3 cells."
            },
            {
              "level": 5,
              "text": "6000% MATK / 11500% MATK (enhanced) per hit / area of effect : 3 x 3 cells."
            },
            {
              "level": 6,
              "text": "6200% MATK / 12000% MATK (enhanced) per hit / area of effect : 3 x 3 cells."
            },
            {
              "level": 7,
              "text": "6400% MATK / 12500% MATK (enhanced) per hit / area of effect : 5 x 5 cells."
            },
            {
              "level": 8,
              "text": "6600% MATK / 13000% MATK (enhanced) per hit / area of effect : 5 x 5 cells."
            },
            {
              "level": 9,
              "text": "6800% MATK / 13500% MATK (enhanced) per hit / area of effect : 5 x 5 cells."
            },
            {
              "level": 10,
              "text": "7000% MATK / 14000% MATK (enhanced) per hit / area of effect : 5 x 5 cells."
            }
          ],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "2 seconds",
          "castDelay": "0.4 seconds",
          "cooldown": "3 seconds",
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6567.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6567",
          "tree": {
            "idx": 19,
            "row": 2,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 6563,
                "level": 5,
                "name": "Thundering Focus",
                "visible": true
              },
              {
                "id": 6565,
                "level": 5,
                "name": "Thundering Orb",
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
                "value": "2 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.4 seconds"
              },
              {
                "label": "Cooldown",
                "value": "3 seconds"
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
                    "id": "base-damage-matk-per-hit",
                    "label": "Base Damage (MATK per Hit)"
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
                      "base-damage-matk-per-hit": "5200%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "3x3",
                      "base-damage-matk-per-hit": "5400%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "3x3",
                      "base-damage-matk-per-hit": "5600%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "3x3",
                      "base-damage-matk-per-hit": "5800%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "3x3",
                      "base-damage-matk-per-hit": "6000%"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "area-of-effect": "3x3",
                      "base-damage-matk-per-hit": "6200%"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk-per-hit": "6400%"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk-per-hit": "6600%"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk-per-hit": "6800%"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk-per-hit": "7000%"
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
          "id": 6570,
          "imageFile": "6570.png",
          "name": "Earth Stamp",
          "maxLevel": 10,
          "prerequisiteText": "Earth Drill 5",
          "group": "Active",
          "type": "Magic",
          "target": "1 cell ground target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Overturns the ground in the target location, inflicting earth property magical damage to the target and surrounding enemies for 3 hits and gaining 1 stack of Growth effect.\nIf the skill is used while Growth effect is complete, Ground Bloom skill will be activated.\nIf under Truth of Earth state, deals additional damage depending on the user's base level and INT.\nCast range: 7 cells.",
          "levelDetails": [
            {
              "level": 1,
              "text": "1000% Matk per hit / area of effect: 5 x 5 cells."
            },
            {
              "level": 2,
              "text": "1070% Matk per hit / area of effect: 5 x 5 cells."
            },
            {
              "level": 3,
              "text": "1140% Matk per hit / area of effect: 5 x 5 cells."
            },
            {
              "level": 4,
              "text": "1210% Matk per hit / area of effect: 5 x 5 cells."
            },
            {
              "level": 5,
              "text": "1280% Matk per hit / area of effect: 5 x 5 cells."
            },
            {
              "level": 6,
              "text": "1350% Matk per hit / area of effect: 5 x 5 cells."
            },
            {
              "level": 7,
              "text": "1420% Matk per hit / area of effect: 5 x 5 cells."
            },
            {
              "level": 8,
              "text": "1490% Matk per hit / area of effect: 7 x 7 cells."
            },
            {
              "level": 9,
              "text": "1560% Matk per hit / area of effect: 7 x 7 cells."
            },
            {
              "level": 10,
              "text": "1630% Matk per hit / area of effect: 7 x 7 cells."
            }
          ],
          "fixedCastTime": "1.2 seconds",
          "variableCastTime": "1 second",
          "castDelay": "0.2 seconds",
          "cooldown": "0.3 seconds",
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6570.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6570",
          "tree": {
            "idx": 20,
            "row": 2,
            "col": 2,
            "columns": 9,
            "requirements": [
              {
                "id": 6569,
                "level": 5,
                "name": "Earth Drill",
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
                "value": "1.2 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "1 second"
              },
              {
                "label": "Cast Delay",
                "value": "0.2 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0.3 seconds"
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
                    "id": "base-damage-matk-per-hit",
                    "label": "Base Damage (MATK per Hit)"
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
                      "base-damage-matk-per-hit": "1000%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk-per-hit": "1070%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk-per-hit": "1140%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk-per-hit": "1210%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk-per-hit": "1280%"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk-per-hit": "1350%"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk-per-hit": "1420%"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk-per-hit": "1490%"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk-per-hit": "1560%"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk-per-hit": "1630%"
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
          "id": 6552,
          "imageFile": "6552.png",
          "name": "Chop Chop",
          "maxLevel": 10,
          "prerequisiteText": "Double Slash 5, Claw Wave 5",
          "group": "Active",
          "type": "Melee physical",
          "target": "Instant Casting",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Can only be used while in [Werewolf] state.\nSpins and slashes the surrounding area, dealing melee physical damage to all enemies around the user.\nDeals additional damage when in [Enrage : Wolf] state.\nDeals additional damage depending on the user's base level and STR.\n*Activates while holding down the skill shortcut key.",
          "levelDetails": [
            {
              "level": 1,
              "text": "740% ATK / 1140% ATK (Enrage) / area of effect : diamond shape (2 cells radius)."
            },
            {
              "level": 2,
              "text": "820% ATK / 1220% ATK (Enrage) / area of effect : diamond shape (2 cells radius)."
            },
            {
              "level": 3,
              "text": "900% ATK / 1300% ATK (Enrage) / area of effect : diamond shape (2 cells radius)."
            },
            {
              "level": 4,
              "text": "980% ATK / 1380% ATK (Enrage) / area of effect : diamond shape (2 cells radius)."
            },
            {
              "level": 5,
              "text": "1060% ATK / 1460% ATK (Enrage) / area of effect : diamond shape (3 cells radius)."
            },
            {
              "level": 6,
              "text": "1140% ATK / 1540% ATK (Enrage) / area of effect : diamond shape (3 cells radius)."
            },
            {
              "level": 7,
              "text": "1220% ATK / 1620% ATK (Enrage) / area of effect : diamond shape (3 cells radius)."
            },
            {
              "level": 8,
              "text": "1300% ATK / 1700% ATK (Enrage) / area of effect : diamond shape (4 cells radius)."
            },
            {
              "level": 9,
              "text": "1380% ATK / 1780% ATK (Enrage) / area of effect : diamond shape (4 cells radius)."
            },
            {
              "level": 10,
              "text": "1460% ATK / 1860% ATK (Enrage) / area of effect : diamond shape (4 cells radius)."
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6552.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6552",
          "tree": {
            "idx": 21,
            "row": 2,
            "col": 3,
            "columns": 9,
            "requirements": [
              {
                "id": 6550,
                "level": 5,
                "name": "Double Slash",
                "visible": true
              },
              {
                "id": 6551,
                "level": 5,
                "name": "Claw Wave",
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
                "value": "Instant Casting"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "base-damage-atk",
                    "label": "Base Damage (ATK)"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "base-damage-atk": "740%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-atk": "820%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-atk": "900%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-atk": "980%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-atk": "1060%"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "base-damage-atk": "1140%"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "base-damage-atk": "1220%"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "base-damage-atk": "1300%"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "base-damage-atk": "1380%"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "base-damage-atk": "1460%"
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
          "id": 6557,
          "imageFile": "6557.png",
          "name": "Typhoon Wing",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "Ranged Physical",
          "target": "1 cell ground target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Can only be used while in [Wereraptor] state.\nCreates a small typhoon at the target location, dealing long ranged physical damage to the enemies within range for 3 hits and knocking them back.\nDeals additional damage when in [Enrage : Raptor] state.\nDeals additional damage depending on the user's base level and DEX.",
          "levelDetails": [
            {
              "level": 1,
              "text": "600% ATK / 900% ATK (Enrage) per hit / cast ranged : 5 cells / area of effect : 5 x 5 cells / knock-back : 2 cells."
            },
            {
              "level": 2,
              "text": "680% ATK / 980% ATK (Enrage) per hit / cast ranged : 5 cells / area of effect : 5 x 5 cells / knock-back : 2 cells."
            },
            {
              "level": 3,
              "text": "760% ATK / 1060% ATK (Enrage) per hit / cast ranged : 5 cells / area of effect : 5 x 5 cells / knock-back : 2 cells."
            },
            {
              "level": 4,
              "text": "840% ATK / 1140% ATK (Enrage) per hit / cast ranged : 5 cells / area of effect : 5 x 5 cells / knock-back : 2 cells."
            },
            {
              "level": 5,
              "text": "920% ATK / 1220% ATK (Enrage) per hit / cast ranged : 5 cells / area of effect : 5 x 5 cells / knock-back : 3 cells."
            },
            {
              "level": 6,
              "text": "1000% ATK / 1340% ATK (Enrage) per hit / cast ranged : 5 cells / area of effect : 7 x 7 cells / knock-back : 3 cells."
            },
            {
              "level": 7,
              "text": "1080% ATK / 1380% ATK (Enrage) per hit / cast ranged : 5 cells / area of effect : 7 x 7 cells / knock-back : 3 cells."
            },
            {
              "level": 8,
              "text": "1160% ATK / 1460% ATK (Enrage) per hit / cast ranged : 6 cells / area of effect : 7 x 7 cells / knock-back : 4 cells."
            },
            {
              "level": 9,
              "text": "1240% ATK / 1540% ATK (Enrage) per hit / cast ranged : 6 cells / area of effect : 7 x 7 cells / knock-back : 4 cells."
            },
            {
              "level": 10,
              "text": "1320% ATK / 1620% ATK (Enrage) per hit / cast ranged : 6 cells / area of effect : 7 x 7 cells / knock-back : 4 cells."
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6557.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6557",
          "tree": {
            "idx": 22,
            "row": 2,
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
                "value": "1 cell ground target"
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
                      "base-damage-atk-per-hit": "600%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk-per-hit": "680%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk-per-hit": "760%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk-per-hit": "840%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk-per-hit": "920%"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-atk-per-hit": "1000%"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-atk-per-hit": "1080%"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-atk-per-hit": "1160%"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-atk-per-hit": "1240%"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-atk-per-hit": "1320%"
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
          "id": 6572,
          "imageFile": "6572.png",
          "name": "Nature Vigour",
          "maxLevel": 5,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Gains vitality from nature, increasing MaxSP and SP natural recovery.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MaxSP + 2% / increases SP natural recovery by 10%."
            },
            {
              "level": 2,
              "text": "MaxSP + 4% / increases SP natural recovery by 20%."
            },
            {
              "level": 3,
              "text": "MaxSP + 6% / increases SP natural recovery by 30%."
            },
            {
              "level": 4,
              "text": "MaxSP + 8% / increases SP natural recovery by 40%."
            },
            {
              "level": 5,
              "text": "MaxSP + 10% / increases SP natural recovery by 50%."
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6572.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6572",
          "tree": {
            "idx": 25,
            "row": 2,
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
                "value": "5"
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
                      "effect": "Ma x SP + 2% / increases SP natural recovery by 10%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Ma x SP + 4% / increases SP natural recovery by 20%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Ma x SP + 6% / increases SP natural recovery by 30%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Ma x SP + 8% / increases SP natural recovery by 40%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Ma x SP + 10% / increases SP natural recovery by 50%"
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
          "id": 6573,
          "imageFile": "6573.png",
          "name": "Nature Protection",
          "maxLevel": 5,
          "prerequisiteText": "Nature Shield 5, Nature Logic 3, Nature Vigour 3",
          "group": "Active",
          "type": "Buff",
          "target": "Instant Casting",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Transforms the user into a small World Tree, reducing all damage taken and recovering HP and SP.",
          "levelDetails": [
            {
              "level": 1,
              "text": ": Reduces physical / magical damage taken from enemies by 60% / recovers 5% of MaxHP and 3% of MaxSP / duration : 2 seconds."
            },
            {
              "level": 2,
              "text": ": Reduces physical / magical damage taken from enemies by 70% / recovers 10% of MaxHP and 6% of MaxSP / duration : 2 seconds."
            },
            {
              "level": 3,
              "text": ": Reduces physical / magical damage taken from enemies by 80% / recovers 15% of MaxHP and 9% of MaxSP / duration : 2 seconds."
            },
            {
              "level": 4,
              "text": ": Reduces physical / magical damage taken from enemies by 90% / recovers 20% of MaxHP and 12% of MaxSP / duration : 2 seconds."
            },
            {
              "level": 5,
              "text": ": Reduces physical / magical damage taken from enemies by 99% / recovers 25% of MaxHP and 15% of MaxSP / duration : 2 seconds."
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6573.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6573",
          "tree": {
            "idx": 26,
            "row": 2,
            "col": 8,
            "columns": 9,
            "requirements": [
              {
                "id": 6547,
                "level": 5,
                "name": "Nature Shield",
                "visible": false
              },
              {
                "id": 6548,
                "level": 3,
                "name": "Nature Logic",
                "visible": false
              },
              {
                "id": 6572,
                "level": 3,
                "name": "Nature Vigour",
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
                "value": "Instant Casting"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
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
                      "duration": "2 seconds",
                      "effect": ": Reduces physical / magical damage taken from enemies by 60% / recovers 5% of Ma x HP and 3% of Ma x SP"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "2 seconds",
                      "effect": ": Reduces physical / magical damage taken from enemies by 70% / recovers 10% of Ma x HP and 6% of Ma x SP"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "2 seconds",
                      "effect": ": Reduces physical / magical damage taken from enemies by 80% / recovers 15% of Ma x HP and 9% of Ma x SP"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "2 seconds",
                      "effect": ": Reduces physical / magical damage taken from enemies by 90% / recovers 20% of Ma x HP and 12% of Ma x SP"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "2 seconds",
                      "effect": ": Reduces physical / magical damage taken from enemies by 99% / recovers 25% of Ma x HP and 15% of Ma x SP"
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
          "id": 6553,
          "imageFile": "6553.png",
          "name": "Iron Howling",
          "maxLevel": 5,
          "prerequisiteText": "Blood Howling 3",
          "group": "Active",
          "type": "Buff",
          "target": "Instant Casting",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Can only be used while in [Werewolf] state.\nHowls, reducing all damage taken for a short time.",
          "levelDetails": [
            {
              "level": 1,
              "text": ": Reduces physical / magical damage taken from enemies by 10% / duration : 2 second."
            },
            {
              "level": 2,
              "text": ": Reduces physical / magical damage taken from enemies by 15% / duration : 2.5 seconds."
            },
            {
              "level": 3,
              "text": ": Reduces physical / magical damage taken from enemies by 20% / duration : 3 seconds."
            },
            {
              "level": 4,
              "text": ": Reduces physical / magical damage taken from enemies by 25% / duration : 3.5 seconds."
            },
            {
              "level": 5,
              "text": ": Reduces physical / magical damage taken from enemies by 30% / duration : 4.5 seconds."
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6553.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6553",
          "tree": {
            "idx": 28,
            "row": 3,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 6529,
                "level": 3,
                "name": "Blood Howling",
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
                "value": "Instant Casting"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
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
                      "duration": "2 second",
                      "effect": ": Reduces physical / magical damage taken from enemies by 10%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "2.5 seconds",
                      "effect": ": Reduces physical / magical damage taken from enemies by 15%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "3 seconds",
                      "effect": ": Reduces physical / magical damage taken from enemies by 20%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "3.5 seconds",
                      "effect": ": Reduces physical / magical damage taken from enemies by 25%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "4.5 seconds",
                      "effect": ": Reduces physical / magical damage taken from enemies by 30%"
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
          "id": 6559,
          "imageFile": "6559.png",
          "name": "Wind Veil",
          "maxLevel": 5,
          "prerequisiteText": "Typhoon Wing 3",
          "group": "Active",
          "type": "Buff",
          "target": "Instant Casting",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Can only be used while in [Wereraptor] state.\nSurrounds the user with wind, reducing all damage taken and increasing movement speed for a short time.",
          "levelDetails": [
            {
              "level": 1,
              "text": ": Reduces physical / magical damage taken from enemies by 5% / movement speed + 50% / duration : 1.5 second."
            },
            {
              "level": 2,
              "text": ": Reduces physical / magical damage taken from enemies by 7% / movement speed + 75% / duration : 2 seconds."
            },
            {
              "level": 3,
              "text": ": Reduces physical / magical damage taken from enemies by 9% / movement speed + 100% / duration : 2.5 seconds."
            },
            {
              "level": 4,
              "text": ": Reduces physical / magical damage taken from enemies by 12% / movement speed + 125% / duration : 3 seconds."
            },
            {
              "level": 5,
              "text": ": Reduces physical / magical damage taken from enemies by 15% / movement speed + 150% / duration : 4 seconds."
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6559.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6559",
          "tree": {
            "idx": 29,
            "row": 3,
            "col": 2,
            "columns": 9,
            "requirements": [
              {
                "id": 6557,
                "level": 3,
                "name": "Typhoon Wing",
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
                "value": "Instant Casting"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "duration",
                    "label": "Duration"
                  },
                  {
                    "id": "reduces-physical-magical-damage-taken-from-enemies-by-12-movement-speed",
                    "label": ": Reduces Physical / Magical Damage Taken From Enemies By 12% / Movement Speed"
                  },
                  {
                    "id": "reduces-physical-magical-damage-taken-from-enemies-by-15-movement-speed",
                    "label": ": Reduces Physical / Magical Damage Taken From Enemies By 15% / Movement Speed"
                  },
                  {
                    "id": "reduces-physical-magical-damage-taken-from-enemies-by-5-movement-speed",
                    "label": ": Reduces Physical / Magical Damage Taken From Enemies By 5% / Movement Speed"
                  },
                  {
                    "id": "reduces-physical-magical-damage-taken-from-enemies-by-7-movement-speed",
                    "label": ": Reduces Physical / Magical Damage Taken From Enemies By 7% / Movement Speed"
                  },
                  {
                    "id": "reduces-physical-magical-damage-taken-from-enemies-by-9-movement-speed",
                    "label": ": Reduces Physical / Magical Damage Taken From Enemies By 9% / Movement Speed"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "duration": "1.5 second",
                      "reduces-physical-magical-damage-taken-from-enemies-by-5-movement-speed": "+ 50%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "2 seconds",
                      "reduces-physical-magical-damage-taken-from-enemies-by-7-movement-speed": "+ 75%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "2.5 seconds",
                      "reduces-physical-magical-damage-taken-from-enemies-by-9-movement-speed": "+ 100%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "3 seconds",
                      "reduces-physical-magical-damage-taken-from-enemies-by-12-movement-speed": "+ 125%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "4 seconds",
                      "reduces-physical-magical-damage-taken-from-enemies-by-15-movement-speed": "+ 150%"
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
      "label": "Previous Class 2",
      "pointLimit": 49,
      "tree": {
        "columns": 9,
        "rows": 5
      },
      "skills": [
        {
          "id": 6524,
          "imageFile": "6524.png",
          "name": "Transformation: Werewolf",
          "maxLevel": 1,
          "prerequisiteText": "basic skill",
          "group": "Active (Toggle)",
          "type": "Buff",
          "target": "Instant Cast",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Shed the user's human form, awakening the powerful wolf spirit.\nAfter transformation, the user can use Wolf skills.\nCannot be used while in Wereraptor, Truth of Ice, Truth of Wind, or Truth of Earth state.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Enables to use Wolf skills / MaxHP + 10%."
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6524.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6524",
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
                "value": "Active (Toggle) Skill"
              },
              {
                "label": "Levels",
                "value": "1"
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
                    "id": "enables-to-use-wolf-skills-maxhp",
                    "label": "Enables To Use Wolf Skills / Maxhp"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "enables-to-use-wolf-skills-maxhp": "+ 10%"
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
          "id": 6531,
          "imageFile": "6531.png",
          "name": "Wereraptor",
          "maxLevel": 1,
          "prerequisiteText": "basic skill",
          "group": "Active (Toggle)",
          "type": "Buff",
          "target": "Instant Casting",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Shed the user's human form, awakening the raptor spirit that soars the sky.\nAfter transformation, the user can use Raptor skills.\nCannot be used while in Werewolf, Truth of Ice, Truth of Wind, or Truth of Earth state.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Enables to use Raptor skills / Movement speed + 25%."
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6531.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6531",
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
                "value": "Active (Toggle) Skill"
              },
              {
                "label": "Levels",
                "value": "1"
              },
              {
                "label": "Target",
                "value": "Instant Casting"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "enables-to-use-raptor-skills-movement-speed",
                    "label": "Enables To Use Raptor Skills / Movement Speed"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "enables-to-use-raptor-skills-movement-speed": "+ 25%"
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
          "id": 6530,
          "imageFile": "6530.png",
          "name": "Beasty Nose",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Effect only applies when in [Werewolf] state.\nDetects the enemies with a heightened sense of smell, increasing attack speed.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Increases attack speed (reduces delay after attack by 1%)."
            },
            {
              "level": 2,
              "text": "Increases attack speed (reduces delay after attack by 2%)."
            },
            {
              "level": 3,
              "text": "Increases attack speed (reduces delay after attack by 3%)."
            },
            {
              "level": 4,
              "text": "Increases attack speed (reduces delay after attack by 4%)."
            },
            {
              "level": 5,
              "text": "Increases attack speed (reduces delay after attack by 5%)."
            },
            {
              "level": 6,
              "text": "Increases attack speed (reduces delay after attack by 6%)."
            },
            {
              "level": 7,
              "text": "Increases attack speed (reduces delay after attack by 7%)."
            },
            {
              "level": 8,
              "text": "Increases attack speed (reduces delay after attack by 8%)."
            },
            {
              "level": 9,
              "text": "Increases attack speed (reduces delay after attack by 9%)."
            },
            {
              "level": 10,
              "text": "Increases attack speed (reduces delay after attack by 10%)."
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6530.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6530",
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
                    "id": "effect",
                    "label": "Effect"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Increases attack speed (reduces delay after attack by 1%)"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Increases attack speed (reduces delay after attack by 2%)"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Increases attack speed (reduces delay after attack by 3%)"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Increases attack speed (reduces delay after attack by 4%)"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Increases attack speed (reduces delay after attack by 5%)"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "Increases attack speed (reduces delay after attack by 6%)"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "Increases attack speed (reduces delay after attack by 7%)"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "Increases attack speed (reduces delay after attack by 8%)"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "Increases attack speed (reduces delay after attack by 9%)"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "Increases attack speed (reduces delay after attack by 10%)"
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
          "id": 6538,
          "imageFile": "6538.png",
          "name": "Truth of Ice",
          "maxLevel": 1,
          "prerequisiteText": "Nature Logic 1",
          "group": "Active",
          "type": "Buff",
          "target": "Instant Casting",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Masters the truth of ice, increases water property magical damage and increases damage of water property skills.",
          "levelDetails": [],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6538.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6538",
          "tree": {
            "idx": 4,
            "row": 0,
            "col": 4,
            "columns": 9,
            "requirements": [
              {
                "id": 6548,
                "level": 1,
                "name": "Nature Logic",
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
              }
            ],
            "levelTables": []
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
          "id": 6541,
          "imageFile": "6541.png",
          "name": "Truth of Wind",
          "maxLevel": 1,
          "prerequisiteText": "Nature Logic 1",
          "group": "Active",
          "type": "Buff",
          "target": "Instant Casting",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Masters the truth of wind, increases wind property magical damage and increases damage of wind property skills.",
          "levelDetails": [],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6541.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6541",
          "tree": {
            "idx": 5,
            "row": 0,
            "col": 5,
            "columns": 9,
            "requirements": [
              {
                "id": 6548,
                "level": 1,
                "name": "Nature Logic",
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
              }
            ],
            "levelTables": []
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
          "id": 6544,
          "imageFile": "6544.png",
          "name": "Truth of Earth",
          "maxLevel": 1,
          "prerequisiteText": "Nature Logic 1",
          "group": "Active",
          "type": "Buff",
          "target": "Instant Casting",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Masters the truth of earth, increases earth property magical damage and increases damage of earth property skills.",
          "levelDetails": [],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6544.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6544",
          "tree": {
            "idx": 6,
            "row": 0,
            "col": 6,
            "columns": 9,
            "requirements": [
              {
                "id": 6548,
                "level": 1,
                "name": "Nature Logic",
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
              }
            ],
            "levelTables": []
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
          "id": 6529,
          "imageFile": "6529.png",
          "name": "Blood Howling",
          "maxLevel": 5,
          "prerequisiteText": "Werewolf 1",
          "group": "Active",
          "type": "Buff",
          "target": "Instant Casting",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Can only be used while in [Werewolf] state.\nHowls, temporarily awakening the user's sense of battle.",
          "levelDetails": [
            {
              "level": 1,
              "text": "STR + 2 / LUK + 2 / Hit + 10"
            },
            {
              "level": 2,
              "text": "STR + 4 / LUK + 4 / Hit + 20"
            },
            {
              "level": 3,
              "text": "STR + 6 / LUK + 6 / Hit + 30"
            },
            {
              "level": 4,
              "text": "STR + 8 / LUK + 8 / Hit + 40"
            },
            {
              "level": 5,
              "text": "STR + 10 / LUK + 10 / Hit + 50"
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6529.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6529",
          "tree": {
            "idx": 8,
            "row": 0,
            "col": 8,
            "columns": 9,
            "requirements": [
              {
                "id": 6524,
                "level": 1,
                "name": "Werewolf",
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
                "value": "Instant Casting"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "str-10-luk-10-hit",
                    "label": "Str + 10 / Luk + 10 / Hit"
                  },
                  {
                    "id": "str-2-luk-2-hit",
                    "label": "Str + 2 / Luk + 2 / Hit"
                  },
                  {
                    "id": "str-4-luk-4-hit",
                    "label": "Str + 4 / Luk + 4 / Hit"
                  },
                  {
                    "id": "str-6-luk-6-hit",
                    "label": "Str + 6 / Luk + 6 / Hit"
                  },
                  {
                    "id": "str-8-luk-8-hit",
                    "label": "Str + 8 / Luk + 8 / Hit"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "str-2-luk-2-hit": "+ 10"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "str-4-luk-4-hit": "+ 20"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "str-6-luk-6-hit": "+ 30"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "str-8-luk-8-hit": "+ 40"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "str-10-luk-10-hit": "+ 50"
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
          "id": 6536,
          "imageFile": "6536.png",
          "name": "Preening",
          "maxLevel": 5,
          "prerequisiteText": "Wereraptor 1",
          "group": "Active",
          "type": "Buff",
          "target": "Instant Casting",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Can only be used while in [Wereraptor] state.\nPreens the feathers, temporarily becoming more agile.",
          "levelDetails": [
            {
              "level": 1,
              "text": "AGI + 2 / DEX + 2 / Flee + 10"
            },
            {
              "level": 2,
              "text": "AGI + 4 / DEX + 4 / Flee + 20"
            },
            {
              "level": 3,
              "text": "AGI + 6 / DEX + 6 / Flee + 30"
            },
            {
              "level": 4,
              "text": "AGI + 8 / DEX + 8 / Flee + 40"
            },
            {
              "level": 5,
              "text": "AGI + 10 / DEX + 10 / Flee + 50"
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6536.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6536",
          "tree": {
            "idx": 9,
            "row": 1,
            "col": 0,
            "columns": 9,
            "requirements": [
              {
                "id": 6531,
                "level": 1,
                "name": "Wereraptor",
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
                "value": "Instant Casting"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "agi-10-dex-10-flee",
                    "label": "Agi + 10 / Dex + 10 / Flee"
                  },
                  {
                    "id": "agi-2-dex-2-flee",
                    "label": "Agi + 2 / Dex + 2 / Flee"
                  },
                  {
                    "id": "agi-4-dex-4-flee",
                    "label": "Agi + 4 / Dex + 4 / Flee"
                  },
                  {
                    "id": "agi-6-dex-6-flee",
                    "label": "Agi + 6 / Dex + 6 / Flee"
                  },
                  {
                    "id": "agi-8-dex-8-flee",
                    "label": "Agi + 8 / Dex + 8 / Flee"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "agi-2-dex-2-flee": "+ 10"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "agi-4-dex-4-flee": "+ 20"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "agi-6-dex-6-flee": "+ 30"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "agi-8-dex-8-flee": "+ 40"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "agi-10-dex-10-flee": "+ 50"
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
          "id": 6537,
          "imageFile": "6537.png",
          "name": "Sharp Eyes",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Effect only applies when in [Wereraptor] state.\nDetects weak point through sharp vision, increasing accuracy.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Hit + 5"
            },
            {
              "level": 2,
              "text": "Hit + 10"
            },
            {
              "level": 3,
              "text": "Hit + 15"
            },
            {
              "level": 4,
              "text": "Hit + 20"
            },
            {
              "level": 5,
              "text": "Hit + 25"
            },
            {
              "level": 6,
              "text": "Hit + 30"
            },
            {
              "level": 7,
              "text": "Hit + 35"
            },
            {
              "level": 8,
              "text": "Hit + 40"
            },
            {
              "level": 9,
              "text": "Hit + 45"
            },
            {
              "level": 10,
              "text": "Hit + 50"
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6537.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6537",
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
                    "id": "hit",
                    "label": "Hit"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "hit": "+ 5"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "hit": "+ 10"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "hit": "+ 15"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "hit": "+ 20"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "hit": "+ 25"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "hit": "+ 30"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "hit": "+ 35"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "hit": "+ 40"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "hit": "+ 45"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "hit": "+ 50"
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
          "id": 6539,
          "imageFile": "6539.png",
          "name": "Ice Totem",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "Magic",
          "target": "Single target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Drops an ice totem on the target, dealing water property magical damage for 2 hits.\nIf under Truth of Ice state, deals additional damage depending on the user's base level and INT.",
          "levelDetails": [
            {
              "level": 1,
              "text": "100% Matk per hit."
            },
            {
              "level": 2,
              "text": "200% Matk per hit."
            },
            {
              "level": 3,
              "text": "300% Matk per hit."
            },
            {
              "level": 4,
              "text": "400% Matk per hit."
            },
            {
              "level": 5,
              "text": "500% Matk per hit."
            },
            {
              "level": 6,
              "text": "600% Matk per hit."
            },
            {
              "level": 7,
              "text": "700% Matk per hit."
            },
            {
              "level": 8,
              "text": "800% Matk per hit."
            },
            {
              "level": 9,
              "text": "900% Matk per hit."
            },
            {
              "level": 10,
              "text": "1000% Matk per hit."
            }
          ],
          "fixedCastTime": "0.2 seconds",
          "variableCastTime": "0.5 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "0.5 seconds",
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6539.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6539",
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
                "value": "0.5 seconds"
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
                "value": "Single target"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "base-damage-matk-per-hit",
                    "label": "Base Damage (MATK per Hit)"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "base-damage-matk-per-hit": "100%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-matk-per-hit": "200%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-matk-per-hit": "300%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-matk-per-hit": "400%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-matk-per-hit": "500%"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "base-damage-matk-per-hit": "600%"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "base-damage-matk-per-hit": "700%"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "base-damage-matk-per-hit": "800%"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "base-damage-matk-per-hit": "900%"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "base-damage-matk-per-hit": "1000%"
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
          "id": 6542,
          "imageFile": "6542.png",
          "name": "Cutting Wind",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "Magic",
          "target": "Single target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Blows a sharp wind at the target, dealing wind property magical damage for 2 hits.\nIf under Truth of Wind state, increases number of hit to 4 hits, and deals additional damage depending on the user's base level and INT.",
          "levelDetails": [
            {
              "level": 1,
              "text": "50% Matk per hit."
            },
            {
              "level": 2,
              "text": "100% Matk per hit."
            },
            {
              "level": 3,
              "text": "150% Matk per hit."
            },
            {
              "level": 4,
              "text": "200% Matk per hit."
            },
            {
              "level": 5,
              "text": "250% Matk per hit."
            },
            {
              "level": 6,
              "text": "300% Matk per hit."
            },
            {
              "level": 7,
              "text": "350% Matk per hit."
            },
            {
              "level": 8,
              "text": "400% Matk per hit."
            },
            {
              "level": 9,
              "text": "450% Matk per hit."
            },
            {
              "level": 10,
              "text": "500% Matk per hit."
            }
          ],
          "fixedCastTime": "0.2 seconds",
          "variableCastTime": "0.5 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "0.5 seconds",
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6542.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6542",
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
                "value": "0.5 seconds"
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
                "value": "Single target"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "base-damage-matk-per-hit",
                    "label": "Base Damage (MATK per Hit)"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "base-damage-matk-per-hit": "50%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-matk-per-hit": "100%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-matk-per-hit": "150%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-matk-per-hit": "200%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-matk-per-hit": "250%"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "base-damage-matk-per-hit": "300%"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "base-damage-matk-per-hit": "350%"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "base-damage-matk-per-hit": "400%"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "base-damage-matk-per-hit": "450%"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "base-damage-matk-per-hit": "500%"
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
          "id": 6545,
          "imageFile": "6545.png",
          "name": "Earth Flower",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "Magic",
          "target": "Single target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Blooms flower on the target, dealing earth property magical damage.\nIf under Truth of Earth state, deals additional damage depending on the user's base level and INT.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Matk 100%"
            },
            {
              "level": 2,
              "text": "Matk 200%"
            },
            {
              "level": 3,
              "text": "Matk 300%"
            },
            {
              "level": 4,
              "text": "Matk 400%"
            },
            {
              "level": 5,
              "text": "Matk 500%"
            },
            {
              "level": 6,
              "text": "Matk 600%"
            },
            {
              "level": 7,
              "text": "Matk 700%"
            },
            {
              "level": 8,
              "text": "Matk 800%"
            },
            {
              "level": 9,
              "text": "Matk 900%"
            },
            {
              "level": 10,
              "text": "Matk 1000%"
            }
          ],
          "fixedCastTime": "0.2 seconds",
          "variableCastTime": "0.5 seconds",
          "castDelay": "0.2 seconds",
          "cooldown": "0.2 seconds",
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6545.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6545",
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
                "label": "Fixed Cast Time",
                "value": "0.2 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "0.5 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.2 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0.2 seconds"
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
                    "id": "base-damage-matk",
                    "label": "Base Damage (MATK)"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "base-damage-matk": "100%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-matk": "200%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-matk": "300%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-matk": "400%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-matk": "500%"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "base-damage-matk": "600%"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "base-damage-matk": "700%"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "base-damage-matk": "800%"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "base-damage-matk": "900%"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "base-damage-matk": "1000%"
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
          "id": 6525,
          "imageFile": "6525.png",
          "name": "Enrage Wolf",
          "maxLevel": 5,
          "prerequisiteText": "Blood Howling 3",
          "group": "Active",
          "type": "Buff",
          "target": "Instant Casting",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Can only be used while in [Werewolf] state.\nThe wildness of Wolf is enraged, reborn as the predator.\nIncreases damage of Wolf skills and increases melee physical damage for 300 seconds.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Increases melee physical damage by 2%."
            },
            {
              "level": 2,
              "text": "Increases melee physical damage by 4%."
            },
            {
              "level": 3,
              "text": "Increases melee physical damage by 6%."
            },
            {
              "level": 4,
              "text": "Increases melee physical damage by 8%."
            },
            {
              "level": 5,
              "text": "Increases melee physical damage by 10%."
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6525.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6525",
          "tree": {
            "idx": 15,
            "row": 1,
            "col": 6,
            "columns": 9,
            "requirements": [
              {
                "id": 6529,
                "level": 3,
                "name": "Blood Howling",
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
                "value": "Instant Casting"
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
                      "effect": "Increases melee physical damage by 2%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Increases melee physical damage by 4%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Increases melee physical damage by 6%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Increases melee physical damage by 8%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Increases melee physical damage by 10%"
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
          "id": 6532,
          "imageFile": "6532.png",
          "name": "Enrage Raptor",
          "maxLevel": 5,
          "prerequisiteText": "Preening 3",
          "group": "Active",
          "type": "Buff",
          "target": "Instant Casting",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Can only be used while in [Wereraptor] state.\nThe wildness of the Raptor is enraged, reborn as the hunter of the sky.\nIncreases damage of Raptor skills and increases long ranged physical damage for 300 seconds.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Increases long ranged physical damage by 2%."
            },
            {
              "level": 2,
              "text": "Increases long ranged physical damage by 4%."
            },
            {
              "level": 3,
              "text": "Increases long ranged physical damage by 6%."
            },
            {
              "level": 4,
              "text": "Increases long ranged physical damage by 8%."
            },
            {
              "level": 5,
              "text": "Increases long ranged physical damage by 10%."
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6532.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6532",
          "tree": {
            "idx": 16,
            "row": 1,
            "col": 7,
            "columns": 9,
            "requirements": [
              {
                "id": 6536,
                "level": 3,
                "name": "Preening",
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
                "value": "Instant Casting"
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
                      "effect": "Increases long ranged physical damage by 2%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Increases long ranged physical damage by 4%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Increases long ranged physical damage by 6%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Increases long ranged physical damage by 8%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Increases long ranged physical damage by 10%"
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
          "id": 6540,
          "imageFile": "6540.png",
          "name": "Ice Cloud",
          "maxLevel": 10,
          "prerequisiteText": "Ice Totem 5",
          "group": "Active",
          "type": "Magic",
          "target": "Single target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Creates an ice cloud around the target, dealing water property magical damage to the target and surrounding enemies for 4 hits.\nIf under Truth of Ice state, deals additional damage depending on the user's base level and INT.",
          "levelDetails": [
            {
              "level": 1,
              "text": "50% Matk per hit / area of effect: 7 x 7 cells."
            },
            {
              "level": 2,
              "text": "100% Matk per hit / area of effect: 7 x 7 cells."
            },
            {
              "level": 3,
              "text": "150% Matk per hit / area of effect: 7 x 7 cells."
            },
            {
              "level": 4,
              "text": "200% Matk per hit / area of effect: 7 x 7 cells."
            },
            {
              "level": 5,
              "text": "250% Matk per hit / area of effect: 7 x 7 cells."
            },
            {
              "level": 6,
              "text": "300% Matk per hit / area of effect: 7 x 7 cells."
            },
            {
              "level": 7,
              "text": "350% Matk per hit / area of effect: 7 x 7 cells."
            },
            {
              "level": 8,
              "text": "400% Matk per hit / area of effect: 7 x 7 cells."
            },
            {
              "level": 9,
              "text": "450% Matk per hit / area of effect: 7 x 7 cells."
            },
            {
              "level": 10,
              "text": "500% Matk per hit / area of effect: 7 x 7 cells."
            }
          ],
          "fixedCastTime": "0.2 seconds",
          "variableCastTime": "1 second",
          "castDelay": "0.5 seconds",
          "cooldown": "1 second",
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6540.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6540",
          "tree": {
            "idx": 18,
            "row": 2,
            "col": 0,
            "columns": 9,
            "requirements": [
              {
                "id": 6539,
                "level": 5,
                "name": "Ice Totem",
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
                "value": "Single target"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "base-damage-matk-per-hit",
                    "label": "Base Damage (MATK per Hit)"
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
                      "base-damage-matk-per-hit": "50%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk-per-hit": "100%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk-per-hit": "150%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk-per-hit": "200%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk-per-hit": "250%"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk-per-hit": "300%"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk-per-hit": "350%"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk-per-hit": "400%"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk-per-hit": "450%"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk-per-hit": "500%"
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
          "id": 6543,
          "imageFile": "6543.png",
          "name": "Wind Bomb",
          "maxLevel": 10,
          "prerequisiteText": "Cutting Wind 5",
          "group": "Active",
          "type": "Magic",
          "target": "Single target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Launches a wind ball at the target, dealing wind property magical damage to the target and surrounding enemies for 4 hits.\nIf under Truth of Wind state, increases number of hit to 6 hits, and deals additional damage depending on the user's base level and INT.",
          "levelDetails": [
            {
              "level": 1,
              "text": "50% MATK per hit / area of effect : 7 x 7 cells."
            },
            {
              "level": 2,
              "text": "100% MATK per hit / area of effect : 7 x 7 cells."
            },
            {
              "level": 3,
              "text": "150% MATK per hit / area of effect : 7 x 7 cells."
            },
            {
              "level": 4,
              "text": "200% MATK per hit / area of effect : 7 x 7 cells."
            },
            {
              "level": 5,
              "text": "250% MATK per hit / area of effect : 7 x 7 cells."
            },
            {
              "level": 6,
              "text": "300% MATK per hit / area of effect : 7 x 7 cells."
            },
            {
              "level": 7,
              "text": "350% MATK per hit / area of effect : 7 x 7 cells."
            },
            {
              "level": 8,
              "text": "400% MATK per hit / area of effect : 7 x 7 cells."
            },
            {
              "level": 9,
              "text": "450% MATK per hit / area of effect : 7 x 7 cells."
            },
            {
              "level": 10,
              "text": "500% MATK per hit / area of effect : 7 x 7 cells."
            }
          ],
          "fixedCastTime": "0.2 seconds",
          "variableCastTime": "1 second",
          "castDelay": "0.5 seconds",
          "cooldown": "1.5 seconds",
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6543.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6543",
          "tree": {
            "idx": 19,
            "row": 2,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 6542,
                "level": 5,
                "name": "Cutting Wind",
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
                "value": "1 second"
              },
              {
                "label": "Cast Delay",
                "value": "0.5 seconds"
              },
              {
                "label": "Cooldown",
                "value": "1.5 seconds"
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
                    "id": "base-damage-matk-per-hit",
                    "label": "Base Damage (MATK per Hit)"
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
                      "base-damage-matk-per-hit": "50%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk-per-hit": "100%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk-per-hit": "150%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk-per-hit": "200%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk-per-hit": "250%"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk-per-hit": "300%"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk-per-hit": "350%"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk-per-hit": "400%"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk-per-hit": "450%"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-matk-per-hit": "500%"
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
          "id": 6546,
          "imageFile": "6546.png",
          "name": "Around Flower",
          "maxLevel": 10,
          "prerequisiteText": "Earth Flower 5",
          "group": "Active",
          "type": "Magic",
          "target": "Instant Casting",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Blooms flower around the user, dealing earth property magical damage to the enemies.\nIf under Truth of Earth state, deals additional damage depending on the user's base level and INT.",
          "levelDetails": [
            {
              "level": 1,
              "text": "100% MATK / area of effect : 5 x 5 cells."
            },
            {
              "level": 2,
              "text": "200% MATK / area of effect : 5 x 5 cells."
            },
            {
              "level": 3,
              "text": "300% MATK / area of effect : 5 x 5 cells."
            },
            {
              "level": 4,
              "text": "400% MATK / area of effect : 5 x 5 cells."
            },
            {
              "level": 5,
              "text": "500% MATK / area of effect : 5 x 5 cells."
            },
            {
              "level": 6,
              "text": "600% MATK / area of effect : 5 x 5 cells."
            },
            {
              "level": 7,
              "text": "700% MATK / area of effect : 5 x 5 cells."
            },
            {
              "level": 8,
              "text": "800% MATK / area of effect : 5 x 5 cells."
            },
            {
              "level": 9,
              "text": "900% MATK / area of effect : 5 x 5 cells."
            },
            {
              "level": 10,
              "text": "1000% MATK / area of effect : 5 x 5 cells."
            }
          ],
          "fixedCastTime": "0.2 seconds",
          "variableCastTime": "1 second",
          "castDelay": "0.5 seconds",
          "cooldown": "0.5 seconds",
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6546.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6546",
          "tree": {
            "idx": 20,
            "row": 2,
            "col": 2,
            "columns": 9,
            "requirements": [
              {
                "id": 6545,
                "level": 5,
                "name": "Earth Flower",
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
                "value": "1 second"
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
                "value": "Instant Casting"
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
                    "id": "area-of-effect",
                    "label": "Area of Effect"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk": "100%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk": "200%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk": "300%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk": "400%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk": "500%"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk": "600%"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk": "700%"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk": "800%"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk": "900%"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-matk": "1000%"
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
          "id": 6526,
          "imageFile": "6526.png",
          "name": "No Mercy Claw",
          "maxLevel": 10,
          "prerequisiteText": "Werewolf 1",
          "group": "Active",
          "type": "Melee physical",
          "target": "Instant Casting",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Can only be used while in [Werewolf] state.\nDeals melee physical damage to all enemies within range for 2 hits with merciless claws.\nDeals additional damage when in [Enrage: Wolf] state.\nDeals additional damage depending on the user's base level and STR.",
          "levelDetails": [
            {
              "level": 1,
              "text": "80% Atk / 120% Atk (Enrage) per hit / area of effect: 3 x 3 cells."
            },
            {
              "level": 2,
              "text": "160% Atk / 240% Atk (Enrage) per hit / area of effect: 3 x 3 cells."
            },
            {
              "level": 3,
              "text": "240% Atk / 360% Atk (Enrage) per hit / area of effect: 3 x 3 cells."
            },
            {
              "level": 4,
              "text": "320% Atk / 480% Atk (Enrage) per hit / area of effect: 3 x 3 cells."
            },
            {
              "level": 5,
              "text": "400% Atk / 600% Atk (Enrage) per hit / area of effect: 3 x 3 cells."
            },
            {
              "level": 6,
              "text": "480% Atk / 720% Atk (Enrage) per hit / area of effect: 5 x 5 cells."
            },
            {
              "level": 7,
              "text": "560% Atk / 840% Atk (Enrage) per hit / area of effect: 5 x 5 cells."
            },
            {
              "level": 8,
              "text": "640% Atk / 960% Atk (Enrage) per hit / area of effect: 5 x 5 cells."
            },
            {
              "level": 9,
              "text": "720% Atk / 1080% Atk (Enrage) per hit / area of effect: 5 x 5 cells."
            },
            {
              "level": 10,
              "text": "800% Atk / 1200% Atk (Enrage) per hit / area of effect: 5 x 5 cells."
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6526.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6526",
          "tree": {
            "idx": 22,
            "row": 2,
            "col": 4,
            "columns": 9,
            "requirements": [
              {
                "id": 6524,
                "level": 1,
                "name": "Werewolf",
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
                "value": "Instant Casting"
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
                      "area-of-effect": "3x3",
                      "base-damage-atk-per-hit": "80%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "3x3",
                      "base-damage-atk-per-hit": "160%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "3x3",
                      "base-damage-atk-per-hit": "240%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "3x3",
                      "base-damage-atk-per-hit": "320%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "3x3",
                      "base-damage-atk-per-hit": "400%"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk-per-hit": "480%"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk-per-hit": "560%"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk-per-hit": "640%"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk-per-hit": "720%"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk-per-hit": "800%"
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
          "id": 6533,
          "imageFile": "6533.png",
          "name": "Shooting Feather",
          "maxLevel": 10,
          "prerequisiteText": "Wereraptor 1",
          "group": "Active",
          "type": "Ranged Physical",
          "target": "Single target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Can only be used while in [Wereraptor] state.\nShoots the target with enhanced feathers, dealing long ranged physical damage for 2 hits.\nDeals additional damage when in [Enrage : Raptor] state.\nDeals additional damage depending on the user's base level and DEX.",
          "levelDetails": [
            {
              "level": 1,
              "text": "20% ATK / 40% ATK (Enrage) per hit."
            },
            {
              "level": 2,
              "text": "40% ATK / 80% ATK (Enrage) per hit."
            },
            {
              "level": 3,
              "text": "60% ATK / 120% ATK (Enrage) per hit."
            },
            {
              "level": 4,
              "text": "80% ATK / 160% ATK (Enrage) per hit."
            },
            {
              "level": 5,
              "text": "100% ATK / 200% ATK (Enrage) per hit."
            },
            {
              "level": 6,
              "text": "120% ATK / 240% ATK (Enrage) per hit."
            },
            {
              "level": 7,
              "text": "140% ATK / 280% ATK (Enrage) per hit."
            },
            {
              "level": 8,
              "text": "160% ATK / 320% ATK (Enrage) per hit."
            },
            {
              "level": 9,
              "text": "180% ATK / 360% ATK (Enrage) per hit."
            },
            {
              "level": 10,
              "text": "200% ATK / 400% ATK (Enrage) per hit."
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6533.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6533",
          "tree": {
            "idx": 23,
            "row": 2,
            "col": 5,
            "columns": 9,
            "requirements": [
              {
                "id": 6531,
                "level": 1,
                "name": "Wereraptor",
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
                "value": "Single target"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "base-damage-atk-per-hit",
                    "label": "Base Damage (ATK per Hit)"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "base-damage-atk-per-hit": "20%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-atk-per-hit": "40%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-atk-per-hit": "60%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-atk-per-hit": "80%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-atk-per-hit": "100%"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "base-damage-atk-per-hit": "120%"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "base-damage-atk-per-hit": "140%"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "base-damage-atk-per-hit": "160%"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "base-damage-atk-per-hit": "180%"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "base-damage-atk-per-hit": "200%"
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
          "id": 6547,
          "imageFile": "6547.png",
          "name": "Nature Shield",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "Buff",
          "target": "Instant Casting",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Temporarily increases INT, VIT, DEF, and MDEF.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Def + 10 / INT/VIT/Mdef + 1"
            },
            {
              "level": 2,
              "text": "Def + 20 / INT/VIT/Mdef + 2"
            },
            {
              "level": 3,
              "text": "Def + 30 / INT/VIT/Mdef + 3"
            },
            {
              "level": 4,
              "text": "Def + 40 / INT/VIT/Mdef + 4"
            },
            {
              "level": 5,
              "text": "Def + 50 / INT/VIT/Mdef + 5"
            },
            {
              "level": 6,
              "text": "Def + 60 / INT/VIT/Mdef + 6"
            },
            {
              "level": 7,
              "text": "Def + 70 / INT/VIT/Mdef + 7"
            },
            {
              "level": 8,
              "text": "Def + 80 / INT/VIT/Mdef + 8"
            },
            {
              "level": 9,
              "text": "Def + 90 / INT/VIT/Mdef + 9"
            },
            {
              "level": 10,
              "text": "Def + 100 / INT/VIT/Mdef + 10"
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6547.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6547",
          "tree": {
            "idx": 25,
            "row": 2,
            "col": 7,
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
                "value": "Instant Casting"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "def-10-int-vit-mdef",
                    "label": "Def + 10 / Int/vit/mdef"
                  },
                  {
                    "id": "def-100-int-vit-mdef",
                    "label": "Def + 100 / Int/vit/mdef"
                  },
                  {
                    "id": "def-20-int-vit-mdef",
                    "label": "Def + 20 / Int/vit/mdef"
                  },
                  {
                    "id": "def-30-int-vit-mdef",
                    "label": "Def + 30 / Int/vit/mdef"
                  },
                  {
                    "id": "def-40-int-vit-mdef",
                    "label": "Def + 40 / Int/vit/mdef"
                  },
                  {
                    "id": "def-50-int-vit-mdef",
                    "label": "Def + 50 / Int/vit/mdef"
                  },
                  {
                    "id": "def-60-int-vit-mdef",
                    "label": "Def + 60 / Int/vit/mdef"
                  },
                  {
                    "id": "def-70-int-vit-mdef",
                    "label": "Def + 70 / Int/vit/mdef"
                  },
                  {
                    "id": "def-80-int-vit-mdef",
                    "label": "Def + 80 / Int/vit/mdef"
                  },
                  {
                    "id": "def-90-int-vit-mdef",
                    "label": "Def + 90 / Int/vit/mdef"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "def-10-int-vit-mdef": "+ 1"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "def-20-int-vit-mdef": "+ 2"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "def-30-int-vit-mdef": "+ 3"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "def-40-int-vit-mdef": "+ 4"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "def-50-int-vit-mdef": "+ 5"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "def-60-int-vit-mdef": "+ 6"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "def-70-int-vit-mdef": "+ 7"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "def-80-int-vit-mdef": "+ 8"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "def-90-int-vit-mdef": "+ 9"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "def-100-int-vit-mdef": "+ 10"
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
          "id": 6548,
          "imageFile": "6548.png",
          "name": "Nature Logic",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Understands the laws of nature and increase the user's MATK.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Matk + 25"
            },
            {
              "level": 2,
              "text": "Matk + 30"
            },
            {
              "level": 3,
              "text": "Matk + 35"
            },
            {
              "level": 4,
              "text": "Matk + 40"
            },
            {
              "level": 5,
              "text": "Matk + 45"
            },
            {
              "level": 6,
              "text": "Matk + 50"
            },
            {
              "level": 7,
              "text": "Matk + 55"
            },
            {
              "level": 8,
              "text": "Matk + 60"
            },
            {
              "level": 9,
              "text": "Matk + 65"
            },
            {
              "level": 10,
              "text": "Matk + 70"
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6548.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6548",
          "tree": {
            "idx": 26,
            "row": 2,
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
                    "id": "matk",
                    "label": "Matk"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "matk": "+ 25"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "matk": "+ 30"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "matk": "+ 35"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "matk": "+ 40"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "matk": "+ 45"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "matk": "+ 50"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "matk": "+ 55"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "matk": "+ 60"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "matk": "+ 65"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "matk": "+ 70"
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
          "id": 6527,
          "imageFile": "6527.png",
          "name": "Cruel Bite",
          "maxLevel": 10,
          "prerequisiteText": "No Mercy Claw 3",
          "group": "Active",
          "type": "Melee physical",
          "target": "Single target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Can only be used while in [Werewolf] state.\nInstantly dashes to the enemy within 5 cells range, dealing melee physical damage for 2 hits.\nDeals additional damage when in [Enrage: Wolf] state.\nDeals additional damage depending on the user's base level and STR.",
          "levelDetails": [
            {
              "level": 1,
              "text": "60% Atk / 80% Atk (Enrage) per hit."
            },
            {
              "level": 2,
              "text": "120% Atk / 160% Atk (Enrage) per hit."
            },
            {
              "level": 3,
              "text": "180% Atk / 240% Atk (Enrage) per hit."
            },
            {
              "level": 4,
              "text": "240% Atk / 320% Atk (Enrage) per hit."
            },
            {
              "level": 5,
              "text": "300% Atk / 400% Atk (Enrage) per hit."
            },
            {
              "level": 6,
              "text": "360% Atk / 480% Atk (Enrage) per hit."
            },
            {
              "level": 7,
              "text": "420% Atk / 560% Atk (Enrage) per hit."
            },
            {
              "level": 8,
              "text": "480% Atk / 640% Atk (Enrage) per hit."
            },
            {
              "level": 9,
              "text": "560% Atk / 720% Atk (Enrage) per hit."
            },
            {
              "level": 10,
              "text": "600% Atk / 800% Atk (Enrage) per hit."
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6527.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6527",
          "tree": {
            "idx": 29,
            "row": 3,
            "col": 2,
            "columns": 9,
            "requirements": [
              {
                "id": 6526,
                "level": 3,
                "name": "No Mercy Claw",
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
                "value": "Single target"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "base-damage-atk-per-hit",
                    "label": "Base Damage (ATK per Hit)"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "base-damage-atk-per-hit": "60%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-atk-per-hit": "120%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-atk-per-hit": "180%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-atk-per-hit": "240%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-atk-per-hit": "300%"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "base-damage-atk-per-hit": "360%"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "base-damage-atk-per-hit": "420%"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "base-damage-atk-per-hit": "480%"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "base-damage-atk-per-hit": "560%"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "base-damage-atk-per-hit": "600%"
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
          "id": 6535,
          "imageFile": "6535.png",
          "name": "Low Flight",
          "maxLevel": 10,
          "prerequisiteText": "Shooting Feather 3",
          "group": "Active",
          "type": "Ranged Physical",
          "target": "Single target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Can only be used while in [Wereraptor] state.\nFlies at low altitude with high speed, instantly dashes to the target and deals long ranged physical damage to the target and surrounding enemies for 3 hits.\nDeals additional damage when in [Enrage : Raptor] state.\nDeals additional damage depending on the user's base level and DEX.",
          "levelDetails": [
            {
              "level": 1,
              "text": "20% ATK / 40% ATK (Enrage) per hit / area of effect : 3 x 3 cells / cast range : 5 cells."
            },
            {
              "level": 2,
              "text": "40% ATK / 80% ATK (Enrage) per hit / area of effect : 3 x 3 cells / cast range : 5 cells."
            },
            {
              "level": 3,
              "text": "60% ATK / 120% ATK (Enrage) per hit / area of effect : 3 x 3 cells / cast range : 5 cells."
            },
            {
              "level": 4,
              "text": "80% ATK / 160% ATK (Enrage) per hit / area of effect : 5 x 5 cells / cast range : 5 cells."
            },
            {
              "level": 5,
              "text": "100% ATK / 200% ATK (Enrage) per hit / area of effect : 5 x 5 cells / cast range : 5 cells."
            },
            {
              "level": 6,
              "text": "120% ATK / 240% ATK (Enrage) per hit / area of effect : 5 x 5 cells / cast range : 7 cells."
            },
            {
              "level": 7,
              "text": "140% ATK / 280% ATK (Enrage) per hit / area of effect : 5 x 5 cells / cast range : 7 cells."
            },
            {
              "level": 8,
              "text": "160% ATK / 320% ATK (Enrage) per hit / area of effect : 7 x 7 cells / cast range : 7 cells."
            },
            {
              "level": 9,
              "text": "180% ATK / 360% ATK (Enrage) per hit / area of effect : 7 x 7 cells / cast range : 7 cells."
            },
            {
              "level": 10,
              "text": "200% ATK / 400% ATK (Enrage) per hit / area of effect : 7 x 7 cells / cast range : 7 cells."
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6535.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6535",
          "tree": {
            "idx": 30,
            "row": 3,
            "col": 3,
            "columns": 9,
            "requirements": [
              {
                "id": 6533,
                "level": 3,
                "name": "Shooting Feather",
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
                "value": "Single target"
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
                      "area-of-effect": "3x3",
                      "base-damage-atk-per-hit": "20%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "3x3",
                      "base-damage-atk-per-hit": "40%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "3x3",
                      "base-damage-atk-per-hit": "60%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk-per-hit": "80%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk-per-hit": "100%"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk-per-hit": "120%"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk-per-hit": "140%"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-atk-per-hit": "160%"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-atk-per-hit": "180%"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-atk-per-hit": "200%"
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
          "id": 6528,
          "imageFile": "6528.png",
          "name": "Hunger",
          "maxLevel": 10,
          "prerequisiteText": "Cruel Bite 3",
          "group": "Active",
          "type": "Melee physical",
          "target": "Single target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Can only be used while in [Werewolf] state.\nConsumes 10% of SP to deal melee physical damage to the single target and absorbs a portion of damage as HP.\nHP absorbed cannot exceed 100,000.\nDeals additional damage when in [Enrage: Wolf] state.\nDeals additional damage depending on the user's base level and STR.\n(Not affected by SP consumption reduction effects.)",
          "levelDetails": [
            {
              "level": 1,
              "text": "80% Atk / 120% Atk (Enrage) / HP absorption: 1%."
            },
            {
              "level": 2,
              "text": "160% Atk / 240% Atk (Enrage) / HP absorption: 1%."
            },
            {
              "level": 3,
              "text": "240% Atk / 360% Atk (Enrage) / HP absorption: 2%."
            },
            {
              "level": 4,
              "text": "320% Atk / 480% Atk (Enrage) / HP absorption: 2%."
            },
            {
              "level": 5,
              "text": "400% Atk / 600% Atk (Enrage) / HP absorption: 3%."
            },
            {
              "level": 6,
              "text": "480% Atk / 720% Atk (Enrage) / HP absorption: 3%."
            },
            {
              "level": 7,
              "text": "560% Atk / 840% Atk (Enrage) / HP absorption: 4%."
            },
            {
              "level": 8,
              "text": "640% Atk / 960% Atk (Enrage) / HP absorption: 4%."
            },
            {
              "level": 9,
              "text": "720% Atk / 1080% Atk (Enrage) / HP absorption: 5%."
            },
            {
              "level": 10,
              "text": "800% Atk / 1200% Atk (Enrage) / HP absorption: 5%."
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6528.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6528",
          "tree": {
            "idx": 36,
            "row": 4,
            "col": 0,
            "columns": 9,
            "requirements": [
              {
                "id": 6527,
                "level": 3,
                "name": "Cruel Bite",
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
                "value": "Single target"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "base-damage-atk",
                    "label": "Base Damage (ATK)"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "base-damage-atk": "80%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-atk": "160%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-atk": "240%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-atk": "320%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-atk": "400%"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "base-damage-atk": "480%"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "base-damage-atk": "560%"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "base-damage-atk": "640%"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "base-damage-atk": "720%"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "base-damage-atk": "800%"
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
          "id": 6534,
          "imageFile": "6534.png",
          "name": "Flicking Tornado",
          "maxLevel": 10,
          "prerequisiteText": "Low Flight 3",
          "group": "Active",
          "type": "Ranged Physical",
          "target": "Single target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Can only be used while in [Wereraptor] state.\nLeaves a powerful tornado on the target, dealing long ranged physical damage to all enemies within a radius around the target.\nAfter using the skill, the user is moved backward.\nDeals additional damage when in [Enrage : Raptor] state.\nDeals additional damage depending on the user's base level and DEX.",
          "levelDetails": [
            {
              "level": 1,
              "text": "100% ATK / 150% ATK (Enrage) / area of effect : 3 x 3 cells / moves backward : 3 cells."
            },
            {
              "level": 2,
              "text": "200% ATK / 300% ATK (Enrage) / area of effect : 3 x 3 cells / moves backward : 3 cells."
            },
            {
              "level": 3,
              "text": "300% ATK / 450% ATK (Enrage) / area of effect : 3 x 3 cells / moves backward : 3 cells."
            },
            {
              "level": 4,
              "text": "400% ATK / 600% ATK (Enrage) / area of effect : 5 x 5 cells / moves backward : 3 cells."
            },
            {
              "level": 5,
              "text": "500% ATK / 750% ATK (Enrage) / area of effect : 5 x 5 cells / moves backward : 3 cells."
            },
            {
              "level": 6,
              "text": "600% ATK / 900% ATK (Enrage) / area of effect : 5 x 5 cells / moves backward : 5 cells."
            },
            {
              "level": 7,
              "text": "700% ATK / 1050% ATK (Enrage) / area of effect : 5 x 5 cells / moves backward : 5 cells."
            },
            {
              "level": 8,
              "text": "800% ATK / 1200% ATK (Enrage) / area of effect : 7 x 7 cells / moves backward : 5 cells."
            },
            {
              "level": 9,
              "text": "900% ATK / 1350% ATK (Enrage) / area of effect : 7 x 7 cells / moves backward : 5 cells."
            },
            {
              "level": 10,
              "text": "1000% ATK / 1500% ATK (Enrage) / area of effect : 7 x 7 cells / moves backward : 5 cells."
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6534.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6534",
          "tree": {
            "idx": 37,
            "row": 4,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 6535,
                "level": 3,
                "name": "Low Flight",
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
                "value": "Single target"
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
                    "id": "area-of-effect",
                    "label": "Area of Effect"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "area-of-effect": "3x3",
                      "base-damage-atk": "100%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "3x3",
                      "base-damage-atk": "200%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "3x3",
                      "base-damage-atk": "300%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk": "400%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk": "500%"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk": "600%"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk": "700%"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-atk": "800%"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-atk": "900%"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-atk": "1000%"
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
      "id": 6583,
      "imageFile": "6583.png",
      "name": "Flip Flap",
      "maxLevel": 5,
      "prerequisiteText": "Sixth Sense 1",
      "group": "Active",
      "type": "Buff",
      "target": "Instant Casting",
      "recoversAp": "",
      "consumesAp": "",
      "description": "Can only be used while in [Wereraptor] state.\nReorganizes the user's formation with a powerful flap, increasing long ranged physical damage and critical hit chance for the duration.",
      "levelDetails": [
        {
          "level": 1,
          "text": ": Increases long ranged physical damage by 6% / CRI + 3 / duration : 60 seconds."
        },
        {
          "level": 2,
          "text": ": Increases long ranged physical damage by 12% / CRI + 6 / duration : 120 seconds."
        },
        {
          "level": 3,
          "text": ": Increases long ranged physical damage by 18% / CRI + 9 / duration : 180 seconds."
        },
        {
          "level": 4,
          "text": ": Increases long ranged physical damage by 24% / CRI + 12 / duration : 240 seconds."
        },
        {
          "level": 5,
          "text": ": Increases long ranged physical damage by 30% / CRI + 15 / duration : 300 seconds."
        }
      ],
      "levelExtras": [],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/6583.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6583",
      "tree": {
        "idx": 1,
        "row": 0,
        "col": 1,
        "columns": 9,
        "requirements": [
          {
            "id": 6575,
            "level": 1,
            "name": "Sixth Sense",
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
            "value": "Instant Casting"
          }
        ],
        "levelTables": [
          {
            "title": "Level Scaling",
            "columns": [
              {
                "id": "duration",
                "label": "Duration"
              },
              {
                "id": "increases-long-ranged-physical-damage-by-12-cri",
                "label": ": Increases Long Ranged Physical Damage By 12% / Cri"
              },
              {
                "id": "increases-long-ranged-physical-damage-by-18-cri",
                "label": ": Increases Long Ranged Physical Damage By 18% / Cri"
              },
              {
                "id": "increases-long-ranged-physical-damage-by-24-cri",
                "label": ": Increases Long Ranged Physical Damage By 24% / Cri"
              },
              {
                "id": "increases-long-ranged-physical-damage-by-30-cri",
                "label": ": Increases Long Ranged Physical Damage By 30% / Cri"
              },
              {
                "id": "increases-long-ranged-physical-damage-by-6-cri",
                "label": ": Increases Long Ranged Physical Damage By 6% / Cri"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "duration": "60 seconds",
                  "increases-long-ranged-physical-damage-by-6-cri": "+ 3"
                }
              },
              {
                "level": 2,
                "values": {
                  "duration": "120 seconds",
                  "increases-long-ranged-physical-damage-by-12-cri": "+ 6"
                }
              },
              {
                "level": 3,
                "values": {
                  "duration": "180 seconds",
                  "increases-long-ranged-physical-damage-by-18-cri": "+ 9"
                }
              },
              {
                "level": 4,
                "values": {
                  "duration": "240 seconds",
                  "increases-long-ranged-physical-damage-by-24-cri": "+ 12"
                }
              },
              {
                "level": 5,
                "values": {
                  "duration": "300 seconds",
                  "increases-long-ranged-physical-damage-by-30-cri": "+ 15"
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
      "id": 6592,
      "imageFile": "6592.png",
      "name": "Glacial Monolith",
      "maxLevel": 1,
      "prerequisiteText": "Ice Pillar 5",
      "group": "Active",
      "type": "Magic",
      "target": "Instant Casting",
      "recoversAp": "2",
      "consumesAp": "",
      "description": "Summons the monolith at the target location, dealing water property magical damage and granting Glacial Monolith effect to a 15 x 15 cells area around the designated point.\nWhile the monolith is present, using certain skills within its range triggers Glacial Nova skill, dealing water property magical damage to enemies around the monolith.\nIf under Truth of Ice state, deals additional damage depending on the user's base level and SPL.\nCast range: 7 cells.\nGlacial Nova\nThis skill activates when Glacial skills are used near the Glacial Monolith.\nDeals water property magical damage to the enemies near the Glacial Monolith.",
      "levelDetails": [
        {
          "level": 1,
          "text": "7100% MATK / area of effect : 3 x 3 cells / duration : 10 seconds."
        },
        {
          "level": 2,
          "text": "7400% MATK / area of effect : 3 x 3 cells / duration : 10.5 seconds."
        },
        {
          "level": 3,
          "text": "7700% MATK / area of effect : 3 x 3 cells / duration : 11 seconds."
        },
        {
          "level": 4,
          "text": "8000% MATK / area of effect : 3 x 3 cells / duration : 11.5 seconds."
        },
        {
          "level": 5,
          "text": "8300% MATK / area of effect : 3 x 3 cells / duration : 12 seconds."
        },
        {
          "level": 6,
          "text": "8600% MATK / area of effect : 3 x 3 cells / duration : 12.5 seconds."
        },
        {
          "level": 7,
          "text": "8900% MATK / area of effect : 5 x 5 cells / duration : 13 seconds."
        },
        {
          "level": 8,
          "text": "9200% MATK / area of effect : 5 x 5 cells / duration : 13.5 seconds."
        },
        {
          "level": 9,
          "text": "9500% MATK / area of effect : 5 x 5 cells / duration : 14 seconds."
        },
        {
          "level": 10,
          "text": "9800% MATK / area of effect : 5 x 5 cells / duration : 15 seconds."
        },
        {
          "level": 1,
          "text": "15000% MATK / area of effect : 9 x 9 cells."
        }
      ],
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "1.2 seconds",
      "castDelay": "0.2 seconds",
      "cooldown": "3 seconds",
      "levelExtras": [],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/6592.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6592",
      "tree": {
        "idx": 4,
        "row": 0,
        "col": 4,
        "columns": 9,
        "requirements": [
          {
            "id": 6561,
            "level": 5,
            "name": "Ice Pillar",
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
            "label": "Fixed Cast Time",
            "value": "1.5 seconds"
          },
          {
            "label": "Variable Cast Time",
            "value": "1.2 seconds"
          },
          {
            "label": "Cast Delay",
            "value": "0.2 seconds"
          },
          {
            "label": "Cooldown",
            "value": "3 seconds"
          },
          {
            "label": "Target",
            "value": "Instant Casting"
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
                  "area-of-effect": "9x9",
                  "base-damage-matk": "15000%"
                }
              },
              {
                "level": 2,
                "values": {
                  "area-of-effect": "3x3",
                  "duration": "10.5 seconds",
                  "base-damage-matk": "7400%"
                }
              },
              {
                "level": 3,
                "values": {
                  "area-of-effect": "3x3",
                  "duration": "11 seconds",
                  "base-damage-matk": "7700%"
                }
              },
              {
                "level": 4,
                "values": {
                  "area-of-effect": "3x3",
                  "duration": "11.5 seconds",
                  "base-damage-matk": "8000%"
                }
              },
              {
                "level": 5,
                "values": {
                  "area-of-effect": "3x3",
                  "duration": "12 seconds",
                  "base-damage-matk": "8300%"
                }
              },
              {
                "level": 6,
                "values": {
                  "area-of-effect": "3x3",
                  "duration": "12.5 seconds",
                  "base-damage-matk": "8600%"
                }
              },
              {
                "level": 7,
                "values": {
                  "area-of-effect": "5x5",
                  "duration": "13 seconds",
                  "base-damage-matk": "8900%"
                }
              },
              {
                "level": 8,
                "values": {
                  "area-of-effect": "5x5",
                  "duration": "13.5 seconds",
                  "base-damage-matk": "9200%"
                }
              },
              {
                "level": 9,
                "values": {
                  "area-of-effect": "5x5",
                  "duration": "14 seconds",
                  "base-damage-matk": "9500%"
                }
              },
              {
                "level": 10,
                "values": {
                  "area-of-effect": "5x5",
                  "duration": "15 seconds",
                  "base-damage-matk": "9800%"
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
      "id": 6599,
      "imageFile": "6599.png",
      "name": "Roaring Charge",
      "maxLevel": 5,
      "prerequisiteText": "Thundering Focus 5",
      "group": "Active",
      "type": "Magic",
      "target": "Instant Casting",
      "recoversAp": "1~5, +5 (enhanced)",
      "consumesAp": "",
      "description": "Calls down lightning on the user, dealing wind property magical damage to enemies within a surrounding area for 2 hits and gaining multiple stacks of Charge effect.\nIf the skill is used while Overcharged, an enhanced version is used, increasing the number of hit to 3 hits and recovering an additional 5 AP.\nIf under Truth of Wind state, deals additional damage depending on the user's base level and SPL.",
      "levelDetails": [
        {
          "level": 1,
          "text": "8000% MATK / 11500% MATK (enhanced) per hit / area of effect : 5 x 5 cells."
        },
        {
          "level": 2,
          "text": "8400% MATK / 12000% MATK (enhanced) per hit / area of effect : 5 x 5 cells."
        },
        {
          "level": 3,
          "text": "8800% MATK / 12500% MATK (enhanced) per hit / area of effect : 5 x 5 cells."
        },
        {
          "level": 4,
          "text": "9200% MATK / 13000% MATK (enhanced) per hit / area of effect : 5 x 5 cells."
        },
        {
          "level": 5,
          "text": "9600% MATK / 13500% MATK (enhanced) per hit / area of effect : 5 x 5 cells."
        }
      ],
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "1.4 seconds",
      "castDelay": "0.4 seconds",
      "levelExtras": [],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/6599.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6599",
      "tree": {
        "idx": 5,
        "row": 0,
        "col": 5,
        "columns": 9,
        "requirements": [
          {
            "id": 6563,
            "level": 5,
            "name": "Thundering Focus",
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
            "value": "1.4 seconds"
          },
          {
            "label": "Cast Delay",
            "value": "0.4 seconds"
          },
          {
            "label": "Target",
            "value": "Instant Casting"
          },
          {
            "label": "AP Generated",
            "value": "1~5, +5 (enhanced)"
          }
        ],
        "levelTables": [
          {
            "title": "Level Scaling",
            "columns": [
              {
                "id": "base-damage-matk-per-hit",
                "label": "Base Damage (MATK per Hit)"
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
                  "base-damage-matk-per-hit": "8000%"
                }
              },
              {
                "level": 2,
                "values": {
                  "area-of-effect": "5x5",
                  "base-damage-matk-per-hit": "8400%"
                }
              },
              {
                "level": 3,
                "values": {
                  "area-of-effect": "5x5",
                  "base-damage-matk-per-hit": "8800%"
                }
              },
              {
                "level": 4,
                "values": {
                  "area-of-effect": "5x5",
                  "base-damage-matk-per-hit": "9200%"
                }
              },
              {
                "level": 5,
                "values": {
                  "area-of-effect": "5x5",
                  "base-damage-matk-per-hit": "9600%"
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
      "id": 6603,
      "imageFile": "6603.png",
      "name": "Terra Harvest",
      "maxLevel": 10,
      "prerequisiteText": "Earth Bud 5",
      "group": "Active",
      "type": "Magic",
      "target": "Single target",
      "recoversAp": "2",
      "consumesAp": "",
      "description": "Blooms the target with earth flower, dealing earth property magical damage to enemies within a range and gaining 2 stacks of Growth effect.\nIf the skill is used while Growth effect is complete, Ground Bloom skill will be activated.\nIf under Truth of Earth state, deals additional damage depending on the user's base level and SPL.\nCast range: 7 cells.",
      "levelDetails": [
        {
          "level": 1,
          "text": "18000% MATK / area of effect : 5 x 5 cells."
        },
        {
          "level": 2,
          "text": "18500% MATK / area of effect : 5 x 5 cells."
        },
        {
          "level": 3,
          "text": "19000% MATK / area of effect : 5 x 5 cells."
        },
        {
          "level": 4,
          "text": "19500% MATK / area of effect : 5 x 5 cells."
        },
        {
          "level": 5,
          "text": "20000% MATK / area of effect : 5 x 5 cells."
        },
        {
          "level": 6,
          "text": "20500% MATK / area of effect : 5 x 5 cells."
        },
        {
          "level": 7,
          "text": "21000% MATK / area of effect : 5 x 5 cells."
        },
        {
          "level": 8,
          "text": "21500% MATK / area of effect : 5 x 5 cells."
        },
        {
          "level": 9,
          "text": "22000% MATK / area of effect : 5 x 5 cells."
        },
        {
          "level": 10,
          "text": "22500% MATK / area of effect : 5 x 5 cells."
        }
      ],
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "0.5 seconds",
      "castDelay": "0.2 seconds",
      "cooldown": "0.5 seconds",
      "levelExtras": [],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/6603.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6603",
      "tree": {
        "idx": 6,
        "row": 0,
        "col": 6,
        "columns": 9,
        "requirements": [
          {
            "id": 6571,
            "level": 5,
            "name": "Earth Bud",
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
            "value": "1.5 seconds"
          },
          {
            "label": "Variable Cast Time",
            "value": "0.5 seconds"
          },
          {
            "label": "Cast Delay",
            "value": "0.2 seconds"
          },
          {
            "label": "Cooldown",
            "value": "0.5 seconds"
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
                "id": "base-damage-matk",
                "label": "Base Damage (MATK)"
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
                  "base-damage-matk": "18000%"
                }
              },
              {
                "level": 2,
                "values": {
                  "area-of-effect": "5x5",
                  "base-damage-matk": "18500%"
                }
              },
              {
                "level": 3,
                "values": {
                  "area-of-effect": "5x5",
                  "base-damage-matk": "19000%"
                }
              },
              {
                "level": 4,
                "values": {
                  "area-of-effect": "5x5",
                  "base-damage-matk": "19500%"
                }
              },
              {
                "level": 5,
                "values": {
                  "area-of-effect": "5x5",
                  "base-damage-matk": "20000%"
                }
              },
              {
                "level": 6,
                "values": {
                  "area-of-effect": "5x5",
                  "base-damage-matk": "20500%"
                }
              },
              {
                "level": 7,
                "values": {
                  "area-of-effect": "5x5",
                  "base-damage-matk": "21000%"
                }
              },
              {
                "level": 8,
                "values": {
                  "area-of-effect": "5x5",
                  "base-damage-matk": "21500%"
                }
              },
              {
                "level": 9,
                "values": {
                  "area-of-effect": "5x5",
                  "base-damage-matk": "22000%"
                }
              },
              {
                "level": 10,
                "values": {
                  "area-of-effect": "5x5",
                  "base-damage-matk": "22500%"
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
      "id": 6578,
      "imageFile": "6578.png",
      "name": "Primal Claw",
      "maxLevel": 5,
      "prerequisiteText": "Sixth Sense 3",
      "group": "Active",
      "type": "Melee physical",
      "target": "Single Target",
      "recoversAp": "1",
      "consumesAp": "",
      "description": "an only be used while in [Werewolf] state.\nThe first claw, imbued with primal rage, opens the path to hunting.\nInstantly dashes to the enemy within 5 cells range, dealing melee physical damage to all enemies within surrounding range.\nAfter using Primal Claw, Feral Claw can be used for 5 seconds.\nDeals additional damage depending on the user's base level and POW.\nIf in Madness state, the effect is enhanced according to the level.\nMadness (level 1)\nPrimal Claw ATK + 800%.\nMadness (level 2)\nChanges area of effect to 7 x 7 cells.\nMadness (level 3)\nApplies critical damage, the critical chance is the user's CRI (however, the effectiveness of critical modifier is applied by half).",
      "levelDetails": [
        {
          "level": 1,
          "text": "1100% ATK / 1900% ATK (Madness level 1) / area of effect : 5 x 5 cells / 7 x 7 cells (Madness level 2)."
        },
        {
          "level": 2,
          "text": "2050% ATK / 2850% ATK (Madness level 1) / area of effect : 5 x 5 cells / 7 x 7 cells (Madness level 2)."
        },
        {
          "level": 3,
          "text": "3000% ATK / 3800% ATK (Madness level 1) / area of effect : 5 x 5 cells / 7 x 7 cells (Madness level 2)."
        },
        {
          "level": 4,
          "text": "3950% ATK / 4750% ATK (Madness level 1) / area of effect : 5 x 5 cells / 7 x 7 cells (Madness level 2)."
        },
        {
          "level": 5,
          "text": "4900% ATK / 5700% ATK (Madness level 1) / area of effect : 5 x 5 cells / 7 x 7 cells (Madness level 2)."
        }
      ],
      "levelExtras": [],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/6578.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6578",
      "tree": {
        "idx": 7,
        "row": 0,
        "col": 7,
        "columns": 9,
        "requirements": [
          {
            "id": 6575,
            "level": 3,
            "name": "Sixth Sense",
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
                "id": "base-damage-atk",
                "label": "Base Damage (ATK)"
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
                  "base-damage-atk": "1100%"
                }
              },
              {
                "level": 2,
                "values": {
                  "area-of-effect": "5x5",
                  "base-damage-atk": "2050%"
                }
              },
              {
                "level": 3,
                "values": {
                  "area-of-effect": "5x5",
                  "base-damage-atk": "3000%"
                }
              },
              {
                "level": 4,
                "values": {
                  "area-of-effect": "5x5",
                  "base-damage-atk": "3950%"
                }
              },
              {
                "level": 5,
                "values": {
                  "area-of-effect": "5x5",
                  "base-damage-atk": "4900%"
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
      "id": 6586,
      "imageFile": "6586.png",
      "name": "Pinion Shot",
      "maxLevel": 10,
      "prerequisiteText": "Sixth Sense 3",
      "group": "Active",
      "type": "Ranged Physical",
      "target": "Single target",
      "recoversAp": "2",
      "consumesAp": "",
      "description": "Can only be used while in [Wereraptor] state.\nSwiftly subdues the prey with sharp feather.\nDeals long ranged physical damage to the target enemy.\nWhen the skill is used, gains 1 stack of [Gale Charge] state and can be accumulated up to 5 stacks.\nWhen using the skill after gaining maximum stack, grants [Gale Acceleration] to the party members within a 9 x 9 cells area around the user.\n[Gale Acceleration]: Increases melee and long ranged physical damage by 15% / Increases all property magical damage by 15%.\nDeals additional damage depending on the user's base level and CON.\nThe skill's effect is enhanced during Apex Phase.\nApex Phase\nIncreases Pinion Shot damage by 30%.\nApplies critical damage, the critical chance is the user's CRI (however, the effectiveness of critical modifier is applied by half).",
      "levelDetails": [
        {
          "level": 1,
          "text": "Atk 2450%"
        },
        {
          "level": 2,
          "text": "Atk 4900%"
        },
        {
          "level": 3,
          "text": "Atk 7350%"
        },
        {
          "level": 4,
          "text": "Atk 9800%"
        },
        {
          "level": 5,
          "text": "Atk 12250%"
        },
        {
          "level": 6,
          "text": "Atk 14700%"
        },
        {
          "level": 7,
          "text": "Atk 17150%"
        },
        {
          "level": 8,
          "text": "Atk 19600%"
        },
        {
          "level": 9,
          "text": "Atk 22050%"
        },
        {
          "level": 10,
          "text": "Atk 24500%"
        }
      ],
      "fixedCastTime": "1 second",
      "variableCastTime": "1 second",
      "castDelay": "0.5 seconds",
      "cooldown": "0.35 seconds",
      "levelExtras": [],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/6586.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6586",
      "tree": {
        "idx": 8,
        "row": 0,
        "col": 8,
        "columns": 9,
        "requirements": [
          {
            "id": 6575,
            "level": 3,
            "name": "Sixth Sense",
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
            "value": "0.35 seconds"
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
                "id": "base-damage-atk",
                "label": "Base Damage (ATK)"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "base-damage-atk": "2450%"
                }
              },
              {
                "level": 2,
                "values": {
                  "base-damage-atk": "4900%"
                }
              },
              {
                "level": 3,
                "values": {
                  "base-damage-atk": "7350%"
                }
              },
              {
                "level": 4,
                "values": {
                  "base-damage-atk": "9800%"
                }
              },
              {
                "level": 5,
                "values": {
                  "base-damage-atk": "12250%"
                }
              },
              {
                "level": 6,
                "values": {
                  "base-damage-atk": "14700%"
                }
              },
              {
                "level": 7,
                "values": {
                  "base-damage-atk": "17150%"
                }
              },
              {
                "level": 8,
                "values": {
                  "base-damage-atk": "19600%"
                }
              },
              {
                "level": 9,
                "values": {
                  "base-damage-atk": "22050%"
                }
              },
              {
                "level": 10,
                "values": {
                  "base-damage-atk": "24500%"
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
      "id": 6577,
      "imageFile": "6577.png",
      "name": "Alpha Phase",
      "maxLevel": 5,
      "prerequisiteText": "Pulse of Madness 3",
      "group": "Active(AP)",
      "type": "Buff",
      "target": "Instant Casting",
      "recoversAp": "",
      "consumesAp": "130",
      "description": "Can only be used while in [Werewolf] state.\nThe seething instinct of alpha dominates the user's entire body.\nDuring the duration, the user can use the maximum effect of Madness level 3.",
      "levelDetails": [
        {
          "level": 1,
          "text": "Duration 60 seconds."
        },
        {
          "level": 2,
          "text": "Duration 120 seconds."
        },
        {
          "level": 3,
          "text": "Duration 180 seconds."
        },
        {
          "level": 4,
          "text": "Duration 240 seconds."
        },
        {
          "level": 5,
          "text": "Duration 300 seconds."
        }
      ],
      "levelExtras": [],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/6577.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6577",
      "tree": {
        "idx": 9,
        "row": 1,
        "col": 0,
        "columns": 9,
        "requirements": [
          {
            "id": 6576,
            "level": 3,
            "name": "Pulse of Madness",
            "visible": false
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
            "label": "Target",
            "value": "Instant Casting"
          },
          {
            "label": "AP Consumed",
            "value": "130"
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
                  "duration": "60 seconds"
                }
              },
              {
                "level": 2,
                "values": {
                  "duration": "120 seconds"
                }
              },
              {
                "level": 3,
                "values": {
                  "duration": "180 seconds"
                }
              },
              {
                "level": 4,
                "values": {
                  "duration": "240 seconds"
                }
              },
              {
                "level": 5,
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
      "id": 6594,
      "imageFile": "6594.png",
      "name": "Glacial Shard",
      "maxLevel": 10,
      "prerequisiteText": "Glacial Monolith 3",
      "group": "Active",
      "type": "Magic",
      "target": "Single target",
      "recoversAp": "2",
      "consumesAp": "",
      "description": "Creates a glacier and shatters it, dealing water property magical damage to the target and surrounding enemies for 3 hits.\nIf under Truth of Ice state, deals additional damage depending on the user's base level and SPL.\nCast range: 7 cells.",
      "levelDetails": [
        {
          "level": 1,
          "text": "5500% MATK per hit / area of effect : diamond shape (3 cells radius)."
        },
        {
          "level": 2,
          "text": "5800% MATK per hit / area of effect : diamond shape (3 cells radius)."
        },
        {
          "level": 3,
          "text": "6100% MATK per hit / area of effect : diamond shape (3 cells radius)."
        },
        {
          "level": 4,
          "text": "6400% MATK per hit / area of effect : diamond shape (3 cells radius)."
        },
        {
          "level": 5,
          "text": "6700% MATK per hit / area of effect : diamond shape (3 cells radius)."
        },
        {
          "level": 6,
          "text": "7000% MATK per hit / area of effect : diamond shape (3 cells radius)."
        },
        {
          "level": 7,
          "text": "7300% MATK per hit / area of effect : diamond shape (3 cells radius)."
        },
        {
          "level": 8,
          "text": "7600% MATK per hit / area of effect : diamond shape (3 cells radius)."
        },
        {
          "level": 9,
          "text": "7900% MATK per hit / area of effect : diamond shape (3 cells radius)."
        },
        {
          "level": 10,
          "text": "8200% MATK per hit / area of effect : diamond shape (3 cells radius)."
        }
      ],
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "1 second",
      "castDelay": "0.2 seconds",
      "cooldown": "0.5 seconds",
      "levelExtras": [],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/6594.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6594",
      "tree": {
        "idx": 11,
        "row": 1,
        "col": 2,
        "columns": 9,
        "requirements": [
          {
            "id": 6592,
            "level": 3,
            "name": "Glacial Monolith",
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
            "value": "1 second"
          },
          {
            "label": "Cast Delay",
            "value": "0.2 seconds"
          },
          {
            "label": "Cooldown",
            "value": "0.5 seconds"
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
                "id": "base-damage-matk-per-hit",
                "label": "Base Damage (MATK per Hit)"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "base-damage-matk-per-hit": "5500%"
                }
              },
              {
                "level": 2,
                "values": {
                  "base-damage-matk-per-hit": "5800%"
                }
              },
              {
                "level": 3,
                "values": {
                  "base-damage-matk-per-hit": "6100%"
                }
              },
              {
                "level": 4,
                "values": {
                  "base-damage-matk-per-hit": "6400%"
                }
              },
              {
                "level": 5,
                "values": {
                  "base-damage-matk-per-hit": "6700%"
                }
              },
              {
                "level": 6,
                "values": {
                  "base-damage-matk-per-hit": "7000%"
                }
              },
              {
                "level": 7,
                "values": {
                  "base-damage-matk-per-hit": "7300%"
                }
              },
              {
                "level": 8,
                "values": {
                  "base-damage-matk-per-hit": "7600%"
                }
              },
              {
                "level": 9,
                "values": {
                  "base-damage-matk-per-hit": "7900%"
                }
              },
              {
                "level": 10,
                "values": {
                  "base-damage-matk-per-hit": "8200%"
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
      "id": 6597,
      "imageFile": "6597.png",
      "name": "Roaring Piercer",
      "maxLevel": 10,
      "prerequisiteText": "Roaring Charge 3",
      "group": "Active",
      "type": "Magic",
      "target": "Single target",
      "recoversAp": "2",
      "consumesAp": "",
      "description": "Throws a sharp spear of lightning at the designated target, dealing wind property magical damage to the target and enemies within the surrounding area for 2 hits and gaining 1 stacks of Charge effect.\nIf the skill is used while Overcharged, an enhanced version is used, increasing the number of hit to 3 hits.\nIf under Truth of Wind state, deals additional damage depending on the user's base level and INT.\nCast range: 8 cells.",
      "levelDetails": [
        {
          "level": 1,
          "text": "7050% MATK / 11250% MATK (enhanced) per hit / area of effect : 5 x 9 cells."
        },
        {
          "level": 2,
          "text": "7750% MATK / 12000% MATK (enhanced) per hit / area of effect : 5 x 9 cells."
        },
        {
          "level": 3,
          "text": "8450% MATK / 12750% MATK (enhanced) per hit / area of effect : 5 x 9 cells."
        },
        {
          "level": 4,
          "text": "9150% MATK / 13500% MATK (enhanced) per hit / area of effect : 5 x 9 cells."
        },
        {
          "level": 5,
          "text": "9850% MATK / 14250% MATK (enhanced) per hit / area of effect : 5 x 9 cells."
        },
        {
          "level": 6,
          "text": "10550% MATK / 15000% MATK (enhanced) per hit / area of effect : 5 x 9 cells."
        },
        {
          "level": 7,
          "text": "11250% MATK / 15750% MATK (enhanced) per hit / area of effect : 5 x 9 cells."
        },
        {
          "level": 8,
          "text": "11950% MATK / 16500% MATK (enhanced) per hit / area of effect : 5 x 9 cells."
        },
        {
          "level": 9,
          "text": "12650% MATK / 17250% MATK (enhanced) per hit / area of effect : 5 x 9 cells."
        },
        {
          "level": 10,
          "text": "13350% MATK / 18000% MATK (enhanced) per hit / area of effect : 5 x 9 cells."
        }
      ],
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "1.3 seconds",
      "castDelay": "0.4 seconds",
      "cooldown": "0.5 seconds",
      "levelExtras": [],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/6597.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6597",
      "tree": {
        "idx": 12,
        "row": 1,
        "col": 3,
        "columns": 9,
        "requirements": [
          {
            "id": 6599,
            "level": 3,
            "name": "Roaring Charge",
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
            "value": "1.3 seconds"
          },
          {
            "label": "Cast Delay",
            "value": "0.4 seconds"
          },
          {
            "label": "Cooldown",
            "value": "0.5 seconds"
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
                "id": "base-damage-matk-per-hit",
                "label": "Base Damage (MATK per Hit)"
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
                  "area-of-effect": "5x9",
                  "base-damage-matk-per-hit": "7050%"
                }
              },
              {
                "level": 2,
                "values": {
                  "area-of-effect": "5x9",
                  "base-damage-matk-per-hit": "7750%"
                }
              },
              {
                "level": 3,
                "values": {
                  "area-of-effect": "5x9",
                  "base-damage-matk-per-hit": "8450%"
                }
              },
              {
                "level": 4,
                "values": {
                  "area-of-effect": "5x9",
                  "base-damage-matk-per-hit": "9150%"
                }
              },
              {
                "level": 5,
                "values": {
                  "area-of-effect": "5x9",
                  "base-damage-matk-per-hit": "9850%"
                }
              },
              {
                "level": 6,
                "values": {
                  "area-of-effect": "5x9",
                  "base-damage-matk-per-hit": "10550%"
                }
              },
              {
                "level": 7,
                "values": {
                  "area-of-effect": "5x9",
                  "base-damage-matk-per-hit": "11250%"
                }
              },
              {
                "level": 8,
                "values": {
                  "area-of-effect": "5x9",
                  "base-damage-matk-per-hit": "11950%"
                }
              },
              {
                "level": 9,
                "values": {
                  "area-of-effect": "5x9",
                  "base-damage-matk-per-hit": "12650%"
                }
              },
              {
                "level": 10,
                "values": {
                  "area-of-effect": "5x9",
                  "base-damage-matk-per-hit": "13350%"
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
      "id": 6602,
      "imageFile": "6602.png",
      "name": "Terra Wave",
      "maxLevel": 10,
      "prerequisiteText": "Terra Harvest 5",
      "group": "Active",
      "type": "Magic",
      "target": "1 cell ground target",
      "recoversAp": "3",
      "consumesAp": "",
      "description": "Sends an earth wave to the designated ground target, dealing earth property magical damage to enemies within 3 x 12 area of effect and gaining 2 stacks of Growth effect.\nCancels a certain ground-targeting spell placed within the area of effect.\nIf there are immobile cells around the designated location, the effect will not activate.\nIf the skill is used while Growth effect is complete, Ground Bloom skill will be activated.\nIf under Truth of Earth state, deals additional damage depending on the user's base level and SPL.\nCast range: 2 cells.",
      "levelDetails": [
        {
          "level": 1,
          "text": "12000% MATK / area of effect : 3 x 12 cells."
        },
        {
          "level": 2,
          "text": "12300% MATK / area of effect : 3 x 12 cells."
        },
        {
          "level": 3,
          "text": "12600% MATK / area of effect : 3 x 12 cells."
        },
        {
          "level": 4,
          "text": "12900% MATK / area of effect : 3 x 12 cells."
        },
        {
          "level": 5,
          "text": "13200% MATK / area of effect : 3 x 12 cells."
        },
        {
          "level": 6,
          "text": "13500% MATK / area of effect : 3 x 12 cells."
        },
        {
          "level": 7,
          "text": "13800% MATK / area of effect : 3 x 12 cells."
        },
        {
          "level": 8,
          "text": "14100% MATK / area of effect : 3 x 12 cells."
        },
        {
          "level": 9,
          "text": "14400% MATK / area of effect : 3 x 12 cells."
        },
        {
          "level": 10,
          "text": "14700% MATK / area of effect : 3 x 12 cells."
        }
      ],
      "levelExtras": [],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/6602.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6602",
      "tree": {
        "idx": 13,
        "row": 1,
        "col": 4,
        "columns": 9,
        "requirements": [
          {
            "id": 6603,
            "level": 5,
            "name": "Terra Harvest",
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
            "value": "1 cell ground target"
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
                "id": "base-damage-matk",
                "label": "Base Damage (MATK)"
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
                  "area-of-effect": "3x12",
                  "base-damage-matk": "12000%"
                }
              },
              {
                "level": 2,
                "values": {
                  "area-of-effect": "3x12",
                  "base-damage-matk": "12300%"
                }
              },
              {
                "level": 3,
                "values": {
                  "area-of-effect": "3x12",
                  "base-damage-matk": "12600%"
                }
              },
              {
                "level": 4,
                "values": {
                  "area-of-effect": "3x12",
                  "base-damage-matk": "12900%"
                }
              },
              {
                "level": 5,
                "values": {
                  "area-of-effect": "3x12",
                  "base-damage-matk": "13200%"
                }
              },
              {
                "level": 6,
                "values": {
                  "area-of-effect": "3x12",
                  "base-damage-matk": "13500%"
                }
              },
              {
                "level": 7,
                "values": {
                  "area-of-effect": "3x12",
                  "base-damage-matk": "13800%"
                }
              },
              {
                "level": 8,
                "values": {
                  "area-of-effect": "3x12",
                  "base-damage-matk": "14100%"
                }
              },
              {
                "level": 9,
                "values": {
                  "area-of-effect": "3x12",
                  "base-damage-matk": "14400%"
                }
              },
              {
                "level": 10,
                "values": {
                  "area-of-effect": "3x12",
                  "base-damage-matk": "14700%"
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
      "id": 6579,
      "imageFile": "6579.png",
      "name": "Feral Claw",
      "maxLevel": 5,
      "prerequisiteText": "Primal Claw 3",
      "group": "Active",
      "type": "Melee physical",
      "target": "Instant Casting",
      "recoversAp": "1",
      "consumesAp": "",
      "description": "Can only be used while in [Werewolf] state.\nCan be used within 5 seconds after using [Primal Claw].\nRampaging wild claw continuously strike the prey.\nDeals melee physical damage to all enemies within range around the user.\nAfter using Feral Claw, Alpha Claw can be used for 5 seconds.\nDeals additional damage depending on the user's base level and POW.\nIf in Madness state, the effect is enhanced according to the level.\nMadness (level 1)\nFeral Claw ATK + 800%.\nMadness (level 2)\nChanges area of effect to 9 x 9 cells.\nMadness (level 3)\nApplies critical damage, the critical chance is the user's CRI (however, the effectiveness of critical modifier is applied by half).",
      "levelDetails": [
        {
          "level": 1,
          "text": "1600% ATK / 2400% ATK (Madness level 1) / area of effect : 7 x 7 cells / 9 x 9 cells (Madness level 2)."
        },
        {
          "level": 2,
          "text": "2750% ATK / 3550% ATK (Madness level 1) / area of effect : 7 x 7 cells / 9 x 9 cells (Madness level 2)."
        },
        {
          "level": 3,
          "text": "3900% ATK / 4700% ATK (Madness level 1) / area of effect : 7 x 7 cells / 9 x 9 cells (Madness level 2)."
        },
        {
          "level": 4,
          "text": "5050% ATK / 5850% ATK (Madness level 1) / area of effect : 7 x 7 cells / 9 x 9 cells (Madness level 2)."
        },
        {
          "level": 5,
          "text": "6200% ATK / 7000% ATK (Madness level 1) / area of effect : 7 x 7 cells / 9 x 9 cells (Madness level 2)."
        }
      ],
      "levelExtras": [],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/6579.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6579",
      "tree": {
        "idx": 14,
        "row": 1,
        "col": 5,
        "columns": 9,
        "requirements": [
          {
            "id": 6578,
            "level": 3,
            "name": "Primal Claw",
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
            "value": "Instant Casting"
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
                "id": "base-damage-atk",
                "label": "Base Damage (ATK)"
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
                  "base-damage-atk": "1600%"
                }
              },
              {
                "level": 2,
                "values": {
                  "area-of-effect": "7x7",
                  "base-damage-atk": "2750%"
                }
              },
              {
                "level": 3,
                "values": {
                  "area-of-effect": "7x7",
                  "base-damage-atk": "3900%"
                }
              },
              {
                "level": 4,
                "values": {
                  "area-of-effect": "7x7",
                  "base-damage-atk": "5050%"
                }
              },
              {
                "level": 5,
                "values": {
                  "area-of-effect": "7x7",
                  "base-damage-atk": "6200%"
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
      "id": 6588,
      "imageFile": "6588.png",
      "name": "Quill Spear",
      "maxLevel": 10,
      "prerequisiteText": "Pinion Shot 3",
      "group": "Active",
      "type": "Ranged Physical",
      "target": "Single target",
      "recoversAp": "3",
      "consumesAp": "",
      "description": "Can only be used while in [Wereraptor] state.\nA wind-infused spear pierces the prey, dealing long ranged physical damage to the target and all enemies within a 3x7 cells around the target.\nDeals additional damage depending on the user's base level and CON.\nThe skill's effect is enhanced during Apex Phase.\nApex Phase\nIncreases Quill Spear damage by 30%.\nApplies critical damage, the critical chance is the user's CRI (however, the effectiveness of critical modifier is applied by half).\nChangess area of effect to 5 x 7 cells.",
      "levelDetails": [
        {
          "level": 1,
          "text": "Atk 2050%"
        },
        {
          "level": 2,
          "text": "Atk 4100%"
        },
        {
          "level": 3,
          "text": "Atk 6150%"
        },
        {
          "level": 4,
          "text": "Atk 8200%"
        },
        {
          "level": 5,
          "text": "Atk 10250%"
        },
        {
          "level": 6,
          "text": "Atk 12300%"
        },
        {
          "level": 7,
          "text": "Atk 14350%"
        },
        {
          "level": 8,
          "text": "Atk 16400%"
        },
        {
          "level": 9,
          "text": "Atk 18450%"
        },
        {
          "level": 10,
          "text": "Atk 20500%"
        }
      ],
      "fixedCastTime": "1 second",
      "variableCastTime": "1 second",
      "castDelay": "0.35 seconds",
      "cooldown": "0.7 seconds",
      "levelExtras": [],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/6588.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6588",
      "tree": {
        "idx": 15,
        "row": 1,
        "col": 6,
        "columns": 9,
        "requirements": [
          {
            "id": 6586,
            "level": 3,
            "name": "Pinion Shot",
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
            "value": "0.35 seconds"
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
            "value": "3"
          }
        ],
        "levelTables": [
          {
            "title": "Level Scaling",
            "columns": [
              {
                "id": "base-damage-atk",
                "label": "Base Damage (ATK)"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "base-damage-atk": "2050%"
                }
              },
              {
                "level": 2,
                "values": {
                  "base-damage-atk": "4100%"
                }
              },
              {
                "level": 3,
                "values": {
                  "base-damage-atk": "6150%"
                }
              },
              {
                "level": 4,
                "values": {
                  "base-damage-atk": "8200%"
                }
              },
              {
                "level": 5,
                "values": {
                  "base-damage-atk": "10250%"
                }
              },
              {
                "level": 6,
                "values": {
                  "base-damage-atk": "12300%"
                }
              },
              {
                "level": 7,
                "values": {
                  "base-damage-atk": "14350%"
                }
              },
              {
                "level": 8,
                "values": {
                  "base-damage-atk": "16400%"
                }
              },
              {
                "level": 9,
                "values": {
                  "base-damage-atk": "18450%"
                }
              },
              {
                "level": 10,
                "values": {
                  "base-damage-atk": "20500%"
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
      "id": 6585,
      "imageFile": "6585.png",
      "name": "Apex Phase",
      "maxLevel": 5,
      "prerequisiteText": "Flip Flap 3",
      "group": "Active(AP)",
      "type": "Buff",
      "target": "Instant Casting",
      "recoversAp": "",
      "consumesAp": "130",
      "description": "Can only be used while in [Wereraptor] state.\nThe instinct of sky predator envelop the user's wings.\nThis state grants buffs to Raptor attack-type skills for the duration.",
      "levelDetails": [
        {
          "level": 1,
          "text": "Duration 60 seconds."
        },
        {
          "level": 2,
          "text": "Duration 120 seconds."
        },
        {
          "level": 3,
          "text": "Duration 180 seconds."
        },
        {
          "level": 4,
          "text": "Duration 240 seconds."
        },
        {
          "level": 5,
          "text": "Duration 300 seconds."
        }
      ],
      "levelExtras": [],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/6585.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6585",
      "tree": {
        "idx": 16,
        "row": 1,
        "col": 7,
        "columns": 9,
        "requirements": [
          {
            "id": 6583,
            "level": 3,
            "name": "Flip Flap",
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
            "label": "Target",
            "value": "Instant Casting"
          },
          {
            "label": "AP Consumed",
            "value": "130"
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
                  "duration": "60 seconds"
                }
              },
              {
                "level": 2,
                "values": {
                  "duration": "120 seconds"
                }
              },
              {
                "level": 3,
                "values": {
                  "duration": "180 seconds"
                }
              },
              {
                "level": 4,
                "values": {
                  "duration": "240 seconds"
                }
              },
              {
                "level": 5,
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
      "id": 6595,
      "imageFile": "6595.png",
      "name": "Glacial Stomp",
      "maxLevel": 5,
      "prerequisiteText": "Glacial Shard 5",
      "group": "Active",
      "type": "Magic",
      "target": "Instant Casting",
      "recoversAp": "3",
      "consumesAp": "",
      "description": "Teleports to the Glacial Monolith, dealing water property magical damage to nearby enemies for 2 hits.\nThe skill cannot be used outside the Glacial Monolith's range.\nIf under Truth of Ice state, deals additional damage depending on the user's base level and SPL.",
      "levelDetails": [
        {
          "level": 1,
          "text": "6400% MATK per hit / area of effect : 7 x 7 cells."
        },
        {
          "level": 2,
          "text": "6900% MATK per hit / area of effect : 7 x 7 cells."
        },
        {
          "level": 3,
          "text": "7400% MATK per hit / area of effect : 7 x 7 cells."
        },
        {
          "level": 4,
          "text": "7900% MATK per hit / area of effect : 7 x 7 cells."
        },
        {
          "level": 5,
          "text": "8400% MATK per hit / area of effect : 7 x 7 cells."
        }
      ],
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "0.3 seconds",
      "castDelay": "0.2 seconds",
      "levelExtras": [],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/6595.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6595",
      "tree": {
        "idx": 18,
        "row": 2,
        "col": 0,
        "columns": 9,
        "requirements": [
          {
            "id": 6594,
            "level": 5,
            "name": "Glacial Shard",
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
            "value": "0.3 seconds"
          },
          {
            "label": "Cast Delay",
            "value": "0.2 seconds"
          },
          {
            "label": "Target",
            "value": "Instant Casting"
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
                "id": "base-damage-matk-per-hit",
                "label": "Base Damage (MATK per Hit)"
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
                  "base-damage-matk-per-hit": "6400%"
                }
              },
              {
                "level": 2,
                "values": {
                  "area-of-effect": "7x7",
                  "base-damage-matk-per-hit": "6900%"
                }
              },
              {
                "level": 3,
                "values": {
                  "area-of-effect": "7x7",
                  "base-damage-matk-per-hit": "7400%"
                }
              },
              {
                "level": 4,
                "values": {
                  "area-of-effect": "7x7",
                  "base-damage-matk-per-hit": "7900%"
                }
              },
              {
                "level": 5,
                "values": {
                  "area-of-effect": "7x7",
                  "base-damage-matk-per-hit": "8400%"
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
      "id": 6601,
      "imageFile": "6601.png",
      "name": "Furious Storm",
      "maxLevel": 5,
      "prerequisiteText": "Thundering Call 5, Roaring Charge 5, Roaring Piercer 5",
      "group": "Active(AP)",
      "type": "Magic",
      "target": "Instant Casting",
      "recoversAp": "",
      "consumesAp": "20~15",
      "description": "Summons a lightning storm to deal wind property magical damage to the enemies within its special range.\nDeals additional damage depending on the user's base level and SPL.\n*Activates while holding down the skill shortcut key.",
      "levelDetails": [
        {
          "level": 1,
          "text": "7800% MATK / area of effect : diamond shape (5 cells radius) / Consumes AP : 20 AP every 0.25 seconds."
        },
        {
          "level": 2,
          "text": "8200% MATK / area of effect : diamond shape (5 cells radius) / Consumes AP : 19 AP every 0.25 seconds."
        },
        {
          "level": 3,
          "text": "8600% MATK / area of effect : diamond shape (5 cells radius) / Consumes AP : 18 AP every 0.25 seconds."
        },
        {
          "level": 4,
          "text": "9000% MATK / area of effect : diamond shape (6 cells radius) / Consumes AP : 17 AP every 0.25 seconds."
        },
        {
          "level": 5,
          "text": "9400% MATK / area of effect : diamond shape (6 cells radius) / Consumes AP : 15 AP every 0.25 seconds."
        }
      ],
      "levelExtras": [],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/6601.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6601",
      "tree": {
        "idx": 19,
        "row": 2,
        "col": 1,
        "columns": 9,
        "requirements": [
          {
            "id": 6567,
            "level": 5,
            "name": "Thundering Call",
            "visible": false
          },
          {
            "id": 6597,
            "level": 5,
            "name": "Roaring Piercer",
            "visible": true
          },
          {
            "id": 6599,
            "level": 5,
            "name": "Roaring Charge",
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
            "label": "Target",
            "value": "Instant Casting"
          },
          {
            "label": "AP Consumed",
            "value": "20~15"
          }
        ],
        "levelTables": [
          {
            "title": "Level Scaling",
            "columns": [
              {
                "id": "base-damage-matk",
                "label": "Base Damage (MATK)"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "base-damage-matk": "7800%"
                }
              },
              {
                "level": 2,
                "values": {
                  "base-damage-matk": "8200%"
                }
              },
              {
                "level": 3,
                "values": {
                  "base-damage-matk": "8600%"
                }
              },
              {
                "level": 4,
                "values": {
                  "base-damage-matk": "9000%"
                }
              },
              {
                "level": 5,
                "values": {
                  "base-damage-matk": "9400%"
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
      "id": 6604,
      "imageFile": "6604.png",
      "name": "Solid Stomp",
      "maxLevel": 5,
      "prerequisiteText": "Terra Harvest 5, Terra Wave 5",
      "group": "Active(AP)",
      "type": "Magic",
      "target": "Instant Casting",
      "recoversAp": "",
      "consumesAp": "20/19/18/17/15",
      "description": "Sends a powerful shockwave through the ground, dealing earth property magical damage to nearby enemies and gaining 4 stacks of Growth effect.\nRecovers certain percentage of MaxHP to the user, and grants a buff to the user that reduces melee / long ranged physical damage taken by certain percentage and increases earth property magical damage by 15% for 10 seconds.\nDeals additional damage depending on the user's base level and SPL.",
      "levelDetails": [
        {
          "level": 1,
          "text": "10400% MATK / reduces melee / long ranged physical damage taken by 3% / recovers 1% of MaxHP / area of effect : 9 x 9 cells."
        },
        {
          "level": 2,
          "text": "11200% MATK / reduces melee / long ranged physical damage taken by 6% / recovers 2% of MaxHP / area of effect : 9 x 9 cells."
        },
        {
          "level": 3,
          "text": "12000% MATK / reduces melee / long ranged physical damage taken by 9% / recovers 3% of MaxHP / area of effect : 9 x 9 cells."
        },
        {
          "level": 4,
          "text": "12800% MATK / reduces melee / long ranged physical damage taken by 12% / recovers 4% of MaxHP / area of effect : 9 x 9 cells."
        },
        {
          "level": 5,
          "text": "13600% MATK / reduces melee / long ranged physical damage taken by 15% / recovers 5% of MaxHP / area of effect : 9 x 9 cells."
        }
      ],
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "0.3 seconds",
      "castDelay": "0.2 seconds",
      "cooldown": "5 seconds",
      "levelExtras": [],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/6604.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6604",
      "tree": {
        "idx": 20,
        "row": 2,
        "col": 2,
        "columns": 9,
        "requirements": [
          {
            "id": 6602,
            "level": 5,
            "name": "Terra Wave",
            "visible": true
          },
          {
            "id": 6603,
            "level": 5,
            "name": "Terra Harvest",
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
            "value": "0.3 seconds"
          },
          {
            "label": "Cast Delay",
            "value": "0.2 seconds"
          },
          {
            "label": "Cooldown",
            "value": "5 seconds"
          },
          {
            "label": "Target",
            "value": "Instant Casting"
          },
          {
            "label": "AP Consumed",
            "value": "20/19/18/17/15"
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
                "id": "area-of-effect",
                "label": "Area of Effect"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "area-of-effect": "9x9",
                  "base-damage-matk": "10400%"
                }
              },
              {
                "level": 2,
                "values": {
                  "area-of-effect": "9x9",
                  "base-damage-matk": "11200%"
                }
              },
              {
                "level": 3,
                "values": {
                  "area-of-effect": "9x9",
                  "base-damage-matk": "12000%"
                }
              },
              {
                "level": 4,
                "values": {
                  "area-of-effect": "9x9",
                  "base-damage-matk": "12800%"
                }
              },
              {
                "level": 5,
                "values": {
                  "area-of-effect": "9x9",
                  "base-damage-matk": "13600%"
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
      "id": 6580,
      "imageFile": "6580.png",
      "name": "Alpha Claw",
      "maxLevel": 5,
      "prerequisiteText": "Feral Claw 3",
      "group": "Active",
      "type": "Melee physical",
      "target": "Instant Casting",
      "recoversAp": "3",
      "consumesAp": "",
      "description": "Can only be used while in [Werewolf] state.\nCan be used within 5 seconds after using [Feral Claw].\nThe alpha's final claw suffocates the prey.\nDeals melee physical damage to all enemies within range around the user for 2 hits.\nDeals additional damage depending on the user's base level and POW.\nIf in Madness state, the effect is enhanced according to the level.\nMadness (level 1)\nAlpha Claw ATK + 800%.\nMadness (level 2)\nChanges area of effect to 9 x 9 cells.\nMadness (level 3)\nApplies critical damage, the critical chance is the user's CRI (however, the effectiveness of critical modifier is applied by half).",
      "levelDetails": [
        {
          "level": 1,
          "text": "2200% ATK / 3000% ATK (Madness level 1) per hit / area of effect : 7 x 7 cells / 9 x 9 cells (Madness level 2)."
        },
        {
          "level": 2,
          "text": "3600% ATK / 4400% ATK (Madness level 1) per hit / area of effect : 7 x 7 cells / 9 x 9 cells (Madness level 2)."
        },
        {
          "level": 3,
          "text": "5000% ATK / 5800% ATK (Madness level 1) per hit / area of effect : 7 x 7 cells / 9 x 9 cells (Madness level 2)."
        },
        {
          "level": 4,
          "text": "6400% ATK / 7200% ATK (Madness level 1) per hit / area of effect : 7 x 7 cells / 9 x 9 cells (Madness level 2)."
        },
        {
          "level": 5,
          "text": "7800% ATK / 8600% ATK (Madness level 1) per hit / area of effect : 7 x 7 cells / 9 x 9 cells (Madness level 2)."
        }
      ],
      "levelExtras": [],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/6580.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6580",
      "tree": {
        "idx": 21,
        "row": 2,
        "col": 3,
        "columns": 9,
        "requirements": [
          {
            "id": 6579,
            "level": 3,
            "name": "Feral Claw",
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
            "value": "Instant Casting"
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
                "id": "area-of-effect",
                "label": "Area of Effect"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "area-of-effect": "7x7",
                  "base-damage-atk-per-hit": "2200%"
                }
              },
              {
                "level": 2,
                "values": {
                  "area-of-effect": "7x7",
                  "base-damage-atk-per-hit": "3600%"
                }
              },
              {
                "level": 3,
                "values": {
                  "area-of-effect": "7x7",
                  "base-damage-atk-per-hit": "5000%"
                }
              },
              {
                "level": 4,
                "values": {
                  "area-of-effect": "7x7",
                  "base-damage-atk-per-hit": "6400%"
                }
              },
              {
                "level": 5,
                "values": {
                  "area-of-effect": "7x7",
                  "base-damage-atk-per-hit": "7800%"
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
      "id": 6590,
      "imageFile": "6590.png",
      "name": "Tempest Flap",
      "maxLevel": 10,
      "prerequisiteText": "Quill Spear 3",
      "group": "Active(AP)",
      "type": "Ranged Physical",
      "target": "Single target",
      "recoversAp": "",
      "consumesAp": "20",
      "description": "Can only be used while in [Wereraptor] state.\nCreates a storm with a violent flap of wings, dealing long ranged physical damage to the target and all enemies within range.\nDeals additional damage depending on the user's base level and CON.\nThe skill's effect is enhanced during Apex Phase.\nApex Phase\nApplies critical damage, the critical chance is the user's CRI (however, the effectiveness of critical modifier is applied by half).\nIncreases Tempest Flap damage by 30%.\nIncreases number of hit to 3 hits.",
      "levelDetails": [
        {
          "level": 1,
          "text": "1250% ATK per hit."
        },
        {
          "level": 2,
          "text": "2500% ATK per hit."
        },
        {
          "level": 3,
          "text": "3750% ATK per hit."
        },
        {
          "level": 4,
          "text": "5000% ATK per hit."
        },
        {
          "level": 5,
          "text": "6250% ATK per hit."
        },
        {
          "level": 6,
          "text": "7500% ATK per hit."
        },
        {
          "level": 7,
          "text": "8750% ATK per hit."
        },
        {
          "level": 8,
          "text": "10000% ATK per hit."
        },
        {
          "level": 9,
          "text": "11250% ATK per hit."
        },
        {
          "level": 10,
          "text": "12500% ATK per hit."
        }
      ],
      "levelExtras": [],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/6590.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6590",
      "tree": {
        "idx": 22,
        "row": 2,
        "col": 4,
        "columns": 9,
        "requirements": [
          {
            "id": 6588,
            "level": 3,
            "name": "Quill Spear",
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
            "label": "Target",
            "value": "Single target"
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
                "id": "base-damage-atk-per-hit",
                "label": "Base Damage (ATK per Hit)"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "base-damage-atk-per-hit": "1250%"
                }
              },
              {
                "level": 2,
                "values": {
                  "base-damage-atk-per-hit": "2500%"
                }
              },
              {
                "level": 3,
                "values": {
                  "base-damage-atk-per-hit": "3750%"
                }
              },
              {
                "level": 4,
                "values": {
                  "base-damage-atk-per-hit": "5000%"
                }
              },
              {
                "level": 5,
                "values": {
                  "base-damage-atk-per-hit": "6250%"
                }
              },
              {
                "level": 6,
                "values": {
                  "base-damage-atk-per-hit": "7500%"
                }
              },
              {
                "level": 7,
                "values": {
                  "base-damage-atk-per-hit": "8750%"
                }
              },
              {
                "level": 8,
                "values": {
                  "base-damage-atk-per-hit": "10000%"
                }
              },
              {
                "level": 9,
                "values": {
                  "base-damage-atk-per-hit": "11250%"
                }
              },
              {
                "level": 10,
                "values": {
                  "base-damage-atk-per-hit": "12500%"
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
      "id": 6596,
      "imageFile": "6596.png",
      "name": "Chilling Blast",
      "maxLevel": 5,
      "prerequisiteText": "Glacial Monolith 5, Glacial Stomp 5",
      "group": "Active(AP)",
      "type": "Magic",
      "target": "Instant Casting",
      "recoversAp": "",
      "consumesAp": "15/14/13/12/10",
      "description": "Emits an extremely cold air around the user, dealing water property magical damage to nearby enemies.\nDeals additional damage depending on the user's base level and SPL.",
      "levelDetails": [
        {
          "level": 1,
          "text": "8400% MATK / area of effect : 9 x 9 cells."
        },
        {
          "level": 2,
          "text": "9900% MATK / area of effect : 9 x 9 cells."
        },
        {
          "level": 3,
          "text": "11400% MATK / area of effect : 9 x 9 cells."
        },
        {
          "level": 4,
          "text": "12900% MATK / area of effect : 11 x 11 cells."
        },
        {
          "level": 5,
          "text": "14400% MATK / area of effect : 11 x 11 cells."
        }
      ],
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "1.5 seconds",
      "castDelay": "0.2 seconds",
      "cooldown": "0.3 seconds",
      "levelExtras": [],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/6596.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6596",
      "tree": {
        "idx": 25,
        "row": 2,
        "col": 7,
        "columns": 9,
        "requirements": [
          {
            "id": 6592,
            "level": 5,
            "name": "Glacial Monolith",
            "visible": true
          },
          {
            "id": 6595,
            "level": 5,
            "name": "Glacial Stomp",
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
            "value": "1.5 seconds"
          },
          {
            "label": "Cast Delay",
            "value": "0.2 seconds"
          },
          {
            "label": "Cooldown",
            "value": "0.3 seconds"
          },
          {
            "label": "Target",
            "value": "Instant Casting"
          },
          {
            "label": "AP Consumed",
            "value": "15/14/13/12/10"
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
                "id": "area-of-effect",
                "label": "Area of Effect"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "area-of-effect": "9x9",
                  "base-damage-matk": "8400%"
                }
              },
              {
                "level": 2,
                "values": {
                  "area-of-effect": "9x9",
                  "base-damage-matk": "9900%"
                }
              },
              {
                "level": 3,
                "values": {
                  "area-of-effect": "9x9",
                  "base-damage-matk": "11400%"
                }
              },
              {
                "level": 4,
                "values": {
                  "area-of-effect": "11x11",
                  "base-damage-matk": "12900%"
                }
              },
              {
                "level": 5,
                "values": {
                  "area-of-effect": "11x11",
                  "base-damage-matk": "14400%"
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
      "id": 6582,
      "imageFile": "6582.png",
      "name": "Frenzy Fang",
      "maxLevel": 5,
      "prerequisiteText": "Alpha Claw 3",
      "group": "Active",
      "type": "Melee physical",
      "target": "Single Target",
      "recoversAp": "1",
      "consumesAp": "",
      "description": "Can only be used while in [Werewolf] state.\nContinuously bites a target with enraged fangs, dealing melee physical damage for 2 hits.\nDeals additional damage depending on the user's base level and POW.\nIf in Madness state, the effect is enhanced according to the level.\nMadness (level 1)\nIncreases number of hit to 3 hits.\nFrenzy Fang ATK + 750%.\nMadness (level 2)\nIncreases number of hit to 5 hits.\nMadness (level 3)\nIncreases number of hit to 7 hits.\nApplies critical damage, the critical chance is the user's CRI (however, the effectiveness of critical modifier is applied by half).",
      "levelDetails": [
        {
          "level": 1,
          "text": "1000% Atk / 1750% Atk (Madness level 1) per hit."
        },
        {
          "level": 2,
          "text": "1250% Atk / 2000% Atk (Madness level 1) per hit."
        },
        {
          "level": 3,
          "text": "1500% Atk / 2250% Atk (Madness level 1) per hit."
        },
        {
          "level": 4,
          "text": "1750% Atk / 2500% Atk (Madness level 1) per hit."
        },
        {
          "level": 5,
          "text": "2000% Atk / 2750% Atk (Madness level 1) per hit."
        }
      ],
      "levelExtras": [],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/6582.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6582",
      "tree": {
        "idx": 28,
        "row": 3,
        "col": 1,
        "columns": 9,
        "requirements": [
          {
            "id": 6580,
            "level": 3,
            "name": "Alpha Claw",
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
                "id": "base-damage-atk-per-hit",
                "label": "Base Damage (ATK per Hit)"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "base-damage-atk-per-hit": "1000%"
                }
              },
              {
                "level": 2,
                "values": {
                  "base-damage-atk-per-hit": "1250%"
                }
              },
              {
                "level": 3,
                "values": {
                  "base-damage-atk-per-hit": "1500%"
                }
              },
              {
                "level": 4,
                "values": {
                  "base-damage-atk-per-hit": "1750%"
                }
              },
              {
                "level": 5,
                "values": {
                  "base-damage-atk-per-hit": "2000%"
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
      "id": 6591,
      "imageFile": "6591.png",
      "name": "Aero Sync",
      "maxLevel": 5,
      "prerequisiteText": "Flip Flap 3",
      "group": "Active(AP)",
      "type": "Buff",
      "target": "Single target",
      "recoversAp": "",
      "consumesAp": "30",
      "description": "Can only be used while in [Wereraptor] and [Flip Flap] state.\nRiding the flow of the sky, the user instantly dashes toward a party member within 7 cells range, granting them with the [Flip Flap] effect.\nThe [Flip Flap] effect is granted at the maximum level user learned.\nCannot be used if the user has been granted the [Flip Flap] effect by another player.",
      "levelDetails": [
        {
          "level": 1,
          "text": "Duration 60 seconds."
        },
        {
          "level": 2,
          "text": "Duration 120 seconds."
        },
        {
          "level": 3,
          "text": "Duration 180 seconds."
        },
        {
          "level": 4,
          "text": "Duration 240 seconds."
        },
        {
          "level": 5,
          "text": "Duration 300 seconds."
        }
      ],
      "levelExtras": [],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/6591.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6591",
      "tree": {
        "idx": 29,
        "row": 3,
        "col": 2,
        "columns": 9,
        "requirements": [
          {
            "id": 6583,
            "level": 3,
            "name": "Flip Flap",
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
            "label": "Target",
            "value": "Single target"
          },
          {
            "label": "AP Consumed",
            "value": "30"
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
                  "duration": "60 seconds"
                }
              },
              {
                "level": 2,
                "values": {
                  "duration": "120 seconds"
                }
              },
              {
                "level": 3,
                "values": {
                  "duration": "180 seconds"
                }
              },
              {
                "level": 4,
                "values": {
                  "duration": "240 seconds"
                }
              },
              {
                "level": 5,
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
      "id": 6606,
      "imageFile": "6606.png",
      "name": "Nature Aid",
      "maxLevel": 5,
      "prerequisiteText": "basic skill",
      "group": "Passive",
      "type": "",
      "target": "",
      "recoversAp": "",
      "consumesAp": "",
      "description": "Increases S.MATK with the help of nature.",
      "levelDetails": [
        {
          "level": 1,
          "text": "S.Matk + 4"
        },
        {
          "level": 2,
          "text": "S.Matk + 8"
        },
        {
          "level": 3,
          "text": "S.Matk + 12"
        },
        {
          "level": 4,
          "text": "S.Matk + 16"
        },
        {
          "level": 5,
          "text": "S.Matk + 20"
        }
      ],
      "levelExtras": [],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/6606.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6606",
      "tree": {
        "idx": 32,
        "row": 3,
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
                "id": "s-matk",
                "label": "S.matk"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "s-matk": "+ 4"
                }
              },
              {
                "level": 2,
                "values": {
                  "s-matk": "+ 8"
                }
              },
              {
                "level": 3,
                "values": {
                  "s-matk": "+ 12"
                }
              },
              {
                "level": 4,
                "values": {
                  "s-matk": "+ 16"
                }
              },
              {
                "level": 5,
                "values": {
                  "s-matk": "+ 20"
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
      "id": 6607,
      "imageFile": "6607.png",
      "name": "Nature Harmony",
      "maxLevel": 5,
      "prerequisiteText": "Truth of Ice 1, Truth of Wind 1, Truth of Earth 1",
      "group": "Active(AP)",
      "type": "Buff",
      "target": "Instant Casting",
      "recoversAp": "",
      "consumesAp": "40",
      "description": "Transcends the truth and temporarily becomes one with nature, increasing water, wind and earth property magical damage and increasing damage taken from water, wind and earth property.",
      "levelDetails": [
        {
          "level": 1,
          "text": ": Increases water, wind and earth property magical damage by 30% / increases damage taken from water, wind and earth property by 30% / duration : 30 seconds."
        },
        {
          "level": 2,
          "text": ": Increases water, wind and earth property magical damage by 60% / increases damage taken from water, wind and earth property by 30% / duration : 30 seconds."
        },
        {
          "level": 3,
          "text": ": Increases water, wind and earth property magical damage by 90% / increases damage taken from water, wind and earth property by 30% / duration : 30 seconds."
        },
        {
          "level": 4,
          "text": ": Increases water, wind and earth property magical damage by 120% / increases damage taken from water, wind and earth property by 30% / duration : 30 seconds."
        },
        {
          "level": 5,
          "text": ": Increases water, wind and earth property magical damage by 150% / increases damage taken from water, wind and earth property by 30% / duration : 30 seconds."
        }
      ],
      "levelExtras": [],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/6607.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6607",
      "tree": {
        "idx": 33,
        "row": 3,
        "col": 6,
        "columns": 9,
        "requirements": [
          {
            "id": 6538,
            "level": 1,
            "name": "Truth of Ice",
            "visible": false
          },
          {
            "id": 6541,
            "level": 1,
            "name": "Truth of Wind",
            "visible": false
          },
          {
            "id": 6544,
            "level": 1,
            "name": "Truth of Earth",
            "visible": false
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
            "label": "Target",
            "value": "Instant Casting"
          },
          {
            "label": "AP Consumed",
            "value": "40"
          }
        ],
        "levelTables": [
          {
            "title": "Level Scaling",
            "columns": [
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
                  "effect": ": Increases water, wind and earth property magical damage by 30% / increases damage taken from water, wind and earth property by 30%"
                }
              },
              {
                "level": 2,
                "values": {
                  "duration": "30 seconds",
                  "effect": ": Increases water, wind and earth property magical damage by 60% / increases damage taken from water, wind and earth property by 30%"
                }
              },
              {
                "level": 3,
                "values": {
                  "duration": "30 seconds",
                  "effect": ": Increases water, wind and earth property magical damage by 90% / increases damage taken from water, wind and earth property by 30%"
                }
              },
              {
                "level": 4,
                "values": {
                  "duration": "30 seconds",
                  "effect": ": Increases water, wind and earth property magical damage by 120% / increases damage taken from water, wind and earth property by 30%"
                }
              },
              {
                "level": 5,
                "values": {
                  "duration": "30 seconds",
                  "effect": ": Increases water, wind and earth property magical damage by 150% / increases damage taken from water, wind and earth property by 30%"
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
      "id": 6605,
      "imageFile": "6605.png",
      "name": "Gravity Hole",
      "maxLevel": 5,
      "prerequisiteText": "Nature Harmony 5",
      "group": "Active(AP)",
      "type": "Magic",
      "target": "Instant Casting",
      "recoversAp": "",
      "consumesAp": "40/38/36/33/30",
      "description": "Distorts the dimension around the user, dealing neutral property magical damage to nearby enemies and pulling only the hit enemies to the user's area, binding them for 1 second.\nDeals additional damage depending on the user's base level and SPL.",
      "levelDetails": [
        {
          "level": 1,
          "text": "5500% MATK / area of effect : 13 x 13 cells / up to 6 targets hit."
        },
        {
          "level": 2,
          "text": "6000% MATK / area of effect : 13 x 13 cells / up to 7 targets hit."
        },
        {
          "level": 3,
          "text": "6500% MATK / area of effect : 13 x 13 cells / up to 8 targets hit."
        },
        {
          "level": 4,
          "text": "7000% MATK / area of effect : 13 x 13 cells / up to 9 targets hit."
        },
        {
          "level": 5,
          "text": "7500% MATK / area of effect : 13 x 13 cells / up to 10 targets hit."
        }
      ],
      "fixedCastTime": "2.5 seconds",
      "variableCastTime": "3 seconds",
      "castDelay": "0.2 seconds",
      "cooldown": "20 seconds",
      "levelExtras": [],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/6605.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6605",
      "tree": {
        "idx": 34,
        "row": 3,
        "col": 7,
        "columns": 9,
        "requirements": [
          {
            "id": 6607,
            "level": 5,
            "name": "Nature Harmony",
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
            "value": "2.5 seconds"
          },
          {
            "label": "Variable Cast Time",
            "value": "3 seconds"
          },
          {
            "label": "Cast Delay",
            "value": "0.2 seconds"
          },
          {
            "label": "Cooldown",
            "value": "20 seconds"
          },
          {
            "label": "Target",
            "value": "Instant Casting"
          },
          {
            "label": "AP Consumed",
            "value": "40/38/36/33/30"
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
                "id": "area-of-effect",
                "label": "Area of Effect"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "area-of-effect": "13x13",
                  "base-damage-matk": "5500%"
                }
              },
              {
                "level": 2,
                "values": {
                  "area-of-effect": "13x13",
                  "base-damage-matk": "6000%"
                }
              },
              {
                "level": 3,
                "values": {
                  "area-of-effect": "13x13",
                  "base-damage-matk": "6500%"
                }
              },
              {
                "level": 4,
                "values": {
                  "area-of-effect": "13x13",
                  "base-damage-matk": "7000%"
                }
              },
              {
                "level": 5,
                "values": {
                  "area-of-effect": "13x13",
                  "base-damage-matk": "7500%"
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
      "id": 6581,
      "imageFile": "6581.png",
      "name": "Savage Lunge",
      "maxLevel": 10,
      "prerequisiteText": "Alpha Phase 3",
      "group": "Active(AP)",
      "type": "Melee physical",
      "target": "Single Target",
      "recoversAp": "",
      "consumesAp": "15",
      "description": "Can only be used while in [Werewolf] state.\nLunges ferociously at the prey with a loud roar.\nInstantly dashes to the enemy within 7 cells range, dealing melee physical damage.\nDeals additional damage depending on the user's base level and POW.\nIf in Madness state, the effect is enhanced according to the level.\nMadness (level 1)\nIncreases Savage Lunge damage.\nMadness (level 2)\nApplies 7 x 7 cells area of effect around the target.\nMadness (level 3)\nApplies critical damage, the critical chance is the user's CRI (however, the effectiveness of critical modifier is applied by half).",
      "levelDetails": [
        {
          "level": 1,
          "text": "7500% Atk / 9000% Atk (Madness level 1)."
        },
        {
          "level": 2,
          "text": "9000% Atk / 11000% Atk (Madness level 1)."
        },
        {
          "level": 3,
          "text": "10500% Atk / 13000% Atk (Madness level 1)."
        },
        {
          "level": 4,
          "text": "12000% Atk / 15000% Atk (Madness level 1)."
        },
        {
          "level": 5,
          "text": "13500% Atk / 17000% Atk (Madness level 1)."
        },
        {
          "level": 6,
          "text": "15000% Atk / 19000% Atk (Madness level 1)."
        },
        {
          "level": 7,
          "text": "16500% Atk / 21000% Atk (Madness level 1)."
        },
        {
          "level": 8,
          "text": "18000% Atk / 23000% Atk (Madness level 1)."
        },
        {
          "level": 9,
          "text": "19500% Atk / 25000% Atk (Madness level 1)."
        },
        {
          "level": 10,
          "text": "21000% Atk / 27000% Atk (Madness level 1)."
        }
      ],
      "levelExtras": [],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/6581.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6581",
      "tree": {
        "idx": 35,
        "row": 3,
        "col": 8,
        "columns": 9,
        "requirements": [
          {
            "id": 6577,
            "level": 3,
            "name": "Alpha Phase",
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
            "label": "Target",
            "value": "Single Target"
          },
          {
            "label": "AP Consumed",
            "value": "15"
          }
        ],
        "levelTables": [
          {
            "title": "Level Scaling",
            "columns": [
              {
                "id": "base-damage-atk",
                "label": "Base Damage (ATK)"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "base-damage-atk": "7500%"
                }
              },
              {
                "level": 2,
                "values": {
                  "base-damage-atk": "9000%"
                }
              },
              {
                "level": 3,
                "values": {
                  "base-damage-atk": "10500%"
                }
              },
              {
                "level": 4,
                "values": {
                  "base-damage-atk": "12000%"
                }
              },
              {
                "level": 5,
                "values": {
                  "base-damage-atk": "13500%"
                }
              },
              {
                "level": 6,
                "values": {
                  "base-damage-atk": "15000%"
                }
              },
              {
                "level": 7,
                "values": {
                  "base-damage-atk": "16500%"
                }
              },
              {
                "level": 8,
                "values": {
                  "base-damage-atk": "18000%"
                }
              },
              {
                "level": 9,
                "values": {
                  "base-damage-atk": "19500%"
                }
              },
              {
                "level": 10,
                "values": {
                  "base-damage-atk": "21000%"
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
};

export default aliteaData;
