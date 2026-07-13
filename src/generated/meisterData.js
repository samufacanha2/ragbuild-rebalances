export const meisterData = {
  "generatedAt": "2026-07-13T19:36:12.707Z",
  "classId": 4253,
  "classSlug": "meister",
  "className": "Meister",
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
    "noteCount": 39,
    "addedSkills": 0,
    "versions": 4
  },
  "tree": {
    "columns": 7,
    "rows": 5,
    "skillTreeUrl": "https://www.divine-pride.net/tools/skilltree/4253",
    "jobIconUrl": "assets/divine-pride/jobs/4253.png"
  },
  "sources": {
    "rebalances": [
      "rebalances/meister/rebalance_1.md",
      "rebalances/meister/rebalance_2.md",
      "rebalances/meister/rebalance_3.md",
      "rebalances/meister/rebalance_4.md"
    ],
    "rebalanceManifest": "rebalances/manifest.json",
    "divinePrideApiDocs": "https://www.divine-pride.net/api",
    "divinePrideSkillTree": "https://www.divine-pride.net/tools/skilltree/4253",
    "browiki": "https://browiki.org",
    "irowiki": "https://irowiki.org/wiki/"
  },
  "rebalanceVersions": [
    {
      "id": "rebalance-1",
      "label": "Rebalance 1",
      "file": "rebalances/meister/rebalance_1.md",
      "heading": "3. Meister",
      "className": "Meister",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=9805",
      "scope": "main",
      "appliesTo": "Main classes only",
      "maxJobLevel": 50,
      "pointLimit": 49,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "3.1",
          "name": "ABR Mastery",
          "notes": [
            "Increases Atk bonus from 2500 to 6200 based on level 10.",
            "Increases MaxHP bonus from 20000 to 400000 based on level 10."
          ]
        },
        {
          "section": "3.2",
          "name": "ABR - Battle Warrior / ABR - Dual Cannon / ABR - Mother Net",
          "notes": [
            "Reduces fixed casting time from 4 seconds to 1 second based on level 4.",
            "Adds variable casting time by 1 second based on level 4.",
            "Reduces cooldown to 30 seconds."
          ]
        },
        {
          "section": "3.3",
          "name": "ABR - Infinity",
          "notes": [
            "Reduces fixed casting time from 4 seconds to 1 second based on level 4.",
            "Adds variable casting time by 1 second based on level 4.",
            "Reduces cooldown to 60 seconds."
          ]
        },
        {
          "section": "3.4",
          "name": "Rush Quake",
          "notes": [
            "Grants Rush buff to the user for 300 seconds based on level 10.",
            "Rush : Increases melee and long ranged physical damage by 50% (based on level 10).",
            "Inflicts Quake debuff to the target and surrounding enemies around the target for 30 seconds.",
            "Quake : Increases damage taken from melee and long ranged physical damage by 50%."
          ]
        },
        {
          "section": "3.5",
          "name": "Axe Stomp",
          "notes": [
            "Increases damage from 1750%Atk to 2000%Atk based on level 5.",
            "When equipping two-handed axe, increases number of hit from 2 hits to 3 hits.",
            "Reduces cooldown from 2 seconds to 1 second.",
            "Increases AP recovery rate from 2 to 3.",
            "Increases duration from Axe Stomp buff from 5 seconds to 10 seconds."
          ]
        },
        {
          "section": "3.6",
          "name": "Vulcan Arm",
          "notes": [
            "Increases damage from 420%Atk to 690%Atk based on level 3."
          ]
        },
        {
          "section": "3.7",
          "name": "Knuckle Boost",
          "notes": [
            "Increases damage from 1100%Atk to 1300%Atk based on level 5.",
            "Reduces variable casting time from 0.5 seconds to 0.2 seconds based on level 5."
          ]
        },
        {
          "section": "3.8",
          "name": "Arm Cannon",
          "notes": [
            "Increases damage from 1900%Atk to 2150%Atk based on level 5.",
            "Reduces cooldown from 0.3 seconds to 0.15 seconds based on level 5.",
            "Reduces delay after skill from 1 second to 0.5 seconds based on level 5.",
            "Increases area of effect from 5x5 cells to 7x7 cells based on level 5."
          ]
        },
        {
          "section": "3.9",
          "name": "Axe Tornado",
          "notes": [
            "Increases damage while under Axe Stomp buff (on Vit 130) from 1360%Atk to 1740%Atk based on level 5."
          ]
        }
      ]
    },
    {
      "id": "rebalance-2",
      "label": "Rebalance 2",
      "file": "rebalances/meister/rebalance_2.md",
      "heading": "3. Meister",
      "className": "Meister",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=11126",
      "scope": "main-and-expanded",
      "appliesTo": "Main and expanded classes",
      "maxJobLevel": 50,
      "pointLimit": 49,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "3.1",
          "name": "Axe Stomp",
          "notes": [
            "Reduces cooldown from 1 second to 0.7 seconds.",
            "Reduces delay after skill from 0.5 seconds to 0.25 seconds.",
            "Increases SP consumption from 45 to 74 based on level 5.",
            "Increases duration of Axe Stomp buff from 10 seconds to 30 seconds based on level 5.",
            "Increases damage from 2000%Atk to 4600%Atk per hit based on level 5."
          ]
        },
        {
          "section": "3.2",
          "name": "Rush Quake",
          "notes": [
            "Removes 0.5 seconds delay after skill.",
            "Increases damage from 7500%/11000%(formless and insect race)Atk to 36000%/37500%(formless and insect race)Atk based on level 10."
          ]
        }
      ]
    },
    {
      "id": "rebalance-3",
      "label": "Rebalance 3",
      "file": "rebalances/meister/rebalance_3.md",
      "heading": "2. Meister",
      "className": "Meister",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=12421",
      "scope": "main-and-expanded",
      "appliesTo": "Main and expanded classes",
      "maxJobLevel": 55,
      "pointLimit": 54,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "2.1",
          "name": "Axe Stomp",
          "notes": [
            "Increases SP consumption from 74 to 85 based on level 5.",
            "Increases base damage from 4600%Atk to 5150%Atk per hit based on level 5."
          ]
        },
        {
          "section": "2.2",
          "name": "Mighty Smash",
          "notes": [
            "Increases skill cooldown from 0.3 seconds to 0.5 seconds.",
            "Adds global cooldown by 0.25 seconds.",
            "Increases SP consumption from 78 to 95 based on level 10.",
            "Reduces base damage from 3100%/3150%Atk to 1825%/1850%Atk per hit based on level 10.",
            "Increases number of hit from 3/5 hits to 5/7 hits.",
            "While under Axe Stomp buff, increases factor weight of POW in skill formula from 7 to 10."
          ]
        },
        {
          "section": "2.3",
          "name": "Spark Blaster",
          "notes": [
            "Reduces skill cooldown from 0.7 seconds to 0.5 seconds.",
            "Increases base damage from 7750%Atk to 9250%Atk per hit based on level 10."
          ]
        },
        {
          "section": "2.4",
          "name": "Triple Laser",
          "notes": [
            "Increases skill cooldown from 0.25 seconds to 0.35 seconds.",
            "Adds global cooldown by 0.25 seconds.",
            "Increases base damage from 3300%Atk to 5050%Atk per hit based on level 5.",
            "Increases factor weight of POW in skill formula from 10 to 12."
          ]
        }
      ]
    },
    {
      "id": "rebalance-4",
      "label": "Rebalance 4",
      "file": "rebalances/meister/rebalance_4.md",
      "heading": "2. Meister",
      "className": "Meister",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=13917",
      "scope": "main-and-expanded",
      "appliesTo": "Main and expanded classes",
      "maxJobLevel": 55,
      "pointLimit": 54,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "2.1",
          "name": "Axe Stomp",
          "notes": [
            "Increases global cooldown from 0.25 seconds to 0.7 seconds based on level 5.",
            "Increases base damage from 5150%Atk to 6200%Atk per hit based on level 5."
          ]
        },
        {
          "section": "2.2",
          "name": "Mighty Smash",
          "notes": [
            "Increases global cooldown from 0.25 seconds to 0.7 seconds based on level 10.",
            "Increases base damage from 1825%/1850%(Axe Stomp)Atk to 2480%/2500%(Axe Stomp)Atk per hit based on level 10."
          ]
        },
        {
          "section": "2.3",
          "name": "Spark Blaster",
          "notes": [
            "Increases base damage from 9250%Atk to 14600%Atk based on level 10."
          ]
        },
        {
          "section": "2.4",
          "name": "Triple Laser",
          "notes": [
            "Increases base damage from 5050%Atk to 6400%Atk per hit based on level 5."
          ]
        },
        {
          "section": "2.5",
          "name": "Rush Quake",
          "notes": [
            "Buff no longer be removed by Dispell or Clearance."
          ]
        }
      ]
    }
  ],
  "addedSkills": [],
  "skillTabs": [
    {
      "id": "current",
      "label": "Meister",
      "pointLimit": 59,
      "tree": {
        "columns": 7,
        "rows": 5
      },
      "skills": [
        {
          "id": 5300,
          "imageFile": "5300.png",
          "name": "Two-handed Axe Defense",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Two-handed_Axe_Defense",
          "description": "Two-handed Axes decrease Physical damage from enemies of all sizes.",
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
          "iconUrl": "assets/divine-pride/skills/5300.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5300",
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
          "id": 5297,
          "imageFile": "5297.png",
          "name": "Manufacture Machine",
          "maxLevel": 5,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "Crafting",
          "target": "You and party members",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Manufacture_Machine",
          "description": "Create various devices for your skills.\nRequires a Machine Creation Guide.",
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
          "spCost": "20 + (Skill Level x 10)",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5297.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5297",
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
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "20 + (Skill Level x 10)"
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
                "value": "You and party members"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
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
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 5295,
          "imageFile": "5295.png",
          "name": "Axe Stomp",
          "maxLevel": 5,
          "prerequisiteText": "Two Axes Defending 5",
          "group": "Active",
          "type": "Melee Physical",
          "target": "Target in range",
          "recoversAp": "3",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Axe_Stomp",
          "description": "Axe-only skill.\nStrike the ground with an Axe and inflict melee physical damage to targets within the range around you.\nThe caster is granted Axe Stomp for a short period of time, increasing the damage of the Axe Tornado skill and dealing 3 attacks when used with a two-handed axe.\nDamage is additionally increased depending on the user's base level and POW.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK Per Hit 1350%/Range: 3x3/Duration: 10Sec"
            },
            {
              "level": 2,
              "text": "ATK Per Hit 2300%/Range: 3x3/Duration: 15Sec"
            },
            {
              "level": 3,
              "text": "ATK Per Hit 3250%/Range: 5x5/Duration: 20Sec"
            },
            {
              "level": 4,
              "text": "ATK Per Hit 4200%/Range: 5x5/Duration: 25Sec"
            },
            {
              "level": 5,
              "text": "ATK Per Hit 5150%/Range: 7x7/Duration: 30Sec"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0.7 seconds",
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
          "spCost": "45 ~ 85",
          "duration": "10 ~ 30 seconds",
          "areaOfEffect": "3 x 3 ~ 7 x 7",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5295.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5295",
          "tree": {
            "idx": 8,
            "row": 1,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 5300,
                "level": 5,
                "name": "Two-handed Axe Defense",
                "visible": true
              }
            ]
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
                "value": "45 ~ 85"
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
                "value": "0.7 seconds"
              },
              {
                "label": "Target",
                "value": "Target in range"
              },
              {
                "label": "Area of Effect",
                "value": "3 x 3 ~ 7 x 7"
              },
              {
                "label": "AP Generated",
                "value": "3"
              },
              {
                "label": "Damage",
                "value": "5,150% ATK per hit"
              }
            ],
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
                      "duration": "10 seconds",
                      "sp-cost": "45"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "15 seconds",
                      "sp-cost": "55"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "20 seconds",
                      "sp-cost": "65"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "25 seconds",
                      "sp-cost": "75"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "30 seconds",
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
              "skillName": "Axe Stomp",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/meister/rebalance_1.md",
              "section": "3.5",
              "notes": [
                "Increases damage from 1750%Atk to 2000%Atk based on level 5.",
                "When equipping two-handed axe, increases number of hit from 2 hits to 3 hits.",
                "Reduces cooldown from 2 seconds to 1 second.",
                "Increases AP recovery rate from 2 to 3.",
                "Increases duration from Axe Stomp buff from 5 seconds to 10 seconds."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "1750%Atk",
                  "after": "2000%Atk",
                  "scope": "Lv 5",
                  "source": "Increases damage from 1750%Atk to 2000%Atk based on level 5."
                },
                {
                  "label": "Cooldown",
                  "before": "2 seconds",
                  "after": "1 second",
                  "scope": "",
                  "source": "Reduces cooldown from 2 seconds to 1 second."
                },
                {
                  "label": "AP Generated",
                  "before": "2",
                  "after": "3",
                  "scope": "",
                  "source": "Increases AP recovery rate from 2 to 3."
                },
                {
                  "label": "Duration",
                  "before": "A x e Stomp buff from 5 seconds",
                  "after": "10 seconds",
                  "scope": "",
                  "source": "Increases duration from Axe Stomp buff from 5 seconds to 10 seconds."
                }
              ]
            },
            {
              "skillName": "Axe Stomp",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/meister/rebalance_2.md",
              "section": "3.1",
              "notes": [
                "Reduces cooldown from 1 second to 0.7 seconds.",
                "Reduces delay after skill from 0.5 seconds to 0.25 seconds.",
                "Increases SP consumption from 45 to 74 based on level 5.",
                "Increases duration of Axe Stomp buff from 10 seconds to 30 seconds based on level 5.",
                "Increases damage from 2000%Atk to 4600%Atk per hit based on level 5."
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
                  "label": "Cast Delay",
                  "before": "0.5 seconds",
                  "after": "0.25 seconds",
                  "scope": "",
                  "source": "Reduces delay after skill from 0.5 seconds to 0.25 seconds."
                },
                {
                  "label": "SP Cost",
                  "before": "45",
                  "after": "74",
                  "scope": "Lv 5",
                  "source": "Increases SP consumption from 45 to 74 based on level 5."
                },
                {
                  "label": "Duration Of Axe Stomp Buff",
                  "before": "10 seconds",
                  "after": "30 seconds",
                  "scope": "Lv 5",
                  "source": "Increases duration of Axe Stomp buff from 10 seconds to 30 seconds based on level 5."
                },
                {
                  "label": "Damage",
                  "before": "2000%Atk",
                  "after": "4600%Atk per hit",
                  "scope": "Lv 5",
                  "source": "Increases damage from 2000%Atk to 4600%Atk per hit based on level 5."
                }
              ]
            },
            {
              "skillName": "Axe Stomp",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/meister/rebalance_3.md",
              "section": "2.1",
              "notes": [
                "Increases SP consumption from 74 to 85 based on level 5.",
                "Increases base damage from 4600%Atk to 5150%Atk per hit based on level 5."
              ],
              "specRows": [
                {
                  "label": "SP Cost",
                  "before": "74",
                  "after": "85",
                  "scope": "Lv 5",
                  "source": "Increases SP consumption from 74 to 85 based on level 5."
                },
                {
                  "label": "Damage",
                  "before": "4600%Atk",
                  "after": "5150%Atk per hit",
                  "scope": "Lv 5",
                  "source": "Increases base damage from 4600%Atk to 5150%Atk per hit based on level 5."
                }
              ]
            },
            {
              "skillName": "Axe Stomp",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/meister/rebalance_4.md",
              "section": "2.1",
              "notes": [
                "Increases global cooldown from 0.25 seconds to 0.7 seconds based on level 5.",
                "Increases base damage from 5150%Atk to 6200%Atk per hit based on level 5."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "0.25 seconds",
                  "after": "0.7 seconds",
                  "scope": "Lv 5",
                  "source": "Increases global cooldown from 0.25 seconds to 0.7 seconds based on level 5."
                },
                {
                  "label": "Damage",
                  "before": "5150%Atk",
                  "after": "6200%Atk per hit",
                  "scope": "Lv 5",
                  "source": "Increases base damage from 5150%Atk to 6200%Atk per hit based on level 5."
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
          "id": 5298,
          "imageFile": "5298.png",
          "name": "Activate Attack Device",
          "maxLevel": 5,
          "prerequisiteText": "Manufacture Machine Lv. 3 and Axe Stomp Lv. 3",
          "group": "Active",
          "type": "Buff",
          "target": "You and party members",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Activate_Attack_Device",
          "description": "Consumes 1 Device Capsule. Add a device to an ally that temporarily attacks enemies around them.\nThis device inflicts Melee Physical damage every second.",
          "levelDetails": [],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "1 second",
          "castDelay": "0.5 seconds",
          "cooldown": "0.7 seconds",
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "43"
                },
                {
                  "level": 2,
                  "value": "46"
                },
                {
                  "level": 3,
                  "value": "49"
                },
                {
                  "level": 4,
                  "value": "52"
                },
                {
                  "level": 5,
                  "value": "55"
                }
              ]
            }
          ],
          "spCost": "40 + (Skill Level × 3)",
          "duration": "40 + (Skill Level × 40) seconds",
          "areaOfEffect": "3×3~7×7",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5298.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5298",
          "tree": {
            "idx": 9,
            "row": 1,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 5295,
                "level": 3,
                "name": "Axe Stomp",
                "visible": true
              },
              {
                "id": 5297,
                "level": 3,
                "name": "Manufacture Machine",
                "visible": true
              }
            ]
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
                "value": "40 + (Skill Level × 3)"
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
                "value": "0.7 seconds"
              },
              {
                "label": "Target",
                "value": "You and party members"
              },
              {
                "label": "Area of Effect",
                "value": "3×3~7×7"
              },
              {
                "label": "Duration",
                "value": "40 + (Skill Level × 40) seconds"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "43"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "46"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "49"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "52"
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
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 5299,
          "imageFile": "5299.png",
          "name": "Activate Defense Device",
          "maxLevel": 5,
          "prerequisiteText": "Manufacture Machine Lv. 1",
          "group": "Active",
          "type": "Buff",
          "target": "You and party members",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Activate_Defense_Device",
          "description": "Consumes 1 Device Capsule. Add a device to an ally that temporarily increases their DEF and Physical Resistance.",
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
                  "value": "43"
                },
                {
                  "level": 2,
                  "value": "46"
                },
                {
                  "level": 3,
                  "value": "49"
                },
                {
                  "level": 4,
                  "value": "52"
                },
                {
                  "level": 5,
                  "value": "55"
                }
              ]
            }
          ],
          "spCost": "40 + (Skill Level × 3)",
          "duration": "40 + (Skill Level × 40) seconds",
          "areaOfEffect": "3×3~7×7",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5299.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5299",
          "tree": {
            "idx": 10,
            "row": 1,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 5297,
                "level": 1,
                "name": "Manufacture Machine",
                "visible": true
              }
            ]
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
                "value": "40 + (Skill Level × 3)"
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
                "value": "You and party members"
              },
              {
                "label": "Area of Effect",
                "value": "3×3~7×7"
              },
              {
                "label": "Duration",
                "value": "40 + (Skill Level × 40) seconds"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "43"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "46"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "49"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "52"
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
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 5301,
          "imageFile": "5301.png",
          "name": "ABR Mastery",
          "maxLevel": 10,
          "prerequisiteText": "Manufacture Machine Lv. 1",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/ABR_Mastery",
          "description": "Improve your summoned ABR (Automatic Battle Robot).",
          "levelDetails": [
            {
              "level": 1,
              "text": "Improved ABR Stats (ATK 800, MHP : 40000, DEF : 20, MDEF : 4, FLEE : 10)"
            },
            {
              "level": 2,
              "text": "Improved ABR Stats (ATK 1400, MHP : 80000, DEF : 40, MDEF : 8, FLEE : 20)"
            },
            {
              "level": 3,
              "text": "Improved ABR Stats (ATK 2000, MHP : 120000, DEF : 60, MDEF : 12, FLEE : 30)"
            },
            {
              "level": 4,
              "text": "Improved ABR Stats (ATK 2600, MHP : 160000, DEF : 80, MDEF : 16, FLEE : 40)"
            },
            {
              "level": 5,
              "text": "Improved ABR Stats (ATK 3200, MHP : 200000, DEF : 100, MDEF : 20, FLEE : 50)"
            },
            {
              "level": 6,
              "text": "Improved ABR Stats (ATK 3800, MHP : 240000, DEF : 120, MDEF : 24, FLEE : 60)"
            },
            {
              "level": 7,
              "text": "Improved ABR Stats (ATK 4400, MHP : 280000, DEF : 140, MDEF : 28, FLEE : 70)"
            },
            {
              "level": 8,
              "text": "Improved ABR Stats (ATK 5000, MHP : 320000, DEF : 160, MDEF : 32, FLEE : 80)"
            },
            {
              "level": 9,
              "text": "Improved ABR Stats (ATK 5600, MHP : 360000, DEF : 180, MDEF : 36, FLEE : 90)"
            },
            {
              "level": 10,
              "text": "Improved ABR Stats (ATK 6200, MHP : 400000, DEF : 200, MDEF : 40, FLEE : 100)"
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
          "iconUrl": "assets/divine-pride/skills/5301.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5301",
          "tree": {
            "idx": 11,
            "row": 1,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 5297,
                "level": 1,
                "name": "Manufacture Machine",
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
                      "effect": "Improved ABR Stats (ATK 800, MHP : 40000, DEF : 20, MDEF : 4, FLEE : 10)",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Improved ABR Stats (ATK 1400, MHP : 80000, DEF : 40, MDEF : 8, FLEE : 20)",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Improved ABR Stats (ATK 2000, MHP : 120000, DEF : 60, MDEF : 12, FLEE : 30)",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Improved ABR Stats (ATK 2600, MHP : 160000, DEF : 80, MDEF : 16, FLEE : 40)",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Improved ABR Stats (ATK 3200, MHP : 200000, DEF : 100, MDEF : 20, FLEE : 50)",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "Improved ABR Stats (ATK 3800, MHP : 240000, DEF : 120, MDEF : 24, FLEE : 60)",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "Improved ABR Stats (ATK 4400, MHP : 280000, DEF : 140, MDEF : 28, FLEE : 70)",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "Improved ABR Stats (ATK 5000, MHP : 320000, DEF : 160, MDEF : 32, FLEE : 80)",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "Improved ABR Stats (ATK 5600, MHP : 360000, DEF : 180, MDEF : 36, FLEE : 90)",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "Improved ABR Stats (ATK 6200, MHP : 400000, DEF : 200, MDEF : 40, FLEE : 100)",
                      "sp-cost": "0"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [
            {
              "skillName": "ABR Mastery",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/meister/rebalance_1.md",
              "section": "3.1",
              "notes": [
                "Increases Atk bonus from 2500 to 6200 based on level 10.",
                "Increases MaxHP bonus from 20000 to 400000 based on level 10."
              ],
              "specRows": [
                {
                  "label": "Atk Bonus",
                  "before": "2500",
                  "after": "6200",
                  "scope": "Lv 10",
                  "source": "Increases Atk bonus from 2500 to 6200 based on level 10."
                },
                {
                  "label": "Maxhp Bonus",
                  "before": "20000",
                  "after": "400000",
                  "scope": "Lv 10",
                  "source": "Increases MaxHP bonus from 20000 to 400000 based on level 10."
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
          "id": 6002,
          "imageFile": "6002.png",
          "name": "Spark Blaster",
          "maxLevel": 10,
          "prerequisiteText": "Madogear License 1, Manufacture Machine 1",
          "group": "Active",
          "type": "Ranged Physical",
          "target": "Single Target",
          "recoversAp": "2",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Spark_Blaster",
          "description": "Available while riding in a madoogear.\nCauses a self-destruct, dealing 2 ranged physical damage to the target and an area around it.\nIgnores the target's physical defense, Damage is additionally increased depending on the user's base level and POW.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK Per Hit 1150%/Range: 7x7 Cells"
            },
            {
              "level": 2,
              "text": "ATK Per Hit 2050%/Range: 7x7 Cells"
            },
            {
              "level": 3,
              "text": "ATK Per Hit 2950%/Range: 7x7 Cells"
            },
            {
              "level": 4,
              "text": "ATK Per Hit 3850%/Range: 7x7 Cells"
            },
            {
              "level": 5,
              "text": "ATK Per Hit 4750%/Range: 7x7 Cells"
            },
            {
              "level": 6,
              "text": "ATK Per Hit 5650%/Range: 9x9 Cells"
            },
            {
              "level": 7,
              "text": "ATK Per Hit 6550%/Range: 9x9 Cells"
            },
            {
              "level": 8,
              "text": "ATK Per Hit 7450%/Range: 9x9 Cells"
            },
            {
              "level": 9,
              "text": "ATK Per Hit 8350%/Range: 9x9 Cells"
            },
            {
              "level": 10,
              "text": "ATK Per Hit 9250%/Range: 9x9 Cells"
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "1.5 seconds",
          "castDelay": "0.25 seconds",
          "cooldown": "0.5 seconds",
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
          "spCost": "44 + (Skill Level × 4)",
          "duration": "60 + (Skill Level × 60) seconds",
          "castRange": "9 cells",
          "areaOfEffect": "7 x 7~9 x 9",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6002.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6002",
          "tree": {
            "idx": 13,
            "row": 1,
            "col": 6,
            "columns": 7,
            "requirements": [
              {
                "id": 5297,
                "level": 1,
                "name": "Manufacture Machine",
                "visible": true
              }
            ]
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
                "value": "44 + (Skill Level × 4)"
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
                "value": "0.25 seconds"
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
                "value": "Single Target"
              },
              {
                "label": "Duration",
                "value": "60 + (Skill Level × 60) seconds"
              },
              {
                "label": "AP Generated",
                "value": "2"
              },
              {
                "label": "Damage",
                "value": "9,250% ATK per hit"
              }
            ],
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
                      "sp-cost": "48"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "52"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "56"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "64"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "area-of-effect": "9x9",
                      "sp-cost": "68"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "area-of-effect": "9x9",
                      "sp-cost": "72"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "area-of-effect": "9x9",
                      "sp-cost": "76"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "area-of-effect": "9x9",
                      "sp-cost": "80"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "area-of-effect": "9x9",
                      "sp-cost": "84"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [
            {
              "skillName": "Spark Blaster",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/meister/rebalance_3.md",
              "section": "2.3",
              "notes": [
                "Reduces skill cooldown from 0.7 seconds to 0.5 seconds.",
                "Increases base damage from 7750%Atk to 9250%Atk per hit based on level 10."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "0.7 seconds",
                  "after": "0.5 seconds",
                  "scope": "",
                  "source": "Reduces skill cooldown from 0.7 seconds to 0.5 seconds."
                },
                {
                  "label": "Damage",
                  "before": "7750%Atk",
                  "after": "9250%Atk per hit",
                  "scope": "Lv 10",
                  "source": "Increases base damage from 7750%Atk to 9250%Atk per hit based on level 10."
                }
              ]
            },
            {
              "skillName": "Spark Blaster",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/meister/rebalance_4.md",
              "section": "2.3",
              "notes": [
                "Increases base damage from 9250%Atk to 14600%Atk based on level 10."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "9250%Atk",
                  "after": "14600%Atk",
                  "scope": "Lv 10",
                  "source": "Increases base damage from 9250%Atk to 14600%Atk based on level 10."
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
          "id": 6004,
          "imageFile": "6004.png",
          "name": "Mighty Smash",
          "maxLevel": 10,
          "prerequisiteText": "Axe Stomp 3",
          "group": "Active",
          "type": "Melee Physical",
          "target": "Instant Cast",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Mighty_Smash",
          "description": "Axe-only skill.\nSwing your axe wildly, dealing 5 melee physical damage to targets in an area around you.\nIf Axe Stomp is active, inflicts stronger melee physical damage 7 times.\nDamage is additionally increased depending on the user's base level and POW.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK Per Hit 205%/230%(Axe Stomp)\nArea of Effect: 3x3Cells"
            },
            {
              "level": 2,
              "text": "ATK Per Hit 385%/410%(Axe Stomp)\nArea of Effect: 3x3Cells"
            },
            {
              "level": 3,
              "text": "ATK Per Hit 565%/590%(Axe Stomp)\nArea of Effect: 3x3Cells"
            },
            {
              "level": 4,
              "text": "ATK Per Hit 745%/770%(Axe Stomp)\nArea of Effect: 3x3Cells"
            },
            {
              "level": 5,
              "text": "ATK Per Hit 925%/950%(Axe Stomp)\nArea of Effect: 5x5Cells"
            },
            {
              "level": 6,
              "text": "ATK Per Hit 1105%/1130%(Axe Stomp)\nArea of Effect: 5x5Cells"
            },
            {
              "level": 7,
              "text": "ATK Per Hit 1285%/1310%(Axe Stomp)\nArea of Effect: 5x5Cells"
            },
            {
              "level": 8,
              "text": "ATK Per Hit 1465%/1490%(Axe Stomp)\nArea of Effect: 5x5Cells"
            },
            {
              "level": 9,
              "text": "ATK Per Hit 1645%/1670%(Axe Stomp)\nArea of Effect: 7x7Cells"
            },
            {
              "level": 10,
              "text": "ATK Per Hit 1825%/1850%(Axe Stomp)\nArea of Effect: 7x7Cells"
            }
          ],
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
                  "value": "71"
                },
                {
                  "level": 3,
                  "value": "74"
                },
                {
                  "level": 4,
                  "value": "77"
                },
                {
                  "level": 5,
                  "value": "80"
                },
                {
                  "level": 6,
                  "value": "83"
                },
                {
                  "level": 7,
                  "value": "86"
                },
                {
                  "level": 8,
                  "value": "89"
                },
                {
                  "level": 9,
                  "value": "92"
                },
                {
                  "level": 10,
                  "value": "95"
                }
              ]
            }
          ],
          "spCost": "65 + (Skill Level × 3)",
          "castDelay": "0.7 seconds",
          "cooldown": "0.5 seconds",
          "castRange": "Melee",
          "areaOfEffect": "3 x 3~7 x 7",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6004.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6004",
          "tree": {
            "idx": 14,
            "row": 2,
            "col": 0,
            "columns": 7,
            "requirements": [
              {
                "id": 5295,
                "level": 3,
                "name": "Axe Stomp",
                "visible": true
              }
            ]
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
                "value": "65 + (Skill Level × 3)"
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
                "label": "Cast Range",
                "value": "Melee"
              },
              {
                "label": "Target",
                "value": "Instant Cast"
              },
              {
                "label": "Damage",
                "value": "1,825% ATK per hit/1,850% ATK per hit (A x e Stomp)"
              }
            ],
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
                      "sp-cost": "68"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "3x3",
                      "sp-cost": "71"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "3x3",
                      "sp-cost": "74"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "3x3",
                      "sp-cost": "77"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "5x5",
                      "sp-cost": "80"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "area-of-effect": "5x5",
                      "sp-cost": "83"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "area-of-effect": "5x5",
                      "sp-cost": "86"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "area-of-effect": "5x5",
                      "sp-cost": "89"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "92"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "95"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [
            {
              "skillName": "Mighty Smash",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/meister/rebalance_3.md",
              "section": "2.2",
              "notes": [
                "Increases skill cooldown from 0.3 seconds to 0.5 seconds.",
                "Adds global cooldown by 0.25 seconds.",
                "Increases SP consumption from 78 to 95 based on level 10.",
                "Reduces base damage from 3100%/3150%Atk to 1825%/1850%Atk per hit based on level 10.",
                "Increases number of hit from 3/5 hits to 5/7 hits.",
                "While under Axe Stomp buff, increases factor weight of POW in skill formula from 7 to 10."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "0.3 seconds",
                  "after": "0.5 seconds",
                  "scope": "",
                  "source": "Increases skill cooldown from 0.3 seconds to 0.5 seconds."
                },
                {
                  "label": "SP Cost",
                  "before": "78",
                  "after": "95",
                  "scope": "Lv 10",
                  "source": "Increases SP consumption from 78 to 95 based on level 10."
                },
                {
                  "label": "Damage",
                  "before": "3100%/3150%Atk",
                  "after": "1825%/1850%Atk per hit",
                  "scope": "Lv 10",
                  "source": "Reduces base damage from 3100%/3150%Atk to 1825%/1850%Atk per hit based on level 10."
                },
                {
                  "label": "Number Of Hit",
                  "before": "3/5 hits",
                  "after": "5/7 hits",
                  "scope": "",
                  "source": "Increases number of hit from 3/5 hits to 5/7 hits."
                }
              ]
            },
            {
              "skillName": "Mighty Smash",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/meister/rebalance_4.md",
              "section": "2.2",
              "notes": [
                "Increases global cooldown from 0.25 seconds to 0.7 seconds based on level 10.",
                "Increases base damage from 1825%/1850%(Axe Stomp)Atk to 2480%/2500%(Axe Stomp)Atk per hit based on level 10."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "0.25 seconds",
                  "after": "0.7 seconds",
                  "scope": "Lv 10",
                  "source": "Increases global cooldown from 0.25 seconds to 0.7 seconds based on level 10."
                },
                {
                  "label": "Damage",
                  "before": "1825%/1850%(A x e Stomp)Atk",
                  "after": "2480%/2500%(A x e Stomp)Atk per hit",
                  "scope": "Lv 10",
                  "source": "Increases base damage from 1825%/1850%(Axe Stomp)Atk to 2480%/2500%(Axe Stomp)Atk per hit based on level 10."
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
          "id": 5296,
          "imageFile": "5296.png",
          "name": "Rush Quake",
          "maxLevel": 10,
          "prerequisiteText": "Axe Stomp Lv. 5",
          "group": "Active(AP)",
          "type": "Melee Physical",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "150",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Rush_Quake",
          "description": "Approaches the target within 9 cells, dealing Melee Physical damage to nearby enemies including the target and inflicting Quake effect on them for 30 seconds\nDeals more damage to Formless and Insect monsters.\nDamage increases additionally based on the Base Lv and POW.\nIn addition, grants Rush effect for (30 X Skill Level) seconds.\nRush Effect: Increases Melee and Ranged Physical Damage by (5 X Skill Level)%.\nQuake Effect: 50% increased Melee and Ranged Physical Damage taken by the target",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 3600%/ 3750% to Formless/Insect enemies\nEffective range: : 3x3 cells"
            },
            {
              "level": 2,
              "text": "ATK 7200%/ 7500% to Formless/Insect enemies\nEffective range: : 3x3 cells"
            },
            {
              "level": 3,
              "text": "ATK 10800%/ 11250% to Formless/Insect enemies\nEffective range: : 3x3 cells"
            },
            {
              "level": 4,
              "text": "ATK 14400%/ 15000% to Formless/Insect enemies\nEffective range: : 3x3 cells"
            },
            {
              "level": 5,
              "text": "ATK 18000%/ 18750% to Formless/Insect enemies\nEffective range: : 5x5 cells"
            },
            {
              "level": 6,
              "text": "ATK 21600%/ 22500% to Formless/Insect enemies\nEffective range: : 5x5 cells"
            },
            {
              "level": 7,
              "text": "ATK 25200%/ 26250% to Formless/Insect enemies\nEffective range: : 5x5 cells"
            },
            {
              "level": 8,
              "text": "ATK 28800%/ 30000% to Formless/Insect enemies\nEffective range: : 5x5 cells"
            },
            {
              "level": 9,
              "text": "ATK 32400%/ 33750% to Formless/Insect enemies\nEffective range: : 7x7 cells"
            },
            {
              "level": 10,
              "text": "ATK 36000%/ 37500% to Formless/Insect enemies\nEffective range: : 7x7 cells"
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
          "spCost": "150",
          "castRange": "9 cells",
          "areaOfEffect": "3 x 3 ~ 7 x 7",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5296.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5296",
          "tree": {
            "idx": 15,
            "row": 2,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 5295,
                "level": 5,
                "name": "Axe Stomp",
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
                "label": "Cast Range",
                "value": "9 cells"
              },
              {
                "label": "Target",
                "value": "1 Target"
              },
              {
                "label": "Area of Effect",
                "value": "3 x 3 ~ 7 x 7"
              },
              {
                "label": "AP Consumed",
                "value": "150"
              },
              {
                "label": "Damage",
                "value": "36,000% ATK"
              }
            ],
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
                      "effect": "Effective range: : 3 x 3 cells",
                      "sp-cost": "150"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Effective range: : 3 x 3 cells",
                      "sp-cost": "150"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Effective range: : 3 x 3 cells",
                      "sp-cost": "150"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Effective range: : 3 x 3 cells",
                      "sp-cost": "150"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Effective range: : 5 x 5 cells",
                      "sp-cost": "150"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "Effective range: : 5 x 5 cells",
                      "sp-cost": "150"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "Effective range: : 5 x 5 cells",
                      "sp-cost": "150"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "Effective range: : 5 x 5 cells",
                      "sp-cost": "150"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "Effective range: : 7 x 7 cells",
                      "sp-cost": "150"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "Effective range: : 7 x 7 cells",
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
              "skillName": "Rush Quake",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/meister/rebalance_1.md",
              "section": "3.4",
              "notes": [
                "Grants Rush buff to the user for 300 seconds based on level 10.",
                "Rush : Increases melee and long ranged physical damage by 50% (based on level 10).",
                "Inflicts Quake debuff to the target and surrounding enemies around the target for 30 seconds.",
                "Quake : Increases damage taken from melee and long ranged physical damage by 50%."
              ],
              "specRows": []
            },
            {
              "skillName": "Rush Quake",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/meister/rebalance_2.md",
              "section": "3.2",
              "notes": [
                "Removes 0.5 seconds delay after skill.",
                "Increases damage from 7500%/11000%(formless and insect race)Atk to 36000%/37500%(formless and insect race)Atk based on level 10."
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
                  "label": "Damage",
                  "before": "7500%/11000%(formless and insect race)Atk",
                  "after": "36000%/37500%(formless and insect race)Atk",
                  "scope": "Lv 10",
                  "source": "Increases damage from 7500%/11000%(formless and insect race)Atk to 36000%/37500%(formless and insect race)Atk based on level 10."
                }
              ]
            },
            {
              "skillName": "Rush Quake",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/meister/rebalance_4.md",
              "section": "2.5",
              "notes": [
                "Buff no longer be removed by Dispell or Clearance."
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
          "id": 5302,
          "imageFile": "5302.png",
          "name": "ABR: Battle Warrior",
          "maxLevel": 4,
          "prerequisiteText": "ABR Mastery Lv. 1",
          "group": "Active",
          "type": "Summon",
          "target": "Self",
          "recoversAp": "20",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/ABR%3A_Battle_Warrior",
          "description": "Consumes 1 ABR Capsule. Summon the combat support ABR, Battle Warrior.\nBattle Warrior's stats increase, depending on your stats and ABR Mastery level.\nWhile Battle Warrior is summoned, Power Swing damage increases. (It inflicts damage once, but displays the damage in 2 parts.)",
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
                }
              ]
            }
          ],
          "spCost": "20 + (Skill Level x 10)",
          "duration": "60 + (Skill Level × 60) seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5302.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5302",
          "tree": {
            "idx": 18,
            "row": 2,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 5301,
                "level": 1,
                "name": "ABR Mastery",
                "visible": true
              }
            ]
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
                "value": "20 + (Skill Level x 10)"
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
          "id": 5303,
          "imageFile": "5303.png",
          "name": "ABR: Dual Cannon",
          "maxLevel": 4,
          "prerequisiteText": "ABR Mastery Lv. 3 and ABR: Battle Warrior Lv. 2",
          "group": "Active",
          "type": "Summon",
          "target": "Self",
          "recoversAp": "20",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/ABR%3A_Dual_Cannon",
          "description": "Consumes 1 ABR Capsule. Summon the support ABR, Dual Cannon.\nDual Cannon's stats increase, depending on your stats and ABR Mastery level.\nWhile Dual Cannon is summoned, Knuckle Boost, Vulcan Arm, and Arm Cannon attack twice.",
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
                }
              ]
            }
          ],
          "spCost": "20 + (Skill Level x 10)",
          "duration": "60 + (Skill Level × 60) seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5303.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5303",
          "tree": {
            "idx": 19,
            "row": 2,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 5301,
                "level": 3,
                "name": "ABR Mastery",
                "visible": true
              },
              {
                "id": 5302,
                "level": 2,
                "name": "ABR: Battle Warrior",
                "visible": true
              }
            ]
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
                "value": "20 + (Skill Level x 10)"
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
          "id": 6003,
          "imageFile": "6003.png",
          "name": "Triple Laser",
          "maxLevel": 5,
          "prerequisiteText": "Spark Blaster 5",
          "group": "Active",
          "type": "Ranged Physical",
          "target": "Single Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Triple_Laser",
          "description": "Available while riding in a madoogear.\nFires three beam attacks at the target, inflicting long-distance physical damage three times.\nDamage is additionally increased according to the user's base level and POW, and critical damage is applied according to the user's critical probability.\nIn the case of critical damage, half of the total critical damage increase options are applied.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK Per Hit 1450%"
            },
            {
              "level": 2,
              "text": "ATK Per Hit 2350%"
            },
            {
              "level": 3,
              "text": "ATK Per Hit 3250%"
            },
            {
              "level": 4,
              "text": "ATK Per Hit 4150%"
            },
            {
              "level": 5,
              "text": "ATK Per Hit 5050%"
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "1 second",
          "castDelay": "0.25 seconds",
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
          "spCost": "35 + (Skill Level × 5)",
          "castRange": "9 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6003.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6003",
          "tree": {
            "idx": 20,
            "row": 2,
            "col": 6,
            "columns": 7,
            "requirements": [
              {
                "id": 6002,
                "level": 5,
                "name": "Spark Blaster",
                "visible": true
              }
            ]
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
                "value": "0.5 seconds"
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
                "value": "0.35 seconds"
              },
              {
                "label": "Cast Range",
                "value": "9 cells"
              },
              {
                "label": "Target",
                "value": "Single Target"
              },
              {
                "label": "Damage",
                "value": "5,050% ATK per hit"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
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
          "balanceNotes": [
            {
              "skillName": "Triple Laser",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/meister/rebalance_3.md",
              "section": "2.4",
              "notes": [
                "Increases skill cooldown from 0.25 seconds to 0.35 seconds.",
                "Adds global cooldown by 0.25 seconds.",
                "Increases base damage from 3300%Atk to 5050%Atk per hit based on level 5.",
                "Increases factor weight of POW in skill formula from 10 to 12."
              ],
              "specRows": [
                {
                  "label": "Cooldown",
                  "before": "0.25 seconds",
                  "after": "0.35 seconds",
                  "scope": "",
                  "source": "Increases skill cooldown from 0.25 seconds to 0.35 seconds."
                },
                {
                  "label": "Damage",
                  "before": "3300%Atk",
                  "after": "5050%Atk per hit",
                  "scope": "Lv 5",
                  "source": "Increases base damage from 3300%Atk to 5050%Atk per hit based on level 5."
                },
                {
                  "label": "Factor Weight Of Pow In Skill Formula",
                  "before": "10",
                  "after": "12",
                  "scope": "",
                  "source": "Increases factor weight of POW in skill formula from 10 to 12."
                }
              ]
            },
            {
              "skillName": "Triple Laser",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/meister/rebalance_4.md",
              "section": "2.4",
              "notes": [
                "Increases base damage from 5050%Atk to 6400%Atk per hit based on level 5."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "5050%Atk",
                  "after": "6400%Atk per hit",
                  "scope": "Lv 5",
                  "source": "Increases base damage from 5050%Atk to 6400%Atk per hit based on level 5."
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
          "id": 6506,
          "imageFile": "6506.png",
          "name": "Rush Strike",
          "maxLevel": 5,
          "prerequisiteText": "Rush Quake 5",
          "group": "Active",
          "type": "Melee physical",
          "target": "Single target",
          "recoversAp": "2",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Two-handed axe exclusive skill.\nRush towards the target and strike it down with the axe, deals melee physical damage to the target and surrounding enemies around the target.\nDeals additional damage depends on user's base level and POW.\nHowever, this skill cannot be used when equipping Madogear.",
          "levelDetails": [
            {
              "level": 1,
              "text": "3500% Atk / area of effect: 3 x 3 cells."
            },
            {
              "level": 2,
              "text": "7000% Atk / area of effect: 5 x 5 cells."
            },
            {
              "level": 3,
              "text": "10500% Atk / area of effect: 5 x 5 cells."
            },
            {
              "level": 4,
              "text": "14000% Atk / area of effect: 7 x 7 cells."
            },
            {
              "level": 5,
              "text": "17500% Atk / area of effect: 7 x 7 cells."
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6506.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6506",
          "tree": {
            "idx": 22,
            "row": 3,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 5296,
                "level": 5,
                "name": "Rush Quake",
                "visible": true
              }
            ]
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
              },
              {
                "label": "Damage",
                "value": "17,500% ATK"
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
          "id": 6507,
          "imageFile": "6507.png",
          "name": "Powerful Swing",
          "maxLevel": 5,
          "prerequisiteText": "Rush Strike 3",
          "group": "Active",
          "type": "Melee physical",
          "target": "Single target",
          "recoversAp": "2",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Two-handed axe exclusive skill.\nStrikes the target with all your might with an axe, deals melee physical damage to the target and surrounding enemies around the target for 5 hits.\nIf Axe Stomp buff is active, the skill will deal more damage.\nDeals additional damage depends on user's base level and POW.\nHowever, this skill cannot be used when equipping Madogear.",
          "levelDetails": [
            {
              "level": 1,
              "text": "1150% Atk / 1350% Atk (Axe Stomp) per hit / area of effect: 3 x 3 cells."
            },
            {
              "level": 2,
              "text": "2000% Atk / 2300% Atk (Axe Stomp) per hit / area of effect: 3 x 3 cells."
            },
            {
              "level": 3,
              "text": "2850% Atk / 3250% Atk (Axe Stomp) per hit / area of effect: 5 x 5 cells."
            },
            {
              "level": 4,
              "text": "3700% Atk / 4200% Atk (Axe Stomp) per hit / area of effect: 5 x 5 cells."
            },
            {
              "level": 5,
              "text": "4550% Atk / 5150% Atk (Axe Stomp) per hit / area of effect: 7 x 7 cells."
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6507.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6507",
          "tree": {
            "idx": 23,
            "row": 3,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 6506,
                "level": 3,
                "name": "Rush Strike",
                "visible": true
              }
            ]
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
              },
              {
                "label": "Damage",
                "value": "4,550% ATK per hit/5,150% ATK per hit (A x e Stomp)"
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
                      "area-of-effect": "5x5"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "5x5"
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
          "id": 5304,
          "imageFile": "5304.png",
          "name": "ABR: Mother Net",
          "maxLevel": 4,
          "prerequisiteText": "ABR Mastery Lv. 5, ABR: Battle Warrior Lv. 3, and ABR: Dual Cannon Lv. 3",
          "group": "Active",
          "type": "Summon",
          "target": "Self",
          "recoversAp": "20",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/ABR%3A_Mother_Net",
          "description": "Consumes 1 ABR Capsule. Summon the support ABR, Mother Net.\nMother Net's stats increase, depending on your stats and ABR Mastery level.",
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
                }
              ]
            }
          ],
          "spCost": "20 + (Skill Level x 10)",
          "duration": "60 + (Skill Level × 60) seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5304.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5304",
          "tree": {
            "idx": 26,
            "row": 3,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 5301,
                "level": 5,
                "name": "ABR Mastery",
                "visible": true
              },
              {
                "id": 5302,
                "level": 3,
                "name": "ABR: Battle Warrior",
                "visible": true
              },
              {
                "id": 5303,
                "level": 3,
                "name": "ABR: Dual Cannon",
                "visible": true
              }
            ]
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
                "value": "20 + (Skill Level x 10)"
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
          "id": 6508,
          "imageFile": "6508.png",
          "name": "Energy Cannonade",
          "maxLevel": 5,
          "prerequisiteText": "Triple Laser 3",
          "group": "Active",
          "type": "Ranged Physical",
          "target": "Single target",
          "recoversAp": "3",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Can only be used when equipping Madogear.\nFires the energy sphere to the target, deals long ranged physical damage to the target and surrounding enemies around the target for 7 hits.\nSkill damage ignores the target's physical defense, deals additional damage depends on user's base level and POW.",
          "levelDetails": [
            {
              "level": 1,
              "text": "1000% Atk per hit / area of effect: 5 x 5 cells."
            },
            {
              "level": 2,
              "text": "1750% Atk per hit / area of effect: 5 x 5 cells."
            },
            {
              "level": 3,
              "text": "2500% Atk per hit / area of effect: 7 x 7 cells."
            },
            {
              "level": 4,
              "text": "3250% Atk per hit / area of effect: 7 x 7 cells."
            },
            {
              "level": 5,
              "text": "4000% Atk per hit / area of effect: 9 x 9 cells."
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "1.5 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "1.25 seconds",
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/6508.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/6508",
          "tree": {
            "idx": 27,
            "row": 3,
            "col": 6,
            "columns": 7,
            "requirements": [
              {
                "id": 6003,
                "level": 3,
                "name": "Triple Laser",
                "visible": true
              }
            ]
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
                "value": "1.5 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.5 seconds"
              },
              {
                "label": "Cooldown",
                "value": "1.25 seconds"
              },
              {
                "label": "Target",
                "value": "Single target"
              },
              {
                "label": "AP Generated",
                "value": "3"
              },
              {
                "label": "Damage",
                "value": "4,000% ATK per hit"
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
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 5305,
          "imageFile": "5305.png",
          "name": "ABR: Infinity",
          "maxLevel": 4,
          "prerequisiteText": "ABR Mastery Lv. 10, ABR: Battle Warrior Lv. 4, ABR: Dual Cannon Lv. 4, and ABR: Mother Net Lv. 4",
          "group": "Active (AP)",
          "type": "Summon",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "200",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/ABR%3A_Infinity",
          "description": "Consumes 5 ABR Capsules. Summon the combat support ABR, Infinity.\nInfinity's stats increase, depending on your stats and ABR Mastery level.",
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
                }
              ]
            }
          ],
          "spCost": "20 + (Skill Level × 10)",
          "duration": "60 + (Skill Level × 60) seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5305.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5305",
          "tree": {
            "idx": 33,
            "row": 4,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 5301,
                "level": 10,
                "name": "ABR Mastery",
                "visible": true
              },
              {
                "id": 5302,
                "level": 4,
                "name": "ABR: Battle Warrior",
                "visible": true
              },
              {
                "id": 5303,
                "level": 4,
                "name": "ABR: Dual Cannon",
                "visible": true
              },
              {
                "id": 5304,
                "level": 4,
                "name": "ABR: Mother Net",
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
                "value": "4"
              },
              {
                "label": "SP Cost",
                "value": "20 + (Skill Level × 10)"
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
                "value": "60 + (Skill Level × 60) seconds"
              },
              {
                "label": "AP Consumed",
                "value": "200"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
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
      "id": "previous-1",
      "label": "Mechanic",
      "pointLimit": 69,
      "tree": {
        "columns": 7,
        "rows": 6
      },
      "skills": [
        {
          "id": 2255,
          "imageFile": "2255.png",
          "name": "Madogear License",
          "maxLevel": 5,
          "prerequisiteText": "Mechanic Basic",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Madogear_License",
          "description": "Allows the Mechanic to use Mado Gear. Higher Level Increases ATK and decreases the movement penalty in Mado Gear.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Atk +15 / Movement Speed -40%"
            },
            {
              "level": 2,
              "text": "Atk +30 / Movement Speed -30%"
            },
            {
              "level": 3,
              "text": "Atk +45 / Movement Speed -20%"
            },
            {
              "level": 4,
              "text": "Atk +60 / Movement Speed -10%"
            },
            {
              "level": 5,
              "text": "Atk +75 / No Movement Speed penalty"
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
                  "value": "15"
                },
                {
                  "level": 2,
                  "value": "30"
                },
                {
                  "level": 3,
                  "value": "45"
                },
                {
                  "level": 4,
                  "value": "60"
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
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2255.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2255",
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
                    "id": "movement-speed",
                    "label": "Movement Speed"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "atk": "+15",
                      "movement-speed": "-40%",
                      "sp-cost": "0",
                      "data-1": "15",
                      "data-2": "40"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "atk": "+30",
                      "movement-speed": "-30%",
                      "sp-cost": "0",
                      "data-1": "30",
                      "data-2": "30"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "atk": "+45",
                      "movement-speed": "-20%",
                      "sp-cost": "0",
                      "data-1": "45",
                      "data-2": "20"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "atk": "+60",
                      "movement-speed": "-10%",
                      "sp-cost": "0",
                      "data-1": "60",
                      "data-2": "10"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "atk": "+75",
                      "effect": "No Movement Speed penalty",
                      "sp-cost": "0",
                      "data-1": "75",
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
          "id": 2276,
          "imageFile": "2276.png",
          "name": "Axe Mastery",
          "maxLevel": 10,
          "prerequisiteText": "Mechanic Basic",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Axe_Mastery",
          "description": "Increase ATK and Accuracy rate when caster equips an axe (passive), Maces also receive a small percentage of this skill.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK +5 / Accuracy Rate +3"
            },
            {
              "level": 2,
              "text": "ATK +10 / Accuracy Rate +6"
            },
            {
              "level": 3,
              "text": "ATK +15 / Accuracy Rate +9"
            },
            {
              "level": 4,
              "text": "ATK +20 / Accuracy Rate +12"
            },
            {
              "level": 5,
              "text": "ATK +25 / Accuracy Rate +15"
            },
            {
              "level": 6,
              "text": "ATK +30 / Accuracy Rate +18"
            },
            {
              "level": 7,
              "text": "ATK +35 / Accuracy Rate +21"
            },
            {
              "level": 8,
              "text": "ATK +40 / Accuracy Rate +24"
            },
            {
              "level": 9,
              "text": "ATK +45 / Accuracy Rate +27"
            },
            {
              "level": 10,
              "text": "ATK +50 / Accuracy Rate +30"
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
                },
                {
                  "level": 6,
                  "value": "18"
                },
                {
                  "level": 7,
                  "value": "21"
                },
                {
                  "level": 8,
                  "value": "24"
                },
                {
                  "level": 9,
                  "value": "27"
                },
                {
                  "level": 10,
                  "value": "30"
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
                },
                {
                  "level": 6,
                  "value": "24"
                },
                {
                  "level": 7,
                  "value": "28"
                },
                {
                  "level": 8,
                  "value": "32"
                },
                {
                  "level": 9,
                  "value": "36"
                },
                {
                  "level": 10,
                  "value": "40"
                }
              ]
            },
            {
              "label": "Data 4",
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
                },
                {
                  "level": 6,
                  "value": "12"
                },
                {
                  "level": 7,
                  "value": "14"
                },
                {
                  "level": 8,
                  "value": "16"
                },
                {
                  "level": 9,
                  "value": "18"
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
          "iconUrl": "assets/divine-pride/skills/2276.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2276",
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
                      "atk": "+5",
                      "accuracy-rate": "+3",
                      "sp-cost": "0",
                      "data-1": "5",
                      "data-2": "3",
                      "data-3": "4",
                      "data-4": "2"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "atk": "+10",
                      "accuracy-rate": "+6",
                      "sp-cost": "0",
                      "data-1": "10",
                      "data-2": "6",
                      "data-3": "8",
                      "data-4": "4"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "atk": "+15",
                      "accuracy-rate": "+9",
                      "sp-cost": "0",
                      "data-1": "15",
                      "data-2": "9",
                      "data-3": "12",
                      "data-4": "6"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "atk": "+20",
                      "accuracy-rate": "+12",
                      "sp-cost": "0",
                      "data-1": "20",
                      "data-2": "12",
                      "data-3": "16",
                      "data-4": "8"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "atk": "+25",
                      "accuracy-rate": "+15",
                      "sp-cost": "0",
                      "data-1": "25",
                      "data-2": "15",
                      "data-3": "20",
                      "data-4": "10"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "atk": "+30",
                      "accuracy-rate": "+18",
                      "sp-cost": "0",
                      "data-1": "30",
                      "data-2": "18",
                      "data-3": "24",
                      "data-4": "12"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "atk": "+35",
                      "accuracy-rate": "+21",
                      "sp-cost": "0",
                      "data-1": "35",
                      "data-2": "21",
                      "data-3": "28",
                      "data-4": "14"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "atk": "+40",
                      "accuracy-rate": "+24",
                      "sp-cost": "0",
                      "data-1": "40",
                      "data-2": "24",
                      "data-3": "32",
                      "data-4": "16"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "atk": "+45",
                      "accuracy-rate": "+27",
                      "sp-cost": "0",
                      "data-1": "45",
                      "data-2": "27",
                      "data-3": "36",
                      "data-4": "18"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "atk": "+50",
                      "accuracy-rate": "+30",
                      "sp-cost": "0",
                      "data-1": "50",
                      "data-2": "30",
                      "data-3": "40",
                      "data-4": "20"
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
          "id": 2277,
          "imageFile": "2277.png",
          "name": "Fire Earth Research",
          "maxLevel": 5,
          "prerequisiteText": "Mechanic Basic",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Fire_Earth_Research",
          "description": "After researching Fire and Earth Element monsters, Mechanic gains further understanding of them, increasing damage and resistance against these monsters.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Resistance +10 / ATK +10"
            },
            {
              "level": 2,
              "text": "Resistance +20 / ATK +20"
            },
            {
              "level": 3,
              "text": "Resistance +30 / ATK +30"
            },
            {
              "level": 4,
              "text": "Resistance +40 / ATK +40"
            },
            {
              "level": 5,
              "text": "Resistance +50 / ATK +50"
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
          "iconUrl": "assets/divine-pride/skills/2277.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2277",
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
                    "id": "resistance",
                    "label": "Resistance"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "resistance": "+10",
                      "atk": "+10",
                      "sp-cost": "0",
                      "data-1": "10",
                      "data-2": "10"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "resistance": "+20",
                      "atk": "+20",
                      "sp-cost": "0",
                      "data-1": "20",
                      "data-2": "20"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "resistance": "+30",
                      "atk": "+30",
                      "sp-cost": "0",
                      "data-1": "30",
                      "data-2": "30"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "resistance": "+40",
                      "atk": "+40",
                      "sp-cost": "0",
                      "data-1": "40",
                      "data-2": "40"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "resistance": "+50",
                      "atk": "+50",
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
          "balanceNotes": [],
          "api": {
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2275,
          "imageFile": "2275.png",
          "name": "Repair",
          "maxLevel": 5,
          "prerequisiteText": "Madogear License 2",
          "group": "Active / Recovery",
          "type": "",
          "target": "Player or Caster",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Repair",
          "description": "Enable to repair (recover) Madogear or other Madogears. Requires a <Repair Kit> and consumes 1 Magic Gear Fuel.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Cast Range 5 Cell / MaxHP 4% recovery"
            },
            {
              "level": 2,
              "text": "Cast Range 6 Cell / MaxHP 7% recovery"
            },
            {
              "level": 3,
              "text": "Cast Range 7 Cell / MaxHP 13% recovery"
            },
            {
              "level": 4,
              "text": "Cast Range 8 Cell / MaxHP 17% recovery"
            },
            {
              "level": 5,
              "text": "Cast Range 9 Cell / MaxHP 23% recovery"
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
                  "value": "4"
                },
                {
                  "level": 2,
                  "value": "7"
                },
                {
                  "level": 3,
                  "value": "13"
                },
                {
                  "level": 4,
                  "value": "17"
                },
                {
                  "level": 5,
                  "value": "23"
                }
              ]
            },
            {
              "label": "Data 2",
              "values": [
                {
                  "level": 1,
                  "value": "12392"
                },
                {
                  "level": 2,
                  "value": "12392"
                },
                {
                  "level": 3,
                  "value": "12393"
                },
                {
                  "level": 4,
                  "value": "12393"
                },
                {
                  "level": 5,
                  "value": "12394"
                }
              ]
            }
          ],
          "spCost": "20 + (Skill Level × 5)",
          "castRange": "5 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2275.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2275",
          "tree": {
            "idx": 7,
            "row": 1,
            "col": 0,
            "columns": 7,
            "requirements": [
              {
                "id": 2255,
                "level": 2,
                "name": "Madogear License",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Recovery Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "20 + (Skill Level × 5)"
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
                "value": "0 seconds"
              },
              {
                "label": "Cast Range",
                "value": "5 cells"
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
                      "effect": "Cast Range 5 cells / Ma x HP 4% recovery",
                      "sp-cost": "25",
                      "range": "5 cells",
                      "data-1": "4",
                      "data-2": "12392"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Cast Range 6 cells / Ma x HP 7% recovery",
                      "sp-cost": "30",
                      "range": "6 cells",
                      "data-1": "7",
                      "data-2": "12392"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Cast Range 7 cells / Ma x HP 13% recovery",
                      "sp-cost": "35",
                      "range": "7 cells",
                      "data-1": "13",
                      "data-2": "12393"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Cast Range 8 cells / Ma x HP 17% recovery",
                      "sp-cost": "40",
                      "range": "8 cells",
                      "data-1": "17",
                      "data-2": "12393"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Cast Range 9 cells / Ma x HP 23% recovery",
                      "sp-cost": "45",
                      "range": "9 cells",
                      "data-1": "23",
                      "data-2": "12394"
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
          "id": 2256,
          "imageFile": "2256.png",
          "name": "Knuckle Boost",
          "maxLevel": 5,
          "prerequisiteText": "Madogear License 1",
          "group": "Active / Damage",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Knuckle_Boost",
          "description": "Inflicts Ranged Physical Damage to a single target.\nDamage increases based on BaseLv and DEX.\nRange: 11 Cells.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 340%"
            },
            {
              "level": 2,
              "text": "ATK 580%"
            },
            {
              "level": 3,
              "text": "ATK 820%"
            },
            {
              "level": 4,
              "text": "ATK 1060%"
            },
            {
              "level": 5,
              "text": "ATK 1300%"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0.2 seconds",
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
                  "value": "200"
                },
                {
                  "level": 2,
                  "value": "250"
                },
                {
                  "level": 3,
                  "value": "300"
                },
                {
                  "level": 4,
                  "value": "350"
                },
                {
                  "level": 5,
                  "value": "400"
                }
              ]
            }
          ],
          "spCost": "Skill Level × 5",
          "castRange": "11 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2256.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2256",
          "tree": {
            "idx": 8,
            "row": 1,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 2255,
                "level": 1,
                "name": "Madogear License",
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
                "value": "Skill Level × 5"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "0.2 seconds"
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
                "value": "11 cells"
              },
              {
                "label": "Target",
                "value": "Enemy"
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
                      "sp-cost": "5",
                      "range": "11 cells",
                      "atk": "200"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "10",
                      "range": "11 cells",
                      "atk": "250"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "15",
                      "range": "11 cells",
                      "atk": "300"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "20",
                      "range": "11 cells",
                      "atk": "350"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "25",
                      "range": "11 cells",
                      "atk": "400"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [
            {
              "skillName": "Knuckle Boost",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/meister/rebalance_1.md",
              "section": "3.7",
              "notes": [
                "Increases damage from 1100%Atk to 1300%Atk based on level 5.",
                "Reduces variable casting time from 0.5 seconds to 0.2 seconds based on level 5."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "1100%Atk",
                  "after": "1300%Atk",
                  "scope": "Lv 5",
                  "source": "Increases damage from 1100%Atk to 1300%Atk based on level 5."
                },
                {
                  "label": "Variable Casting Time",
                  "before": "0.5 seconds",
                  "after": "0.2 seconds",
                  "scope": "Lv 5",
                  "source": "Reduces variable casting time from 0.5 seconds to 0.2 seconds based on level 5."
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
          "id": 2262,
          "imageFile": "2262.png",
          "name": "Acceleration",
          "maxLevel": 3,
          "prerequisiteText": "Madogear License 1",
          "group": "Active / Buff",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Acceleration",
          "description": "Increase Madogear's movement speed. An Accelerator must be equipped to cast and consumes 1 Magic Gear Fuel.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Skill Duration 60 sec."
            },
            {
              "level": 2,
              "text": "Skill Duration 90 sec."
            },
            {
              "level": 3,
              "text": "Skill Duration 120 sec."
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
                }
              ]
            }
          ],
          "spCost": "Skill Level × 20",
          "duration": "30 + (Skill Level × 30) seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2262.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2262",
          "tree": {
            "idx": 9,
            "row": 1,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 2255,
                "level": 1,
                "name": "Madogear License",
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
                "value": "3"
              },
              {
                "label": "SP Cost",
                "value": "Skill Level × 20"
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
              },
              {
                "label": "Duration",
                "value": "30 + (Skill Level × 30) seconds"
              }
            ],
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
                      "sp-cost": "20",
                      "data-1": "60000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Skill Duration 90 sec",
                      "sp-cost": "40",
                      "data-1": "90000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Skill Duration 120 sec",
                      "sp-cost": "60",
                      "data-1": "120000"
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
          "id": 2266,
          "imageFile": "2266.png",
          "name": "Remodel Mainframe",
          "maxLevel": 4,
          "prerequisiteText": "Madogear License 4",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Remodel_Mainframe",
          "description": "Remodel Magic Gear's main frame\nto increase defense and overheat limit.\nIf Magic Gear receives damage, it will\ncontinue to receive damage.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Defense +40 / Overheat Limit 200"
            },
            {
              "level": 2,
              "text": "Defense +60 / Overheat Limit 280"
            },
            {
              "level": 3,
              "text": "Defense +80 / Overheat Limit 360"
            },
            {
              "level": 4,
              "text": "Defense +100 / Overheat Limit 450"
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
                  "value": "60"
                },
                {
                  "level": 3,
                  "value": "80"
                },
                {
                  "level": 4,
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
                  "value": "130"
                },
                {
                  "level": 3,
                  "value": "210"
                },
                {
                  "level": 4,
                  "value": "300"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2266.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2266",
          "tree": {
            "idx": 10,
            "row": 1,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 2255,
                "level": 4,
                "name": "Madogear License",
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
                    "id": "defense",
                    "label": "Defense"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "defense": "+40",
                      "effect": "Overheat Limit 200",
                      "sp-cost": "0",
                      "data-1": "40",
                      "data-2": "10",
                      "data-3": "50"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "defense": "+60",
                      "effect": "Overheat Limit 280",
                      "sp-cost": "0",
                      "data-1": "60",
                      "data-2": "20",
                      "data-3": "130"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "defense": "+80",
                      "effect": "Overheat Limit 360",
                      "sp-cost": "0",
                      "data-1": "80",
                      "data-2": "30",
                      "data-3": "210"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "defense": "+100",
                      "effect": "Overheat Limit 450",
                      "sp-cost": "0",
                      "data-1": "100",
                      "data-2": "40",
                      "data-3": "300"
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
          "id": 2280,
          "imageFile": "2280.png",
          "name": "Axe Tornado",
          "maxLevel": 5,
          "prerequisiteText": "Axe Training 1",
          "group": "Active / Damage",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Axe_Tornado",
          "description": "Deals melee physical damage by spining axes.\nDamage increases based on BaseLv and VIT.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 380%/ Range 5 x 5"
            },
            {
              "level": 2,
              "text": "ATK 560%/ Range 5 x 5"
            },
            {
              "level": 3,
              "text": "ATK 740%/ Range 7 x 7"
            },
            {
              "level": 4,
              "text": "ATK 920%/ Range 7 x 7"
            },
            {
              "level": 5,
              "text": "ATK 1100%/ Range 7 x 7"
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
                  "value": "3"
                }
              ]
            }
          ],
          "spCost": "45",
          "cooldown": "[4.5 − (Skill Level × 0.5)] seconds",
          "areaOfEffect": "5 x 5 ~ 7 x 7",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2280.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2280",
          "tree": {
            "idx": 11,
            "row": 1,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 2276,
                "level": 1,
                "name": "Axe Mastery",
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
                "value": "45"
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
                "value": "[4.5 − (Skill Level × 0.5)] seconds"
              },
              {
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "Area of Effect",
                "value": "5 x 5 ~ 7 x 7"
              },
              {
                "label": "Damage",
                "value": "1,100% ATK"
              }
            ],
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
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "45",
                      "atk": "250",
                      "data-1": "20",
                      "data-2": "2"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "45",
                      "atk": "300",
                      "data-1": "40",
                      "data-2": "2"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "45",
                      "atk": "350",
                      "data-1": "60",
                      "data-2": "3"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "45",
                      "atk": "400",
                      "data-1": "80",
                      "data-2": "3"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "45",
                      "atk": "450",
                      "data-1": "100",
                      "data-2": "3"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [
            {
              "skillName": "Axe Tornado",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/meister/rebalance_1.md",
              "section": "3.9",
              "notes": [
                "Increases damage while under Axe Stomp buff (on Vit 130) from 1360%Atk to 1740%Atk based on level 5."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "1360%Atk (while under A x e Stomp buff (on Vit 130))",
                  "after": "1740%Atk (while under A x e Stomp buff (on Vit 130))",
                  "scope": "Lv 5",
                  "source": "Increases damage while under Axe Stomp buff (on Vit 130) from 1360%Atk to 1740%Atk based on level 5."
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
          "id": 2278,
          "imageFile": "2278.png",
          "name": "Axe Boomerang",
          "maxLevel": 5,
          "prerequisiteText": "Axe Mastery 1",
          "group": "Active / Damage",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Axe_Boomerang",
          "description": "Axe exclusive skill (One-handed and Two-handed) Throws axe like a boomerang at a target, causing damage and knocking it back. The weight of the axe increases damage done by the skill.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Damage 300% + Axe Weight / Skill Range 5 cells"
            },
            {
              "level": 2,
              "text": "Damage 350% + Axe Weight / Skill Range 6 cells"
            },
            {
              "level": 3,
              "text": "Damage 400% + Axe Weight / Skill Range 7 cells"
            },
            {
              "level": 4,
              "text": "Damage 450% + Axe Weight / Skill Range 8 cells"
            },
            {
              "level": 5,
              "text": "Damage 500% + Axe Weight / Skill Range 9 cells"
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
            }
          ],
          "spCost": "18 + (Skill Level × 2)",
          "cooldown": "[5.5 − (Skill Level × 0.5)] seconds",
          "castRange": "(Skill Level + 3) cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2278.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2278",
          "tree": {
            "idx": 12,
            "row": 1,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 2276,
                "level": 1,
                "name": "Axe Mastery",
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
                "value": "18 + (Skill Level × 2)"
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
                "value": "[5.5 − (Skill Level × 0.5)] seconds"
              },
              {
                "label": "Cast Range",
                "value": "(Skill Level + 3) cells"
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
                      "effect": "Damage 300% + A x e Weight / Skill Range 5 cells",
                      "sp-cost": "20",
                      "range": "5 cells",
                      "atk": "200",
                      "data-1": "2"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Damage 350% + A x e Weight / Skill Range 6 cells",
                      "sp-cost": "22",
                      "range": "6 cells",
                      "atk": "240",
                      "data-1": "3"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Damage 400% + A x e Weight / Skill Range 7 cells",
                      "sp-cost": "24",
                      "range": "7 cells",
                      "atk": "280",
                      "data-1": "4"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Damage 450% + A x e Weight / Skill Range 8 cells",
                      "sp-cost": "26",
                      "range": "8 cells",
                      "atk": "320",
                      "data-1": "5"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Damage 500% + A x e Weight / Skill Range 9 cells",
                      "sp-cost": "28",
                      "range": "9 cells",
                      "atk": "360",
                      "data-1": "6"
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
          "id": 2281,
          "imageFile": "2281.png",
          "name": "FAW Silver Sniper",
          "maxLevel": 5,
          "prerequisiteText": "Fire Earth Research 2",
          "group": "Active / FAW Set",
          "type": "",
          "target": "Ground",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/FAW_Silver_Sniper",
          "description": "Set FAW (Fixed Automatic Weapon) on the ground that executes long distance attacks. Maximum of 2 FAWs can be set. Consumes 2 Steel and 1 Iron. Requires an Oridecon Hammer and Mini Furnace.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK +0 / Duration 20sec."
            },
            {
              "level": 2,
              "text": "ATK +200 / Duration 30sec."
            },
            {
              "level": 3,
              "text": "ATK +400 / Duration 40sec."
            },
            {
              "level": 4,
              "text": "ATK +800 / Duration 50sec."
            },
            {
              "level": 5,
              "text": "ATK +1000 / Duration 60sec."
            }
          ],
          "variableCastTime": "0 seconds",
          "castDelay": "0 seconds",
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
                  "value": "0"
                },
                {
                  "level": 2,
                  "value": "200"
                },
                {
                  "level": 3,
                  "value": "400"
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
          "spCost": "20 + (Skill Level × 5)",
          "fixedCastTime": "[2 − (Skill Level × 0.2)] seconds",
          "duration": "[10 + (Skill Level × 10)] seconds",
          "castRange": "2 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2281.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2281",
          "tree": {
            "idx": 13,
            "row": 1,
            "col": 6,
            "columns": 7,
            "requirements": [
              {
                "id": 2277,
                "level": 2,
                "name": "Fire Earth Research",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / FAW Set Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "20 + (Skill Level × 5)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "[2 − (Skill Level × 0.2)] seconds"
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
                "value": "2 cells"
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
                    "id": "duration",
                    "label": "Duration"
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
                    "id": "range",
                    "label": "Range"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "duration": "20 seconds",
                      "atk": "+0",
                      "sp-cost": "25",
                      "range": "2 cells",
                      "data-1": "0",
                      "data-2": "20000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "30 seconds",
                      "atk": "+200",
                      "sp-cost": "30",
                      "range": "2 cells",
                      "data-1": "200",
                      "data-2": "30000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "40 seconds",
                      "atk": "+400",
                      "sp-cost": "35",
                      "range": "2 cells",
                      "data-1": "400",
                      "data-2": "40000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "50 seconds",
                      "atk": "+800",
                      "sp-cost": "40",
                      "range": "2 cells",
                      "data-1": "800",
                      "data-2": "50000"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "60 seconds",
                      "atk": "+1000",
                      "sp-cost": "45",
                      "range": "2 cells",
                      "data-1": "1000",
                      "data-2": "60000"
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
          "id": 2257,
          "imageFile": "2257.png",
          "name": "Pile Bunker",
          "maxLevel": 3,
          "prerequisiteText": "Knuckle Boost 2",
          "group": "Active / Damage(Special)",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Pile_Bunker",
          "description": "Pull out deadly drills from the Madogear to inflict damage and nullify Defensive magic skills cast on the target. Nullifies [Kyrie Eleison, Assumptio, Mental Strength, Gentle Touch-Change, Gentle Touch-Revitalize, Auto Guard, Reflect Shield, Defending Aura, Reflect Damage, Prestige, and Banding]. Requires a Pile Bunker to cast.",
          "levelDetails": [
            {
              "level": 1,
              "text": "3 Cell Range / Chance to cancel Defense magic skill 40%"
            },
            {
              "level": 2,
              "text": "4 Cell Range / Chance to cancel Defense magic skill 55%"
            },
            {
              "level": 3,
              "text": "5 Cell Range / Chance to cancel Defense magic skill 70%"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "2 seconds",
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
              "label": "Atk %",
              "values": [
                {
                  "level": 1,
                  "value": "200"
                },
                {
                  "level": 2,
                  "value": "250"
                },
                {
                  "level": 3,
                  "value": "300"
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
                  "value": "55"
                },
                {
                  "level": 3,
                  "value": "70"
                }
              ]
            }
          ],
          "spCost": "50",
          "castRange": "[2 + (Skill Level × 1)] cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2257.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2257",
          "tree": {
            "idx": 14,
            "row": 2,
            "col": 0,
            "columns": 7,
            "requirements": [
              {
                "id": 2256,
                "level": 2,
                "name": "Knuckle Boost",
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
                "value": "0 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "2 seconds"
              },
              {
                "label": "Cooldown",
                "value": "5 seconds"
              },
              {
                "label": "Cast Range",
                "value": "[2 + (Skill Level × 1)] cells"
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
                      "effect": "3 cells Range / Chance to cancel Defense magic skill 40%",
                      "sp-cost": "50",
                      "range": "3 cells",
                      "atk": "200",
                      "data-1": "40"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "4 cells Range / Chance to cancel Defense magic skill 55%",
                      "sp-cost": "50",
                      "range": "3 cells",
                      "atk": "250",
                      "data-1": "55"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "5 cells Range / Chance to cancel Defense magic skill 70%",
                      "sp-cost": "50",
                      "range": "3 cells",
                      "atk": "300",
                      "data-1": "70"
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
          "id": 2258,
          "imageFile": "2258.png",
          "name": "Vulcan Arm",
          "maxLevel": 3,
          "prerequisiteText": "Knuckle Boost 2",
          "group": "Active / Damage",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "1 Vulcan Bullet",
          "irowikiUrl": "https://irowiki.org/wiki/Vulcan_Arm",
          "description": "Shoots a target, dealing ranged physical damage to the surrounding targets.\nConsumes one Vulcan Bullet. Damage increases based on BaseLv and DEX.\nRange: 13 Cells.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 230% / Range 5 x 5"
            },
            {
              "level": 2,
              "text": "ATK 460% / Range 5 x 5"
            },
            {
              "level": 3,
              "text": "ATK 690% / Range 5 x 5"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0.2 seconds",
          "castDelay": "0.1 seconds",
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
                  "value": "12"
                },
                {
                  "level": 3,
                  "value": "15"
                }
              ]
            },
            {
              "label": "Range",
              "values": [
                {
                  "level": 1,
                  "value": "13 cells"
                },
                {
                  "level": 2,
                  "value": "13 cells"
                },
                {
                  "level": 3,
                  "value": "13 cells"
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
                  "value": "125"
                },
                {
                  "level": 3,
                  "value": "150"
                }
              ]
            }
          ],
          "spCost": "6 + Skill Level x 3",
          "castRange": "13 cells",
          "areaOfEffect": "5 x 5",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2258.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2258",
          "tree": {
            "idx": 15,
            "row": 2,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 2256,
                "level": 2,
                "name": "Knuckle Boost",
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
                "value": "3"
              },
              {
                "label": "SP Cost",
                "value": "6 + Skill Level x 3"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "0.2 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0.1 seconds"
              },
              {
                "label": "Cooldown",
                "value": "0 seconds"
              },
              {
                "label": "Cast Range",
                "value": "13 cells"
              },
              {
                "label": "Target",
                "value": "Enemy"
              },
              {
                "label": "Area of Effect",
                "value": "5 x 5"
              },
              {
                "label": "Ammunition",
                "value": "1 Vulcan Bullet"
              },
              {
                "label": "Damage",
                "value": "690% ATK"
              }
            ],
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
                      "sp-cost": "9",
                      "range": "13 cells",
                      "atk": "100"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "12",
                      "range": "13 cells",
                      "atk": "125"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "15",
                      "range": "13 cells",
                      "atk": "150"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [
            {
              "skillName": "Vulcan Arm",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/meister/rebalance_1.md",
              "section": "3.6",
              "notes": [
                "Increases damage from 420%Atk to 690%Atk based on level 3."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "420%Atk",
                  "after": "690%Atk",
                  "scope": "Lv 3",
                  "source": "Increases damage from 420%Atk to 690%Atk based on level 3."
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
          "id": 2263,
          "imageFile": "2263.png",
          "name": "Hover",
          "maxLevel": 1,
          "prerequisiteText": "Acceleration 1",
          "group": "Active / Buff",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Hover",
          "description": "Make Madogear hover over the ground to escape traps and any other magic attacks. A Hovering Booster must be equiped to cast and consumes 1 Magic Gear Fuel.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Skill Duration 90 sec."
            }
          ],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "25"
                }
              ]
            },
            {
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "90000"
                }
              ]
            }
          ],
          "spCost": "25",
          "castDelay": "None",
          "cooldown": "None",
          "duration": "90 seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2263.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2263",
          "tree": {
            "idx": 16,
            "row": 2,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 2262,
                "level": 1,
                "name": "Acceleration",
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
                "value": "1"
              },
              {
                "label": "SP Cost",
                "value": "25"
              },
              {
                "label": "Cast Delay",
                "value": "None"
              },
              {
                "label": "Cooldown",
                "value": "None"
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
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Skill Duration 90 sec",
                      "sp-cost": "25",
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
          "id": 2268,
          "imageFile": "2268.png",
          "name": "Elemental Shift",
          "maxLevel": 4,
          "prerequisiteText": "Remodel Mainframe 2",
          "group": "Active / Buff",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Elemental_Shift",
          "description": "Change Madogear's property. Must have a <Shape Shifter> equipped and consumes 2 Magic Gear Fuel and 1 Enchanted Stone.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Change to fire property / Consume 3 Scarlet Points"
            },
            {
              "level": 2,
              "text": "Change to earth property / Consume 3 Lime Green Points"
            },
            {
              "level": 3,
              "text": "Change to wind property / Consume 3 Yellow Wish Points"
            },
            {
              "level": 4,
              "text": "Change to water property / Consume 3 Indigo Points"
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
                }
              ]
            },
            {
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "6360"
                },
                {
                  "level": 2,
                  "value": "6363"
                },
                {
                  "level": 3,
                  "value": "6362"
                },
                {
                  "level": 4,
                  "value": "6361"
                }
              ]
            },
            {
              "label": "Data 2",
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
                  "value": "2"
                },
                {
                  "level": 3,
                  "value": "4"
                },
                {
                  "level": 4,
                  "value": "1"
                }
              ]
            }
          ],
          "spCost": "100",
          "duration": "5 minutes",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2268.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2268",
          "tree": {
            "idx": 17,
            "row": 2,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 2266,
                "level": 2,
                "name": "Remodel Mainframe",
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
                "value": "4"
              },
              {
                "label": "SP Cost",
                "value": "100"
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
                      "effect": "Change to fire property / Consume 3 Scarlet Points",
                      "sp-cost": "100",
                      "data-1": "6360",
                      "data-2": "300000",
                      "data-3": "3"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Change to earth property / Consume 3 Lime Green Points",
                      "sp-cost": "100",
                      "data-1": "6363",
                      "data-2": "300000",
                      "data-3": "2"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Change to wind property / Consume 3 Yellow Wish Points",
                      "sp-cost": "100",
                      "data-1": "6362",
                      "data-2": "300000",
                      "data-3": "4"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Change to water property / Consume 3 Indigo Points",
                      "sp-cost": "100",
                      "data-1": "6361",
                      "data-2": "300000",
                      "data-3": "1"
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
          "id": 2267,
          "imageFile": "2267.png",
          "name": "Suicidal Destruction",
          "maxLevel": 3,
          "prerequisiteText": "Remodel Mainframe 2",
          "group": "Active / Damage",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Suicidal_Destruction",
          "description": "Make Magic Gear self-destruct\ncausing huge damage in an area around it.\nCaster will lose Magic Gear and all SP will\nbe drained. [Suicide Device] is required to\nuse this skill. Consumes 3 Magic Gear Fuel.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Range 5x5 cells"
            },
            {
              "level": 2,
              "text": "Range 7x7 cells"
            },
            {
              "level": 3,
              "text": "Range 9x9 cells"
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "castDelay": "0 seconds",
          "cooldown": "300 seconds",
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
                }
              ]
            }
          ],
          "spCost": "5",
          "variableCastTime": "[2.5 − (Skill Level × 0.5)] seconds",
          "areaOfEffect": "5 x 5 ~ 9 x 9",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2267.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2267",
          "tree": {
            "idx": 18,
            "row": 2,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 2266,
                "level": 2,
                "name": "Remodel Mainframe",
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
                "value": "3"
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
                "value": "[2.5 − (Skill Level × 0.5)] seconds"
              },
              {
                "label": "Cast Delay",
                "value": "0 seconds"
              },
              {
                "label": "Cooldown",
                "value": "300 seconds"
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
                    "id": "data-1",
                    "label": "Data 1"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "area-of-effect": "5x5",
                      "sp-cost": "200",
                      "data-1": "2"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "200",
                      "data-1": "3"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "9x9",
                      "sp-cost": "200",
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
          "id": 2279,
          "imageFile": "2279.png",
          "name": "Power Swing",
          "maxLevel": 10,
          "prerequisiteText": "Axe Boomerang 3",
          "group": "Active / Damage",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Power_Swing",
          "description": "Deals melee physical damage, and stuns the target.\nDamage increases based on BaseLv, STR and Dex.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 400%"
            },
            {
              "level": 2,
              "text": "ATK 500%"
            },
            {
              "level": 3,
              "text": "ATK 600%"
            },
            {
              "level": 4,
              "text": "ATK 700%"
            },
            {
              "level": 5,
              "text": "ATK 800%"
            },
            {
              "level": 6,
              "text": "ATK 900%"
            },
            {
              "level": 7,
              "text": "ATK 1000%"
            },
            {
              "level": 8,
              "text": "ATK 1100%"
            },
            {
              "level": 9,
              "text": "ATK 1200%"
            },
            {
              "level": 10,
              "text": "ATK 1300%"
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
              "label": "Atk %",
              "values": [
                {
                  "level": 1,
                  "value": "400"
                },
                {
                  "level": 2,
                  "value": "500"
                },
                {
                  "level": 3,
                  "value": "600"
                },
                {
                  "level": 4,
                  "value": "700"
                },
                {
                  "level": 5,
                  "value": "800"
                },
                {
                  "level": 6,
                  "value": "900"
                },
                {
                  "level": 7,
                  "value": "1000"
                },
                {
                  "level": 8,
                  "value": "1100"
                },
                {
                  "level": 9,
                  "value": "1200"
                },
                {
                  "level": 10,
                  "value": "1300"
                }
              ]
            }
          ],
          "spCost": "18 + (Skill Level × 2)",
          "castDelay": "1 second",
          "castRange": "Melee",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2279.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2279",
          "tree": {
            "idx": 19,
            "row": 2,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 2278,
                "level": 3,
                "name": "Axe Boomerang",
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
                "value": "18 + (Skill Level × 2)"
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
                "value": "Melee"
              },
              {
                "label": "Target",
                "value": "Enemy"
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
                    "id": "atk",
                    "label": "Atk %"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "20",
                      "atk": "400"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "22",
                      "atk": "500"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "24",
                      "atk": "600"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "26",
                      "atk": "700"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "28",
                      "atk": "800"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "30",
                      "atk": "900"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "32",
                      "atk": "1000"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "sp-cost": "34",
                      "atk": "1100"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "sp-cost": "36",
                      "atk": "1200"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "sp-cost": "38",
                      "atk": "1300"
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
          "id": 2282,
          "imageFile": "2282.png",
          "name": "FAW Magic Decoy",
          "maxLevel": 5,
          "prerequisiteText": "FAW Silver Sniper 2",
          "group": "Active / FAW Set",
          "type": "",
          "target": "Ground",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/FAW_Magic_Decoy",
          "description": "Set FAW (Fixed Automatic Weapon) on the ground that executes magic attacks. Maximum of 2 FAWs can be set. Consumes 2 Iron, 1 Brigan and 2 item among Scarlet Point, Yellow Wish Point, or Lime Green Point, or Indigo Point. Requires an Oridecon Hammer and Portable Furnace.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 300 / Duration 20sec."
            },
            {
              "level": 2,
              "text": "MATK 350 / Duration 30sec."
            },
            {
              "level": 3,
              "text": "MATK 400 / Duration 40sec."
            },
            {
              "level": 4,
              "text": "MATK 450 / Duration 50sec."
            },
            {
              "level": 5,
              "text": "MATK 500 / Duration 60sec."
            }
          ],
          "variableCastTime": "0 seconds",
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
          "spCost": "35 + (Skill Level × 5)",
          "fixedCastTime": "[2 − (Skill Level × 0.2)] seconds",
          "duration": "10 + (Skill Level × 10) seconds",
          "castRange": "2 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2282.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2282",
          "tree": {
            "idx": 20,
            "row": 2,
            "col": 6,
            "columns": 7,
            "requirements": [
              {
                "id": 2281,
                "level": 2,
                "name": "FAW Silver Sniper",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / FAW Set Skill"
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
                "value": "[2 − (Skill Level × 0.2)] seconds"
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
                "value": "2 cells"
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
                      "duration": "20 seconds",
                      "effect": "MATK 300",
                      "sp-cost": "40",
                      "range": "2 cells",
                      "data-1": "20000",
                      "data-2": "300"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "30 seconds",
                      "effect": "MATK 350",
                      "sp-cost": "45",
                      "range": "2 cells",
                      "data-1": "30000",
                      "data-2": "350"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "40 seconds",
                      "effect": "MATK 400",
                      "sp-cost": "50",
                      "range": "2 cells",
                      "data-1": "40000",
                      "data-2": "400"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "50 seconds",
                      "effect": "MATK 450",
                      "sp-cost": "55",
                      "range": "2 cells",
                      "data-1": "50000",
                      "data-2": "450"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "60 seconds",
                      "effect": "MATK 500",
                      "sp-cost": "60",
                      "range": "2 cells",
                      "data-1": "60000",
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
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2259,
          "imageFile": "2259.png",
          "name": "Flame Launcher",
          "maxLevel": 3,
          "prerequisiteText": "Vulcan Arm 1",
          "group": "Active / Damage",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Flame_Launcher",
          "description": "Set flames on the ground with a Flame Thrower to damage and inflict [Ignition] status to all targets that are inside of the range. Must have a Flame Thrower equipped. Consumes 1 Magic Gear Fuel and 20 SP.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Fire Property Damage 600% / Chance to curse [Ignition] status 30%"
            },
            {
              "level": 2,
              "text": "Fire Property Damage 900% / Chance to curse [Ignition] status 40%"
            },
            {
              "level": 3,
              "text": "Fire Property Damage 1200% / Chance to curse [Ignition] status 50%"
            }
          ],
          "fixedCastTime": "0.5 seconds",
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
              "label": "Atk %",
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
                  "value": "40"
                },
                {
                  "level": 3,
                  "value": "50"
                }
              ]
            },
            {
              "label": "Data 2",
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
            },
            {
              "label": "Data 3",
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
                }
              ]
            }
          ],
          "spCost": "20",
          "variableCastTime": "(Skill Level × 0.5) seconds",
          "castDelay": "[2.0 − (Skill Level × 0.5)] seconds",
          "castRange": "5 cells",
          "areaOfEffect": "5 x 5 ~ 9 x 9",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2259.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2259",
          "tree": {
            "idx": 21,
            "row": 3,
            "col": 0,
            "columns": 7,
            "requirements": [
              {
                "id": 2258,
                "level": 1,
                "name": "Vulcan Arm",
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
                "value": "3"
              },
              {
                "label": "SP Cost",
                "value": "20"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0.5 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "(Skill Level × 0.5) seconds"
              },
              {
                "label": "Cast Delay",
                "value": "[2.0 − (Skill Level × 0.5)] seconds"
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
                "value": "Enemy"
              },
              {
                "label": "Area of Effect",
                "value": "5 x 5 ~ 9 x 9"
              }
            ],
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
                      "effect": "Fire Property Damage 600% / Chance to curse [Ignition] status 30%",
                      "sp-cost": "20",
                      "range": "7 cells",
                      "atk": "100",
                      "data-1": "30",
                      "data-2": "7000",
                      "data-3": "2"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Fire Property Damage 900% / Chance to curse [Ignition] status 40%",
                      "sp-cost": "20",
                      "range": "7 cells",
                      "atk": "150",
                      "data-1": "40",
                      "data-2": "14000",
                      "data-3": "3"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Fire Property Damage 1200% / Chance to curse [Ignition] status 50%",
                      "sp-cost": "20",
                      "range": "7 cells",
                      "atk": "200",
                      "data-1": "50",
                      "data-2": "21000",
                      "data-3": "4"
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
          "id": 2260,
          "imageFile": "2260.png",
          "name": "Ice Launcher",
          "maxLevel": 3,
          "prerequisiteText": "Vulcan Arm 3",
          "group": "Active / Damage",
          "type": "",
          "target": "Ground",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Ice_Launcher",
          "description": "Use a quick freezer to give damage inflict [Freezing] / [Freeze] status to all targets that are inside of the range. Consumes 1 Liquid Condensed Bullet and 1 Magic Gear Fuel.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Water property Atk 600 % / 5x5 AoE"
            },
            {
              "level": 2,
              "text": "Water property Atk 900 % / 7x7 AoE"
            },
            {
              "level": 3,
              "text": "Water property Atk 1200 % / 9x9 AoE"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "1 second",
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
              "label": "Atk %",
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
          "spCost": "20",
          "castDelay": "(Skill Level) seconds",
          "castRange": "7 cells",
          "areaOfEffect": "5 x 5 ~ 9 x 9",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2260.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2260",
          "tree": {
            "idx": 22,
            "row": 3,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 2258,
                "level": 3,
                "name": "Vulcan Arm",
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
                "value": "3"
              },
              {
                "label": "SP Cost",
                "value": "20"
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
                "value": "(Skill Level) seconds"
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
                "value": "5 x 5 ~ 9 x 9"
              }
            ],
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
                      "effect": "5 x 5 AoE",
                      "sp-cost": "20",
                      "range": "7 cells",
                      "atk": "100",
                      "data-1": "2",
                      "data-2": "10",
                      "data-3": "30"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "7 x 7 AoE",
                      "sp-cost": "20",
                      "range": "7 cells",
                      "atk": "150",
                      "data-1": "3",
                      "data-2": "20",
                      "data-3": "40"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "9 x 9 AoE",
                      "sp-cost": "20",
                      "range": "7 cells",
                      "atk": "200",
                      "data-1": "4",
                      "data-2": "30",
                      "data-3": "50"
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
          "id": 2264,
          "imageFile": "2264.png",
          "name": "Front Slide",
          "maxLevel": 1,
          "prerequisiteText": "Hover 1",
          "group": "Active / Movement",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Front_Slide",
          "description": "Madogear rushes forward 7 cells and consumes 1 Magic Gear Fuel.",
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
          "spCost": "5",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2264.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2264",
          "tree": {
            "idx": 23,
            "row": 3,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 2263,
                "level": 1,
                "name": "Hover",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Movement Skill"
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
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
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
          "id": 2270,
          "imageFile": "2270.png",
          "name": "Infrared Scan",
          "maxLevel": 1,
          "prerequisiteText": "Elemental Shift 2",
          "group": "Active / Detect / Debuff",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Infrared_Scan",
          "description": "Scan 15 x 15 cells around caster with a infrared scanner and find hidden enemies. Decreases all enemies' flee rate by 30% if they are inside of the skill range. (Chance of success is 100%.)",
          "levelDetails": [
            {
              "level": 1,
              "text": "45 SP"
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
                  "value": "45"
                }
              ]
            }
          ],
          "spCost": "45",
          "duration": "3 seconds",
          "areaOfEffect": "15 x 15",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2270.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2270",
          "tree": {
            "idx": 24,
            "row": 3,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 2268,
                "level": 2,
                "name": "Elemental Shift",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Detect / Debuff Skill"
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
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "Area of Effect",
                "value": "15 x 15"
              },
              {
                "label": "Duration",
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
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "45 SP",
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
          "id": 2269,
          "imageFile": "2269.png",
          "name": "Cooldown",
          "maxLevel": 1,
          "prerequisiteText": "Suicidal Destruction 2",
          "group": "Active / Buff",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Cooldown",
          "description": "Cools down Madogear, resetting\nthe overheat counter and prevents overheating\nfrom occuring.\nMust have the [Cooling Device] accessory\nand consumes 2 Magic Gear Fuel.",
          "levelDetails": [],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "5 seconds",
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2269.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2269",
          "tree": {
            "idx": 25,
            "row": 3,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 2267,
                "level": 2,
                "name": "Suicidal Destruction",
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
                "value": "1"
              },
              {
                "label": "SP Cost",
                "value": "20"
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
                "value": "5 seconds"
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
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 2283,
          "imageFile": "2283.png",
          "name": "Divest FAW",
          "maxLevel": 1,
          "prerequisiteText": "FAW Silver Sniper 1",
          "group": "Active / Divest FAW",
          "type": "",
          "target": "FAW",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Divest_FAW",
          "description": "Disarms 1 active FAW from the ground. Also enables a chance to disarm other player's FAWs. Consumes 1 <Wrench>",
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
                  "value": "15"
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
          "spCost": "15",
          "castRange": "2 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2283.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2283",
          "tree": {
            "idx": 26,
            "row": 3,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 2281,
                "level": 1,
                "name": "FAW Silver Sniper",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Divest FAW Skill"
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
              },
              {
                "label": "Cast Range",
                "value": "2 cells"
              },
              {
                "label": "Target",
                "value": "FAW"
              }
            ],
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
          "id": 5006,
          "imageFile": "5006.png",
          "name": "Lava Flow",
          "maxLevel": 5,
          "prerequisiteText": "Fire Earth Research 1",
          "group": "",
          "type": "Active",
          "target": "Ground",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Lava_Flow",
          "description": "Cause Lava to erupt from the ground in the targeted cell for 5 seconds in a 7x7 area, dealing damage and inflicting stun and burning status. You cannot create more than 3 eruptions at a time.",
          "levelDetails": [
            {
              "level": 1,
              "text": "1000 fixed damage per 1/2 second / 10% Stun and Burning status chance"
            },
            {
              "level": 2,
              "text": "1200 fixed damage per 1/2 second / 20% Stun and Burning status chance"
            },
            {
              "level": 3,
              "text": "1400 fixed damage per 1/2 second / 30% Stun and Burning status chance"
            },
            {
              "level": 4,
              "text": "1600 fixed damage per 1/2 second / 40% Stun and Burning status chance"
            },
            {
              "level": 5,
              "text": "1800 fixed damage per 1/2 second / 50% Stun and Burning status chance"
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "1 second",
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
                  "value": "500"
                },
                {
                  "level": 2,
                  "value": "550"
                },
                {
                  "level": 3,
                  "value": "600"
                },
                {
                  "level": 4,
                  "value": "650"
                },
                {
                  "level": 5,
                  "value": "700"
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
            },
            {
              "label": "Data 3",
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
          "spCost": "50 + (Skill Level × 10)",
          "cooldown": "(11 − Skill Level) seconds",
          "duration": "5 seconds",
          "areaOfEffect": "7 x 7",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5006.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5006",
          "tree": {
            "idx": 27,
            "row": 3,
            "col": 6,
            "columns": 7,
            "requirements": [
              {
                "id": 2277,
                "level": 1,
                "name": "Fire Earth Research",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active"
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
                "value": "(11 − Skill Level) seconds"
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
                      "effect": "1000 fi x ed damage per 1 / 2 second / 10% Stun and Burning status chance",
                      "sp-cost": "60",
                      "range": "1 cells",
                      "data-1": "500",
                      "data-2": "1000",
                      "data-3": "100"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "1200 fi x ed damage per 1 / 2 second / 20% Stun and Burning status chance",
                      "sp-cost": "70",
                      "range": "1 cells",
                      "data-1": "550",
                      "data-2": "1200",
                      "data-3": "200"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "1400 fi x ed damage per 1 / 2 second / 30% Stun and Burning status chance",
                      "sp-cost": "80",
                      "range": "1 cells",
                      "data-1": "600",
                      "data-2": "1400",
                      "data-3": "300"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "1600 fi x ed damage per 1 / 2 second / 40% Stun and Burning status chance",
                      "sp-cost": "90",
                      "range": "1 cells",
                      "data-1": "650",
                      "data-2": "1600",
                      "data-3": "400"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "1800 fi x ed damage per 1 / 2 second / 50% Stun and Burning status chance",
                      "sp-cost": "100",
                      "range": "1 cells",
                      "data-1": "700",
                      "data-2": "1800",
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
          "id": 2261,
          "imageFile": "2261.png",
          "name": "Arm Cannon",
          "maxLevel": 5,
          "prerequisiteText": "Flame Launcher 2 / Ice Launcher 2",
          "group": "Active / Damage",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "1 Cannon Ball",
          "irowikiUrl": "https://irowiki.org/wiki/Arm_Cannon",
          "description": "Inflicts Ranged Physical Damage to all enemies in a set area around the targeted location.\nDamage increases based on BaseLv.\nEach cast consumes 1 Magic Gear Fuel and 1 Cannon Ball, the property of which depends the property of this skill.\nRange: 9 Cells.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 750% / Range 3 x 3"
            },
            {
              "level": 2,
              "text": "ATK 1100% / Range 3 x 3"
            },
            {
              "level": 3,
              "text": "ATK 1450% / Range 5 x 5"
            },
            {
              "level": 4,
              "text": "ATK 1800% / Range 5 x 5"
            },
            {
              "level": 5,
              "text": "ATK 2150% / Range 7 x 7"
            }
          ],
          "castDelay": "0.5 seconds",
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
                  "value": "11 cells"
                },
                {
                  "level": 4,
                  "value": "11 cells"
                },
                {
                  "level": 5,
                  "value": "13 cells"
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
                  "value": "700"
                },
                {
                  "level": 2,
                  "value": "1100"
                },
                {
                  "level": 3,
                  "value": "1500"
                },
                {
                  "level": 4,
                  "value": "1900"
                },
                {
                  "level": 5,
                  "value": "2300"
                }
              ]
            },
            {
              "label": "Data 3",
              "values": [
                {
                  "level": 1,
                  "value": "650"
                },
                {
                  "level": 2,
                  "value": "1000"
                },
                {
                  "level": 3,
                  "value": "1350"
                },
                {
                  "level": 4,
                  "value": "1700"
                },
                {
                  "level": 5,
                  "value": "2050"
                }
              ]
            },
            {
              "label": "Data 4",
              "values": [
                {
                  "level": 1,
                  "value": "600"
                },
                {
                  "level": 2,
                  "value": "900"
                },
                {
                  "level": 3,
                  "value": "1200"
                },
                {
                  "level": 4,
                  "value": "1500"
                },
                {
                  "level": 5,
                  "value": "1800"
                }
              ]
            }
          ],
          "spCost": "15 + (Skill Level × 15)",
          "fixedCastTime": "[0.6 − (Skill Level × 0.1)] seconds",
          "variableCastTime": "[1 + (Skill Level × 0.2)] seconds",
          "cooldown": "0.15 seconds",
          "castRange": "9 cells",
          "areaOfEffect": "3 x 3 ~ 5 x 5",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2261.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2261",
          "tree": {
            "idx": 29,
            "row": 4,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 2259,
                "level": 2,
                "name": "Flame Launcher",
                "visible": true
              },
              {
                "id": 2260,
                "level": 2,
                "name": "Ice Launcher",
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
                "value": "15 + (Skill Level × 15)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "[0.6 − (Skill Level × 0.1)] seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "[1 + (Skill Level × 0.2)] seconds"
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
                "label": "Cast Range",
                "value": "9 cells"
              },
              {
                "label": "Target",
                "value": "Enemy"
              },
              {
                "label": "Area of Effect",
                "value": "3 x 3 ~ 5 x 5"
              },
              {
                "label": "Ammunition",
                "value": "1 Cannon Ball"
              },
              {
                "label": "Damage",
                "value": "2,150% ATK"
              }
            ],
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
                    "id": "range",
                    "label": "Range"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "40",
                      "range": "9 cells",
                      "data-1": "1",
                      "data-2": "700",
                      "data-3": "650",
                      "data-4": "600"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "45",
                      "range": "9 cells",
                      "data-1": "1",
                      "data-2": "1100",
                      "data-3": "1000",
                      "data-4": "900"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "50",
                      "range": "11 cells",
                      "data-1": "2",
                      "data-2": "1500",
                      "data-3": "1350",
                      "data-4": "1200"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "55",
                      "range": "11 cells",
                      "data-1": "2",
                      "data-2": "1900",
                      "data-3": "1700",
                      "data-4": "1500"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "60",
                      "range": "13 cells",
                      "data-1": "3",
                      "data-2": "2300",
                      "data-3": "2050",
                      "data-4": "1800"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [
            {
              "skillName": "Arm Cannon",
              "versionId": "rebalance-1",
              "versionLabel": "Rebalance 1",
              "file": "rebalances/meister/rebalance_1.md",
              "section": "3.8",
              "notes": [
                "Increases damage from 1900%Atk to 2150%Atk based on level 5.",
                "Reduces cooldown from 0.3 seconds to 0.15 seconds based on level 5.",
                "Reduces delay after skill from 1 second to 0.5 seconds based on level 5.",
                "Increases area of effect from 5x5 cells to 7x7 cells based on level 5."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "1900%Atk",
                  "after": "2150%Atk",
                  "scope": "Lv 5",
                  "source": "Increases damage from 1900%Atk to 2150%Atk based on level 5."
                },
                {
                  "label": "Cooldown",
                  "before": "0.3 seconds",
                  "after": "0.15 seconds",
                  "scope": "Lv 5",
                  "source": "Reduces cooldown from 0.3 seconds to 0.15 seconds based on level 5."
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
                  "before": "5 x 5 cells",
                  "after": "7 x 7 cells",
                  "scope": "Lv 5",
                  "source": "Increases area of effect from 5x5 cells to 7x7 cells based on level 5."
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
          "id": 2265,
          "imageFile": "2265.png",
          "name": "Back Slide",
          "maxLevel": 1,
          "prerequisiteText": "Hover 1",
          "group": "Active / Movement",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Back_Slide",
          "description": "Madogear moves backward 7 cells and consumes 1 Magic Gear Fuel.",
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
          "spCost": "7",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2265.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2265",
          "tree": {
            "idx": 30,
            "row": 4,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 2263,
                "level": 1,
                "name": "Hover",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active / Movement Skill"
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
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
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
          "id": 2271,
          "imageFile": "2271.png",
          "name": "Analyze",
          "maxLevel": 3,
          "prerequisiteText": "Infrared Scan 1",
          "group": "Active / Debuff",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Analyze",
          "description": "Analyze a target's status and decreases physical/magic defensive strength of the target. Skill range is 9 cells. Duration is 20 seconds and consumes 1 Magic Gear Fuel.",
          "levelDetails": [
            {
              "level": 1,
              "text": "physical / magic defense 14% decrease"
            },
            {
              "level": 2,
              "text": "physical / magic defense 28% decrease"
            },
            {
              "level": 3,
              "text": "physical / magic defense 42% decrease"
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
                }
              ]
            },
            {
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "42"
                },
                {
                  "level": 2,
                  "value": "54"
                },
                {
                  "level": 3,
                  "value": "66"
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
                  "value": "28"
                },
                {
                  "level": 3,
                  "value": "42"
                }
              ]
            },
            {
              "label": "Data 3",
              "values": [
                {
                  "level": 1,
                  "value": "20000"
                },
                {
                  "level": 2,
                  "value": "20000"
                },
                {
                  "level": 3,
                  "value": "20000"
                }
              ]
            }
          ],
          "spCost": "30",
          "duration": "20 seconds",
          "castRange": "9 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2271.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2271",
          "tree": {
            "idx": 31,
            "row": 4,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 2270,
                "level": 1,
                "name": "Infrared Scan",
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
                "label": "Cast Range",
                "value": "9 cells"
              },
              {
                "label": "Target",
                "value": "Enemy"
              },
              {
                "label": "Duration",
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
                      "effect": "physical / magic defense 14% decrease",
                      "sp-cost": "30",
                      "range": "9 cells",
                      "data-1": "42",
                      "data-2": "14",
                      "data-3": "20000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "physical / magic defense 28% decrease",
                      "sp-cost": "30",
                      "range": "9 cells",
                      "data-1": "54",
                      "data-2": "28",
                      "data-3": "20000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "physical / magic defense 42% decrease",
                      "sp-cost": "30",
                      "range": "9 cells",
                      "data-1": "66",
                      "data-2": "42",
                      "data-3": "20000"
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
          "id": 2272,
          "imageFile": "2272.png",
          "name": "Magnetic Field",
          "maxLevel": 3,
          "prerequisiteText": "Cooldown 1",
          "group": "Active / Debuff",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Magnetic_Field",
          "description": "Immobilize all enemies that are inside of skill range with electro-magnetic waves. If caster or targets are in hovering state, they don't get skill effect. Also the magnetic field from the skill decreases target's SP continuously. Requires a <Magnetic Field Generator> and consumes 3 Magic Gear Fuel.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Prevents movement for 4 secs. / 50 SP reduction per sec."
            },
            {
              "level": 2,
              "text": "Prevents movement for 6 secs. / 50 SP reduction per sec."
            },
            {
              "level": 3,
              "text": "Prevents movement for 8 secs. / 50 SP reduction per sec."
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
                  "value": "50"
                },
                {
                  "level": 3,
                  "value": "50"
                }
              ]
            }
          ],
          "spCost": "90",
          "cooldown": "[25 − (Skill Level × 5)] seconds",
          "duration": "15 seconds",
          "areaOfEffect": "5 x 5",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2272.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2272",
          "tree": {
            "idx": 32,
            "row": 4,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 2269,
                "level": 1,
                "name": "Cooldown",
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
                "label": "SP Cost",
                "value": "90"
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
                "value": "[25 − (Skill Level × 5)] seconds"
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
                      "effect": "Prevents movement for 4 secs. / 50 SP reduction per sec",
                      "sp-cost": "60",
                      "data-1": "2",
                      "data-2": "4000",
                      "data-3": "50"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Prevents movement for 6 secs. / 50 SP reduction per sec",
                      "sp-cost": "70",
                      "data-1": "2",
                      "data-2": "6000",
                      "data-3": "50"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Prevents movement for 8 secs. / 50 SP reduction per sec",
                      "sp-cost": "80",
                      "data-1": "2",
                      "data-2": "8000",
                      "data-3": "50"
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
          "id": 2273,
          "imageFile": "2273.png",
          "name": "Neutral Barrier",
          "maxLevel": 3,
          "prerequisiteText": "Magnetic Field 2",
          "group": "Active / Buff",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Neutral_Barrier",
          "description": "Creates an energy field around the Caster, increasing DEF and MDEF of all targets in range and preventing all Long-range attacks from damaging the targets. Requires a <Barrier Builder> and consumes 1 Magic Gear Fuel.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Physical and Magic defense +15% / Duration 30 sec."
            },
            {
              "level": 2,
              "text": "Physical and Magic defense +20% / Duration 45 sec."
            },
            {
              "level": 3,
              "text": "Physical and Magic defense +25% / Duration 60 sec."
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
                  "value": "80"
                },
                {
                  "level": 2,
                  "value": "90"
                },
                {
                  "level": 3,
                  "value": "100"
                }
              ]
            },
            {
              "label": "Data 1",
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
                }
              ]
            },
            {
              "label": "Data 2",
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
                }
              ]
            }
          ],
          "spCost": "90",
          "cooldown": "[25 − (Skill Level × 5)] seconds",
          "duration": "[15 + (Skill Level × 15)] seconds",
          "areaOfEffect": "5 x 5",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2273.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2273",
          "tree": {
            "idx": 39,
            "row": 5,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 2272,
                "level": 2,
                "name": "Magnetic Field",
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
                "value": "3"
              },
              {
                "label": "SP Cost",
                "value": "90"
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
                "value": "[25 − (Skill Level × 5)] seconds"
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
                    "id": "physical-and-magic-defense",
                    "label": "Physical And Magic Defense"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "duration": "30 seconds",
                      "physical-and-magic-defense": "+15%",
                      "sp-cost": "80",
                      "data-1": "15",
                      "data-2": "30000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "45 seconds",
                      "physical-and-magic-defense": "+20%",
                      "sp-cost": "90",
                      "data-1": "20",
                      "data-2": "45000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "60 seconds",
                      "physical-and-magic-defense": "+25%",
                      "sp-cost": "100",
                      "data-1": "25",
                      "data-2": "60000"
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
          "id": 2274,
          "imageFile": "2274.png",
          "name": "Stealth Field",
          "maxLevel": 3,
          "prerequisiteText": "Analyze 3 / Neutral Barrier 2",
          "group": "Active / Buff",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Stealth_Field",
          "description": "Creates a 5x5 cell stealth barrier around the Caster, cloaking all targets within range. All targets cloaked by Stealth Field will be semi-visible, and they cannot be targeted by skills. Continually consumes caster's SP while the skill is active and decreases 20% of caster's movement speed. It can be canceled if Stealth Field is cast twice. Requires a <Camouflage Generator>and consume 2 Magic Gear Fuel.",
          "levelDetails": [
            {
              "level": 1,
              "text": "80 SP / Duration 15 sec. / 1% SP/3 sec."
            },
            {
              "level": 2,
              "text": "100 SP / Duration 20 sec. / 1% SP/4 sec."
            },
            {
              "level": 3,
              "text": "120 SP / Duration 25 sec. / 1% SP/5 sec."
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
                  "value": "80"
                },
                {
                  "level": 2,
                  "value": "100"
                },
                {
                  "level": 3,
                  "value": "120"
                }
              ]
            },
            {
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "15000"
                },
                {
                  "level": 2,
                  "value": "20000"
                },
                {
                  "level": 3,
                  "value": "25000"
                }
              ]
            },
            {
              "label": "Data 2",
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
                }
              ]
            }
          ],
          "spCost": "50 + (Skill Level × 50)",
          "cooldown": "[25 − (Skill Level × 5)] seconds",
          "duration": "[10 + (Skill Level × 5)] seconds; Until recast or SP reaches 0",
          "areaOfEffect": "5 x 5",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2274.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2274",
          "tree": {
            "idx": 40,
            "row": 5,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 2271,
                "level": 3,
                "name": "Analyze",
                "visible": true
              },
              {
                "id": 2273,
                "level": 2,
                "name": "Neutral Barrier",
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
                "value": "3"
              },
              {
                "label": "SP Cost",
                "value": "50 + (Skill Level × 50)"
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
                "value": "[25 − (Skill Level × 5)] seconds"
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
                      "duration": "3 seconds",
                      "effect": "80 SP / Duration 15 sec. / 1% SP",
                      "sp-cost": "80",
                      "data-1": "15000",
                      "data-2": "3000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "4 seconds",
                      "effect": "100 SP / Duration 20 sec. / 1% SP",
                      "sp-cost": "100",
                      "data-1": "20000",
                      "data-2": "4000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "5 seconds",
                      "effect": "120 SP / Duration 25 sec. / 1% SP",
                      "sp-cost": "120",
                      "data-1": "25000",
                      "data-2": "5000"
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
      "label": "Whitesmith",
      "pointLimit": 69,
      "tree": {
        "columns": 7,
        "rows": 5
      },
      "skills": [
        {
          "id": 94,
          "imageFile": "94.png",
          "name": "Iron Tempering",
          "maxLevel": 5,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Iron_Tempering",
          "description": "Enables to create 1 refined Iron , 1 Iron ore by consuming a Mini Furnace.\nSkill level affects success rate.\nDEX and LUK additionally affect success rate.",
          "levelDetails": [
            {
              "level": 1,
              "text": "success rate: 45%"
            },
            {
              "level": 2,
              "text": "success rate: 50%"
            },
            {
              "level": 3,
              "text": "success rate: 55%"
            },
            {
              "level": 4,
              "text": "success rate: 60%"
            },
            {
              "level": 5,
              "text": "success rate: 65%"
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
          "iconUrl": "assets/divine-pride/skills/94.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/94",
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
                      "effect": "success rate: 45%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "success rate: 50%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "success rate: 55%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "success rate: 60%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "success rate: 65%",
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
          "id": 105,
          "imageFile": "105.png",
          "name": "Hilt Binding",
          "maxLevel": 1,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Hilt_Binding",
          "description": "Enhances STR and attack by 1 and 4, respectively.\nThis skill also extends the duration of Adrenaline Rush, Power-Thrust and Weapon Perfection skills by 10%.",
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
          "iconUrl": "assets/divine-pride/skills/105.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/105",
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
          "id": 109,
          "imageFile": "109.png",
          "name": "Skin Tempering",
          "maxLevel": 5,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Skin_Tempering",
          "description": "Enhances resistance to Fire and Neutral property damage.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Fire Res + 4%, Neutral Res + 1%"
            },
            {
              "level": 2,
              "text": "Fire Res + 8%, Neutral Res + 2%"
            },
            {
              "level": 3,
              "text": "Fire Res +12%, Neutral Res + 3%"
            },
            {
              "level": 4,
              "text": "Fire Res +16%, Neutral Res + 4%"
            },
            {
              "level": 5,
              "text": "Fire Res +20%, Neutral Res + 5%"
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
          "iconUrl": "assets/divine-pride/skills/109.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/109",
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
                    "id": "fire-res",
                    "label": "Fire Res"
                  },
                  {
                    "id": "neutral-res",
                    "label": "Neutral Res"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "fire-res": "+ 4%",
                      "neutral-res": "+ 1%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "fire-res": "+ 8%",
                      "neutral-res": "+ 2%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "fire-res": "+12%",
                      "neutral-res": "+ 3%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "fire-res": "+16%",
                      "neutral-res": "+ 4%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "fire-res": "+20%",
                      "neutral-res": "+ 5%",
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
          "id": 110,
          "imageFile": "110.png",
          "name": "Hammerfall",
          "maxLevel": 5,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "1 cell on ground",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Slams a targeted location with the equipped weapon.\nhas a chance of leaving all enemies within the area of effect stunned.\nEnemy's VIT lowers the chance of stun and duration.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Stun Chance: 30%"
            },
            {
              "level": 2,
              "text": "Stun Chance: 40%"
            },
            {
              "level": 3,
              "text": "Stun Chance: 50%"
            },
            {
              "level": 4,
              "text": "Stun Chance: 60%"
            },
            {
              "level": 5,
              "text": "Stun Chance: 70%"
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
          "iconUrl": "assets/divine-pride/skills/110.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/110",
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
                      "effect": "Stun Chance: 30%",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Stun Chance: 40%",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Stun Chance: 50%",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Stun Chance: 60%",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Stun Chance: 70%",
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
          "id": 98,
          "imageFile": "98.png",
          "name": "Smith Dagger",
          "maxLevel": 3,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Smith_Dagger",
          "description": "Enables to forge various Dagger class weapons by consuming a forging hammer and all required items(steel, gold, oridecon hammer).\nRequired to possess of materials and items required for production.\nSkill level affects success rate.\nDEX and LUK additionally affect success rate.",
          "levelDetails": [
            {
              "level": 1,
              "text": "success rate: 5%"
            },
            {
              "level": 2,
              "text": "success rate: 10%"
            },
            {
              "level": 3,
              "text": "success rate: 15%"
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
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/98.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/98",
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
                      "effect": "success rate: 5%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "success rate: 10%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "success rate: 15%",
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
          "id": 95,
          "imageFile": "95.png",
          "name": "Steel Tempering",
          "maxLevel": 5,
          "prerequisiteText": "Iron Tempering 1",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Steel_Tempering",
          "description": "Enables to create 1 steel , 5 Iron and 1 Coal by consuming a Mini Furnace.\nSkill level affects success rate.\nDEX and LUK additionally affect success rate.",
          "levelDetails": [
            {
              "level": 1,
              "text": "success rate: 35%"
            },
            {
              "level": 2,
              "text": "success rate: 40%"
            },
            {
              "level": 3,
              "text": "success rate: 45%"
            },
            {
              "level": 4,
              "text": "success rate: 50%"
            },
            {
              "level": 5,
              "text": "success rate: 55%"
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
          "iconUrl": "assets/divine-pride/skills/95.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/95",
          "tree": {
            "idx": 7,
            "row": 1,
            "col": 0,
            "columns": 7,
            "requirements": [
              {
                "id": 94,
                "level": 1,
                "name": "Iron Tempering",
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
                      "effect": "success rate: 35%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "success rate: 40%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "success rate: 45%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "success rate: 50%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "success rate: 55%",
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
          "id": 96,
          "imageFile": "96.png",
          "name": "Enchanted Stone Craft",
          "maxLevel": 5,
          "prerequisiteText": "Iron Tempering 1",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Enables to create elemental stones by consuming a Mini Furnace and 10 elemental ores.\nSkill level affects success rate.\nDEX and LUK additionally affect success rate.",
          "levelDetails": [
            {
              "level": 1,
              "text": "success rate: 15%"
            },
            {
              "level": 2,
              "text": "success rate: 20%"
            },
            {
              "level": 3,
              "text": "success rate: 25%"
            },
            {
              "level": 4,
              "text": "success rate: 30%"
            },
            {
              "level": 5,
              "text": "success rate: 35%"
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
          "iconUrl": "assets/divine-pride/skills/96.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/96",
          "tree": {
            "idx": 8,
            "row": 1,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 94,
                "level": 1,
                "name": "Iron Tempering",
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
                      "effect": "success rate: 15%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "success rate: 20%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "success rate: 25%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "success rate: 30%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "success rate: 35%",
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
          "id": 107,
          "imageFile": "107.png",
          "name": "Weaponry Research",
          "maxLevel": 10,
          "prerequisiteText": "Hilt Binding 1",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Weaponry_Research",
          "description": "Raises the success rate of forging.\nThis skill also raises Physical Attack (Weapon Mastery) and the accuracy with any weapon.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Acurracy Bonus: 2, Damage + 2"
            },
            {
              "level": 2,
              "text": "Acurracy Bonus: 4, Damage + 4"
            },
            {
              "level": 3,
              "text": "Acurracy Bonus: 5, Damage + 6"
            },
            {
              "level": 4,
              "text": "Acurracy Bonus: 6, Damage + 8"
            },
            {
              "level": 5,
              "text": "Acurracy Bonus:10, Damage +10"
            },
            {
              "level": 6,
              "text": "Acurracy Bonus:12, Damage +12"
            },
            {
              "level": 7,
              "text": "Acurracy Bonus:14, Damage +14"
            },
            {
              "level": 8,
              "text": "Acurracy Bonus:16, Damage +16"
            },
            {
              "level": 9,
              "text": "Acurracy Bonus:18, Damage +18"
            },
            {
              "level": 10,
              "text": "Acurracy Bonus:20, Damage +20"
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
          "iconUrl": "assets/divine-pride/skills/107.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/107",
          "tree": {
            "idx": 9,
            "row": 1,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 105,
                "level": 1,
                "name": "Hilt Binding",
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
                    "id": "acurracy-bonus-2-damage",
                    "label": "Acurracy Bonus: 2, Damage"
                  },
                  {
                    "id": "acurracy-bonus-4-damage",
                    "label": "Acurracy Bonus: 4, Damage"
                  },
                  {
                    "id": "acurracy-bonus-5-damage",
                    "label": "Acurracy Bonus: 5, Damage"
                  },
                  {
                    "id": "acurracy-bonus-6-damage",
                    "label": "Acurracy Bonus: 6, Damage"
                  },
                  {
                    "id": "acurracy-bonus-10-damage",
                    "label": "Acurracy Bonus:10, Damage"
                  },
                  {
                    "id": "acurracy-bonus-12-damage",
                    "label": "Acurracy Bonus:12, Damage"
                  },
                  {
                    "id": "acurracy-bonus-14-damage",
                    "label": "Acurracy Bonus:14, Damage"
                  },
                  {
                    "id": "acurracy-bonus-16-damage",
                    "label": "Acurracy Bonus:16, Damage"
                  },
                  {
                    "id": "acurracy-bonus-18-damage",
                    "label": "Acurracy Bonus:18, Damage"
                  },
                  {
                    "id": "acurracy-bonus-20-damage",
                    "label": "Acurracy Bonus:20, Damage"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "acurracy-bonus-2-damage": "+ 2",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "acurracy-bonus-4-damage": "+ 4",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "acurracy-bonus-5-damage": "+ 6",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "acurracy-bonus-6-damage": "+ 8",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "acurracy-bonus-10-damage": "+10",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "acurracy-bonus-12-damage": "+12",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "acurracy-bonus-14-damage": "+14",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "acurracy-bonus-16-damage": "+16",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "acurracy-bonus-18-damage": "+18",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "acurracy-bonus-20-damage": "+20",
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
          "id": 111,
          "imageFile": "111.png",
          "name": "Adrenaline Rush",
          "maxLevel": 5,
          "prerequisiteText": "Hammerfall 2",
          "group": "Active",
          "type": "Buff",
          "target": "the user and all party members",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Adrenaline_Rush",
          "description": "Axe, Mace Skill Form.\nPlaces a temporary buff on the user and all party members that increases Attack Speed by 30% with Axe and Mace class weapon.\nThe attack speed of Blacksmiths is increased by 30% while the attack speed of other job classes is increased by 25%.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Duration : 30sec, HIT + 8"
            },
            {
              "level": 2,
              "text": "Duration : 60sec, HIT +11"
            },
            {
              "level": 3,
              "text": "Duration : 90sec, HIT +14"
            },
            {
              "level": 4,
              "text": "Duration :120sec, HIT +17"
            },
            {
              "level": 5,
              "text": "Duration :150sec, HIT +20"
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
                }
              ]
            }
          ],
          "spCost": "17 + (Skill Level × 3)",
          "castDelay": "None",
          "cooldown": "None",
          "duration": "(Skill Level × 30) seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/111.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/111",
          "tree": {
            "idx": 10,
            "row": 1,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 110,
                "level": 2,
                "name": "Hammerfall",
                "visible": true
              }
            ]
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
                "value": "17 + (Skill Level × 3)"
              },
              {
                "label": "Cast Delay",
                "value": "None"
              },
              {
                "label": "Cooldown",
                "value": "None"
              },
              {
                "label": "Target",
                "value": "the user and all party members"
              }
            ],
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
                    "label": ", Hit"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "duration": "30 seconds",
                      "hit": "+ 8",
                      "sp-cost": "20"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "60 seconds",
                      "hit": "+11",
                      "sp-cost": "23"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "90 seconds",
                      "hit": "+14",
                      "sp-cost": "26"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "120 seconds",
                      "hit": "+17",
                      "sp-cost": "29"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "150 seconds",
                      "hit": "+20",
                      "sp-cost": "32"
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
          "id": 104,
          "imageFile": "104.png",
          "name": "Smith Spear",
          "maxLevel": 3,
          "prerequisiteText": "Smith Dagger 2",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Smith_Spear",
          "description": "Enables to forge various Spear class weapons by consuming a forging hammer and all required items(steel, gold, oridecon hammer).\nRequired to possess of materials and items required for production.\nSkill level affects success rate.\nDEX and LUK additionally affect success rate.",
          "levelDetails": [
            {
              "level": 1,
              "text": "success rate: 5%"
            },
            {
              "level": 2,
              "text": "success rate: 10%"
            },
            {
              "level": 3,
              "text": "success rate: 15%"
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
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/104.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/104",
          "tree": {
            "idx": 11,
            "row": 1,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 98,
                "level": 2,
                "name": "Smith Dagger",
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
                      "effect": "success rate: 5%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "success rate: 10%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "success rate: 15%",
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
          "id": 99,
          "imageFile": "99.png",
          "name": "Smith Sword",
          "maxLevel": 3,
          "prerequisiteText": "Smith Dagger 1",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Smith_Sword",
          "description": "Enables to forge various One-handed swords by consuming a forging hammer and all required items(steel, gold, oridecon hammer).\nRequired to possess of materials and items required for production.\nSkill level affects success rate.\nDEX and LUK additionally affect success rate.",
          "levelDetails": [
            {
              "level": 1,
              "text": "success rate: 5%"
            },
            {
              "level": 2,
              "text": "success rate: 10%"
            },
            {
              "level": 3,
              "text": "success rate: 15%"
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
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/99.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/99",
          "tree": {
            "idx": 12,
            "row": 1,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 98,
                "level": 1,
                "name": "Smith Dagger",
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
                      "effect": "success rate: 5%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "success rate: 10%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "success rate: 15%",
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
          "id": 103,
          "imageFile": "103.png",
          "name": "Smith Brass Knuckle",
          "maxLevel": 3,
          "prerequisiteText": "Smith Dagger 1",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Smith_Brass_Knuckle",
          "description": "Enables to forge various Knuckle class weapons by consuming a forging hammer and all required items(steel, gold, oridecon hammer).\nRequired to possess of materials and items required for production.\nSkill level affects success rate.\nDEX and LUK additionally affect success rate.",
          "levelDetails": [
            {
              "level": 1,
              "text": "success rate: 5%"
            },
            {
              "level": 2,
              "text": "success rate: 10%"
            },
            {
              "level": 3,
              "text": "success rate: 15%"
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
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/103.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/103",
          "tree": {
            "idx": 13,
            "row": 1,
            "col": 6,
            "columns": 7,
            "requirements": [
              {
                "id": 98,
                "level": 1,
                "name": "Smith Dagger",
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
                      "effect": "success rate: 5%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "success rate: 10%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "success rate: 15%",
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
          "id": 106,
          "imageFile": "106.png",
          "name": "Finding Ore",
          "maxLevel": 1,
          "prerequisiteText": "Hilt Binding1, Steel Tempering 1",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Finding_Ore",
          "description": "Gives a very low chance of monsters dropping an ore item when defeated by the player.",
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
          "iconUrl": "assets/divine-pride/skills/106.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/106",
          "tree": {
            "idx": 14,
            "row": 2,
            "col": 0,
            "columns": 7,
            "requirements": [
              {
                "id": 95,
                "level": 1,
                "name": "Steel Tempering",
                "visible": true
              },
              {
                "id": 105,
                "level": 1,
                "name": "Hilt Binding",
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
          "id": 97,
          "imageFile": "97.png",
          "name": "Oridecon Research",
          "maxLevel": 5,
          "prerequisiteText": "Enchanted Stone Craft 1",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Oridecon_Research",
          "description": "Enhances the success rate of forging weapons with Oridecon.",
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
          "iconUrl": "assets/divine-pride/skills/97.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/97",
          "tree": {
            "idx": 15,
            "row": 2,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 96,
                "level": 1,
                "name": "Enchanted Stone Craft",
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
          "id": 108,
          "imageFile": "108.png",
          "name": "Repair Weapon",
          "maxLevel": 1,
          "prerequisiteText": "Weaponry Research 1",
          "group": "Active",
          "type": "Supportive",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Repair_Weapon",
          "description": "Consumes SPS and repairs the damaged equipment of a single target, allowing it to be usable again.\nThe materials required for repair vary depending on the type of equipment.",
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
          "fixedCastTime": "2.5 seconds",
          "variableCastTime": "2.5 seconds",
          "castRange": "2 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/108.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/108",
          "tree": {
            "idx": 16,
            "row": 2,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 107,
                "level": 1,
                "name": "Weaponry Research",
                "visible": true
              }
            ]
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
                "value": "30"
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
                "label": "Cast Range",
                "value": "2 cells"
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
          "id": 112,
          "imageFile": "112.png",
          "name": "Weapon Perfection",
          "maxLevel": 5,
          "prerequisiteText": "Adrenaline Rush 2, Weaponry Research 2",
          "group": "Active",
          "type": "Buff",
          "target": "the user and all party members",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Weapon_Perfection",
          "description": "Removes the size penalty associated with the equipped weapon temporarily.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Duration : 10sec, SP Consumption:18"
            },
            {
              "level": 2,
              "text": "Duration : 20sec, SP Consumption:16"
            },
            {
              "level": 3,
              "text": "Duration : 30sec, SP Consumption:14"
            },
            {
              "level": 4,
              "text": "Duration : 40sec, SP Consumption:12"
            },
            {
              "level": 5,
              "text": "Duration : 50sec, SP Consumption:10"
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
                  "value": "16"
                },
                {
                  "level": 3,
                  "value": "14"
                },
                {
                  "level": 4,
                  "value": "12"
                },
                {
                  "level": 5,
                  "value": "10"
                }
              ]
            }
          ],
          "spCost": "20 − (Skill Level × 2)",
          "duration": "(Skill Level × 10) seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/112.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/112",
          "tree": {
            "idx": 17,
            "row": 2,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 107,
                "level": 2,
                "name": "Weaponry Research",
                "visible": true
              },
              {
                "id": 111,
                "level": 2,
                "name": "Adrenaline Rush",
                "visible": true
              }
            ]
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
                "value": "20 − (Skill Level × 2)"
              },
              {
                "label": "Target",
                "value": "the user and all party members"
              }
            ],
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
                      "effect": ", SP Consumption:18",
                      "sp-cost": "18"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "20 seconds",
                      "effect": ", SP Consumption:16",
                      "sp-cost": "16"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "30 seconds",
                      "effect": ", SP Consumption:14",
                      "sp-cost": "14"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "40 seconds",
                      "effect": ", SP Consumption:12",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "50 seconds",
                      "effect": ", SP Consumption:10",
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
          "id": 113,
          "imageFile": "113.png",
          "name": "Power Thrust(Over Thrust)",
          "maxLevel": 5,
          "prerequisiteText": "Adrenaline Rush 3",
          "group": "Active",
          "type": "Buff",
          "target": "the user and all party members",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Boosts attack of the user and party members temporarily.\nthe increase in itself and the party members is different.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Asset growth + 5%, Party member increase: + 5%"
            },
            {
              "level": 2,
              "text": "Asset growth +10%, Party member increase: + 5%"
            },
            {
              "level": 3,
              "text": "Asset growth +15%, Party member increase: +10%"
            },
            {
              "level": 4,
              "text": "Asset growth +20%, Party member increase: +10%"
            },
            {
              "level": 5,
              "text": "Asset growth +25%, Party member increase: +15%"
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
                  "value": "16"
                },
                {
                  "level": 3,
                  "value": "14"
                },
                {
                  "level": 4,
                  "value": "12"
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
          "iconUrl": "assets/divine-pride/skills/113.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/113",
          "tree": {
            "idx": 18,
            "row": 2,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 111,
                "level": 3,
                "name": "Adrenaline Rush",
                "visible": true
              }
            ]
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
                "value": "the user and all party members"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  },
                  {
                    "id": "asset-growth",
                    "label": "Asset Growth"
                  },
                  {
                    "id": "party-member-increase",
                    "label": "Party Member Increase:"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "asset-growth": "+ 5%",
                      "party-member-increase": "+ 5%",
                      "sp-cost": "18"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "asset-growth": "+10%",
                      "party-member-increase": "+ 5%",
                      "sp-cost": "16"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "asset-growth": "+15%",
                      "party-member-increase": "+10%",
                      "sp-cost": "14"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "asset-growth": "+20%",
                      "party-member-increase": "+10%",
                      "sp-cost": "12"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "asset-growth": "+25%",
                      "party-member-increase": "+15%",
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
          "id": 100,
          "imageFile": "100.png",
          "name": "Smith Two-handed Sword",
          "maxLevel": 3,
          "prerequisiteText": "Smith Sword 1",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Smith_Two-handed_Sword",
          "description": "Enables to forge various two-handed swords class weapons by consuming a forging hammer and all required items(steel, gold, oridecon hammer).\nRequired to possess of materials and items required for production.\nSkill level affects success rate.\nDEX and LUK additionally affect success rate.",
          "levelDetails": [
            {
              "level": 1,
              "text": "success rate: 5%"
            },
            {
              "level": 2,
              "text": "success rate: 10%"
            },
            {
              "level": 3,
              "text": "success rate: 15%"
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
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/100.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/100",
          "tree": {
            "idx": 19,
            "row": 2,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 99,
                "level": 1,
                "name": "Smith Sword",
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
                      "effect": "success rate: 5%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "success rate: 10%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "success rate: 15%",
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
          "id": 102,
          "imageFile": "102.png",
          "name": "Smith Mace",
          "maxLevel": 3,
          "prerequisiteText": "Smith Brass Knuckle 1",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Smith_Mace",
          "description": "Enables to forge various Mace class weapons by consuming a forging hammer and all required items(steel, gold, oridecon hammer).\nRequired to possess of materials and items required for production.\nSkill level affects success rate.\nDEX and LUK additionally affect success rate.",
          "levelDetails": [
            {
              "level": 1,
              "text": "success rate: 5%"
            },
            {
              "level": 2,
              "text": "success rate: 10%"
            },
            {
              "level": 3,
              "text": "success rate: 15%"
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
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/102.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/102",
          "tree": {
            "idx": 20,
            "row": 2,
            "col": 6,
            "columns": 7,
            "requirements": [
              {
                "id": 103,
                "level": 1,
                "name": "Smith Brass Knuckle",
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
                      "effect": "success rate: 5%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "success rate: 10%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "success rate: 15%",
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
          "id": 387,
          "imageFile": "387.png",
          "name": "Cart Boost",
          "maxLevel": 1,
          "prerequisiteText": "Push Cart 5, Hilt Binding 1, Cart Revolution, Change Cart",
          "group": "Active",
          "type": "Supportive",
          "target": "Caster Only",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Cart_Boost",
          "description": "Increase Movement Speed when\na Pushcart is equipped. Effects which decrease\nMovement Speed cannot interfere with this skill.",
          "levelDetails": [],
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
          "castDelay": "ASPD Based",
          "duration": "60 seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/387.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/387",
          "tree": {
            "idx": 21,
            "row": 3,
            "col": 0,
            "columns": 7,
            "requirements": [
              {
                "id": 39,
                "level": 5,
                "name": "Pushcart",
                "visible": false
              },
              {
                "id": 105,
                "level": 1,
                "name": "Hilt Binding",
                "visible": true
              },
              {
                "id": 153,
                "level": 0,
                "name": "Cart Revolution",
                "visible": false
              },
              {
                "id": 154,
                "level": 0,
                "name": "Change Cart",
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
                "label": "SP Cost",
                "value": "20"
              },
              {
                "label": "Cast Delay",
                "value": "ASPD Based"
              },
              {
                "label": "Target",
                "value": "Caster Only"
              },
              {
                "label": "Duration",
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
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 384,
          "imageFile": "384.png",
          "name": "Shattering Strike",
          "maxLevel": 10,
          "prerequisiteText": "Skin Tempering 3, Hilt Binding 1,",
          "group": "Active",
          "type": "Supportive",
          "target": "Caster Only",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Shattering_Strike",
          "description": "This skill has the chance of\ndestroying an equipped weapon or armor when\nused in PvP zones on other players, or to\ndecrease Attack Power or Defense when used on\nmonsters. This skill's level affects its\nduration and rate of success.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Duration 15 sec"
            },
            {
              "level": 2,
              "text": "Duration 20 sec"
            },
            {
              "level": 3,
              "text": "Duration 25 sec"
            },
            {
              "level": 4,
              "text": "Duration 30 sec"
            },
            {
              "level": 5,
              "text": "Duration 35 sec"
            },
            {
              "level": 6,
              "text": "Duration 40 sec"
            },
            {
              "level": 7,
              "text": "Duration 45 sec"
            },
            {
              "level": 8,
              "text": "Duration 50 sec"
            },
            {
              "level": 9,
              "text": "Duration 55 sec"
            },
            {
              "level": 10,
              "text": "Duration 60 sec"
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
                  "value": "60"
                },
                {
                  "level": 4,
                  "value": "60"
                },
                {
                  "level": 5,
                  "value": "70"
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
                  "value": "80"
                },
                {
                  "level": 9,
                  "value": "90"
                },
                {
                  "level": 10,
                  "value": "90"
                }
              ]
            }
          ],
          "spCost": "50~90",
          "duration": "10 + (Skill Level × 5) seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/384.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/384",
          "tree": {
            "idx": 22,
            "row": 3,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 105,
                "level": 1,
                "name": "Hilt Binding",
                "visible": true
              },
              {
                "id": 107,
                "level": 5,
                "name": "Weaponry Research",
                "visible": true
              },
              {
                "id": 109,
                "level": 3,
                "name": "Skin Tempering",
                "visible": true
              },
              {
                "id": 113,
                "level": 3,
                "name": "Power Thrust",
                "visible": true
              }
            ]
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
                "value": "50~90"
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
                      "duration": "15 seconds",
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "20 seconds",
                      "sp-cost": "50"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "25 seconds",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "30 seconds",
                      "sp-cost": "60"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "35 seconds",
                      "sp-cost": "70"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "duration": "40 seconds",
                      "sp-cost": "70"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "duration": "45 seconds",
                      "sp-cost": "80"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "duration": "50 seconds",
                      "sp-cost": "80"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "duration": "55 seconds",
                      "sp-cost": "90"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "duration": "60 seconds",
                      "sp-cost": "90"
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
          "id": 477,
          "imageFile": "477.png",
          "name": "Upgrade Weapon",
          "maxLevel": 10,
          "prerequisiteText": "Weaponry Research 10",
          "group": "Active",
          "type": "Supportive",
          "target": "Caster Only",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Upgrade_Weapon",
          "description": "Refine weapons to increase their\ngrade. Unlike weapon smithing, which is affected\nby DEX or LUK, this skill's success rate is\naffected by the caster's Job Level. Master\nSmiths have about the same rate of success as\nItem Upgrade NPCs at Job Level 50, have a 5%\ngreater chance of success than Item Upgrade\nNPCs at Job Level 60, and have a 10% greater\nchance of success at Job Level 70. If upgrade\nattempt fails, the weapon will be destroyed.\nLvl 1 Weapon Upgrade requires 1 Phracon. Lvl 2\nWeapon Upgrade requires 1 Emveretarcon. Lvl 3-4\nWeapon Upgrade requires 1 Oridecon.\nMaximum Possible Upgrade Limit By Level",
          "levelDetails": [
            {
              "level": 1,
              "text": "+1"
            },
            {
              "level": 2,
              "text": "+2"
            },
            {
              "level": 3,
              "text": "+3"
            },
            {
              "level": 4,
              "text": "+4"
            },
            {
              "level": 5,
              "text": "+5"
            },
            {
              "level": 6,
              "text": "+6"
            },
            {
              "level": 7,
              "text": "+7"
            },
            {
              "level": 8,
              "text": "+8"
            },
            {
              "level": 9,
              "text": "+9"
            },
            {
              "level": 10,
              "text": "+10"
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/477.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/477",
          "tree": {
            "idx": 23,
            "row": 3,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 107,
                "level": 10,
                "name": "Weaponry Research",
                "visible": true
              }
            ]
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
                      "effect": "+1",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "+2",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "+3",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "+4",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "+5",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "+6",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "+7",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "+8",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "+9",
                      "sp-cost": "30"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "+10",
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
          "id": 114,
          "imageFile": "114.png",
          "name": "Maximize Power",
          "maxLevel": 5,
          "prerequisiteText": "Weapon Perfection 3, Power Thrust 2",
          "group": "Active(toggle)",
          "type": "Buff",
          "target": "Caster Only",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Maximize_Power",
          "description": "Alters the damage variance of the equipped weapon to inflict the Maximum of its damage by consuming SP10.\nMaintaining this skill active will drain SP. need to use this skill again in order to release this status.",
          "levelDetails": [
            {
              "level": 1,
              "text": "SP 1 Consumption per 1sec"
            },
            {
              "level": 2,
              "text": "SP 1 Consumption per 2sec"
            },
            {
              "level": 3,
              "text": "SP 1 Consumption per 3sec"
            },
            {
              "level": 4,
              "text": "SP 1 Consumption per 4sec"
            },
            {
              "level": 5,
              "text": "SP 1 Consumption per 5sec"
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
          "castDelay": "ASPD",
          "duration": "Until SP reaches 0 or recast",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/114.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/114",
          "tree": {
            "idx": 24,
            "row": 3,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 112,
                "level": 3,
                "name": "Weapon Perfection",
                "visible": true
              },
              {
                "id": 113,
                "level": 2,
                "name": "Power Thrust",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active(toggle) Skill"
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
                "value": "ASPD"
              },
              {
                "label": "Target",
                "value": "Caster Only"
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
                    "id": "effect",
                    "label": "Effect"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "SP 1 Consumption per 1sec",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "SP 1 Consumption per 2sec",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "SP 1 Consumption per 3sec",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "SP 1 Consumption per 4sec",
                      "sp-cost": "10"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "SP 1 Consumption per 5sec",
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
          "id": 486,
          "imageFile": "486.png",
          "name": "Maximum Power-Thrust",
          "maxLevel": 5,
          "prerequisiteText": "Power Thrust 5",
          "group": "Active",
          "type": "Buff",
          "target": "Caster Only",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Maximum_Power-Thrust",
          "description": "Increase caster's weapon damage by\nspending a certain amount of zeny. Cannot be\nactivated to anyone beside the caster.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Damage : 20%, Zeny Amount : 3000z"
            },
            {
              "level": 2,
              "text": "Damage : 40%, Zeny Amount : 3500z"
            },
            {
              "level": 3,
              "text": "Damage : 60% , Zeny Amount : 4000z"
            },
            {
              "level": 4,
              "text": "Damage : 80% , Zeny Amount : 4500z"
            },
            {
              "level": 5,
              "text": "Damage :100% , Zeny Amount : 5000z"
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
          "iconUrl": "assets/divine-pride/skills/486.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/486",
          "tree": {
            "idx": 25,
            "row": 3,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 113,
                "level": 5,
                "name": "Power Thrust",
                "visible": true
              }
            ]
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
                    "id": "effect",
                    "label": "Effect"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Damage : 20%, Zeny Amount : 3000z",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Damage : 40%, Zeny Amount : 3500z",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Damage : 60% , Zeny Amount : 4000z",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Damage : 80% , Zeny Amount : 4500z",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Damage :100% , Zeny Amount : 5000z",
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
          "id": 101,
          "imageFile": "101.png",
          "name": "Smith Axe",
          "maxLevel": 3,
          "prerequisiteText": "Smith Sword 2",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Smith_Axe",
          "description": "Enables to forge various Axe class weapons by consuming a forging hammer and all required items(steel, gold, oridecon hammer).\nRequired to possess of materials and items required for production.\nSkill level affects success rate.\nDEX and LUK additionally affect success rate.",
          "levelDetails": [
            {
              "level": 1,
              "text": "success rate: 5%"
            },
            {
              "level": 2,
              "text": "success rate: 10%"
            },
            {
              "level": 3,
              "text": "success rate: 15%"
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
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/101.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/101",
          "tree": {
            "idx": 26,
            "row": 3,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 99,
                "level": 2,
                "name": "Smith Sword",
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
                      "effect": "success rate: 5%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "success rate: 10%",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "success rate: 15%",
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
          "id": 485,
          "imageFile": "485.png",
          "name": "High Speed Cart Ram",
          "maxLevel": 10,
          "prerequisiteText": "Mammonite 10, Hammerfall 5, Cart Boost 1",
          "group": "Active",
          "type": "Physical Attack",
          "target": "1 Target",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/High_Speed_Cart_Ram",
          "description": "This skill is only enabled during\nCart Boost status. Spend a certain amount of\nzeny to smash a Pushcart into an enemy with a\nchance of inflicting the Stun status. The amount\nof this skill's damage is affected by the\nskill's level and the weight of items carried\nin the Pushcart.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Zeny amount 600z , Stun Chance 5%"
            },
            {
              "level": 2,
              "text": "Zeny amount 700z , Stun Chance 10%"
            },
            {
              "level": 3,
              "text": "Zeny amount 800z , Stun Chance 15%"
            },
            {
              "level": 4,
              "text": "Zeny amount 900z , Stun Chance 20%"
            },
            {
              "level": 5,
              "text": "Zeny amount 1000z , Stun Chance 25%"
            },
            {
              "level": 6,
              "text": "Zeny amount 1100z , Stun Chance 30%"
            },
            {
              "level": 7,
              "text": "Zeny amount 1200z , Stun Chance 35%"
            },
            {
              "level": 8,
              "text": "Zeny amount 1300z , Stun Chance 40%"
            },
            {
              "level": 9,
              "text": "Zeny amount 1400z , Stun Chance 45%"
            },
            {
              "level": 10,
              "text": "Zeny amount 1500z , Stun Chance 50%"
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
          "castDelay": "ASPD",
          "castRange": "Melee",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/485.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/485",
          "tree": {
            "idx": 28,
            "row": 4,
            "col": 0,
            "columns": 7,
            "requirements": [
              {
                "id": 42,
                "level": 10,
                "name": "Mammonite",
                "visible": false
              },
              {
                "id": 110,
                "level": 5,
                "name": "Hammerfall",
                "visible": true
              },
              {
                "id": 387,
                "level": 1,
                "name": "Cart Boost",
                "visible": true
              }
            ]
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
              }
            ],
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
                      "effect": "Zeny amount 600z , Stun Chance 5%",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Zeny amount 700z , Stun Chance 10%",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Zeny amount 800z , Stun Chance 15%",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Zeny amount 900z , Stun Chance 20%",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Zeny amount 1000z , Stun Chance 25%",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "Zeny amount 1100z , Stun Chance 30%",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "Zeny amount 1200z , Stun Chance 35%",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "effect": "Zeny amount 1300z , Stun Chance 40%",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "effect": "Zeny amount 1400z , Stun Chance 45%",
                      "sp-cost": "15"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "effect": "Zeny amount 1500z , Stun Chance 50%",
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
          "id": 459,
          "imageFile": "459.png",
          "name": "Advanced Adrenaline Rush",
          "maxLevel": 1,
          "prerequisiteText": "Adrenaline Rush 5,",
          "group": "Supportive",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Advanced_Adrenaline_Rush",
          "description": "Increase the Attack Speed of every\nweapon class except for Bows. Cannot be used in\nconjunction with skills that have similar\neffects such as Adrenaline Rush, One Hand\nQuicken, Two Hand Quicken, Spear Quicken,\nImpressive Riff, and Solar, Lunar and Stellar\nShadow or Protection. Consumes 64 SP and has\na duration of 150 seconds.",
          "levelDetails": [],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "64"
                }
              ]
            }
          ],
          "spCost": "64",
          "castDelay": "None",
          "cooldown": "None",
          "duration": "150 seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/459.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/459",
          "tree": {
            "idx": 31,
            "row": 4,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 111,
                "level": 5,
                "name": "Adrenaline Rush",
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
                "value": "64"
              },
              {
                "label": "Cast Delay",
                "value": "None"
              },
              {
                "label": "Cooldown",
                "value": "None"
              },
              {
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "Duration",
                "value": "150 seconds"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
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
          "id": 1013,
          "imageFile": "1013.png",
          "name": "Greed",
          "maxLevel": 1,
          "prerequisiteText": "Finish Quest",
          "group": "Supportive",
          "type": "",
          "target": "2 cells around the Caster",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Greed",
          "description": "Automatically pick up every item\nwithin 2 cells of the caster. This skill cannot\nbe used within towns, PvP maps, or in WoE.",
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
          "areaOfEffect": "5 x 5",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/1013.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/1013",
          "tree": {
            "idx": 33,
            "row": 4,
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
                "value": "10"
              },
              {
                "label": "Target",
                "value": "2 cells around the Caster"
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
          "id": 1012,
          "imageFile": "1012.png",
          "name": "Dubious Salesmanship",
          "maxLevel": 1,
          "prerequisiteText": "Quest complete",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Dubious_Salesmanship",
          "description": "Reduces the Zeny cost for Mammonite and Cart Termination by 20%.",
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
          "iconUrl": "assets/divine-pride/skills/1012.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/1012",
          "tree": {
            "idx": 34,
            "row": 4,
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
        }
      ]
    },
    {
      "id": "previous-3",
      "label": "Merchant",
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/36.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/36",
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
            "status": "not-used",
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/42.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/42",
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
            "status": "not-used",
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/40.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/40",
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
            "status": "not-used",
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/155.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/155",
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/37.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/37",
          "tree": {
            "idx": 8,
            "row": 1,
            "col": 1,
            "columns": 7,
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
            "status": "not-used",
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/39.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/39",
          "tree": {
            "idx": 9,
            "row": 1,
            "col": 2,
            "columns": 7,
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
            "status": "not-used",
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/154.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/154",
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
            "status": "not-used",
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/2544.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/2544",
          "tree": {
            "idx": 13,
            "row": 1,
            "col": 6,
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/38.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/38",
          "tree": {
            "idx": 15,
            "row": 2,
            "col": 1,
            "columns": 7,
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
            "status": "not-used",
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/41.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/41",
          "tree": {
            "idx": 16,
            "row": 2,
            "col": 2,
            "columns": 7,
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
            "status": "not-used",
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
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/153.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/153",
          "tree": {
            "idx": 19,
            "row": 2,
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
      "id": 5300,
      "imageFile": "5300.png",
      "name": "Two-handed Axe Defense",
      "maxLevel": 10,
      "prerequisiteText": "basic skill",
      "group": "Passive",
      "type": "",
      "target": "",
      "recoversAp": "",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Two-handed_Axe_Defense",
      "description": "Two-handed Axes decrease Physical damage from enemies of all sizes.",
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
      "iconUrl": "assets/divine-pride/skills/5300.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5300",
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
      "id": 5297,
      "imageFile": "5297.png",
      "name": "Manufacture Machine",
      "maxLevel": 5,
      "prerequisiteText": "basic skill",
      "group": "Active",
      "type": "Crafting",
      "target": "You and party members",
      "recoversAp": "",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Manufacture_Machine",
      "description": "Create various devices for your skills.\nRequires a Machine Creation Guide.",
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
      "spCost": "20 + (Skill Level x 10)",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5297.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5297",
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
            "value": "5"
          },
          {
            "label": "SP Cost",
            "value": "20 + (Skill Level x 10)"
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
            "value": "You and party members"
          }
        ],
        "levelTables": [
          {
            "title": "Level Scaling",
            "columns": [
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
      "balanceNotes": [],
      "api": {
        "status": "not-used",
        "entries": [],
        "selectedEntry": null
      }
    },
    {
      "id": 5295,
      "imageFile": "5295.png",
      "name": "Axe Stomp",
      "maxLevel": 5,
      "prerequisiteText": "Two Axes Defending 5",
      "group": "Active",
      "type": "Melee Physical",
      "target": "Target in range",
      "recoversAp": "3",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Axe_Stomp",
      "description": "Axe-only skill.\nStrike the ground with an Axe and inflict melee physical damage to targets within the range around you.\nThe caster is granted Axe Stomp for a short period of time, increasing the damage of the Axe Tornado skill and dealing 3 attacks when used with a two-handed axe.\nDamage is additionally increased depending on the user's base level and POW.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK Per Hit 1350%/Range: 3x3/Duration: 10Sec"
        },
        {
          "level": 2,
          "text": "ATK Per Hit 2300%/Range: 3x3/Duration: 15Sec"
        },
        {
          "level": 3,
          "text": "ATK Per Hit 3250%/Range: 5x5/Duration: 20Sec"
        },
        {
          "level": 4,
          "text": "ATK Per Hit 4200%/Range: 5x5/Duration: 25Sec"
        },
        {
          "level": 5,
          "text": "ATK Per Hit 5150%/Range: 7x7/Duration: 30Sec"
        }
      ],
      "fixedCastTime": "0 seconds",
      "variableCastTime": "0 seconds",
      "castDelay": "0.7 seconds",
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
      "spCost": "45 ~ 85",
      "duration": "10 ~ 30 seconds",
      "areaOfEffect": "3 x 3 ~ 7 x 7",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5295.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5295",
      "tree": {
        "idx": 8,
        "row": 1,
        "col": 1,
        "columns": 7,
        "requirements": [
          {
            "id": 5300,
            "level": 5,
            "name": "Two-handed Axe Defense",
            "visible": true
          }
        ]
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
            "value": "45 ~ 85"
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
            "value": "0.7 seconds"
          },
          {
            "label": "Target",
            "value": "Target in range"
          },
          {
            "label": "Area of Effect",
            "value": "3 x 3 ~ 7 x 7"
          },
          {
            "label": "AP Generated",
            "value": "3"
          },
          {
            "label": "Damage",
            "value": "5,150% ATK per hit"
          }
        ],
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
                  "duration": "10 seconds",
                  "sp-cost": "45"
                }
              },
              {
                "level": 2,
                "values": {
                  "duration": "15 seconds",
                  "sp-cost": "55"
                }
              },
              {
                "level": 3,
                "values": {
                  "duration": "20 seconds",
                  "sp-cost": "65"
                }
              },
              {
                "level": 4,
                "values": {
                  "duration": "25 seconds",
                  "sp-cost": "75"
                }
              },
              {
                "level": 5,
                "values": {
                  "duration": "30 seconds",
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
          "skillName": "Axe Stomp",
          "versionId": "rebalance-1",
          "versionLabel": "Rebalance 1",
          "file": "rebalances/meister/rebalance_1.md",
          "section": "3.5",
          "notes": [
            "Increases damage from 1750%Atk to 2000%Atk based on level 5.",
            "When equipping two-handed axe, increases number of hit from 2 hits to 3 hits.",
            "Reduces cooldown from 2 seconds to 1 second.",
            "Increases AP recovery rate from 2 to 3.",
            "Increases duration from Axe Stomp buff from 5 seconds to 10 seconds."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "1750%Atk",
              "after": "2000%Atk",
              "scope": "Lv 5",
              "source": "Increases damage from 1750%Atk to 2000%Atk based on level 5."
            },
            {
              "label": "Cooldown",
              "before": "2 seconds",
              "after": "1 second",
              "scope": "",
              "source": "Reduces cooldown from 2 seconds to 1 second."
            },
            {
              "label": "AP Generated",
              "before": "2",
              "after": "3",
              "scope": "",
              "source": "Increases AP recovery rate from 2 to 3."
            },
            {
              "label": "Duration",
              "before": "A x e Stomp buff from 5 seconds",
              "after": "10 seconds",
              "scope": "",
              "source": "Increases duration from Axe Stomp buff from 5 seconds to 10 seconds."
            }
          ]
        },
        {
          "skillName": "Axe Stomp",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/meister/rebalance_2.md",
          "section": "3.1",
          "notes": [
            "Reduces cooldown from 1 second to 0.7 seconds.",
            "Reduces delay after skill from 0.5 seconds to 0.25 seconds.",
            "Increases SP consumption from 45 to 74 based on level 5.",
            "Increases duration of Axe Stomp buff from 10 seconds to 30 seconds based on level 5.",
            "Increases damage from 2000%Atk to 4600%Atk per hit based on level 5."
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
              "label": "Cast Delay",
              "before": "0.5 seconds",
              "after": "0.25 seconds",
              "scope": "",
              "source": "Reduces delay after skill from 0.5 seconds to 0.25 seconds."
            },
            {
              "label": "SP Cost",
              "before": "45",
              "after": "74",
              "scope": "Lv 5",
              "source": "Increases SP consumption from 45 to 74 based on level 5."
            },
            {
              "label": "Duration Of Axe Stomp Buff",
              "before": "10 seconds",
              "after": "30 seconds",
              "scope": "Lv 5",
              "source": "Increases duration of Axe Stomp buff from 10 seconds to 30 seconds based on level 5."
            },
            {
              "label": "Damage",
              "before": "2000%Atk",
              "after": "4600%Atk per hit",
              "scope": "Lv 5",
              "source": "Increases damage from 2000%Atk to 4600%Atk per hit based on level 5."
            }
          ]
        },
        {
          "skillName": "Axe Stomp",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/meister/rebalance_3.md",
          "section": "2.1",
          "notes": [
            "Increases SP consumption from 74 to 85 based on level 5.",
            "Increases base damage from 4600%Atk to 5150%Atk per hit based on level 5."
          ],
          "specRows": [
            {
              "label": "SP Cost",
              "before": "74",
              "after": "85",
              "scope": "Lv 5",
              "source": "Increases SP consumption from 74 to 85 based on level 5."
            },
            {
              "label": "Damage",
              "before": "4600%Atk",
              "after": "5150%Atk per hit",
              "scope": "Lv 5",
              "source": "Increases base damage from 4600%Atk to 5150%Atk per hit based on level 5."
            }
          ]
        },
        {
          "skillName": "Axe Stomp",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/meister/rebalance_4.md",
          "section": "2.1",
          "notes": [
            "Increases global cooldown from 0.25 seconds to 0.7 seconds based on level 5.",
            "Increases base damage from 5150%Atk to 6200%Atk per hit based on level 5."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "0.25 seconds",
              "after": "0.7 seconds",
              "scope": "Lv 5",
              "source": "Increases global cooldown from 0.25 seconds to 0.7 seconds based on level 5."
            },
            {
              "label": "Damage",
              "before": "5150%Atk",
              "after": "6200%Atk per hit",
              "scope": "Lv 5",
              "source": "Increases base damage from 5150%Atk to 6200%Atk per hit based on level 5."
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
      "id": 5298,
      "imageFile": "5298.png",
      "name": "Activate Attack Device",
      "maxLevel": 5,
      "prerequisiteText": "Manufacture Machine Lv. 3 and Axe Stomp Lv. 3",
      "group": "Active",
      "type": "Buff",
      "target": "You and party members",
      "recoversAp": "",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Activate_Attack_Device",
      "description": "Consumes 1 Device Capsule. Add a device to an ally that temporarily attacks enemies around them.\nThis device inflicts Melee Physical damage every second.",
      "levelDetails": [],
      "fixedCastTime": "0.5 seconds",
      "variableCastTime": "1 second",
      "castDelay": "0.5 seconds",
      "cooldown": "0.7 seconds",
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "43"
            },
            {
              "level": 2,
              "value": "46"
            },
            {
              "level": 3,
              "value": "49"
            },
            {
              "level": 4,
              "value": "52"
            },
            {
              "level": 5,
              "value": "55"
            }
          ]
        }
      ],
      "spCost": "40 + (Skill Level × 3)",
      "duration": "40 + (Skill Level × 40) seconds",
      "areaOfEffect": "3×3~7×7",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5298.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5298",
      "tree": {
        "idx": 9,
        "row": 1,
        "col": 2,
        "columns": 7,
        "requirements": [
          {
            "id": 5295,
            "level": 3,
            "name": "Axe Stomp",
            "visible": true
          },
          {
            "id": 5297,
            "level": 3,
            "name": "Manufacture Machine",
            "visible": true
          }
        ]
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
            "value": "40 + (Skill Level × 3)"
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
            "value": "0.7 seconds"
          },
          {
            "label": "Target",
            "value": "You and party members"
          },
          {
            "label": "Area of Effect",
            "value": "3×3~7×7"
          },
          {
            "label": "Duration",
            "value": "40 + (Skill Level × 40) seconds"
          }
        ],
        "levelTables": [
          {
            "title": "Level Scaling",
            "columns": [
              {
                "id": "sp-cost",
                "label": "SP Cost"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "sp-cost": "43"
                }
              },
              {
                "level": 2,
                "values": {
                  "sp-cost": "46"
                }
              },
              {
                "level": 3,
                "values": {
                  "sp-cost": "49"
                }
              },
              {
                "level": 4,
                "values": {
                  "sp-cost": "52"
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
      "balanceNotes": [],
      "api": {
        "status": "not-used",
        "entries": [],
        "selectedEntry": null
      }
    },
    {
      "id": 5299,
      "imageFile": "5299.png",
      "name": "Activate Defense Device",
      "maxLevel": 5,
      "prerequisiteText": "Manufacture Machine Lv. 1",
      "group": "Active",
      "type": "Buff",
      "target": "You and party members",
      "recoversAp": "",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Activate_Defense_Device",
      "description": "Consumes 1 Device Capsule. Add a device to an ally that temporarily increases their DEF and Physical Resistance.",
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
              "value": "43"
            },
            {
              "level": 2,
              "value": "46"
            },
            {
              "level": 3,
              "value": "49"
            },
            {
              "level": 4,
              "value": "52"
            },
            {
              "level": 5,
              "value": "55"
            }
          ]
        }
      ],
      "spCost": "40 + (Skill Level × 3)",
      "duration": "40 + (Skill Level × 40) seconds",
      "areaOfEffect": "3×3~7×7",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5299.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5299",
      "tree": {
        "idx": 10,
        "row": 1,
        "col": 3,
        "columns": 7,
        "requirements": [
          {
            "id": 5297,
            "level": 1,
            "name": "Manufacture Machine",
            "visible": true
          }
        ]
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
            "value": "40 + (Skill Level × 3)"
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
            "value": "You and party members"
          },
          {
            "label": "Area of Effect",
            "value": "3×3~7×7"
          },
          {
            "label": "Duration",
            "value": "40 + (Skill Level × 40) seconds"
          }
        ],
        "levelTables": [
          {
            "title": "Level Scaling",
            "columns": [
              {
                "id": "sp-cost",
                "label": "SP Cost"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "sp-cost": "43"
                }
              },
              {
                "level": 2,
                "values": {
                  "sp-cost": "46"
                }
              },
              {
                "level": 3,
                "values": {
                  "sp-cost": "49"
                }
              },
              {
                "level": 4,
                "values": {
                  "sp-cost": "52"
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
      "balanceNotes": [],
      "api": {
        "status": "not-used",
        "entries": [],
        "selectedEntry": null
      }
    },
    {
      "id": 5301,
      "imageFile": "5301.png",
      "name": "ABR Mastery",
      "maxLevel": 10,
      "prerequisiteText": "Manufacture Machine Lv. 1",
      "group": "Passive",
      "type": "",
      "target": "",
      "recoversAp": "",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/ABR_Mastery",
      "description": "Improve your summoned ABR (Automatic Battle Robot).",
      "levelDetails": [
        {
          "level": 1,
          "text": "Improved ABR Stats (ATK 800, MHP : 40000, DEF : 20, MDEF : 4, FLEE : 10)"
        },
        {
          "level": 2,
          "text": "Improved ABR Stats (ATK 1400, MHP : 80000, DEF : 40, MDEF : 8, FLEE : 20)"
        },
        {
          "level": 3,
          "text": "Improved ABR Stats (ATK 2000, MHP : 120000, DEF : 60, MDEF : 12, FLEE : 30)"
        },
        {
          "level": 4,
          "text": "Improved ABR Stats (ATK 2600, MHP : 160000, DEF : 80, MDEF : 16, FLEE : 40)"
        },
        {
          "level": 5,
          "text": "Improved ABR Stats (ATK 3200, MHP : 200000, DEF : 100, MDEF : 20, FLEE : 50)"
        },
        {
          "level": 6,
          "text": "Improved ABR Stats (ATK 3800, MHP : 240000, DEF : 120, MDEF : 24, FLEE : 60)"
        },
        {
          "level": 7,
          "text": "Improved ABR Stats (ATK 4400, MHP : 280000, DEF : 140, MDEF : 28, FLEE : 70)"
        },
        {
          "level": 8,
          "text": "Improved ABR Stats (ATK 5000, MHP : 320000, DEF : 160, MDEF : 32, FLEE : 80)"
        },
        {
          "level": 9,
          "text": "Improved ABR Stats (ATK 5600, MHP : 360000, DEF : 180, MDEF : 36, FLEE : 90)"
        },
        {
          "level": 10,
          "text": "Improved ABR Stats (ATK 6200, MHP : 400000, DEF : 200, MDEF : 40, FLEE : 100)"
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
      "iconUrl": "assets/divine-pride/skills/5301.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5301",
      "tree": {
        "idx": 11,
        "row": 1,
        "col": 4,
        "columns": 7,
        "requirements": [
          {
            "id": 5297,
            "level": 1,
            "name": "Manufacture Machine",
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
                  "effect": "Improved ABR Stats (ATK 800, MHP : 40000, DEF : 20, MDEF : 4, FLEE : 10)",
                  "sp-cost": "0"
                }
              },
              {
                "level": 2,
                "values": {
                  "effect": "Improved ABR Stats (ATK 1400, MHP : 80000, DEF : 40, MDEF : 8, FLEE : 20)",
                  "sp-cost": "0"
                }
              },
              {
                "level": 3,
                "values": {
                  "effect": "Improved ABR Stats (ATK 2000, MHP : 120000, DEF : 60, MDEF : 12, FLEE : 30)",
                  "sp-cost": "0"
                }
              },
              {
                "level": 4,
                "values": {
                  "effect": "Improved ABR Stats (ATK 2600, MHP : 160000, DEF : 80, MDEF : 16, FLEE : 40)",
                  "sp-cost": "0"
                }
              },
              {
                "level": 5,
                "values": {
                  "effect": "Improved ABR Stats (ATK 3200, MHP : 200000, DEF : 100, MDEF : 20, FLEE : 50)",
                  "sp-cost": "0"
                }
              },
              {
                "level": 6,
                "values": {
                  "effect": "Improved ABR Stats (ATK 3800, MHP : 240000, DEF : 120, MDEF : 24, FLEE : 60)",
                  "sp-cost": "0"
                }
              },
              {
                "level": 7,
                "values": {
                  "effect": "Improved ABR Stats (ATK 4400, MHP : 280000, DEF : 140, MDEF : 28, FLEE : 70)",
                  "sp-cost": "0"
                }
              },
              {
                "level": 8,
                "values": {
                  "effect": "Improved ABR Stats (ATK 5000, MHP : 320000, DEF : 160, MDEF : 32, FLEE : 80)",
                  "sp-cost": "0"
                }
              },
              {
                "level": 9,
                "values": {
                  "effect": "Improved ABR Stats (ATK 5600, MHP : 360000, DEF : 180, MDEF : 36, FLEE : 90)",
                  "sp-cost": "0"
                }
              },
              {
                "level": 10,
                "values": {
                  "effect": "Improved ABR Stats (ATK 6200, MHP : 400000, DEF : 200, MDEF : 40, FLEE : 100)",
                  "sp-cost": "0"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "balanceNotes": [
        {
          "skillName": "ABR Mastery",
          "versionId": "rebalance-1",
          "versionLabel": "Rebalance 1",
          "file": "rebalances/meister/rebalance_1.md",
          "section": "3.1",
          "notes": [
            "Increases Atk bonus from 2500 to 6200 based on level 10.",
            "Increases MaxHP bonus from 20000 to 400000 based on level 10."
          ],
          "specRows": [
            {
              "label": "Atk Bonus",
              "before": "2500",
              "after": "6200",
              "scope": "Lv 10",
              "source": "Increases Atk bonus from 2500 to 6200 based on level 10."
            },
            {
              "label": "Maxhp Bonus",
              "before": "20000",
              "after": "400000",
              "scope": "Lv 10",
              "source": "Increases MaxHP bonus from 20000 to 400000 based on level 10."
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
      "id": 6002,
      "imageFile": "6002.png",
      "name": "Spark Blaster",
      "maxLevel": 10,
      "prerequisiteText": "Madogear License 1, Manufacture Machine 1",
      "group": "Active",
      "type": "Ranged Physical",
      "target": "Single Target",
      "recoversAp": "2",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Spark_Blaster",
      "description": "Available while riding in a madoogear.\nCauses a self-destruct, dealing 2 ranged physical damage to the target and an area around it.\nIgnores the target's physical defense, Damage is additionally increased depending on the user's base level and POW.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK Per Hit 1150%/Range: 7x7 Cells"
        },
        {
          "level": 2,
          "text": "ATK Per Hit 2050%/Range: 7x7 Cells"
        },
        {
          "level": 3,
          "text": "ATK Per Hit 2950%/Range: 7x7 Cells"
        },
        {
          "level": 4,
          "text": "ATK Per Hit 3850%/Range: 7x7 Cells"
        },
        {
          "level": 5,
          "text": "ATK Per Hit 4750%/Range: 7x7 Cells"
        },
        {
          "level": 6,
          "text": "ATK Per Hit 5650%/Range: 9x9 Cells"
        },
        {
          "level": 7,
          "text": "ATK Per Hit 6550%/Range: 9x9 Cells"
        },
        {
          "level": 8,
          "text": "ATK Per Hit 7450%/Range: 9x9 Cells"
        },
        {
          "level": 9,
          "text": "ATK Per Hit 8350%/Range: 9x9 Cells"
        },
        {
          "level": 10,
          "text": "ATK Per Hit 9250%/Range: 9x9 Cells"
        }
      ],
      "fixedCastTime": "0.5 seconds",
      "variableCastTime": "1.5 seconds",
      "castDelay": "0.25 seconds",
      "cooldown": "0.5 seconds",
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
      "spCost": "44 + (Skill Level × 4)",
      "duration": "60 + (Skill Level × 60) seconds",
      "castRange": "9 cells",
      "areaOfEffect": "7 x 7~9 x 9",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/6002.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6002",
      "tree": {
        "idx": 13,
        "row": 1,
        "col": 6,
        "columns": 7,
        "requirements": [
          {
            "id": 5297,
            "level": 1,
            "name": "Manufacture Machine",
            "visible": true
          }
        ]
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
            "value": "44 + (Skill Level × 4)"
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
            "value": "0.25 seconds"
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
            "value": "Single Target"
          },
          {
            "label": "Duration",
            "value": "60 + (Skill Level × 60) seconds"
          },
          {
            "label": "AP Generated",
            "value": "2"
          },
          {
            "label": "Damage",
            "value": "9,250% ATK per hit"
          }
        ],
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
                  "sp-cost": "48"
                }
              },
              {
                "level": 2,
                "values": {
                  "area-of-effect": "7x7",
                  "sp-cost": "52"
                }
              },
              {
                "level": 3,
                "values": {
                  "area-of-effect": "7x7",
                  "sp-cost": "56"
                }
              },
              {
                "level": 4,
                "values": {
                  "area-of-effect": "7x7",
                  "sp-cost": "60"
                }
              },
              {
                "level": 5,
                "values": {
                  "area-of-effect": "7x7",
                  "sp-cost": "64"
                }
              },
              {
                "level": 6,
                "values": {
                  "area-of-effect": "9x9",
                  "sp-cost": "68"
                }
              },
              {
                "level": 7,
                "values": {
                  "area-of-effect": "9x9",
                  "sp-cost": "72"
                }
              },
              {
                "level": 8,
                "values": {
                  "area-of-effect": "9x9",
                  "sp-cost": "76"
                }
              },
              {
                "level": 9,
                "values": {
                  "area-of-effect": "9x9",
                  "sp-cost": "80"
                }
              },
              {
                "level": 10,
                "values": {
                  "area-of-effect": "9x9",
                  "sp-cost": "84"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "balanceNotes": [
        {
          "skillName": "Spark Blaster",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/meister/rebalance_3.md",
          "section": "2.3",
          "notes": [
            "Reduces skill cooldown from 0.7 seconds to 0.5 seconds.",
            "Increases base damage from 7750%Atk to 9250%Atk per hit based on level 10."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "0.7 seconds",
              "after": "0.5 seconds",
              "scope": "",
              "source": "Reduces skill cooldown from 0.7 seconds to 0.5 seconds."
            },
            {
              "label": "Damage",
              "before": "7750%Atk",
              "after": "9250%Atk per hit",
              "scope": "Lv 10",
              "source": "Increases base damage from 7750%Atk to 9250%Atk per hit based on level 10."
            }
          ]
        },
        {
          "skillName": "Spark Blaster",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/meister/rebalance_4.md",
          "section": "2.3",
          "notes": [
            "Increases base damage from 9250%Atk to 14600%Atk based on level 10."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "9250%Atk",
              "after": "14600%Atk",
              "scope": "Lv 10",
              "source": "Increases base damage from 9250%Atk to 14600%Atk based on level 10."
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
      "id": 6004,
      "imageFile": "6004.png",
      "name": "Mighty Smash",
      "maxLevel": 10,
      "prerequisiteText": "Axe Stomp 3",
      "group": "Active",
      "type": "Melee Physical",
      "target": "Instant Cast",
      "recoversAp": "",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Mighty_Smash",
      "description": "Axe-only skill.\nSwing your axe wildly, dealing 5 melee physical damage to targets in an area around you.\nIf Axe Stomp is active, inflicts stronger melee physical damage 7 times.\nDamage is additionally increased depending on the user's base level and POW.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK Per Hit 205%/230%(Axe Stomp)\nArea of Effect: 3x3Cells"
        },
        {
          "level": 2,
          "text": "ATK Per Hit 385%/410%(Axe Stomp)\nArea of Effect: 3x3Cells"
        },
        {
          "level": 3,
          "text": "ATK Per Hit 565%/590%(Axe Stomp)\nArea of Effect: 3x3Cells"
        },
        {
          "level": 4,
          "text": "ATK Per Hit 745%/770%(Axe Stomp)\nArea of Effect: 3x3Cells"
        },
        {
          "level": 5,
          "text": "ATK Per Hit 925%/950%(Axe Stomp)\nArea of Effect: 5x5Cells"
        },
        {
          "level": 6,
          "text": "ATK Per Hit 1105%/1130%(Axe Stomp)\nArea of Effect: 5x5Cells"
        },
        {
          "level": 7,
          "text": "ATK Per Hit 1285%/1310%(Axe Stomp)\nArea of Effect: 5x5Cells"
        },
        {
          "level": 8,
          "text": "ATK Per Hit 1465%/1490%(Axe Stomp)\nArea of Effect: 5x5Cells"
        },
        {
          "level": 9,
          "text": "ATK Per Hit 1645%/1670%(Axe Stomp)\nArea of Effect: 7x7Cells"
        },
        {
          "level": 10,
          "text": "ATK Per Hit 1825%/1850%(Axe Stomp)\nArea of Effect: 7x7Cells"
        }
      ],
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
              "value": "71"
            },
            {
              "level": 3,
              "value": "74"
            },
            {
              "level": 4,
              "value": "77"
            },
            {
              "level": 5,
              "value": "80"
            },
            {
              "level": 6,
              "value": "83"
            },
            {
              "level": 7,
              "value": "86"
            },
            {
              "level": 8,
              "value": "89"
            },
            {
              "level": 9,
              "value": "92"
            },
            {
              "level": 10,
              "value": "95"
            }
          ]
        }
      ],
      "spCost": "65 + (Skill Level × 3)",
      "castDelay": "0.7 seconds",
      "cooldown": "0.5 seconds",
      "castRange": "Melee",
      "areaOfEffect": "3 x 3~7 x 7",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/6004.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6004",
      "tree": {
        "idx": 14,
        "row": 2,
        "col": 0,
        "columns": 7,
        "requirements": [
          {
            "id": 5295,
            "level": 3,
            "name": "Axe Stomp",
            "visible": true
          }
        ]
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
            "value": "65 + (Skill Level × 3)"
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
            "label": "Cast Range",
            "value": "Melee"
          },
          {
            "label": "Target",
            "value": "Instant Cast"
          },
          {
            "label": "Damage",
            "value": "1,825% ATK per hit/1,850% ATK per hit (A x e Stomp)"
          }
        ],
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
                  "sp-cost": "68"
                }
              },
              {
                "level": 2,
                "values": {
                  "area-of-effect": "3x3",
                  "sp-cost": "71"
                }
              },
              {
                "level": 3,
                "values": {
                  "area-of-effect": "3x3",
                  "sp-cost": "74"
                }
              },
              {
                "level": 4,
                "values": {
                  "area-of-effect": "3x3",
                  "sp-cost": "77"
                }
              },
              {
                "level": 5,
                "values": {
                  "area-of-effect": "5x5",
                  "sp-cost": "80"
                }
              },
              {
                "level": 6,
                "values": {
                  "area-of-effect": "5x5",
                  "sp-cost": "83"
                }
              },
              {
                "level": 7,
                "values": {
                  "area-of-effect": "5x5",
                  "sp-cost": "86"
                }
              },
              {
                "level": 8,
                "values": {
                  "area-of-effect": "5x5",
                  "sp-cost": "89"
                }
              },
              {
                "level": 9,
                "values": {
                  "area-of-effect": "7x7",
                  "sp-cost": "92"
                }
              },
              {
                "level": 10,
                "values": {
                  "area-of-effect": "7x7",
                  "sp-cost": "95"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "balanceNotes": [
        {
          "skillName": "Mighty Smash",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/meister/rebalance_3.md",
          "section": "2.2",
          "notes": [
            "Increases skill cooldown from 0.3 seconds to 0.5 seconds.",
            "Adds global cooldown by 0.25 seconds.",
            "Increases SP consumption from 78 to 95 based on level 10.",
            "Reduces base damage from 3100%/3150%Atk to 1825%/1850%Atk per hit based on level 10.",
            "Increases number of hit from 3/5 hits to 5/7 hits.",
            "While under Axe Stomp buff, increases factor weight of POW in skill formula from 7 to 10."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "0.3 seconds",
              "after": "0.5 seconds",
              "scope": "",
              "source": "Increases skill cooldown from 0.3 seconds to 0.5 seconds."
            },
            {
              "label": "SP Cost",
              "before": "78",
              "after": "95",
              "scope": "Lv 10",
              "source": "Increases SP consumption from 78 to 95 based on level 10."
            },
            {
              "label": "Damage",
              "before": "3100%/3150%Atk",
              "after": "1825%/1850%Atk per hit",
              "scope": "Lv 10",
              "source": "Reduces base damage from 3100%/3150%Atk to 1825%/1850%Atk per hit based on level 10."
            },
            {
              "label": "Number Of Hit",
              "before": "3/5 hits",
              "after": "5/7 hits",
              "scope": "",
              "source": "Increases number of hit from 3/5 hits to 5/7 hits."
            }
          ]
        },
        {
          "skillName": "Mighty Smash",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/meister/rebalance_4.md",
          "section": "2.2",
          "notes": [
            "Increases global cooldown from 0.25 seconds to 0.7 seconds based on level 10.",
            "Increases base damage from 1825%/1850%(Axe Stomp)Atk to 2480%/2500%(Axe Stomp)Atk per hit based on level 10."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "0.25 seconds",
              "after": "0.7 seconds",
              "scope": "Lv 10",
              "source": "Increases global cooldown from 0.25 seconds to 0.7 seconds based on level 10."
            },
            {
              "label": "Damage",
              "before": "1825%/1850%(A x e Stomp)Atk",
              "after": "2480%/2500%(A x e Stomp)Atk per hit",
              "scope": "Lv 10",
              "source": "Increases base damage from 1825%/1850%(Axe Stomp)Atk to 2480%/2500%(Axe Stomp)Atk per hit based on level 10."
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
      "id": 5296,
      "imageFile": "5296.png",
      "name": "Rush Quake",
      "maxLevel": 10,
      "prerequisiteText": "Axe Stomp Lv. 5",
      "group": "Active(AP)",
      "type": "Melee Physical",
      "target": "1 Target",
      "recoversAp": "",
      "consumesAp": "150",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Rush_Quake",
      "description": "Approaches the target within 9 cells, dealing Melee Physical damage to nearby enemies including the target and inflicting Quake effect on them for 30 seconds\nDeals more damage to Formless and Insect monsters.\nDamage increases additionally based on the Base Lv and POW.\nIn addition, grants Rush effect for (30 X Skill Level) seconds.\nRush Effect: Increases Melee and Ranged Physical Damage by (5 X Skill Level)%.\nQuake Effect: 50% increased Melee and Ranged Physical Damage taken by the target",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK 3600%/ 3750% to Formless/Insect enemies\nEffective range: : 3x3 cells"
        },
        {
          "level": 2,
          "text": "ATK 7200%/ 7500% to Formless/Insect enemies\nEffective range: : 3x3 cells"
        },
        {
          "level": 3,
          "text": "ATK 10800%/ 11250% to Formless/Insect enemies\nEffective range: : 3x3 cells"
        },
        {
          "level": 4,
          "text": "ATK 14400%/ 15000% to Formless/Insect enemies\nEffective range: : 3x3 cells"
        },
        {
          "level": 5,
          "text": "ATK 18000%/ 18750% to Formless/Insect enemies\nEffective range: : 5x5 cells"
        },
        {
          "level": 6,
          "text": "ATK 21600%/ 22500% to Formless/Insect enemies\nEffective range: : 5x5 cells"
        },
        {
          "level": 7,
          "text": "ATK 25200%/ 26250% to Formless/Insect enemies\nEffective range: : 5x5 cells"
        },
        {
          "level": 8,
          "text": "ATK 28800%/ 30000% to Formless/Insect enemies\nEffective range: : 5x5 cells"
        },
        {
          "level": 9,
          "text": "ATK 32400%/ 33750% to Formless/Insect enemies\nEffective range: : 7x7 cells"
        },
        {
          "level": 10,
          "text": "ATK 36000%/ 37500% to Formless/Insect enemies\nEffective range: : 7x7 cells"
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
      "spCost": "150",
      "castRange": "9 cells",
      "areaOfEffect": "3 x 3 ~ 7 x 7",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5296.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5296",
      "tree": {
        "idx": 15,
        "row": 2,
        "col": 1,
        "columns": 7,
        "requirements": [
          {
            "id": 5295,
            "level": 5,
            "name": "Axe Stomp",
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
            "label": "Cast Range",
            "value": "9 cells"
          },
          {
            "label": "Target",
            "value": "1 Target"
          },
          {
            "label": "Area of Effect",
            "value": "3 x 3 ~ 7 x 7"
          },
          {
            "label": "AP Consumed",
            "value": "150"
          },
          {
            "label": "Damage",
            "value": "36,000% ATK"
          }
        ],
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
                  "effect": "Effective range: : 3 x 3 cells",
                  "sp-cost": "150"
                }
              },
              {
                "level": 2,
                "values": {
                  "effect": "Effective range: : 3 x 3 cells",
                  "sp-cost": "150"
                }
              },
              {
                "level": 3,
                "values": {
                  "effect": "Effective range: : 3 x 3 cells",
                  "sp-cost": "150"
                }
              },
              {
                "level": 4,
                "values": {
                  "effect": "Effective range: : 3 x 3 cells",
                  "sp-cost": "150"
                }
              },
              {
                "level": 5,
                "values": {
                  "effect": "Effective range: : 5 x 5 cells",
                  "sp-cost": "150"
                }
              },
              {
                "level": 6,
                "values": {
                  "effect": "Effective range: : 5 x 5 cells",
                  "sp-cost": "150"
                }
              },
              {
                "level": 7,
                "values": {
                  "effect": "Effective range: : 5 x 5 cells",
                  "sp-cost": "150"
                }
              },
              {
                "level": 8,
                "values": {
                  "effect": "Effective range: : 5 x 5 cells",
                  "sp-cost": "150"
                }
              },
              {
                "level": 9,
                "values": {
                  "effect": "Effective range: : 7 x 7 cells",
                  "sp-cost": "150"
                }
              },
              {
                "level": 10,
                "values": {
                  "effect": "Effective range: : 7 x 7 cells",
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
          "skillName": "Rush Quake",
          "versionId": "rebalance-1",
          "versionLabel": "Rebalance 1",
          "file": "rebalances/meister/rebalance_1.md",
          "section": "3.4",
          "notes": [
            "Grants Rush buff to the user for 300 seconds based on level 10.",
            "Rush : Increases melee and long ranged physical damage by 50% (based on level 10).",
            "Inflicts Quake debuff to the target and surrounding enemies around the target for 30 seconds.",
            "Quake : Increases damage taken from melee and long ranged physical damage by 50%."
          ],
          "specRows": []
        },
        {
          "skillName": "Rush Quake",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/meister/rebalance_2.md",
          "section": "3.2",
          "notes": [
            "Removes 0.5 seconds delay after skill.",
            "Increases damage from 7500%/11000%(formless and insect race)Atk to 36000%/37500%(formless and insect race)Atk based on level 10."
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
              "label": "Damage",
              "before": "7500%/11000%(formless and insect race)Atk",
              "after": "36000%/37500%(formless and insect race)Atk",
              "scope": "Lv 10",
              "source": "Increases damage from 7500%/11000%(formless and insect race)Atk to 36000%/37500%(formless and insect race)Atk based on level 10."
            }
          ]
        },
        {
          "skillName": "Rush Quake",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/meister/rebalance_4.md",
          "section": "2.5",
          "notes": [
            "Buff no longer be removed by Dispell or Clearance."
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
      "id": 5302,
      "imageFile": "5302.png",
      "name": "ABR: Battle Warrior",
      "maxLevel": 4,
      "prerequisiteText": "ABR Mastery Lv. 1",
      "group": "Active",
      "type": "Summon",
      "target": "Self",
      "recoversAp": "20",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/ABR%3A_Battle_Warrior",
      "description": "Consumes 1 ABR Capsule. Summon the combat support ABR, Battle Warrior.\nBattle Warrior's stats increase, depending on your stats and ABR Mastery level.\nWhile Battle Warrior is summoned, Power Swing damage increases. (It inflicts damage once, but displays the damage in 2 parts.)",
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
            }
          ]
        }
      ],
      "spCost": "20 + (Skill Level x 10)",
      "duration": "60 + (Skill Level × 60) seconds",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5302.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5302",
      "tree": {
        "idx": 18,
        "row": 2,
        "col": 4,
        "columns": 7,
        "requirements": [
          {
            "id": 5301,
            "level": 1,
            "name": "ABR Mastery",
            "visible": true
          }
        ]
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
            "value": "20 + (Skill Level x 10)"
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
      "id": 5303,
      "imageFile": "5303.png",
      "name": "ABR: Dual Cannon",
      "maxLevel": 4,
      "prerequisiteText": "ABR Mastery Lv. 3 and ABR: Battle Warrior Lv. 2",
      "group": "Active",
      "type": "Summon",
      "target": "Self",
      "recoversAp": "20",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/ABR%3A_Dual_Cannon",
      "description": "Consumes 1 ABR Capsule. Summon the support ABR, Dual Cannon.\nDual Cannon's stats increase, depending on your stats and ABR Mastery level.\nWhile Dual Cannon is summoned, Knuckle Boost, Vulcan Arm, and Arm Cannon attack twice.",
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
            }
          ]
        }
      ],
      "spCost": "20 + (Skill Level x 10)",
      "duration": "60 + (Skill Level × 60) seconds",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5303.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5303",
      "tree": {
        "idx": 19,
        "row": 2,
        "col": 5,
        "columns": 7,
        "requirements": [
          {
            "id": 5301,
            "level": 3,
            "name": "ABR Mastery",
            "visible": true
          },
          {
            "id": 5302,
            "level": 2,
            "name": "ABR: Battle Warrior",
            "visible": true
          }
        ]
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
            "value": "20 + (Skill Level x 10)"
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
      "id": 6003,
      "imageFile": "6003.png",
      "name": "Triple Laser",
      "maxLevel": 5,
      "prerequisiteText": "Spark Blaster 5",
      "group": "Active",
      "type": "Ranged Physical",
      "target": "Single Target",
      "recoversAp": "",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Triple_Laser",
      "description": "Available while riding in a madoogear.\nFires three beam attacks at the target, inflicting long-distance physical damage three times.\nDamage is additionally increased according to the user's base level and POW, and critical damage is applied according to the user's critical probability.\nIn the case of critical damage, half of the total critical damage increase options are applied.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK Per Hit 1450%"
        },
        {
          "level": 2,
          "text": "ATK Per Hit 2350%"
        },
        {
          "level": 3,
          "text": "ATK Per Hit 3250%"
        },
        {
          "level": 4,
          "text": "ATK Per Hit 4150%"
        },
        {
          "level": 5,
          "text": "ATK Per Hit 5050%"
        }
      ],
      "fixedCastTime": "0.5 seconds",
      "variableCastTime": "1 second",
      "castDelay": "0.25 seconds",
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
      "spCost": "35 + (Skill Level × 5)",
      "castRange": "9 cells",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/6003.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6003",
      "tree": {
        "idx": 20,
        "row": 2,
        "col": 6,
        "columns": 7,
        "requirements": [
          {
            "id": 6002,
            "level": 5,
            "name": "Spark Blaster",
            "visible": true
          }
        ]
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
            "value": "0.5 seconds"
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
            "value": "0.35 seconds"
          },
          {
            "label": "Cast Range",
            "value": "9 cells"
          },
          {
            "label": "Target",
            "value": "Single Target"
          },
          {
            "label": "Damage",
            "value": "5,050% ATK per hit"
          }
        ],
        "levelTables": [
          {
            "title": "Level Scaling",
            "columns": [
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
      "balanceNotes": [
        {
          "skillName": "Triple Laser",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/meister/rebalance_3.md",
          "section": "2.4",
          "notes": [
            "Increases skill cooldown from 0.25 seconds to 0.35 seconds.",
            "Adds global cooldown by 0.25 seconds.",
            "Increases base damage from 3300%Atk to 5050%Atk per hit based on level 5.",
            "Increases factor weight of POW in skill formula from 10 to 12."
          ],
          "specRows": [
            {
              "label": "Cooldown",
              "before": "0.25 seconds",
              "after": "0.35 seconds",
              "scope": "",
              "source": "Increases skill cooldown from 0.25 seconds to 0.35 seconds."
            },
            {
              "label": "Damage",
              "before": "3300%Atk",
              "after": "5050%Atk per hit",
              "scope": "Lv 5",
              "source": "Increases base damage from 3300%Atk to 5050%Atk per hit based on level 5."
            },
            {
              "label": "Factor Weight Of Pow In Skill Formula",
              "before": "10",
              "after": "12",
              "scope": "",
              "source": "Increases factor weight of POW in skill formula from 10 to 12."
            }
          ]
        },
        {
          "skillName": "Triple Laser",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/meister/rebalance_4.md",
          "section": "2.4",
          "notes": [
            "Increases base damage from 5050%Atk to 6400%Atk per hit based on level 5."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "5050%Atk",
              "after": "6400%Atk per hit",
              "scope": "Lv 5",
              "source": "Increases base damage from 5050%Atk to 6400%Atk per hit based on level 5."
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
      "id": 6506,
      "imageFile": "6506.png",
      "name": "Rush Strike",
      "maxLevel": 5,
      "prerequisiteText": "Rush Quake 5",
      "group": "Active",
      "type": "Melee physical",
      "target": "Single target",
      "recoversAp": "2",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "",
      "description": "Two-handed axe exclusive skill.\nRush towards the target and strike it down with the axe, deals melee physical damage to the target and surrounding enemies around the target.\nDeals additional damage depends on user's base level and POW.\nHowever, this skill cannot be used when equipping Madogear.",
      "levelDetails": [
        {
          "level": 1,
          "text": "3500% Atk / area of effect: 3 x 3 cells."
        },
        {
          "level": 2,
          "text": "7000% Atk / area of effect: 5 x 5 cells."
        },
        {
          "level": 3,
          "text": "10500% Atk / area of effect: 5 x 5 cells."
        },
        {
          "level": 4,
          "text": "14000% Atk / area of effect: 7 x 7 cells."
        },
        {
          "level": 5,
          "text": "17500% Atk / area of effect: 7 x 7 cells."
        }
      ],
      "levelExtras": [],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/6506.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6506",
      "tree": {
        "idx": 22,
        "row": 3,
        "col": 1,
        "columns": 7,
        "requirements": [
          {
            "id": 5296,
            "level": 5,
            "name": "Rush Quake",
            "visible": true
          }
        ]
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
          },
          {
            "label": "Damage",
            "value": "17,500% ATK"
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
      "id": 6507,
      "imageFile": "6507.png",
      "name": "Powerful Swing",
      "maxLevel": 5,
      "prerequisiteText": "Rush Strike 3",
      "group": "Active",
      "type": "Melee physical",
      "target": "Single target",
      "recoversAp": "2",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "",
      "description": "Two-handed axe exclusive skill.\nStrikes the target with all your might with an axe, deals melee physical damage to the target and surrounding enemies around the target for 5 hits.\nIf Axe Stomp buff is active, the skill will deal more damage.\nDeals additional damage depends on user's base level and POW.\nHowever, this skill cannot be used when equipping Madogear.",
      "levelDetails": [
        {
          "level": 1,
          "text": "1150% Atk / 1350% Atk (Axe Stomp) per hit / area of effect: 3 x 3 cells."
        },
        {
          "level": 2,
          "text": "2000% Atk / 2300% Atk (Axe Stomp) per hit / area of effect: 3 x 3 cells."
        },
        {
          "level": 3,
          "text": "2850% Atk / 3250% Atk (Axe Stomp) per hit / area of effect: 5 x 5 cells."
        },
        {
          "level": 4,
          "text": "3700% Atk / 4200% Atk (Axe Stomp) per hit / area of effect: 5 x 5 cells."
        },
        {
          "level": 5,
          "text": "4550% Atk / 5150% Atk (Axe Stomp) per hit / area of effect: 7 x 7 cells."
        }
      ],
      "levelExtras": [],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/6507.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6507",
      "tree": {
        "idx": 23,
        "row": 3,
        "col": 2,
        "columns": 7,
        "requirements": [
          {
            "id": 6506,
            "level": 3,
            "name": "Rush Strike",
            "visible": true
          }
        ]
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
          },
          {
            "label": "Damage",
            "value": "4,550% ATK per hit/5,150% ATK per hit (A x e Stomp)"
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
                  "area-of-effect": "5x5"
                }
              },
              {
                "level": 4,
                "values": {
                  "area-of-effect": "5x5"
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
      "id": 5304,
      "imageFile": "5304.png",
      "name": "ABR: Mother Net",
      "maxLevel": 4,
      "prerequisiteText": "ABR Mastery Lv. 5, ABR: Battle Warrior Lv. 3, and ABR: Dual Cannon Lv. 3",
      "group": "Active",
      "type": "Summon",
      "target": "Self",
      "recoversAp": "20",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/ABR%3A_Mother_Net",
      "description": "Consumes 1 ABR Capsule. Summon the support ABR, Mother Net.\nMother Net's stats increase, depending on your stats and ABR Mastery level.",
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
            }
          ]
        }
      ],
      "spCost": "20 + (Skill Level x 10)",
      "duration": "60 + (Skill Level × 60) seconds",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5304.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5304",
      "tree": {
        "idx": 26,
        "row": 3,
        "col": 5,
        "columns": 7,
        "requirements": [
          {
            "id": 5301,
            "level": 5,
            "name": "ABR Mastery",
            "visible": true
          },
          {
            "id": 5302,
            "level": 3,
            "name": "ABR: Battle Warrior",
            "visible": true
          },
          {
            "id": 5303,
            "level": 3,
            "name": "ABR: Dual Cannon",
            "visible": true
          }
        ]
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
            "value": "20 + (Skill Level x 10)"
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
      "id": 6508,
      "imageFile": "6508.png",
      "name": "Energy Cannonade",
      "maxLevel": 5,
      "prerequisiteText": "Triple Laser 3",
      "group": "Active",
      "type": "Ranged Physical",
      "target": "Single target",
      "recoversAp": "3",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "",
      "description": "Can only be used when equipping Madogear.\nFires the energy sphere to the target, deals long ranged physical damage to the target and surrounding enemies around the target for 7 hits.\nSkill damage ignores the target's physical defense, deals additional damage depends on user's base level and POW.",
      "levelDetails": [
        {
          "level": 1,
          "text": "1000% Atk per hit / area of effect: 5 x 5 cells."
        },
        {
          "level": 2,
          "text": "1750% Atk per hit / area of effect: 5 x 5 cells."
        },
        {
          "level": 3,
          "text": "2500% Atk per hit / area of effect: 7 x 7 cells."
        },
        {
          "level": 4,
          "text": "3250% Atk per hit / area of effect: 7 x 7 cells."
        },
        {
          "level": 5,
          "text": "4000% Atk per hit / area of effect: 9 x 9 cells."
        }
      ],
      "fixedCastTime": "0.5 seconds",
      "variableCastTime": "1.5 seconds",
      "castDelay": "0.5 seconds",
      "cooldown": "1.25 seconds",
      "levelExtras": [],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/6508.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/6508",
      "tree": {
        "idx": 27,
        "row": 3,
        "col": 6,
        "columns": 7,
        "requirements": [
          {
            "id": 6003,
            "level": 3,
            "name": "Triple Laser",
            "visible": true
          }
        ]
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
            "value": "1.5 seconds"
          },
          {
            "label": "Cast Delay",
            "value": "0.5 seconds"
          },
          {
            "label": "Cooldown",
            "value": "1.25 seconds"
          },
          {
            "label": "Target",
            "value": "Single target"
          },
          {
            "label": "AP Generated",
            "value": "3"
          },
          {
            "label": "Damage",
            "value": "4,000% ATK per hit"
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
      "balanceNotes": [],
      "api": {
        "status": "not-used",
        "entries": [],
        "selectedEntry": null
      }
    },
    {
      "id": 5305,
      "imageFile": "5305.png",
      "name": "ABR: Infinity",
      "maxLevel": 4,
      "prerequisiteText": "ABR Mastery Lv. 10, ABR: Battle Warrior Lv. 4, ABR: Dual Cannon Lv. 4, and ABR: Mother Net Lv. 4",
      "group": "Active (AP)",
      "type": "Summon",
      "target": "Self",
      "recoversAp": "",
      "consumesAp": "200",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/ABR%3A_Infinity",
      "description": "Consumes 5 ABR Capsules. Summon the combat support ABR, Infinity.\nInfinity's stats increase, depending on your stats and ABR Mastery level.",
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
            }
          ]
        }
      ],
      "spCost": "20 + (Skill Level × 10)",
      "duration": "60 + (Skill Level × 60) seconds",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5305.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5305",
      "tree": {
        "idx": 33,
        "row": 4,
        "col": 5,
        "columns": 7,
        "requirements": [
          {
            "id": 5301,
            "level": 10,
            "name": "ABR Mastery",
            "visible": true
          },
          {
            "id": 5302,
            "level": 4,
            "name": "ABR: Battle Warrior",
            "visible": true
          },
          {
            "id": 5303,
            "level": 4,
            "name": "ABR: Dual Cannon",
            "visible": true
          },
          {
            "id": 5304,
            "level": 4,
            "name": "ABR: Mother Net",
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
            "value": "4"
          },
          {
            "label": "SP Cost",
            "value": "20 + (Skill Level × 10)"
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
            "value": "60 + (Skill Level × 60) seconds"
          },
          {
            "label": "AP Consumed",
            "value": "200"
          }
        ],
        "levelTables": [
          {
            "title": "Level Scaling",
            "columns": [
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
};

export default meisterData;
