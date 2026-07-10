export const dragonKnightData = {
  "generatedAt": "2026-07-10T00:53:19.843Z",
  "classId": 4252,
  "classSlug": "dragon-knight",
  "className": "Dragon Knight",
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
    "noteCount": 68,
    "addedSkills": 1,
    "versions": 5
  },
  "tree": {
    "columns": 9,
    "rows": 3,
    "skillTreeUrl": "https://www.divine-pride.net/tools/skilltree/4252",
    "jobIconUrl": "assets/divine-pride/jobs/4252.png"
  },
  "sources": {
    "rebalances": [
      "rebalances/dragon-knight/rebalance_1.md",
      "rebalances/dragon-knight/rebalance_2.md",
      "rebalances/dragon-knight/rebalance_3.md",
      "rebalances/dragon-knight/rebalance_4.md",
      "rebalances/dragon-knight/rebalance_5.md"
    ],
    "rebalanceManifest": "rebalances/manifest.json",
    "divinePrideApiDocs": "https://www.divine-pride.net/api",
    "divinePrideSkillTree": "https://www.divine-pride.net/tools/skilltree/4252",
    "browiki": "https://browiki.org"
  },
  "rebalanceVersions": [
    {
      "id": "rebalance-1",
      "label": "Rebalance 1",
      "file": "rebalances/dragon-knight/rebalance_1.md",
      "heading": "1. Dragon Knight",
      "className": "Dragon Knight",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=9805",
      "scope": "main",
      "appliesTo": "Main classes only",
      "maxJobLevel": 50,
      "pointLimit": 49,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "1.1",
          "name": "Servant Weapon",
          "notes": [
            "Increases damage from 400%Atk to 450%Atk based on level 5.",
            "Increases trigger chance from 10% to 15% based on level 5.",
            "Increases area of effect from 5x5 cells to 9x9 cells."
          ]
        },
        {
          "section": "1.2",
          "name": "Storm Slash",
          "notes": [
            "Reduces cooldown from 1 second to 0.35 seconds based on level 5.",
            "Reduces delay after skill from 1 second to 0.5 seconds based on level 5.",
            "Increases SP consumption from 50 to 60 based on level 5."
          ]
        },
        {
          "section": "1.3",
          "name": "Madness Crusher",
          "notes": [
            "Reduces cooldown from 2 seconds to 0.35 seconds based on level 5.",
            "Increases damage from 2250%Atk to 3000%Atk based on level 5.",
            "Deals additional damage depends on level of weapon used."
          ]
        },
        {
          "section": "1.4",
          "name": "Hack and Slasher",
          "notes": [
            "Reduces cooldown from 0.5 second to 0.3 seconds based on level 5.",
            "Reduces delay after skill from 1 second to 0.5 seconds based on level 5.",
            "Reworks skill, deals physical damage to the target and surrounding enemies around the target.",
            "Increases area of effect from 7x7 cells to 9x9 cells based on level 10.",
            "Deals melee physical damage when equipping two-handed sword and deals long ranged physical damage when equipping two-handed spear."
          ]
        },
        {
          "section": "1.5",
          "name": "Vigor",
          "notes": [
            "Increases normal attack damage bonus."
          ]
        },
        {
          "section": "1.6",
          "name": "Dragonic Aura",
          "notes": [
            "Upon learning Dragonic Aura, P.Atk and POW will increase the influence of Dragon Training skill on Dragon Breath and Dragon Breath - Water damage."
          ]
        },
        {
          "section": "1.7",
          "name": "Hundred Spears",
          "notes": [
            "Increases damage while under Dragonic Aura buff from 3200%Atk to 4200%Atk based on level 10."
          ]
        }
      ]
    },
    {
      "id": "rebalance-2",
      "label": "Rebalance 2",
      "file": "rebalances/dragon-knight/rebalance_2.md",
      "heading": "1. Dragon Knight",
      "className": "Dragon Knight",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=11126",
      "scope": "main-and-expanded",
      "appliesTo": "Main and expanded classes",
      "maxJobLevel": 50,
      "pointLimit": 49,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "1.1",
          "name": "Hack and Slasher",
          "notes": [
            "Changes damage logic from 2 split hits to 2 cumulative hits.",
            "Increases damage from 3000%Atk to 7300%Atk per hit based on level 10.",
            "Increases cooldown from 0.3 seconds to 0.7 seconds.",
            "Reduces delay after skill from 0.5 seconds to 0.25 seconds.",
            "Increases SP consumption from 70 to 72 based on level 10.",
            "Increases factor weight of POW in skill formula from 5 to 7."
          ]
        },
        {
          "section": "1.2",
          "name": "Servant Weapon",
          "notes": [
            "Increases number of hit from 1 hit to 2 hits.",
            "Increases damage from 450%Atk to 2500%Atk per hit based on level 5."
          ]
        },
        {
          "section": "1.3",
          "name": "Servant Weapon - Phantom",
          "notes": [
            "Removes 0.8 seconds variable casting time.",
            "Reduces cooldown from 2 seconds to 0.5 seconds.",
            "Removes 0.8 seconds delay after skill.",
            "Increases damage from 600%Atk to 1700%Atk per hit based on level 5."
          ]
        },
        {
          "section": "1.4",
          "name": "Servant Weapon - Demolition",
          "notes": [
            "Reduces cooldown from 3 seconds to 0.5 seconds.",
            "Reduces AP recovery rate from 3 to 2.",
            "Increases damage from 750%Atk to 2500%Atk per hit based on level 5."
          ]
        },
        {
          "section": "1.5",
          "name": "Storm Slash",
          "notes": [
            "Reduces cooldown from 0.35 seconds to 0.3 seconds.",
            "Increases AP recovery rate from 1 to 2.",
            "Increases damage from 600%Atk to 950%Atk per hit based on level 5.",
            "Increases the chance to double skill damage while under Giant Growth buff from 15% to 30%."
          ]
        },
        {
          "section": "1.6",
          "name": "Madness Crusher",
          "notes": [
            "Removes 0.4 seconds variable casting time.",
            "Increases fixed casting time from 0.4 seconds to 0.5 seconds.",
            "Increases damage from 1350%Atk to 5150%Atk based on level 5 (using level 5 weapon and weapon weight is 150).",
            "Increases SP consumption from 50 to 68 based on level 5.",
            "Increases AP recovery rate from 2 to 3.",
            "Increases factor weight of POW in skill formula from 5 to 7."
          ]
        },
        {
          "section": "1.7",
          "name": "Vigor",
          "notes": [
            "Changes bonus flat damage from +200% regardless of skill level to scaling with skill level up to +250% based on level 10.",
            "Increases bonus damage against demihuman and angel race monsters from 50% to 100%.",
            "Reduces AP consumption from 150 to 125.",
            "Increases HP consumption on each attack from 2 to 10 based on level 10."
          ]
        },
        {
          "section": "1.8",
          "name": "Dragonic Aura",
          "notes": [
            "Reduces delay after skill from 1 second to 0.5 seconds.",
            "Increases damage from 9500%/14000%(demihuman and angel race)Atk to 36500%/38000%(demihuman and angel race)Atk based on level 10."
          ]
        }
      ]
    },
    {
      "id": "rebalance-3",
      "label": "Rebalance 3",
      "file": "rebalances/dragon-knight/rebalance_3.md",
      "heading": "1. Dragon Knight",
      "className": "Dragon Knight",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=12421",
      "scope": "main-and-expanded",
      "appliesTo": "Main and expanded classes",
      "maxJobLevel": 55,
      "pointLimit": 54,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "1.1",
          "name": "Madness Crusher",
          "notes": [
            "Reduces SP consumption from 68 to 55 based on level 5.",
            "Increases base damage from 4400%Atk to 8350%Atk based on level 5.",
            "Increases factor weight of POW in skill formula from 7 to 10."
          ]
        },
        {
          "section": "1.2",
          "name": "Storm Slash",
          "notes": [
            "Increases skill cooldown from 0.3 seconds to 0.35 seconds.",
            "Reduces SP consumption from 60 to 55 based on level 5.",
            "Increases base damage from 950%Atk to 2200%Atk per hit based on level 5.",
            "Increases the chance to double skill damage while under Giant Growth buff from 30% to 60%."
          ]
        },
        {
          "section": "1.3",
          "name": "Hack and Slasher",
          "notes": [
            "Increases base damage from 7300%Atk to 7700%Atk per hit based on level 10.",
            "Reduces area of effect from 9 x 9 cells to 7 x 7 cells based on level 10.",
            "Applies critical damage, the critical chance is the user's Cri."
          ]
        }
      ]
    },
    {
      "id": "rebalance-4",
      "label": "Rebalance 4",
      "file": "rebalances/dragon-knight/rebalance_4.md",
      "heading": "1. Dragon Knight",
      "className": "Dragon Knight",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=13917",
      "scope": "main-and-expanded",
      "appliesTo": "Main and expanded classes",
      "maxJobLevel": 55,
      "pointLimit": 54,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "1.1",
          "name": "Servant Weapon",
          "notes": [
            "Reduces skill cooldown from 150 seconds to 60 seconds based on level 5.",
            "Increases base damage from 2500%Atk to 4850%Atk based on level 5.",
            "Increases number of hit from 2 hits to 3 hits.",
            "No longer be removed by Dispell or Clearance.",
            "Increases the trigger chance of weapon from 15% to 25% based on level 5."
          ]
        },
        {
          "section": "1.2",
          "name": "Madness Crusher",
          "notes": [
            "Increases base damage from 8350%Atk to 20000%Atk based on level 5."
          ]
        },
        {
          "section": "1.3",
          "name": "Storm Slash",
          "notes": [
            "Increases base damage from 2200%Atk to 4050%Atk per hit based on level 5."
          ]
        },
        {
          "section": "1.4",
          "name": "Hack and Slasher",
          "notes": [
            "Increases base damage from 7700%Atk to 8550%Atk per hit based on level 10."
          ]
        },
        {
          "section": "1.5",
          "name": "Dragonic Breath",
          "notes": [
            "Increases factor weight of MaxHP in skill formula from 12.5% to 25%.",
            "Increases factor weight of MaxSP in skill formula from 25% to 50%."
          ]
        }
      ]
    },
    {
      "id": "rebalance-5",
      "label": "Rebalance 5",
      "file": "rebalances/dragon-knight/rebalance_5.md",
      "heading": "1. Dragon Knight",
      "className": "Dragon Knight",
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
      "file": "rebalances/dragon-knight/added_skills.md",
      "skills": [
        "Dragonic Pierce"
      ]
    }
  ],
  "skillTabs": [
    {
      "id": "current",
      "label": "Dragon Knight",
      "pointLimit": 59,
      "tree": {
        "columns": 9,
        "rows": 3
      },
      "skills": [
        {
          "id": 5201,
          "imageFile": "5201.png",
          "name": "Servant Weapon",
          "maxLevel": 5,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "Support",
          "target": "Self",
          "recoversAp": "Skill Level x 6",
          "consumesAp": "",
          "description": "Summon ethereal weapons. When attacking with normal Physical Melee attack, consume the weapons to inflict Melee Physical damage to target and enemies within 9x9 range twice.\nYou can control up to 5 weapons, and depending on your Skill Level, Servant Weapon will have faster weapon recovery interval and additional attack chance.\nAdditional damage increase based on the caster's base level and POW, and CRIT damage is applied based on the caster's CRIT.\nIf the hit crits, it inflicts half of the total of your CRIT Damage bonus options as damage.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK per hit 900%/Duration 30 seconds"
            },
            {
              "level": 2,
              "text": "ATK per hit 1300%/Duration 60 seconds"
            },
            {
              "level": 3,
              "text": "ATK per hit 1700%/Duration 90 seconds"
            },
            {
              "level": 4,
              "text": "ATK per hit 2100%/Duration 120 seconds"
            },
            {
              "level": 5,
              "text": "ATK per hit 2500%/Duration 150 seconds"
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
          "iconUrl": "assets/divine-pride/skills/5201.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5201",
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
              },
              {
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "AP Generated",
                "value": "Skill Level x 6"
              }
            ],
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
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "60 seconds",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "90 seconds",
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "120 seconds",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "150 seconds",
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
              "skillName": "Servant Weapon",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/dragon-knight/rebalance_1.md",
              "section": "1.1",
              "notes": [
                "Increases damage from 400%Atk to 450%Atk based on level 5.",
                "Increases trigger chance from 10% to 15% based on level 5.",
                "Increases area of effect from 5x5 cells to 9x9 cells."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "400%Atk",
                  "after": "450%Atk",
                  "scope": "Lv 5",
                  "source": "Increases damage from 400%Atk to 450%Atk based on level 5."
                },
                {
                  "label": "Trigger Chance",
                  "before": "10%",
                  "after": "15%",
                  "scope": "Lv 5",
                  "source": "Increases trigger chance from 10% to 15% based on level 5."
                },
                {
                  "label": "Area of Effect",
                  "before": "5 x 5 cells",
                  "after": "9 x 9 cells",
                  "scope": "",
                  "source": "Increases area of effect from 5x5 cells to 9x9 cells."
                }
              ]
            },
            {
              "skillName": "Servant Weapon",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/dragon-knight/rebalance_2.md",
              "section": "1.2",
              "notes": [
                "Increases number of hit from 1 hit to 2 hits.",
                "Increases damage from 450%Atk to 2500%Atk per hit based on level 5."
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
                  "before": "450%Atk",
                  "after": "2500%Atk per hit",
                  "scope": "Lv 5",
                  "source": "Increases damage from 450%Atk to 2500%Atk per hit based on level 5."
                }
              ]
            },
            {
              "skillName": "Servant Weapon",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/dragon-knight/rebalance_4.md",
              "section": "1.1",
              "notes": [
                "Reduces skill cooldown from 150 seconds to 60 seconds based on level 5.",
                "Increases base damage from 2500%Atk to 4850%Atk based on level 5.",
                "Increases number of hit from 2 hits to 3 hits.",
                "No longer be removed by Dispell or Clearance.",
                "Increases the trigger chance of weapon from 15% to 25% based on level 5."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "150 seconds",
                  "after": "60 seconds",
                  "scope": "Lv 5",
                  "source": "Reduces skill cooldown from 150 seconds to 60 seconds based on level 5."
                },
                {
                  "label": "Damage",
                  "before": "2500%Atk",
                  "after": "4850%Atk",
                  "scope": "Lv 5",
                  "source": "Increases base damage from 2500%Atk to 4850%Atk based on level 5."
                },
                {
                  "label": "Number Of Hit",
                  "before": "2 hits",
                  "after": "3 hits",
                  "scope": "",
                  "source": "Increases number of hit from 2 hits to 3 hits."
                },
                {
                  "label": "The Trigger Chance Of Weapon",
                  "before": "15%",
                  "after": "25%",
                  "scope": "Lv 5",
                  "source": "Increases the trigger chance of weapon from 15% to 25% based on level 5."
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
          "id": 5207,
          "imageFile": "5207.png",
          "name": "Two-handed Defense",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Two-handed Swords, Spears, and Axes decrease Physical damage from enemies of all sizes.",
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
          "iconUrl": "assets/divine-pride/skills/5207.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5207",
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
          "id": 5206,
          "imageFile": "5206.png",
          "name": "Charging Pierce",
          "maxLevel": 10,
          "prerequisiteText": "Hundred Spears Lv. 5",
          "group": "Active",
          "type": "Support",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "description": "A Spear and Two-handed Sword skill.\nPierce, Clashing Spiral, Hundred Spears, and Madness Crusher temporarily add Charge stacks.\nCharge stacks last for 5 seconds, and disappear if not increased within the time limit.\nYou can get up to 10 Charge stacks to significantly increase Pierce, Clashing Spiral, Hundred Spears, and Madness Crusher damage.",
          "levelDetails": [],
          "fixedCastTime": "0.4 seconds",
          "variableCastTime": "0.8 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "60 seconds",
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
                  "value": "65"
                },
                {
                  "level": 10,
                  "value": "70"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5206.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5206",
          "tree": {
            "idx": 5,
            "row": 0,
            "col": 5,
            "columns": 9,
            "requirements": [
              {
                "id": 2004,
                "level": 5,
                "name": "Hundred Spears",
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
                "value": "0.4 seconds"
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
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "25"
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
                      "sp-cost": "35"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "45"
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
                      "sp-cost": "55"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "65"
                    }
                  },
                  {
                    "level": 10,
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
          "id": 5203,
          "imageFile": "5203.png",
          "name": "Servant Weapon - Sign",
          "maxLevel": 5,
          "prerequisiteText": "Servant Weapon Lv. 3",
          "group": "Active",
          "type": "Support",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "A Servant Weapon skill.\nShoot a servant Weapon at an enemy, marking it as a Servant Weapon - Phantom and Demolition target.",
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
          "iconUrl": "assets/divine-pride/skills/5203.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5203",
          "tree": {
            "idx": 8,
            "row": 0,
            "col": 8,
            "columns": 9,
            "requirements": [
              {
                "id": 5201,
                "level": 3,
                "name": "Servant Weapon",
                "visible": true
              }
            ]
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
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 5208,
          "imageFile": "5208.png",
          "name": "Hack And Slasher",
          "maxLevel": 10,
          "prerequisiteText": "Two-handed defending 5",
          "group": "Active",
          "type": "Melee/Ranged Physical",
          "target": "Single Target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Two-handed swords and Two-handed spears only skills.\nSwing the weapon at the target and deal physical damage to the target and within the surrounding range 2 times.\nWhen used as a two-handed sword, it is applied as melee physical damage,\nWhen used as a two-handed spear, it is applied as long-distance physical damage.\nDamage is additionally increased according to the user's base level and POW, and critical damage is applied according to the user's critical probability.\nIn the case of critical damage, half of the total critical damage increase options are applied.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK Per Hit 950%/Range: 3x3 Cells"
            },
            {
              "level": 2,
              "text": "ATK Per Hit 1700%/Range: 3x3 Cells"
            },
            {
              "level": 3,
              "text": "ATK Per Hit 2450%/Range: 3x3 Cells"
            },
            {
              "level": 4,
              "text": "ATK Per Hit 3200%/Range: 3x3 Cells"
            },
            {
              "level": 5,
              "text": "ATK Per Hit 3950%/Range: 5x5 Cells"
            },
            {
              "level": 6,
              "text": "ATK Per Hit 4700%/Range: 5x5 Cells"
            },
            {
              "level": 7,
              "text": "ATK Per Hit 5450%/Range: 5x5 Cells"
            },
            {
              "level": 8,
              "text": "ATK Per Hit 6200%/Range: 5x5 Cells"
            },
            {
              "level": 9,
              "text": "ATK Per Hit 6950%/Range: 7x7 Cells"
            },
            {
              "level": 10,
              "text": "ATK Per Hit 7700%/Range: 7x7 Cells"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0.25 seconds",
          "cooldown": "0.7 seconds",
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
                },
                {
                  "level": 6,
                  "value": "56"
                },
                {
                  "level": 7,
                  "value": "60"
                },
                {
                  "level": 8,
                  "value": "64"
                },
                {
                  "level": 9,
                  "value": "68"
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
          "iconUrl": "assets/divine-pride/skills/5208.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5208",
          "tree": {
            "idx": 11,
            "row": 1,
            "col": 2,
            "columns": 9,
            "requirements": [
              {
                "id": 5207,
                "level": 5,
                "name": "Two-handed Defense",
                "visible": true
              }
            ]
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
                "value": "0.25 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0.7 seconds"
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
                    "id": "area-of-effect",
                    "label": "Area of Effect"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "area-of-effect": "3x3",
                      "sp-cost": "36"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "3x3",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "3x3",
                      "sp-cost": "44"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "3x3",
                      "sp-cost": "48"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "5x5",
                      "sp-cost": "52"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "area-of-effect": "5x5",
                      "sp-cost": "56"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "area-of-effect": "5x5",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "area-of-effect": "5x5",
                      "sp-cost": "64"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "68"
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
          "irowikiUrl": "",
          "balanceNotes": [
            {
              "skillName": "Hack and Slasher",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/dragon-knight/rebalance_1.md",
              "section": "1.4",
              "notes": [
                "Reduces cooldown from 0.5 second to 0.3 seconds based on level 5.",
                "Reduces delay after skill from 1 second to 0.5 seconds based on level 5.",
                "Reworks skill, deals physical damage to the target and surrounding enemies around the target.",
                "Increases area of effect from 7x7 cells to 9x9 cells based on level 10.",
                "Deals melee physical damage when equipping two-handed sword and deals long ranged physical damage when equipping two-handed spear."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "0.5 second",
                  "after": "0.3 seconds",
                  "scope": "Lv 5",
                  "source": "Reduces cooldown from 0.5 second to 0.3 seconds based on level 5."
                },
                {
                  "label": "Cast Delay",
                  "before": "1 second",
                  "after": "0.5 seconds",
                  "scope": "Lv 5",
                  "source": "Reduces delay after skill from 1 second to 0.5 seconds based on level 5."
                },
                {
                  "label": "Area of Effect",
                  "before": "7 x 7 cells",
                  "after": "9 x 9 cells",
                  "scope": "Lv 10",
                  "source": "Increases area of effect from 7x7 cells to 9x9 cells based on level 10."
                }
              ]
            },
            {
              "skillName": "Hack and Slasher",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/dragon-knight/rebalance_2.md",
              "section": "1.1",
              "notes": [
                "Changes damage logic from 2 split hits to 2 cumulative hits.",
                "Increases damage from 3000%Atk to 7300%Atk per hit based on level 10.",
                "Increases cooldown from 0.3 seconds to 0.7 seconds.",
                "Reduces delay after skill from 0.5 seconds to 0.25 seconds.",
                "Increases SP consumption from 70 to 72 based on level 10.",
                "Increases factor weight of POW in skill formula from 5 to 7."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "2 split hits (logic)/3000%Atk",
                  "after": "2 cumulative hits (logic)/7300%Atk per hit",
                  "scope": "Lv 10",
                  "source": "Changes damage logic from 2 split hits to 2 cumulative hits. / Increases damage from 3000%Atk to 7300%Atk per hit based on level 10."
                },
                {
                  "label": "Cooldown",
                  "before": "0.3 seconds",
                  "after": "0.7 seconds",
                  "scope": "",
                  "source": "Increases cooldown from 0.3 seconds to 0.7 seconds."
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
                  "before": "70",
                  "after": "72",
                  "scope": "Lv 10",
                  "source": "Increases SP consumption from 70 to 72 based on level 10."
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
              "skillName": "Hack and Slasher",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/dragon-knight/rebalance_3.md",
              "section": "1.3",
              "notes": [
                "Increases base damage from 7300%Atk to 7700%Atk per hit based on level 10.",
                "Reduces area of effect from 9 x 9 cells to 7 x 7 cells based on level 10.",
                "Applies critical damage, the critical chance is the user's Cri."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "7300%Atk",
                  "after": "7700%Atk per hit",
                  "scope": "Lv 10",
                  "source": "Increases base damage from 7300%Atk to 7700%Atk per hit based on level 10."
                },
                {
                  "label": "Area of Effect",
                  "before": "9 x 9 cells",
                  "after": "7 x 7 cells",
                  "scope": "Lv 10",
                  "source": "Reduces area of effect from 9 x 9 cells to 7 x 7 cells based on level 10."
                }
              ]
            },
            {
              "skillName": "Hack and Slasher",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/dragon-knight/rebalance_4.md",
              "section": "1.4",
              "notes": [
                "Increases base damage from 7700%Atk to 8550%Atk per hit based on level 10."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "7700%Atk",
                  "after": "8550%Atk per hit",
                  "scope": "Lv 10",
                  "source": "Increases base damage from 7700%Atk to 8550%Atk per hit based on level 10."
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
          "id": 6001,
          "imageFile": "6001.png",
          "name": "Dragonic Breath",
          "maxLevel": 10,
          "prerequisiteText": "Dragon Breath Lv. 10, Dragon's Water Breath Lv. 10",
          "group": "Active",
          "type": "Ranged Physical",
          "target": "1 Target",
          "recoversAp": "2",
          "consumesAp": "",
          "description": "Can only use this skill while riding dragon.\nChannels the power of the dragon into yourself, and unleash a powerful dragon's breath on your target.\nDragon's Breath deals Ranged Physical damage that ignores Physical Armor to both the target and targets in its surrounding area.\nDamage is increased or decreased based on the caster's MaxHP and MaxSP.\nAdditional Damage increase by an additional amount based on the caster's base level and POW.\nWhen using this skill under Dragonic Aura buff, increases damage rate from user's MaxHP and MaxSP.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 400%/range: 7x7 cells"
            },
            {
              "level": 2,
              "text": "ATK 750%/range: 7x7 cells"
            },
            {
              "level": 3,
              "text": "ATK 1100%/range: 7x7 cells"
            },
            {
              "level": 4,
              "text": "ATK 1450%/range: 7x7 cells"
            },
            {
              "level": 5,
              "text": "ATK 1800%/range: 7x7 cells"
            },
            {
              "level": 6,
              "text": "ATK 2150%/range: 9x9 cells"
            },
            {
              "level": 7,
              "text": "ATK 2500%/range: 9x9 cells"
            },
            {
              "level": 8,
              "text": "ATK 2850%/range: 9x9 cells"
            },
            {
              "level": 9,
              "text": "ATK 3200%/range: 9x9 cells"
            },
            {
              "level": 10,
              "text": "ATK 3550%/range: 9x9 cells"
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "2 seconds",
          "castDelay": "0.15 seconds",
          "cooldown": "0.5 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "61"
                },
                {
                  "level": 2,
                  "value": "64"
                },
                {
                  "level": 3,
                  "value": "67"
                },
                {
                  "level": 4,
                  "value": "70"
                },
                {
                  "level": 5,
                  "value": "73"
                },
                {
                  "level": 6,
                  "value": "76"
                },
                {
                  "level": 7,
                  "value": "79"
                },
                {
                  "level": 8,
                  "value": "82"
                },
                {
                  "level": 9,
                  "value": "85"
                },
                {
                  "level": 10,
                  "value": "88"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6001.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6001",
          "tree": {
            "idx": 13,
            "row": 1,
            "col": 4,
            "columns": 9,
            "requirements": [
              {
                "id": 2008,
                "level": 10,
                "name": "Dragon's Breath",
                "visible": false
              },
              {
                "id": 5004,
                "level": 10,
                "name": "Dragon's Water Breath",
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
                "label": "Variable Cast Time",
                "value": "2 seconds"
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
                      "sp-cost": "61"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "64"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "67"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "70"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "73"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "area-of-effect": "9x9",
                      "sp-cost": "76"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "area-of-effect": "9x9",
                      "sp-cost": "79"
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
                      "sp-cost": "85"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "area-of-effect": "9x9",
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
              "skillName": "Dragonic Breath",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/dragon-knight/rebalance_4.md",
              "section": "1.5",
              "notes": [
                "Increases factor weight of MaxHP in skill formula from 12.5% to 25%.",
                "Increases factor weight of MaxSP in skill formula from 25% to 50%."
              ],
              "specRows": [
                {
                  "label": "Factor Weight Of Maxhp In Skill Formula",
                  "before": "12.5%",
                  "after": "25%",
                  "scope": "",
                  "source": "Increases factor weight of MaxHP in skill formula from 12.5% to 25%."
                },
                {
                  "label": "Factor Weight Of Maxsp In Skill Formula",
                  "before": "25%",
                  "after": "50%",
                  "scope": "",
                  "source": "Increases factor weight of MaxSP in skill formula from 25% to 50%."
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
          "id": 5204,
          "imageFile": "5204.png",
          "name": "Servant Weapon-Phantom",
          "maxLevel": 5,
          "prerequisiteText": "Servant Weapon Lv. 5 and Servant Weapon - Sign Lv. 5",
          "group": "Active",
          "type": "Melee Physical",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Servant Weapon Skill.\nInstantly strikes target, consuming all weapons to deal Melee Physical damage equal to the number of weapons consumed to all Sign targets within 7x7 cells around the target and others within 5x5 cells around them, and inflicting [Pitch Black] with a certain probability.\nAdditional damage increase based on the caster's base level and POW, and CRIT damage is applied based on the caster's CRIT.\nIf the hit crits, it inflicts half of the total of your CRIT Damage bonus options as damage.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK per hit 500%/Pitch Black trigger chance: 40%"
            },
            {
              "level": 2,
              "text": "ATK per hit 800%/Pitch Black trigger chance: 50%"
            },
            {
              "level": 3,
              "text": "ATK per hit 1100%/Pitch Black trigger chance: 60%"
            },
            {
              "level": 4,
              "text": "ATK per hit 1400%/Pitch Black trigger chance: 70%"
            },
            {
              "level": 5,
              "text": "ATK per hit 1700%/Pitch Black trigger chance: 80%"
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0 seconds",
          "cooldown": "0.5 seconds",
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
          "iconUrl": "assets/divine-pride/skills/5204.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5204",
          "tree": {
            "idx": 15,
            "row": 1,
            "col": 6,
            "columns": 9,
            "requirements": [
              {
                "id": 5201,
                "level": 5,
                "name": "Servant Weapon",
                "visible": true
              },
              {
                "id": 5203,
                "level": 5,
                "name": "Servant Weapon - Sign",
                "visible": true
              }
            ]
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
                "value": "0 seconds"
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
                      "sp-cost": "40"
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
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 5,
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
          "balanceNotes": [
            {
              "skillName": "Servant Weapon - Phantom",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/dragon-knight/rebalance_2.md",
              "section": "1.3",
              "notes": [
                "Removes 0.8 seconds variable casting time.",
                "Reduces cooldown from 2 seconds to 0.5 seconds.",
                "Removes 0.8 seconds delay after skill.",
                "Increases damage from 600%Atk to 1700%Atk per hit based on level 5."
              ],
              "specRows": [
                {
                  "label": "0.8 Seconds Variable Casting Time",
                  "before": "0.8 seconds variable casting time",
                  "after": "Removed",
                  "scope": "",
                  "source": "Removes 0.8 seconds variable casting time."
                },
                {
                  "label": "Cooldown",
                  "before": "2 seconds",
                  "after": "0.5 seconds",
                  "scope": "",
                  "source": "Reduces cooldown from 2 seconds to 0.5 seconds."
                },
                {
                  "label": "Cast Delay",
                  "before": "0.8 seconds delay",
                  "after": "Removed",
                  "scope": "",
                  "source": "Removes 0.8 seconds delay after skill."
                },
                {
                  "label": "Damage",
                  "before": "600%Atk",
                  "after": "1700%Atk per hit",
                  "scope": "Lv 5",
                  "source": "Increases damage from 600%Atk to 1700%Atk per hit based on level 5."
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
          "id": 5213,
          "imageFile": "5213.png",
          "name": "Storm Slash",
          "maxLevel": 5,
          "prerequisiteText": "Two-handed defending 10, Hack and Slasher 5",
          "group": "Active",
          "type": "Melee Physical",
          "target": "Single Target",
          "recoversAp": "2",
          "consumesAp": "",
          "description": "Exclusive skills for two-handed swords and two-handed axes.\nSlashes the target multiple times to inflict melee physical damage. Additionally, if under the Giant Growth effect, there is a 60% chance that the damage is doubled.\nDamage is additionally increased according to the user's base level and POW, and critical damage is applied according to the user's critical probability.\nIn the case of critical damage, half of the total critical damage increase options are applied.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK Per Hit 600%, 1 Times Attack"
            },
            {
              "level": 2,
              "text": "ATK Per Hit 1000%, 2 Times Attack"
            },
            {
              "level": 3,
              "text": "ATK Per Hit 1400%, 3 Times Attack"
            },
            {
              "level": 4,
              "text": "ATK Per Hit 1800%, 4 Times Attack"
            },
            {
              "level": 5,
              "text": "ATK Per Hit 2200%, 5 Times Attack"
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
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5213.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5213",
          "tree": {
            "idx": 17,
            "row": 1,
            "col": 8,
            "columns": 9,
            "requirements": [
              {
                "id": 5207,
                "level": 10,
                "name": "Two-handed Defense",
                "visible": true
              },
              {
                "id": 5208,
                "level": 5,
                "name": "Hack and Slash",
                "visible": true
              }
            ]
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
                      "sp-cost": "45"
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
                      "sp-cost": "55"
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
              "skillName": "Storm Slash",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/dragon-knight/rebalance_1.md",
              "section": "1.2",
              "notes": [
                "Reduces cooldown from 1 second to 0.35 seconds based on level 5.",
                "Reduces delay after skill from 1 second to 0.5 seconds based on level 5.",
                "Increases SP consumption from 50 to 60 based on level 5."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "1 second",
                  "after": "0.35 seconds",
                  "scope": "Lv 5",
                  "source": "Reduces cooldown from 1 second to 0.35 seconds based on level 5."
                },
                {
                  "label": "Cast Delay",
                  "before": "1 second",
                  "after": "0.5 seconds",
                  "scope": "Lv 5",
                  "source": "Reduces delay after skill from 1 second to 0.5 seconds based on level 5."
                },
                {
                  "label": "SP Cost",
                  "before": "50",
                  "after": "60",
                  "scope": "Lv 5",
                  "source": "Increases SP consumption from 50 to 60 based on level 5."
                }
              ]
            },
            {
              "skillName": "Storm Slash",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/dragon-knight/rebalance_2.md",
              "section": "1.5",
              "notes": [
                "Reduces cooldown from 0.35 seconds to 0.3 seconds.",
                "Increases AP recovery rate from 1 to 2.",
                "Increases damage from 600%Atk to 950%Atk per hit based on level 5.",
                "Increases the chance to double skill damage while under Giant Growth buff from 15% to 30%."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "0.35 seconds",
                  "after": "0.3 seconds",
                  "scope": "",
                  "source": "Reduces cooldown from 0.35 seconds to 0.3 seconds."
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
                  "before": "600%Atk",
                  "after": "950%Atk per hit",
                  "scope": "Lv 5",
                  "source": "Increases damage from 600%Atk to 950%Atk per hit based on level 5."
                },
                {
                  "label": "The Chance To Double Skill Damage While Under Giant Growth Buff",
                  "before": "15%",
                  "after": "30%",
                  "scope": "",
                  "source": "Increases the chance to double skill damage while under Giant Growth buff from 15% to 30%."
                }
              ]
            },
            {
              "skillName": "Storm Slash",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/dragon-knight/rebalance_3.md",
              "section": "1.2",
              "notes": [
                "Increases skill cooldown from 0.3 seconds to 0.35 seconds.",
                "Reduces SP consumption from 60 to 55 based on level 5.",
                "Increases base damage from 950%Atk to 2200%Atk per hit based on level 5.",
                "Increases the chance to double skill damage while under Giant Growth buff from 30% to 60%."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "0.3 seconds",
                  "after": "0.35 seconds",
                  "scope": "",
                  "source": "Increases skill cooldown from 0.3 seconds to 0.35 seconds."
                },
                {
                  "label": "SP Cost",
                  "before": "60",
                  "after": "55",
                  "scope": "Lv 5",
                  "source": "Reduces SP consumption from 60 to 55 based on level 5."
                },
                {
                  "label": "Damage",
                  "before": "950%Atk",
                  "after": "2200%Atk per hit",
                  "scope": "Lv 5",
                  "source": "Increases base damage from 950%Atk to 2200%Atk per hit based on level 5."
                },
                {
                  "label": "The Chance To Double Skill Damage While Under Giant Growth Buff",
                  "before": "30%",
                  "after": "60%",
                  "scope": "",
                  "source": "Increases the chance to double skill damage while under Giant Growth buff from 30% to 60%."
                }
              ]
            },
            {
              "skillName": "Storm Slash",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/dragon-knight/rebalance_4.md",
              "section": "1.3",
              "notes": [
                "Increases base damage from 2200%Atk to 4050%Atk per hit based on level 5."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "2200%Atk",
                  "after": "4050%Atk per hit",
                  "scope": "Lv 5",
                  "source": "Increases base damage from 2200%Atk to 4050%Atk per hit based on level 5."
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
          "id": 6502,
          "imageFile": "6502.png",
          "name": "Dragonic Pierce",
          "maxLevel": 5,
          "prerequisiteText": "Hack and Slasher level 7",
          "group": "Active",
          "type": "Long ranged physical",
          "target": "Single target",
          "recoversAp": "2",
          "consumesAp": "",
          "description": "Two-handed spear exclusive skill.\nInflicts long ranged physical damage to the target for 5 hits.\nIf the user is under Dragonic Aura buff, the skill will deal more damage.\nDeals additional damage depends on user's base level and POW, has a chance to trigger critical, critical chance is the user's Cri.\nThe effectiveness of critical modifier is applied by half.",
          "levelDetails": [
            {
              "level": 1,
              "text": "1450% Atk / 1600% Atk (Dragonic Aura) per hit."
            },
            {
              "level": 2,
              "text": "2050% Atk / 2250% Atk (Dragonic Aura) per hit."
            },
            {
              "level": 3,
              "text": "2650% Atk / 2900% Atk (Dragonic Aura) per hit."
            },
            {
              "level": 4,
              "text": "3250% Atk / 3550% Atk (Dragonic Aura) per hit."
            },
            {
              "level": 5,
              "text": "3850% Atk / 4200% Atk (Dragonic Aura) per hit."
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "0.5 seconds",
          "castDelay": "0.7 seconds",
          "cooldown": "0.5 seconds",
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6502.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6502",
          "tree": {
            "idx": 18,
            "row": 2,
            "col": 0,
            "columns": 9,
            "requirements": [
              {
                "id": 5208,
                "level": 7,
                "name": "Hack and Slash",
                "visible": true
              }
            ]
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
                "value": "0.7 seconds"
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
            "levelTables": []
          },
          "irowikiUrl": "",
          "balanceNotes": [
            {
              "skillName": "Dragonic Pierce",
              "versionId": "rebalance-5",
              "versionLabel": "Rebalance 5",
              "file": "rebalances/dragon-knight/added_skills.md",
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
          "id": 5211,
          "imageFile": "5211.png",
          "name": "Madness Crusher",
          "maxLevel": 5,
          "prerequisiteText": "Charging Pierce 5, Hack and Slasher 10",
          "group": "Active",
          "type": "Ranged Physical",
          "target": "Single Target",
          "recoversAp": "3",
          "consumesAp": "",
          "description": "Two-handed swords and Two-handed spears only skills.\nStrikes the target and inflicts long-distance physical damage to the target and those within the surrounding range.\nDamage increases additionally depending on the user's base level and POW, and the weapon's level and weight.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 1950%/Range: 3x3 Cells"
            },
            {
              "level": 2,
              "text": "ATK 3550%/Range: 5x5 Cells"
            },
            {
              "level": 3,
              "text": "ATK 5150%/Range: 5x5 Cells"
            },
            {
              "level": 4,
              "text": "ATK 6750%/Range: 7x7 Cells"
            },
            {
              "level": 5,
              "text": "ATK 8350%/Range: 7x7 Cells"
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "0.35 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "27"
                },
                {
                  "level": 2,
                  "value": "34"
                },
                {
                  "level": 3,
                  "value": "41"
                },
                {
                  "level": 4,
                  "value": "48"
                },
                {
                  "level": 5,
                  "value": "55"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5211.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5211",
          "tree": {
            "idx": 19,
            "row": 2,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 5206,
                "level": 5,
                "name": "Charging Pierce",
                "visible": true
              },
              {
                "id": 5208,
                "level": 10,
                "name": "Hack and Slash",
                "visible": true
              }
            ]
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
                      "area-of-effect": "3x3",
                      "sp-cost": "27"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "5x5",
                      "sp-cost": "34"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "5x5",
                      "sp-cost": "41"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "48"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "55"
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
              "skillName": "Madness Crusher",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/dragon-knight/rebalance_1.md",
              "section": "1.3",
              "notes": [
                "Reduces cooldown from 2 seconds to 0.35 seconds based on level 5.",
                "Increases damage from 2250%Atk to 3000%Atk based on level 5.",
                "Deals additional damage depends on level of weapon used."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "2 seconds",
                  "after": "0.35 seconds",
                  "scope": "Lv 5",
                  "source": "Reduces cooldown from 2 seconds to 0.35 seconds based on level 5."
                },
                {
                  "label": "Damage",
                  "before": "2250%Atk",
                  "after": "3000%Atk",
                  "scope": "Lv 5",
                  "source": "Increases damage from 2250%Atk to 3000%Atk based on level 5."
                }
              ]
            },
            {
              "skillName": "Madness Crusher",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/dragon-knight/rebalance_2.md",
              "section": "1.6",
              "notes": [
                "Removes 0.4 seconds variable casting time.",
                "Increases fixed casting time from 0.4 seconds to 0.5 seconds.",
                "Increases damage from 1350%Atk to 5150%Atk based on level 5 (using level 5 weapon and weapon weight is 150).",
                "Increases SP consumption from 50 to 68 based on level 5.",
                "Increases AP recovery rate from 2 to 3.",
                "Increases factor weight of POW in skill formula from 5 to 7."
              ],
              "specRows": [
                {
                  "label": "0.4 Seconds Variable Casting Time",
                  "before": "0.4 seconds variable casting time",
                  "after": "Removed",
                  "scope": "",
                  "source": "Removes 0.4 seconds variable casting time."
                },
                {
                  "label": "Fixed Casting Time",
                  "before": "0.4 seconds",
                  "after": "0.5 seconds",
                  "scope": "",
                  "source": "Increases fixed casting time from 0.4 seconds to 0.5 seconds."
                },
                {
                  "label": "Damage",
                  "before": "1350%Atk",
                  "after": "5150%Atk",
                  "scope": "Lv 5 (using level 5 weapon and weapon weight is 150)",
                  "source": "Increases damage from 1350%Atk to 5150%Atk based on level 5 (using level 5 weapon and weapon weight is 150)."
                },
                {
                  "label": "SP Cost",
                  "before": "50",
                  "after": "68",
                  "scope": "Lv 5",
                  "source": "Increases SP consumption from 50 to 68 based on level 5."
                },
                {
                  "label": "AP Generated",
                  "before": "2",
                  "after": "3",
                  "scope": "",
                  "source": "Increases AP recovery rate from 2 to 3."
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
              "skillName": "Madness Crusher",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/dragon-knight/rebalance_3.md",
              "section": "1.1",
              "notes": [
                "Reduces SP consumption from 68 to 55 based on level 5.",
                "Increases base damage from 4400%Atk to 8350%Atk based on level 5.",
                "Increases factor weight of POW in skill formula from 7 to 10."
              ],
              "specRows": [
                {
                  "label": "SP Cost",
                  "before": "68",
                  "after": "55",
                  "scope": "Lv 5",
                  "source": "Reduces SP consumption from 68 to 55 based on level 5."
                },
                {
                  "label": "Damage",
                  "before": "4400%Atk",
                  "after": "8350%Atk",
                  "scope": "Lv 5",
                  "source": "Increases base damage from 4400%Atk to 8350%Atk based on level 5."
                },
                {
                  "label": "Factor Weight Of Pow In Skill Formula",
                  "before": "7",
                  "after": "10",
                  "scope": "",
                  "source": "Increases factor weight of POW in skill formula from 7 to 10."
                }
              ]
            },
            {
              "skillName": "Madness Crusher",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/dragon-knight/rebalance_4.md",
              "section": "1.2",
              "notes": [
                "Increases base damage from 8350%Atk to 20000%Atk based on level 5."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "8350%Atk",
                  "after": "20000%Atk",
                  "scope": "Lv 5",
                  "source": "Increases base damage from 8350%Atk to 20000%Atk based on level 5."
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
          "id": 5205,
          "imageFile": "5205.png",
          "name": "Servant Weapon-Demolition",
          "maxLevel": 5,
          "prerequisiteText": "Servant Weapon - Phantom Lv. 5",
          "group": "Active",
          "type": "Melee Physical",
          "target": "Area of Effect",
          "recoversAp": "2",
          "consumesAp": "",
          "description": "Servant Weapon Skill.\nUse all of your Servant Weapon and attack all Sign targets within 13 x13 cells around you, inflicting Melee Physical damage by the number of servant weapons consumed for this skill. Servant Weapons will be recharged based on the number of targets hit by this skill.\nAdditional damage increase based on the caster's base level and POW, and CRIT damage is applied based on the caster's CRIT.\nIf the hit crits, it inflicts half of the total of your CRIT Damage bonus options as damage.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK per hit 500%"
            },
            {
              "level": 2,
              "text": "ATK per hit 1000%"
            },
            {
              "level": 3,
              "text": "ATK per hit 1500%"
            },
            {
              "level": 4,
              "text": "ATK per hit 2000%"
            },
            {
              "level": 5,
              "text": "ATK per hit 2500%"
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
          "iconUrl": "assets/divine-pride/skills/5205.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5205",
          "tree": {
            "idx": 22,
            "row": 2,
            "col": 4,
            "columns": 9,
            "requirements": [
              {
                "id": 5204,
                "level": 5,
                "name": "Servant Weapon - Phantom",
                "visible": true
              }
            ]
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
                "value": "Area of Effect"
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
          "irowikiUrl": "",
          "balanceNotes": [
            {
              "skillName": "Servant Weapon - Demolition",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/dragon-knight/rebalance_2.md",
              "section": "1.4",
              "notes": [
                "Reduces cooldown from 3 seconds to 0.5 seconds.",
                "Reduces AP recovery rate from 3 to 2.",
                "Increases damage from 750%Atk to 2500%Atk per hit based on level 5."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "3 seconds",
                  "after": "0.5 seconds",
                  "scope": "",
                  "source": "Reduces cooldown from 3 seconds to 0.5 seconds."
                },
                {
                  "label": "AP Generated",
                  "before": "3",
                  "after": "2",
                  "scope": "",
                  "source": "Reduces AP recovery rate from 3 to 2."
                },
                {
                  "label": "Damage",
                  "before": "750%Atk",
                  "after": "2500%Atk per hit",
                  "scope": "Lv 5",
                  "source": "Increases damage from 750%Atk to 2500%Atk per hit based on level 5."
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
          "id": 5212,
          "imageFile": "5212.png",
          "name": "Vigor",
          "maxLevel": 10,
          "prerequisiteText": "Servant Weapon - Demolition Lv. 3 and Storm Slash Lv. 5",
          "group": "Active(AP)",
          "type": "Support",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Increases the damage of your normal Melee Physical attacks temporarily.\nEach attack costs certain amount of HP and deals additional damage to Human/Angel monsters.",
          "levelDetails": [
            {
              "level": 1,
              "text": "+115% Increase/ +10% Additional damage to Human/Angel enemies\nDuration : 30 seconds/HP consumed: 100"
            },
            {
              "level": 2,
              "text": "+130% Increase/ +20% Additional damage to Human/Angel enemies\nDuration : 60 seconds/HP consumed: 90"
            },
            {
              "level": 3,
              "text": "+145% Increase/ +30% Additional damage to Human/Angel enemies\nDuration : 90 seconds/HP consumed: 80"
            },
            {
              "level": 4,
              "text": "+160% Increase/ +40% Additional damage to Human/Angel enemies\nDuration : 120 seconds/HP consumed: 70"
            },
            {
              "level": 5,
              "text": "+175% Increase/ +50% Additional damage to Human/Angel enemies\nDuration : 150 seconds/HP consumed: 60"
            },
            {
              "level": 6,
              "text": "+190% Increase/ +60% Additional damage to Human/Angel enemies\nDuration : 180 seconds/HP consumed: 50"
            },
            {
              "level": 7,
              "text": "+205% Increase/ +70% Additional damage to Human/Angel enemies\nDuration : 210 seconds/HP consumed: 40"
            },
            {
              "level": 8,
              "text": "+220% Increase/ +80% Additional damage to Human/Angel enemies\nDuration : 240 seconds/HP consumed: 30"
            },
            {
              "level": 9,
              "text": "+235% Increase/ +90% Additional damage to Human/Angel enemies\nDuration : 270 seconds/HP consumed: 20"
            },
            {
              "level": 10,
              "text": "+250% Increase/ +100% Additional to Human/Angel enemies\nDuration : 300 seconds/HP consumed: 10"
            }
          ],
          "fixedCastTime": "0 seconds",
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
          "translations": {
            "pt-BR": {
              "name": " Vigor ",
              "description": "Endurece seu corpo.\nAumenta a DEFM e evita o personagem reagir ao receber ataques físicos .\nConcentrar · Olhos de Águia · Olhos de Coruja",
              "source": "bROWiki",
              "sourceUrl": "https://browiki.org/wiki/Vigor"
            }
          },
          "apiStatus": "translated",
          "iconUrl": "assets/divine-pride/skills/5212.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5212",
          "tree": {
            "idx": 24,
            "row": 2,
            "col": 6,
            "columns": 9,
            "requirements": [
              {
                "id": 5205,
                "level": 3,
                "name": "Servant Weapon - Demolition",
                "visible": true
              },
              {
                "id": 5213,
                "level": 5,
                "name": "Storm Slash",
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
                      "effect": "+115% Increase / +10% Additional damage to Human / Angel enemies\nHP consumed: 100",
                      "duration": "30 seconds",
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "+130% Increase / +20% Additional damage to Human / Angel enemies\nHP consumed: 90",
                      "duration": "60 seconds",
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "+145% Increase / +30% Additional damage to Human / Angel enemies\nHP consumed: 80",
                      "duration": "90 seconds",
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "+160% Increase / +40% Additional damage to Human / Angel enemies\nHP consumed: 70",
                      "duration": "120 seconds",
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "+175% Increase / +50% Additional damage to Human / Angel enemies\nHP consumed: 60",
                      "duration": "150 seconds",
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "+190% Increase / +60% Additional damage to Human / Angel enemies\nHP consumed: 50",
                      "duration": "180 seconds",
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "+205% Increase / +70% Additional damage to Human / Angel enemies\nHP consumed: 40",
                      "duration": "210 seconds",
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "+220% Increase / +80% Additional damage to Human / Angel enemies\nHP consumed: 30",
                      "duration": "240 seconds",
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "+235% Increase / +90% Additional damage to Human / Angel enemies\nHP consumed: 20",
                      "duration": "270 seconds",
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "+250% Increase / +100% Additional to Human / Angel enemies\nHP consumed: 10",
                      "duration": "300 seconds",
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
              "skillName": "Vigor",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/dragon-knight/rebalance_1.md",
              "section": "1.5",
              "notes": [
                "Increases normal attack damage bonus."
              ],
              "specRows": []
            },
            {
              "skillName": "Vigor",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/dragon-knight/rebalance_2.md",
              "section": "1.7",
              "notes": [
                "Changes bonus flat damage from +200% regardless of skill level to scaling with skill level up to +250% based on level 10.",
                "Increases bonus damage against demihuman and angel race monsters from 50% to 100%.",
                "Reduces AP consumption from 150 to 125.",
                "Increases HP consumption on each attack from 2 to 10 based on level 10."
              ],
              "specRows": [
                {
                  "label": "Bonus Flat Damage",
                  "before": "+200% regardless of skill level",
                  "after": "scaling with skill level up to +250%",
                  "scope": "Lv 10",
                  "source": "Changes bonus flat damage from +200% regardless of skill level to scaling with skill level up to +250% based on level 10."
                },
                {
                  "label": "Bonus Damage Against Demihuman And Angel Race Monsters",
                  "before": "50%",
                  "after": "100%",
                  "scope": "",
                  "source": "Increases bonus damage against demihuman and angel race monsters from 50% to 100%."
                },
                {
                  "label": "AP Consumed",
                  "before": "150",
                  "after": "125",
                  "scope": "",
                  "source": "Reduces AP consumption from 150 to 125."
                },
                {
                  "label": "Hp Consumption On Each Attack",
                  "before": "2",
                  "after": "10",
                  "scope": "Lv 10",
                  "source": "Increases HP consumption on each attack from 2 to 10 based on level 10."
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
          "id": 5210,
          "imageFile": "5210.png",
          "name": "Dragonic Aura",
          "maxLevel": 10,
          "prerequisiteText": "Charging Pierce Lv. 10, Dragon Breath Lv. 10, and Dragon's Water Breath Lv. 10",
          "group": "Active(AP)",
          "type": "Ranged Physical",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Deals great amount of Ranged Physical damage to the target and increases the damage of Dragon Breath, Dragon's Water Breath, and Hundred Spears for 300 seconds.\nDamage is increased by an additional amount based on the caster's Base Level and POW.\nAlso inflicts more damage on Demi-Human and Angel monsters.\nP.ATK and POW will affect the skill damage output from Dragon Training skill.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 3650%/ 3800% to Human/Angel enemies"
            },
            {
              "level": 2,
              "text": "ATK 7300%/ 7600% to Human/Angel enemies"
            },
            {
              "level": 3,
              "text": "ATK 10950%/ 11400% to Human/Angel enemies"
            },
            {
              "level": 4,
              "text": "ATK 14600%/ 15200% to Human/Angel enemies"
            },
            {
              "level": 5,
              "text": "ATK 18250%/ 19000% to Human/Angel enemies"
            },
            {
              "level": 6,
              "text": "ATK 21900%/ 22800% to Human/Angel enemies"
            },
            {
              "level": 7,
              "text": "ATK 25550%/ 26600% to Human/Angel enemies"
            },
            {
              "level": 8,
              "text": "ATK 29200%/ 30400% to Human/Angel enemies"
            },
            {
              "level": 9,
              "text": "ATK 32850%/ 34200% to Human/Angel enemies"
            },
            {
              "level": 10,
              "text": "ATK 36500%/ 38000% to Human/Angel enemies"
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "0 seconds",
          "castDelay": "0.5 seconds",
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
          "iconUrl": "assets/divine-pride/skills/5210.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5210",
          "tree": {
            "idx": 26,
            "row": 2,
            "col": 8,
            "columns": 9,
            "requirements": [
              {
                "id": 2008,
                "level": 10,
                "name": "Dragon's Breath",
                "visible": false
              },
              {
                "id": 5004,
                "level": 10,
                "name": "Dragon's Water Breath",
                "visible": false
              },
              {
                "id": 5206,
                "level": 10,
                "name": "Charging Pierce",
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
                "value": "0.5 seconds"
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
          "irowikiUrl": "",
          "balanceNotes": [
            {
              "skillName": "Dragonic Aura",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/dragon-knight/rebalance_1.md",
              "section": "1.6",
              "notes": [
                "Upon learning Dragonic Aura, P.Atk and POW will increase the influence of Dragon Training skill on Dragon Breath and Dragon Breath - Water damage."
              ],
              "specRows": []
            },
            {
              "skillName": "Dragonic Aura",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/dragon-knight/rebalance_2.md",
              "section": "1.8",
              "notes": [
                "Reduces delay after skill from 1 second to 0.5 seconds.",
                "Increases damage from 9500%/14000%(demihuman and angel race)Atk to 36500%/38000%(demihuman and angel race)Atk based on level 10."
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
                  "label": "Damage",
                  "before": "9500%/14000%(demihuman and angel race)Atk",
                  "after": "36500%/38000%(demihuman and angel race)Atk",
                  "scope": "Lv 10",
                  "source": "Increases damage from 9500%/14000%(demihuman and angel race)Atk to 36500%/38000%(demihuman and angel race)Atk based on level 10."
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
      "label": "Rune Knight",
      "pointLimit": 69,
      "tree": {
        "columns": 9,
        "rows": 5
      },
      "skills": [
        {
          "id": 2010,
          "imageFile": "2010.png",
          "name": "Rune Mastery",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Rune Knights gain the power to understand and use runes through Rune Mastery. This skill enables playes to make rune stones and it affects the success rate. There are 10 different types of runes, and number of makable runes stones increase depending on the runes mastery level.\nOne rune stone and one Elder branch are basically consumed to make a rune stone, and additional materials are required for each rune stone. At least two are produced at once, from slv 5, 2-4 are produced, and from level 10, 2-6 are produced.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Turisus Runestone - Blue Hair 1 , Claw of Desert Wolf 1"
            },
            {
              "level": 2,
              "text": "Isia Runestone - Burning Heart 1"
            },
            {
              "level": 3,
              "text": "Pertz Runestone - Light Granule 1, Tangled Chains 1, Dragon Canine 1"
            },
            {
              "level": 4,
              "text": "Hagalas Runestone - Materials : Round Shell 1 , Dragon Skin 1"
            },
            {
              "level": 5,
              "text": "Asir Runestone - Materials : Light Granule 1, Ogre Tooth 1"
            },
            {
              "level": 6,
              "text": "Urj Runestone - Materials : Horrendous Hair 1, Honey 1"
            },
            {
              "level": 7,
              "text": "Rhydo Runestone - Materials : Light Granule 1, Red Gemstone 1"
            },
            {
              "level": 8,
              "text": "Nosiege Runestone - Materials : Light Granule 1, Destroyed Armor 1, Worn-out Magic Scroll 1"
            },
            {
              "level": 9,
              "text": "Verkana Runestone - Materials : Armor Piece of Dullahan 1"
            },
            {
              "level": 10,
              "text": "Lux Anima Runestone - Materials : Gold 3, Light Granule 3"
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
          "iconUrl": "assets/divine-pride/skills/2010.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2010",
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
                      "effect": "Turisus Runestone - Blue Hair 1 , Claw of Desert Wolf 1",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Isia Runestone - Burning Heart 1",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Pertz Runestone - Light Granule 1, Tangled Chains 1, Dragon Canine 1",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Hagalas Runestone - Materials : Round Shell 1 , Dragon Skin 1",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Asir Runestone - Materials : Light Granule 1, Ogre Tooth 1",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "Urj Runestone - Materials : Horrendous Hair 1, Honey 1",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "Rhydo Runestone - Materials : Light Granule 1, Red Gemstone 1",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "Nosiege Runestone - Materials : Light Granule 1, Destroyed Armor 1, Worn-out Magic Scroll 1",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "Verkana Runestone - Materials : Armor Piece of Dullahan 1",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "Lu x Anima Runestone - Materials : Gold 3, Light Granule 3",
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
          "id": 2020,
          "imageFile": "2020.png",
          "name": "Phantom Thrust",
          "maxLevel": 5,
          "prerequisiteText": "Brandish Spear 2",
          "group": "Offensive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Attacks a distant enemy bringing\nthem close to the caster. Can be used on a\nparty member, but won't give damage. Gives\nAdditional damage with Lv 10 Spear Mastery.",
          "levelDetails": [
            {
              "level": 1,
              "text": "15 SP / 5 Cell Range / ATK 50%"
            },
            {
              "level": 2,
              "text": "18 SP / 6 Cell Range / ATK 100%"
            },
            {
              "level": 3,
              "text": "21 SP / 7 Cell Range / ATK 150%"
            },
            {
              "level": 4,
              "text": "24 SP / 8 Cell Range / ATK 200%"
            },
            {
              "level": 5,
              "text": "27 SP / 9 Cell Range / ATK 250%"
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
              "label": "Atk %",
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2020.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2020",
          "tree": {
            "idx": 3,
            "row": 0,
            "col": 3,
            "columns": 9,
            "requirements": [
              {
                "id": 57,
                "level": 2,
                "name": "Brandish Spear",
                "visible": false
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
              }
            ],
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
                    "id": "range",
                    "label": "Range"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "15",
                      "range": "5 cells",
                      "atk": "100"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "18",
                      "range": "6 cells",
                      "atk": "120"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "21",
                      "range": "7 cells",
                      "atk": "140"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "24",
                      "range": "8 cells",
                      "atk": "160"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "27",
                      "range": "9 cells",
                      "atk": "180"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2007,
          "imageFile": "2007.png",
          "name": "Dragon Training",
          "maxLevel": 5,
          "prerequisiteText": "Cavalier Mastery 1",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "When mounted on a dragon, this skill increases Weight Limit, increase the damage of Dragon Breath.\nallows Spear class weapons to ignore the size modifiers, dealing 100% damage at all time and increases attack power..",
          "levelDetails": [
            {
              "level": 1,
              "text": "Dragon Breath Modifier 100%"
            },
            {
              "level": 2,
              "text": "Dragon Breath Modifier 110%"
            },
            {
              "level": 3,
              "text": "Dragon Breath Modifier 120%"
            },
            {
              "level": 4,
              "text": "Dragon Breath Modifier 130%"
            },
            {
              "level": 5,
              "text": "Dragon Breath Modifier 140%"
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
              "label": "Atk %",
              "values": [
                {
                  "level": 1,
                  "value": "100"
                },
                {
                  "level": 2,
                  "value": "105"
                },
                {
                  "level": 3,
                  "value": "110"
                },
                {
                  "level": 4,
                  "value": "115"
                },
                {
                  "level": 5,
                  "value": "120"
                }
              ]
            },
            {
              "label": "Aspd (attacks/sec)",
              "values": [
                {
                  "level": 1,
                  "value": "80%"
                },
                {
                  "level": 2,
                  "value": "85%"
                },
                {
                  "level": 3,
                  "value": "90%"
                },
                {
                  "level": 4,
                  "value": "95%"
                },
                {
                  "level": 5,
                  "value": "100%"
                }
              ]
            },
            {
              "label": "Weight",
              "values": [
                {
                  "level": 1,
                  "value": "700"
                },
                {
                  "level": 2,
                  "value": "900"
                },
                {
                  "level": 3,
                  "value": "1100"
                },
                {
                  "level": 4,
                  "value": "1300"
                },
                {
                  "level": 5,
                  "value": "1500"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2007.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2007",
          "tree": {
            "idx": 4,
            "row": 0,
            "col": 4,
            "columns": 9,
            "requirements": [
              {
                "id": 64,
                "level": 1,
                "name": "Cavalier Mastery",
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
                  },
                  {
                    "id": "aspd-attacks-sec",
                    "label": "Aspd (attacks/sec)"
                  },
                  {
                    "id": "atk",
                    "label": "Atk %"
                  },
                  {
                    "id": "weight",
                    "label": "Weight"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Dragon Breath Modifier 100%",
                      "sp-cost": "0",
                      "atk": "100",
                      "aspd-attacks-sec": "80%",
                      "weight": "700"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Dragon Breath Modifier 110%",
                      "sp-cost": "0",
                      "atk": "105",
                      "aspd-attacks-sec": "85%",
                      "weight": "900"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Dragon Breath Modifier 120%",
                      "sp-cost": "0",
                      "atk": "110",
                      "aspd-attacks-sec": "90%",
                      "weight": "1100"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Dragon Breath Modifier 130%",
                      "sp-cost": "0",
                      "atk": "115",
                      "aspd-attacks-sec": "95%",
                      "weight": "1300"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Dragon Breath Modifier 140%",
                      "sp-cost": "0",
                      "atk": "120",
                      "aspd-attacks-sec": "100%",
                      "weight": "1500"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2001,
          "imageFile": "2001.png",
          "name": "Enchant Blade",
          "maxLevel": 10,
          "prerequisiteText": "Rune Mastery 2",
          "group": "Asist",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Adds the caster's MATK to the melee physical attack for 5 minutes. Additional MATK per skill level. It's affected by the caster's BaseLv and INT.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK +120"
            },
            {
              "level": 2,
              "text": "MATK +140"
            },
            {
              "level": 3,
              "text": "MATK +160"
            },
            {
              "level": 4,
              "text": "MATK +180"
            },
            {
              "level": 5,
              "text": "MATK +200"
            },
            {
              "level": 6,
              "text": "MATK +220"
            },
            {
              "level": 7,
              "text": "MATK +240"
            },
            {
              "level": 8,
              "text": "MATK +260"
            },
            {
              "level": 9,
              "text": "MATK +280"
            },
            {
              "level": 10,
              "text": "MATK +300"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "1 second",
          "castDelay": "0 seconds",
          "cooldown": "0 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "34"
                },
                {
                  "level": 2,
                  "value": "38"
                },
                {
                  "level": 3,
                  "value": "42"
                },
                {
                  "level": 4,
                  "value": "46"
                },
                {
                  "level": 5,
                  "value": "50"
                },
                {
                  "level": 6,
                  "value": "54"
                },
                {
                  "level": 7,
                  "value": "58"
                },
                {
                  "level": 8,
                  "value": "62"
                },
                {
                  "level": 9,
                  "value": "66"
                },
                {
                  "level": 10,
                  "value": "70"
                }
              ]
            },
            {
              "label": "MATK",
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
                },
                {
                  "level": 6,
                  "value": "220"
                },
                {
                  "level": 7,
                  "value": "240"
                },
                {
                  "level": 8,
                  "value": "260"
                },
                {
                  "level": 9,
                  "value": "280"
                },
                {
                  "level": 10,
                  "value": "300"
                }
              ]
            },
            {
              "label": "Duration",
              "values": [
                {
                  "level": 1,
                  "value": "5 min"
                },
                {
                  "level": 2,
                  "value": "5 min"
                },
                {
                  "level": 3,
                  "value": "5 min"
                },
                {
                  "level": 4,
                  "value": "5 min"
                },
                {
                  "level": 5,
                  "value": "5 min"
                },
                {
                  "level": 6,
                  "value": "5 min"
                },
                {
                  "level": 7,
                  "value": "5 min"
                },
                {
                  "level": 8,
                  "value": "5 min"
                },
                {
                  "level": 9,
                  "value": "5 min"
                },
                {
                  "level": 10,
                  "value": "5 min"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2001.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2001",
          "tree": {
            "idx": 8,
            "row": 0,
            "col": 8,
            "columns": 9,
            "requirements": [
              {
                "id": 2010,
                "level": 2,
                "name": "Rune Mastery",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Asist Skill"
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
                  },
                  {
                    "id": "duration",
                    "label": "Duration"
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
                      "matk": "+120\n120",
                      "sp-cost": "34",
                      "duration": "5 min"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "matk": "+140\n140",
                      "sp-cost": "38",
                      "duration": "5 min"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "matk": "+160\n160",
                      "sp-cost": "42",
                      "duration": "5 min"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "matk": "+180\n180",
                      "sp-cost": "46",
                      "duration": "5 min"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "matk": "+200\n200",
                      "sp-cost": "50",
                      "duration": "5 min"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "matk": "+220\n220",
                      "sp-cost": "54",
                      "duration": "5 min"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "matk": "+240\n240",
                      "sp-cost": "58",
                      "duration": "5 min"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "matk": "+260\n260",
                      "sp-cost": "62",
                      "duration": "5 min"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "matk": "+280\n280",
                      "sp-cost": "66",
                      "duration": "5 min"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "matk": "+300\n300",
                      "sp-cost": "70",
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
          "id": 2004,
          "imageFile": "2004.png",
          "name": "Hundred Spears",
          "maxLevel": 10,
          "prerequisiteText": "Phantom Thrust 3",
          "group": "Damage",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Spear Weapon Skill. Deals great damage to a target, also enemies in range. Damage increases as BaseLv and slv of Spiral Pierce increase.\nRange : 7 cells.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 800% / Area : 3x3"
            },
            {
              "level": 2,
              "text": "ATK 1000% / Area : 3x3"
            },
            {
              "level": 3,
              "text": "ATK 1200% / Area : 3x3"
            },
            {
              "level": 4,
              "text": "ATK 1400% / Area : 3x3"
            },
            {
              "level": 5,
              "text": "ATK 1600% / Area : 5x5"
            },
            {
              "level": 6,
              "text": "ATK 1800% / Area : 5x5"
            },
            {
              "level": 7,
              "text": "ATK 2000% / Area : 5x5"
            },
            {
              "level": 8,
              "text": "ATK 2200% / Area : 5x5"
            },
            {
              "level": 9,
              "text": "ATK 2400% / Area : 7x7"
            },
            {
              "level": 10,
              "text": "ATK 2600% / Area : 7x7"
            }
          ],
          "fixedCastTime": "0 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "3 seconds",
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
                },
                {
                  "level": 6,
                  "value": "5 cells"
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
                  "value": "5 cells"
                },
                {
                  "level": 10,
                  "value": "5 cells"
                }
              ]
            },
            {
              "label": "Atk %",
              "values": [
                {
                  "level": 1,
                  "value": "640"
                },
                {
                  "level": 2,
                  "value": "680"
                },
                {
                  "level": 3,
                  "value": "720"
                },
                {
                  "level": 4,
                  "value": "760"
                },
                {
                  "level": 5,
                  "value": "800"
                },
                {
                  "level": 6,
                  "value": "840"
                },
                {
                  "level": 7,
                  "value": "880"
                },
                {
                  "level": 8,
                  "value": "920"
                },
                {
                  "level": 9,
                  "value": "960"
                },
                {
                  "level": 10,
                  "value": "1000"
                }
              ]
            },
            {
              "label": "Chance",
              "values": [
                {
                  "level": 1,
                  "value": "13%"
                },
                {
                  "level": 2,
                  "value": "16%"
                },
                {
                  "level": 3,
                  "value": "19%"
                },
                {
                  "level": 4,
                  "value": "22%"
                },
                {
                  "level": 5,
                  "value": "25%"
                },
                {
                  "level": 6,
                  "value": "28%"
                },
                {
                  "level": 7,
                  "value": "31%"
                },
                {
                  "level": 8,
                  "value": "34%"
                },
                {
                  "level": 9,
                  "value": "37%"
                },
                {
                  "level": 10,
                  "value": "40%"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2004.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2004",
          "tree": {
            "idx": 10,
            "row": 1,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 2020,
                "level": 3,
                "name": "Phantom Thrust",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Damage Skill"
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
                    "id": "atk",
                    "label": "Atk %"
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
                      "sp-cost": "60",
                      "range": "5 cells",
                      "atk": "640",
                      "chance": "13%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "60",
                      "range": "5 cells",
                      "atk": "680",
                      "chance": "16%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "60",
                      "range": "5 cells",
                      "atk": "720",
                      "chance": "19%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "60",
                      "range": "5 cells",
                      "atk": "760",
                      "chance": "22%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "60",
                      "range": "5 cells",
                      "atk": "800",
                      "chance": "25%"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "60",
                      "range": "5 cells",
                      "atk": "840",
                      "chance": "28%"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "60",
                      "range": "5 cells",
                      "atk": "880",
                      "chance": "31%"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "60",
                      "range": "5 cells",
                      "atk": "920",
                      "chance": "34%"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "60",
                      "range": "5 cells",
                      "atk": "960",
                      "chance": "37%"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "sp-cost": "60",
                      "range": "5 cells",
                      "atk": "1000",
                      "chance": "40%"
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
              "skillName": "Hundred Spears",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/dragon-knight/rebalance_1.md",
              "section": "1.7",
              "notes": [
                "Increases damage while under Dragonic Aura buff from 3200%Atk to 4200%Atk based on level 10."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "3200%Atk (while under Dragonic Aura buff)",
                  "after": "4200%Atk (while under Dragonic Aura buff)",
                  "scope": "Lv 10",
                  "source": "Increases damage while under Dragonic Aura buff from 3200%Atk to 4200%Atk based on level 10."
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
          "id": 2009,
          "imageFile": "2009.png",
          "name": "Dragon Howling",
          "maxLevel": 5,
          "prerequisiteText": "Dragon Training 2",
          "group": "Debuff",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Commands the dragon to howl, causing Fear status at a certain chance to all enemies in range.",
          "levelDetails": [
            {
              "level": 1,
              "text": "3 cell AoE / 56% Fear Chance"
            },
            {
              "level": 2,
              "text": "4 cell AoE / 62% Fear Chance"
            },
            {
              "level": 3,
              "text": "5 cell AoE / 68% Fear Chance"
            },
            {
              "level": 4,
              "text": "6 cell AoE / 74% Fear Chance"
            },
            {
              "level": 5,
              "text": "7 cell AoE / 80% Fear Chance"
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
              "label": "Chance",
              "values": [
                {
                  "level": 1,
                  "value": "56%"
                },
                {
                  "level": 2,
                  "value": "62%"
                },
                {
                  "level": 3,
                  "value": "68%"
                },
                {
                  "level": 4,
                  "value": "74%"
                },
                {
                  "level": 5,
                  "value": "80%"
                }
              ]
            },
            {
              "label": "Duration",
              "values": [
                {
                  "level": 1,
                  "value": "5 sec"
                },
                {
                  "level": 2,
                  "value": "5 sec"
                },
                {
                  "level": 3,
                  "value": "5 sec"
                },
                {
                  "level": 4,
                  "value": "5 sec"
                },
                {
                  "level": 5,
                  "value": "5 sec"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2009.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2009",
          "tree": {
            "idx": 11,
            "row": 1,
            "col": 2,
            "columns": 9,
            "requirements": [
              {
                "id": 2007,
                "level": 2,
                "name": "Dragon Training",
                "visible": true
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
                      "effect": "3 cells AoE / 56% Fear Chance",
                      "sp-cost": "30",
                      "chance": "56%",
                      "duration": "5 sec"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "4 cells AoE / 62% Fear Chance",
                      "sp-cost": "30",
                      "chance": "62%",
                      "duration": "5 sec"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "5 cells AoE / 68% Fear Chance",
                      "sp-cost": "30",
                      "chance": "68%",
                      "duration": "5 sec"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "6 cells AoE / 74% Fear Chance",
                      "sp-cost": "30",
                      "chance": "74%",
                      "duration": "5 sec"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "7 cells AoE / 80% Fear Chance",
                      "sp-cost": "30",
                      "chance": "80%",
                      "duration": "5 sec"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2008,
          "imageFile": "2008.png",
          "name": "Dragon's Breath",
          "maxLevel": 10,
          "prerequisiteText": "Dragon Training 2",
          "group": "Area of EffectDamage",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Uses Firebreath, causing special ranged physical damage to the speed of fire, and enemies who are damaged by the dragon's breath sometimes suffer continuous damage due to fire. The power of the dragon's breath depends on the condition of the caster who controls it.\nWhen Giant Growth Effect, attack property becomes Holy. When Lux Anima Effect, attack property becomes Shadow.\n(When Giant Growth and Anima Effect, attack property becomes Shadow)",
          "levelDetails": [],
          "fixedCastTime": "0.5 seconds",
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
                  "value": "9 cells"
                },
                {
                  "level": 9,
                  "value": "9 cells"
                },
                {
                  "level": 10,
                  "value": "9 cells"
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
                },
                {
                  "level": 6,
                  "value": "2"
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
                  "value": "4"
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
          "iconUrl": "assets/divine-pride/skills/2008.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2008",
          "tree": {
            "idx": 12,
            "row": 1,
            "col": 3,
            "columns": 9,
            "requirements": [
              {
                "id": 2007,
                "level": 2,
                "name": "Dragon Training",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Area of EffectDamage Skill"
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
                      "sp-cost": "30",
                      "range": "9 cells",
                      "data-1": "1"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "35",
                      "range": "9 cells",
                      "data-1": "1"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "40",
                      "range": "9 cells",
                      "data-1": "1"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "45",
                      "range": "9 cells",
                      "data-1": "2"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "50",
                      "range": "9 cells",
                      "data-1": "2"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "55",
                      "range": "9 cells",
                      "data-1": "2"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "60",
                      "range": "9 cells",
                      "data-1": "3"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "65",
                      "range": "9 cells",
                      "data-1": "3"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "70",
                      "range": "9 cells",
                      "data-1": "4"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "sp-cost": "75",
                      "range": "9 cells",
                      "data-1": "4"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2003,
          "imageFile": "2003.png",
          "name": "Death Bound",
          "maxLevel": 10,
          "prerequisiteText": "Counter Attack 1,",
          "group": "Offensive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Amplify and counters damage\nreceived towards your enemy. Some of the\namplified damage will also reflect on you.\nWhile in this stance, you cannot move for 2 seconds.\nMust wait 5 seconds before re-casting.\nCannot be used on MVP type monsters.",
          "levelDetails": [
            {
              "level": 1,
              "text": "28 SP / Amplify Damage by 600%"
            },
            {
              "level": 2,
              "text": "31 SP / Amplify Damage by 700%"
            },
            {
              "level": 3,
              "text": "34 SP / Amplify Damage by 800%"
            },
            {
              "level": 4,
              "text": "37 SP / Amplify Damage by 900%"
            },
            {
              "level": 5,
              "text": "40 SP / Amplify Damage by 1000%"
            },
            {
              "level": 6,
              "text": "43 SP / Amplify Damage by 1100%"
            },
            {
              "level": 7,
              "text": "46 SP / Amplify Damage by 1200%"
            },
            {
              "level": 8,
              "text": "49 SP / Amplify Damage by 1300%"
            },
            {
              "level": 9,
              "text": "52 SP / Amplify Damage by 1400%"
            },
            {
              "level": 10,
              "text": "55 SP / Amplify Damage by 1500%"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "2 seconds",
          "cooldown": "3 seconds",
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
                },
                {
                  "level": 6,
                  "value": "1100"
                },
                {
                  "level": 7,
                  "value": "1200"
                },
                {
                  "level": 8,
                  "value": "1300"
                },
                {
                  "level": 9,
                  "value": "1400"
                },
                {
                  "level": 10,
                  "value": "1500"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2003.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2003",
          "tree": {
            "idx": 14,
            "row": 1,
            "col": 5,
            "columns": 9,
            "requirements": [
              {
                "id": 61,
                "level": 1,
                "name": "Counter Attack",
                "visible": false
              },
              {
                "id": 2001,
                "level": 2,
                "name": "Enchant Blade",
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
                "value": "2 seconds"
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
                    "id": "atk",
                    "label": "Atk %"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "28 SP / Amplify Damage by 600%",
                      "sp-cost": "50",
                      "atk": "600"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "31 SP / Amplify Damage by 700%",
                      "sp-cost": "60",
                      "atk": "700"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "34 SP / Amplify Damage by 800%",
                      "sp-cost": "65",
                      "atk": "800"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "37 SP / Amplify Damage by 900%",
                      "sp-cost": "70",
                      "atk": "900"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "40 SP / Amplify Damage by 1000%",
                      "sp-cost": "75",
                      "atk": "1000"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "43 SP / Amplify Damage by 1100%",
                      "sp-cost": "80",
                      "atk": "1100"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "46 SP / Amplify Damage by 1200%",
                      "sp-cost": "85",
                      "atk": "1200"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "49 SP / Amplify Damage by 1300%",
                      "sp-cost": "90",
                      "atk": "1300"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "52 SP / Amplify Damage by 1400%",
                      "sp-cost": "95",
                      "atk": "1400"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "55 SP / Amplify Damage by 1500%",
                      "sp-cost": "100",
                      "atk": "1500"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2002,
          "imageFile": "2002.png",
          "name": "Sonic Wave",
          "maxLevel": 10,
          "prerequisiteText": "Enchant Blade 3",
          "group": "Damage",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Strikes the ground and attacks enemies at a far distance.\nHIT rate is assisted as skill level increases. Half of Critical Hit rate is applied.\nDamage increases as BaseLv increases. Half of Critical Damage option can be applied.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 1200%"
            },
            {
              "level": 2,
              "text": "ATK 1350%"
            },
            {
              "level": 3,
              "text": "ATK 1500%"
            },
            {
              "level": 4,
              "text": "ATK 1650%"
            },
            {
              "level": 5,
              "text": "ATK 1800%"
            },
            {
              "level": 6,
              "text": "ATK 1950%"
            },
            {
              "level": 7,
              "text": "ATK 2100%"
            },
            {
              "level": 8,
              "text": "ATK 2250%"
            },
            {
              "level": 9,
              "text": "ATK 2400%"
            },
            {
              "level": 10,
              "text": "ATK 2550%"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "1.75 seconds",
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
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2002.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2002",
          "tree": {
            "idx": 15,
            "row": 1,
            "col": 6,
            "columns": 9,
            "requirements": [
              {
                "id": 2001,
                "level": 3,
                "name": "Enchant Blade",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Damage Skill"
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
                "value": "0.5 seconds"
              },
              {
                "label": "Cooldown",
                "value": "1.75 seconds"
              }
            ],
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
                      "sp-cost": "33",
                      "range": "7 cells"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "36",
                      "range": "7 cells"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "39",
                      "range": "8 cells"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "42",
                      "range": "8 cells"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "45",
                      "range": "9 cells"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "48",
                      "range": "9 cells"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "51",
                      "range": "10 cells"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "54",
                      "range": "10 cells"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "57",
                      "range": "11 cells"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "sp-cost": "60",
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
          "id": 2005,
          "imageFile": "2005.png",
          "name": "Wind Cutter",
          "maxLevel": 5,
          "prerequisiteText": "Enchant Blade 5",
          "group": "Area of EffectDamage",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Wields a powerful weapon and damages the surrounding enemies using a wind pressure.\nWhen spear's equipped, damage becomes ranged. When two-handed sword's equipped, damages twice\nDamage increases as BaseLv increases.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Normal Weapon: ATK 300%/Two-handed Sword: ATK 250%/Spear: 400%"
            },
            {
              "level": 2,
              "text": "Normal Weapon: ATK 600%/Two-handed Sword: ATK 500%/Spear: 800%"
            },
            {
              "level": 3,
              "text": "Normal Weapon: ATK 900%/Two-handed Sword: ATK 750%/Spear:1200%"
            },
            {
              "level": 4,
              "text": "Normal Weapon: ATK1200%/Two-handed Sword: ATK1000%/Spear:1600%"
            },
            {
              "level": 5,
              "text": "Normal Weapon: ATK1500%/Two-handed Sword: ATK1250%/Spear:2000%"
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
                }
              ]
            },
            {
              "label": "Atk %",
              "values": [
                {
                  "level": 1,
                  "value": "150"
                },
                {
                  "level": 2,
                  "value": "200"
                },
                {
                  "level": 3,
                  "value": "250"
                },
                {
                  "level": 4,
                  "value": "300"
                },
                {
                  "level": 5,
                  "value": "350"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2005.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2005",
          "tree": {
            "idx": 16,
            "row": 1,
            "col": 7,
            "columns": 9,
            "requirements": [
              {
                "id": 2001,
                "level": 5,
                "name": "Enchant Blade",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Area of EffectDamage Skill"
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
              }
            ],
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
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "23",
                      "atk": "150"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "26",
                      "atk": "200"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "29",
                      "atk": "250"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Normal Weapon: ATK1200% / Two-handed Sword: ATK1000% / Spear:1600%",
                      "sp-cost": "32",
                      "atk": "300"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Normal Weapon: ATK1500% / Two-handed Sword: ATK1250% / Spear:2000%",
                      "sp-cost": "35",
                      "atk": "350"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 5004,
          "imageFile": "5004.png",
          "name": "Dragon Water Breath",
          "maxLevel": 10,
          "prerequisiteText": "Dragon Training 2",
          "group": "Area of EffectDamage",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Uses Icebreath. Enemies damaged by the dragon's breath may sometimes freeze and slow down their movement.\nWhen Fightning Spirit Effect, attack property becomes ghost. When Lux Anima effect, attack property becomes neutral.\n(When Fighting Spirit and Anima Effect, attack property becomes neutral)",
          "levelDetails": [],
          "fixedCastTime": "0.5 seconds",
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
                  "value": "9 cells"
                },
                {
                  "level": 9,
                  "value": "9 cells"
                },
                {
                  "level": 10,
                  "value": "9 cells"
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
                },
                {
                  "level": 6,
                  "value": "2"
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
                  "value": "4"
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
          "iconUrl": "assets/divine-pride/skills/5004.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5004",
          "tree": {
            "idx": 19,
            "row": 2,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 2007,
                "level": 2,
                "name": "Dragon Training",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Area of EffectDamage Skill"
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
                      "sp-cost": "30",
                      "range": "9 cells",
                      "data-1": "1"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "35",
                      "range": "9 cells",
                      "data-1": "1"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "40",
                      "range": "9 cells",
                      "data-1": "1"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "45",
                      "range": "9 cells",
                      "data-1": "2"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "50",
                      "range": "9 cells",
                      "data-1": "2"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "55",
                      "range": "9 cells",
                      "data-1": "2"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "60",
                      "range": "9 cells",
                      "data-1": "3"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "65",
                      "range": "9 cells",
                      "data-1": "3"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "70",
                      "range": "9 cells",
                      "data-1": "4"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "sp-cost": "75",
                      "range": "9 cells",
                      "data-1": "4"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2006,
          "imageFile": "2006.png",
          "name": "Ignition Break",
          "maxLevel": 5,
          "prerequisiteText": "Sonic Wave 2, Wind Cutter 3, Death Bound 5",
          "group": "Area of EffectDamage",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "The weapon hits the ground, causing a strong explosion, damaging all enemies around.\nHalf of the critical chance of the caster is applied, damage increases as BaseLv increases.\nFor Critical Damage, half of Critical Damage option is applied.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 450%"
            },
            {
              "level": 2,
              "text": "ATK 900%"
            },
            {
              "level": 3,
              "text": "ATK 1350%"
            },
            {
              "level": 4,
              "text": "ATK 1800%"
            },
            {
              "level": 5,
              "text": "ATK 2250%"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "1 second",
          "castDelay": "0 seconds",
          "cooldown": "2 seconds",
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
                }
              ]
            },
            {
              "label": "Attack",
              "values": [
                {
                  "level": 1,
                  "value": "400"
                },
                {
                  "level": 2,
                  "value": "600"
                },
                {
                  "level": 3,
                  "value": "800"
                },
                {
                  "level": 4,
                  "value": "1000"
                },
                {
                  "level": 5,
                  "value": "1200"
                }
              ]
            },
            {
              "label": "Attack",
              "values": [
                {
                  "level": 1,
                  "value": "200"
                },
                {
                  "level": 2,
                  "value": "400"
                },
                {
                  "level": 3,
                  "value": "600"
                },
                {
                  "level": 4,
                  "value": "800"
                },
                {
                  "level": 5,
                  "value": "1000"
                }
              ]
            },
            {
              "label": "Attack",
              "values": [
                {
                  "level": 1,
                  "value": "200"
                },
                {
                  "level": 2,
                  "value": "300"
                },
                {
                  "level": 3,
                  "value": "400"
                },
                {
                  "level": 4,
                  "value": "500"
                },
                {
                  "level": 5,
                  "value": "600"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2006.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2006",
          "tree": {
            "idx": 23,
            "row": 2,
            "col": 5,
            "columns": 9,
            "requirements": [
              {
                "id": 2002,
                "level": 2,
                "name": "Sonic Wave",
                "visible": true
              },
              {
                "id": 2003,
                "level": 5,
                "name": "Death Bound",
                "visible": true
              },
              {
                "id": 2005,
                "level": 3,
                "name": "Wind Cutter",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Area of EffectDamage Skill"
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
                    "id": "attack",
                    "label": "Attack"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "35",
                      "attack": "400\n200\n200"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "40",
                      "attack": "600\n400\n300"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "45",
                      "attack": "800\n600\n400"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "50",
                      "attack": "1000\n800\n500"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "55",
                      "attack": "1200\n1000\n600"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
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
      "label": "Lord Knight",
      "pointLimit": 69,
      "tree": {
        "columns": 9,
        "rows": 3
      },
      "skills": [
        {
          "id": 60,
          "imageFile": "60.png",
          "name": "TwoHand Quicken",
          "maxLevel": 10,
          "prerequisiteText": "Two-Handed Sword Mastery 1",
          "group": "Active",
          "type": "Buff",
          "target": "Caster Only",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Two-Handed Sword Skill Form.\nTemporarily boosts attack speed, critical rate and Accuracy Rate. This effect is knocked off by changing weapons except two-handed.\nThis effect is also knocked off by Decrease AGI and Quagmire.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Duration : 30sec, CRI + 3, HIT + 2"
            },
            {
              "level": 2,
              "text": "Duration : 60sec, CRI + 4, HIT + 4"
            },
            {
              "level": 3,
              "text": "Duration : 90sec, CRI + 5, HIT + 6"
            },
            {
              "level": 4,
              "text": "Duration :120sec, CRI + 6, HIT + 8"
            },
            {
              "level": 5,
              "text": "Duration :150sec, CRI + 7, HIT +10"
            },
            {
              "level": 6,
              "text": "Duration :180sec, CRI + 8, HIT +12"
            },
            {
              "level": 7,
              "text": "Duration :210sec, CRI + 9, HIT +14"
            },
            {
              "level": 8,
              "text": "Duration :240sec, CRI +10, HIT +16"
            },
            {
              "level": 9,
              "text": "Duration :270sec, CRI +11, HIT +18"
            },
            {
              "level": 10,
              "text": "Duration :300sec, CRI +12, HIT +20"
            }
          ],
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
                },
                {
                  "level": 6,
                  "value": "34"
                },
                {
                  "level": 7,
                  "value": "38"
                },
                {
                  "level": 8,
                  "value": "42"
                },
                {
                  "level": 9,
                  "value": "46"
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
          "iconUrl": "assets/divine-pride/skills/60.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/60",
          "tree": {
            "idx": 0,
            "row": 0,
            "col": 0,
            "columns": 9,
            "requirements": [
              {
                "id": 3,
                "level": 1,
                "name": "Two Handed Sword Mastery",
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
                    "id": "duration-30sec-cri-3-hit",
                    "label": "Duration : 30sec, Cri + 3, Hit"
                  },
                  {
                    "id": "duration-60sec-cri-4-hit",
                    "label": "Duration : 60sec, Cri + 4, Hit"
                  },
                  {
                    "id": "duration-90sec-cri-5-hit",
                    "label": "Duration : 90sec, Cri + 5, Hit"
                  },
                  {
                    "id": "duration-120sec-cri-6-hit",
                    "label": "Duration :120sec, Cri + 6, Hit"
                  },
                  {
                    "id": "duration-150sec-cri-7-hit",
                    "label": "Duration :150sec, Cri + 7, Hit"
                  },
                  {
                    "id": "duration-180sec-cri-8-hit",
                    "label": "Duration :180sec, Cri + 8, Hit"
                  },
                  {
                    "id": "duration-210sec-cri-9-hit",
                    "label": "Duration :210sec, Cri + 9, Hit"
                  },
                  {
                    "id": "duration-240sec-cri-10-hit",
                    "label": "Duration :240sec, Cri +10, Hit"
                  },
                  {
                    "id": "duration-270sec-cri-11-hit",
                    "label": "Duration :270sec, Cri +11, Hit"
                  },
                  {
                    "id": "duration-300sec-cri-12-hit",
                    "label": "Duration :300sec, Cri +12, Hit"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "duration-30sec-cri-3-hit": "+ 2",
                      "sp-cost": "14"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration-60sec-cri-4-hit": "+ 4",
                      "sp-cost": "18"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration-90sec-cri-5-hit": "+ 6",
                      "sp-cost": "22"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration-120sec-cri-6-hit": "+ 8",
                      "sp-cost": "26"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration-150sec-cri-7-hit": "+10",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "duration-180sec-cri-8-hit": "+12",
                      "sp-cost": "34"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "duration-210sec-cri-9-hit": "+14",
                      "sp-cost": "38"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "duration-240sec-cri-10-hit": "+16",
                      "sp-cost": "42"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "duration-270sec-cri-11-hit": "+18",
                      "sp-cost": "46"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "duration-300sec-cri-12-hit": "+20",
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
          "id": 61,
          "imageFile": "61.png",
          "name": "Auto Counter",
          "maxLevel": 5,
          "prerequisiteText": "Two-Handed Sword Mastery 1",
          "group": "Active",
          "type": "Buff",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "description": "If an opponent physically attacks a player casting Auto Counter while facing it, the attack will be blocked and the caster will perform one critical attack on them.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Auto Counter Duration : 0.4 sec"
            },
            {
              "level": 2,
              "text": "Auto Counter Duration : 0.8 sec"
            },
            {
              "level": 3,
              "text": "Auto Counter Duration : 1.2 sec"
            },
            {
              "level": 4,
              "text": "Auto Counter Duration : 1.6 sec"
            },
            {
              "level": 5,
              "text": "Auto Counter Duration : 2.0 sec"
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
          "iconUrl": "assets/divine-pride/skills/61.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/61",
          "tree": {
            "idx": 1,
            "row": 0,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 3,
                "level": 1,
                "name": "Two Handed Sword Mastery",
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
                      "effect": "Auto Counter Duration : 0.4 sec",
                      "sp-cost": "3"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Auto Counter Duration : 0.8 sec",
                      "sp-cost": "3"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Auto Counter Duration : 1.2 sec",
                      "sp-cost": "3"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Auto Counter Duration : 1.6 sec",
                      "sp-cost": "3"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Auto Counter Duration : 2.0 sec",
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
            "idx": 2,
            "row": 0,
            "col": 2,
            "columns": 9,
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
          "irowikiUrl": "",
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
                    "id": "sp-cost",
                    "label": "SP Cost"
                  },
                  {
                    "id": "not-mounted-damage-4-mounted",
                    "label": "Not Mounted, Damage + 4, Mounted,"
                  },
                  {
                    "id": "not-mounted-damage-8-mounted",
                    "label": "Not Mounted, Damage + 8, Mounted,"
                  },
                  {
                    "id": "not-mounted-damage-12-mounted",
                    "label": "Not Mounted, Damage +12, Mounted,"
                  },
                  {
                    "id": "not-mounted-damage-16-mounted",
                    "label": "Not Mounted, Damage +16, Mounted,"
                  },
                  {
                    "id": "not-mounted-damage-20-mounted",
                    "label": "Not Mounted, Damage +20, Mounted,"
                  },
                  {
                    "id": "not-mounted-damage-24-mounted",
                    "label": "Not Mounted, Damage +24, Mounted,"
                  },
                  {
                    "id": "not-mounted-damage-28-mounted",
                    "label": "Not Mounted, Damage +28, Mounted,"
                  },
                  {
                    "id": "not-mounted-damage-32-mounted",
                    "label": "Not Mounted, Damage +32, Mounted,"
                  },
                  {
                    "id": "not-mounted-damage-36-mounted",
                    "label": "Not Mounted, Damage +36, Mounted,"
                  },
                  {
                    "id": "not-mounted-damage-40-mounted",
                    "label": "Not Mounted, Damage +40, Mounted,"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "not-mounted-damage-4-mounted": "+ 5",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "not-mounted-damage-8-mounted": "+10",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "not-mounted-damage-12-mounted": "+15",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "not-mounted-damage-16-mounted": "+20",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "not-mounted-damage-20-mounted": "+25",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "not-mounted-damage-24-mounted": "+30",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "not-mounted-damage-28-mounted": "+35",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "not-mounted-damage-32-mounted": "+40",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "not-mounted-damage-36-mounted": "+45",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "not-mounted-damage-40-mounted": "+50",
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
          "id": 359,
          "imageFile": "359.png",
          "name": "Berserk",
          "maxLevel": 1,
          "prerequisiteText": "over Lord Knight Job Level 50",
          "group": "Active",
          "type": "Supportive",
          "target": "Caster Only",
          "recoversAp": "",
          "consumesAp": "",
          "description": "HP increases, moving speed and attack power increases, but the flee rate decreases and all other actions are impossible.\nItems cannot be used, and it is impossible to be treated with heel skills. In this state, HP gradually decreases over time.\nAfter use, HP and SP do not recover naturally for 5 minutes.",
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/359.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/359",
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
                      "sp-cost": "200"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 358,
          "imageFile": "358.png",
          "name": "Tension Relax",
          "maxLevel": 1,
          "prerequisiteText": "Provoke 5, HP Recovery 10, Endure 3",
          "group": "Active",
          "type": "Supportive",
          "target": "Caster Only",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Sits down and relaxes to triple the HP Recovery rate.\nStanding up cancels this skill, whether the user manually stood up or was knocked out of sitting by an attack.",
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/358.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/358",
          "tree": {
            "idx": 5,
            "row": 0,
            "col": 5,
            "columns": 9,
            "requirements": [
              {
                "id": 4,
                "level": 10,
                "name": "Increase HP Recovery",
                "visible": false
              },
              {
                "id": 6,
                "level": 5,
                "name": "Provoke",
                "visible": false
              },
              {
                "id": 8,
                "level": 3,
                "name": "Endure",
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
          "id": 1001,
          "imageFile": "1001.png",
          "name": "Charge Attack",
          "maxLevel": 1,
          "prerequisiteText": "Quest complete",
          "group": "Active",
          "type": "Physical Attack",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Consumes 40 SP. Quickly approach and attack a distant target.\nThis skill inflicts damage at 700% of ATK and knocks the target 2 cells backward. Knocks 4 cells backward in PvP. This Knockback effect is disabled in WoE.",
          "levelDetails": [],
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
                  "value": "40"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/1001.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/1001",
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
          "id": 356,
          "imageFile": "356.png",
          "name": "Parrying",
          "maxLevel": 10,
          "prerequisiteText": "Provoke 5, Two-Handed Sword Mastery 10, Two Hand Quicken 3",
          "group": "Active",
          "type": "Supportive",
          "target": "Caster Only",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Allows the user to block physical attacks with the equipped two-handed sword by chance temporarily.\nOnly available with two handed sword.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Block +23%"
            },
            {
              "level": 2,
              "text": "Block +26%"
            },
            {
              "level": 3,
              "text": "Block +29%"
            },
            {
              "level": 4,
              "text": "Block +32%"
            },
            {
              "level": 5,
              "text": "Block +35%"
            },
            {
              "level": 6,
              "text": "Block +38%"
            },
            {
              "level": 7,
              "text": "Block +41%"
            },
            {
              "level": 8,
              "text": "Block +44%"
            },
            {
              "level": 9,
              "text": "Block +47%"
            },
            {
              "level": 10,
              "text": "Block +50%"
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
          "iconUrl": "assets/divine-pride/skills/356.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/356",
          "tree": {
            "idx": 7,
            "row": 0,
            "col": 7,
            "columns": 9,
            "requirements": [
              {
                "id": 3,
                "level": 10,
                "name": "Two Handed Sword Mastery",
                "visible": false
              },
              {
                "id": 6,
                "level": 5,
                "name": "Provoke",
                "visible": false
              },
              {
                "id": 60,
                "level": 3,
                "name": "Two Hand Quicken",
                "visible": true
              }
            ]
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
                    "id": "block",
                    "label": "Block"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "block": "+23%",
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "block": "+26%",
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "block": "+29%",
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "block": "+32%",
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "block": "+35%",
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "block": "+38%",
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "block": "+41%",
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "block": "+44%",
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "block": "+47%",
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "block": "+50%",
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
          "id": 62,
          "imageFile": "62.png",
          "name": "Bowling Bash",
          "maxLevel": 10,
          "prerequisiteText": "Bash 10, Magnum Break 3, Two-Handed Sword Mastery 5, Two Hand Quicken 10, Auto Counter 5",
          "group": "Active",
          "type": "Physical Attack",
          "target": "1 Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Inflict physical attack damage twice to all enemies and push tehm backwards.\nIf attacked with two-hand sword, the number of attacks increases according to the number of enemy targets and targets surrounding them, and attacks them up to four times.\nThe player cannot change weapons temporarilty.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 140%"
            },
            {
              "level": 2,
              "text": "ATK 180%"
            },
            {
              "level": 3,
              "text": "ATK 220%"
            },
            {
              "level": 4,
              "text": "ATK 260%"
            },
            {
              "level": 5,
              "text": "ATK 300%"
            },
            {
              "level": 6,
              "text": "ATK 340%"
            },
            {
              "level": 7,
              "text": "ATK 380%"
            },
            {
              "level": 8,
              "text": "ATK 420%"
            },
            {
              "level": 9,
              "text": "ATK 460%"
            },
            {
              "level": 10,
              "text": "ATK 500%"
            }
          ],
          "fixedCastTime": "0.35 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0 seconds",
          "cooldown": "1 second",
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
                  "value": "14"
                },
                {
                  "level": 3,
                  "value": "15"
                },
                {
                  "level": 4,
                  "value": "16"
                },
                {
                  "level": 5,
                  "value": "17"
                },
                {
                  "level": 6,
                  "value": "18"
                },
                {
                  "level": 7,
                  "value": "19"
                },
                {
                  "level": 8,
                  "value": "20"
                },
                {
                  "level": 9,
                  "value": "21"
                },
                {
                  "level": 10,
                  "value": "22"
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
                },
                {
                  "level": 6,
                  "value": "2 cells"
                },
                {
                  "level": 7,
                  "value": "2 cells"
                },
                {
                  "level": 8,
                  "value": "2 cells"
                },
                {
                  "level": 9,
                  "value": "2 cells"
                },
                {
                  "level": 10,
                  "value": "2 cells"
                }
              ]
            },
            {
              "label": "Atk %",
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
                },
                {
                  "level": 6,
                  "value": "340"
                },
                {
                  "level": 7,
                  "value": "380"
                },
                {
                  "level": 8,
                  "value": "420"
                },
                {
                  "level": 9,
                  "value": "460"
                },
                {
                  "level": 10,
                  "value": "500"
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/62.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/62",
          "tree": {
            "idx": 8,
            "row": 0,
            "col": 8,
            "columns": 9,
            "requirements": [
              {
                "id": 3,
                "level": 5,
                "name": "Two Handed Sword Mastery",
                "visible": false
              },
              {
                "id": 5,
                "level": 10,
                "name": "Bash",
                "visible": false
              },
              {
                "id": 7,
                "level": 3,
                "name": "Magnum Break",
                "visible": false
              },
              {
                "id": 60,
                "level": 10,
                "name": "Two Hand Quicken",
                "visible": true
              },
              {
                "id": 61,
                "level": 5,
                "name": "Counter Attack",
                "visible": true
              }
            ]
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
                "value": "0.35 seconds"
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
                      "sp-cost": "13",
                      "range": "2 cells",
                      "atk": "140",
                      "data-1": "2",
                      "data-2": "1"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "14",
                      "range": "2 cells",
                      "atk": "180",
                      "data-1": "2",
                      "data-2": "1"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "15",
                      "range": "2 cells",
                      "atk": "220",
                      "data-1": "2",
                      "data-2": "2"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "16",
                      "range": "2 cells",
                      "atk": "260",
                      "data-1": "2",
                      "data-2": "2"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "17",
                      "range": "2 cells",
                      "atk": "300",
                      "data-1": "2",
                      "data-2": "3"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "18",
                      "range": "2 cells",
                      "atk": "340",
                      "data-1": "2",
                      "data-2": "3"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "19",
                      "range": "2 cells",
                      "atk": "380",
                      "data-1": "2",
                      "data-2": "4"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "20",
                      "range": "2 cells",
                      "atk": "420",
                      "data-1": "2",
                      "data-2": "4"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "21",
                      "range": "2 cells",
                      "atk": "460",
                      "data-1": "2",
                      "data-2": "5"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "sp-cost": "22",
                      "range": "2 cells",
                      "atk": "500",
                      "data-1": "2",
                      "data-2": "5"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
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
            "idx": 9,
            "row": 1,
            "col": 0,
            "columns": 9,
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
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 56,
          "imageFile": "56.png",
          "name": "Pierce",
          "maxLevel": 10,
          "prerequisiteText": "Spear Mastery 1",
          "group": "Active",
          "type": "Physical Attack",
          "target": "1 Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Spear Skill Form.\nThrusts the equipped spear into a single target to inflict physical damage multiple times depending on the size of the target. Small enemies will take one hit, Medium enemies will take two hits, and Large enemies will take three hits. .\nThe Accuracy Bonus is applied after the hit rate is determined.",
          "levelDetails": [
            {
              "level": 1,
              "text": "1time ATK 110%, Acurracy Bonus: 5%"
            },
            {
              "level": 2,
              "text": "1time ATK 120%, Acurracy Bonus:10%"
            },
            {
              "level": 3,
              "text": "1time ATK 130%, Acurracy Bonus:15%"
            },
            {
              "level": 4,
              "text": "1time ATK 140%, Acurracy Bonus:20%"
            },
            {
              "level": 5,
              "text": "1time ATK 150%, Acurracy Bonus:25%"
            },
            {
              "level": 6,
              "text": "1time ATK 160%, Acurracy Bonus:30%"
            },
            {
              "level": 7,
              "text": "1time ATK 170%, Acurracy Bonus:35%"
            },
            {
              "level": 8,
              "text": "1time ATK 180%, Acurracy Bonus:40%"
            },
            {
              "level": 9,
              "text": "1time ATK 190%, Acurracy Bonus:45%"
            },
            {
              "level": 10,
              "text": "1time ATK 200%, Acurracy Bonus:50%"
            }
          ],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "7"
                },
                {
                  "level": 2,
                  "value": "7"
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
                  "value": "7"
                },
                {
                  "level": 6,
                  "value": "7"
                },
                {
                  "level": 7,
                  "value": "7"
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
                  "value": "7"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/56.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/56",
          "tree": {
            "idx": 10,
            "row": 1,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 55,
                "level": 1,
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
                      "sp-cost": "7"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "7"
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
                      "sp-cost": "7"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "7"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "7"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "7"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "7"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "7"
                    }
                  },
                  {
                    "level": 10,
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
          "id": 355,
          "imageFile": "355.png",
          "name": "Aura Blade",
          "maxLevel": 5,
          "prerequisiteText": "Bash 5, Magnum Break 5, Two-Handed Sword Mastery 5",
          "group": "Active",
          "type": "Buff",
          "target": "Caster Only",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Produces a special aura around the equipped weapon to strengthen its power temporarily.\nDamage is affected by the caster's base level.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Additional Damage : Base level X 4"
            },
            {
              "level": 2,
              "text": "Additional Damage : Base level X 5"
            },
            {
              "level": 3,
              "text": "Additional Damage : Base level X 6"
            },
            {
              "level": 4,
              "text": "Additional Damage : Base level X 7"
            },
            {
              "level": 5,
              "text": "Additional Damage : Base level X 8"
            }
          ],
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
                  "value": "26"
                },
                {
                  "level": 3,
                  "value": "34"
                },
                {
                  "level": 4,
                  "value": "42"
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
          "iconUrl": "assets/divine-pride/skills/355.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/355",
          "tree": {
            "idx": 11,
            "row": 1,
            "col": 2,
            "columns": 9,
            "requirements": [
              {
                "id": 3,
                "level": 5,
                "name": "Two Handed Sword Mastery",
                "visible": false
              },
              {
                "id": 7,
                "level": 5,
                "name": "Magnum Break",
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
                      "effect": "Additional Damage : Base level x 4",
                      "sp-cost": "18"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Additional Damage : Base level x 5",
                      "sp-cost": "26"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Additional Damage : Base level x 6",
                      "sp-cost": "34"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Additional Damage : Base level x 7",
                      "sp-cost": "42"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Additional Damage : Base level x 8",
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
          "id": 357,
          "imageFile": "357.png",
          "name": "Spear Dynamo",
          "maxLevel": 5,
          "prerequisiteText": "HP Recovery 5, Spear Mastery 5, Riding 1",
          "group": "Active",
          "type": "Buff",
          "target": "Caster Only",
          "recoversAp": "",
          "consumesAp": "",
          "description": "This skill also boosts attack power and Hit rate and endure effect at cost of physical defense.",
          "levelDetails": [
            {
              "level": 1,
              "text": "HIT +10, ATK + 7%, DEF - 7%"
            },
            {
              "level": 2,
              "text": "HIT +20, ATK + 9%, DEF - 9%"
            },
            {
              "level": 3,
              "text": "HIT +30, ATK +11%, DEF -11%"
            },
            {
              "level": 4,
              "text": "HIT +40, ATK +13%, DEF -13%"
            },
            {
              "level": 5,
              "text": "HIT +50, ATK +15%, DEF -15%"
            }
          ],
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
          "iconUrl": "assets/divine-pride/skills/357.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/357",
          "tree": {
            "idx": 12,
            "row": 1,
            "col": 3,
            "columns": 9,
            "requirements": [
              {
                "id": 4,
                "level": 5,
                "name": "Increase HP Recovery",
                "visible": false
              },
              {
                "id": 55,
                "level": 5,
                "name": "Spear Mastery",
                "visible": true
              },
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
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "5"
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
                    "id": "hit-10-atk-7-def",
                    "label": "Hit +10, Atk + 7%, Def"
                  },
                  {
                    "id": "hit-20-atk-9-def",
                    "label": "Hit +20, Atk + 9%, Def"
                  },
                  {
                    "id": "hit-30-atk-11-def",
                    "label": "Hit +30, Atk +11%, Def"
                  },
                  {
                    "id": "hit-40-atk-13-def",
                    "label": "Hit +40, Atk +13%, Def"
                  },
                  {
                    "id": "hit-50-atk-15-def",
                    "label": "Hit +50, Atk +15%, Def"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "hit-10-atk-7-def": "- 7%",
                      "sp-cost": "14"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "hit-20-atk-9-def": "- 9%",
                      "sp-cost": "18"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "hit-30-atk-11-def": "-11%",
                      "sp-cost": "22"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "hit-40-atk-13-def": "-13%",
                      "sp-cost": "26"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "hit-50-atk-15-def": "-15%",
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
          "id": 495,
          "imageFile": "495.png",
          "name": "One Hand Quicken",
          "maxLevel": 1,
          "prerequisiteText": "Two Hand Quicken 10,",
          "group": "Supportive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Increase Attack Speed when using\na One Handed Sword Class Weapon. Activating\nthis skill cancels the effect of any any potions\nthat have a similar effect, but it is possible\nto use these potions after One Hand Quicken has\nbeen cast. Unequipping Sword will cancel this\nskill's effect.",
          "levelDetails": [],
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
          "iconUrl": "assets/divine-pride/skills/495.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/495",
          "tree": {
            "idx": 13,
            "row": 1,
            "col": 4,
            "columns": 9,
            "requirements": [
              {
                "id": 60,
                "level": 10,
                "name": "Two Hand Quicken",
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
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 59,
          "imageFile": "59.png",
          "name": "Spear Boomerang",
          "maxLevel": 5,
          "prerequisiteText": "Pierce 3",
          "group": "Active",
          "type": "Ranged Physical Attack",
          "target": "1 Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Spear Skill Form.\nConsumes SP 12 and hurls the equipped spear like a boomerang at a single target to inflict ranged physical damage.\nlevel 1 gives a physical Attack damage.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 150%, Range: 3cell"
            },
            {
              "level": 2,
              "text": "ATK 200%, Range: 5cell"
            },
            {
              "level": 3,
              "text": "ATK 250%, Range: 7cell"
            },
            {
              "level": 4,
              "text": "ATK 300%, Range: 9cell"
            },
            {
              "level": 5,
              "text": "ATK 350%, Range:11cell"
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
          "iconUrl": "assets/divine-pride/skills/59.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/59",
          "tree": {
            "idx": 16,
            "row": 1,
            "col": 7,
            "columns": 9,
            "requirements": [
              {
                "id": 56,
                "level": 3,
                "name": "Pierce",
                "visible": true
              }
            ]
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
          "id": 58,
          "imageFile": "58.png",
          "name": "Spear Stab",
          "maxLevel": 10,
          "prerequisiteText": "Pierce 5",
          "group": "Active",
          "type": "Ranged Physical Attack",
          "target": "1 Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Spear Skill Form.\nThrusts the equipped spear into a single target to inflict physical damage to all enemies in straight line between the user and the target and push them 6 cells backwards.",
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
                },
                {
                  "level": 6,
                  "value": "9"
                },
                {
                  "level": 7,
                  "value": "9"
                },
                {
                  "level": 8,
                  "value": "9"
                },
                {
                  "level": 9,
                  "value": "9"
                },
                {
                  "level": 10,
                  "value": "9"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/58.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/58",
          "tree": {
            "idx": 17,
            "row": 1,
            "col": 8,
            "columns": 9,
            "requirements": [
              {
                "id": 56,
                "level": 5,
                "name": "Pierce",
                "visible": true
              }
            ]
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
                      "sp-cost": "9"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "9"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "9"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "9"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "9"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "9"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "9"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "9"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "9"
                    }
                  },
                  {
                    "level": 10,
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
          "id": 398,
          "imageFile": "398.png",
          "name": "Traumatic Blow",
          "maxLevel": 5,
          "prerequisiteText": "Spear Mastery 9,",
          "group": "Aggressive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Brutally strike an enemy with the\nchance of causing the Bleeding status, which\nwill make the target continuously receive extra\ndamage for a while.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Atk 140%"
            },
            {
              "level": 2,
              "text": "Atk 180%"
            },
            {
              "level": 3,
              "text": "Atk 220%"
            },
            {
              "level": 4,
              "text": "Atk 260%"
            },
            {
              "level": 5,
              "text": "Atk 300%"
            }
          ],
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
                  "value": "23"
                },
                {
                  "level": 3,
                  "value": "23"
                },
                {
                  "level": 4,
                  "value": "23"
                },
                {
                  "level": 5,
                  "value": "23"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/398.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/398",
          "tree": {
            "idx": 19,
            "row": 2,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 55,
                "level": 9,
                "name": "Spear Mastery",
                "visible": true
              },
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
                "value": "Aggressive Skill"
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
                      "sp-cost": "23"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "23"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "23"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "23"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "23"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 57,
          "imageFile": "57.png",
          "name": "Brandish Spear",
          "maxLevel": 10,
          "prerequisiteText": "Riding 1, Spear Stab 3",
          "group": "Active",
          "type": "Ranged Physical Attack",
          "target": "1 Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Spear Skill Form.\nThis skill can be used when the user is mounted, Swings the equipped spear forward to a single target to inflict physical damage to all enemies in front of the user..\nDamage can be increased upon the user's STR.\nThe player cannot change weapons during this time.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 500%, Range: 5X2cell"
            },
            {
              "level": 2,
              "text": "ATK 600%, Range: 5X2cell"
            },
            {
              "level": 3,
              "text": "ATK 700%, Range: 5X2cell"
            },
            {
              "level": 4,
              "text": "ATK 800%, Range: 5X3cell"
            },
            {
              "level": 5,
              "text": "ATK 900%, Range: 5X3cell"
            },
            {
              "level": 6,
              "text": "ATK 1000%, Range: 5X3cell"
            },
            {
              "level": 7,
              "text": "ATK 1100%, Range: 5X4cell"
            },
            {
              "level": 8,
              "text": "ATK 1200%, Range: 5X4cell"
            },
            {
              "level": 9,
              "text": "ATK 1300%, Range: 5X4cell"
            },
            {
              "level": 10,
              "text": "ATK 1400%, Range: 5X5cell"
            }
          ],
          "fixedCastTime": "0.35 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "1 second",
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
                  "value": "24"
                },
                {
                  "level": 3,
                  "value": "24"
                },
                {
                  "level": 4,
                  "value": "24"
                },
                {
                  "level": 5,
                  "value": "24"
                },
                {
                  "level": 6,
                  "value": "24"
                },
                {
                  "level": 7,
                  "value": "24"
                },
                {
                  "level": 8,
                  "value": "24"
                },
                {
                  "level": 9,
                  "value": "24"
                },
                {
                  "level": 10,
                  "value": "24"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/57.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/57",
          "tree": {
            "idx": 24,
            "row": 2,
            "col": 6,
            "columns": 9,
            "requirements": [
              {
                "id": 58,
                "level": 3,
                "name": "Spear Stab",
                "visible": true
              },
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
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "10"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0.35 seconds"
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
                "value": "1 second"
              },
              {
                "label": "Target",
                "value": "1 Enemy"
              },
              {
                "label": "Area of Effect",
                "value": "Lv 1: 5 x 2 cells / Lv 2: 5 x 2 cells / Lv 3: 5 x 2 cells / Lv 4: 5 x 3 cells / Lv 5: 5 x 3 cells / Lv 6: 5 x 3 cells / Lv 7: 5 x 4 cells / Lv 8: 5 x 4 cells / Lv 9: 5 x 4 cells / Lv 10: 5 x 5 cells"
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
                      "sp-cost": "24"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "24"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "24"
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
                      "sp-cost": "24"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "24"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "24"
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
                      "sp-cost": "24"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
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
          "id": 397,
          "imageFile": "397.png",
          "name": "Clashing Spiral",
          "maxLevel": 5,
          "prerequisiteText": "Spear Mastery 10,",
          "group": "Aggressive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Hit an enemy with spiraling strikes\nthat immobilize it for a second and inflict an\namount of damage determined by the skill's\nlevel and the weight of the equipped weapon.\nThis skill's level also affects its cast time\nand delay.",
          "levelDetails": [],
          "fixedCastTime": "0.3 seconds",
          "castDelay": "1 second",
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
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/397.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/397",
          "tree": {
            "idx": 25,
            "row": 2,
            "col": 7,
            "columns": 9,
            "requirements": [
              {
                "id": 55,
                "level": 5,
                "name": "Spear Mastery",
                "visible": true
              },
              {
                "id": 56,
                "level": 5,
                "name": "Pierce",
                "visible": true
              },
              {
                "id": 58,
                "level": 5,
                "name": "Spear Stab",
                "visible": true
              },
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
                "value": "Aggressive Skill"
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
                      "sp-cost": "18"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "21"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "24"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "27"
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
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 399,
          "imageFile": "399.png",
          "name": "Vital Strike",
          "maxLevel": 10,
          "prerequisiteText": "Spear Mastery 9,",
          "group": "Aggressive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Strike an enemy's vital points to\ncause various abnormal statuses. This skill's\nlevel affects the Attack Power and the success\nrate of causing abnormal status effects.\nRequires Spear Class Weapon.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Atk 60%"
            },
            {
              "level": 2,
              "text": "Atk 70%"
            },
            {
              "level": 3,
              "text": "Atk 80%"
            },
            {
              "level": 4,
              "text": "Atk 90%"
            },
            {
              "level": 5,
              "text": "Atk 100%"
            },
            {
              "level": 6,
              "text": "Atk 110%"
            },
            {
              "level": 7,
              "text": "Atk 120%"
            },
            {
              "level": 8,
              "text": "Atk 130%"
            },
            {
              "level": 9,
              "text": "Atk 140%"
            },
            {
              "level": 10,
              "text": "Atk 150%"
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
                  "value": "14"
                },
                {
                  "level": 4,
                  "value": "14"
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
                  "value": "18"
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
                  "value": "20"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/399.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/399",
          "tree": {
            "idx": 26,
            "row": 2,
            "col": 8,
            "columns": 9,
            "requirements": [
              {
                "id": 64,
                "level": 3,
                "name": "Cavalier Mastery",
                "visible": true
              },
              {
                "id": 398,
                "level": 3,
                "name": "Traumatic Blow",
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
                      "sp-cost": "14"
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
                      "sp-cost": "16"
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
                      "sp-cost": "18"
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
        }
      ]
    },
    {
      "id": "previous-3",
      "label": "Swordman",
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
          "irowikiUrl": "",
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
                      "effect": "(HP 5+0.2% of Ma x HP) / 10 sec",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "(HP 10+0.4% of Ma x HP) / 10 sec",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "(HP 15+0.6% of Ma x HP) / 10 sec",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "(HP 20+0.8% of Ma x HP) / 10 sec",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "(HP 25+1.0% of Ma x HP) / 10 sec",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "(HP 30+1.2% of Ma x HP) / 10 sec",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "(HP 35+1.4% of Ma x HP) / 10 sec",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "(HP 40+1.6% of Ma x HP) / 10 sec",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "(HP 45+1.8% of Ma x HP) / 10 sec",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "(HP 50+2.0% of Ma x HP) / 10 sec",
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5",
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
                "value": "Offensive Skill"
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
          "irowikiUrl": "",
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6",
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
                    "id": "enemy-s-atk-11-enemy-s-def",
                    "label": "Enemy's Atk +11%, Enemy's Def"
                  },
                  {
                    "id": "enemy-s-atk-14-enemy-s-def",
                    "label": "Enemy's Atk +14%, Enemy's Def"
                  },
                  {
                    "id": "enemy-s-atk-17-enemy-s-def",
                    "label": "Enemy's Atk +17%, Enemy's Def"
                  },
                  {
                    "id": "enemy-s-atk-20-enemy-s-def",
                    "label": "Enemy's Atk +20%, Enemy's Def"
                  },
                  {
                    "id": "enemy-s-atk-23-enemy-s-def",
                    "label": "Enemy's Atk +23%, Enemy's Def"
                  },
                  {
                    "id": "enemy-s-atk-26-enemy-s-def",
                    "label": "Enemy's Atk +26%, Enemy's Def"
                  },
                  {
                    "id": "enemy-s-atk-29-enemy-s-def",
                    "label": "Enemy's Atk +29%, Enemy's Def"
                  },
                  {
                    "id": "enemy-s-atk-32-enemy-s-def",
                    "label": "Enemy's Atk +32%, Enemy's Def"
                  },
                  {
                    "id": "enemy-s-atk-5-enemy-s-def",
                    "label": "Enemy's Atk +5%, Enemy's Def"
                  },
                  {
                    "id": "enemy-s-atk-8-enemy-s-def",
                    "label": "Enemy's Atk +8%, Enemy's Def"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "enemy-s-atk-5-enemy-s-def": "-10%",
                      "sp-cost": "4"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "enemy-s-atk-8-enemy-s-def": "-15%",
                      "sp-cost": "5"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "enemy-s-atk-11-enemy-s-def": "-20%",
                      "sp-cost": "6"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "enemy-s-atk-14-enemy-s-def": "-25%",
                      "sp-cost": "7"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "enemy-s-atk-17-enemy-s-def": "-30%",
                      "sp-cost": "8"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "enemy-s-atk-20-enemy-s-def": "-35%",
                      "sp-cost": "9"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "enemy-s-atk-23-enemy-s-def": "-40%",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "enemy-s-atk-26-enemy-s-def": "-45%",
                      "sp-cost": "11"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "enemy-s-atk-29-enemy-s-def": "-50%",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "enemy-s-atk-32-enemy-s-def": "-55%",
                      "sp-cost": "13"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
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
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/146.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/146",
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
                      "sp-cost": "1"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
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
            "row": 0,
            "col": 8,
            "columns": 9,
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
          "irowikiUrl": "",
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
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/7.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/7",
          "tree": {
            "idx": 10,
            "row": 1,
            "col": 1,
            "columns": 9,
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
          "irowikiUrl": "",
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/8.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/8",
          "tree": {
            "idx": 11,
            "row": 1,
            "col": 2,
            "columns": 9,
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
                    "id": "duration-10-sec-mdef",
                    "label": "Duration 10 Sec, Mdef"
                  },
                  {
                    "id": "duration-13-sec-mdef",
                    "label": "Duration 13 Sec, Mdef"
                  },
                  {
                    "id": "duration-16-sec-mdef",
                    "label": "Duration 16 Sec, Mdef"
                  },
                  {
                    "id": "duration-19-sec-mdef",
                    "label": "Duration 19 Sec, Mdef"
                  },
                  {
                    "id": "duration-22-sec-mdef",
                    "label": "Duration 22 Sec, Mdef"
                  },
                  {
                    "id": "duration-25-sec-mdef",
                    "label": "Duration 25 Sec, Mdef"
                  },
                  {
                    "id": "duration-28-sec-mdef",
                    "label": "Duration 28 Sec, Mdef"
                  },
                  {
                    "id": "duration-31-sec-mdef",
                    "label": "Duration 31 Sec, Mdef"
                  },
                  {
                    "id": "duration-34-sec-mdef",
                    "label": "Duration 34 Sec, Mdef"
                  },
                  {
                    "id": "duration-37-sec-mdef",
                    "label": "Duration 37 Sec, Mdef"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "duration-10-sec-mdef": "+1",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration-13-sec-mdef": "+2",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration-16-sec-mdef": "+3",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration-19-sec-mdef": "+4",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration-22-sec-mdef": "+5",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "duration-25-sec-mdef": "+6",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "duration-28-sec-mdef": "+7",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "duration-31-sec-mdef": "+8",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "duration-34-sec-mdef": "+9",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "duration-37-sec-mdef": "+10",
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
      "id": 5201,
      "imageFile": "5201.png",
      "name": "Servant Weapon",
      "maxLevel": 5,
      "prerequisiteText": "basic skill",
      "group": "Active",
      "type": "Support",
      "target": "Self",
      "recoversAp": "Skill Level x 6",
      "consumesAp": "",
      "description": "Summon ethereal weapons. When attacking with normal Physical Melee attack, consume the weapons to inflict Melee Physical damage to target and enemies within 9x9 range twice.\nYou can control up to 5 weapons, and depending on your Skill Level, Servant Weapon will have faster weapon recovery interval and additional attack chance.\nAdditional damage increase based on the caster's base level and POW, and CRIT damage is applied based on the caster's CRIT.\nIf the hit crits, it inflicts half of the total of your CRIT Damage bonus options as damage.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK per hit 900%/Duration 30 seconds"
        },
        {
          "level": 2,
          "text": "ATK per hit 1300%/Duration 60 seconds"
        },
        {
          "level": 3,
          "text": "ATK per hit 1700%/Duration 90 seconds"
        },
        {
          "level": 4,
          "text": "ATK per hit 2100%/Duration 120 seconds"
        },
        {
          "level": 5,
          "text": "ATK per hit 2500%/Duration 150 seconds"
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
      "iconUrl": "assets/divine-pride/skills/5201.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5201",
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
          },
          {
            "label": "Target",
            "value": "Self"
          },
          {
            "label": "AP Generated",
            "value": "Skill Level x 6"
          }
        ],
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
                  "sp-cost": "30"
                }
              },
              {
                "level": 2,
                "values": {
                  "duration": "60 seconds",
                  "sp-cost": "40"
                }
              },
              {
                "level": 3,
                "values": {
                  "duration": "90 seconds",
                  "sp-cost": "50"
                }
              },
              {
                "level": 4,
                "values": {
                  "duration": "120 seconds",
                  "sp-cost": "60"
                }
              },
              {
                "level": 5,
                "values": {
                  "duration": "150 seconds",
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
          "skillName": "Servant Weapon",
          "versionId": "rebalance-1",
          "versionLabel": "Rebalance 1",
          "file": "rebalances/dragon-knight/rebalance_1.md",
          "section": "1.1",
          "notes": [
            "Increases damage from 400%Atk to 450%Atk based on level 5.",
            "Increases trigger chance from 10% to 15% based on level 5.",
            "Increases area of effect from 5x5 cells to 9x9 cells."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "400%Atk",
              "after": "450%Atk",
              "scope": "Lv 5",
              "source": "Increases damage from 400%Atk to 450%Atk based on level 5."
            },
            {
              "label": "Trigger Chance",
              "before": "10%",
              "after": "15%",
              "scope": "Lv 5",
              "source": "Increases trigger chance from 10% to 15% based on level 5."
            },
            {
              "label": "Area of Effect",
              "before": "5 x 5 cells",
              "after": "9 x 9 cells",
              "scope": "",
              "source": "Increases area of effect from 5x5 cells to 9x9 cells."
            }
          ]
        },
        {
          "skillName": "Servant Weapon",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/dragon-knight/rebalance_2.md",
          "section": "1.2",
          "notes": [
            "Increases number of hit from 1 hit to 2 hits.",
            "Increases damage from 450%Atk to 2500%Atk per hit based on level 5."
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
              "before": "450%Atk",
              "after": "2500%Atk per hit",
              "scope": "Lv 5",
              "source": "Increases damage from 450%Atk to 2500%Atk per hit based on level 5."
            }
          ]
        },
        {
          "skillName": "Servant Weapon",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/dragon-knight/rebalance_4.md",
          "section": "1.1",
          "notes": [
            "Reduces skill cooldown from 150 seconds to 60 seconds based on level 5.",
            "Increases base damage from 2500%Atk to 4850%Atk based on level 5.",
            "Increases number of hit from 2 hits to 3 hits.",
            "No longer be removed by Dispell or Clearance.",
            "Increases the trigger chance of weapon from 15% to 25% based on level 5."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "150 seconds",
              "after": "60 seconds",
              "scope": "Lv 5",
              "source": "Reduces skill cooldown from 150 seconds to 60 seconds based on level 5."
            },
            {
              "label": "Damage",
              "before": "2500%Atk",
              "after": "4850%Atk",
              "scope": "Lv 5",
              "source": "Increases base damage from 2500%Atk to 4850%Atk based on level 5."
            },
            {
              "label": "Number Of Hit",
              "before": "2 hits",
              "after": "3 hits",
              "scope": "",
              "source": "Increases number of hit from 2 hits to 3 hits."
            },
            {
              "label": "The Trigger Chance Of Weapon",
              "before": "15%",
              "after": "25%",
              "scope": "Lv 5",
              "source": "Increases the trigger chance of weapon from 15% to 25% based on level 5."
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
      "id": 5207,
      "imageFile": "5207.png",
      "name": "Two-handed Defense",
      "maxLevel": 10,
      "prerequisiteText": "basic skill",
      "group": "Passive",
      "type": "",
      "target": "",
      "recoversAp": "",
      "consumesAp": "",
      "description": "Two-handed Swords, Spears, and Axes decrease Physical damage from enemies of all sizes.",
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
      "iconUrl": "assets/divine-pride/skills/5207.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5207",
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
      "id": 5206,
      "imageFile": "5206.png",
      "name": "Charging Pierce",
      "maxLevel": 10,
      "prerequisiteText": "Hundred Spears Lv. 5",
      "group": "Active",
      "type": "Support",
      "target": "Self",
      "recoversAp": "",
      "consumesAp": "",
      "description": "A Spear and Two-handed Sword skill.\nPierce, Clashing Spiral, Hundred Spears, and Madness Crusher temporarily add Charge stacks.\nCharge stacks last for 5 seconds, and disappear if not increased within the time limit.\nYou can get up to 10 Charge stacks to significantly increase Pierce, Clashing Spiral, Hundred Spears, and Madness Crusher damage.",
      "levelDetails": [],
      "fixedCastTime": "0.4 seconds",
      "variableCastTime": "0.8 seconds",
      "castDelay": "0.5 seconds",
      "cooldown": "60 seconds",
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
              "value": "65"
            },
            {
              "level": 10,
              "value": "70"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5206.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5206",
      "tree": {
        "idx": 5,
        "row": 0,
        "col": 5,
        "columns": 9,
        "requirements": [
          {
            "id": 2004,
            "level": 5,
            "name": "Hundred Spears",
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
            "value": "0.4 seconds"
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
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "sp-cost": "25"
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
                  "sp-cost": "35"
                }
              },
              {
                "level": 4,
                "values": {
                  "sp-cost": "40"
                }
              },
              {
                "level": 5,
                "values": {
                  "sp-cost": "45"
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
                  "sp-cost": "55"
                }
              },
              {
                "level": 8,
                "values": {
                  "sp-cost": "60"
                }
              },
              {
                "level": 9,
                "values": {
                  "sp-cost": "65"
                }
              },
              {
                "level": 10,
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
      "id": 5203,
      "imageFile": "5203.png",
      "name": "Servant Weapon - Sign",
      "maxLevel": 5,
      "prerequisiteText": "Servant Weapon Lv. 3",
      "group": "Active",
      "type": "Support",
      "target": "1 Target",
      "recoversAp": "",
      "consumesAp": "",
      "description": "A Servant Weapon skill.\nShoot a servant Weapon at an enemy, marking it as a Servant Weapon - Phantom and Demolition target.",
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
      "iconUrl": "assets/divine-pride/skills/5203.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5203",
      "tree": {
        "idx": 8,
        "row": 0,
        "col": 8,
        "columns": 9,
        "requirements": [
          {
            "id": 5201,
            "level": 3,
            "name": "Servant Weapon",
            "visible": true
          }
        ]
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
      "irowikiUrl": "",
      "balanceNotes": [],
      "api": {
        "status": "not-used",
        "entries": [],
        "selectedEntry": null
      }
    },
    {
      "id": 5208,
      "imageFile": "5208.png",
      "name": "Hack And Slasher",
      "maxLevel": 10,
      "prerequisiteText": "Two-handed defending 5",
      "group": "Active",
      "type": "Melee/Ranged Physical",
      "target": "Single Target",
      "recoversAp": "",
      "consumesAp": "",
      "description": "Two-handed swords and Two-handed spears only skills.\nSwing the weapon at the target and deal physical damage to the target and within the surrounding range 2 times.\nWhen used as a two-handed sword, it is applied as melee physical damage,\nWhen used as a two-handed spear, it is applied as long-distance physical damage.\nDamage is additionally increased according to the user's base level and POW, and critical damage is applied according to the user's critical probability.\nIn the case of critical damage, half of the total critical damage increase options are applied.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK Per Hit 950%/Range: 3x3 Cells"
        },
        {
          "level": 2,
          "text": "ATK Per Hit 1700%/Range: 3x3 Cells"
        },
        {
          "level": 3,
          "text": "ATK Per Hit 2450%/Range: 3x3 Cells"
        },
        {
          "level": 4,
          "text": "ATK Per Hit 3200%/Range: 3x3 Cells"
        },
        {
          "level": 5,
          "text": "ATK Per Hit 3950%/Range: 5x5 Cells"
        },
        {
          "level": 6,
          "text": "ATK Per Hit 4700%/Range: 5x5 Cells"
        },
        {
          "level": 7,
          "text": "ATK Per Hit 5450%/Range: 5x5 Cells"
        },
        {
          "level": 8,
          "text": "ATK Per Hit 6200%/Range: 5x5 Cells"
        },
        {
          "level": 9,
          "text": "ATK Per Hit 6950%/Range: 7x7 Cells"
        },
        {
          "level": 10,
          "text": "ATK Per Hit 7700%/Range: 7x7 Cells"
        }
      ],
      "fixedCastTime": "0 seconds",
      "variableCastTime": "0 seconds",
      "castDelay": "0.25 seconds",
      "cooldown": "0.7 seconds",
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
            },
            {
              "level": 6,
              "value": "56"
            },
            {
              "level": 7,
              "value": "60"
            },
            {
              "level": 8,
              "value": "64"
            },
            {
              "level": 9,
              "value": "68"
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
      "iconUrl": "assets/divine-pride/skills/5208.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5208",
      "tree": {
        "idx": 11,
        "row": 1,
        "col": 2,
        "columns": 9,
        "requirements": [
          {
            "id": 5207,
            "level": 5,
            "name": "Two-handed Defense",
            "visible": true
          }
        ]
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
            "value": "0.25 seconds"
          },
          {
            "label": "Cooldown",
            "value": "0.7 seconds"
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
                "id": "area-of-effect",
                "label": "Area of Effect"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "area-of-effect": "3x3",
                  "sp-cost": "36"
                }
              },
              {
                "level": 2,
                "values": {
                  "area-of-effect": "3x3",
                  "sp-cost": "40"
                }
              },
              {
                "level": 3,
                "values": {
                  "area-of-effect": "3x3",
                  "sp-cost": "44"
                }
              },
              {
                "level": 4,
                "values": {
                  "area-of-effect": "3x3",
                  "sp-cost": "48"
                }
              },
              {
                "level": 5,
                "values": {
                  "area-of-effect": "5x5",
                  "sp-cost": "52"
                }
              },
              {
                "level": 6,
                "values": {
                  "area-of-effect": "5x5",
                  "sp-cost": "56"
                }
              },
              {
                "level": 7,
                "values": {
                  "area-of-effect": "5x5",
                  "sp-cost": "60"
                }
              },
              {
                "level": 8,
                "values": {
                  "area-of-effect": "5x5",
                  "sp-cost": "64"
                }
              },
              {
                "level": 9,
                "values": {
                  "area-of-effect": "7x7",
                  "sp-cost": "68"
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
      "irowikiUrl": "",
      "balanceNotes": [
        {
          "skillName": "Hack and Slasher",
          "versionId": "rebalance-1",
          "versionLabel": "Rebalance 1",
          "file": "rebalances/dragon-knight/rebalance_1.md",
          "section": "1.4",
          "notes": [
            "Reduces cooldown from 0.5 second to 0.3 seconds based on level 5.",
            "Reduces delay after skill from 1 second to 0.5 seconds based on level 5.",
            "Reworks skill, deals physical damage to the target and surrounding enemies around the target.",
            "Increases area of effect from 7x7 cells to 9x9 cells based on level 10.",
            "Deals melee physical damage when equipping two-handed sword and deals long ranged physical damage when equipping two-handed spear."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "0.5 second",
              "after": "0.3 seconds",
              "scope": "Lv 5",
              "source": "Reduces cooldown from 0.5 second to 0.3 seconds based on level 5."
            },
            {
              "label": "Cast Delay",
              "before": "1 second",
              "after": "0.5 seconds",
              "scope": "Lv 5",
              "source": "Reduces delay after skill from 1 second to 0.5 seconds based on level 5."
            },
            {
              "label": "Area of Effect",
              "before": "7 x 7 cells",
              "after": "9 x 9 cells",
              "scope": "Lv 10",
              "source": "Increases area of effect from 7x7 cells to 9x9 cells based on level 10."
            }
          ]
        },
        {
          "skillName": "Hack and Slasher",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/dragon-knight/rebalance_2.md",
          "section": "1.1",
          "notes": [
            "Changes damage logic from 2 split hits to 2 cumulative hits.",
            "Increases damage from 3000%Atk to 7300%Atk per hit based on level 10.",
            "Increases cooldown from 0.3 seconds to 0.7 seconds.",
            "Reduces delay after skill from 0.5 seconds to 0.25 seconds.",
            "Increases SP consumption from 70 to 72 based on level 10.",
            "Increases factor weight of POW in skill formula from 5 to 7."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "2 split hits (logic)/3000%Atk",
              "after": "2 cumulative hits (logic)/7300%Atk per hit",
              "scope": "Lv 10",
              "source": "Changes damage logic from 2 split hits to 2 cumulative hits. / Increases damage from 3000%Atk to 7300%Atk per hit based on level 10."
            },
            {
              "label": "Cooldown",
              "before": "0.3 seconds",
              "after": "0.7 seconds",
              "scope": "",
              "source": "Increases cooldown from 0.3 seconds to 0.7 seconds."
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
              "before": "70",
              "after": "72",
              "scope": "Lv 10",
              "source": "Increases SP consumption from 70 to 72 based on level 10."
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
          "skillName": "Hack and Slasher",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/dragon-knight/rebalance_3.md",
          "section": "1.3",
          "notes": [
            "Increases base damage from 7300%Atk to 7700%Atk per hit based on level 10.",
            "Reduces area of effect from 9 x 9 cells to 7 x 7 cells based on level 10.",
            "Applies critical damage, the critical chance is the user's Cri."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "7300%Atk",
              "after": "7700%Atk per hit",
              "scope": "Lv 10",
              "source": "Increases base damage from 7300%Atk to 7700%Atk per hit based on level 10."
            },
            {
              "label": "Area of Effect",
              "before": "9 x 9 cells",
              "after": "7 x 7 cells",
              "scope": "Lv 10",
              "source": "Reduces area of effect from 9 x 9 cells to 7 x 7 cells based on level 10."
            }
          ]
        },
        {
          "skillName": "Hack and Slasher",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/dragon-knight/rebalance_4.md",
          "section": "1.4",
          "notes": [
            "Increases base damage from 7700%Atk to 8550%Atk per hit based on level 10."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "7700%Atk",
              "after": "8550%Atk per hit",
              "scope": "Lv 10",
              "source": "Increases base damage from 7700%Atk to 8550%Atk per hit based on level 10."
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
      "id": 6001,
      "imageFile": "6001.png",
      "name": "Dragonic Breath",
      "maxLevel": 10,
      "prerequisiteText": "Dragon Breath Lv. 10, Dragon's Water Breath Lv. 10",
      "group": "Active",
      "type": "Ranged Physical",
      "target": "1 Target",
      "recoversAp": "2",
      "consumesAp": "",
      "description": "Can only use this skill while riding dragon.\nChannels the power of the dragon into yourself, and unleash a powerful dragon's breath on your target.\nDragon's Breath deals Ranged Physical damage that ignores Physical Armor to both the target and targets in its surrounding area.\nDamage is increased or decreased based on the caster's MaxHP and MaxSP.\nAdditional Damage increase by an additional amount based on the caster's base level and POW.\nWhen using this skill under Dragonic Aura buff, increases damage rate from user's MaxHP and MaxSP.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK 400%/range: 7x7 cells"
        },
        {
          "level": 2,
          "text": "ATK 750%/range: 7x7 cells"
        },
        {
          "level": 3,
          "text": "ATK 1100%/range: 7x7 cells"
        },
        {
          "level": 4,
          "text": "ATK 1450%/range: 7x7 cells"
        },
        {
          "level": 5,
          "text": "ATK 1800%/range: 7x7 cells"
        },
        {
          "level": 6,
          "text": "ATK 2150%/range: 9x9 cells"
        },
        {
          "level": 7,
          "text": "ATK 2500%/range: 9x9 cells"
        },
        {
          "level": 8,
          "text": "ATK 2850%/range: 9x9 cells"
        },
        {
          "level": 9,
          "text": "ATK 3200%/range: 9x9 cells"
        },
        {
          "level": 10,
          "text": "ATK 3550%/range: 9x9 cells"
        }
      ],
      "fixedCastTime": "0.5 seconds",
      "variableCastTime": "2 seconds",
      "castDelay": "0.15 seconds",
      "cooldown": "0.5 seconds",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "61"
            },
            {
              "level": 2,
              "value": "64"
            },
            {
              "level": 3,
              "value": "67"
            },
            {
              "level": 4,
              "value": "70"
            },
            {
              "level": 5,
              "value": "73"
            },
            {
              "level": 6,
              "value": "76"
            },
            {
              "level": 7,
              "value": "79"
            },
            {
              "level": 8,
              "value": "82"
            },
            {
              "level": 9,
              "value": "85"
            },
            {
              "level": 10,
              "value": "88"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/6001.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6001",
      "tree": {
        "idx": 13,
        "row": 1,
        "col": 4,
        "columns": 9,
        "requirements": [
          {
            "id": 2008,
            "level": 10,
            "name": "Dragon's Breath",
            "visible": false
          },
          {
            "id": 5004,
            "level": 10,
            "name": "Dragon's Water Breath",
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
            "label": "Variable Cast Time",
            "value": "2 seconds"
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
                  "sp-cost": "61"
                }
              },
              {
                "level": 2,
                "values": {
                  "area-of-effect": "7x7",
                  "sp-cost": "64"
                }
              },
              {
                "level": 3,
                "values": {
                  "area-of-effect": "7x7",
                  "sp-cost": "67"
                }
              },
              {
                "level": 4,
                "values": {
                  "area-of-effect": "7x7",
                  "sp-cost": "70"
                }
              },
              {
                "level": 5,
                "values": {
                  "area-of-effect": "7x7",
                  "sp-cost": "73"
                }
              },
              {
                "level": 6,
                "values": {
                  "area-of-effect": "9x9",
                  "sp-cost": "76"
                }
              },
              {
                "level": 7,
                "values": {
                  "area-of-effect": "9x9",
                  "sp-cost": "79"
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
                  "sp-cost": "85"
                }
              },
              {
                "level": 10,
                "values": {
                  "area-of-effect": "9x9",
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
          "skillName": "Dragonic Breath",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/dragon-knight/rebalance_4.md",
          "section": "1.5",
          "notes": [
            "Increases factor weight of MaxHP in skill formula from 12.5% to 25%.",
            "Increases factor weight of MaxSP in skill formula from 25% to 50%."
          ],
          "specRows": [
            {
              "label": "Factor Weight Of Maxhp In Skill Formula",
              "before": "12.5%",
              "after": "25%",
              "scope": "",
              "source": "Increases factor weight of MaxHP in skill formula from 12.5% to 25%."
            },
            {
              "label": "Factor Weight Of Maxsp In Skill Formula",
              "before": "25%",
              "after": "50%",
              "scope": "",
              "source": "Increases factor weight of MaxSP in skill formula from 25% to 50%."
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
      "id": 5204,
      "imageFile": "5204.png",
      "name": "Servant Weapon-Phantom",
      "maxLevel": 5,
      "prerequisiteText": "Servant Weapon Lv. 5 and Servant Weapon - Sign Lv. 5",
      "group": "Active",
      "type": "Melee Physical",
      "target": "1 Target",
      "recoversAp": "",
      "consumesAp": "",
      "description": "Servant Weapon Skill.\nInstantly strikes target, consuming all weapons to deal Melee Physical damage equal to the number of weapons consumed to all Sign targets within 7x7 cells around the target and others within 5x5 cells around them, and inflicting [Pitch Black] with a certain probability.\nAdditional damage increase based on the caster's base level and POW, and CRIT damage is applied based on the caster's CRIT.\nIf the hit crits, it inflicts half of the total of your CRIT Damage bonus options as damage.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK per hit 500%/Pitch Black trigger chance: 40%"
        },
        {
          "level": 2,
          "text": "ATK per hit 800%/Pitch Black trigger chance: 50%"
        },
        {
          "level": 3,
          "text": "ATK per hit 1100%/Pitch Black trigger chance: 60%"
        },
        {
          "level": 4,
          "text": "ATK per hit 1400%/Pitch Black trigger chance: 70%"
        },
        {
          "level": 5,
          "text": "ATK per hit 1700%/Pitch Black trigger chance: 80%"
        }
      ],
      "fixedCastTime": "0.5 seconds",
      "variableCastTime": "0 seconds",
      "castDelay": "0 seconds",
      "cooldown": "0.5 seconds",
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
      "iconUrl": "assets/divine-pride/skills/5204.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5204",
      "tree": {
        "idx": 15,
        "row": 1,
        "col": 6,
        "columns": 9,
        "requirements": [
          {
            "id": 5201,
            "level": 5,
            "name": "Servant Weapon",
            "visible": true
          },
          {
            "id": 5203,
            "level": 5,
            "name": "Servant Weapon - Sign",
            "visible": true
          }
        ]
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
            "value": "0 seconds"
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
                  "sp-cost": "40"
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
                  "sp-cost": "40"
                }
              },
              {
                "level": 5,
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
      "balanceNotes": [
        {
          "skillName": "Servant Weapon - Phantom",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/dragon-knight/rebalance_2.md",
          "section": "1.3",
          "notes": [
            "Removes 0.8 seconds variable casting time.",
            "Reduces cooldown from 2 seconds to 0.5 seconds.",
            "Removes 0.8 seconds delay after skill.",
            "Increases damage from 600%Atk to 1700%Atk per hit based on level 5."
          ],
          "specRows": [
            {
              "label": "0.8 Seconds Variable Casting Time",
              "before": "0.8 seconds variable casting time",
              "after": "Removed",
              "scope": "",
              "source": "Removes 0.8 seconds variable casting time."
            },
            {
              "label": "Cooldown",
              "before": "2 seconds",
              "after": "0.5 seconds",
              "scope": "",
              "source": "Reduces cooldown from 2 seconds to 0.5 seconds."
            },
            {
              "label": "Cast Delay",
              "before": "0.8 seconds delay",
              "after": "Removed",
              "scope": "",
              "source": "Removes 0.8 seconds delay after skill."
            },
            {
              "label": "Damage",
              "before": "600%Atk",
              "after": "1700%Atk per hit",
              "scope": "Lv 5",
              "source": "Increases damage from 600%Atk to 1700%Atk per hit based on level 5."
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
      "id": 5213,
      "imageFile": "5213.png",
      "name": "Storm Slash",
      "maxLevel": 5,
      "prerequisiteText": "Two-handed defending 10, Hack and Slasher 5",
      "group": "Active",
      "type": "Melee Physical",
      "target": "Single Target",
      "recoversAp": "2",
      "consumesAp": "",
      "description": "Exclusive skills for two-handed swords and two-handed axes.\nSlashes the target multiple times to inflict melee physical damage. Additionally, if under the Giant Growth effect, there is a 60% chance that the damage is doubled.\nDamage is additionally increased according to the user's base level and POW, and critical damage is applied according to the user's critical probability.\nIn the case of critical damage, half of the total critical damage increase options are applied.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK Per Hit 600%, 1 Times Attack"
        },
        {
          "level": 2,
          "text": "ATK Per Hit 1000%, 2 Times Attack"
        },
        {
          "level": 3,
          "text": "ATK Per Hit 1400%, 3 Times Attack"
        },
        {
          "level": 4,
          "text": "ATK Per Hit 1800%, 4 Times Attack"
        },
        {
          "level": 5,
          "text": "ATK Per Hit 2200%, 5 Times Attack"
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
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5213.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5213",
      "tree": {
        "idx": 17,
        "row": 1,
        "col": 8,
        "columns": 9,
        "requirements": [
          {
            "id": 5207,
            "level": 10,
            "name": "Two-handed Defense",
            "visible": true
          },
          {
            "id": 5208,
            "level": 5,
            "name": "Hack and Slash",
            "visible": true
          }
        ]
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
                  "sp-cost": "45"
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
                  "sp-cost": "55"
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
          "skillName": "Storm Slash",
          "versionId": "rebalance-1",
          "versionLabel": "Rebalance 1",
          "file": "rebalances/dragon-knight/rebalance_1.md",
          "section": "1.2",
          "notes": [
            "Reduces cooldown from 1 second to 0.35 seconds based on level 5.",
            "Reduces delay after skill from 1 second to 0.5 seconds based on level 5.",
            "Increases SP consumption from 50 to 60 based on level 5."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "1 second",
              "after": "0.35 seconds",
              "scope": "Lv 5",
              "source": "Reduces cooldown from 1 second to 0.35 seconds based on level 5."
            },
            {
              "label": "Cast Delay",
              "before": "1 second",
              "after": "0.5 seconds",
              "scope": "Lv 5",
              "source": "Reduces delay after skill from 1 second to 0.5 seconds based on level 5."
            },
            {
              "label": "SP Cost",
              "before": "50",
              "after": "60",
              "scope": "Lv 5",
              "source": "Increases SP consumption from 50 to 60 based on level 5."
            }
          ]
        },
        {
          "skillName": "Storm Slash",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/dragon-knight/rebalance_2.md",
          "section": "1.5",
          "notes": [
            "Reduces cooldown from 0.35 seconds to 0.3 seconds.",
            "Increases AP recovery rate from 1 to 2.",
            "Increases damage from 600%Atk to 950%Atk per hit based on level 5.",
            "Increases the chance to double skill damage while under Giant Growth buff from 15% to 30%."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "0.35 seconds",
              "after": "0.3 seconds",
              "scope": "",
              "source": "Reduces cooldown from 0.35 seconds to 0.3 seconds."
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
              "before": "600%Atk",
              "after": "950%Atk per hit",
              "scope": "Lv 5",
              "source": "Increases damage from 600%Atk to 950%Atk per hit based on level 5."
            },
            {
              "label": "The Chance To Double Skill Damage While Under Giant Growth Buff",
              "before": "15%",
              "after": "30%",
              "scope": "",
              "source": "Increases the chance to double skill damage while under Giant Growth buff from 15% to 30%."
            }
          ]
        },
        {
          "skillName": "Storm Slash",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/dragon-knight/rebalance_3.md",
          "section": "1.2",
          "notes": [
            "Increases skill cooldown from 0.3 seconds to 0.35 seconds.",
            "Reduces SP consumption from 60 to 55 based on level 5.",
            "Increases base damage from 950%Atk to 2200%Atk per hit based on level 5.",
            "Increases the chance to double skill damage while under Giant Growth buff from 30% to 60%."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "0.3 seconds",
              "after": "0.35 seconds",
              "scope": "",
              "source": "Increases skill cooldown from 0.3 seconds to 0.35 seconds."
            },
            {
              "label": "SP Cost",
              "before": "60",
              "after": "55",
              "scope": "Lv 5",
              "source": "Reduces SP consumption from 60 to 55 based on level 5."
            },
            {
              "label": "Damage",
              "before": "950%Atk",
              "after": "2200%Atk per hit",
              "scope": "Lv 5",
              "source": "Increases base damage from 950%Atk to 2200%Atk per hit based on level 5."
            },
            {
              "label": "The Chance To Double Skill Damage While Under Giant Growth Buff",
              "before": "30%",
              "after": "60%",
              "scope": "",
              "source": "Increases the chance to double skill damage while under Giant Growth buff from 30% to 60%."
            }
          ]
        },
        {
          "skillName": "Storm Slash",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/dragon-knight/rebalance_4.md",
          "section": "1.3",
          "notes": [
            "Increases base damage from 2200%Atk to 4050%Atk per hit based on level 5."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "2200%Atk",
              "after": "4050%Atk per hit",
              "scope": "Lv 5",
              "source": "Increases base damage from 2200%Atk to 4050%Atk per hit based on level 5."
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
      "id": 6502,
      "imageFile": "6502.png",
      "name": "Dragonic Pierce",
      "maxLevel": 5,
      "prerequisiteText": "Hack and Slasher level 7",
      "group": "Active",
      "type": "Long ranged physical",
      "target": "Single target",
      "recoversAp": "2",
      "consumesAp": "",
      "description": "Two-handed spear exclusive skill.\nInflicts long ranged physical damage to the target for 5 hits.\nIf the user is under Dragonic Aura buff, the skill will deal more damage.\nDeals additional damage depends on user's base level and POW, has a chance to trigger critical, critical chance is the user's Cri.\nThe effectiveness of critical modifier is applied by half.",
      "levelDetails": [
        {
          "level": 1,
          "text": "1450% Atk / 1600% Atk (Dragonic Aura) per hit."
        },
        {
          "level": 2,
          "text": "2050% Atk / 2250% Atk (Dragonic Aura) per hit."
        },
        {
          "level": 3,
          "text": "2650% Atk / 2900% Atk (Dragonic Aura) per hit."
        },
        {
          "level": 4,
          "text": "3250% Atk / 3550% Atk (Dragonic Aura) per hit."
        },
        {
          "level": 5,
          "text": "3850% Atk / 4200% Atk (Dragonic Aura) per hit."
        }
      ],
      "fixedCastTime": "0.5 seconds",
      "variableCastTime": "0.5 seconds",
      "castDelay": "0.7 seconds",
      "cooldown": "0.5 seconds",
      "levelExtras": [],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/6502.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6502",
      "tree": {
        "idx": 18,
        "row": 2,
        "col": 0,
        "columns": 9,
        "requirements": [
          {
            "id": 5208,
            "level": 7,
            "name": "Hack and Slash",
            "visible": true
          }
        ]
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
            "value": "0.7 seconds"
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
        "levelTables": []
      },
      "irowikiUrl": "",
      "balanceNotes": [
        {
          "skillName": "Dragonic Pierce",
          "versionId": "rebalance-5",
          "versionLabel": "Rebalance 5",
          "file": "rebalances/dragon-knight/added_skills.md",
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
      "id": 5211,
      "imageFile": "5211.png",
      "name": "Madness Crusher",
      "maxLevel": 5,
      "prerequisiteText": "Charging Pierce 5, Hack and Slasher 10",
      "group": "Active",
      "type": "Ranged Physical",
      "target": "Single Target",
      "recoversAp": "3",
      "consumesAp": "",
      "description": "Two-handed swords and Two-handed spears only skills.\nStrikes the target and inflicts long-distance physical damage to the target and those within the surrounding range.\nDamage increases additionally depending on the user's base level and POW, and the weapon's level and weight.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK 1950%/Range: 3x3 Cells"
        },
        {
          "level": 2,
          "text": "ATK 3550%/Range: 5x5 Cells"
        },
        {
          "level": 3,
          "text": "ATK 5150%/Range: 5x5 Cells"
        },
        {
          "level": 4,
          "text": "ATK 6750%/Range: 7x7 Cells"
        },
        {
          "level": 5,
          "text": "ATK 8350%/Range: 7x7 Cells"
        }
      ],
      "fixedCastTime": "0.5 seconds",
      "variableCastTime": "0 seconds",
      "castDelay": "0.5 seconds",
      "cooldown": "0.35 seconds",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "27"
            },
            {
              "level": 2,
              "value": "34"
            },
            {
              "level": 3,
              "value": "41"
            },
            {
              "level": 4,
              "value": "48"
            },
            {
              "level": 5,
              "value": "55"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5211.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5211",
      "tree": {
        "idx": 19,
        "row": 2,
        "col": 1,
        "columns": 9,
        "requirements": [
          {
            "id": 5206,
            "level": 5,
            "name": "Charging Pierce",
            "visible": true
          },
          {
            "id": 5208,
            "level": 10,
            "name": "Hack and Slash",
            "visible": true
          }
        ]
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
                  "area-of-effect": "3x3",
                  "sp-cost": "27"
                }
              },
              {
                "level": 2,
                "values": {
                  "area-of-effect": "5x5",
                  "sp-cost": "34"
                }
              },
              {
                "level": 3,
                "values": {
                  "area-of-effect": "5x5",
                  "sp-cost": "41"
                }
              },
              {
                "level": 4,
                "values": {
                  "area-of-effect": "7x7",
                  "sp-cost": "48"
                }
              },
              {
                "level": 5,
                "values": {
                  "area-of-effect": "7x7",
                  "sp-cost": "55"
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
          "skillName": "Madness Crusher",
          "versionId": "rebalance-1",
          "versionLabel": "Rebalance 1",
          "file": "rebalances/dragon-knight/rebalance_1.md",
          "section": "1.3",
          "notes": [
            "Reduces cooldown from 2 seconds to 0.35 seconds based on level 5.",
            "Increases damage from 2250%Atk to 3000%Atk based on level 5.",
            "Deals additional damage depends on level of weapon used."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "2 seconds",
              "after": "0.35 seconds",
              "scope": "Lv 5",
              "source": "Reduces cooldown from 2 seconds to 0.35 seconds based on level 5."
            },
            {
              "label": "Damage",
              "before": "2250%Atk",
              "after": "3000%Atk",
              "scope": "Lv 5",
              "source": "Increases damage from 2250%Atk to 3000%Atk based on level 5."
            }
          ]
        },
        {
          "skillName": "Madness Crusher",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/dragon-knight/rebalance_2.md",
          "section": "1.6",
          "notes": [
            "Removes 0.4 seconds variable casting time.",
            "Increases fixed casting time from 0.4 seconds to 0.5 seconds.",
            "Increases damage from 1350%Atk to 5150%Atk based on level 5 (using level 5 weapon and weapon weight is 150).",
            "Increases SP consumption from 50 to 68 based on level 5.",
            "Increases AP recovery rate from 2 to 3.",
            "Increases factor weight of POW in skill formula from 5 to 7."
          ],
          "specRows": [
            {
              "label": "0.4 Seconds Variable Casting Time",
              "before": "0.4 seconds variable casting time",
              "after": "Removed",
              "scope": "",
              "source": "Removes 0.4 seconds variable casting time."
            },
            {
              "label": "Fixed Casting Time",
              "before": "0.4 seconds",
              "after": "0.5 seconds",
              "scope": "",
              "source": "Increases fixed casting time from 0.4 seconds to 0.5 seconds."
            },
            {
              "label": "Damage",
              "before": "1350%Atk",
              "after": "5150%Atk",
              "scope": "Lv 5 (using level 5 weapon and weapon weight is 150)",
              "source": "Increases damage from 1350%Atk to 5150%Atk based on level 5 (using level 5 weapon and weapon weight is 150)."
            },
            {
              "label": "SP Cost",
              "before": "50",
              "after": "68",
              "scope": "Lv 5",
              "source": "Increases SP consumption from 50 to 68 based on level 5."
            },
            {
              "label": "AP Generated",
              "before": "2",
              "after": "3",
              "scope": "",
              "source": "Increases AP recovery rate from 2 to 3."
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
          "skillName": "Madness Crusher",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/dragon-knight/rebalance_3.md",
          "section": "1.1",
          "notes": [
            "Reduces SP consumption from 68 to 55 based on level 5.",
            "Increases base damage from 4400%Atk to 8350%Atk based on level 5.",
            "Increases factor weight of POW in skill formula from 7 to 10."
          ],
          "specRows": [
            {
              "label": "SP Cost",
              "before": "68",
              "after": "55",
              "scope": "Lv 5",
              "source": "Reduces SP consumption from 68 to 55 based on level 5."
            },
            {
              "label": "Damage",
              "before": "4400%Atk",
              "after": "8350%Atk",
              "scope": "Lv 5",
              "source": "Increases base damage from 4400%Atk to 8350%Atk based on level 5."
            },
            {
              "label": "Factor Weight Of Pow In Skill Formula",
              "before": "7",
              "after": "10",
              "scope": "",
              "source": "Increases factor weight of POW in skill formula from 7 to 10."
            }
          ]
        },
        {
          "skillName": "Madness Crusher",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/dragon-knight/rebalance_4.md",
          "section": "1.2",
          "notes": [
            "Increases base damage from 8350%Atk to 20000%Atk based on level 5."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "8350%Atk",
              "after": "20000%Atk",
              "scope": "Lv 5",
              "source": "Increases base damage from 8350%Atk to 20000%Atk based on level 5."
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
      "id": 5205,
      "imageFile": "5205.png",
      "name": "Servant Weapon-Demolition",
      "maxLevel": 5,
      "prerequisiteText": "Servant Weapon - Phantom Lv. 5",
      "group": "Active",
      "type": "Melee Physical",
      "target": "Area of Effect",
      "recoversAp": "2",
      "consumesAp": "",
      "description": "Servant Weapon Skill.\nUse all of your Servant Weapon and attack all Sign targets within 13 x13 cells around you, inflicting Melee Physical damage by the number of servant weapons consumed for this skill. Servant Weapons will be recharged based on the number of targets hit by this skill.\nAdditional damage increase based on the caster's base level and POW, and CRIT damage is applied based on the caster's CRIT.\nIf the hit crits, it inflicts half of the total of your CRIT Damage bonus options as damage.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK per hit 500%"
        },
        {
          "level": 2,
          "text": "ATK per hit 1000%"
        },
        {
          "level": 3,
          "text": "ATK per hit 1500%"
        },
        {
          "level": 4,
          "text": "ATK per hit 2000%"
        },
        {
          "level": 5,
          "text": "ATK per hit 2500%"
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
      "iconUrl": "assets/divine-pride/skills/5205.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5205",
      "tree": {
        "idx": 22,
        "row": 2,
        "col": 4,
        "columns": 9,
        "requirements": [
          {
            "id": 5204,
            "level": 5,
            "name": "Servant Weapon - Phantom",
            "visible": true
          }
        ]
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
            "value": "Area of Effect"
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
      "irowikiUrl": "",
      "balanceNotes": [
        {
          "skillName": "Servant Weapon - Demolition",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/dragon-knight/rebalance_2.md",
          "section": "1.4",
          "notes": [
            "Reduces cooldown from 3 seconds to 0.5 seconds.",
            "Reduces AP recovery rate from 3 to 2.",
            "Increases damage from 750%Atk to 2500%Atk per hit based on level 5."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "3 seconds",
              "after": "0.5 seconds",
              "scope": "",
              "source": "Reduces cooldown from 3 seconds to 0.5 seconds."
            },
            {
              "label": "AP Generated",
              "before": "3",
              "after": "2",
              "scope": "",
              "source": "Reduces AP recovery rate from 3 to 2."
            },
            {
              "label": "Damage",
              "before": "750%Atk",
              "after": "2500%Atk per hit",
              "scope": "Lv 5",
              "source": "Increases damage from 750%Atk to 2500%Atk per hit based on level 5."
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
      "id": 5212,
      "imageFile": "5212.png",
      "name": "Vigor",
      "maxLevel": 10,
      "prerequisiteText": "Servant Weapon - Demolition Lv. 3 and Storm Slash Lv. 5",
      "group": "Active(AP)",
      "type": "Support",
      "target": "Self",
      "recoversAp": "",
      "consumesAp": "",
      "description": "Increases the damage of your normal Melee Physical attacks temporarily.\nEach attack costs certain amount of HP and deals additional damage to Human/Angel monsters.",
      "levelDetails": [
        {
          "level": 1,
          "text": "+115% Increase/ +10% Additional damage to Human/Angel enemies\nDuration : 30 seconds/HP consumed: 100"
        },
        {
          "level": 2,
          "text": "+130% Increase/ +20% Additional damage to Human/Angel enemies\nDuration : 60 seconds/HP consumed: 90"
        },
        {
          "level": 3,
          "text": "+145% Increase/ +30% Additional damage to Human/Angel enemies\nDuration : 90 seconds/HP consumed: 80"
        },
        {
          "level": 4,
          "text": "+160% Increase/ +40% Additional damage to Human/Angel enemies\nDuration : 120 seconds/HP consumed: 70"
        },
        {
          "level": 5,
          "text": "+175% Increase/ +50% Additional damage to Human/Angel enemies\nDuration : 150 seconds/HP consumed: 60"
        },
        {
          "level": 6,
          "text": "+190% Increase/ +60% Additional damage to Human/Angel enemies\nDuration : 180 seconds/HP consumed: 50"
        },
        {
          "level": 7,
          "text": "+205% Increase/ +70% Additional damage to Human/Angel enemies\nDuration : 210 seconds/HP consumed: 40"
        },
        {
          "level": 8,
          "text": "+220% Increase/ +80% Additional damage to Human/Angel enemies\nDuration : 240 seconds/HP consumed: 30"
        },
        {
          "level": 9,
          "text": "+235% Increase/ +90% Additional damage to Human/Angel enemies\nDuration : 270 seconds/HP consumed: 20"
        },
        {
          "level": 10,
          "text": "+250% Increase/ +100% Additional to Human/Angel enemies\nDuration : 300 seconds/HP consumed: 10"
        }
      ],
      "fixedCastTime": "0 seconds",
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
      "translations": {
        "pt-BR": {
          "name": " Vigor ",
          "description": "Endurece seu corpo.\nAumenta a DEFM e evita o personagem reagir ao receber ataques físicos .\nConcentrar · Olhos de Águia · Olhos de Coruja",
          "source": "bROWiki",
          "sourceUrl": "https://browiki.org/wiki/Vigor"
        }
      },
      "apiStatus": "translated",
      "iconUrl": "assets/divine-pride/skills/5212.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5212",
      "tree": {
        "idx": 24,
        "row": 2,
        "col": 6,
        "columns": 9,
        "requirements": [
          {
            "id": 5205,
            "level": 3,
            "name": "Servant Weapon - Demolition",
            "visible": true
          },
          {
            "id": 5213,
            "level": 5,
            "name": "Storm Slash",
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
                  "effect": "+115% Increase / +10% Additional damage to Human / Angel enemies\nHP consumed: 100",
                  "duration": "30 seconds",
                  "sp-cost": "100"
                }
              },
              {
                "level": 2,
                "values": {
                  "effect": "+130% Increase / +20% Additional damage to Human / Angel enemies\nHP consumed: 90",
                  "duration": "60 seconds",
                  "sp-cost": "100"
                }
              },
              {
                "level": 3,
                "values": {
                  "effect": "+145% Increase / +30% Additional damage to Human / Angel enemies\nHP consumed: 80",
                  "duration": "90 seconds",
                  "sp-cost": "100"
                }
              },
              {
                "level": 4,
                "values": {
                  "effect": "+160% Increase / +40% Additional damage to Human / Angel enemies\nHP consumed: 70",
                  "duration": "120 seconds",
                  "sp-cost": "100"
                }
              },
              {
                "level": 5,
                "values": {
                  "effect": "+175% Increase / +50% Additional damage to Human / Angel enemies\nHP consumed: 60",
                  "duration": "150 seconds",
                  "sp-cost": "100"
                }
              },
              {
                "level": 6,
                "values": {
                  "effect": "+190% Increase / +60% Additional damage to Human / Angel enemies\nHP consumed: 50",
                  "duration": "180 seconds",
                  "sp-cost": "100"
                }
              },
              {
                "level": 7,
                "values": {
                  "effect": "+205% Increase / +70% Additional damage to Human / Angel enemies\nHP consumed: 40",
                  "duration": "210 seconds",
                  "sp-cost": "100"
                }
              },
              {
                "level": 8,
                "values": {
                  "effect": "+220% Increase / +80% Additional damage to Human / Angel enemies\nHP consumed: 30",
                  "duration": "240 seconds",
                  "sp-cost": "100"
                }
              },
              {
                "level": 9,
                "values": {
                  "effect": "+235% Increase / +90% Additional damage to Human / Angel enemies\nHP consumed: 20",
                  "duration": "270 seconds",
                  "sp-cost": "100"
                }
              },
              {
                "level": 10,
                "values": {
                  "effect": "+250% Increase / +100% Additional to Human / Angel enemies\nHP consumed: 10",
                  "duration": "300 seconds",
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
          "skillName": "Vigor",
          "versionId": "rebalance-1",
          "versionLabel": "Rebalance 1",
          "file": "rebalances/dragon-knight/rebalance_1.md",
          "section": "1.5",
          "notes": [
            "Increases normal attack damage bonus."
          ],
          "specRows": []
        },
        {
          "skillName": "Vigor",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/dragon-knight/rebalance_2.md",
          "section": "1.7",
          "notes": [
            "Changes bonus flat damage from +200% regardless of skill level to scaling with skill level up to +250% based on level 10.",
            "Increases bonus damage against demihuman and angel race monsters from 50% to 100%.",
            "Reduces AP consumption from 150 to 125.",
            "Increases HP consumption on each attack from 2 to 10 based on level 10."
          ],
          "specRows": [
            {
              "label": "Bonus Flat Damage",
              "before": "+200% regardless of skill level",
              "after": "scaling with skill level up to +250%",
              "scope": "Lv 10",
              "source": "Changes bonus flat damage from +200% regardless of skill level to scaling with skill level up to +250% based on level 10."
            },
            {
              "label": "Bonus Damage Against Demihuman And Angel Race Monsters",
              "before": "50%",
              "after": "100%",
              "scope": "",
              "source": "Increases bonus damage against demihuman and angel race monsters from 50% to 100%."
            },
            {
              "label": "AP Consumed",
              "before": "150",
              "after": "125",
              "scope": "",
              "source": "Reduces AP consumption from 150 to 125."
            },
            {
              "label": "Hp Consumption On Each Attack",
              "before": "2",
              "after": "10",
              "scope": "Lv 10",
              "source": "Increases HP consumption on each attack from 2 to 10 based on level 10."
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
      "id": 5210,
      "imageFile": "5210.png",
      "name": "Dragonic Aura",
      "maxLevel": 10,
      "prerequisiteText": "Charging Pierce Lv. 10, Dragon Breath Lv. 10, and Dragon's Water Breath Lv. 10",
      "group": "Active(AP)",
      "type": "Ranged Physical",
      "target": "1 Target",
      "recoversAp": "",
      "consumesAp": "",
      "description": "Deals great amount of Ranged Physical damage to the target and increases the damage of Dragon Breath, Dragon's Water Breath, and Hundred Spears for 300 seconds.\nDamage is increased by an additional amount based on the caster's Base Level and POW.\nAlso inflicts more damage on Demi-Human and Angel monsters.\nP.ATK and POW will affect the skill damage output from Dragon Training skill.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK 3650%/ 3800% to Human/Angel enemies"
        },
        {
          "level": 2,
          "text": "ATK 7300%/ 7600% to Human/Angel enemies"
        },
        {
          "level": 3,
          "text": "ATK 10950%/ 11400% to Human/Angel enemies"
        },
        {
          "level": 4,
          "text": "ATK 14600%/ 15200% to Human/Angel enemies"
        },
        {
          "level": 5,
          "text": "ATK 18250%/ 19000% to Human/Angel enemies"
        },
        {
          "level": 6,
          "text": "ATK 21900%/ 22800% to Human/Angel enemies"
        },
        {
          "level": 7,
          "text": "ATK 25550%/ 26600% to Human/Angel enemies"
        },
        {
          "level": 8,
          "text": "ATK 29200%/ 30400% to Human/Angel enemies"
        },
        {
          "level": 9,
          "text": "ATK 32850%/ 34200% to Human/Angel enemies"
        },
        {
          "level": 10,
          "text": "ATK 36500%/ 38000% to Human/Angel enemies"
        }
      ],
      "fixedCastTime": "1 second",
      "variableCastTime": "0 seconds",
      "castDelay": "0.5 seconds",
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
      "iconUrl": "assets/divine-pride/skills/5210.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5210",
      "tree": {
        "idx": 26,
        "row": 2,
        "col": 8,
        "columns": 9,
        "requirements": [
          {
            "id": 2008,
            "level": 10,
            "name": "Dragon's Breath",
            "visible": false
          },
          {
            "id": 5004,
            "level": 10,
            "name": "Dragon's Water Breath",
            "visible": false
          },
          {
            "id": 5206,
            "level": 10,
            "name": "Charging Pierce",
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
            "value": "0.5 seconds"
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
      "irowikiUrl": "",
      "balanceNotes": [
        {
          "skillName": "Dragonic Aura",
          "versionId": "rebalance-1",
          "versionLabel": "Rebalance 1",
          "file": "rebalances/dragon-knight/rebalance_1.md",
          "section": "1.6",
          "notes": [
            "Upon learning Dragonic Aura, P.Atk and POW will increase the influence of Dragon Training skill on Dragon Breath and Dragon Breath - Water damage."
          ],
          "specRows": []
        },
        {
          "skillName": "Dragonic Aura",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/dragon-knight/rebalance_2.md",
          "section": "1.8",
          "notes": [
            "Reduces delay after skill from 1 second to 0.5 seconds.",
            "Increases damage from 9500%/14000%(demihuman and angel race)Atk to 36500%/38000%(demihuman and angel race)Atk based on level 10."
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
              "label": "Damage",
              "before": "9500%/14000%(demihuman and angel race)Atk",
              "after": "36500%/38000%(demihuman and angel race)Atk",
              "scope": "Lv 10",
              "source": "Increases damage from 9500%/14000%(demihuman and angel race)Atk to 36500%/38000%(demihuman and angel race)Atk based on level 10."
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

export default dragonKnightData;
