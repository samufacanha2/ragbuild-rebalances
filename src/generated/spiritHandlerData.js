export const spiritHandlerData = {
  "generatedAt": "2026-07-10T18:53:02.959Z",
  "classId": 4308,
  "classSlug": "spirit-handler",
  "className": "Spirit Handler",
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
    "noteCount": 30,
    "addedSkills": 2,
    "versions": 4
  },
  "tree": {
    "columns": 7,
    "rows": 6,
    "skillTreeUrl": "https://www.divine-pride.net/tools/skilltree/4308",
    "jobIconUrl": "assets/divine-pride/jobs/4308.png"
  },
  "sources": {
    "rebalances": [
      "rebalances/spirit-handler/rebalance_2.md",
      "rebalances/spirit-handler/rebalance_3.md",
      "rebalances/spirit-handler/rebalance_4.md",
      "rebalances/spirit-handler/rebalance_5.md"
    ],
    "rebalanceManifest": "rebalances/manifest.json",
    "divinePrideApiDocs": "https://www.divine-pride.net/api",
    "divinePrideSkillTree": "https://www.divine-pride.net/tools/skilltree/4308",
    "browiki": "https://browiki.org",
    "irowiki": "https://irowiki.org/wiki/"
  },
  "rebalanceVersions": [
    {
      "id": "rebalance-2",
      "label": "Rebalance 2",
      "file": "rebalances/spirit-handler/rebalance_2.md",
      "heading": "18. Spirit Handler",
      "className": "Spirit Handler",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=11126",
      "scope": "main-and-expanded",
      "appliesTo": "Main and expanded classes",
      "maxJobLevel": 50,
      "pointLimit": 49,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "18.1",
          "name": "Chulho Sonic Claw",
          "notes": [
            "Increases SP consumption from 42 to 54 based on level 7.",
            "Increases damage from 2800%/3150%(Commune With Chulho)Atk to 5650%/6450%(Commune With Chulho)Atk based on level 7.",
            "Increases factor weight of Mystical Creature skill level in skill formula from 30/50(Commune With Chulho) to 50/100(Commune With Chulho)."
          ]
        },
        {
          "section": "18.2",
          "name": "Howling of Chulho",
          "notes": [
            "Increases SP consumption from 62 to 68.",
            "Increases damage from 5750%/7250%(Commune With Chulho)Atk to 7950%/8750%(Commune With Chulho)Atk based on level 7.",
            "Increases factor weight of Mystical Creature skill level in skill formula from 30/50(Commune With Chulho) to 50/100(Commune With Chulho)."
          ]
        },
        {
          "section": "18.3",
          "name": "Hogogong Strike",
          "notes": [
            "Increases SP consumption from 68 to 72 based on level 7.",
            "Increases damage from 900%/1500%(Commune With Chulho)Atk to 1580%/2700%(Commune With Chulho)Atk per hit based on level 7.",
            "Reduces cooldown from 0.5 seconds to 0.35 seconds."
          ]
        },
        {
          "section": "18.4",
          "name": "Marine Festival of Kisul",
          "notes": [
            "Increases AP recovery rate from 2 to 4."
          ]
        },
        {
          "section": "18.5",
          "name": "Sandy Festival of Kisul",
          "notes": [
            "Increases AP recovery rate from 2 to 4."
          ]
        },
        {
          "section": "18.6",
          "name": "Hyunrok Breeze",
          "notes": [
            "Increases SP consumption from 92 to 94 based on level 7.",
            "Increases AP recovery rate from 3 to 4.",
            "Increases damage from 2250%/4000%(Commune With Hyunrok)Matk to 4800%/6300%(Commune With Hyunrok)Matk based on level 7."
          ]
        },
        {
          "section": "18.7",
          "name": "Hyunrok Cannon",
          "notes": [
            "Removes 0.5 seconds delay after skill.",
            "Increases SP consumption from 62 to 74 based on level 7.",
            "Increases damage from 3400%/4400%(Commune With Hyunrok)Matk to 7300%/8500%(Commune With Hyunrok)Matk based on level 7."
          ]
        }
      ]
    },
    {
      "id": "rebalance-3",
      "label": "Rebalance 3",
      "file": "rebalances/spirit-handler/rebalance_3.md",
      "heading": "17. Spirit Handler",
      "className": "Spirit Handler",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=12421",
      "scope": "main-and-expanded",
      "appliesTo": "Main and expanded classes",
      "maxJobLevel": 55,
      "pointLimit": 54,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "17.1",
          "name": "Chulho Sonic Claw",
          "notes": [
            "Increases cast range from 9 cells to 11 cells.",
            "Increases base damage from 5650%/6450%Atk to 12400%/15200%Atk based on level 7."
          ]
        },
        {
          "section": "17.2",
          "name": "Howling of Chulho",
          "notes": [
            "Increases SP consumption from 68 to 72"
          ]
        },
        {
          "section": "17.3",
          "name": "Hogogong Strike",
          "notes": [
            "Increases SP consumption from 72 to 85 based on level 7."
          ]
        },
        {
          "section": "17.4",
          "name": "Kisul Rampage",
          "notes": [
            "Reduces AP recovery rate from 3/6 to 2/4."
          ]
        },
        {
          "section": "17.5",
          "name": "Hyunrok Breeze",
          "notes": [
            "Increases base damage from 4800%/6300%Matk to 5900%/7400%Matk per hit based on level 7."
          ]
        },
        {
          "section": "17.6",
          "name": "Hyunrok Cannon",
          "notes": [
            "Increases cast range from 9 cells to 11 cells.",
            "Reduces SP consumption from 74 to 65 based on level 7.",
            "Increases base damage from 7350%/8500%Matk to 11900%/14000%Matk based on level 7."
          ]
        }
      ]
    },
    {
      "id": "rebalance-4",
      "label": "Rebalance 4",
      "file": "rebalances/spirit-handler/rebalance_4.md",
      "heading": "18. Spirit Handler",
      "className": "Spirit Handler",
      "sourceUrl": "https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=13917",
      "scope": "main-and-expanded",
      "appliesTo": "Main and expanded classes",
      "maxJobLevel": 55,
      "pointLimit": 54,
      "addsNewSkills": false,
      "skills": [
        {
          "section": "18.1",
          "name": "Chulho Sonic Claw",
          "notes": [
            "Increases base damage from 12400+(Mystical Creature level x 50)%/15200+(Mystical Creature level x 100)%(Commune With Chulho)Atk to 16500+(Mystical Creature level x 50)%/19300+(Mystical Creature level x 100)%(Commune With Chulho)Atk based on level 7."
          ]
        },
        {
          "section": "18.2",
          "name": "Hyunrok Cannon",
          "notes": [
            "Increases base damage from 11900+(Mystical Creature level x 50)%/14000+(Mystical Creature level x 75)%(Commune With Hyunrok)Matk to 15450+(Mystical Creature level x 50)%/18250+(Mystical Creature level x 75)%(Commune With Hyunrok)Matk based on level 7."
          ]
        }
      ]
    },
    {
      "id": "rebalance-5",
      "label": "Rebalance 5",
      "file": "rebalances/spirit-handler/rebalance_5.md",
      "heading": "11. Spirit Handler",
      "className": "Spirit Handler",
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
      "file": "rebalances/spirit-handler/added_skills.md",
      "skills": [
        "Chulho Battering",
        "Hyunrok Spirit Power"
      ]
    }
  ],
  "skillTabs": [
    {
      "id": "current",
      "label": "Spirit Handler",
      "pointLimit": 59,
      "tree": {
        "columns": 7,
        "rows": 6
      },
      "skills": [
        {
          "id": 5433,
          "imageFile": "5433.png",
          "name": "Mystical Creature Mastery",
          "maxLevel": 10,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Mystical_Creature_Mastery",
          "description": "Develops the ability to communicate with spirits.\nIt affects mystical creatures skills and increases P.ATK and S.MATK.",
          "levelDetails": [
            {
              "level": 1,
              "text": "P.ATK/S.MATK +1"
            },
            {
              "level": 2,
              "text": "P.ATK/S.MATK +3"
            },
            {
              "level": 3,
              "text": "P.ATK/S.MATK +4"
            },
            {
              "level": 4,
              "text": "P.ATK/S.MATK +6"
            },
            {
              "level": 5,
              "text": "P.ATK/S.MATK +7"
            },
            {
              "level": 6,
              "text": "P.ATK/S.MATK +9"
            },
            {
              "level": 7,
              "text": "P.ATK/S.MATK +10"
            },
            {
              "level": 8,
              "text": "P.ATK/S.MATK +12"
            },
            {
              "level": 9,
              "text": "P.ATK/S.MATK +13"
            },
            {
              "level": 10,
              "text": "P.ATK/S.MATK +15"
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
          "iconUrl": "assets/divine-pride/skills/5433.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5433",
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
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "p-atk": "+1",
                      "s-matk": "+1",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "p-atk": "+3",
                      "s-matk": "+3",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "p-atk": "+4",
                      "s-matk": "+4",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "p-atk": "+6",
                      "s-matk": "+6",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "p-atk": "+7",
                      "s-matk": "+7",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "p-atk": "+9",
                      "s-matk": "+9",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "p-atk": "+10",
                      "s-matk": "+10",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 8,
                    "values": {
                      "p-atk": "+12",
                      "s-matk": "+12",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 9,
                    "values": {
                      "p-atk": "+13",
                      "s-matk": "+13",
                      "sp-cost": "0"
                    }
                  },
                  {
                    "level": 10,
                    "values": {
                      "p-atk": "+15",
                      "s-matk": "+15",
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
          "id": 5435,
          "imageFile": "5435.png",
          "name": "Chulho Sonic Claw",
          "maxLevel": 7,
          "prerequisiteText": "Mystical Creature Mastery 1",
          "group": "Active",
          "type": "Range Physical",
          "target": "Single Target",
          "recoversAp": "1",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Chulho_Sonic_Claw",
          "description": "Borrows the sharp claws of Chulho to slash at the air toward the target, dealing Range Physical damage.\nDeals additional damage depends on level of Mystical Creature Mastery user learned, user's base level and POW.\nIf the user learned Commune With Chulho, increases skill damage and applies critical damage, the critical chance is the user's Cri.\nThe effectiveness of critical modifier is applied by half.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 2500+(Mystical Creature Mastery Lv x50)%\nATK(Commune With Chulho) 2900+(Mystical Creature Mastery Lv x100)%"
            },
            {
              "level": 2,
              "text": "ATK 4150+(Mystical Creature Mastery Lv x50)%\nATK(Commune With Chulho) 4950+(Mystical Creature Mastery Lv x100)%"
            },
            {
              "level": 3,
              "text": "ATK 5800+(Mystical Creature Mastery Lv x50)%\nATK(Commune With Chulho) 7000+(Mystical Creature Mastery Lv x100)%"
            },
            {
              "level": 4,
              "text": "ATK 7450+(Mystical Creature Mastery Lv x50)%\nATK(Commune With Chulho) 9050+(Mystical Creature Mastery Lv x100)%"
            },
            {
              "level": 5,
              "text": "ATK 9100+(Mystical Creature Mastery Lv x50)%\nATK(Commune With Chulho) 11100+(Mystical Creature Mastery Lv x100)%"
            },
            {
              "level": 6,
              "text": "ATK 10750+(Mystical Creature Mastery Lv x50)%\nATK(Commune With Chulho) 13150+(Mystical Creature Mastery Lv x100)%"
            },
            {
              "level": 7,
              "text": "ATK 12400+(Mystical Creature Mastery Lv x50)%\nATK(Commune With Chulho) 15200+(Mystical Creature Mastery Lv x100)%"
            }
          ],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "42"
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
                },
                {
                  "level": 6,
                  "value": "52"
                },
                {
                  "level": 7,
                  "value": "54"
                }
              ]
            }
          ],
          "spCost": "21 + (Skill Level x 3)",
          "castDelay": "0.5 second",
          "cooldown": "0.25 seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5435.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5435",
          "tree": {
            "idx": 8,
            "row": 1,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 5433,
                "level": 1,
                "name": "Mystical Creature Mastery",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "7"
              },
              {
                "label": "SP Cost",
                "value": "21 + (Skill Level x 3)"
              },
              {
                "label": "Cast Delay",
                "value": "0.5 second"
              },
              {
                "label": "Cooldown",
                "value": "0.25 seconds"
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
                      "sp-cost": "42"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "44"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "46"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "48"
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
                      "sp-cost": "52"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "sp-cost": "54"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [
            {
              "skillName": "Chulho Sonic Claw",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/spirit-handler/rebalance_2.md",
              "section": "18.1",
              "notes": [
                "Increases SP consumption from 42 to 54 based on level 7.",
                "Increases damage from 2800%/3150%(Commune With Chulho)Atk to 5650%/6450%(Commune With Chulho)Atk based on level 7.",
                "Increases factor weight of Mystical Creature skill level in skill formula from 30/50(Commune With Chulho) to 50/100(Commune With Chulho)."
              ],
              "specRows": [
                {
                  "label": "SP Cost",
                  "before": "42",
                  "after": "54",
                  "scope": "Lv 7",
                  "source": "Increases SP consumption from 42 to 54 based on level 7."
                },
                {
                  "label": "Damage",
                  "before": "2800%/3150%(Commune With Chulho)Atk",
                  "after": "5650%/6450%(Commune With Chulho)Atk",
                  "scope": "Lv 7",
                  "source": "Increases damage from 2800%/3150%(Commune With Chulho)Atk to 5650%/6450%(Commune With Chulho)Atk based on level 7."
                },
                {
                  "label": "Factor Weight Of Mystical Creature Skill Level In Skill Formula",
                  "before": "30/50(Commune With Chulho)",
                  "after": "50/100(Commune With Chulho)",
                  "scope": "",
                  "source": "Increases factor weight of Mystical Creature skill level in skill formula from 30/50(Commune With Chulho) to 50/100(Commune With Chulho)."
                }
              ]
            },
            {
              "skillName": "Chulho Sonic Claw",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/spirit-handler/rebalance_3.md",
              "section": "17.1",
              "notes": [
                "Increases cast range from 9 cells to 11 cells.",
                "Increases base damage from 5650%/6450%Atk to 12400%/15200%Atk based on level 7."
              ],
              "specRows": [
                {
                  "label": "Cast Range",
                  "before": "9 cells",
                  "after": "11 cells",
                  "scope": "",
                  "source": "Increases cast range from 9 cells to 11 cells."
                },
                {
                  "label": "Damage",
                  "before": "5650%/6450%Atk",
                  "after": "12400%/15200%Atk",
                  "scope": "Lv 7",
                  "source": "Increases base damage from 5650%/6450%Atk to 12400%/15200%Atk based on level 7."
                }
              ]
            },
            {
              "skillName": "Chulho Sonic Claw",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/spirit-handler/rebalance_4.md",
              "section": "18.1",
              "notes": [
                "Increases base damage from 12400+(Mystical Creature level x 50)%/15200+(Mystical Creature level x 100)%(Commune With Chulho)Atk to 16500+(Mystical Creature level x 50)%/19300+(Mystical Creature level x 100)%(Commune With Chulho)Atk based on level 7."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "12400+(Mystical Creature level x 50)%/15200+(Mystical Creature level x 100)%(Commune With Chulho)Atk",
                  "after": "16500+(Mystical Creature level x 50)%/19300+(Mystical Creature level x 100)%(Commune With Chulho)Atk",
                  "scope": "Lv 7",
                  "source": "Increases base damage from 12400+(Mystical Creature level x 50)%/15200+(Mystical Creature level x 100)%(Commune With Chulho)Atk to 16500+(Mystical Creature level x 50)%/19300+(Mystical Creature level x 100)%(Commune With Chulho)Atk based on level 7."
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
          "id": 5439,
          "imageFile": "5439.png",
          "name": "Kisul Water Spraying",
          "maxLevel": 7,
          "prerequisiteText": "Mystical Creature Mastery 1",
          "group": "Active",
          "type": "Recovery",
          "target": "Instant Cast",
          "recoversAp": "1",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Kisul_Water_Spraying",
          "description": "Shoots a water cannon filled with the healing power of ghosts, recovering the HP of yourself and party members around you.\nRecovers additional amount depends on level of Mystical Creature Mastery user learned, user's base level and CRT.\nIf the user learned Commune with Kisul, increases area of effect and healing amount.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Recovery Amount 500+(Mystical Creature Mastery Lv x100)/Range: 7x7 cells / Recovery Amount(Commune) 750+(Mystical Creature Mastery Lv x150)/Range: 11x11 cells"
            },
            {
              "level": 2,
              "text": "Recovery Amount 1000+(Mystical Creature Mastery Lv x100)/Range: 7x7 cells / Recovery Amount(Commune) 1500+(Mystical Creature Mastery Lv x150)/Range: 11x11 cells"
            },
            {
              "level": 3,
              "text": "Recovery Amount 1500+(Mystical Creature Mastery Lv x100)/Range: 9x9 cells / Recovery Amount(Commune) 2250+(Mystical Creature Mastery Lv x150)/Range: 13x13 cells"
            },
            {
              "level": 4,
              "text": "Recovery Amount 2000+(Mystical Creature Mastery Lv x100)/Range: 9x9 cells / Recovery Amount(Commune) 3000+(Mystical Creature Mastery Lv x150)/Range: 13x13 cells"
            },
            {
              "level": 5,
              "text": "Recovery Amount 2500+(Mystical Creature Mastery Lv x100)/Range: 11x11 cells / Recovery Amount(Commune) 3750+(Mystical Creature Mastery Lv x150)/Range: 15x15 cells"
            },
            {
              "level": 6,
              "text": "Recovery Amount 3000+(Mystical Creature Mastery Lv x100)/Range: 11x11 cells / Recovery Amount(Commune) 4500+(Mystical Creature Mastery Lv x150)/Range: 15x15 cells"
            },
            {
              "level": 7,
              "text": "Recovery Amount 3500+(Mystical Creature Mastery Lv x100)/Range: 13x13 cells / Recovery Amount(Commune) 5250+(Mystical Creature Mastery Lv x150)/Range: 17x17 cells"
            }
          ],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "1 second",
          "castDelay": "1 second",
          "cooldown": "0.3 seconds",
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
                  "value": "65"
                },
                {
                  "level": 3,
                  "value": "69"
                },
                {
                  "level": 4,
                  "value": "73"
                },
                {
                  "level": 5,
                  "value": "77"
                },
                {
                  "level": 6,
                  "value": "81"
                },
                {
                  "level": 7,
                  "value": "85"
                }
              ]
            }
          ],
          "spCost": "57 + (Skill Level x 4)",
          "areaOfEffect": "7 x 7 ~ 13 x 13 11 x 11 ~ 17 x 17 (with Commune with Kisul )",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5439.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5439",
          "tree": {
            "idx": 10,
            "row": 1,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 5433,
                "level": 1,
                "name": "Mystical Creature Mastery",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "7"
              },
              {
                "label": "SP Cost",
                "value": "57 + (Skill Level x 4)"
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
                "value": "1 second"
              },
              {
                "label": "Cooldown",
                "value": "0.3 seconds"
              },
              {
                "label": "Target",
                "value": "Instant Cast"
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
                    "id": "recovery-amount",
                    "label": "Recovery Amount"
                  },
                  {
                    "id": "recovery-amount-commune",
                    "label": "Recovery Amount (Commune)"
                  },
                  {
                    "id": "sp-cost",
                    "label": "SP Cost"
                  },
                  {
                    "id": "area-of-effect",
                    "label": "Area of Effect"
                  },
                  {
                    "id": "area-of-effect-commune",
                    "label": "Area of Effect (Commune)"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "recovery-amount": "500 + (Mystical Creature Mastery Lv x 100)",
                      "area-of-effect": "7x7",
                      "recovery-amount-commune": "750 + (Mystical Creature Mastery Lv x 150)",
                      "area-of-effect-commune": "11x11",
                      "sp-cost": "61"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "recovery-amount": "1000 + (Mystical Creature Mastery Lv x 100)",
                      "area-of-effect": "7x7",
                      "recovery-amount-commune": "1500 + (Mystical Creature Mastery Lv x 150)",
                      "area-of-effect-commune": "11x11",
                      "sp-cost": "65"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "recovery-amount": "1500 + (Mystical Creature Mastery Lv x 100)",
                      "area-of-effect": "9x9",
                      "recovery-amount-commune": "2250 + (Mystical Creature Mastery Lv x 150)",
                      "area-of-effect-commune": "13x13",
                      "sp-cost": "69"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "recovery-amount": "2000 + (Mystical Creature Mastery Lv x 100)",
                      "area-of-effect": "9x9",
                      "recovery-amount-commune": "3000 + (Mystical Creature Mastery Lv x 150)",
                      "area-of-effect-commune": "13x13",
                      "sp-cost": "73"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "recovery-amount": "2500 + (Mystical Creature Mastery Lv x 100)",
                      "area-of-effect": "11x11",
                      "recovery-amount-commune": "3750 + (Mystical Creature Mastery Lv x 150)",
                      "area-of-effect-commune": "15x15",
                      "sp-cost": "77"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "recovery-amount": "3000 + (Mystical Creature Mastery Lv x 100)",
                      "area-of-effect": "11x11",
                      "recovery-amount-commune": "4500 + (Mystical Creature Mastery Lv x 150)",
                      "area-of-effect-commune": "15x15",
                      "sp-cost": "81"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "recovery-amount": "3500 + (Mystical Creature Mastery Lv x 100)",
                      "area-of-effect": "13x13",
                      "recovery-amount-commune": "5250 + (Mystical Creature Mastery Lv x 150)",
                      "area-of-effect-commune": "17x17",
                      "sp-cost": "85"
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
          "id": 5444,
          "imageFile": "5444.png",
          "name": "Colors of Hyunrok",
          "maxLevel": 7,
          "prerequisiteText": "Mystical Creature Mastery 1",
          "group": "Active",
          "type": "Supportive",
          "target": "Instant Cast",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Colors_of_Hyunrok",
          "description": "With the mysterious magical power of Hyunrok, endows elemental property to CN Meteor Hyunrok Breeze and Hyunrok Cannon for 300 seconds.\nIf the user learned Commune with Hyunrok, using this skill also increases CN Meteor damage by 50%.\nWhen using skill level 7, the endowment is canceled.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Endows water property"
            },
            {
              "level": 2,
              "text": "Endows wind property"
            },
            {
              "level": 3,
              "text": "Endows earth property"
            },
            {
              "level": 4,
              "text": "Endows fire property"
            },
            {
              "level": 5,
              "text": "Endows shadow property"
            },
            {
              "level": 6,
              "text": "Endows holy property"
            },
            {
              "level": 7,
              "text": "Removes endowment"
            }
          ],
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
                  "value": "90"
                },
                {
                  "level": 3,
                  "value": "90"
                },
                {
                  "level": 4,
                  "value": "90"
                },
                {
                  "level": 5,
                  "value": "90"
                },
                {
                  "level": 6,
                  "value": "90"
                },
                {
                  "level": 7,
                  "value": "90"
                }
              ]
            }
          ],
          "spCost": "90",
          "fixedCastTime": "1 seconds",
          "variableCastTime": "1.7 seconds",
          "duration": "300 seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5444.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5444",
          "tree": {
            "idx": 12,
            "row": 1,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 5433,
                "level": 1,
                "name": "Mystical Creature Mastery",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "7"
              },
              {
                "label": "SP Cost",
                "value": "90"
              },
              {
                "label": "Fixed Cast Time",
                "value": "1 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "1.7 seconds"
              },
              {
                "label": "Target",
                "value": "Instant Cast"
              },
              {
                "label": "Duration",
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
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Endows water property",
                      "sp-cost": "90"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Endows wind property",
                      "sp-cost": "90"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Endows earth property",
                      "sp-cost": "90"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Endows fire property",
                      "sp-cost": "90"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Endows shadow property",
                      "sp-cost": "90"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "effect": "Endows holy property",
                      "sp-cost": "90"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "effect": "Removes endowment",
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
          "id": 5506,
          "imageFile": "5506.png",
          "name": "Chulho Battering",
          "maxLevel": 7,
          "prerequisiteText": "Mystical Creature Mastery level 7, Chulho Sonic Claw level 5",
          "group": "Active",
          "type": "Long ranged physical",
          "target": "Single target",
          "recoversAp": "1",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Sharp claws of Chulho slash the target, inflicts long ranged physical damage to the target and surrounding enemies around the target for 5 hits.\nDeals additional damage depends on level of Mystical Creature Mastery user learned, user's base level and POW.\nHas a chance to trigger critical, the critical chance is the user's Cri.\nThe effectiveness of critical modifier is applied by half.",
          "levelDetails": [
            {
              "level": 1,
              "text": "(640 + (Mystical Creature Mastery level x 70))% Atk per hit / 5 x 5 cells."
            },
            {
              "level": 2,
              "text": "(800 + (Mystical Creature Mastery level x 70))% Atk per hit / 5 x 5 cells."
            },
            {
              "level": 3,
              "text": "(960 + (Mystical Creature Mastery level x 70))% Atk per hit / 5 x 5 cells."
            },
            {
              "level": 4,
              "text": "(1120 + (Mystical Creature Mastery level x 70))% Atk per hit / 5 x 5 cells."
            },
            {
              "level": 5,
              "text": "(1280 + (Mystical Creature Mastery level x 70))% Atk per hit / 7 x 7 cells."
            },
            {
              "level": 6,
              "text": "(1440 + (Mystical Creature Mastery level x 70))% Atk per hit / 7 x 7 cells."
            },
            {
              "level": 7,
              "text": "(1600 + (Mystical Creature Mastery level x 70))% Atk per hit / 7 x 7 cells."
            }
          ],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5506.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5506",
          "tree": {
            "idx": 14,
            "row": 2,
            "col": 0,
            "columns": 7,
            "requirements": [
              {
                "id": 5433,
                "level": 7,
                "name": "Mystical Creature Mastery",
                "visible": true
              },
              {
                "id": 5435,
                "level": 5,
                "name": "Chulho Sonic Claw",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "7"
              },
              {
                "label": "Target",
                "value": "Single target"
              },
              {
                "label": "AP Generated",
                "value": "1"
              }
            ],
            "levelTables": []
          },
          "balanceNotes": [
            {
              "skillName": "Chulho Battering",
              "versionId": "rebalance-5",
              "versionLabel": "Rebalance 5",
              "file": "rebalances/spirit-handler/added_skills.md",
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
          "id": 5436,
          "imageFile": "5436.png",
          "name": "Howling of Chulho",
          "maxLevel": 7,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "Range Physical",
          "target": "Instant Cast",
          "recoversAp": "2",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Howling_of_Chulho",
          "description": "Use the power of the Iron Tiger to roar with all your might, dealing long-range physical DMG to enemies within a surrounding range.\nWhen cast, grants [Hogogong effect] to enemies within the surrounding area for 12 seconds.\nDMG increases additionally based on the Spiritual Communication skill level, caster's base level, and POW.\nIf you acquire [Commune With Chulho], the effect range and DMG increase.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK 1650+(Mystical Creature Mastery Lv x50)%\nATK(Commune)1850+(Mystical Creature Mastery Lv x100)%\nRange: 5x5 cell/Range(Commune): 7x7 cell"
            },
            {
              "level": 2,
              "text": "ATK 2700+(Mystical Creature Mastery Lv x50)%\nATK(Commune)3000+(Mystical Creature Mastery Lv x100)%\n,Range: 5x5 cell/Range(Commune): 7x7 cell"
            },
            {
              "level": 3,
              "text": "ATK 3750+(Mystical Creature Mastery Lv x50)%\nATK(Commune)4150+(Mystical Creature Mastery Lv x100)%\nRange: 5x5 cell/Range(Commune): 7x7 cell"
            },
            {
              "level": 4,
              "text": "ATK 4800+(Mystical Creature Mastery Lv x50)%\nATK(Commune)5300+(Mystical Creature Mastery Lv x100)%\nRange: 7x7 cell/Range(Commune): 9x9 cell"
            },
            {
              "level": 5,
              "text": "ATK 5850+(Mystical Creature Mastery Lv x50)%\nATK(Commune)6450+(Mystical Creature Mastery Lv x100)%\nRange: 7x7 cell/Range(Commune): 9x9 cell"
            },
            {
              "level": 6,
              "text": "ATK 6900+(Mystical Creature Mastery Lv x50)%\nATK(Commune)7600+(Mystical Creature Mastery Lv x100)%\nRange: 7x7 cell/Range(Commune): 9x9 cell"
            },
            {
              "level": 7,
              "text": "ATK 7950+(Mystical Creature Mastery Lv x50)%\nATK(Commune)8750+(Mystical Creature Mastery Lv x100)%\nRange: 9x9 cell/Range(Commune): 11x11 cell"
            }
          ],
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
                  "value": "72"
                },
                {
                  "level": 3,
                  "value": "72"
                },
                {
                  "level": 4,
                  "value": "72"
                },
                {
                  "level": 5,
                  "value": "72"
                },
                {
                  "level": 6,
                  "value": "72"
                },
                {
                  "level": 7,
                  "value": "72"
                }
              ]
            }
          ],
          "spCost": "27 + (Skill Level x 5)",
          "fixedCastTime": "1 second",
          "cooldown": "1 second",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5436.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5436",
          "tree": {
            "idx": 15,
            "row": 2,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 5433,
                "level": 3,
                "name": "Mystical Creature Mastery",
                "visible": true
              },
              {
                "id": 5435,
                "level": 3,
                "name": "Chulho Sonic Claw",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "7"
              },
              {
                "label": "SP Cost",
                "value": "27 + (Skill Level x 5)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "1 second"
              },
              {
                "label": "Cooldown",
                "value": "1 second"
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
                      "area-of-effect": "5x5",
                      "effect": "Range(Commune): 7 x 7 cells",
                      "sp-cost": "72"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": ",Range: 5 x 5 cells / Range(Commune): 7 x 7 cells",
                      "sp-cost": "72"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "5x5",
                      "effect": "Range(Commune): 7 x 7 cells",
                      "sp-cost": "72"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "7x7",
                      "effect": "Range(Commune): 9 x 9 cells",
                      "sp-cost": "72"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "7x7",
                      "effect": "Range(Commune): 9 x 9 cells",
                      "sp-cost": "72"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "area-of-effect": "7x7",
                      "effect": "Range(Commune): 9 x 9 cells",
                      "sp-cost": "72"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "area-of-effect": "9x9",
                      "effect": "Range(Commune): 11 x 11 cells",
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
              "skillName": "Howling of Chulho",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/spirit-handler/rebalance_2.md",
              "section": "18.2",
              "notes": [
                "Increases SP consumption from 62 to 68.",
                "Increases damage from 5750%/7250%(Commune With Chulho)Atk to 7950%/8750%(Commune With Chulho)Atk based on level 7.",
                "Increases factor weight of Mystical Creature skill level in skill formula from 30/50(Commune With Chulho) to 50/100(Commune With Chulho)."
              ],
              "specRows": [
                {
                  "label": "SP Cost",
                  "before": "62",
                  "after": "68",
                  "scope": "",
                  "source": "Increases SP consumption from 62 to 68."
                },
                {
                  "label": "Damage",
                  "before": "5750%/7250%(Commune With Chulho)Atk",
                  "after": "7950%/8750%(Commune With Chulho)Atk",
                  "scope": "Lv 7",
                  "source": "Increases damage from 5750%/7250%(Commune With Chulho)Atk to 7950%/8750%(Commune With Chulho)Atk based on level 7."
                },
                {
                  "label": "Factor Weight Of Mystical Creature Skill Level In Skill Formula",
                  "before": "30/50(Commune With Chulho)",
                  "after": "50/100(Commune With Chulho)",
                  "scope": "",
                  "source": "Increases factor weight of Mystical Creature skill level in skill formula from 30/50(Commune With Chulho) to 50/100(Commune With Chulho)."
                }
              ]
            },
            {
              "skillName": "Howling of Chulho",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/spirit-handler/rebalance_3.md",
              "section": "17.2",
              "notes": [
                "Increases SP consumption from 68 to 72"
              ],
              "specRows": [
                {
                  "label": "SP Cost",
                  "before": "68",
                  "after": "72",
                  "scope": "",
                  "source": "Increases SP consumption from 68 to 72"
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
          "id": 5440,
          "imageFile": "5440.png",
          "name": "Marine Festival of Kisul",
          "maxLevel": 5,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "buff",
          "target": "Instant Cast",
          "recoversAp": "4",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Marine_Festival_of_Kisul",
          "description": "Using the power of the sea that Gwisul possesses, it temporarily increases the POW, CRT, and CON of yourself and the party members around you.\nWhen you acquire [Commune With Kisul], the range of effect increases and the duration is doubled.\nDoes not stack with Cardinal's [Benedictum] effect.",
          "levelDetails": [
            {
              "level": 1,
              "text": "POW,CRT,CON +2/Duration: 60 sec\nRange: 5x5 cell/Range(Commune): 9x9 cell"
            },
            {
              "level": 2,
              "text": "POW,CRT,CON +4/Duration: 75 sec\nRange: 7x7 cell/Range(Commune): 11x11 cell"
            },
            {
              "level": 3,
              "text": "POW,CRT,CON +6/Duration: 90 sec\nRange: 9x9 cell/Range(Commune): 13x13 cell"
            },
            {
              "level": 4,
              "text": "POW,CRT,CON +8/Duration: 105 sec\nRange: 11x11 cell/Range(Commune): 15x15 cell"
            },
            {
              "level": 5,
              "text": "POW,CRT,CON +10/Duration: 120 sec\nRange: 13x13 cell/Range(Commune): 17x17 cell"
            }
          ],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "1 second",
          "castDelay": "1 second",
          "cooldown": "2 seconds",
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
            }
          ],
          "spCost": "57 + (Skill Level x 4)",
          "duration": "60 ~ 120 seconds",
          "areaOfEffect": "5 x 5 ~ 13 x 13 9 x 9 ~ 17 x 17 (with Commune with Kisul )",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5440.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5440",
          "tree": {
            "idx": 17,
            "row": 2,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 5433,
                "level": 3,
                "name": "Mystical Creature Mastery",
                "visible": true
              },
              {
                "id": 5439,
                "level": 3,
                "name": "Kisul Water Spraying",
                "visible": true
              }
            ]
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
                "value": "57 + (Skill Level x 4)"
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
                "value": "1 second"
              },
              {
                "label": "Cooldown",
                "value": "2 seconds"
              },
              {
                "label": "Target",
                "value": "Instant Cast"
              },
              {
                "label": "AP Generated",
                "value": "4"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "pow",
                    "label": "POW"
                  },
                  {
                    "id": "crt",
                    "label": "CRT"
                  },
                  {
                    "id": "con",
                    "label": "CON"
                  },
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
                    "id": "effect",
                    "label": "Effect"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "duration": "60 seconds",
                      "pow": "+2",
                      "crt": "+2",
                      "con": "+2",
                      "area-of-effect": "5x5",
                      "effect": "Range(Commune): 9 x 9 cells",
                      "sp-cost": "80"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "75 seconds",
                      "pow": "+4",
                      "crt": "+4",
                      "con": "+4",
                      "area-of-effect": "7x7",
                      "effect": "Range(Commune): 11 x 11 cells",
                      "sp-cost": "90"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "90 seconds",
                      "pow": "+6",
                      "crt": "+6",
                      "con": "+6",
                      "area-of-effect": "9x9",
                      "effect": "Range(Commune): 13 x 13 cells",
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "105 seconds",
                      "pow": "+8",
                      "crt": "+8",
                      "con": "+8",
                      "area-of-effect": "11x11",
                      "effect": "Range(Commune): 15 x 15 cells",
                      "sp-cost": "110"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "120 seconds",
                      "pow": "+10",
                      "crt": "+10",
                      "con": "+10",
                      "area-of-effect": "13x13",
                      "effect": "Range(Commune): 17 x 17 cells",
                      "sp-cost": "120"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [
            {
              "skillName": "Marine Festival of Kisul",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/spirit-handler/rebalance_2.md",
              "section": "18.4",
              "notes": [
                "Increases AP recovery rate from 2 to 4."
              ],
              "specRows": [
                {
                  "label": "AP Generated",
                  "before": "2",
                  "after": "4",
                  "scope": "",
                  "source": "Increases AP recovery rate from 2 to 4."
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
          "id": 5441,
          "imageFile": "5441.png",
          "name": "Sandy Festival of Kisul",
          "maxLevel": 5,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "buff",
          "target": "Instant Cast",
          "recoversAp": "4",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Sandy_Festival_of_Kisul",
          "description": "Using the power of the sea that Gwiseol possesses, he increases the SPL, WIS, and STA of himself and the party members around him for a certain period of time.\nWhen you acquire [Commune With Kisul], the range of effect increases and the duration is doubled.\nDoes not stack with Cardinal's [Religio] effect.",
          "levelDetails": [
            {
              "level": 1,
              "text": "SPL,WIS,STA +2/Duration: 60 sec\nRange: 5x5 cell/Range(Commune): 9x9 cell"
            },
            {
              "level": 2,
              "text": "SPL,WIS,STA +4/Duration: 75 sec\nRange: 7x7 cell/Range(Commune): 11x11 cell"
            },
            {
              "level": 3,
              "text": "SPL,WIS,STA +6/Duration: 90 sec\nRange: 9x9 cell/Range(Commune): 13x13 cell"
            },
            {
              "level": 4,
              "text": "SPL,WIS,STA +8/Duration: 105 sec\nRange: 11x11 cell/Range(Commune): 15x15 cell"
            },
            {
              "level": 5,
              "text": "SPL,WIS,STA +10/Duration: 120 sec\nRange: 13x13 cell/Range(Commune): 17x17 cell"
            }
          ],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "1 second",
          "castDelay": "1 second",
          "cooldown": "2 seconds",
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
            }
          ],
          "spCost": "70 + (Skill Level x 10)",
          "duration": "60 ~ 120 seconds",
          "areaOfEffect": "5 x 5 ~ 13 x 13 9 x 9 ~ 17 x 17 (with Commune with Kisul )",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5441.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5441",
          "tree": {
            "idx": 18,
            "row": 2,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 5433,
                "level": 3,
                "name": "Mystical Creature Mastery",
                "visible": true
              },
              {
                "id": 5439,
                "level": 3,
                "name": "Kisul Water Spraying",
                "visible": true
              }
            ]
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
                "value": "1.5 seconds"
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
                "value": "Instant Cast"
              },
              {
                "label": "AP Generated",
                "value": "4"
              }
            ],
            "levelTables": [
              {
                "title": "Level Scaling",
                "columns": [
                  {
                    "id": "spl",
                    "label": "SPL"
                  },
                  {
                    "id": "wis",
                    "label": "WIS"
                  },
                  {
                    "id": "sta",
                    "label": "STA"
                  },
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
                    "id": "effect",
                    "label": "Effect"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "duration": "60 seconds",
                      "spl": "+2",
                      "wis": "+2",
                      "sta": "+2",
                      "area-of-effect": "5x5",
                      "effect": "Range(Commune): 9 x 9 cells",
                      "sp-cost": "80"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "75 seconds",
                      "spl": "+4",
                      "wis": "+4",
                      "sta": "+4",
                      "area-of-effect": "7x7",
                      "effect": "Range(Commune): 11 x 11 cells",
                      "sp-cost": "90"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "90 seconds",
                      "spl": "+6",
                      "wis": "+6",
                      "sta": "+6",
                      "area-of-effect": "9x9",
                      "effect": "Range(Commune): 13 x 13 cells",
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "105 seconds",
                      "spl": "+8",
                      "wis": "+8",
                      "sta": "+8",
                      "area-of-effect": "11x11",
                      "effect": "Range(Commune): 15 x 15 cells",
                      "sp-cost": "110"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "120 seconds",
                      "spl": "+10",
                      "wis": "+10",
                      "sta": "+10",
                      "area-of-effect": "13x13",
                      "effect": "Range(Commune): 17 x 17 cells",
                      "sp-cost": "120"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [
            {
              "skillName": "Sandy Festival of Kisul",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/spirit-handler/rebalance_2.md",
              "section": "18.5",
              "notes": [
                "Increases AP recovery rate from 2 to 4."
              ],
              "specRows": [
                {
                  "label": "AP Generated",
                  "before": "2",
                  "after": "4",
                  "scope": "",
                  "source": "Increases AP recovery rate from 2 to 4."
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
          "id": 5445,
          "imageFile": "5445.png",
          "name": "Hyunrok Breeze",
          "maxLevel": 7,
          "prerequisiteText": "Mystical Creature Mastery 3, Colors of Hyunrok 3",
          "group": "Active",
          "type": "Magic",
          "target": "1 Cell Ground Target",
          "recoversAp": "4",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Hyunrok_Breeze",
          "description": "Using the mysterious power of Hyeonrok, creates wind on the ground and inflicts neutral magic damage every 0.3 seconds for 4.5 seconds to targets within the range.\nDeals additional damage depends on level of Mystical Creature Mastery user learned, user's base level and SPL.\nIf the user learned Commune With Hyunrok, increases skill damage.\nDamage property can be changed according to Colors of Hyunrok.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 1400+(Mystical Creature Mastery Lv x20)%\nMATK(Commune With Chulho) 1700+(Mystical Creature Mastery Lv x40)%\nRange: 5x5cell"
            },
            {
              "level": 2,
              "text": "MATK 2150+(Mystical Creature Mastery Lv x20)%\nMATK(Commune With Chulho) 2650+(Mystical Creature Mastery Lv x40)%\nRange: 5x5cell"
            },
            {
              "level": 3,
              "text": "MATK 2900+(Mystical Creature Mastery Lv x20)%\nMATK(Commune With Chulho) 3600+(Mystical Creature Mastery Lv x40)%\nRange: 7x7cell"
            },
            {
              "level": 4,
              "text": "MATK 3650+(Mystical Creature Mastery Lv x20)%\nMATK(Commune With Chulho) 4550+(Mystical Creature Mastery Lv x40)%\nRange: 7x7cell"
            },
            {
              "level": 5,
              "text": "MATK 4400+(Mystical Creature Mastery Lv x20)%\nMATK(Commune With Chulho) 5500+(Mystical Creature Mastery Lv x40)%\nRange: 9x9cell"
            },
            {
              "level": 6,
              "text": "MATK 5150+(Mystical Creature Mastery Lv x20)%\nMATK(Commune With Chulho) 6450+(Mystical Creature Mastery Lv x40)%\nRange: 9x9cell"
            },
            {
              "level": 7,
              "text": "MATK 5900+(Mystical Creature Mastery Lv x20)%\nMATK(Commune With Chulho) 7400+(Mystical Creature Mastery Lv x40)%\nRange: 11x11cell"
            }
          ],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "3 seconds",
          "castDelay": "0.5 seconds",
          "cooldown": "4.5 seconds",
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
                  "value": "64"
                },
                {
                  "level": 3,
                  "value": "70"
                },
                {
                  "level": 4,
                  "value": "76"
                },
                {
                  "level": 5,
                  "value": "82"
                },
                {
                  "level": 6,
                  "value": "88"
                },
                {
                  "level": 7,
                  "value": "94"
                }
              ]
            }
          ],
          "spCost": "50 + (Skill Level × 6)",
          "areaOfEffect": "5 x 5 ~ 11 x 11",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5445.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5445",
          "tree": {
            "idx": 19,
            "row": 2,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 5433,
                "level": 3,
                "name": "Mystical Creature Mastery",
                "visible": true
              },
              {
                "id": 5444,
                "level": 3,
                "name": "Colors of Hyunrok",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "7"
              },
              {
                "label": "SP Cost",
                "value": "50 + (Skill Level × 6)"
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
                "value": "4.5 seconds"
              },
              {
                "label": "Target",
                "value": "1 Cell Ground Target"
              },
              {
                "label": "AP Generated",
                "value": "4"
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
                      "sp-cost": "58"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "area-of-effect": "5x5",
                      "sp-cost": "64"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "70"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "7x7",
                      "sp-cost": "76"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "9x9",
                      "sp-cost": "82"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "area-of-effect": "9x9",
                      "sp-cost": "88"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "area-of-effect": "11x11",
                      "sp-cost": "94"
                    }
                  }
                ],
                "formulaRows": []
              }
            ]
          },
          "balanceNotes": [
            {
              "skillName": "Hyunrok Breeze",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/spirit-handler/rebalance_2.md",
              "section": "18.6",
              "notes": [
                "Increases SP consumption from 92 to 94 based on level 7.",
                "Increases AP recovery rate from 3 to 4.",
                "Increases damage from 2250%/4000%(Commune With Hyunrok)Matk to 4800%/6300%(Commune With Hyunrok)Matk based on level 7."
              ],
              "specRows": [
                {
                  "label": "SP Cost",
                  "before": "92",
                  "after": "94",
                  "scope": "Lv 7",
                  "source": "Increases SP consumption from 92 to 94 based on level 7."
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
                  "before": "2250%/4000%(Commune With Hyunrok)Matk",
                  "after": "4800%/6300%(Commune With Hyunrok)Matk",
                  "scope": "Lv 7",
                  "source": "Increases damage from 2250%/4000%(Commune With Hyunrok)Matk to 4800%/6300%(Commune With Hyunrok)Matk based on level 7."
                }
              ]
            },
            {
              "skillName": "Hyunrok Breeze",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/spirit-handler/rebalance_3.md",
              "section": "17.5",
              "notes": [
                "Increases base damage from 4800%/6300%Matk to 5900%/7400%Matk per hit based on level 7."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "4800%/6300%Matk",
                  "after": "5900%/7400%Matk per hit",
                  "scope": "Lv 7",
                  "source": "Increases base damage from 4800%/6300%Matk to 5900%/7400%Matk per hit based on level 7."
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
          "id": 5437,
          "imageFile": "5437.png",
          "name": "Hogogong Strike",
          "maxLevel": 7,
          "prerequisiteText": "basic skill",
          "group": "Active",
          "type": "Range Physical",
          "target": "Instant Cast",
          "recoversAp": "1, 2(if Commune With Chulho is learned)",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Hogogong_Strike",
          "description": "[Hogogong effect] Attacks surrounding targets with the Iron Tiger's front leg punch, inflicting long-range physical DMG 3 times.\nDMG increases further based on the level of the Spirit Understanding skill, the caster's base level, and POW, and critical DMG is applied based on the caster's critical probability.\nIn case of critical DMG, half of the total critical DMG increase options is applied.\nIf you acquire [Commune With Chulho], AP recovery amount and DMG increase.",
          "levelDetails": [
            {
              "level": 1,
              "text": "1 Per hit ATK 380+(Mystical Creature Mastery Lv x10)%\n1 Per hit ATK(Commune) 600+(Mystical Creature Mastery Lv x20)%\nRange: 7x7 cell"
            },
            {
              "level": 2,
              "text": "1 Per hit ATK 580+(Mystical Creature Mastery Lv x10)%\n1 Per hit ATK(Commune) 950+(Mystical Creature Mastery Lv x20)%\nRange: 7x7 cell"
            },
            {
              "level": 3,
              "text": "1 Per hit ATK 780+(Mystical Creature Mastery Lv x10)%\n1 Per hit ATK(Commune) 1300+(Mystical Creature Mastery Lv x20)%\nRange: 7x7 cell"
            },
            {
              "level": 4,
              "text": "1 Per hit ATK 980+(Mystical Creature Mastery Lv x10)%\n1 Per hit ATK(Commune) 1650+(Mystical Creature Mastery Lv x20)%\nRange: 9x9 cell"
            },
            {
              "level": 5,
              "text": "1 Per hit ATK 1180+(Mystical Creature Mastery Lv x10)%\n1 Per hit ATK(Commune) 2000+(Mystical Creature Mastery Lv x20)%\nRange: 9x9 cell"
            },
            {
              "level": 6,
              "text": "1 Per hit ATK 1380+(Mystical Creature Mastery Lv x10)%\n1 Per hit ATK(Commune) 2350+(Mystical Creature Mastery Lv x20)%\nRange: 9x9 cell"
            },
            {
              "level": 7,
              "text": "1 Per hit ATK 1580+(Mystical Creature Mastery Lv x10)%\n1 Per hit ATK(Commune) 2700+(Mystical Creature Mastery Lv x20)%\nRange: 11x11 cell"
            }
          ],
          "levelExtras": [
            {
              "label": "SP Cost",
              "values": [
                {
                  "level": 1,
                  "value": "67"
                },
                {
                  "level": 2,
                  "value": "70"
                },
                {
                  "level": 3,
                  "value": "73"
                },
                {
                  "level": 4,
                  "value": "76"
                },
                {
                  "level": 5,
                  "value": "79"
                },
                {
                  "level": 6,
                  "value": "82"
                },
                {
                  "level": 7,
                  "value": "85"
                }
              ]
            }
          ],
          "spCost": "47 + (Skill Level x 3)",
          "fixedCastTime": "1 second",
          "cooldown": "0.35 seconds",
          "castRange": "7 x 7 ~ 11 x 11 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5437.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5437",
          "tree": {
            "idx": 22,
            "row": 3,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 5433,
                "level": 5,
                "name": "Mystical Creature Mastery",
                "visible": true
              },
              {
                "id": 5436,
                "level": 3,
                "name": "Howling of Chulho",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "7"
              },
              {
                "label": "SP Cost",
                "value": "47 + (Skill Level x 3)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "1 second"
              },
              {
                "label": "Cooldown",
                "value": "0.35 seconds"
              },
              {
                "label": "Cast Range",
                "value": "7 x 7 ~ 11 x 11 cells"
              },
              {
                "label": "Target",
                "value": "Instant Cast"
              },
              {
                "label": "AP Generated",
                "value": "1, 2(if Commune With Chulho is learned)"
              }
            ],
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
                      "sp-cost": "67"
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
                      "sp-cost": "73"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "area-of-effect": "9x9",
                      "sp-cost": "76"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "area-of-effect": "9x9",
                      "sp-cost": "79"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "area-of-effect": "9x9",
                      "sp-cost": "82"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "area-of-effect": "11x11",
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
              "skillName": "Hogogong Strike",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/spirit-handler/rebalance_2.md",
              "section": "18.3",
              "notes": [
                "Increases SP consumption from 68 to 72 based on level 7.",
                "Increases damage from 900%/1500%(Commune With Chulho)Atk to 1580%/2700%(Commune With Chulho)Atk per hit based on level 7.",
                "Reduces cooldown from 0.5 seconds to 0.35 seconds."
              ],
              "specRows": [
                {
                  "label": "SP Cost",
                  "before": "68",
                  "after": "72",
                  "scope": "Lv 7",
                  "source": "Increases SP consumption from 68 to 72 based on level 7."
                },
                {
                  "label": "Damage",
                  "before": "900%/1500%(Commune With Chulho)Atk",
                  "after": "1580%/2700%(Commune With Chulho)Atk per hit",
                  "scope": "Lv 7",
                  "source": "Increases damage from 900%/1500%(Commune With Chulho)Atk to 1580%/2700%(Commune With Chulho)Atk per hit based on level 7."
                },
                {
                  "label": "Cooldown",
                  "before": "0.5 seconds",
                  "after": "0.35 seconds",
                  "scope": "",
                  "source": "Reduces cooldown from 0.5 seconds to 0.35 seconds."
                }
              ]
            },
            {
              "skillName": "Hogogong Strike",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/spirit-handler/rebalance_3.md",
              "section": "17.3",
              "notes": [
                "Increases SP consumption from 72 to 85 based on level 7."
              ],
              "specRows": [
                {
                  "label": "SP Cost",
                  "before": "72",
                  "after": "85",
                  "scope": "Lv 7",
                  "source": "Increases SP consumption from 72 to 85 based on level 7."
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
          "id": 5442,
          "imageFile": "5442.png",
          "name": "Kisul Rampage",
          "maxLevel": 7,
          "prerequisiteText": "Mystical Creature Mastery 5, Marine Festival of Kisul 2, Sandy Festival of Kisul 2",
          "group": "Active",
          "type": "Resource Consumption",
          "target": "Instant Cast",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Kisul_Rampage",
          "description": "Using the powerful healing effect of Kisul.\nRecovers 2 AP every 1 second to all party members, excluding the caster, with 7 x 7 cells around the caster.\nThe caster cannot use other skills while the effect is active, and the effect is canceled if the caster moves from their current cell due to movement or knockback effects.\nIf Commune with Kisul is learned, the area of effect increases to 11x11 cells, and the AP recovery amount increases to 4.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Duration : 4 seconds"
            },
            {
              "level": 2,
              "text": "Duration : 5 seconds"
            },
            {
              "level": 3,
              "text": "Duration : 6 seconds"
            },
            {
              "level": 4,
              "text": "Duration : 7 seconds"
            },
            {
              "level": 5,
              "text": "Duration : 8 seconds"
            },
            {
              "level": 6,
              "text": "Duration : 9 seconds"
            },
            {
              "level": 7,
              "text": "Duration : 10 seconds"
            }
          ],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "3 seconds",
          "castDelay": "1 second",
          "cooldown": "60 seconds",
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
                  "value": "100"
                },
                {
                  "level": 3,
                  "value": "110"
                },
                {
                  "level": 4,
                  "value": "120"
                },
                {
                  "level": 5,
                  "value": "130"
                },
                {
                  "level": 6,
                  "value": "140"
                },
                {
                  "level": 7,
                  "value": "150"
                }
              ]
            }
          ],
          "spCost": "80 + (Skill Level x 10)",
          "duration": "(3 + Skill Level) seconds",
          "areaOfEffect": "7 x 7 11 x 11 (with Commune with Kisul )",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5442.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5442",
          "tree": {
            "idx": 24,
            "row": 3,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 5433,
                "level": 5,
                "name": "Mystical Creature Mastery",
                "visible": true
              },
              {
                "id": 5440,
                "level": 2,
                "name": "Marine Festival of Kisul",
                "visible": true
              },
              {
                "id": 5441,
                "level": 2,
                "name": "Sandy Festival of Kisul",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "7"
              },
              {
                "label": "SP Cost",
                "value": "80 + (Skill Level x 10)"
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
                "value": "60 seconds"
              },
              {
                "label": "Target",
                "value": "Instant Cast"
              },
              {
                "label": "Area of Effect",
                "value": "7 x 7 11 x 11 (with Commune with Kisul )"
              },
              {
                "label": "Pulse",
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
                    "id": "duration",
                    "label": "Duration"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "duration": "4 seconds",
                      "sp-cost": "90"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "5 seconds",
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "6 seconds",
                      "sp-cost": "110"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "7 seconds",
                      "sp-cost": "120"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "8 seconds",
                      "sp-cost": "130"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "duration": "9 seconds",
                      "sp-cost": "140"
                    }
                  },
                  {
                    "level": 7,
                    "values": {
                      "duration": "10 seconds",
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
              "skillName": "Kisul Rampage",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/spirit-handler/rebalance_3.md",
              "section": "17.4",
              "notes": [
                "Reduces AP recovery rate from 3/6 to 2/4."
              ],
              "specRows": [
                {
                  "label": "AP Generated",
                  "before": "3/6",
                  "after": "2/4",
                  "scope": "",
                  "source": "Reduces AP recovery rate from 3/6 to 2/4."
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
          "id": 5446,
          "imageFile": "5446.png",
          "name": "Hyunrok Cannon",
          "maxLevel": 7,
          "prerequisiteText": "Mystical Creature Mastery 5, Hyunrok Breeze 3",
          "group": "Active",
          "type": "Magic",
          "target": "Single Target",
          "recoversAp": "1, 2(if Commune With Hyunrok is learned)",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Hyunrok_Cannon",
          "description": "Using the mysterious power of Hyunrok, fires a powerful magic cannon at the target.\nDeals additional damage depends on level of Mystical Creature Mastery user learned, user's base level and SPL.\nIf the user learned Commune With Hyunrok, increases skill damage and increases AP recovery amount.\nDamage property can be changed according to Colors of Hyunrok.",
          "levelDetails": [
            {
              "level": 1,
              "text": "MATK 2600+(Mystical Creature Mastery Lv x50)%\nMATK(Commune) 2900+(Mystical Creature Mastery Lv x75)%"
            },
            {
              "level": 2,
              "text": "MATK 4150+(Mystical Creature Mastery Lv x50)%\nMATK(Commune) 4750+(Mystical Creature Mastery Lv x75)%"
            },
            {
              "level": 3,
              "text": "MATK 5700+(Mystical Creature Mastery Lv x50)%\nMATK(Commune) 6600+(Mystical Creature Mastery Lv x75)%"
            },
            {
              "level": 4,
              "text": "MATK 7250+(Mystical Creature Mastery Lv x50)%\nMATK(Commune) 8450+(Mystical Creature Mastery Lv x75)%"
            },
            {
              "level": 5,
              "text": "MATK 8800+(Mystical Creature Mastery Lv x50)%\nMATK(Commune) 10300+(Mystical Creature Mastery Lv x75)%"
            },
            {
              "level": 6,
              "text": "MATK 10350+(Mystical Creature Mastery Lv x50)%\nMATK(Commune) 12150+(Mystical Creature Mastery Lv x75)%"
            },
            {
              "level": 7,
              "text": "MATK 11900+(Mystical Creature Mastery Lv x50)%\nMATK(Commune) 14000+(Mystical Creature Mastery Lv x75)%"
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
                  "value": "50"
                },
                {
                  "level": 3,
                  "value": "53"
                },
                {
                  "level": 4,
                  "value": "56"
                },
                {
                  "level": 5,
                  "value": "59"
                },
                {
                  "level": 6,
                  "value": "62"
                },
                {
                  "level": 7,
                  "value": "65"
                }
              ]
            }
          ],
          "spCost": "41 + (Skill Level × 3)",
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "2 seconds",
          "cooldown": "0.3 seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5446.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5446",
          "tree": {
            "idx": 26,
            "row": 3,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 5433,
                "level": 5,
                "name": "Mystical Creature Mastery",
                "visible": true
              },
              {
                "id": 5445,
                "level": 3,
                "name": "Hyunrok Breeze",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "7"
              },
              {
                "label": "SP Cost",
                "value": "41 + (Skill Level × 3)"
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
                "label": "Cooldown",
                "value": "0.3 seconds"
              },
              {
                "label": "Target",
                "value": "Single Target"
              },
              {
                "label": "AP Generated",
                "value": "1, 2(if Commune With Hyunrok is learned)"
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
                      "sp-cost": "50"
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
                      "sp-cost": "56"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "59"
                    }
                  },
                  {
                    "level": 6,
                    "values": {
                      "sp-cost": "62"
                    }
                  },
                  {
                    "level": 7,
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
              "skillName": "Hyunrok Cannon",
              "versionId": "rebalance-2",
              "versionLabel": "Rebalance 2",
              "file": "rebalances/spirit-handler/rebalance_2.md",
              "section": "18.7",
              "notes": [
                "Removes 0.5 seconds delay after skill.",
                "Increases SP consumption from 62 to 74 based on level 7.",
                "Increases damage from 3400%/4400%(Commune With Hyunrok)Matk to 7300%/8500%(Commune With Hyunrok)Matk based on level 7."
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
                  "before": "62",
                  "after": "74",
                  "scope": "Lv 7",
                  "source": "Increases SP consumption from 62 to 74 based on level 7."
                },
                {
                  "label": "Damage",
                  "before": "3400%/4400%(Commune With Hyunrok)Matk",
                  "after": "7300%/8500%(Commune With Hyunrok)Matk",
                  "scope": "Lv 7",
                  "source": "Increases damage from 3400%/4400%(Commune With Hyunrok)Matk to 7300%/8500%(Commune With Hyunrok)Matk based on level 7."
                }
              ]
            },
            {
              "skillName": "Hyunrok Cannon",
              "versionId": "rebalance-3",
              "versionLabel": "Rebalance 3",
              "file": "rebalances/spirit-handler/rebalance_3.md",
              "section": "17.6",
              "notes": [
                "Increases cast range from 9 cells to 11 cells.",
                "Reduces SP consumption from 74 to 65 based on level 7.",
                "Increases base damage from 7350%/8500%Matk to 11900%/14000%Matk based on level 7."
              ],
              "specRows": [
                {
                  "label": "Cast Range",
                  "before": "9 cells",
                  "after": "11 cells",
                  "scope": "",
                  "source": "Increases cast range from 9 cells to 11 cells."
                },
                {
                  "label": "SP Cost",
                  "before": "74",
                  "after": "65",
                  "scope": "Lv 7",
                  "source": "Reduces SP consumption from 74 to 65 based on level 7."
                },
                {
                  "label": "Damage",
                  "before": "7350%/8500%Matk",
                  "after": "11900%/14000%Matk",
                  "scope": "Lv 7",
                  "source": "Increases base damage from 7350%/8500%Matk to 11900%/14000%Matk based on level 7."
                }
              ]
            },
            {
              "skillName": "Hyunrok Cannon",
              "versionId": "rebalance-4",
              "versionLabel": "Rebalance 4",
              "file": "rebalances/spirit-handler/rebalance_4.md",
              "section": "18.2",
              "notes": [
                "Increases base damage from 11900+(Mystical Creature level x 50)%/14000+(Mystical Creature level x 75)%(Commune With Hyunrok)Matk to 15450+(Mystical Creature level x 50)%/18250+(Mystical Creature level x 75)%(Commune With Hyunrok)Matk based on level 7."
              ],
              "specRows": [
                {
                  "label": "Damage",
                  "before": "11900+(Mystical Creature level x 50)%/14000+(Mystical Creature level x 75)%(Commune With Hyunrok)Matk",
                  "after": "15450+(Mystical Creature level x 50)%/18250+(Mystical Creature level x 75)%(Commune With Hyunrok)Matk",
                  "scope": "Lv 7",
                  "source": "Increases base damage from 11900+(Mystical Creature level x 50)%/14000+(Mystical Creature level x 75)%(Commune With Hyunrok)Matk to 15450+(Mystical Creature level x 50)%/18250+(Mystical Creature level x 75)%(Commune With Hyunrok)Matk based on level 7."
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
          "id": 5507,
          "imageFile": "5507.png",
          "name": "Hyunrok Spirit Power",
          "maxLevel": 7,
          "prerequisiteText": "Mystical Creature Mastery level 7, Hyunrok Breeze level 5",
          "group": "Active",
          "type": "Magic",
          "target": "Single target",
          "recoversAp": "1",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Unleashes the powerful spirit power of Hyunrok to inflicts neutral property magical damage to the target and surrounding enemies around the target for 7 hits.\nDeals additional damage depends on level of Mystical Creature Mastery user learned, user's base level and SPL.\nDamage property can be changed according to Colors of Hyunrok.",
          "levelDetails": [
            {
              "level": 1,
              "text": "(550 + (Mystical Creature Mastery level x 30))% Matk per hit / 5 x 5 cells."
            },
            {
              "level": 2,
              "text": "(750 + (Mystical Creature Mastery level x 30))% Matk per hit / 5 x 5 cells."
            },
            {
              "level": 3,
              "text": "(950 + (Mystical Creature Mastery level x 30))% Matk per hit / 5 x 5 cells."
            },
            {
              "level": 4,
              "text": "(1150 + (Mystical Creature Mastery level x 30))% Matk per hit / 7 x 7 cells."
            },
            {
              "level": 5,
              "text": "(1350 + (Mystical Creature Mastery level x 30))% Matk per hit / 7 x 7 cells."
            },
            {
              "level": 6,
              "text": "(1550 + (Mystical Creature Mastery level x 30))% Matk per hit / 7 x 7 cells."
            },
            {
              "level": 7,
              "text": "(1750 + (Mystical Creature Mastery level x 30))% Matk per hit / 9 x 9 cells."
            }
          ],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "2 seconds",
          "castDelay": "0.7 seconds",
          "cooldown": "1 second",
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5507.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5507",
          "tree": {
            "idx": 27,
            "row": 3,
            "col": 6,
            "columns": 7,
            "requirements": [
              {
                "id": 5433,
                "level": 7,
                "name": "Mystical Creature Mastery",
                "visible": true
              },
              {
                "id": 5445,
                "level": 5,
                "name": "Hyunrok Breeze",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Active Skill"
              },
              {
                "label": "Levels",
                "value": "7"
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
                "value": "0.7 seconds"
              },
              {
                "label": "Cooldown",
                "value": "1 second"
              },
              {
                "label": "Target",
                "value": "Single target"
              },
              {
                "label": "AP Generated",
                "value": "1"
              },
              {
                "label": "Property",
                "value": "neutral property magical damage"
              }
            ],
            "levelTables": []
          },
          "balanceNotes": [
            {
              "skillName": "Hyunrok Spirit Power",
              "versionId": "rebalance-5",
              "versionLabel": "Rebalance 5",
              "file": "rebalances/spirit-handler/added_skills.md",
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
          "id": 5434,
          "imageFile": "5434.png",
          "name": "Commune with Chulho",
          "maxLevel": 1,
          "prerequisiteText": "Mystical Creature Mastery 7, Hogogong Strike 3",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Commune_with_Chulho",
          "description": "Empowers the skills that borrow the power from Chulho through perfect communion with the mystical creature Chulho.",
          "levelDetails": [],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5434.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5434",
          "tree": {
            "idx": 29,
            "row": 4,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 5433,
                "level": 7,
                "name": "Mystical Creature Mastery",
                "visible": true
              },
              {
                "id": 5437,
                "level": 3,
                "name": "Hogogong Strike",
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
          "id": 5438,
          "imageFile": "5438.png",
          "name": "Commune with Kisul",
          "maxLevel": 1,
          "prerequisiteText": "Mystical Creature Mastery 7, Kisul Rampage 3",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Commune_with_Kisul",
          "description": "Empowers the skills that borrow the power from Kisul through perfect communion with the mystical creature Kisul.",
          "levelDetails": [],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5438.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5438",
          "tree": {
            "idx": 31,
            "row": 4,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 5433,
                "level": 7,
                "name": "Mystical Creature Mastery",
                "visible": true
              },
              {
                "id": 5442,
                "level": 3,
                "name": "Kisul Rampage",
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
          "id": 5443,
          "imageFile": "5443.png",
          "name": "Commune with Hyunrok",
          "maxLevel": 1,
          "prerequisiteText": "Mystical Creature Mastery 7, Hyunrok Cannon 3",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Commune_with_Hyunrok",
          "description": "Empowers the skills that borrow the power from Hyunrok through perfect communion with the mystical creature Hyunrok.",
          "levelDetails": [],
          "levelExtras": [],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5443.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5443",
          "tree": {
            "idx": 33,
            "row": 4,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 5433,
                "level": 7,
                "name": "Mystical Creature Mastery",
                "visible": true
              },
              {
                "id": 5446,
                "level": 3,
                "name": "Hyunrok Cannon",
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
          "id": 5447,
          "imageFile": "5447.png",
          "name": "Temporary Communion",
          "maxLevel": 5,
          "prerequisiteText": "Mystical Creature Mastery 10",
          "group": "Active(AP)",
          "type": "Supportive",
          "target": "Instant Cast",
          "recoversAp": "",
          "consumesAp": "150",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Temporary_Communion",
          "description": "Can be used if you have acquired at least one spirit communication skill for Chulho, Kisul, and Hyunrok.\nThrough the temporary communion with Chulho, Kisul and Hyunrok, the user is in the state of communion of all three mystical creatures for the certain duration.\nIncreases P.Atk, S.Matk and H.Plus for the duration.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Duration: 30sec/P.ATK/S.MATK/H.PLUS +3"
            },
            {
              "level": 2,
              "text": "Duration: 60sec/P.ATK/S.MATK/H.PLUS +6"
            },
            {
              "level": 3,
              "text": "Duration: 90sec/P.ATK/S.MATK/H.PLUS +9"
            },
            {
              "level": 4,
              "text": "Duration: 120sec/P.ATK/S.MATK/H.PLUS +12"
            },
            {
              "level": 5,
              "text": "Duration: 150sec/P.ATK/S.MATK/H.PLUS +15"
            }
          ],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "2 seconds",
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
                }
              ]
            }
          ],
          "spCost": "100",
          "duration": "30 ~ 150 seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5447.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5447",
          "tree": {
            "idx": 37,
            "row": 5,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 5433,
                "level": 10,
                "name": "Mystical Creature Mastery",
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
                "label": "SP Cost",
                "value": "100"
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
                "value": "0.5 seconds"
              },
              {
                "label": "Cooldown",
                "value": "60 seconds"
              },
              {
                "label": "Target",
                "value": "Instant Cast"
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
                    "id": "h-plus",
                    "label": "H.Plus"
                  },
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
                      "p-atk": "+3",
                      "s-matk": "+3",
                      "h-plus": "+3",
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "duration": "60 seconds",
                      "p-atk": "+6",
                      "s-matk": "+6",
                      "h-plus": "+6",
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "duration": "90 seconds",
                      "p-atk": "+9",
                      "s-matk": "+9",
                      "h-plus": "+9",
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "duration": "120 seconds",
                      "p-atk": "+12",
                      "s-matk": "+12",
                      "h-plus": "+12",
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "duration": "150 seconds",
                      "p-atk": "+15",
                      "s-matk": "+15",
                      "h-plus": "+15",
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
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 5448,
          "imageFile": "5448.png",
          "name": "Blessing of Mystical Creatures",
          "maxLevel": 5,
          "prerequisiteText": "Mystical Creature Mastery 10, Commune with Kisul 1",
          "group": "Active(AP)",
          "type": "Supportive",
          "target": "Single Target",
          "recoversAp": "",
          "consumesAp": "100",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Blessing_of_Mystical_Creatures",
          "description": "Gives the blessing of spiritual creatures to the Doram tribe and one party member other than yourself. Sets the target's AP to 200 and increases P.ATK and S.MATK for 10 seconds.\nWhen the effect time ends, AP becomes 0 and you cannot receive the blessings of spirits again for 1 minute.",
          "levelDetails": [
            {
              "level": 1,
              "text": "P.ATK/S.MATK +10"
            },
            {
              "level": 2,
              "text": "P.ATK/S.MATK +20"
            },
            {
              "level": 3,
              "text": "P.ATK/S.MATK +30"
            },
            {
              "level": 4,
              "text": "P.ATK/S.MATK +40"
            },
            {
              "level": 5,
              "text": "P.ATK/S.MATK +50"
            }
          ],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "2 seconds",
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
                }
              ]
            }
          ],
          "spCost": "100",
          "duration": "10 seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5448.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5448",
          "tree": {
            "idx": 39,
            "row": 5,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 5433,
                "level": 10,
                "name": "Mystical Creature Mastery",
                "visible": true
              },
              {
                "id": 5438,
                "level": 1,
                "name": "Commune with Kisul",
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
                "label": "SP Cost",
                "value": "100"
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
                "value": "0.5 seconds"
              },
              {
                "label": "Cooldown",
                "value": "60 seconds"
              },
              {
                "label": "Target",
                "value": "Single Target"
              },
              {
                "label": "Duration",
                "value": "10 seconds"
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
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "p-atk": "+10",
                      "s-matk": "+10",
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "p-atk": "+20",
                      "s-matk": "+20",
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "p-atk": "+30",
                      "s-matk": "+30",
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "p-atk": "+40",
                      "s-matk": "+40",
                      "sp-cost": "100"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "p-atk": "+50",
                      "s-matk": "+50",
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
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        }
      ]
    },
    {
      "id": "previous-1",
      "label": "Summoner",
      "pointLimit": 59,
      "tree": {
        "columns": 7,
        "rows": 10
      },
      "skills": [
        {
          "id": 5018,
          "imageFile": "5018.png",
          "name": "New Basic Skill",
          "maxLevel": 1,
          "prerequisiteText": "basic skill",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "",
          "description": "Enables the Basic Interface skills.\nTrade with other players, use emotes, Sit, create Chat rooms, create/join parties, and use the Kafra Storage.",
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
          "iconUrl": "assets/divine-pride/skills/5018.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5018",
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
          "id": 5019,
          "imageFile": "5019.png",
          "name": "Bite",
          "maxLevel": 1,
          "prerequisiteText": "New Basic Skill Lv. 1",
          "group": "Attack",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Bite",
          "description": "Bite at enemies. Inflicts more damage on weakened enemies.\nThis skill creates a chance of being activated twice at Base Level 30 or above. This chance increases every 30 Base levels.",
          "levelDetails": [
            {
              "level": 1,
              "text": "200% of ATK"
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
                  "value": "10"
                }
              ]
            },
            {
              "label": "Atk %",
              "values": [
                {
                  "level": 1,
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
                }
              ]
            },
            {
              "label": "Data 2",
              "values": [
                {
                  "level": 1,
                  "value": "50"
                }
              ]
            }
          ],
          "spCost": "10",
          "castRange": "Melee",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5019.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5019",
          "tree": {
            "idx": 1,
            "row": 0,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 5018,
                "level": 1,
                "name": "New Basic Skill",
                "visible": true
              }
            ]
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
              }
            ],
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
                      "sp-cost": "10",
                      "atk": "200",
                      "data-1": "1",
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
          "id": 5020,
          "imageFile": "5020.png",
          "name": "Hide",
          "maxLevel": 1,
          "prerequisiteText": "Bite Lv. 1",
          "group": "Support",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Hide",
          "description": "Hide in a bush to avoid attacks from enemies. Can be found by enemies' Detection skills.",
          "levelDetails": [],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "1 second",
          "cooldown": "15 seconds",
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
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "127"
                }
              ]
            }
          ],
          "spCost": "30",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5020.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5020",
          "tree": {
            "idx": 2,
            "row": 0,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 5019,
                "level": 1,
                "name": "Bite",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Support Skill"
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
                      "sp-cost": "30",
                      "data-1": "127"
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
          "id": 5021,
          "imageFile": "5021.png",
          "name": "Scratch",
          "maxLevel": 3,
          "prerequisiteText": "Hide Lv. 1",
          "group": "Attack",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Scratch",
          "description": "Claw at the selected enemy, wounding it. (This skill deals a small area of splash damage to surrounding enemies and creates a chance of Bleeding.)\nThis skill creates a chance of being activated twice at Base Level 30 or above. This chance increases every 30 Base levels.",
          "levelDetails": [
            {
              "level": 1,
              "text": "100% of ATK"
            },
            {
              "level": 2,
              "text": "150% of ATK"
            },
            {
              "level": 3,
              "text": "200% of ATK"
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
                  "value": "0"
                },
                {
                  "level": 2,
                  "value": "0"
                },
                {
                  "level": 3,
                  "value": "1"
                }
              ]
            },
            {
              "label": "Data 2",
              "values": [
                {
                  "level": 1,
                  "value": "800"
                },
                {
                  "level": 2,
                  "value": "900"
                },
                {
                  "level": 3,
                  "value": "1000"
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
                }
              ]
            }
          ],
          "spCost": "15 + (Skill Level x 5)",
          "castRange": "Melee",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5021.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5021",
          "tree": {
            "idx": 3,
            "row": 0,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 5020,
                "level": 1,
                "name": "Hide",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Attack Skill"
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
                "value": "0 seconds"
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
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "20",
                      "atk": "100",
                      "data-1": "0",
                      "data-2": "800",
                      "data-3": "1"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "25",
                      "atk": "150",
                      "data-1": "0",
                      "data-2": "900",
                      "data-3": "1"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "30",
                      "atk": "200",
                      "data-1": "1",
                      "data-2": "1000",
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
          "id": 5022,
          "imageFile": "5022.png",
          "name": "Stoop",
          "maxLevel": 1,
          "prerequisiteText": "Scratch Lv. 3",
          "group": "Support",
          "type": "",
          "target": "Self",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Stoop",
          "description": "Decreases incoming damage by 90% for 6 seconds. Knockback force-cancels this skill.",
          "levelDetails": [],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "1 second",
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
            },
            {
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "90"
                }
              ]
            }
          ],
          "spCost": "10",
          "duration": "6 seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5022.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5022",
          "tree": {
            "idx": 4,
            "row": 0,
            "col": 4,
            "columns": 7,
            "requirements": [
              {
                "id": 5021,
                "level": 3,
                "name": "Scratch",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Support Skill"
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
                "value": "15 seconds"
              },
              {
                "label": "Target",
                "value": "Self"
              },
              {
                "label": "Duration",
                "value": "6 seconds"
              }
            ],
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
                      "sp-cost": "10",
                      "data-1": "90"
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
          "id": 5023,
          "imageFile": "5023.png",
          "name": "Lope",
          "maxLevel": 3,
          "prerequisiteText": "Stoop Lv. 1",
          "group": "Move",
          "type": "",
          "target": "Ground",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Lope",
          "description": "Leap over to a targeted location.\nIf the targeted coordinates are not accessible, then you'll jump where you stand.\nCan't be used where Fly Wings can't be used.\nLearning Lope doubles the cast time of the Guild skill, Emergency Call. It also cools down twice longer than usual in the WoE area.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Move 6 cells away."
            },
            {
              "level": 2,
              "text": "Move 10 cells away."
            },
            {
              "level": 3,
              "text": "Move 14 cells away."
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
                  "value": "6 cells"
                },
                {
                  "level": 2,
                  "value": "10 cells"
                },
                {
                  "level": 3,
                  "value": "14 cells"
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
                  "value": "10"
                },
                {
                  "level": 3,
                  "value": "14"
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
                }
              ]
            }
          ],
          "spCost": "Skill Level × 10",
          "cooldown": "(Skill Level × 2) seconds",
          "castRange": "[2 + (Skill Level × 4)] cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5023.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5023",
          "tree": {
            "idx": 5,
            "row": 0,
            "col": 5,
            "columns": 7,
            "requirements": [
              {
                "id": 5022,
                "level": 1,
                "name": "Stoop",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Move Skill"
              },
              {
                "label": "Levels",
                "value": "3"
              },
              {
                "label": "SP Cost",
                "value": "Skill Level × 10"
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
                "value": "(Skill Level × 2) seconds"
              },
              {
                "label": "Cast Range",
                "value": "[2 + (Skill Level × 4)] cells"
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
                      "effect": "Move 6 cells away",
                      "sp-cost": "30",
                      "range": "6 cells",
                      "data-1": "6",
                      "data-2": "1"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Move 10 cells away",
                      "sp-cost": "30",
                      "range": "10 cells",
                      "data-1": "10",
                      "data-2": "1"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Move 14 cells away",
                      "sp-cost": "30",
                      "range": "14 cells",
                      "data-1": "14",
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
          "id": 5024,
          "imageFile": "5024.png",
          "name": "Sprite Marble",
          "maxLevel": 1,
          "prerequisiteText": "Leap Lv. 3",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Sprite_Marble",
          "description": "Employ sprites.\nMaxHP +1,000, MaxSP +100\nEmploy Sea, Earth, and Life Sprites.",
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
            },
            {
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "1000"
                }
              ]
            },
            {
              "label": "Data 2",
              "values": [
                {
                  "level": 1,
                  "value": "100"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5024.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5024",
          "tree": {
            "idx": 6,
            "row": 0,
            "col": 6,
            "columns": 7,
            "requirements": [
              {
                "id": 5023,
                "level": 3,
                "name": "Lope",
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
                      "sp-cost": "0",
                      "data-1": "1000",
                      "data-2": "100"
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
          "id": 5041,
          "imageFile": "5041.png",
          "name": "Fresh Shrimp",
          "maxLevel": 5,
          "prerequisiteText": "Sprite Marble Lv. 1",
          "group": "Seafood (Recovery)",
          "type": "",
          "target": "Player",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Fresh_Shrimp",
          "description": "Absorb the spirits of small fresh shrimps for 2 minutes, recovering a small amount of HP every time.\nThis skill restores HP by 50% of the amounts restored at Level 5 Heal every time.\nHeal bonus effects are also applied to the restored HP.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Recover every 10 sec."
            },
            {
              "level": 2,
              "text": "Recover every 9 sec."
            },
            {
              "level": 3,
              "text": "Recover every 8 sec."
            },
            {
              "level": 4,
              "text": "Recover every 7 sec."
            },
            {
              "level": 5,
              "text": "Recover every 6 sec."
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
                  "value": "9000"
                },
                {
                  "level": 3,
                  "value": "8000"
                },
                {
                  "level": 4,
                  "value": "7000"
                },
                {
                  "level": 5,
                  "value": "6000"
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
                  "value": "120000"
                },
                {
                  "level": 3,
                  "value": "120000"
                },
                {
                  "level": 4,
                  "value": "120000"
                },
                {
                  "level": 5,
                  "value": "120000"
                }
              ]
            }
          ],
          "spCost": "20 + (Skill Level × 2)",
          "cooldown": "(6 - Skill Level) seconds",
          "duration": "2 minutes",
          "castRange": "9 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5041.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5041",
          "tree": {
            "idx": 8,
            "row": 1,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 5024,
                "level": 1,
                "name": "Sprite Mable",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Seafood (Recovery) Skill"
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
                "value": "0 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "1 second"
              },
              {
                "label": "Cooldown",
                "value": "(6 - Skill Level) seconds"
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
                "value": "2 minutes"
              }
            ],
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
                      "effect": "Recover every 10 sec",
                      "sp-cost": "22",
                      "range": "9 cells",
                      "data-1": "10000",
                      "data-2": "120000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Recover every 9 sec",
                      "sp-cost": "24",
                      "range": "9 cells",
                      "data-1": "9000",
                      "data-2": "120000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Recover every 8 sec",
                      "sp-cost": "26",
                      "range": "9 cells",
                      "data-1": "8000",
                      "data-2": "120000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Recover every 7 sec",
                      "sp-cost": "28",
                      "range": "9 cells",
                      "data-1": "7000",
                      "data-2": "120000"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Recover every 6 sec",
                      "sp-cost": "30",
                      "range": "9 cells",
                      "data-1": "6000",
                      "data-2": "120000"
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
          "id": 5026,
          "imageFile": "5026.png",
          "name": "Silvervine Stem Spear",
          "maxLevel": 5,
          "prerequisiteText": "Sprite Marble Lv. 1",
          "group": "Plant (Attack)",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Silvervine_Stem_Spear",
          "description": "Penetrate enemies with the spirit of a silvervine stem.\nThis skill creates a chance of being activated twice at Base Level 30 or above. This chance increases every 30 Base levels.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Earth Magic / 700% of MATK / Bleeding Rate: 10%"
            },
            {
              "level": 2,
              "text": "Fire Magic / 700% of MATK / Bleeding Rate: 10%"
            },
            {
              "level": 3,
              "text": "Water Magic / 700% of MATK / Bleeding Rate: 10%"
            },
            {
              "level": 4,
              "text": "Wind Magic / 700% of MATK / Bleeding Rate: 10%"
            },
            {
              "level": 5,
              "text": "Ghost Magic / 700% of MATK / Bleeding Rate: 10%"
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "2 seconds",
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
                  "value": "700"
                },
                {
                  "level": 2,
                  "value": "700"
                },
                {
                  "level": 3,
                  "value": "700"
                },
                {
                  "level": 4,
                  "value": "700"
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
              "label": "Data 2",
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
                  "value": "1"
                },
                {
                  "level": 4,
                  "value": "4"
                },
                {
                  "level": 5,
                  "value": "8"
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
                }
              ]
            }
          ],
          "spCost": "40",
          "castRange": "9 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5026.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5026",
          "tree": {
            "idx": 9,
            "row": 1,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 5024,
                "level": 1,
                "name": "Sprite Mable",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Plant (Attack) Skill"
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
                "value": "0.5 seconds"
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
                "value": "1 second"
              },
              {
                "label": "Cast Range",
                "value": "9 cells"
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
                      "effect": "Earth Magic / Bleeding Rate: 10%",
                      "sp-cost": "40",
                      "range": "9 cells",
                      "atk": "700",
                      "data-1": "100",
                      "data-2": "2",
                      "data-3": "1"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Fire Magic / Bleeding Rate: 10%",
                      "sp-cost": "40",
                      "range": "9 cells",
                      "atk": "700",
                      "data-1": "100",
                      "data-2": "3",
                      "data-3": "1"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Water Magic / Bleeding Rate: 10%",
                      "sp-cost": "40",
                      "range": "9 cells",
                      "atk": "700",
                      "data-1": "100",
                      "data-2": "1",
                      "data-3": "1"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Wind Magic / Bleeding Rate: 10%",
                      "sp-cost": "40",
                      "range": "9 cells",
                      "atk": "700",
                      "data-1": "100",
                      "data-2": "4",
                      "data-3": "1"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Ghost Magic / Bleeding Rate: 10%",
                      "sp-cost": "40",
                      "range": "9 cells",
                      "atk": "700",
                      "data-1": "100",
                      "data-2": "8",
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
          "id": 5033,
          "imageFile": "5033.png",
          "name": "Picky Peck",
          "maxLevel": 5,
          "prerequisiteText": "Sprite Marble Lv. 1",
          "group": "Animal (Attack)",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Picky_Peck",
          "description": "Shoot the spirit of an angry picky at enemies. Inflicts double damage on enemies with less than 50% of HP.\nThis skill creates a chance of being activated twice at Base Level 30 or above. This chance increases every 30 Base levels.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Long-ranged Physical / 300% of ATK"
            },
            {
              "level": 2,
              "text": "Long-ranged Physical / 400% of ATK"
            },
            {
              "level": 3,
              "text": "Long-ranged Physical / 500% of ATK"
            },
            {
              "level": 4,
              "text": "Long-ranged Physical / 600% of ATK"
            },
            {
              "level": 5,
              "text": "Long-ranged Physical / 700% of ATK"
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
                }
              ]
            }
          ],
          "spCost": "8 + (Skill Level x 2)",
          "castRange": "9 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5033.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5033",
          "tree": {
            "idx": 10,
            "row": 1,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 5024,
                "level": 1,
                "name": "Sprite Mable",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Animal (Attack) Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "8 + (Skill Level x 2)"
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
                "value": "9 cells"
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
                      "effect": "Long-ranged Physical",
                      "sp-cost": "10",
                      "range": "9 cells",
                      "atk": "300",
                      "data-1": "50",
                      "data-2": "1"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Long-ranged Physical",
                      "sp-cost": "12",
                      "range": "9 cells",
                      "atk": "400",
                      "data-1": "50",
                      "data-2": "1"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Long-ranged Physical",
                      "sp-cost": "14",
                      "range": "9 cells",
                      "atk": "500",
                      "data-1": "50",
                      "data-2": "1"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Long-ranged Physical",
                      "sp-cost": "16",
                      "range": "9 cells",
                      "atk": "600",
                      "data-1": "50",
                      "data-2": "1"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Long-ranged Physical",
                      "sp-cost": "18",
                      "range": "9 cells",
                      "atk": "700",
                      "data-1": "50",
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
          "id": 5044,
          "imageFile": "5044.png",
          "name": "Soul Attack",
          "maxLevel": 1,
          "prerequisiteText": "Sprite Marble Lv. 1",
          "group": "Passive",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Soul_Attack",
          "description": "Basic attacks become Long-ranged attacks, throwing heavy souls at enemies.",
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
            },
            {
              "label": "Range",
              "values": [
                {
                  "level": 1,
                  "value": "14 cells"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5044.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5044",
          "tree": {
            "idx": 13,
            "row": 1,
            "col": 6,
            "columns": 7,
            "requirements": [
              {
                "id": 5024,
                "level": 1,
                "name": "Sprite Mable",
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
                    "id": "range",
                    "label": "Range"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "sp-cost": "0",
                      "range": "14 cells"
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
          "id": 5040,
          "imageFile": "5040.png",
          "name": "Bunch of Shrimp",
          "maxLevel": 5,
          "prerequisiteText": "Fresh Shrimp Lv. 3",
          "group": "Seafood (Supportive)",
          "type": "",
          "target": "All party members in one screen",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Bunch_of_Shrimp",
          "description": "Instantly restore a small amount of HP. The bunch of shrimps also temporarily increases ATK and MATK by 10%.\nRequires 1 Shrimp.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Lasts for 60 sec."
            },
            {
              "level": 2,
              "text": "Lasts for 90 sec."
            },
            {
              "level": 3,
              "text": "Lasts for 120 sec."
            },
            {
              "level": 4,
              "text": "Lasts for 150 sec."
            },
            {
              "level": 5,
              "text": "Lasts for 180 sec."
            }
          ],
          "fixedCastTime": "1 second",
          "castDelay": "1 second",
          "cooldown": "10 seconds",
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
                  "value": "48"
                },
                {
                  "level": 3,
                  "value": "52"
                },
                {
                  "level": 4,
                  "value": "56"
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
                  "value": "15 cells"
                },
                {
                  "level": 2,
                  "value": "15 cells"
                },
                {
                  "level": 3,
                  "value": "15 cells"
                },
                {
                  "level": 4,
                  "value": "15 cells"
                },
                {
                  "level": 5,
                  "value": "15 cells"
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
              "label": "Data 3",
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
              "label": "Data 4",
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
              "label": "Data 5",
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
          "spCost": "40 + (Skill Level x 4)",
          "variableCastTime": "[6 - (Skill Level)] seconds",
          "duration": "[30 + (Skill Level x 30)] seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5040.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5040",
          "tree": {
            "idx": 15,
            "row": 2,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 5041,
                "level": 3,
                "name": "Fresh Shrimp",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Seafood (Supportive) Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "40 + (Skill Level x 4)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "1 second"
              },
              {
                "label": "Variable Cast Time",
                "value": "[6 - (Skill Level)] seconds"
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
                "value": "All party members in one screen"
              },
              {
                "label": "Duration",
                "value": "[30 + (Skill Level x 30)] seconds"
              }
            ],
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
                  },
                  {
                    "id": "data-5",
                    "label": "Data 5"
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
                      "effect": "Lasts for 60 sec",
                      "sp-cost": "44",
                      "range": "15 cells",
                      "data-1": "60000",
                      "data-2": "10",
                      "data-3": "10",
                      "data-4": "5",
                      "data-5": "100"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Lasts for 90 sec",
                      "sp-cost": "48",
                      "range": "15 cells",
                      "data-1": "90000",
                      "data-2": "10",
                      "data-3": "10",
                      "data-4": "5",
                      "data-5": "100"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Lasts for 120 sec",
                      "sp-cost": "52",
                      "range": "15 cells",
                      "data-1": "120000",
                      "data-2": "10",
                      "data-3": "10",
                      "data-4": "5",
                      "data-5": "100"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Lasts for 150 sec",
                      "sp-cost": "56",
                      "range": "15 cells",
                      "data-1": "150000",
                      "data-2": "10",
                      "data-3": "10",
                      "data-4": "5",
                      "data-5": "100"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Lasts for 180 sec",
                      "sp-cost": "60",
                      "range": "15 cells",
                      "data-1": "180000",
                      "data-2": "10",
                      "data-3": "10",
                      "data-4": "5",
                      "data-5": "100"
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
          "id": 5029,
          "imageFile": "5029.png",
          "name": "Silvervine Root Twist",
          "maxLevel": 5,
          "prerequisiteText": "Silvervine Stem Spear Lv. 3",
          "group": "Plant (Supportive)",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Silvervine_Root_Twist",
          "description": "Bind enemies with the spirit of silvervine roots. The bound enemies receive Neutral damage.\nCan be canceled by Heaven's Drive and Trample. Can't be used on Boss monsters.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Lasts for 7 sec."
            },
            {
              "level": 2,
              "text": "Lasts for 9 sec."
            },
            {
              "level": 3,
              "text": "Lasts for 11 sec."
            },
            {
              "level": 4,
              "text": "Lasts for 13 sec."
            },
            {
              "level": 5,
              "text": "Lasts for 15 sec."
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
                  "value": "7000"
                },
                {
                  "level": 2,
                  "value": "9000"
                },
                {
                  "level": 3,
                  "value": "11000"
                },
                {
                  "level": 4,
                  "value": "13000"
                },
                {
                  "level": 5,
                  "value": "15000"
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
                }
              ]
            }
          ],
          "spCost": "10~18",
          "cooldown": "3~1 second(s)",
          "duration": "7~15 seconds",
          "castRange": "9 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5029.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5029",
          "tree": {
            "idx": 16,
            "row": 2,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 5026,
                "level": 3,
                "name": "SV Stem Spear",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Plant (Supportive) Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "10~18"
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
                "value": "3~1 second(s)"
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
                "value": "7~15 seconds"
              }
            ],
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
                      "effect": "Lasts for 7 sec",
                      "sp-cost": "10",
                      "range": "9 cells",
                      "data-1": "7000",
                      "data-2": "3"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Lasts for 9 sec",
                      "sp-cost": "12",
                      "range": "9 cells",
                      "data-1": "9000",
                      "data-2": "3"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Lasts for 11 sec",
                      "sp-cost": "14",
                      "range": "9 cells",
                      "data-1": "11000",
                      "data-2": "3"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Lasts for 13 sec",
                      "sp-cost": "16",
                      "range": "9 cells",
                      "data-1": "13000",
                      "data-2": "3"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Lasts for 15 sec",
                      "sp-cost": "18",
                      "range": "9 cells",
                      "data-1": "15000",
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
          "id": 5035,
          "imageFile": "5035.png",
          "name": "Arclouse Dash",
          "maxLevel": 5,
          "prerequisiteText": "Picky Peck Lv. 3",
          "group": "Animal (Supportive)",
          "type": "",
          "target": "Player",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Arclouse_Dash",
          "description": "Absorb the spirit of an Arclouse and temporarily become agile. This skill also increases Long-ranged Physical damage by 10% if its target is a Doram (you included).",
          "levelDetails": [
            {
              "level": 1,
              "text": "AGI +20 and increased MSPD for 60 sec."
            },
            {
              "level": 2,
              "text": "AGI +25 and increased MSPD for 70 sec."
            },
            {
              "level": 3,
              "text": "AGI +30 and increased MSPD for 80 sec."
            },
            {
              "level": 4,
              "text": "AGI +35 and increased MSPD for 90 sec."
            },
            {
              "level": 5,
              "text": "AGI +40 and increased MSPD for 100 sec."
            }
          ],
          "fixedCastTime": "0 seconds",
          "variableCastTime": "1 second",
          "castDelay": "1 second",
          "cooldown": "6 seconds",
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
              "label": "Data 3",
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
          "spCost": "10 + (Skill Level x 2)",
          "duration": "[50 + (Skill Level x 10)] seconds",
          "castRange": "9 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5035.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5035",
          "tree": {
            "idx": 17,
            "row": 2,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 5033,
                "level": 3,
                "name": "Picky Peck",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Animal (Supportive) Skill"
              },
              {
                "label": "Levels",
                "value": "5"
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
                "value": "1 second"
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
                "label": "Cast Range",
                "value": "9 cells"
              },
              {
                "label": "Target",
                "value": "Player"
              },
              {
                "label": "Duration",
                "value": "[50 + (Skill Level x 10)] seconds"
              }
            ],
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
                      "effect": "AGI +20 and increased MSPD for 60 sec",
                      "sp-cost": "12",
                      "range": "9 cells",
                      "data-1": "60000",
                      "data-2": "20",
                      "data-3": "25",
                      "data-4": "10"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "AGI +25 and increased MSPD for 70 sec",
                      "sp-cost": "14",
                      "range": "9 cells",
                      "data-1": "70000",
                      "data-2": "25",
                      "data-3": "25",
                      "data-4": "10"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "AGI +30 and increased MSPD for 80 sec",
                      "sp-cost": "16",
                      "range": "9 cells",
                      "data-1": "80000",
                      "data-2": "30",
                      "data-3": "25",
                      "data-4": "10"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "AGI +35 and increased MSPD for 90 sec",
                      "sp-cost": "18",
                      "range": "9 cells",
                      "data-1": "90000",
                      "data-2": "35",
                      "data-3": "25",
                      "data-4": "10"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "AGI +40 and increased MSPD for 100 sec",
                      "sp-cost": "20",
                      "range": "9 cells",
                      "data-1": "100000",
                      "data-2": "40",
                      "data-3": "25",
                      "data-4": "10"
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
          "id": 5038,
          "imageFile": "5038.png",
          "name": "Tuna Belly",
          "maxLevel": 5,
          "prerequisiteText": "Bunch of Shrimp Lv. 3",
          "group": "Seafood (Recovery)",
          "type": "",
          "target": "Player",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Tuna_Belly",
          "description": "Absorb the spirit of delicious tuna belly meat, healing a target by a certain amount of MaxHP.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Restores 10% of MaxHP."
            },
            {
              "level": 2,
              "text": "Restores 30% of MaxHP."
            },
            {
              "level": 3,
              "text": "Restores 50% of MaxHP."
            },
            {
              "level": 4,
              "text": "Restores 70% of MaxHP."
            },
            {
              "level": 5,
              "text": "Restores 90% of MaxHP."
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "0 seconds",
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
                  "value": "10"
                },
                {
                  "level": 2,
                  "value": "30"
                },
                {
                  "level": 3,
                  "value": "50"
                },
                {
                  "level": 4,
                  "value": "70"
                },
                {
                  "level": 5,
                  "value": "90"
                }
              ]
            }
          ],
          "spCost": "10 + (Skill Level × 10)",
          "cooldown": "[(Skill Level x 3) - 1] second",
          "castRange": "9 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5038.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5038",
          "tree": {
            "idx": 22,
            "row": 3,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 5040,
                "level": 3,
                "name": "Bunch of Shrimp",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Seafood (Recovery) Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "10 + (Skill Level × 10)"
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
                "value": "[(Skill Level x 3) - 1] second"
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
                      "effect": "Restores 10% of Ma x HP",
                      "sp-cost": "20",
                      "range": "9 cells",
                      "data-1": "10"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Restores 30% of Ma x HP",
                      "sp-cost": "30",
                      "range": "9 cells",
                      "data-1": "30"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Restores 50% of Ma x HP",
                      "sp-cost": "40",
                      "range": "9 cells",
                      "data-1": "50"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Restores 70% of Ma x HP",
                      "sp-cost": "50",
                      "range": "9 cells",
                      "data-1": "70"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Restores 90% of Ma x HP",
                      "sp-cost": "60",
                      "range": "9 cells",
                      "data-1": "90"
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
          "id": 5028,
          "imageFile": "5028.png",
          "name": "CN Meteor",
          "maxLevel": 5,
          "prerequisiteText": "Silvervine Root Twist 3",
          "group": "Plant(Attack)",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/CN_Meteor",
          "description": "Summons the spirit of a giant catnip from a very high place and makes it fall. The number of catnip that falls increases with the level.\nEach catnip has a range of 5x5.\nIf the caster's base level is 100 or higher, damage is additionally increased according to the caster's base level and INT.\nWhen 1 catnip fruit is consumed, the chance of applying Curse is added.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Neutral Magic / AOE 7x7 / MATK 300%"
            },
            {
              "level": 2,
              "text": "Neutral Magic / AOE 7x7 / MATK 400%"
            },
            {
              "level": 3,
              "text": "Neutral Magic / AOE 7x7 / MATK 500%"
            },
            {
              "level": 4,
              "text": "Neutral Magic / AOE 7x7 / MATK 600%"
            },
            {
              "level": 5,
              "text": "Neutral Magic / AOE 7x7 / MATK 700%"
            }
          ],
          "fixedCastTime": "1.5 seconds",
          "variableCastTime": "2 seconds",
          "castDelay": "1 second",
          "cooldown": "5 seconds",
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
                  "value": "35"
                },
                {
                  "level": 3,
                  "value": "50"
                },
                {
                  "level": 4,
                  "value": "65"
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
                }
              ]
            },
            {
              "label": "Data 3",
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
              "label": "Data 4",
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
              "label": "Data 5",
              "values": [
                {
                  "level": 1,
                  "value": "300"
                },
                {
                  "level": 2,
                  "value": "300"
                },
                {
                  "level": 3,
                  "value": "300"
                },
                {
                  "level": 4,
                  "value": "300"
                },
                {
                  "level": 5,
                  "value": "300"
                }
              ]
            }
          ],
          "spCost": "5 + (Skill Level × 15)",
          "duration": "5 seconds",
          "castRange": "9 cells",
          "areaOfEffect": "3 x 3~7 x 7",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5028.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5028",
          "tree": {
            "idx": 23,
            "row": 3,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 5029,
                "level": 3,
                "name": "SV Root Twist",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Plant(Attack) Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "5 + (Skill Level × 15)"
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
                "value": "1 second"
              },
              {
                "label": "Cooldown",
                "value": "5 seconds"
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
                "value": "3 x 3~7 x 7"
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
                    "id": "data-4",
                    "label": "Data 4"
                  },
                  {
                    "id": "data-5",
                    "label": "Data 5"
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
                      "range": "9 cells",
                      "atk": "300",
                      "data-1": "5",
                      "data-2": "3",
                      "data-3": "5",
                      "data-4": "3",
                      "data-5": "300"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "sp-cost": "35",
                      "range": "9 cells",
                      "atk": "400",
                      "data-1": "5",
                      "data-2": "3",
                      "data-3": "5",
                      "data-4": "4",
                      "data-5": "300"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "sp-cost": "50",
                      "range": "9 cells",
                      "atk": "500",
                      "data-1": "5",
                      "data-2": "3",
                      "data-3": "5",
                      "data-4": "5",
                      "data-5": "300"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "sp-cost": "65",
                      "range": "9 cells",
                      "atk": "600",
                      "data-1": "5",
                      "data-2": "3",
                      "data-3": "5",
                      "data-4": "6",
                      "data-5": "300"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "sp-cost": "80",
                      "range": "9 cells",
                      "atk": "700",
                      "data-1": "5",
                      "data-2": "3",
                      "data-3": "5",
                      "data-4": "7",
                      "data-5": "300"
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
          "id": 5032,
          "imageFile": "5032.png",
          "name": "Scar of Tarou",
          "maxLevel": 5,
          "prerequisiteText": "Arclouse Dash Lv. 3",
          "group": "Animal (Attack)",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Scar_of_Tarou",
          "description": "The wounded spirit of a country mouse inflicts the same wounds on enemies.\nThe bite wounds remove a certain amount of MaxHP, depending on the skill level and your DEX.\nCan be canceled by Heal, Cure, Clearance, High Heal, or Coluseo Heal. This skill can't debuff Boss monsters, but inflicts double damage on them.\nThis skill creates a chance of being activated twice at Base Level 30 or above. This chance increases every 30 Base levels.",
          "levelDetails": [
            {
              "level": 1,
              "text": "100% of ATK / Bite Wound: Remove some MaxHP every sec. for 9 sec."
            },
            {
              "level": 2,
              "text": "200% of ATK / Bite Wound: Remove some MaxHP every sec. for 9 sec."
            },
            {
              "level": 3,
              "text": "300% of ATK / Bite Wound: Remove some MaxHP every sec. for 9 sec."
            },
            {
              "level": 4,
              "text": "400% of ATK / Bite Wound: Remove some MaxHP every sec. for 9 sec."
            },
            {
              "level": 5,
              "text": "500% of ATK / Bite Wound: Remove some MaxHP every sec. for 9 sec."
            }
          ],
          "fixedCastTime": "0.5 seconds",
          "variableCastTime": "0 seconds",
          "castDelay": "1 second",
          "cooldown": "12 seconds",
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
                  "value": "9000"
                },
                {
                  "level": 2,
                  "value": "9000"
                },
                {
                  "level": 3,
                  "value": "9000"
                },
                {
                  "level": 4,
                  "value": "9000"
                },
                {
                  "level": 5,
                  "value": "9000"
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
              "label": "Data 3",
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
              "label": "Data 4",
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
          "spCost": "10 + (Skill Level x 2)",
          "duration": "9 seconds",
          "castRange": "9 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5032.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5032",
          "tree": {
            "idx": 24,
            "row": 3,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 5035,
                "level": 3,
                "name": "Arclouze Dash",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Animal (Attack) Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "10 + (Skill Level x 2)"
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
              },
              {
                "label": "Cooldown",
                "value": "12 seconds"
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
                "value": "9 seconds"
              }
            ],
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
                      "effect": "Bite Wound: Remove some Ma x HP every sec. for 9 sec",
                      "sp-cost": "10",
                      "range": "9 cells",
                      "atk": "100",
                      "data-1": "9000",
                      "data-2": "100",
                      "data-3": "100",
                      "data-4": "1"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Bite Wound: Remove some Ma x HP every sec. for 9 sec",
                      "sp-cost": "12",
                      "range": "9 cells",
                      "atk": "200",
                      "data-1": "9000",
                      "data-2": "100",
                      "data-3": "100",
                      "data-4": "1"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Bite Wound: Remove some Ma x HP every sec. for 9 sec",
                      "sp-cost": "14",
                      "range": "9 cells",
                      "atk": "300",
                      "data-1": "9000",
                      "data-2": "100",
                      "data-3": "100",
                      "data-4": "1"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Bite Wound: Remove some Ma x HP every sec. for 9 sec",
                      "sp-cost": "16",
                      "range": "9 cells",
                      "atk": "400",
                      "data-1": "9000",
                      "data-2": "100",
                      "data-3": "100",
                      "data-4": "1"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Bite Wound: Remove some Ma x HP every sec. for 9 sec",
                      "sp-cost": "18",
                      "range": "9 cells",
                      "atk": "500",
                      "data-1": "9000",
                      "data-2": "100",
                      "data-3": "100",
                      "data-4": "1"
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
          "id": 5039,
          "imageFile": "5039.png",
          "name": "Tuna Party",
          "maxLevel": 5,
          "prerequisiteText": "Tuna Belly Lv. 3",
          "group": "Seafood (Supportive)",
          "type": "",
          "target": "Player",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Tuna_Party",
          "description": "The spirit of a delicious tuna protects a target for 30 seconds.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Tuna DEF: 10% of your MaxHP"
            },
            {
              "level": 2,
              "text": "Tuna DEF: 20% of your MaxHP"
            },
            {
              "level": 3,
              "text": "Tuna DEF: 30% of your MaxHP"
            },
            {
              "level": 4,
              "text": "Tuna DEF: 40% of your MaxHP"
            },
            {
              "level": 5,
              "text": "Tuna DEF: 50% of your MaxHP"
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
          "spCost": "10 + (Skill Level × 10)",
          "cooldown": "[10 + (Skill Level × 4)]",
          "duration": "30 seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5039.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5039",
          "tree": {
            "idx": 29,
            "row": 4,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 5038,
                "level": 3,
                "name": "Tuna Belly",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Seafood (Supportive) Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "10 + (Skill Level × 10)"
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
                "value": "[10 + (Skill Level × 4)]"
              },
              {
                "label": "Target",
                "value": "Player"
              },
              {
                "label": "Duration",
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
                    "id": "range",
                    "label": "Range"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "effect": "Tuna DEF: 10% of your Ma x HP",
                      "sp-cost": "20",
                      "range": "9 cells"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Tuna DEF: 20% of your Ma x HP",
                      "sp-cost": "30",
                      "range": "9 cells"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Tuna DEF: 30% of your Ma x HP",
                      "sp-cost": "40",
                      "range": "9 cells"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Tuna DEF: 40% of your Ma x HP",
                      "sp-cost": "50",
                      "range": "9 cells"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Tuna DEF: 50% of your Ma x HP",
                      "sp-cost": "60",
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
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 5027,
          "imageFile": "5027.png",
          "name": "Catnip Powdering",
          "maxLevel": 5,
          "prerequisiteText": "Catnip Meteor Lv. 3",
          "group": "Plant (Supportive)",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Catnip_Powdering",
          "description": "Scatter catnip powder, temporarily decreasing ATK and MATK by 50% within range. MSPD is also decreased within the area.\nThis skill also significantly increases natural HP and SP Recovery.\nRequires 1 Catnip Fruit.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Effective Range: 3 x3 / Lasts for 3 sec."
            },
            {
              "level": 2,
              "text": "Effective Range: 3 x3 / Lasts for 4 sec."
            },
            {
              "level": 3,
              "text": "Effective Range: 5 x5 / Lasts for 5 sec."
            },
            {
              "level": 4,
              "text": "Effective Range: 5 x5 / Lasts for 6 sec."
            },
            {
              "level": 5,
              "text": "Effective Range: 7 x7 / Lasts for 7 sec."
            }
          ],
          "fixedCastTime": "1 second",
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
                },
                {
                  "level": 4,
                  "value": "50"
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
                }
              ]
            },
            {
              "label": "Data 5",
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
              "label": "Data 6",
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
          "spCost": "40~24",
          "duration": "3~7 seconds",
          "castRange": "9 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5027.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5027",
          "tree": {
            "idx": 30,
            "row": 4,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 5028,
                "level": 3,
                "name": "CN Meteor",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Plant (Supportive) Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "40~24"
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
                "value": "10 seconds"
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
                "value": "3~7 seconds"
              }
            ],
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
                  },
                  {
                    "id": "data-5",
                    "label": "Data 5"
                  },
                  {
                    "id": "data-6",
                    "label": "Data 6"
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
                      "effect": "Effective Range: 3 x 3 / Lasts for 3 sec",
                      "sp-cost": "40",
                      "range": "9 cells",
                      "data-1": "1",
                      "data-2": "3000",
                      "data-3": "50",
                      "data-4": "50",
                      "data-5": "100",
                      "data-6": "100"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Effective Range: 3 x 3 / Lasts for 4 sec",
                      "sp-cost": "36",
                      "range": "9 cells",
                      "data-1": "1",
                      "data-2": "4000",
                      "data-3": "50",
                      "data-4": "50",
                      "data-5": "100",
                      "data-6": "100"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Effective Range: 5 x 5 / Lasts for 5 sec",
                      "sp-cost": "32",
                      "range": "9 cells",
                      "data-1": "2",
                      "data-2": "5000",
                      "data-3": "50",
                      "data-4": "50",
                      "data-5": "100",
                      "data-6": "100"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Effective Range: 5 x 5 / Lasts for 6 sec",
                      "sp-cost": "28",
                      "range": "9 cells",
                      "data-1": "2",
                      "data-2": "6000",
                      "data-3": "50",
                      "data-4": "50",
                      "data-5": "100",
                      "data-6": "100"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Effective Range: 7 x 7 / Lasts for 7 sec",
                      "sp-cost": "24",
                      "range": "9 cells",
                      "data-1": "3",
                      "data-2": "7000",
                      "data-3": "50",
                      "data-4": "50",
                      "data-5": "100",
                      "data-6": "100"
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
          "id": 5036,
          "imageFile": "5036.png",
          "name": "Lunatic Carrot Beat",
          "maxLevel": 5,
          "prerequisiteText": "Scar of Tarou Lv. 3",
          "group": "Animal (Attack)",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Lunatic_Carrot_Beat",
          "description": "The wrath of a Lunatic spirit rains carrots on enemies.\nUse 1 Carrot to create a chance of Stun.",
          "levelDetails": [
            {
              "level": 1,
              "text": "300% of ATK / Effective Range: 3 x3"
            },
            {
              "level": 2,
              "text": "400% of ATK / Effective Range: 3 x3"
            },
            {
              "level": 3,
              "text": "500% of ATK / Effective Range: 5 x5"
            },
            {
              "level": 4,
              "text": "600% of ATK / Effective Range: 5 x5"
            },
            {
              "level": 5,
              "text": "700% of ATK / Effective Range: 7 x7"
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "0 seconds",
          "castDelay": "1 second",
          "cooldown": "6 seconds",
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
          "spCost": "10 + (Skill Level × 5)",
          "castRange": "9 cells",
          "areaOfEffect": "3 x 3 ~ 7 x 7",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5036.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5036",
          "tree": {
            "idx": 31,
            "row": 4,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 5032,
                "level": 3,
                "name": "Scar of Tarou",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Animal (Attack) Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "10 + (Skill Level × 5)"
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
                "value": "6 seconds"
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
              }
            ],
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
                      "effect": "Effective Range: 3 x 3",
                      "sp-cost": "15",
                      "range": "9 cells",
                      "atk": "300",
                      "data-1": "1",
                      "data-2": "200"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Effective Range: 3 x 3",
                      "sp-cost": "20",
                      "range": "9 cells",
                      "atk": "400",
                      "data-1": "1",
                      "data-2": "200"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Effective Range: 5 x 5",
                      "sp-cost": "25",
                      "range": "9 cells",
                      "atk": "500",
                      "data-1": "2",
                      "data-2": "200"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Effective Range: 5 x 5",
                      "sp-cost": "30",
                      "range": "9 cells",
                      "atk": "600",
                      "data-1": "2",
                      "data-2": "200"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Effective Range: 7 x 7",
                      "sp-cost": "35",
                      "range": "9 cells",
                      "atk": "700",
                      "data-1": "3",
                      "data-2": "200"
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
          "id": 5037,
          "imageFile": "5037.png",
          "name": "Power of Sea",
          "maxLevel": 1,
          "prerequisiteText": "Tuna Party Lv. 3",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Power_of_Sea",
          "description": "You've acquired the power of the sea, though partially, through the spirits you command.\nMaxHP +1,000, MaxSP +100, healing amounts +10%. Invest 20 or more SP in Seafood skills to additionally get MaxHP +3,000, MaxSP +300, and healing amounts +20%.",
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
            },
            {
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "10"
                }
              ]
            },
            {
              "label": "Data 2",
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
          "iconUrl": "assets/divine-pride/skills/5037.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5037",
          "tree": {
            "idx": 36,
            "row": 5,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 5039,
                "level": 3,
                "name": "Tuna Party",
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
                      "sp-cost": "0",
                      "data-1": "10",
                      "data-2": "20"
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
          "id": 5025,
          "imageFile": "5025.png",
          "name": "Power of Land",
          "maxLevel": 1,
          "prerequisiteText": "Catnip Powdering Lv. 3",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Power_of_Land",
          "description": "You've acquired the power of earth, though partially, through the spirits you command.\nINT +20. Invest 20 or more SP in Plant skills to get MATK +20%.",
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
            },
            {
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "20"
                }
              ]
            },
            {
              "label": "Data 2",
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
          "iconUrl": "assets/divine-pride/skills/5025.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5025",
          "tree": {
            "idx": 37,
            "row": 5,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 5027,
                "level": 3,
                "name": "CN Powdering",
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
                      "sp-cost": "0",
                      "data-1": "20",
                      "data-2": "20"
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
          "id": 5031,
          "imageFile": "5031.png",
          "name": "Power of Life",
          "maxLevel": 1,
          "prerequisiteText": "Lunatic Carrot Beat Lv. 3",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Power_of_Life",
          "description": "You've acquired the power of life, though partially, through the spirits you command.\nFLEE, HIT, and CRI +20. Invest in 20 or more SP in Animal skills to get Long-ranged Physical ATK +20%.",
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
            },
            {
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "20"
                }
              ]
            },
            {
              "label": "Data 2",
              "values": [
                {
                  "level": 1,
                  "value": "20"
                }
              ]
            },
            {
              "label": "Data 3",
              "values": [
                {
                  "level": 1,
                  "value": "20"
                }
              ]
            },
            {
              "label": "Data 4",
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
          "iconUrl": "assets/divine-pride/skills/5031.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5031",
          "tree": {
            "idx": 38,
            "row": 5,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 5036,
                "level": 3,
                "name": "Lunatic Carrot Beat",
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
                      "sp-cost": "0",
                      "data-1": "20",
                      "data-2": "20",
                      "data-3": "20",
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
          "id": 5049,
          "imageFile": "5049.png",
          "name": "Grooming",
          "maxLevel": 5,
          "prerequisiteText": "Power of Sea Lv. 1",
          "group": "Seafood (Supportive)",
          "type": "",
          "target": "Yourself",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Grooming",
          "description": "Groom your hair, treating yourself.\nRemoves the following Status effects: Stun, Frozen, Petrification, Sleep, Silence, Bleeding, Poison, Fear, Mandragora Howling, Crystallization, Freezing, and Deep Sleep.\nTemporarily increases Dodge.\nCan't be used if you're not in the condition to use skills (Frozen, Petrified, Silent, etc.).",
          "levelDetails": [
            {
              "level": 1,
              "text": "FLEE +100, Lasts for 3 sec."
            },
            {
              "level": 2,
              "text": "FLEE +100, Lasts for 4 sec."
            },
            {
              "level": 3,
              "text": "FLEE +100, Lasts for 5 sec."
            },
            {
              "level": 4,
              "text": "FLEE +100, Lasts for 6 sec."
            },
            {
              "level": 5,
              "text": "FLEE +100, Lasts for 7 sec."
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "0 seconds",
          "castDelay": "1 second",
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
          "spCost": "15",
          "cooldown": "[70 - (Skill Level x 10)] seconds",
          "duration": "(Skill Level + 2) seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5049.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5049",
          "tree": {
            "idx": 43,
            "row": 6,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 5037,
                "level": 1,
                "name": "Power of Sea",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Seafood (Supportive) Skill"
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
                "value": "[70 - (Skill Level x 10)] seconds"
              },
              {
                "label": "Target",
                "value": "Yourself"
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
                      "flee": "+100",
                      "effect": "Lasts for 3 sec",
                      "sp-cost": "15",
                      "data-1": "3000",
                      "data-2": "100"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "flee": "+100",
                      "effect": "Lasts for 4 sec",
                      "sp-cost": "15",
                      "data-1": "4000",
                      "data-2": "100"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "flee": "+100",
                      "effect": "Lasts for 5 sec",
                      "sp-cost": "15",
                      "data-1": "5000",
                      "data-2": "100"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "flee": "+100",
                      "effect": "Lasts for 6 sec",
                      "sp-cost": "15",
                      "data-1": "6000",
                      "data-2": "100"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "flee": "+100",
                      "effect": "Lasts for 7 sec",
                      "sp-cost": "15",
                      "data-1": "7000",
                      "data-2": "100"
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
          "id": 5055,
          "imageFile": "5055.png",
          "name": "Chattering",
          "maxLevel": 5,
          "prerequisiteText": "Power of Land Lv. 1",
          "group": "Plant (Supportive)",
          "type": "",
          "target": "Yourself",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Chattering",
          "description": "Awakens you to your hunting instinct, along with the thrill of the hunt.\nATK/MATK + 100 for 5 sec. Increased MSPD for 10 sec.",
          "levelDetails": [
            {
              "level": 1,
              "text": "SP Cost: 50"
            },
            {
              "level": 2,
              "text": "SP Cost: 45"
            },
            {
              "level": 3,
              "text": "SP Cost: 40"
            },
            {
              "level": 4,
              "text": "SP Cost: 35"
            },
            {
              "level": 5,
              "text": "SP Cost: 30"
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
                  "value": "50"
                },
                {
                  "level": 2,
                  "value": "45"
                },
                {
                  "level": 3,
                  "value": "40"
                },
                {
                  "level": 4,
                  "value": "35"
                },
                {
                  "level": 5,
                  "value": "30"
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
                  "value": "5000"
                },
                {
                  "level": 3,
                  "value": "5000"
                },
                {
                  "level": 4,
                  "value": "5000"
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
              "label": "Data 3",
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
              "label": "Data 4",
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
          "spCost": "55 − (Skill Level x 5)",
          "cooldown": "[160 - (Skill Level x 20)] seconds",
          "duration": "5 seconds (ATK and MATK) 10 seconds (Movement Speed)",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5055.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5055",
          "tree": {
            "idx": 44,
            "row": 6,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 5025,
                "level": 1,
                "name": "Power of Land",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Plant (Supportive) Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "55 − (Skill Level x 5)"
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
                "value": "[160 - (Skill Level x 20)] seconds"
              },
              {
                "label": "Target",
                "value": "Yourself"
              },
              {
                "label": "Duration",
                "value": "5 seconds (ATK and MATK) 10 seconds (Movement Speed)"
              }
            ],
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
                      "effect": "SP Cost: 50",
                      "sp-cost": "50",
                      "data-1": "5000",
                      "data-2": "10000",
                      "data-3": "100",
                      "data-4": "100"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "SP Cost: 45",
                      "sp-cost": "45",
                      "data-1": "5000",
                      "data-2": "10000",
                      "data-3": "100",
                      "data-4": "100"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "SP Cost: 40",
                      "sp-cost": "40",
                      "data-1": "5000",
                      "data-2": "10000",
                      "data-3": "100",
                      "data-4": "100"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "SP Cost: 35",
                      "sp-cost": "35",
                      "data-1": "5000",
                      "data-2": "10000",
                      "data-3": "100",
                      "data-4": "100"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "SP Cost: 30",
                      "sp-cost": "30",
                      "data-1": "5000",
                      "data-2": "10000",
                      "data-3": "100",
                      "data-4": "100"
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
          "id": 5047,
          "imageFile": "5047.png",
          "name": "Hiss",
          "maxLevel": 5,
          "prerequisiteText": "Power of Life Lv. 1",
          "group": "Animal (Supportive)",
          "type": "",
          "target": "Entire Party",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Hiss",
          "description": "Stay alert for possible danger.\nTemporarily increase Perfect Dodge and MSPD for you and all party members in one screen.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Perfect Dodge +50 for 3 sec. Increased MSPD for 3 sec."
            },
            {
              "level": 2,
              "text": "Perfect Dodge +50 for 3 sec. Increased MSPD for 3 sec."
            },
            {
              "level": 3,
              "text": "Perfect Dodge +50 for 3 sec. Increased MSPD for 4 sec."
            },
            {
              "level": 4,
              "text": "Perfect Dodge +50 for 3 sec. Increased MSPD for 4 sec."
            },
            {
              "level": 5,
              "text": "Perfect Dodge +50 for 3 sec. Increased MSPD for 5 sec."
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "0 seconds",
          "castDelay": "1 second",
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
                  "value": "46"
                },
                {
                  "level": 3,
                  "value": "42"
                },
                {
                  "level": 4,
                  "value": "38"
                },
                {
                  "level": 5,
                  "value": "34"
                }
              ]
            },
            {
              "label": "Range",
              "values": [
                {
                  "level": 1,
                  "value": "15 cells"
                },
                {
                  "level": 2,
                  "value": "15 cells"
                },
                {
                  "level": 3,
                  "value": "15 cells"
                },
                {
                  "level": 4,
                  "value": "15 cells"
                },
                {
                  "level": 5,
                  "value": "15 cells"
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
                  "value": "500"
                },
                {
                  "level": 4,
                  "value": "500"
                },
                {
                  "level": 5,
                  "value": "500"
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
                  "value": "3000"
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
                  "value": "5000"
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
              "label": "Data 4",
              "values": [
                {
                  "level": 1,
                  "value": "3000"
                },
                {
                  "level": 2,
                  "value": "3000"
                },
                {
                  "level": 3,
                  "value": "3000"
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
            }
          ],
          "spCost": "54 - (Skill Level x 4)",
          "cooldown": "[210 - (Skill Level x 30)] seconds",
          "duration": "3 seconds (Perfect Dodge) 3 ~ 5 seconds (Movement Speed)",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5047.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5047",
          "tree": {
            "idx": 45,
            "row": 6,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 5031,
                "level": 1,
                "name": "Power of Life",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Animal (Supportive) Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "54 - (Skill Level x 4)"
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
                "value": "[210 - (Skill Level x 30)] seconds"
              },
              {
                "label": "Target",
                "value": "Entire Party"
              },
              {
                "label": "Duration",
                "value": "3 seconds (Perfect Dodge) 3 ~ 5 seconds (Movement Speed)"
              }
            ],
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
                      "effect": "Perfect Dodge +50 for 3 sec. Increased MSPD for 3 sec",
                      "sp-cost": "50",
                      "range": "15 cells",
                      "data-1": "500",
                      "data-2": "3000",
                      "data-3": "100",
                      "data-4": "3000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Perfect Dodge +50 for 3 sec. Increased MSPD for 3 sec",
                      "sp-cost": "46",
                      "range": "15 cells",
                      "data-1": "500",
                      "data-2": "3000",
                      "data-3": "100",
                      "data-4": "3000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Perfect Dodge +50 for 3 sec. Increased MSPD for 4 sec",
                      "sp-cost": "42",
                      "range": "15 cells",
                      "data-1": "500",
                      "data-2": "4000",
                      "data-3": "100",
                      "data-4": "3000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Perfect Dodge +50 for 3 sec. Increased MSPD for 4 sec",
                      "sp-cost": "38",
                      "range": "15 cells",
                      "data-1": "500",
                      "data-2": "4000",
                      "data-3": "100",
                      "data-4": "3000"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Perfect Dodge +50 for 3 sec. Increased MSPD for 5 sec",
                      "sp-cost": "34",
                      "range": "15 cells",
                      "data-1": "500",
                      "data-2": "5000",
                      "data-3": "100",
                      "data-4": "3000"
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
          "id": 5050,
          "imageFile": "5050.png",
          "name": "Purring",
          "maxLevel": 5,
          "prerequisiteText": "Grooming Lv. 5",
          "group": "Seafood (Supportive)",
          "type": "",
          "target": "Entire Party",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Purring",
          "description": "Purr happily, treating everyone.\nTemporarily cast the skill, [Grooming], on you and all party members in one screen.\nCan't be used if you're not in the condition to use skills (Frozen, Petrified, Silent, etc.).",
          "levelDetails": [
            {
              "level": 1,
              "text": "FLEE +100, Lasts for 7 sec."
            },
            {
              "level": 2,
              "text": "FLEE +100, Lasts for 9 sec."
            },
            {
              "level": 3,
              "text": "FLEE +100, Lasts for 11 sec."
            },
            {
              "level": 4,
              "text": "FLEE +100, Lasts for 13 sec."
            },
            {
              "level": 5,
              "text": "FLEE +100, Lasts for 15 sec."
            }
          ],
          "fixedCastTime": "1 second",
          "variableCastTime": "0 seconds",
          "castDelay": "1 second",
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
                  "value": "65"
                },
                {
                  "level": 3,
                  "value": "60"
                },
                {
                  "level": 4,
                  "value": "55"
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
                  "value": "15 cells"
                },
                {
                  "level": 2,
                  "value": "15 cells"
                },
                {
                  "level": 3,
                  "value": "15 cells"
                },
                {
                  "level": 4,
                  "value": "15 cells"
                },
                {
                  "level": 5,
                  "value": "15 cells"
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
                  "value": "9000"
                },
                {
                  "level": 3,
                  "value": "11000"
                },
                {
                  "level": 4,
                  "value": "13000"
                },
                {
                  "level": 5,
                  "value": "15000"
                }
              ]
            }
          ],
          "spCost": "75 − (Skill Level × 5)",
          "cooldown": "[65 - (Skill Level x 5)] second",
          "duration": "[5 + (Skill Level × 2)] seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5050.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5050",
          "tree": {
            "idx": 50,
            "row": 7,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 5049,
                "level": 5,
                "name": "Grooming",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Seafood (Supportive) Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "75 − (Skill Level × 5)"
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
                "value": "[65 - (Skill Level x 5)] second"
              },
              {
                "label": "Target",
                "value": "Entire Party"
              },
              {
                "label": "Duration",
                "value": "[5 + (Skill Level × 2)] seconds"
              }
            ],
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
                    "id": "flee",
                    "label": "Flee"
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
                      "flee": "+100",
                      "effect": "Lasts for 7 sec",
                      "sp-cost": "70",
                      "range": "15 cells",
                      "data-1": "7000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "flee": "+100",
                      "effect": "Lasts for 9 sec",
                      "sp-cost": "65",
                      "range": "15 cells",
                      "data-1": "9000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "flee": "+100",
                      "effect": "Lasts for 11 sec",
                      "sp-cost": "60",
                      "range": "15 cells",
                      "data-1": "11000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "flee": "+100",
                      "effect": "Lasts for 13 sec",
                      "sp-cost": "55",
                      "range": "15 cells",
                      "data-1": "13000"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "flee": "+100",
                      "effect": "Lasts for 15 sec",
                      "sp-cost": "50",
                      "range": "15 cells",
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
          "id": 5053,
          "imageFile": "5053.png",
          "name": "Meow Meow",
          "maxLevel": 5,
          "prerequisiteText": "Chattering Lv. 5",
          "group": "Plant (Supportive)",
          "type": "",
          "target": "Entire Party",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Meow_Meow",
          "description": "Awaken your comrades' hunting instinct through Chattering.\nTemporarily increase ATK/MATK by 100 and MSPD by a certain amount for you and all your party members in one screen.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Lasts for 8 sec. / SP Cost: 100"
            },
            {
              "level": 2,
              "text": "Lasts for 8 sec. / SP Cost: 90"
            },
            {
              "level": 3,
              "text": "Lasts for 10 sec. / SP Cost: 80"
            },
            {
              "level": 4,
              "text": "Lasts for 10 sec. / SP Cost: 70"
            },
            {
              "level": 5,
              "text": "Lasts for 12 sec. / SP Cost: 60"
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
            },
            {
              "label": "Range",
              "values": [
                {
                  "level": 1,
                  "value": "15 cells"
                },
                {
                  "level": 2,
                  "value": "15 cells"
                },
                {
                  "level": 3,
                  "value": "15 cells"
                },
                {
                  "level": 4,
                  "value": "15 cells"
                },
                {
                  "level": 5,
                  "value": "15 cells"
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
                  "value": "8000"
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
                  "value": "12000"
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
              "label": "Data 3",
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
              "label": "Data 4",
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
          "spCost": "110 − (Skill Level × 10)",
          "cooldown": "[200 - (Skill Level x 20)] seconds",
          "duration": "8/10/12 seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5053.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5053",
          "tree": {
            "idx": 51,
            "row": 7,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 5055,
                "level": 5,
                "name": "Chattering",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Plant (Supportive) Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "110 − (Skill Level × 10)"
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
                "value": "[200 - (Skill Level x 20)] seconds"
              },
              {
                "label": "Target",
                "value": "Entire Party"
              },
              {
                "label": "Duration",
                "value": "8/10/12 seconds"
              }
            ],
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
                      "effect": "Lasts for 8 sec. / SP Cost: 100",
                      "sp-cost": "100",
                      "range": "15 cells",
                      "data-1": "8000",
                      "data-2": "10000",
                      "data-3": "100",
                      "data-4": "100"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Lasts for 8 sec. / SP Cost: 90",
                      "sp-cost": "90",
                      "range": "15 cells",
                      "data-1": "8000",
                      "data-2": "10000",
                      "data-3": "100",
                      "data-4": "100"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Lasts for 10 sec. / SP Cost: 80",
                      "sp-cost": "80",
                      "range": "15 cells",
                      "data-1": "10000",
                      "data-2": "10000",
                      "data-3": "100",
                      "data-4": "100"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Lasts for 10 sec. / SP Cost: 70",
                      "sp-cost": "70",
                      "range": "15 cells",
                      "data-1": "10000",
                      "data-2": "10000",
                      "data-3": "100",
                      "data-4": "100"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Lasts for 12 sec. / SP Cost: 60",
                      "sp-cost": "60",
                      "range": "15 cells",
                      "data-1": "12000",
                      "data-2": "10000",
                      "data-3": "100",
                      "data-4": "100"
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
          "id": 5045,
          "imageFile": "5045.png",
          "name": "Power of Flock",
          "maxLevel": 5,
          "prerequisiteText": "Hiss Lv. 5",
          "group": "Animal (Supportive)",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Power_of_Flock",
          "description": "Your powerful presence strikes terror into everyone around you.\nCast Fear and Frozen on all enemies within range.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Effective Range: 7 x7 around you"
            },
            {
              "level": 2,
              "text": "Effective Range: 9 x9 around you"
            },
            {
              "level": 3,
              "text": "Effective Range: 11 x11 around you"
            },
            {
              "level": 4,
              "text": "Effective Range: 13 x13 around you"
            },
            {
              "level": 5,
              "text": "Effective Range: Current screen"
            }
          ],
          "fixedCastTime": "1 second",
          "castDelay": "1 second",
          "cooldown": "100 seconds",
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
                  "value": "15"
                }
              ]
            }
          ],
          "spCost": "50",
          "variableCastTime": "[5 - (Skill Level)] seconds",
          "areaOfEffect": "7 x 7 ~ 31 x 31",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5045.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5045",
          "tree": {
            "idx": 52,
            "row": 7,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 5047,
                "level": 5,
                "name": "Hiss",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Animal (Supportive) Skill"
              },
              {
                "label": "Levels",
                "value": "5"
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
                "value": "[5 - (Skill Level)] seconds"
              },
              {
                "label": "Cast Delay",
                "value": "1 second"
              },
              {
                "label": "Cooldown",
                "value": "100 seconds"
              },
              {
                "label": "Target",
                "value": "Enemy"
              },
              {
                "label": "Area of Effect",
                "value": "7 x 7 ~ 31 x 31"
              }
            ],
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
                      "effect": "Effective Range: 7 x 7 around you",
                      "sp-cost": "50",
                      "data-1": "3"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Effective Range: 9 x 9 around you",
                      "sp-cost": "50",
                      "data-1": "4"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Effective Range: 11 x 11 around you",
                      "sp-cost": "50",
                      "data-1": "5"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Effective Range: 13 x 13 around you",
                      "sp-cost": "50",
                      "data-1": "6"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Effective Range: Current screen",
                      "sp-cost": "50",
                      "data-1": "15"
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
          "id": 5051,
          "imageFile": "5051.png",
          "name": "Tasty Shrimp Party",
          "maxLevel": 5,
          "prerequisiteText": "Purring Lv. 5",
          "group": "Seafood (Supportive)",
          "type": "",
          "target": "Entire Party",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Tasty_Shrimp_Party",
          "description": "Cast the skill, [Fresh Shrimp], on you and all party members in one screen. (Duration affected by the skill level)\nThis skill additionally casts [Blessing of Shrimp], the skill that increases SP Recovery by 150%, on you.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Increased SP Recovery for 12 sec."
            },
            {
              "level": 2,
              "text": "Increased SP Recovery for 14 sec."
            },
            {
              "level": 3,
              "text": "Increased SP Recovery for 16 sec."
            },
            {
              "level": 4,
              "text": "Increased SP Recovery for 18 sec."
            },
            {
              "level": 5,
              "text": "Increased SP Recovery for 20 sec."
            }
          ],
          "fixedCastTime": "0 seconds",
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
                }
              ]
            }
          ],
          "spCost": "110 − (Skill Level x 10)",
          "variableCastTime": "[6 - (Skill Level)] seconds",
          "cooldown": "[65 - (Skill Level x 5)] seconds",
          "duration": "[10 + (Skill Level x 2)] seconds",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5051.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5051",
          "tree": {
            "idx": 57,
            "row": 8,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 5050,
                "level": 5,
                "name": "Purring",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Seafood (Supportive) Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "110 − (Skill Level x 10)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "[6 - (Skill Level)] seconds"
              },
              {
                "label": "Cast Delay",
                "value": "1 second"
              },
              {
                "label": "Cooldown",
                "value": "[65 - (Skill Level x 5)] seconds"
              },
              {
                "label": "Target",
                "value": "Entire Party"
              },
              {
                "label": "Duration",
                "value": "[10 + (Skill Level x 2)] seconds"
              }
            ],
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
                      "effect": "Increased SP Recovery for 12 sec",
                      "sp-cost": "100",
                      "data-1": "12000",
                      "data-2": "150"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Increased SP Recovery for 14 sec",
                      "sp-cost": "90",
                      "data-1": "14000",
                      "data-2": "150"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Increased SP Recovery for 16 sec",
                      "sp-cost": "80",
                      "data-1": "16000",
                      "data-2": "150"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Increased SP Recovery for 18 sec",
                      "sp-cost": "70",
                      "data-1": "18000",
                      "data-2": "150"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Increased SP Recovery for 20 sec",
                      "sp-cost": "60",
                      "data-1": "20000",
                      "data-2": "150"
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
          "id": 5048,
          "imageFile": "5048.png",
          "name": "Nyang Grass",
          "maxLevel": 5,
          "prerequisiteText": "Meow Meow Lv. 5",
          "group": "Plant (Supportive)",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Nyang_Grass",
          "description": "Neutralizes enemy DEF within range. (Instantly canceled out of range)\nIn the case of Player-type enemies, sets Equipment's DEF/MDEF to 0.\nIn the case of Monster-type enemies, sets DEF/MDEF to 50%.",
          "levelDetails": [
            {
              "level": 1,
              "text": "Effective Range: 5 x5, Lasts for 6 sec."
            },
            {
              "level": 2,
              "text": "Effective Range: 5 x5, Lasts for 7 sec."
            },
            {
              "level": 3,
              "text": "Effective Range: 7 x7, Lasts for 8 sec."
            },
            {
              "level": 4,
              "text": "Effective Range: 7 x7, Lasts for 9 sec."
            },
            {
              "level": 5,
              "text": "Effective Range: 9 x9, Lasts for 10 sec."
            }
          ],
          "fixedCastTime": "0 seconds",
          "castDelay": "1 second",
          "cooldown": "60 seconds",
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
                  "value": "48"
                },
                {
                  "level": 3,
                  "value": "46"
                },
                {
                  "level": 4,
                  "value": "44"
                },
                {
                  "level": 5,
                  "value": "42"
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
                }
              ]
            },
            {
              "label": "Data 2",
              "values": [
                {
                  "level": 1,
                  "value": "6000"
                },
                {
                  "level": 2,
                  "value": "7000"
                },
                {
                  "level": 3,
                  "value": "8000"
                },
                {
                  "level": 4,
                  "value": "9000"
                },
                {
                  "level": 5,
                  "value": "10000"
                }
              ]
            }
          ],
          "spCost": "52 − (Skill Level × 2)",
          "variableCastTime": "[6 - (Skill Level)] seconds",
          "duration": "(Skill Level + 5) seconds",
          "castRange": "9 cells",
          "areaOfEffect": "5 x 5 ~ 9 x 9",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5048.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5048",
          "tree": {
            "idx": 58,
            "row": 8,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 5053,
                "level": 5,
                "name": "Meow Meow",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Plant (Supportive) Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "52 − (Skill Level × 2)"
              },
              {
                "label": "Fixed Cast Time",
                "value": "0 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "[6 - (Skill Level)] seconds"
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
                "label": "Cast Range",
                "value": "9 cells"
              },
              {
                "label": "Target",
                "value": "Enemy"
              },
              {
                "label": "Area of Effect",
                "value": "5 x 5 ~ 9 x 9"
              },
              {
                "label": "Duration",
                "value": "(Skill Level + 5) seconds"
              }
            ],
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
                      "effect": "Effective Range: 5 x 5, Lasts for 6 sec",
                      "sp-cost": "50",
                      "range": "9 cells",
                      "data-1": "2",
                      "data-2": "6000"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "effect": "Effective Range: 5 x 5, Lasts for 7 sec",
                      "sp-cost": "48",
                      "range": "9 cells",
                      "data-1": "2",
                      "data-2": "7000"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "effect": "Effective Range: 7 x 7, Lasts for 8 sec",
                      "sp-cost": "46",
                      "range": "9 cells",
                      "data-1": "3",
                      "data-2": "8000"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "effect": "Effective Range: 7 x 7, Lasts for 9 sec",
                      "sp-cost": "44",
                      "range": "9 cells",
                      "data-1": "3",
                      "data-2": "9000"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "effect": "Effective Range: 9 x 9, Lasts for 10 sec",
                      "sp-cost": "42",
                      "range": "9 cells",
                      "data-1": "4",
                      "data-2": "10000"
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
          "id": 5046,
          "imageFile": "5046.png",
          "name": "Spirit of Savage",
          "maxLevel": 5,
          "prerequisiteText": "Power of Flock Lv. 5",
          "group": "Animal (Attack)",
          "type": "",
          "target": "Enemy",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Spirit_of_Savage",
          "description": "Summon the spirit of a Savage that charges at the selected target.\nThe Savage travels to its destination in a straight line, attacking all enemies in its path.",
          "levelDetails": [
            {
              "level": 1,
              "text": "ATK +400%"
            },
            {
              "level": 2,
              "text": "ATK +550%"
            },
            {
              "level": 3,
              "text": "ATK +700%"
            },
            {
              "level": 4,
              "text": "ATK +850%"
            },
            {
              "level": 5,
              "text": "ATK +1,000%"
            }
          ],
          "castDelay": "1 second",
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
                  "value": "400"
                },
                {
                  "level": 2,
                  "value": "550"
                },
                {
                  "level": 3,
                  "value": "700"
                },
                {
                  "level": 4,
                  "value": "850"
                },
                {
                  "level": 5,
                  "value": "1000"
                }
              ]
            }
          ],
          "spCost": "60",
          "fixedCastTime": "2.5 ~ 0 seconds",
          "variableCastTime": "1 ~ 0 seconds",
          "cooldown": "[32 - (Skill Level x 2)] second",
          "castRange": "9 cells",
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5046.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5046",
          "tree": {
            "idx": 59,
            "row": 8,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 5045,
                "level": 5,
                "name": "Power Of Lock",
                "visible": true
              }
            ]
          },
          "details": {
            "rows": [
              {
                "label": "Type",
                "value": "Animal (Attack) Skill"
              },
              {
                "label": "Levels",
                "value": "5"
              },
              {
                "label": "SP Cost",
                "value": "60"
              },
              {
                "label": "Fixed Cast Time",
                "value": "2.5 ~ 0 seconds"
              },
              {
                "label": "Variable Cast Time",
                "value": "1 ~ 0 seconds"
              },
              {
                "label": "Cast Delay",
                "value": "1 second"
              },
              {
                "label": "Cooldown",
                "value": "[32 - (Skill Level x 2)] second"
              },
              {
                "label": "Cast Range",
                "value": "9 cells"
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
                    "id": "atk",
                    "label": "Atk"
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
                      "atk": "+400%\n400",
                      "sp-cost": "60",
                      "range": "9 cells"
                    }
                  },
                  {
                    "level": 2,
                    "values": {
                      "atk": "+550%\n550",
                      "sp-cost": "60",
                      "range": "9 cells"
                    }
                  },
                  {
                    "level": 3,
                    "values": {
                      "atk": "+700%\n700",
                      "sp-cost": "60",
                      "range": "9 cells"
                    }
                  },
                  {
                    "level": 4,
                    "values": {
                      "atk": "+850%\n850",
                      "sp-cost": "60",
                      "range": "9 cells"
                    }
                  },
                  {
                    "level": 5,
                    "values": {
                      "atk": "+1,000%\n1000",
                      "sp-cost": "60",
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
            "status": "not-used",
            "entries": [],
            "selectedEntry": null
          }
        },
        {
          "id": 5056,
          "imageFile": "5056.png",
          "name": "Spirit of Sea",
          "maxLevel": 1,
          "prerequisiteText": "Tasty Shrimp Party Lv. 5",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Spirit_of_Sea",
          "description": "The spirit of the sea lends you its great power, improving your Seafood skills.\n* Fresh Shrimp: HP healing amounts x2 times\n* Bunch of Shrimp: ATK/MATK bonus duration +120 sec.\n* Tuna Belly: Skill cooldown -5 sec.\n* Tuna Party: Increased tuna DEF\n* Shrimp Party: Increased HP healing amounts for you and your party",
          "levelDetails": [],
          "levelExtras": [
            {
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "30"
                }
              ]
            },
            {
              "label": "Data 2",
              "values": [
                {
                  "level": 1,
                  "value": "120000"
                }
              ]
            },
            {
              "label": "Data 3",
              "values": [
                {
                  "level": 1,
                  "value": "5000"
                }
              ]
            },
            {
              "label": "Data 4",
              "values": [
                {
                  "level": 1,
                  "value": "100"
                }
              ]
            }
          ],
          "translations": {},
          "apiStatus": "not-used",
          "iconUrl": "assets/divine-pride/skills/5056.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5056",
          "tree": {
            "idx": 64,
            "row": 9,
            "col": 1,
            "columns": 7,
            "requirements": [
              {
                "id": 5051,
                "level": 5,
                "name": "Tasty Shrimp Party",
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
                      "data-1": "30",
                      "data-2": "120000",
                      "data-3": "5000",
                      "data-4": "100"
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
          "id": 5054,
          "imageFile": "5054.png",
          "name": "Spirit of Land",
          "maxLevel": 1,
          "prerequisiteText": "Nyang Grass Lv. 5",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Spirit_of_Land",
          "description": "The spirit of earth lends you its great power, improving your Plant skills.\n* Silvervine Stem Spear: Significantly increases MSPD for 3 seconds.\n* Silvervine Root Twist: Increases MATK by Base Level for 3 seconds.\n* Catnip Powdering: Increases Perfect Dodge by Base Level/12 for 3 seconds.\n* Catnip Meteor: For 3 seconds, when hit with a melee attack, there is a chance to auto cast Silvervine Stem Spear against the attacker.\n* Nyang Grass: Increases MATK by Base Level for 3 seconds.",
          "levelDetails": [],
          "levelExtras": [
            {
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "3000"
                }
              ]
            },
            {
              "label": "Data 2",
              "values": [
                {
                  "level": 1,
                  "value": "100"
                }
              ]
            },
            {
              "label": "Data 3",
              "values": [
                {
                  "level": 1,
                  "value": "1"
                }
              ]
            },
            {
              "label": "Data 4",
              "values": [
                {
                  "level": 1,
                  "value": "12"
                }
              ]
            },
            {
              "label": "Data 5",
              "values": [
                {
                  "level": 1,
                  "value": "100"
                }
              ]
            },
            {
              "label": "Data 6",
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
          "iconUrl": "assets/divine-pride/skills/5054.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5054",
          "tree": {
            "idx": 65,
            "row": 9,
            "col": 2,
            "columns": 7,
            "requirements": [
              {
                "id": 5048,
                "level": 5,
                "name": "Nyang Grass",
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
                    "id": "data-5",
                    "label": "Data 5"
                  },
                  {
                    "id": "data-6",
                    "label": "Data 6"
                  }
                ],
                "rows": [
                  {
                    "level": 1,
                    "values": {
                      "data-1": "3000",
                      "data-2": "100",
                      "data-3": "1",
                      "data-4": "12",
                      "data-5": "100",
                      "data-6": "1"
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
          "id": 5052,
          "imageFile": "5052.png",
          "name": "Spirit of Life",
          "maxLevel": 1,
          "prerequisiteText": "Spirit of Savage Lv. 5",
          "group": "Passive",
          "type": "",
          "target": "",
          "recoversAp": "",
          "consumesAp": "",
          "ammunition": "",
          "irowikiUrl": "https://irowiki.org/wiki/Spirit_of_Life",
          "description": "The spirit of life lends you its great power, improving your Animal skills.\nThe following skills increase ATK based on your remaining HP (%).\n* Picky Peck\n* Scar of Tarou\n* Lunatic Carrot Beat\n* Spirit of Savage",
          "levelDetails": [],
          "levelExtras": [
            {
              "label": "Data 1",
              "values": [
                {
                  "level": 1,
                  "value": "120"
                }
              ]
            },
            {
              "label": "Data 2",
              "values": [
                {
                  "level": 1,
                  "value": "90"
                }
              ]
            },
            {
              "label": "Data 3",
              "values": [
                {
                  "level": 1,
                  "value": "60"
                }
              ]
            },
            {
              "label": "Data 4",
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
          "iconUrl": "assets/divine-pride/skills/5052.png",
          "sourceUrl": "https://www.divine-pride.net/database/skill/5052",
          "tree": {
            "idx": 66,
            "row": 9,
            "col": 3,
            "columns": 7,
            "requirements": [
              {
                "id": 5046,
                "level": 5,
                "name": "Sprit Of Savage",
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
                      "data-1": "120",
                      "data-2": "90",
                      "data-3": "60",
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
        }
      ]
    }
  ],
  "skills": [
    {
      "id": 5433,
      "imageFile": "5433.png",
      "name": "Mystical Creature Mastery",
      "maxLevel": 10,
      "prerequisiteText": "basic skill",
      "group": "Passive",
      "type": "",
      "target": "",
      "recoversAp": "",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Mystical_Creature_Mastery",
      "description": "Develops the ability to communicate with spirits.\nIt affects mystical creatures skills and increases P.ATK and S.MATK.",
      "levelDetails": [
        {
          "level": 1,
          "text": "P.ATK/S.MATK +1"
        },
        {
          "level": 2,
          "text": "P.ATK/S.MATK +3"
        },
        {
          "level": 3,
          "text": "P.ATK/S.MATK +4"
        },
        {
          "level": 4,
          "text": "P.ATK/S.MATK +6"
        },
        {
          "level": 5,
          "text": "P.ATK/S.MATK +7"
        },
        {
          "level": 6,
          "text": "P.ATK/S.MATK +9"
        },
        {
          "level": 7,
          "text": "P.ATK/S.MATK +10"
        },
        {
          "level": 8,
          "text": "P.ATK/S.MATK +12"
        },
        {
          "level": 9,
          "text": "P.ATK/S.MATK +13"
        },
        {
          "level": 10,
          "text": "P.ATK/S.MATK +15"
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
      "iconUrl": "assets/divine-pride/skills/5433.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5433",
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
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "p-atk": "+1",
                  "s-matk": "+1",
                  "sp-cost": "0"
                }
              },
              {
                "level": 2,
                "values": {
                  "p-atk": "+3",
                  "s-matk": "+3",
                  "sp-cost": "0"
                }
              },
              {
                "level": 3,
                "values": {
                  "p-atk": "+4",
                  "s-matk": "+4",
                  "sp-cost": "0"
                }
              },
              {
                "level": 4,
                "values": {
                  "p-atk": "+6",
                  "s-matk": "+6",
                  "sp-cost": "0"
                }
              },
              {
                "level": 5,
                "values": {
                  "p-atk": "+7",
                  "s-matk": "+7",
                  "sp-cost": "0"
                }
              },
              {
                "level": 6,
                "values": {
                  "p-atk": "+9",
                  "s-matk": "+9",
                  "sp-cost": "0"
                }
              },
              {
                "level": 7,
                "values": {
                  "p-atk": "+10",
                  "s-matk": "+10",
                  "sp-cost": "0"
                }
              },
              {
                "level": 8,
                "values": {
                  "p-atk": "+12",
                  "s-matk": "+12",
                  "sp-cost": "0"
                }
              },
              {
                "level": 9,
                "values": {
                  "p-atk": "+13",
                  "s-matk": "+13",
                  "sp-cost": "0"
                }
              },
              {
                "level": 10,
                "values": {
                  "p-atk": "+15",
                  "s-matk": "+15",
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
      "id": 5435,
      "imageFile": "5435.png",
      "name": "Chulho Sonic Claw",
      "maxLevel": 7,
      "prerequisiteText": "Mystical Creature Mastery 1",
      "group": "Active",
      "type": "Range Physical",
      "target": "Single Target",
      "recoversAp": "1",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Chulho_Sonic_Claw",
      "description": "Borrows the sharp claws of Chulho to slash at the air toward the target, dealing Range Physical damage.\nDeals additional damage depends on level of Mystical Creature Mastery user learned, user's base level and POW.\nIf the user learned Commune With Chulho, increases skill damage and applies critical damage, the critical chance is the user's Cri.\nThe effectiveness of critical modifier is applied by half.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK 2500+(Mystical Creature Mastery Lv x50)%\nATK(Commune With Chulho) 2900+(Mystical Creature Mastery Lv x100)%"
        },
        {
          "level": 2,
          "text": "ATK 4150+(Mystical Creature Mastery Lv x50)%\nATK(Commune With Chulho) 4950+(Mystical Creature Mastery Lv x100)%"
        },
        {
          "level": 3,
          "text": "ATK 5800+(Mystical Creature Mastery Lv x50)%\nATK(Commune With Chulho) 7000+(Mystical Creature Mastery Lv x100)%"
        },
        {
          "level": 4,
          "text": "ATK 7450+(Mystical Creature Mastery Lv x50)%\nATK(Commune With Chulho) 9050+(Mystical Creature Mastery Lv x100)%"
        },
        {
          "level": 5,
          "text": "ATK 9100+(Mystical Creature Mastery Lv x50)%\nATK(Commune With Chulho) 11100+(Mystical Creature Mastery Lv x100)%"
        },
        {
          "level": 6,
          "text": "ATK 10750+(Mystical Creature Mastery Lv x50)%\nATK(Commune With Chulho) 13150+(Mystical Creature Mastery Lv x100)%"
        },
        {
          "level": 7,
          "text": "ATK 12400+(Mystical Creature Mastery Lv x50)%\nATK(Commune With Chulho) 15200+(Mystical Creature Mastery Lv x100)%"
        }
      ],
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "42"
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
            },
            {
              "level": 6,
              "value": "52"
            },
            {
              "level": 7,
              "value": "54"
            }
          ]
        }
      ],
      "spCost": "21 + (Skill Level x 3)",
      "castDelay": "0.5 second",
      "cooldown": "0.25 seconds",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5435.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5435",
      "tree": {
        "idx": 8,
        "row": 1,
        "col": 1,
        "columns": 7,
        "requirements": [
          {
            "id": 5433,
            "level": 1,
            "name": "Mystical Creature Mastery",
            "visible": true
          }
        ]
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Active Skill"
          },
          {
            "label": "Levels",
            "value": "7"
          },
          {
            "label": "SP Cost",
            "value": "21 + (Skill Level x 3)"
          },
          {
            "label": "Cast Delay",
            "value": "0.5 second"
          },
          {
            "label": "Cooldown",
            "value": "0.25 seconds"
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
                  "sp-cost": "42"
                }
              },
              {
                "level": 2,
                "values": {
                  "sp-cost": "44"
                }
              },
              {
                "level": 3,
                "values": {
                  "sp-cost": "46"
                }
              },
              {
                "level": 4,
                "values": {
                  "sp-cost": "48"
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
                  "sp-cost": "52"
                }
              },
              {
                "level": 7,
                "values": {
                  "sp-cost": "54"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "balanceNotes": [
        {
          "skillName": "Chulho Sonic Claw",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/spirit-handler/rebalance_2.md",
          "section": "18.1",
          "notes": [
            "Increases SP consumption from 42 to 54 based on level 7.",
            "Increases damage from 2800%/3150%(Commune With Chulho)Atk to 5650%/6450%(Commune With Chulho)Atk based on level 7.",
            "Increases factor weight of Mystical Creature skill level in skill formula from 30/50(Commune With Chulho) to 50/100(Commune With Chulho)."
          ],
          "specRows": [
            {
              "label": "SP Cost",
              "before": "42",
              "after": "54",
              "scope": "Lv 7",
              "source": "Increases SP consumption from 42 to 54 based on level 7."
            },
            {
              "label": "Damage",
              "before": "2800%/3150%(Commune With Chulho)Atk",
              "after": "5650%/6450%(Commune With Chulho)Atk",
              "scope": "Lv 7",
              "source": "Increases damage from 2800%/3150%(Commune With Chulho)Atk to 5650%/6450%(Commune With Chulho)Atk based on level 7."
            },
            {
              "label": "Factor Weight Of Mystical Creature Skill Level In Skill Formula",
              "before": "30/50(Commune With Chulho)",
              "after": "50/100(Commune With Chulho)",
              "scope": "",
              "source": "Increases factor weight of Mystical Creature skill level in skill formula from 30/50(Commune With Chulho) to 50/100(Commune With Chulho)."
            }
          ]
        },
        {
          "skillName": "Chulho Sonic Claw",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/spirit-handler/rebalance_3.md",
          "section": "17.1",
          "notes": [
            "Increases cast range from 9 cells to 11 cells.",
            "Increases base damage from 5650%/6450%Atk to 12400%/15200%Atk based on level 7."
          ],
          "specRows": [
            {
              "label": "Cast Range",
              "before": "9 cells",
              "after": "11 cells",
              "scope": "",
              "source": "Increases cast range from 9 cells to 11 cells."
            },
            {
              "label": "Damage",
              "before": "5650%/6450%Atk",
              "after": "12400%/15200%Atk",
              "scope": "Lv 7",
              "source": "Increases base damage from 5650%/6450%Atk to 12400%/15200%Atk based on level 7."
            }
          ]
        },
        {
          "skillName": "Chulho Sonic Claw",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/spirit-handler/rebalance_4.md",
          "section": "18.1",
          "notes": [
            "Increases base damage from 12400+(Mystical Creature level x 50)%/15200+(Mystical Creature level x 100)%(Commune With Chulho)Atk to 16500+(Mystical Creature level x 50)%/19300+(Mystical Creature level x 100)%(Commune With Chulho)Atk based on level 7."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "12400+(Mystical Creature level x 50)%/15200+(Mystical Creature level x 100)%(Commune With Chulho)Atk",
              "after": "16500+(Mystical Creature level x 50)%/19300+(Mystical Creature level x 100)%(Commune With Chulho)Atk",
              "scope": "Lv 7",
              "source": "Increases base damage from 12400+(Mystical Creature level x 50)%/15200+(Mystical Creature level x 100)%(Commune With Chulho)Atk to 16500+(Mystical Creature level x 50)%/19300+(Mystical Creature level x 100)%(Commune With Chulho)Atk based on level 7."
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
      "id": 5439,
      "imageFile": "5439.png",
      "name": "Kisul Water Spraying",
      "maxLevel": 7,
      "prerequisiteText": "Mystical Creature Mastery 1",
      "group": "Active",
      "type": "Recovery",
      "target": "Instant Cast",
      "recoversAp": "1",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Kisul_Water_Spraying",
      "description": "Shoots a water cannon filled with the healing power of ghosts, recovering the HP of yourself and party members around you.\nRecovers additional amount depends on level of Mystical Creature Mastery user learned, user's base level and CRT.\nIf the user learned Commune with Kisul, increases area of effect and healing amount.",
      "levelDetails": [
        {
          "level": 1,
          "text": "Recovery Amount 500+(Mystical Creature Mastery Lv x100)/Range: 7x7 cells / Recovery Amount(Commune) 750+(Mystical Creature Mastery Lv x150)/Range: 11x11 cells"
        },
        {
          "level": 2,
          "text": "Recovery Amount 1000+(Mystical Creature Mastery Lv x100)/Range: 7x7 cells / Recovery Amount(Commune) 1500+(Mystical Creature Mastery Lv x150)/Range: 11x11 cells"
        },
        {
          "level": 3,
          "text": "Recovery Amount 1500+(Mystical Creature Mastery Lv x100)/Range: 9x9 cells / Recovery Amount(Commune) 2250+(Mystical Creature Mastery Lv x150)/Range: 13x13 cells"
        },
        {
          "level": 4,
          "text": "Recovery Amount 2000+(Mystical Creature Mastery Lv x100)/Range: 9x9 cells / Recovery Amount(Commune) 3000+(Mystical Creature Mastery Lv x150)/Range: 13x13 cells"
        },
        {
          "level": 5,
          "text": "Recovery Amount 2500+(Mystical Creature Mastery Lv x100)/Range: 11x11 cells / Recovery Amount(Commune) 3750+(Mystical Creature Mastery Lv x150)/Range: 15x15 cells"
        },
        {
          "level": 6,
          "text": "Recovery Amount 3000+(Mystical Creature Mastery Lv x100)/Range: 11x11 cells / Recovery Amount(Commune) 4500+(Mystical Creature Mastery Lv x150)/Range: 15x15 cells"
        },
        {
          "level": 7,
          "text": "Recovery Amount 3500+(Mystical Creature Mastery Lv x100)/Range: 13x13 cells / Recovery Amount(Commune) 5250+(Mystical Creature Mastery Lv x150)/Range: 17x17 cells"
        }
      ],
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "1 second",
      "castDelay": "1 second",
      "cooldown": "0.3 seconds",
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
              "value": "65"
            },
            {
              "level": 3,
              "value": "69"
            },
            {
              "level": 4,
              "value": "73"
            },
            {
              "level": 5,
              "value": "77"
            },
            {
              "level": 6,
              "value": "81"
            },
            {
              "level": 7,
              "value": "85"
            }
          ]
        }
      ],
      "spCost": "57 + (Skill Level x 4)",
      "areaOfEffect": "7 x 7 ~ 13 x 13 11 x 11 ~ 17 x 17 (with Commune with Kisul )",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5439.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5439",
      "tree": {
        "idx": 10,
        "row": 1,
        "col": 3,
        "columns": 7,
        "requirements": [
          {
            "id": 5433,
            "level": 1,
            "name": "Mystical Creature Mastery",
            "visible": true
          }
        ]
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Active Skill"
          },
          {
            "label": "Levels",
            "value": "7"
          },
          {
            "label": "SP Cost",
            "value": "57 + (Skill Level x 4)"
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
            "value": "1 second"
          },
          {
            "label": "Cooldown",
            "value": "0.3 seconds"
          },
          {
            "label": "Target",
            "value": "Instant Cast"
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
                "id": "recovery-amount",
                "label": "Recovery Amount"
              },
              {
                "id": "recovery-amount-commune",
                "label": "Recovery Amount (Commune)"
              },
              {
                "id": "sp-cost",
                "label": "SP Cost"
              },
              {
                "id": "area-of-effect",
                "label": "Area of Effect"
              },
              {
                "id": "area-of-effect-commune",
                "label": "Area of Effect (Commune)"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "recovery-amount": "500 + (Mystical Creature Mastery Lv x 100)",
                  "area-of-effect": "7x7",
                  "recovery-amount-commune": "750 + (Mystical Creature Mastery Lv x 150)",
                  "area-of-effect-commune": "11x11",
                  "sp-cost": "61"
                }
              },
              {
                "level": 2,
                "values": {
                  "recovery-amount": "1000 + (Mystical Creature Mastery Lv x 100)",
                  "area-of-effect": "7x7",
                  "recovery-amount-commune": "1500 + (Mystical Creature Mastery Lv x 150)",
                  "area-of-effect-commune": "11x11",
                  "sp-cost": "65"
                }
              },
              {
                "level": 3,
                "values": {
                  "recovery-amount": "1500 + (Mystical Creature Mastery Lv x 100)",
                  "area-of-effect": "9x9",
                  "recovery-amount-commune": "2250 + (Mystical Creature Mastery Lv x 150)",
                  "area-of-effect-commune": "13x13",
                  "sp-cost": "69"
                }
              },
              {
                "level": 4,
                "values": {
                  "recovery-amount": "2000 + (Mystical Creature Mastery Lv x 100)",
                  "area-of-effect": "9x9",
                  "recovery-amount-commune": "3000 + (Mystical Creature Mastery Lv x 150)",
                  "area-of-effect-commune": "13x13",
                  "sp-cost": "73"
                }
              },
              {
                "level": 5,
                "values": {
                  "recovery-amount": "2500 + (Mystical Creature Mastery Lv x 100)",
                  "area-of-effect": "11x11",
                  "recovery-amount-commune": "3750 + (Mystical Creature Mastery Lv x 150)",
                  "area-of-effect-commune": "15x15",
                  "sp-cost": "77"
                }
              },
              {
                "level": 6,
                "values": {
                  "recovery-amount": "3000 + (Mystical Creature Mastery Lv x 100)",
                  "area-of-effect": "11x11",
                  "recovery-amount-commune": "4500 + (Mystical Creature Mastery Lv x 150)",
                  "area-of-effect-commune": "15x15",
                  "sp-cost": "81"
                }
              },
              {
                "level": 7,
                "values": {
                  "recovery-amount": "3500 + (Mystical Creature Mastery Lv x 100)",
                  "area-of-effect": "13x13",
                  "recovery-amount-commune": "5250 + (Mystical Creature Mastery Lv x 150)",
                  "area-of-effect-commune": "17x17",
                  "sp-cost": "85"
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
      "id": 5444,
      "imageFile": "5444.png",
      "name": "Colors of Hyunrok",
      "maxLevel": 7,
      "prerequisiteText": "Mystical Creature Mastery 1",
      "group": "Active",
      "type": "Supportive",
      "target": "Instant Cast",
      "recoversAp": "",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Colors_of_Hyunrok",
      "description": "With the mysterious magical power of Hyunrok, endows elemental property to CN Meteor Hyunrok Breeze and Hyunrok Cannon for 300 seconds.\nIf the user learned Commune with Hyunrok, using this skill also increases CN Meteor damage by 50%.\nWhen using skill level 7, the endowment is canceled.",
      "levelDetails": [
        {
          "level": 1,
          "text": "Endows water property"
        },
        {
          "level": 2,
          "text": "Endows wind property"
        },
        {
          "level": 3,
          "text": "Endows earth property"
        },
        {
          "level": 4,
          "text": "Endows fire property"
        },
        {
          "level": 5,
          "text": "Endows shadow property"
        },
        {
          "level": 6,
          "text": "Endows holy property"
        },
        {
          "level": 7,
          "text": "Removes endowment"
        }
      ],
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
              "value": "90"
            },
            {
              "level": 3,
              "value": "90"
            },
            {
              "level": 4,
              "value": "90"
            },
            {
              "level": 5,
              "value": "90"
            },
            {
              "level": 6,
              "value": "90"
            },
            {
              "level": 7,
              "value": "90"
            }
          ]
        }
      ],
      "spCost": "90",
      "fixedCastTime": "1 seconds",
      "variableCastTime": "1.7 seconds",
      "duration": "300 seconds",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5444.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5444",
      "tree": {
        "idx": 12,
        "row": 1,
        "col": 5,
        "columns": 7,
        "requirements": [
          {
            "id": 5433,
            "level": 1,
            "name": "Mystical Creature Mastery",
            "visible": true
          }
        ]
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Active Skill"
          },
          {
            "label": "Levels",
            "value": "7"
          },
          {
            "label": "SP Cost",
            "value": "90"
          },
          {
            "label": "Fixed Cast Time",
            "value": "1 seconds"
          },
          {
            "label": "Variable Cast Time",
            "value": "1.7 seconds"
          },
          {
            "label": "Target",
            "value": "Instant Cast"
          },
          {
            "label": "Duration",
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
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "effect": "Endows water property",
                  "sp-cost": "90"
                }
              },
              {
                "level": 2,
                "values": {
                  "effect": "Endows wind property",
                  "sp-cost": "90"
                }
              },
              {
                "level": 3,
                "values": {
                  "effect": "Endows earth property",
                  "sp-cost": "90"
                }
              },
              {
                "level": 4,
                "values": {
                  "effect": "Endows fire property",
                  "sp-cost": "90"
                }
              },
              {
                "level": 5,
                "values": {
                  "effect": "Endows shadow property",
                  "sp-cost": "90"
                }
              },
              {
                "level": 6,
                "values": {
                  "effect": "Endows holy property",
                  "sp-cost": "90"
                }
              },
              {
                "level": 7,
                "values": {
                  "effect": "Removes endowment",
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
      "id": 5506,
      "imageFile": "5506.png",
      "name": "Chulho Battering",
      "maxLevel": 7,
      "prerequisiteText": "Mystical Creature Mastery level 7, Chulho Sonic Claw level 5",
      "group": "Active",
      "type": "Long ranged physical",
      "target": "Single target",
      "recoversAp": "1",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "",
      "description": "Sharp claws of Chulho slash the target, inflicts long ranged physical damage to the target and surrounding enemies around the target for 5 hits.\nDeals additional damage depends on level of Mystical Creature Mastery user learned, user's base level and POW.\nHas a chance to trigger critical, the critical chance is the user's Cri.\nThe effectiveness of critical modifier is applied by half.",
      "levelDetails": [
        {
          "level": 1,
          "text": "(640 + (Mystical Creature Mastery level x 70))% Atk per hit / 5 x 5 cells."
        },
        {
          "level": 2,
          "text": "(800 + (Mystical Creature Mastery level x 70))% Atk per hit / 5 x 5 cells."
        },
        {
          "level": 3,
          "text": "(960 + (Mystical Creature Mastery level x 70))% Atk per hit / 5 x 5 cells."
        },
        {
          "level": 4,
          "text": "(1120 + (Mystical Creature Mastery level x 70))% Atk per hit / 5 x 5 cells."
        },
        {
          "level": 5,
          "text": "(1280 + (Mystical Creature Mastery level x 70))% Atk per hit / 7 x 7 cells."
        },
        {
          "level": 6,
          "text": "(1440 + (Mystical Creature Mastery level x 70))% Atk per hit / 7 x 7 cells."
        },
        {
          "level": 7,
          "text": "(1600 + (Mystical Creature Mastery level x 70))% Atk per hit / 7 x 7 cells."
        }
      ],
      "levelExtras": [],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5506.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5506",
      "tree": {
        "idx": 14,
        "row": 2,
        "col": 0,
        "columns": 7,
        "requirements": [
          {
            "id": 5433,
            "level": 7,
            "name": "Mystical Creature Mastery",
            "visible": true
          },
          {
            "id": 5435,
            "level": 5,
            "name": "Chulho Sonic Claw",
            "visible": true
          }
        ]
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Active Skill"
          },
          {
            "label": "Levels",
            "value": "7"
          },
          {
            "label": "Target",
            "value": "Single target"
          },
          {
            "label": "AP Generated",
            "value": "1"
          }
        ],
        "levelTables": []
      },
      "balanceNotes": [
        {
          "skillName": "Chulho Battering",
          "versionId": "rebalance-5",
          "versionLabel": "Rebalance 5",
          "file": "rebalances/spirit-handler/added_skills.md",
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
      "id": 5436,
      "imageFile": "5436.png",
      "name": "Howling of Chulho",
      "maxLevel": 7,
      "prerequisiteText": "basic skill",
      "group": "Active",
      "type": "Range Physical",
      "target": "Instant Cast",
      "recoversAp": "2",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Howling_of_Chulho",
      "description": "Use the power of the Iron Tiger to roar with all your might, dealing long-range physical DMG to enemies within a surrounding range.\nWhen cast, grants [Hogogong effect] to enemies within the surrounding area for 12 seconds.\nDMG increases additionally based on the Spiritual Communication skill level, caster's base level, and POW.\nIf you acquire [Commune With Chulho], the effect range and DMG increase.",
      "levelDetails": [
        {
          "level": 1,
          "text": "ATK 1650+(Mystical Creature Mastery Lv x50)%\nATK(Commune)1850+(Mystical Creature Mastery Lv x100)%\nRange: 5x5 cell/Range(Commune): 7x7 cell"
        },
        {
          "level": 2,
          "text": "ATK 2700+(Mystical Creature Mastery Lv x50)%\nATK(Commune)3000+(Mystical Creature Mastery Lv x100)%\n,Range: 5x5 cell/Range(Commune): 7x7 cell"
        },
        {
          "level": 3,
          "text": "ATK 3750+(Mystical Creature Mastery Lv x50)%\nATK(Commune)4150+(Mystical Creature Mastery Lv x100)%\nRange: 5x5 cell/Range(Commune): 7x7 cell"
        },
        {
          "level": 4,
          "text": "ATK 4800+(Mystical Creature Mastery Lv x50)%\nATK(Commune)5300+(Mystical Creature Mastery Lv x100)%\nRange: 7x7 cell/Range(Commune): 9x9 cell"
        },
        {
          "level": 5,
          "text": "ATK 5850+(Mystical Creature Mastery Lv x50)%\nATK(Commune)6450+(Mystical Creature Mastery Lv x100)%\nRange: 7x7 cell/Range(Commune): 9x9 cell"
        },
        {
          "level": 6,
          "text": "ATK 6900+(Mystical Creature Mastery Lv x50)%\nATK(Commune)7600+(Mystical Creature Mastery Lv x100)%\nRange: 7x7 cell/Range(Commune): 9x9 cell"
        },
        {
          "level": 7,
          "text": "ATK 7950+(Mystical Creature Mastery Lv x50)%\nATK(Commune)8750+(Mystical Creature Mastery Lv x100)%\nRange: 9x9 cell/Range(Commune): 11x11 cell"
        }
      ],
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
              "value": "72"
            },
            {
              "level": 3,
              "value": "72"
            },
            {
              "level": 4,
              "value": "72"
            },
            {
              "level": 5,
              "value": "72"
            },
            {
              "level": 6,
              "value": "72"
            },
            {
              "level": 7,
              "value": "72"
            }
          ]
        }
      ],
      "spCost": "27 + (Skill Level x 5)",
      "fixedCastTime": "1 second",
      "cooldown": "1 second",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5436.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5436",
      "tree": {
        "idx": 15,
        "row": 2,
        "col": 1,
        "columns": 7,
        "requirements": [
          {
            "id": 5433,
            "level": 3,
            "name": "Mystical Creature Mastery",
            "visible": true
          },
          {
            "id": 5435,
            "level": 3,
            "name": "Chulho Sonic Claw",
            "visible": true
          }
        ]
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Active Skill"
          },
          {
            "label": "Levels",
            "value": "7"
          },
          {
            "label": "SP Cost",
            "value": "27 + (Skill Level x 5)"
          },
          {
            "label": "Fixed Cast Time",
            "value": "1 second"
          },
          {
            "label": "Cooldown",
            "value": "1 second"
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
                  "area-of-effect": "5x5",
                  "effect": "Range(Commune): 7 x 7 cells",
                  "sp-cost": "72"
                }
              },
              {
                "level": 2,
                "values": {
                  "effect": ",Range: 5 x 5 cells / Range(Commune): 7 x 7 cells",
                  "sp-cost": "72"
                }
              },
              {
                "level": 3,
                "values": {
                  "area-of-effect": "5x5",
                  "effect": "Range(Commune): 7 x 7 cells",
                  "sp-cost": "72"
                }
              },
              {
                "level": 4,
                "values": {
                  "area-of-effect": "7x7",
                  "effect": "Range(Commune): 9 x 9 cells",
                  "sp-cost": "72"
                }
              },
              {
                "level": 5,
                "values": {
                  "area-of-effect": "7x7",
                  "effect": "Range(Commune): 9 x 9 cells",
                  "sp-cost": "72"
                }
              },
              {
                "level": 6,
                "values": {
                  "area-of-effect": "7x7",
                  "effect": "Range(Commune): 9 x 9 cells",
                  "sp-cost": "72"
                }
              },
              {
                "level": 7,
                "values": {
                  "area-of-effect": "9x9",
                  "effect": "Range(Commune): 11 x 11 cells",
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
          "skillName": "Howling of Chulho",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/spirit-handler/rebalance_2.md",
          "section": "18.2",
          "notes": [
            "Increases SP consumption from 62 to 68.",
            "Increases damage from 5750%/7250%(Commune With Chulho)Atk to 7950%/8750%(Commune With Chulho)Atk based on level 7.",
            "Increases factor weight of Mystical Creature skill level in skill formula from 30/50(Commune With Chulho) to 50/100(Commune With Chulho)."
          ],
          "specRows": [
            {
              "label": "SP Cost",
              "before": "62",
              "after": "68",
              "scope": "",
              "source": "Increases SP consumption from 62 to 68."
            },
            {
              "label": "Damage",
              "before": "5750%/7250%(Commune With Chulho)Atk",
              "after": "7950%/8750%(Commune With Chulho)Atk",
              "scope": "Lv 7",
              "source": "Increases damage from 5750%/7250%(Commune With Chulho)Atk to 7950%/8750%(Commune With Chulho)Atk based on level 7."
            },
            {
              "label": "Factor Weight Of Mystical Creature Skill Level In Skill Formula",
              "before": "30/50(Commune With Chulho)",
              "after": "50/100(Commune With Chulho)",
              "scope": "",
              "source": "Increases factor weight of Mystical Creature skill level in skill formula from 30/50(Commune With Chulho) to 50/100(Commune With Chulho)."
            }
          ]
        },
        {
          "skillName": "Howling of Chulho",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/spirit-handler/rebalance_3.md",
          "section": "17.2",
          "notes": [
            "Increases SP consumption from 68 to 72"
          ],
          "specRows": [
            {
              "label": "SP Cost",
              "before": "68",
              "after": "72",
              "scope": "",
              "source": "Increases SP consumption from 68 to 72"
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
      "id": 5440,
      "imageFile": "5440.png",
      "name": "Marine Festival of Kisul",
      "maxLevel": 5,
      "prerequisiteText": "basic skill",
      "group": "Active",
      "type": "buff",
      "target": "Instant Cast",
      "recoversAp": "4",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Marine_Festival_of_Kisul",
      "description": "Using the power of the sea that Gwisul possesses, it temporarily increases the POW, CRT, and CON of yourself and the party members around you.\nWhen you acquire [Commune With Kisul], the range of effect increases and the duration is doubled.\nDoes not stack with Cardinal's [Benedictum] effect.",
      "levelDetails": [
        {
          "level": 1,
          "text": "POW,CRT,CON +2/Duration: 60 sec\nRange: 5x5 cell/Range(Commune): 9x9 cell"
        },
        {
          "level": 2,
          "text": "POW,CRT,CON +4/Duration: 75 sec\nRange: 7x7 cell/Range(Commune): 11x11 cell"
        },
        {
          "level": 3,
          "text": "POW,CRT,CON +6/Duration: 90 sec\nRange: 9x9 cell/Range(Commune): 13x13 cell"
        },
        {
          "level": 4,
          "text": "POW,CRT,CON +8/Duration: 105 sec\nRange: 11x11 cell/Range(Commune): 15x15 cell"
        },
        {
          "level": 5,
          "text": "POW,CRT,CON +10/Duration: 120 sec\nRange: 13x13 cell/Range(Commune): 17x17 cell"
        }
      ],
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "1 second",
      "castDelay": "1 second",
      "cooldown": "2 seconds",
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
        }
      ],
      "spCost": "57 + (Skill Level x 4)",
      "duration": "60 ~ 120 seconds",
      "areaOfEffect": "5 x 5 ~ 13 x 13 9 x 9 ~ 17 x 17 (with Commune with Kisul )",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5440.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5440",
      "tree": {
        "idx": 17,
        "row": 2,
        "col": 3,
        "columns": 7,
        "requirements": [
          {
            "id": 5433,
            "level": 3,
            "name": "Mystical Creature Mastery",
            "visible": true
          },
          {
            "id": 5439,
            "level": 3,
            "name": "Kisul Water Spraying",
            "visible": true
          }
        ]
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
            "value": "57 + (Skill Level x 4)"
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
            "value": "1 second"
          },
          {
            "label": "Cooldown",
            "value": "2 seconds"
          },
          {
            "label": "Target",
            "value": "Instant Cast"
          },
          {
            "label": "AP Generated",
            "value": "4"
          }
        ],
        "levelTables": [
          {
            "title": "Level Scaling",
            "columns": [
              {
                "id": "pow",
                "label": "POW"
              },
              {
                "id": "crt",
                "label": "CRT"
              },
              {
                "id": "con",
                "label": "CON"
              },
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
                "id": "effect",
                "label": "Effect"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "duration": "60 seconds",
                  "pow": "+2",
                  "crt": "+2",
                  "con": "+2",
                  "area-of-effect": "5x5",
                  "effect": "Range(Commune): 9 x 9 cells",
                  "sp-cost": "80"
                }
              },
              {
                "level": 2,
                "values": {
                  "duration": "75 seconds",
                  "pow": "+4",
                  "crt": "+4",
                  "con": "+4",
                  "area-of-effect": "7x7",
                  "effect": "Range(Commune): 11 x 11 cells",
                  "sp-cost": "90"
                }
              },
              {
                "level": 3,
                "values": {
                  "duration": "90 seconds",
                  "pow": "+6",
                  "crt": "+6",
                  "con": "+6",
                  "area-of-effect": "9x9",
                  "effect": "Range(Commune): 13 x 13 cells",
                  "sp-cost": "100"
                }
              },
              {
                "level": 4,
                "values": {
                  "duration": "105 seconds",
                  "pow": "+8",
                  "crt": "+8",
                  "con": "+8",
                  "area-of-effect": "11x11",
                  "effect": "Range(Commune): 15 x 15 cells",
                  "sp-cost": "110"
                }
              },
              {
                "level": 5,
                "values": {
                  "duration": "120 seconds",
                  "pow": "+10",
                  "crt": "+10",
                  "con": "+10",
                  "area-of-effect": "13x13",
                  "effect": "Range(Commune): 17 x 17 cells",
                  "sp-cost": "120"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "balanceNotes": [
        {
          "skillName": "Marine Festival of Kisul",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/spirit-handler/rebalance_2.md",
          "section": "18.4",
          "notes": [
            "Increases AP recovery rate from 2 to 4."
          ],
          "specRows": [
            {
              "label": "AP Generated",
              "before": "2",
              "after": "4",
              "scope": "",
              "source": "Increases AP recovery rate from 2 to 4."
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
      "id": 5441,
      "imageFile": "5441.png",
      "name": "Sandy Festival of Kisul",
      "maxLevel": 5,
      "prerequisiteText": "basic skill",
      "group": "Active",
      "type": "buff",
      "target": "Instant Cast",
      "recoversAp": "4",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Sandy_Festival_of_Kisul",
      "description": "Using the power of the sea that Gwiseol possesses, he increases the SPL, WIS, and STA of himself and the party members around him for a certain period of time.\nWhen you acquire [Commune With Kisul], the range of effect increases and the duration is doubled.\nDoes not stack with Cardinal's [Religio] effect.",
      "levelDetails": [
        {
          "level": 1,
          "text": "SPL,WIS,STA +2/Duration: 60 sec\nRange: 5x5 cell/Range(Commune): 9x9 cell"
        },
        {
          "level": 2,
          "text": "SPL,WIS,STA +4/Duration: 75 sec\nRange: 7x7 cell/Range(Commune): 11x11 cell"
        },
        {
          "level": 3,
          "text": "SPL,WIS,STA +6/Duration: 90 sec\nRange: 9x9 cell/Range(Commune): 13x13 cell"
        },
        {
          "level": 4,
          "text": "SPL,WIS,STA +8/Duration: 105 sec\nRange: 11x11 cell/Range(Commune): 15x15 cell"
        },
        {
          "level": 5,
          "text": "SPL,WIS,STA +10/Duration: 120 sec\nRange: 13x13 cell/Range(Commune): 17x17 cell"
        }
      ],
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "1 second",
      "castDelay": "1 second",
      "cooldown": "2 seconds",
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
        }
      ],
      "spCost": "70 + (Skill Level x 10)",
      "duration": "60 ~ 120 seconds",
      "areaOfEffect": "5 x 5 ~ 13 x 13 9 x 9 ~ 17 x 17 (with Commune with Kisul )",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5441.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5441",
      "tree": {
        "idx": 18,
        "row": 2,
        "col": 4,
        "columns": 7,
        "requirements": [
          {
            "id": 5433,
            "level": 3,
            "name": "Mystical Creature Mastery",
            "visible": true
          },
          {
            "id": 5439,
            "level": 3,
            "name": "Kisul Water Spraying",
            "visible": true
          }
        ]
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
            "value": "1.5 seconds"
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
            "value": "Instant Cast"
          },
          {
            "label": "AP Generated",
            "value": "4"
          }
        ],
        "levelTables": [
          {
            "title": "Level Scaling",
            "columns": [
              {
                "id": "spl",
                "label": "SPL"
              },
              {
                "id": "wis",
                "label": "WIS"
              },
              {
                "id": "sta",
                "label": "STA"
              },
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
                "id": "effect",
                "label": "Effect"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "duration": "60 seconds",
                  "spl": "+2",
                  "wis": "+2",
                  "sta": "+2",
                  "area-of-effect": "5x5",
                  "effect": "Range(Commune): 9 x 9 cells",
                  "sp-cost": "80"
                }
              },
              {
                "level": 2,
                "values": {
                  "duration": "75 seconds",
                  "spl": "+4",
                  "wis": "+4",
                  "sta": "+4",
                  "area-of-effect": "7x7",
                  "effect": "Range(Commune): 11 x 11 cells",
                  "sp-cost": "90"
                }
              },
              {
                "level": 3,
                "values": {
                  "duration": "90 seconds",
                  "spl": "+6",
                  "wis": "+6",
                  "sta": "+6",
                  "area-of-effect": "9x9",
                  "effect": "Range(Commune): 13 x 13 cells",
                  "sp-cost": "100"
                }
              },
              {
                "level": 4,
                "values": {
                  "duration": "105 seconds",
                  "spl": "+8",
                  "wis": "+8",
                  "sta": "+8",
                  "area-of-effect": "11x11",
                  "effect": "Range(Commune): 15 x 15 cells",
                  "sp-cost": "110"
                }
              },
              {
                "level": 5,
                "values": {
                  "duration": "120 seconds",
                  "spl": "+10",
                  "wis": "+10",
                  "sta": "+10",
                  "area-of-effect": "13x13",
                  "effect": "Range(Commune): 17 x 17 cells",
                  "sp-cost": "120"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "balanceNotes": [
        {
          "skillName": "Sandy Festival of Kisul",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/spirit-handler/rebalance_2.md",
          "section": "18.5",
          "notes": [
            "Increases AP recovery rate from 2 to 4."
          ],
          "specRows": [
            {
              "label": "AP Generated",
              "before": "2",
              "after": "4",
              "scope": "",
              "source": "Increases AP recovery rate from 2 to 4."
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
      "id": 5445,
      "imageFile": "5445.png",
      "name": "Hyunrok Breeze",
      "maxLevel": 7,
      "prerequisiteText": "Mystical Creature Mastery 3, Colors of Hyunrok 3",
      "group": "Active",
      "type": "Magic",
      "target": "1 Cell Ground Target",
      "recoversAp": "4",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Hyunrok_Breeze",
      "description": "Using the mysterious power of Hyeonrok, creates wind on the ground and inflicts neutral magic damage every 0.3 seconds for 4.5 seconds to targets within the range.\nDeals additional damage depends on level of Mystical Creature Mastery user learned, user's base level and SPL.\nIf the user learned Commune With Hyunrok, increases skill damage.\nDamage property can be changed according to Colors of Hyunrok.",
      "levelDetails": [
        {
          "level": 1,
          "text": "MATK 1400+(Mystical Creature Mastery Lv x20)%\nMATK(Commune With Chulho) 1700+(Mystical Creature Mastery Lv x40)%\nRange: 5x5cell"
        },
        {
          "level": 2,
          "text": "MATK 2150+(Mystical Creature Mastery Lv x20)%\nMATK(Commune With Chulho) 2650+(Mystical Creature Mastery Lv x40)%\nRange: 5x5cell"
        },
        {
          "level": 3,
          "text": "MATK 2900+(Mystical Creature Mastery Lv x20)%\nMATK(Commune With Chulho) 3600+(Mystical Creature Mastery Lv x40)%\nRange: 7x7cell"
        },
        {
          "level": 4,
          "text": "MATK 3650+(Mystical Creature Mastery Lv x20)%\nMATK(Commune With Chulho) 4550+(Mystical Creature Mastery Lv x40)%\nRange: 7x7cell"
        },
        {
          "level": 5,
          "text": "MATK 4400+(Mystical Creature Mastery Lv x20)%\nMATK(Commune With Chulho) 5500+(Mystical Creature Mastery Lv x40)%\nRange: 9x9cell"
        },
        {
          "level": 6,
          "text": "MATK 5150+(Mystical Creature Mastery Lv x20)%\nMATK(Commune With Chulho) 6450+(Mystical Creature Mastery Lv x40)%\nRange: 9x9cell"
        },
        {
          "level": 7,
          "text": "MATK 5900+(Mystical Creature Mastery Lv x20)%\nMATK(Commune With Chulho) 7400+(Mystical Creature Mastery Lv x40)%\nRange: 11x11cell"
        }
      ],
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "3 seconds",
      "castDelay": "0.5 seconds",
      "cooldown": "4.5 seconds",
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
              "value": "64"
            },
            {
              "level": 3,
              "value": "70"
            },
            {
              "level": 4,
              "value": "76"
            },
            {
              "level": 5,
              "value": "82"
            },
            {
              "level": 6,
              "value": "88"
            },
            {
              "level": 7,
              "value": "94"
            }
          ]
        }
      ],
      "spCost": "50 + (Skill Level × 6)",
      "areaOfEffect": "5 x 5 ~ 11 x 11",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5445.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5445",
      "tree": {
        "idx": 19,
        "row": 2,
        "col": 5,
        "columns": 7,
        "requirements": [
          {
            "id": 5433,
            "level": 3,
            "name": "Mystical Creature Mastery",
            "visible": true
          },
          {
            "id": 5444,
            "level": 3,
            "name": "Colors of Hyunrok",
            "visible": true
          }
        ]
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Active Skill"
          },
          {
            "label": "Levels",
            "value": "7"
          },
          {
            "label": "SP Cost",
            "value": "50 + (Skill Level × 6)"
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
            "value": "4.5 seconds"
          },
          {
            "label": "Target",
            "value": "1 Cell Ground Target"
          },
          {
            "label": "AP Generated",
            "value": "4"
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
                  "sp-cost": "58"
                }
              },
              {
                "level": 2,
                "values": {
                  "area-of-effect": "5x5",
                  "sp-cost": "64"
                }
              },
              {
                "level": 3,
                "values": {
                  "area-of-effect": "7x7",
                  "sp-cost": "70"
                }
              },
              {
                "level": 4,
                "values": {
                  "area-of-effect": "7x7",
                  "sp-cost": "76"
                }
              },
              {
                "level": 5,
                "values": {
                  "area-of-effect": "9x9",
                  "sp-cost": "82"
                }
              },
              {
                "level": 6,
                "values": {
                  "area-of-effect": "9x9",
                  "sp-cost": "88"
                }
              },
              {
                "level": 7,
                "values": {
                  "area-of-effect": "11x11",
                  "sp-cost": "94"
                }
              }
            ],
            "formulaRows": []
          }
        ]
      },
      "balanceNotes": [
        {
          "skillName": "Hyunrok Breeze",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/spirit-handler/rebalance_2.md",
          "section": "18.6",
          "notes": [
            "Increases SP consumption from 92 to 94 based on level 7.",
            "Increases AP recovery rate from 3 to 4.",
            "Increases damage from 2250%/4000%(Commune With Hyunrok)Matk to 4800%/6300%(Commune With Hyunrok)Matk based on level 7."
          ],
          "specRows": [
            {
              "label": "SP Cost",
              "before": "92",
              "after": "94",
              "scope": "Lv 7",
              "source": "Increases SP consumption from 92 to 94 based on level 7."
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
              "before": "2250%/4000%(Commune With Hyunrok)Matk",
              "after": "4800%/6300%(Commune With Hyunrok)Matk",
              "scope": "Lv 7",
              "source": "Increases damage from 2250%/4000%(Commune With Hyunrok)Matk to 4800%/6300%(Commune With Hyunrok)Matk based on level 7."
            }
          ]
        },
        {
          "skillName": "Hyunrok Breeze",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/spirit-handler/rebalance_3.md",
          "section": "17.5",
          "notes": [
            "Increases base damage from 4800%/6300%Matk to 5900%/7400%Matk per hit based on level 7."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "4800%/6300%Matk",
              "after": "5900%/7400%Matk per hit",
              "scope": "Lv 7",
              "source": "Increases base damage from 4800%/6300%Matk to 5900%/7400%Matk per hit based on level 7."
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
      "id": 5437,
      "imageFile": "5437.png",
      "name": "Hogogong Strike",
      "maxLevel": 7,
      "prerequisiteText": "basic skill",
      "group": "Active",
      "type": "Range Physical",
      "target": "Instant Cast",
      "recoversAp": "1, 2(if Commune With Chulho is learned)",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Hogogong_Strike",
      "description": "[Hogogong effect] Attacks surrounding targets with the Iron Tiger's front leg punch, inflicting long-range physical DMG 3 times.\nDMG increases further based on the level of the Spirit Understanding skill, the caster's base level, and POW, and critical DMG is applied based on the caster's critical probability.\nIn case of critical DMG, half of the total critical DMG increase options is applied.\nIf you acquire [Commune With Chulho], AP recovery amount and DMG increase.",
      "levelDetails": [
        {
          "level": 1,
          "text": "1 Per hit ATK 380+(Mystical Creature Mastery Lv x10)%\n1 Per hit ATK(Commune) 600+(Mystical Creature Mastery Lv x20)%\nRange: 7x7 cell"
        },
        {
          "level": 2,
          "text": "1 Per hit ATK 580+(Mystical Creature Mastery Lv x10)%\n1 Per hit ATK(Commune) 950+(Mystical Creature Mastery Lv x20)%\nRange: 7x7 cell"
        },
        {
          "level": 3,
          "text": "1 Per hit ATK 780+(Mystical Creature Mastery Lv x10)%\n1 Per hit ATK(Commune) 1300+(Mystical Creature Mastery Lv x20)%\nRange: 7x7 cell"
        },
        {
          "level": 4,
          "text": "1 Per hit ATK 980+(Mystical Creature Mastery Lv x10)%\n1 Per hit ATK(Commune) 1650+(Mystical Creature Mastery Lv x20)%\nRange: 9x9 cell"
        },
        {
          "level": 5,
          "text": "1 Per hit ATK 1180+(Mystical Creature Mastery Lv x10)%\n1 Per hit ATK(Commune) 2000+(Mystical Creature Mastery Lv x20)%\nRange: 9x9 cell"
        },
        {
          "level": 6,
          "text": "1 Per hit ATK 1380+(Mystical Creature Mastery Lv x10)%\n1 Per hit ATK(Commune) 2350+(Mystical Creature Mastery Lv x20)%\nRange: 9x9 cell"
        },
        {
          "level": 7,
          "text": "1 Per hit ATK 1580+(Mystical Creature Mastery Lv x10)%\n1 Per hit ATK(Commune) 2700+(Mystical Creature Mastery Lv x20)%\nRange: 11x11 cell"
        }
      ],
      "levelExtras": [
        {
          "label": "SP Cost",
          "values": [
            {
              "level": 1,
              "value": "67"
            },
            {
              "level": 2,
              "value": "70"
            },
            {
              "level": 3,
              "value": "73"
            },
            {
              "level": 4,
              "value": "76"
            },
            {
              "level": 5,
              "value": "79"
            },
            {
              "level": 6,
              "value": "82"
            },
            {
              "level": 7,
              "value": "85"
            }
          ]
        }
      ],
      "spCost": "47 + (Skill Level x 3)",
      "fixedCastTime": "1 second",
      "cooldown": "0.35 seconds",
      "castRange": "7 x 7 ~ 11 x 11 cells",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5437.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5437",
      "tree": {
        "idx": 22,
        "row": 3,
        "col": 1,
        "columns": 7,
        "requirements": [
          {
            "id": 5433,
            "level": 5,
            "name": "Mystical Creature Mastery",
            "visible": true
          },
          {
            "id": 5436,
            "level": 3,
            "name": "Howling of Chulho",
            "visible": true
          }
        ]
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Active Skill"
          },
          {
            "label": "Levels",
            "value": "7"
          },
          {
            "label": "SP Cost",
            "value": "47 + (Skill Level x 3)"
          },
          {
            "label": "Fixed Cast Time",
            "value": "1 second"
          },
          {
            "label": "Cooldown",
            "value": "0.35 seconds"
          },
          {
            "label": "Cast Range",
            "value": "7 x 7 ~ 11 x 11 cells"
          },
          {
            "label": "Target",
            "value": "Instant Cast"
          },
          {
            "label": "AP Generated",
            "value": "1, 2(if Commune With Chulho is learned)"
          }
        ],
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
                  "sp-cost": "67"
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
                  "sp-cost": "73"
                }
              },
              {
                "level": 4,
                "values": {
                  "area-of-effect": "9x9",
                  "sp-cost": "76"
                }
              },
              {
                "level": 5,
                "values": {
                  "area-of-effect": "9x9",
                  "sp-cost": "79"
                }
              },
              {
                "level": 6,
                "values": {
                  "area-of-effect": "9x9",
                  "sp-cost": "82"
                }
              },
              {
                "level": 7,
                "values": {
                  "area-of-effect": "11x11",
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
          "skillName": "Hogogong Strike",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/spirit-handler/rebalance_2.md",
          "section": "18.3",
          "notes": [
            "Increases SP consumption from 68 to 72 based on level 7.",
            "Increases damage from 900%/1500%(Commune With Chulho)Atk to 1580%/2700%(Commune With Chulho)Atk per hit based on level 7.",
            "Reduces cooldown from 0.5 seconds to 0.35 seconds."
          ],
          "specRows": [
            {
              "label": "SP Cost",
              "before": "68",
              "after": "72",
              "scope": "Lv 7",
              "source": "Increases SP consumption from 68 to 72 based on level 7."
            },
            {
              "label": "Damage",
              "before": "900%/1500%(Commune With Chulho)Atk",
              "after": "1580%/2700%(Commune With Chulho)Atk per hit",
              "scope": "Lv 7",
              "source": "Increases damage from 900%/1500%(Commune With Chulho)Atk to 1580%/2700%(Commune With Chulho)Atk per hit based on level 7."
            },
            {
              "label": "Cooldown",
              "before": "0.5 seconds",
              "after": "0.35 seconds",
              "scope": "",
              "source": "Reduces cooldown from 0.5 seconds to 0.35 seconds."
            }
          ]
        },
        {
          "skillName": "Hogogong Strike",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/spirit-handler/rebalance_3.md",
          "section": "17.3",
          "notes": [
            "Increases SP consumption from 72 to 85 based on level 7."
          ],
          "specRows": [
            {
              "label": "SP Cost",
              "before": "72",
              "after": "85",
              "scope": "Lv 7",
              "source": "Increases SP consumption from 72 to 85 based on level 7."
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
      "id": 5442,
      "imageFile": "5442.png",
      "name": "Kisul Rampage",
      "maxLevel": 7,
      "prerequisiteText": "Mystical Creature Mastery 5, Marine Festival of Kisul 2, Sandy Festival of Kisul 2",
      "group": "Active",
      "type": "Resource Consumption",
      "target": "Instant Cast",
      "recoversAp": "",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Kisul_Rampage",
      "description": "Using the powerful healing effect of Kisul.\nRecovers 2 AP every 1 second to all party members, excluding the caster, with 7 x 7 cells around the caster.\nThe caster cannot use other skills while the effect is active, and the effect is canceled if the caster moves from their current cell due to movement or knockback effects.\nIf Commune with Kisul is learned, the area of effect increases to 11x11 cells, and the AP recovery amount increases to 4.",
      "levelDetails": [
        {
          "level": 1,
          "text": "Duration : 4 seconds"
        },
        {
          "level": 2,
          "text": "Duration : 5 seconds"
        },
        {
          "level": 3,
          "text": "Duration : 6 seconds"
        },
        {
          "level": 4,
          "text": "Duration : 7 seconds"
        },
        {
          "level": 5,
          "text": "Duration : 8 seconds"
        },
        {
          "level": 6,
          "text": "Duration : 9 seconds"
        },
        {
          "level": 7,
          "text": "Duration : 10 seconds"
        }
      ],
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "3 seconds",
      "castDelay": "1 second",
      "cooldown": "60 seconds",
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
              "value": "100"
            },
            {
              "level": 3,
              "value": "110"
            },
            {
              "level": 4,
              "value": "120"
            },
            {
              "level": 5,
              "value": "130"
            },
            {
              "level": 6,
              "value": "140"
            },
            {
              "level": 7,
              "value": "150"
            }
          ]
        }
      ],
      "spCost": "80 + (Skill Level x 10)",
      "duration": "(3 + Skill Level) seconds",
      "areaOfEffect": "7 x 7 11 x 11 (with Commune with Kisul )",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5442.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5442",
      "tree": {
        "idx": 24,
        "row": 3,
        "col": 3,
        "columns": 7,
        "requirements": [
          {
            "id": 5433,
            "level": 5,
            "name": "Mystical Creature Mastery",
            "visible": true
          },
          {
            "id": 5440,
            "level": 2,
            "name": "Marine Festival of Kisul",
            "visible": true
          },
          {
            "id": 5441,
            "level": 2,
            "name": "Sandy Festival of Kisul",
            "visible": true
          }
        ]
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Active Skill"
          },
          {
            "label": "Levels",
            "value": "7"
          },
          {
            "label": "SP Cost",
            "value": "80 + (Skill Level x 10)"
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
            "value": "60 seconds"
          },
          {
            "label": "Target",
            "value": "Instant Cast"
          },
          {
            "label": "Area of Effect",
            "value": "7 x 7 11 x 11 (with Commune with Kisul )"
          },
          {
            "label": "Pulse",
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
                "id": "duration",
                "label": "Duration"
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "duration": "4 seconds",
                  "sp-cost": "90"
                }
              },
              {
                "level": 2,
                "values": {
                  "duration": "5 seconds",
                  "sp-cost": "100"
                }
              },
              {
                "level": 3,
                "values": {
                  "duration": "6 seconds",
                  "sp-cost": "110"
                }
              },
              {
                "level": 4,
                "values": {
                  "duration": "7 seconds",
                  "sp-cost": "120"
                }
              },
              {
                "level": 5,
                "values": {
                  "duration": "8 seconds",
                  "sp-cost": "130"
                }
              },
              {
                "level": 6,
                "values": {
                  "duration": "9 seconds",
                  "sp-cost": "140"
                }
              },
              {
                "level": 7,
                "values": {
                  "duration": "10 seconds",
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
          "skillName": "Kisul Rampage",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/spirit-handler/rebalance_3.md",
          "section": "17.4",
          "notes": [
            "Reduces AP recovery rate from 3/6 to 2/4."
          ],
          "specRows": [
            {
              "label": "AP Generated",
              "before": "3/6",
              "after": "2/4",
              "scope": "",
              "source": "Reduces AP recovery rate from 3/6 to 2/4."
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
      "id": 5446,
      "imageFile": "5446.png",
      "name": "Hyunrok Cannon",
      "maxLevel": 7,
      "prerequisiteText": "Mystical Creature Mastery 5, Hyunrok Breeze 3",
      "group": "Active",
      "type": "Magic",
      "target": "Single Target",
      "recoversAp": "1, 2(if Commune With Hyunrok is learned)",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Hyunrok_Cannon",
      "description": "Using the mysterious power of Hyunrok, fires a powerful magic cannon at the target.\nDeals additional damage depends on level of Mystical Creature Mastery user learned, user's base level and SPL.\nIf the user learned Commune With Hyunrok, increases skill damage and increases AP recovery amount.\nDamage property can be changed according to Colors of Hyunrok.",
      "levelDetails": [
        {
          "level": 1,
          "text": "MATK 2600+(Mystical Creature Mastery Lv x50)%\nMATK(Commune) 2900+(Mystical Creature Mastery Lv x75)%"
        },
        {
          "level": 2,
          "text": "MATK 4150+(Mystical Creature Mastery Lv x50)%\nMATK(Commune) 4750+(Mystical Creature Mastery Lv x75)%"
        },
        {
          "level": 3,
          "text": "MATK 5700+(Mystical Creature Mastery Lv x50)%\nMATK(Commune) 6600+(Mystical Creature Mastery Lv x75)%"
        },
        {
          "level": 4,
          "text": "MATK 7250+(Mystical Creature Mastery Lv x50)%\nMATK(Commune) 8450+(Mystical Creature Mastery Lv x75)%"
        },
        {
          "level": 5,
          "text": "MATK 8800+(Mystical Creature Mastery Lv x50)%\nMATK(Commune) 10300+(Mystical Creature Mastery Lv x75)%"
        },
        {
          "level": 6,
          "text": "MATK 10350+(Mystical Creature Mastery Lv x50)%\nMATK(Commune) 12150+(Mystical Creature Mastery Lv x75)%"
        },
        {
          "level": 7,
          "text": "MATK 11900+(Mystical Creature Mastery Lv x50)%\nMATK(Commune) 14000+(Mystical Creature Mastery Lv x75)%"
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
              "value": "50"
            },
            {
              "level": 3,
              "value": "53"
            },
            {
              "level": 4,
              "value": "56"
            },
            {
              "level": 5,
              "value": "59"
            },
            {
              "level": 6,
              "value": "62"
            },
            {
              "level": 7,
              "value": "65"
            }
          ]
        }
      ],
      "spCost": "41 + (Skill Level × 3)",
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "2 seconds",
      "cooldown": "0.3 seconds",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5446.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5446",
      "tree": {
        "idx": 26,
        "row": 3,
        "col": 5,
        "columns": 7,
        "requirements": [
          {
            "id": 5433,
            "level": 5,
            "name": "Mystical Creature Mastery",
            "visible": true
          },
          {
            "id": 5445,
            "level": 3,
            "name": "Hyunrok Breeze",
            "visible": true
          }
        ]
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Active Skill"
          },
          {
            "label": "Levels",
            "value": "7"
          },
          {
            "label": "SP Cost",
            "value": "41 + (Skill Level × 3)"
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
            "label": "Cooldown",
            "value": "0.3 seconds"
          },
          {
            "label": "Target",
            "value": "Single Target"
          },
          {
            "label": "AP Generated",
            "value": "1, 2(if Commune With Hyunrok is learned)"
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
                  "sp-cost": "50"
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
                  "sp-cost": "56"
                }
              },
              {
                "level": 5,
                "values": {
                  "sp-cost": "59"
                }
              },
              {
                "level": 6,
                "values": {
                  "sp-cost": "62"
                }
              },
              {
                "level": 7,
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
          "skillName": "Hyunrok Cannon",
          "versionId": "rebalance-2",
          "versionLabel": "Rebalance 2",
          "file": "rebalances/spirit-handler/rebalance_2.md",
          "section": "18.7",
          "notes": [
            "Removes 0.5 seconds delay after skill.",
            "Increases SP consumption from 62 to 74 based on level 7.",
            "Increases damage from 3400%/4400%(Commune With Hyunrok)Matk to 7300%/8500%(Commune With Hyunrok)Matk based on level 7."
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
              "before": "62",
              "after": "74",
              "scope": "Lv 7",
              "source": "Increases SP consumption from 62 to 74 based on level 7."
            },
            {
              "label": "Damage",
              "before": "3400%/4400%(Commune With Hyunrok)Matk",
              "after": "7300%/8500%(Commune With Hyunrok)Matk",
              "scope": "Lv 7",
              "source": "Increases damage from 3400%/4400%(Commune With Hyunrok)Matk to 7300%/8500%(Commune With Hyunrok)Matk based on level 7."
            }
          ]
        },
        {
          "skillName": "Hyunrok Cannon",
          "versionId": "rebalance-3",
          "versionLabel": "Rebalance 3",
          "file": "rebalances/spirit-handler/rebalance_3.md",
          "section": "17.6",
          "notes": [
            "Increases cast range from 9 cells to 11 cells.",
            "Reduces SP consumption from 74 to 65 based on level 7.",
            "Increases base damage from 7350%/8500%Matk to 11900%/14000%Matk based on level 7."
          ],
          "specRows": [
            {
              "label": "Cast Range",
              "before": "9 cells",
              "after": "11 cells",
              "scope": "",
              "source": "Increases cast range from 9 cells to 11 cells."
            },
            {
              "label": "SP Cost",
              "before": "74",
              "after": "65",
              "scope": "Lv 7",
              "source": "Reduces SP consumption from 74 to 65 based on level 7."
            },
            {
              "label": "Damage",
              "before": "7350%/8500%Matk",
              "after": "11900%/14000%Matk",
              "scope": "Lv 7",
              "source": "Increases base damage from 7350%/8500%Matk to 11900%/14000%Matk based on level 7."
            }
          ]
        },
        {
          "skillName": "Hyunrok Cannon",
          "versionId": "rebalance-4",
          "versionLabel": "Rebalance 4",
          "file": "rebalances/spirit-handler/rebalance_4.md",
          "section": "18.2",
          "notes": [
            "Increases base damage from 11900+(Mystical Creature level x 50)%/14000+(Mystical Creature level x 75)%(Commune With Hyunrok)Matk to 15450+(Mystical Creature level x 50)%/18250+(Mystical Creature level x 75)%(Commune With Hyunrok)Matk based on level 7."
          ],
          "specRows": [
            {
              "label": "Damage",
              "before": "11900+(Mystical Creature level x 50)%/14000+(Mystical Creature level x 75)%(Commune With Hyunrok)Matk",
              "after": "15450+(Mystical Creature level x 50)%/18250+(Mystical Creature level x 75)%(Commune With Hyunrok)Matk",
              "scope": "Lv 7",
              "source": "Increases base damage from 11900+(Mystical Creature level x 50)%/14000+(Mystical Creature level x 75)%(Commune With Hyunrok)Matk to 15450+(Mystical Creature level x 50)%/18250+(Mystical Creature level x 75)%(Commune With Hyunrok)Matk based on level 7."
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
      "id": 5507,
      "imageFile": "5507.png",
      "name": "Hyunrok Spirit Power",
      "maxLevel": 7,
      "prerequisiteText": "Mystical Creature Mastery level 7, Hyunrok Breeze level 5",
      "group": "Active",
      "type": "Magic",
      "target": "Single target",
      "recoversAp": "1",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "",
      "description": "Unleashes the powerful spirit power of Hyunrok to inflicts neutral property magical damage to the target and surrounding enemies around the target for 7 hits.\nDeals additional damage depends on level of Mystical Creature Mastery user learned, user's base level and SPL.\nDamage property can be changed according to Colors of Hyunrok.",
      "levelDetails": [
        {
          "level": 1,
          "text": "(550 + (Mystical Creature Mastery level x 30))% Matk per hit / 5 x 5 cells."
        },
        {
          "level": 2,
          "text": "(750 + (Mystical Creature Mastery level x 30))% Matk per hit / 5 x 5 cells."
        },
        {
          "level": 3,
          "text": "(950 + (Mystical Creature Mastery level x 30))% Matk per hit / 5 x 5 cells."
        },
        {
          "level": 4,
          "text": "(1150 + (Mystical Creature Mastery level x 30))% Matk per hit / 7 x 7 cells."
        },
        {
          "level": 5,
          "text": "(1350 + (Mystical Creature Mastery level x 30))% Matk per hit / 7 x 7 cells."
        },
        {
          "level": 6,
          "text": "(1550 + (Mystical Creature Mastery level x 30))% Matk per hit / 7 x 7 cells."
        },
        {
          "level": 7,
          "text": "(1750 + (Mystical Creature Mastery level x 30))% Matk per hit / 9 x 9 cells."
        }
      ],
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "2 seconds",
      "castDelay": "0.7 seconds",
      "cooldown": "1 second",
      "levelExtras": [],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5507.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5507",
      "tree": {
        "idx": 27,
        "row": 3,
        "col": 6,
        "columns": 7,
        "requirements": [
          {
            "id": 5433,
            "level": 7,
            "name": "Mystical Creature Mastery",
            "visible": true
          },
          {
            "id": 5445,
            "level": 5,
            "name": "Hyunrok Breeze",
            "visible": true
          }
        ]
      },
      "details": {
        "rows": [
          {
            "label": "Type",
            "value": "Active Skill"
          },
          {
            "label": "Levels",
            "value": "7"
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
            "value": "0.7 seconds"
          },
          {
            "label": "Cooldown",
            "value": "1 second"
          },
          {
            "label": "Target",
            "value": "Single target"
          },
          {
            "label": "AP Generated",
            "value": "1"
          },
          {
            "label": "Property",
            "value": "neutral property magical damage"
          }
        ],
        "levelTables": []
      },
      "balanceNotes": [
        {
          "skillName": "Hyunrok Spirit Power",
          "versionId": "rebalance-5",
          "versionLabel": "Rebalance 5",
          "file": "rebalances/spirit-handler/added_skills.md",
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
      "id": 5434,
      "imageFile": "5434.png",
      "name": "Commune with Chulho",
      "maxLevel": 1,
      "prerequisiteText": "Mystical Creature Mastery 7, Hogogong Strike 3",
      "group": "Passive",
      "type": "",
      "target": "",
      "recoversAp": "",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Commune_with_Chulho",
      "description": "Empowers the skills that borrow the power from Chulho through perfect communion with the mystical creature Chulho.",
      "levelDetails": [],
      "levelExtras": [],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5434.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5434",
      "tree": {
        "idx": 29,
        "row": 4,
        "col": 1,
        "columns": 7,
        "requirements": [
          {
            "id": 5433,
            "level": 7,
            "name": "Mystical Creature Mastery",
            "visible": true
          },
          {
            "id": 5437,
            "level": 3,
            "name": "Hogogong Strike",
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
      "id": 5438,
      "imageFile": "5438.png",
      "name": "Commune with Kisul",
      "maxLevel": 1,
      "prerequisiteText": "Mystical Creature Mastery 7, Kisul Rampage 3",
      "group": "Passive",
      "type": "",
      "target": "",
      "recoversAp": "",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Commune_with_Kisul",
      "description": "Empowers the skills that borrow the power from Kisul through perfect communion with the mystical creature Kisul.",
      "levelDetails": [],
      "levelExtras": [],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5438.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5438",
      "tree": {
        "idx": 31,
        "row": 4,
        "col": 3,
        "columns": 7,
        "requirements": [
          {
            "id": 5433,
            "level": 7,
            "name": "Mystical Creature Mastery",
            "visible": true
          },
          {
            "id": 5442,
            "level": 3,
            "name": "Kisul Rampage",
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
      "id": 5443,
      "imageFile": "5443.png",
      "name": "Commune with Hyunrok",
      "maxLevel": 1,
      "prerequisiteText": "Mystical Creature Mastery 7, Hyunrok Cannon 3",
      "group": "Passive",
      "type": "",
      "target": "",
      "recoversAp": "",
      "consumesAp": "",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Commune_with_Hyunrok",
      "description": "Empowers the skills that borrow the power from Hyunrok through perfect communion with the mystical creature Hyunrok.",
      "levelDetails": [],
      "levelExtras": [],
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5443.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5443",
      "tree": {
        "idx": 33,
        "row": 4,
        "col": 5,
        "columns": 7,
        "requirements": [
          {
            "id": 5433,
            "level": 7,
            "name": "Mystical Creature Mastery",
            "visible": true
          },
          {
            "id": 5446,
            "level": 3,
            "name": "Hyunrok Cannon",
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
      "id": 5447,
      "imageFile": "5447.png",
      "name": "Temporary Communion",
      "maxLevel": 5,
      "prerequisiteText": "Mystical Creature Mastery 10",
      "group": "Active(AP)",
      "type": "Supportive",
      "target": "Instant Cast",
      "recoversAp": "",
      "consumesAp": "150",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Temporary_Communion",
      "description": "Can be used if you have acquired at least one spirit communication skill for Chulho, Kisul, and Hyunrok.\nThrough the temporary communion with Chulho, Kisul and Hyunrok, the user is in the state of communion of all three mystical creatures for the certain duration.\nIncreases P.Atk, S.Matk and H.Plus for the duration.",
      "levelDetails": [
        {
          "level": 1,
          "text": "Duration: 30sec/P.ATK/S.MATK/H.PLUS +3"
        },
        {
          "level": 2,
          "text": "Duration: 60sec/P.ATK/S.MATK/H.PLUS +6"
        },
        {
          "level": 3,
          "text": "Duration: 90sec/P.ATK/S.MATK/H.PLUS +9"
        },
        {
          "level": 4,
          "text": "Duration: 120sec/P.ATK/S.MATK/H.PLUS +12"
        },
        {
          "level": 5,
          "text": "Duration: 150sec/P.ATK/S.MATK/H.PLUS +15"
        }
      ],
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "2 seconds",
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
            }
          ]
        }
      ],
      "spCost": "100",
      "duration": "30 ~ 150 seconds",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5447.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5447",
      "tree": {
        "idx": 37,
        "row": 5,
        "col": 2,
        "columns": 7,
        "requirements": [
          {
            "id": 5433,
            "level": 10,
            "name": "Mystical Creature Mastery",
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
            "label": "SP Cost",
            "value": "100"
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
            "value": "0.5 seconds"
          },
          {
            "label": "Cooldown",
            "value": "60 seconds"
          },
          {
            "label": "Target",
            "value": "Instant Cast"
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
                "id": "h-plus",
                "label": "H.Plus"
              },
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
                  "p-atk": "+3",
                  "s-matk": "+3",
                  "h-plus": "+3",
                  "sp-cost": "100"
                }
              },
              {
                "level": 2,
                "values": {
                  "duration": "60 seconds",
                  "p-atk": "+6",
                  "s-matk": "+6",
                  "h-plus": "+6",
                  "sp-cost": "100"
                }
              },
              {
                "level": 3,
                "values": {
                  "duration": "90 seconds",
                  "p-atk": "+9",
                  "s-matk": "+9",
                  "h-plus": "+9",
                  "sp-cost": "100"
                }
              },
              {
                "level": 4,
                "values": {
                  "duration": "120 seconds",
                  "p-atk": "+12",
                  "s-matk": "+12",
                  "h-plus": "+12",
                  "sp-cost": "100"
                }
              },
              {
                "level": 5,
                "values": {
                  "duration": "150 seconds",
                  "p-atk": "+15",
                  "s-matk": "+15",
                  "h-plus": "+15",
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
        "status": "not-used",
        "entries": [],
        "selectedEntry": null
      }
    },
    {
      "id": 5448,
      "imageFile": "5448.png",
      "name": "Blessing of Mystical Creatures",
      "maxLevel": 5,
      "prerequisiteText": "Mystical Creature Mastery 10, Commune with Kisul 1",
      "group": "Active(AP)",
      "type": "Supportive",
      "target": "Single Target",
      "recoversAp": "",
      "consumesAp": "100",
      "ammunition": "",
      "irowikiUrl": "https://irowiki.org/wiki/Blessing_of_Mystical_Creatures",
      "description": "Gives the blessing of spiritual creatures to the Doram tribe and one party member other than yourself. Sets the target's AP to 200 and increases P.ATK and S.MATK for 10 seconds.\nWhen the effect time ends, AP becomes 0 and you cannot receive the blessings of spirits again for 1 minute.",
      "levelDetails": [
        {
          "level": 1,
          "text": "P.ATK/S.MATK +10"
        },
        {
          "level": 2,
          "text": "P.ATK/S.MATK +20"
        },
        {
          "level": 3,
          "text": "P.ATK/S.MATK +30"
        },
        {
          "level": 4,
          "text": "P.ATK/S.MATK +40"
        },
        {
          "level": 5,
          "text": "P.ATK/S.MATK +50"
        }
      ],
      "fixedCastTime": "1.5 seconds",
      "variableCastTime": "2 seconds",
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
            }
          ]
        }
      ],
      "spCost": "100",
      "duration": "10 seconds",
      "translations": {},
      "apiStatus": "not-used",
      "iconUrl": "assets/divine-pride/skills/5448.png",
      "sourceUrl": "https://www.divine-pride.net/database/skill/5448",
      "tree": {
        "idx": 39,
        "row": 5,
        "col": 4,
        "columns": 7,
        "requirements": [
          {
            "id": 5433,
            "level": 10,
            "name": "Mystical Creature Mastery",
            "visible": true
          },
          {
            "id": 5438,
            "level": 1,
            "name": "Commune with Kisul",
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
            "label": "SP Cost",
            "value": "100"
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
            "value": "0.5 seconds"
          },
          {
            "label": "Cooldown",
            "value": "60 seconds"
          },
          {
            "label": "Target",
            "value": "Single Target"
          },
          {
            "label": "Duration",
            "value": "10 seconds"
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
              }
            ],
            "rows": [
              {
                "level": 1,
                "values": {
                  "p-atk": "+10",
                  "s-matk": "+10",
                  "sp-cost": "100"
                }
              },
              {
                "level": 2,
                "values": {
                  "p-atk": "+20",
                  "s-matk": "+20",
                  "sp-cost": "100"
                }
              },
              {
                "level": 3,
                "values": {
                  "p-atk": "+30",
                  "s-matk": "+30",
                  "sp-cost": "100"
                }
              },
              {
                "level": 4,
                "values": {
                  "p-atk": "+40",
                  "s-matk": "+40",
                  "sp-cost": "100"
                }
              },
              {
                "level": 5,
                "values": {
                  "p-atk": "+50",
                  "s-matk": "+50",
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
        "status": "not-used",
        "entries": [],
        "selectedEntry": null
      }
    }
  ]
};

export default spiritHandlerData;
