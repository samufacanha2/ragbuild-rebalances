export const windHawkData = {
  "generatedAt": "2026-07-09T03:39:00.818Z",
  "classId": 4257,
  "classSlug": "wind-hawk",
  "className": "Wind Hawk",
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
    "changedSkills": 6,
    "noteCount": 35,
    "addedSkills": 1,
    "versions": 5
  },
  "tree": {
    "columns": 9,
    "rows": 3,
    "skillTreeUrl": "https://www.divine-pride.net/tools/skilltree/4257",
    "jobIconUrl": "assets/divine-pride/jobs/4257.png"
  },
  "sources": {
    "rebalances": [
      "rebalances/wind-hawk/rebalance_1.md",
      "rebalances/wind-hawk/rebalance_2.md",
      "rebalances/wind-hawk/rebalance_3.md",
      "rebalances/wind-hawk/rebalance_4.md",
      "rebalances/wind-hawk/rebalance_5.md"
    ],
    "rebalanceManifest": "rebalances/manifest.json",
    "divinePrideApiDocs": "https://www.divine-pride.net/api",
    "divinePrideSkillTree": "https://www.divine-pride.net/tools/skilltree/4257",
    "browiki": "https://browiki.org"
  },
  "rebalanceVersions": [
    {
      "id": "rebalance-1",
      "label": "Rebalance 1",
      "file": "rebalances/wind-hawk/rebalance_1.md",
      "heading": "11. Windhawk",
      "className": "Wind Hawk",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=9805",
      "scope": "main",
      "appliesTo": "Main classes only",
      "maxJobLevel": 50,
      "pointLimit": 49,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "11.1",
          "name": "Gale Storm",
          "notes": [
            "Increases damage bonus from CON."
          ]
        },
        {
          "section": "11.2",
          "name": "Hawk Rush",
          "notes": [
            "Increases damage from 500%Atk to 1000%Atk based on level 5."
          ]
        },
        {
          "section": "11.3",
          "name": "Hawk Boomerang",
          "notes": [
            "Removes cooldown.",
            "Reduces AP consumption from 50 to 15."
          ]
        }
      ]
    },
    {
      "id": "rebalance-2",
      "label": "Rebalance 2",
      "file": "rebalances/wind-hawk/rebalance_2.md",
      "heading": "11. Windhawk",
      "className": "Wind Hawk",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=11126",
      "scope": "main-and-expanded",
      "appliesTo": "Main and expanded classes",
      "maxJobLevel": 50,
      "pointLimit": 49,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "11.1",
          "name": "Hawk Rush",
          "notes": [
            "Increases damage from 1000%Atk to 2500%Atk based on level 5."
          ]
        },
        {
          "section": "11.2",
          "name": "Gale Storm",
          "notes": [
            "Reduces cooldown from 2 seconds to 1.5 seconds.",
            "Reduces SP consumption from 179 to 100 based on level 10.",
            "Increases damage from 2500%Atk to 9500%Atk based on level 10."
          ]
        },
        {
          "section": "11.3",
          "name": "Crescive Bolt",
          "notes": [
            "Reduces delay after skill from 0.5 seconds to 0.3 seconds.",
            "Reduces SP consumption from 100 to 65 based on level 10.",
            "Increases damage from 3000%Atk to 3400%Atk based on level 10.",
            "When reach 3 stacks of Crescive Bolt consecutive attack buff, the duration of buff will be refreshed when reusing Crescive Bolt."
          ]
        },
        {
          "section": "11.4",
          "name": "Deep Blind Trap / Solid Trap / Swift Trap / Flame Trap",
          "notes": [
            "Reduces cooldown to 2.5 seconds.",
            "Increases SP consumption from 62 to 84 based on level 5.",
            "Increases area of effect to 7 x 7 cells based on level 5.",
            "Reduces trap duration to 5 seconds.",
            "Changes damage interval to 0.5 seconds.",
            "Reduces AP recovery rate from 4 to 3 based on level 5.",
            "No longer inflict status ailment to the target.",
            "Increases damage from 1250%Atk to 4250%Atk per hit based on level 5.",
            "Increases factor weight of CON in skill formula from 3 to 5."
          ]
        },
        {
          "section": "11.5",
          "name": "Hawk Boomerang",
          "notes": [
            "Adds 0.15 seconds cooldown.",
            "Reduces SP consumption from 120 to 80.",
            "Reduces AP consumption from 15 to 12.",
            "Increases damage from 2500%Atk to 3000%Atk based on level 5."
          ]
        }
      ]
    },
    {
      "id": "rebalance-3",
      "label": "Rebalance 3",
      "file": "rebalances/wind-hawk/rebalance_3.md",
      "heading": "6. Windhawk",
      "className": "Wind Hawk",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=12421",
      "scope": "main-and-expanded",
      "appliesTo": "Main and expanded classes",
      "maxJobLevel": 55,
      "pointLimit": 54,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "6.1",
          "name": "No Limits (Ranger)",
          "notes": [
            "No longer be removed by Dispell or Clearance."
          ]
        },
        {
          "section": "6.2",
          "name": "Calamity Gale",
          "notes": [
            "Increases duration from 60 seconds to 180 seconds.",
            "Reduces skill cooldown from 300 seconds to 180 seconds.",
            "No longer be removed when using No Limits."
          ]
        },
        {
          "section": "6.3",
          "name": "Gale Storm",
          "notes": [
            "Reduces skill cooldown from 1.5 seconds to 1.2 seconds.",
            "Increases SP consumption from 100 to 120 based on level 10.",
            "Increases base damage from 9500%Atk to 10000%Atk based on level 10.",
            "Reduces area of effect from 11 x 11 cells to 9 x 9 cells based on level 10.",
            "Increases factor weight of CON in skill formula from 5 to 10."
          ]
        },
        {
          "section": "6.4",
          "name": "Crescive Bolt",
          "notes": [
            "Increases skill cooldown from 0.15 seconds to 0.35 seconds.",
            "Increases global cooldown from 0.3 seconds to 0.7 seconds.",
            "Increases base damage from 3400%Atk to 9400%Atk based on level 10."
          ]
        }
      ]
    },
    {
      "id": "rebalance-4",
      "label": "Rebalance 4",
      "file": "rebalances/wind-hawk/rebalance_4.md",
      "heading": "6. Windhawk",
      "className": "Wind Hawk",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=13917",
      "scope": "main-and-expanded",
      "appliesTo": "Main and expanded classes",
      "maxJobLevel": 55,
      "pointLimit": 54,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "6.1",
          "name": "Gale Storm",
          "notes": [
            "Reduces skill cooldown from 1.2 seconds to 0.7 seconds.",
            "Increases base damage from 10000%Atk to 1650013500%Atk based on level 5."
          ]
        },
        {
          "section": "6.2",
          "name": "Crescive Bolt",
          "notes": [
            "Increases base damage from 9400%Atk to 1150013500%Atk based on level 10.",
            "Increases damage bonus on standing still from 10% per stack (up to 30% on 3 stacks) to 4020% per stack (up to 12060% on 3 stacks).",
            "Changes sound effect."
          ]
        },
        {
          "section": "6.3",
          "name": "Calamity Gale",
          "notes": [
            "Reduces AP consumption from 200 to 125.",
            "Reduces skill cooldown from 180 seconds to 60 seconds."
          ]
        }
      ]
    },
    {
      "id": "rebalance-5",
      "label": "Rebalance 5",
      "file": "rebalances/wind-hawk/rebalance_5.md",
      "heading": "8. Windhawk",
      "className": "Wind Hawk",
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
      "file": "rebalances/wind-hawk/added_skills.md",
      "skills": [
        "Wild Walk"
      ]
    }
  ],
  "skillTabs": [
    {
      "id": "current",
      "label": "Wind Hawk",
      "pointLimit": 59,
      "tree": {
        "columns": 9,
        "rows": 3
      },
      "skills": [
        {
          "id": 5334,
          "imageFile": "5334.png",
          "name": "Crescive Bolt",
          "maxLevel": 10,
          "prerequisiteText": "Aimed Bolt 5",
          "group": "Active",
          "type": "Ranged Physical",
          "target": "Single Target",
          "recoversAp": "1",
          "consumesAp": "",
          "description": "Fires 1 shot of long ranged physical damage to the single target.\nIncreases damage and SP consumption of the next cast of this skill each time the user uses this skill while stand still (stacks up to 3 times).\nWhen reaching the maximum stack count, increases AP recovery rate to 3.\nThe stack is reset if the user move out from standing cell or changing position with skill.\nDeals additional damage depends on user's base level and CON.\nConsumes 1 equipped arrow.\nHas a chance to trigger critical, critical chance is the user's Cri,\nIn the case of critical damage, half of the total critical damage increase options are applied.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 1300%"
            },
            {
              "level": 2,
              "text": "ATK 2200%"
            },
            {
              "level": 3,
              "text": "ATK 3100%"
            },
            {
              "level": 4,
              "text": "ATK 4000%"
            },
            {
              "level": 5,
              "text": "ATK 4900%"
            },
            {
              "level": 6,
              "text": "ATK 5800%"
            },
            {
              "level": 7,
              "text": "ATK 6700%"
            },
            {
              "level": 8,
              "text": "ATK 7600%"
            },
            {
              "level": 9,
              "text": "ATK 8500%"
            },
            {
              "level": 10,
              "text": "ATK 9400%"
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "1 second",
          "castDelay": "0.7 seconds",
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5334.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5334",
          "tree": {
            "idx": 0,
            "row": 0,
            "col": 0,
            "columns": 9,
            "requirements": [
              {
                "id": 2236,
                "level": 5,
                "name": "Aimed Bolt",
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
                "value": "0.7 seconds"
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
                      "base-damage-atk": "1300%",
                      "sp-cost": "47"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-atk": "2200%",
                      "sp-cost": "49"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-atk": "3100%",
                      "sp-cost": "51"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-atk": "4000%",
                      "sp-cost": "53"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-atk": "4900%",
                      "sp-cost": "55"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "base-damage-atk": "5800%",
                      "sp-cost": "57"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "base-damage-atk": "6700%",
                      "sp-cost": "59"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "base-damage-atk": "7600%",
                      "sp-cost": "61"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "base-damage-atk": "8500%",
                      "sp-cost": "63"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "base-damage-atk": "9400%",
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
              "skillName": "Crescive Bolt",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/wind-hawk/rebalance_2.md",
              "section": "11.3",
              "notes": [
                "Reduces delay after skill from 0.5 seconds to 0.3 seconds.",
                "Reduces SP consumption from 100 to 65 based on level 10.",
                "Increases damage from 3000%Atk to 3400%Atk based on level 10.",
                "When reach 3 stacks of Crescive Bolt consecutive attack buff, the duration of buff will be refreshed when reusing Crescive Bolt."
              ],
              "specRows": [
                {
                  "label": "Cast Delay",
                  "before": "0.5 seconds",
                  "after": "0.3 seconds",
                  "scope": "",
                  "source": "Reduces delay after skill from 0.5 seconds to 0.3 seconds."
                },
                {
                  "label": "SP Cost",
                  "before": "100",
                  "after": "65",
                  "scope": "Lv 10",
                  "source": "Reduces SP consumption from 100 to 65 based on level 10."
                },
                {
                  "label": "Damage",
                  "before": "3000%Atk",
                  "after": "3400%Atk",
                  "scope": "Lv 10",
                  "source": "Increases damage from 3000%Atk to 3400%Atk based on level 10."
                }
              ]
            },
            {
              "skillName": "Crescive Bolt",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/wind-hawk/rebalance_3.md",
              "section": "6.4",
              "notes": [
                "Increases skill cooldown from 0.15 seconds to 0.35 seconds.",
                "Increases global cooldown from 0.3 seconds to 0.7 seconds.",
                "Increases base damage from 3400%Atk to 9400%Atk based on level 10."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "0.15 seconds",
                  "after": "0.35 seconds",
                  "scope": "",
                  "source": "Increases skill cooldown from 0.15 seconds to 0.35 seconds."
                },
                {
                  "label": "Cooldown",
                  "before": "0.3 seconds",
                  "after": "0.7 seconds",
                  "scope": "",
                  "source": "Increases global cooldown from 0.3 seconds to 0.7 seconds."
                },
                {
                  "label": "Damage",
                  "before": "3400%Atk",
                  "after": "9400%Atk",
                  "scope": "Lv 10",
                  "source": "Increases base damage from 3400%Atk to 9400%Atk based on level 10."
                }
              ]
            },
            {
              "skillName": "Crescive Bolt",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/wind-hawk/rebalance_4.md",
              "section": "6.2",
              "notes": [
                "Increases base damage from 9400%Atk to 1150013500%Atk based on level 10.",
                "Increases damage bonus on standing still from 10% per stack (up to 30% on 3 stacks) to 4020% per stack (up to 12060% on 3 stacks).",
                "Changes sound effect."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "9400%Atk",
                  "after": "1150013500%Atk",
                  "scope": "Lv 10",
                  "source": "Increases base damage from 9400%Atk to 1150013500%Atk based on level 10."
                },
                {
                  "label": "Damage Bonus On Standing Still",
                  "before": "10% per stack (up",
                  "after": "30% on 3 stacks) to 4020% per stack (up to 12060% on 3 stacks)",
                  "scope": "",
                  "source": "Increases damage bonus on standing still from 10% per stack (up to 30% on 3 stacks) to 4020% per stack (up to 12060% on 3 stacks)."
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
          "id": 5325,
          "imageFile": "5325.png",
          "name": "Nature's Friend",
          "maxLevel": 5,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Improve your wild animal training skills,\nso you can command hawks more easily.",
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
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5325.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5325",
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
          "id": 5323,
          "imageFile": "5323.png",
          "name": "Advanced Traps(Advanced Trap)",
          "maxLevel": 5,
          "prerequisiteText": "basic skill",
          "group": "",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Increases the effectiveness of Wind Hawk's Traps.\nDeep Blind Trap/Swift Trap/ Solid Trap/ Increased effectiveness of Flame Traps.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Increased duration: 1 seconds / Increased damage: 20%"
            },
            {
              "level": 2,
              "text": "Increased duration: 2 seconds / Increased damage: 40%"
            },
            {
              "level": 3,
              "text": "Increased duration: 3 seconds/Increased damage: 60%/Increased AP gain: 1"
            },
            {
              "level": 4,
              "text": "Increased duration: 4 seconds/Increased damage: 80%/Increased AP gain: 1"
            },
            {
              "level": 5,
              "text": "Increased duration: 5 seconds/Increased damage: 100%/Increased AP gain: 1"
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
          "iconUrl": "assets/divine-pride/skills/5323.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5323",
          "tree": {
            "idx": 3,
            "row": 0,
            "col": 3,
            "columns": 9,
            "requirements": [
              {
                "id": 2248,
                "level": 3,
                "name": "Trap Research",
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
                "label": "Duration",
                "value": "Lv 1: 1 seconds / Lv 2: 2 seconds / Lv 3: 3 seconds / Lv 4: 4 seconds / Lv 5: 5 seconds"
              }
            ],
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
                      "effect": "Increased duration: 1 seconds / Increased damage: 20%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Increased duration: 2 seconds / Increased damage: 40%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Increased duration: 3 seconds/Increased damage: 60%/Increased AP gain: 1",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Increased duration: 4 seconds/Increased damage: 80%/Increased AP gain: 1",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Increased duration: 5 seconds/Increased damage: 100%/Increased AP gain: 1",
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
          "id": 5327,
          "imageFile": "5327.png",
          "name": "Hawk Mastery",
          "maxLevel": 1,
          "prerequisiteText": "Steel Crow Lv. 1",
          "group": "Active/Special",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Train a hawk.\nYou can train your hawk with your warg. Summoning both of them, however, decreases your Warg Strike chance by 1/3.\nRequires a Hawk Pipe.",
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
                  "value": "5"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5327.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5327",
          "tree": {
            "idx": 5,
            "row": 0,
            "col": 5,
            "columns": 9,
            "requirements": [
              {
                "id": 128,
                "level": 1,
                "name": "Steel Crow",
                "visible": false
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active/Special Skill"
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
          "id": 5330,
          "imageFile": "5330.png",
          "name": "Gale Storm",
          "maxLevel": 10,
          "prerequisiteText": "Crescive Bolt 3",
          "group": "Active",
          "type": "Ranged Physical",
          "target": "Single Target",
          "recoversAp": "when hits 3 or more targets",
          "consumesAp": "",
          "description": "Deals long ranged physical damage to the target and surrounding enemies around the target.\nRecovers AP if the skill hits 3 targets or more.\nDeals additional damage depends on user's base level and CON.\nConsumes 5 equipped arrows.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 1000%/Area of Effect : 5x5 Cells"
            },
            {
              "level": 2,
              "text": "ATK 2000%/Area of Effect : 5x5 Cells"
            },
            {
              "level": 3,
              "text": "ATK 3000%/Area of Effect : 5x5 Cells"
            },
            {
              "level": 4,
              "text": "ATK 4000%/Area of Effect : 5x5 Cells"
            },
            {
              "level": 5,
              "text": "ATK 5000%/Area of Effect : 7x7 Cells"
            },
            {
              "level": 6,
              "text": "ATK 6000%/Area of Effect : 7x7 Cells"
            },
            {
              "level": 7,
              "text": "ATK 7000%/Area of Effect : 7x7 Cells"
            },
            {
              "level": 8,
              "text": "ATK 8000%/Area of Effect : 7x7 Cells"
            },
            {
              "level": 9,
              "text": "ATK 9000%/Area of Effect : 9x9 Cells"
            },
            {
              "level": 10,
              "text": "ATK 10000%/Area of Effect : 9x9 Cells"
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
                  "value": "93"
                },
                {
                  "level": 2,
                  "value": "96"
                },
                {
                  "level": 3,
                  "value": "99"
                },
                {
                  "level": 4,
                  "value": "102"
                },
                {
                  "level": 5,
                  "value": "105"
                },
                {
                  "level": 6,
                  "value": "108"
                },
                {
                  "level": 7,
                  "value": "111"
                },
                {
                  "level": 8,
                  "value": "114"
                },
                {
                  "level": 9,
                  "value": "117"
                },
                {
                  "level": 10,
                  "value": "120"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5330.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5330",
          "tree": {
            "idx": 7,
            "row": 0,
            "col": 7,
            "columns": 9,
            "requirements": [
              {
                "id": 5334,
                "level": 3,
                "name": "Crescive Bolt",
                "visible": true
              }
            ]
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
                "value": "when hits 3 or more targets"
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
                    "id": "area-of-effect",
                    "label": "Area of Effect"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk": "1000%",
                      "sp-cost": "93"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk": "2000%",
                      "sp-cost": "96"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk": "3000%",
                      "sp-cost": "99"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk": "4000%",
                      "sp-cost": "102"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-atk": "5000%",
                      "sp-cost": "105"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-atk": "6000%",
                      "sp-cost": "108"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-atk": "7000%",
                      "sp-cost": "111"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-atk": "8000%",
                      "sp-cost": "114"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "area-of-effect": "9x9",
                      "base-damage-atk": "9000%",
                      "sp-cost": "117"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "area-of-effect": "9x9",
                      "base-damage-atk": "10000%",
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
              "skillName": "Gale Storm",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/wind-hawk/rebalance_1.md",
              "section": "11.1",
              "notes": [
                "Increases damage bonus from CON."
              ],
              "specRows": []
            },
            {
              "skillName": "Gale Storm",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/wind-hawk/rebalance_2.md",
              "section": "11.2",
              "notes": [
                "Reduces cooldown from 2 seconds to 1.5 seconds.",
                "Reduces SP consumption from 179 to 100 based on level 10.",
                "Increases damage from 2500%Atk to 9500%Atk based on level 10."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "2 seconds",
                  "after": "1.5 seconds",
                  "scope": "",
                  "source": "Reduces cooldown from 2 seconds to 1.5 seconds."
                },
                {
                  "label": "SP Cost",
                  "before": "179",
                  "after": "100",
                  "scope": "Lv 10",
                  "source": "Reduces SP consumption from 179 to 100 based on level 10."
                },
                {
                  "label": "Damage",
                  "before": "2500%Atk",
                  "after": "9500%Atk",
                  "scope": "Lv 10",
                  "source": "Increases damage from 2500%Atk to 9500%Atk based on level 10."
                }
              ]
            },
            {
              "skillName": "Gale Storm",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/wind-hawk/rebalance_3.md",
              "section": "6.3",
              "notes": [
                "Reduces skill cooldown from 1.5 seconds to 1.2 seconds.",
                "Increases SP consumption from 100 to 120 based on level 10.",
                "Increases base damage from 9500%Atk to 10000%Atk based on level 10.",
                "Reduces area of effect from 11 x 11 cells to 9 x 9 cells based on level 10.",
                "Increases factor weight of CON in skill formula from 5 to 10."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "1.5 seconds",
                  "after": "1.2 seconds",
                  "scope": "",
                  "source": "Reduces skill cooldown from 1.5 seconds to 1.2 seconds."
                },
                {
                  "label": "SP Cost",
                  "before": "100",
                  "after": "120",
                  "scope": "Lv 10",
                  "source": "Increases SP consumption from 100 to 120 based on level 10."
                },
                {
                  "label": "Damage",
                  "before": "9500%Atk",
                  "after": "10000%Atk",
                  "scope": "Lv 10",
                  "source": "Increases base damage from 9500%Atk to 10000%Atk based on level 10."
                },
                {
                  "label": "Area of Effect",
                  "before": "11 x 11 cells",
                  "after": "9 x 9 cells",
                  "scope": "Lv 10",
                  "source": "Reduces area of effect from 11 x 11 cells to 9 x 9 cells based on level 10."
                },
                {
                  "label": "Factor Weight Of Con In Skill Formula",
                  "before": "5",
                  "after": "10",
                  "scope": "",
                  "source": "Increases factor weight of CON in skill formula from 5 to 10."
                }
              ]
            },
            {
              "skillName": "Gale Storm",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/wind-hawk/rebalance_4.md",
              "section": "6.1",
              "notes": [
                "Reduces skill cooldown from 1.2 seconds to 0.7 seconds.",
                "Increases base damage from 10000%Atk to 1650013500%Atk based on level 5."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "1.2 seconds",
                  "after": "0.7 seconds",
                  "scope": "",
                  "source": "Reduces skill cooldown from 1.2 seconds to 0.7 seconds."
                },
                {
                  "label": "Damage",
                  "before": "10000%Atk",
                  "after": "1650013500%Atk",
                  "scope": "Lv 5",
                  "source": "Increases base damage from 10000%Atk to 1650013500%Atk based on level 5."
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
          "id": 5324,
          "imageFile": "5324.png",
          "name": "Wind Sign",
          "maxLevel": 5,
          "prerequisiteText": "Nature's Friend Lv. 5",
          "group": "Active",
          "type": "Debuff",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Temporarily leave a Wind Sign on the target.\nNormal Long-ranged Physical attacks on this target creates a chance of restoring your AP.\nWind Signs persist even if their targets use Hiding, Cloaking, and Cloaking Exceed.",
          "levelDetails": [],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0.15 seconds",
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
                  "value": "90"
                },
                {
                  "level": 3,
                  "value": "80"
                },
                {
                  "level": 4,
                  "value": "70"
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
          "iconUrl": "assets/divine-pride/skills/5324.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5324",
          "tree": {
            "idx": 8,
            "row": 0,
            "col": 8,
            "columns": 9,
            "requirements": [
              {
                "id": 5325,
                "level": 5,
                "name": "Nature's Friend",
                "visible": true
              }
            ]
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
                "value": "0.15 seconds"
              },
              {
                "label": "Cooldown",
                "value": "30 seconds"
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
                      "sp-cost": "90"
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
                      "sp-cost": "70"
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
          "id": 5332,
          "imageFile": "5332.png",
          "name": "Solid Trap(Solid Trap)",
          "maxLevel": 5,
          "prerequisiteText": "basic skill",
          "group": "",
          "type": "Traps",
          "target": "1 cell ground target",
          "recoversAp": "1/1/2/2/3",
          "consumesAp": "",
          "description": "Places Traps in a 1 cell ground target that periodically inflict continuous Melee Physics damage to targets within a nearby radius.\nAttack range and Traps duration increase depending on skill level.\nConsumes 2 special alloy Traps when casting.\n(Special alloy Traps consumed by Remove Traps, etc. cannot be recovered.)\nDamage increases additionally based on the caster's base level and CON.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 850% per turn/Traps Time: 3.0 seconds/range: 3x3Cell"
            },
            {
              "level": 2,
              "text": "ATK 1700% per turn/Traps time: 3.5 seconds/range: 3x3Cell"
            },
            {
              "level": 3,
              "text": "ATK 2550% per turn/Traps Time: 4.0 seconds/range: 5x5Cell"
            },
            {
              "level": 4,
              "text": "ATK 3400% per turn/Traps time: 4.5 seconds/range: 5x5Cell"
            },
            {
              "level": 5,
              "text": "ATK 4250% per turn/Traps Time: 5.0 seconds/range: 7x7Cell"
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "1 second",
          "castDelay": "0.5 seconds",
          "cooldown": "2.5 seconds",
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
                  "value": "72"
                },
                {
                  "level": 3,
                  "value": "76"
                },
                {
                  "level": 4,
                  "value": "80"
                },
                {
                  "level": 5,
                  "value": "84"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5332.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5332",
          "tree": {
            "idx": 10,
            "row": 1,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 5323,
                "level": 3,
                "name": "Advanced Trap",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Traps"
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
                "value": "2.5 seconds"
              },
              {
                "label": "Target",
                "value": "1 cell ground target"
              },
              {
                "label": "AP Generated",
                "value": "1/1/2/2/3"
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
                    "id": "area-of-effect",
                    "label": "Area of Effect"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "area-of-effect": "3x3",
                      "base-damage-atk": "850%",
                      "sp-cost": "68"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "3x3",
                      "base-damage-atk": "1700%",
                      "sp-cost": "72"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk": "2550%",
                      "sp-cost": "76"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk": "3400%",
                      "sp-cost": "80"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-atk": "4250%",
                      "sp-cost": "84"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 5331,
          "imageFile": "5331.png",
          "name": "Deep Blind Trap(Deep Blind Trap)",
          "maxLevel": 5,
          "prerequisiteText": "basic skill",
          "group": "",
          "type": "Traps",
          "target": "1 cell ground target",
          "recoversAp": "1/1/2/2/3",
          "consumesAp": "",
          "description": "1 Places Traps on the ground that periodically inflict dark Melee Physics damage to targets within a nearby radius.\nAttack range and Traps duration increase depending on skill level.\nConsumes 2 special alloy Traps when casting.\n(Special alloy Traps consumed by Remove Traps, etc. cannot be recovered.)\nDamage increases additionally based on the caster's base level and CON.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 850% per turn/Traps Time: 3.0 seconds/range: 3x3Cell"
            },
            {
              "level": 2,
              "text": "ATK 1700% per turn/Traps time: 3.5 seconds/range: 3x3Cell"
            },
            {
              "level": 3,
              "text": "ATK 2550% per turn/Traps Time: 4.0 seconds/range: 5x5Cell"
            },
            {
              "level": 4,
              "text": "ATK 3400% per turn/Traps time: 4.5 seconds/range: 5x5Cell"
            },
            {
              "level": 5,
              "text": "ATK 4250% per turn/Traps Time: 5.0 seconds/range: 7x7Cell"
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "1 second",
          "castDelay": "0.5 seconds",
          "cooldown": "2.5 seconds",
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
                  "value": "72"
                },
                {
                  "level": 3,
                  "value": "76"
                },
                {
                  "level": 4,
                  "value": "80"
                },
                {
                  "level": 5,
                  "value": "84"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5331.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5331",
          "tree": {
            "idx": 11,
            "row": 1,
            "col": 2,
            "columns": 9,
            "requirements": [
              {
                "id": 5323,
                "level": 3,
                "name": "Advanced Trap",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Traps"
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
                "value": "2.5 seconds"
              },
              {
                "label": "Target",
                "value": "1 cell ground target"
              },
              {
                "label": "AP Generated",
                "value": "1/1/2/2/3"
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
                    "id": "area-of-effect",
                    "label": "Area of Effect"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "area-of-effect": "3x3",
                      "base-damage-atk": "850%",
                      "sp-cost": "68"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "3x3",
                      "base-damage-atk": "1700%",
                      "sp-cost": "72"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk": "2550%",
                      "sp-cost": "76"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk": "3400%",
                      "sp-cost": "80"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-atk": "4250%",
                      "sp-cost": "84"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 5326,
          "imageFile": "5326.png",
          "name": "Hawk Rush(Hawk Rush)",
          "maxLevel": 5,
          "prerequisiteText": "basic skill",
          "group": "",
          "type": "Ranged physical",
          "target": "Single Target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Deals ranged physical damage to a designated Single Target twice using a sword.\nCritical damage occurs based on the caster's critical probability.\nIf you have acquired this skill, Hawk Rush will be automatically activated with a 1% chance per 3 of the caster's CON when making a ranged normal attack.\nDamage increases additionally based on the caster's base level and CON.\nIn case of critical damage, half of the total critical damage increase options is applied.\nThis skill can only be activated and used when equipped with a bow.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 500%"
            },
            {
              "level": 2,
              "text": "ATK 1000%"
            },
            {
              "level": 3,
              "text": "ATK 1500%"
            },
            {
              "level": 4,
              "text": "ATK 2000%"
            },
            {
              "level": 5,
              "text": "ATK 2500%"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0 seconds",
          "cooldown": "0.15 seconds",
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
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5326.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5326",
          "tree": {
            "idx": 12,
            "row": 1,
            "col": 3,
            "columns": 9,
            "requirements": [
              {
                "id": 5327,
                "level": 1,
                "name": "Hawk Mastery",
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
                "value": "0.15 seconds"
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
                      "base-damage-atk": "500%",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-atk": "1000%",
                      "sp-cost": "44"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-atk": "1500%",
                      "sp-cost": "48"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-atk": "2000%",
                      "sp-cost": "52"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-atk": "2500%",
                      "sp-cost": "56"
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
              "skillName": "Hawk Rush",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/wind-hawk/rebalance_1.md",
              "section": "11.2",
              "notes": [
                "Increases damage from 500%Atk to 1000%Atk based on level 5."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "500%Atk",
                  "after": "1000%Atk",
                  "scope": "Lv 5",
                  "source": "Increases damage from 500%Atk to 1000%Atk based on level 5."
                }
              ]
            },
            {
              "skillName": "Hawk Rush",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/wind-hawk/rebalance_2.md",
              "section": "11.1",
              "notes": [
                "Increases damage from 1000%Atk to 2500%Atk based on level 5."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "1000%Atk",
                  "after": "2500%Atk",
                  "scope": "Lv 5",
                  "source": "Increases damage from 1000%Atk to 2500%Atk based on level 5."
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
          "id": 5335,
          "imageFile": "5335.png",
          "name": "Flame Traps(Flame Trap)",
          "maxLevel": 5,
          "prerequisiteText": "basic skill",
          "group": "",
          "type": "Traps",
          "target": "1 cell ground target",
          "recoversAp": "1/1/2/2/3",
          "consumesAp": "",
          "description": "Installs Traps in a 1 cell ground target that periodically inflict fire-attribute Melee Physics damage to targets within a nearby radius.\nAttack range and Traps duration increase depending on skill level.\nConsumes 2 special alloy Traps when casting.\n(Special alloy Traps consumed by Remove Traps, etc. cannot be recovered.)\nDamage increases additionally based on the caster's base level and CON.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 850% per turn/Traps Time: 3.0 seconds/range: 3x3Cell"
            },
            {
              "level": 2,
              "text": "ATK 1700% per turn/Traps time: 3.5 seconds/range: 3x3Cell"
            },
            {
              "level": 3,
              "text": "ATK 2550% per turn/Traps Time: 4.0 seconds/range: 5x5Cell"
            },
            {
              "level": 4,
              "text": "ATK 3400% per turn/Traps time: 4.5 seconds/range: 5x5Cell"
            },
            {
              "level": 5,
              "text": "ATK 4250% per turn/Traps Time: 5.0 seconds/range: 7x7Cell"
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "1 second",
          "castDelay": "0.5 seconds",
          "cooldown": "2.5 seconds",
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
                  "value": "72"
                },
                {
                  "level": 3,
                  "value": "76"
                },
                {
                  "level": 4,
                  "value": "80"
                },
                {
                  "level": 5,
                  "value": "84"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5335.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5335",
          "tree": {
            "idx": 17,
            "row": 1,
            "col": 8,
            "columns": 9,
            "requirements": [
              {
                "id": 5332,
                "level": 1,
                "name": "Solid Trap",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Traps"
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
                "value": "2.5 seconds"
              },
              {
                "label": "Target",
                "value": "1 cell ground target"
              },
              {
                "label": "AP Generated",
                "value": "1/1/2/2/3"
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
                    "id": "area-of-effect",
                    "label": "Area of Effect"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "area-of-effect": "3x3",
                      "base-damage-atk": "850%",
                      "sp-cost": "68"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "3x3",
                      "base-damage-atk": "1700%",
                      "sp-cost": "72"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk": "2550%",
                      "sp-cost": "76"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk": "3400%",
                      "sp-cost": "80"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-atk": "4250%",
                      "sp-cost": "84"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 5333,
          "imageFile": "5333.png",
          "name": "Swift Trap(Swift Trap)",
          "maxLevel": 5,
          "prerequisiteText": "basic skill",
          "group": "",
          "type": "Traps",
          "target": "1 cell ground target",
          "recoversAp": "1/1/2/2/3",
          "consumesAp": "",
          "description": "Installs Traps in a 1 cell ground target that periodically inflict wind-attribute Melee Physics damage to targets within a nearby radius.\nAttack range and Traps duration increase depending on skill level.\nConsumes 2 special alloy Traps when casting.\n(Special alloy Traps consumed by Remove Traps, etc. cannot be recovered.)\nDamage increases additionally based on the caster's base level and CON.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 850% per turn/Traps Time: 3.0 seconds/range: 3x3Cell"
            },
            {
              "level": 2,
              "text": "ATK 1700% per turn/Traps time: 3.5 seconds/range: 3x3Cell"
            },
            {
              "level": 3,
              "text": "ATK 2550% per turn/Traps Time: 4.0 seconds/range: 5x5Cell"
            },
            {
              "level": 4,
              "text": "ATK 3400% per turn/Traps time: 4.5 seconds/range: 5x5Cell"
            },
            {
              "level": 5,
              "text": "ATK 4250% per turn/Traps Time: 5.0 seconds/range: 7x7Cell"
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "1 second",
          "castDelay": "0.5 seconds",
          "cooldown": "2.5 seconds",
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
                  "value": "72"
                },
                {
                  "level": 3,
                  "value": "76"
                },
                {
                  "level": 4,
                  "value": "80"
                },
                {
                  "level": 5,
                  "value": "84"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5333.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5333",
          "tree": {
            "idx": 18,
            "row": 2,
            "col": 0,
            "columns": 9,
            "requirements": [
              {
                "id": 5331,
                "level": 1,
                "name": "Deep Blind Trap",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Traps"
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
                "value": "2.5 seconds"
              },
              {
                "label": "Target",
                "value": "1 cell ground target"
              },
              {
                "label": "AP Generated",
                "value": "1/1/2/2/3"
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
                    "id": "area-of-effect",
                    "label": "Area of Effect"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "area-of-effect": "3x3",
                      "base-damage-atk": "850%",
                      "sp-cost": "68"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "3x3",
                      "base-damage-atk": "1700%",
                      "sp-cost": "72"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk": "2550%",
                      "sp-cost": "76"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "5x5",
                      "base-damage-atk": "3400%",
                      "sp-cost": "80"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "7x7",
                      "base-damage-atk": "4250%",
                      "sp-cost": "84"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 6520,
          "imageFile": "6520.png",
          "name": "Wild Walk",
          "maxLevel": 5,
          "prerequisiteText": "Nature Friendly 3, Hawk Rush 3",
          "group": "Active (AP)",
          "type": "Long ranged physical",
          "target": "Single target",
          "recoversAp": "",
          "consumesAp": "5",
          "description": "Used hawk to inflicts long ranged physical damage to the target for 3 hits.\nUsing the gust of wind created by hawk, increase the user's evasion rate and movement speed for the certain duration.\nDeals additional damage depends on level of Steel Crow and Nature Friendly user learned, user's base level and CON, has a chance to trigger critical, critical chance is the user's Cri.\nThe effectiveness of critical modifier is applied by half.\nThe skill can be used while riding Warg.",
          "levelDetails": [
            {
              "level": 1,
              "text": "4600% Atk per hit / Flee + 100, movement speed + 25%, duration : 6 seconds."
            },
            {
              "level": 2,
              "text": "7400% Atk per hit / Flee + 150, movement speed + 25%, duration : 9 seconds."
            },
            {
              "level": 3,
              "text": "10200% Atk per hit / Flee + 200, movement speed + 50%, duration : 12 seconds."
            },
            {
              "level": 4,
              "text": "13000% Atk per hit / Flee + 250, movement speed + 50%, duration : 15 seconds."
            },
            {
              "level": 5,
              "text": "15800% Atk per hit / Flee + 300, movement speed + 75%, duration : 18 seconds."
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "0.5 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "20 seconds",
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6520.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6520",
          "tree": {
            "idx": 20,
            "row": 2,
            "col": 2,
            "columns": 9,
            "requirements": [
              {
                "id": 5325,
                "level": 3,
                "name": "Nature's Friend",
                "visible": true
              },
              {
                "id": 5326,
                "level": 3,
                "name": "Hawk Rush",
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
                "label": "Fixed Cast Time",
                "value": "1 second"
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
                "value": "20 seconds"
              },
              {
                "label": "Target",
                "value": "Single target"
              },
              {
                "label": "AP Consumed",
                "value": "5"
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
                      "base-damage-atk-per-hit": "4600%"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-atk-per-hit": "7400%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-atk-per-hit": "10200%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-atk-per-hit": "13000%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-atk-per-hit": "15800%"
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
              "skillName": "Wild Walk",
              "versionId": "rebalance-5",
              "versionLabel": "Rebalance 5",
              "file": "rebalances/wind-hawk/added_skills.md",
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
          "id": 5328,
          "imageFile": "5328.png",
          "name": "Calamity Gale",
          "maxLevel": 1,
          "prerequisiteText": "Gale Storm 5, Wind Sign 5",
          "group": "Active(AP)",
          "type": "Buff",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Endows the user's body with the rage of windblast.\nThe user gains No Limits level 5 buff and grants the user Calamity Gale buff for 180 seconds\nHowever, the duration of No Limits is the same as existing No Limits\n[Calamity gale effect]\nIncreases Crescive Bolt damage by 20%, Gale Storm has a chance to trigger critical(However, In the case of critical damage, half of the total critical damage increase options are applied.).\nincreases Crescive Bolt and Gale Storm damage against brute and fish race monsters by 50%.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Calamity Gale Duration: 180Sec"
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "2 seconds",
          "castDelay": "0.15 seconds",
          "cooldown": "60 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
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
          "iconUrl": "assets/divine-pride/skills/5328.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5328",
          "tree": {
            "idx": 21,
            "row": 2,
            "col": 3,
            "columns": 9,
            "requirements": [
              {
                "id": 5324,
                "level": 5,
                "name": "Wind Sign",
                "visible": true
              },
              {
                "id": 5330,
                "level": 5,
                "name": "Gale Storm",
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
                "label": "Fixed Cast Time",
                "value": "1 second"
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
                    "id": "effect",
                    "label": "Effect"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Calamity Gale Duration: 180Sec",
                      "sp-cost": "300"
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
              "skillName": "Calamity Gale",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/wind-hawk/rebalance_3.md",
              "section": "6.2",
              "notes": [
                "Increases duration from 60 seconds to 180 seconds.",
                "Reduces skill cooldown from 300 seconds to 180 seconds.",
                "No longer be removed when using No Limits."
              ],
              "specRows": [
                {
                  "label": "Duration",
                  "before": "60 seconds",
                  "after": "180 seconds",
                  "scope": "",
                  "source": "Increases duration from 60 seconds to 180 seconds."
                },
                {
                  "label": "Cooldown",
                  "before": "300 seconds",
                  "after": "180 seconds",
                  "scope": "",
                  "source": "Reduces skill cooldown from 300 seconds to 180 seconds."
                }
              ]
            },
            {
              "skillName": "Calamity Gale",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/wind-hawk/rebalance_4.md",
              "section": "6.3",
              "notes": [
                "Reduces AP consumption from 200 to 125.",
                "Reduces skill cooldown from 180 seconds to 60 seconds."
              ],
              "specRows": [
                {
                  "label": "AP Consumed",
                  "before": "200",
                  "after": "125",
                  "scope": "",
                  "source": "Reduces AP consumption from 200 to 125."
                },
                {
                  "label": "Cooldown",
                  "before": "180 seconds",
                  "after": "60 seconds",
                  "scope": "",
                  "source": "Reduces skill cooldown from 180 seconds to 60 seconds."
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
          "id": 5329,
          "imageFile": "5329.png",
          "name": "Hawk Boomerang(Hawk Boomerang)",
          "maxLevel": 5,
          "prerequisiteText": "basic skill",
          "group": "",
          "type": "Ranged physical",
          "target": "Single Target",
          "recoversAp": "",
          "consumesAp": "12",
          "description": "Deals 1 ranged physical critical damage to a designated Single Target based on the caster's critical chance using a sword.\nDamage to Brute/Fish type monsters increases by 50%.\nThe level of the acquired nature affinity skill. Damage increases based on the caster's base level and CON.\nIn case of critical damage, half of the total critical damage increase options is applied.\nThis skill can only be used when equipped with a bow.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 600%"
            },
            {
              "level": 2,
              "text": "ATK 1200%"
            },
            {
              "level": 3,
              "text": "ATK 1800%"
            },
            {
              "level": 4,
              "text": "ATK 2400%"
            },
            {
              "level": 5,
              "text": "ATK 3000%"
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "3 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "0.15 seconds",
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
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5329.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5329",
          "tree": {
            "idx": 26,
            "row": 2,
            "col": 8,
            "columns": 9,
            "requirements": [
              {
                "id": 5326,
                "level": 5,
                "name": "Hawk Rush",
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
                "value": "0.15 seconds"
              },
              {
                "label": "Target",
                "value": "Single Target"
              },
              {
                "label": "AP Consumed",
                "value": "12"
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
                      "base-damage-atk": "600%",
                      "sp-cost": "80"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-atk": "1200%",
                      "sp-cost": "80"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-atk": "1800%",
                      "sp-cost": "80"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-atk": "2400%",
                      "sp-cost": "80"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-atk": "3000%",
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
              "skillName": "Hawk Boomerang",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/wind-hawk/rebalance_1.md",
              "section": "11.3",
              "notes": [
                "Removes cooldown.",
                "Reduces AP consumption from 50 to 15."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "cooldown",
                  "after": "Removed",
                  "scope": "",
                  "source": "Removes cooldown."
                },
                {
                  "label": "AP Consumed",
                  "before": "50",
                  "after": "15",
                  "scope": "",
                  "source": "Reduces AP consumption from 50 to 15."
                }
              ]
            },
            {
              "skillName": "Hawk Boomerang",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/wind-hawk/rebalance_2.md",
              "section": "11.5",
              "notes": [
                "Adds 0.15 seconds cooldown.",
                "Reduces SP consumption from 120 to 80.",
                "Reduces AP consumption from 15 to 12.",
                "Increases damage from 2500%Atk to 3000%Atk based on level 5."
              ],
              "specRows": [
                {
                  "label": "SP Cost",
                  "before": "120",
                  "after": "80",
                  "scope": "",
                  "source": "Reduces SP consumption from 120 to 80."
                },
                {
                  "label": "AP Consumed",
                  "before": "15",
                  "after": "12",
                  "scope": "",
                  "source": "Reduces AP consumption from 15 to 12."
                },
                {
                  "label": "Damage",
                  "before": "2500%Atk",
                  "after": "3000%Atk",
                  "scope": "Lv 5",
                  "source": "Increases damage from 2500%Atk to 3000%Atk based on level 5."
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
      "label": "Ranger",
      "pointLimit": 69,
      "tree": {
        "columns": 9,
        "rows": 5
      },
      "skills": [
        {
          "id": 2236,
          "imageFile": "2236.png",
          "name": "Aimed Bolt",
          "maxLevel": 10,
          "prerequisiteText": "Ankle Snare 5",
          "group": "Active / Damage",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Shoots a focused arrow, and deals huge ranged physical damage to a target.\nConsumes 3 arrows, deals damage 5 times.\nDamage increases based on BaseLv.\nWhile in Fear Breeze effect, deals more damage.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 520%/835%(Fear Breeze)"
            },
            {
              "level": 2,
              "text": "ATK 540%/870%(Fear Breeze)"
            },
            {
              "level": 3,
              "text": "ATK 560%/905%(Fear Breeze)"
            },
            {
              "level": 4,
              "text": "ATK 580%/940%(Fear Breeze)"
            },
            {
              "level": 5,
              "text": "ATK 600%/975%(Fear Breeze)"
            },
            {
              "level": 6,
              "text": "ATK 620%/1010%(Fear Breeze)"
            },
            {
              "level": 7,
              "text": "ATK 640%/1045%(Fear Breeze)"
            },
            {
              "level": 8,
              "text": "ATK 660%/1080%(Fear Breeze)"
            },
            {
              "level": 9,
              "text": "ATK 680%/1115%(Fear Breeze)"
            },
            {
              "level": 10,
              "text": "ATK 700%/1150%(Fear Breeze)"
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "2 seconds",
          "castDelay": "2 seconds",
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
              "label": "Atk %",
              "values": [
                {
                  "level": 1,
                  "value": "520"
                },
                {
                  "level": 2,
                  "value": "540"
                },
                {
                  "level": 3,
                  "value": "560"
                },
                {
                  "level": 4,
                  "value": "580"
                },
                {
                  "level": 5,
                  "value": "600"
                },
                {
                  "level": 6,
                  "value": "620"
                },
                {
                  "level": 7,
                  "value": "640"
                },
                {
                  "level": 8,
                  "value": "660"
                },
                {
                  "level": 9,
                  "value": "680"
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
                  "value": "50"
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
                  "value": "40"
                },
                {
                  "level": 5,
                  "value": "70"
                },
                {
                  "level": 6,
                  "value": "30"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2236.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2236",
          "tree": {
            "idx": 0,
            "row": 0,
            "col": 0,
            "columns": 9,
            "requirements": [
              {
                "id": 117,
                "level": 5,
                "name": "Anklesnare",
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
                "value": "1 second"
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
                      "base-damage-atk": "520%",
                      "sp-cost": "40",
                      "range": "9 cells",
                      "atk": "520",
                      "data-1": "50"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-atk": "540%",
                      "sp-cost": "40",
                      "range": "9 cells",
                      "atk": "540",
                      "data-1": "50"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-atk": "560%",
                      "sp-cost": "40",
                      "range": "9 cells",
                      "atk": "560",
                      "data-1": "60"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-atk": "580%",
                      "sp-cost": "40",
                      "range": "9 cells",
                      "atk": "580",
                      "data-1": "40"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-atk": "600%",
                      "sp-cost": "40",
                      "range": "9 cells",
                      "atk": "600",
                      "data-1": "70"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "base-damage-atk": "620%",
                      "sp-cost": "40",
                      "range": "9 cells",
                      "atk": "620",
                      "data-1": "30"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "base-damage-atk": "640%",
                      "sp-cost": "40",
                      "range": "9 cells",
                      "atk": "640"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "base-damage-atk": "660%",
                      "sp-cost": "40",
                      "range": "9 cells",
                      "atk": "660"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "base-damage-atk": "680%",
                      "sp-cost": "40",
                      "range": "9 cells",
                      "atk": "680"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "base-damage-atk": "700%",
                      "sp-cost": "40",
                      "range": "9 cells",
                      "atk": "700"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2248,
          "imageFile": "2248.png",
          "name": "Trap Research (RESEARCH TRAP / Trap Research)",
          "maxLevel": 10,
          "prerequisiteText": "Claymore Trap 1, Remove Trap 1",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Increase trap damage and trap set range of Hunters and Rangers, also increases INT and MaxSP",
          "levelDetails": [
            {
              "level": 1,
              "text": "Additional Damage +40 / INT +1 / MaxSP +220 / Skill Range +1"
            },
            {
              "level": 2,
              "text": "Additional Damage +80 / INT +2 / MaxSP +240 / Skill Range +1"
            },
            {
              "level": 3,
              "text": "Additional Damage +120 / INT +3 / MaxSP +260 / Skill Range +2"
            },
            {
              "level": 4,
              "text": "Additional Damage +160 / INT +4 / MaxSP +280 / Skill Range +2"
            },
            {
              "level": 5,
              "text": "Additional Damage +200 / INT +5 / MaxSP +300 / Skill Range +3"
            },
            {
              "level": 6,
              "text": "Additional Damage +240 / INT +6 / MaxSP +320 / Skill Range +3"
            },
            {
              "level": 7,
              "text": "Additional Damage +280 / INT +7 / MaxSP +340 / Skill Range +4"
            },
            {
              "level": 8,
              "text": "Additional Damage +320 / INT +8 / MaxSP +360 / Skill Range +4"
            },
            {
              "level": 9,
              "text": "Additional Damage +360 / INT +9 / MaxSP +380 / Skill Range +5"
            },
            {
              "level": 10,
              "text": "Additional Damage +400 / INT +10 / MaxSP +400 / Skill Range +5"
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
                  "value": "40"
                },
                {
                  "level": 2,
                  "value": "80"
                },
                {
                  "level": 3,
                  "value": "120"
                },
                {
                  "level": 4,
                  "value": "160"
                },
                {
                  "level": 5,
                  "value": "200"
                },
                {
                  "level": 6,
                  "value": "240"
                },
                {
                  "level": 7,
                  "value": "280"
                },
                {
                  "level": 8,
                  "value": "320"
                },
                {
                  "level": 9,
                  "value": "360"
                },
                {
                  "level": 10,
                  "value": "400"
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
                  "value": "220"
                },
                {
                  "level": 2,
                  "value": "240"
                },
                {
                  "level": 3,
                  "value": "260"
                },
                {
                  "level": 4,
                  "value": "280"
                },
                {
                  "level": 5,
                  "value": "300"
                },
                {
                  "level": 6,
                  "value": "320"
                },
                {
                  "level": 7,
                  "value": "340"
                },
                {
                  "level": 8,
                  "value": "360"
                },
                {
                  "level": 9,
                  "value": "380"
                },
                {
                  "level": 10,
                  "value": "400"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2248.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2248",
          "tree": {
            "idx": 1,
            "row": 0,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 123,
                "level": 1,
                "name": "Claymore Trap",
                "visible": false
              },
              {
                "id": 124,
                "level": 1,
                "name": "Remove Trap",
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
                    "id": "additional-damage-120-int-3-maxsp-260-skill-range",
                    "label": "Additional Damage +120 / Int +3 / Maxsp +260 / Skill Range"
                  },
                  {
                    "id": "additional-damage-160-int-4-maxsp-280-skill-range",
                    "label": "Additional Damage +160 / Int +4 / Maxsp +280 / Skill Range"
                  },
                  {
                    "id": "additional-damage-200-int-5-maxsp-300-skill-range",
                    "label": "Additional Damage +200 / Int +5 / Maxsp +300 / Skill Range"
                  },
                  {
                    "id": "additional-damage-240-int-6-maxsp-320-skill-range",
                    "label": "Additional Damage +240 / Int +6 / Maxsp +320 / Skill Range"
                  },
                  {
                    "id": "additional-damage-280-int-7-maxsp-340-skill-range",
                    "label": "Additional Damage +280 / Int +7 / Maxsp +340 / Skill Range"
                  },
                  {
                    "id": "additional-damage-320-int-8-maxsp-360-skill-range",
                    "label": "Additional Damage +320 / Int +8 / Maxsp +360 / Skill Range"
                  },
                  {
                    "id": "additional-damage-360-int-9-maxsp-380-skill-range",
                    "label": "Additional Damage +360 / Int +9 / Maxsp +380 / Skill Range"
                  },
                  {
                    "id": "additional-damage-40-int-1-maxsp-220-skill-range",
                    "label": "Additional Damage +40 / Int +1 / Maxsp +220 / Skill Range"
                  },
                  {
                    "id": "additional-damage-400-int-10-maxsp-400-skill-range",
                    "label": "Additional Damage +400 / Int +10 / Maxsp +400 / Skill Range"
                  },
                  {
                    "id": "additional-damage-80-int-2-maxsp-240-skill-range",
                    "label": "Additional Damage +80 / Int +2 / Maxsp +240 / Skill Range"
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
                      "additional-damage-40-int-1-maxsp-220-skill-range": "+1",
                      "sp-cost": "0",
                      "data-1": "40",
                      "data-2": "1",
                      "data-3": "220"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "additional-damage-80-int-2-maxsp-240-skill-range": "+1",
                      "sp-cost": "0",
                      "data-1": "80",
                      "data-2": "2",
                      "data-3": "240"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "additional-damage-120-int-3-maxsp-260-skill-range": "+2",
                      "sp-cost": "0",
                      "data-1": "120",
                      "data-2": "3",
                      "data-3": "260"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "additional-damage-160-int-4-maxsp-280-skill-range": "+2",
                      "sp-cost": "0",
                      "data-1": "160",
                      "data-2": "4",
                      "data-3": "280"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "additional-damage-200-int-5-maxsp-300-skill-range": "+3",
                      "sp-cost": "0",
                      "data-1": "200",
                      "data-2": "5",
                      "data-3": "300"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "additional-damage-240-int-6-maxsp-320-skill-range": "+3",
                      "sp-cost": "0",
                      "data-1": "240",
                      "data-2": "6",
                      "data-3": "320"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "additional-damage-280-int-7-maxsp-340-skill-range": "+4",
                      "sp-cost": "0",
                      "data-1": "280",
                      "data-2": "7",
                      "data-3": "340"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "additional-damage-320-int-8-maxsp-360-skill-range": "+4",
                      "sp-cost": "0",
                      "data-1": "320",
                      "data-2": "8",
                      "data-3": "360"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "additional-damage-360-int-9-maxsp-380-skill-range": "+5",
                      "sp-cost": "0",
                      "data-1": "360",
                      "data-2": "9",
                      "data-3": "380"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "additional-damage-400-int-10-maxsp-400-skill-range": "+5",
                      "sp-cost": "0",
                      "data-1": "400",
                      "data-2": "10",
                      "data-3": "400"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2235,
          "imageFile": "2235.png",
          "name": "Main Ranger",
          "maxLevel": 10,
          "prerequisiteText": "Ranger Basic Skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Increase Atk to Animal, Plant and Fish type monsters and decrease damage from those monsters.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Atk / Resistance + 5"
            },
            {
              "level": 2,
              "text": "Atk / Resistance + 10"
            },
            {
              "level": 3,
              "text": "Atk / Resistance + 15"
            },
            {
              "level": 4,
              "text": "Atk / Resistance + 20"
            },
            {
              "level": 5,
              "text": "Atk / Resistance + 25"
            },
            {
              "level": 6,
              "text": "Atk / Resistance + 30"
            },
            {
              "level": 7,
              "text": "Atk / Resistance + 35"
            },
            {
              "level": 8,
              "text": "Atk / Resistance + 40"
            },
            {
              "level": 9,
              "text": "Atk / Resistance + 45"
            },
            {
              "level": 10,
              "text": "Atk / Resistance + 50"
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
                },
                {
                  "level": 6,
                  "value": "30"
                },
                {
                  "level": 7,
                  "value": "35"
                },
                {
                  "level": 8,
                  "value": "40"
                },
                {
                  "level": 9,
                  "value": "45"
                },
                {
                  "level": 10,
                  "value": "50"
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
                },
                {
                  "level": 6,
                  "value": "30"
                },
                {
                  "level": 7,
                  "value": "35"
                },
                {
                  "level": 8,
                  "value": "40"
                },
                {
                  "level": 9,
                  "value": "45"
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
          "iconUrl": "assets/divine-pride/skills/2235.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2235",
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
                    "id": "atk-resistance",
                    "label": "Atk / Resistance"
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
                      "atk-resistance": "+ 5",
                      "sp-cost": "0",
                      "data-1": "5",
                      "data-2": "5"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "atk-resistance": "+ 10",
                      "sp-cost": "0",
                      "data-1": "10",
                      "data-2": "10"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "atk-resistance": "+ 15",
                      "sp-cost": "0",
                      "data-1": "15",
                      "data-2": "15"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "atk-resistance": "+ 20",
                      "sp-cost": "0",
                      "data-1": "20",
                      "data-2": "20"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "atk-resistance": "+ 25",
                      "sp-cost": "0",
                      "data-1": "25",
                      "data-2": "25"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "atk-resistance": "+ 30",
                      "sp-cost": "0",
                      "data-1": "30",
                      "data-2": "30"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "atk-resistance": "+ 35",
                      "sp-cost": "0",
                      "data-1": "35",
                      "data-2": "35"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "atk-resistance": "+ 40",
                      "sp-cost": "0",
                      "data-1": "40",
                      "data-2": "40"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "atk-resistance": "+ 45",
                      "sp-cost": "0",
                      "data-1": "45",
                      "data-2": "45"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "atk-resistance": "+ 50",
                      "sp-cost": "0",
                      "data-1": "50",
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
          "id": 2238,
          "imageFile": "2238.png",
          "name": "Electric Shock",
          "maxLevel": 5,
          "prerequisiteText": "Shockwave Trap 5",
          "group": "Active / Trap",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Immobilizes a target and drains a certain amount of SP per second from the target. Electric Shocker cannot be removed with the Hunter skill Remove Trap. Requires 1 Special Alloy Trap. Maximum 3 traps are allowed to be set.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Consuming SP by a sec. 5% / Duration 20 sec."
            },
            {
              "level": 2,
              "text": "Consuming SP by a sec. 10% / Duration 22 sec."
            },
            {
              "level": 3,
              "text": "Consuming SP by a sec. 15% / Duration 24 sec."
            },
            {
              "level": 4,
              "text": "Consuming SP by a sec. 20% / Duration 26 sec."
            },
            {
              "level": 5,
              "text": "Consuming SP by a sec. 25% / Duration 28 sec."
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
          "iconUrl": "assets/divine-pride/skills/2238.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2238",
          "tree": {
            "idx": 4,
            "row": 0,
            "col": 4,
            "columns": 9,
            "requirements": [
              {
                "id": 118,
                "level": 5,
                "name": "Shockwave Trap",
                "visible": false
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Trap Skill"
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
                      "effect": "Consuming SP by a sec. 5% / Duration 20 sec",
                      "sp-cost": "35",
                      "range": "3 cells",
                      "data-1": "20000",
                      "data-2": "5"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Consuming SP by a sec. 10% / Duration 22 sec",
                      "sp-cost": "35",
                      "range": "3 cells",
                      "data-1": "22000",
                      "data-2": "10"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Consuming SP by a sec. 15% / Duration 24 sec",
                      "sp-cost": "35",
                      "range": "3 cells",
                      "data-1": "24000",
                      "data-2": "15"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Consuming SP by a sec. 20% / Duration 26 sec",
                      "sp-cost": "35",
                      "range": "3 cells",
                      "data-1": "26000",
                      "data-2": "20"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Consuming SP by a sec. 25% / Duration 28 sec",
                      "sp-cost": "35",
                      "range": "3 cells",
                      "data-1": "28000",
                      "data-2": "25"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2240,
          "imageFile": "2240.png",
          "name": "Warg Mastery",
          "maxLevel": 1,
          "prerequisiteText": "Ranger Basic Skill",
          "group": "Active / Special",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Summon a Warg with a Wolf Flute. Re-using the skill returns the Warg to the wild.",
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
                  "value": "5"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2240.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2240",
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
                "value": "Active / Special Skill"
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
          "id": 2233,
          "imageFile": "2233.png",
          "name": "Arrow Storm",
          "maxLevel": 10,
          "prerequisiteText": "Aimed Bolt 5",
          "group": "Active / Damage",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Shoots a storm of arrows at a single target for ranged physical damage to all enemies around the target.\nConsumes 5 arrows, damage increases based on BaseLv.\nInflicts more damage while in Fear Breeze.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 380%/450%(Fear Breeze)\nArea of Effect : Target and Aoe 5x5Cell"
            },
            {
              "level": 2,
              "text": "ATK 560%/700%(Fear Breeze)\nArea of Effect : Target and Aoe 5x5Cell"
            },
            {
              "level": 3,
              "text": "ATK 740%/950%(Fear Breeze)\nArea of Effect : Target and Aoe 5x5Cell"
            },
            {
              "level": 4,
              "text": "ATK 920%/1200%(Fear Breeze)\nArea of Effect : Target and Aoe 5x5Cell"
            },
            {
              "level": 5,
              "text": "ATK 1100%/1450%(Fear Breeze)\nArea of Effect : Target and Aoe 5x5Cell"
            },
            {
              "level": 6,
              "text": "ATK 1280%/1700%(Fear Breeze)\nArea of Effect : Target and Aoe 7x7Cell"
            },
            {
              "level": 7,
              "text": "ATK 1460%/1950%(Fear Breeze)\nArea of Effect : Target and Aoe 7x7Cell"
            },
            {
              "level": 8,
              "text": "ATK 1640%/2200%(Fear Breeze)\nArea of Effect : Target and Aoe 7x7Cell"
            },
            {
              "level": 9,
              "text": "ATK 1820%/2450%(Fear Breeze)\nArea of Effect : Target and Aoe 7x7Cell"
            },
            {
              "level": 10,
              "text": "ATK 2000%/2700%(Fear Breeze)\nArea of Effect : Target and Aoe 9x9Cell"
            }
          ],
          "fixedCastTime": "0.3 seconds",
          "variableCastTime": "2 seconds",
          "castDelay": "0 seconds",
          "cooldown": "3.2 seconds",
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
              "label": "Atk %",
              "values": [
                {
                  "level": 1,
                  "value": "250"
                },
                {
                  "level": 2,
                  "value": "300"
                },
                {
                  "level": 3,
                  "value": "350"
                },
                {
                  "level": 4,
                  "value": "400"
                },
                {
                  "level": 5,
                  "value": "450"
                },
                {
                  "level": 6,
                  "value": "500"
                },
                {
                  "level": 7,
                  "value": "550"
                },
                {
                  "level": 8,
                  "value": "600"
                },
                {
                  "level": 9,
                  "value": "650"
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
                  "value": "5"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2233.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2233",
          "tree": {
            "idx": 7,
            "row": 0,
            "col": 7,
            "columns": 9,
            "requirements": [
              {
                "id": 2236,
                "level": 5,
                "name": "Aimed Bolt",
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
                "value": "0.3 seconds"
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
                "value": "3.2 seconds"
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
                      "base-damage-atk": "380%",
                      "effect": "Area of Effect : Target and Aoe 5 x 5 cells",
                      "sp-cost": "24",
                      "range": "9 cells",
                      "atk": "250",
                      "data-1": "3"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-atk": "560%",
                      "effect": "Area of Effect : Target and Aoe 5 x 5 cells",
                      "sp-cost": "28",
                      "range": "9 cells",
                      "atk": "300",
                      "data-1": "3"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-atk": "740%",
                      "effect": "Area of Effect : Target and Aoe 5 x 5 cells",
                      "sp-cost": "32",
                      "range": "9 cells",
                      "atk": "350",
                      "data-1": "3"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-atk": "920%",
                      "effect": "Area of Effect : Target and Aoe 5 x 5 cells",
                      "sp-cost": "36",
                      "range": "9 cells",
                      "atk": "400",
                      "data-1": "3"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-atk": "1100%",
                      "effect": "Area of Effect : Target and Aoe 5 x 5 cells",
                      "sp-cost": "40",
                      "range": "9 cells",
                      "atk": "450",
                      "data-1": "3"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "base-damage-atk": "1280%",
                      "effect": "Area of Effect : Target and Aoe 7 x 7 cells",
                      "sp-cost": "44",
                      "range": "9 cells",
                      "atk": "500",
                      "data-1": "4"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "base-damage-atk": "1460%",
                      "effect": "Area of Effect : Target and Aoe 7 x 7 cells",
                      "sp-cost": "48",
                      "range": "9 cells",
                      "atk": "550",
                      "data-1": "4"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "base-damage-atk": "1640%",
                      "effect": "Area of Effect : Target and Aoe 7 x 7 cells",
                      "sp-cost": "52",
                      "range": "9 cells",
                      "atk": "600",
                      "data-1": "4"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "base-damage-atk": "1820%",
                      "effect": "Area of Effect : Target and Aoe 7 x 7 cells",
                      "sp-cost": "56",
                      "range": "9 cells",
                      "atk": "650",
                      "data-1": "4"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "base-damage-atk": "2000%",
                      "effect": "Area of Effect : Target and Aoe 9 x 9 cells",
                      "sp-cost": "60",
                      "range": "9 cells",
                      "atk": "700",
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
          "id": 2239,
          "imageFile": "2239.png",
          "name": "Bomb Cluster",
          "maxLevel": 5,
          "prerequisiteText": "Trap Research 3",
          "group": "Active / Trap",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Maximum 3 traps are allowed to be set at once and damage range is 3 cells wide and 5 cells deep. Can be combined with Detonator Skill. Bomb Cluster cannot be removed by [Remove Trap] from Hunter. Requires 1 Special Alloy Trap.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Damage 300% + Additional Trap Damage / Duration 15 sec."
            },
            {
              "level": 2,
              "text": "Damage 400% + Additional Trap Damage / Duration 15 sec."
            },
            {
              "level": 3,
              "text": "Damage 500% + Additional Trap Damage / Duration 15 sec."
            },
            {
              "level": 4,
              "text": "Damage 600% + Additional Trap Damage / Duration 15 sec."
            },
            {
              "level": 5,
              "text": "Damage 700% + Additional Trap Damage / Duration 15 sec."
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
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2239.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2239",
          "tree": {
            "idx": 8,
            "row": 0,
            "col": 8,
            "columns": 9,
            "requirements": [
              {
                "id": 2248,
                "level": 3,
                "name": "Trap Research",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Trap Skill"
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
                      "effect": "Damage 300% + Additional Trap Damage / Duration 15 sec",
                      "sp-cost": "20",
                      "range": "3 cells",
                      "atk": "300"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Damage 400% + Additional Trap Damage / Duration 15 sec",
                      "sp-cost": "20",
                      "range": "3 cells",
                      "atk": "400"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Damage 500% + Additional Trap Damage / Duration 15 sec",
                      "sp-cost": "20",
                      "range": "3 cells",
                      "atk": "500"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Damage 600% + Additional Trap Damage / Duration 15 sec",
                      "sp-cost": "20",
                      "range": "3 cells",
                      "atk": "600"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Damage 700% + Additional Trap Damage / Duration 15 sec",
                      "sp-cost": "20",
                      "range": "3 cells",
                      "atk": "700"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2237,
          "imageFile": "2237.png",
          "name": "Detonator",
          "maxLevel": 1,
          "prerequisiteText": "Bomb Cluster 3",
          "group": "Active / Special",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Immediately activates traps on the ground. Skills range is 7x7 cells around the targeted area. It can also activate Hunter's traps. This skill will not detonate traps of another player.\nCan activate the following traps: Cluster Bomb, Blast Mine, Claymore Trap, Sandman, Talkie Box, Fire Trap, and Ice Trap.",
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
            },
            {
              "label": "Range",
              "values": [
                {
                  "level": 1,
                  "value": "9 cells"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2237.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2237",
          "tree": {
            "idx": 9,
            "row": 1,
            "col": 0,
            "columns": 9,
            "requirements": [
              {
                "id": 2239,
                "level": 3,
                "name": "Bomb Cluster",
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
              }
            ],
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
                      "sp-cost": "15",
                      "range": "9 cells"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2247,
          "imageFile": "2247.png",
          "name": "Camouflage",
          "maxLevel": 5,
          "prerequisiteText": "Main Ranger 1",
          "group": "Active / Buff (To yourself)",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Hide yourself behind walls or any\nobstacles for 10 seconds so other monsters\ncan't notice the you (Except Boss/Demon/Insect\nmonsters). You appear translucent while\nCamouflaged. Increases Critical rate and ATK,\nbut decrease DEF while casting the skill.\nThe skill is cancelled when you attack or\nif the 10 duration ends. Can be re-cast\nto refresh the duration of the effect.\nIt can be used without any obstacles if the\nskill level gets higher.",
          "levelDetails": [
            {
              "level": 1,
              "text": "SP consumption per sec. 6 / move disabled"
            },
            {
              "level": 2,
              "text": "SP consumption per sec. 5 / move disabled"
            },
            {
              "level": 3,
              "text": "SP consumption per sec. 4 / 50% movement"
            },
            {
              "level": 4,
              "text": "SP consumption per sec. 3 / 75% movement"
            },
            {
              "level": 5,
              "text": "SP consumption per sec. 2 / 100% movement"
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
                  "value": "100"
                },
                {
                  "level": 2,
                  "value": "100"
                },
                {
                  "level": 3,
                  "value": "50"
                },
                {
                  "level": 4,
                  "value": "25"
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
          "iconUrl": "assets/divine-pride/skills/2247.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2247",
          "tree": {
            "idx": 10,
            "row": 1,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 2235,
                "level": 1,
                "name": "Main Ranger",
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
              }
            ],
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
                      "effect": "SP consumption per sec. 6 / move disabled",
                      "sp-cost": "40",
                      "data-1": "6",
                      "data-2": "100"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "SP consumption per sec. 5 / move disabled",
                      "sp-cost": "40",
                      "data-1": "5",
                      "data-2": "100"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "SP consumption per sec. 4 / 50% movement",
                      "sp-cost": "40",
                      "data-1": "4",
                      "data-2": "50"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "SP consumption per sec. 3 / 75% movement",
                      "sp-cost": "40",
                      "data-1": "3",
                      "data-2": "25"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "SP consumption per sec. 2 / 100% movement",
                      "sp-cost": "40",
                      "data-1": "2",
                      "data-2": "0"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2245,
          "imageFile": "2245.png",
          "name": "Warg Teeth",
          "maxLevel": 10,
          "prerequisiteText": "Warg Mastery 1",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Increases the damage done by Warg-skills. Increase damage as skill level gets higher.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Atk +30"
            },
            {
              "level": 2,
              "text": "Atk +60"
            },
            {
              "level": 3,
              "text": "Atk +90"
            },
            {
              "level": 4,
              "text": "Atk +120"
            },
            {
              "level": 5,
              "text": "Atk +150"
            },
            {
              "level": 6,
              "text": "Atk +180"
            },
            {
              "level": 7,
              "text": "Atk +210"
            },
            {
              "level": 8,
              "text": "Atk +240"
            },
            {
              "level": 9,
              "text": "Atk +270"
            },
            {
              "level": 10,
              "text": "Atk +300"
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
                  "value": "30"
                },
                {
                  "level": 2,
                  "value": "60"
                },
                {
                  "level": 3,
                  "value": "90"
                },
                {
                  "level": 4,
                  "value": "120"
                },
                {
                  "level": 5,
                  "value": "150"
                },
                {
                  "level": 6,
                  "value": "180"
                },
                {
                  "level": 7,
                  "value": "210"
                },
                {
                  "level": 8,
                  "value": "240"
                },
                {
                  "level": 9,
                  "value": "270"
                },
                {
                  "level": 10,
                  "value": "300"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2245.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2245",
          "tree": {
            "idx": 12,
            "row": 1,
            "col": 3,
            "columns": 9,
            "requirements": [
              {
                "id": 2240,
                "level": 1,
                "name": "Warg Mastery",
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
                    "id": "atk",
                    "label": "Atk"
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
                      "atk": "+30",
                      "sp-cost": "0",
                      "data-1": "30"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "atk": "+60",
                      "sp-cost": "0",
                      "data-1": "60"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "atk": "+90",
                      "sp-cost": "0",
                      "data-1": "90"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "atk": "+120",
                      "sp-cost": "0",
                      "data-1": "120"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "atk": "+150",
                      "sp-cost": "0",
                      "data-1": "150"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "atk": "+180",
                      "sp-cost": "0",
                      "data-1": "180"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "atk": "+210",
                      "sp-cost": "0",
                      "data-1": "210"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "atk": "+240",
                      "sp-cost": "0",
                      "data-1": "240"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "atk": "+270",
                      "sp-cost": "0",
                      "data-1": "270"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "atk": "+300",
                      "sp-cost": "0",
                      "data-1": "300"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2241,
          "imageFile": "2241.png",
          "name": "Warg Ride",
          "maxLevel": 3,
          "prerequisiteText": "Warg Mastery 1",
          "group": "Active / Special",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Allows a Ranger to mount their summoned Warg. Skill level increases movement speed. While mounted on a Warg, you can't use any bow attacks or skills that are not Warg exclusive other than trap skills.\nCan use the following traps while on a warg: Cobalt Trap, Magenta Trap, Verdure Trap, Maze Trap, Electric Shocker.",
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
                  "value": "2"
                },
                {
                  "level": 2,
                  "value": "2"
                },
                {
                  "level": 3,
                  "value": "2"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2241.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2241",
          "tree": {
            "idx": 13,
            "row": 1,
            "col": 4,
            "columns": 9,
            "requirements": [
              {
                "id": 2240,
                "level": 1,
                "name": "Warg Mastery",
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
                      "sp-cost": "2"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "2"
                    }
                  },
                  {
                    "level": 3,
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
          "id": 2234,
          "imageFile": "2234.png",
          "name": "Fear Breeze",
          "maxLevel": 5,
          "prerequisiteText": "Camouflage 1, Arrow Storm 5",
          "group": "Active toggle / Buff (To yourself)",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "During duration, Hit Count increases when Normal attack using a bow. Consumes extra bows as hit counts.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Hit Count+1/Chance 12%/60 sec ì§€ì†"
            },
            {
              "level": 2,
              "text": "Hit Count+1/Chance 12%/90 sec ì§€ì†"
            },
            {
              "level": 3,
              "text": "Hit Count+1~2/Chance 21%/120 sec ì§€ì†"
            },
            {
              "level": 4,
              "text": "Hit Count+1~3/Chance 27%/150 sec ì§€ì†"
            },
            {
              "level": 5,
              "text": "Hit Count+1~4/Chance 30%/180 sec ì§€ì†"
            }
          ],
          "fixedCastTime": "2 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0 seconds",
          "cooldown": "0 seconds",
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
                  "value": "12"
                },
                {
                  "level": 2,
                  "value": "12"
                },
                {
                  "level": 3,
                  "value": "21"
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
            },
            {
              "label": "Data 4",
              "values": [
                {
                  "level": 1,
                  "value": "0"
                },
                {
                  "level": 2,
                  "value": "12"
                },
                {
                  "level": 3,
                  "value": "9"
                },
                {
                  "level": 4,
                  "value": "6"
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
          "iconUrl": "assets/divine-pride/skills/2234.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2234",
          "tree": {
            "idx": 14,
            "row": 1,
            "col": 5,
            "columns": 9,
            "requirements": [
              {
                "id": 2233,
                "level": 5,
                "name": "Arrow Storm",
                "visible": true
              },
              {
                "id": 2247,
                "level": 1,
                "name": "Camouflage",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active toggle / Buff (To yourself) Skill"
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
                      "effect": "Hit Count+1/Chance 12%/60 sec ì§€ì†",
                      "sp-cost": "55",
                      "data-1": "60000",
                      "data-2": "2",
                      "data-3": "12",
                      "data-4": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Hit Count+1/Chance 12%/90 sec ì§€ì†",
                      "sp-cost": "60",
                      "data-1": "90000",
                      "data-2": "2",
                      "data-3": "12",
                      "data-4": "12"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Hit Count+1~2/Chance 21%/120 sec ì§€ì†",
                      "sp-cost": "65",
                      "data-1": "120000",
                      "data-2": "3",
                      "data-3": "21",
                      "data-4": "9"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Hit Count+1~3/Chance 27%/150 sec ì§€ì†",
                      "sp-cost": "70",
                      "data-1": "150000",
                      "data-2": "4",
                      "data-3": "27",
                      "data-4": "6"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Hit Count+1~4/Chance 30%/180 sec ì§€ì†",
                      "sp-cost": "75",
                      "data-1": "180000",
                      "data-2": "5",
                      "data-3": "30",
                      "data-4": "3"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2249,
          "imageFile": "2249.png",
          "name": "Magenta Trap",
          "maxLevel": 1,
          "prerequisiteText": "Trap Research 1",
          "group": "Active / Trap",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Monsters that step on this trap has its attribute changed to Fire property. Does not affect boss type monsters or players and consumes 1 Scarlett Point and 1 Special Alloy Trap.",
          "levelDetails": [],
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
                  "value": "10"
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2249.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2249",
          "tree": {
            "idx": 15,
            "row": 1,
            "col": 6,
            "columns": 9,
            "requirements": [
              {
                "id": 2248,
                "level": 1,
                "name": "Trap Research",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Trap Skill"
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
                    "id": "range",
                    "label": "Range"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "10",
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
          "id": 2253,
          "imageFile": "2253.png",
          "name": "Fire Trap",
          "maxLevel": 5,
          "prerequisiteText": "Detonator 1",
          "group": "Active / Trap",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "When this trap activates, it deals damage in a 5x5 area and causes Burning status. Level increases success rate of inflicting Burning status. Consumes 1 Special Alloy Trap.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Success Rate 60%"
            },
            {
              "level": 2,
              "text": "Success Rate 70%"
            },
            {
              "level": 3,
              "text": "Success Rate 80%"
            },
            {
              "level": 4,
              "text": "Success Rate 90%"
            },
            {
              "level": 5,
              "text": "Success Rate 100%"
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
          "iconUrl": "assets/divine-pride/skills/2253.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2253",
          "tree": {
            "idx": 16,
            "row": 1,
            "col": 7,
            "columns": 9,
            "requirements": [
              {
                "id": 2237,
                "level": 1,
                "name": "Detonator",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Trap Skill"
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
                      "effect": "Success Rate 60%",
                      "sp-cost": "10",
                      "range": "3 cells",
                      "data-1": "60"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Success Rate 70%",
                      "sp-cost": "10",
                      "range": "3 cells",
                      "data-1": "70"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Success Rate 80%",
                      "sp-cost": "10",
                      "range": "3 cells",
                      "data-1": "80"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Success Rate 90%",
                      "sp-cost": "10",
                      "range": "3 cells",
                      "data-1": "90"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Success Rate 100%",
                      "sp-cost": "10",
                      "range": "3 cells",
                      "data-1": "100"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2254,
          "imageFile": "2254.png",
          "name": "Ice Trap",
          "maxLevel": 5,
          "prerequisiteText": "Detonator 1",
          "group": "Active / Trap",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "When this trap activates, it deals damage in a 3x3 area and inflicts [Burning Freeze] status. Consumes 1 Special Alloy Trap.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Success Rate 60%"
            },
            {
              "level": 2,
              "text": "Success Rate 70%"
            },
            {
              "level": 3,
              "text": "Success Rate 80%"
            },
            {
              "level": 4,
              "text": "Success Rate 90%"
            },
            {
              "level": 5,
              "text": "Success Rate 100%"
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
          "iconUrl": "assets/divine-pride/skills/2254.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2254",
          "tree": {
            "idx": 17,
            "row": 1,
            "col": 8,
            "columns": 9,
            "requirements": [
              {
                "id": 2237,
                "level": 1,
                "name": "Detonator",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Trap Skill"
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
                      "effect": "Success Rate 60%",
                      "sp-cost": "10",
                      "range": "3 cells",
                      "data-1": "60"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Success Rate 70%",
                      "sp-cost": "10",
                      "range": "3 cells",
                      "data-1": "70"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Success Rate 80%",
                      "sp-cost": "10",
                      "range": "3 cells",
                      "data-1": "80"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Success Rate 90%",
                      "sp-cost": "10",
                      "range": "3 cells",
                      "data-1": "90"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Success Rate 100%",
                      "sp-cost": "10",
                      "range": "3 cells",
                      "data-1": "100"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2246,
          "imageFile": "2246.png",
          "name": "Keen Nose",
          "maxLevel": 5,
          "prerequisiteText": "Warg Teeth 3",
          "group": "Active / Detect",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Use the Warg's senses to reveal hidden traps and enemies. Has a chance to attack enemies with Warg Bite.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Range 3 x 3 / Damage 150% / Chance to auto-cast Warg Bite 8%"
            },
            {
              "level": 2,
              "text": "Range 4 x 4 / Damage 200% / Chance to auto-cast Warg Bite 16%"
            },
            {
              "level": 3,
              "text": "Range 5 x 5 / Damage 250% / Chance to auto-cast Warg Bite 24%"
            },
            {
              "level": 4,
              "text": "Range 6 x 6 / Damage 300% / Chance to auto-cast Warg Bite 32%"
            },
            {
              "level": 5,
              "text": "Range 7 x 7 / Damage 350% / Chance to auto-cast Warg Bite 40%"
            }
          ],
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
                  "value": "16"
                },
                {
                  "level": 3,
                  "value": "24"
                },
                {
                  "level": 4,
                  "value": "32"
                },
                {
                  "level": 5,
                  "value": "30"
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
          "iconUrl": "assets/divine-pride/skills/2246.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2246",
          "tree": {
            "idx": 18,
            "row": 2,
            "col": 0,
            "columns": 9,
            "requirements": [
              {
                "id": 2245,
                "level": 3,
                "name": "Warg Teeth",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Detect Skill"
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
                    "id": "data-2",
                    "label": "Data 2"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Range 3 x 3 / Damage 150% / Chance to auto-cast Warg Bite 8%",
                      "sp-cost": "12",
                      "atk": "150",
                      "data-1": "8",
                      "data-2": "3"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Range 4 x 4 / Damage 200% / Chance to auto-cast Warg Bite 16%",
                      "sp-cost": "12",
                      "atk": "200",
                      "data-1": "16",
                      "data-2": "4"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Range 5 x 5 / Damage 250% / Chance to auto-cast Warg Bite 24%",
                      "sp-cost": "12",
                      "atk": "250",
                      "data-1": "24",
                      "data-2": "5"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Range 6 x 6 / Damage 300% / Chance to auto-cast Warg Bite 32%",
                      "sp-cost": "12",
                      "atk": "300",
                      "data-1": "32",
                      "data-2": "6"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Range 7 x 7 / Damage 350% / Chance to auto-cast Warg Bite 40%",
                      "sp-cost": "12",
                      "atk": "350",
                      "data-1": "30",
                      "data-2": "7"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2243,
          "imageFile": "2243.png",
          "name": "Warg Strike",
          "maxLevel": 5,
          "prerequisiteText": "Warg Teeth 1",
          "group": "Active / Damage",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Make your Warg run into 1 target and give damage. Damage increases as skill level gets higher.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Damage 200%"
            },
            {
              "level": 2,
              "text": "Damage 400%"
            },
            {
              "level": 3,
              "text": "Damage 600%"
            },
            {
              "level": 4,
              "text": "Damage 800%"
            },
            {
              "level": 5,
              "text": "Damage 1000%"
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
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2243.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2243",
          "tree": {
            "idx": 19,
            "row": 2,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 2245,
                "level": 1,
                "name": "Warg Teeth",
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
              }
            ],
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
                      "effect": "Damage 200%",
                      "sp-cost": "20",
                      "range": "9 cells",
                      "atk": "200"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Damage 400%",
                      "sp-cost": "22",
                      "range": "9 cells",
                      "atk": "400"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Damage 600%",
                      "sp-cost": "24",
                      "range": "9 cells",
                      "atk": "600"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Damage 800%",
                      "sp-cost": "26",
                      "range": "9 cells",
                      "atk": "800"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Damage 1000%",
                      "sp-cost": "28",
                      "range": "9 cells",
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
          "id": 2242,
          "imageFile": "2242.png",
          "name": "Warg Dash",
          "maxLevel": 1,
          "prerequisiteText": "Warg Rider 1",
          "group": "Active / Special",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Usable only when mounted on your Warg. Makes your Warg scamper in a straight direction, and re-using the skill stops. You will automatically stop when hitting a wall or an enemy. If the Ranger has already learned Warg Strike, it gives damage to the crashed enemy.",
          "levelDetails": [],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "4"
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
          "iconUrl": "assets/divine-pride/skills/2242.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2242",
          "tree": {
            "idx": 20,
            "row": 2,
            "col": 2,
            "columns": 9,
            "requirements": [
              {
                "id": 2241,
                "level": 1,
                "name": "Warg Ride",
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
              }
            ],
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
                      "sp-cost": "4",
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
          "id": 5002,
          "imageFile": "5002.png",
          "name": "No Limits",
          "maxLevel": 5,
          "prerequisiteText": "Fear Breeze 5",
          "group": "Active / Buff (Self)",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Borrows power from God of Archery, and gains great power for 150 sec.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Ranged Physical Damage 1.5X"
            },
            {
              "level": 2,
              "text": "Ranged Physical Damage 2.0X"
            },
            {
              "level": 3,
              "text": "Ranged Physical Damage 2.5X"
            },
            {
              "level": 4,
              "text": "Ranged Physical Damage 3.0X"
            },
            {
              "level": 5,
              "text": "Ranged Physical Damage 3.5X"
            }
          ],
          "fixedCastTime": "1 second",
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
              "label": "Data 1",
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
          "iconUrl": "assets/divine-pride/skills/5002.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5002",
          "tree": {
            "idx": 21,
            "row": 2,
            "col": 3,
            "columns": 9,
            "requirements": [
              {
                "id": 2234,
                "level": 5,
                "name": "Fear Breeze",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Buff (Self) Skill"
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
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Ranged Physical Damage 1.5 x",
                      "sp-cost": "100",
                      "data-1": "150"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Ranged Physical Damage 2.0 x",
                      "sp-cost": "120",
                      "data-1": "200"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Ranged Physical Damage 2.5 x",
                      "sp-cost": "140",
                      "data-1": "250"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Ranged Physical Damage 3.0 x",
                      "sp-cost": "160",
                      "data-1": "300"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Ranged Physical Damage 3.5 x",
                      "sp-cost": "180",
                      "data-1": "350"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2250,
          "imageFile": "2250.png",
          "name": "Cobalt Trap",
          "maxLevel": 1,
          "prerequisiteText": "Trap Research 1",
          "group": "Active / Trap",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Monsters that step on this trap has its attribute changed to Water property. Does not affect boss type monsters or players and consumes 1 Indigo Point and 1 Special Alloy Trap.",
          "levelDetails": [],
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
                  "value": "10"
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2250.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2250",
          "tree": {
            "idx": 22,
            "row": 2,
            "col": 4,
            "columns": 9,
            "requirements": [
              {
                "id": 2248,
                "level": 1,
                "name": "Trap Research",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Trap Skill"
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
                    "id": "range",
                    "label": "Range"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "10",
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
          "id": 2244,
          "imageFile": "2244.png",
          "name": "Warg Bite",
          "maxLevel": 5,
          "prerequisiteText": "Warg Strike 1",
          "group": "Active / Damage",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Make your Warg leap at a target, dealing damage and temporarily causing immobile status. Damage increases if Warg Teeth level is increased. Can't be used while mounted on a Warg.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Damage 600% / 1 sec duration"
            },
            {
              "level": 2,
              "text": "Damage 800% / 2 sec duration"
            },
            {
              "level": 3,
              "text": "Damage 1000% / 3 sec duration"
            },
            {
              "level": 4,
              "text": "Damage 1200% / 4 sec duration"
            },
            {
              "level": 5,
              "text": "Damage 1500% / 5 sec duration"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "2 seconds",
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
                  "value": "600"
                },
                {
                  "level": 2,
                  "value": "800"
                },
                {
                  "level": 3,
                  "value": "1000"
                },
                {
                  "level": 4,
                  "value": "1200"
                },
                {
                  "level": 5,
                  "value": "1500"
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
            },
            {
              "label": "Data 2",
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
          "iconUrl": "assets/divine-pride/skills/2244.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2244",
          "tree": {
            "idx": 26,
            "row": 2,
            "col": 8,
            "columns": 9,
            "requirements": [
              {
                "id": 2243,
                "level": 1,
                "name": "Warg Strike",
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
                      "effect": "Damage 600% / 1 sec duration",
                      "sp-cost": "40",
                      "range": "9 cells",
                      "atk": "600",
                      "data-1": "10000",
                      "data-2": "60"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Damage 800% / 2 sec duration",
                      "sp-cost": "44",
                      "range": "9 cells",
                      "atk": "800",
                      "data-1": "10000",
                      "data-2": "70"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Damage 1000% / 3 sec duration",
                      "sp-cost": "46",
                      "range": "9 cells",
                      "atk": "1000",
                      "data-1": "10000",
                      "data-2": "80"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Damage 1200% / 4 sec duration",
                      "sp-cost": "48",
                      "range": "9 cells",
                      "atk": "1200",
                      "data-1": "10000",
                      "data-2": "90"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Damage 1500% / 5 sec duration",
                      "sp-cost": "50",
                      "range": "9 cells",
                      "atk": "1500",
                      "data-1": "10000",
                      "data-2": "100"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2251,
          "imageFile": "2251.png",
          "name": "Maze Trap",
          "maxLevel": 1,
          "prerequisiteText": "Trap Research 1",
          "group": "Active / Trap",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Monsters that step on this trap has its attribute changed to Earth property. Does not affect boss type monsters or players and consumes 1 Lime Green Point and 1 Special Alloy Trap.",
          "levelDetails": [],
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
                  "value": "10"
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2251.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2251",
          "tree": {
            "idx": 29,
            "row": 3,
            "col": 2,
            "columns": 9,
            "requirements": [
              {
                "id": 2248,
                "level": 1,
                "name": "Trap Research",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Trap Skill"
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
                    "id": "range",
                    "label": "Range"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "10",
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
          "id": 2252,
          "imageFile": "2252.png",
          "name": "Verdure Trap",
          "maxLevel": 1,
          "prerequisiteText": "Trap Research 1",
          "group": "Active / Trap",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Monsters that step on this trap has its attribute changed to Wind property. Does not affect boss type monsters or players and consumes 1 Yellow Wish Point and 1 Special Alloy Trap.",
          "levelDetails": [],
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
                  "value": "10"
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2252.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2252",
          "tree": {
            "idx": 36,
            "row": 4,
            "col": 0,
            "columns": 9,
            "requirements": [
              {
                "id": 2248,
                "level": 1,
                "name": "Trap Research",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Trap Skill"
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
                    "id": "range",
                    "label": "Range"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "10",
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
      "label": "Sniper",
      "pointLimit": 69,
      "tree": {
        "columns": 9,
        "rows": 4
      },
      "skills": [
        {
          "id": 126,
          "imageFile": "126.png",
          "name": "Beastbane",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Enhances attack (Weapon Mastery) against Brute and Insect race monsters.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Damage: +4"
            },
            {
              "level": 2,
              "text": "Damage: +8"
            },
            {
              "level": 3,
              "text": "Damage: +12"
            },
            {
              "level": 4,
              "text": "Damage: +16"
            },
            {
              "level": 5,
              "text": "Damage: +20"
            },
            {
              "level": 6,
              "text": "Damage: +24"
            },
            {
              "level": 7,
              "text": "Damage: +28"
            },
            {
              "level": 8,
              "text": "Damage: +32"
            },
            {
              "level": 9,
              "text": "Damage: +36"
            },
            {
              "level": 10,
              "text": "Damage: +40"
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
          "iconUrl": "assets/divine-pride/skills/126.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/126",
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
                    "id": "damage",
                    "label": "Damage:"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "damage": "+4",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "damage": "+8",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "damage": "+12",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "damage": "+16",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "damage": "+20",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "damage": "+24",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "damage": "+28",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "damage": "+32",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "damage": "+36",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "damage": "+40",
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
          "id": 115,
          "imageFile": "115.png",
          "name": "Skid Trap",
          "maxLevel": 5,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "1 cell on ground",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Sets a trap that causes any enemy that steps on it to slip and slide in a certain direction.\nAfter the slide, the enemy will be immobilized for 3 seconds.\nThe untapped trap is uninstalled and returned to the inventory after the operating time.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Distance: 6cell, Operating time:300sec"
            },
            {
              "level": 2,
              "text": "Distance: 7cell, Operating time:240sec"
            },
            {
              "level": 3,
              "text": "Distance: 8cell, Operating time:180sec"
            },
            {
              "level": 4,
              "text": "Distance: 9cell, Operating time:120sec"
            },
            {
              "level": 5,
              "text": "Distance:10cell, Operating time: 60sec"
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
          "iconUrl": "assets/divine-pride/skills/115.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/115",
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
                      "effect": "Distance: 6 cells, Operating time:300sec",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Distance: 7 cells, Operating time:240sec",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Distance: 8 cells, Operating time:180sec",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Distance: 9 cells, Operating time:120sec",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Distance:10 cells, Operating time: 60sec",
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
          "id": 116,
          "imageFile": "116.png",
          "name": "Land Mine",
          "maxLevel": 5,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "1 cell on ground",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Sets a trap that triggers an explosion from below when an enemy steps on it\ninflicting piercing Earth property damage to all enemies within its area of effect. Damage increases upon skill level, user's base level, DEX and INT.\nThe untapped trap is uninstalled and returned to the inventory after the operating time.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Operating time:200sec"
            },
            {
              "level": 2,
              "text": "Operating time:160sec"
            },
            {
              "level": 3,
              "text": "Operating time:120sec"
            },
            {
              "level": 4,
              "text": "Operating time: 80sec"
            },
            {
              "level": 5,
              "text": "Operating time: 40sec"
            }
          ],
          "fixedCastTime": "0.3 seconds",
          "variableCastTime": "0.5 seconds",
          "castDelay": "1 second",
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
          "iconUrl": "assets/divine-pride/skills/116.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/116",
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
                "value": "5"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0.3 seconds"
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
                      "effect": "Operating time:200sec",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Operating time:160sec",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Operating time:120sec",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Operating time: 80sec",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Operating time: 40sec",
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
          "id": 382,
          "imageFile": "382.png",
          "name": "Focused Arrow Strike",
          "maxLevel": 5,
          "prerequisiteText": "Double Strafe 5, Attention Concentrate 10",
          "group": "Active",
          "type": "Ranged physical",
          "target": "Target 1",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Inflicts ranged physical damage to all enemies within the Area of Effect of 5x5 cell.\nHalf of Critical chance is applied.\nHalf of Critical damage option is applied.\nRange of Sharp Shooting is fixed at 11cell.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 600%"
            },
            {
              "level": 2,
              "text": "ATK 900%"
            },
            {
              "level": 3,
              "text": "ATK 1200%"
            },
            {
              "level": 4,
              "text": "ATK 1500%"
            },
            {
              "level": 5,
              "text": "ATK 1800%"
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "0.5 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "0.15 seconds",
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
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/382.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/382",
          "tree": {
            "idx": 5,
            "row": 0,
            "col": 5,
            "columns": 9,
            "requirements": [
              {
                "id": 45,
                "level": 10,
                "name": "Improve Concentration",
                "visible": false
              },
              {
                "id": 46,
                "level": 5,
                "name": "Double Strafe",
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
                "value": "0.15 seconds"
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
                      "base-damage-atk": "600%",
                      "sp-cost": "16"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-atk": "900%",
                      "sp-cost": "18"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-atk": "1200%",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-atk": "1500%",
                      "sp-cost": "22"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-atk": "1800%",
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
          "id": 499,
          "imageFile": "499.png",
          "name": "Beast Charge",
          "maxLevel": 1,
          "prerequisiteText": "Double Strafe 10,",
          "group": "Aggressive",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Attack by using a modified form of\nDouble Strafe that was developed to cause extra\ndamage to Brute monsters. Caster's STR affects\nthe amount of inflicted damage.",
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/499.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/499",
          "tree": {
            "idx": 6,
            "row": 0,
            "col": 6,
            "columns": 9,
            "requirements": [
              {
                "id": 46,
                "level": 10,
                "name": "Double Strafe",
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
          "id": 127,
          "imageFile": "127.png",
          "name": "Falconry Mastery",
          "maxLevel": 1,
          "prerequisiteText": "Beastbane 1",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Enables Hunters to command a Falcon.\nAdditionally, the falcon flutes can be used to load falcons.",
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
          "iconUrl": "assets/divine-pride/skills/127.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/127",
          "tree": {
            "idx": 7,
            "row": 0,
            "col": 7,
            "columns": 9,
            "requirements": [
              {
                "id": 126,
                "level": 1,
                "name": "Beastbane",
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
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 120,
          "imageFile": "120.png",
          "name": "Flasher",
          "maxLevel": 5,
          "prerequisiteText": "Skid Trap 1",
          "group": "Active",
          "type": "1 cell on ground",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Sets 2 traps on a targeted location that loose a blinding flash when an enemy steps on it, which has a chance of leaving all enemies within the area of effect blind.\nThe chance of effect is reduced by the target's resistance to abnormal status.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Operating time:150sec"
            },
            {
              "level": 2,
              "text": "Operating time:120sec"
            },
            {
              "level": 3,
              "text": "Operating time: 90sec"
            },
            {
              "level": 4,
              "text": "Operating time: 60sec"
            },
            {
              "level": 5,
              "text": "Operating time: 30sec"
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/120.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/120",
          "tree": {
            "idx": 9,
            "row": 1,
            "col": 0,
            "columns": 9,
            "requirements": [
              {
                "id": 115,
                "level": 1,
                "name": "Skid Trap",
                "visible": true
              }
            ]
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
                      "effect": "Operating time:150sec",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Operating time:120sec",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Operating time: 90sec",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Operating time: 60sec",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Operating time: 30sec",
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
          "id": 117,
          "imageFile": "117.png",
          "name": "Anklesnare",
          "maxLevel": 5,
          "prerequisiteText": "Skid Trap 1",
          "group": "Active",
          "type": "1 cell on ground",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Sets a trap on a targeted location that will catch and immobilize any enemy that steps on it.\nThe untapped trap is uninstalled and returned to the inventory after the operating time.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Operating time:250sec"
            },
            {
              "level": 2,
              "text": "Operating time:200sec"
            },
            {
              "level": 3,
              "text": "Operating time:150sec"
            },
            {
              "level": 4,
              "text": "Operating time:100sec"
            },
            {
              "level": 5,
              "text": "Operating time: 50sec"
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/117.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/117",
          "tree": {
            "idx": 10,
            "row": 1,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 115,
                "level": 1,
                "name": "Skid Trap",
                "visible": true
              }
            ]
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
                      "effect": "Operating time:250sec",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Operating time:200sec",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Operating time:150sec",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Operating time:100sec",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Operating time: 50sec",
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/124.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/124",
          "tree": {
            "idx": 11,
            "row": 1,
            "col": 2,
            "columns": 9,
            "requirements": [
              {
                "id": 116,
                "level": 1,
                "name": "Land Mine",
                "visible": true
              }
            ]
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
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 383,
          "imageFile": "383.png",
          "name": "Wind Walker",
          "maxLevel": 10,
          "prerequisiteText": "Improve Concentration 9",
          "group": "Active",
          "type": "Supportive",
          "target": "Caster Only",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Increase the Movement Speed and\nFlee Rate of the caster and Party Members.\nHowever, Movement Speed will not be increased\nif a similar effect, such as Increase AGI, has\nalready been cast. Skills which decrease\nMovement Speed, such as Quagmire, cancel the\nMovement Speed increase from Wind Walker.",
          "levelDetails": [],
          "castDelay": "2 seconds",
          "cooldown": "1 second",
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
                  "value": "52"
                },
                {
                  "level": 3,
                  "value": "58"
                },
                {
                  "level": 4,
                  "value": "64"
                },
                {
                  "level": 5,
                  "value": "70"
                },
                {
                  "level": 6,
                  "value": "76"
                },
                {
                  "level": 7,
                  "value": "82"
                },
                {
                  "level": 8,
                  "value": "88"
                },
                {
                  "level": 9,
                  "value": "94"
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
          "iconUrl": "assets/divine-pride/skills/383.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/383",
          "tree": {
            "idx": 12,
            "row": 1,
            "col": 3,
            "columns": 9,
            "requirements": [
              {
                "id": 45,
                "level": 9,
                "name": "Improve Concentration",
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
                "value": "2 seconds"
              },
              {
                "label": "Cooldown",
                "value": "1 second"
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
                      "sp-cost": "46"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "52"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "58"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "64"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "70"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "76"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "82"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "88"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "94"
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
          "id": 1009,
          "imageFile": "1009.png",
          "name": "Phantasmic Arrow",
          "maxLevel": 1,
          "prerequisiteText": "Quest complete",
          "group": "Active",
          "type": "Ranged Physical Attack",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Fires a phantasmic arrow at the target to inflict Long-ranged Physical damage at the cost of 50 SP. You don't need to equip arrows to use this skill.\nInflicts Wind damage of 500% of ATK and knocks the target back by 3 cells upon hit.",
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
          "iconUrl": "assets/divine-pride/skills/1009.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/1009",
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
          "id": 129,
          "imageFile": "129.png",
          "name": "Blitz Beat",
          "maxLevel": 5,
          "prerequisiteText": "Falconly Mastery 1",
          "group": "Active",
          "type": "special physics",
          "target": "1 Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Commands the Falcon to dive at a single target and strike repeatedly to inflict piercing ranged damage to all enemies in a 3x3 area around the target.\nFalcon damage increases with owner's AGI and DEX.\nFor every 3 points of LUK the chance of auto-cast is increased by 1%.\nFalcon has a range equal to 3 cells added to the range of Vulture's Eye skill learned by the caster.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Number of consecutive hits: 1times, SP Consumption: 10"
            },
            {
              "level": 2,
              "text": "Number of consecutive hits: 2times, SP Consumption: 13"
            },
            {
              "level": 3,
              "text": "Number of consecutive hits: 3times, SP Consumption: 16"
            },
            {
              "level": 4,
              "text": "Number of consecutive hits: 4times, SP Consumption: 19"
            },
            {
              "level": 5,
              "text": "Number of consecutive hits: 5times, SP Consumption: 22"
            }
          ],
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
                  "value": "13"
                },
                {
                  "level": 3,
                  "value": "16"
                },
                {
                  "level": 4,
                  "value": "19"
                },
                {
                  "level": 5,
                  "value": "22"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/129.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/129",
          "tree": {
            "idx": 14,
            "row": 1,
            "col": 5,
            "columns": 9,
            "requirements": [
              {
                "id": 127,
                "level": 1,
                "name": "Falconry Mastery",
                "visible": true
              }
            ]
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
                      "effect": "Number of consecutive hits: 1times, SP Consumption: 10",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Number of consecutive hits: 2times, SP Consumption: 13",
                      "sp-cost": "13"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Number of consecutive hits: 3times, SP Consumption: 16",
                      "sp-cost": "16"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Number of consecutive hits: 4times, SP Consumption: 19",
                      "sp-cost": "19"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Number of consecutive hits: 5times, SP Consumption: 22",
                      "sp-cost": "22"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 119,
          "imageFile": "119.png",
          "name": "Sandman",
          "maxLevel": 5,
          "prerequisiteText": "Flasher 1",
          "group": "Active",
          "type": "1 cell on ground",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Sets a trap that releases sedative when an enemy steps on it, which has a chance of leaving all enemies within its area of effect sleeping.\nThe untapped trap is uninstalled and returned to the inventory after the operating time.\nThe chance of effect is reduced by the target's resistance to abnormal status.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Chance of Effect: 50%, Operating time:150sec"
            },
            {
              "level": 2,
              "text": "Chance of Effect: 60%, Operating time:120sec"
            },
            {
              "level": 3,
              "text": "Chance of Effect: 70%, Operating time: 90sec"
            },
            {
              "level": 4,
              "text": "Chance of Effect: 80%, Operating time: 60sec"
            },
            {
              "level": 5,
              "text": "Chance of Effect: 90%, Operating time: 30sec"
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/119.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/119",
          "tree": {
            "idx": 15,
            "row": 1,
            "col": 6,
            "columns": 9,
            "requirements": [
              {
                "id": 120,
                "level": 1,
                "name": "Flasher",
                "visible": true
              }
            ]
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
                      "effect": "Chance of Effect: 50%, Operating time:150sec",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Chance of Effect: 60%, Operating time:120sec",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Chance of Effect: 70%, Operating time: 90sec",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Chance of Effect: 80%, Operating time: 60sec",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Chance of Effect: 90%, Operating time: 30sec",
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
          "id": 121,
          "imageFile": "121.png",
          "name": "Freezing Trap",
          "maxLevel": 5,
          "prerequisiteText": "Flasher 1",
          "group": "Active",
          "type": "1 cell on ground",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Sets 2 traps that release an icy blast when an enemy steps on it, inflicting piercing Water property physical damage to all enemies within its area of effect.\nThe chance of effect is reduced by the target's resistance to abnormal status.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Operating time:150sec"
            },
            {
              "level": 2,
              "text": "Operating time:120sec"
            },
            {
              "level": 3,
              "text": "Operating time: 90sec"
            },
            {
              "level": 4,
              "text": "Operating time: 60sec"
            },
            {
              "level": 5,
              "text": "Operating time: 30sec"
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
          "iconUrl": "assets/divine-pride/skills/121.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/121",
          "tree": {
            "idx": 16,
            "row": 1,
            "col": 7,
            "columns": 9,
            "requirements": [
              {
                "id": 120,
                "level": 1,
                "name": "Flasher",
                "visible": true
              }
            ]
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
                      "effect": "Operating time:150sec",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Operating time:120sec",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Operating time: 90sec",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Operating time: 60sec",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Operating time: 30sec",
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
          "id": 118,
          "imageFile": "118.png",
          "name": "Shockwave Trap",
          "maxLevel": 5,
          "prerequisiteText": "Anklesnare 1",
          "group": "Active",
          "type": "1 cell on ground",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Sets a trap that releases a shockwave when an enemy steps on it, draining the SP of all enemies within the area of effect.\nThe untapped trap is uninstalled and returned to the inventory after the operating time.",
          "levelDetails": [
            {
              "level": 1,
              "text": "SP 20% Drain, Operating time:200sec"
            },
            {
              "level": 2,
              "text": "SP 35% Drain, Operating time:160sec"
            },
            {
              "level": 3,
              "text": "SP 50% Drain, Operating time:120sec"
            },
            {
              "level": 4,
              "text": "SP 65% Drain, Operating time: 80sec"
            },
            {
              "level": 5,
              "text": "SP 80% Drain, Operating time: 40sec"
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
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/118.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/118",
          "tree": {
            "idx": 17,
            "row": 1,
            "col": 8,
            "columns": 9,
            "requirements": [
              {
                "id": 117,
                "level": 1,
                "name": "Anklesnare",
                "visible": true
              }
            ]
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
                      "effect": "SP 20% Drain, Operating time:200sec",
                      "sp-cost": "45"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "SP 35% Drain, Operating time:160sec",
                      "sp-cost": "45"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "SP 50% Drain, Operating time:120sec",
                      "sp-cost": "45"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "SP 65% Drain, Operating time: 80sec",
                      "sp-cost": "45"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "SP 80% Drain, Operating time: 40sec",
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
          "id": 131,
          "imageFile": "131.png",
          "name": "Spring Trap",
          "maxLevel": 5,
          "prerequisiteText": "Remove Trap 1, Falconly Mastery",
          "group": "Active",
          "type": "1 cell on ground",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Commands the Falcon to remove a set trap from a distance by consuming SP10.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Range : 4cell"
            },
            {
              "level": 2,
              "text": "Range : 5cell"
            },
            {
              "level": 3,
              "text": "Range : 6cell"
            },
            {
              "level": 4,
              "text": "Range : 7cell"
            },
            {
              "level": 5,
              "text": "Range : 8cell"
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
          "iconUrl": "assets/divine-pride/skills/131.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/131",
          "tree": {
            "idx": 18,
            "row": 2,
            "col": 0,
            "columns": 9,
            "requirements": [
              {
                "id": 124,
                "level": 1,
                "name": "Remove Trap",
                "visible": true
              },
              {
                "id": 127,
                "level": 0,
                "name": "Falconry Mastery",
                "visible": true
              }
            ]
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
                      "effect": "Range : 4 cells",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Range : 5 cells",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Range : 6 cells",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Range : 7 cells",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Range : 8 cells",
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
          "id": 130,
          "imageFile": "130.png",
          "name": "Detecting",
          "maxLevel": 4,
          "prerequisiteText": "Improve Concentration 1, Falconly Mastery 1",
          "group": "Active",
          "type": "1 cell on ground",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Commands the Falcon to scout a targeted location to reveal all hidden enemies in a 7x7 area by consuming SP8.\nDepending on skill level, the range that can send Falcon increases.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Range : 2cell"
            },
            {
              "level": 2,
              "text": "Range : 4cell"
            },
            {
              "level": 3,
              "text": "Range : 6cell"
            },
            {
              "level": 4,
              "text": "Range : 8cell"
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
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/130.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/130",
          "tree": {
            "idx": 19,
            "row": 2,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 45,
                "level": 1,
                "name": "Improve Concentration",
                "visible": false
              },
              {
                "id": 127,
                "level": 1,
                "name": "Falconry Mastery",
                "visible": true
              }
            ]
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
                      "effect": "Range : 2 cells",
                      "sp-cost": "8"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Range : 4 cells",
                      "sp-cost": "8"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Range : 6 cells",
                      "sp-cost": "8"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Range : 8 cells",
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
          "id": 128,
          "imageFile": "128.png",
          "name": "Steel Crow",
          "maxLevel": 10,
          "prerequisiteText": "Blitz Beat 5",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Enhances damage inflicted with Blitz Beat and Falcon Assault.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Damage: +6"
            },
            {
              "level": 2,
              "text": "Damage: +12"
            },
            {
              "level": 3,
              "text": "Damage: +18"
            },
            {
              "level": 4,
              "text": "Damage: +24"
            },
            {
              "level": 5,
              "text": "Damage: +30"
            },
            {
              "level": 6,
              "text": "Damage: +36"
            },
            {
              "level": 7,
              "text": "Damage: +42"
            },
            {
              "level": 8,
              "text": "Damage: +48"
            },
            {
              "level": 9,
              "text": "Damage: +54"
            },
            {
              "level": 10,
              "text": "Damage: +60"
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
          "iconUrl": "assets/divine-pride/skills/128.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/128",
          "tree": {
            "idx": 21,
            "row": 2,
            "col": 3,
            "columns": 9,
            "requirements": [
              {
                "id": 129,
                "level": 5,
                "name": "Blitz Beat",
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
                    "id": "damage",
                    "label": "Damage:"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "damage": "+6",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "damage": "+12",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "damage": "+18",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "damage": "+24",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "damage": "+30",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "damage": "+36",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "damage": "+42",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "damage": "+48",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "damage": "+54",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "damage": "+60",
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
          "id": 122,
          "imageFile": "122.png",
          "name": "Blast Mine",
          "maxLevel": 5,
          "prerequisiteText": "Sandman 1, Land Mine 1, Freezing Trap 1",
          "group": "Active",
          "type": "1 cell on ground",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Set 2 traps that will explode after the trap duration expires or when an enemy steps on it\ninflicting piercing Wind property damage to all enemies within its area of effect.\nBlast Mine can be moved by arbitrary attack before the end of the operating time.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Operating time:25sec"
            },
            {
              "level": 2,
              "text": "Operating time:20sec"
            },
            {
              "level": 3,
              "text": "Operating time:15sec"
            },
            {
              "level": 4,
              "text": "Operating time:10sec"
            },
            {
              "level": 5,
              "text": "Operating time: 5sec"
            }
          ],
          "fixedCastTime": "0.3 seconds",
          "variableCastTime": "0.5 seconds",
          "castDelay": "1 second",
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
          "iconUrl": "assets/divine-pride/skills/122.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/122",
          "tree": {
            "idx": 22,
            "row": 2,
            "col": 4,
            "columns": 9,
            "requirements": [
              {
                "id": 116,
                "level": 1,
                "name": "Land Mine",
                "visible": true
              },
              {
                "id": 119,
                "level": 1,
                "name": "Sandman",
                "visible": true
              },
              {
                "id": 121,
                "level": 1,
                "name": "Freezing Trap",
                "visible": true
              }
            ]
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
                "value": "0.3 seconds"
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
                      "effect": "Operating time:25sec",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Operating time:20sec",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Operating time:15sec",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Operating time:10sec",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Operating time: 5sec",
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
          "id": 125,
          "imageFile": "125.png",
          "name": "Talkie Box",
          "maxLevel": 1,
          "prerequisiteText": "Remove Trap 1, Shockwave Trap 1",
          "group": "Active",
          "type": "1 cell on ground",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Sets a trap on a targeted location that displays a prerecorded text message to any player that steps on it.\nA message is printed on the head of the target who stepped on the trap, and the trap disappears.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Operating time:600sec"
            }
          ],
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
          "iconUrl": "assets/divine-pride/skills/125.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/125",
          "tree": {
            "idx": 24,
            "row": 2,
            "col": 6,
            "columns": 9,
            "requirements": [
              {
                "id": 118,
                "level": 1,
                "name": "Shockwave Trap",
                "visible": true
              },
              {
                "id": 124,
                "level": 1,
                "name": "Remove Trap",
                "visible": true
              }
            ]
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
              }
            ],
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
                      "effect": "Operating time:600sec",
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
          "id": 380,
          "imageFile": "380.png",
          "name": "Falcon Eyes",
          "maxLevel": 10,
          "prerequisiteText": "Owl's Eye 10 , Vulture's Eye 10,",
          "group": "Active",
          "type": "Buff",
          "target": "Caster Only",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Add +5 to all Stats, as well as\nincrease Attack Accuracy (Hit), Weapon Damage\nand Critical Attack Rate.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Hit +3%, Damage +2%, Crit +1"
            },
            {
              "level": 2,
              "text": "Hit +6%, Damage +4%, Crit +2"
            },
            {
              "level": 3,
              "text": "Hit +9%, Damage +6%, Crit +3"
            },
            {
              "level": 4,
              "text": "Hit +12%, Damage +8%, Crit +4"
            },
            {
              "level": 5,
              "text": "Hit +15%, Damage +10%, Crit +5"
            },
            {
              "level": 6,
              "text": "Hit +18%, Damage +12%, Crit +6"
            },
            {
              "level": 7,
              "text": "Hit +21%, Damage +14%, Crit +7"
            },
            {
              "level": 8,
              "text": "Hit +24%, Damage +16%, Crit +8"
            },
            {
              "level": 9,
              "text": "Hit +27%, Damage +18%, Crit +9"
            },
            {
              "level": 10,
              "text": "Hit +30%, Damage +20%, Crit +10"
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
                  "value": "25"
                },
                {
                  "level": 4,
                  "value": "25"
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
                  "value": "35"
                },
                {
                  "level": 8,
                  "value": "35"
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
          "iconUrl": "assets/divine-pride/skills/380.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/380",
          "tree": {
            "idx": 26,
            "row": 2,
            "col": 8,
            "columns": 9,
            "requirements": [
              {
                "id": 43,
                "level": 10,
                "name": "Owl's Eye",
                "visible": false
              },
              {
                "id": 44,
                "level": 10,
                "name": "Vulture's Eye",
                "visible": false
              },
              {
                "id": 45,
                "level": 10,
                "name": "Improve Concentration",
                "visible": false
              },
              {
                "id": 127,
                "level": 1,
                "name": "Falconry Mastery",
                "visible": true
              }
            ]
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
                    "id": "hit-12-damage-8-crit",
                    "label": "Hit +12%, Damage +8%, Crit"
                  },
                  {
                    "id": "hit-15-damage-10-crit",
                    "label": "Hit +15%, Damage +10%, Crit"
                  },
                  {
                    "id": "hit-18-damage-12-crit",
                    "label": "Hit +18%, Damage +12%, Crit"
                  },
                  {
                    "id": "hit-21-damage-14-crit",
                    "label": "Hit +21%, Damage +14%, Crit"
                  },
                  {
                    "id": "hit-24-damage-16-crit",
                    "label": "Hit +24%, Damage +16%, Crit"
                  },
                  {
                    "id": "hit-27-damage-18-crit",
                    "label": "Hit +27%, Damage +18%, Crit"
                  },
                  {
                    "id": "hit-3-damage-2-crit",
                    "label": "Hit +3%, Damage +2%, Crit"
                  },
                  {
                    "id": "hit-30-damage-20-crit",
                    "label": "Hit +30%, Damage +20%, Crit"
                  },
                  {
                    "id": "hit-6-damage-4-crit",
                    "label": "Hit +6%, Damage +4%, Crit"
                  },
                  {
                    "id": "hit-9-damage-6-crit",
                    "label": "Hit +9%, Damage +6%, Crit"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "hit-3-damage-2-crit": "+1",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "hit-6-damage-4-crit": "+2",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "hit-9-damage-6-crit": "+3",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "hit-12-damage-8-crit": "+4",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "hit-15-damage-10-crit": "+5",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "hit-18-damage-12-crit": "+6",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "hit-21-damage-14-crit": "+7",
                      "sp-cost": "35"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "hit-24-damage-16-crit": "+8",
                      "sp-cost": "35"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "hit-27-damage-18-crit": "+9",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "hit-30-damage-20-crit": "+10",
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
          "id": 381,
          "imageFile": "381.png",
          "name": "Falcon Assault",
          "maxLevel": 5,
          "prerequisiteText": "Vulture's Eye 5, Falconly Mastery 1, Blitz Beat 5, Steel Crow 3",
          "group": "Active",
          "type": "Special Ranged Attack",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Command Falcon to attack an\nenemy with numerous strikes.\nDamage is increased by Skill level and the caster's base level.",
          "levelDetails": [],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "0.5 seconds",
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
                  "value": "34"
                },
                {
                  "level": 3,
                  "value": "38"
                },
                {
                  "level": 4,
                  "value": "42"
                },
                {
                  "level": 5,
                  "value": "46"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/381.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/381",
          "tree": {
            "idx": 28,
            "row": 3,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 44,
                "level": 5,
                "name": "Vulture's Eye",
                "visible": false
              },
              {
                "id": 127,
                "level": 1,
                "name": "Falconry Mastery",
                "visible": true
              },
              {
                "id": 128,
                "level": 3,
                "name": "Steel Crow",
                "visible": true
              },
              {
                "id": 129,
                "level": 5,
                "name": "Blitz Beat",
                "visible": true
              }
            ]
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
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "34"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "38"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "42"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "46"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "irowikiUrl": "",
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 123,
          "imageFile": "123.png",
          "name": "Claymore Trap",
          "maxLevel": 5,
          "prerequisiteText": "Blast Mine 1, Shockwave Trap 1",
          "group": "Active",
          "type": "1 cell on ground",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Sets 2 traps that will explode when an enemy steps on it, inflicting piercing Fire property damage to all enemies within its area of effect.\nCremore traps can be directly attacked and blown up.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Operating time: 20sec"
            },
            {
              "level": 2,
              "text": "Operating time: 40sec"
            },
            {
              "level": 3,
              "text": "Operating time: 60sec"
            },
            {
              "level": 4,
              "text": "Operating time: 80sec"
            },
            {
              "level": 5,
              "text": "Operating time:100sec"
            }
          ],
          "fixedCastTime": "0.3 seconds",
          "variableCastTime": "0.5 seconds",
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
          "iconUrl": "assets/divine-pride/skills/123.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/123",
          "tree": {
            "idx": 29,
            "row": 3,
            "col": 2,
            "columns": 9,
            "requirements": [
              {
                "id": 118,
                "level": 1,
                "name": "Shockwave Trap",
                "visible": true
              },
              {
                "id": 122,
                "level": 1,
                "name": "Blast Mine",
                "visible": true
              }
            ]
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
                "value": "0.3 seconds"
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
                      "effect": "Operating time: 20sec",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Operating time: 40sec",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Operating time: 60sec",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Operating time: 80sec",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Operating time:100sec",
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
        }
      ]
    },
    {
      "id": "previous-3",
      "label": "Archer",
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
                      "base-damage-atk": "100%",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-atk": "110%",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-atk": "120%",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-atk": "130%",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-atk": "140%",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "base-damage-atk": "150%",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "base-damage-atk": "160%",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "base-damage-atk": "170%",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "base-damage-atk": "180%",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "base-damage-atk": "190%",
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
          "id": 43,
          "imageFile": "43.png",
          "name": "Owl's Eye",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Boosts DEX",
          "levelDetails": [
            {
              "level": 1,
              "text": "DEX + 1"
            },
            {
              "level": 2,
              "text": "DEX + 2"
            },
            {
              "level": 3,
              "text": "DEX + 3"
            },
            {
              "level": 4,
              "text": "DEX + 4"
            },
            {
              "level": 5,
              "text": "DEX + 5"
            },
            {
              "level": 6,
              "text": "DEX + 6"
            },
            {
              "level": 7,
              "text": "DEX + 7"
            },
            {
              "level": 8,
              "text": "DEX + 8"
            },
            {
              "level": 9,
              "text": "DEX + 9"
            },
            {
              "level": 10,
              "text": "DEX +10"
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
          "iconUrl": "assets/divine-pride/skills/43.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/43",
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
                    "id": "dex",
                    "label": "Dex"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "dex": "+ 1",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "dex": "+ 2",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "dex": "+ 3",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "dex": "+ 4",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "dex": "+ 5",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "dex": "+ 6",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "dex": "+ 7",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "dex": "+ 8",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "dex": "+ 9",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "dex": "+10",
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
          "id": 148,
          "imageFile": "148.png",
          "name": "Arrow Repel",
          "maxLevel": 1,
          "prerequisiteText": "Finish Quest",
          "group": "Offensive",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Draw the bowstring to its\nlimit to fire a volley of arrows with enough\nforce to push the target 4 cells back.\nConsumes 15 SP regardless of skill level.",
          "levelDetails": [
            {
              "level": 1,
              "text": "80% Atk"
            },
            {
              "level": 2,
              "text": "85% Atk"
            },
            {
              "level": 3,
              "text": "90% Atk"
            },
            {
              "level": 4,
              "text": "95% Atk"
            },
            {
              "level": 5,
              "text": "100% Atk"
            },
            {
              "level": 6,
              "text": "105% Atk"
            },
            {
              "level": 7,
              "text": "110% Atk"
            },
            {
              "level": 8,
              "text": "115% Atk"
            },
            {
              "level": 9,
              "text": "120% Atk"
            },
            {
              "level": 10,
              "text": "125% Atk"
            }
          ],
          "fixedCastTime": "0.8 seconds",
          "variableCastTime": "0.4 seconds",
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/148.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/148",
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
                "value": "Offensive Skill"
              },
              {
                "label": "Levels",
                "value": "1"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0.8 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "0.4 seconds"
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
                "value": "Enemy"
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
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-atk": "85%"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-atk": "90%"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-atk": "95%"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-atk": "100%"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "base-damage-atk": "105%"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "base-damage-atk": "110%"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "base-damage-atk": "115%"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "base-damage-atk": "120%"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "base-damage-atk": "125%"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
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
          "id": 47,
          "imageFile": "47.png",
          "name": "Arrow Shower",
          "maxLevel": 10,
          "prerequisiteText": "Double Strafe 5",
          "group": "Active",
          "type": "1 cell on ground",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Consumes SP 15 and shoots an arrow that spreads over a targeted location to inflict ranged physical damage to all enemies in 3*3 cells.\nAnd push all enemies 2 cells backward within the area of effect.\nArrow Shower's area of effect is 9 cells.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 160%"
            },
            {
              "level": 2,
              "text": "ATK 170%"
            },
            {
              "level": 3,
              "text": "ATK 180%"
            },
            {
              "level": 4,
              "text": "ATK 190%"
            },
            {
              "level": 5,
              "text": "ATK 200%"
            },
            {
              "level": 6,
              "text": "ATK 210%"
            },
            {
              "level": 7,
              "text": "ATK 220%"
            },
            {
              "level": 8,
              "text": "ATK 230%"
            },
            {
              "level": 9,
              "text": "ATK 240%"
            },
            {
              "level": 10,
              "text": "ATK 250%"
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
          "iconUrl": "assets/divine-pride/skills/47.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/47",
          "tree": {
            "idx": 9,
            "row": 1,
            "col": 0,
            "columns": 9,
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
                "value": "10"
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
                      "base-damage-atk": "160%",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "base-damage-atk": "170%",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "base-damage-atk": "180%",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "base-damage-atk": "190%",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "base-damage-atk": "200%",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "base-damage-atk": "210%",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "base-damage-atk": "220%",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "base-damage-atk": "230%",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "base-damage-atk": "240%",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "base-damage-atk": "250%",
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
            "idx": 10,
            "row": 1,
            "col": 1,
            "columns": 9,
            "requirements": [
              {
                "id": 43,
                "level": 3,
                "name": "Owl's Eye",
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
                      "effect": "Range Bonus + 1, HIT Bonus: 1%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Range Bonus + 2, HIT Bonus: 2%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Range Bonus + 3, HIT Bonus: 3%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Range Bonus + 4, HIT Bonus: 4%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Range Bonus + 5, HIT Bonus: 5%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "Range Bonus + 6, HIT Bonus: 6%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "Range Bonus + 7, HIT Bonus: 7%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "Range Bonus + 8, HIT Bonus: 8%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "Range Bonus + 9, HIT Bonus: 9%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "Range Bonus +10, HIT Bonus:10%",
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
          "id": 147,
          "imageFile": "147.png",
          "name": "Arrow Crafting",
          "maxLevel": 1,
          "prerequisiteText": "Finish Quest",
          "group": "Supportive",
          "type": "",
          "target": "Item",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Create arrows out of specific items.\nThe kind of arrow produced, as well as the\namount, is determined by the items used.",
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
          "iconUrl": "assets/divine-pride/skills/147.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/147",
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
                "value": "Item"
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
          "id": 45,
          "imageFile": "45.png",
          "name": "Improve Concentration(Attention concentrate)",
          "maxLevel": 10,
          "prerequisiteText": "Vulture's Eye 1",
          "group": "Active",
          "type": "Buff, Supportive",
          "target": "Caster Only",
          "recoversAp": "",
          "consumesAp": "",
          "description": "Boosts AGI and DEX temporarily.\nAdditionally, when using Improve Concentration,\nThis skill will also reveal any hidden enemies in a 3x3 area around the user.",
          "levelDetails": [
            {
              "level": 1,
              "text": "DEX, AGI + 3%, Duration: 60sec"
            },
            {
              "level": 2,
              "text": "DEX, AGI + 4%, Duration: 80sec"
            },
            {
              "level": 3,
              "text": "DEX, AGI + 5%, Duration: 100sec"
            },
            {
              "level": 4,
              "text": "DEX, AGI + 6%, Duration: 120sec"
            },
            {
              "level": 5,
              "text": "DEX, AGI + 7%, Duration: 140sec"
            },
            {
              "level": 6,
              "text": "DEX, AGI + 8%, Duration: 160sec"
            },
            {
              "level": 7,
              "text": "DEX, AGI + 9%, Duration: 180sec"
            },
            {
              "level": 8,
              "text": "DEX, AGI +10%, Duration: 200sec"
            },
            {
              "level": 9,
              "text": "DEX, AGI +11%, Duration: 220sec"
            },
            {
              "level": 10,
              "text": "DEX, AGI +12%, Duration: 240sec"
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
          "iconUrl": "assets/divine-pride/skills/45.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/45",
          "tree": {
            "idx": 17,
            "row": 1,
            "col": 8,
            "columns": 9,
            "requirements": [
              {
                "id": 44,
                "level": 1,
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
                      "effect": "DE x , AGI + 3%, Duration: 60sec",
                      "sp-cost": "25"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "DE x , AGI + 4%, Duration: 80sec",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "DE x , AGI + 5%, Duration: 100sec",
                      "sp-cost": "35"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "DE x , AGI + 6%, Duration: 120sec",
                      "sp-cost": "40"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "DE x , AGI + 7%, Duration: 140sec",
                      "sp-cost": "45"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "DE x , AGI + 8%, Duration: 160sec",
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "DE x , AGI + 9%, Duration: 180sec",
                      "sp-cost": "55"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "DE x , AGI +10%, Duration: 200sec",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "DE x , AGI +11%, Duration: 220sec",
                      "sp-cost": "65"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "DE x , AGI +12%, Duration: 240sec",
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
        }
      ]
    }
  ],
  "skills": [
    {
      "id": 5334,
      "imageFile": "5334.png",
      "name": "Crescive Bolt",
      "maxLevel": 10,
      "prerequisiteText": "Aimed Bolt 5",
      "group": "Active",
      "type": "Ranged Physical",
      "target": "Single Target",
      "recoversAp": "1",
      "consumesAp": "",
      "description": "Fires 1 shot of long ranged physical damage to the single target.\nIncreases damage and SP consumption of the next cast of this skill each time the user uses this skill while stand still (stacks up to 3 times).\nWhen reaching the maximum stack count, increases AP recovery rate to 3.\nThe stack is reset if the user move out from standing cell or changing position with skill.\nDeals additional damage depends on user's base level and CON.\nConsumes 1 equipped arrow.\nHas a chance to trigger critical, critical chance is the user's Cri,\nIn the case of critical damage, half of the total critical damage increase options are applied.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK 1300%"
        },
        {
          "level": 2,
          "text": "ATK 2200%"
        },
        {
          "level": 3,
          "text": "ATK 3100%"
        },
        {
          "level": 4,
          "text": "ATK 4000%"
        },
        {
          "level": 5,
          "text": "ATK 4900%"
        },
        {
          "level": 6,
          "text": "ATK 5800%"
        },
        {
          "level": 7,
          "text": "ATK 6700%"
        },
        {
          "level": 8,
          "text": "ATK 7600%"
        },
        {
          "level": 9,
          "text": "ATK 8500%"
        },
        {
          "level": 10,
          "text": "ATK 9400%"
        }
      ],
      "fixedCastTime": "1 second",
      "variableCastTime": "1 second",
      "castDelay": "0.7 seconds",
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
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5334.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5334",
      "tree": {
        "idx": 0,
        "row": 0,
        "col": 0,
        "columns": 9,
        "requirements": [
          {
            "id": 2236,
            "level": 5,
            "name": "Aimed Bolt",
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
            "value": "0.7 seconds"
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
                  "base-damage-atk": "1300%",
                  "sp-cost": "47"
                }
              },
              {
                "level": 2,
                "values": {
                  "base-damage-atk": "2200%",
                  "sp-cost": "49"
                }
              },
              {
                "level": 3,
                "values": {
                  "base-damage-atk": "3100%",
                  "sp-cost": "51"
                }
              },
              {
                "level": 4,
                "values": {
                  "base-damage-atk": "4000%",
                  "sp-cost": "53"
                }
              },
              {
                "level": 5,
                "values": {
                  "base-damage-atk": "4900%",
                  "sp-cost": "55"
                }
              },
              {
                "level": 6,
                "values": {
                  "base-damage-atk": "5800%",
                  "sp-cost": "57"
                }
              },
              {
                "level": 7,
                "values": {
                  "base-damage-atk": "6700%",
                  "sp-cost": "59"
                }
              },
              {
                "level": 8,
                "values": {
                  "base-damage-atk": "7600%",
                  "sp-cost": "61"
                }
              },
              {
                "level": 9,
                "values": {
                  "base-damage-atk": "8500%",
                  "sp-cost": "63"
                }
              },
              {
                "level": 10,
                "values": {
                  "base-damage-atk": "9400%",
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
          "skillName": "Crescive Bolt",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/wind-hawk/rebalance_2.md",
          "section": "11.3",
          "notes": [
            "Reduces delay after skill from 0.5 seconds to 0.3 seconds.",
            "Reduces SP consumption from 100 to 65 based on level 10.",
            "Increases damage from 3000%Atk to 3400%Atk based on level 10.",
            "When reach 3 stacks of Crescive Bolt consecutive attack buff, the duration of buff will be refreshed when reusing Crescive Bolt."
          ],
          "specRows": [
            {
              "label": "Cast Delay",
              "before": "0.5 seconds",
              "after": "0.3 seconds",
              "scope": "",
              "source": "Reduces delay after skill from 0.5 seconds to 0.3 seconds."
            },
            {
              "label": "SP Cost",
              "before": "100",
              "after": "65",
              "scope": "Lv 10",
              "source": "Reduces SP consumption from 100 to 65 based on level 10."
            },
            {
              "label": "Damage",
              "before": "3000%Atk",
              "after": "3400%Atk",
              "scope": "Lv 10",
              "source": "Increases damage from 3000%Atk to 3400%Atk based on level 10."
            }
          ]
        },
        {
          "skillName": "Crescive Bolt",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/wind-hawk/rebalance_3.md",
          "section": "6.4",
          "notes": [
            "Increases skill cooldown from 0.15 seconds to 0.35 seconds.",
            "Increases global cooldown from 0.3 seconds to 0.7 seconds.",
            "Increases base damage from 3400%Atk to 9400%Atk based on level 10."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "0.15 seconds",
              "after": "0.35 seconds",
              "scope": "",
              "source": "Increases skill cooldown from 0.15 seconds to 0.35 seconds."
            },
            {
              "label": "Cooldown",
              "before": "0.3 seconds",
              "after": "0.7 seconds",
              "scope": "",
              "source": "Increases global cooldown from 0.3 seconds to 0.7 seconds."
            },
            {
              "label": "Damage",
              "before": "3400%Atk",
              "after": "9400%Atk",
              "scope": "Lv 10",
              "source": "Increases base damage from 3400%Atk to 9400%Atk based on level 10."
            }
          ]
        },
        {
          "skillName": "Crescive Bolt",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/wind-hawk/rebalance_4.md",
          "section": "6.2",
          "notes": [
            "Increases base damage from 9400%Atk to 1150013500%Atk based on level 10.",
            "Increases damage bonus on standing still from 10% per stack (up to 30% on 3 stacks) to 4020% per stack (up to 12060% on 3 stacks).",
            "Changes sound effect."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "9400%Atk",
              "after": "1150013500%Atk",
              "scope": "Lv 10",
              "source": "Increases base damage from 9400%Atk to 1150013500%Atk based on level 10."
            },
            {
              "label": "Damage Bonus On Standing Still",
              "before": "10% per stack (up",
              "after": "30% on 3 stacks) to 4020% per stack (up to 12060% on 3 stacks)",
              "scope": "",
              "source": "Increases damage bonus on standing still from 10% per stack (up to 30% on 3 stacks) to 4020% per stack (up to 12060% on 3 stacks)."
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
      "id": 5325,
      "imageFile": "5325.png",
      "name": "Nature's Friend",
      "maxLevel": 5,
      "prerequisiteText": "basic skill",
      "group": "Passive",
      "type": "",
      "target": "",
      "recoversAp": "",
      "consumesAp": "",
      "description": "Improve your wild animal training skills,\nso you can command hawks more easily.",
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
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5325.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5325",
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
      "id": 5323,
      "imageFile": "5323.png",
      "name": "Advanced Traps(Advanced Trap)",
      "maxLevel": 5,
      "prerequisiteText": "basic skill",
      "group": "",
      "type": "",
      "target": "",
      "recoversAp": "",
      "consumesAp": "",
      "description": "Increases the effectiveness of Wind Hawk's Traps.\nDeep Blind Trap/Swift Trap/ Solid Trap/ Increased effectiveness of Flame Traps.",
      "levelDetails": [
        {
          "level": 1,
          "text": "Increased duration: 1 seconds / Increased damage: 20%"
        },
        {
          "level": 2,
          "text": "Increased duration: 2 seconds / Increased damage: 40%"
        },
        {
          "level": 3,
          "text": "Increased duration: 3 seconds/Increased damage: 60%/Increased AP gain: 1"
        },
        {
          "level": 4,
          "text": "Increased duration: 4 seconds/Increased damage: 80%/Increased AP gain: 1"
        },
        {
          "level": 5,
          "text": "Increased duration: 5 seconds/Increased damage: 100%/Increased AP gain: 1"
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
      "iconUrl": "assets/divine-pride/skills/5323.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5323",
      "tree": {
        "idx": 3,
        "row": 0,
        "col": 3,
        "columns": 9,
        "requirements": [
          {
            "id": 2248,
            "level": 3,
            "name": "Trap Research",
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
            "label": "Duration",
            "value": "Lv 1: 1 seconds / Lv 2: 2 seconds / Lv 3: 3 seconds / Lv 4: 4 seconds / Lv 5: 5 seconds"
          }
        ],
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
                  "effect": "Increased duration: 1 seconds / Increased damage: 20%",
                  "sp-cost": "0"
                }
              },
              {
                "level": 2,
                "values": {
                  "effect": "Increased duration: 2 seconds / Increased damage: 40%",
                  "sp-cost": "0"
                }
              },
              {
                "level": 3,
                "values": {
                  "effect": "Increased duration: 3 seconds/Increased damage: 60%/Increased AP gain: 1",
                  "sp-cost": "0"
                }
              },
              {
                "level": 4,
                "values": {
                  "effect": "Increased duration: 4 seconds/Increased damage: 80%/Increased AP gain: 1",
                  "sp-cost": "0"
                }
              },
              {
                "level": 5,
                "values": {
                  "effect": "Increased duration: 5 seconds/Increased damage: 100%/Increased AP gain: 1",
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
      "id": 5327,
      "imageFile": "5327.png",
      "name": "Hawk Mastery",
      "maxLevel": 1,
      "prerequisiteText": "Steel Crow Lv. 1",
      "group": "Active/Special",
      "type": "",
      "target": "",
      "recoversAp": "",
      "consumesAp": "",
      "description": "Train a hawk.\nYou can train your hawk with your warg. Summoning both of them, however, decreases your Warg Strike chance by 1/3.\nRequires a Hawk Pipe.",
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
              "value": "5"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5327.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5327",
      "tree": {
        "idx": 5,
        "row": 0,
        "col": 5,
        "columns": 9,
        "requirements": [
          {
            "id": 128,
            "level": 1,
            "name": "Steel Crow",
            "visible": false
          }
        ]
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Active/Special Skill"
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
      "id": 5330,
      "imageFile": "5330.png",
      "name": "Gale Storm",
      "maxLevel": 10,
      "prerequisiteText": "Crescive Bolt 3",
      "group": "Active",
      "type": "Ranged Physical",
      "target": "Single Target",
      "recoversAp": "when hits 3 or more targets",
      "consumesAp": "",
      "description": "Deals long ranged physical damage to the target and surrounding enemies around the target.\nRecovers AP if the skill hits 3 targets or more.\nDeals additional damage depends on user's base level and CON.\nConsumes 5 equipped arrows.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK 1000%/Area of Effect : 5x5 Cells"
        },
        {
          "level": 2,
          "text": "ATK 2000%/Area of Effect : 5x5 Cells"
        },
        {
          "level": 3,
          "text": "ATK 3000%/Area of Effect : 5x5 Cells"
        },
        {
          "level": 4,
          "text": "ATK 4000%/Area of Effect : 5x5 Cells"
        },
        {
          "level": 5,
          "text": "ATK 5000%/Area of Effect : 7x7 Cells"
        },
        {
          "level": 6,
          "text": "ATK 6000%/Area of Effect : 7x7 Cells"
        },
        {
          "level": 7,
          "text": "ATK 7000%/Area of Effect : 7x7 Cells"
        },
        {
          "level": 8,
          "text": "ATK 8000%/Area of Effect : 7x7 Cells"
        },
        {
          "level": 9,
          "text": "ATK 9000%/Area of Effect : 9x9 Cells"
        },
        {
          "level": 10,
          "text": "ATK 10000%/Area of Effect : 9x9 Cells"
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
              "value": "93"
            },
            {
              "level": 2,
              "value": "96"
            },
            {
              "level": 3,
              "value": "99"
            },
            {
              "level": 4,
              "value": "102"
            },
            {
              "level": 5,
              "value": "105"
            },
            {
              "level": 6,
              "value": "108"
            },
            {
              "level": 7,
              "value": "111"
            },
            {
              "level": 8,
              "value": "114"
            },
            {
              "level": 9,
              "value": "117"
            },
            {
              "level": 10,
              "value": "120"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5330.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5330",
      "tree": {
        "idx": 7,
        "row": 0,
        "col": 7,
        "columns": 9,
        "requirements": [
          {
            "id": 5334,
            "level": 3,
            "name": "Crescive Bolt",
            "visible": true
          }
        ]
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
            "value": "when hits 3 or more targets"
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
                "id": "area-of-effect",
                "label": "Area of Effect"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "area-of-effect": "5x5",
                  "base-damage-atk": "1000%",
                  "sp-cost": "93"
                }
              },
              {
                "level": 2,
                "values": {
                  "area-of-effect": "5x5",
                  "base-damage-atk": "2000%",
                  "sp-cost": "96"
                }
              },
              {
                "level": 3,
                "values": {
                  "area-of-effect": "5x5",
                  "base-damage-atk": "3000%",
                  "sp-cost": "99"
                }
              },
              {
                "level": 4,
                "values": {
                  "area-of-effect": "5x5",
                  "base-damage-atk": "4000%",
                  "sp-cost": "102"
                }
              },
              {
                "level": 5,
                "values": {
                  "area-of-effect": "7x7",
                  "base-damage-atk": "5000%",
                  "sp-cost": "105"
                }
              },
              {
                "level": 6,
                "values": {
                  "area-of-effect": "7x7",
                  "base-damage-atk": "6000%",
                  "sp-cost": "108"
                }
              },
              {
                "level": 7,
                "values": {
                  "area-of-effect": "7x7",
                  "base-damage-atk": "7000%",
                  "sp-cost": "111"
                }
              },
              {
                "level": 8,
                "values": {
                  "area-of-effect": "7x7",
                  "base-damage-atk": "8000%",
                  "sp-cost": "114"
                }
              },
              {
                "level": 9,
                "values": {
                  "area-of-effect": "9x9",
                  "base-damage-atk": "9000%",
                  "sp-cost": "117"
                }
              },
              {
                "level": 10,
                "values": {
                  "area-of-effect": "9x9",
                  "base-damage-atk": "10000%",
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
          "skillName": "Gale Storm",
          "versionId": "rebalance-1",
          "versionLabel": "Rebalance 1",
          "file": "rebalances/wind-hawk/rebalance_1.md",
          "section": "11.1",
          "notes": [
            "Increases damage bonus from CON."
          ],
          "specRows": []
        },
        {
          "skillName": "Gale Storm",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/wind-hawk/rebalance_2.md",
          "section": "11.2",
          "notes": [
            "Reduces cooldown from 2 seconds to 1.5 seconds.",
            "Reduces SP consumption from 179 to 100 based on level 10.",
            "Increases damage from 2500%Atk to 9500%Atk based on level 10."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "2 seconds",
              "after": "1.5 seconds",
              "scope": "",
              "source": "Reduces cooldown from 2 seconds to 1.5 seconds."
            },
            {
              "label": "SP Cost",
              "before": "179",
              "after": "100",
              "scope": "Lv 10",
              "source": "Reduces SP consumption from 179 to 100 based on level 10."
            },
            {
              "label": "Damage",
              "before": "2500%Atk",
              "after": "9500%Atk",
              "scope": "Lv 10",
              "source": "Increases damage from 2500%Atk to 9500%Atk based on level 10."
            }
          ]
        },
        {
          "skillName": "Gale Storm",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/wind-hawk/rebalance_3.md",
          "section": "6.3",
          "notes": [
            "Reduces skill cooldown from 1.5 seconds to 1.2 seconds.",
            "Increases SP consumption from 100 to 120 based on level 10.",
            "Increases base damage from 9500%Atk to 10000%Atk based on level 10.",
            "Reduces area of effect from 11 x 11 cells to 9 x 9 cells based on level 10.",
            "Increases factor weight of CON in skill formula from 5 to 10."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "1.5 seconds",
              "after": "1.2 seconds",
              "scope": "",
              "source": "Reduces skill cooldown from 1.5 seconds to 1.2 seconds."
            },
            {
              "label": "SP Cost",
              "before": "100",
              "after": "120",
              "scope": "Lv 10",
              "source": "Increases SP consumption from 100 to 120 based on level 10."
            },
            {
              "label": "Damage",
              "before": "9500%Atk",
              "after": "10000%Atk",
              "scope": "Lv 10",
              "source": "Increases base damage from 9500%Atk to 10000%Atk based on level 10."
            },
            {
              "label": "Area of Effect",
              "before": "11 x 11 cells",
              "after": "9 x 9 cells",
              "scope": "Lv 10",
              "source": "Reduces area of effect from 11 x 11 cells to 9 x 9 cells based on level 10."
            },
            {
              "label": "Factor Weight Of Con In Skill Formula",
              "before": "5",
              "after": "10",
              "scope": "",
              "source": "Increases factor weight of CON in skill formula from 5 to 10."
            }
          ]
        },
        {
          "skillName": "Gale Storm",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/wind-hawk/rebalance_4.md",
          "section": "6.1",
          "notes": [
            "Reduces skill cooldown from 1.2 seconds to 0.7 seconds.",
            "Increases base damage from 10000%Atk to 1650013500%Atk based on level 5."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "1.2 seconds",
              "after": "0.7 seconds",
              "scope": "",
              "source": "Reduces skill cooldown from 1.2 seconds to 0.7 seconds."
            },
            {
              "label": "Damage",
              "before": "10000%Atk",
              "after": "1650013500%Atk",
              "scope": "Lv 5",
              "source": "Increases base damage from 10000%Atk to 1650013500%Atk based on level 5."
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
      "id": 5324,
      "imageFile": "5324.png",
      "name": "Wind Sign",
      "maxLevel": 5,
      "prerequisiteText": "Nature's Friend Lv. 5",
      "group": "Active",
      "type": "Debuff",
      "target": "1 Target",
      "recoversAp": "",
      "consumesAp": "",
      "description": "Temporarily leave a Wind Sign on the target.\nNormal Long-ranged Physical attacks on this target creates a chance of restoring your AP.\nWind Signs persist even if their targets use Hiding, Cloaking, and Cloaking Exceed.",
      "levelDetails": [],
      "fixedCastTime": "0 seconds",
      "variableCastTime": "0 seconds",
      "castDelay": "0.15 seconds",
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
              "value": "90"
            },
            {
              "level": 3,
              "value": "80"
            },
            {
              "level": 4,
              "value": "70"
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
      "iconUrl": "assets/divine-pride/skills/5324.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5324",
      "tree": {
        "idx": 8,
        "row": 0,
        "col": 8,
        "columns": 9,
        "requirements": [
          {
            "id": 5325,
            "level": 5,
            "name": "Nature's Friend",
            "visible": true
          }
        ]
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
            "value": "0.15 seconds"
          },
          {
            "label": "Cooldown",
            "value": "30 seconds"
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
                  "sp-cost": "90"
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
                  "sp-cost": "70"
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
      "id": 5332,
      "imageFile": "5332.png",
      "name": "Solid Trap(Solid Trap)",
      "maxLevel": 5,
      "prerequisiteText": "basic skill",
      "group": "",
      "type": "Traps",
      "target": "1 cell ground target",
      "recoversAp": "1/1/2/2/3",
      "consumesAp": "",
      "description": "Places Traps in a 1 cell ground target that periodically inflict continuous Melee Physics damage to targets within a nearby radius.\nAttack range and Traps duration increase depending on skill level.\nConsumes 2 special alloy Traps when casting.\n(Special alloy Traps consumed by Remove Traps, etc. cannot be recovered.)\nDamage increases additionally based on the caster's base level and CON.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK 850% per turn/Traps Time: 3.0 seconds/range: 3x3Cell"
        },
        {
          "level": 2,
          "text": "ATK 1700% per turn/Traps time: 3.5 seconds/range: 3x3Cell"
        },
        {
          "level": 3,
          "text": "ATK 2550% per turn/Traps Time: 4.0 seconds/range: 5x5Cell"
        },
        {
          "level": 4,
          "text": "ATK 3400% per turn/Traps time: 4.5 seconds/range: 5x5Cell"
        },
        {
          "level": 5,
          "text": "ATK 4250% per turn/Traps Time: 5.0 seconds/range: 7x7Cell"
        }
      ],
      "fixedCastTime": "1 second",
      "variableCastTime": "1 second",
      "castDelay": "0.5 seconds",
      "cooldown": "2.5 seconds",
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
              "value": "72"
            },
            {
              "level": 3,
              "value": "76"
            },
            {
              "level": 4,
              "value": "80"
            },
            {
              "level": 5,
              "value": "84"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5332.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5332",
      "tree": {
        "idx": 10,
        "row": 1,
        "col": 1,
        "columns": 9,
        "requirements": [
          {
            "id": 5323,
            "level": 3,
            "name": "Advanced Trap",
            "visible": true
          }
        ]
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Traps"
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
            "value": "2.5 seconds"
          },
          {
            "label": "Target",
            "value": "1 cell ground target"
          },
          {
            "label": "AP Generated",
            "value": "1/1/2/2/3"
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
                "id": "area-of-effect",
                "label": "Area of Effect"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "area-of-effect": "3x3",
                  "base-damage-atk": "850%",
                  "sp-cost": "68"
                }
              },
              {
                "level": 2,
                "values": {
                  "area-of-effect": "3x3",
                  "base-damage-atk": "1700%",
                  "sp-cost": "72"
                }
              },
              {
                "level": 3,
                "values": {
                  "area-of-effect": "5x5",
                  "base-damage-atk": "2550%",
                  "sp-cost": "76"
                }
              },
              {
                "level": 4,
                "values": {
                  "area-of-effect": "5x5",
                  "base-damage-atk": "3400%",
                  "sp-cost": "80"
                }
              },
              {
                "level": 5,
                "values": {
                  "area-of-effect": "7x7",
                  "base-damage-atk": "4250%",
                  "sp-cost": "84"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "irowikiUrl": "",
      "balanceNotes": [],
      "api": {
        "status": "not-used",
        "entries": [],
        "selectedEntry": null
      }
    },
    {
      "id": 5331,
      "imageFile": "5331.png",
      "name": "Deep Blind Trap(Deep Blind Trap)",
      "maxLevel": 5,
      "prerequisiteText": "basic skill",
      "group": "",
      "type": "Traps",
      "target": "1 cell ground target",
      "recoversAp": "1/1/2/2/3",
      "consumesAp": "",
      "description": "1 Places Traps on the ground that periodically inflict dark Melee Physics damage to targets within a nearby radius.\nAttack range and Traps duration increase depending on skill level.\nConsumes 2 special alloy Traps when casting.\n(Special alloy Traps consumed by Remove Traps, etc. cannot be recovered.)\nDamage increases additionally based on the caster's base level and CON.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK 850% per turn/Traps Time: 3.0 seconds/range: 3x3Cell"
        },
        {
          "level": 2,
          "text": "ATK 1700% per turn/Traps time: 3.5 seconds/range: 3x3Cell"
        },
        {
          "level": 3,
          "text": "ATK 2550% per turn/Traps Time: 4.0 seconds/range: 5x5Cell"
        },
        {
          "level": 4,
          "text": "ATK 3400% per turn/Traps time: 4.5 seconds/range: 5x5Cell"
        },
        {
          "level": 5,
          "text": "ATK 4250% per turn/Traps Time: 5.0 seconds/range: 7x7Cell"
        }
      ],
      "fixedCastTime": "1 second",
      "variableCastTime": "1 second",
      "castDelay": "0.5 seconds",
      "cooldown": "2.5 seconds",
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
              "value": "72"
            },
            {
              "level": 3,
              "value": "76"
            },
            {
              "level": 4,
              "value": "80"
            },
            {
              "level": 5,
              "value": "84"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5331.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5331",
      "tree": {
        "idx": 11,
        "row": 1,
        "col": 2,
        "columns": 9,
        "requirements": [
          {
            "id": 5323,
            "level": 3,
            "name": "Advanced Trap",
            "visible": true
          }
        ]
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Traps"
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
            "value": "2.5 seconds"
          },
          {
            "label": "Target",
            "value": "1 cell ground target"
          },
          {
            "label": "AP Generated",
            "value": "1/1/2/2/3"
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
                "id": "area-of-effect",
                "label": "Area of Effect"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "area-of-effect": "3x3",
                  "base-damage-atk": "850%",
                  "sp-cost": "68"
                }
              },
              {
                "level": 2,
                "values": {
                  "area-of-effect": "3x3",
                  "base-damage-atk": "1700%",
                  "sp-cost": "72"
                }
              },
              {
                "level": 3,
                "values": {
                  "area-of-effect": "5x5",
                  "base-damage-atk": "2550%",
                  "sp-cost": "76"
                }
              },
              {
                "level": 4,
                "values": {
                  "area-of-effect": "5x5",
                  "base-damage-atk": "3400%",
                  "sp-cost": "80"
                }
              },
              {
                "level": 5,
                "values": {
                  "area-of-effect": "7x7",
                  "base-damage-atk": "4250%",
                  "sp-cost": "84"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "irowikiUrl": "",
      "balanceNotes": [],
      "api": {
        "status": "not-used",
        "entries": [],
        "selectedEntry": null
      }
    },
    {
      "id": 5326,
      "imageFile": "5326.png",
      "name": "Hawk Rush(Hawk Rush)",
      "maxLevel": 5,
      "prerequisiteText": "basic skill",
      "group": "",
      "type": "Ranged physical",
      "target": "Single Target",
      "recoversAp": "",
      "consumesAp": "",
      "description": "Deals ranged physical damage to a designated Single Target twice using a sword.\nCritical damage occurs based on the caster's critical probability.\nIf you have acquired this skill, Hawk Rush will be automatically activated with a 1% chance per 3 of the caster's CON when making a ranged normal attack.\nDamage increases additionally based on the caster's base level and CON.\nIn case of critical damage, half of the total critical damage increase options is applied.\nThis skill can only be activated and used when equipped with a bow.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK 500%"
        },
        {
          "level": 2,
          "text": "ATK 1000%"
        },
        {
          "level": 3,
          "text": "ATK 1500%"
        },
        {
          "level": 4,
          "text": "ATK 2000%"
        },
        {
          "level": 5,
          "text": "ATK 2500%"
        }
      ],
      "fixedCastTime": "0 seconds",
      "variableCastTime": "0 seconds",
      "castDelay": "0 seconds",
      "cooldown": "0.15 seconds",
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
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5326.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5326",
      "tree": {
        "idx": 12,
        "row": 1,
        "col": 3,
        "columns": 9,
        "requirements": [
          {
            "id": 5327,
            "level": 1,
            "name": "Hawk Mastery",
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
            "value": "0.15 seconds"
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
                  "base-damage-atk": "500%",
                  "sp-cost": "40"
                }
              },
              {
                "level": 2,
                "values": {
                  "base-damage-atk": "1000%",
                  "sp-cost": "44"
                }
              },
              {
                "level": 3,
                "values": {
                  "base-damage-atk": "1500%",
                  "sp-cost": "48"
                }
              },
              {
                "level": 4,
                "values": {
                  "base-damage-atk": "2000%",
                  "sp-cost": "52"
                }
              },
              {
                "level": 5,
                "values": {
                  "base-damage-atk": "2500%",
                  "sp-cost": "56"
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
          "skillName": "Hawk Rush",
          "versionId": "rebalance-1",
          "versionLabel": "Rebalance 1",
          "file": "rebalances/wind-hawk/rebalance_1.md",
          "section": "11.2",
          "notes": [
            "Increases damage from 500%Atk to 1000%Atk based on level 5."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "500%Atk",
              "after": "1000%Atk",
              "scope": "Lv 5",
              "source": "Increases damage from 500%Atk to 1000%Atk based on level 5."
            }
          ]
        },
        {
          "skillName": "Hawk Rush",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/wind-hawk/rebalance_2.md",
          "section": "11.1",
          "notes": [
            "Increases damage from 1000%Atk to 2500%Atk based on level 5."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "1000%Atk",
              "after": "2500%Atk",
              "scope": "Lv 5",
              "source": "Increases damage from 1000%Atk to 2500%Atk based on level 5."
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
      "id": 5335,
      "imageFile": "5335.png",
      "name": "Flame Traps(Flame Trap)",
      "maxLevel": 5,
      "prerequisiteText": "basic skill",
      "group": "",
      "type": "Traps",
      "target": "1 cell ground target",
      "recoversAp": "1/1/2/2/3",
      "consumesAp": "",
      "description": "Installs Traps in a 1 cell ground target that periodically inflict fire-attribute Melee Physics damage to targets within a nearby radius.\nAttack range and Traps duration increase depending on skill level.\nConsumes 2 special alloy Traps when casting.\n(Special alloy Traps consumed by Remove Traps, etc. cannot be recovered.)\nDamage increases additionally based on the caster's base level and CON.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK 850% per turn/Traps Time: 3.0 seconds/range: 3x3Cell"
        },
        {
          "level": 2,
          "text": "ATK 1700% per turn/Traps time: 3.5 seconds/range: 3x3Cell"
        },
        {
          "level": 3,
          "text": "ATK 2550% per turn/Traps Time: 4.0 seconds/range: 5x5Cell"
        },
        {
          "level": 4,
          "text": "ATK 3400% per turn/Traps time: 4.5 seconds/range: 5x5Cell"
        },
        {
          "level": 5,
          "text": "ATK 4250% per turn/Traps Time: 5.0 seconds/range: 7x7Cell"
        }
      ],
      "fixedCastTime": "1 second",
      "variableCastTime": "1 second",
      "castDelay": "0.5 seconds",
      "cooldown": "2.5 seconds",
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
              "value": "72"
            },
            {
              "level": 3,
              "value": "76"
            },
            {
              "level": 4,
              "value": "80"
            },
            {
              "level": 5,
              "value": "84"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5335.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5335",
      "tree": {
        "idx": 17,
        "row": 1,
        "col": 8,
        "columns": 9,
        "requirements": [
          {
            "id": 5332,
            "level": 1,
            "name": "Solid Trap",
            "visible": true
          }
        ]
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Traps"
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
            "value": "2.5 seconds"
          },
          {
            "label": "Target",
            "value": "1 cell ground target"
          },
          {
            "label": "AP Generated",
            "value": "1/1/2/2/3"
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
                "id": "area-of-effect",
                "label": "Area of Effect"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "area-of-effect": "3x3",
                  "base-damage-atk": "850%",
                  "sp-cost": "68"
                }
              },
              {
                "level": 2,
                "values": {
                  "area-of-effect": "3x3",
                  "base-damage-atk": "1700%",
                  "sp-cost": "72"
                }
              },
              {
                "level": 3,
                "values": {
                  "area-of-effect": "5x5",
                  "base-damage-atk": "2550%",
                  "sp-cost": "76"
                }
              },
              {
                "level": 4,
                "values": {
                  "area-of-effect": "5x5",
                  "base-damage-atk": "3400%",
                  "sp-cost": "80"
                }
              },
              {
                "level": 5,
                "values": {
                  "area-of-effect": "7x7",
                  "base-damage-atk": "4250%",
                  "sp-cost": "84"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "irowikiUrl": "",
      "balanceNotes": [],
      "api": {
        "status": "not-used",
        "entries": [],
        "selectedEntry": null
      }
    },
    {
      "id": 5333,
      "imageFile": "5333.png",
      "name": "Swift Trap(Swift Trap)",
      "maxLevel": 5,
      "prerequisiteText": "basic skill",
      "group": "",
      "type": "Traps",
      "target": "1 cell ground target",
      "recoversAp": "1/1/2/2/3",
      "consumesAp": "",
      "description": "Installs Traps in a 1 cell ground target that periodically inflict wind-attribute Melee Physics damage to targets within a nearby radius.\nAttack range and Traps duration increase depending on skill level.\nConsumes 2 special alloy Traps when casting.\n(Special alloy Traps consumed by Remove Traps, etc. cannot be recovered.)\nDamage increases additionally based on the caster's base level and CON.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK 850% per turn/Traps Time: 3.0 seconds/range: 3x3Cell"
        },
        {
          "level": 2,
          "text": "ATK 1700% per turn/Traps time: 3.5 seconds/range: 3x3Cell"
        },
        {
          "level": 3,
          "text": "ATK 2550% per turn/Traps Time: 4.0 seconds/range: 5x5Cell"
        },
        {
          "level": 4,
          "text": "ATK 3400% per turn/Traps time: 4.5 seconds/range: 5x5Cell"
        },
        {
          "level": 5,
          "text": "ATK 4250% per turn/Traps Time: 5.0 seconds/range: 7x7Cell"
        }
      ],
      "fixedCastTime": "1 second",
      "variableCastTime": "1 second",
      "castDelay": "0.5 seconds",
      "cooldown": "2.5 seconds",
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
              "value": "72"
            },
            {
              "level": 3,
              "value": "76"
            },
            {
              "level": 4,
              "value": "80"
            },
            {
              "level": 5,
              "value": "84"
            }
          ]
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5333.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5333",
      "tree": {
        "idx": 18,
        "row": 2,
        "col": 0,
        "columns": 9,
        "requirements": [
          {
            "id": 5331,
            "level": 1,
            "name": "Deep Blind Trap",
            "visible": true
          }
        ]
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Traps"
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
            "value": "2.5 seconds"
          },
          {
            "label": "Target",
            "value": "1 cell ground target"
          },
          {
            "label": "AP Generated",
            "value": "1/1/2/2/3"
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
                "id": "area-of-effect",
                "label": "Area of Effect"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "area-of-effect": "3x3",
                  "base-damage-atk": "850%",
                  "sp-cost": "68"
                }
              },
              {
                "level": 2,
                "values": {
                  "area-of-effect": "3x3",
                  "base-damage-atk": "1700%",
                  "sp-cost": "72"
                }
              },
              {
                "level": 3,
                "values": {
                  "area-of-effect": "5x5",
                  "base-damage-atk": "2550%",
                  "sp-cost": "76"
                }
              },
              {
                "level": 4,
                "values": {
                  "area-of-effect": "5x5",
                  "base-damage-atk": "3400%",
                  "sp-cost": "80"
                }
              },
              {
                "level": 5,
                "values": {
                  "area-of-effect": "7x7",
                  "base-damage-atk": "4250%",
                  "sp-cost": "84"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "irowikiUrl": "",
      "balanceNotes": [],
      "api": {
        "status": "not-used",
        "entries": [],
        "selectedEntry": null
      }
    },
    {
      "id": 6520,
      "imageFile": "6520.png",
      "name": "Wild Walk",
      "maxLevel": 5,
      "prerequisiteText": "Nature Friendly 3, Hawk Rush 3",
      "group": "Active (AP)",
      "type": "Long ranged physical",
      "target": "Single target",
      "recoversAp": "",
      "consumesAp": "5",
      "description": "Used hawk to inflicts long ranged physical damage to the target for 3 hits.\nUsing the gust of wind created by hawk, increase the user's evasion rate and movement speed for the certain duration.\nDeals additional damage depends on level of Steel Crow and Nature Friendly user learned, user's base level and CON, has a chance to trigger critical, critical chance is the user's Cri.\nThe effectiveness of critical modifier is applied by half.\nThe skill can be used while riding Warg.",
      "levelDetails": [
        {
          "level": 1,
          "text": "4600% Atk per hit / Flee + 100, movement speed + 25%, duration : 6 seconds."
        },
        {
          "level": 2,
          "text": "7400% Atk per hit / Flee + 150, movement speed + 25%, duration : 9 seconds."
        },
        {
          "level": 3,
          "text": "10200% Atk per hit / Flee + 200, movement speed + 50%, duration : 12 seconds."
        },
        {
          "level": 4,
          "text": "13000% Atk per hit / Flee + 250, movement speed + 50%, duration : 15 seconds."
        },
        {
          "level": 5,
          "text": "15800% Atk per hit / Flee + 300, movement speed + 75%, duration : 18 seconds."
        }
      ],
      "fixedCastTime": "1 second",
      "variableCastTime": "0.5 seconds",
      "castDelay": "0.5 seconds",
      "cooldown": "20 seconds",
      "levelExtras": [],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/6520.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6520",
      "tree": {
        "idx": 20,
        "row": 2,
        "col": 2,
        "columns": 9,
        "requirements": [
          {
            "id": 5325,
            "level": 3,
            "name": "Nature's Friend",
            "visible": true
          },
          {
            "id": 5326,
            "level": 3,
            "name": "Hawk Rush",
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
            "label": "Fixed Cast Time",
            "value": "1 second"
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
            "value": "20 seconds"
          },
          {
            "label": "Target",
            "value": "Single target"
          },
          {
            "label": "AP Consumed",
            "value": "5"
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
                  "base-damage-atk-per-hit": "4600%"
                }
              },
              {
                "level": 2,
                "values": {
                  "base-damage-atk-per-hit": "7400%"
                }
              },
              {
                "level": 3,
                "values": {
                  "base-damage-atk-per-hit": "10200%"
                }
              },
              {
                "level": 4,
                "values": {
                  "base-damage-atk-per-hit": "13000%"
                }
              },
              {
                "level": 5,
                "values": {
                  "base-damage-atk-per-hit": "15800%"
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
          "skillName": "Wild Walk",
          "versionId": "rebalance-5",
          "versionLabel": "Rebalance 5",
          "file": "rebalances/wind-hawk/added_skills.md",
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
      "id": 5328,
      "imageFile": "5328.png",
      "name": "Calamity Gale",
      "maxLevel": 1,
      "prerequisiteText": "Gale Storm 5, Wind Sign 5",
      "group": "Active(AP)",
      "type": "Buff",
      "target": "Self",
      "recoversAp": "",
      "consumesAp": "",
      "description": "Endows the user's body with the rage of windblast.\nThe user gains No Limits level 5 buff and grants the user Calamity Gale buff for 180 seconds\nHowever, the duration of No Limits is the same as existing No Limits\n[Calamity gale effect]\nIncreases Crescive Bolt damage by 20%, Gale Storm has a chance to trigger critical(However, In the case of critical damage, half of the total critical damage increase options are applied.).\nincreases Crescive Bolt and Gale Storm damage against brute and fish race monsters by 50%.",
      "levelDetails": [
        {
          "level": 1,
          "text": "Calamity Gale Duration: 180Sec"
        }
      ],
      "fixedCastTime": "1 second",
      "variableCastTime": "2 seconds",
      "castDelay": "0.15 seconds",
      "cooldown": "60 seconds",
      "levelExtras": [
        {
          "label": "SP Cost",
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
      "iconUrl": "assets/divine-pride/skills/5328.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5328",
      "tree": {
        "idx": 21,
        "row": 2,
        "col": 3,
        "columns": 9,
        "requirements": [
          {
            "id": 5324,
            "level": 5,
            "name": "Wind Sign",
            "visible": true
          },
          {
            "id": 5330,
            "level": 5,
            "name": "Gale Storm",
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
            "label": "Fixed Cast Time",
            "value": "1 second"
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
                "id": "effect",
                "label": "Effect"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "effect": "Calamity Gale Duration: 180Sec",
                  "sp-cost": "300"
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
          "skillName": "Calamity Gale",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/wind-hawk/rebalance_3.md",
          "section": "6.2",
          "notes": [
            "Increases duration from 60 seconds to 180 seconds.",
            "Reduces skill cooldown from 300 seconds to 180 seconds.",
            "No longer be removed when using No Limits."
          ],
          "specRows": [
            {
              "label": "Duration",
              "before": "60 seconds",
              "after": "180 seconds",
              "scope": "",
              "source": "Increases duration from 60 seconds to 180 seconds."
            },
            {
              "label": "Cooldown",
              "before": "300 seconds",
              "after": "180 seconds",
              "scope": "",
              "source": "Reduces skill cooldown from 300 seconds to 180 seconds."
            }
          ]
        },
        {
          "skillName": "Calamity Gale",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/wind-hawk/rebalance_4.md",
          "section": "6.3",
          "notes": [
            "Reduces AP consumption from 200 to 125.",
            "Reduces skill cooldown from 180 seconds to 60 seconds."
          ],
          "specRows": [
            {
              "label": "AP Consumed",
              "before": "200",
              "after": "125",
              "scope": "",
              "source": "Reduces AP consumption from 200 to 125."
            },
            {
              "label": "Cooldown",
              "before": "180 seconds",
              "after": "60 seconds",
              "scope": "",
              "source": "Reduces skill cooldown from 180 seconds to 60 seconds."
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
      "id": 5329,
      "imageFile": "5329.png",
      "name": "Hawk Boomerang(Hawk Boomerang)",
      "maxLevel": 5,
      "prerequisiteText": "basic skill",
      "group": "",
      "type": "Ranged physical",
      "target": "Single Target",
      "recoversAp": "",
      "consumesAp": "12",
      "description": "Deals 1 ranged physical critical damage to a designated Single Target based on the caster's critical chance using a sword.\nDamage to Brute/Fish type monsters increases by 50%.\nThe level of the acquired nature affinity skill. Damage increases based on the caster's base level and CON.\nIn case of critical damage, half of the total critical damage increase options is applied.\nThis skill can only be used when equipped with a bow.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK 600%"
        },
        {
          "level": 2,
          "text": "ATK 1200%"
        },
        {
          "level": 3,
          "text": "ATK 1800%"
        },
        {
          "level": 4,
          "text": "ATK 2400%"
        },
        {
          "level": 5,
          "text": "ATK 3000%"
        }
      ],
      "fixedCastTime": "1 second",
      "variableCastTime": "3 seconds",
      "castDelay": "0.5 seconds",
      "cooldown": "0.15 seconds",
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
        }
      ],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5329.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5329",
      "tree": {
        "idx": 26,
        "row": 2,
        "col": 8,
        "columns": 9,
        "requirements": [
          {
            "id": 5326,
            "level": 5,
            "name": "Hawk Rush",
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
            "value": "0.15 seconds"
          },
          {
            "label": "Target",
            "value": "Single Target"
          },
          {
            "label": "AP Consumed",
            "value": "12"
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
                  "base-damage-atk": "600%",
                  "sp-cost": "80"
                }
              },
              {
                "level": 2,
                "values": {
                  "base-damage-atk": "1200%",
                  "sp-cost": "80"
                }
              },
              {
                "level": 3,
                "values": {
                  "base-damage-atk": "1800%",
                  "sp-cost": "80"
                }
              },
              {
                "level": 4,
                "values": {
                  "base-damage-atk": "2400%",
                  "sp-cost": "80"
                }
              },
              {
                "level": 5,
                "values": {
                  "base-damage-atk": "3000%",
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
          "skillName": "Hawk Boomerang",
          "versionId": "rebalance-1",
          "versionLabel": "Rebalance 1",
          "file": "rebalances/wind-hawk/rebalance_1.md",
          "section": "11.3",
          "notes": [
            "Removes cooldown.",
            "Reduces AP consumption from 50 to 15."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "cooldown",
              "after": "Removed",
              "scope": "",
              "source": "Removes cooldown."
            },
            {
              "label": "AP Consumed",
              "before": "50",
              "after": "15",
              "scope": "",
              "source": "Reduces AP consumption from 50 to 15."
            }
          ]
        },
        {
          "skillName": "Hawk Boomerang",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/wind-hawk/rebalance_2.md",
          "section": "11.5",
          "notes": [
            "Adds 0.15 seconds cooldown.",
            "Reduces SP consumption from 120 to 80.",
            "Reduces AP consumption from 15 to 12.",
            "Increases damage from 2500%Atk to 3000%Atk based on level 5."
          ],
          "specRows": [
            {
              "label": "SP Cost",
              "before": "120",
              "after": "80",
              "scope": "",
              "source": "Reduces SP consumption from 120 to 80."
            },
            {
              "label": "AP Consumed",
              "before": "15",
              "after": "12",
              "scope": "",
              "source": "Reduces AP consumption from 15 to 12."
            },
            {
              "label": "Damage",
              "before": "2500%Atk",
              "after": "3000%Atk",
              "scope": "Lv 5",
              "source": "Increases damage from 2500%Atk to 3000%Atk based on level 5."
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

export default windHawkData;
